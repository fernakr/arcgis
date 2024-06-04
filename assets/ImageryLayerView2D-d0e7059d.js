import{F as s,G as o,H as v,bx as R,C as b,E as _,Q as P,eX as z,bd as B,J as f,gb as A,a9 as I,dY as C,eK as U,s as E,aY as M,a$ as V,x as j,eG as $,V as S,B as T}from"./index-b1de92dd.js";import{d as H,f as O,h as G}from"./RasterVFDisplayObject-854aaf25.js";import{m as L,u as N}from"./LayerView-d5db53eb.js";import{r as J}from"./GraphicsView2D-7b0b29a8.js";import{a as W}from"./HighlightGraphicContainer-b6d3631b.js";import{M as Y,m as K,f as Q}from"./dataUtils-e5eb71a2.js";import{a as X}from"./BitmapContainer-b12abcbb.js";import{h as Z}from"./Container-945bd996.js";import{l as ee}from"./Bitmap-c1c55e57.js";import{v as te}from"./ExportStrategy-7cd284f1.js";import{J as ie}from"./rasterProjectionHelper-148ec10d.js";import{T as q}from"./color-fd4b99b8.js";import{n as re}from"./WGLContainer-97234da9.js";import{p as ae}from"./popupUtils-8e5c0d2c.js";import{a as se}from"./RefreshableLayerView-6b512db6.js";import"./FramebufferObject-b81dd1d4.js";import"./Texture-46909090.js";import"./enums-bdecffa2.js";import"./ProgramTemplate-d64d3aed.js";import"./VertexElementDescriptor-2925c6af.js";import"./cimAnalyzer-7839a604.js";import"./fontUtils-62393e60.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-a1ab1a9e.js";import"./OptimizedGeometry-196224d4.js";import"./GeometryUtils-984e8446.js";import"./enums-f1a6a48a.js";import"./alignmentUtils-ae955d28.js";import"./definitions-2c27d0b7.js";import"./number-e491b09e.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-769e59ad.js";import"./floatRGBA-98e1e6fe.js";import"./normalizeUtilsSync-b47066f1.js";import"./projectionSupport-ce17f405.js";import"./json-48e3ea08.js";import"./AttributeStoreView-f7e87fd3.js";import"./TiledDisplayObject-aad630a8.js";import"./visualVariablesUtils-ff289c3e.js";import"./GeometryUtils-4544060c.js";import"./ExpandedCIM-5390ef98.js";import"./util-998051f8.js";import"./Matcher-0057a92e.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-21b1350f.js";import"./earcut-d528aa83.js";import"./ComputedAttributeStorage-50e469cd.js";import"./featureConversionUtils-c440e28e.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./TimeOnly-075db8ad.js";import"./BaseGraphicContainer-aa8a1bf5.js";import"./FeatureContainer-16f2b7f2.js";import"./TileContainer-127f9af8.js";import"./vec3f32-2da9db36.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";let h=class extends R{constructor(){super(...arguments),this.attached=!1,this.container=new Z,this.updateRequested=!1,this.type="imagery",this._bitmapView=new X}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch(t=>{b(t)||_.getLogger(this).error(t)})}hitTest(e){return new P({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new te({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports(async e=>{const{source:t}=e;if(!t||t instanceof ImageBitmap)return;const i=await this.layer.applyRenderer({extent:t.extent,pixelBlock:t.originalPixelBlock??t.pixelBlock});t.filter=r=>this.layer.pixelFilter?this.layer.applyFilter(r):{...i,extent:t.extent}}).catch(e=>{b(e)||_.getLogger(this).error(e)})}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(e.length===1&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,i=e.map(a=>a.source).filter(a=>a.extent&&a.extent.intersects(t)).map(a=>({extent:a.extent,pixelBlock:a.originalPixelBlock})),r=Y(i,t);return r!=null?{extent:r.extent,pixelBlock:r.pixelBlock}:null}return null}async _fetchImage(e,t,i,r){var m;(r=r||{}).timeExtent=this.timeExtent,r.requestAsImageElement=!0,r.returnImageBitmap=!0;const a=await this.layer.fetchImage(e,t,i,r);if(a.imageBitmap)return a.imageBitmap;const n=await this.layer.applyRenderer(a.pixelData,{signal:r.signal}),l=new ee(n.pixelBlock,(m=n.extent)==null?void 0:m.clone(),a.pixelData.pixelBlock);return l.filter=p=>this.layer.applyFilter(p),l}};s([o()],h.prototype,"attached",void 0),s([o()],h.prototype,"container",void 0),s([o()],h.prototype,"layer",void 0),s([o()],h.prototype,"strategy",void 0),s([o()],h.prototype,"timeExtent",void 0),s([o()],h.prototype,"view",void 0),s([o()],h.prototype,"updateRequested",void 0),s([o()],h.prototype,"updating",null),s([o()],h.prototype,"type",void 0),h=s([v("esri.views.2d.layers.imagery.ImageryView2D")],h);const oe=h;class ne extends re{constructor(){super(...arguments),this.symbolTypes=["triangle"]}prepareRenderPasses(t){const i=t.registerRenderPass({name:"imagery (vf)",brushes:[H],target:()=>this.children,drawPhase:q.MAP});return[...super.prepareRenderPasses(t),i]}doRender(t){this.visible&&t.drawPhase===q.MAP&&this.symbolTypes.forEach(i=>{t.renderPass=i,super.doRender(t)})}}let y=class extends R{constructor(e){super(e),this._loading=null,this.update=z((t,i)=>this._update(t,i).catch(r=>{b(r)||_.getLogger(this).error(r)}))}get updating(){return!!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes=e.style==="wind_speed"?["scalar","triangle"]:e.style==="simple_scalar"?["scalar"]:["triangle"],this.container.requestRender()}async _update(e,t,i){if(!e.stationary)return;const{extent:r,spatialReference:a}=e.state,n=new B({xmin:r.xmin,ymin:r.ymin,xmax:r.xmax,ymax:r.ymax,spatialReference:a}),[l,m]=e.state.size;this._loading=this.fetchPixels(n,l,m,i);const p=await this._loading;this._addToDisplay(p,t,e.state),this._loading=null}_addToDisplay(e,t,i){if(e.pixelBlock==null)return this.container.children.forEach(l=>l.destroy()),void this.container.removeAllChildren();const{extent:r,pixelBlock:a}=e,n=new O(a);n.offset=[0,0],n.symbolizerParameters=t,n.rawPixelData=e,n.invalidateVAO(),n.x=r.xmin,n.y=r.ymax,n.pixelRatio=i.pixelRatio,n.rotation=i.rotation,n.resolution=i.resolution,n.width=a.width*t.symbolTileSize,n.height=a.height*t.symbolTileSize,this.container.children.forEach(l=>l.destroy()),this.container.removeAllChildren(),this.container.symbolTypes=t.style==="wind_speed"?["scalar","triangle"]:t.style==="simple_scalar"?["scalar"]:["triangle"],this.container.addChild(n)}};s([o()],y.prototype,"fetchPixels",void 0),s([o()],y.prototype,"container",void 0),s([o()],y.prototype,"_loading",void 0),s([o()],y.prototype,"updating",null),y=s([v("esri.views.2d.layers.imagery.ImageryVFStrategy")],y);const le=y;let c=class extends R{constructor(){super(...arguments),this.attached=!1,this.container=new ne,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(e,t,i,r)=>{const a=await this._projectFullExtentPromise,{symbolTileSize:n}=this.layer.renderer,{extent:l,width:m,height:p}=K(e,t,i,n,a);if(a!=null&&!a.intersects(e))return{extent:l,pixelBlock:null};const d={bbox:`${l.xmin}, ${l.ymin}, ${l.xmax}, ${l.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:n,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(d)){const u=this.getPixelData();if(u!=null&&`${u.extent.xmin}, ${u.extent.ymin}, ${u.extent.xmax}, ${u.extent.ymax}`===d.bbox)return u}const{pixelData:g}=await this.layer.fetchImage(l,m,p,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:r});this._dataParameters=d;const x=g==null?void 0:g.pixelBlock;return x==null?{extent:l,pixelBlock:null}:{extent:l,pixelBlock:this.layer.rasterInfo.dataType==="vector-uv"?Q(x,"vector-uv"):x}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new le({container:this.container,fetchPixels:this._fetchpixels}),this.addHandles(f(()=>this.layer.renderer,e=>this._updateSymbolizerParams(e),A),"attach")}detach(){this._strategy.destroy(),this.container.children.forEach(e=>e.destroy()),this.container.removeAllChildren(),this.removeHandles("attach"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){var r;const e=(r=this.container.children[0])==null?void 0:r.rawPixelData;if(this.updating||!e)return null;const{extent:t,pixelBlock:i}=e;return{extent:t,pixelBlock:i}}hitTest(e){return new P({attributes:{},geometry:e.clone(),layer:this.layer})}update(e){this._strategy.update(e,this._symbolizerParams).catch(t=>{b(t)||_.getLogger(this).error(t)})}redraw(){const{renderer:e}=this.layer;e&&(this._updateSymbolizerParams(e),this._strategy.redraw(this._symbolizerParams))}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,i=this._dataParameters.time===e.time,r=this._dataParameters.symbolTileSize===e.symbolTileSize,a=this._dataParameters.bbox===e.bbox;return t&&i&&r&&a}async _getProjectedFullExtent(e){try{return ie(this.layer.fullExtent,e)}catch{try{const i=(await I(this.layer.url,{query:{option:"footprints",outSR:C(e),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return i?B.fromJSON(i):null}catch{return null}}}_updateSymbolizerParams(e){e.type==="vector-field"&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};s([o()],c.prototype,"attached",void 0),s([o()],c.prototype,"container",void 0),s([o()],c.prototype,"layer",void 0),s([o()],c.prototype,"timeExtent",void 0),s([o()],c.prototype,"type",void 0),s([o()],c.prototype,"view",void 0),s([o()],c.prototype,"updating",null),c=s([v("esri.views.2d.layers.imagery.VectorFieldView2D")],c);const he=c,pe=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(i,r){const{layer:a}=this;if(!i)throw new E("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a});const{popupEnabled:n}=a,l=ae(a,r);if(!n||l==null)throw new E("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:n,popupTemplate:l});const m=await l.getRequiredFields(),p=new M;p.timeExtent=this.timeExtent,p.geometry=i,p.outFields=m,p.outSpatialReference=i.spatialReference;const{resolution:d,spatialReference:g}=this.view,x=this.view.type==="2d"?new V(d,d,g):new V(.5*d,.5*d,g),{returnTopmostRaster:u,showNoDataRecords:D}=l.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},k={returnDomainValues:!0,returnTopmostRaster:u,pixelSize:x,showNoDataRecords:D,signal:r!=null?r.signal:null};return a.queryVisibleRasters(p,k).then(F=>F)}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return s([o()],t.prototype,"layer",void 0),s([o()],t.prototype,"suspended",void 0),s([o(U)],t.prototype,"timeExtent",void 0),s([o()],t.prototype,"view",void 0),t=s([v("esri.views.layers.ImageryLayerView")],t),t};let w=class extends pe(se(L(N))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new j,this._highlightView=void 0,this.layer=null,this.subview=null}get pixelData(){const{subview:e}=this;return this.updating||!e?null:"getPixelData"in e?e.getPixelData():null}async hitTest(e,t){return this.subview?[{type:"graphic",graphic:this.subview.hitTest(e),layer:this.layer,mapPoint:e}]:null}update(e){var t;(t=this.subview)==null||t.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new J({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new W(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([f(()=>this.layer.exportImageServiceParameters.version,e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())},$),f(()=>this.timeExtent,e=>{const{subview:t}=this;t&&(t.timeExtent=e,"redraw"in t?this.requestUpdate():t.redrawOrRefetch())},$),this.layer.on("redraw",()=>{const{subview:e}=this;e&&("redraw"in e?e.redraw():e.redrawOrRefetch())}),f(()=>this.layer.renderer,()=>this._setSubView())])}detach(){var e,t;this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),(e=this.subview)==null||e.destroy(),this.subview=null,(t=this._highlightView)==null||t.destroy(),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){if(!((Array.isArray(e)?e[0]:S.isCollection(e)?e.at(0):e)instanceof P))return T();let i=[];return Array.isArray(e)||S.isCollection(e)?i=e.map(r=>r.clone()):e instanceof P&&(i=[e.clone()]),this._highlightGraphics.addMany(i),T(()=>this._highlightGraphics.removeMany(i))}async doRefresh(){this.requestUpdate()}isUpdating(){return!this.subview||this.subview.updating}_setSubView(){var i,r;if(!this.view)return;const e=(i=this.layer.renderer)==null?void 0:i.type;let t="imagery";if(e==="vector-field"?t="imageryVF":e==="flow"&&(t="flow"),this.subview){const{type:a}=this.subview;if(a===t)return this._attachSubview(this.subview),void(a==="flow"?this.subview.redrawOrRefetch():a==="imagery"&&this.layer.format==="lerc"?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),(r=this.subview)==null||r.destroy()}this.subview=t==="imagery"?new oe({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):t==="imageryVF"?new he({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new G({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0))}_detachSubview(e){e!=null&&e.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1)}};s([o()],w.prototype,"pixelData",null),s([o()],w.prototype,"subview",void 0),w=s([v("esri.views.2d.layers.ImageryLayerView2D")],w);const ut=w;export{ut as default};
