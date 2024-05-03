import{s as g,a1 as N,he as es,B as ts,is as D,db as v,it as S,aL as h,a9 as m,aI as u,ee as os,b5 as as,iu as ns,aP as U,h5 as rs,aQ as is,bN as cs,h0 as ls,E as us}from"./index-08b3f6d9.js";import{h as ps,N as ds,i as k,o as B,A as ms}from"./External-a75c2e33.js";const w="upload-assets",y=()=>new Error;class fs extends g{constructor(){super(`${w}:unsupported`,"Layer does not support asset uploads.",y())}}class hs extends g{constructor(){super(`${w}:no-glb-support`,"Layer does not support glb.",y())}}let gs=class extends g{constructor(){super(`${w}:no-supported-source`,"No supported external source found",y())}},ws=class extends g{constructor(){super(`${w}:not-base-64`,"Expected gltf data in base64 format after conversion.",y())}},ys=class extends g{constructor(){super(`${w}:unable-to-prepare-options`,"Unable to prepare uploadAsset request options.",y())}};class bs extends g{constructor(t,s){super(`${w}:bad-response`,`Bad response. Uploaded ${t} items and received ${s} results.`,y())}}let Ps=class extends g{constructor(t,s){super(`${w}-layer:upload-failed`,`Failed to upload mesh file ${t}. Error code: ${(s==null?void 0:s.code)??"-1"}. Error message: ${(s==null?void 0:s.messages)??"unknown"}`,y())}};class O extends g{constructor(t){super(`${w}-layer:unsupported-format`,`The service allowed us to upload an asset of FormatID ${t}, but it does not list it in its supported formats.`,y())}}let Ts=class extends g{constructor(){super(`${w}:convert3D-failed`,"convert3D failed.")}};const F={upload:{createFromFiles:.8,loadMesh:.2},uploadAssetBlobs:{prepareAssetItems:.9,uploadAssetItems:.1},uploadConvertibleSource:{uploadEditSource:.5,serviceAssetsToGlb:.5},uploadLocalMesh:{meshToAssetBlob:.5,uploadAssetBlobs:.5}};function b(e,t=o=>{},s){return new As(e,t,s)}class As{constructor(t,s=a=>{},o){if(this.onProgress=s,this.taskName=o,this._progressMap=new Map,this._startTime=void 0,this._timingsMap=new Map,typeof t=="number"){this._weights={};for(let a=0;a<t;a++){const n=a,r=1/t;this._weights[n]=r,this._progressMap.set(n,0)}}else this._weights=t;this.emitProgress()}emitProgress(){let t=0;for(const[s,o]of this._progressMap.entries())t+=o*this._weights[s];if(t===1&&N("enable-feature:esri-3dofl-upload-timings")){const s=Math.round(performance.now()-(this._startTime??0))/1e3;console.log(`${this.taskName} done in ${s} sec`);for(const[o,a]of this._timingsMap){const n=Math.round(a.end-a.start)/1e3,r=Math.round(n/s*100);console.log(this.taskName??"Task",{stepKey:o,stepTime:n,relativeTime:r})}}this.onProgress(t)}setProgress(t,s){if(this._progressMap.set(t,s),N("enable-feature:esri-3dofl-upload-timings")){const o=performance.now();this._startTime??(this._startTime=o);const a=es(this._timingsMap,t,()=>({start:o,end:0}));s===1&&(a.end=o)}this.emitProgress()}simulate(t,s){return q(o=>this.setProgress(t,o),s)}makeOnProgress(t){return s=>this.setProgress(t,s)}}function q(e=s=>{},t=Ms){const s=performance.now();e(0);const o=setInterval(()=>{const a=performance.now()-s,n=1-Math.exp(-a/t);e(n)},Es);return ts(()=>{clearInterval(o),e(1)})}function $s(e,t=vs){return D(S(e*C/t))}function xs(e,t=Fs){return D(S(e*C/t))}const vs=10,Fs=10,C=8e-6,Es=v(50),Ms=v(1e3),L=1e6,_=20*L,js=2e9,Is=3;async function Ns({data:e,name:t,description:s},o,a){let n=null;try{const r=h(o,"uploads"),i=h(r,"info"),{data:c}=await m(i,{query:{f:"json"},responseType:"json"});u(a);const p=os(o),l=c.maxUploadFileSize*L,f=p?js:l,x=p?Math.min(_,l):_;if(e.size>f)throw new Error("Data too large");const J=h(r,"register"),{data:E}=await m(J,{query:{f:"json",itemName:_s(t),description:s},responseType:"json",method:"post"});if(u(a),!E.success)throw new Error("Registration failed");const{itemID:W}=E.item;n=h(r,W);const K=h(n,"uploadPart"),M=Math.ceil(e.size/x),P=new Array;for(let d=0;d<M;++d)P.push(e.slice(d*x,Math.min((d+1)*x,e.size)));const T=P.slice().reverse(),j=new Array,Q=b(M,a==null?void 0:a.onProgress,"uploadItem"),V=async()=>{for(;T.length!==0;){const d=P.length-T.length,A=T.pop(),$=new FormData,Y=Q.simulate(d,$s(A.size));try{const Z=A;$.append("f","json"),$.append("file",Z),$.append("partId",`${d}`);const{data:ss}=await m(K,{timeout:0,body:$,responseType:"json",method:"post"});if(u(a),!ss.success)throw new Error("Part upload failed")}finally{Y.remove()}}};for(let d=0;d<Is&&T.length!==0;++d)j.push(V());await Promise.all(j);const X=h(n,"commit"),{data:I}=await m(X,{query:{f:"json",parts:P.map((d,A)=>A).join(",")},responseType:"json",method:"post"});if(u(a),!I.success)throw new Error("Commit failed");return I.item}catch(r){if(n!=null){const i=h(n,"delete");await m(i,{query:{f:"json"},responseType:"json",method:"post"})}throw r}}function _s(e){return e.replaceAll("/","_").replaceAll("\\","_")}async function re(e,t,s){var n;const o=e.length;if(!o)return(n=s==null?void 0:s.onProgress)==null||n.call(s,1),[];const a=b(o,s==null?void 0:s.onProgress,"uploadAssets");return Promise.all(e.map((r,i)=>Ds(r,t,{...s,onProgress:a.makeOnProgress(i)})))}async function Ds(e,{layer:t,ongoingUploads:s},o){var r;const a=s.get(e);if(a)return a;if(!Vs(t))throw new fs;if(Ss(e,t))return(r=o==null?void 0:o.onProgress)==null||r.call(o,1),e;const n=Us(e,t,o);s.set(e,n);try{await n}finally{s.delete(e)}return e}function Ss(e,t){const{parsedUrl:s}=t;return s!=null&&e.metadata.externalSources.some(o=>ps(o,s))}async function Us(e,t,s){const{metadata:o}=e,{displaySource:a}=o,n=R(a==null?void 0:a.source,t),r=!!n,i=o.externalSources.length>0,c=r?ks(n,t,s):i?Bs(e,t,s):Os(e,t,s),p=await c;return u(s),e.addExternalSources([p]),e}async function ks(e,t,s){return{source:await z(e,t,s),original:!0}}async function Bs(e,t,s){const o=G(t),{externalSources:a}=e.metadata,n=Cs(a,t);if(!n)throw new gs;const r=b(F.uploadConvertibleSource,s==null?void 0:s.onProgress,"uploadConvertibleSource"),i=await z(n,t,{onProgress:r.makeOnProgress("uploadEditSource")});e.addExternalSources([{source:i,original:!0}]);const c=n.reduce((l,{asset:f})=>f instanceof File?l+f.size:l,0),p=r.simulate("serviceAssetsToGlb",xs(c));try{return{source:await Ws(i,t,o)}}finally{p.remove()}}async function Os(e,t,s){const o=b(F.uploadLocalMesh,s==null?void 0:s.onProgress,"uploadLocalMesh"),a=qs(e,t,{...s,onProgress:o.makeOnProgress("meshToAssetBlob")});return{source:await H([a],t,{...s,onProgress:o.makeOnProgress("uploadAssetBlobs")}),extent:e.extent.clone(),original:!0}}async function qs(e,t,s){const o=G(t),a=await e.load(s),n=await a.toBinaryGLTF({ignoreLocalTransform:!0});u(s);const r=await n.buffer();return u(s),{blob:new Blob([r.data],{type:r.type}),assetName:`${as()}.glb`,assetType:o}}function Cs(e,t){for(const s of e){const o=R(s.source,t);if(o)return o}return null}function R(e,t){if(!e)return null;const{infoFor3D:{supportedFormats:s,editFormats:o}}=t,a=ms(e),n=new Array;let r=!1;for(let i=0;i<a.length;++i){const c=Ls(a[i],s);if(!c)return null;o.includes(c.assetType)&&(r=!0),n.push(c)}return r?n:null}function Ls(e,t){const s=ds(e,t);return s?{asset:e,assetType:s}:null}async function z(e,t,s){return H(e.map(o=>Rs(o,s)),t,s)}async function H(e,t,s){const o=b(F.uploadAssetBlobs,s==null?void 0:s.onProgress,"uploadAssetBlobs"),a=await Hs(e,t,{...s,onProgress:o.makeOnProgress("prepareAssetItems")});u(s);const n=a.map(({item:i})=>i),{uploadResults:r}=await Gs(n,t,{...s,onProgress:o.makeOnProgress("uploadAssetItems")});return u(s),e.map((i,c)=>Js(a[c],r[c],t))}async function Rs(e,t){const{asset:s,assetType:o}=e;if(s instanceof File)return{blob:s,assetName:s.name,assetType:o};const a=await s.toBlob(t);return u(t),{blob:a,assetName:s.assetName,assetType:o}}async function zs(e,t,s){const{blob:o,assetType:a,assetName:n}=e;let r=null;try{const i=await Ns({data:o,name:n},t.url,s);u(s),r={assetType:a,assetUploadId:i.itemID}}catch(i){cs(i),Xs().warnOnce(`Service ${t.url} does not support the REST Uploads API.`)}if(!r){const i=await ls(o);if(u(s),!i.isBase64)throw new ws;r={assetType:a,assetData:i.data}}if(!r)throw new ys;return{item:r,assetName:n}}function Hs(e,t,s){const o=b(e.length,s==null?void 0:s.onProgress,"prepareAssetItems");return Promise.all(e.map(async(a,n)=>{const r=zs(await a,t,{...s,onProgress:o.makeOnProgress(n)});return u(s),r}))}async function Gs(e,t,s){const o=q(s==null?void 0:s.onProgress);try{const a=await m(h(t.parsedUrl.path,"uploadAssets"),{timeout:0,query:{f:"json",assets:JSON.stringify(e)},method:"post",responseType:"json"});if(u(s),a.data.uploadResults.length!==e.length)throw new bs(e.length,a.data.uploadResults.length);return a.data}finally{o.remove()}}function Js(e,t,s){const{success:o}=t;if(!o){const{error:p}=t;throw new Ps(e.assetName,p)}const{assetHash:a}=t,{assetName:n,item:{assetType:r}}=e,{infoFor3D:{supportedFormats:i}}=s,c=ns(r,i);if(!c)throw new O(r);return new k(n,c,[new B(`${s.parsedUrl.path}/assets/${a}`,a)])}async function Ws(e,t,s){var p;const o=e.map(({assetName:l,parts:f})=>({assetName:l,assetHash:f[0].partHash})),a=(p=t.capabilities)==null?void 0:p.operations.supportsAsyncConvert3D,n={f:"json",assets:JSON.stringify(o),transportType:"esriTransportTypeUrl",targetFormat:s,async:a},r=h(t.parsedUrl.path,"convert3D");let i;try{i=(await(a?Qs:Ks)(r,{query:n,responseType:"json",timeout:0})).data}catch{throw new Ts}const{supportedFormats:c}=t.infoFor3D;return i.assets.map(l=>{const f=U(l.contentType,c);if(!f)throw new O(f);return new k(l.assetName,l.contentType,[new B(l.assetURL,l.assetHash)])})}function Ks(e,t){return m(e,t)}async function Qs(e,t){const s=(await m(e,t)).data.statusUrl;for(;;){const o=(await m(s,{query:{f:"json"},responseType:"json"})).data;switch(o.status){case"Completed":return m(o.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new Error(o.status);case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new Error}await rs(Ys)}}function Vs(e){return!!e.infoFor3D&&!!e.url}function G(e){const{infoFor3D:t}=e,s=U("model/gltf-binary",t.supportedFormats)??is("glb",t.supportedFormats);if(!s)throw new hs;return s}function Xs(){return us.getLogger("esri.layers.graphics.sources.support.uploadAssets")}const Ys=v(1e3);export{re as uploadAssets};
