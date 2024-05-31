import{a$ as g,a9 as d,F as t,G as r,H as f,d6 as b,ea as T,Q as h,O as c,J as p,P as y}from"./index-9762d29e.js";import{m as _,u as v}from"./LayerView-7c2ae353.js";import{i as O}from"./GraphicContainer-7daa6d17.js";import{r as G}from"./GraphicsView2D-d741fc49.js";import"./Container-397ab820.js";import"./definitions-8ac54cf0.js";import"./enums-bdecffa2.js";import"./Texture-367f0a32.js";import"./color-28b049aa.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./BaseGraphicContainer-fb234e73.js";import"./FeatureContainer-c117373e.js";import"./AttributeStoreView-99c500cf.js";import"./TiledDisplayObject-3303a832.js";import"./WGLContainer-bcbb569b.js";import"./FramebufferObject-73c0729f.js";import"./ProgramTemplate-7d064a06.js";import"./GeometryUtils-a273db93.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-367b5789.js";import"./featureConversionUtils-ca303552.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-66ee7ab0.js";import"./cimAnalyzer-5fbbaa5c.js";import"./fontUtils-241f2cc4.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-2b9fbefe.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-84a1ae54.js";import"./floatRGBA-9b7b4649.js";import"./ExpandedCIM-637c7c3b.js";import"./util-42fe6801.js";import"./TileContainer-8142c284.js";import"./vec3f32-2da9db36.js";import"./normalizeUtilsSync-ff112d00.js";import"./projectionSupport-3ff2afc5.js";import"./json-48e3ea08.js";import"./Matcher-860623de.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-125a4260.js";import"./ComputedAttributeStorage-2f068a41.js";import"./TimeOnly-3430cacd.js";let a=class extends g(d){constructor(e){super(e),this.frameCenter=null,this.frameOutline=null,this.lineOfSight=null,this.sensorLocation=null,this.sensorTrail=null}};t([r({type:Boolean})],a.prototype,"frameCenter",void 0),t([r({type:Boolean})],a.prototype,"frameOutline",void 0),t([r({type:Boolean})],a.prototype,"lineOfSight",void 0),t([r({type:Boolean})],a.prototype,"sensorLocation",void 0),t([r({type:Boolean})],a.prototype,"sensorTrail",void 0),a=t([f("esri.layers.support.TelemetryDisplay")],a);const u=a,n=new b([255,127,0]);let m=class extends _(v){constructor(){super(...arguments),this._graphicsLayer=new T,this._frameOutlineGraphic=new h({symbol:{type:"simple-fill",outline:{type:"simple-line",color:n}}}),this._sensorTrailGraphic=new h({symbol:{type:"simple-line",color:n}}),this._lineOfSightGraphic=new h({symbol:{type:"simple-line",color:n}}),this._sensorLocationGraphic=new h({symbol:{type:"simple-marker",color:n}}),this._frameCenterGraphic=new h({symbol:{type:"simple-marker",color:n}}),this.layer=null,this.symbolColor=n,this.visibleTelemetryElements=null}destroy(){this._graphicsLayer=c(this._graphicsLayer)}initialize(){var e,i,s,l,o;this.addHandles(p(()=>this.symbolColor,()=>{this._frameOutlineGraphic.symbol.outline.color=this.symbolColor,this._sensorTrailGraphic.symbol.color=this.symbolColor,this._lineOfSightGraphic.symbol.color=this.symbolColor,this._sensorLocationGraphic.symbol.color=this.symbolColor,this._frameCenterGraphic.symbol.color=this.symbolColor},y)),this._graphicsLayer.graphics.addMany([this._frameOutlineGraphic,this._sensorTrailGraphic,this._lineOfSightGraphic,this._sensorLocationGraphic,this._frameCenterGraphic]),this.visibleTelemetryElements=new u({frameCenter:((e=this.layer.telemetryDisplay)==null?void 0:e.frameCenter)??!0,frameOutline:((i=this.layer.telemetryDisplay)==null?void 0:i.frameOutline)??!0,lineOfSight:((s=this.layer.telemetryDisplay)==null?void 0:s.lineOfSight)??!0,sensorLocation:((l=this.layer.telemetryDisplay)==null?void 0:l.sensorLocation)??!0,sensorTrail:((o=this.layer.telemetryDisplay)==null?void 0:o.sensorTrail)??!0})}attach(){this.graphicsView=new G({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this._graphicsLayer.graphics,container:new O(this.view.featuresTilingScheme)}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this._graphicsLayer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this.addAttachHandles([p(()=>{var e,i,s,l,o;return[(e=this.layer.telemetryDisplay)==null?void 0:e.frameCenter,(i=this.layer.telemetryDisplay)==null?void 0:i.frameOutline,(s=this.layer.telemetryDisplay)==null?void 0:s.sensorLocation,(l=this.layer.telemetryDisplay)==null?void 0:l.sensorTrail,(o=this.layer.telemetryDisplay)==null?void 0:o.lineOfSight]},()=>this._updateVisibleTelemetryElements(),y),p(()=>{var e,i,s,l,o;return[this.layer.telemetry,(e=this.visibleTelemetryElements)==null?void 0:e.frameCenter,(i=this.visibleTelemetryElements)==null?void 0:i.frameOutline,(s=this.visibleTelemetryElements)==null?void 0:s.sensorLocation,(l=this.visibleTelemetryElements)==null?void 0:l.sensorTrail,(o=this.visibleTelemetryElements)==null?void 0:o.lineOfSight]},()=>this._updateGraphicGeometries(),y)])}detach(){this.container.removeAllChildren(),this.graphicsView=c(this.graphicsView)}supportsSpatialReference(e){return!0}moveStart(){}moveEnd(){}viewChange(){this.graphicsView.viewChange()}update(e){this.graphicsView.processUpdate(e)}isUpdating(){return!this.graphicsView||this.graphicsView.updating}_updateVisibleTelemetryElements(){this.visibleTelemetryElements&&this.layer.telemetryDisplay&&(this.visibleTelemetryElements.frameCenter=this.layer.telemetryDisplay.frameCenter,this.visibleTelemetryElements.frameOutline=this.layer.telemetryDisplay.frameOutline,this.visibleTelemetryElements.lineOfSight=this.layer.telemetryDisplay.lineOfSight,this.visibleTelemetryElements.sensorLocation=this.layer.telemetryDisplay.sensorLocation,this.visibleTelemetryElements.sensorTrail=this.layer.telemetryDisplay.sensorTrail)}_updateGraphicGeometries(){const{telemetry:e}=this.layer,{visibleTelemetryElements:i}=this;e&&i&&(i.frameOutline&&e.frameOutline?this._frameOutlineGraphic.geometry=this.layer.telemetry.frameOutline:this._frameOutlineGraphic.geometry=null,i.sensorTrail&&e.sensorTrail?this._sensorTrailGraphic.geometry=this.layer.telemetry.sensorTrail:this._sensorTrailGraphic.geometry=null,i.lineOfSight&&e.lineOfSight?this._lineOfSightGraphic.geometry=this.layer.telemetry.lineOfSight:this._lineOfSightGraphic.geometry=null,i.sensorLocation&&e.sensorLocation?this._sensorLocationGraphic.geometry=this.layer.telemetry.sensorLocation:this._sensorLocationGraphic.geometry=null,i.frameCenter&&e.frameCenter?this._frameCenterGraphic.geometry=this.layer.telemetry.frameCenter:this._frameCenterGraphic.geometry=null)}};t([r()],m.prototype,"graphicsView",void 0),t([r()],m.prototype,"layer",void 0),t([r()],m.prototype,"symbolColor",void 0),t([r({type:u})],m.prototype,"visibleTelemetryElements",void 0),m=t([f("esri.views.2d.layers.VideoLayerView2D")],m);const Te=m;export{Te as default};
