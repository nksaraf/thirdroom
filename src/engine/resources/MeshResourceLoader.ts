import { BufferGeometry, Mesh, Material } from "three";

import { loadResource, ResourceDefinition, ResourceLoader, ResourceManager } from "./ResourceManager";

export const MESH_RESOURCE = "mesh";

export interface MeshDefinition extends ResourceDefinition {
  type: typeof MESH_RESOURCE;
  geometryResourceId: number;
  materialResourceId: number;
  castShadow: boolean;
  receiveShadow: boolean;
}

export function MeshResourceLoader(manager: ResourceManager): ResourceLoader<MeshDefinition, Mesh> {
  return {
    type: MESH_RESOURCE,
    async load(def) {
      const [geometry, material] = await Promise.all([
        loadResource<BufferGeometry>(manager, def.geometryResourceId),
        loadResource<Material>(manager, def.materialResourceId),
      ]);

      const mesh = new Mesh(geometry, material);

      if (def.name) {
        mesh.name = def.name;
      }

      if (def.castShadow) {
        mesh.castShadow = def.castShadow;
      }

      if (def.receiveShadow) {
        mesh.receiveShadow = def.receiveShadow;
      }

      return {
        name: def.name,
        resource: mesh,
      };
    },
  };
}
