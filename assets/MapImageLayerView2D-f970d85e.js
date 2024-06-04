import{F as r,G as o,eK as g,H as m,dW as l,x as d,C as u,E as c,J as y}from"./index-32200583.js";import{a as f}from"./BitmapContainer-5690567e.js";import{m as x,u as w}from"./LayerView-18bb983d.js";import{r as _}from"./GraphicsView2D-9b040387.js";import{a as v}from"./HighlightGraphicContainer-75c2339f.js";import{v as H}from"./ExportStrategy-924b9af8.js";import{a as I}from"./RefreshableLayerView-b2e4875b.js";import{G as V,r as P}from"./drapedUtils-17f99154.js";import"./WGLContainer-4837399a.js";import"./definitions-fd2386f9.js";import"./FramebufferObject-d94676df.js";import"./Texture-b83f1754.js";import"./enums-bdecffa2.js";import"./ProgramTemplate-ad033ef1.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-97ee9019.js";import"./enums-f1a6a48a.js";import"./number-e491b09e.js";import"./GeometryUtils-317757bd.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./Container-6473b6e5.js";import"./earcut-6d1a174a.js";import"./featureConversionUtils-88e2174c.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./cimAnalyzer-4558feca.js";import"./fontUtils-169a7c81.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-e0cafb8c.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-07e56e54.js";import"./floatRGBA-e57f65da.js";import"./normalizeUtilsSync-d4c19944.js";import"./projectionSupport-15db6598.js";import"./json-48e3ea08.js";import"./AttributeStoreView-16ca0ff3.js";import"./TiledDisplayObject-def6cac3.js";import"./visualVariablesUtils-294ba6f1.js";import"./ExpandedCIM-627604bd.js";import"./util-b70432fe.js";import"./Matcher-02f300a9.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-831bb2f2.js";import"./ComputedAttributeStorage-e72e50e2.js";import"./TimeOnly-916818a9.js";import"./BaseGraphicContainer-30b1e1dd.js";import"./FeatureContainer-58a1cb41.js";import"./TileContainer-104c5f35.js";import"./vec3f32-2da9db36.js";import"./Bitmap-3ccac342.js";import"./popupUtils-44a1333a.js";const U=t=>{let e=class extends t{initialize(){this.exportImageParameters=new l({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var i;return((i=this.view)==null?void 0:i.floors)??null}get exportImageVersion(){var i;return(i=this.exportImageParameters)==null||i.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return r([o()],e.prototype,"exportImageParameters",void 0),r([o({readOnly:!0})],e.prototype,"floors",null),r([o({readOnly:!0})],e.prototype,"exportImageVersion",null),r([o()],e.prototype,"layer",void 0),r([o()],e.prototype,"suspended",void 0),r([o(g)],e.prototype,"timeExtent",void 0),e=r([m("esri.views.layers.MapImageLayerView")],e),e};let s=class extends U(I(x(w))){constructor(){super(...arguments),this._highlightGraphics=new d,this._updateHash=""}fetchPopupFeatures(t,e){return this._popupHighlightHelper.fetchPopupFeatures(t,e)}update(t){const e=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==e&&(this._updateHash=e,this.strategy.update(t).catch(i=>{u(i)||c.getLogger(this).error(i)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:i}=this.layer,a=i>=10.3,n=i>=10;this._bitmapContainer=new f,this.container.addChild(this._bitmapContainer),this._highlightView=new _({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new v(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new V({createFetchPopupFeaturesQueryGeometry:(p,h)=>P(p,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(p,h)=>{this._highlightView.graphicUpdateHandler({graphic:p,property:h})},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new H({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:a,imageNormalizationSupported:n,hidpi:!0}),this.addAttachHandles(y(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,a){return this.layer.fetchImage(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...a})}fetchImageBitmap(t,e,i,a){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...a})}highlight(t){return this._popupHighlightHelper.highlight(t)}};r([o()],s.prototype,"strategy",void 0),r([o()],s.prototype,"updating",void 0),s=r([m("esri.views.2d.layers.MapImageLayerView2D")],s);const Et=s;export{Et as default};
