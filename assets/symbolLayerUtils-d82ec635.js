import{c1 as v,s as n,a9 as y,_ as p,c2 as c,bz as b,c3 as w,aY as l}from"./index-02c681c0.js";let s=f();function f(){return new v(50)}function T(){s=f()}async function x(r,o){var i,t;if((i=r.resource)!=null&&i.href)return _(r.resource.href).then(e=>[e.width,e.height]);if((t=r.resource)!=null&&t.primitive)return o!=null?[o,o]:[256,256];throw new n("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function _(r){return y(r,{responseType:"image"}).then(o=>o.data)}async function B(r,o=null){var t;if(!r.isPrimitive){const e=r.resource.href;if(!e)throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const a=s.get(e);if(a!==void 0)return a;const{fetch:h}=await p(()=>import("./objectResourceUtils-fafdfed0.js").then(d=>d.o),["assets/objectResourceUtils-fafdfed0.js","assets/index-02c681c0.js","assets/index-298317a1.css","assets/mat3f64-221ce671.js","assets/mat4f64-1413b4a7.js","assets/BufferView-95286fa8.js","assets/vec32-2a2226a8.js","assets/DefaultMaterial_COLOR_GAMMA-b6253323.js","assets/enums-bdecffa2.js","assets/quat-05d11d14.js","assets/quatf64-3363c48e.js","assets/resourceUtils-0ce01db4.js","assets/basicInterfaces-11f56cb3.js","assets/Indices-cbc333fe.js","assets/NestedMap-1b5db22e.js","assets/requestImageUtils-d9eacbde.js","assets/triangle-5e0f8600.js","assets/sphere-bc6c2cfe.js","assets/ByteSizeUnit-d4757d40.js","assets/lineSegment-08a921fe.js","assets/VertexAttribute-0e674613.js","assets/Texture-1b4066a3.js","assets/InterleavedLayout-9cc04d26.js","assets/types-1305598a.js","assets/OrderIndependentTransparency-6ae10952.js","assets/orientedBoundingBox-e6ea8e48.js","assets/plane-d9133c12.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/FramebufferObject-e38d036e.js","assets/RenderState-1d6218ee.js"]),m=await h(e,{disableTextures:!0}),u=c(m.referenceBoundingBox,l());return s.put(e,u),u}if(!((t=r.resource)!=null&&t.primitive))throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const i=b(w(r.resource.primitive));if(o!=null)for(let e=0;e<i.length;e++)i[e]*=o;return c(i,l())}export{T as clearBoundingBoxCache,x as computeIconLayerResourceSize,B as computeObjectLayerResourceSize};