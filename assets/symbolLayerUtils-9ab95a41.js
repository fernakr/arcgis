import{bY as v,s as n,ad as y,_ as b,bZ as c,bu as p,b_ as w,b0 as l}from"./index-b42b51f4.js";let s=f();function f(){return new v(50)}function T(){s=f()}async function x(r,o){var i,t;if((i=r.resource)!=null&&i.href)return _(r.resource.href).then(e=>[e.width,e.height]);if((t=r.resource)!=null&&t.primitive)return o!=null?[o,o]:[256,256];throw new n("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function _(r){return y(r,{responseType:"image"}).then(o=>o.data)}async function B(r,o=null){var t;if(!r.isPrimitive){const e=r.resource.href;if(!e)throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const a=s.get(e);if(a!==void 0)return a;const{fetch:h}=await b(()=>import("./objectResourceUtils-6d7431fe.js").then(d=>d.o),["assets/objectResourceUtils-6d7431fe.js","assets/index-b42b51f4.js","assets/index-b2fa86da.css","assets/mat3f64-221ce671.js","assets/mat4f64-1413b4a7.js","assets/BufferView-0841c0d0.js","assets/vec32-9a70e1ba.js","assets/DefaultMaterial_COLOR_GAMMA-06ac460f.js","assets/enums-bdecffa2.js","assets/quat-b2a5524a.js","assets/quatf64-3363c48e.js","assets/resourceUtils-90ca4446.js","assets/basicInterfaces-11f56cb3.js","assets/Indices-2a1ead5f.js","assets/NestedMap-1b5db22e.js","assets/requestImageUtils-c891912f.js","assets/triangle-4fdc7812.js","assets/sphere-c76cbd7a.js","assets/ByteSizeUnit-d4757d40.js","assets/lineSegment-de5fe3bb.js","assets/VertexAttribute-0e674613.js","assets/Texture-c4373a43.js","assets/InterleavedLayout-dfdb68ff.js","assets/types-1305598a.js","assets/OrderIndependentTransparency-6ae10952.js","assets/orientedBoundingBox-b3488a6c.js","assets/plane-0b73076d.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/FramebufferObject-d023aa56.js","assets/RenderState-1d6218ee.js"]),m=await h(e,{disableTextures:!0}),u=c(m.referenceBoundingBox,l());return s.put(e,u),u}if(!((t=r.resource)!=null&&t.primitive))throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const i=p(w(r.resource.primitive));if(o!=null)for(let e=0;e<i.length;e++)i[e]*=o;return c(i,l())}export{T as clearBoundingBoxCache,x as computeIconLayerResourceSize,B as computeObjectLayerResourceSize};
