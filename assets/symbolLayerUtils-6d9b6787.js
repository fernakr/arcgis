import{em as v,s as n,ae as y,_ as p,en as c,bG as b,eo as w,a$ as l}from"./index-12a23f8f.js";let s=f();function f(){return new v(50)}function T(){s=f()}async function x(r,o){var i,t;if((i=r.resource)!=null&&i.href)return _(r.resource.href).then(e=>[e.width,e.height]);if((t=r.resource)!=null&&t.primitive)return o!=null?[o,o]:[256,256];throw new n("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function _(r){return y(r,{responseType:"image"}).then(o=>o.data)}async function B(r,o=null){var t;if(!r.isPrimitive){const e=r.resource.href;if(!e)throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const a=s.get(e);if(a!==void 0)return a;const{fetch:h}=await p(()=>import("./objectResourceUtils-2e84f344.js").then(d=>d.o),["assets/objectResourceUtils-2e84f344.js","assets/devEnvironmentUtils-4eab2a99.js","assets/index-12a23f8f.js","assets/index-298317a1.css","assets/mat3f64-221ce671.js","assets/mat4f64-1413b4a7.js","assets/BufferView-7df6a2c7.js","assets/vec32-ba071736.js","assets/DefaultMaterial_COLOR_GAMMA-5143d979.js","assets/enums-bdecffa2.js","assets/quat-370384ba.js","assets/quatf64-3363c48e.js","assets/resourceUtils-f32062dd.js","assets/basicInterfaces-11f56cb3.js","assets/Indices-cc61e11d.js","assets/NestedMap-1b5db22e.js","assets/requestImageUtils-7382e14d.js","assets/triangle-f0d2542a.js","assets/sphere-220fdb3c.js","assets/ByteSizeUnit-d4757d40.js","assets/lineSegment-6eeb0a73.js","assets/VertexAttribute-0e674613.js","assets/Texture-112dea01.js","assets/InterleavedLayout-2596bf20.js","assets/types-1305598a.js","assets/OrderIndependentTransparency-6ae10952.js","assets/orientedBoundingBox-135df222.js","assets/plane-f4c933fc.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/FramebufferObject-eafad06d.js","assets/RenderState-1d6218ee.js"]),m=await h(e,{disableTextures:!0}),u=c(m.referenceBoundingBox,l());return s.put(e,u),u}if(!((t=r.resource)!=null&&t.primitive))throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const i=b(w(r.resource.primitive));if(o!=null)for(let e=0;e<i.length;e++)i[e]*=o;return c(i,l())}export{T as clearBoundingBoxCache,x as computeIconLayerResourceSize,B as computeObjectLayerResourceSize};
