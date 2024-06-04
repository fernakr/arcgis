import{F as i,G as a,bb as _,bB as O,H as u,a9 as I,bl as x,e9 as L,hu as N,aY as R,dl as M,V as j,I as A,ad as E,dR as J,dq as V,dr as $,ds as D,dt as P,dS as U,$ as K,dh as G,bF as C,s as c,E as S,bA as F,fV as q,dC as z,eG as H}from"./index-34cda61d.js";import{j as h}from"./persistable-be5435b9.js";import{E as k,P as w}from"./SceneService-2fdd70a8.js";import{s as B,l as Y,u as Q,m as W}from"./I3SLayerDefinitions-2fa8a76f.js";import{x as T,p as X,E as Z}from"./elevationInfoUtils-04697398.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./resourceExtension-50a0f26f.js";import"./originUtils-cfe4feaf.js";import"./saveAPIKeyUtils-c465ecf1.js";import"./saveUtils-ca46adc5.js";import"./resourceUtils-e6ef793b.js";var f;let n=f=class extends I{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,o,r){var l;if((l=r.layer)!=null&&l.spatialReference&&!r.layer.spatialReference.equals(this.geometry.spatialReference)){if(!x(e.spatialReference,r.layer.spatialReference))return void((r==null?void 0:r.messages)&&r.messages.push(new L("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:r.layer.spatialReference,context:r})));const d=new _;N(e,d,r.layer.spatialReference),t[o]=d.toJSON(r)}else t[o]=e.toJSON(r);delete t[o].spatialReference}clone(){return new f({geometry:R(this.geometry),type:this.type})}};i([a({type:_}),h()],n.prototype,"geometry",void 0),i([O(["web-scene","portal-item"],"geometry")],n.prototype,"writeGeometry",null),i([a({type:["clip","mask","replace"],nonNullable:!0}),h()],n.prototype,"type",void 0),n=f=i([u("esri.layers.support.SceneModification")],n);const m=n;var p;let y=p=class extends M(j.ofType(m)){constructor(e){super(e),this.url=null}clone(){return new p({url:this.url,items:this.items.map(e=>e.clone())})}toJSON(e){return this.toArray().map(t=>t.toJSON(e)).filter(t=>!!t.geometry)}static fromJSON(e,t){const o=new p;for(const r of e)o.add(m.fromJSON(r,t));return o}static async fromUrl(e,t,o){const r={url:A(e),origin:"service"},l=await E(e,{responseType:"json",signal:o==null?void 0:o.signal}),d=t.toJSON(),g=[];for(const v of l.data)g.push(m.fromJSON({...v,geometry:{...v.geometry,spatialReference:d}},r));return new p({url:e,items:g})}};i([a({type:String})],y.prototype,"url",void 0),y=p=i([u("esri.layers.support.SceneModifications")],y);const b=y;let s=class extends k(J(V($(D(P(U(z))))))){constructor(...e){super(...e),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.path=null}initialize(){this.addHandles(K(()=>this.modifications,"after-changes",()=>this.modifications=this.modifications,H))}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}readModifications(e,t,o){this._modificationsSource={url:G(e,o),context:o}}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=e==null?void 0:e.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(o){C(o)}if(await this._fetchService(t),this._modificationsSource!=null){const o=await b.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",o,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(this._modificationsSource!=null)return this.load().then(()=>{},()=>{})}async saveAs(e,t){return this._debouncedSaveOperations(w.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(w.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="IntegratedMesh")throw new c("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new c("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new c("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}_validateElevationInfo(){const e=this.elevationInfo,t="Integrated mesh layers";T(S.getLogger(this),X(t,"absolute-height",e)),T(S.getLogger(this),Z(t,e))}};i([a({type:String,readOnly:!0})],s.prototype,"geometryType",void 0),i([a({type:["show","hide"]})],s.prototype,"listMode",void 0),i([a({type:["IntegratedMeshLayer"]})],s.prototype,"operationalLayerType",void 0),i([a({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),i([a({type:B,readOnly:!0})],s.prototype,"nodePages",void 0),i([a({type:[Y],readOnly:!0})],s.prototype,"materialDefinitions",void 0),i([a({type:[Q],readOnly:!0})],s.prototype,"textureSetDefinitions",void 0),i([a({type:[W],readOnly:!0})],s.prototype,"geometryDefinitions",void 0),i([a({readOnly:!0})],s.prototype,"serviceUpdateTimeStamp",void 0),i([a({type:b}),h({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],s.prototype,"modifications",void 0),i([F(["web-scene","portal-item"],"modifications")],s.prototype,"readModifications",null),i([a(q)],s.prototype,"elevationInfo",null),i([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],s.prototype,"path",void 0),s=i([u("esri.layers.IntegratedMeshLayer")],s);const ye=s;export{ye as default};
