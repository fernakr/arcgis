import{J as l,P as h,K as g,V as w,L as f,M as d,N as n,F as u,H as V}from"./index-c43fbcbe.js";import{m as b,u as S}from"./LayerView-7082f4de.js";import{i as _}from"./GraphicContainer-fb06fd45.js";import{r as T}from"./GraphicsView2D-eb3ffb3e.js";import"./Container-849b7b4f.js";import"./definitions-595e04a3.js";import"./enums-bdecffa2.js";import"./Texture-fc7ce7cc.js";import"./color-05f597e4.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./BaseGraphicContainer-29deba38.js";import"./FeatureContainer-027ed31c.js";import"./AttributeStoreView-48a5aebc.js";import"./TiledDisplayObject-ae11e77f.js";import"./WGLContainer-fd43e0ad.js";import"./FramebufferObject-8bb9caab.js";import"./ProgramTemplate-01679e40.js";import"./GeometryUtils-33c7a7fa.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-4c8cd1fc.js";import"./featureConversionUtils-53fdc88e.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-55d0f91c.js";import"./cimAnalyzer-4abedb0f.js";import"./fontUtils-ad94b2e7.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-0483b8d9.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-f984ca42.js";import"./floatRGBA-ccbd3547.js";import"./ExpandedCIM-33fdd0a5.js";import"./util-071cbc06.js";import"./TileContainer-a73ca5d0.js";import"./vec3f32-2da9db36.js";import"./normalizeUtilsSync-50bda4dc.js";import"./projectionSupport-630f944c.js";import"./json-48e3ea08.js";import"./Matcher-6aa787ce.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-9a176c25.js";import"./ComputedAttributeStorage-2e490ed4.js";import"./TimeOnly-c300e57a.js";let y=class extends b(S){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(i,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().flatMap(e=>{const t=this._popupTemplates.get(e),s=e.hitTest(i);for(const p of s)p.layer=o,p.sourceLayer=o,p.popupTemplate=t;return s}).map(e=>({type:"graphic",graphic:e,layer:o,mapPoint:i}))}update(i){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(i)}attach(){this.addAttachHandles([l(()=>{var i;return(i=this.layer)==null?void 0:i.featureCollections},i=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:e}of i){const t=g.fromJSON(o),s=new w(t.features),p=e.drawingInfo,c=r?f.fromJSON(r):null,a=d(p.renderer),m=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:a,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=m,this._popupTemplates.set(m,c),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.polygonSymbol},i=>{this._graphicsViewMap.polygon.renderer=new n({symbol:i})},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.lineSymbol},i=>{this._graphicsViewMap.polyline.renderer=new n({symbol:i})},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.pointSymbol},i=>{this._graphicsViewMap.point.renderer=new n({symbol:i})},h)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews)i.viewChange()}_clear(){this.container.removeAllChildren();for(const i of this.graphicsViews)i.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=u([V("esri.views.2d.layers.GeoRSSLayerView2D")],y);const Vi=y;export{Vi as default};
