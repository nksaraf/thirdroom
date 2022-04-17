import { Camera } from "three";
import { OrbitControls } from "three-stdlib";

import { loadResource, ResourceDefinition, ResourceLoader, ResourceManager } from "./ResourceManager";
const CONTROL_RESOURCE = "controls";

export enum ControlType {
  Perspective = "perspective",
  Orbit = "orthographic",
}

export interface IControlDefinition extends ResourceDefinition {
  type: "Control";
  ControlType: ControlType;
}

export interface PerspectiveControlDefinition extends IControlDefinition {
  ControlType: ControlType.Perspective;
  aspectRatio?: number;
  yfov: number;
  zfar?: number;
  znear: number;
}

export interface OrthographicControlDefinition extends IControlDefinition {
  ControlType: ControlType.Orbit;
  xmag: number;
  ymag: number;
  zfar: number;
  znear: number;
}

export type ControlDefinition = PerspectiveControlDefinition | OrthographicControlDefinition;

export function ControlResourceLoader(manager: ResourceManager): ResourceLoader<ControlDefinition, OrbitControls> {
  return {
    type: CONTROL_RESOURCE,
    async load(def) {
      let control: OrbitControls;
      const [camera] = await Promise.all([loadResource<Camera>(manager, def.cameraRid)]);

      switch (def.controlType) {
        case ControlType.Perspective:
        case ControlType.Orbit:
          control = new OrbitControls(camera, manager.canvas);
          control.onChange(console.log)
        //   Control = new PerspectiveControl(def.yfov, def.aspectRatio || 1, def.znear, def.zfar || 1000);
        //   break;
        // case ControlType.Orthographic:
        //   Control = new OrthographicControl(-def.xmag, def.xmag, def.ymag, -def.ymag, def.znear, def.zfar);
        //   break;
        // default:
        //   throw new Error(`Unknown Control type ${(def as unknown as any).ControlType}`);
      }

      console.log(control.update(), manager.canvas);

      if (def.name) {
        control.name = def.name;
      }

      return {
        name: def.name,
        resource: control,
      };
    },
  };
}
