import{aY as y,aZ as _,bd as v,F as a,G as c,eZ as S,H as A,bM as w,I as Q,a1 as P,K as j,e_ as d,_ as n,aS as h,aT as f,s as q}from"./index-12a23f8f.js";import{n as L,s as N}from"./executeForIds-5c3a8dc3.js";import{x as J}from"./query-6f1214e9.js";import{a as $}from"./executeQueryJSON-9defd5b3.js";import{n as z}from"./executeQueryPBF-fadb48a1.js";async function C(e,t,r){const o=y(e);return J(o,_.from(t),{...r}).then(s=>({count:s.data.count,extent:v.fromJSON(s.data.extent)}))}let i=class extends w{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return Q(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){var u;const r=this._normalizeQuery(e),o=((u=e.outStatistics)==null?void 0:u[0])!=null,s=P("featurelayer-pbf-statistics"),l=!o||s;let p;if(this.pbfSupported&&l)try{p=await z(this.url,r,t)}catch(m){if(m.name!=="query:parsing-pbf")throw m;this.pbfSupported=!1}return this.pbfSupported&&l||(p=await $(this.url,r,t)),this._normalizeFields(p.fields),p}async featureSetFromJSON(e,t,r){if(!this._queryIs3DObjectFormat(e)||this.infoFor3D==null||!t.features)return j.fromJSON(t);const{meshFeatureSetFromJSON:o}=await d(n(()=>import("./meshFeatureSet-fbce06cf.js").then(s=>s.b),["assets/meshFeatureSet-fbce06cf.js","assets/index-12a23f8f.js","assets/index-298317a1.css","assets/georeference-db1134e7.js","assets/mat3f64-221ce671.js","assets/mat4f64-1413b4a7.js","assets/spatialReferenceEllipsoidUtils-f5c3de41.js","assets/MeshLocalVertexSpace-725d7187.js","assets/MeshGeoreferencedRelativeVertexSpace-eb8c1a5b.js","assets/quat-370384ba.js","assets/quatf64-3363c48e.js","assets/vec32-ba071736.js","assets/BufferView-7df6a2c7.js","assets/imageUtils-cb2425cf.js","assets/earcut-930b2254.js","assets/Indices-cc61e11d.js","assets/deduplicate-bb3342bc.js","assets/plane-f4c933fc.js","assets/sphere-220fdb3c.js","assets/ByteSizeUnit-d4757d40.js","assets/triangle-f0d2542a.js","assets/lineSegment-6eeb0a73.js","assets/basicInterfaces-11f56cb3.js","assets/VertexAttribute-0e674613.js","assets/External-b48dc392.js"]),r);return o(e,this.infoFor3D,t)}executeForCount(e,t){return L(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return C(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return N(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:r},{executeRelationshipQuery:o}]=await d(Promise.all([n(()=>import("./index-12a23f8f.js").then(s=>s.mN),["assets/index-12a23f8f.js","assets/index-298317a1.css"]),n(()=>import("./executeRelationshipQuery-07f70ca2.js"),["assets/executeRelationshipQuery-07f70ca2.js","assets/index-12a23f8f.js","assets/index-298317a1.css","assets/query-6f1214e9.js","assets/pbfQueryUtils-a2f764fe.js","assets/pbf-7ed7c749.js","assets/OptimizedGeometry-d94e541f.js","assets/OptimizedFeatureSet-1d1ac4b9.js"])]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:r},{executeRelationshipQueryForCount:o}]=await d(Promise.all([n(()=>import("./index-12a23f8f.js").then(s=>s.mN),["assets/index-12a23f8f.js","assets/index-298317a1.css"]),n(()=>import("./executeRelationshipQuery-07f70ca2.js"),["assets/executeRelationshipQuery-07f70ca2.js","assets/index-12a23f8f.js","assets/index-298317a1.css","assets/query-6f1214e9.js","assets/pbfQueryUtils-a2f764fe.js","assets/pbf-7ed7c749.js","assets/OptimizedGeometry-d94e541f.js","assets/OptimizedFeatureSet-1d1ac4b9.js"])]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:r,fetchAttachments:o,processAttachmentQueryResult:s}=await d(n(()=>import("./queryAttachments-16b169e4.js"),["assets/queryAttachments-16b169e4.js","assets/index-12a23f8f.js","assets/index-298317a1.css","assets/query-6f1214e9.js","assets/pbfQueryUtils-a2f764fe.js","assets/pbf-7ed7c749.js","assets/OptimizedGeometry-d94e541f.js","assets/OptimizedFeatureSet-1d1ac4b9.js","assets/AttachmentInfo-e990a7f6.js"]),t),l=y(this.url);return s(l,await(this.queryAttachmentsSupported?r(l,e,t):o(l,e,t)))}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:r}=await d(n(()=>import("./executeTopFeaturesQuery-38d33e7c.js"),["assets/executeTopFeaturesQuery-38d33e7c.js","assets/index-12a23f8f.js","assets/index-298317a1.css","assets/queryTopFeatures-604a7392.js","assets/query-6f1214e9.js","assets/pbfQueryUtils-a2f764fe.js","assets/pbf-7ed7c749.js","assets/OptimizedGeometry-d94e541f.js","assets/OptimizedFeatureSet-1d1ac4b9.js"]),t);return r(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:r}=await d(n(()=>import("./executeForTopIds-1ccfc379.js"),["assets/executeForTopIds-1ccfc379.js","assets/index-12a23f8f.js","assets/index-298317a1.css","assets/queryTopFeatures-604a7392.js","assets/query-6f1214e9.js","assets/pbfQueryUtils-a2f764fe.js","assets/pbf-7ed7c749.js","assets/OptimizedGeometry-d94e541f.js","assets/OptimizedFeatureSet-1d1ac4b9.js"]),t);return r(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:r}=await d(n(()=>import("./executeForTopExtents-df3722e6.js"),["assets/executeForTopExtents-df3722e6.js","assets/index-12a23f8f.js","assets/index-298317a1.css","assets/queryTopFeatures-604a7392.js","assets/query-6f1214e9.js","assets/pbfQueryUtils-a2f764fe.js","assets/pbf-7ed7c749.js","assets/OptimizedGeometry-d94e541f.js","assets/OptimizedFeatureSet-1d1ac4b9.js"]),t);return r(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:r}=await d(n(()=>import("./executeForTopCount-83d8cc63.js"),["assets/executeForTopCount-83d8cc63.js","assets/index-12a23f8f.js","assets/index-298317a1.css","assets/queryTopFeatures-604a7392.js","assets/query-6f1214e9.js","assets/pbfQueryUtils-a2f764fe.js","assets/pbf-7ed7c749.js","assets/OptimizedGeometry-d94e541f.js","assets/OptimizedFeatureSet-1d1ac4b9.js"]),t);return r(this.parsedUrl,e,t)}_normalizeQuery(e){let t=_.from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?S.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:r}=this;if(r!=null&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;const{supportedFormats:o,queryFormats:s}=r,l=h("model/gltf-binary",o)??f("glb",o),p=h("model/gltf+json",o)??f("gtlf",o);for(const u of s){if(u===l){t.formatOf3DObjects=u;break}u!==p||t.formatOf3DObjects||(t.formatOf3DObjects=u)}if(!t.formatOf3DObjects)throw new q("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outFields==null||!t.outFields.includes("*")){t=t===e?t.clone():t,t.outFields==null&&(t.outFields=[]);const{originX:u,originY:m,originZ:D,translationX:b,translationY:F,translationZ:x,scaleX:O,scaleY:g,scaleZ:V,rotationX:E,rotationY:R,rotationZ:I,rotationDeg:T}=r.transformFieldRoles;t.outFields.push(u,m,D,b,F,x,O,g,V,E,R,I,T)}}return t}_normalizeFields(e){if(this.fieldsIndex!=null&&e!=null)for(const t of e){const r=this.fieldsIndex.get(t.name);r&&Object.assign(t,r.toJSON())}}_queryIs3DObjectFormat(e){return this.infoFor3D!=null&&e.returnGeometry===!0&&e.multipatchOption!=="xyFootprint"&&!e.outStatistics}};a([c({type:S})],i.prototype,"dynamicDataSource",void 0),a([c()],i.prototype,"fieldsIndex",void 0),a([c()],i.prototype,"gdbVersion",void 0),a([c()],i.prototype,"infoFor3D",void 0),a([c({readOnly:!0})],i.prototype,"parsedUrl",null),a([c()],i.prototype,"pbfSupported",void 0),a([c()],i.prototype,"queryAttachmentsSupported",void 0),a([c()],i.prototype,"sourceSpatialReference",void 0),a([c({type:String})],i.prototype,"url",void 0),i=a([A("esri.tasks.QueryTask")],i);const G=i;export{G as x};
