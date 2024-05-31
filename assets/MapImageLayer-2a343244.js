import{dn as $,dQ as w,ds as I,dR as T,dq as E,dr as O,dt as M,dp as F,dS as R,dT as L,bF as P,dI as b,dU as g,dV as v,dW as j,dX as U,dY as q,ad as f,be as J,dZ as N,d_ as A,d$ as _,s as x,C as k,F as i,G as n,e0 as S,bA as V,bB as C,dw as Z,H as z,dC as B,e1 as G}from"./index-6c8fba83.js";import{E as H,f as W,X as D}from"./SublayersOwner-6643ea51.js";import{t as K}from"./imageBitmapUtils-0dbf85c0.js";import"./QueryTask-a8bce17b.js";import"./executeForIds-0a841e90.js";import"./query-9c0ef28a.js";import"./pbfQueryUtils-acc9797f.js";import"./pbf-04f3423d.js";import"./OptimizedGeometry-196224d4.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./executeQueryJSON-a7c7b927.js";import"./executeQueryPBF-3cb74897.js";import"./featureConversionUtils-3420cb4d.js";let s=class extends $(w(I(H(W(T(E(O(M(F(R(L(B)))))))))))){constructor(...e){super(...e),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,a){return typeof e=="string"?{url:e,...a}:e}load(e){const a=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(P).then(()=>this._fetchService(a))),Promise.resolve(this)}readImageFormat(e,a){const l=a.supportedImageFormatTypes;return l&&l.includes("PNG32")?"png32":"png24"}writeSublayers(e,a,l,t){var h;if(!this.loaded||!e)return;const o=e.slice().reverse().flatten(({sublayers:r})=>r&&r.toArray().reverse()).toArray();let p=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&((h=this.capabilities.exportMap)!=null&&h.supportsDynamicLayers)){const r=b(t.origin);if(r===g.PORTAL_ITEM){const m=this.createSublayersForOrigin("service").sublayers;p=v(o,m,g.SERVICE)}else if(r>g.PORTAL_ITEM){const m=this.createSublayersForOrigin("portal-item");p=v(o,m.sublayers,b(m.origin))}}const d=[],y={writeSublayerStructure:p,...t};let c=p;o.forEach(r=>{const m=r.write({},y);d.push(m),c=c||r.originOf("visible")==="user"}),d.some(r=>Object.keys(r).length>1)&&(a.layers=d),c&&(a.visibleLayers=o.filter(r=>r.visible).map(r=>r.id))}createExportImageParameters(e,a,l,t){const o=(t==null?void 0:t.pixelRatio)||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const p=new j({layer:this,floors:t==null?void 0:t.floors,scale:U({extent:e,width:a})*o}),d=p.toJSON();p.destroy();const y=!(t!=null&&t.rotation)||this.version<10.3?{}:{rotation:-t.rotation},c=e==null?void 0:e.spatialReference,h=q(c);d.dpi*=o;const r={};if(t!=null&&t.timeExtent){const{start:m,end:u}=t.timeExtent.toJSON();r.time=m&&u&&m===u?""+m:`${m??"null"},${u??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(r.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:h,imageSR:h,size:a+","+l,...d,...y,...r}}async fetchImage(e,a,l,t){const{data:o}=await this._fetchImage("image",e,a,l,t);return o}async fetchImageBitmap(e,a,l,t){const{data:o,url:p}=await this._fetchImage("blob",e,a,l,t);return K(o,p,t==null?void 0:t.signal)}async fetchRecomputedExtents(e={}){const a={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:l}=await f(this.url,a),{extent:t,fullExtent:o,timeExtent:p}=l,d=t||o;return{fullExtent:d&&J.fromJSON(d),timeExtent:p&&N.fromJSON({start:p[0],end:p[1]})}}loadAll(){return A(this,e=>{e(this.allSublayers)})}serviceSupportsSpatialReference(e){return _(this,e)}async _fetchImage(e,a,l,t,o){var y,c,h;const p={responseType:e,signal:(o==null?void 0:o.signal)??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(a,l,t,o),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},d=this.parsedUrl.path+"/export";if(((y=p.query)==null?void 0:y.dynamicLayers)!=null&&!((h=(c=this.capabilities)==null?void 0:c.exportMap)!=null&&h.supportsDynamicLayers))throw new x("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:p.query});try{const{data:r}=await f(d,p);return{data:r,url:d}}catch(r){throw k(r)?r:new x("mapimagelayer:image-fetch-error",`Unable to load image: ${d}`,{error:r})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:a,ssl:l}=await f(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});l&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=a,this.read(a,{origin:"service",url:this.parsedUrl})}};i([n(S("dateFieldsTimeReference"))],s.prototype,"dateFieldsTimeZone",void 0),i([n({type:Boolean})],s.prototype,"datesInUnknownTimezone",void 0),i([n()],s.prototype,"dpi",void 0),i([n()],s.prototype,"gdbVersion",void 0),i([n()],s.prototype,"imageFormat",void 0),i([V("imageFormat",["supportedImageFormatTypes"])],s.prototype,"readImageFormat",null),i([n({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],s.prototype,"imageMaxHeight",void 0),i([n({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],s.prototype,"imageMaxWidth",void 0),i([n()],s.prototype,"imageTransparency",void 0),i([n({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],s.prototype,"isReference",void 0),i([n({json:{read:!1,write:!1}})],s.prototype,"labelsVisible",void 0),i([n({type:["ArcGISMapServiceLayer"]})],s.prototype,"operationalLayerType",void 0),i([n({json:{read:!1,write:!1}})],s.prototype,"popupEnabled",void 0),i([n(S("preferredTimeReference"))],s.prototype,"preferredTimeZone",void 0),i([n()],s.prototype,"sourceJSON",void 0),i([n({json:{write:{ignoreOrigin:!0}}})],s.prototype,"sublayers",void 0),i([C("sublayers",{layers:{type:[D]},visibleLayers:{type:[G]}})],s.prototype,"writeSublayers",null),i([n({type:["show","hide","hide-children"]})],s.prototype,"listMode",void 0),i([n({json:{read:!1},readOnly:!0,value:"map-image"})],s.prototype,"type",void 0),i([n(Z)],s.prototype,"url",void 0),s=i([z("esri.layers.MapImageLayer")],s);const me=s;export{me as default};
