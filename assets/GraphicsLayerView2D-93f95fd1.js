import{O as o,Q as a,V as g,t as m,B as s,F as p,G as c,H as l}from"./index-aa00a0dc.js";import{m as n,u as d}from"./LayerView-72dddb93.js";import{i as u}from"./GraphicContainer-ec270d82.js";import{r as w}from"./GraphicsView2D-edf8ad7f.js";import"./Container-84efe056.js";import"./definitions-956cc2d8.js";import"./enums-bdecffa2.js";import"./Texture-8ece805c.js";import"./color-2ac2b588.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./BaseGraphicContainer-a5db618a.js";import"./FeatureContainer-c4fbde19.js";import"./AttributeStoreView-f4005d34.js";import"./TiledDisplayObject-7ea1f8d0.js";import"./WGLContainer-013685e8.js";import"./FramebufferObject-5342c442.js";import"./ProgramTemplate-2542ddba.js";import"./GeometryUtils-7b3b42d9.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-251b7528.js";import"./featureConversionUtils-17cb1a84.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-9725191e.js";import"./cimAnalyzer-fe9f5c57.js";import"./fontUtils-32a623c2.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-6142b591.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-3ac55fe9.js";import"./floatRGBA-001b28dd.js";import"./ExpandedCIM-daf0bcf9.js";import"./util-9a7cd31a.js";import"./TileContainer-505d3db5.js";import"./vec3f32-2da9db36.js";import"./normalizeUtilsSync-c9670290.js";import"./projectionSupport-aa58b99c.js";import"./json-48e3ea08.js";import"./Matcher-f2132bdb.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-91ecc49d.js";import"./ComputedAttributeStorage-7f31a8b7.js";import"./TimeOnly-1a106293.js";let e=class extends n(d){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new w({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new u(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))}detach(){this.container.removeAllChildren(),this.graphicsView=o(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter(t=>!!t.popupTemplate):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof a?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(h=>h&&h.uid):g.isCollection(i)&&i.length>0&&(t=i.map(h=>h&&h.uid).toArray());const r=t==null?void 0:t.filter(m);return r!=null&&r.length?(this._addHighlight(r),s(()=>this._removeHighlight(r))):s()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t);this._highlightIds.set(t,r+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t)-1;r===0?this._highlightIds.delete(t):this._highlightIds.set(t,r)}this._updateHighlight()}_updateHighlight(){var i;(i=this.graphicsView)==null||i.setHighlight(Array.from(this._highlightIds.keys()))}};p([c()],e.prototype,"graphicsView",void 0),e=p([l("esri.views.2d.layers.GraphicsLayerView2D")],e);const li=e;export{li as default};
