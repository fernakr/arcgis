import{aZ as y,a_ as _,be as T,F as a,G as c,f6 as D,H as A,bz as w,I as Q,a1 as P,K as j,f7 as d,_ as n,aT as f,aU as h,s as q}from"./index-8fbcd33f.js";import{n as L,s as z}from"./executeForIds-836a306b.js";import{x as J}from"./query-20743e72.js";import{a as N}from"./executeQueryJSON-a040113d.js";import{n as $}from"./executeQueryPBF-6baa5e80.js";async function U(e,t,r){const o=y(e);return J(o,_.from(t),{...r}).then(s=>({count:s.data.count,extent:T.fromJSON(s.data.extent)}))}let i=class extends w{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return Q(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){var u;const r=this._normalizeQuery(e),o=((u=e.outStatistics)==null?void 0:u[0])!=null,s=P("featurelayer-pbf-statistics"),l=!o||s;let p;if(this.pbfSupported&&l)try{p=await $(this.url,r,t)}catch(m){if(m.name!=="query:parsing-pbf")throw m;this.pbfSupported=!1}return this.pbfSupported&&l||(p=await N(this.url,r,t)),this._normalizeFields(p.fields),p}async featureSetFromJSON(e,t,r){if(!this._queryIs3DObjectFormat(e)||this.infoFor3D==null||!t.features)return j.fromJSON(t);const{meshFeatureSetFromJSON:o}=await d(n(()=>import("./meshFeatureSet-757c3337.js").then(s=>s.b),["assets/meshFeatureSet-757c3337.js","assets/index-8fbcd33f.js","assets/index-6a7e6584.css","assets/georeference-20b21262.js","assets/mat3f64-221ce671.js","assets/mat4f64-1413b4a7.js","assets/spatialReferenceEllipsoidUtils-855d24c3.js","assets/MeshLocalVertexSpace-9b5d58a3.js","assets/MeshGeoreferencedRelativeVertexSpace-82a477f0.js","assets/quat-0a70cab0.js","assets/quatf64-3363c48e.js","assets/vec32-fe49636b.js","assets/BufferView-eedaf8d4.js","assets/imageUtils-4b6d854e.js","assets/earcut-b55b59bd.js","assets/Indices-18890621.js","assets/deduplicate-78a7fde7.js","assets/plane-010e82a7.js","assets/sphere-4d54de58.js","assets/ByteSizeUnit-d4757d40.js","assets/triangle-bc2ad39c.js","assets/lineSegment-fc230787.js","assets/basicInterfaces-11f56cb3.js","assets/VertexAttribute-0e674613.js","assets/External-2fe3e65b.js"]),r);return o(e,this.infoFor3D,t)}executeForCount(e,t){return L(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return U(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return z(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:r},{executeRelationshipQuery:o}]=await d(Promise.all([n(()=>import("./index-8fbcd33f.js").then(s=>s.nv),["assets/index-8fbcd33f.js","assets/index-6a7e6584.css"]),n(()=>import("./executeRelationshipQuery-6747087a.js"),["assets/executeRelationshipQuery-6747087a.js","assets/index-8fbcd33f.js","assets/index-6a7e6584.css","assets/query-20743e72.js","assets/pbfQueryUtils-e5f23f69.js","assets/pbf-42562d1b.js","assets/OptimizedGeometry-196224d4.js","assets/OptimizedFeature-e90b69df.js","assets/OptimizedFeatureSet-1d1ac4b9.js"])]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:r},{executeRelationshipQueryForCount:o}]=await d(Promise.all([n(()=>import("./index-8fbcd33f.js").then(s=>s.nv),["assets/index-8fbcd33f.js","assets/index-6a7e6584.css"]),n(()=>import("./executeRelationshipQuery-6747087a.js"),["assets/executeRelationshipQuery-6747087a.js","assets/index-8fbcd33f.js","assets/index-6a7e6584.css","assets/query-20743e72.js","assets/pbfQueryUtils-e5f23f69.js","assets/pbf-42562d1b.js","assets/OptimizedGeometry-196224d4.js","assets/OptimizedFeature-e90b69df.js","assets/OptimizedFeatureSet-1d1ac4b9.js"])]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:r,fetchAttachments:o,processAttachmentQueryResult:s}=await d(n(()=>import("./queryAttachments-9a06b67b.js"),["assets/queryAttachments-9a06b67b.js","assets/index-8fbcd33f.js","assets/index-6a7e6584.css","assets/query-20743e72.js","assets/pbfQueryUtils-e5f23f69.js","assets/pbf-42562d1b.js","assets/OptimizedGeometry-196224d4.js","assets/OptimizedFeature-e90b69df.js","assets/OptimizedFeatureSet-1d1ac4b9.js","assets/AttachmentInfo-e9a89f9e.js"]),t),l=y(this.url);return s(l,await(this.queryAttachmentsSupported?r(l,e,t):o(l,e,t)))}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:r}=await d(n(()=>import("./executeTopFeaturesQuery-64fa84d3.js"),["assets/executeTopFeaturesQuery-64fa84d3.js","assets/index-8fbcd33f.js","assets/index-6a7e6584.css","assets/queryTopFeatures-0889e43f.js","assets/query-20743e72.js","assets/pbfQueryUtils-e5f23f69.js","assets/pbf-42562d1b.js","assets/OptimizedGeometry-196224d4.js","assets/OptimizedFeature-e90b69df.js","assets/OptimizedFeatureSet-1d1ac4b9.js"]),t);return r(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:r}=await d(n(()=>import("./executeForTopIds-2c6aa0bd.js"),["assets/executeForTopIds-2c6aa0bd.js","assets/index-8fbcd33f.js","assets/index-6a7e6584.css","assets/queryTopFeatures-0889e43f.js","assets/query-20743e72.js","assets/pbfQueryUtils-e5f23f69.js","assets/pbf-42562d1b.js","assets/OptimizedGeometry-196224d4.js","assets/OptimizedFeature-e90b69df.js","assets/OptimizedFeatureSet-1d1ac4b9.js"]),t);return r(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:r}=await d(n(()=>import("./executeForTopExtents-93ccc052.js"),["assets/executeForTopExtents-93ccc052.js","assets/index-8fbcd33f.js","assets/index-6a7e6584.css","assets/queryTopFeatures-0889e43f.js","assets/query-20743e72.js","assets/pbfQueryUtils-e5f23f69.js","assets/pbf-42562d1b.js","assets/OptimizedGeometry-196224d4.js","assets/OptimizedFeature-e90b69df.js","assets/OptimizedFeatureSet-1d1ac4b9.js"]),t);return r(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:r}=await d(n(()=>import("./executeForTopCount-807d3c2d.js"),["assets/executeForTopCount-807d3c2d.js","assets/index-8fbcd33f.js","assets/index-6a7e6584.css","assets/queryTopFeatures-0889e43f.js","assets/query-20743e72.js","assets/pbfQueryUtils-e5f23f69.js","assets/pbf-42562d1b.js","assets/OptimizedGeometry-196224d4.js","assets/OptimizedFeature-e90b69df.js","assets/OptimizedFeatureSet-1d1ac4b9.js"]),t);return r(this.parsedUrl,e,t)}_normalizeQuery(e){let t=_.from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?D.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:r}=this;if(r!=null&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;const{supportedFormats:o,queryFormats:s}=r,l=f("model/gltf-binary",o)??h("glb",o),p=f("model/gltf+json",o)??h("gtlf",o);for(const u of s){if(u===l){t.formatOf3DObjects=u;break}u!==p||t.formatOf3DObjects||(t.formatOf3DObjects=u)}if(!t.formatOf3DObjects)throw new q("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outFields==null||!t.outFields.includes("*")){t=t===e?t.clone():t,t.outFields==null&&(t.outFields=[]);const{originX:u,originY:m,originZ:S,translationX:b,translationY:F,translationZ:x,scaleX:O,scaleY:g,scaleZ:V,rotationX:E,rotationY:R,rotationZ:v,rotationDeg:I}=r.transformFieldRoles;t.outFields.push(u,m,S,b,F,x,O,g,V,E,R,v,I)}}return t}_normalizeFields(e){if(this.fieldsIndex!=null&&e!=null)for(const t of e){const r=this.fieldsIndex.get(t.name);r&&Object.assign(t,r.toJSON())}}_queryIs3DObjectFormat(e){return this.infoFor3D!=null&&e.returnGeometry===!0&&e.multipatchOption!=="xyFootprint"&&!e.outStatistics}};a([c({type:D})],i.prototype,"dynamicDataSource",void 0),a([c()],i.prototype,"fieldsIndex",void 0),a([c()],i.prototype,"gdbVersion",void 0),a([c()],i.prototype,"infoFor3D",void 0),a([c({readOnly:!0})],i.prototype,"parsedUrl",null),a([c()],i.prototype,"pbfSupported",void 0),a([c()],i.prototype,"queryAttachmentsSupported",void 0),a([c()],i.prototype,"sourceSpatialReference",void 0),a([c({type:String})],i.prototype,"url",void 0),i=a([A("esri.tasks.QueryTask")],i);const G=i;export{G as x};
