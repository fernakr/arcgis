import{F as s,G as i,H as b,fN as x,eX as $,K as j,bj as I,s as f,bg as w,et as N,a1 as J,cY as F,E as m,fP as R,dT as P,fQ as q,fR as T,dn as k,dQ as D,ds as L,dp as G,dq as Q,dr as Z,dt as C,f as O,bN as z,fS as g,fT as V,I as v,_ as W,fU as U,aW as y,e0 as A,fV as B,cX as M,du as X,fW as Y,fX as H,fY as K,dv as ee,fZ as te,f_ as se,L as re,f$ as ie,g0 as oe,g1 as ne,g2 as ae,g3 as le,dw as de,g4 as ue,dC as pe}from"./index-08b3f6d9.js";import{l as he}from"./clientSideDefaults-9fa04083.js";import"./QueryEngineCapabilities-85c4f1d0.js";let p=class extends x{constructor(){super(...arguments),this.type="geojson",this.refresh=$(async e=>{await this.load();const{extent:t,timeExtent:r}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,r&&(this.sourceJSON.timeInfo.timeExtent=[r.start,r.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}applyEdits(e){return this.load().then(()=>this._applyEdits(e))}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)).then(r=>j.fromJSON(r))}queryFeaturesJSON(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))}queryFeatureCount(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t))}queryObjectIds(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t))}queryExtent(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t)).then(r=>({count:r.count,extent:I.fromJSON(r.extent)}))}querySnapping(e,t={}){return this.load(t).then(()=>this._connection.invoke("querySnapping",e,t))}_applyEdits(e){if(!this._connection)throw new f("geojson-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField,r=[],a=[],l=[];if(e.addFeatures)for(const n of e.addFeatures)r.push(this._serializeFeature(n));if(e.deleteFeatures)for(const n of e.deleteFeatures)"objectId"in n&&n.objectId!=null?a.push(n.objectId):"attributes"in n&&n.attributes[t]!=null&&a.push(n.attributes[t]);if(e.updateFeatures)for(const n of e.updateFeatures)l.push(this._serializeFeature(n));return this._connection.invoke("applyEdits",{adds:r,updates:l,deletes:a}).then(({extent:n,timeExtent:d,featureEditResults:u})=>(this.sourceJSON.extent=n,d&&(this.sourceJSON.timeInfo.timeExtent=[d.start,d.end]),this._createEditsResult(u)))}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new f("geojson-layer-source:edit-failure",t.description,{code:t.code}):null}}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e);return r?{geometry:r.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return t==null?null:t.type==="mesh"||t.type==="extent"?w.fromExtent(t.extent):t}async _startWorker(e){this._connection=await N("GeoJSONSourceWorker",{strategy:J("feature-layers-workers")?"dedicated":"local",signal:e,registryTarget:this});const{fields:t,spatialReference:r,hasZ:a,geometryType:l,objectIdField:n,url:d,timeInfo:u,customParameters:E}=this.layer,S=this.layer.originOf("spatialReference")==="defaults",_={url:d,customParameters:E,fields:t&&t.map(c=>c.toJSON()),geometryType:F.toJSON(l),hasZ:a,objectIdField:n,timeInfo:u?u.toJSON():null,spatialReference:S?null:r&&r.toJSON()},h=await this._connection.invoke("load",_,{signal:e});for(const c of h.warnings)m.getLogger(this.layer).warn("#load()",`$${c.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:c});h.featureErrors.length&&m.getLogger(this.layer).warn("#load()",`Encountered ${h.featureErrors.length} validation errors while loading features. (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{errors:h.featureErrors}),this.sourceJSON=h.layerDefinition,this.capabilities=he(this.sourceJSON.hasZ,!0)}};s([i()],p.prototype,"capabilities",void 0),s([i()],p.prototype,"type",void 0),s([i({constructOnly:!0})],p.prototype,"layer",void 0),s([i()],p.prototype,"sourceJSON",void 0),p=s([b("esri.layers.graphics.sources.GeoJSONSource")],p);const ye=ue();let o=class extends R(P(q(T(k(D(L(G(Q(Z(C(pe))))))))))){constructor(e){super(e),this.copyright=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new p({layer:this}),this.spatialReference=O.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){const t=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},e).catch(z).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),g(this.renderer,this.fieldsIndex),V(this.timeInfo,this.fieldsIndex)});return this.addResolvingPromise(t),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&this.geometryType==null}get parsedUrl(){return this.url?v(this.url):null}set renderer(e){g(e,this.fieldsIndex),this._set("renderer",e)}set url(e){if(!e)return void this._set("url",e);const t=v(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async applyEdits(e,t){const{applyEdits:r}=await W(()=>import("./editingSupport-e782bd8c.js"),["assets/editingSupport-e782bd8c.js","assets/index-08b3f6d9.js","assets/index-298317a1.css"]);await this.load();const a=await r(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),a}on(e,t){return super.on(e,t)}createPopupTemplate(e){return U(this,e)}createQuery(){var l;const e=new y,t=(l=this.capabilities)==null?void 0:l.data;e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:a}=this;return e.timeExtent=r!=null&&a!=null?a.offset(-r.value,r.unit):a||null,e}getFieldDomain(e,t){let r,a=!1;const l=t==null?void 0:t.feature,n=l==null?void 0:l.attributes,d=this.typeIdField&&(n==null?void 0:n[this.typeIdField]);return d!=null&&this.types&&(a=this.types.some(u=>u.id==d&&(r=u.domains&&u.domains[e],r&&r.type==="inherited"&&(r=this._getLayerDomain(e)),!0))),a||r||(r=this._getLayerDomain(e)),r}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(y.from(e)||this.createQuery(),t)).then(r=>{if(r!=null&&r.features)for(const a of r.features)a.layer=a.sourceLayer=this;return r})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(y.from(e)||this.createQuery(),t))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(y.from(e)||this.createQuery(),t))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(y.from(e)||this.createQuery(),t))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return t!=null&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}_getLayerDomain(e){if(!this.fields)return null;let t=null;return this.fields.some(r=>(r.name===e&&(t=r.domain),!!t)),t}};s([i({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"capabilities",null),s([i({type:String})],o.prototype,"copyright",void 0),s([i({readOnly:!0})],o.prototype,"createQueryVersion",null),s([i(A("dateFieldsTimeReference"))],o.prototype,"dateFieldsTimeZone",void 0),s([i({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),s([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),s([i({type:String})],o.prototype,"displayField",void 0),s([i({type:Boolean})],o.prototype,"editingEnabled",void 0),s([i(B)],o.prototype,"elevationInfo",void 0),s([i({type:[M],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],o.prototype,"fields",void 0),s([i(ye.fieldsIndex)],o.prototype,"fieldsIndex",void 0),s([i({type:I,json:{name:"extent"}})],o.prototype,"fullExtent",void 0),s([i({type:["point","polygon","polyline","multipoint"],json:{read:{reader:F.read}}})],o.prototype,"geometryType",void 0),s([i({type:Boolean})],o.prototype,"hasZ",void 0),s([i(X)],o.prototype,"id",void 0),s([i({type:Boolean,readOnly:!0})],o.prototype,"isTable",null),s([i(Y)],o.prototype,"labelsVisible",void 0),s([i({type:[H],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:K},write:!0}})],o.prototype,"labelingInfo",void 0),s([i(ee)],o.prototype,"legendEnabled",void 0),s([i({type:["show","hide"]})],o.prototype,"listMode",void 0),s([i({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],o.prototype,"objectIdField",void 0),s([i(te)],o.prototype,"opacity",void 0),s([i({type:["GeoJSON"]})],o.prototype,"operationalLayerType",void 0),s([i({readOnly:!0})],o.prototype,"parsedUrl",null),s([i(se)],o.prototype,"popupEnabled",void 0),s([i({type:re,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),s([i({types:ie,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:oe}}}})],o.prototype,"renderer",null),s([i(ne)],o.prototype,"screenSizePerspectiveEnabled",void 0),s([i({readOnly:!0})],o.prototype,"source",void 0),s([i({type:O})],o.prototype,"spatialReference",void 0),s([i({type:[ae]})],o.prototype,"templates",void 0),s([i()],o.prototype,"title",void 0),s([i({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),s([i({type:String,readOnly:!0})],o.prototype,"typeIdField",void 0),s([i({type:[le]})],o.prototype,"types",void 0),s([i(de)],o.prototype,"url",null),o=s([b("esri.layers.GeoJSONLayer")],o);const ge=o;export{ge as default};
