import RAPIER from "@dimforge/rapier3d-compat";
import { Vector3 } from "three";

import { GameState } from "./engine/GameWorker";
import { ActionMappingSystem, ActionType, BindingType } from "./engine/input/ActionMappingSystem";
import {
  createPlayerRig,
  PhysicsCharacterControllerActions,
  PlayerControllerSystem,
} from "./plugins/PhysicsCharacterController";
import { FirstPersonCameraActions, FirstPersonCameraSystem } from "./plugins/FirstPersonCamera";
import { addChild, Transform } from "./engine/component/transform";
import { PhysicsSystem, RigidBody } from "./engine/physics";
import { GeometryType } from "./engine/resources/GeometryResourceLoader";
import { createCube, createDirectionalLight, createScene } from "./engine/prefab";
import { loadRemoteResource } from "./engine/resources/RemoteResourceManager";
import { createGLTFEntity } from "./engine/gltf/GLTFLoader";
import { GLTFLoaderSystem } from "./engine/gltf/GLTFLoaderSystem";
import { RenderableVisibilitySystem } from "./engine/component/renderable";

const rndRange = (min: number, max: number) => Math.random() * (max - min) + min;

export async function init(state: GameState): Promise<void> {
  const { resourceManager, physicsWorld } = state;

  state.input.actionMaps = [
    {
      id: "movement",
      actions: [
        {
          id: "look",
          path: FirstPersonCameraActions.Look,
          type: ActionType.Vector2,
          bindings: [
            {
              type: BindingType.Axes,
              x: "Mouse/movementX",
              y: "Mouse/movementY",
            },
          ],
        },
        {
          id: "move",
          path: PhysicsCharacterControllerActions.Move,
          type: ActionType.Vector2,
          bindings: [
            {
              type: BindingType.DirectionalButtons,
              up: "Keyboard/KeyW",
              down: "Keyboard/KeyS",
              left: "Keyboard/KeyA",
              right: "Keyboard/KeyD",
            },
          ],
        },
        {
          id: "jump",
          path: PhysicsCharacterControllerActions.Jump,
          type: ActionType.Button,
          bindings: [
            {
              type: BindingType.Button,
              path: "Keyboard/Space",
            },
          ],
        },
        {
          id: "crouch",
          path: PhysicsCharacterControllerActions.Crouch,
          type: ActionType.Button,
          bindings: [
            {
              type: BindingType.Button,
              path: "Keyboard/KeyC",
            },
          ],
        },
        {
          id: "sprint",
          path: PhysicsCharacterControllerActions.Sprint,
          type: ActionType.Button,
          bindings: [
            {
              type: BindingType.Button,
              path: "Keyboard/ShiftLeft",
            },
          ],
        },
      ],
    },
  ];

  const scene = createScene(state, {
    environmentMapUrl: "/cubemap/venice_sunset_1k.hdr",
  });

  createDirectionalLight(state, scene);

  const groundColliderDesc = RAPIER.ColliderDesc.cuboid(1000.0, 1, 1000.0);
  physicsWorld.createCollider(groundColliderDesc);

  const geometryResourceId = loadRemoteResource(resourceManager, {
    type: "geometry",
    geometryType: GeometryType.Box,
  });

  for (let i = 0; i < 100; i++) {
    const cube = createCube(state, geometryResourceId);

    const position = Transform.position[cube];
    const rotation = Transform.rotation[cube];

    position[0] = rndRange(-10, 10);
    position[1] = rndRange(5, 50);
    position[2] = rndRange(-10, 10);

    rotation[0] = rndRange(0, 5);
    rotation[1] = rndRange(0, 5);
    rotation[2] = rndRange(0, 5);

    const body = RigidBody.store.get(cube);
    if (body) {
      body.setTranslation(new Vector3().fromArray(position), true);
    }

    addChild(scene, cube);
  }

  //   createGLTFEntity(state, "/gltf/OutdoorFestival/OutdoorFestival.glb", scene);

  const playerRig = createPlayerRig(state);
  addChild(scene, playerRig);

  state.systems.push(
    GLTFLoaderSystem,
    ActionMappingSystem,
    FirstPersonCameraSystem,
    PlayerControllerSystem,
    PhysicsSystem,
    RenderableVisibilitySystem
  );
}
