import { BoxBufferGeometry, PlaneBufferGeometry, BufferGeometry } from "three";

import { ResourceDefinition, ResourceLoader, ResourceManager } from "./ResourceManager";

const GEOMETRY_RESOURCE = "geometry";

export enum GeometryType {
  Box = "box",
  Plane = "plane",
}

export interface IGeometryDefinition extends ResourceDefinition {
  type: "geometry";
  geometryType: string;
}

export interface BoxGeometryDefinition extends IGeometryDefinition {
  geometryType: GeometryType.Box;
  width?: number;
  height?: number;
  depth?: number;
  widthSegments?: number;
  heightSegments?: number;
  depthSegments?: number;
}

export interface PlaneGeometryDefinition extends IGeometryDefinition {
  geometryType: GeometryType.Plane;
  width?: number;
  height?: number;
  widthSegments?: number;
  heightSegments?: number;
}

export type GeometryDefinition = BoxGeometryDefinition | PlaneGeometryDefinition;

export function GeometryResourceLoader(manager: ResourceManager): ResourceLoader<GeometryDefinition, BufferGeometry> {
  return {
    type: GEOMETRY_RESOURCE,
    async load(def) {
      let geometry: BufferGeometry;

      switch (def.geometryType) {
        case GeometryType.Box:
          geometry = new BoxBufferGeometry(
            def.width,
            def.height,
            def.depth,
            def.widthSegments,
            def.heightSegments,
            def.depthSegments
          );
          break;
        case GeometryType.Plane:
          geometry = new PlaneBufferGeometry(def.width, def.height, def.widthSegments, def.heightSegments);
          break;
        default:
          throw new Error(`Unknown geometry type`);
      }

      if (def.name) {
        geometry.name = def.name;
      }

      return {
        name: def.name,
        resource: geometry,
      };
    },
  };
}
