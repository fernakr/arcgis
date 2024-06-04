import{J as l,P as h,K as g,V as w,L as f,M as d,N as n,F as u,H as V}from"./index-cdf69f36.js";import{m as b,u as S}from"./LayerView-384e2573.js";import{i as _}from"./GraphicContainer-3cba5165.js";import{r as T}from"./GraphicsView2D-e6e73c89.js";import"./Container-7bafc118.js";import"./definitions-eba50215.js";import"./enums-bdecffa2.js";import"./Texture-4ee49a9f.js";import"./color-9054a86e.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./BaseGraphicContainer-5bfc1842.js";import"./FeatureContainer-e27574d8.js";import"./AttributeStoreView-49c0d98e.js";import"./TiledDisplayObject-a41da2a0.js";import"./WGLContainer-e978ac2e.js";import"./FramebufferObject-32003335.js";import"./ProgramTemplate-b0743a30.js";import"./GeometryUtils-fd0f8ba8.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-adc00ba5.js";import"./featureConversionUtils-e1010ffb.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-77f475fd.js";import"./cimAnalyzer-b1f151f7.js";import"./fontUtils-51011e9c.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-0c908705.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-73ecda2d.js";import"./floatRGBA-b8cf594d.js";import"./ExpandedCIM-eb3c19b3.js";import"./util-4c6b6efd.js";import"./TileContainer-22451a4c.js";import"./vec3f32-2da9db36.js";import"./normalizeUtilsSync-17e15a73.js";import"./projectionSupport-5251d30a.js";import"./json-48e3ea08.js";import"./Matcher-54cdf8cb.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-3e8d96d3.js";import"./ComputedAttributeStorage-2de69fcc.js";import"./TimeOnly-13c8eb6e.js";let y=class extends b(S){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(i,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().flatMap(e=>{const t=this._popupTemplates.get(e),s=e.hitTest(i);for(const p of s)p.layer=o,p.sourceLayer=o,p.popupTemplate=t;return s}).map(e=>({type:"graphic",graphic:e,layer:o,mapPoint:i}))}update(i){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(i)}attach(){this.addAttachHandles([l(()=>{var i;return(i=this.layer)==null?void 0:i.featureCollections},i=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:e}of i){const t=g.fromJSON(o),s=new w(t.features),p=e.drawingInfo,c=r?f.fromJSON(r):null,a=d(p.renderer),m=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:a,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=m,this._popupTemplates.set(m,c),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.polygonSymbol},i=>{this._graphicsViewMap.polygon.renderer=new n({symbol:i})},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.lineSymbol},i=>{this._graphicsViewMap.polyline.renderer=new n({symbol:i})},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.pointSymbol},i=>{this._graphicsViewMap.point.renderer=new n({symbol:i})},h)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews)i.viewChange()}_clear(){this.container.removeAllChildren();for(const i of this.graphicsViews)i.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=u([V("esri.views.2d.layers.GeoRSSLayerView2D")],y);const Vi=y;export{Vi as default};