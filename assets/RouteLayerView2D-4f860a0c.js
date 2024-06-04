import{V as l,a0 as u,P as _,t as p,B as g,J as d,F as n,G as m,H as w}from"./index-12dd5c8b.js";import{m as y,c as f,C as k,T as M,j as V,S as v,O as G}from"./Stop-d7e75f40.js";import{m as I,u as F}from"./LayerView-8e742fa3.js";import{i as H}from"./GraphicContainer-12e57e9b.js";import{r as C}from"./GraphicsView2D-34fcbb1f.js";import"./Container-198529e2.js";import"./definitions-155f1005.js";import"./enums-bdecffa2.js";import"./Texture-0cf2362c.js";import"./color-6ec0570b.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./BaseGraphicContainer-32ae5692.js";import"./FeatureContainer-b7e40b42.js";import"./AttributeStoreView-7efabc1c.js";import"./TiledDisplayObject-ed5a7e78.js";import"./WGLContainer-243184a6.js";import"./FramebufferObject-6ee3ae72.js";import"./ProgramTemplate-999f70b4.js";import"./GeometryUtils-4e58e792.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-e291056a.js";import"./featureConversionUtils-95549077.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-db1790bf.js";import"./cimAnalyzer-2bfe9e9b.js";import"./fontUtils-212fe9b0.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-7ea6e057.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-a229a918.js";import"./floatRGBA-21bd05a4.js";import"./ExpandedCIM-08454bd2.js";import"./util-f64b12a5.js";import"./TileContainer-7d42903b.js";import"./vec3f32-2da9db36.js";import"./normalizeUtilsSync-5cd22245.js";import"./projectionSupport-828b93bf.js";import"./json-48e3ea08.js";import"./Matcher-f26993e5.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-efc94998.js";import"./ComputedAttributeStorage-b52a4bf7.js";import"./TimeOnly-6c59d70d.js";const U=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],a={graphic:null,property:null,oldValue:null,newValue:null};function c(t){return t instanceof y||t instanceof f||t instanceof k||t instanceof M||t instanceof V||t instanceof v||t instanceof G}function $(t){return l.isCollection(t)&&t.length&&c(t.at(0))}function b(t){return Array.isArray(t)&&t.length>0&&c(t[0])}let h=class extends I(F){constructor(){super(...arguments),this._graphics=new l,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new u({getCollections:()=>this.layer==null||this.destroyed?[]:[this.layer.routeInfo!=null?new l([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this._updatingHandles.addOnCollectionChange(()=>this._routeItems,t=>this._routeItemsChanged(t),_)}destroy(){var t;this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),(t=this._get("_routeItems"))==null||t.destroy()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}async fetchPopupFeatures(t){return this._graphicsView.hitTest(t).filter(e=>!!e.popupTemplate)}highlight(t){let e;e=c(t)?[this._getNetworkFeatureUid(t)]:b(t)?t.map(r=>this._getNetworkFeatureUid(r)):$(t)?t.map(r=>this._getNetworkFeatureUid(r)).toArray():[t.uid];const i=e.filter(p);return i.length?(this._addHighlight(i),g(()=>this._removeHighlight(i))):g()}async hitTest(t,e){if(this.suspended)return null;const i=this._graphicsView.hitTest(t).filter(p).map(s=>this._networkGraphicMap.get(s));if(!i.length)return null;const{layer:r}=this;return i.reverse().map(s=>({type:"route",layer:r,mapPoint:t,networkFeature:s}))}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(t){this._graphicsView.processUpdate(t)}viewChange(){this._graphicsView.viewChange()}_addHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e);this._highlightIds.set(e,i+1)}else this._highlightIds.set(e,1);this._updateHighlight()}_createGraphic(t){const e=t.toGraphic();return e.layer=this.layer,e.sourceLayer=this.layer,e}_createGraphicsView(){const t=this.view,e=()=>this.requestUpdate(),i=new H(t.featuresTilingScheme);this._graphicsView=new C({container:i,graphics:this._graphics,requestUpdateCallback:e,view:t}),this.container.addChild(i),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(t){const e=this._networkGraphicMap.get(t);return U.indexOf(e.type)}_getNetworkFeatureUid(t){return this._networkFeatureMap.has(t)?this._networkFeatureMap.get(t).uid:null}_removeHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e)-1;i===0?this._highlightIds.delete(e):this._highlightIds.set(e,i)}this._updateHighlight()}_routeItemsChanged(t){if(t.removed.length){this._graphics.removeMany(t.removed.map(e=>{const i=this._networkFeatureMap.get(e);return this._networkFeatureMap.delete(e),this._networkGraphicMap.delete(i),i}));for(const e of t.removed)this.removeHandles(e)}if(t.added.length){this._graphics.addMany(t.added.map(e=>{const i=this._createGraphic(e);return i.symbol==null?null:(this._networkFeatureMap.set(e,i),this._networkGraphicMap.set(i,e),i)}).filter(p));for(const e of t.added)this.addHandles([d(()=>e.geometry,(i,r)=>{this._updateGraphic(e,"geometry",i,r)}),d(()=>e.symbol,(i,r)=>{this._updateGraphic(e,"symbol",i,r)})],e);this._graphics.sort((e,i)=>this._getDrawOrder(e)-this._getDrawOrder(i))}}_updateGraphic(t,e,i,r){if(!this._networkFeatureMap.has(t)){const o=this._createGraphic(t);return this._networkFeatureMap.set(t,o),this._networkGraphicMap.set(o,t),void this._graphics.add(o)}const s=this._networkFeatureMap.get(t);s[e]=i,a.graphic=s,a.property=e,a.oldValue=r,a.newValue=i,this._graphicsView.graphicUpdateHandler(a)}_updateHighlight(){const t=Array.from(this._highlightIds.keys());this._graphicsView.setHighlight(t)}};n([m()],h.prototype,"_graphics",void 0),n([m()],h.prototype,"_routeItems",null),h=n([w("esri.views.2d.layers.RouteLayerView2D")],h);const Ct=h;export{Ct as default};
