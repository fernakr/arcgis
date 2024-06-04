import{F as r,G as o,eK as g,H as m,dW as l,x as d,C as u,E as c,J as y}from"./index-98a329ed.js";import{a as f}from"./BitmapContainer-504e87e7.js";import{m as x,u as w}from"./LayerView-e768a2a3.js";import{r as _}from"./GraphicsView2D-adb3a7dc.js";import{a as v}from"./HighlightGraphicContainer-1a4ce575.js";import{v as H}from"./ExportStrategy-669d9aa9.js";import{a as I}from"./RefreshableLayerView-0b270761.js";import{G as V,r as P}from"./drapedUtils-8f0371e3.js";import"./WGLContainer-562ca0df.js";import"./definitions-b9cb8d4a.js";import"./FramebufferObject-5e92fe7b.js";import"./Texture-d480a808.js";import"./enums-bdecffa2.js";import"./ProgramTemplate-d670b9d1.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-c4cd8721.js";import"./enums-f1a6a48a.js";import"./number-e491b09e.js";import"./GeometryUtils-5a5c0ea0.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./Container-9b742ef7.js";import"./earcut-a21ffbac.js";import"./featureConversionUtils-a67ee749.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./cimAnalyzer-f88099b6.js";import"./fontUtils-8079bfee.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-2d02e645.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-b3b0f6c3.js";import"./floatRGBA-73acbe5a.js";import"./normalizeUtilsSync-7388b951.js";import"./projectionSupport-a9cfc4bb.js";import"./json-48e3ea08.js";import"./AttributeStoreView-649180d9.js";import"./TiledDisplayObject-e143024a.js";import"./visualVariablesUtils-55206ca7.js";import"./ExpandedCIM-74f48585.js";import"./util-a7b328b7.js";import"./Matcher-a5185386.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-9053262c.js";import"./ComputedAttributeStorage-48c715c0.js";import"./TimeOnly-a11132bc.js";import"./BaseGraphicContainer-2c9b5d55.js";import"./FeatureContainer-17f3ba63.js";import"./TileContainer-5b5a6c78.js";import"./vec3f32-2da9db36.js";import"./Bitmap-e880a1cb.js";import"./popupUtils-a2196e79.js";const U=t=>{let e=class extends t{initialize(){this.exportImageParameters=new l({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var i;return((i=this.view)==null?void 0:i.floors)??null}get exportImageVersion(){var i;return(i=this.exportImageParameters)==null||i.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return r([o()],e.prototype,"exportImageParameters",void 0),r([o({readOnly:!0})],e.prototype,"floors",null),r([o({readOnly:!0})],e.prototype,"exportImageVersion",null),r([o()],e.prototype,"layer",void 0),r([o()],e.prototype,"suspended",void 0),r([o(g)],e.prototype,"timeExtent",void 0),e=r([m("esri.views.layers.MapImageLayerView")],e),e};let s=class extends U(I(x(w))){constructor(){super(...arguments),this._highlightGraphics=new d,this._updateHash=""}fetchPopupFeatures(t,e){return this._popupHighlightHelper.fetchPopupFeatures(t,e)}update(t){const e=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==e&&(this._updateHash=e,this.strategy.update(t).catch(i=>{u(i)||c.getLogger(this).error(i)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:i}=this.layer,a=i>=10.3,n=i>=10;this._bitmapContainer=new f,this.container.addChild(this._bitmapContainer),this._highlightView=new _({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new v(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new V({createFetchPopupFeaturesQueryGeometry:(p,h)=>P(p,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(p,h)=>{this._highlightView.graphicUpdateHandler({graphic:p,property:h})},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new H({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:a,imageNormalizationSupported:n,hidpi:!0}),this.addAttachHandles(y(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,a){return this.layer.fetchImage(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...a})}fetchImageBitmap(t,e,i,a){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...a})}highlight(t){return this._popupHighlightHelper.highlight(t)}};r([o()],s.prototype,"strategy",void 0),r([o()],s.prototype,"updating",void 0),s=r([m("esri.views.2d.layers.MapImageLayerView2D")],s);const Et=s;export{Et as default};