import{g_ as D,au as G,bj as V,g$ as C,h0 as H,E as $,s as I,Q as W,es as X,a4 as Q,F as _,G as T,fN as Z,eX as z,a1 as P,gC as x,ad as y,t as N,h1 as Y,h2 as B,h3 as K,h4 as tt,be as et,dZ as at,ee as st,aP as U,_ as rt,h5 as nt,e8 as it,bF as ot,b8 as ut,f as lt,h6 as dt,a_ as ct,H as pt,bs as ht}from"./index-cdf69f36.js";import{e as yt}from"./mat4f64-1413b4a7.js";import{m as mt}from"./MeshGeoreferencedRelativeVertexSpace-4886d5ff.js";import{r as ft}from"./vec32-2e7faaf1.js";import{v as gt}from"./External-48e979d6.js";import{isFeatureIdentifierArrayWithGlobalId as bt,isFeatureIdentifierArrayWithObjectId as wt}from"./editingSupport-d8ee1690.js";import{o as Rt}from"./clientSideDefaults-598ab1ac.js";import{x as St}from"./QueryTask-df25c82f.js";import{s as qt}from"./executeQueryJSON-72c2b54b.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./executeForIds-617b055c.js";import"./query-017fcda2.js";import"./pbfQueryUtils-f6cf3cfc.js";import"./pbf-9729a88e.js";import"./OptimizedGeometry-196224d4.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./executeQueryPBF-530f8318.js";import"./featureConversionUtils-e1010ffb.js";function Ft(t){const{vertexSpace:e}=t;if(e.isRelative)return t.clone();const{anchor:a}=t,s=a.clone(),r=D(At,[-s.x,-s.y,-s.z]),n=new mt({origin:[s.x,s.y,s.z]}),i=t.cloneWithVertexSpace(n),{position:o}=i.vertexAttributes;return i.vertexAttributes.position=ft(new Float64Array(o.length),o,r),i.vertexAttributesChanged(),i}const At=yt();async function j(t,e,a){const{geometry:s}=e,r={...e.attributes};if(a!=null&&(s==null?void 0:s.type)==="mesh"){const{transformFieldRoles:n}=a,{origin:i,spatialReference:o,transform:u}=s,l=t.spatialReference;await G(o,l);const c=V(i,l);if(r[n.originX]=c.x,r[n.originY]=c.y,r[n.originZ]=c.z??0,u!=null){const{translation:p,scale:h,rotation:m}=u,{vertexSpace:R}=s,d=R.isGeoreferenced?1:C(o)/C(l);r[n.translationX]=p[0]*d,r[n.translationY]=p[2]*d,r[n.translationZ]=-p[1]*d,r[n.scaleX]=h[0],r[n.scaleY]=h[2],r[n.scaleZ]=h[1],r[n.rotationX]=m[0],r[n.rotationY]=m[2],r[n.rotationZ]=-m[1],r[n.rotationDeg]=m[3]}return{attributes:r}}return s==null?{attributes:r}:s.type==="mesh"||s.type==="extent"?null:{geometry:s.toJSON(),attributes:r}}async function It(t,e){const a=await Promise.all((e.addAttachments??[]).map(n=>L(t,n))),s=await Promise.all((e.updateAttachments??[]).map(n=>L(t,n))),r=e.deleteAttachments??[];return a.length||s.length||r.length?{adds:a,updates:s,deletes:[...r]}:null}async function L(t,e){var c;const{feature:a,attachment:s}=e,{globalId:r,name:n,contentType:i,data:o,uploadId:u}=s,l={globalId:r};if(a&&("attributes"in a?l.parentGlobalId=(c=a.attributes)==null?void 0:c[t.globalIdField]:a.globalId&&(l.parentGlobalId=a.globalId)),u)l.uploadId=u;else if(o){const p=await H(o);p&&(l.contentType=p.mediaType,l.data=p.data),o instanceof File&&(l.name=o.name)}return n&&(l.name=n),i&&(l.contentType=i),l}function Ot(t,e,a){if(!e||e.length===0)return[];if(a&&bt(e))return e.map(r=>r.globalId);if(wt(e))return e.map(r=>r.objectId);const s=a?t.globalIdField:t.objectIdField;return s?e.map(r=>r.getAttribute(s)):[]}function Et(t){var r,n,i;const e=t==null?void 0:t.assetMaps;if(e){for(const o of e.addResults)o.success||$.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${o.globalId}.`);for(const o of e.updateResults)o.success||$.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${o.globalId}.`)}const a=t==null?void 0:t.attachments,s={addFeatureResults:((r=t==null?void 0:t.addResults)==null?void 0:r.map(w))??[],updateFeatureResults:((n=t==null?void 0:t.updateResults)==null?void 0:n.map(w))??[],deleteFeatureResults:((i=t==null?void 0:t.deleteResults)==null?void 0:i.map(w))??[],addAttachmentResults:a!=null&&a.addResults?a.addResults.map(w):[],updateAttachmentResults:a!=null&&a.updateResults?a.updateResults.map(w):[],deleteAttachmentResults:a!=null&&a.deleteResults?a.deleteResults.map(w):[]};return t!=null&&t.editMoment&&(s.editMoment=t.editMoment),s}function w(t){const e=t.success===!0?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:e?new I("feature-layer-source:edit-failure",e.description,{code:e.code}):null}}function v(t,e){return new W({attributes:t.attributes,geometry:X({...t.geometry,spatialReference:e})})}function _t(t,e){var a,s,r;return{adds:((a=t==null?void 0:t.adds)==null?void 0:a.map(n=>v(n,e)))||[],updates:((s=t==null?void 0:t.updates)==null?void 0:s.map(n=>({original:v(n[0],e),current:v(n[1],e)})))||[],deletes:((r=t==null?void 0:t.deletes)==null?void 0:r.map(n=>v(n,e)))||[],spatialReference:e}}function xt(t){const e=t.details.raw,a=+e.code,s=+e.extendedCode;return a===500&&(s===-2147217144||s===-2147467261)}const vt=new Q({originalAndCurrentFeatures:"original-and-current-features",none:"none"}),$t=new Set(["Feature Layer","Oriented Imagery Layer","Table"]),Tt=new Q({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let F=class extends Z{constructor(){super(...arguments),this.type="feature-layer",this.refresh=z(async()=>{var a,s;await this.load();const t=(a=this.sourceJSON.editingInfo)==null?void 0:a.lastEditDate;if(t==null)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const e=t!==((s=this.sourceJSON.editingInfo)==null?void 0:s.lastEditDate);return{dataChanged:e,updates:e?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}}),this._ongoingAssetUploads=new Map}load(t){const e=this.layer.sourceJSON,a=this._fetchService(e,{...t}).then(()=>this.layer.setUserPrivileges(this.sourceJSON.serviceItemId,t)).then(()=>this._ensureLatestMetadata(t));return this.addResolvingPromise(a),Promise.resolve(this)}get queryTask(){var l;const{capabilities:t,parsedUrl:e,dynamicDataSource:a,infoFor3D:s,gdbVersion:r,spatialReference:n,fieldsIndex:i}=this.layer,o=P("featurelayer-pbf")&&(t==null?void 0:t.query.supportsFormatPBF)&&s==null,u=((l=t==null?void 0:t.operations)==null?void 0:l.supportsQueryAttachments)??!1;return new St({url:e.path,pbfSupported:o,fieldsIndex:i,infoFor3D:s,dynamicDataSource:a,gdbVersion:r,sourceSpatialReference:n,queryAttachmentsSupported:u})}async addAttachment(t,e){await this.load();const{layer:a}=this;await x(a,"editing");const s=t.attributes[a.objectIdField],r=a.parsedUrl.path+"/"+s+"/addAttachment",n=this._getLayerRequestOptions(),i=this._getFormDataForAttachment(e,n.query);try{const o=await y(r,{body:i});return w(o.data.addAttachmentResult)}catch(o){throw this._createAttachmentErrorResult(s,o)}}async updateAttachment(t,e,a){await this.load();const{layer:s}=this;await x(s,"editing");const r=t.attributes[s.objectIdField],n=s.parsedUrl.path+"/"+r+"/updateAttachment",i=this._getLayerRequestOptions({query:{attachmentId:e}}),o=this._getFormDataForAttachment(a,i.query);try{const u=await y(n,{body:o});return w(u.data.updateAttachmentResult)}catch(u){throw this._createAttachmentErrorResult(r,u)}}async applyEdits(t,e){var g,q,E,M,J,k;await this.load();const{layer:a}=this;await x(a,"editing");const s=a.infoFor3D,r=s!=null,n=r||((e==null?void 0:e.globalIdUsed)??!1),i=r?await this._uploadMeshesAndGetAssetMapEditsJSON(t):null,o=((g=t.addFeatures)==null?void 0:g.map(b=>j(this.layer,b,s)))??[],u=(await Promise.all(o)).filter(N),l=((q=t.updateFeatures)==null?void 0:q.map(b=>j(this.layer,b,s)))??[],c=(await Promise.all(l)).filter(N),p=Ot(this.layer,t.deleteFeatures,n);Y(u,c,a.spatialReference);const h=await It(this.layer,t),m=a.capabilities.editing.supportsAsyncApplyEdits&&r,R=(e==null?void 0:e.gdbVersion)||a.gdbVersion,d={gdbVersion:R,rollbackOnFailure:e==null?void 0:e.rollbackOnFailureEnabled,useGlobalIds:n,returnEditMoment:e==null?void 0:e.returnEditMoment,usePreviousEditMoment:e==null?void 0:e.usePreviousEditMoment,async:m};await B(this.layer.url,R,!0);const O=K(this.layer.url,R||null);e!=null&&e.returnServiceEditsOption?(d.edits=JSON.stringify([{id:a.layerId,adds:u,updates:c,deletes:p,attachments:h,assetMaps:i}]),d.returnServiceEditsOption=vt.toJSON(e==null?void 0:e.returnServiceEditsOption),d.returnServiceEditsInSourceSR=e==null?void 0:e.returnServiceEditsInSourceSR):(d.adds=u.length?JSON.stringify(u):null,d.updates=c.length?JSON.stringify(c):null,d.deletes=p.length?n?JSON.stringify(p):p.join(","):null,d.attachments=h&&JSON.stringify(h),d.assetMaps=i!=null?JSON.stringify(i):void 0);const f=this._getLayerRequestOptions({method:"post",query:d});O&&(f.authMode="immediate",f.query.returnEditMoment=!0,f.query.sessionId=tt);const S=e!=null&&e.returnServiceEditsOption?a.url:a.parsedUrl.path;let A;try{A=m?await this._asyncApplyEdits(S+"/applyEdits",f):await y(S+"/applyEdits",f)}catch(b){if(!xt(b))throw b;f.authMode="immediate",A=m?await this._asyncApplyEdits(S+"/applyEdits",f):await y(S+"/applyEdits",f)}if(!((E=a.capabilities.operations)!=null&&E.supportsEditing)&&((J=(M=a.effectiveCapabilities)==null?void 0:M.operations)!=null&&J.supportsEditing)){const b=(k=ht)==null?void 0:k.findCredential(a.url);await(b==null?void 0:b.refreshToken())}return this._createEditsResult(A)}async deleteAttachments(t,e){await this.load();const{layer:a}=this;await x(a,"editing");const s=t.attributes[a.objectIdField],r=a.parsedUrl.path+"/"+s+"/deleteAttachments";try{return(await y(r,this._getLayerRequestOptions({query:{attachmentIds:e.join(",")},method:"post"}))).data.deleteAttachmentResults.map(w)}catch(n){throw this._createAttachmentErrorResult(s,n)}}fetchRecomputedExtents(t={}){const e=t.signal;return this.load({signal:e}).then(async()=>{const a=this._getLayerRequestOptions({...t,query:{returnUpdates:!0}}),{layerId:s,url:r}=this.layer,{data:n}=await y(`${r}/${s}`,a),{id:i,extent:o,fullExtent:u,timeExtent:l}=n,c=o||u;return{id:i,fullExtent:c&&et.fromJSON(c),timeExtent:l&&at.fromJSON({start:l[0],end:l[1]})}})}async queryAttachments(t,e={}){await this.load();const a=this._getLayerRequestOptions(e);return this.queryTask.executeAttachmentQuery(t,a)}async queryFeatures(t,e){var s;await this.load();const a=await this.queryTask.execute(t,{...e,query:this._createRequestQueryOptions(e)});return(s=t.outStatistics)!=null&&s.length&&a.features.length&&a.features.forEach(r=>{var i;const n=r.attributes;(i=t.outStatistics)==null||i.forEach(({outStatisticFieldName:o})=>{if(o){const u=o.toLowerCase();u&&u in n&&o!==u&&(n[o]=n[u],delete n[u])}})}),a}async queryFeaturesJSON(t,e){return await this.load(),this.queryTask.executeJSON(t,{...e,query:this._createRequestQueryOptions(e)})}async queryObjectIds(t,e){return await this.load(),this.queryTask.executeForIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryFeatureCount(t,e){return await this.load(),this.queryTask.executeForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryExtent(t,e){return await this.load(),this.queryTask.executeForExtent(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeatures(t,e){return await this.load(),this.queryTask.executeRelationshipQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeaturesCount(t,e){return await this.load(),this.queryTask.executeRelationshipQueryForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopFeatures(t,e){return await this.load(),this.queryTask.executeTopFeaturesQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopObjectIds(t,e){return await this.load(),this.queryTask.executeForTopIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopExtents(t,e){return await this.load(),this.queryTask.executeForTopExtents(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopCount(t,e){return await this.load(),this.queryTask.executeForTopCount(t,{...e,query:this._createRequestQueryOptions(e)})}async fetchPublishingStatus(){if(!st(this.layer.url))return"unavailable";const t=U(this.layer.url,"status"),e=await y(t,{query:{f:"json"}});return Tt.fromJSON(e.data.status)}async uploadAssets(t,e){const{uploadAssets:a}=await rt(()=>import("./uploadAssets-7dbe7b23.js"),["assets/uploadAssets-7dbe7b23.js","assets/index-cdf69f36.js","assets/index-60f86da2.css","assets/External-48e979d6.js"]);return a(t,{layer:this.layer,ongoingUploads:this._ongoingAssetUploads},e)}async _asyncApplyEdits(t,e){const a=(await y(t,e)).data.statusUrl;for(;;){const s=(await y(a,{query:{f:"json"},responseType:"json"})).data;switch(s.status){case"Completed":return y(s.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new I("async-applyEdits-failed","asynchronous applyEdits call failed.");case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new I("async-applyEdits-failed","asynchronous applyEdits call failed (undefined response status)")}await nt(Nt)}}_createRequestQueryOptions(t){const e={...this.layer.customParameters,token:this.layer.apiKey,...t==null?void 0:t.query};return this.layer.datesInUnknownTimezone&&(e.timeReferenceUnknownClient=!0),e}async _fetchService(t,e){if(!t){const s={};P("featurelayer-advanced-symbols")&&(s.returnAdvancedSymbols=!0),e!=null&&e.cacheBust&&(s._ts=Date.now());const{data:r}=await y(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:s,signal:e==null?void 0:e.signal}));t=r}this.sourceJSON=await this._patchServiceJSON(t,e==null?void 0:e.signal);const a=t.type;if(!$t.has(a))throw new I("feature-layer-source:unsupported-type",`Source type "${a}" is not supported`)}async _patchServiceJSON(t,e){var a;if(t.type!=="Table"&&t.geometryType&&!((a=t==null?void 0:t.drawingInfo)!=null&&a.renderer)&&!t.defaultSymbol){const s=Rt(t.geometryType).renderer;it("drawingInfo.renderer",s,t)}if(t.geometryType==="esriGeometryMultiPatch"&&t.infoFor3D&&(t.geometryType="mesh"),t.extent==null)try{const{data:s}=await y(this.layer.url,this._getLayerRequestOptions({signal:e}));s.spatialReference&&(t.extent={xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:s.spatialReference})}catch(s){ot(s)}return t}async _ensureLatestMetadata(t){if(this.layer.userHasUpdateItemPrivileges&&this.sourceJSON.cacheMaxAge>0)return this._fetchService(null,{...t,cacheBust:!0})}async _uploadMeshesAndGetAssetMapEditsJSON(t){const{addAssetFeatures:e}=t;if(!(e!=null&&e.length))return null;const a=await this._filterRedundantAssetMaps(e);if(!(e!=null&&e.length))return null;const s=new Array,r=new Map;for(const n of a){const{geometry:i}=n,{vertexSpace:o}=i;if(o.isRelative)s.push(i);else{const u=Ft(i);r.set(u,i),n.geometry=u,s.push(u)}}await this.uploadAssets(s);for(const[n,i]of r)i.addExternalSources(n.metadata.externalSources.items);return{adds:this._getAssetMapEditsJSON(a),updates:[],deletes:[]}}_getAssetMapEditsJSON(t){const e=new Array,a=this.layer.globalIdField,s=this.layer.parsedUrl;for(const r of t){const n=r.geometry,{metadata:i}=n,o=i.getExternalSourcesOnService(s),u=r.getAttribute(a);if(o.length===0){$.getLogger(this).error(`Skipping feature ${u}. The mesh it is associated with has not been uploaded to the service and cannot be mapped to it.`);continue}const{source:l}=o.find(gt)??o[0],{vertexSpace:c}=n,p=c.isGeoreferenced?["PROJECT_VERTICES"]:[];for(const h of l)h.parts.length===1?e.push({globalId:ut(),parentGlobalId:u,assetName:h.assetName,assetHash:h.parts[0].partHash,flags:p}):$.getLogger(this).error(`Skipping asset ${h.assetName}. It does not have exactly one part, so we cannot map it to a feature.`)}return e}_createEditsResult(t){const e=t.data,{layerId:a}=this.layer,s=[];let r=null;if(Array.isArray(e))for(const i of e)s.push({id:i.id,editedFeatures:i.editedFeatures}),i.id===a&&(r={addResults:i.addResults??[],updateResults:i.updateResults??[],deleteResults:i.deleteResults??[],attachments:i.attachments,editMoment:i.editMoment});else r=e;const n=Et(r);if(s.length>0){n.editedFeatureResults=[];for(const i of s){const{editedFeatures:o}=i,u=o!=null&&o.spatialReference?new lt(o.spatialReference):null;n.editedFeatureResults.push({layerId:i.id,editedFeatures:_t(o,u)})}}return n}_createAttachmentErrorResult(t,e){var r;const a=((r=e.details.messages)==null?void 0:r[0])||e.message,s=e.details.httpStatus||e.details.messageCode;return{objectId:t,globalId:null,error:new I("feature-layer-source:attachment-failure",a,{code:s})}}_getFormDataForAttachment(t,e){const a=t instanceof FormData?t:t&&t.elements?new FormData(t):null;if(a)for(const s in e){const r=e[s];r!=null&&(a.set?a.set(s,r):a.append(s,r))}return a}_getLayerRequestOptions(t={}){const{parsedUrl:e,gdbVersion:a,dynamicDataSource:s}=this.layer;return{...t,query:{gdbVersion:a,layer:s?JSON.stringify({source:s}):void 0,...e.query,f:"json",...this._createRequestQueryOptions(t)},responseType:"json"}}async _filterRedundantAssetMaps(t){const{layer:e}=this,{globalIdField:a,infoFor3D:s,parsedUrl:r}=e;if(s==null||a==null)return t;const n=dt(s);if(n==null)return t;const i=U(r.path,`../${n.id}`),o=new Array,u=new Array;for(const d of t)d.geometry.metadata.getExternalSourcesOnService(r).length>0?u.push(d):o.push(d);const l=u.map(d=>d.getAttribute(a)).filter(N);if(l.length===0)return t;const{assetMapFieldRoles:{parentGlobalId:c,assetHash:p}}=s,h=new ct;h.where=`${c} IN (${l.map(d=>`'${d}'`)})`,h.outFields=[p,c],h.returnGeometry=!1;const m=await qt(i,h),{features:R}=m;return R.length===0?t:[...o,...u.filter(d=>{const O=d.getAttribute(a);if(!O)return!0;const{metadata:f}=d.geometry,S=R.filter(g=>g.getAttribute(c)===O);if(S.length===0)return!0;const A=S.map(g=>g.getAttribute(p));return f.getExternalSourcesOnService(r).flatMap(({source:g})=>g.flatMap(q=>q.parts.map(E=>E.partHash))).some(g=>A.every(q=>g!==q))})]}};_([T()],F.prototype,"type",void 0),_([T({constructOnly:!0})],F.prototype,"layer",void 0),_([T({readOnly:!0})],F.prototype,"queryTask",null),F=_([pt("esri.layers.graphics.sources.FeatureLayerSource")],F);const Nt=1e3,Kt=F;export{Kt as default};
