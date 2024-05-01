import{F as i,G as r,H as x,fw as P,eT as $,K as C,bh as T,s as E,dg as f,aP as N,eq as U,a1 as J,bq as _,fy as k,dR as W,fz as X,fA as D,dl as Y,dO as L,dm as Q,dq as G,dn as V,dp as A,dr as M,f as q,fB as O,fC as Z,df as j,e2 as z,I as B,fD as H,b0 as y,dW as K,fE as ee,bU as te,fF as ie,fG as re,fH as se,dt as oe,dX as S,gA as ae,fJ as ne,L as le,fK as pe,fL as de,fM as ue,du as ye,fP as ce,dA as fe}from"./index-beb896e6.js";import{l as me,o as he}from"./clientSideDefaults-1c260671.js";import{v as ge,W as we,q as ve,V as Fe,S as be}from"./wfsUtils-a18395a2.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./geojson-3ecee0cc.js";import"./date-294ce3fb.js";import"./OptimizedGeometry-d94e541f.js";import"./xmlUtils-444cb4c0.js";let d=class extends P{constructor(){super(...arguments),this._connection=null,this.capabilities=me(!1,!1),this.type="wfs",this.refresh=$(async e=>{await this.load();const{extent:t}=await this._connection.invoke("refresh",e);return t&&(this.sourceJSON.extent=t),{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}})}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker({signal:t})),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,t={}){await this.load(t);const o=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return C.fromJSON(o)}async queryFeaturesJSON(e,t={}){return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}async queryFeatureCount(e,t={}){return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}async queryObjectIds(e,t={}){return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}async queryExtent(e,t={}){await this.load(t);const o=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return{count:o.count,extent:T.fromJSON(o.extent)}}async querySnapping(e,t={}){return await this.load(t),this._connection.invoke("querySnapping",e,t)}async _createLoadOptions(e){var F,b;const{url:t,customParameters:o,name:n,namespaceUri:l,fields:a,geometryType:u,swapXY:m}=this.layer,c=this.layer.originOf("spatialReference")==="defaults"?void 0:this.layer.spatialReference;if(!t)throw new E("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await ge(t,{customParameters:o,...e}));const h=["fields","geometryType","name","namespaceUri","swapXY"].some(w=>this.layer[w]==null),p=h?await we(this.wfsCapabilities,n,l,{spatialReference:c,customParameters:o,signal:e==null?void 0:e.signal}):{...ve(a??[]),geometryType:u,name:n,namespaceUri:l,spatialReference:c,swapXY:m},g=Fe(this.wfsCapabilities.readFeatureTypes(),p.name,p.namespaceUri),R=f.toJSON(p.geometryType);return{customParameters:o,featureType:g,fields:((F=p.fields)==null?void 0:F.map(w=>w.toJSON()))??[],geometryField:p.geometryField,geometryType:R,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:p.objectIdField,spatialReference:(b=p.spatialReference)==null?void 0:b.toJSON(),swapXY:!!p.swapXY}}async _startWorker(e){const[t,o]=await N([this._createLoadOptions(e),U("WFSSourceWorker",{...e,strategy:J("feature-layers-workers")?"dedicated":"local",registryTarget:this})]),n=t.error||o.error||null,l=o.value||null;if(n)throw l&&l.close(),n;const a=t.value;this._connection=o.value;const u=(await this._connection.invoke("load",a,e)).extent;this.sourceJSON={dateFieldsTimeReference:{timeZoneIANA:_},extent:u,fields:a.fields,geometryType:a.geometryType,objectIdField:a.objectIdField,geometryField:a.geometryField,drawingInfo:he(a.geometryType),name:a.featureType.title,wfsInfo:{name:a.featureType.name,featureUrl:a.getFeatureUrl,maxFeatures:3e3,swapXY:a.swapXY,supportedSpatialReferences:a.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:a.featureType.namespaceUri}}}};i([r()],d.prototype,"capabilities",void 0),i([r({constructOnly:!0})],d.prototype,"layer",void 0),i([r()],d.prototype,"sourceJSON",void 0),i([r()],d.prototype,"type",void 0),i([r()],d.prototype,"wfsCapabilities",void 0),d=i([x("esri.layers.graphics.sources.WFSSource")],d);var v;const I=ce();let s=v=class extends k(W(X(D(Y(L(Q(G(V(A(M(fe))))))))))){static fromWFSLayerInfo(e){const{customParameters:t,fields:o,geometryField:n,geometryType:l,name:a,namespaceUri:u,objectIdField:m,spatialReference:c,swapXY:h,url:p,wfsCapabilities:g}=e;return new v({customParameters:t,fields:o,geometryField:n,geometryType:l,name:a,namespaceUri:u,objectIdField:m,spatialReference:c,swapXY:h,url:p,wfsCapabilities:g})}constructor(e){super(e),this.copyright=null,this.customParameters=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxFeatures=3e3,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=q.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),O(this.renderer,this.fieldsIndex),Z(this.timeInfo,this.fieldsIndex)})),Promise.resolve(this)}get capabilities(){var e;return(e=this.source)==null?void 0:e.capabilities}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,t,o){const n=e.filter(l=>l.name!==be);this.geometryField&&n.unshift(new j({name:this.geometryField,alias:this.geometryField,type:"geometry"})),z(o,n.map(l=>l.toJSON()),t)}get parsedUrl(){return B(this.url)}set renderer(e){O(e,this.fieldsIndex),this._set("renderer",e)}get wfsCapabilities(){var e;return(e=this.source)==null?void 0:e.wfsCapabilities}set wfsCapabilities(e){this.source&&(this.source.wfsCapabilities=e)}createPopupTemplate(e){return H(this,e)}createQuery(){const e=new y;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:t,timeExtent:o}=this;return e.timeExtent=t!=null&&o!=null?o.offset(-t.value,t.unit):o||null,e}getFieldDomain(e,t){var o;return(o=this.getField(e))==null?void 0:o.domain}getField(e){var t;return(t=this.fieldsIndex)==null?void 0:t.get(e)}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(y.from(e)||this.createQuery(),t)).then(o=>{if(o!=null&&o.features)for(const n of o.features)n.layer=n.sourceLayer=this;return o})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(y.from(e)||this.createQuery(),t))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(y.from(e)||this.createQuery(),t))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(y.from(e)||this.createQuery(),t))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return t!=null&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};i([r({readOnly:!0})],s.prototype,"capabilities",null),i([r({type:String})],s.prototype,"copyright",void 0),i([r({readOnly:!0})],s.prototype,"createQueryVersion",null),i([r({json:{name:"wfsInfo.customParameters",write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0),ignoreOrigin:!0})}}})],s.prototype,"customParameters",void 0),i([r(K("dateFieldsTimeReference"))],s.prototype,"dateFieldsTimeZone",void 0),i([r({readOnly:!0})],s.prototype,"defaultPopupTemplate",null),i([r({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],s.prototype,"definitionExpression",void 0),i([r({type:String})],s.prototype,"displayField",void 0),i([r(ee)],s.prototype,"elevationInfo",void 0),i([r({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"featureUrl",void 0),i([r({type:[j],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],s.prototype,"fields",void 0),i([te("fields")],s.prototype,"writeFields",null),i([r(I.fieldsIndex)],s.prototype,"fieldsIndex",void 0),i([r({type:T,json:{name:"extent"}})],s.prototype,"fullExtent",void 0),i([r()],s.prototype,"geometryField",void 0),i([r({type:String,json:{read:{source:"layerDefinition.geometryType",reader:f.read},write:{target:"layerDefinition.geometryType",writer:f.write,ignoreOrigin:!0},origins:{service:{read:f.read}}}})],s.prototype,"geometryType",void 0),i([r({type:String})],s.prototype,"id",void 0),i([r(ie)],s.prototype,"labelsVisible",void 0),i([r({type:[re],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:se},write:!0}})],s.prototype,"labelingInfo",void 0),i([r(oe)],s.prototype,"legendEnabled",void 0),i([r({type:["show","hide"]})],s.prototype,"listMode",void 0),i([r({type:String})],s.prototype,"objectIdField",void 0),i([r({type:["WFS"]})],s.prototype,"operationalLayerType",void 0),i([r({type:S,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"maxFeatures",void 0),i([r({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],s.prototype,"mode",void 0),i([r({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"name",void 0),i([r({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"namespaceUri",void 0),i([r(ae)],s.prototype,"opacity",void 0),i([r(I.outFields)],s.prototype,"outFields",void 0),i([r({readOnly:!0})],s.prototype,"parsedUrl",null),i([r(ne)],s.prototype,"popupEnabled",void 0),i([r({type:le,json:{name:"popupInfo",write:!0}})],s.prototype,"popupTemplate",void 0),i([r({types:pe,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:de,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],s.prototype,"renderer",null),i([r(ue)],s.prototype,"screenSizePerspectiveEnabled",void 0),i([r({readOnly:!0})],s.prototype,"source",void 0),i([r({type:q,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],s.prototype,"spatialReference",void 0),i([r({readOnly:!0,type:[S],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"spatialReferences",void 0),i([r({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"swapXY",void 0),i([r({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],s.prototype,"title",void 0),i([r({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),i([r(ye)],s.prototype,"url",void 0),i([r({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"version",void 0),i([r()],s.prototype,"wfsCapabilities",null),s=v=i([x("esri.layers.WFSLayer")],s);const Pe=s;export{Pe as default};
