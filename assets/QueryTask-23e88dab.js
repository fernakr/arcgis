import{aV as y,aW as _,bj as T,F as a,G as c,f7 as D,H as A,bJ as Q,I as w,a1 as P,K as j,f8 as d,_ as n,aP as f,aQ as h,s as q}from"./index-3f4f2f72.js";import{n as L,s as J}from"./executeForIds-39a8f43f.js";import{x as N}from"./query-88b4f998.js";import{a as $}from"./executeQueryJSON-747a06ea.js";import{n as z}from"./executeQueryPBF-9455c308.js";async function C(e,t,r){const o=y(e);return N(o,_.from(t),{...r}).then(s=>({count:s.data.count,extent:T.fromJSON(s.data.extent)}))}let i=class extends Q{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return w(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){var u;const r=this._normalizeQuery(e),o=((u=e.outStatistics)==null?void 0:u[0])!=null,s=P("featurelayer-pbf-statistics"),l=!o||s;let p;if(this.pbfSupported&&l)try{p=await z(this.url,r,t)}catch(m){if(m.name!=="query:parsing-pbf")throw m;this.pbfSupported=!1}return this.pbfSupported&&l||(p=await $(this.url,r,t)),this._normalizeFields(p.fields),p}async featureSetFromJSON(e,t,r){if(!this._queryIs3DObjectFormat(e)||this.infoFor3D==null||!t.features)return j.fromJSON(t);const{meshFeatureSetFromJSON:o}=await d(n(()=>import("./meshFeatureSet-e6df10f7.js").then(s=>s.b),["assets/meshFeatureSet-e6df10f7.js","assets/index-3f4f2f72.js","assets/index-298317a1.css","assets/georeference-22d887f8.js","assets/mat3f64-221ce671.js","assets/mat4f64-1413b4a7.js","assets/spatialReferenceEllipsoidUtils-b251f404.js","assets/MeshLocalVertexSpace-060361e3.js","assets/MeshGeoreferencedRelativeVertexSpace-6082fa3a.js","assets/quat-aad949b3.js","assets/quatf64-3363c48e.js","assets/vec32-7a5e89f0.js","assets/BufferView-02588717.js","assets/imageUtils-e5206020.js","assets/earcut-c94eb856.js","assets/Indices-47788a6c.js","assets/deduplicate-8be81396.js","assets/plane-07331da1.js","assets/sphere-71860854.js","assets/ByteSizeUnit-d4757d40.js","assets/triangle-d8e0004b.js","assets/lineSegment-94bb59f1.js","assets/basicInterfaces-11f56cb3.js","assets/VertexAttribute-0e674613.js","assets/External-0588e1a6.js"]),r);return o(e,this.infoFor3D,t)}executeForCount(e,t){return L(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return C(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return J(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:r},{executeRelationshipQuery:o}]=await d(Promise.all([n(()=>import("./index-3f4f2f72.js").then(s=>s.nv),["assets/index-3f4f2f72.js","assets/index-298317a1.css"]),n(()=>import("./executeRelationshipQuery-1fae3206.js"),["assets/executeRelationshipQuery-1fae3206.js","assets/index-3f4f2f72.js","assets/index-298317a1.css","assets/query-88b4f998.js","assets/pbfQueryUtils-10a92700.js","assets/pbf-b7e567bf.js","assets/OptimizedGeometry-196224d4.js","assets/OptimizedFeature-e90b69df.js","assets/OptimizedFeatureSet-1d1ac4b9.js"])]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:r},{executeRelationshipQueryForCount:o}]=await d(Promise.all([n(()=>import("./index-3f4f2f72.js").then(s=>s.nv),["assets/index-3f4f2f72.js","assets/index-298317a1.css"]),n(()=>import("./executeRelationshipQuery-1fae3206.js"),["assets/executeRelationshipQuery-1fae3206.js","assets/index-3f4f2f72.js","assets/index-298317a1.css","assets/query-88b4f998.js","assets/pbfQueryUtils-10a92700.js","assets/pbf-b7e567bf.js","assets/OptimizedGeometry-196224d4.js","assets/OptimizedFeature-e90b69df.js","assets/OptimizedFeatureSet-1d1ac4b9.js"])]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:r,fetchAttachments:o,processAttachmentQueryResult:s}=await d(n(()=>import("./queryAttachments-418c65c5.js"),["assets/queryAttachments-418c65c5.js","assets/index-3f4f2f72.js","assets/index-298317a1.css","assets/query-88b4f998.js","assets/pbfQueryUtils-10a92700.js","assets/pbf-b7e567bf.js","assets/OptimizedGeometry-196224d4.js","assets/OptimizedFeature-e90b69df.js","assets/OptimizedFeatureSet-1d1ac4b9.js","assets/AttachmentInfo-51913672.js"]),t),l=y(this.url);return s(l,await(this.queryAttachmentsSupported?r(l,e,t):o(l,e,t)))}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:r}=await d(n(()=>import("./executeTopFeaturesQuery-b92966ef.js"),["assets/executeTopFeaturesQuery-b92966ef.js","assets/index-3f4f2f72.js","assets/index-298317a1.css","assets/queryTopFeatures-a1b0a927.js","assets/query-88b4f998.js","assets/pbfQueryUtils-10a92700.js","assets/pbf-b7e567bf.js","assets/OptimizedGeometry-196224d4.js","assets/OptimizedFeature-e90b69df.js","assets/OptimizedFeatureSet-1d1ac4b9.js"]),t);return r(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:r}=await d(n(()=>import("./executeForTopIds-d2dbf810.js"),["assets/executeForTopIds-d2dbf810.js","assets/index-3f4f2f72.js","assets/index-298317a1.css","assets/queryTopFeatures-a1b0a927.js","assets/query-88b4f998.js","assets/pbfQueryUtils-10a92700.js","assets/pbf-b7e567bf.js","assets/OptimizedGeometry-196224d4.js","assets/OptimizedFeature-e90b69df.js","assets/OptimizedFeatureSet-1d1ac4b9.js"]),t);return r(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:r}=await d(n(()=>import("./executeForTopExtents-161ff231.js"),["assets/executeForTopExtents-161ff231.js","assets/index-3f4f2f72.js","assets/index-298317a1.css","assets/queryTopFeatures-a1b0a927.js","assets/query-88b4f998.js","assets/pbfQueryUtils-10a92700.js","assets/pbf-b7e567bf.js","assets/OptimizedGeometry-196224d4.js","assets/OptimizedFeature-e90b69df.js","assets/OptimizedFeatureSet-1d1ac4b9.js"]),t);return r(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:r}=await d(n(()=>import("./executeForTopCount-439eb06a.js"),["assets/executeForTopCount-439eb06a.js","assets/index-3f4f2f72.js","assets/index-298317a1.css","assets/queryTopFeatures-a1b0a927.js","assets/query-88b4f998.js","assets/pbfQueryUtils-10a92700.js","assets/pbf-b7e567bf.js","assets/OptimizedGeometry-196224d4.js","assets/OptimizedFeature-e90b69df.js","assets/OptimizedFeatureSet-1d1ac4b9.js"]),t);return r(this.parsedUrl,e,t)}_normalizeQuery(e){let t=_.from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?D.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:r}=this;if(r!=null&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;const{supportedFormats:o,queryFormats:s}=r,l=f("model/gltf-binary",o)??h("glb",o),p=f("model/gltf+json",o)??h("gtlf",o);for(const u of s){if(u===l){t.formatOf3DObjects=u;break}u!==p||t.formatOf3DObjects||(t.formatOf3DObjects=u)}if(!t.formatOf3DObjects)throw new q("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outFields==null||!t.outFields.includes("*")){t=t===e?t.clone():t,t.outFields==null&&(t.outFields=[]);const{originX:u,originY:m,originZ:S,translationX:b,translationY:F,translationZ:x,scaleX:O,scaleY:g,scaleZ:V,rotationX:E,rotationY:R,rotationZ:v,rotationDeg:I}=r.transformFieldRoles;t.outFields.push(u,m,S,b,F,x,O,g,V,E,R,v,I)}}return t}_normalizeFields(e){if(this.fieldsIndex!=null&&e!=null)for(const t of e){const r=this.fieldsIndex.get(t.name);r&&Object.assign(t,r.toJSON())}}_queryIs3DObjectFormat(e){return this.infoFor3D!=null&&e.returnGeometry===!0&&e.multipatchOption!=="xyFootprint"&&!e.outStatistics}};a([c({type:D})],i.prototype,"dynamicDataSource",void 0),a([c()],i.prototype,"fieldsIndex",void 0),a([c()],i.prototype,"gdbVersion",void 0),a([c()],i.prototype,"infoFor3D",void 0),a([c({readOnly:!0})],i.prototype,"parsedUrl",null),a([c()],i.prototype,"pbfSupported",void 0),a([c()],i.prototype,"queryAttachmentsSupported",void 0),a([c()],i.prototype,"sourceSpatialReference",void 0),a([c({type:String})],i.prototype,"url",void 0),i=a([A("esri.tasks.QueryTask")],i);const G=i;export{G as x};
