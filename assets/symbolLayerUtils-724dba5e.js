import{bY as v,s as n,ad as y,_ as b,bZ as c,bu as p,b_ as w,b0 as l}from"./index-c6695971.js";let s=f();function f(){return new v(50)}function T(){s=f()}async function x(r,o){var i,t;if((i=r.resource)!=null&&i.href)return _(r.resource.href).then(e=>[e.width,e.height]);if((t=r.resource)!=null&&t.primitive)return o!=null?[o,o]:[256,256];throw new n("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function _(r){return y(r,{responseType:"image"}).then(o=>o.data)}async function B(r,o=null){var t;if(!r.isPrimitive){const e=r.resource.href;if(!e)throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const a=s.get(e);if(a!==void 0)return a;const{fetch:h}=await b(()=>import("./objectResourceUtils-536f2b47.js").then(d=>d.o),["assets/objectResourceUtils-536f2b47.js","assets/index-c6695971.js","assets/index-e46848f7.css","assets/mat3f64-221ce671.js","assets/mat4f64-1413b4a7.js","assets/BufferView-6b84b914.js","assets/vec32-a4889380.js","assets/DefaultMaterial_COLOR_GAMMA-67c3d4d2.js","assets/enums-bdecffa2.js","assets/quat-491ca9c2.js","assets/quatf64-3363c48e.js","assets/resourceUtils-c2d17849.js","assets/basicInterfaces-11f56cb3.js","assets/Indices-b7f6c965.js","assets/NestedMap-1b5db22e.js","assets/requestImageUtils-a93ce298.js","assets/triangle-5bf52a30.js","assets/sphere-e6d1fbc6.js","assets/ByteSizeUnit-d4757d40.js","assets/lineSegment-13c60b46.js","assets/VertexAttribute-0e674613.js","assets/Texture-a461518b.js","assets/InterleavedLayout-c004277f.js","assets/types-1305598a.js","assets/OrderIndependentTransparency-6ae10952.js","assets/orientedBoundingBox-0885213e.js","assets/plane-45cbfd6f.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/FramebufferObject-84a7c94e.js","assets/RenderState-1d6218ee.js"]),m=await h(e,{disableTextures:!0}),u=c(m.referenceBoundingBox,l());return s.put(e,u),u}if(!((t=r.resource)!=null&&t.primitive))throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const i=p(w(r.resource.primitive));if(o!=null)for(let e=0;e<i.length;e++)i[e]*=o;return c(i,l())}export{T as clearBoundingBoxCache,x as computeIconLayerResourceSize,B as computeObjectLayerResourceSize};
