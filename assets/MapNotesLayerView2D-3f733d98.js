import{Q as u,V as f,t as w,B as c,J as h,P as o,$ as y,F as _,H as V}from"./index-b42b51f4.js";import{m as v,u as C}from"./LayerView-5533f0af.js";import{i as g}from"./GraphicContainer-9b8bacaa.js";import{r as m}from"./GraphicsView2D-c5796dec.js";import"./Container-7092958d.js";import"./definitions-bd91c74e.js";import"./enums-bdecffa2.js";import"./Texture-c4373a43.js";import"./color-7c3d4c52.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./BaseGraphicContainer-ed8290f7.js";import"./FeatureContainer-5c44643c.js";import"./AttributeStoreView-d7431c24.js";import"./TiledDisplayObject-084ff05f.js";import"./WGLContainer-0bd2f570.js";import"./FramebufferObject-d023aa56.js";import"./ProgramTemplate-29ee3d2c.js";import"./GeometryUtils-99b185b3.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-0f846efb.js";import"./featureConversionUtils-a6fdc429.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-fba68e3c.js";import"./cimAnalyzer-796a97a9.js";import"./fontUtils-21e9c5c5.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-4750dcfd.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-b62f8e27.js";import"./floatRGBA-051e168c.js";import"./ExpandedCIM-86344f8a.js";import"./util-b3041282.js";import"./TileContainer-d60709b9.js";import"./vec3f32-2da9db36.js";import"./normalizeUtilsSync-2a20b77e.js";import"./projectionSupport-b9f482a4.js";import"./json-48e3ea08.js";import"./Matcher-2c3405fa.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-4f4f465d.js";import"./ComputedAttributeStorage-454189ee.js";import"./TimeOnly-d6c33ef0.js";const d="sublayers",n="layerView";let l=class extends v(C){constructor(){super(...arguments),this._highlightIds=new Map}async fetchPopupFeatures(i){return Array.from(this.graphicsViews(),t=>t.hitTest(i).filter(e=>!!e.popupTemplate)).flat()}*graphicsViews(){this._graphicsViewsFeatureCollectionMap==null?this._graphicsViews==null?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys()}async hitTest(i,t){return Array.from(this.graphicsViews(),e=>{const s=e.hitTest(i);if(this._graphicsViewsFeatureCollectionMap!=null){const a=this._graphicsViewsFeatureCollectionMap.get(e);for(const r of s)!r.popupTemplate&&a.popupTemplate&&(r.popupTemplate=a.popupTemplate),r.sourceLayer=r.layer=this.layer}return s}).flat().map(e=>({type:"graphic",graphic:e,layer:this.layer,mapPoint:i}))}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof u?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(s=>s&&s.uid):f.isCollection(i)&&(t=i.map(s=>s&&s.uid).toArray());const e=t==null?void 0:t.filter(w);return e!=null&&e.length?(this._addHighlight(e),c(()=>this._removeHighlight(e))):c()}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),e=this.layer.featureCollections;if(e!=null&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of e){const a=new g(this.view.featuresTilingScheme),r=new m({view:i,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:a});this._graphicsViewsFeatureCollectionMap.set(r,s),this.container.addChild(r.container),this.addHandles([h(()=>s.visible,p=>r.container.visible=p,o),h(()=>r.updating,()=>this.notifyChange("updating"),o)],n)}this._updateHighlight()}else this.layer.sublayers!=null&&this.addHandles(y(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),d)}detach(){this._destroyGraphicsViews(),this.removeHandles(d)}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(n);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),this.layer.sublayers==null)return;const i=[],t=this.view,e=()=>this.requestUpdate();for(const s of this.layer.sublayers){const a=new g(this.view.featuresTilingScheme);a.fadeTransitionEnabled=!0;const r=new m({view:t,graphics:s.graphics,requestUpdateCallback:e,container:a});this.addHandles([s.on("graphic-update",r.graphicUpdateHandler),h(()=>s.visible,p=>r.container.visible=p,o),h(()=>r.updating,()=>this.notifyChange("updating"),o)],n),this.container.addChild(r.container),i.push(r)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys());for(const t of this.graphicsViews())t.setHighlight(i)}};l=_([V("esri.views.2d.layers.MapNotesLayerView2D")],l);const yi=l;export{yi as default};