import{y as _,z as w,A as g,d as u,D as p,C as f,E as I,F as d,G as S,H as T}from"./index-08b3f6d9.js";import{r as V,n as m}from"./imageUtils-c7594048.js";import{m as v,u as x}from"./LayerView-67ad4dc5.js";import{a as M}from"./RefreshableLayerView-b8435ed5.js";import"./BitmapTileContainer-962795e3.js";import"./Bitmap-5d2ce9fd.js";import"./Container-0acfda5d.js";import"./definitions-e55037fa.js";import"./enums-bdecffa2.js";import"./Texture-28a471a0.js";import"./TiledDisplayObject-31d6568f.js";import"./WGLContainer-0209881f.js";import"./FramebufferObject-0061cbb7.js";import"./ProgramTemplate-f70faef2.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-61d20ad3.js";import"./enums-f1a6a48a.js";import"./number-e491b09e.js";import"./GeometryUtils-72218fbf.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-7c25c91b.js";import"./featureConversionUtils-88ddda84.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./TileContainer-34a417b1.js";const q=new Set([102113,102100,3857,3785,900913]),R=[0,0];let r=class extends M(V(v(x))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get tileMatrixSet(){const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(e.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=e.id),e):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){var t;const e=(t=this.tileMatrixSet)==null?void 0:t.tileInfo;e&&(this._tileInfoView=new _(e),this._fetchQueue=new w({tileInfoView:this._tileInfoView,concurrency:16,process:(i,s)=>this.fetchTile(i,s)}),this._tileStrategy=new g({cachePolicy:"keep",resampling:!0,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),this.addAttachHandles(this._updatingHandles.add(()=>{var i,s;return[(s=(i=this.layer)==null?void 0:i.activeLayer)==null?void 0:s.styleId,this.tileMatrixSet]},()=>this.doRefresh())),super.attach())}detach(){var e,t;super.detach(),(e=this._tileStrategy)==null||e.destroy(),(t=this._fetchQueue)==null||t.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){var t;return((t=this.layer.activeLayer.tileMatrixSets)==null?void 0:t.some(i=>{var s;return u((s=i.tileInfo)==null?void 0:s.spatialReference,e)}))??!1}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(e=>this._updatingHandles.addPromise(this._enqueueTileFetch(e)))}}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(R,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(t)),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}async fetchTile(e,t={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:s,resamplingLevel:a=0}=t;if(!i)return this._fetchImage(e,s);const l=new p(0,0,0,0);let n;try{await i.fetchAvailabilityUpsample(e.level,e.row,e.col,l,{signal:s}),n=await this._fetchImage(l,s)}catch(h){if(f(h))throw h;if(a<3){const o=this._tileInfoView.getTileParentId(e.id);if(o){const c=new p(o),y=await this.fetchTile(c,{...t,resamplingLevel:a+1});return m(this._tileInfoView,y,c,e)}}throw h}return m(this._tileInfoView,n,l,e)}canResume(){const e=super.canResume();return e&&this.tileMatrixSet!==null}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(t){f(t)||I.getLogger(this).error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find(s=>{var a;return u((a=s.tileInfo)==null?void 0:a.spatialReference,t)});return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find(s=>{var a;return q.has(((a=s.tileInfo)==null?void 0:a.spatialReference.wkid)??-1)})),i}};d([S({readOnly:!0})],r.prototype,"tileMatrixSet",null),r=d([T("esri.views.2d.layers.WMTSLayerView2D")],r);const se=r;export{se as default};
