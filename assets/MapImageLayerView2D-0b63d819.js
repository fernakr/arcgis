import{F as r,G as o,eK as g,H as m,dW as l,x as d,C as u,E as c,J as y}from"./index-b1de92dd.js";import{a as f}from"./BitmapContainer-b12abcbb.js";import{m as x,u as w}from"./LayerView-d5db53eb.js";import{r as _}from"./GraphicsView2D-7b0b29a8.js";import{a as v}from"./HighlightGraphicContainer-b6d3631b.js";import{v as H}from"./ExportStrategy-7cd284f1.js";import{a as I}from"./RefreshableLayerView-6b512db6.js";import{G as V,r as P}from"./drapedUtils-ee44f2ba.js";import"./WGLContainer-97234da9.js";import"./definitions-2c27d0b7.js";import"./FramebufferObject-b81dd1d4.js";import"./Texture-46909090.js";import"./enums-bdecffa2.js";import"./ProgramTemplate-d64d3aed.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-fd4b99b8.js";import"./enums-f1a6a48a.js";import"./number-e491b09e.js";import"./GeometryUtils-4544060c.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./Container-945bd996.js";import"./earcut-d528aa83.js";import"./featureConversionUtils-c440e28e.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./cimAnalyzer-7839a604.js";import"./fontUtils-62393e60.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-a1ab1a9e.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-769e59ad.js";import"./floatRGBA-98e1e6fe.js";import"./normalizeUtilsSync-b47066f1.js";import"./projectionSupport-ce17f405.js";import"./json-48e3ea08.js";import"./AttributeStoreView-f7e87fd3.js";import"./TiledDisplayObject-aad630a8.js";import"./visualVariablesUtils-ff289c3e.js";import"./ExpandedCIM-5390ef98.js";import"./util-998051f8.js";import"./Matcher-0057a92e.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-21b1350f.js";import"./ComputedAttributeStorage-50e469cd.js";import"./TimeOnly-075db8ad.js";import"./BaseGraphicContainer-aa8a1bf5.js";import"./FeatureContainer-16f2b7f2.js";import"./TileContainer-127f9af8.js";import"./vec3f32-2da9db36.js";import"./Bitmap-c1c55e57.js";import"./popupUtils-8e5c0d2c.js";const U=t=>{let e=class extends t{initialize(){this.exportImageParameters=new l({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var i;return((i=this.view)==null?void 0:i.floors)??null}get exportImageVersion(){var i;return(i=this.exportImageParameters)==null||i.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return r([o()],e.prototype,"exportImageParameters",void 0),r([o({readOnly:!0})],e.prototype,"floors",null),r([o({readOnly:!0})],e.prototype,"exportImageVersion",null),r([o()],e.prototype,"layer",void 0),r([o()],e.prototype,"suspended",void 0),r([o(g)],e.prototype,"timeExtent",void 0),e=r([m("esri.views.layers.MapImageLayerView")],e),e};let s=class extends U(I(x(w))){constructor(){super(...arguments),this._highlightGraphics=new d,this._updateHash=""}fetchPopupFeatures(t,e){return this._popupHighlightHelper.fetchPopupFeatures(t,e)}update(t){const e=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==e&&(this._updateHash=e,this.strategy.update(t).catch(i=>{u(i)||c.getLogger(this).error(i)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:i}=this.layer,a=i>=10.3,n=i>=10;this._bitmapContainer=new f,this.container.addChild(this._bitmapContainer),this._highlightView=new _({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new v(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new V({createFetchPopupFeaturesQueryGeometry:(p,h)=>P(p,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(p,h)=>{this._highlightView.graphicUpdateHandler({graphic:p,property:h})},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new H({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:a,imageNormalizationSupported:n,hidpi:!0}),this.addAttachHandles(y(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,a){return this.layer.fetchImage(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...a})}fetchImageBitmap(t,e,i,a){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...a})}highlight(t){return this._popupHighlightHelper.highlight(t)}};r([o()],s.prototype,"strategy",void 0),r([o()],s.prototype,"updating",void 0),s=r([m("esri.views.2d.layers.MapImageLayerView2D")],s);const Et=s;export{Et as default};
