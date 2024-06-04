import{F as r,G as o,eK as g,H as m,dW as l,x as d,C as u,E as c,J as y}from"./index-cdf69f36.js";import{a as f}from"./BitmapContainer-64b98fb0.js";import{m as x,u as w}from"./LayerView-384e2573.js";import{r as _}from"./GraphicsView2D-e6e73c89.js";import{a as v}from"./HighlightGraphicContainer-07d0cd87.js";import{v as H}from"./ExportStrategy-debdd9ef.js";import{a as I}from"./RefreshableLayerView-73b9895f.js";import{G as V,r as P}from"./drapedUtils-300f8709.js";import"./WGLContainer-e978ac2e.js";import"./definitions-eba50215.js";import"./FramebufferObject-32003335.js";import"./Texture-4ee49a9f.js";import"./enums-bdecffa2.js";import"./ProgramTemplate-b0743a30.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-9054a86e.js";import"./enums-f1a6a48a.js";import"./number-e491b09e.js";import"./GeometryUtils-fd0f8ba8.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./Container-7bafc118.js";import"./earcut-adc00ba5.js";import"./featureConversionUtils-e1010ffb.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./cimAnalyzer-b1f151f7.js";import"./fontUtils-51011e9c.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-0c908705.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-73ecda2d.js";import"./floatRGBA-b8cf594d.js";import"./normalizeUtilsSync-17e15a73.js";import"./projectionSupport-5251d30a.js";import"./json-48e3ea08.js";import"./AttributeStoreView-49c0d98e.js";import"./TiledDisplayObject-a41da2a0.js";import"./visualVariablesUtils-77f475fd.js";import"./ExpandedCIM-eb3c19b3.js";import"./util-4c6b6efd.js";import"./Matcher-54cdf8cb.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-3e8d96d3.js";import"./ComputedAttributeStorage-2de69fcc.js";import"./TimeOnly-13c8eb6e.js";import"./BaseGraphicContainer-5bfc1842.js";import"./FeatureContainer-e27574d8.js";import"./TileContainer-22451a4c.js";import"./vec3f32-2da9db36.js";import"./Bitmap-71881aec.js";import"./popupUtils-06867166.js";const U=t=>{let e=class extends t{initialize(){this.exportImageParameters=new l({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var i;return((i=this.view)==null?void 0:i.floors)??null}get exportImageVersion(){var i;return(i=this.exportImageParameters)==null||i.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return r([o()],e.prototype,"exportImageParameters",void 0),r([o({readOnly:!0})],e.prototype,"floors",null),r([o({readOnly:!0})],e.prototype,"exportImageVersion",null),r([o()],e.prototype,"layer",void 0),r([o()],e.prototype,"suspended",void 0),r([o(g)],e.prototype,"timeExtent",void 0),e=r([m("esri.views.layers.MapImageLayerView")],e),e};let s=class extends U(I(x(w))){constructor(){super(...arguments),this._highlightGraphics=new d,this._updateHash=""}fetchPopupFeatures(t,e){return this._popupHighlightHelper.fetchPopupFeatures(t,e)}update(t){const e=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==e&&(this._updateHash=e,this.strategy.update(t).catch(i=>{u(i)||c.getLogger(this).error(i)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:i}=this.layer,a=i>=10.3,n=i>=10;this._bitmapContainer=new f,this.container.addChild(this._bitmapContainer),this._highlightView=new _({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new v(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new V({createFetchPopupFeaturesQueryGeometry:(p,h)=>P(p,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(p,h)=>{this._highlightView.graphicUpdateHandler({graphic:p,property:h})},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new H({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:a,imageNormalizationSupported:n,hidpi:!0}),this.addAttachHandles(y(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,a){return this.layer.fetchImage(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...a})}fetchImageBitmap(t,e,i,a){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...a})}highlight(t){return this._popupHighlightHelper.highlight(t)}};r([o()],s.prototype,"strategy",void 0),r([o()],s.prototype,"updating",void 0),s=r([m("esri.views.2d.layers.MapImageLayerView2D")],s);const Et=s;export{Et as default};
