import{w as y,I,j as A,s as p,U as x,d as F,S as j,a as n,i as d,b as m,c as N,R as H,_ as J,p as q,f as z,n as Q,W as X,e as Y,g as h,h as P,k as Z,l as ee,m as ae}from"./index-12dd5c8b.js";import{i as te}from"./originUtils-cfe4feaf.js";import{i as $}from"./saveAPIKeyUtils-c82524bc.js";import{m as O,u as S}from"./saveUtils-84ab957a.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./resourceUtils-67bff962.js";const oe=["NatGeo_World_Map","Ocean_Basemap","USA_Topo_Maps","World_Imagery","World_Street_Map","World_Terrain_Base","World_Topo_Map","World_Hillshade","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Reference/World_Boundaries_and_Places","Reference/World_Reference_Overlay","Reference/World_Transportation"].map(a=>a.toLowerCase());async function De(a,e,t){t??(t={}),re(a,e),await y(()=>!e.updatingFromView),await e.load(),await k(e),await O(e),await U(a,e);const r=e.portalItem,o=I(r.itemUrl),i={origin:"web-map",messages:[],writtenProperties:[],url:o,portal:r.portal||A.getDefault(),portalItem:r,verifyItemRelativeUrls:o?{rootPath:o.path,writtenUrls:[]}:null,blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},s=e.write({},i);return await Promise.all(i.resources.pendingOperations),D(a,i,t),await E(e,r),await We(a,e,r,s,i),await Promise.all([e.updateItemThumbnail(),S(e.resourceReferences,i,null)]),r}async function Ee(a,e,t,r){r??(r={});const o=ie(a,t);await y(()=>!e.updatingFromView),await e.load(),await k(e),await O(e),await U(a,e);const i={origin:"web-map",messages:[],writtenProperties:[],url:null,portal:o.portal,portalItem:o,blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},s=e.write({},i);await Promise.all(i.resources.pendingOperations),D(a,i,r),await pe(e,o);const l=e.getThumbnailState();return await Ie(a,e,o,s,i,r)&&(e.resourceReferences.portalItem=o),e.restoreThumbnailFromState(l),await Promise.all([e.updateItemThumbnail(),S(e.resourceReferences,i,null)]),o}function re(a,e){if(!e.portalItem)throw new p(`${a.name}:portal-item-not-set`,"Portal item to save to has not been set on the WebMap");$(e.portalItem),T(a,e.portalItem)}function T(a,e){if(e.type!==a.itemType)throw new p(`${a.name}:portal-item-wrong-type`,`Portal item needs to have type "${a.itemType}"`)}async function U(a,e){var r;if(!((r=e.basemap)!=null&&r.baseLayers.length))throw new p(`${a.name}:save`,"Map does not have a valid basemap with a base layer.");let t=null;if(await y(()=>{const o=x(e.initialViewProperties,e.basemap);return t=o.spatialReference,!o.updating}),!F(t,e.initialViewProperties.spatialReference))throw new p(`${a.name}:save`,"The spatial reference of the basemap is not compatible with the one from the map.",{expected:e.initialViewProperties.spatialReference,actual:t})}function ie(a,e){let t=j.from(e);return t.id&&(t=t.clone(),t.id=null),t.type||(t.type=a.itemType),t.portal||(t.portal=A.getDefault()),$(t),T(a,t),t}function k(a){const e=[];return a.basemap&&e.push(a.basemap.load()),a.ground&&e.push(a.ground.load()),Promise.allSettled(e).then(()=>{})}function D(a,e,t){let r=(e.messages??[]).filter(o=>o.type==="error").map(o=>new p(o.name,o.message,o.details));if(e.blockedRelativeUrls&&(r=r.concat(e.blockedRelativeUrls.map(o=>new p("url:unsupported",`Relative url '${o}' is not supported in Web Map`)))),t.ignoreUnsupported&&(r=r.filter(o=>o.name!=="layer:unsupported"&&o.name!=="symbol:unsupported"&&o.name!=="symbol-layer:unsupported"&&o.name!=="property:unsupported"&&o.name!=="url:unsupported")),r.length>0)throw new p(`${a.name}:save`,"Failed to save webmap due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:r})}async function E(a,e){e.extent=await ge(a.portalItem,a.initialViewProperties.viewpoint.targetGeometry),await ce(a,e)}const ne=h.JSAPI,M="CollectorDisabled",_="Collector",b="Data Editing",V="OfflineDisabled",v="Offline",C="Workforce Project",G="Workforce Worker",L="Workforce Dispatcher",se="Offline Map Areas",le="FieldMapsDisabled",R=h.DEVELOPER_BASEMAP,W="UtilityNetwork";async function pe(a,e){n(e,M),n(e,le),n(e,h.METADATA),n(e,V),n(e,se),n(e,L),n(e,C),n(e,G),await E(a,e)}async function ce(a,e){d(e,ne),await ue(a),me(a,e),fe(a,e),we(a,e),ye(a,e),he(a,e),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((t,r,o)=>o.indexOf(t)===r))}function ue(a){const e=g(a).map(t=>t.load()).toArray();return Promise.allSettled(e).then(()=>{})}function g(a){return a.allLayers.concat(a.allTables)}function B(a){return g(a).some(e=>e.loaded&&P(e)&&e.capabilities.operations.supportsEditing&&e.editingEnabled&&(e.type!=="subtype-group"||e.sublayers.some(t=>t.editingEnabled)))}function de(a){return g(a).filter(e=>e.type!=="group").every(e=>e.loaded&&ve(a,e))}function me(a,e){m(e,M)||m(e,C)||m(e,G)||m(e,L)||!B(a)?n(e,_):d(e,_)}function fe(a,e){B(a)?d(e,b):n(e,b)}function we(a,e){!m(e,V)&&de(a)?d(e,v):n(e,v)}function ye(a,e){N(a.basemap)?d(e,R):n(e,R)}function he(a,e){var t;(t=a.utilityNetworks)!=null&&t.length?d(e,W):n(e,W)}async function ge(a,e){const t=e.clone().normalize();let r;if(t.length>1)for(const o of t)r?o.width>r.width&&(r=o):r=o;else r=t[0];return _e(a,r)}async function _e(a,e){const t=e.spatialReference;if(t.isWGS84)return e.clone();if(t.isWebMercator)return H(e);const{getGeometryServiceURL:r}=await J(()=>import("./geometryServiceUtils-a64de7ba.js"),["assets/geometryServiceUtils-a64de7ba.js","assets/index-12dd5c8b.js","assets/index-60f86da2.css"]),o=await r(a),i=new q;return i.geometries=[e],i.outSpatialReference=z.WGS84,(await Q(o,i))[0]}function be(a){return ae(a)||a.type==="map-notes"||a.type==="route"}function ve(a,e){return P(e)&&e.capabilities.operations.supportsSync||be(e)&&!e.portalItem||(e.type==="tile"||e.type==="vector-tile")&&(e.capabilities.operations.supportsExportTiles||Re(e)||Z(e))&&e.spatialReference.equals(a.initialViewProperties.spatialReference)}function Re(a){return a.type==="tile"&&ee(a.url)&&oe.some(e=>{var t;return(t=a.url)==null?void 0:t.toLowerCase().includes("/"+e+"/")})}async function We(a,e,t,r,o){await t.update({data:r}),K(a,e,t,r,o)}async function Ie(a,e,t,r,o,i){const s=e.portalItem,l={item:s,authenticated:!(!(s!=null&&s.id)||!s.portal.user)},c=t.portal;await c.signIn();const{copyAllowed:f,itemReloaded:u}=await Ae(l,c);if(l.authenticated||(l.authenticated=u),!f)throw new p(`${a.name}:save-as-copy-not-allowed`,"Owner of this map does not allow others to save a copy");const w=await Pe(t,l,r,i);return e.portalItem=t,K(a,e,t,r,o),w}async function Ae(a,e){var o;const{item:t,authenticated:r}=a;return t!=null&&t.id&&((o=t.typeKeywords)!=null&&o.includes("useOnly"))?t.portal.portalHostname!==e.portalHostname?{copyAllowed:!1,itemReloaded:!1}:(r||await t.reload(),{copyAllowed:t.itemControl==="admin"||t.itemControl==="update",itemReloaded:!0}):{copyAllowed:!0,itemReloaded:!1}}async function Pe(a,e,t,r){var f;const o=a.portal,{item:i}=e,{folder:s,copyAllResources:l}=r;let c=!1;if(l&&(i!=null&&i.id)&&X(i.portal.url,o.url)&&parseInt(i.portal.currentVersion,10)>=2023){const{total:u}=await i.fetchResources();c=!!u}if(c){const u=await i.copy({copyResources:"all",folder:s});a.id=u.id,a.portal=u.portal;const w=a.toJSON();await a.load(),a.read(w),await a.update({data:t})}else await((f=o.user)==null?void 0:f.addItem({item:a,folder:s,data:t}));return c}function K(a,e,t,r,o){Y.prototype.read.call(e,{version:r.version,authoringApp:r.authoringApp,authoringAppVersion:r.authoringAppVersion},{origin:a.origin,ignoreDefaults:!0,url:t.itemUrl?I(t.itemUrl):void 0}),te(o),e.resourceInfo=r}export{De as save,Ee as saveAs};
