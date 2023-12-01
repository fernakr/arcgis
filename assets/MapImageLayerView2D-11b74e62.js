import{A as r,B as o,bs as g,C as m,o as l,v as d,z as u,D as c}from"./index-308e373b.js";import{a as y}from"./BitmapContainer-53caa131.js";import{m as f,u as x}from"./LayerView-d3e4530c.js";import{r as w}from"./GraphicsView2D-058b3103.js";import{a as v}from"./HighlightGraphicContainer-a6de8613.js";import{v as _}from"./ExportStrategy-154fd8a4.js";import{m as H}from"./ExportImageParameters-9ec8537f.js";import{a as I}from"./RefreshableLayerView-6069d759.js";import{G as V,r as P}from"./drapedUtils-b559a439.js";import"./WGLContainer-bb10b692.js";import"./definitions-9370d5c1.js";import"./FramebufferObject-a304b937.js";import"./Texture-2ec822c9.js";import"./enums-bdecffa2.js";import"./ProgramTemplate-dc90c1b2.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-036c5f36.js";import"./enums-f1a6a48a.js";import"./GeometryUtils-21669c03.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./Container-faa38a00.js";import"./earcut-f3e0a4eb.js";import"./featureConversionUtils-3739094e.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./scaleUtils-28bb0db7.js";import"./ExpandedCIM-e7b140cf.js";import"./BidiEngine-9a40f2f4.js";import"./visualVariablesUtils-ac651dc4.js";import"./GeometryUtils-984e8446.js";import"./utils-cdfbbc54.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-d3f85899.js";import"./floatRGBA-7785a2cc.js";import"./normalizeUtilsSync-9af34ffa.js";import"./projectionSupport-8da0ecae.js";import"./json-48e3ea08.js";import"./AttributeStoreView-6e3acc4c.js";import"./TiledDisplayObject-7faac97d.js";import"./util-5a4e746e.js";import"./Matcher-4e7b6ffd.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-231134c8.js";import"./ComputedAttributeStorage-5fdd8910.js";import"./TimeOnly-ae93d2d0.js";import"./BaseGraphicContainer-a2118937.js";import"./FeatureContainer-590893de.js";import"./TileContainer-2c480286.js";import"./vec3f32-2da9db36.js";import"./Bitmap-dae58e8d.js";import"./floorFilterUtils-080a7cd2.js";import"./sublayerUtils-f8b0f6a3.js";import"./popupUtils-81d2e735.js";const U=t=>{let e=class extends t{initialize(){this.exportImageParameters=new H({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var i;return((i=this.view)==null?void 0:i.floors)??null}get exportImageVersion(){var i;return(i=this.exportImageParameters)==null||i.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return r([o()],e.prototype,"exportImageParameters",void 0),r([o({readOnly:!0})],e.prototype,"floors",null),r([o({readOnly:!0})],e.prototype,"exportImageVersion",null),r([o()],e.prototype,"layer",void 0),r([o()],e.prototype,"suspended",void 0),r([o(g)],e.prototype,"timeExtent",void 0),e=r([m("esri.views.layers.MapImageLayerView")],e),e};let s=class extends U(I(f(x))){constructor(){super(...arguments),this._highlightGraphics=new l,this._updateHash=""}fetchPopupFeatures(t,e){return this._popupHighlightHelper.fetchPopupFeatures(t,e)}update(t){const e=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==e&&(this._updateHash=e,this.strategy.update(t).catch(i=>{d(i)||u.getLogger(this).error(i)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:i}=this.layer,a=i>=10.3,n=i>=10;this._bitmapContainer=new y,this.container.addChild(this._bitmapContainer),this._highlightView=new w({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new v(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new V({createFetchPopupFeaturesQueryGeometry:(p,h)=>P(p,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(p,h)=>{this._highlightView.graphicUpdateHandler({graphic:p,property:h})},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new _({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:a,imageNormalizationSupported:n,hidpi:!0}),this.addAttachHandles(c(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,a){return this.layer.fetchImage(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...a})}fetchImageBitmap(t,e,i,a){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...a})}highlight(t){return this._popupHighlightHelper.highlight(t)}};r([o()],s.prototype,"strategy",void 0),r([o()],s.prototype,"updating",void 0),s=r([m("esri.views.2d.layers.MapImageLayerView2D")],s);const bt=s;export{bt as default};