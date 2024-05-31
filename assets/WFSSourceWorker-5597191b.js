import{s as m,aM as y,ct as g,cx as d,cy as _,C as F,E as w,d as E}from"./index-33d448c3.js";import{r as S,s as q}from"./featureConversionUtils-0fdceb85.js";import{m as x}from"./FeatureStore-86fdc4c8.js";import{x as T,j as R}from"./projectionSupport-6f2c8b56.js";import{W as I}from"./QueryEngine-1c6075cc.js";import{E as b,N as C}from"./geojson-443435d3.js";import{p as j}from"./sourceUtils-2dbe05a7.js";import{a as k,B as P}from"./wfsUtils-2a8ebf29.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./BoundsStore-9902b17c.js";import"./PooledRBush-450ed77f.js";import"./timeSupport-469150ca.js";import"./json-48e3ea08.js";import"./WhereClause-f1525b95.js";import"./TimeOnly-2f85d6f8.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./quantizationUtils-3f349892.js";import"./utils-037255ea.js";import"./generateRendererUtils-bb6175e4.js";import"./RenderState-1d6218ee.js";import"./date-294ce3fb.js";import"./xmlUtils-444cb4c0.js";class se{constructor(){this._queryEngine=null,this._customParameters=null}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=null}async load(e,t){const{getFeatureUrl:r,getFeatureOutputFormat:p,fields:o,geometryType:i,featureType:n,objectIdField:u,customParameters:a}=e,{spatialReference:s,getFeatureSpatialReference:h}=k(r,n,e.spatialReference);this._featureType=n,this._customParameters=a,this._getFeatureUrl=r,this._getFeatureOutputFormat=p,this._getFeatureSpatialReference=h;try{await T(h,s)}catch{throw new m("unsupported-projection","Projection not supported",{inSpatialReference:h,outSpatialReference:s})}y(t);const l=g.fromLayerJSON({fields:o,dateFieldsTimeReference:o.some(f=>f.type==="esriFieldTypeDate")?{timeZoneIANA:d}:null}),c=await this._snapshotFeatures({fieldsIndex:l,geometryType:i,objectIdField:u,spatialReference:s},t.signal);return this._queryEngine=new I({fieldsIndex:l,geometryType:i,hasM:!1,hasZ:!1,objectIdField:u,spatialReference:s,timeInfo:null,featureStore:new x({geometryType:i,hasM:!1,hasZ:!1})}),this._queryEngine.featureStore.addMany(c),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new m("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this._customParameters=e,(t=this._snapshotTask)==null||t.abort(),this._snapshotTask=_(r=>this._snapshotFeatures(this._queryEngine,r)),this._snapshotTask.promise.then(r=>{this._queryEngine.featureStore.clear(),r&&this._queryEngine.featureStore.addMany(r)},r=>{this._queryEngine.featureStore.clear(),F(r)||w.getLogger("esri.layers.WFSLayer").error(new m("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:r}))}),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _snapshotFeatures({objectIdField:e,geometryType:t,spatialReference:r,fieldsIndex:p},o){const i=await P(this._getFeatureUrl??"",this._featureType.typeName,this._getFeatureSpatialReference,this._getFeatureOutputFormat,{customParameters:this._customParameters,signal:o});b(i,this._getFeatureSpatialReference.wkid),y(o);const n=C(i,{geometryType:t,hasZ:!1,objectIdField:e});if(!E(r,this._getFeatureSpatialReference))for(const a of n)a.geometry!=null&&(a.geometry=S(R(q(a.geometry,t,!1,!1),this._getFeatureSpatialReference,r)));let u=1;for(const a of n){const s={};j(p,s,a.attributes,!0),a.attributes=s,s[e]==null&&(a.objectId=s[e]=u++)}return n}}export{se as default};
