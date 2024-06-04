import{J as l,P as h,K as g,V as w,L as f,M as d,N as n,F as u,H as V}from"./index-0dd4b1c4.js";import{m as b,u as S}from"./LayerView-da9ddbdb.js";import{i as _}from"./GraphicContainer-4982157c.js";import{r as T}from"./GraphicsView2D-93d26493.js";import"./Container-a69b5afb.js";import"./definitions-03efbf21.js";import"./enums-bdecffa2.js";import"./Texture-585b9804.js";import"./color-2af27954.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./BaseGraphicContainer-3f4fb647.js";import"./FeatureContainer-dd9c9d52.js";import"./AttributeStoreView-a4783192.js";import"./TiledDisplayObject-052ee98a.js";import"./WGLContainer-e0bd9c44.js";import"./FramebufferObject-f933361c.js";import"./ProgramTemplate-57476d93.js";import"./GeometryUtils-e4823541.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-038e5cda.js";import"./featureConversionUtils-c62affbb.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-25165d50.js";import"./cimAnalyzer-fce0ab81.js";import"./fontUtils-4d5fb79d.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-f81f09e9.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-78cd16f4.js";import"./floatRGBA-a8507788.js";import"./ExpandedCIM-8e5d472b.js";import"./util-93976bcd.js";import"./TileContainer-6b946220.js";import"./vec3f32-2da9db36.js";import"./normalizeUtilsSync-e47aca7d.js";import"./projectionSupport-348b839c.js";import"./json-48e3ea08.js";import"./Matcher-af3dce4b.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-f91c4c2d.js";import"./ComputedAttributeStorage-034a0679.js";import"./TimeOnly-b3750999.js";let y=class extends b(S){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(i,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().flatMap(e=>{const t=this._popupTemplates.get(e),s=e.hitTest(i);for(const p of s)p.layer=o,p.sourceLayer=o,p.popupTemplate=t;return s}).map(e=>({type:"graphic",graphic:e,layer:o,mapPoint:i}))}update(i){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(i)}attach(){this.addAttachHandles([l(()=>{var i;return(i=this.layer)==null?void 0:i.featureCollections},i=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:e}of i){const t=g.fromJSON(o),s=new w(t.features),p=e.drawingInfo,c=r?f.fromJSON(r):null,a=d(p.renderer),m=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:a,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=m,this._popupTemplates.set(m,c),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.polygonSymbol},i=>{this._graphicsViewMap.polygon.renderer=new n({symbol:i})},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.lineSymbol},i=>{this._graphicsViewMap.polyline.renderer=new n({symbol:i})},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.pointSymbol},i=>{this._graphicsViewMap.point.renderer=new n({symbol:i})},h)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews)i.viewChange()}_clear(){this.container.removeAllChildren();for(const i of this.graphicsViews)i.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=u([V("esri.views.2d.layers.GeoRSSLayerView2D")],y);const Vi=y;export{Vi as default};
