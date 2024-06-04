import{ad as P,he as O,d6 as B,i8 as C,i9 as S,h$ as z,b2 as L,ia as D}from"./index-c43fbcbe.js";import{e as A}from"./mat3f64-221ce671.js";import{p as N,m as q,c as G,g as K,a as Q}from"./meshFeatureSet-ae1b5e78.js";import{c as I,x as F,L as U,O as E,i as j,E as V,T as k,u as H}from"./BufferView-356663f1.js";import{t as J,f as W,i as X,o as M}from"./vec32-a376ffef.js";import{n as Y,l as Z,o as ee,f as te,r as re,a as ne,b as v,c as oe,d as se,e as _,g as ae,h as le,i as ie}from"./DefaultMaterial_COLOR_GAMMA-6695ca95.js";import{e as ue}from"./types-1305598a.js";import{B as ce}from"./georeference-b84c907c.js";import{r as fe}from"./resourceUtils-8372ab95.js";import{D as w}from"./enums-bdecffa2.js";import"./imageUtils-664726db.js";import"./MeshGeoreferencedRelativeVertexSpace-f773ae4a.js";import"./MeshLocalVertexSpace-e835de9f.js";import"./earcut-4c8cd1fc.js";import"./Indices-57c912e4.js";import"./deduplicate-97a2acc5.js";import"./plane-6282c7c8.js";import"./sphere-056a5bef.js";import"./ByteSizeUnit-d4757d40.js";import"./mat4f64-1413b4a7.js";import"./quatf64-3363c48e.js";import"./triangle-525866bd.js";import"./lineSegment-37819b27.js";import"./basicInterfaces-11f56cb3.js";import"./VertexAttribute-0e674613.js";import"./External-1ecb1d25.js";import"./spatialReferenceEllipsoidUtils-3ac109e5.js";import"./quat-7f60254a.js";function me(e,r,t){const i=e.typedBuffer,a=e.typedBufferStride,o=r.typedBuffer,c=r.typedBufferStride,l=t?t.count:r.count;let s=((t==null?void 0:t.dstIndex)??0)*a,f=((t==null?void 0:t.srcIndex)??0)*c;for(let u=0;u<l;++u){for(let n=0;n<9;++n)i[s+n]=o[f+n];s+=a,f+=c}}Object.freeze(Object.defineProperty({__proto__:null,copy:me},Symbol.toStringTag,{value:"Module"}));function pe(e,r,t){const i=e.typedBuffer,a=e.typedBufferStride,o=r.typedBuffer,c=r.typedBufferStride,l=t?t.count:r.count;let s=((t==null?void 0:t.dstIndex)??0)*a,f=((t==null?void 0:t.srcIndex)??0)*c;for(let u=0;u<l;++u){for(let n=0;n<16;++n)i[s+n]=o[f+n];s+=a,f+=c}}Object.freeze(Object.defineProperty({__proto__:null,copy:pe},Symbol.toStringTag,{value:"Module"}));function T(e,r){return new e(new ArrayBuffer(r*e.ElementCount*ue(e.ElementType)))}async function Ze(e,r,t){const i={...t,useTransform:(t==null?void 0:t.useTransform)??!0},a=new Y(de(i)),o=(await Z(a,r,i,!0)).model,c=o.lods.shift(),l=new Map,s=new Map;o.textures.forEach((x,h)=>l.set(h,Te(x))),o.materials.forEach((x,h)=>s.set(h,$e(x,l)));const f=xe(c);for(const x of f.parts)ye(f,x,s);const{position:u,normal:n,tangent:m,color:p,texCoord0:y}=f.vertexAttributes,b={position:u.typedBuffer,normal:n!=null?n.typedBuffer:null,tangent:m!=null?m.typedBuffer:null,uv:y!=null?y.typedBuffer:null,color:p!=null?p.typedBuffer:null},g=ce(b,e,i);return{transform:g.transform,vertexSpace:g.vertexSpace,components:f.components,spatialReference:e.spatialReference,vertexAttributes:new N({position:g.vertexAttributes.position,normal:g.vertexAttributes.normal,tangent:g.vertexAttributes.tangent,color:b.color,uv:b.uv})}}function de(e){const r=e==null?void 0:e.resolveFile,t=e==null?void 0:e.requestFile;return r||t?{busy:!1,request:async(i,a,o)=>{const c=(r==null?void 0:r(i))??i;if(t){const s=await t(c,a,o==null?void 0:o.signal);if(s!==void 0)return s}return(await P(c,{responseType:a==="image"?"image":a==="binary"?"array-buffer":"json",signal:o!=null?o.signal:null})).data}}:null}function $(e,r){if(e==null)return"-";const t=e.typedBuffer;return`${O(r,t.buffer,()=>r.size)}/${t.byteOffset}/${t.byteLength}`}function ge(e){return e!=null?e.toString():"-"}function xe(e){let r=0;const t={color:!1,tangent:!1,normal:!1,texCoord0:!1},i=new Map,a=new Map,o=[];for(const c of e.parts){const{attributes:{position:l,normal:s,color:f,tangent:u,texCoord0:n}}=c,m=`
      ${$(l,i)}/
      ${$(s,i)}/
      ${$(f,i)}/
      ${$(u,i)}/
      ${$(n,i)}/
      ${ge(c.transform)}
    `;let p=!1;const y=O(a,m,()=>(p=!0,{start:r,length:l.count}));p&&(r+=l.count),s&&(t.normal=!0),f&&(t.color=!0),u&&(t.tangent=!0),n&&(t.texCoord0=!0),o.push({gltf:c,writeVertices:p,region:y})}return{vertexAttributes:{position:T(k,r),normal:t.normal?T(j,r):null,tangent:t.tangent?T(I,r):null,color:t.color?T(F,r):null,texCoord0:t.texCoord0?T(H,r):null},parts:o,components:[]}}function Te(e){return new q({data:(fe(e.data),e.data),wrap:ve(e.parameters.wrap)})}function $e(e,r){const t=new B(we(e.color,e.opacity)),i=e.emissiveFactor?new B(Be(e.emissiveFactor)):null,a=o=>o?new Q({scale:o.scale?[o.scale[0],o.scale[1]]:[1,1],rotation:D(o.rotation??0),offset:o.offset?[o.offset[0],o.offset[1]]:[0,0]}):null;return new G({color:t,colorTexture:r.get(e.textureColor),normalTexture:r.get(e.textureNormal),emissiveColor:i,emissiveTexture:r.get(e.textureEmissive),occlusionTexture:r.get(e.textureOcclusion),alphaMode:he(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:r.get(e.textureMetallicRoughness),colorTextureTransform:a(e.colorTextureTransform),normalTextureTransform:a(e.normalTextureTransform),occlusionTextureTransform:a(e.occlusionTextureTransform),emissiveTextureTransform:a(e.emissiveTextureTransform),metallicRoughnessTextureTransform:a(e.metallicRoughnessTextureTransform)})}function ye(e,r,t){r.writeVertices&&be(e,r);const{indices:i,attributes:a,primitiveType:o,material:c}=r.gltf;let l=ee(i||a.position.count,o);const s=r.region.start;if(s){const f=new Uint32Array(l);for(let u=0;u<l.length;u++)f[u]+=s;l=f}e.components.push(new K({name:r.gltf.name,faces:l,material:t.get(c),shading:a.normal?"source":"flat",trustSourceNormals:!0}))}function be(e,r){const{position:t,normal:i,tangent:a,color:o,texCoord0:c}=e.vertexAttributes,l=r.region.start,{attributes:s,transform:f}=r.gltf,u=s.position.count;if(J(t.slice(l,u),s.position,f),s.normal!=null&&i!=null){const n=C(A(),f),m=i.slice(l,u);W(m,s.normal,n),S(n)&&X(m,m)}else i!=null&&te(i,0,0,1,{dstIndex:l,count:u});if(s.tangent!=null&&a!=null){const n=C(A(),f),m=a.slice(l,u);re(m,s.tangent,n),S(n)&&ne(m,m)}else a!=null&&v(a,0,0,1,1,{dstIndex:l,count:u});if(s.texCoord0!=null&&c!=null?oe(c.slice(l,u),s.texCoord0):c!=null&&se(c,0,0,{dstIndex:l,count:u}),s.color!=null&&o!=null){const n=s.color,m=o.slice(l,u);if(n.elementCount===4)n instanceof I?_(m,n,255):n instanceof F?ae(m,n):n instanceof U&&_(m,n,1/256);else{v(m,255,255,255,255);const p=E.fromTypedArray(m.typedBuffer,m.typedBufferStride);n instanceof j?M(p,n,255):n instanceof E?le(p,n):n instanceof V&&M(p,n,1/256)}}else o!=null&&v(o.slice(l,u),255,255,255,255)}function he(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function ve(e){return{horizontal:R(e.s),vertical:R(e.t)}}function R(e){switch(e){case w.CLAMP_TO_EDGE:return"clamp";case w.MIRRORED_REPEAT:return"mirror";case w.REPEAT:return"repeat"}}function d(e){return e**(1/ie)*255}function we(e,r){return z(d(e[0]),d(e[1]),d(e[2]),r)}function Be(e){return L(d(e[0]),d(e[1]),d(e[2]))}export{Ze as loadGLTFMesh};
