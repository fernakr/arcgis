import{O as o,Q as a,V as g,t as m,B as s,F as p,G as c,H as l}from"./index-12dd5c8b.js";import{m as n,u as d}from"./LayerView-8e742fa3.js";import{i as u}from"./GraphicContainer-12e57e9b.js";import{r as w}from"./GraphicsView2D-34fcbb1f.js";import"./Container-198529e2.js";import"./definitions-155f1005.js";import"./enums-bdecffa2.js";import"./Texture-0cf2362c.js";import"./color-6ec0570b.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./BaseGraphicContainer-32ae5692.js";import"./FeatureContainer-b7e40b42.js";import"./AttributeStoreView-7efabc1c.js";import"./TiledDisplayObject-ed5a7e78.js";import"./WGLContainer-243184a6.js";import"./FramebufferObject-6ee3ae72.js";import"./ProgramTemplate-999f70b4.js";import"./GeometryUtils-4e58e792.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-e291056a.js";import"./featureConversionUtils-95549077.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-db1790bf.js";import"./cimAnalyzer-2bfe9e9b.js";import"./fontUtils-212fe9b0.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-7ea6e057.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-a229a918.js";import"./floatRGBA-21bd05a4.js";import"./ExpandedCIM-08454bd2.js";import"./util-f64b12a5.js";import"./TileContainer-7d42903b.js";import"./vec3f32-2da9db36.js";import"./normalizeUtilsSync-5cd22245.js";import"./projectionSupport-828b93bf.js";import"./json-48e3ea08.js";import"./Matcher-f26993e5.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-efc94998.js";import"./ComputedAttributeStorage-b52a4bf7.js";import"./TimeOnly-6c59d70d.js";let e=class extends n(d){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new w({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new u(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))}detach(){this.container.removeAllChildren(),this.graphicsView=o(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter(t=>!!t.popupTemplate):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof a?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(h=>h&&h.uid):g.isCollection(i)&&i.length>0&&(t=i.map(h=>h&&h.uid).toArray());const r=t==null?void 0:t.filter(m);return r!=null&&r.length?(this._addHighlight(r),s(()=>this._removeHighlight(r))):s()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t);this._highlightIds.set(t,r+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t)-1;r===0?this._highlightIds.delete(t):this._highlightIds.set(t,r)}this._updateHighlight()}_updateHighlight(){var i;(i=this.graphicsView)==null||i.setHighlight(Array.from(this._highlightIds.keys()))}};p([c()],e.prototype,"graphicsView",void 0),e=p([l("esri.views.2d.layers.GraphicsLayerView2D")],e);const li=e;export{li as default};