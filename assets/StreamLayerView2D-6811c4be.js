import{F as s,G as n,a2 as h,H as y,J as u,s as d,eL as _,B as f,K as S}from"./index-994ee346.js";import v from"./FeatureLayerView2D-c8ae97a2.js";import{e as g}from"./util-4e5d796d.js";import"./definitions-63b730da.js";import"./LayerView-8bc55094.js";import"./Container-20a1e59f.js";import"./enums-bdecffa2.js";import"./Texture-184d16e2.js";import"./AttributeStoreView-d75a2f22.js";import"./TiledDisplayObject-9e3b5b8f.js";import"./color-c0eea5ad.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./WGLContainer-4482cbb5.js";import"./FramebufferObject-d85900a3.js";import"./ProgramTemplate-37609082.js";import"./GeometryUtils-be62b3f9.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-4a44eaa5.js";import"./featureConversionUtils-a2ee31db.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-40faaaa4.js";import"./cimAnalyzer-1bb4b7dd.js";import"./fontUtils-49904cec.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-e33eda13.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-8a604a4d.js";import"./floatRGBA-401ee15e.js";import"./ExpandedCIM-771ef486.js";import"./BitmapTileContainer-b6595a75.js";import"./Bitmap-95838629.js";import"./TileContainer-513958cf.js";import"./CircularArray-ef508845.js";import"./BufferPool-34c1fc21.js";import"./FeatureContainer-e211d540.js";import"./popupUtils-01559aa0.js";import"./RefreshableLayerView-6abc0323.js";const O=e=>{let t=class extends e{resume(){this._isUserPaused=!1,this.suspended||this._doResume()}pause(){this._isUserPaused=!0,this.suspended||this._doPause()}constructor(...r){super(...r),this._isUserPaused=!1,this.filter=null}get connectionStatus(){return this._isUserPaused?"paused":this._streamConnectionStatus}_onSuspendedChange(r){r?this._doPause():this._isUserPaused||this._doResume()}};return s([n()],t.prototype,"_isUserPaused",void 0),s([n({readOnly:!0})],t.prototype,"connectionStatus",null),s([n({type:h})],t.prototype,"filter",void 0),t=s([y("esri.layers.mixins.StreamLayerView")],t),t};function c(e,t){if(e==null&&t==null)return null;const r={};return t!=null&&(r.geometry=t.toJSON()),e!=null&&(r.where=e),r}let o=class extends O(v){constructor(){super(...arguments),this.pipelineConnectionStatus="disconnected",this.pipelineErrorString=null,this._enabledEventTypes=new Set}initialize(){this.addHandles([u(()=>this.layer.customParameters,e=>this._proxy.updateCustomParameters(e)),this.layer.on("send-message-to-socket",e=>this._proxy.sendMessageToSocket(e)),this.layer.on("send-message-to-client",e=>this._proxy.sendMessageToClient(e)),u(()=>this.layer.purgeOptions,()=>this._update()),u(()=>this.suspended,this._onSuspendedChange.bind(this))],"constructor")}get connectionError(){return this.pipelineErrorString?new d("stream-controller",this.pipelineErrorString):null}on(e,t){if(Array.isArray(e))return _(e.map(p=>this.on(p,t)));const r=["data-received","message-received"].includes(e);r&&(this._enabledEventTypes.add(e),this._proxy.enableEvent(e,!0));const a=super.on(e,t),i=this;return f(()=>{a.remove(),r&&(i._proxy.closed||i.hasEventListener(e)||i._proxy.enableEvent(e,!1))})}queryLatestObservations(e,t){var r,a,i;if(!((r=this.layer.timeInfo)!=null&&r.endField||(a=this.layer.timeInfo)!=null&&a.startField||(i=this.layer.timeInfo)!=null&&i.trackIdField))throw new d("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then(p=>{const l=S.fromJSON(p);return l.features.forEach(m=>{m.layer=this.layer,m.sourceLayer=this.layer}),l})}detach(){super.detach(),this.pipelineConnectionStatus="disconnected"}get _streamConnectionStatus(){return this.pipelineConnectionStatus}_doPause(){var e;(e=this._proxy)==null||e.pauseStream()}_doResume(){var e;(e=this._proxy)==null||e.resumeStream()}_createClientOptions(){return{...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value)}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(c(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){var l;const e=this.layer,{objectIdField:t}=e,r=e.fields.map(m=>m.toJSON()),a=g(e.geometryType),i=((l=e.timeInfo)==null?void 0:l.toJSON())||null,p=e.spatialReference?e.spatialReference.toJSON():null;return{type:"stream",isPaused:this._isUserPaused,fields:r,fieldsIndex:this.layer.fieldsIndex.toJSON(),geometryType:a,objectIdField:t,timeInfo:i,source:this.layer.parsedUrl,serviceFilter:c(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enabledEventTypes:Array.from(this._enabledEventTypes.values()),spatialReference:p,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};s([n()],o.prototype,"pipelineConnectionStatus",void 0),s([n()],o.prototype,"pipelineErrorString",void 0),s([n({readOnly:!0})],o.prototype,"connectionError",null),s([n({readOnly:!0})],o.prototype,"_streamConnectionStatus",null),o=s([y("esri.views.2d.layers.StreamLayerView2D")],o);const de=o;export{de as default};