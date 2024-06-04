import{Q as u,V as f,t as w,B as c,J as h,P as o,$ as y,F as _,H as V}from"./index-0dd4b1c4.js";import{m as v,u as C}from"./LayerView-da9ddbdb.js";import{i as g}from"./GraphicContainer-4982157c.js";import{r as m}from"./GraphicsView2D-93d26493.js";import"./Container-a69b5afb.js";import"./definitions-03efbf21.js";import"./enums-bdecffa2.js";import"./Texture-585b9804.js";import"./color-2af27954.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./BaseGraphicContainer-3f4fb647.js";import"./FeatureContainer-dd9c9d52.js";import"./AttributeStoreView-a4783192.js";import"./TiledDisplayObject-052ee98a.js";import"./WGLContainer-e0bd9c44.js";import"./FramebufferObject-f933361c.js";import"./ProgramTemplate-57476d93.js";import"./GeometryUtils-e4823541.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-038e5cda.js";import"./featureConversionUtils-c62affbb.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-25165d50.js";import"./cimAnalyzer-fce0ab81.js";import"./fontUtils-4d5fb79d.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-f81f09e9.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-78cd16f4.js";import"./floatRGBA-a8507788.js";import"./ExpandedCIM-8e5d472b.js";import"./util-93976bcd.js";import"./TileContainer-6b946220.js";import"./vec3f32-2da9db36.js";import"./normalizeUtilsSync-e47aca7d.js";import"./projectionSupport-348b839c.js";import"./json-48e3ea08.js";import"./Matcher-af3dce4b.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-f91c4c2d.js";import"./ComputedAttributeStorage-034a0679.js";import"./TimeOnly-b3750999.js";const d="sublayers",n="layerView";let l=class extends v(C){constructor(){super(...arguments),this._highlightIds=new Map}async fetchPopupFeatures(i){return Array.from(this.graphicsViews(),t=>t.hitTest(i).filter(e=>!!e.popupTemplate)).flat()}*graphicsViews(){this._graphicsViewsFeatureCollectionMap==null?this._graphicsViews==null?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys()}async hitTest(i,t){return Array.from(this.graphicsViews(),e=>{const s=e.hitTest(i);if(this._graphicsViewsFeatureCollectionMap!=null){const a=this._graphicsViewsFeatureCollectionMap.get(e);for(const r of s)!r.popupTemplate&&a.popupTemplate&&(r.popupTemplate=a.popupTemplate),r.sourceLayer=r.layer=this.layer}return s}).flat().map(e=>({type:"graphic",graphic:e,layer:this.layer,mapPoint:i}))}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof u?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(s=>s&&s.uid):f.isCollection(i)&&(t=i.map(s=>s&&s.uid).toArray());const e=t==null?void 0:t.filter(w);return e!=null&&e.length?(this._addHighlight(e),c(()=>this._removeHighlight(e))):c()}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),e=this.layer.featureCollections;if(e!=null&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of e){const a=new g(this.view.featuresTilingScheme),r=new m({view:i,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:a});this._graphicsViewsFeatureCollectionMap.set(r,s),this.container.addChild(r.container),this.addHandles([h(()=>s.visible,p=>r.container.visible=p,o),h(()=>r.updating,()=>this.notifyChange("updating"),o)],n)}this._updateHighlight()}else this.layer.sublayers!=null&&this.addHandles(y(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),d)}detach(){this._destroyGraphicsViews(),this.removeHandles(d)}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(n);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),this.layer.sublayers==null)return;const i=[],t=this.view,e=()=>this.requestUpdate();for(const s of this.layer.sublayers){const a=new g(this.view.featuresTilingScheme);a.fadeTransitionEnabled=!0;const r=new m({view:t,graphics:s.graphics,requestUpdateCallback:e,container:a});this.addHandles([s.on("graphic-update",r.graphicUpdateHandler),h(()=>s.visible,p=>r.container.visible=p,o),h(()=>r.updating,()=>this.notifyChange("updating"),o)],n),this.container.addChild(r.container),i.push(r)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys());for(const t of this.graphicsViews())t.setHighlight(i)}};l=_([V("esri.views.2d.layers.MapNotesLayerView2D")],l);const yi=l;export{yi as default};