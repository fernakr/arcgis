import{bE as $,dS as w,bF as I,dT as T,du as E,dv as M,dw as O,dt as F,dU as L,dV as R,bS as j,dK as f,dW as g,dX as v,dY as P,dZ as U,d_ as J,a9 as b,bj as N,d$ as q,e0 as _,e1 as A,s as x,C as k,F as i,G as n,e2 as S,bL as V,bM as z,dz as Z,H as C,bI as G,e3 as H}from"./index-3f4f2f72.js";import{E as K,f as W,X as B}from"./SublayersOwner-213d9385.js";import{t as D}from"./imageBitmapUtils-eb799636.js";import"./QueryTask-23e88dab.js";import"./executeForIds-39a8f43f.js";import"./query-88b4f998.js";import"./pbfQueryUtils-10a92700.js";import"./pbf-b7e567bf.js";import"./OptimizedGeometry-196224d4.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./executeQueryJSON-747a06ea.js";import"./executeQueryPBF-9455c308.js";import"./featureConversionUtils-d6208516.js";let s=class extends $(w(I(K(W(T(E(M(O(F(L(R(G)))))))))))){constructor(...e){super(...e),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,a){return typeof e=="string"?{url:e,...a}:e}load(e){const a=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(j).then(()=>this._fetchService(a))),Promise.resolve(this)}readImageFormat(e,a){const p=a.supportedImageFormatTypes;return p&&p.includes("PNG32")?"png32":"png24"}writeSublayers(e,a,p,t){var h;if(!this.loaded||!e)return;const o=e.slice().reverse().flatten(({sublayers:r})=>r&&r.toArray().reverse()).toArray();let l=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&((h=this.capabilities.exportMap)!=null&&h.supportsDynamicLayers)){const r=f(t.origin);if(r===g.PORTAL_ITEM){const m=this.createSublayersForOrigin("service").sublayers;l=v(o,m,g.SERVICE)}else if(r>g.PORTAL_ITEM){const m=this.createSublayersForOrigin("portal-item");l=v(o,m.sublayers,f(m.origin))}}const d=[],y={writeSublayerStructure:l,...t};let c=l;o.forEach(r=>{const m=r.write({},y);d.push(m),c=c||r.originOf("visible")==="user"}),d.some(r=>Object.keys(r).length>1)&&(a.layers=d),c&&(a.visibleLayers=o.filter(r=>r.visible).map(r=>r.id))}createExportImageParameters(e,a,p,t){const o=(t==null?void 0:t.pixelRatio)||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const l=new P({layer:this,floors:t==null?void 0:t.floors,scale:U({extent:e,width:a})*o}),d=l.toJSON();l.destroy();const y=!(t!=null&&t.rotation)||this.version<10.3?{}:{rotation:-t.rotation},c=e==null?void 0:e.spatialReference,h=J(c);d.dpi*=o;const r={};if(t!=null&&t.timeExtent){const{start:m,end:u}=t.timeExtent.toJSON();r.time=m&&u&&m===u?""+m:`${m??"null"},${u??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(r.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:h,imageSR:h,size:a+","+p,...d,...y,...r}}async fetchImage(e,a,p,t){const{data:o}=await this._fetchImage("image",e,a,p,t);return o}async fetchImageBitmap(e,a,p,t){const{data:o,url:l}=await this._fetchImage("blob",e,a,p,t);return D(o,l,t==null?void 0:t.signal)}async fetchRecomputedExtents(e={}){const a={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:p}=await b(this.url,a),{extent:t,fullExtent:o,timeExtent:l}=p,d=t||o;return{fullExtent:d&&N.fromJSON(d),timeExtent:l&&q.fromJSON({start:l[0],end:l[1]})}}loadAll(){return _(this,e=>{e(this.allSublayers)})}serviceSupportsSpatialReference(e){return A(this,e)}async _fetchImage(e,a,p,t,o){var y,c,h;const l={responseType:e,signal:(o==null?void 0:o.signal)??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(a,p,t,o),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},d=this.parsedUrl.path+"/export";if(((y=l.query)==null?void 0:y.dynamicLayers)!=null&&!((h=(c=this.capabilities)==null?void 0:c.exportMap)!=null&&h.supportsDynamicLayers))throw new x("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:l.query});try{const{data:r}=await b(d,l);return{data:r,url:d}}catch(r){throw k(r)?r:new x("mapimagelayer:image-fetch-error",`Unable to load image: ${d}`,{error:r})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:a,ssl:p}=await b(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});p&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=a,this.read(a,{origin:"service",url:this.parsedUrl})}};i([n(S("dateFieldsTimeReference"))],s.prototype,"dateFieldsTimeZone",void 0),i([n({type:Boolean})],s.prototype,"datesInUnknownTimezone",void 0),i([n()],s.prototype,"dpi",void 0),i([n()],s.prototype,"gdbVersion",void 0),i([n()],s.prototype,"imageFormat",void 0),i([V("imageFormat",["supportedImageFormatTypes"])],s.prototype,"readImageFormat",null),i([n({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],s.prototype,"imageMaxHeight",void 0),i([n({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],s.prototype,"imageMaxWidth",void 0),i([n()],s.prototype,"imageTransparency",void 0),i([n({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],s.prototype,"isReference",void 0),i([n({json:{read:!1,write:!1}})],s.prototype,"labelsVisible",void 0),i([n({type:["ArcGISMapServiceLayer"]})],s.prototype,"operationalLayerType",void 0),i([n({json:{read:!1,write:!1}})],s.prototype,"popupEnabled",void 0),i([n(S("preferredTimeReference"))],s.prototype,"preferredTimeZone",void 0),i([n()],s.prototype,"sourceJSON",void 0),i([n({json:{write:{ignoreOrigin:!0}}})],s.prototype,"sublayers",void 0),i([z("sublayers",{layers:{type:[B]},visibleLayers:{type:[H]}})],s.prototype,"writeSublayers",null),i([n({type:["show","hide","hide-children"]})],s.prototype,"listMode",void 0),i([n({json:{read:!1},readOnly:!0,value:"map-image"})],s.prototype,"type",void 0),i([n(Z)],s.prototype,"url",void 0),s=i([C("esri.layers.MapImageLayer")],s);const me=s;export{me as default};