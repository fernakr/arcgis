import{dp as v,s as n,ad as y,_ as p,dq as c,bn as b,dr as w,bV as l}from"./index-8a7d0ddb.js";let s=f();function f(){return new v(50)}function T(){s=f()}async function x(r,o){var i,t;if((i=r.resource)!=null&&i.href)return _(r.resource.href).then(e=>[e.width,e.height]);if((t=r.resource)!=null&&t.primitive)return o!=null?[o,o]:[256,256];throw new n("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function _(r){return y(r,{responseType:"image"}).then(o=>o.data)}async function B(r,o=null){var t;if(!r.isPrimitive){const e=r.resource.href;if(!e)throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const a=s.get(e);if(a!==void 0)return a;const{fetch:h}=await p(()=>import("./objectResourceUtils-48828c56.js").then(m=>m.o),["assets/objectResourceUtils-48828c56.js","assets/devEnvironmentUtils-4eab2a99.js","assets/index-8a7d0ddb.js","assets/index-298317a1.css","assets/mat3f64-221ce671.js","assets/mat4f64-1413b4a7.js","assets/BufferView-accb08af.js","assets/vec32-bbe1deb0.js","assets/DefaultMaterial_COLOR_GAMMA-9f7614b2.js","assets/enums-bdecffa2.js","assets/quat-3df299b7.js","assets/quatf64-3363c48e.js","assets/resourceUtils-8d655182.js","assets/basicInterfaces-11f56cb3.js","assets/Indices-dd344b85.js","assets/NestedMap-1b5db22e.js","assets/requestImageUtils-05ec4cf8.js","assets/triangle-aab061c2.js","assets/sphere-62ce47f0.js","assets/ByteSizeUnit-d4757d40.js","assets/lineSegment-ae5414b7.js","assets/VertexAttribute-0e674613.js","assets/Texture-276891d4.js","assets/InterleavedLayout-b7d0d392.js","assets/types-1305598a.js","assets/OrderIndependentTransparency-6ae10952.js","assets/orientedBoundingBox-43b8acbc.js","assets/plane-fdfe7e57.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/FramebufferObject-bee5421c.js","assets/RenderState-1d6218ee.js"]),d=await h(e,{disableTextures:!0}),u=c(d.referenceBoundingBox,l());return s.put(e,u),u}if(!((t=r.resource)!=null&&t.primitive))throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const i=b(w(r.resource.primitive));if(o!=null)for(let e=0;e<i.length;e++)i[e]*=o;return c(i,l())}export{T as clearBoundingBoxCache,x as computeIconLayerResourceSize,B as computeObjectLayerResourceSize};