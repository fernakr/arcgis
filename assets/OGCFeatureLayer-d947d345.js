import{F as s,G as o,H as D,fN as B,K as L,f as w,gf as N,s as b,dS as H,dT as z,fQ as J,fR as U,dn as V,fP as Z,dQ as k,ds as W,dq as K,dr as Y,dp as X,dt as ee,fS as F,fU as te,aY as I,fT as se,fV as re,cX as oe,bd as ie,cY as $,fX as ne,fY as pe,fW as ae,dv as le,f_ as ue,L as de,f$ as ce,g0 as ye,g1 as fe,g3 as he,dw as me,g4 as ge,dC as ve}from"./index-b1de92dd.js";import{S as Se,h as T,x as O,T as we,I as xe,F as Ce,k as Re,j as be,b as Fe}from"./ogcFeatureUtils-e51dea2c.js";import"./featureConversionUtils-c440e28e.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./geojson-ca86beaf.js";import"./date-294ce3fb.js";import"./clientSideDefaults-10e70424.js";import"./QueryEngineCapabilities-85c4f1d0.js";let d=class extends B{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getSource(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:i,supportedCrs:n},layer:{apiKey:p,customParameters:l,effectiveMaxRecordCount:a}}=this;return{type:"ogc-source",collection:e,layerDefinition:t,maxRecordCount:a,queryParameters:{apiKey:p,customParameters:l},spatialReference:i,supportedCrs:n}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then(i=>L.fromJSON(i))}queryFeaturesJSON(e,t={}){const i=this.getSource();return this.load(t).then(()=>Se(i,e,t))}queryObjectIds(e,t={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){const i=new RegExp(`^${t}$`,"i");return e.conformsTo.some(n=>i.test(n))??!1}_getCapabilities(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},query:{maxRecordCount:t,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}_getMaxRecordCount(e){var i,n,p,l,a;const t=(i=e==null?void 0:e.components)==null?void 0:i.parameters;return((p=(n=t==null?void 0:t.limit)==null?void 0:n.schema)==null?void 0:p.maximum)??((a=(l=t==null?void 0:t.limitFeatures)==null?void 0:l.schema)==null?void 0:a.maximum)}_getStorageSpatialReference(e){const t=e.storageCrs??T,i=O(t);return i==null?w.WGS84:new w({wkid:i})}_getSupportedSpatialReferences(e,t){const i="#/crs",n=e.crs??[T],p=n.includes(i)?n.filter(a=>a!==i).concat(t.crs??[]):n,l=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return p.filter(a=>!l.test(a))}async _loadOGCServices(e,t){const i=t!=null?t.signal:null,{apiKey:n,collectionId:p,customParameters:l,fields:a,geometryType:f,hasZ:h,objectIdField:j,timeInfo:m,url:P}=e,E={fields:a==null?void 0:a.map(u=>u.toJSON()),geometryType:N.toJSON(f),hasZ:h??!1,objectIdField:j,timeInfo:m==null?void 0:m.toJSON()},c={apiKey:n,customParameters:l,signal:i},g=await we(P,c),[x,C]=await Promise.all([xe(g,c),Ce(g,c)]);if(!this._conformsToType(x,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new b("ogc-feature-layer:no-geojson-support","Server does not support geojson");const y=C.collections.find(u=>u.id===p);if(!y)throw new b("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const _=this._conformsToType(x,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await Re(g,c):null,R=await be(y,E,c),q=this._getMaxRecordCount(_),A=this._getCapabilities(R.hasZ,q),G=this._getStorageSpatialReference(y).toJSON(),M=this._getSupportedSpatialReferences(y,C),Q=new RegExp(`^${Fe}`,"i"),v={};for(const u of M){const S=O(u);S!=null&&(v[S]||(v[S]=u.replace(Q,"")))}this.featureDefinition={capabilities:A,collection:y,layerDefinition:R,spatialReference:G,supportedCrs:v}}};s([o()],d.prototype,"featureDefinition",void 0),s([o({constructOnly:!0})],d.prototype,"layer",void 0),s([o()],d.prototype,"type",void 0),d=s([D("esri.layers.graphics.sources.OGCFeatureSource")],d);const Ie=ge();let r=class extends H(z(J(U(V(Z(k(W(K(Y(X(ee(ve)))))))))))){constructor(e){super(e),this.capabilities=null,this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then(()=>this._fetchService(e))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){var e;return this.maxRecordCount??((e=this.capabilities)==null?void 0:e.query.maxRecordCount)??5e3}get isTable(){return this.loaded&&this.geometryType==null}set renderer(e){F(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return te(this,e)}createQuery(){return new I}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var a;let i,n=!1;const p=(a=t==null?void 0:t.feature)==null?void 0:a.attributes,l=this.typeIdField&&(p==null?void 0:p[this.typeIdField]);return l!=null&&this.types&&(n=this.types.some(f=>{var h;return f.id==l&&(i=(h=f.domains)==null?void 0:h[e],(i==null?void 0:i.type)==="inherited"&&(i=this._getLayerDomain(e)),!0)})),n||i||(i=this._getLayerDomain(e)),i}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(I.from(e)||this.createQuery(),t)).then(i=>{var n;return(n=i==null?void 0:i.features)==null||n.forEach(p=>{p.layer=p.sourceLayer=this}),i})}serviceSupportsSpatialReference(e){var t;return((t=this.source)==null?void 0:t.serviceSupportsSpatialReference(e))??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),F(this.renderer,this.fieldsIndex),se(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};s([o({readOnly:!0,json:{origins:{service:{read:!0}}}})],r.prototype,"capabilities",void 0),s([o({type:String,json:{write:!0}})],r.prototype,"collectionId",void 0),s([o({type:String})],r.prototype,"copyright",void 0),s([o({readOnly:!0})],r.prototype,"defaultPopupTemplate",null),s([o({type:String})],r.prototype,"definitionExpression",void 0),s([o({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],r.prototype,"description",void 0),s([o({type:String})],r.prototype,"displayField",void 0),s([o({type:Number})],r.prototype,"effectiveMaxRecordCount",null),s([o(re)],r.prototype,"elevationInfo",void 0),s([o({type:[oe],json:{origins:{service:{name:"layerDefinition.fields"}}}})],r.prototype,"fields",void 0),s([o(Ie.fieldsIndex)],r.prototype,"fieldsIndex",void 0),s([o({readOnly:!0,type:ie,json:{origins:{service:{name:"layerDefinition.extent"}}}})],r.prototype,"fullExtent",void 0),s([o({type:$.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:$.read}}}}})],r.prototype,"geometryType",void 0),s([o({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],r.prototype,"hasZ",void 0),s([o({type:Boolean,readOnly:!0})],r.prototype,"isTable",null),s([o({type:[ne],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:pe},write:!0}}}})],r.prototype,"labelingInfo",void 0),s([o(ae)],r.prototype,"labelsVisible",void 0),s([o(le)],r.prototype,"legendEnabled",void 0),s([o({type:Number})],r.prototype,"maxRecordCount",void 0),s([o({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],r.prototype,"objectIdField",void 0),s([o({type:["OGCFeatureLayer"]})],r.prototype,"operationalLayerType",void 0),s([o(ue)],r.prototype,"popupEnabled",void 0),s([o({type:de,json:{name:"popupInfo",write:!0}})],r.prototype,"popupTemplate",void 0),s([o({types:ce,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:ye,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],r.prototype,"renderer",null),s([o(fe)],r.prototype,"screenSizePerspectiveEnabled",void 0),s([o({readOnly:!0})],r.prototype,"source",void 0),s([o({readOnly:!0,type:w,json:{origins:{service:{read:!0}}}})],r.prototype,"spatialReference",void 0),s([o({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],r.prototype,"title",void 0),s([o({readOnly:!0,json:{read:!1}})],r.prototype,"type",void 0),s([o({type:String,readOnly:!0})],r.prototype,"typeIdField",void 0),s([o({type:[he]})],r.prototype,"types",void 0),s([o(me)],r.prototype,"url",void 0),r=s([D("esri.layers.OGCFeatureLayer")],r);const Ge=r;export{Ge as default};
