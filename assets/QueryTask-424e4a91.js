import{aX as y,aY as _,bd as T,F as a,G as c,f6 as S,H as A,bx as w,I as Q,a1 as P,K as j,f7 as d,_ as n,aR as f,aS as h,s as q}from"./index-5bbab0a9.js";import{n as L,s as J}from"./executeForIds-d41a29c2.js";import{x as N}from"./query-06ec1aa7.js";import{a as $}from"./executeQueryJSON-6cead980.js";import{n as z}from"./executeQueryPBF-5262adc4.js";async function C(e,t,r){const o=y(e);return N(o,_.from(t),{...r}).then(s=>({count:s.data.count,extent:T.fromJSON(s.data.extent)}))}let i=class extends w{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return Q(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){var u;const r=this._normalizeQuery(e),o=((u=e.outStatistics)==null?void 0:u[0])!=null,s=P("featurelayer-pbf-statistics"),l=!o||s;let p;if(this.pbfSupported&&l)try{p=await z(this.url,r,t)}catch(m){if(m.name!=="query:parsing-pbf")throw m;this.pbfSupported=!1}return this.pbfSupported&&l||(p=await $(this.url,r,t)),this._normalizeFields(p.fields),p}async featureSetFromJSON(e,t,r){if(!this._queryIs3DObjectFormat(e)||this.infoFor3D==null||!t.features)return j.fromJSON(t);const{meshFeatureSetFromJSON:o}=await d(n(()=>import("./meshFeatureSet-6c235719.js").then(s=>s.b),["assets/meshFeatureSet-6c235719.js","assets/index-5bbab0a9.js","assets/index-70780820.css","assets/georeference-f980e837.js","assets/mat3f64-221ce671.js","assets/mat4f64-1413b4a7.js","assets/spatialReferenceEllipsoidUtils-835c1cd9.js","assets/MeshLocalVertexSpace-6d287c07.js","assets/MeshGeoreferencedRelativeVertexSpace-1f31f4c2.js","assets/quat-eeea15db.js","assets/quatf64-3363c48e.js","assets/vec32-9b3eee04.js","assets/BufferView-0542ef62.js","assets/imageUtils-80d6c0df.js","assets/earcut-235387ad.js","assets/Indices-343bbb2e.js","assets/deduplicate-6562b93b.js","assets/plane-e765ed56.js","assets/sphere-b027275e.js","assets/ByteSizeUnit-d4757d40.js","assets/triangle-20f1ab8a.js","assets/lineSegment-6f6e2766.js","assets/basicInterfaces-11f56cb3.js","assets/VertexAttribute-0e674613.js","assets/External-a23470ef.js"]),r);return o(e,this.infoFor3D,t)}executeForCount(e,t){return L(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return C(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return J(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:r},{executeRelationshipQuery:o}]=await d(Promise.all([n(()=>import("./index-5bbab0a9.js").then(s=>s.nv),["assets/index-5bbab0a9.js","assets/index-70780820.css"]),n(()=>import("./executeRelationshipQuery-16a8a641.js"),["assets/executeRelationshipQuery-16a8a641.js","assets/index-5bbab0a9.js","assets/index-70780820.css","assets/query-06ec1aa7.js","assets/pbfQueryUtils-7ec752bb.js","assets/pbf-093819f0.js","assets/OptimizedGeometry-196224d4.js","assets/OptimizedFeature-e90b69df.js","assets/OptimizedFeatureSet-1d1ac4b9.js"])]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:r},{executeRelationshipQueryForCount:o}]=await d(Promise.all([n(()=>import("./index-5bbab0a9.js").then(s=>s.nv),["assets/index-5bbab0a9.js","assets/index-70780820.css"]),n(()=>import("./executeRelationshipQuery-16a8a641.js"),["assets/executeRelationshipQuery-16a8a641.js","assets/index-5bbab0a9.js","assets/index-70780820.css","assets/query-06ec1aa7.js","assets/pbfQueryUtils-7ec752bb.js","assets/pbf-093819f0.js","assets/OptimizedGeometry-196224d4.js","assets/OptimizedFeature-e90b69df.js","assets/OptimizedFeatureSet-1d1ac4b9.js"])]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:r,fetchAttachments:o,processAttachmentQueryResult:s}=await d(n(()=>import("./queryAttachments-7026f198.js"),["assets/queryAttachments-7026f198.js","assets/index-5bbab0a9.js","assets/index-70780820.css","assets/query-06ec1aa7.js","assets/pbfQueryUtils-7ec752bb.js","assets/pbf-093819f0.js","assets/OptimizedGeometry-196224d4.js","assets/OptimizedFeature-e90b69df.js","assets/OptimizedFeatureSet-1d1ac4b9.js","assets/AttachmentInfo-08f7582f.js"]),t),l=y(this.url);return s(l,await(this.queryAttachmentsSupported?r(l,e,t):o(l,e,t)))}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:r}=await d(n(()=>import("./executeTopFeaturesQuery-2d8c7a0b.js"),["assets/executeTopFeaturesQuery-2d8c7a0b.js","assets/index-5bbab0a9.js","assets/index-70780820.css","assets/queryTopFeatures-95d7ed5b.js","assets/query-06ec1aa7.js","assets/pbfQueryUtils-7ec752bb.js","assets/pbf-093819f0.js","assets/OptimizedGeometry-196224d4.js","assets/OptimizedFeature-e90b69df.js","assets/OptimizedFeatureSet-1d1ac4b9.js"]),t);return r(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:r}=await d(n(()=>import("./executeForTopIds-0ceeaae1.js"),["assets/executeForTopIds-0ceeaae1.js","assets/index-5bbab0a9.js","assets/index-70780820.css","assets/queryTopFeatures-95d7ed5b.js","assets/query-06ec1aa7.js","assets/pbfQueryUtils-7ec752bb.js","assets/pbf-093819f0.js","assets/OptimizedGeometry-196224d4.js","assets/OptimizedFeature-e90b69df.js","assets/OptimizedFeatureSet-1d1ac4b9.js"]),t);return r(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:r}=await d(n(()=>import("./executeForTopExtents-6b4d35af.js"),["assets/executeForTopExtents-6b4d35af.js","assets/index-5bbab0a9.js","assets/index-70780820.css","assets/queryTopFeatures-95d7ed5b.js","assets/query-06ec1aa7.js","assets/pbfQueryUtils-7ec752bb.js","assets/pbf-093819f0.js","assets/OptimizedGeometry-196224d4.js","assets/OptimizedFeature-e90b69df.js","assets/OptimizedFeatureSet-1d1ac4b9.js"]),t);return r(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:r}=await d(n(()=>import("./executeForTopCount-88f16395.js"),["assets/executeForTopCount-88f16395.js","assets/index-5bbab0a9.js","assets/index-70780820.css","assets/queryTopFeatures-95d7ed5b.js","assets/query-06ec1aa7.js","assets/pbfQueryUtils-7ec752bb.js","assets/pbf-093819f0.js","assets/OptimizedGeometry-196224d4.js","assets/OptimizedFeature-e90b69df.js","assets/OptimizedFeatureSet-1d1ac4b9.js"]),t);return r(this.parsedUrl,e,t)}_normalizeQuery(e){let t=_.from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?S.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:r}=this;if(r!=null&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;const{supportedFormats:o,queryFormats:s}=r,l=f("model/gltf-binary",o)??h("glb",o),p=f("model/gltf+json",o)??h("gtlf",o);for(const u of s){if(u===l){t.formatOf3DObjects=u;break}u!==p||t.formatOf3DObjects||(t.formatOf3DObjects=u)}if(!t.formatOf3DObjects)throw new q("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outFields==null||!t.outFields.includes("*")){t=t===e?t.clone():t,t.outFields==null&&(t.outFields=[]);const{originX:u,originY:m,originZ:D,translationX:b,translationY:F,translationZ:x,scaleX:O,scaleY:g,scaleZ:V,rotationX:E,rotationY:R,rotationZ:v,rotationDeg:I}=r.transformFieldRoles;t.outFields.push(u,m,D,b,F,x,O,g,V,E,R,v,I)}}return t}_normalizeFields(e){if(this.fieldsIndex!=null&&e!=null)for(const t of e){const r=this.fieldsIndex.get(t.name);r&&Object.assign(t,r.toJSON())}}_queryIs3DObjectFormat(e){return this.infoFor3D!=null&&e.returnGeometry===!0&&e.multipatchOption!=="xyFootprint"&&!e.outStatistics}};a([c({type:S})],i.prototype,"dynamicDataSource",void 0),a([c()],i.prototype,"fieldsIndex",void 0),a([c()],i.prototype,"gdbVersion",void 0),a([c()],i.prototype,"infoFor3D",void 0),a([c({readOnly:!0})],i.prototype,"parsedUrl",null),a([c()],i.prototype,"pbfSupported",void 0),a([c()],i.prototype,"queryAttachmentsSupported",void 0),a([c()],i.prototype,"sourceSpatialReference",void 0),a([c({type:String})],i.prototype,"url",void 0),i=a([A("esri.tasks.QueryTask")],i);const G=i;export{G as x};
