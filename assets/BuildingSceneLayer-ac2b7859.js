import{dm as ce,F as t,G as s,bA as I,e1 as he,kE as q,H as p,e as ge,E as F,fN as ee,ix as te,ct as fe,e3 as re,fU as me,ad as se,a_ as ve,i3 as be,s as x,Q as Se,be as we,f as ie,gn as $e,g0 as Oe,f_ as Fe,L as xe,b3 as oe,a4 as Ie,g4 as Le,V as b,e9 as je,kF as Te,a9 as f,aY as u,kG as Ee,aK as Be,dR as Ae,dq as _e,dr as qe,ds as Ne,dt as Re,dS as ke,a0 as Pe,aP as Me,bF as Qe,d_ as Ue,kH as Ke,dv as Ce,fV as Ve,dC as De}from"./index-c43fbcbe.js";import{s as He,i as Ze}from"./I3SUtil-0cd09f2c.js";import{r as Ge,E as Je,P as H}from"./SceneService-fc5ea52f.js";import{s as ze,l as We,u as Xe,m as Ye}from"./I3SLayerDefinitions-b25e15c5.js";import{n as et,p as tt}from"./popupUtils-41cbf861.js";import{l as rt}from"./associatedFeatureServiceUtils-aa26cc92.js";import{x as Z,p as st,E as it}from"./elevationInfoUtils-3ba44883.js";import"./mat3f64-221ce671.js";import"./mat4f64-1413b4a7.js";import"./quat-7f60254a.js";import"./quatf64-3363c48e.js";import"./spatialReferenceEllipsoidUtils-3ac109e5.js";import"./I3SBinaryReader-984d64bd.js";import"./VertexAttribute-0e674613.js";import"./orientedBoundingBox-e9654cfc.js";import"./plane-6282c7c8.js";import"./sphere-056a5bef.js";import"./ByteSizeUnit-d4757d40.js";import"./originUtils-cfe4feaf.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./saveAPIKeyUtils-034871a4.js";import"./saveUtils-2fdbd567.js";import"./resourceUtils-a9655dfb.js";let y=class extends ce(ge){constructor(r){super(r),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.legendEnabled=!0,this.visible=!0,this.opacity=1}readTitle(r,i){return typeof i.alias=="string"?i.alias:typeof i.name=="string"?i.name:""}readIdOnlyOnce(r){return this.id!==-1?this.id:typeof r=="number"?r:-1}};t([s({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],y.prototype,"title",void 0),t([I("service","title",["alias","name"])],y.prototype,"readTitle",null),t([s()],y.prototype,"layer",void 0),t([s({type:he,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],y.prototype,"id",void 0),t([I("service","id")],y.prototype,"readIdOnlyOnce",null),t([s(q(String))],y.prototype,"modelName",void 0),t([s(q(Boolean))],y.prototype,"isEmpty",void 0),t([s({type:Boolean,nonNullable:!0})],y.prototype,"legendEnabled",void 0),t([s({type:Boolean,json:{name:"visibility",write:!0}})],y.prototype,"visible",void 0),t([s({type:Number,json:{write:!0}})],y.prototype,"opacity",void 0),y=t([p("esri.layers.buildingSublayers.BuildingSublayer")],y);const ae=y,ne="esri.layers.buildingSublayers.BuildingComponentSublayer",ot=F.getLogger(ne),G=Le();let a=class extends ee.LoadableMixin(te(ae)){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){var e,r;return this.layer?{path:`${(e=this.layer.parsedUrl)==null?void 0:e.path}/sublayers/${this.id}`,query:(r=this.layer.parsedUrl)==null?void 0:r.query}:{path:""}}get fieldsIndex(){return new fe(this.fields)}readAssociatedLayer(e,r){const i=this.layer.associatedFeatureServiceItem,o=r.associatedLayerID;return i!=null&&typeof o=="number"?new re({portalItem:i,layerId:o}):null}get objectIdField(){if(this.fields!=null){for(const e of this.fields)if(e.type==="oid")return e.name}return null}get displayField(){return this.associatedLayer!=null?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const r=e!=null?e.signal:null,i=this._fetchService(r).then(()=>{this.indexInfo=Ge(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,ot,r)});return this.addResolvingPromise(i),Promise.resolve(this)}createPopupTemplate(e){return me(this,e)}async _fetchService(e){const r=(await se(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){var o,n,c;const i=(n=(o=this.getFeatureType(r==null?void 0:r.feature))==null?void 0:o.domains)==null?void 0:n[e];return i&&i.type!=="inherited"?i:((c=this.getField(e))==null?void 0:c.domain)??null}getFeatureType(e){return e&&this.associatedLayer!=null?this.associatedLayer.getFeatureType(e):null}get types(){return this.associatedLayer!=null?this.associatedLayer.types??[]:[]}get typeIdField(){return this.associatedLayer!=null?this.associatedLayer.typeIdField:null}get geometryType(){return this.layerType==="3d-object"?"mesh":"point"}get profile(){return this.layerType==="3d-object"?"mesh-pyramids":"points"}get capabilities(){const e=this.associatedLayer!=null&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:He,{query:r,data:{supportsZ:i,supportsM:o,isVersioned:n}}=e;return{query:r,data:{supportsZ:i,supportsM:o,isVersioned:n}}}createQuery(){const e=new ve;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,r){return this._getAssociatedLayerForQuery().then(i=>i.queryExtent(e||this.createQuery(),r))}queryFeatureCount(e,r){return this._getAssociatedLayerForQuery().then(i=>i.queryFeatureCount(e||this.createQuery(),r))}queryFeatures(e,r){return this._getAssociatedLayerForQuery().then(i=>i.queryFeatures(e||this.createQuery(),r)).then(i=>{if(i!=null&&i.features)for(const o of i.features)o.layer=this.layer,o.sourceLayer=this;return i})}queryObjectIds(e,r){return this._getAssociatedLayerForQuery().then(i=>i.queryObjectIds(e||this.createQuery(),r))}async queryCachedAttributes(e,r){const i=be(this.fieldsIndex,await et(this,tt(this)));return Ze(this.parsedUrl.path,this.attributeStorageInfo,e,r,i)}async queryCachedFeature(e,r){const i=await this.queryCachedAttributes(e,[r]);if(!i||i.length===0)throw new x("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const o=new Se;return o.attributes=i[0],o.layer=this,o.sourceLayer=this,o}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:this.associatedLayer!=null}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e!=null&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),this.associatedLayer==null)throw new x("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new x("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};t([s({readOnly:!0})],a.prototype,"parsedUrl",null),t([s({type:ze,readOnly:!0})],a.prototype,"nodePages",void 0),t([s({type:[We],readOnly:!0})],a.prototype,"materialDefinitions",void 0),t([s({type:[Xe],readOnly:!0})],a.prototype,"textureSetDefinitions",void 0),t([s({type:[Ye],readOnly:!0})],a.prototype,"geometryDefinitions",void 0),t([s({readOnly:!0})],a.prototype,"serviceUpdateTimeStamp",void 0),t([s({readOnly:!0})],a.prototype,"store",void 0),t([s({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],a.prototype,"rootNode",void 0),t([s({readOnly:!0})],a.prototype,"attributeStorageInfo",void 0),t([s(G.fields)],a.prototype,"fields",void 0),t([s({readOnly:!0})],a.prototype,"fieldsIndex",null),t([s({readOnly:!0,type:re})],a.prototype,"associatedLayer",void 0),t([I("service","associatedLayer",["associatedLayerID"])],a.prototype,"readAssociatedLayer",null),t([s(G.outFields)],a.prototype,"outFields",void 0),t([s({type:String,readOnly:!0})],a.prototype,"objectIdField",null),t([s({readOnly:!0,type:String,json:{read:!1}})],a.prototype,"displayField",null),t([s({readOnly:!0,type:String})],a.prototype,"apiKey",null),t([s({readOnly:!0,type:we})],a.prototype,"fullExtent",null),t([s({readOnly:!0,type:ie})],a.prototype,"spatialReference",null),t([s({readOnly:!0})],a.prototype,"version",null),t([s({readOnly:!0,type:$e})],a.prototype,"elevationInfo",null),t([s({readOnly:!0,type:Number})],a.prototype,"minScale",null),t([s({readOnly:!0,type:Number})],a.prototype,"maxScale",null),t([s({readOnly:!0,type:Number})],a.prototype,"effectiveScaleRange",null),t([s({type:["hide","show"],json:{write:!0}})],a.prototype,"listMode",void 0),t([s({types:Oe,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],a.prototype,"renderer",void 0),t([s({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],a.prototype,"definitionExpression",void 0),t([s(Fe)],a.prototype,"popupEnabled",void 0),t([s({type:xe,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],a.prototype,"popupTemplate",void 0),t([s({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],a.prototype,"normalReferenceFrame",void 0),t([s({readOnly:!0,json:{read:!1}})],a.prototype,"defaultPopupTemplate",null),t([s()],a.prototype,"types",null),t([s()],a.prototype,"typeIdField",null),t([s({json:{write:!1}}),oe(new Ie({"3DObject":"3d-object",Point:"point"}))],a.prototype,"layerType",void 0),t([s()],a.prototype,"geometryType",null),t([s()],a.prototype,"profile",null),t([s({readOnly:!0,json:{read:!1}})],a.prototype,"capabilities",null),a=t([p(ne)],a);const N=a;var R;const J={type:b,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:le}}},read:!1}};function le(e,r,i){if(e&&Array.isArray(e))return new b(e.map(o=>{const n=at(o);if(n){const c=new n;return c.read(o,i),c}return i!=null&&i.messages&&o&&i.messages.push(new je("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(o.type||"unknown")+"' are not supported",{definition:o,context:i})),null}))}let g=R=class extends ae{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return Te(this,e=>R.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}))}};function at(e){return e.layerType==="group"?g:N}t([s({type:["hide","show","hide-children"],json:{write:!0}})],g.prototype,"listMode",void 0),t([s(J)],g.prototype,"sublayers",void 0),g=R=t([p("esri.layers.buildingSublayers.BuildingGroupSublayer")],g),function(e){function r(i,o){i.forEach(n=>{o(n),n.type==="building-group"&&r(n.sublayers,o)})}e.sublayersProperty=J,e.readSublayers=le,e.forEachSublayer=r}(g||(g={}));const m=g;let L=class extends f{constructor(){super(...arguments),this.type=null}};t([s({type:String,readOnly:!0,json:{write:!0}})],L.prototype,"type",void 0),L=t([p("esri.layers.support.BuildingFilterAuthoringInfo")],L);const pe=L;var k;let S=k=class extends f{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new k({filterType:this.filterType,filterValues:u(this.filterValues)})}};t([s({type:String,json:{write:!0}})],S.prototype,"filterType",void 0),t([s({type:[String],json:{write:!0}})],S.prototype,"filterValues",void 0),S=k=t([p("esri.layers.support.BuildingFilterAuthoringInfoType")],S);const nt=S;var P;const lt=b.ofType(nt);let j=P=class extends f{clone(){return new P({filterTypes:u(this.filterTypes)})}};t([s({type:lt,json:{write:!0}})],j.prototype,"filterTypes",void 0),j=P=t([p("esri.layers.support.BuildingFilterAuthoringInfoBlock")],j);const pt=j;var M;const yt=b.ofType(pt);let w=M=class extends pe{constructor(){super(...arguments),this.type="checkbox"}clone(){return new M({filterBlocks:u(this.filterBlocks)})}};t([s({type:["checkbox"]})],w.prototype,"type",void 0),t([s({type:yt,json:{write:!0}})],w.prototype,"filterBlocks",void 0),w=M=t([p("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],w);const z=w;let T=class extends f{};t([s({readOnly:!0,json:{read:!1}})],T.prototype,"type",void 0),T=t([p("esri.layers.support.BuildingFilterMode")],T);const A=T;var Q;let E=Q=class extends A{constructor(){super(...arguments),this.type="solid"}clone(){return new Q}};t([s({type:["solid"],readOnly:!0,json:{write:!0}})],E.prototype,"type",void 0),E=Q=t([p("esri.layers.support.BuildingFilterModeSolid")],E);const U=E;var K;let $=K=class extends A{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new K({edges:u(this.edges)})}};t([oe({wireFrame:"wire-frame"})],$.prototype,"type",void 0),t([s(Ee)],$.prototype,"edges",void 0),$=K=t([p("esri.layers.support.BuildingFilterModeWireFrame")],$);const W=$;var C;let B=C=class extends A{constructor(){super(...arguments),this.type="x-ray"}clone(){return new C}};t([s({type:["x-ray"],readOnly:!0,json:{write:!0}})],B.prototype,"type",void 0),B=C=t([p("esri.layers.support.BuildingFilterModeXRay")],B);const X=B;var V;const dt={nonNullable:!0,types:{key:"type",base:A,typeMap:{solid:U,"wire-frame":W,"x-ray":X}},json:{read:e=>{switch(e==null?void 0:e.type){case"solid":return U.fromJSON(e);case"wireFrame":return W.fromJSON(e);case"x-ray":return X.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let v=V=class extends f{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new U,this.title=""}clone(){return new V({filterExpression:this.filterExpression,filterMode:u(this.filterMode),title:this.title})}};t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],v.prototype,"filterExpression",void 0),t([s(dt)],v.prototype,"filterMode",void 0),t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],v.prototype,"title",void 0),v=V=t([p("esri.layers.support.BuildingFilterBlock")],v);const ut=v;var D;const ct=b.ofType(ut);let h=D=class extends f{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=Be(),this.name=null}clone(){return new D({description:this.description,filterBlocks:u(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:u(this.filterAuthoringInfo)})}};t([s({type:String,json:{write:!0}})],h.prototype,"description",void 0),t([s({type:ct,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"filterBlocks",void 0),t([s({types:{key:"type",base:pe,typeMap:{checkbox:z}},json:{read:e=>(e==null?void 0:e.type)==="checkbox"?z.fromJSON(e):null,write:!0}})],h.prototype,"filterAuthoringInfo",void 0),t([s({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"id",void 0),t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"name",void 0),h=D=t([p("esri.layers.support.BuildingFilter")],h);const ht=h;let d=class extends f{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};t([s({type:String})],d.prototype,"fieldName",void 0),t([s({type:String})],d.prototype,"modelName",void 0),t([s({type:String})],d.prototype,"label",void 0),t([s({type:Number})],d.prototype,"min",void 0),t([s({type:Number})],d.prototype,"max",void 0),t([s({json:{read:e=>Array.isArray(e)&&(e.every(r=>typeof r=="string")||e.every(r=>typeof r=="number"))?e.slice():null}})],d.prototype,"mostFrequentValues",void 0),t([s({type:[Number]})],d.prototype,"subLayerIds",void 0),d=t([p("esri.layers.support.BuildingFieldStatistics")],d);let O=class extends ee.LoadableMixin(te(f)){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||this.loadStatus==="loading"?this._get("fields"):(F.getLogger(this).error("building summary statistics are not loaded"),null)}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),Promise.resolve(this)}async _fetchService(e){const r=(await se(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(r,{origin:"service"})}};t([s({constructOnly:!0,type:String})],O.prototype,"url",void 0),t([s({readOnly:!0,type:[d],json:{read:{source:"summary"}}})],O.prototype,"fields",null),O=t([p("esri.layers.support.BuildingSummaryStatistics")],O);const ye=O,de=b.ofType(ht),ue=u(m.sublayersProperty);var Y;const _=(Y=ue.json)==null?void 0:Y.origins;_&&(_["web-scene"]={type:[N],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},_["portal-item"]={type:[N],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}});let l=class extends Je(Ae(_e(qe(Ne(Re(ke(De))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new Pe({getCollections:()=>[this.sublayers],getChildrenFunction:r=>r.type==="building-group"?r.sublayers:null}),this.sublayers=null,this._sublayerOverrides=null,this.filters=new de,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.legendEnabled=!0,this.type="building-scene"}normalizeCtorArgs(e){return typeof e=="string"?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,r,i){const o=m.readSublayers(e,r,i);return m.forEachSublayer(o,n=>n.layer=this),this._sublayerOverrides&&(this.applySublayerOverrides(o,this._sublayerOverrides),this._sublayerOverrides=null),o}applySublayerOverrides(e,{overrides:r,context:i}){m.forEachSublayer(e,o=>o.read(r.get(o.id),i))}readSublayerOverrides(e,r){var o;const i=new Map;for(const n of e)n!=null&&typeof n=="object"&&typeof n.id=="number"?i.set(n.id,n):(o=r.messages)==null||o.push(new x("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:n}));return{overrides:i,context:r}}writeSublayerOverrides(e,r,i){const o=[];m.forEachSublayer(this.sublayers,n=>{const c=n.write({},i);Object.keys(c).length>1&&o.push(c)}),o.length>0&&(r.sublayers=o)}writeUnappliedOverrides(e,r){r.sublayers=[],e.overrides.forEach(i=>{r.sublayers.push(u(i))})}write(e,r){return e=super.write(e,r),!r||r.origin!=="web-scene"&&r.origin!=="portal-item"||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this._sublayerOverrides&&this.writeUnappliedOverrides(this._sublayerOverrides,e)),e}read(e,r){if(super.read(e,r),r&&(r.origin==="web-scene"||r.origin==="portal-item")&&e!=null&&Array.isArray(e.sublayers)){const i=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,i):this._sublayerOverrides=i}}readSummaryStatistics(e,r){var i;if(typeof r.statisticsHRef=="string"){const o=Me((i=this.parsedUrl)==null?void 0:i.path,r.statisticsHRef);return new ye({url:o})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const r=e!=null?e.signal:null,i=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(Qe).then(()=>this._fetchService(r)).then(()=>this._fetchAssociatedFeatureService(r));return this.addResolvingPromise(i),Promise.resolve(this)}loadAll(){return Ue(this,e=>{m.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}),this.summaryStatistics&&e(this.summaryStatistics)})}async saveAs(e,r){return this._debouncedSaveOperations(H.SAVE_AS,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(H.SAVE,e)}validateLayer(e){if(!e.layerType||e.layerType!=="Building")throw new x("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}async _fetchAssociatedFeatureService(e){try{const{portalItem:r}=await rt(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,apiKey:this.apiKey,signal:e});this.associatedFeatureServiceItem=r}catch(r){F.getLogger(this).warn("Associated feature service item could not be loaded",r)}}_validateElevationInfo(){const e=this.elevationInfo,r="Building scene layers";Z(F.getLogger(this),st(r,"absolute-height",e)),Z(F.getLogger(this),it(r,e))}};t([s({type:["BuildingSceneLayer"]})],l.prototype,"operationalLayerType",void 0),t([s({readOnly:!0})],l.prototype,"allSublayers",void 0),t([s(ue)],l.prototype,"sublayers",void 0),t([I("service","sublayers")],l.prototype,"readSublayers",null),t([s({type:de,nonNullable:!0,json:{write:!0}})],l.prototype,"filters",void 0),t([s({type:String,json:{write:!0}})],l.prototype,"activeFilterId",void 0),t([s({readOnly:!0,type:ye})],l.prototype,"summaryStatistics",void 0),t([I("summaryStatistics",["statisticsHRef"])],l.prototype,"readSummaryStatistics",null),t([s({type:[String],json:{read:!1}})],l.prototype,"outFields",void 0),t([s(Ke)],l.prototype,"fullExtent",void 0),t([s(Ce)],l.prototype,"legendEnabled",void 0),t([s({type:["show","hide","hide-children"]})],l.prototype,"listMode",void 0),t([s(q(ie))],l.prototype,"spatialReference",void 0),t([s(Ve)],l.prototype,"elevationInfo",null),t([s({json:{read:!1},readOnly:!0})],l.prototype,"type",void 0),t([s()],l.prototype,"associatedFeatureServiceItem",void 0),l=t([p("esri.layers.BuildingSceneLayer")],l);const Qt=l;export{Qt as default};
