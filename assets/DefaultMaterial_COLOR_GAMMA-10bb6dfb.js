import{e as Y}from"./vec32-e27ae280.js";import{ft as ie,kL as ue,kM as le,kN as fe,aD as X,aI as ce,kO as Q,a9 as de,aK as pe,bN as me,s as c,ho as he,kP as ye,a7 as Te,he as we,js as ge,kQ as _e,kR as be,jt as xe,ef as Se,hv as W,kS as H,E as P,kT as Ee}from"./index-08b3f6d9.js";import{e as Z,r as k}from"./mat4f64-1413b4a7.js";import{D as j,L as G,C as d,E as O}from"./enums-bdecffa2.js";import{x as Ne}from"./quat-6e55bc41.js";import{e as Oe}from"./quatf64-3363c48e.js";import{B as Ae,g as Re,d as Me,i as V,c as z,u as ee,x as Ce,L as ve,O as Ie,E as Be,F as Le,w as $e,q as Fe,A as Ue,V as De}from"./BufferView-f5a1b151.js";import{n as Pe,t as je,o as Ge,r as Ve}from"./resourceUtils-4efa22da.js";import{l as ke,i as He}from"./Indices-21d6d1de.js";function ze(n,e,r){if(n.count!==e.count)return void Y.error("source and destination buffers need to have the same number of elements");const t=n.count,o=r[0],s=r[1],a=r[2],i=r[3],u=r[4],l=r[5],f=r[6],m=r[7],y=r[8],g=r[9],T=r[10],p=r[11],h=r[12],E=r[13],b=r[14],_=r[15],w=n.typedBuffer,N=n.typedBufferStride,x=e.typedBuffer,C=e.typedBufferStride;for(let M=0;M<t;M++){const A=M*N,R=M*C,I=x[R],B=x[R+1],L=x[R+2],$=x[R+3];w[A]=o*I+u*B+y*L+h*$,w[A+1]=s*I+l*B+g*L+E*$,w[A+2]=a*I+f*B+T*L+b*$,w[A+3]=i*I+m*B+p*L+_*$}}function qe(n,e,r){te(n.typedBuffer,e.typedBuffer,r,n.typedBufferStride,e.typedBufferStride)}function te(n,e,r,t=4,o=t){if(n.length/t!=e.length/o)return void Y.error("source and destination buffers need to have the same number of elements");const s=n.length/t,a=r[0],i=r[1],u=r[2],l=r[3],f=r[4],m=r[5],y=r[6],g=r[7],T=r[8];let p=0,h=0;for(let E=0;E<s;E++){const b=e[p],_=e[p+1],w=e[p+2],N=e[p+3];n[h]=a*b+l*_+y*w,n[h+1]=i*b+f*_+g*w,n[h+2]=u*b+m*_+T*w,n[h+3]=N,p+=o,h+=t}}function Ke(n,e){const r=Math.min(n.count,e.count),t=n.typedBuffer,o=n.typedBufferStride,s=e.typedBuffer,a=e.typedBufferStride;for(let i=0;i<r;i++){const u=i*o,l=i*a,f=s[l],m=s[l+1],y=s[l+2],g=f*f+m*m+y*y;if(g>0){const T=1/Math.sqrt(g);t[u]=T*f,t[u+1]=T*m,t[u+2]=T*y}}}function Je(n,e,r){re(n.typedBuffer,e,r,n.typedBufferStride)}function re(n,e,r,t=4){const o=Math.min(n.length/t,e.count),s=e.typedBuffer,a=e.typedBufferStride;let i=0,u=0;for(let l=0;l<o;l++)n[u]=r*s[i],n[u+1]=r*s[i+1],n[u+2]=r*s[i+2],n[u+3]=r*s[i+3],i+=a,u+=t}Object.freeze(Object.defineProperty({__proto__:null,normalize:Ke,scale:re,scaleView:Je,transformMat3:te,transformMat3View:qe,transformMat4:ze},Symbol.toStringTag,{value:"Module"}));function Ye(n,e){ne(n.typedBuffer,e.typedBuffer,n.typedBufferStride,e.typedBufferStride)}function ne(n,e,r=2,t=r){const o=e.length/2;let s=0,a=0;if(ie(e)||ue(e)){for(let u=0;u<o;++u)n[s]=e[a],n[s+1]=e[a+1],s+=r,a+=t;return}const i=le(e);if(fe(e))for(let u=0;u<o;++u)n[s]=Math.max(e[a]/i,-1),n[s+1]=Math.max(e[a+1]/i,-1),s+=r,a+=t;else for(let u=0;u<o;++u)n[s]=e[a]/i,n[s+1]=e[a+1]/i,s+=r,a+=t}function Xe(n,e,r,t){const o=n.typedBuffer,s=n.typedBufferStride,a=(t==null?void 0:t.count)??n.count;let i=((t==null?void 0:t.dstIndex)??0)*s;for(let u=0;u<a;++u)o[i]=e,o[i+1]=r,i+=s}Object.freeze(Object.defineProperty({__proto__:null,fill:Xe,normalizeIntegerBuffer:ne,normalizeIntegerBufferView:Ye},Symbol.toStringTag,{value:"Module"}));function Qe(n,e){oe(n.typedBuffer,e.typedBuffer,n.typedBufferStride,e.typedBufferStride)}function oe(n,e,r=3,t=r){const o=e.length/t;let s=0,a=0;for(let i=0;i<o;++i)n[s]=e[a],n[s+1]=e[a+1],n[s+2]=e[a+2],s+=r,a+=t}function We(n,e,r,t,o){const s=n.typedBuffer,a=n.typedBufferStride,i=(o==null?void 0:o.count)??n.count;let u=((o==null?void 0:o.dstIndex)??0)*a;for(let l=0;l<i;++l)s[u]=e,s[u+1]=r,s[u+2]=t,u+=a}Object.freeze(Object.defineProperty({__proto__:null,copy:oe,copyView:Qe,fill:We},Symbol.toStringTag,{value:"Module"}));function Ze(n,e){se(n.typedBuffer,e,n.typedBufferStride)}function se(n,e,r=4){const t=e.typedBuffer,o=e.typedBufferStride,s=e.count;let a=0,i=0;for(let u=0;u<s;++u)n[a]=t[i],n[a+1]=t[i+1],n[a+2]=t[i+2],n[a+3]=t[i+3],a+=r,i+=o}function et(n,e,r,t,o,s){const a=n.typedBuffer,i=n.typedBufferStride,u=(s==null?void 0:s.count)??n.count;let l=((s==null?void 0:s.dstIndex)??0)*i;for(let f=0;f<u;++f)a[l]=e,a[l+1]=r,a[l+2]=t,a[l+3]=o,l+=i}Object.freeze(Object.defineProperty({__proto__:null,copy:se,copyView:Ze,fill:et},Symbol.toStringTag,{value:"Module"}));let $t=class{constructor(e){this._streamDataRequester=e}async loadJSON(e,r){return this._load("json",e,r)}async loadBinary(e,r){return X(e)?(ce(r),Q(e)):this._load("binary",e,r)}async loadImage(e,r){return this._load("image",e,r)}async _load(e,r,t){if(this._streamDataRequester==null)return(await de(r,{responseType:tt[e]})).data;const o=await pe(this._streamDataRequester.request(r,e,t));if(o.ok===!0)return o.value;throw me(o.error),new c("",`Request for resource failed: ${o.error}`)}};const tt={image:"image",binary:"array-buffer",json:"json","image+type":void 0};function rt(n={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,colorTextureTransform:null,normalTextureTransform:null,occlusionTextureTransform:null,emissiveTextureTransform:null,metallicRoughnessTextureTransform:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...n}}function nt(n,e={}){return{data:n,parameters:{wrap:{s:j.REPEAT,t:j.REPEAT,...e.wrap},noUnpackFlip:!0,mipmap:!1,...e}}}function D(n,e){const r=n.count;e||(e=new n.TypedArrayConstructor(r));for(let t=0;t<r;t++)e[t]=n.get(t);return e}Object.freeze(Object.defineProperty({__proto__:null,makeDense:D},Symbol.toStringTag,{value:"Module"}));let q=class{constructor(e){this._data=e,this._offset4=0,this._dataUint32=new Uint32Array(this._data,0,Math.floor(this._data.byteLength/4))}readUint32(){const e=this._offset4;return this._offset4+=1,this._dataUint32[e]}readUint8Array(e){const r=4*this._offset4;return this._offset4+=e/4,new Uint8Array(this._data,r,e)}remainingBytes(){return this._data.byteLength-4*this._offset4}};var v,K;(function(n){n.SCALAR="SCALAR",n.VEC2="VEC2",n.VEC3="VEC3",n.VEC4="VEC4",n.MAT2="MAT2",n.MAT3="MAT3",n.MAT4="MAT4"})(v||(v={})),function(n){n[n.ARRAY_BUFFER=34962]="ARRAY_BUFFER",n[n.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(K||(K={}));const ae={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},ot={pbrMetallicRoughness:ae,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},st={ESRI_externalColorMixMode:"tint"},J=(n={})=>{const e={...ae,...n.pbrMetallicRoughness},r=at({...st,...n.extras});return{...ot,...n,pbrMetallicRoughness:e,extras:r}};function at(n){switch(n.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:he(n.ESRI_externalColorMixMode),n.ESRI_externalColorMixMode="tint"}return n}const it={magFilter:G.LINEAR,minFilter:G.LINEAR_MIPMAP_LINEAR,wrapS:j.REPEAT,wrapT:j.REPEAT},ut=n=>({...it,...n});function lt(n){let e,r;return n.replace(/^(.*\/)?([^/]*)$/,(t,o,s)=>(e=o||"",r=s||"","")),{dirPart:e,filePart:r}}const F={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562,MIN_HEADER_LENGTH:20};class S{constructor(e,r,t,o){if(this._context=e,this.uri=r,this.json=t,this._glbBuffer=o,this._bufferLoaders=new Map,this._textureLoaders=new Map,this._textureCache=new Map,this._materialCache=new Map,this._nodeParentMap=new Map,this._nodeTransformCache=new Map,this._supportedExtensions=["KHR_texture_basisu"],this._baseUri=lt(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),t.scenes==null)throw new c("gltf-loader-unsupported-feature","Scenes must be defined.");if(t.meshes==null)throw new c("gltf-loader-unsupported-feature","Meshes must be defined");if(t.nodes==null)throw new c("gltf-loader-unsupported-feature","Nodes must be defined.");this._computeNodeParents()}static async load(e,r,t){if(X(r)){const a=Te(r);if(a&&a.mediaType!=="model/gltf-binary")try{const u=JSON.parse(a.isBase64?atob(a.data):a.data);return new S(e,r,u)}catch{}const i=Q(r);if(S._isGLBData(i))return this._fromGLBData(e,r,i)}if(ht.test(r)||(t==null?void 0:t.expectedType)==="gltf"){const a=await e.loadJSON(r,t);return new S(e,r,a)}const o=await e.loadBinary(r,t);if(S._isGLBData(o))return this._fromGLBData(e,r,o);if(yt.test(r)||(t==null?void 0:t.expectedType)==="glb")throw new c("gltf-loader-invalid-glb","This is not a valid glb file.");const s=await e.loadJSON(r,t);return new S(e,r,s)}static _isGLBData(e){if(e==null)return!1;const r=new q(e);return r.remainingBytes()>=4&&r.readUint32()===F.MAGIC}static async _fromGLBData(e,r,t){const o=await S._parseGLBData(t);return new S(e,r,o.json,o.binaryData)}static async _parseGLBData(e){const r=new q(e);if(r.remainingBytes()<12)throw new c("gltf-loader-error","glb binary data is insufficiently large.");const t=r.readUint32(),o=r.readUint32(),s=r.readUint32();if(t!==F.MAGIC)throw new c("gltf-loader-error","Magic first 4 bytes do not fit to expected glb value.");if(e.byteLength<s)throw new c("gltf-loader-error","glb binary data is smaller than header specifies.");if(o!==2)throw new c("gltf-loader-unsupported-feature","An unsupported glb container version was detected. Only version 2 is supported.");let a,i,u=0;for(;r.remainingBytes()>=8;){const l=r.readUint32(),f=r.readUint32();if(u===0){if(f!==F.CHUNK_TYPE_JSON)throw new c("gltf-loader-error","First glb chunk must be JSON.");if(l<0)throw new c("gltf-loader-error","No JSON data found.");a=await Pe(r.readUint8Array(l))}else if(u===1){if(f!==F.CHUNK_TYPE_BIN)throw new c("gltf-loader-unsupported-feature","Second glb chunk expected to be BIN.");i=r.readUint8Array(l)}else P.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] More than 2 glb chunks detected. Skipping.");u+=1}if(!a)throw new c("gltf-loader-error","No glb JSON chunk detected.");return{json:a,binaryData:i}}async getBuffer(e,r){const t=this.json.buffers[e];if(t.uri==null){if(this._glbBuffer==null)throw new c("gltf-loader-error","glb buffer not present");return this._glbBuffer}const o=await this._getBufferLoader(e,r);if(o.byteLength!==t.byteLength)throw new c("gltf-loader-error","Buffer byte lengths should match.");return o}async _getBufferLoader(e,r){const t=this._bufferLoaders.get(e);if(t)return t;const o=this.json.buffers[e].uri,s=this._context.loadBinary(this._resolveUri(o),r).then(a=>new Uint8Array(a));return this._bufferLoaders.set(e,s),s}async getAccessor(e,r){if(!this.json.accessors)throw new c("gltf-loader-unsupported-feature","Accessors missing.");const t=this.json.accessors[e];if((t==null?void 0:t.bufferView)==null)throw new c("gltf-loader-unsupported-feature","Some accessor does not specify a bufferView.");if(t.type in[v.MAT2,v.MAT3,v.MAT4])throw new c("gltf-loader-unsupported-feature",`AttributeType ${t.type} is not supported`);const o=this.json.bufferViews[t.bufferView],s=await this.getBuffer(o.buffer,r),a=dt[t.type],i=pt[t.componentType],u=a*i,l=o.byteStride||u;return{raw:s.buffer,byteStride:l,byteOffset:s.byteOffset+(o.byteOffset||0)+(t.byteOffset||0),entryCount:t.count,isDenselyPacked:l===u,componentCount:a,componentByteSize:i,componentType:t.componentType,min:t.min,max:t.max,normalized:!!t.normalized}}async getIndexData(e,r){if(e.indices==null)return;const t=await this.getAccessor(e.indices,r);if(t.isDenselyPacked)switch(t.componentType){case d.UNSIGNED_BYTE:return new Uint8Array(t.raw,t.byteOffset,t.entryCount);case d.UNSIGNED_SHORT:return new Uint16Array(t.raw,t.byteOffset,t.entryCount);case d.UNSIGNED_INT:return new Uint32Array(t.raw,t.byteOffset,t.entryCount)}else switch(t.componentType){case d.UNSIGNED_BYTE:return D(this._wrapAccessor(Me,t));case d.UNSIGNED_SHORT:return D(this._wrapAccessor(Re,t));case d.UNSIGNED_INT:return D(this._wrapAccessor(Ae,t))}}async getPositionData(e,r){if(e.attributes.POSITION==null)throw new c("gltf-loader-unsupported-feature","No POSITION vertex data found.");const t=await this.getAccessor(e.attributes.POSITION,r);if(t.componentType!==d.FLOAT)throw new c("gltf-loader-unsupported-feature","Expected type FLOAT for POSITION vertex attribute, but found "+d[t.componentType]);if(t.componentCount!==3)throw new c("gltf-loader-unsupported-feature","POSITION vertex attribute must have 3 components, but found "+t.componentCount.toFixed());return this._wrapAccessor(V,t)}async getNormalData(e,r){if(e.attributes.NORMAL==null)throw new c("gltf-loader-error","No NORMAL vertex data found.");const t=await this.getAccessor(e.attributes.NORMAL,r);if(t.componentType!==d.FLOAT)throw new c("gltf-loader-unsupported-feature","Expected type FLOAT for NORMAL vertex attribute, but found "+d[t.componentType]);if(t.componentCount!==3)throw new c("gltf-loader-unsupported-feature","NORMAL vertex attribute must have 3 components, but found "+t.componentCount.toFixed());return this._wrapAccessor(V,t)}async getTangentData(e,r){if(e.attributes.TANGENT==null)throw new c("gltf-loader-error","No TANGENT vertex data found.");const t=await this.getAccessor(e.attributes.TANGENT,r);if(t.componentType!==d.FLOAT)throw new c("gltf-loader-unsupported-feature","Expected type FLOAT for TANGENT vertex attribute, but found "+d[t.componentType]);if(t.componentCount!==4)throw new c("gltf-loader-unsupported-feature","TANGENT vertex attribute must have 4 components, but found "+t.componentCount.toFixed());return new z(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount)}async getTextureCoordinates(e,r){if(e.attributes.TEXCOORD_0==null)throw new c("gltf-loader-error","No TEXCOORD_0 vertex data found.");const t=await this.getAccessor(e.attributes.TEXCOORD_0,r);if(t.componentCount!==2)throw new c("gltf-loader-unsupported-feature","TEXCOORD_0 vertex attribute must have 2 components, but found "+t.componentCount.toFixed());if(t.componentType===d.FLOAT)return this._wrapAccessor(ee,t);if(!t.normalized)throw new c("gltf-loader-unsupported-feature","Integer component types are only supported for a normalized accessor for TEXCOORD_0.");return mt(t)}async getVertexColors(e,r){if(e.attributes.COLOR_0==null)throw new c("gltf-loader-error","No COLOR_0 vertex data found.");const t=await this.getAccessor(e.attributes.COLOR_0,r);if(t.componentCount!==4&&t.componentCount!==3)throw new c("gltf-loader-unsupported-feature","COLOR_0 attribute must have 3 or 4 components, but found "+t.componentCount.toFixed());if(t.componentCount===4){if(t.componentType===d.FLOAT)return this._wrapAccessor(z,t);if(t.componentType===d.UNSIGNED_BYTE)return this._wrapAccessor(Ce,t);if(t.componentType===d.UNSIGNED_SHORT)return this._wrapAccessor(ve,t)}else if(t.componentCount===3){if(t.componentType===d.FLOAT)return this._wrapAccessor(V,t);if(t.componentType===d.UNSIGNED_BYTE)return this._wrapAccessor(Ie,t);if(t.componentType===d.UNSIGNED_SHORT)return this._wrapAccessor(Be,t)}throw new c("gltf-loader-unsupported-feature","Unsupported component type for COLOR_0 attribute: "+d[t.componentType])}hasPositions(e){return e.attributes.POSITION!==void 0}hasNormals(e){return e.attributes.NORMAL!==void 0}hasVertexColors(e){return e.attributes.COLOR_0!==void 0}hasTextureCoordinates(e){return e.attributes.TEXCOORD_0!==void 0}hasTangents(e){return e.attributes.TANGENT!==void 0}async getMaterial(e,r,t){var s,a,i,u,l,f,m,y,g,T;let o=e.material?this._materialCache.get(e.material):void 0;if(!o){const p=e.material!=null?J(this.json.materials[e.material]):J(),h=p.pbrMetallicRoughness,E=this.hasVertexColors(e),b=this.getTexture(h.baseColorTexture,r),_=this.getTexture(p.normalTexture,r),w=t?this.getTexture(p.occlusionTexture,r):void 0,N=t?this.getTexture(p.emissiveTexture,r):void 0,x=t?this.getTexture(h.metallicRoughnessTexture,r):void 0,C=e.material!=null?e.material:-1;o={alphaMode:p.alphaMode,alphaCutoff:p.alphaCutoff,color:h.baseColorFactor,doubleSided:!!p.doubleSided,colorTexture:await b,normalTexture:await _,name:p.name,id:C,occlusionTexture:await w,emissiveTexture:await N,emissiveFactor:p.emissiveFactor,metallicFactor:h.metallicFactor,roughnessFactor:h.roughnessFactor,metallicRoughnessTexture:await x,hasVertexColors:E,ESRI_externalColorMixMode:p.extras.ESRI_externalColorMixMode,colorTextureTransform:(a=(s=h==null?void 0:h.baseColorTexture)==null?void 0:s.extensions)==null?void 0:a.KHR_texture_transform,normalTextureTransform:(u=(i=p.normalTexture)==null?void 0:i.extensions)==null?void 0:u.KHR_texture_transform,occlusionTextureTransform:(f=(l=p.occlusionTexture)==null?void 0:l.extensions)==null?void 0:f.KHR_texture_transform,emissiveTextureTransform:(y=(m=p.emissiveTexture)==null?void 0:m.extensions)==null?void 0:y.KHR_texture_transform,metallicRoughnessTextureTransform:(T=(g=h==null?void 0:h.metallicRoughnessTexture)==null?void 0:g.extensions)==null?void 0:T.KHR_texture_transform}}return o}async getTexture(e,r){if(!e)return;if((e.texCoord||0)!==0)throw new c("gltf-loader-unsupported-feature","Only TEXCOORD with index 0 is supported.");const t=e.index,o=this.json.textures[t],s=ut(o.sampler!=null?this.json.samplers[o.sampler]:{}),a=this._getTextureSourceId(o),i=this.json.images[a],u=await this._loadTextureImageData(t,o,r);return we(this._textureCache,t,()=>{const l=m=>m===33071||m===33648||m===10497,f=m=>{throw new c("gltf-loader-error",`Unexpected TextureSampler WrapMode: ${m}`)};return{data:u,wrapS:l(s.wrapS)?s.wrapS:f(s.wrapS),wrapT:l(s.wrapT)?s.wrapT:f(s.wrapT),minFilter:s.minFilter,name:i.name,id:t}})}getNodeTransform(e){if(e===void 0)return ft;let r=this._nodeTransformCache.get(e);if(!r){const t=this.getNodeTransform(this._getNodeParent(e)),o=this.json.nodes[e];o.matrix?r=ge(Z(),t,o.matrix):o.translation||o.rotation||o.scale?(r=k(t),o.translation&&_e(r,r,o.translation),o.rotation&&(U[3]=Ne(U,o.rotation),be(r,r,U[3],U)),o.scale&&xe(r,r,o.scale)):r=k(t),this._nodeTransformCache.set(e,r)}return r}_wrapAccessor(e,r){return new e(r.raw,r.byteOffset,r.byteStride,r.byteOffset+r.byteStride*(r.entryCount-1)+r.componentByteSize*r.componentCount)}_resolveUri(e){return Se(e,this._baseUri)}_getNodeParent(e){return this._nodeParentMap.get(e)}_checkVersionSupported(){const e=W.parse(this.json.asset.version,"glTF");ct.validate(e)}_checkRequiredExtensionsSupported(){const e=this.json;if(e.extensionsRequired&&!e.extensionsRequired.every(r=>this._supportedExtensions.includes(r)))throw new c("gltf-loader-unsupported-feature","gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}_computeNodeParents(){this.json.nodes.forEach((e,r)=>{e.children&&e.children.forEach(t=>{this._nodeParentMap.set(t,r)})})}async _loadTextureImageData(e,r,t){const o=this._textureLoaders.get(e);if(o)return o;const s=this._createTextureLoader(r,t);return this._textureLoaders.set(e,s),s}_getTextureSourceId(e){if(e.extensions!==void 0&&e.extensions.KHR_texture_basisu!==null)return e.extensions.KHR_texture_basisu.source;if(e.source!==null)return e.source;throw new c("gltf-loader-unsupported-feature","Source is expected to be defined for a texture. It can also be omitted in favour of an KHR_texture_basisu extension tag.")}async _createTextureLoader(e,r){const t=this._getTextureSourceId(e),o=this.json.images[t];if(o.uri){if(o.uri.endsWith(".ktx2")){const u=await this._context.loadBinary(this._resolveUri(o.uri),r);return new je(new Uint8Array(u))}return this._context.loadImage(this._resolveUri(o.uri),r)}if(o.bufferView==null)throw new c("gltf-loader-unsupported-feature","Image bufferView must be defined.");if(o.mimeType==null)throw new c("gltf-loader-unsupported-feature","Image mimeType must be defined.");const s=this.json.bufferViews[o.bufferView],a=await this.getBuffer(s.buffer,r);if(s.byteStride!=null)throw new c("gltf-loader-unsupported-feature","byteStride not supported for image buffer");const i=a.byteOffset+(s.byteOffset||0);return Ge(new Uint8Array(a.buffer,i,s.byteLength),o.mimeType)}async getLoadedBuffersSize(){if(this._glbBuffer)return this._glbBuffer.byteLength;const e=await H(Array.from(this._bufferLoaders.values())),r=await H(Array.from(this._textureLoaders.values()));return e.reduce((t,o)=>t+((o==null?void 0:o.byteLength)??0),0)+r.reduce((t,o)=>t+(o?Ve(o)?o.data.byteLength:o.width*o.height*4:0),0)}}const ft=ye(Z(),Math.PI/2),ct=new W(2,0,"glTF"),U=Oe(),dt={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},pt={[d.BYTE]:1,[d.UNSIGNED_BYTE]:1,[d.SHORT]:2,[d.UNSIGNED_SHORT]:2,[d.FLOAT]:4,[d.INT]:4,[d.UNSIGNED_INT]:4};function mt(n){switch(n.componentType){case d.BYTE:return new De(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case d.UNSIGNED_BYTE:return new Ue(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case d.SHORT:return new Fe(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case d.UNSIGNED_SHORT:return new $e(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case d.UNSIGNED_INT:return new Le(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case d.FLOAT:return new ee(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount)}}const ht=/\.gltf$/i,yt=/\.glb$/i;let Tt=0;async function Dt(n,e,r={},t=!0){const o=await S.load(n,e,r),s="gltf_"+Tt++,a={lods:[],materials:new Map,textures:new Map,meta:wt(o)},i=!(!o.json.asset.extras||o.json.asset.extras.ESRI_type!=="symbolResource"),u=new Map;await gt(o,async(f,m,y,g)=>{var R;const T=u.get(y)??0;u.set(y,T+1);const p=f.mode!==void 0?f.mode:O.TRIANGLES,h=p===O.TRIANGLES||p===O.TRIANGLE_STRIP||p===O.TRIANGLE_FAN?p:null;if(h==null)return void P.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Unsupported primitive mode ("+O[p]+"). Skipping primitive.");if(!o.hasPositions(f))return void P.getLogger("esri.views.3d.glTF").warn("Skipping primitive without POSITION vertex attribute.");const E=o.getPositionData(f,r),b=o.getMaterial(f,r,t),_=o.hasNormals(f)?o.getNormalData(f,r):null,w=o.hasTangents(f)?o.getTangentData(f,r):null,N=o.hasTextureCoordinates(f)?o.getTextureCoordinates(f,r):null,x=o.hasVertexColors(f)?o.getVertexColors(f,r):null,C=o.getIndexData(f,r),M={name:g,transform:k(m),attributes:{position:await E,normal:_?await _:null,texCoord0:N?await N:null,color:x?await x:null,tangent:w?await w:null},indices:await C,primitiveType:h,material:bt(a,await b,s)};let A=null;((R=a.meta)==null?void 0:R.ESRI_lod)!=null&&a.meta.ESRI_lod.metric==="screenSpaceRadius"&&(A=a.meta.ESRI_lod.thresholds[y]),a.lods[y]=a.lods[y]||{parts:[],name:g,lodThreshold:A},a.lods[y].parts[T]=M});for(const f of a.lods)f.parts=f.parts.filter(m=>!!m);const l=await o.getLoadedBuffersSize();return{model:a,meta:{isEsriSymbolResource:i,uri:o.uri},customMeta:{},size:l}}function wt(n){const e=n.json;let r=null;return e.nodes.forEach(t=>{const o=t.extras;o!=null&&(o.ESRI_proxyEllipsoid||o.ESRI_lod)&&(r=o)}),r}async function gt(n,e){const r=n.json,t=r.scenes[r.scene||0].nodes,o=t.length>1,s=[];for(const i of t){const u=r.nodes[i];s.push(a(i,0)),_t(u)&&!o&&u.extensions.MSFT_lod.ids.forEach((l,f)=>a(l,f+1))}async function a(i,u){const l=r.nodes[i],f=n.getNodeTransform(i);if(l.weights!=null&&P.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Morph targets are not supported."),l.mesh!=null){const m=r.meshes[l.mesh];for(const y of m.primitives)s.push(e(y,f,u,m.name))}for(const m of l.children||[])s.push(a(m,u))}await Promise.all(s)}function _t(n){var e;return((e=n.extensions)==null?void 0:e.MSFT_lod)&&Array.isArray(n.extensions.MSFT_lod.ids)}function bt(n,e,r){const t=s=>{const a=`${r}_tex_${s&&s.id}${s!=null&&s.name?"_"+s.name:""}`;if(s&&!n.textures.has(a)){const i=nt(s.data,{wrap:{s:s.wrapS,t:s.wrapT},mipmap:xt.has(s.minFilter),noUnpackFlip:!0});n.textures.set(a,i)}return a},o=`${r}_mat_${e.id}_${e.name}`;if(!n.materials.has(o)){const s=rt({color:[e.color[0],e.color[1],e.color[2]],opacity:e.color[3],alphaMode:e.alphaMode,alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,colorMixMode:e.ESRI_externalColorMixMode,textureColor:e.colorTexture?t(e.colorTexture):void 0,textureNormal:e.normalTexture?t(e.normalTexture):void 0,textureOcclusion:e.occlusionTexture?t(e.occlusionTexture):void 0,textureEmissive:e.emissiveTexture?t(e.emissiveTexture):void 0,textureMetallicRoughness:e.metallicRoughnessTexture?t(e.metallicRoughnessTexture):void 0,emissiveFactor:[e.emissiveFactor[0],e.emissiveFactor[1],e.emissiveFactor[2]],colorTextureTransform:e.colorTextureTransform,normalTextureTransform:e.normalTextureTransform,occlusionTextureTransform:e.occlusionTextureTransform,emissiveTextureTransform:e.emissiveTextureTransform,metallicRoughnessTextureTransform:e.metallicRoughnessTextureTransform,metallicFactor:e.metallicFactor,roughnessFactor:e.roughnessFactor});n.materials.set(o,s)}return o}const xt=new Set([G.LINEAR_MIPMAP_LINEAR,G.LINEAR_MIPMAP_NEAREST]);function Pt(n,e){switch(e){case O.TRIANGLES:return St(n);case O.TRIANGLE_STRIP:return Et(n);case O.TRIANGLE_FAN:return Nt(n)}}function St(n){return typeof n=="number"?ke(n):Ee(n)?new Uint16Array(n):n}function Et(n){const e=typeof n=="number"?n:n.length;if(e<3)return[];const r=e-2,t=He(3*r);if(typeof n=="number"){let o=0;for(let s=0;s<r;s+=1)s%2==0?(t[o++]=s,t[o++]=s+1,t[o++]=s+2):(t[o++]=s+1,t[o++]=s,t[o++]=s+2)}else{let o=0;for(let s=0;s<r;s+=1)s%2==0?(t[o++]=n[s],t[o++]=n[s+1],t[o++]=n[s+2]):(t[o++]=n[s+1],t[o++]=n[s],t[o++]=n[s+2])}return t}function Nt(n){const e=typeof n=="number"?n:n.length;if(e<3)return new Uint16Array(0);const r=e-2,t=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if(typeof n=="number"){let i=0;for(let u=0;u<r;++u)t[i++]=0,t[i++]=u+1,t[i++]=u+2;return t}const o=n[0];let s=n[1],a=0;for(let i=0;i<r;++i){const u=n[i+2];t[a++]=o,t[a++]=s,t[a++]=u,s=u}return t}const jt=2.1;export{Ke as a,et as b,Ye as c,Xe as d,Je as e,We as f,Ze as g,Qe as h,jt as i,te as j,ne as k,Dt as l,oe as m,$t as n,Pt as o,qe as r,se as t,re as u};
