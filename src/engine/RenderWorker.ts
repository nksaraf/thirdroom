import {
  AmbientLight,
  WebGLRenderer,
  Scene,
  Object3D,
  PerspectiveCamera,
  Quaternion,
  Clock,
  Vector3,
  Matrix4,
  Camera,
  ACESFilmicToneMapping,
  PCFSoftShadowMap,
  sRGBEncoding,
  Color,
} from "three";

import { createCursorBuffer, addView, addViewMatrix4, CursorBuffer } from "./allocator/CursorBuffer";
import { swapReadBuffer, getReadBufferIndex } from "./TripleBuffer";
import { maxEntities, tickRate } from "./config";
import {
  createResourceManager,
  onAddResourceRef,
  onLoadResource,
  onRemoveResourceRef,
  registerResourceLoader,
  ResourceManager,
  ResourceState,
} from "./resources/ResourceManager";
import { GLTFResourceLoader } from "./gltf/GLTFResourceLoader";
import { MeshResourceLoader } from "./resources/MeshResourceLoader";
import { MaterialResourceLoader } from "./resources/MaterialResourceLoader";
import { GeometryResourceLoader } from "./resources/GeometryResourceLoader";
import { CameraResourceLoader } from "./resources/CameraResourceLoader";
import {
  AddRenderableMessage,
  InitializeRenderWorkerMessage,
  RemoveRenderableMessage,
  RenderWorkerResizeMessage,
  WorkerMessages,
  WorkerMessageType,
  StartRenderWorkerMessage,
  RenderWorkerErrorMessage,
  RenderWorkerInitializedMessage,
  RenderableMessages,
  SetActiveCameraMessage,
  SetActiveSceneMessage,
  PostMessageTarget,
  ExportGLTFMessage,
} from "./WorkerMessage";
import { TripleBufferState } from "./TripleBuffer";
import { SceneResourceLoader } from "./resources/SceneResourceLoader";
import { TextureResourceLoader } from "./resources/TextureResourceLoader";
import { LightResourceLoader } from "./resources/LightResourceLoader";
import { exportSceneAsGLTF } from "./gltf/GLTFExporter";
import { createStatsBuffer, StatsBuffer, writeRenderWorkerStats } from "./stats";

let localEventTarget: EventTarget | undefined;

const isWorker = typeof (window as any) === "undefined";

if (isWorker) {
  self.window = self;
  globalThis.addEventListener("message", onMessage);
} else {
  localEventTarget = new EventTarget();
}

// outbound RenderThread -> MainThread
function postToMainThread(data: any, transfer?: (Transferable | OffscreenCanvas)[]) {
  if (isWorker) {
    (globalThis as any).postMessage(data, transfer);
  } else {
    localEventTarget!.dispatchEvent(new MessageEvent("message", { data }));
  }
}

// inbound MainThread -> RenderThread
export default {
  postMessage: (data: any) => onMessage({ data }),
  addEventListener: (
    type: string,
    callback: EventListenerOrEventListenerObject | null,
    options?: AddEventListenerOptions | boolean
  ): void => localEventTarget!.addEventListener(type, callback, options),
  removeEventListener: (
    type: string,
    callback: EventListenerOrEventListenerObject | null,
    options?: EventListenerOptions | boolean
  ): void => localEventTarget!.removeEventListener(type, callback, options),
};

interface TransformView {
  worldMatrix: Float32Array[];
  worldMatrixNeedsUpdate: Uint8Array;
}

interface RenderableView {
  resourceId: Uint32Array;
  interpolate: Uint8Array;
  visible: Uint8Array;
}

interface Renderable {
  object?: Object3D;
  eid: number;
  resourceId: number;
}

export interface RenderWorkerState {
  needsResize: boolean;
  canvasWidth: number;
  canvasHeight: number;
  scene: Object3D;
  camera: Camera;
  renderer: WebGLRenderer;
  clock: Clock;
  resourceManager: ResourceManager;
  renderableMessageQueue: RenderableMessages[];
  renderables: Renderable[];
  renderableIndices: Map<number, number>;
  renderableTripleBuffer: TripleBufferState;
  transformViews: TransformView[];
  renderableViews: RenderableView[];
  gameWorkerMessageTarget: PostMessageTarget;
  statsBuffer: StatsBuffer;
}

let _state: RenderWorkerState;

function onMessage({ data }: any) {
  if (typeof data !== "object") {
    return;
  }

  const message = data as WorkerMessages;

  if (message.type === WorkerMessageType.InitializeRenderWorker) {
    onInit(message)
      .then((s) => {
        _state = s;
        postToMainThread({ type: WorkerMessageType.RenderWorkerInitialized } as RenderWorkerInitializedMessage);
      })
      .catch((error) => {
        console.error(error);
        postToMainThread({ type: WorkerMessageType.RenderWorkerError, error } as RenderWorkerErrorMessage);
      });
    return;
  }

  if (!_state) {
    console.warn(`Render worker not initialized before processing ${message.type}`);
    return;
  }

  switch (message.type) {
    case WorkerMessageType.StartRenderWorker:
      onStart(_state, message);
      break;
    case WorkerMessageType.RenderWorkerResize:
      onResize(_state, message);
      break;
    case WorkerMessageType.AddRenderable:
    case WorkerMessageType.RemoveRenderable:
    case WorkerMessageType.SetActiveCamera:
    case WorkerMessageType.SetActiveScene:
      onRenderableMessage(_state, message);
      break;
    case WorkerMessageType.LoadResource:
      onLoadResource(_state.resourceManager, message);
      break;
    case WorkerMessageType.AddResourceRef:
      onAddResourceRef(_state.resourceManager, message);
      break;
    case WorkerMessageType.RemoveResourceRef:
      onRemoveResourceRef(_state.resourceManager, message);
      break;
    case WorkerMessageType.ExportGLTF:
      onExportGLTF(_state, message);
      break;
  }
}

const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

async function onInit({
  canvasTarget,
  gameWorkerMessageTarget,
  initialCanvasWidth,
  initialCanvasHeight,
  resourceManagerBuffer,
  renderableTripleBuffer,
  statsSharedArrayBuffer,
}: InitializeRenderWorkerMessage): Promise<RenderWorkerState> {
  gameWorkerMessageTarget.addEventListener("message", onMessage);

  if (gameWorkerMessageTarget instanceof MessagePort) {
    gameWorkerMessageTarget.start();
  }

  const statsBuffer = createStatsBuffer(statsSharedArrayBuffer);

  const scene = new Scene();

  // TODO: initialize playerRig from GameWorker
  const camera = new PerspectiveCamera(70, initialCanvasWidth / initialCanvasHeight, 0.1, 1000);
  camera.position.y = 1.6;
  camera.position.z = 50;

  const resourceManager = createResourceManager(resourceManagerBuffer, gameWorkerMessageTarget);
  registerResourceLoader(resourceManager, SceneResourceLoader);
  registerResourceLoader(resourceManager, GeometryResourceLoader);
  registerResourceLoader(resourceManager, TextureResourceLoader);
  registerResourceLoader(resourceManager, MaterialResourceLoader);
  registerResourceLoader(resourceManager, MeshResourceLoader);
  registerResourceLoader(resourceManager, CameraResourceLoader);
  registerResourceLoader(resourceManager, LightResourceLoader);
  registerResourceLoader(resourceManager, GLTFResourceLoader);

  scene.add(new AmbientLight(0xffffff, 0.5));

  // TODO: Send scene/camera resource ids to the GameWorker

  const renderer = new WebGLRenderer({ antialias: true, canvas: canvasTarget });
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.outputEncoding = sRGBEncoding;
  renderer.setSize(initialCanvasWidth, initialCanvasHeight, false);

  // // Set shadowmap
  // if (gl.shadowMap) {
  //   const isBoolean = is.boo(shadows)
  //   if ((isBoolean && gl.shadowMap.enabled !== shadows) || !is.equ(shadows, gl.shadowMap, shallowLoose)) {
  // const old = gl.shadowMap.enabled
  // gl.shadowMap.enabled = !!shadows
  // if (!isBoolean) Object.assign(gl.shadowMap, shadows)
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;
  renderer.shadowMap.needsUpdate = true;

  scene.background = new Color(0xffffff);

  const clock = new Clock();

  const cursorBuffers = renderableTripleBuffer.buffers.map((b) => createCursorBuffer(b));

  const transformViews = cursorBuffers.map(
    (buffer) =>
      ({
        // note: needs synced with renderableBuffer properties in game worker
        // todo: abstract the need to sync structure with renderableBuffer properties
        worldMatrix: addViewMatrix4(buffer, maxEntities),
        worldMatrixNeedsUpdate: addView(buffer, Uint8Array, maxEntities),
      } as TransformView)
  );

  const renderableViews = cursorBuffers.map(
    (buffer) =>
      ({
        resourceId: addView(buffer as unknown as CursorBuffer, Uint32Array, maxEntities),
        interpolate: addView(buffer as unknown as CursorBuffer, Uint8Array, maxEntities),
        visible: addView(buffer as unknown as CursorBuffer, Uint8Array, maxEntities),
      } as RenderableView)
  );

  const state: RenderWorkerState = {
    needsResize: true,
    camera,
    scene,
    renderer,
    clock,
    resourceManager,
    canvasWidth: initialCanvasWidth,
    canvasHeight: initialCanvasHeight,
    renderableMessageQueue: [],
    renderables: [],
    renderableIndices: new Map<number, number>(),
    renderableTripleBuffer,
    transformViews,
    renderableViews,
    gameWorkerMessageTarget,
    statsBuffer,
  };

  console.log("RenderWorker initialized");

  return state;
}

function onStart(state: RenderWorkerState, message: StartRenderWorkerMessage) {
  state.renderer.setAnimationLoop(() => onUpdate(state));
}

const tempMatrix4 = new Matrix4();
const tempPosition = new Vector3();
const tempQuaternion = new Quaternion();
const tempScale = new Vector3();

let staleFrameCounter = 0;
let staleTripleBufferCounter = 0;

function onUpdate(state: RenderWorkerState) {
  const {
    clock,
    needsResize,
    renderer,
    canvasWidth,
    canvasHeight,
    renderableTripleBuffer,
    transformViews,
    renderableViews,
    renderables,
    statsBuffer,
  } = state;

  const start = performance.now();

  processRenderableMessages(state);

  const dt = clock.getDelta();
  const frameRate = 1 / dt;
  const lerpAlpha = clamp(tickRate / frameRate, 0, 1);

  const bufferSwapped = swapReadBuffer(renderableTripleBuffer);

  const bufferIndex = getReadBufferIndex(renderableTripleBuffer);
  const Transform = transformViews[bufferIndex];
  const Renderable = renderableViews[bufferIndex];

  for (let i = 0; i < renderables.length; i++) {
    const { object, eid } = renderables[i];

    if (!object) {
      continue;
    }

    object.visible = !!Renderable.visible[eid];

    if (!Transform.worldMatrixNeedsUpdate[eid]) {
      continue;
    }

    if (Renderable.interpolate[eid]) {
      tempMatrix4.fromArray(Transform.worldMatrix[eid]).decompose(tempPosition, tempQuaternion, tempScale);
      object.position.lerp(tempPosition, lerpAlpha);
      object.quaternion.slerp(tempQuaternion, lerpAlpha);
      object.scale.lerp(tempScale, lerpAlpha);
    } else {
      tempMatrix4.fromArray(Transform.worldMatrix[eid]).decompose(object.position, object.quaternion, object.scale);
      object.matrix.fromArray(Transform.worldMatrix[eid]);
      object.matrixWorld.fromArray(Transform.worldMatrix[eid]);
      object.matrixWorldNeedsUpdate = false;
    }
  }

  if (needsResize && state.camera.type === "PerspectiveCamera") {
    const perspectiveCamera = state.camera as PerspectiveCamera;
    perspectiveCamera.aspect = canvasWidth / canvasHeight;
    perspectiveCamera.updateProjectionMatrix();
    renderer.setSize(canvasWidth, canvasHeight, false);
    state.needsResize = false;
  }

  renderer.render(state.scene, state.camera);

  const end = performance.now();

  const frameDuration = (end - start) / 1000;

  if (bufferSwapped) {
    if (staleTripleBufferCounter > 1) {
      staleFrameCounter++;
    }

    staleTripleBufferCounter = 0;
  } else {
    staleTripleBufferCounter++;
  }

  writeRenderWorkerStats(statsBuffer, dt, frameDuration, renderer, staleFrameCounter);
}

function onResize(state: RenderWorkerState, { canvasWidth, canvasHeight }: RenderWorkerResizeMessage) {
  state.needsResize = true;
  state.canvasWidth = canvasWidth;
  state.canvasHeight = canvasHeight;
}

function onRenderableMessage({ renderableMessageQueue }: RenderWorkerState, message: RenderableMessages) {
  renderableMessageQueue.push(message);
}

function processRenderableMessages(state: RenderWorkerState) {
  const { renderableMessageQueue } = state;

  while (renderableMessageQueue.length) {
    const message = renderableMessageQueue.shift() as RenderableMessages;

    switch (message.type) {
      case WorkerMessageType.AddRenderable:
        onAddRenderable(state, message);
        break;
      case WorkerMessageType.RemoveRenderable:
        onRemoveRenderable(state, message);
        break;
      case WorkerMessageType.SetActiveCamera:
        onSetActiveCamera(state, message);
        break;
      case WorkerMessageType.SetActiveScene:
        onSetActiveScene(state, message);
        break;
    }
  }
}

function onAddRenderable(state: RenderWorkerState, message: AddRenderableMessage) {
  const { resourceId, eid } = message;
  const { renderableMessageQueue, renderableIndices, renderables, scene, resourceManager } = state;
  let renderableIndex = renderableIndices.get(eid);
  const resourceInfo = resourceManager.store.get(resourceId);

  if (!resourceInfo) {
    console.warn(`AddRenderable Error: Unknown resourceId ${resourceId} for eid ${eid}`);
    return;
  }

  if (resourceInfo.state === ResourceState.Loaded) {
    const object = resourceInfo.resource as Object3D;

    if (renderableIndex !== undefined) {
      // Replace an existing renderable on an entity if it changed
      const removed = renderables.splice(renderableIndex, 1, { object, eid, resourceId });

      if (removed.length > 0 && removed[0].object) {
        // Remove the renderable object3D only if it exists
        scene.remove(removed[0].object);
      }
    } else {
      renderableIndex = renderables.length;
      renderableIndices.set(eid, renderables.length);
      renderables.push({ object, eid, resourceId });
    }

    state.scene.add(object);

    return;
  }

  if (resourceInfo.state === ResourceState.Loading) {
    if (renderableIndex !== undefined) {
      // Update the renderable with the new resource id and remove the old object
      const removed = renderables.splice(renderableIndex, 1, { object: undefined, eid, resourceId });

      if (removed.length > 0 && removed[0].object) {
        // Remove the previous renderable object from the scene if it exists
        scene.remove(removed[0].object);
      }
    } else {
      renderableIndex = renderables.length;
      renderableIndices.set(eid, renderables.length);
      renderables.push({ object: undefined, eid, resourceId });
    }

    // Resources that are still loading should be re-queued when they finish loading.
    resourceInfo.promise.finally(() => {
      const index = renderableIndices.get(eid);

      if (index === undefined || renderables[index].resourceId !== message.resourceId) {
        // The resource was changed since it finished loading so avoid queueing it again
        return;
      }

      renderableMessageQueue.push(message);
    });

    return;
  }

  console.warn(
    `AddRenderable Error: resourceId ${resourceId} for eid ${eid} could not be loaded: ${resourceInfo.error}`
  );
}

function onRemoveRenderable(
  { renderableIndices, renderables, scene }: RenderWorkerState,
  { eid }: RemoveRenderableMessage
) {
  const index = renderableIndices.get(eid);

  if (index !== undefined) {
    const removed = renderables.splice(index, 1);
    renderableIndices.delete(eid);

    if (removed.length > 0 && removed[0].object) {
      scene.remove(removed[0].object);
    }
  }
}

function onSetActiveScene(state: RenderWorkerState, { eid, resourceId }: SetActiveSceneMessage) {
  const { resourceManager, scene } = state;
  const resourceInfo = resourceManager.store.get(resourceId);

  if (!resourceInfo || !resourceInfo.resource) {
    console.error(`SetActiveScene Error: Couldn't find resource ${resourceId} for scene ${eid}`);
    return;
  }

  const newScene = resourceInfo.resource as Scene;

  for (const child of scene.children) {
    newScene.add(child);
  }

  state.scene = newScene;
}

function onSetActiveCamera(state: RenderWorkerState, { eid }: SetActiveCameraMessage) {
  const { renderableIndices, renderables } = state;
  const index = renderableIndices.get(eid);

  if (index !== undefined && renderables[index]) {
    state.camera = renderables[index].object as Camera;
  }
}

async function onExportGLTF(state: RenderWorkerState, message: ExportGLTFMessage) {
  const buffer = await exportSceneAsGLTF(state, message);

  postToMainThread({
    type: WorkerMessageType.SaveGLTF,
    buffer,
  });
}
