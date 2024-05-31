import{E as H,s as I,fv as Z,j$ as ee,I as w,ed as te,ad as x,aM as F,D as Q,O as re,C as ie,bt as S,he as se,hj as le,hl as oe,aY as g,dJ as V,aP as P,bK as R,be as U,gi as J,k0 as K,gj as W,k1 as ae,k2 as z,k3 as D,cs as E,k4 as L,b1 as ne,ec as ue,dn as pe,ds as ce,dR as he,dq as ye,dr as de,dT as fe,dS as me,dt as ge,bF as $,k5 as Ae,k6 as Se,eU as k,cy as xe,F as c,G as y,f as we,bB as ve,bA as M,H as _e,dC as be}from"./index-6c8fba83.js";import{p as Ie}from"./ArcGISCachedService-ce1bbf27.js";import{T as G}from"./TilemapCache-80dcd6c9.js";import{e as Ue}from"./jsonContext-37325204.js";import{l as Re}from"./StyleRepository-0c3f4911.js";import"./TileInfoTilemapCache-6f2265d2.js";import"./ByteSizeUnit-d4757d40.js";import"./StyleDefinition-29c49b98.js";import"./enums-f1a6a48a.js";import"./enums-fb086c25.js";import"./enums-bdecffa2.js";import"./VertexElementDescriptor-2925c6af.js";import"./GeometryUtils-984e8446.js";import"./definitions-81229636.js";let _=null;function $e(e){if(_)return _;const t={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return _=new Promise(r=>{const i=new Image;i.onload=()=>{i.onload=i.onerror=null,r(i.width>0&&i.height>0)},i.onerror=()=>{i.onload=i.onerror=null,r(!1)},i.src="data:image/webp;base64,"+t[e]}),_}const C=1.15;class N{constructor(t,r){this._spriteSource=t,this._maxTextureSize=r,this.devicePixelRatio=1,this._spriteImageFormat="png",this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded",t.type==="url"&&t.spriteFormat&&(this._spriteImageFormat=t.spriteFormat),t.pixelRatio&&(this.devicePixelRatio=t.pixelRatio),this.baseURL=t.spriteUrl}get spriteNames(){const t=[];for(const r in this._spritesData)t.push(r);return t.sort(),t}getSpriteInfo(t){return this._spritesData?this._spritesData[t]:null}async load(t){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(t),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"}async _loadSprites(t){this._isRetina=this.devicePixelRatio>C;const{width:r,height:i,data:s,json:o}=await this._getSpriteData(this._spriteSource,t),l=Object.keys(o);if(!l||l.length===0||!s)return this._spritesData=this.image=null,void(this.width=this.height=0);this._spritesData=o,this.width=r,this.height=i;const n=Math.max(this._maxTextureSize,4096);if(r>n||i>n){const u=`Sprite resource for style ${this.baseURL} is bigger than the maximum allowed of ${n} pixels}`;throw H.getLogger("esri.layers.support.SpriteSource").error(u),new I("SpriteSource",u)}let a;for(let u=0;u<s.length;u+=4)a=s[u+3]/255,s[u]=s[u]*a,s[u+1]=s[u+1]*a,s[u+2]=s[u+2]*a;this.image=s}async _getSpriteData(t,r){if(t.type==="image"){let h,d;if(this.devicePixelRatio<C){if(!t.spriteSource1x)throw new I("SpriteSource","no image data provided for low resolution sprites!");h=t.spriteSource1x.image,d=t.spriteSource1x.json}else{if(!t.spriteSource2x)throw new I("SpriteSource","no image data provided for high resolution sprites!");h=t.spriteSource2x.image,d=t.spriteSource2x.json}return"width"in h&&"height"in h&&"data"in h&&(Z(h.data)||ee(h.data))?{width:h.width,height:h.height,data:new Uint8Array(h.data),json:d}:{...B(h),json:d}}const i=w(this.baseURL),s=i.query?"?"+te(i.query):"",o=this._isRetina?"@2x":"",l=`${i.path}${o}.${this._spriteImageFormat}${s}`,n=`${i.path}${o}.json${s}`,[a,u]=await Promise.all([x(n,r),x(l,{responseType:"image",...r})]);return{...B(u.data),json:a.data}}}function B(e){const t=document.createElement("canvas"),r=t.getContext("2d");t.width=e.width,t.height=e.height,r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height);return{width:e.width,height:e.height,data:new Uint8Array(i.data)}}let Te=class{constructor(t){this.url=t}destroy(){this._tileIndexPromise=null}async fetchTileIndex(){return this._tileIndexPromise||(this._tileIndexPromise=x(this.url).then(t=>t.data.index)),this._tileIndexPromise}async dataKey(t,r){const i=await this.fetchTileIndex();return F(r),this._getIndexedDataKey(i,t)}_getIndexedDataKey(t,r){const i=[r];if(r.level<0||r.row<0||r.col<0||r.row>>r.level>0||r.col>>r.level>0)return null;let s=r;for(;s.level!==0;)s=new Q(s.level-1,s.row>>1,s.col>>1,s.world),i.push(s);let o,l,n=t,a=i.pop();if(n===1)return a;for(;i.length;)if(o=i.pop(),l=(1&o.col)+((1&o.row)<<1),n){if(n[l]===0){a=null;break}if(n[l]===1){a=o;break}a=o,n=n[l]}return a}},Pe=class{constructor(t,r){this._tilemap=t,this._tileIndexUrl=r}destroy(){this._tilemap=re(this._tilemap),this._tileIndexPromise=null}async fetchTileIndex(t){return this._tileIndexPromise||(this._tileIndexPromise=x(this._tileIndexUrl,{query:{...t==null?void 0:t.query}}).then(r=>r.data.index)),this._tileIndexPromise}dataKey(t,r){const{level:i,row:s,col:o}=t,l=new Q(t);return this._tilemap.fetchAvailabilityUpsample(i,s,o,l,r).then(()=>(l.world=t.world,l)).catch(n=>{if(ie(n))throw n;return null})}};class Oe{constructor(t){this._tileUrl=t,this._promise=null,this._abortController=null,this._abortOptions=[]}getData(t){this._promise===null&&(this._abortController=new AbortController,this._promise=this._makeRequest(this._tileUrl,this._abortController.signal));const r=this._abortOptions;return r.push(t),le(t,()=>{r.every(i=>oe(i))&&this._abortController.abort()}),this._promise.then(i=>g(i))}async _makeRequest(t,r){const{data:i}=await x(t,{responseType:"array-buffer",signal:r});return i}}const T=new Map;function je(e,t,r,i,s){const o=w(e),l=o.query;if(l)for(const[a,u]of Object.entries(l))switch(u){case"{x}":l[a]=i.toString();break;case"{y}":l[a]=r.toString();break;case"{z}":l[a]=t.toString()}const n=o.path;return De(S(n.replaceAll(/\{z\}/gi,t.toString()).replaceAll(/\{y\}/gi,r.toString()).replaceAll(/\{x\}/gi,i.toString()),{...o.query}),s)}function De(e,t){return se(T,e,()=>new Oe(e)).getData(t).then(r=>(T.delete(e),r)).catch(r=>{throw T.delete(e),r})}class Ee{constructor(t,r,i){this.tilemap=null,this.tileInfo=null,this.capabilities=null,this.fullExtent=null,this.initialExtent=null,this.name=t,this.sourceUrl=r;const s=w(this.sourceUrl),o=g(i),l=o.tiles;if(s)for(let f=0;f<l.length;f++){const m=w(l[f]);m&&(V(m.path)||(m.path=P(s.path,m.path)),l[f]=S(m.path,{...s.query,...m.query}))}this.tileServers=l;const n=i.capabilities&&i.capabilities.split(",").map(f=>f.toLowerCase().trim()),a=(i==null?void 0:i.exportTilesAllowed)===!0,u=(n==null?void 0:n.includes("tilemap"))===!0,h=a&&i.hasOwnProperty("maxExportTilesCount")?i.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:a,supportsTileMap:u},exportTiles:a?{maxExportTilesCount:+h}:null},this.tileInfo=R.fromJSON(o.tileInfo);const d=i.tileMap?S(P(s.path,i.tileMap),s.query??{}):null;u?(this.type="vector-tile",this.tilemap=new Pe(new G({layer:{parsedUrl:s,tileInfo:this.tileInfo},minLOD:o.minLOD??this.tileInfo.lods[0].level,maxLOD:o.maxLOD??this.tileInfo.lods[this.tileInfo.lods.length-1].level}),d)):d&&(this.tilemap=new Te(d)),this.fullExtent=U.fromJSON(i.fullExtent),this.initialExtent=U.fromJSON(i.initialExtent)}destroy(){var t;(t=this.tilemap)==null||t.destroy()}async getRefKey(t,r){var i;return await((i=this.tilemap)==null?void 0:i.dataKey(t,r))??t}requestTile(t,r,i,s){const o=this.tileServers[r%this.tileServers.length];return je(o,t,r,i,s)}isCompatibleWith(t){const r=this.tileInfo,i=t.tileInfo;if(!r.spatialReference.equals(i.spatialReference)||!r.origin.equals(i.origin)||Math.round(r.dpi)!==Math.round(i.dpi))return!1;const s=r.lods,o=i.lods,l=Math.min(s.length,o.length);for(let n=0;n<l;n++){const a=s[n],u=o[n];if(a.level!==u.level||Math.round(a.scale)!==Math.round(u.scale))return!1}return!0}}async function Le(e,t){const r={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[i,s]=typeof e=="string"?[e,null]:[null,e.jsonUrl];return await A(r,"esri",e,s,t),{layerDefinition:r.validatedSource,url:i,serviceUrl:r.sourceUrl,style:r.style,styleUrl:r.styleUrl,spriteUrl:r.style.sprite&&v(r.styleBase,r.style.sprite),spriteFormat:r.spriteFormat,glyphsUrl:r.style.glyphs&&v(r.styleBase,r.style.glyphs),sourceNameToSource:r.sourceNameToSource,primarySourceName:r.primarySourceName}}function v(...e){let t;for(const r of e)r!=null&&(J(r)?t&&(t=t.split("://")[0]+":"+r.trim()):t=V(r)?r:P(t,r));return t?K(t):void 0}async function A(e,t,r,i,s){let o,l,n;if(F(s),typeof r=="string"){const u=W(r);n=await x(u,{...s,responseType:"json",query:{f:"json",...s==null?void 0:s.query}}),n.ssl&&(o&&(o=o.replace(/^http:/i,"https:")),l&&(l=l.replace(/^http:/i,"https:"))),o=u,l=u}else r!=null&&(n={data:r},o=r.jsonUrl||null,l=i);const a=n==null?void 0:n.data;if(X(a))return e.styleUrl=o||null,Me(e,a,l,s);if(ke(a))return e.sourceUrl?q(e,a,l,!1,t,s):(e.sourceUrl=o||null,q(e,a,l,!0,t,s));throw new Error("You must specify the URL or the JSON for a service or for a style.")}function Y(e){return typeof e=="object"&&!!e&&"tilejson"in e&&e.tilejson!=null}function X(e){return!!e&&"sources"in e&&!!e.sources}function ke(e){return!X(e)}async function Me(e,t,r,i){const s=r?ae(r):z();e.styleBase=s,e.style=t,t["sprite-format"]&&t["sprite-format"].toLowerCase()==="webp"&&(e.spriteFormat="webp");const o=[];if(t.sources&&t.sources.esri){const l=t.sources.esri;l.url?await A(e,"esri",v(s,l.url),void 0,i):o.push(A(e,"esri",l,s,i))}for(const l of Object.keys(t.sources))l!=="esri"&&t.sources[l].type==="vector"&&(t.sources[l].url?o.push(A(e,l,v(s,t.sources[l].url),void 0,i)):t.sources[l].tiles&&o.push(A(e,l,t.sources[l],s,i)));await Promise.all(o)}async function q(e,t,r,i,s,o){const l=r?K(r)+"/":z(),n=Ce(t),a=new Ee(s,S(l,(o==null?void 0:o.query)??{}),n);if(!i&&e.primarySourceName in e.sourceNameToSource){const u=e.sourceNameToSource[e.primarySourceName];if(!u.isCompatibleWith(a))return;a.fullExtent!=null&&(u.fullExtent!=null?u.fullExtent.union(a.fullExtent):u.fullExtent=a.fullExtent.clone()),u.tileInfo&&a.tileInfo&&u.tileInfo.lods.length<a.tileInfo.lods.length&&(u.tileInfo=a.tileInfo)}if(i&&(e.sourceBase=l,e.source=t,e.validatedSource=n,e.primarySourceName=s),e.sourceNameToSource[s]=a,!Y(e)&&"defaultStyles"in t&&!e.style){if(t.defaultStyles==null)throw new Error;return typeof t.defaultStyles=="string"?A(e,"",v(l,t.defaultStyles,"root.json"),void 0,o):A(e,"",t.defaultStyles,v(l,"root.json"),o)}}function Ce(e){if(e.hasOwnProperty("tileInfo"))return e;const t={xmin:-20037507067161843e-9,ymin:-20037507067161843e-9,xmax:20037507067161843e-9,ymax:20037507067161843e-9,spatialReference:{wkid:102100,latestWkid:3857}};let r=null;if(Y(e)){const{bounds:h}=e;if(h){const d=D({x:h[0],y:h[1],spatialReference:g(E)}),f=D({x:h[2],y:h[3],spatialReference:g(E)});r={xmin:d.x,ymin:d.y,xmax:f.x,ymax:f.y,spatialReference:g(L)}}}r===null&&(r=t);const i=512;let s=78271.51696400007,o=2958287637957775e-7;const l=[],n=e.hasOwnProperty("maxzoom")&&e.maxzoom!=null?+e.maxzoom:22,a=0,u=0;for(let h=0;h<=n;h++)l.push({level:h,scale:o,resolution:s}),s/=2,o/=2;return{capabilities:"TilesOnly",initialExtent:r,fullExtent:t,minScale:a,maxScale:u,tiles:e.tiles,tileInfo:{rows:i,cols:i,dpi:96,format:"pbf",origin:{x:-20037508342787e-6,y:20037508342787e-6},lods:l,spatialReference:g(L)}}}const b=1e-6;function Ne(e,t){if(e===t)return!0;if(e==null&&t!=null||e!=null&&t==null||e==null||t==null||!e.spatialReference.equals(t.spatialReference)||e.dpi!==t.dpi)return!1;const r=e.origin,i=t.origin;if(Math.abs(r.x-i.x)>=b||Math.abs(r.y-i.y)>=b)return!1;let s,o;e.lods[0].scale>t.lods[0].scale?(s=e,o=t):(o=e,s=t);for(let l=s.lods[0].scale;l>=o.lods[o.lods.length-1].scale-b;l/=2)if(Math.abs(l-o.lods[0].scale)<b)return!0;return!1}function Be(e,t){if(e===t)return e;if(e==null&&t!=null)return t;if(e!=null&&t==null)return e;if(e==null||t==null)return null;const r=e.size[0],i=e.format,s=e.dpi,o=new ne({x:e.origin.x,y:e.origin.y}),l=e.spatialReference,n=e.lods[0].scale>t.lods[0].scale?e.lods[0]:t.lods[0],a=e.lods[e.lods.length-1].scale<=t.lods[t.lods.length-1].scale?e.lods[e.lods.length-1]:t.lods[t.lods.length-1],u=n.scale,h=n.resolution,d=a.scale,f=[];let m=u,O=h,j=0;for(;m>d;)f.push(new ue({level:j,resolution:O,scale:m})),j++,m/=2,O/=2;return new R({size:[r,r],dpi:s,format:i||"pbf",origin:o,lods:f,spatialReference:l})}let p=class extends pe(ce(Ie(he(ye(de(fe(me(ge(be))))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.style=null,this.tilemapCache=null,this.type="vector-tile",this.url=null,this.path=null}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){var e;if(this.sourceNameToSource)for(const t of Object.values(this.sourceNameToSource))t==null||t.destroy();(e=this.primarySource)==null||e.destroy(),this._spriteSourceMap.clear()}async prefetchResources(e){await this.loadSpriteSource(globalThis.devicePixelRatio||1,e)}load(e){const t=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).catch($).then(async()=>{var i;if(!((i=this.portalItem)!=null&&i.id))return;const r=`${this.portalItem.itemCdnUrl}/resources/styles/root.json`;(await x(r,{...e,query:{f:"json",...this.customParameters,token:this.apiKey}})).data&&this.read({url:r},Ue(this.portalItem))}).catch($).then(()=>this._loadStyle(e));return this.addResolvingPromise(t),Promise.resolve(this)}get attributionDataUrl(){const e=this.currentStyleInfo,t=(e==null?void 0:e.serviceUrl)&&w(e.serviceUrl);if(!t)return null;const r=this._getDefaultAttribution(t.path);return r?S(r,{...this.customParameters,token:this.apiKey}):null}get capabilities(){const e=this.primarySource;return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){var e;return((e=this.primarySource)==null?void 0:e.fullExtent)||null}get initialExtent(){var e;return((e=this.primarySource)==null?void 0:e.initialExtent)||null}get parsedUrl(){return this.serviceUrl?w(this.serviceUrl):null}get serviceUrl(){var e;return((e=this.currentStyleInfo)==null?void 0:e.serviceUrl)||null}get spatialReference(){var e;return((e=this.tileInfo)==null?void 0:e.spatialReference)??null}get styleUrl(){var e;return((e=this.currentStyleInfo)==null?void 0:e.styleUrl)||null}writeStyleUrl(e,t){e&&J(e)&&(e=`https:${e}`);const r=Ae(e);t.styleUrl=Se(e,r)}get tileInfo(){var r;const e=[];for(const i in this.sourceNameToSource)e.push(this.sourceNameToSource[i]);let t=((r=this.primarySource)==null?void 0:r.tileInfo)||new R;if(e.length>1)for(let i=0;i<e.length;i++)Ne(t,e[i].tileInfo)&&(t=Be(t,e[i].tileInfo));return t}readTilemapCache(e,t){var i;return((i=t.capabilities)==null?void 0:i.includes("Tilemap"))?new G({layer:this}):null}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}async loadSpriteSource(e=1,t){var r,i;if(!this._spriteSourceMap.has(e)){const s=k("2d").maxTextureSize,o=(r=this.currentStyleInfo)!=null&&r.spriteUrl?S(this.currentStyleInfo.spriteUrl,{...this.customParameters,token:this.apiKey}):null,l=new N({type:"url",spriteUrl:o,pixelRatio:e,spriteFormat:(i=this.currentStyleInfo)==null?void 0:i.spriteFormat},s);await l.load(t),this._spriteSourceMap.set(e,l)}return this._spriteSourceMap.get(e)}async setSpriteSource(e,t){if(!e)return null;const r=k("2d").maxTextureSize,i=e.spriteUrl,s=i?S(i,{...this.customParameters,token:this.apiKey}):null;if(!s&&e.type==="url")return null;const o=new N(e,r);try{await o.load(t);const l=e.pixelRatio||1;return this._spriteSourceMap.clear(),this._spriteSourceMap.set(l,o),s&&this.currentStyleInfo&&(this.currentStyleInfo.spriteUrl=s),this.emit("spriteSource-change",{spriteSource:o}),o}catch(l){$(l)}return null}async loadStyle(e,t){var i;const r=e||this.style||this.url;return this._loadingTask&&typeof r=="string"&&this.url===r||((i=this._loadingTask)==null||i.abort(),this._loadingTask=xe(s=>(this._spriteSourceMap.clear(),this._getSourceAndStyle(r,{signal:s})),t)),this._loadingTask.promise}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){var t;return g((t=this.styleRepository)==null?void 0:t.getPaintProperties(e))}setPaintProperties(e,t){const r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const i=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layer:e,paint:t,isDataDriven:r||i})}getStyleLayer(e){return g(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layer:e})}getLayoutProperties(e){return g(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}write(e,t){return t!=null&&t.origin&&!this.styleUrl?(t.messages&&t.messages.push(new I("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}getTileUrl(e,t,r){return null}async _getSourceAndStyle(e,t){if(!e)throw new Error("invalid style!");const r=await Le(e,{...t,query:{...this.customParameters,token:this.apiKey}});r.spriteFormat==="webp"&&(await $e("lossy")||(r.spriteFormat="png")),this._set("currentStyleInfo",{...r}),typeof e=="string"?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",r.sourceNameToSource),this._set("primarySource",r.sourceNameToSource[r.primarySourceName]),this._set("styleRepository",new Re(r.style)),this.read(r.layerDefinition,{origin:"service"}),this.emit("load-style")}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),r=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];if(!t)return;const i=t[2]&&t[2].toLowerCase();if(!i)return;const s=t[1]||"";for(const o of r)if(o.toLowerCase().includes(i))return W(`//static.arcgis.com/attribution/Vector${s}/${o}`)}async _loadStyle(e){var t;return((t=this._loadingTask)==null?void 0:t.promise)??this.loadStyle(null,e)}};c([y({readOnly:!0})],p.prototype,"attributionDataUrl",null),c([y({type:["show","hide"]})],p.prototype,"listMode",void 0),c([y({json:{read:!0,write:!0}})],p.prototype,"blendMode",void 0),c([y({readOnly:!0,json:{read:!1}})],p.prototype,"capabilities",null),c([y({readOnly:!0})],p.prototype,"currentStyleInfo",void 0),c([y({json:{read:!1},readOnly:!0,type:U})],p.prototype,"fullExtent",null),c([y({json:{read:!1},readOnly:!0,type:U})],p.prototype,"initialExtent",null),c([y({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],p.prototype,"isReference",void 0),c([y({type:["VectorTileLayer"]})],p.prototype,"operationalLayerType",void 0),c([y({readOnly:!0})],p.prototype,"parsedUrl",null),c([y()],p.prototype,"style",void 0),c([y({readOnly:!0})],p.prototype,"serviceUrl",null),c([y({type:we,readOnly:!0})],p.prototype,"spatialReference",null),c([y({readOnly:!0})],p.prototype,"styleRepository",void 0),c([y({readOnly:!0})],p.prototype,"sourceNameToSource",void 0),c([y({readOnly:!0})],p.prototype,"primarySource",void 0),c([y({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],p.prototype,"styleUrl",null),c([ve(["portal-item","web-document"],"styleUrl")],p.prototype,"writeStyleUrl",null),c([y({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:R})],p.prototype,"tileInfo",null),c([y()],p.prototype,"tilemapCache",void 0),c([M("service","tilemapCache",["capabilities","tileInfo"])],p.prototype,"readTilemapCache",null),c([y({json:{read:!1},readOnly:!0,value:"vector-tile"})],p.prototype,"type",void 0),c([y({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],p.prototype,"url",void 0),c([y({readOnly:!0})],p.prototype,"version",void 0),c([M("version",["version","currentVersion"])],p.prototype,"readVersion",null),c([y({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],p.prototype,"path",void 0),p=c([_e("esri.layers.VectorTileLayer")],p);const it=p;export{it as default};
