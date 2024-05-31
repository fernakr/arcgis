import{_ as I,e$ as Q,f as B}from"./index-79fc10e5.js";import{m as W,y as X}from"./MeshLocalVertexSpace-bc917f53.js";import{m as Z}from"./MeshGeoreferencedRelativeVertexSpace-18495957.js";import{n as ee,s as te}from"./vec32-260b8a70.js";import"./sphere-2dc7ecf0.js";import"./ByteSizeUnit-d4757d40.js";import"./mat3f64-221ce671.js";import"./mat4f64-1413b4a7.js";import"./quatf64-3363c48e.js";var R,$;(function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"})(R||(R={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}($||($={}));function ne(){return v||(v=new Promise(e=>I(()=>import("./i3s-1718cc9b.js"),["assets/i3s-1718cc9b.js","assets/index-79fc10e5.js","assets/index-9284d34f.css"]).then(t=>t.i).then(({default:t})=>{const n=t({locateFile:oe,onRuntimeInitialized:()=>e(n)});delete n.then})).catch(e=>{throw e})),v}function oe(e){return Q(`esri/libs/i3s/${e}`)}let v;var j,w,k,H,V;(function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"})(j||(j={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(w||(w={}));(function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"})(k||(k={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(H||(H={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(V||(V={}));async function he(e){r=await A();const t=[e.geometryBuffer];return{result:Y(r,e,t),transferList:t}}async function be(e){var b;r=await A();const t=[e.geometryBuffer],{geometryBuffer:n}=e,a=n.byteLength,i=r._malloc(a),d=new Uint8Array(r.HEAPU8.buffer,i,a);d.set(new Uint8Array(n));const f=r.dracoDecompressPointCloudData(i,d.byteLength);if(r._free(i),f.error.length>0)throw new Error(`i3s.wasm: ${f.error}`);const l=((b=f.featureIds)==null?void 0:b.length)>0?f.featureIds.slice():null,s=f.positions.slice();return l&&t.push(l.buffer),t.push(s.buffer),{result:{positions:s,featureIds:l},transferList:t}}async function pe(e){await A(),ie(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function Ee(e){await A(),re(e)}async function ge(e){r=await A(),r.setLegacySchema(e.context,e.jsonSchema)}async function _e(e){const{localMatrix:t,origin:n,positions:a,vertexSpace:i,localMode:d}=e,f=B.fromJSON(e.inSpatialReference),l=B.fromJSON(e.outSpatialReference);let s;if(i.type==="georeferenced"){const[{projectBuffer:c},{initializeProjection:g}]=await Promise.all([I(()=>import("./index-79fc10e5.js").then(m=>m.nr),["assets/index-79fc10e5.js","assets/index-9284d34f.css"]),I(()=>import("./index-79fc10e5.js").then(m=>m.ns),["assets/index-79fc10e5.js","assets/index-9284d34f.css"])]);await g(f,l),s=new Float64Array(a.length),c(a,f,0,s,l,0,s.length/3)}else{const c=i.type==="georeferencedRelative"?Z.fromJSON(i):W.fromJSON(i),{project:g}=await I(()=>import("./georeference-591b5c4b.js").then(m=>m.c),["assets/georeference-591b5c4b.js","assets/index-79fc10e5.js","assets/index-9284d34f.css","assets/mat3f64-221ce671.js","assets/mat4f64-1413b4a7.js","assets/spatialReferenceEllipsoidUtils-5286f254.js","assets/MeshLocalVertexSpace-bc917f53.js","assets/MeshGeoreferencedRelativeVertexSpace-18495957.js","assets/quat-39535161.js","assets/quatf64-3363c48e.js","assets/vec32-260b8a70.js","assets/BufferView-b44a8940.js"]);s=X(g({positions:a,transform:t?{localMatrix:t}:void 0,vertexSpace:c,inSpatialReference:f,outSpatialReference:l,localMode:d}))}const b=s.length,[S,P,M]=n;for(let c=0;c<b;c+=3)s[c]-=S,s[c+1]-=P,s[c+2]-=M;return{result:{projected:s,original:a},transferList:[s.buffer,a.buffer]}}async function we({normalMatrix:e,normals:t}){const n=new Float32Array(t.length);return ee(n,t,e),te(n,n),{result:{transformed:n,original:t},transferList:[n.buffer,t.buffer]}}function Ae(e){z(e)}let L,r;function re(e){if(!r)return;const t=e.modifications,n=r._malloc(8*t.length),a=new Float64Array(r.HEAPU8.buffer,n,t.length);for(let i=0;i<t.length;++i)a[i]=t[i];r.setModifications(e.context,n,t.length,e.isGeodetic),r._free(n)}function Y(e,t,n){const{context:a,localOrigin:i,globalTrafo:d,mbs:f,obb:l,elevationOffset:s,geometryBuffer:b,geometryDescriptor:S,indexToVertexProjector:P,vertexToRenderProjector:M}=t,c=e._malloc(b.byteLength),g=33,m=e._malloc(g*Float64Array.BYTES_PER_ELEMENT),O=new Uint8Array(e.HEAPU8.buffer,c,b.byteLength);O.set(new Uint8Array(b));const u=new Float64Array(e.HEAPU8.buffer,m,g);_(u,i);let y=u.byteOffset+3*u.BYTES_PER_ELEMENT,h=new Float64Array(u.buffer,y);_(h,d),y+=16*u.BYTES_PER_ELEMENT,h=new Float64Array(u.buffer,y),_(h,f),y+=4*u.BYTES_PER_ELEMENT,l!=null&&(h=new Float64Array(u.buffer,y),_(h,l.center),y+=3*u.BYTES_PER_ELEMENT,h=new Float64Array(u.buffer,y),_(h,l.halfSize),y+=3*u.BYTES_PER_ELEMENT,h=new Float64Array(u.buffer,y),_(h,l.quaternion));const F=S,J={isDraco:!1,isLegacy:!1,color:t.layouts.some(p=>p.some(E=>E.name==="color")),normal:t.needNormals&&t.layouts.some(p=>p.some(E=>E.name==="normalCompressed")),uv0:t.layouts.some(p=>p.some(E=>E.name==="uv0")),uvRegion:t.layouts.some(p=>p.some(E=>E.name==="uvRegion")),featureIndex:F.featureIndex},o=e.process(a,!!t.obb,c,O.byteLength,F,J,m,s,P,M,t.normalReferenceFrame);if(e._free(m),e._free(c),o.error.length>0)throw new Error(`i3s.wasm: ${o.error}`);if(o.discarded)return null;const T=o.componentOffsets.length>0?o.componentOffsets.slice():null,U=o.featureIds.length>0?o.featureIds.slice():null,G=o.anchorIds.length>0?Array.from(o.anchorIds):null,q=o.anchors.length>0?Array.from(o.anchors):null,N=o.interleavedVertedData.slice().buffer,x=o.indicesType===R.Int16?new Uint16Array(o.indices.buffer,o.indices.byteOffset,o.indices.byteLength/2).slice():new Uint32Array(o.indices.buffer,o.indices.byteOffset,o.indices.byteLength/4).slice(),C=o.positions.slice(),D=o.positionIndicesType===R.Int16?new Uint16Array(o.positionIndices.buffer,o.positionIndices.byteOffset,o.positionIndices.byteLength/2).slice():new Uint32Array(o.positionIndices.buffer,o.positionIndices.byteOffset,o.positionIndices.byteLength/4).slice(),K={layout:t.layouts[0],interleavedVertexData:N,indices:x,hasColors:o.hasColors,hasModifications:o.hasModifications,positionData:{data:C,indices:D}};return U&&n.push(U.buffer),T&&n.push(T.buffer),n.push(N),n.push(x.buffer),n.push(C.buffer),n.push(D.buffer),{componentOffsets:T,featureIds:U,anchorIds:G,anchors:q,transformedGeometry:K,obb:o.obb}}function Le(e){return e===0?w.Unmodified:e===1?w.PotentiallyModified:e===2?w.Culled:w.Unknown}function ie(e){if(!r)return;const{context:t,buffer:n}=e,a=r._malloc(n.byteLength),i=n.byteLength/Float64Array.BYTES_PER_ELEMENT,d=new Float64Array(r.HEAPU8.buffer,a,i),f=new Float64Array(n);d.set(f),r.filterOBBs(t,a,i),f.set(d),r._free(a)}function z(e){r&&r.destroy(e)===0&&(r=null)}function _(e,t){for(let n=0;n<t.length;++n)e[n]=t[n]}async function Ie(){r||await A()}function A(){return r?Promise.resolve(r):(L||(L=ne().then(e=>(r=e,L=null,r))),L)}const Re={transform:(e,t)=>r&&Y(r,e,t),destroy:z};export{Ae as destroyContext,be as dracoDecompressPointCloudData,pe as filterObbsForModifications,ie as filterObbsForModificationsSync,Ie as initialize,Le as interpretObbModificationResults,he as process,_e as project,ge as setLegacySchema,Ee as setModifications,re as setModificationsSync,Re as test,we as transformNormals};
