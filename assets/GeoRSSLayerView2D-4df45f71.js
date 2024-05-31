import{J as l,P as h,K as g,V as w,L as f,M as d,N as n,F as u,H as V}from"./index-9762d29e.js";import{m as b,u as S}from"./LayerView-7c2ae353.js";import{i as _}from"./GraphicContainer-7daa6d17.js";import{r as T}from"./GraphicsView2D-d741fc49.js";import"./Container-397ab820.js";import"./definitions-8ac54cf0.js";import"./enums-bdecffa2.js";import"./Texture-367f0a32.js";import"./color-28b049aa.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./BaseGraphicContainer-fb234e73.js";import"./FeatureContainer-c117373e.js";import"./AttributeStoreView-99c500cf.js";import"./TiledDisplayObject-3303a832.js";import"./WGLContainer-bcbb569b.js";import"./FramebufferObject-73c0729f.js";import"./ProgramTemplate-7d064a06.js";import"./GeometryUtils-a273db93.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-367b5789.js";import"./featureConversionUtils-ca303552.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-66ee7ab0.js";import"./cimAnalyzer-5fbbaa5c.js";import"./fontUtils-241f2cc4.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-2b9fbefe.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-84a1ae54.js";import"./floatRGBA-9b7b4649.js";import"./ExpandedCIM-637c7c3b.js";import"./util-42fe6801.js";import"./TileContainer-8142c284.js";import"./vec3f32-2da9db36.js";import"./normalizeUtilsSync-ff112d00.js";import"./projectionSupport-3ff2afc5.js";import"./json-48e3ea08.js";import"./Matcher-860623de.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-125a4260.js";import"./ComputedAttributeStorage-2f068a41.js";import"./TimeOnly-3430cacd.js";let y=class extends b(S){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(i,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().flatMap(e=>{const t=this._popupTemplates.get(e),s=e.hitTest(i);for(const p of s)p.layer=o,p.sourceLayer=o,p.popupTemplate=t;return s}).map(e=>({type:"graphic",graphic:e,layer:o,mapPoint:i}))}update(i){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(i)}attach(){this.addAttachHandles([l(()=>{var i;return(i=this.layer)==null?void 0:i.featureCollections},i=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:e}of i){const t=g.fromJSON(o),s=new w(t.features),p=e.drawingInfo,c=r?f.fromJSON(r):null,a=d(p.renderer),m=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:a,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=m,this._popupTemplates.set(m,c),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.polygonSymbol},i=>{this._graphicsViewMap.polygon.renderer=new n({symbol:i})},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.lineSymbol},i=>{this._graphicsViewMap.polyline.renderer=new n({symbol:i})},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.pointSymbol},i=>{this._graphicsViewMap.point.renderer=new n({symbol:i})},h)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews)i.viewChange()}_clear(){this.container.removeAllChildren();for(const i of this.graphicsViews)i.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=u([V("esri.views.2d.layers.GeoRSSLayerView2D")],y);const Vi=y;export{Vi as default};
