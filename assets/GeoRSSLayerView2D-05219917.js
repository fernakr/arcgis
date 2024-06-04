import{J as l,P as h,K as g,V as w,L as f,M as d,N as n,F as u,H as V}from"./index-8fbcd33f.js";import{m as b,u as S}from"./LayerView-18a35bfd.js";import{i as _}from"./GraphicContainer-20182e48.js";import{r as T}from"./GraphicsView2D-a306da91.js";import"./Container-24dc81c0.js";import"./definitions-8d1e5316.js";import"./enums-bdecffa2.js";import"./Texture-5f55e3dc.js";import"./color-887ae2cd.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./BaseGraphicContainer-e80df7e3.js";import"./FeatureContainer-2eb3bf21.js";import"./AttributeStoreView-2c3cfa29.js";import"./TiledDisplayObject-7e4aabeb.js";import"./WGLContainer-af7f09ed.js";import"./FramebufferObject-032fdd05.js";import"./ProgramTemplate-f230697a.js";import"./GeometryUtils-467e19d9.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-b55b59bd.js";import"./featureConversionUtils-d21d2be5.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-2727aa18.js";import"./cimAnalyzer-67376b93.js";import"./fontUtils-a431571e.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-e00f761e.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-7c7b30e7.js";import"./floatRGBA-75468c12.js";import"./ExpandedCIM-8790569d.js";import"./util-6b041577.js";import"./TileContainer-26659710.js";import"./vec3f32-2da9db36.js";import"./normalizeUtilsSync-7590a433.js";import"./projectionSupport-7bb25353.js";import"./json-48e3ea08.js";import"./Matcher-653ef42b.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-33ee9979.js";import"./ComputedAttributeStorage-5a4ac822.js";import"./TimeOnly-51bfdcd1.js";let y=class extends b(S){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(i,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().flatMap(e=>{const t=this._popupTemplates.get(e),s=e.hitTest(i);for(const p of s)p.layer=o,p.sourceLayer=o,p.popupTemplate=t;return s}).map(e=>({type:"graphic",graphic:e,layer:o,mapPoint:i}))}update(i){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(i)}attach(){this.addAttachHandles([l(()=>{var i;return(i=this.layer)==null?void 0:i.featureCollections},i=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:e}of i){const t=g.fromJSON(o),s=new w(t.features),p=e.drawingInfo,c=r?f.fromJSON(r):null,a=d(p.renderer),m=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:a,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=m,this._popupTemplates.set(m,c),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.polygonSymbol},i=>{this._graphicsViewMap.polygon.renderer=new n({symbol:i})},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.lineSymbol},i=>{this._graphicsViewMap.polyline.renderer=new n({symbol:i})},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.pointSymbol},i=>{this._graphicsViewMap.point.renderer=new n({symbol:i})},h)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews)i.viewChange()}_clear(){this.container.removeAllChildren();for(const i of this.graphicsViews)i.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=u([V("esri.views.2d.layers.GeoRSSLayerView2D")],y);const Vi=y;export{Vi as default};