import{aX as y,aY as _,bd as T,F as a,G as c,f6 as S,H as A,bx as w,I as Q,a1 as P,K as j,f7 as d,_ as n,aR as f,aS as h,s as q}from"./index-b1de92dd.js";import{n as L,s as J}from"./executeForIds-6bec3e00.js";import{x as N}from"./query-d6a15cc2.js";import{a as $}from"./executeQueryJSON-05ef0dfa.js";import{n as z}from"./executeQueryPBF-c62c0774.js";async function C(e,t,r){const o=y(e);return N(o,_.from(t),{...r}).then(s=>({count:s.data.count,extent:T.fromJSON(s.data.extent)}))}let i=class extends w{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return Q(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){var u;const r=this._normalizeQuery(e),o=((u=e.outStatistics)==null?void 0:u[0])!=null,s=P("featurelayer-pbf-statistics"),l=!o||s;let p;if(this.pbfSupported&&l)try{p=await z(this.url,r,t)}catch(m){if(m.name!=="query:parsing-pbf")throw m;this.pbfSupported=!1}return this.pbfSupported&&l||(p=await $(this.url,r,t)),this._normalizeFields(p.fields),p}async featureSetFromJSON(e,t,r){if(!this._queryIs3DObjectFormat(e)||this.infoFor3D==null||!t.features)return j.fromJSON(t);const{meshFeatureSetFromJSON:o}=await d(n(()=>import("./meshFeatureSet-d935de07.js").then(s=>s.b),["assets/meshFeatureSet-d935de07.js","assets/index-b1de92dd.js","assets/index-70780820.css","assets/georeference-5ac69904.js","assets/mat3f64-221ce671.js","assets/mat4f64-1413b4a7.js","assets/spatialReferenceEllipsoidUtils-a59453f0.js","assets/MeshLocalVertexSpace-7fe312f2.js","assets/MeshGeoreferencedRelativeVertexSpace-c4ddc604.js","assets/quat-2a3003a1.js","assets/quatf64-3363c48e.js","assets/vec32-6f927a72.js","assets/BufferView-a8161be2.js","assets/imageUtils-94eca645.js","assets/earcut-d528aa83.js","assets/Indices-b4b0e69e.js","assets/deduplicate-e52def66.js","assets/plane-584635d6.js","assets/sphere-c5ebf676.js","assets/ByteSizeUnit-d4757d40.js","assets/triangle-3a2261d2.js","assets/lineSegment-b5af422f.js","assets/basicInterfaces-11f56cb3.js","assets/VertexAttribute-0e674613.js","assets/External-1dc83760.js"]),r);return o(e,this.infoFor3D,t)}executeForCount(e,t){return L(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return C(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return J(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:r},{executeRelationshipQuery:o}]=await d(Promise.all([n(()=>import("./index-b1de92dd.js").then(s=>s.nv),["assets/index-b1de92dd.js","assets/index-70780820.css"]),n(()=>import("./executeRelationshipQuery-c4a3fae5.js"),["assets/executeRelationshipQuery-c4a3fae5.js","assets/index-b1de92dd.js","assets/index-70780820.css","assets/query-d6a15cc2.js","assets/pbfQueryUtils-118df0b4.js","assets/pbf-49894844.js","assets/OptimizedGeometry-196224d4.js","assets/OptimizedFeature-e90b69df.js","assets/OptimizedFeatureSet-1d1ac4b9.js"])]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:r},{executeRelationshipQueryForCount:o}]=await d(Promise.all([n(()=>import("./index-b1de92dd.js").then(s=>s.nv),["assets/index-b1de92dd.js","assets/index-70780820.css"]),n(()=>import("./executeRelationshipQuery-c4a3fae5.js"),["assets/executeRelationshipQuery-c4a3fae5.js","assets/index-b1de92dd.js","assets/index-70780820.css","assets/query-d6a15cc2.js","assets/pbfQueryUtils-118df0b4.js","assets/pbf-49894844.js","assets/OptimizedGeometry-196224d4.js","assets/OptimizedFeature-e90b69df.js","assets/OptimizedFeatureSet-1d1ac4b9.js"])]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:r,fetchAttachments:o,processAttachmentQueryResult:s}=await d(n(()=>import("./queryAttachments-3f3478d4.js"),["assets/queryAttachments-3f3478d4.js","assets/index-b1de92dd.js","assets/index-70780820.css","assets/query-d6a15cc2.js","assets/pbfQueryUtils-118df0b4.js","assets/pbf-49894844.js","assets/OptimizedGeometry-196224d4.js","assets/OptimizedFeature-e90b69df.js","assets/OptimizedFeatureSet-1d1ac4b9.js","assets/AttachmentInfo-7cb018cd.js"]),t),l=y(this.url);return s(l,await(this.queryAttachmentsSupported?r(l,e,t):o(l,e,t)))}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:r}=await d(n(()=>import("./executeTopFeaturesQuery-be4352b6.js"),["assets/executeTopFeaturesQuery-be4352b6.js","assets/index-b1de92dd.js","assets/index-70780820.css","assets/queryTopFeatures-a3410eb2.js","assets/query-d6a15cc2.js","assets/pbfQueryUtils-118df0b4.js","assets/pbf-49894844.js","assets/OptimizedGeometry-196224d4.js","assets/OptimizedFeature-e90b69df.js","assets/OptimizedFeatureSet-1d1ac4b9.js"]),t);return r(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:r}=await d(n(()=>import("./executeForTopIds-f5c74c63.js"),["assets/executeForTopIds-f5c74c63.js","assets/index-b1de92dd.js","assets/index-70780820.css","assets/queryTopFeatures-a3410eb2.js","assets/query-d6a15cc2.js","assets/pbfQueryUtils-118df0b4.js","assets/pbf-49894844.js","assets/OptimizedGeometry-196224d4.js","assets/OptimizedFeature-e90b69df.js","assets/OptimizedFeatureSet-1d1ac4b9.js"]),t);return r(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:r}=await d(n(()=>import("./executeForTopExtents-b303b094.js"),["assets/executeForTopExtents-b303b094.js","assets/index-b1de92dd.js","assets/index-70780820.css","assets/queryTopFeatures-a3410eb2.js","assets/query-d6a15cc2.js","assets/pbfQueryUtils-118df0b4.js","assets/pbf-49894844.js","assets/OptimizedGeometry-196224d4.js","assets/OptimizedFeature-e90b69df.js","assets/OptimizedFeatureSet-1d1ac4b9.js"]),t);return r(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:r}=await d(n(()=>import("./executeForTopCount-010fed2e.js"),["assets/executeForTopCount-010fed2e.js","assets/index-b1de92dd.js","assets/index-70780820.css","assets/queryTopFeatures-a3410eb2.js","assets/query-d6a15cc2.js","assets/pbfQueryUtils-118df0b4.js","assets/pbf-49894844.js","assets/OptimizedGeometry-196224d4.js","assets/OptimizedFeature-e90b69df.js","assets/OptimizedFeatureSet-1d1ac4b9.js"]),t);return r(this.parsedUrl,e,t)}_normalizeQuery(e){let t=_.from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?S.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:r}=this;if(r!=null&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;const{supportedFormats:o,queryFormats:s}=r,l=f("model/gltf-binary",o)??h("glb",o),p=f("model/gltf+json",o)??h("gtlf",o);for(const u of s){if(u===l){t.formatOf3DObjects=u;break}u!==p||t.formatOf3DObjects||(t.formatOf3DObjects=u)}if(!t.formatOf3DObjects)throw new q("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outFields==null||!t.outFields.includes("*")){t=t===e?t.clone():t,t.outFields==null&&(t.outFields=[]);const{originX:u,originY:m,originZ:D,translationX:b,translationY:F,translationZ:x,scaleX:O,scaleY:g,scaleZ:V,rotationX:E,rotationY:R,rotationZ:v,rotationDeg:I}=r.transformFieldRoles;t.outFields.push(u,m,D,b,F,x,O,g,V,E,R,v,I)}}return t}_normalizeFields(e){if(this.fieldsIndex!=null&&e!=null)for(const t of e){const r=this.fieldsIndex.get(t.name);r&&Object.assign(t,r.toJSON())}}_queryIs3DObjectFormat(e){return this.infoFor3D!=null&&e.returnGeometry===!0&&e.multipatchOption!=="xyFootprint"&&!e.outStatistics}};a([c({type:S})],i.prototype,"dynamicDataSource",void 0),a([c()],i.prototype,"fieldsIndex",void 0),a([c()],i.prototype,"gdbVersion",void 0),a([c()],i.prototype,"infoFor3D",void 0),a([c({readOnly:!0})],i.prototype,"parsedUrl",null),a([c()],i.prototype,"pbfSupported",void 0),a([c()],i.prototype,"queryAttachmentsSupported",void 0),a([c()],i.prototype,"sourceSpatialReference",void 0),a([c({type:String})],i.prototype,"url",void 0),i=a([A("esri.tasks.QueryTask")],i);const G=i;export{G as x};