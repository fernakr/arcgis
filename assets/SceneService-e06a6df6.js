import{ad as f,s as y,E as K,F as l,G as u,du as P,f as w,bA as m,be as I,hq as U,dw as L,bB as V,H as M,eX as q,gE as k,q as C,hr as F,hs as z,ht as J,I as E,S as B,j as R}from"./index-b42b51f4.js";import{i as A}from"./originUtils-cfe4feaf.js";import{i as N}from"./saveAPIKeyUtils-23e5c10c.js";import{u as D,p as H}from"./saveUtils-adae5749.js";async function Z(c,s,e,t,i,r){let a=null;if(e!=null){const h=`${c}/nodepages/`,n=h+Math.floor(e.rootIndex/e.nodesPerPage);try{return{type:"page",rootPage:(await f(n,{query:{f:"json",token:t},responseType:"json",signal:r})).data,rootIndex:e.rootIndex,pageSize:e.nodesPerPage,lodMetric:e.lodSelectionMetricType,urlPrefix:h}}catch(g){i!=null&&i.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",n,g),a=g}}if(!s)return null;const o=s==null?void 0:s.split("/").pop(),p=`${c}/nodes/`,d=p+o;try{return{type:"node",rootNode:(await f(d,{query:{f:"json",token:t},responseType:"json",signal:r})).data,urlPrefix:p}}catch(h){throw new y("sceneservice:root-node-missing","Root node missing.",{pageError:a,nodeError:h,url:d})}}let G=null;function X(){return G}const j="esri.layers.mixins.SceneService",x=K.getLogger(j),te=c=>{let s=class extends c{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=q(async(e,t,i)=>{switch(e){case S.SAVE:return this._save(t);case S.SAVE_AS:return this._saveAs(i,t)}})}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(e.spatialReference!=null)return w.fromJSON(e.spatialReference);{const t=e.store,i=t.indexCRS||t.geographicCRS,r=i&&parseInt(i.substring(i.lastIndexOf("/")+1,i.length),10);return r!=null?new w(r):null}}readFullExtent(e,t,i){if(e!=null&&typeof e=="object"){const o=e.spatialReference==null?{...e,spatialReference:this._readSpatialReference(t)}:e;return I.fromJSON(o,i)}const r=t.store,a=this._readSpatialReference(t);return a==null||(r==null?void 0:r.extent)==null||!Array.isArray(r.extent)||r.extent.some(o=>o<b)?null:new I({xmin:r.extent[0],ymin:r.extent[1],xmax:r.extent[2],ymax:r.extent[3],spatialReference:a})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},i=e.split(".");return i.length>=2&&(t.major=parseInt(i[0],10),t.minor=parseInt(i[1],10)),t}readVersion(e,t){const i=t.store,r=i.version!=null?i.version.toString():"";return this.parseVersionString(r)}readTitlePortalItem(e){return this.sublayerTitleMode!=="item-title"?void 0:e}readTitleService(e,t){var a;const i=(a=this.portalItem)==null?void 0:a.title;if(this.sublayerTitleMode==="item-title")return k(this.url,t.name);let r=t.name;if(!r&&this.url){const o=C(this.url);o!=null&&(r=o.title)}return this.sublayerTitleMode==="item-title-and-service-name"&&i&&(r=i+" - "+r),F(r)}set url(e){const t=z({layer:this,url:e,nonStandardUrlAllowed:!1,logger:x});this._set("url",t.url),t.layerId!=null&&this._set("layerId",t.layerId)}writeUrl(e,t,i,r){J(this,e,"layers",t,r)}get parsedUrl(){const e=this._get("url"),t=E(e);return this.layerId!=null&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=Z(this.parsedUrl.path,this.rootNode,e,this.apiKey,x,t),this.fullExtent==null||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){var t,i,r,a;if((e==null?void 0:e.type)==="page"){const o=e.rootIndex%e.pageSize,p=(i=(t=e.rootPage)==null?void 0:t.nodes)==null?void 0:i[o];if(((r=p==null?void 0:p.obb)==null?void 0:r.center)==null||p.obb.halfSize==null)throw new y("sceneservice:invalid-node-page","Invalid node page.");if(p.obb.center[0]<b||this.fullExtent==null||this.fullExtent.hasZ)return;const d=p.obb.halfSize,h=p.obb.center[2],n=Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2]);this.fullExtent.zmin=h-n,this.fullExtent.zmax=h+n}else if((e==null?void 0:e.type)==="node"){const o=(a=e.rootNode)==null?void 0:a.mbs;if(!Array.isArray(o)||o.length!==4||o[0]<b)return;const p=o[2],d=o[3],{fullExtent:h}=this;h&&(h.zmin=p-d,h.zmax=p+d)}}async _fetchService(e){if(this.url==null)throw new y("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(this.layerId==null&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);t!=null&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await f(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){var a;const t=await f(((a=this.parsedUrl)==null?void 0:a.path)??"",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let i=!1;if(t.data.layerType&&t.data.layerType==="Voxel"&&(i=!0),i)return this._fetchVoxelServiceLayer();const r=t.data;this.read(r,this._getServiceContext()),this.validateLayer(r)}async _fetchVoxelServiceLayer(e){var i;const t=(await f(((i=this.parsedUrl)==null?void 0:i.path)+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,this._getServiceContext()),this.validateLayer(t)}_getServiceContext(){var e;return{origin:"service",portalItem:this.portalItem,portal:(e=this.portalItem)==null?void 0:e.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&typeof this.beforeSave=="function"&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,i){e.typeKeywords||(e.typeKeywords=[]);const r=t.getTypeKeywords();for(const a of r)e.typeKeywords.push(a);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((a,o,p)=>p.indexOf(a)===o),i===v.newItem&&(e.typeKeywords=e.typeKeywords.filter(a=>a!=="Hosted Service")))}async _saveAs(e,t){var d;const i={...T,...t};let r=B.from(e);if(!r)throw new y("sceneservice:portal-item-required","_saveAs() requires a portal item to save to");N(r),r.id&&(r=r.clone(),r.id=null);const a=r.portal||R.getDefault();await this._ensureLoadBeforeSave(),r.type=_,r.portal=a;const o={origin:"portal-item",url:null,messages:[],portal:a,portalItem:r,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},p={layers:[this.write({},o)]};return await Promise.all(o.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(p,o,i),r.url=this.url,r.title||(r.title=this.title),this._updateTypeKeywords(r,i,v.newItem),await a.signIn(),await((d=a.user)==null?void 0:d.addItem({item:r,folder:i==null?void 0:i.folder,data:p})),await D(this.resourceReferences,o,null),this.portalItem=r,A(o),o.portalItem=r,r}async _save(e){const t={...T,...e};if(!this.portalItem)throw new y("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if(N(this.portalItem),this.portalItem.type!==_)throw new y("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${_}"`);await this._ensureLoadBeforeSave();const i={origin:"portal-item",url:this.portalItem.itemUrl&&E(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||R.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},r={layers:[this.write({},i)]};return await Promise.all(i.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(r,i,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,v.existingItem),await H(this.portalItem,r,this.resourceReferences,i,null),A(i),this.portalItem}async _validateAgainstJSONSchema(e,t,i){var d,h;let r=((d=t.messages)==null?void 0:d.filter(n=>n.type==="error").map(n=>new y(n.name,n.message,n.details)))??[];(h=i==null?void 0:i.validationOptions)!=null&&h.ignoreUnsupported&&(r=r.filter(n=>n.name!=="layer:unsupported"&&n.name!=="symbol:unsupported"&&n.name!=="symbol-layer:unsupported"&&n.name!=="property:unsupported"&&n.name!=="url:unsupported"&&n.name!=="scenemodification:unsupported"));const a=i==null?void 0:i.validationOptions,o=a==null?void 0:a.enabled,p=X();if(o&&p){const n=(await p()).validate(e,i.portalItemLayerType);if(n.length>0){const g=`Layer item did not validate:
${n.join(`
`)}`;if(x.error(`_validateAgainstJSONSchema(): ${g}`),a.failPolicy==="throw"){const O=n.map($=>new y("sceneservice:schema-validation",$)).concat(r);throw new y("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:O})}}}if(r.length>0)throw new y("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:r})}};return l([u(P)],s.prototype,"id",void 0),l([u({type:w})],s.prototype,"spatialReference",void 0),l([m("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],s.prototype,"readSpatialReference",null),l([u({type:I})],s.prototype,"fullExtent",void 0),l([m("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],s.prototype,"readFullExtent",null),l([u({readOnly:!0,type:U})],s.prototype,"heightModelInfo",void 0),l([u({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],s.prototype,"minScale",void 0),l([u({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],s.prototype,"maxScale",void 0),l([u({readOnly:!0})],s.prototype,"version",void 0),l([m("version",["store.version"])],s.prototype,"readVersion",null),l([u({type:String,json:{read:{source:"copyrightText"}}})],s.prototype,"copyright",void 0),l([u({type:String,json:{read:!1}})],s.prototype,"sublayerTitleMode",void 0),l([u({type:String})],s.prototype,"title",void 0),l([m("portal-item","title")],s.prototype,"readTitlePortalItem",null),l([m("service","title",["name"])],s.prototype,"readTitleService",null),l([u({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],s.prototype,"layerId",void 0),l([u(L)],s.prototype,"url",null),l([V("url")],s.prototype,"writeUrl",null),l([u()],s.prototype,"parsedUrl",null),l([u({readOnly:!0})],s.prototype,"store",void 0),l([u({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],s.prototype,"rootNode",void 0),s=l([M(j)],s),s},b=-1e38;var v;(function(c){c[c.existingItem=0]="existingItem",c[c.newItem=1]="newItem"})(v||(v={}));const _="Scene Service",T={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var S;(function(c){c[c.SAVE=0]="SAVE",c[c.SAVE_AS=1]="SAVE_AS"})(S||(S={}));export{te as E,S as P,Z as r};
