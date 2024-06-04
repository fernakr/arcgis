import{bY as Y,hg as st,he as it,aM as y,jG as rt,aY as D,jH as N,F as h,G as d,H as O,bz as P,ae as X,cy as A,jI as M,fa as z,jJ as j,jK as U,jL as nt,jM as $,iy as R,aR as at,eG as tt,h8 as ot,ee as lt,a_ as S,be as ut,bF as ct,E as ht,B as dt,jN as pt,e7 as ft,jO as q,bK as w,jP as _t,jQ as B,jR as et,fE as gt,gc as yt,ay as k,f as v,gn as mt,J as V,w as Ft,es as Et}from"./index-32200583.js";import{m as Ct}from"./FeatureStore-2a2f899d.js";import{W as Tt}from"./QueryEngine-05574ead.js";import{f as bt,i as vt,y as St}from"./featureConversionUtils-88e2174c.js";import{a as It}from"./pbfQueryUtils-0bd7da4b.js";import{x as wt,f as Ot,c as xt,S as At}from"./query-23bcd6ad.js";import{E as $t}from"./ByteSizeUnit-d4757d40.js";import{o as Rt}from"./BoundsStore-99a8d4e4.js";import"./timeSupport-ac9f687a.js";import"./projectionSupport-15db6598.js";import"./json-48e3ea08.js";import"./OptimizedGeometry-196224d4.js";import"./OptimizedFeature-e90b69df.js";import"./WhereClause-c9c9d9cf.js";import"./TimeOnly-916818a9.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./quantizationUtils-07e56e54.js";import"./utils-0098046f.js";import"./generateRendererUtils-28bf9e18.js";import"./RenderState-1d6218ee.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./pbf-5c902a16.js";import"./PooledRBush-1462a926.js";function J(s=!1,t){if(s){const{elevationInfo:e,alignPointsInFeatures:i}=t;return new zt(e,i)}return new Ht}let Ht=class{async alignCandidates(t,e,i){return t}notifyElevationSourceChange(){}};const Pt=1024;let zt=class{constructor(t,e){this._elevationInfo=t,this._alignPointsInFeatures=e,this._alignmentsCache=new Y(Pt),this._cacheVersion=0}async alignCandidates(t,e,i){const r=this._elevationInfo;return r==null||r.mode!=="absolute-height"||r.featureExpressionInfo?this._alignComputedElevationCandidates(t,e,i):(this._alignAbsoluteElevationCandidates(t,e,r),t)}notifyElevationSourceChange(){this._alignmentsCache.clear(),this._cacheVersion++}_alignAbsoluteElevationCandidates(t,e,i){const{offset:r,unit:n}=i;if(r==null)return;const a=st(e),o=r*(rt(n??"meters")/a);for(const l of t)switch(l.type){case"edge":l.start.z+=o,l.end.z+=o;continue;case"vertex":l.target.z+=o;continue}}async _alignComputedElevationCandidates(t,e,i){const r=new Map;for(const _ of t)it(r,_.objectId,Dt).push(_);const[n,a,o]=this._prepareQuery(r,e),l=await this._alignPointsInFeatures(n,i);if(y(i),o!==this._cacheVersion)return this._alignComputedElevationCandidates(t,e,i);this._applyCacheAndResponse(n,l,a);const{drapedObjectIds:c,failedObjectIds:p}=l,g=[];for(const _ of t){const{objectId:m}=_;c.has(m)&&_.type==="edge"&&(_.draped=!0),p.has(m)||g.push(_)}return g}_prepareQuery(t,e){const i=[],r=[];for(const[n,a]of t){const o=[];for(const l of a)this._addToQueriesOrCachedResult(n,l.target,o,r),l.type==="edge"&&(this._addToQueriesOrCachedResult(n,l.start,o,r),this._addToQueriesOrCachedResult(n,l.end,o,r));o.length!==0&&i.push({objectId:n,points:o})}return[{spatialReference:e.toJSON(),pointsInFeatures:i},r,this._cacheVersion]}_addToQueriesOrCachedResult(t,e,i,r){const n=G(t,e),a=this._alignmentsCache.get(n);a==null?i.push(e):r.push(new jt(e,a))}_applyCacheAndResponse(t,{elevations:e,drapedObjectIds:i,failedObjectIds:r},n){for(const l of n)l.apply();let a=0;const o=this._alignmentsCache;for(const{objectId:l,points:c}of t.pointsInFeatures){if(r.has(l)){a+=c.length;continue}const p=!i.has(l);for(const g of c){const _=G(l,g),m=e[a++];g.z=m,p&&o.put(_,m,1)}}}};class jt{constructor(t,e){this.point=t,this.z=e}apply(){this.point.z=this.z}}function G(s,{x:t,y:e,z:i,spatialReference:r}){return`${s}-${t}-${e}-${i??0}}-wkid:${r==null?void 0:r.wkid}`}function Dt(){return[]}let Nt=class{filter(t,e){return e}notifyElevationSourceChange(){}},Mt=class{filter(t,e){const{point:i,distance:r}=t,{z:n}=i;if(n==null||e.length===0)return e;const a=Vt(r),o=this._updateCandidatesTo3D(e,i,a).filter(Ut);return o.sort(Jt),o}_updateCandidatesTo3D(t,e,i){for(const r of t)switch(r.type){case"edge":qt(r,e,i);continue;case"vertex":kt(r,e,i);continue}return t}};function Ut(s){return s.distance<=1}function L(s=!1){return s?new Mt:new Nt}function qt(s,t,{x:e,y:i,z:r}){const{start:n,end:a,target:o}=s;s.draped||Bt(o,t,n,a);const l=(t.x-o.x)/e,c=(t.y-o.y)/i,p=(t.z-o.z)/r;s.distance=Math.sqrt(l*l+c*c+p*p)}function Bt(s,t,e,i){const r=i.x-e.x,n=i.y-e.y,a=i.z-e.z,o=r*r+n*n+a*a,l=(t.x-e.x)*r+(t.y-e.y)*n+a*(t.z-e.z),c=Math.min(1,Math.max(0,l/o)),p=e.x+r*c,g=e.y+n*c,_=e.z+a*c;s.x=p,s.y=g,s.z=_}function kt(s,t,{x:e,y:i,z:r}){const{target:n}=s,a=(t.x-n.x)/e,o=(t.y-n.y)/i,l=(t.z-n.z)/r,c=Math.sqrt(a*a+o*o+l*l);s.distance=c}function Vt(s){return typeof s=="number"?{x:s,y:s,z:s}:s}function Jt(s,t){return s.distance-t.distance}function Q(s=!1,t){return s?new Qt(t):new Gt}class Gt{async fetch(){return[]}notifySymbologyChange(){}}const Lt=1024;class Qt{constructor(t){this._getSymbologyCandidates=t,this._candidatesCache=new Y(Lt),this._cacheVersion=0}async fetch(t,e){if(t.length===0)return[];const i=[],r=[],n=this._candidatesCache;for(const g of t){const _=W(g),m=n.get(_);if(m)for(const b of m)r.push(D(b));else i.push(g),n.put(_,[],1)}if(i.length===0)return r;const a=this._cacheVersion,{candidates:o,sourceCandidateIndices:l}=await this._getSymbologyCandidates(i,e);if(y(e),a!==this._cacheVersion)return this.fetch(t,e);const c=[],{length:p}=o;for(let g=0;g<p;++g){const _=o[g],m=W(i[l[g]]),b=n.get(m);b.push(_),n.put(m,b,b.length),c.push(D(_))}return r.concat(c)}notifySymbologyChange(){this._candidatesCache.clear(),this._cacheVersion++}}function W(s){switch(s.type){case"vertex":{const{objectId:t,target:e}=s,i=`${t}-vertex-${e.x}-${e.y}-${e.z??0}`;return N(i).toString()}case"edge":{const{objectId:t,start:e,end:i}=s,r=`${t}-edge-${e.x}-${e.y}-${e.z??0}-to-${i.x}-${i.y}-${i.z??0}`;return N(r).toString()}default:return""}}let I=class extends P{constructor(){super(...arguments),this.updating=!1,this._pending=[]}push(t,e){this._pending.push({promise:t,callback:e}),this._pending.length===1&&this._process()}_process(){if(!this._pending.length)return void(this.updating=!1);this.updating=!0;const t=this._pending[0];t.promise.then(e=>t.callback(e)).catch(()=>{}).then(()=>{this._pending.shift(),this._process()})}};h([d()],I.prototype,"updating",void 0),I=h([O("esri.core.AsyncSequence")],I);class Wt{constructor(t,e){this.data=t,this.resolution=e,this.state={type:u.CREATED},this.alive=!0}process(t){switch(this.state.type){case u.CREATED:return this.state=this._gotoFetchCount(this.state,t),this.state.task.promise.then(t.resume,t.resume);case u.FETCH_COUNT:break;case u.FETCHED_COUNT:return this.state=this._gotoFetchFeatures(this.state,t),this.state.task.promise.then(t.resume,t.resume);case u.FETCH_FEATURES:break;case u.FETCHED_FEATURES:this.state=this._goToDone(this.state,t);case u.DONE:}return null}get debugInfo(){return{data:this.data,featureCount:this._featureCount,state:this._stateToString}}get _featureCount(){switch(this.state.type){case u.CREATED:case u.FETCH_COUNT:return 0;case u.FETCHED_COUNT:return this.state.featureCount;case u.FETCH_FEATURES:return this.state.previous.featureCount;case u.FETCHED_FEATURES:return this.state.features.length;case u.DONE:return this.state.previous.features.length}}get _stateToString(){switch(this.state.type){case u.CREATED:return"created";case u.FETCH_COUNT:return"fetch-count";case u.FETCHED_COUNT:return"fetched-count";case u.FETCH_FEATURES:return"fetch-features";case u.FETCHED_FEATURES:return"fetched-features";case u.DONE:return"done"}}_gotoFetchCount(t,e){return{type:u.FETCH_COUNT,previous:t,task:A(async i=>{const r=await M(e.fetchCount(this,i));this.state.type===u.FETCH_COUNT&&(this.state=this._gotoFetchedCount(this.state,r.ok?r.value:1/0))})}}_gotoFetchedCount(t,e){return{type:u.FETCHED_COUNT,featureCount:e,previous:t}}_gotoFetchFeatures(t,e){return{type:u.FETCH_FEATURES,previous:t,task:A(async i=>{const r=await M(e.fetchFeatures(this,t.featureCount,i));this.state.type===u.FETCH_FEATURES&&(this.state=this._gotoFetchedFeatures(this.state,r.ok?r.value:[]))})}}_gotoFetchedFeatures(t,e){return{type:u.FETCHED_FEATURES,previous:t,features:e}}_goToDone(t,e){return e.finish(this,t.features),{type:u.DONE,previous:t}}reset(){const t=this.state;switch(this.state={type:u.CREATED},t.type){case u.CREATED:case u.FETCHED_COUNT:case u.FETCHED_FEATURES:case u.DONE:break;case u.FETCH_COUNT:case u.FETCH_FEATURES:t.task.abort()}}intersects(t){return t==null||!this.data.extent||(z(t,Z),j(this.data.extent,Z))}}var u;(function(s){s[s.CREATED=0]="CREATED",s[s.FETCH_COUNT=1]="FETCH_COUNT",s[s.FETCHED_COUNT=2]="FETCHED_COUNT",s[s.FETCH_FEATURES=3]="FETCH_FEATURES",s[s.FETCHED_FEATURES=4]="FETCHED_FEATURES",s[s.DONE=5]="DONE"})(u||(u={}));const Z=X();let f=class extends P{get _minimumVerticesPerFeature(){var t;switch((t=this.store)==null?void 0:t.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}get _mandatoryOutFields(){const t=new Set;return this.objectIdField&&t.add(this.objectIdField),this.globalIdField&&t.add(this.globalIdField),t}set outFields(t){const e=this._get("outFields"),i=U(t,this._mandatoryOutFields);nt(i,e)||(this._set("outFields",i),$(i,e)||this.refresh())}get outFields(){return this._get("outFields")??this._mandatoryOutFields}set filter(t){const e=this._get("filter"),i=this._filterProperties(t);JSON.stringify(e)!==JSON.stringify(i)&&this._set("filter",i)}set customParameters(t){const e=this._get("customParameters");JSON.stringify(e)!==JSON.stringify(t)&&this._set("customParameters",t)}get _configuration(){return{filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}set tileInfo(t){const e=this._get("tileInfo");e!==t&&(t!=null&&e!=null&&JSON.stringify(t)===JSON.stringify(e)||(this._set("tileInfo",t),this.store.tileInfo=t))}set tileSize(t){this._get("tileSize")!==t&&this._set("tileSize",t)}get updating(){return this.updatingExcludingEdits||this._pendingEdits.updating}get updatingExcludingEdits(){return this._updatingHandles.updating}get hasZ(){return this.store.featureStore.hasZ}constructor(t){super(t),this.suspended=!0,this.tilesOfInterest=[],this.availability=0,this._pendingTiles=new Map,this._updatingHandles=new R,this._pendingEdits=new I,this._pendingEditsAbortController=new AbortController}initialize(){this._initializeFetchExtent(),this._updatingHandles.add(()=>this._configuration,()=>this.refresh()),this._updatingHandles.add(()=>this.tilesOfInterest,(t,e)=>{at(t,e,({id:i},{id:r})=>i===r)||this._process()},tt),this.addHandles(ot(()=>!this.suspended,()=>this._process()))}destroy(){this._pendingTiles.forEach(t=>this._deletePendingTile(t)),this._pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this._pendingEditsAbortController.abort(),this._pendingEditsAbortController=null,this._updatingHandles.destroy()}refresh(){this.store.refresh(),this._pendingTiles.forEach(t=>this._deletePendingTile(t)),this._process()}applyEdits(t){this._pendingEdits.push(t,async e=>{if(e.addedFeatures.length===0&&e.updatedFeatures.length===0&&e.deletedFeatures.length===0)return;for(const[,r]of this._pendingTiles)r.reset();const i={...e,deletedFeatures:e.deletedFeatures.map(({objectId:r,globalId:n})=>r&&r!==-1?r:this._lookupObjectIdByGlobalId(n))};await this._updatingHandles.addPromise(this.store.processEdits(i,(r,n)=>this._queryFeaturesById(r,n),this._pendingEditsAbortController.signal)),this._processPendingTiles()})}_initializeFetchExtent(){if(!this.capabilities.query.supportsExtent||!lt(this.url))return;const t=A(async e=>{var i;try{const r=await wt(this.url,new S({where:"1=1",outSpatialReference:this.spatialReference,cacheHint:this.capabilities.query.supportsCacheHint??void 0}),{query:this._configuration.customParameters,signal:e});this.store.extent=ut.fromJSON((i=r.data)==null?void 0:i.extent)}catch(r){ct(r),ht.getLogger(this).warn("Failed to fetch data extent",r)}});this._updatingHandles.addPromise(t.promise.then(()=>this._process())),this.addHandles(dt(()=>t.abort()))}get debugInfo(){return{numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this._pendingTiles.values()).map(t=>t.debugInfo),storedTiles:this.store.debugInfo}}_process(){this._markTilesNotAlive(),this._createPendingTiles(),this._deletePendingTiles(),this._processPendingTiles()}_markTilesNotAlive(){for(const[,t]of this._pendingTiles)t.alive=!1}_createPendingTiles(){if(this.suspended)return;const t=this._collectMissingTilesInfo();if(this._setAvailability(t==null?1:t.coveredArea/t.fullArea),t!=null)for(const{data:e,resolution:i}of t.missingTiles){const r=this._pendingTiles.get(e.id);r?(r.resolution=i,r.alive=!0):this._createPendingTile(e,i)}}_collectMissingTilesInfo(){let t=null;for(let e=this.tilesOfInterest.length-1;e>=0;e--){const i=this.tilesOfInterest[e],r=this.store.process(i,(n,a)=>this._verifyTileComplexity(n,a),this.outFields);t==null?t=r:t.prepend(r)}return t}_deletePendingTiles(){for(const[,t]of this._pendingTiles)t.alive||this._deletePendingTile(t)}_processPendingTiles(){const t={fetchCount:(e,i)=>this._fetchCount(e,i),fetchFeatures:(e,i,r)=>this._fetchFeatures(e,i,r),finish:(e,i)=>this._finishPendingTile(e,i),resume:()=>this._processPendingTiles()};if(this._ensureFetchAllCounts(t))for(const[,e]of this._pendingTiles)this._verifyTileComplexity(this.store.getFeatureCount(e.data),e.resolution)&&this._updatingHandles.addPromise(e.process(t))}_verifyTileComplexity(t,e){return this._verifyVertexComplexity(t)&&this._verifyFeatureDensity(t,e)}_verifyVertexComplexity(t){return t*this._minimumVerticesPerFeature<Kt}_verifyFeatureDensity(t,e){if(this.tileInfo==null)return!1;const i=this.tileSize*e;return t*(Yt/(i*i))<Xt}_ensureFetchAllCounts(t){let e=!0;for(const[,i]of this._pendingTiles)i.state.type<u.FETCHED_COUNT&&this._updatingHandles.addPromise(i.process(t)),i.state.type<=u.FETCH_COUNT&&(e=!1);return e}_finishPendingTile(t,e){this.store.add(t.data,e),this._deletePendingTile(t),this._updateAvailability()}_updateAvailability(){const t=this._collectMissingTilesInfo();this._setAvailability(t==null?1:t.coveredArea/t.fullArea)}_setAvailability(t){this._set("availability",t)}_createPendingTile(t,e){const i=new Wt(t,e);return this._pendingTiles.set(t.id,i),i}_deletePendingTile(t){t.reset(),this._pendingTiles.delete(t.data.id)}async _fetchCount(t,e){return this.store.fetchCount(t.data,this.url,this._createCountQuery(t),{query:this.customParameters,timeout:x,signal:e})}async _fetchFeatures(t,e,i){let r=0;const n=[];let a=0,o=e;for(;;){const l=this._createFeaturesQuery(t),c=this._setPagingParameters(l,r,o),{features:p,exceededTransferLimit:g}=await this._queryFeatures(l,i);c&&(r+=l.num),a+=p.length;for(const _ of p)n.push(_);if(o=e-a,!c||!g||o<=0)return n}}_filterProperties(t){return t==null?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:t.where||"1=1",timeExtent:t.timeExtent,gdbVersion:t.gdbVersion}}_lookupObjectIdByGlobalId(t){const e=this.globalIdField,i=this.objectIdField;if(e==null)throw new Error("Expected globalIdField to be defined");let r=null;if(this.store.featureStore.forEach(n=>{t===n.attributes[e]&&(r=n.objectId??n.attributes[i])}),r==null)throw new Error(`Expected to find a feature with globalId ${t}`);return r}_queryFeaturesById(t,e){const i=this._createFeaturesQuery();return i.objectIds=t,this._queryFeatures(i,e)}_queryFeatures(t,e){return this.capabilities.query.supportsFormatPBF?this._queryFeaturesPBF(t,e):this._queryFeaturesJSON(t,e)}async _queryFeaturesPBF(t,e){const{sourceSpatialReference:i}=this,{data:r}=await Ot(this.url,t,new It({sourceSpatialReference:i}),{query:this._configuration.customParameters,timeout:x,signal:e});return bt(r)}async _queryFeaturesJSON(t,e){const{sourceSpatialReference:i}=this,{data:r}=await xt(this.url,t,i,{query:this._configuration.customParameters,timeout:x,signal:e});return vt(r,this.objectIdField)}_createCountQuery(t){const e=this._createBaseQuery(t);return this.capabilities.query.supportsCacheHint&&(e.cacheHint=!0),e}_createFeaturesQuery(t=null){var n;const e=this._createBaseQuery(t),i=(t==null?void 0:t.data)!=null?this.store.getAttributesForTile((n=t==null?void 0:t.data)==null?void 0:n.id):null,r=U(pt(this.outFields,i??new Set),this._mandatoryOutFields);return e.outFields=Array.from(r),e.returnGeometry=!0,t!=null&&(this.capabilities.query.supportsResultType?e.resultType="tile":this.capabilities.query.supportsCacheHint&&(e.cacheHint=!0)),e}_createBaseQuery(t){const e=new S({returnZ:this.hasZ,returnM:!1,geometry:this.tileInfo!=null&&t!=null?ft(t.data.extent,this.tileInfo.spatialReference):void 0}),i=this._configuration.filter;return i!=null&&(e.where=i.where,e.gdbVersion=i.gdbVersion,e.timeExtent=i.timeExtent),e.outSpatialReference=this.spatialReference,e}_setPagingParameters(t,e,i){if(!this.capabilities.query.supportsPagination)return!1;const{supportsMaxRecordCountFactor:r,supportsCacheHint:n,tileMaxRecordCount:a,maxRecordCount:o,supportsResultType:l}=this.capabilities.query,c=r?S.MAX_MAX_RECORD_COUNT_FACTOR:1,p=c*((l||n)&&a?a:o||Zt);return t.start=e,r?(t.maxRecordCountFactor=Math.min(c,Math.ceil(i/p)),t.num=Math.min(i,t.maxRecordCountFactor*p)):t.num=Math.min(i,p),!0}};h([d({constructOnly:!0})],f.prototype,"url",void 0),h([d({constructOnly:!0})],f.prototype,"objectIdField",void 0),h([d({constructOnly:!0})],f.prototype,"globalIdField",void 0),h([d({constructOnly:!0})],f.prototype,"capabilities",void 0),h([d({constructOnly:!0})],f.prototype,"sourceSpatialReference",void 0),h([d({constructOnly:!0})],f.prototype,"spatialReference",void 0),h([d({constructOnly:!0})],f.prototype,"store",void 0),h([d({readOnly:!0})],f.prototype,"_minimumVerticesPerFeature",null),h([d()],f.prototype,"_mandatoryOutFields",null),h([d()],f.prototype,"outFields",null),h([d()],f.prototype,"suspended",void 0),h([d()],f.prototype,"filter",null),h([d()],f.prototype,"customParameters",null),h([d({readOnly:!0})],f.prototype,"_configuration",null),h([d()],f.prototype,"tileInfo",null),h([d()],f.prototype,"tileSize",null),h([d()],f.prototype,"tilesOfInterest",void 0),h([d({readOnly:!0})],f.prototype,"updating",null),h([d({readOnly:!0})],f.prototype,"updatingExcludingEdits",null),h([d({readOnly:!0})],f.prototype,"availability",void 0),h([d()],f.prototype,"hasZ",null),f=h([O("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],f);const Zt=2e3,x=6e5,Kt=1e6,Yt=25,Xt=1;class te{constructor(){this._store=new Map,this._byteSize=0}set(t,e){this.delete(t),this._store.set(t,e),this._byteSize+=e.byteSize}delete(t){const e=this._store.get(t);return!!this._store.delete(t)&&(e!=null&&(this._byteSize-=e.byteSize),!0)}get(t){return this._used(t),this._store.get(t)}has(t){return this._used(t),this._store.has(t)}clear(){this._store.clear()}applyByteSizeLimit(t,e){for(const[i,r]of this._store){if(this._byteSize<=t)break;this.delete(i),e(r)}}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}_used(t){const e=this._store.get(t);e&&(this._store.delete(t),this._store.set(t,e))}}let E=class extends P{constructor(s){super(s),this.tileInfo=null,this.extent=null,this.maximumByteSize=10*$t.MEGABYTES,this._tileBounds=new Rt,this._tiles=new te,this._refCounts=new Map,this._tileFeatureCounts=new Map,this._tmpBoundingRect=X()}add(s,t){var r;for(const n of t)this._referenceFeature(n.objectId);const e=this.featureStore.upsertMany(t),i=e.map(n=>new Set(Object.keys(n.attributes))).reduce((n,a)=>q(n,a),new Set(Object.keys(((r=e[0])==null?void 0:r.attributes)??[])));this._addTileStorage(s,new Set(e.map(n=>n.objectId)),ee(e),i),this._tiles.applyByteSizeLimit(this.maximumByteSize,n=>this._removeTileStorage(n))}getAttributesForTile(s){var t;return s?(t=this._tiles.get(s))==null?void 0:t.attributeKeys:null}destroy(){this.clear(),this._tileFeatureCounts.clear()}clear(){this.featureStore.clear(),this._tileBounds.clear(),this._tiles.clear(),this._refCounts.clear()}refresh(){this.clear(),this._tileFeatureCounts.clear()}processEdits(s,t,e){return this._processEditsDelete(s.deletedFeatures.concat(s.updatedFeatures)),this._processEditsRefetch(s.addedFeatures.concat(s.updatedFeatures),t,e)}_addTileStorage(s,t,e,i){const r=s.id;this._tiles.set(r,new re(s,t,e,i)),this._tileBounds.set(r,s.extent),this._tileFeatureCounts.set(r,t.size)}_remove({id:s}){const t=this._tiles.get(s);t&&this._removeTileStorage(t)}_removeTileStorage(s){const t=[];for(const i of s.objectIds)this._unreferenceFeature(i)===C.REMOVED&&t.push(i);this.featureStore.removeManyById(t);const e=s.data.id;this._tiles.delete(e),this._tileBounds.delete(e)}_processEditsDelete(s){this.featureStore.removeManyById(s);for(const[,t]of this._tiles){for(const e of s)t.objectIds.delete(e);this._tileFeatureCounts.set(t.data.id,t.objectIds.size)}for(const t of s)this._refCounts.delete(t)}async _processEditsRefetch(s,t,e){const i=(await t(s,e)).features,{hasZ:r,hasM:n}=this.featureStore;for(const a of i){const o=St(this._tmpBoundingRect,a.geometry,r,n);o!=null&&this._tileBounds.forEachInBounds(o,l=>{const c=this._tiles.get(l);this.featureStore.add(a);const p=a.objectId;c.objectIds.has(p)||(c.objectIds.add(p),this._referenceFeature(p),this._tileFeatureCounts.set(c.data.id,c.objectIds.size))})}}process(s,t=()=>!0,e){if(this.tileInfo==null||!s.extent||this.extent!=null&&!j(z(this.extent,this._tmpBoundingRect),s.extent))return new H(s);const i=this.getAttributesForTile(s.id);if($(e,i))return new H(s);const r=this._createTileTree(s,this.tileInfo);return this._simplify(r,t,null,0,1),this._collectMissingTiles(s,r,this.tileInfo,e)}get debugInfo(){return Array.from(this._tiles.values()).map(({data:s})=>({data:s,featureCount:this._tileFeatureCounts.get(s.id)||0}))}getFeatureCount(s){return this._tileFeatureCounts.get(s.id)??0}async fetchCount(s,t,e,i){const r=this._tileFeatureCounts.get(s.id);if(r!=null)return r;const n=await At(t,e,i);return this._tileFeatureCounts.set(s.id,n.data.count),n.data.count}_createTileTree(s,t){const e=new K(s.level,s.row,s.col);return t.updateTileInfo(e,w.ExtrapolateOptions.POWER_OF_TWO),this._tileBounds.forEachInBounds(s.extent,i=>{var n;const r=(n=this._tiles.get(i))==null?void 0:n.data;r&&this._tilesAreRelated(s,r)&&this._populateChildren(e,r,t,this._tileFeatureCounts.get(r.id)||0)}),e}_tilesAreRelated(s,t){if(!s||!t)return!1;if(s.level===t.level)return s.row===t.row&&s.col===t.col;const e=s.level<t.level,i=e?s:t,r=e?t:s,n=1<<r.level-i.level;return Math.floor(r.row/n)===i.row&&Math.floor(r.col/n)===i.col}_populateChildren(s,t,e,i){const r=t.level-s.level-1;if(r<0)return void(s.isLeaf=!0);const n=t.row>>r,a=t.col>>r,o=s.row<<1,l=a-(s.col<<1)+(n-o<<1),c=s.children[l];if(c!=null)this._populateChildren(c,t,e,i);else{const p=new K(s.level+1,n,a);e.updateTileInfo(p,w.ExtrapolateOptions.POWER_OF_TWO),s.children[l]=p,this._populateChildren(p,t,e,i)}}_simplify(s,t,e,i,r){const n=r*r;if(s.isLeaf)return t(this.getFeatureCount(s),r)?0:(this._remove(s),e!=null&&(e.children[i]=null),n);const a=r/2,o=a*a;let l=0;for(let c=0;c<s.children.length;c++){const p=s.children[c];l+=p!=null?this._simplify(p,t,s,c,a):o}return l===0?this._mergeChildren(s):1-l/n<ae&&(this._purge(s),e!=null&&(e.children[i]=null),l=n),l}_mergeChildren(s){const t=new Set;let e,i=0;this._forEachLeaf(s,r=>{const n=this._tiles.get(r.id);if(n){e=e?q(e,n.attributeKeys):new Set(n.attributeKeys),i+=n.byteSize;for(const a of n.objectIds)t.has(a)||(t.add(a),this._referenceFeature(a));this._remove(r)}}),this._addTileStorage(s,t,i,e??new Set),s.isLeaf=!0,s.children[0]=s.children[1]=s.children[2]=s.children[3]=null,this._tileFeatureCounts.set(s.id,t.size)}_forEachLeaf(s,t){for(const e of s.children)e!=null&&(e.isLeaf?t(e):this._forEachLeaf(e,t))}_purge(s){if(s!=null)if(s.isLeaf)this._remove(s);else for(let t=0;t<s.children.length;t++){const e=s.children[t];this._purge(e),s.children[t]=null}}_collectMissingTiles(s,t,e,i){const r=new ne(e,s,this.extent);return this._collectMissingTilesRecurse(t,r,1,i),r.info}_collectMissingTilesRecurse(s,t,e,i){const r=this.getAttributesForTile(s.id),n=r&&!$(i,r);if(n&&t.addMissing(s.level,s.row,s.col,e),s.isLeaf)return;if(!s.hasChildren)return void(n||t.addMissing(s.level,s.row,s.col,e));const a=e/2;for(let o=0;o<s.children.length;o++){const l=s.children[o];l==null?t.addMissing(s.level+1,(s.row<<1)+((2&o)>>1),(s.col<<1)+(1&o),a):this._collectMissingTilesRecurse(l,t,a,i)}}_referenceFeature(s){const t=(this._refCounts.get(s)||0)+1;return this._refCounts.set(s,t),t===1?C.ADDED:C.UNCHANGED}_unreferenceFeature(s){const t=(this._refCounts.get(s)||0)-1;return t===0?(this._refCounts.delete(s),C.REMOVED):(t>0&&this._refCounts.set(s,t),C.UNCHANGED)}get test(){return{tiles:Array.from(this._tiles.values()).map(s=>`${s.data.id}:[${Array.from(s.objectIds)}]`),featureReferences:Array.from(this._refCounts.keys()).map(s=>`${s}:${this._refCounts.get(s)}`)}}};function ee(s){return s.reduce((t,e)=>t+se(e),0)}function se(s){return 32+ie(s.geometry)+_t(s.attributes)}function ie(s){if(s==null)return 0;const t=B(s.lengths,4);return 32+B(s.coords,8)+t}h([d({constructOnly:!0})],E.prototype,"featureStore",void 0),h([d()],E.prototype,"tileInfo",void 0),h([d()],E.prototype,"extent",void 0),h([d()],E.prototype,"maximumByteSize",void 0),E=h([O("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],E);class re{constructor(t,e,i,r){this.data=t,this.objectIds=e,this.byteSize=i,this.attributeKeys=r}}let K=class{constructor(t,e,i){this.level=t,this.row=e,this.col=i,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null]}get hasChildren(){return!this.isLeaf&&(this.children[0]!=null||this.children[1]!=null||this.children[2]!=null||this.children[3]!=null)}};class H{constructor(t,e=[]){this.missingTiles=e,this.fullArea=0,this.coveredArea=0,this.fullArea=et(t.extent),this.coveredArea=this.fullArea}prepend(t){this.missingTiles=t.missingTiles.concat(this.missingTiles),this.coveredArea+=t.coveredArea,this.fullArea+=t.fullArea}}let ne=class{constructor(t,e,i){this._tileInfo=t,this._extent=null,this.info=new H(e),i!=null&&(this._extent=z(i))}addMissing(t,e,i,r){const n=new gt(null,t,e,i);this._tileInfo.updateTileInfo(n,w.ExtrapolateOptions.POWER_OF_TWO),n.extent==null||this._extent!=null&&!j(this._extent,n.extent)||(this.info.missingTiles.push({data:n,resolution:r}),this.info.coveredArea-=et(n.extent))}};const ae=.18751;var C;(function(s){s[s.ADDED=0]="ADDED",s[s.REMOVED=1]="REMOVED",s[s.UNCHANGED=2]="UNCHANGED"})(C||(C={}));let T=class extends yt.EventedAccessor{constructor(){super(...arguments),this._isInitializing=!0,this.remoteClient=null,this._whenSetup=k(),this._elevationAligner=J(),this._elevationFilter=L(),this._symbologyCandidatesFetcher=Q(),this._updatingHandles=new R,this._editsUpdatingHandles=new R,this._pendingApplyEdits=new Map,this._alignPointsInFeatures=async(s,t)=>{const e={query:s},i=await this.remoteClient.invoke("alignElevation",e,{signal:t});return y(t),i},this._getSymbologyCandidates=async(s,t)=>{const e={candidates:s,spatialReference:this._spatialReference.toJSON()},i=await this.remoteClient.invoke("getSymbologyCandidates",e,{signal:t});return y(t),i}}get updating(){return this.updatingExcludingEdits||this._editsUpdatingHandles.updating||this._featureFetcher.updating}get updatingExcludingEdits(){return this._featureFetcher.updatingExcludingEdits||this._isInitializing||this._updatingHandles.updating}destroy(){var s,t,e;(s=this._featureFetcher)==null||s.destroy(),(t=this._queryEngine)==null||t.destroy(),(e=this._featureStore)==null||e.clear()}async setup(s){if(this.destroyed)return{result:{}};const{geometryType:t,objectIdField:e,timeInfo:i,fieldsIndex:r}=s.serviceInfo,{hasZ:n}=s,a=v.fromJSON(s.spatialReference);this._spatialReference=a,this._featureStore=new Ct({...s.serviceInfo,hasZ:n,hasM:!1}),this._queryEngine=new Tt({spatialReference:s.spatialReference,featureStore:this._featureStore,geometryType:t,fieldsIndex:r,hasZ:n,hasM:!1,objectIdField:e,timeInfo:i}),this._featureFetcher=new f({store:new E({featureStore:this._featureStore}),url:s.serviceInfo.url,objectIdField:s.serviceInfo.objectIdField,globalIdField:s.serviceInfo.globalIdField,capabilities:s.serviceInfo.capabilities,spatialReference:a,sourceSpatialReference:v.fromJSON(s.serviceInfo.spatialReference)});const o=s.configuration.viewType==="3d";return this._elevationAligner=J(o,{elevationInfo:s.elevationInfo!=null?mt.fromJSON(s.elevationInfo):null,alignPointsInFeatures:this._alignPointsInFeatures}),this._elevationFilter=L(o),this.addHandles([V(()=>this._featureFetcher.availability,l=>this.emit("notify-availability",{availability:l}),tt),V(()=>this.updating,()=>this._notifyUpdating())]),this._whenSetup.resolve(),this._isInitializing=!1,this.configure(s.configuration)}async configure(s){return await this._updatingHandles.addPromise(this._whenSetup.promise),this._updateFeatureFetcherConfiguration(s),F}async setSuspended(s,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),y(t),this._featureFetcher.suspended=s,F}async updateOutFields(s,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),y(t),this._featureFetcher.outFields=new Set(s??[]),F}async fetchCandidates(s,t){await this._whenSetup.promise,y(t);const e=oe(s),i=t==null?void 0:t.signal,r=await this._queryEngine.executeQueryForSnapping(e,i);y(i);const n=await this._elevationAligner.alignCandidates(r.candidates,v.fromJSON(s.point.spatialReference)??v.WGS84,i);y(i);const a=await this._symbologyCandidatesFetcher.fetch(n,i);y(i);const o=a.length===0?n:n.concat(a);return{result:{candidates:this._elevationFilter.filter(e,o)}}}async updateTiles(s,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),y(t),this._featureFetcher.tileSize=s.tileSize,this._featureFetcher.tilesOfInterest=s.tiles,this._featureFetcher.tileInfo=s.tileInfo!=null?w.fromJSON(s.tileInfo):null,F}async refresh(s,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),y(t),this._featureFetcher.refresh(),F}async whenNotUpdating(s,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),y(t),await Ft(()=>!this.updatingExcludingEdits,t),y(t),F}async getDebugInfo(s,t){return y(t),{result:this._featureFetcher.debugInfo}}async beginApplyEdits(s,t){this._updatingHandles.addPromise(this._whenSetup.promise),y(t);const e=k();return this._pendingApplyEdits.set(s.id,e),this._featureFetcher.applyEdits(e.promise),this._editsUpdatingHandles.addPromise(e.promise),F}async endApplyEdits(s,t){const e=this._pendingApplyEdits.get(s.id);return e&&e.resolve(s.edits),y(t),F}async notifyElevationSourceChange(s,t){return this._elevationAligner.notifyElevationSourceChange(),F}async notifySymbologyChange(s,t){return this._symbologyCandidatesFetcher.notifySymbologyChange(),F}async setSymbologySnappingSupported(s){return this._symbologyCandidatesFetcher=Q(s,this._getSymbologyCandidates),F}_updateFeatureFetcherConfiguration(s){this._featureFetcher.filter=s.filter!=null?S.fromJSON(s.filter):null,this._featureFetcher.customParameters=s.customParameters}_notifyUpdating(){this.emit("notify-updating",{updating:this.updating})}};h([d({readOnly:!0})],T.prototype,"updating",null),h([d({readOnly:!0})],T.prototype,"updatingExcludingEdits",null),h([d()],T.prototype,"_isInitializing",void 0),T=h([O("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],T);const Me=T;function oe(s){if(!s.filter)return{...s,query:{where:"1=1"}};const{distance:t,units:e,spatialRel:i,where:r,timeExtent:n,objectIds:a}=s.filter,o={geometry:s.filter.geometry?Et(s.filter.geometry):void 0,distance:t,units:e,spatialRel:i,timeExtent:n,objectIds:a,where:r??"1=1"};return{...s,query:o}}const F={result:{}};export{Me as default};
