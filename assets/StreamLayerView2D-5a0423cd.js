import{F as s,G as n,a2 as h,H as y,J as u,s as d,eL as _,B as f,K as S}from"./index-79fc10e5.js";import v from"./FeatureLayerView2D-53c0d5da.js";import{e as g}from"./util-960663b6.js";import"./definitions-bce9344c.js";import"./LayerView-4b975f74.js";import"./Container-850fe3c8.js";import"./enums-bdecffa2.js";import"./Texture-3fd587ab.js";import"./AttributeStoreView-50a22246.js";import"./TiledDisplayObject-fee488d8.js";import"./color-6e95a399.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./WGLContainer-dc8bb3f8.js";import"./FramebufferObject-1da31cdc.js";import"./ProgramTemplate-9480ba27.js";import"./GeometryUtils-b1cf9927.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-8b1985ec.js";import"./featureConversionUtils-7ca34e20.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-ffcb072d.js";import"./cimAnalyzer-29dc2d6e.js";import"./fontUtils-9ea659ca.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-510a0e44.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-dfbe8c20.js";import"./floatRGBA-20394599.js";import"./ExpandedCIM-975ca066.js";import"./BitmapTileContainer-6d3b3c29.js";import"./Bitmap-fa4388b2.js";import"./TileContainer-2889370d.js";import"./CircularArray-ef508845.js";import"./BufferPool-41f9bc24.js";import"./FeatureContainer-88a74e72.js";import"./popupUtils-58b08ae8.js";import"./RefreshableLayerView-3d2ea805.js";const O=e=>{let t=class extends e{resume(){this._isUserPaused=!1,this.suspended||this._doResume()}pause(){this._isUserPaused=!0,this.suspended||this._doPause()}constructor(...r){super(...r),this._isUserPaused=!1,this.filter=null}get connectionStatus(){return this._isUserPaused?"paused":this._streamConnectionStatus}_onSuspendedChange(r){r?this._doPause():this._isUserPaused||this._doResume()}};return s([n()],t.prototype,"_isUserPaused",void 0),s([n({readOnly:!0})],t.prototype,"connectionStatus",null),s([n({type:h})],t.prototype,"filter",void 0),t=s([y("esri.layers.mixins.StreamLayerView")],t),t};function c(e,t){if(e==null&&t==null)return null;const r={};return t!=null&&(r.geometry=t.toJSON()),e!=null&&(r.where=e),r}let o=class extends O(v){constructor(){super(...arguments),this.pipelineConnectionStatus="disconnected",this.pipelineErrorString=null,this._enabledEventTypes=new Set}initialize(){this.addHandles([u(()=>this.layer.customParameters,e=>this._proxy.updateCustomParameters(e)),this.layer.on("send-message-to-socket",e=>this._proxy.sendMessageToSocket(e)),this.layer.on("send-message-to-client",e=>this._proxy.sendMessageToClient(e)),u(()=>this.layer.purgeOptions,()=>this._update()),u(()=>this.suspended,this._onSuspendedChange.bind(this))],"constructor")}get connectionError(){return this.pipelineErrorString?new d("stream-controller",this.pipelineErrorString):null}on(e,t){if(Array.isArray(e))return _(e.map(p=>this.on(p,t)));const r=["data-received","message-received"].includes(e);r&&(this._enabledEventTypes.add(e),this._proxy.enableEvent(e,!0));const a=super.on(e,t),i=this;return f(()=>{a.remove(),r&&(i._proxy.closed||i.hasEventListener(e)||i._proxy.enableEvent(e,!1))})}queryLatestObservations(e,t){var r,a,i;if(!((r=this.layer.timeInfo)!=null&&r.endField||(a=this.layer.timeInfo)!=null&&a.startField||(i=this.layer.timeInfo)!=null&&i.trackIdField))throw new d("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then(p=>{const l=S.fromJSON(p);return l.features.forEach(m=>{m.layer=this.layer,m.sourceLayer=this.layer}),l})}detach(){super.detach(),this.pipelineConnectionStatus="disconnected"}get _streamConnectionStatus(){return this.pipelineConnectionStatus}_doPause(){var e;(e=this._proxy)==null||e.pauseStream()}_doResume(){var e;(e=this._proxy)==null||e.resumeStream()}_createClientOptions(){return{...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value)}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(c(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){var l;const e=this.layer,{objectIdField:t}=e,r=e.fields.map(m=>m.toJSON()),a=g(e.geometryType),i=((l=e.timeInfo)==null?void 0:l.toJSON())||null,p=e.spatialReference?e.spatialReference.toJSON():null;return{type:"stream",isPaused:this._isUserPaused,fields:r,fieldsIndex:this.layer.fieldsIndex.toJSON(),geometryType:a,objectIdField:t,timeInfo:i,source:this.layer.parsedUrl,serviceFilter:c(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enabledEventTypes:Array.from(this._enabledEventTypes.values()),spatialReference:p,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};s([n()],o.prototype,"pipelineConnectionStatus",void 0),s([n()],o.prototype,"pipelineErrorString",void 0),s([n({readOnly:!0})],o.prototype,"connectionError",null),s([n({readOnly:!0})],o.prototype,"_streamConnectionStatus",null),o=s([y("esri.views.2d.layers.StreamLayerView2D")],o);const de=o;export{de as default};