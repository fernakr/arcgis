import{V as l,a0 as u,P as _,t as p,B as g,J as d,F as n,G as m,H as w}from"./index-7e9b571f.js";import{m as y,c as f,C as k,T as M,j as V,S as v,O as G}from"./Stop-d5bdb48a.js";import{m as I,u as F}from"./LayerView-b19471e8.js";import{i as H}from"./GraphicContainer-f537e9b9.js";import{r as C}from"./GraphicsView2D-2b2057b4.js";import"./Container-94d5c0c6.js";import"./definitions-aeacb15e.js";import"./enums-bdecffa2.js";import"./Texture-3485b8f9.js";import"./color-55bd41c5.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./BaseGraphicContainer-8da4c096.js";import"./FeatureContainer-ce36260f.js";import"./AttributeStoreView-07142d18.js";import"./TiledDisplayObject-4f4d83ed.js";import"./WGLContainer-5a52b9cc.js";import"./FramebufferObject-a409f47b.js";import"./ProgramTemplate-1e5e22a0.js";import"./GeometryUtils-5f3ef72f.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-87b5362a.js";import"./featureConversionUtils-30dd36dd.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-c880018c.js";import"./cimAnalyzer-c5d6dfca.js";import"./fontUtils-4b752623.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-535d1ba0.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-899ca90a.js";import"./floatRGBA-7385a8dc.js";import"./ExpandedCIM-317823f7.js";import"./util-87647562.js";import"./TileContainer-cf05245e.js";import"./vec3f32-2da9db36.js";import"./normalizeUtilsSync-3fdf996f.js";import"./projectionSupport-ccf6e9e4.js";import"./json-48e3ea08.js";import"./Matcher-0d7ba7da.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-13529e26.js";import"./ComputedAttributeStorage-5ae2f134.js";import"./TimeOnly-417869a4.js";const U=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],a={graphic:null,property:null,oldValue:null,newValue:null};function c(t){return t instanceof y||t instanceof f||t instanceof k||t instanceof M||t instanceof V||t instanceof v||t instanceof G}function $(t){return l.isCollection(t)&&t.length&&c(t.at(0))}function b(t){return Array.isArray(t)&&t.length>0&&c(t[0])}let h=class extends I(F){constructor(){super(...arguments),this._graphics=new l,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new u({getCollections:()=>this.layer==null||this.destroyed?[]:[this.layer.routeInfo!=null?new l([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this._updatingHandles.addOnCollectionChange(()=>this._routeItems,t=>this._routeItemsChanged(t),_)}destroy(){var t;this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),(t=this._get("_routeItems"))==null||t.destroy()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}async fetchPopupFeatures(t){return this._graphicsView.hitTest(t).filter(e=>!!e.popupTemplate)}highlight(t){let e;e=c(t)?[this._getNetworkFeatureUid(t)]:b(t)?t.map(r=>this._getNetworkFeatureUid(r)):$(t)?t.map(r=>this._getNetworkFeatureUid(r)).toArray():[t.uid];const i=e.filter(p);return i.length?(this._addHighlight(i),g(()=>this._removeHighlight(i))):g()}async hitTest(t,e){if(this.suspended)return null;const i=this._graphicsView.hitTest(t).filter(p).map(s=>this._networkGraphicMap.get(s));if(!i.length)return null;const{layer:r}=this;return i.reverse().map(s=>({type:"route",layer:r,mapPoint:t,networkFeature:s}))}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(t){this._graphicsView.processUpdate(t)}viewChange(){this._graphicsView.viewChange()}_addHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e);this._highlightIds.set(e,i+1)}else this._highlightIds.set(e,1);this._updateHighlight()}_createGraphic(t){const e=t.toGraphic();return e.layer=this.layer,e.sourceLayer=this.layer,e}_createGraphicsView(){const t=this.view,e=()=>this.requestUpdate(),i=new H(t.featuresTilingScheme);this._graphicsView=new C({container:i,graphics:this._graphics,requestUpdateCallback:e,view:t}),this.container.addChild(i),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(t){const e=this._networkGraphicMap.get(t);return U.indexOf(e.type)}_getNetworkFeatureUid(t){return this._networkFeatureMap.has(t)?this._networkFeatureMap.get(t).uid:null}_removeHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e)-1;i===0?this._highlightIds.delete(e):this._highlightIds.set(e,i)}this._updateHighlight()}_routeItemsChanged(t){if(t.removed.length){this._graphics.removeMany(t.removed.map(e=>{const i=this._networkFeatureMap.get(e);return this._networkFeatureMap.delete(e),this._networkGraphicMap.delete(i),i}));for(const e of t.removed)this.removeHandles(e)}if(t.added.length){this._graphics.addMany(t.added.map(e=>{const i=this._createGraphic(e);return i.symbol==null?null:(this._networkFeatureMap.set(e,i),this._networkGraphicMap.set(i,e),i)}).filter(p));for(const e of t.added)this.addHandles([d(()=>e.geometry,(i,r)=>{this._updateGraphic(e,"geometry",i,r)}),d(()=>e.symbol,(i,r)=>{this._updateGraphic(e,"symbol",i,r)})],e);this._graphics.sort((e,i)=>this._getDrawOrder(e)-this._getDrawOrder(i))}}_updateGraphic(t,e,i,r){if(!this._networkFeatureMap.has(t)){const o=this._createGraphic(t);return this._networkFeatureMap.set(t,o),this._networkGraphicMap.set(o,t),void this._graphics.add(o)}const s=this._networkFeatureMap.get(t);s[e]=i,a.graphic=s,a.property=e,a.oldValue=r,a.newValue=i,this._graphicsView.graphicUpdateHandler(a)}_updateHighlight(){const t=Array.from(this._highlightIds.keys());this._graphicsView.setHighlight(t)}};n([m()],h.prototype,"_graphics",void 0),n([m()],h.prototype,"_routeItems",null),h=n([w("esri.views.2d.layers.RouteLayerView2D")],h);const Ct=h;export{Ct as default};
