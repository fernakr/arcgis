import{el as v,s as n,af as y,_ as p,em as c,bK as b,en as w,b2 as l}from"./index-beb896e6.js";let s=f();function f(){return new v(50)}function T(){s=f()}async function x(r,o){var i,t;if((i=r.resource)!=null&&i.href)return _(r.resource.href).then(e=>[e.width,e.height]);if((t=r.resource)!=null&&t.primitive)return o!=null?[o,o]:[256,256];throw new n("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function _(r){return y(r,{responseType:"image"}).then(o=>o.data)}async function B(r,o=null){var t;if(!r.isPrimitive){const e=r.resource.href;if(!e)throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const a=s.get(e);if(a!==void 0)return a;const{fetch:h}=await p(()=>import("./objectResourceUtils-82d2b747.js").then(d=>d.o),["assets/objectResourceUtils-82d2b747.js","assets/devEnvironmentUtils-4eab2a99.js","assets/index-beb896e6.js","assets/index-298317a1.css","assets/mat3f64-221ce671.js","assets/mat4f64-1413b4a7.js","assets/BufferView-2495cd19.js","assets/vec32-1c9c0460.js","assets/DefaultMaterial_COLOR_GAMMA-2d7d9ccc.js","assets/enums-bdecffa2.js","assets/quat-ac808f15.js","assets/quatf64-3363c48e.js","assets/resourceUtils-d8e08cff.js","assets/basicInterfaces-11f56cb3.js","assets/Indices-ee4afd1b.js","assets/NestedMap-1b5db22e.js","assets/requestImageUtils-53eb093d.js","assets/triangle-7a3daa30.js","assets/sphere-e0e23b39.js","assets/ByteSizeUnit-d4757d40.js","assets/lineSegment-bcd48143.js","assets/VertexAttribute-0e674613.js","assets/Texture-b333fdd2.js","assets/InterleavedLayout-8fd9a61d.js","assets/types-1305598a.js","assets/OrderIndependentTransparency-6ae10952.js","assets/orientedBoundingBox-967a0a5e.js","assets/plane-e7616dd7.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/FramebufferObject-491629cf.js","assets/RenderState-1d6218ee.js"]),m=await h(e,{disableTextures:!0}),u=c(m.referenceBoundingBox,l());return s.put(e,u),u}if(!((t=r.resource)!=null&&t.primitive))throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const i=b(w(r.resource.primitive));if(o!=null)for(let e=0;e<i.length;e++)i[e]*=o;return c(i,l())}export{T as clearBoundingBoxCache,x as computeIconLayerResourceSize,B as computeObjectLayerResourceSize};