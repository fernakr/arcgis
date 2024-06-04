import{fb as L,cN as Z,co as se,cq as ie,b1 as k,b0 as I,E as re,cR as K,jq as ne,cL as C,kv as Q,g$ as ae,jt as oe,s as ce,id as he,he as le,hU as fe,kw as ue}from"./index-12dd5c8b.js";import{o as de,e as pe}from"./mat4f64-1413b4a7.js";import{K as _e,T as me}from"./quat-f6073f3f.js";import{o as ge,r as we,e as Te}from"./quatf64-3363c48e.js";import{m as Ae}from"./MeshGeoreferencedRelativeVertexSpace-022de000.js";import{V as be,p as ye,E as Ee}from"./georeference-50479ba4.js";import{c as Re}from"./meshFeatureSet-ec25c083.js";import{C as _,D as A}from"./enums-bdecffa2.js";import{r as j,a as xe,g as Ne,c as Oe}from"./imageutils-7c870b1d.js";import{r as v}from"./resourceUtils-e21b3ace.js";import"./mat3f64-221ce671.js";import"./spatialReferenceEllipsoidUtils-e76ebeb4.js";import"./MeshLocalVertexSpace-99759b5e.js";import"./vec32-d55fb8cd.js";import"./BufferView-64ac3e7e.js";import"./imageUtils-da6bf03a.js";import"./earcut-e291056a.js";import"./Indices-2ac3a4d5.js";import"./deduplicate-c6e68e6c.js";import"./plane-2503ad4a.js";import"./sphere-5fd18728.js";import"./ByteSizeUnit-d4757d40.js";import"./triangle-efbdc054.js";import"./lineSegment-7f3730fd.js";import"./basicInterfaces-11f56cb3.js";import"./VertexAttribute-0e674613.js";import"./External-615454b0.js";var z;(function(r){r[r.JSON=1313821514]="JSON",r[r.BIN=5130562]="BIN"})(z||(z={}));class T{constructor(e,t){if(!e)throw new Error("GLB requires a JSON gltf chunk");this._length=T.HEADER_SIZE,this._length+=T.CHUNK_HEADER_SIZE;const s=this._textToArrayBuffer(e);if(this._length+=this._alignTo(s.byteLength,4),t&&(this._length+=T.CHUNK_HEADER_SIZE,this._length+=t.byteLength,t.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this._length),this._outView=new DataView(this.buffer),this._writeHeader();const i=this._writeChunk(s,12,z.JSON,32);t&&this._writeChunk(t,i,z.BIN)}_writeHeader(){this._outView.setUint32(0,T.MAGIC,!0),this._outView.setUint32(4,T.VERSION,!0),this._outView.setUint32(8,this._length,!0)}_writeChunk(e,t,s,i=0){const n=this._alignTo(e.byteLength,4);for(this._outView.setUint32(t,n,!0),this._outView.setUint32(t+=4,s,!0),this._writeArrayBuffer(this._outView.buffer,e,t+=4,0,e.byteLength),t+=e.byteLength;t%4;)i&&this._outView.setUint8(t,i),t++;return t}_writeArrayBuffer(e,t,s,i,n){new Uint8Array(e,s,n).set(new Uint8Array(t,i,n),0)}_textToArrayBuffer(e){return new TextEncoder().encode(e).buffer}_alignTo(e,t){return t*Math.ceil(e/t)}}T.HEADER_SIZE=12,T.CHUNK_HEADER_SIZE=8,T.MAGIC=1179937895,T.VERSION=2;var x,b,R,w,J,V,W;(function(r){r[r.External=0]="External",r[r.DataURI=1]="DataURI",r[r.GLB=2]="GLB"})(x||(x={})),function(r){r[r.External=0]="External",r[r.DataURI=1]="DataURI",r[r.GLB=2]="GLB"}(b||(b={})),function(r){r[r.ARRAY_BUFFER=34962]="ARRAY_BUFFER",r[r.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(R||(R={})),function(r){r.SCALAR="SCALAR",r.VEC2="VEC2",r.VEC3="VEC3",r.VEC4="VEC4",r.MAT2="MAT2",r.MAT3="MAT3",r.MAT4="MAT4"}(w||(w={})),function(r){r[r.POINTS=0]="POINTS",r[r.LINES=1]="LINES",r[r.LINE_LOOP=2]="LINE_LOOP",r[r.LINE_STRIP=3]="LINE_STRIP",r[r.TRIANGLES=4]="TRIANGLES",r[r.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",r[r.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(J||(J={})),function(r){r.OPAQUE="OPAQUE",r.MASK="MASK",r.BLEND="BLEND"}(V||(V={})),function(r){r[r.NoColor=0]="NoColor",r[r.FaceColor=1]="FaceColor",r[r.VertexColor=2]="VertexColor"}(W||(W={}));let Se=class{constructor(e,t,s,i,n){this._buffer=e,this._componentType=s,this._dataType=i,this._data=[],this._isFinalized=!1,this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,t.bufferViews||(t.bufferViews=[]),this.index=t.bufferViews.length,this._bufferView={buffer:e.index,byteLength:-1,target:n};const a=this._getElementSize();a>=4&&n!==R.ELEMENT_ARRAY_BUFFER&&(this._bufferView.byteStride=a),t.bufferViews.push(this._bufferView),this._numComponentsForDataType=this._calculateNumComponentsForDataType()}push(e){const t=this._data.length;if(this._data.push(e),this._accessorIndex>=0){const s=t%this._numComponentsForDataType,i=this._accessorMin[s];this._accessorMin[s]=typeof i!="number"?e:Math.min(i,e);const n=this._accessorMax[s];this._accessorMax[s]=typeof n!="number"?e:Math.max(n,e)}}get dataSize(){return this._data.length*this._sizeComponentType()}get byteSize(){function e(t,s){return s*Math.ceil(t/s)}return e(this.dataSize,4)}getByteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}get byteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}_createTypedArray(e,t){switch(this._componentType){case _.BYTE:return new Int8Array(e,t);case _.FLOAT:return new Float32Array(e,t);case _.SHORT:return new Int16Array(e,t);case _.UNSIGNED_BYTE:return new Uint8Array(e,t);case _.UNSIGNED_INT:return new Uint32Array(e,t);case _.UNSIGNED_SHORT:return new Uint16Array(e,t)}}writeOutToBuffer(e,t){this._createTypedArray(e,t).set(this._data)}writeAsync(e){if(this._asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this._asyncWritePromise=e.then(t=>{const s=new Uint8Array(t);for(let i=0;i<s.length;++i)this._data.push(s[i]);delete this._asyncWritePromise}),this._asyncWritePromise}startAccessor(e){if(this._accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this._accessorIndex=this._data.length,this._accessorAttribute=e;const t=this._numComponentsForDataType;this._accessorMin=new Array(t),this._accessorMax=new Array(t)}endAccessor(){if(this._accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const e=this._getElementSize(),t=this._numComponentsForDataType,s=(this._data.length-this._accessorIndex)/t;if(s%1)throw new Error("An accessor was ended with missing component values");for(let n=0;n<this._accessorMin.length;++n)typeof this._accessorMin[n]!="number"&&(this._accessorMin[n]=0),typeof this._accessorMax[n]!="number"&&(this._accessorMax[n]=0);const i={byteOffset:e*(this._accessorIndex/t),componentType:this._componentType,count:s,type:this._dataType,min:this._accessorMin,max:this._accessorMax,name:this._accessorAttribute};switch(this._accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this._componentType){case _.UNSIGNED_BYTE:case _.UNSIGNED_SHORT:i.normalized=!0}}return this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,i}get finalized(){return this._finalizedPromise?this._finalizedPromise:this._isFinalized?this._finalizedPromise=Promise.resolve():this._finalizedPromise=new Promise(e=>this._finalizedPromiseResolve=e)}async finalize(){const e=this._bufferView,t=this._buffer.getViewFinalizePromises(this);this._asyncWritePromise&&t.push(this._asyncWritePromise),await Promise.allSettled(t),this._isFinalized=!0,e.byteOffset=this.getByteOffset(),e.byteLength=this.dataSize,this._finalizedPromiseResolve&&this._finalizedPromiseResolve()}_getElementSize(){return this._sizeComponentType()*this._numComponentsForDataType}_sizeComponentType(){switch(this._componentType){case _.BYTE:case _.UNSIGNED_BYTE:return 1;case _.SHORT:case _.UNSIGNED_SHORT:return 2;case _.UNSIGNED_INT:case _.FLOAT:return 4}}_calculateNumComponentsForDataType(){switch(this._dataType){case w.SCALAR:return 1;case w.VEC2:return 2;case w.VEC3:return 3;case w.VEC4:case w.MAT2:return 4;case w.MAT3:return 9;case w.MAT4:return 16}}},X=class{constructor(e){this._gltf=e,this._bufferViews=[],this._isFinalized=!1,e.buffers||(e.buffers=[]),this.index=e.buffers.length;const t={byteLength:-1};e.buffers.push(t),this._buffer=t}addBufferView(e,t,s){if(this._finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const i=new Se(this,this._gltf,e,t,s);return this._bufferViews.push(i),i}getByteOffset(e){let t=0;for(const s of this._bufferViews){if(s===e)return t;t+=s.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(e){const t=[];for(const s of this._bufferViews){if(e&&s===e)return t;t.push(s.finalized)}return t}getArrayBuffer(){if(!this._isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const e=this._getTotalSize(),t=new ArrayBuffer(e);let s=0;for(const i of this._bufferViews)i.writeOutToBuffer(t,s),s+=i.byteSize;return t}finalize(){var e;if(this._finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this._finalizePromise=Promise.allSettled(this.getViewFinalizePromises()).then(()=>{this._isFinalized=!0;const t=this.getArrayBuffer();this._buffer.byteLength=t.byteLength,this._buffer.uri=t}),(e=this._gltf.extras)==null||e.promises.push(this._finalizePromise),this._finalizePromise}_getTotalSize(){let e=0;for(const t of this._bufferViews)e+=t.byteSize;return e}};function Ie(r,e){if(r.components)for(const t of r.components)t.faces&&t.shading==="smooth"&&Me(t,e)}function Me(r,e){e.normal==null&&(e.normal=new Float32Array(e.position.length));const t=r.faces,{position:s,normal:i}=e,n=t.length/3;for(let a=0;a<n;++a){const o=3*t[3*a],l=3*t[3*a+1],c=3*t[3*a+2],h=L(Le,s[o],s[o+1],s[o+2]),g=L(Ce,s[l],s[l+1],s[l+2]),p=L(ze,s[c],s[c+1],s[c+2]),m=Z(g,g,h),u=Z(p,p,h),d=se(m,m,u);i[o]+=d[0],i[o+1]+=d[1],i[o+2]+=d[2],i[l]+=d[0],i[l+1]+=d[1],i[l+2]+=d[2],i[c]+=d[0],i[c+1]+=d[1],i[c+2]+=d[2]}for(let a=0;a<i.length;a+=3)L(N,i[a],i[a+1],i[a+2]),ie(N,N),i[a]=N[0],i[a+1]=N[1],i[a+2]=N[2]}function Be(r){const{vertexSpace:e}=r;if(e.isRelative)return e.getOriginPoint(r.spatialReference);const{extent:t}=r,s=t.xmax-t.width/2,i=t.ymax-t.height/2,n=t.zmin;return new k({x:s,y:i,z:n,spatialReference:t.spatialReference})}const Le=I(),Ce=I(),ze=I(),N=I(),Y=re.getLogger("gltf");class Ve{constructor(e,t,s){this.params={},this._materialMap=new Array,this._imageMap=new Map,this._textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:e.copyright,generator:e.generator},extras:{options:t,binChunkBuffer:null,promises:[]}},s&&(this.params=s),this._addScenes(e)}_addScenes(e){this.gltf.scene=e.defaultScene;const t=this.gltf.extras,s=t.options.bufferOutputType===x.GLB||t.options.imageOutputType===b.GLB;s&&(t.binChunkBuffer=new X(this.gltf)),e.forEachScene(i=>{this._addScene(i)}),s&&t.binChunkBuffer.finalize()}_addScene(e){this.gltf.scenes||(this.gltf.scenes=[]);const t={};e.name&&(t.name=e.name),e.forEachNode(s=>{t.nodes||(t.nodes=[]),t.nodes.push(...this._addNodes(s))}),this.gltf.scenes.push(t)}_addNodes(e){this.gltf.nodes||(this.gltf.nodes=[]);const t={};e.name&&(t.name=e.name);const s=e.translation;K(s,ne)||(t.translation=C(s));const i=e.rotation;_e(i,ge)||(t.rotation=we(i));const n=e.scale;K(n,Q)||(t.scale=C(n));const a=this.gltf.nodes.length;if(this.gltf.nodes.push(t),e.mesh&&e.mesh.vertexAttributes.position){const o=this._createMeshes(e.mesh),l=[a];if(o.length===1)this._addMesh(t,o[0]);else for(const c of o){const h={};this._addMesh(h,c),l.push(this.gltf.nodes.length),this.gltf.nodes.push(h)}return l}return e.forEachNode(o=>{t.children||(t.children=[]),t.children.push(...this._addNodes(o))}),[a]}_addMesh(e,t){var i;(i=this.gltf).meshes??(i.meshes=[]);const s=this.gltf.meshes.length;this.gltf.meshes.push(t),e.mesh=s}_createMeshes(e){const t=this.gltf.extras,s=t.options.bufferOutputType===x.GLB;let i;i=s?t.binChunkBuffer:new X(this.gltf),this.params.origin||(this.params.origin=Be(e));const{ignoreLocalTransform:n}=this.params,a=n?null:e.transform,{vertexSpace:o,spatialReference:l}=e,c=e.vertexAttributes;let h=null;if(o.type==="local"){const f=ae(l);oe(q,(a==null?void 0:a.localMatrix)??de,[f,f,f]),h=be(c,q)}else{const f=n?o.isRelative?new Ae({origin:C(o.origin)}):new ye:o;h=Ee(c,f,a,this.params.origin,{geographic:this.params.geographic,unit:"meters"})}if(h==null)throw new ce("Error during gltf export.");c.position&&h.position===c.position&&(h.position=c.position.slice()),c.normal&&h.normal===c.normal&&(h.normal=c.normal.slice()),c.tangent&&h.tangent===c.tangent&&(h.tangent=c.tangent.slice()),Ie(e,h),this._flipYZAxis(h);const g=i.addBufferView(_.FLOAT,w.VEC3,R.ARRAY_BUFFER);let p,m,u,d;h.normal&&(p=i.addBufferView(_.FLOAT,w.VEC3,R.ARRAY_BUFFER)),c.uv&&(m=i.addBufferView(_.FLOAT,w.VEC2,R.ARRAY_BUFFER)),h.tangent&&(u=i.addBufferView(_.FLOAT,w.VEC4,R.ARRAY_BUFFER)),c.color&&(d=i.addBufferView(_.UNSIGNED_BYTE,w.VEC4,R.ARRAY_BUFFER)),g.startAccessor("POSITION"),p&&p.startAccessor("NORMAL"),m&&m.startAccessor("TEXCOORD_0"),u&&u.startAccessor("TANGENT"),d&&d.startAccessor("COLOR_0");const y=h.position.length/3,{position:E,normal:M,tangent:O}=h,{color:S,uv:F}=c;for(let f=0;f<y;++f)g.push(E[3*f]),g.push(E[3*f+1]),g.push(E[3*f+2]),p&&M!=null&&(p.push(M[3*f]),p.push(M[3*f+1]),p.push(M[3*f+2])),m&&F!=null&&(m.push(F[2*f]),m.push(F[2*f+1])),u&&O!=null&&(u.push(O[4*f]),u.push(O[4*f+1]),u.push(O[4*f+2]),u.push(O[4*f+3])),d&&S!=null&&(d.push(S[4*f]),d.push(S[4*f+1]),d.push(S[4*f+2]),d.push(S[4*f+3]));const te=g.endAccessor(),H=this._addAccessor(g.index,te);let P,D,U,G,B;if(p){const f=p.endAccessor();P=this._addAccessor(p.index,f)}if(m){const f=m.endAccessor();D=this._addAccessor(m.index,f)}if(u){const f=u.endAccessor();U=this._addAccessor(u.index,f)}if(d){const f=d.endAccessor();G=this._addAccessor(d.index,f)}const $=[];return e.components&&e.components.length>0&&e.components[0].faces?(B=i.addBufferView(_.UNSIGNED_INT,w.SCALAR,R.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(B,e.components,$,H,P,D,U,G)):this._addMeshVertexNonIndexed(e.components,$,H,P,D,U,G),g.finalize(),p&&p.finalize(),m&&m.finalize(),u&&u.finalize(),B&&B.finalize(),d&&d.finalize(),s||i.finalize(),$}_flipYZAxis({position:e,normal:t,tangent:s}){this._flipYZBuffer(e,3),this._flipYZBuffer(t,3),this._flipYZBuffer(s,4)}_flipYZBuffer(e,t){if(e!=null)for(let s=1,i=2;s<e.length;s+=t,i+=t){const n=e[s],a=e[i];e[s]=a,e[i]=-n}}_addMaterial(e){if(e===null)return;const t=this._materialMap.indexOf(e);if(t!==-1)return t;this.gltf.materials||(this.gltf.materials=[]);const s={};switch(e.alphaMode){case"mask":s.alphaMode=V.MASK;break;case"auto":case"blend":s.alphaMode=V.BLEND}e.alphaCutoff!==.5&&(s.alphaCutoff=e.alphaCutoff),e.doubleSided&&(s.doubleSided=e.doubleSided),s.pbrMetallicRoughness={};const i=o=>o**2.1,n=o=>{const l=o.toRgba();return l[0]=i(l[0]/255),l[1]=i(l[1]/255),l[2]=i(l[2]/255),l};if(e.color!=null&&(s.pbrMetallicRoughness.baseColorFactor=n(e.color)),e.colorTexture!=null&&(s.pbrMetallicRoughness.baseColorTexture=this._createTextureInfo(e.colorTexture,e.colorTextureTransform)),e.normalTexture!=null&&(s.normalTexture=this._createTextureInfo(e.normalTexture,e.normalTextureTransform)),e instanceof Re){if(e.emissiveTexture!=null&&(s.emissiveTexture=this._createTextureInfo(e.emissiveTexture,e.emissiveTextureTransform)),e.emissiveColor!=null){const o=n(e.emissiveColor);s.emissiveFactor=[o[0],o[1],o[2]]}e.occlusionTexture!=null&&(s.occlusionTexture=this._createTextureInfo(e.occlusionTexture,e.occlusionTextureTransform)),e.metallicRoughnessTexture!=null&&(s.pbrMetallicRoughness.metallicRoughnessTexture=this._createTextureInfo(e.metallicRoughnessTexture,e.metallicRoughnessTextureTransform)),s.pbrMetallicRoughness.metallicFactor=e.metallic,s.pbrMetallicRoughness.roughnessFactor=e.roughness}else s.pbrMetallicRoughness.metallicFactor=1,s.pbrMetallicRoughness.roughnessFactor=1,Y.warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");const a=this.gltf.materials.length;return this.gltf.materials.push(s),this._materialMap.push(e),a}_createTextureInfo(e,t){const s={index:this._addTexture(e)};return t&&(s.extensions||(s.extensions={}),s.extensions.KHR_texture_transform={scale:t.scale,offset:t.offset,rotation:he(t.rotation)}),s}_addTexture(e){const t=this.gltf.textures??[];return this.gltf.textures=t,le(this._textureMap,e,()=>{const s={sampler:this._addSampler(e),source:this._addImage(e)},i=t.length;return t.push(s),i})}_addImage(e){const t=this._imageMap.get(e);if(t!=null)return t;this.gltf.images||(this.gltf.images=[]);const s={};if(e.url)s.uri=e.url;else{const n=e.data;s.extras=n;for(let o=0;o<this.gltf.images.length;++o)if(n===this.gltf.images[o].extras)return o;const a=this.gltf.extras;switch(a.options.imageOutputType){case b.GLB:{const o=a.binChunkBuffer.addBufferView(_.UNSIGNED_BYTE,w.SCALAR);if(v(n))n.data!=null&&o.writeOutToBuffer(n.data,0);else{const l=j(n).then(({data:c,type:h})=>(s.mimeType=h,c));o.writeAsync(l).then(()=>{o.finalize()})}s.bufferView=o.index;break}case b.DataURI:if(v(n)){Y.warnOnce("Image export for basis compressed textures not available.");break}s.uri=xe(n);break;default:if(v(n)){Y.warnOnce("Image export for basis compressed textures not available.");break}a.promises.push(j(n).then(({data:o,type:l})=>{s.uri=o,s.mimeType=l}))}}const i=this.gltf.images.length;return this.gltf.images.push(s),this._imageMap.set(e,i),i}_addSampler(e){this.gltf.samplers||(this.gltf.samplers=[]);let t=A.REPEAT,s=A.REPEAT;if(typeof e.wrap=="string")switch(e.wrap){case"clamp":t=A.CLAMP_TO_EDGE,s=A.CLAMP_TO_EDGE;break;case"mirror":t=A.MIRRORED_REPEAT,s=A.MIRRORED_REPEAT}else{switch(e.wrap.vertical){case"clamp":s=A.CLAMP_TO_EDGE;break;case"mirror":s=A.MIRRORED_REPEAT}switch(e.wrap.horizontal){case"clamp":t=A.CLAMP_TO_EDGE;break;case"mirror":t=A.MIRRORED_REPEAT}}const i={wrapS:t,wrapT:s};for(let a=0;a<this.gltf.samplers.length;++a)if(JSON.stringify(i)===JSON.stringify(this.gltf.samplers[a]))return a;const n=this.gltf.samplers.length;return this.gltf.samplers.push(i),n}_addAccessor(e,t){this.gltf.accessors||(this.gltf.accessors=[]);const s={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(s.normalized=!0);const i=this.gltf.accessors.length;return this.gltf.accessors.push(s),i}_addMeshVertexIndexed(e,t,s,i,n,a,o,l){const c=new Map;for(const h of t){e.startAccessor("INDICES");for(let u=0;u<h.faces.length;++u)e.push(h.faces[u]);const g=e.endAccessor(),p={attributes:{POSITION:i},indices:this._addAccessor(e.index,g),material:this._addMaterial(h.material)};n&&h.shading!=="flat"&&(p.attributes.NORMAL=n),a&&(p.attributes.TEXCOORD_0=a),o&&h.shading!=="flat"&&(p.attributes.TANGENT=o),l&&(p.attributes.COLOR_0=l);const m=c.get(h.name);if(m)m.primitives.push(p);else{const u={name:h.name,primitives:[p]};c.set(h.name,u),s.push(u)}}}_addMeshVertexNonIndexed(e,t,s,i,n,a,o){const l={primitives:[]};t.push(l);const c={attributes:{POSITION:s}};i&&(c.attributes.NORMAL=i),n&&(c.attributes.TEXCOORD_0=n),a&&(c.attributes.TANGENT=a),o&&(c.attributes.COLOR_0=o),e&&(c.material=this._addMaterial(e[0].material)),l.primitives.push(c)}}const q=pe();let Fe=class{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(e){if(this._scenes.includes(e))throw new Error("Scene already added");this._scenes.push(e)}removeScene(e){fe(this._scenes,e)}forEachScene(e){this._scenes.forEach(e)}};class Pe{constructor(){this.name="",this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}}class De{constructor(e){this.mesh=e,this.name="",this.translation=I(),this.rotation=Te(),this.scale=C(Q),this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}set rotationAngles(e){me(this.rotation,e[0],e[1],e[2])}}const Ue="model.gltf",ee="model.glb";async function Ge(r,e,t){var u;const s=new Ve(r,e=e||{},t);let i=s.params;i?i.origin||(i.origin=new k({x:-1,y:-1,z:-1})):i={origin:new k({x:-1,y:-1,z:-1})};const n=i.origin,a=s.gltf,o=((u=a.extras)==null?void 0:u.promises)??[];let l=1,c=1,h=null;await Promise.allSettled(o);const g={origin:n};delete a.extras;const p=typeof e.jsonSpacing=="number"?e.jsonSpacing:4,m=JSON.stringify(a,(d,y)=>{if(d!=="extras"){if(y instanceof ArrayBuffer){if(Ne(y))switch(e.imageOutputType){case b.DataURI:case b.GLB:break;case b.External:default:{const E=`img${c}.png`;return c++,g[E]=y,E}}switch(e.bufferOutputType){case x.DataURI:return Oe(y);case x.GLB:if(h)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(h=y);case x.External:default:{const E=`data${l}.bin`;return l++,g[E]=y,E}}}return y}},p);return e.bufferOutputType===x.GLB||e.imageOutputType===b.GLB?g[ee]=new T(m,h).buffer:g[Ue]=m,g}function $e(r,e){return Ge(r,{bufferOutputType:x.GLB,imageOutputType:b.GLB,jsonSpacing:0},e)}class ve{constructor(e,t){this._file={type:"model/gltf-binary",data:e},this.origin=t}buffer(){return Promise.resolve(this._file)}download(e){ue(new Blob([this._file.data],{type:this._file.type}),e)}}function Tt(r,e){const t=new Fe,s=new Pe;return t.addScene(s),s.addNode(new De(r)),$e(t,e).then(i=>new ve(i[ee],i.origin))}export{Tt as toBinaryGLTF};