import{x as w,y,z as I,A as V,B as H,d as v,C as o,D as c,E as T,F as n,G as g,H as q}from"./index-beb896e6.js";import"./Container-02b4a6b8.js";import"./BufferPool-4a187877.js";import"./color-944dd38f.js";import"./WGLContainer-38e98ad9.js";import"./enums-bdecffa2.js";import"./Texture-b333fdd2.js";import"./ProgramTemplate-606471cc.js";import"./definitions-6a669cbf.js";import"./GeometryUtils-44280cce.js";import"./FramebufferObject-491629cf.js";import"./StyleDefinition-29c49b98.js";import"./enums-fb086c25.js";import"./MagnifierPrograms-ae7512cf.js";import"./OrderIndependentTransparency-6ae10952.js";import"./floatRGBA-4f45cc9e.js";import"./testSVGPremultipliedAlpha-7a13241e.js";import{r as U}from"./GraphicsView2D-544bc609.js";import"./AttributeStoreView-4c98d8d0.js";import"./earcut-6a68c9cf.js";import"./featureConversionUtils-516805c0.js";import"./vec3f32-2da9db36.js";import{r as C,o as f,n as d}from"./imageUtils-2f55ee13.js";import{m as S,u as b}from"./LayerView-cbfa4095.js";import{a as Q}from"./HighlightGraphicContainer-8cccbac3.js";import{a as $}from"./RefreshableLayerView-267611b1.js";import{S as F,G,r as P}from"./drapedUtils-6074028f.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./config-1337d16e.js";import"./OptimizedGeometry-d94e541f.js";import"./ExpandedCIM-e96c57c5.js";import"./BidiEngine-9a40f2f4.js";import"./visualVariablesUtils-0415b7cb.js";import"./GeometryUtils-984e8446.js";import"./utils-22e38934.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-b4957971.js";import"./rasterizingUtils-aea1169b.js";import"./pbf-e182fc3f.js";import"./imageutils-fb43c211.js";import"./Matcher-e035a85a.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-249c3b9b.js";import"./CircularArray-ef508845.js";import"./throttle-7bf02de9.js";import"./ComputedAttributeStorage-53c7776b.js";import"./TimeOnly-d45aa4b9.js";import"./basicInterfaces-11f56cb3.js";import"./normalizeUtilsSync-356bf2a3.js";import"./projectionSupport-eea3fa9d.js";import"./json-48e3ea08.js";import"./TiledDisplayObject-feb746bb.js";import"./util-555b9be5.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./BitmapTileContainer-7de57972.js";import"./Bitmap-274b5992.js";import"./TileContainer-5c95f629.js";import"./scaleUtils-6a58a2e8.js";import"./BaseGraphicContainer-a314d926.js";import"./FeatureContainer-46326a8a.js";import"./floorFilterUtils-080a7cd2.js";import"./sublayerUtils-4656ec1c.js";import"./popupUtils-ff203b6c.js";const k=[0,0];let a=class extends $(C(S(b))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new w,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}get tilemapCache(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}update(t){var e;this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume(),(e=this._highlightView)==null||e.processUpdate(t)}attach(){const t="tileServers"in this.layer?this.layer.tileServers:null,e=this.tilemapCache;if(this._tileInfoView=new y(this.layer.tileInfo,this.layer.fullExtent,e==null?void 0:e.effectiveMinLOD,e==null?void 0:e.effectiveMaxLOD),this._fetchQueue=new I({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:(i,r)=>this.fetchTile(i,r)}),this._tileStrategy=new V({cachePolicy:"keep",resampling:this.resampling,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),F(this,this.layer)){const i=this._highlightView=new U({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new Q(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new G({createFetchPopupFeaturesQueryGeometry:(r,h)=>P(r,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(r,h)=>{i.graphicUpdateHandler({graphic:r,property:h})},layerView:this,updatingHandles:this._updatingHandles})}this.requestUpdate(),this.addAttachHandles(this._updatingHandles.add(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){var t,e;super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),(t=this._popupHighlightHelper)==null||t.destroy(),(e=this._highlightView)==null||e.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeatures(t,e){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeatures(t,e):[]}highlight(t){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(t):H()}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){var e;return v((e=this.layer.tileInfo)==null?void 0:e.spatialReference,t)}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(t=>this._updatingHandles.addPromise(this._enqueueTileFetch(t)))}}acquireTile(t){const e=this._bitmapView.createTile(t),i=e.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(k,e.key),i.resolution=this._tileInfoView.getTileResolution(e.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(e)),this._bitmapView.addChild(e),this.requestUpdate(),e}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}async fetchTile(t,e={}){const i=this.tilemapCache,{signal:r,resamplingLevel:h=0}=e;if(!i)try{return await this._fetchImage(t,r)}catch(s){if(!o(s)&&!this.resampling)return f(this._tileInfoView.tileInfo.size);if(h<3){const m=this._tileInfoView.getTileParentId(t.id);if(m){const u=new c(m),_=await this.fetchTile(u,{...e,resamplingLevel:h+1});return d(this._tileInfoView,_,u,t)}}throw s}const l=new c(0,0,0,0);let p;try{if(await i.fetchAvailabilityUpsample(t.level,t.row,t.col,l,{signal:r}),l.level!==t.level&&!this.resampling)return f(this._tileInfoView.tileInfo.size);p=await this._fetchImage(l,r)}catch(s){if(o(s))throw s;p=await this._fetchImage(t,r)}return this.resampling?d(this._tileInfoView,p,l,t):p}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const e=await this._fetchQueue.push(t.key);t.bitmap.source=e,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",()=>this.requestUpdate())}catch(e){o(e)||T.getLogger(this).error(e)}this.requestUpdate()}}async _fetchImage(t,e){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:e})}};n([g()],a.prototype,"resampling",null),n([g()],a.prototype,"tilemapCache",null),a=n([q("esri.views.2d.layers.TileLayerView2D")],a);const jt=a;export{jt as default};
