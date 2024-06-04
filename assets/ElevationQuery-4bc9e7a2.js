import{E as Y,b1 as D,e7 as U,ae as W,B as H,bk as g,hX as K,cJ as ee,s as d,au as I,bj as $,fa as te,a3 as L,f7 as A,bF as O,fE as Q,aO as ne,bd as q,bc as ie,hY as Z}from"./index-c43fbcbe.js";const M=Y.getLogger("esri.layers.support.ElevationSampler");class B{queryElevation(e){return le(e.clone(),this)}on(){return H()}projectIfRequired(e,t){return J(e,t)}}class se extends B{get spatialReference(){return this.extent.spatialReference}constructor(e,t,n){super(),this.tile=e,this.noDataValue=n;const i=e.tile.extent;this.extent=U(i,t.spatialReference),this.extent.zmin=e.zmin,this.extent.zmax=e.zmax,this._aaExtent=i;const s=g(t.spatialReference),l=t.lodAt(e.tile.level).resolution*s;this.demResolution={min:l,max:l}}contains(e){const t=this.projectIfRequired(e,this.spatialReference);return t!=null&&this.containsAt(t.x,t.y)}containsAt(e,t){return K(this._aaExtent,e,t)}elevationAt(e,t){if(!this.containsAt(e,t)){const n=this.extent,i=`${n.xmin}, ${n.ymin}, ${n.xmax}, ${n.ymax}`;return M.warn("#elevationAt()",`Point used to sample elevation (${e}, ${t}) is outside of the sampler extent (${i})`),this.noDataValue}return this.tile.sample(e,t)??this.noDataValue}}class G extends B{get spatialReference(){return this.extent.spatialReference}constructor(e,t,n){let i;super(),typeof t=="number"?(this.noDataValue=t,i=null):(i=t,this.noDataValue=n),this.samplers=i?e.map(l=>new se(l,i,this.noDataValue)):e;const s=this.samplers[0];if(s){this.extent=s.extent.clone();const{min:l,max:o}=s.demResolution;this.demResolution={min:l,max:o};for(let a=1;a<this.samplers.length;a++){const r=this.samplers[a];this.extent.union(r.extent),this.demResolution.min=Math.min(this.demResolution.min,r.demResolution.min),this.demResolution.max=Math.max(this.demResolution.max,r.demResolution.max)}}else this.extent=U(W(),i.spatialReference),this.demResolution={min:0,max:0}}elevationAt(e,t){for(const n of this.samplers)if(n.containsAt(e,t))return n.elevationAt(e,t);return M.warn("#elevationAt()",`Point used to sample elevation (${e}, ${t}) is outside of the sampler`),this.noDataValue}}function le(c,e){const t=J(c,e.spatialReference);if(!t)return null;switch(c.type){case"point":ae(c,t,e);break;case"polyline":oe(c,t,e);break;case"multipoint":re(c,t,e)}return c}function J(c,e){if(c==null)return null;const t=c.spatialReference;if(t.equals(e))return c;const n=ee(c,e);return n||M.error(`Cannot project geometry spatial reference (wkid:${t.wkid}) to elevation sampler spatial reference (wkid:${e.wkid})`),n}function ae(c,e,t){c.z=t.elevationAt(e.x,e.y)}function oe(c,e,t){y.spatialReference=e.spatialReference;const n=c.hasM&&!c.hasZ;for(let i=0;i<c.paths.length;i++){const s=c.paths[i],l=e.paths[i];for(let o=0;o<s.length;o++){const a=s[o],r=l[o];y.x=r[0],y.y=r[1],n&&(a[3]=a[2]),a[2]=t.elevationAt(y.x,y.y)}}c.hasZ=!0}function re(c,e,t){y.spatialReference=e.spatialReference;const n=c.hasM&&!c.hasZ;for(let i=0;i<c.points.length;i++){const s=c.points[i],l=e.points[i];y.x=l[0],y.y=l[1],n&&(s[3]=s[2]),s[2]=t.elevationAt(y.x,y.y)}c.hasZ=!0}const y=new D;let ce=class{constructor(e,t){this.data=e,this.safeWidth=.99999999*(e.width-1),this.dx=(e.width-1)/(t[2]-t[0]),this.dy=(e.width-1)/(t[3]-t[1]),this.x0=t[0],this.y1=t[3]}};class P{constructor(e,t=null){if(this.tile=e,t!=null&&e!=null){const n=e.extent;this._samplerData=new ce(t,n)}}get zmin(){return this._samplerData!=null?this._samplerData.data.minValue:0}get zmax(){return this._samplerData!=null?this._samplerData.data.maxValue:0}sample(e,t){if(this._samplerData==null)return;const{safeWidth:n,data:i,dx:s,dy:l,y1:o,x0:a}=this._samplerData,{width:r,values:u,noDataValue:m}=i,p=j(l*(o-t),0,n),h=j(s*(e-a),0,n),v=Math.floor(p),F=Math.floor(h),_=v*r+F,b=_+r,R=u[_],E=u[b],z=u[_+1],S=u[b+1];if(R!==m&&E!==m&&z!==m&&S!==m){const V=h-F,k=R+(z-R)*V;return k+(E+(S-E)*V-k)*(p-v)}}}function j(c,e,t){return c<e?e:c>t?t:c}class fe{async queryAll(e,t,n){if(!(e=n&&n.ignoreInvisibleLayers?e.filter(r=>r.visible):e.slice()).length)throw new d("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const i=x.fromGeometry(t);let s=!1;n&&n.returnSampleInfo||(s=!0);const l={...w,...n,returnSampleInfo:!0},o=await this.query(e[e.length-1],i,l),a=await this._queryAllContinue(e,o,l);return a.geometry=a.geometry.export(),s&&delete a.sampleInfo,a}async query(e,t,n){if(!e)throw new d("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||!(t instanceof x)&&t.type!=="point"&&t.type!=="multipoint"&&t.type!=="polyline")throw new d("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const i={...w,...n},s=new ue(e,t.spatialReference,i),l=i.signal;return await e.load({signal:l}),await this._createGeometryDescriptor(s,t,l),await this._selectTiles(s,l),await this._populateElevationTiles(s,l),this._sampleGeometryWithElevation(s),this._createQueryResult(s,l)}async createSampler(e,t,n){if(!e)throw new d("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||t.type!=="extent")throw new d("elevation-query:invalid-extent","Invalid or undefined extent");const i={...w,...n};return this._createSampler(e,t,i)}async createSamplerAll(e,t,n){if(!(e=n&&n.ignoreInvisibleLayers?e.filter(l=>l.visible):e.slice()).length)throw new d("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!t||t.type!=="extent")throw new d("elevation-query:invalid-extent","Invalid or undefined extent");const i={...w,...n,returnSampleInfo:!0},s=await this._createSampler(e[e.length-1],t,i);return this._createSamplerAllContinue(e,t,s,i)}async _createSampler(e,t,n,i){const s=n.signal;await e.load({signal:s});const l=t.spatialReference,o=e.tileInfo.spatialReference;l.equals(o)||(await I([{source:l,dest:o}],{signal:s}),t=$(t,o));const a=new he(e,t,n,i);return await this._selectTiles(a,s),await this._populateElevationTiles(a,s),new G(a.elevationTiles,a.layer.tileInfo,a.options.noDataValue)}async _createSamplerAllContinue(e,t,n,i){if(e.pop(),!e.length)return n;const s=n.samplers.map(r=>te(r.extent)),l=await this._createSampler(e[e.length-1],t,i,s);if(l.samplers.length===0)return n;const o=n.samplers.concat(l.samplers),a=new G(o,i.noDataValue);return this._createSamplerAllContinue(e,t,a,i)}async _queryAllContinue(e,t,n){const i=e.pop(),s=t.geometry.coordinates,l=t.sampleInfo;L(l);const o=[],a=[];for(let p=0;p<s.length;p++){const h=l[p];h.demResolution>=0?h.source||(h.source=i):e.length&&(o.push(s[p]),a.push(p))}if(!e.length||o.length===0)return t;const r=t.geometry.clone(o),u=await this.query(e[e.length-1],r,n),m=u.sampleInfo;if(!m)throw new Error("no sampleInfo");return a.forEach((p,h)=>{s[p].z=u.geometry.coordinates[h].z,l[p].demResolution=m[h].demResolution}),this._queryAllContinue(e,t,n)}async _createQueryResult(e,t){const n=await e.geometry.project(e.outSpatialReference,t);L(n);const i={geometry:n.export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(i.sampleInfo=this._extractSampleInfo(e)),e.geometry.coordinates.forEach(s=>{s.tile=null,s.elevationTile=null}),i}async _createGeometryDescriptor(e,t,n){let i;const s=e.layer.tileInfo.spatialReference;if(t instanceof x?i=await t.project(s,n):(await I([{source:t.spatialReference,dest:s}],{signal:n}),i=$(t,s)),!i)throw new d("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${t.spatialReference.wkid}' on an elevation service in '${s.wkid}'`);e.geometry=x.fromGeometry(i)}async _selectTiles(e,t){e.type==="geometry"&&this._preselectOutsideLayerExtent(e);const n=e.options.demResolution;if(typeof n=="number")this._selectTilesClosestResolution(e,n);else if(n==="finest-contiguous")await this._selectTilesFinestContiguous(e,t);else{if(n!=="auto")throw new d("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${n}', expected a number, "finest-contiguous" or "auto"`);await this._selectTilesAuto(e,t)}}_preselectOutsideLayerExtent(e){if(e.layer.fullExtent==null)return;const t=new P(null);t.sample=()=>e.options.noDataValue,e.outsideExtentTile=t;const n=e.layer.fullExtent;e.geometry.coordinates.forEach(i=>{const s=i.x,l=i.y;(s<n.xmin||s>n.xmax||l<n.ymin||l>n.ymax)&&(i.elevationTile=t)})}_selectTilesClosestResolution(e,t){const n=this._findNearestDemResolutionLODIndex(e,t);e.selectTilesAtLOD(n)}_findNearestDemResolutionLODIndex(e,t){const{tileInfo:n,tilemapCache:i}=e.layer,s=t/g(n.spatialReference),l=T(n,i);let o=l[0],a=0;for(let r=1;r<l.length;r++){const u=l[r];Math.abs(u.resolution-s)<Math.abs(o.resolution-s)&&(o=u,a=r)}return a}async _selectTilesFinestContiguous(e,t){const{tileInfo:n,tilemapCache:i}=e.layer,s=N(n,i,e.options.minDemResolution);await this._selectTilesFinestContiguousAt(e,s,t)}async _selectTilesFinestContiguousAt(e,t,n){const i=e.layer;if(e.selectTilesAtLOD(t),t<0)return;const s=i.tilemapCache,l=e.getTilesToFetch();try{if(s&&!C(s))await A(Promise.all(l.map(o=>s.fetchAvailability(o.level,o.row,o.col,{signal:n}))),n);else if(await this._populateElevationTiles(e,n),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new d("elevation-query:has-unavailable-tiles")}catch(o){O(o),await this._selectTilesFinestContiguousAt(e,t-1,n)}}async _populateElevationTiles(e,t){const n=e.getTilesToFetch(),i={},s=e.options.cache,l=e.options.noDataValue,o=n.map(async a=>{if(a.id==null)return;const r=`${e.layer.uid}:${a.id}:${l}`,u=s!=null?s.get(r):null,m=u??await e.layer.fetchTile(a.level,a.row,a.col,{noDataValue:l,signal:t});s!=null&&s.put(r,m),i[a.id]=new P(a,m)});await A(Promise.allSettled(o),t),e.populateElevationTiles(i)}async _selectTilesAuto(e,t){this._selectTilesAutoFinest(e),this._reduceTilesForMaximumRequests(e);const n=e.layer.tilemapCache;if(!n||C(n))return this._selectTilesAutoPrefetchUpsample(e,t);const i=e.getTilesToFetch(),s={},l=i.map(async o=>{const a=new Q(null,0,0,0,W()),r=await ne(n.fetchAvailabilityUpsample(o.level,o.row,o.col,a,{signal:t}));r.ok!==!1?o.id!=null&&(s[o.id]=a):O(r.error)});await A(Promise.all(l),t),e.remapTiles(s)}_reduceTilesForMaximumRequests(e){const t=e.layer.tileInfo;let n=0;const i={},s=a=>{a.id!=null&&(a.id in i?i[a.id]++:(i[a.id]=1,n++))},l=a=>{if(a.id==null)return;const r=i[a.id];r===1?(delete i[a.id],n--):i[a.id]=r-1};e.forEachTileToFetch(s,l);let o=!0;for(;o&&(o=!1,e.forEachTileToFetch(a=>{n<=e.options.maximumAutoTileRequests||(l(a),t.upsampleTile(a)&&(o=!0),s(a))},l),o););}_selectTilesAutoFinest(e){const{tileInfo:t,tilemapCache:n}=e.layer,i=N(t,n,e.options.minDemResolution);e.selectTilesAtLOD(i,e.options.maximumAutoTileRequests)}async _selectTilesAutoPrefetchUpsample(e,t){const n=e.layer.tileInfo;await this._populateElevationTiles(e,t);let i=!1;e.forEachTileToFetch((s,l)=>{n.upsampleTile(s)?i=!0:l()}),i&&await this._selectTilesAutoPrefetchUpsample(e,t)}_sampleGeometryWithElevation(e){e.geometry.coordinates.forEach(t=>{const n=t.elevationTile;let i=e.options.noDataValue;if(n){const s=n.sample(t.x,t.y);s!=null?i=s:t.elevationTile=null}t.z=i})}_extractSampleInfo(e){const t=e.layer.tileInfo,n=g(t.spatialReference);return e.geometry.coordinates.map(i=>{let s=-1;return i.elevationTile&&i.elevationTile!==e.outsideExtentTile&&(s=t.lodAt(i.elevationTile.tile.level).resolution*n),{demResolution:s}})}}class x{export(){return this._exporter(this.coordinates,this.spatialReference)}clone(e){const t=new x;return t.geometry=this.geometry,t.spatialReference=this.spatialReference,t.coordinates=e||this.coordinates.map(n=>n.clone()),t._exporter=this._exporter,t}async project(e,t){if(this.spatialReference.equals(e))return this.clone();await I([{source:this.spatialReference,dest:e}],{signal:t});const n=new q({spatialReference:this.spatialReference,points:this.coordinates.map(o=>[o.x,o.y])}),i=$(n,e);if(!i)return null;const s=this.coordinates.map((o,a)=>{const r=o.clone(),u=i.points[a];return r.x=u[0],r.y=u[1],r}),l=this.clone(s);return l.spatialReference=e,l}static fromGeometry(e){const t=new x;if(t.geometry=e,t.spatialReference=e.spatialReference,e instanceof x)t.coordinates=e.coordinates.map(n=>n.clone()),t._exporter=(n,i)=>{const s=e.clone(n);return s.spatialReference=i,s};else switch(e.type){case"point":{const n=e,{hasZ:i,hasM:s}=n;t.coordinates=i&&s?[new f(n.x,n.y,n.z,n.m)]:i?[new f(n.x,n.y,n.z)]:s?[new f(n.x,n.y,null,n.m)]:[new f(n.x,n.y)],t._exporter=(l,o)=>e.hasM?new D(l[0].x,l[0].y,l[0].z,l[0].m,o):new D(l[0].x,l[0].y,l[0].z,o);break}case"multipoint":{const n=e,{hasZ:i,hasM:s}=n;t.coordinates=i&&s?n.points.map(l=>new f(l[0],l[1],l[2],l[3])):i?n.points.map(l=>new f(l[0],l[1],l[2])):s?n.points.map(l=>new f(l[0],l[1],null,l[2])):n.points.map(l=>new f(l[0],l[1])),t._exporter=(l,o)=>e.hasM?new q({points:l.map(a=>[a.x,a.y,a.z,a.m]),hasZ:!0,hasM:!0,spatiaReference:o}):new q(l.map(a=>[a.x,a.y,a.z]),o);break}case"polyline":{const n=e,i=[],s=[],{hasZ:l,hasM:o}=e;let a=0;for(const r of n.paths)if(s.push([a,a+r.length]),a+=r.length,l&&o)for(const u of r)i.push(new f(u[0],u[1],u[2],u[3]));else if(l)for(const u of r)i.push(new f(u[0],u[1],u[2]));else if(o)for(const u of r)i.push(new f(u[0],u[1],null,u[2]));else for(const u of r)i.push(new f(u[0],u[1]));t.coordinates=i,t._exporter=(r,u)=>{const m=e.hasM?r.map(h=>[h.x,h.y,h.z,h.m]):r.map(h=>[h.x,h.y,h.z]),p=s.map(h=>m.slice(h[0],h[1]));return new ie({paths:p,hasM:e.hasM,hasZ:!0,spatialReference:u})};break}}return t}}class f{constructor(e,t,n=null,i=null,s=null,l=null){this.x=e,this.y=t,this.z=n,this.m=i,this.tile=s,this.elevationTile=l}clone(){return new f(this.x,this.y,this.z,this.m)}}class X{constructor(e,t){this.layer=e,this.options=t}}class ue extends X{constructor(e,t,n){super(e,n),this.outSpatialReference=t,this.type="geometry"}selectTilesAtLOD(e){if(e<0)this.geometry.coordinates.forEach(t=>t.tile=null);else{const{tileInfo:t,tilemapCache:n}=this.layer,i=T(t,n)[e].level;this.geometry.coordinates.forEach(s=>s.tile=t.tileAt(i,s.x,s.y))}}allElevationTilesFetched(){return!this.geometry.coordinates.some(e=>!e.elevationTile)}clearElevationTiles(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null)}populateElevationTiles(e){var t;for(const n of this.geometry.coordinates)!n.elevationTile&&((t=n.tile)!=null&&t.id)&&(n.elevationTile=e[n.tile.id])}remapTiles(e){var t;for(const n of this.geometry.coordinates){const i=(t=n.tile)==null?void 0:t.id;n.tile=i?e[i]:null}}getTilesToFetch(){var n;const e={},t=[];for(const i of this.geometry.coordinates){const s=i.tile;if(!s)continue;const l=(n=i.tile)==null?void 0:n.id;i.elevationTile||!l||e[l]||(e[l]=s,t.push(s))}return t}forEachTileToFetch(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,()=>{t.tile=null})}}class he extends X{constructor(e,t,n,i){super(e,n),this.type="extent",this.elevationTiles=[],this._candidateTiles=[],this._fetchedCandidates=new Set,this.extent=t.intersection(e.fullExtent),this.maskExtents=i}selectTilesAtLOD(e,t){const n=this._maximumLodForRequests(t),i=Math.min(n,e);i<0?this._candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(i)}_maximumLodForRequests(e){const{tileInfo:t,tilemapCache:n}=this.layer,i=T(t,n);if(!e)return i.length-1;const s=this.extent;if(s==null)return-1;for(let l=i.length-1;l>=0;l--){const o=i[l],a=o.resolution*t.size[0],r=o.resolution*t.size[1];if(Math.ceil(s.width/a)*Math.ceil(s.height/r)<=e)return l}return-1}allElevationTilesFetched(){return this._candidateTiles.length===this.elevationTiles.length}clearElevationTiles(){this.elevationTiles.length=0,this._fetchedCandidates.clear()}populateElevationTiles(e){for(const t of this._candidateTiles){const n=t.id&&e[t.id];n&&(this._fetchedCandidates.add(t),this.elevationTiles.push(n))}}remapTiles(e){this._candidateTiles=this._uniqueNonOverlappingTiles(this._candidateTiles.map(t=>e[t.id]))}getTilesToFetch(){return this._candidateTiles}forEachTileToFetch(e,t){const n=this._candidateTiles;this._candidateTiles=[],n.forEach(i=>{if(this._fetchedCandidates.has(i))return void(t&&t(i));let s=!1;e(i,()=>s=!0),s?t&&t(i):this._candidateTiles.push(i)}),this._candidateTiles=this._uniqueNonOverlappingTiles(this._candidateTiles,t)}_uniqueNonOverlappingTiles(e,t){const n={},i=[];for(const l of e){const o=l.id;o&&!n[o]?(n[o]=l,i.push(l)):t&&t(l)}const s=i.sort((l,o)=>l.level-o.level);return s.filter((l,o)=>{for(let a=0;a<o;a++){const r=s[a].extent;if(r&&l.extent&&Z(r,l.extent))return t&&t(l),!1}return!0})}_selectCandidateTilesCoveringExtentAt(e){this._candidateTiles.length=0;const t=this.extent;if(t==null)return;const{tileInfo:n,tilemapCache:i}=this.layer,s=T(n,i)[e],l=n.tileAt(s.level,t.xmin,t.ymin),o=l.extent;if(o==null)return;const a=s.resolution*n.size[0],r=s.resolution*n.size[1],u=Math.ceil((t.xmax-o[0])/a),m=Math.ceil((t.ymax-o[1])/r);for(let p=0;p<m;p++)for(let h=0;h<u;h++){const v=new Q(null,l.level,l.row-p,l.col+h);n.updateTileInfo(v),this._tileIsMasked(v)||this._candidateTiles.push(v)}}_tileIsMasked(e){return!!this.maskExtents&&this.maskExtents.some(t=>e.extent&&Z(t,e.extent))}}function N(c,e,t=0){const n=T(c,e);let i=n.length-1;if(t>0){const s=t/g(c.spatialReference),l=n.findIndex(o=>o.resolution<s);l===0?i=0:l>0&&(i=l-1)}return i}const w={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};function T(c,e){const t=c.lods;if(C(e)){const{effectiveMinLOD:n,effectiveMaxLOD:i}=e;return t.filter(s=>s.level>=n&&s.level<=i)}return t}function C(c){return(c==null?void 0:c.tileInfo)!=null}export{fe as ElevationQuery,x as GeometryDescriptor,N as getFinestLodIndex};
