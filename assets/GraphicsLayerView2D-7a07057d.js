import{O as o,Q as a,V as g,t as m,B as s,F as p,G as c,H as l}from"./index-34cda61d.js";import{m as n,u as d}from"./LayerView-ee351242.js";import{i as u}from"./GraphicContainer-d66aa847.js";import{r as w}from"./GraphicsView2D-9c7b74f4.js";import"./Container-7d8130b2.js";import"./definitions-1347aba7.js";import"./enums-bdecffa2.js";import"./Texture-411087e4.js";import"./color-c12b74e0.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./BaseGraphicContainer-1ab8001f.js";import"./FeatureContainer-6da53b39.js";import"./AttributeStoreView-181eae40.js";import"./TiledDisplayObject-d93ab1fe.js";import"./WGLContainer-0d473fac.js";import"./FramebufferObject-c5fc78ea.js";import"./ProgramTemplate-8488bed7.js";import"./GeometryUtils-416cc9f2.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-4a0507bc.js";import"./featureConversionUtils-a198d4c5.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-4c2763f4.js";import"./cimAnalyzer-60e14e2e.js";import"./fontUtils-a37ef260.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-c58a1652.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-f12b8404.js";import"./floatRGBA-b5f5da20.js";import"./ExpandedCIM-9bd29fba.js";import"./util-5430748d.js";import"./TileContainer-f9a0f593.js";import"./vec3f32-2da9db36.js";import"./normalizeUtilsSync-61f6d466.js";import"./projectionSupport-6c48cac0.js";import"./json-48e3ea08.js";import"./Matcher-8081984b.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-ebcdd955.js";import"./ComputedAttributeStorage-838becfb.js";import"./TimeOnly-d28bc7ed.js";let e=class extends n(d){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new w({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new u(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))}detach(){this.container.removeAllChildren(),this.graphicsView=o(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter(t=>!!t.popupTemplate):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof a?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(h=>h&&h.uid):g.isCollection(i)&&i.length>0&&(t=i.map(h=>h&&h.uid).toArray());const r=t==null?void 0:t.filter(m);return r!=null&&r.length?(this._addHighlight(r),s(()=>this._removeHighlight(r))):s()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t);this._highlightIds.set(t,r+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t)-1;r===0?this._highlightIds.delete(t):this._highlightIds.set(t,r)}this._updateHighlight()}_updateHighlight(){var i;(i=this.graphicsView)==null||i.setHighlight(Array.from(this._highlightIds.keys()))}};p([c()],e.prototype,"graphicsView",void 0),e=p([l("esri.views.2d.layers.GraphicsLayerView2D")],e);const li=e;export{li as default};
