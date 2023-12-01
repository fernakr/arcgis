import{b2 as y,b3 as _,aT as v,A as a,B as c,f8 as D,C as A,bt as Q,I as w,Y as P,E as j,f9 as d,_ as n,bP as f,bQ as h,s as q}from"./index-308e373b.js";import{n as L,s as J}from"./executeForIds-c7228133.js";import{x as N}from"./query-301b2482.js";import{a as $}from"./executeQueryJSON-a547a9a5.js";import{n as z}from"./executeQueryPBF-1465a3dd.js";async function C(e,t,r){const o=y(e);return N(o,_.from(t),{...r}).then(s=>({count:s.data.count,extent:v.fromJSON(s.data.extent)}))}let i=class extends Q{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return w(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){var u;const r=this._normalizeQuery(e),o=((u=e.outStatistics)==null?void 0:u[0])!=null,s=P("featurelayer-pbf-statistics"),l=!o||s;let p;if(this.pbfSupported&&l)try{p=await z(this.url,r,t)}catch(m){if(m.name!=="query:parsing-pbf")throw m;this.pbfSupported=!1}return this.pbfSupported&&l||(p=await $(this.url,r,t)),this._normalizeFields(p.fields),p}async featureSetFromJSON(e,t,r){if(!this._queryIs3DObjectFormat(e)||this.infoFor3D==null||!t.features)return j.fromJSON(t);const{meshFeatureSetFromJSON:o}=await d(n(()=>import("./meshFeatureSet-0c44376c.js").then(s=>s.b),["assets/meshFeatureSet-0c44376c.js","assets/index-308e373b.js","assets/index-298317a1.css","assets/georeference-4b011070.js","assets/mat3f64-221ce671.js","assets/mat4f64-1413b4a7.js","assets/spatialReferenceEllipsoidUtils-863dbc2a.js","assets/MeshLocalVertexSpace-01065147.js","assets/MeshGeoreferencedRelativeVertexSpace-76a10fd5.js","assets/quat-1362cf4f.js","assets/quatf64-3363c48e.js","assets/vec32-e879aa7f.js","assets/BufferView-7eb5a307.js","assets/imageUtils-c479bdca.js","assets/earcut-f3e0a4eb.js","assets/Indices-c5ba8edc.js","assets/deduplicate-0adfafe6.js","assets/plane-2dfde9d3.js","assets/sphere-9618f76b.js","assets/ByteSizeUnit-d4757d40.js","assets/triangle-a46cf47c.js","assets/lineSegment-1b52121a.js","assets/basicInterfaces-11f56cb3.js","assets/VertexAttribute-0e674613.js","assets/External-ac1a999a.js"]),r);return o(e,this.infoFor3D,t)}executeForCount(e,t){return L(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return C(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return J(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:r},{executeRelationshipQuery:o}]=await d(Promise.all([n(()=>import("./index-308e373b.js").then(s=>s.n9),["assets/index-308e373b.js","assets/index-298317a1.css"]),n(()=>import("./executeRelationshipQuery-059939c3.js"),["assets/executeRelationshipQuery-059939c3.js","assets/index-308e373b.js","assets/index-298317a1.css","assets/query-301b2482.js","assets/pbfQueryUtils-98bd69a5.js","assets/pbf-98a81c0b.js","assets/OptimizedGeometry-d94e541f.js","assets/OptimizedFeatureSet-1d1ac4b9.js"])]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:r},{executeRelationshipQueryForCount:o}]=await d(Promise.all([n(()=>import("./index-308e373b.js").then(s=>s.n9),["assets/index-308e373b.js","assets/index-298317a1.css"]),n(()=>import("./executeRelationshipQuery-059939c3.js"),["assets/executeRelationshipQuery-059939c3.js","assets/index-308e373b.js","assets/index-298317a1.css","assets/query-301b2482.js","assets/pbfQueryUtils-98bd69a5.js","assets/pbf-98a81c0b.js","assets/OptimizedGeometry-d94e541f.js","assets/OptimizedFeatureSet-1d1ac4b9.js"])]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:r,fetchAttachments:o,processAttachmentQueryResult:s}=await d(n(()=>import("./queryAttachments-49f4f717.js"),["assets/queryAttachments-49f4f717.js","assets/index-308e373b.js","assets/index-298317a1.css","assets/query-301b2482.js","assets/pbfQueryUtils-98bd69a5.js","assets/pbf-98a81c0b.js","assets/OptimizedGeometry-d94e541f.js","assets/OptimizedFeatureSet-1d1ac4b9.js","assets/AttachmentInfo-8032dfe2.js"]),t),l=y(this.url);return s(l,await(this.queryAttachmentsSupported?r(l,e,t):o(l,e,t)))}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:r}=await d(n(()=>import("./executeTopFeaturesQuery-7a2d5d6e.js"),["assets/executeTopFeaturesQuery-7a2d5d6e.js","assets/index-308e373b.js","assets/index-298317a1.css","assets/queryTopFeatures-cb56ae25.js","assets/query-301b2482.js","assets/pbfQueryUtils-98bd69a5.js","assets/pbf-98a81c0b.js","assets/OptimizedGeometry-d94e541f.js","assets/OptimizedFeatureSet-1d1ac4b9.js"]),t);return r(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:r}=await d(n(()=>import("./executeForTopIds-b6ada5ea.js"),["assets/executeForTopIds-b6ada5ea.js","assets/index-308e373b.js","assets/index-298317a1.css","assets/queryTopFeatures-cb56ae25.js","assets/query-301b2482.js","assets/pbfQueryUtils-98bd69a5.js","assets/pbf-98a81c0b.js","assets/OptimizedGeometry-d94e541f.js","assets/OptimizedFeatureSet-1d1ac4b9.js"]),t);return r(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:r}=await d(n(()=>import("./executeForTopExtents-0e84319e.js"),["assets/executeForTopExtents-0e84319e.js","assets/index-308e373b.js","assets/index-298317a1.css","assets/queryTopFeatures-cb56ae25.js","assets/query-301b2482.js","assets/pbfQueryUtils-98bd69a5.js","assets/pbf-98a81c0b.js","assets/OptimizedGeometry-d94e541f.js","assets/OptimizedFeatureSet-1d1ac4b9.js"]),t);return r(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:r}=await d(n(()=>import("./executeForTopCount-a7434ead.js"),["assets/executeForTopCount-a7434ead.js","assets/index-308e373b.js","assets/index-298317a1.css","assets/queryTopFeatures-cb56ae25.js","assets/query-301b2482.js","assets/pbfQueryUtils-98bd69a5.js","assets/pbf-98a81c0b.js","assets/OptimizedGeometry-d94e541f.js","assets/OptimizedFeatureSet-1d1ac4b9.js"]),t);return r(this.parsedUrl,e,t)}_normalizeQuery(e){let t=_.from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?D.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:r}=this;if(r!=null&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;const{supportedFormats:o,queryFormats:s}=r,l=f("model/gltf-binary",o)??h("glb",o),p=f("model/gltf+json",o)??h("gtlf",o);for(const u of s){if(u===l){t.formatOf3DObjects=u;break}u!==p||t.formatOf3DObjects||(t.formatOf3DObjects=u)}if(!t.formatOf3DObjects)throw new q("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outFields==null||!t.outFields.includes("*")){t=t===e?t.clone():t,t.outFields==null&&(t.outFields=[]);const{originX:u,originY:m,originZ:S,translationX:b,translationY:F,translationZ:x,scaleX:O,scaleY:g,scaleZ:E,rotationX:V,rotationY:R,rotationZ:I,rotationDeg:T}=r.transformFieldRoles;t.outFields.push(u,m,S,b,F,x,O,g,E,V,R,I,T)}}return t}_normalizeFields(e){if(this.fieldsIndex!=null&&e!=null)for(const t of e){const r=this.fieldsIndex.get(t.name);r&&Object.assign(t,r.toJSON())}}_queryIs3DObjectFormat(e){return this.infoFor3D!=null&&e.returnGeometry===!0&&e.multipatchOption!=="xyFootprint"&&!e.outStatistics}};a([c({type:D})],i.prototype,"dynamicDataSource",void 0),a([c()],i.prototype,"fieldsIndex",void 0),a([c()],i.prototype,"gdbVersion",void 0),a([c()],i.prototype,"infoFor3D",void 0),a([c({readOnly:!0})],i.prototype,"parsedUrl",null),a([c()],i.prototype,"pbfSupported",void 0),a([c()],i.prototype,"queryAttachmentsSupported",void 0),a([c()],i.prototype,"sourceSpatialReference",void 0),a([c({type:String})],i.prototype,"url",void 0),i=a([A("esri.tasks.QueryTask")],i);const B=i;export{B as x};
