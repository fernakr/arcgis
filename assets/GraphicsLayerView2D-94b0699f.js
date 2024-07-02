import{O as o,Q as a,V as g,t as m,B as s,F as p,G as c,H as l}from"./index-b1de92dd.js";import{m as n,u as d}from"./LayerView-d5db53eb.js";import{i as u}from"./GraphicContainer-f912019a.js";import{r as w}from"./GraphicsView2D-7b0b29a8.js";import"./Container-945bd996.js";import"./definitions-2c27d0b7.js";import"./enums-bdecffa2.js";import"./Texture-46909090.js";import"./color-fd4b99b8.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./BaseGraphicContainer-aa8a1bf5.js";import"./FeatureContainer-16f2b7f2.js";import"./AttributeStoreView-f7e87fd3.js";import"./TiledDisplayObject-aad630a8.js";import"./WGLContainer-97234da9.js";import"./FramebufferObject-b81dd1d4.js";import"./ProgramTemplate-d64d3aed.js";import"./GeometryUtils-4544060c.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-d528aa83.js";import"./featureConversionUtils-c440e28e.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-ff289c3e.js";import"./cimAnalyzer-7839a604.js";import"./fontUtils-62393e60.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-a1ab1a9e.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-769e59ad.js";import"./floatRGBA-98e1e6fe.js";import"./ExpandedCIM-5390ef98.js";import"./util-998051f8.js";import"./TileContainer-127f9af8.js";import"./vec3f32-2da9db36.js";import"./normalizeUtilsSync-b47066f1.js";import"./projectionSupport-ce17f405.js";import"./json-48e3ea08.js";import"./Matcher-0057a92e.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-21b1350f.js";import"./ComputedAttributeStorage-50e469cd.js";import"./TimeOnly-075db8ad.js";let e=class extends n(d){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new w({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new u(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))}detach(){this.container.removeAllChildren(),this.graphicsView=o(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter(t=>!!t.popupTemplate):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof a?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(h=>h&&h.uid):g.isCollection(i)&&i.length>0&&(t=i.map(h=>h&&h.uid).toArray());const r=t==null?void 0:t.filter(m);return r!=null&&r.length?(this._addHighlight(r),s(()=>this._removeHighlight(r))):s()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t);this._highlightIds.set(t,r+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t)-1;r===0?this._highlightIds.delete(t):this._highlightIds.set(t,r)}this._updateHighlight()}_updateHighlight(){var i;(i=this.graphicsView)==null||i.setHighlight(Array.from(this._highlightIds.keys()))}};p([c()],e.prototype,"graphicsView",void 0),e=p([l("esri.views.2d.layers.GraphicsLayerView2D")],e);const li=e;export{li as default};