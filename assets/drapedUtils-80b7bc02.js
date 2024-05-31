import{cz as C,dY as W,dX as Y,iU as K,iV as M,gs as ee,F as p,G as c,iW as te,es as re,be as P,f as se,dZ as ie,H as A,a9 as J,aa as ne,Q as T,bA as ae,bB as oe,gf as le,aZ as ue,b9 as pe,bD as ye,bC as ce,ad as fe,bz as he,eX as de,$ as me,s as U,B as I,V as ge,t as z,dA as H,_ as be,he as we,bk as V,a1 as xe,iX as ve,iY as $e,fq as Se}from"./index-9762d29e.js";import{n as Fe,p as Re}from"./popupUtils-f8692832.js";function N(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function Ee(t){let e=0,s=0;for(let i=0;i<t.length;i++){const r=t[i].size;typeof r=="number"&&(e+=r,s++)}return e/s}function Q(t,e){var s;return typeof t=="number"?t:(s=t==null?void 0:t.stops)!=null&&s.length?Ee(t.stops):e}function Oe(t,e){if(!e)return t;const s=e.filter(a=>a.type==="size").map(a=>{const{maxSize:o,minSize:l}=a;return(Q(o,t)+Q(l,t))/2});let i=0;const r=s.length;if(r===0)return t;for(let a=0;a<r;a++)i+=s[a];const n=Math.floor(i/r);return Math.max(n,t)}function q(t){var n,a;const e=t==null?void 0:t.renderer,s=(n=t==null?void 0:t.event)==null?void 0:n.pointerType,i=s==="touch"?9:6;if(!e)return i;const r="visualVariables"in e?Oe(i,e.visualVariables):i;if(e.type==="simple")return N(r,e.symbol);if(e.type==="unique-value"){let o=r;return(a=e.uniqueValueInfos)==null||a.forEach(l=>{o=N(o,l.symbol)}),o}if(e.type==="class-breaks"){let o=r;return e.classBreakInfos.forEach(l=>{o=N(o,l.symbol)}),o}return e.type==="dot-density"||e.type,r}function je(t,e){const{dpi:s,gdbVersion:i,geometry:r,geometryPrecision:n,height:a,layerOption:o,mapExtent:l,maxAllowableOffset:u,returnFieldName:y,returnGeometry:f,returnUnformattedValues:h,returnZ:F,spatialReference:$,timeExtent:v,tolerance:m,width:R}=t.toJSON(),{dynamicLayers:g,layerDefs:b,layerIds:x}=Pe(t),j=(e==null?void 0:e.geometry)!=null?e.geometry:null,w={geometryPrecision:n,maxAllowableOffset:u,returnFieldName:y,returnGeometry:f,returnUnformattedValues:h,returnZ:F,tolerance:m},E=j&&j.toJSON()||r;w.imageDisplay=`${R},${a},${s}`,i&&(w.gdbVersion=i),E&&(delete E.spatialReference,w.geometry=JSON.stringify(E),w.geometryType=C(E));const L=$??(E==null?void 0:E.spatialReference)??(l==null?void 0:l.spatialReference);if(L&&(w.sr=W(L)),w.time=v?[v.start,v.end].join(","):null,l){const{xmin:B,ymin:D,xmax:Z,ymax:X}=l;w.mapExtent=`${B},${D},${Z},${X}`}return b&&(w.layerDefs=b),g&&!b&&(w.dynamicLayers=g),w.layers=o==="popup"?"visible":o,x&&!g&&(w.layers+=`:${x.join(",")}`),w}function Pe(t){var $,v;const{mapExtent:e,floors:s,width:i,sublayers:r,layerIds:n,layerOption:a,gdbVersion:o}=t,l=(v=($=r==null?void 0:r.find(m=>m.layer!=null))==null?void 0:$.layer)==null?void 0:v.serviceSublayers,u=a==="popup",y={},f=Y({extent:e,width:i,spatialReference:e==null?void 0:e.spatialReference}),h=[],F=m=>{const R=f===0,g=m.minScale===0||f<=m.minScale,b=m.maxScale===0||f>=m.maxScale;if(m.visible&&(R||g&&b))if(m.sublayers)m.sublayers.forEach(F);else{if((n==null?void 0:n.includes(m.id))===!1||u&&(!m.popupTemplate||!m.popupEnabled))return;h.unshift(m)}};if(r==null||r.forEach(F),r&&!h.length)y.layerIds=[];else{const m=K(h,l,o),R=h.map(g=>{const b=M(s,g);return g.toExportImageJSON(b)});if(m)y.dynamicLayers=JSON.stringify(R);else{if(r){let b=h.map(({id:x})=>x);n&&(b=b.filter(x=>n.includes(x))),y.layerIds=b}else n!=null&&n.length&&(y.layerIds=n);const g=Ie(s,h);if(g!=null&&g.length){const b={};for(const x of g)x.definitionExpression&&(b[x.id]=x.definitionExpression);Object.keys(b).length&&(y.layerDefs=JSON.stringify(b))}}}return y}function Ie(t,e){const s=!!(t!=null&&t.length),i=e.filter(r=>r.definitionExpression!=null||s&&r.floorInfo!=null);return i.length?i.map(r=>{const n=M(t,r),a=ee(n,r.definitionExpression);return{id:r.id,definitionExpression:a??void 0}}):null}var G;let d=G=class extends J{static from(t){return ne(G,t)}constructor(t){super(t),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}};p([c({type:Number,json:{write:!0}})],d.prototype,"dpi",void 0),p([c()],d.prototype,"floors",void 0),p([c({type:String,json:{write:!0}})],d.prototype,"gdbVersion",void 0),p([c({types:te,json:{read:re,write:!0}})],d.prototype,"geometry",void 0),p([c({type:Number,json:{write:!0}})],d.prototype,"geometryPrecision",void 0),p([c({type:Number,json:{write:!0}})],d.prototype,"height",void 0),p([c({type:[Number],json:{write:!0}})],d.prototype,"layerIds",void 0),p([c({type:["top","visible","all","popup"],json:{write:!0}})],d.prototype,"layerOption",void 0),p([c({type:P,json:{write:!0}})],d.prototype,"mapExtent",void 0),p([c({type:Number,json:{write:!0}})],d.prototype,"maxAllowableOffset",void 0),p([c({type:Boolean,json:{write:!0}})],d.prototype,"returnFieldName",void 0),p([c({type:Boolean,json:{write:!0}})],d.prototype,"returnGeometry",void 0),p([c({type:Boolean,json:{write:!0}})],d.prototype,"returnM",void 0),p([c({type:Boolean,json:{write:!0}})],d.prototype,"returnUnformattedValues",void 0),p([c({type:Boolean,json:{write:!0}})],d.prototype,"returnZ",void 0),p([c({type:se,json:{write:!0}})],d.prototype,"spatialReference",void 0),p([c()],d.prototype,"sublayers",void 0),p([c({type:ie,json:{write:!0}})],d.prototype,"timeExtent",void 0),p([c({type:Number,json:{write:!0}})],d.prototype,"tolerance",void 0),p([c({type:Number,json:{write:!0}})],d.prototype,"width",void 0),d=G=p([A("esri.rest.support.IdentifyParameters")],d);const k=d;let S=class extends J{constructor(t){super(t),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(t,e){return T.fromJSON({attributes:{...e.attributes},geometry:{...e.geometry}})}writeFeature(t,e){if(!t)return;const{attributes:s,geometry:i}=t;s&&(e.attributes={...s}),i!=null&&(e.geometry=i.toJSON(),e.geometryType=le.toJSON(i.type))}};p([c({type:String,json:{write:!0}})],S.prototype,"displayFieldName",void 0),p([c({type:T})],S.prototype,"feature",void 0),p([ae("feature",["attributes","geometry"])],S.prototype,"readFeature",null),p([oe("feature")],S.prototype,"writeFeature",null),p([c({type:Number,json:{write:!0}})],S.prototype,"layerId",void 0),p([c({type:String,json:{write:!0}})],S.prototype,"layerName",void 0),S=p([A("esri.rest.support.IdentifyResult")],S);const Ne=S;async function _e(t,e,s){const i=(e=Ge(e)).geometry?[e.geometry]:[],r=ue(t);return r.path+="/identify",pe(i).then(n=>{const a=je(e,{geometry:n==null?void 0:n[0]}),o=ye({...r.query,f:"json",...a}),l=ce(o,s);return fe(r.path,l).then(Ve).then(u=>Me(u,e.sublayers))})}function Ve(t){const e=t.data;return e.results=e.results||[],e.exceededTransferLimit=!!e.exceededTransferLimit,e.results=e.results.map(s=>Ne.fromJSON(s)),e}function Ge(t){return t=k.from(t)}function Me(t,e){if(!(e!=null&&e.length))return t;const s=new Map;function i(r){s.set(r.id,r),r.sublayers&&r.sublayers.forEach(i)}e.forEach(i);for(const r of t.results)r.feature.sourceLayer=s.get(r.layerId);return t}let _=null;function Qe(t,e){return e.type==="tile"||e.type==="map-image"}let O=class extends he{constructor(t){super(t),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=de(async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch(()=>{}))})}initialize(){const t=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([me(()=>this.highlightGraphics,"change",e=>t(e.added),{onListenerAdd:e=>t(e)})])}async fetchPopupFeatures(t,e){var a,o;const{layerView:{layer:s,view:{scale:i}}}=this;if(!t)throw new U("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:s});const r=Ae(s.sublayers,i,e);if(!r.length)return[];const n=await Le(s,r);if(!((((o=(a=s.capabilities)==null?void 0:a.operations)==null?void 0:o.supportsIdentify)??!0)&&s.version>=10.5)&&!n)throw new U("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:s});return n?this._fetchPopupFeaturesUsingQueries(t,r,e):this._fetchPopupFeaturesUsingIdentify(t,r,e)}clearHighlights(){var t;(t=this.highlightGraphics)==null||t.removeAll()}highlight(t){const e=this.highlightGraphics;if(!e)return I();let s=null;if(t instanceof T?s=[t]:ge.isCollection(t)&&t.length>0?s=t.toArray():Array.isArray(t)&&t.length>0&&(s=t),s=s==null?void 0:s.filter(z),!(s!=null&&s.length))return I();for(const i of s){const r=i.sourceLayer;r!=null&&"geometryType"in r&&r.geometryType==="point"&&(i.visible=!1)}return e.addMany(s),I(()=>e.removeMany(s??[]))}async _updateHighlightedFeaturesSymbols(t){const{layerView:{view:e},highlightGraphics:s,highlightGraphicUpdated:i}=this;if(s&&i)for(const r of t){const n=r.sourceLayer&&"renderer"in r.sourceLayer&&r.sourceLayer.renderer;r.sourceLayer&&"geometryType"in r.sourceLayer&&r.sourceLayer.geometryType==="point"&&n&&"getSymbolAsync"in n&&n.getSymbolAsync(r).then(async a=>{var u;a||(a=new H);let o=null;const l="visualVariables"in n?(u=n.visualVariables)==null?void 0:u.find(y=>y.type==="size"):void 0;l&&(_||(_=(await be(()=>import("./index-9762d29e.js").then(y=>y.nt),["assets/index-9762d29e.js","assets/index-9284d34f.css"])).getSize),o=_(l,r,{view:e.type,scale:e.scale,shape:a.type==="simple-marker"?a.style:null})),o||(o="width"in a&&"height"in a&&a.width!=null&&a.height!=null?Math.max(a.width,a.height):"size"in a?a.size:16),s.includes(r)&&(r.symbol=new H({style:"square",size:o,xoffset:"xoffset"in a?a.xoffset:0,yoffset:"yoffset"in a?a.yoffset:0}),i(r,"symbol"),r.visible=!0)})}}async _updateHighlightedFeaturesGeometries(t){const{layerView:{layer:e,view:s},highlightGraphics:i,highlightGraphicUpdated:r}=this;if(this._highlightGeometriesResolution=t,!r||!(i!=null&&i.length)||!e.capabilities.operations.supportsQuery)return;const n=this._getTargetResolution(t),a=new Map;for(const u of i)if(!this._featuresResolutions.has(u)||this._featuresResolutions.get(u)>n){const y=u.sourceLayer;we(a,y,()=>new Map).set(u.getObjectId(),u)}const o=Array.from(a,([u,y])=>{const f=u.createQuery();return f.objectIds=[...y.keys()],f.outFields=[u.objectIdField],f.returnGeometry=!0,f.maxAllowableOffset=n,f.outSpatialReference=s.spatialReference,u.queryFeatures(f)}),l=await Promise.all(o);if(!this.destroyed)for(const{features:u}of l)for(const y of u){const f=y.sourceLayer,h=a.get(f).get(y.getObjectId());h&&i.includes(h)&&(h.geometry=y.geometry,r(h,"geometry"),this._featuresResolutions.set(h,n))}}_getTargetResolution(t){const e=t*V(this.layerView.view.spatialReference),s=e/16;return s<=10?0:t/e*s}async _fetchPopupFeaturesUsingIdentify(t,e,s){const i=await this._createIdentifyParameters(t,e,s);if(i==null)return[];const{results:r}=await _e(this.layerView.layer.parsedUrl,i);return r.map(n=>n.feature)}async _createIdentifyParameters(t,e,s){const{floors:i,layer:r,timeExtent:n,view:{spatialReference:a,scale:o}}=this.layerView,l=s!=null?s.event:null;if(!e.length)return null;await Promise.all(e.map(({sublayer:$})=>$.load().catch(()=>{})));const u=Math.min(xe("mapservice-popup-identify-max-tolerance"),r.allSublayers.reduce(($,v)=>v.renderer?q({renderer:v.renderer,event:l}):$,2)),y=this.createFetchPopupFeaturesQueryGeometry(t,u),f=ve(o,a),h=Math.round(y.width/f),F=new P({xmin:y.center.x-f*h,ymin:y.center.y-f*h,xmax:y.center.x+f*h,ymax:y.center.y+f*h,spatialReference:y.spatialReference});return new k({floors:i,gdbVersion:"gdbVersion"in r?r.gdbVersion:void 0,geometry:t,height:h,layerOption:"popup",mapExtent:F,returnGeometry:!0,spatialReference:a,sublayers:r.sublayers,timeExtent:n,tolerance:u,width:h})}async _fetchPopupFeaturesUsingQueries(t,e,s){const{layerView:{floors:i,timeExtent:r}}=this,n=s!=null?s.event:null,a=e.map(async({sublayer:o,popupTemplate:l})=>{var x;if(await o.load().catch(()=>{}),o.capabilities&&!o.capabilities.operations.supportsQuery)return[];const u=o.createQuery(),y=q({renderer:o.renderer,event:n}),f=this.createFetchPopupFeaturesQueryGeometry(t,y),h=new Set,[F]=await Promise.all([Fe(o,l),(x=o.renderer)==null?void 0:x.collectRequiredFields(h,o.fieldsIndex)]);$e(h,o.fieldsIndex,F);const $=Array.from(h).sort();if(u.geometry=f,u.outFields=$,u.timeExtent=r,i){const j=i.clone(),w=M(j,o);w!=null&&(u.where=u.where?`(${u.where}) AND (${w})`:w)}const v=this._getTargetResolution(f.width/y),m=await Te(l),R=o.geometryType==="point"||m&&m.arcadeUtils.hasGeometryOperations(l);R||(u.maxAllowableOffset=v);let{features:g}=await o.queryFeatures(u);const b=R?0:v;g=await Ue(o,g);for(const j of g)this._featuresResolutions.set(j,b);return g});return(await Promise.allSettled(a)).reduce((o,l)=>l.status==="fulfilled"?[...o,...l.value]:o,[]).filter(z)}};function Ae(t,e,s){const i=[];if(!t)return i;const r=n=>{const a=n.minScale===0||e<=n.minScale,o=n.maxScale===0||e>=n.maxScale;if(n.visible&&a&&o){if(n.sublayers)n.sublayers.forEach(r);else if(n.popupEnabled){const l=Re(n,{...s,defaultPopupTemplateEnabled:!1});l!=null&&i.unshift({sublayer:n,popupTemplate:l})}}};return t.map(r),i}function Te(t){var e;return(e=t.expressionInfos)!=null&&e.length||Array.isArray(t.content)&&t.content.some(s=>s.type==="expression")?Se():Promise.resolve()}async function Le(t,e){var s,i;if((i=(s=t.capabilities)==null?void 0:s.operations)!=null&&i.supportsQuery)return!0;try{return await Promise.any(e.map(({sublayer:r})=>r.load().then(()=>r.capabilities.operations.supportsQuery)))}catch{return!1}}async function Ue(t,e){const s=t.renderer;return s&&"defaultSymbol"in s&&!s.defaultSymbol&&(e=s.valueExpression?await Promise.all(e.map(i=>s.getSymbolAsync(i).then(r=>r?i:null))).then(i=>i.filter(r=>r!=null)):e.filter(i=>s.getSymbol(i)!=null)),e}p([c({constructOnly:!0})],O.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),p([c({constructOnly:!0})],O.prototype,"layerView",void 0),p([c({constructOnly:!0})],O.prototype,"highlightGraphics",void 0),p([c({constructOnly:!0})],O.prototype,"highlightGraphicUpdated",void 0),p([c({constructOnly:!0})],O.prototype,"updatingHandles",void 0),O=p([A("esri.views.layers.support.MapService")],O);function qe(t,e,s,i=new P){let r=0;if(s.type==="2d")r=e*(s.resolution??0);else if(s.type==="3d"){const y=s.overlayPixelSizeInMapUnits(t),f=s.basemapSpatialReference;r=f==null||f.equals(s.spatialReference)?e*y:V(f)/V(s.spatialReference)}const n=t.x-r,a=t.y-r,o=t.x+r,l=t.y+r,{spatialReference:u}=s;return i.xmin=Math.min(n,o),i.ymin=Math.min(a,l),i.xmax=Math.max(n,o),i.ymax=Math.max(a,l),i.spatialReference=u,i}new P;export{O as G,Qe as S,qe as r};
