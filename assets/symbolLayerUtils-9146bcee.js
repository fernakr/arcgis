import{bY as v,s as n,a9 as y,_ as b,bZ as c,bs as p,b_ as w,a_ as l}from"./index-994ee346.js";let s=f();function f(){return new v(50)}function T(){s=f()}async function x(r,o){var i,t;if((i=r.resource)!=null&&i.href)return _(r.resource.href).then(e=>[e.width,e.height]);if((t=r.resource)!=null&&t.primitive)return o!=null?[o,o]:[256,256];throw new n("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function _(r){return y(r,{responseType:"image"}).then(o=>o.data)}async function B(r,o=null){var t;if(!r.isPrimitive){const e=r.resource.href;if(!e)throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const a=s.get(e);if(a!==void 0)return a;const{fetch:h}=await b(()=>import("./objectResourceUtils-ad06f35d.js").then(d=>d.o),["assets/objectResourceUtils-ad06f35d.js","assets/index-994ee346.js","assets/index-5fc74f97.css","assets/mat3f64-221ce671.js","assets/mat4f64-1413b4a7.js","assets/BufferView-6414e2cb.js","assets/vec32-13f407e7.js","assets/DefaultMaterial_COLOR_GAMMA-e0140aeb.js","assets/enums-bdecffa2.js","assets/quat-3efa11c3.js","assets/quatf64-3363c48e.js","assets/resourceUtils-5b0640c2.js","assets/basicInterfaces-11f56cb3.js","assets/Indices-32ffd953.js","assets/NestedMap-1b5db22e.js","assets/requestImageUtils-0f29afda.js","assets/triangle-8f347a10.js","assets/sphere-1be2af97.js","assets/ByteSizeUnit-d4757d40.js","assets/lineSegment-954fcf63.js","assets/VertexAttribute-0e674613.js","assets/Texture-184d16e2.js","assets/InterleavedLayout-ecc7eb2f.js","assets/types-1305598a.js","assets/OrderIndependentTransparency-6ae10952.js","assets/orientedBoundingBox-9ea92a8e.js","assets/plane-9b4d46ac.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/FramebufferObject-d85900a3.js","assets/RenderState-1d6218ee.js"]),m=await h(e,{disableTextures:!0}),u=c(m.referenceBoundingBox,l());return s.put(e,u),u}if(!((t=r.resource)!=null&&t.primitive))throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const i=p(w(r.resource.primitive));if(o!=null)for(let e=0;e<i.length;e++)i[e]*=o;return c(i,l())}export{T as clearBoundingBoxCache,x as computeIconLayerResourceSize,B as computeObjectLayerResourceSize};