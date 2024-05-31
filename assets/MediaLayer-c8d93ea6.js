import{F as r,H as v,ig as $e,e5 as F,E as G,G as l,b1 as m,dl as me,f as fe,fe as T,s as J,hb as H,jS as be,bA as Z,bB as ne,jT as A,jU as le,bb as oe,h7 as R,bz as _e,jV as K,be as se,ia as Ie,jW as ae,jX as je,jY as Me,fN as ye,dh as Se,dG as ce,aH as ge,dL as Le,dK as Ee,dH as Oe,dJ as He,jZ as Te,ad as Ce,aK as We,aP as Ve,j_ as Ne,V as D,ix as ze,gc as Ae,J as Ge,aM as Ue,Y as Be,au as Fe,d as Je,bj as Ke,fa as qe,hf as ke,dn as De,ds as Ye,dq as Ze,dt as Qe,eg as Xe,dC as et}from"./index-9762d29e.js";import{p as tt}from"./imageUtils-3bc10c56.js";import{h as $,j as xe,i as nt}from"./perspectiveUtils-a275886d.js";import{t as ot,e as Y}from"./mat3f64-221ce671.js";import{p as st}from"./resourceExtension-f09d7ca0.js";import{o as rt}from"./BoundsStore-34aa96f9.js";import"./normalizeUtilsSync-ff112d00.js";import"./PooledRBush-9c83aa47.js";let te=class extends $e{projectOrWarn(e,t){if(e==null)return e;const{geometry:o,pending:n}=F(e,t);return n?null:n||o?o:(G.getLogger(this).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:e,sourceSpatialReference:e.spatialReference,targetSpatialReference:t}),null)}};te=r([v("esri.layers.support.GeoreferenceBase")],te);const Q=te,X=Y(),p=R();let B=class extends _e{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null}};r([l()],B.prototype,"sourcePoint",void 0),r([l({type:m})],B.prototype,"mapPoint",void 0),B=r([v("esri.layers.support.ControlPoint")],B);let x=class extends me(Q){constructor(e){super(e),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0}readControlPoints(e,t){const o=fe.fromJSON(t.spatialReference),n=ot(...t.coefficients,1);return e.map(s=>(T(p,s.x,s.y),$(p,p,n),{sourcePoint:s,mapPoint:new m({x:p[0],y:p[1],spatialReference:o})}))}writeControlPoints(e,t,o,n){if(this.transform!=null)e!=null&&f(e[0])&&(t.controlPoints=e.map(s=>{const i=s.sourcePoint;return{x:i.x,y:i.y}}),t.spatialReference=e[0].mapPoint.spatialReference.toJSON(),t.coefficients=this.transform.slice(0,8));else{const s=new J("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration.",{layer:n==null?void 0:n.layer,georeference:this});n!=null&&n.messages?n.messages.push(s):G.getLogger(this).error(s.name,s.message)}}get coords(){if(this.controlPoints==null)return null;const e=this._updateTransform(X);if(e==null||!f(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return ut(e,this.width,this.height,t)}set coords(e){if(this.controlPoints==null||!f(this.controlPoints[0]))return;const t=this.controlPoints[0].mapPoint.spatialReference;if((e=this.projectOrWarn(e,t))==null)return;const{width:o,height:n}=this,{rings:[[s,i,a,c]]}=e,u={sourcePoint:H(0,n),mapPoint:new m({x:s[0],y:s[1],spatialReference:t})},h={sourcePoint:H(0,0),mapPoint:new m({x:i[0],y:i[1],spatialReference:t})},d={sourcePoint:H(o,0),mapPoint:new m({x:a[0],y:a[1],spatialReference:t})},g={sourcePoint:H(o,n),mapPoint:new m({x:c[0],y:c[1],spatialReference:t})};f(u)&&f(h)&&f(d)&&f(g)&&(ue(X,u,h,d,g),this.controlPoints=this.controlPoints.map(({sourcePoint:w})=>(T(p,w.x,w.y),$(p,p,X),{sourcePoint:w,mapPoint:new m({x:p[0],y:p[1],spatialReference:t})})))}get inverseTransform(){return this.transform==null?null:be(Y(),this.transform)}get transform(){return this._updateTransform()}toMap(e){if(e==null||this.transform==null||this.controlPoints==null||!f(this.controlPoints[0]))return null;T(p,e.x,e.y);const t=this.controlPoints[0].mapPoint.spatialReference;return $(p,p,this.transform),new m({x:p[0],y:p[1],spatialReference:t})}toSource(e){if(e==null||this.inverseTransform==null||this.controlPoints==null||!f(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return e=e.normalize(),(e=F(e,t).geometry)==null?null:(T(p,e.x,e.y),$(p,p,this.inverseTransform),H(p[0],p[1]))}toSourceNormalized(e){const t=this.toSource(e);return t!=null&&(t.x/=this.width,t.y/=this.height),t}_updateTransform(e){const{controlPoints:t,width:o,height:n}=this;if(!(t!=null&&o>0&&n>0))return null;const[s,i,a,c]=t;if(!f(s))return null;const u=s.mapPoint.spatialReference,h=this._projectControlPoint(i,u),d=this._projectControlPoint(a,u),g=this._projectControlPoint(c,u);if(!h.valid||!d.valid||!g.valid||!f(h.controlPoint))return null;e==null&&(e=Y());let w=null;return w=f(d.controlPoint)&&f(g.controlPoint)?ue(e,s,h.controlPoint,d.controlPoint,g.controlPoint):f(d.controlPoint)?lt(e,s,h.controlPoint,d.controlPoint):it(e,s,h.controlPoint),w.every(we=>we===0)?null:w}_projectControlPoint(e,t){if(!f(e))return{valid:!0,controlPoint:e};const{sourcePoint:o,mapPoint:n}=e,{geometry:s,pending:i}=F(n,t);return i?{valid:!1,controlPoint:null}:i||s?{valid:!0,controlPoint:{sourcePoint:o,mapPoint:s}}:(G.getLogger(this).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:e,sourceSpatialReference:n.spatialReference,targetSpatialReference:t}),{valid:!1,controlPoint:null})}};function f(e){return(e==null?void 0:e.sourcePoint)!=null&&e.mapPoint!=null}r([l({type:[B],json:{write:{allowNull:!1,isRequired:!0}}})],x.prototype,"controlPoints",void 0),r([Z("controlPoints")],x.prototype,"readControlPoints",null),r([ne("controlPoints")],x.prototype,"writeControlPoints",null),r([l()],x.prototype,"coords",null),r([l({json:{write:!0}})],x.prototype,"height",void 0),r([l({readOnly:!0})],x.prototype,"inverseTransform",null),r([l({readOnly:!0})],x.prototype,"transform",null),r([l({json:{write:!0}})],x.prototype,"width",void 0),x=r([v("esri.layers.support.ControlPointsGeoreference")],x);const b=R(),_=R(),C=R(),E=R(),I=R(),j=R(),W=R(),O=R(),q=Math.PI/2;function M(e,t,o){T(e,o.sourcePoint.x,o.sourcePoint.y),T(t,o.mapPoint.x,o.mapPoint.y)}function it(e,t,o){return M(b,I,t),M(_,j,o),A(C,_,b,q),A(E,b,_,q),A(W,j,I,-q),A(O,I,j,-q),re(e,b,_,C,E,I,j,W,O)}function lt(e,t,o,n){return M(b,I,t),M(_,j,o),M(C,W,n),le(E,b,_,.5),A(E,C,E,Math.PI),le(O,I,j,.5),A(O,W,O,Math.PI),re(e,b,_,C,E,I,j,W,O)}function ue(e,t,o,n,s){return M(b,I,t),M(_,j,o),M(C,W,n),M(E,O,s),re(e,b,_,C,E,I,j,W,O)}const at=new Array(8).fill(0),ct=new Array(8).fill(0);function pe(e,t,o,n,s){return e[0]=t[0],e[1]=t[1],e[2]=o[0],e[3]=o[1],e[4]=n[0],e[5]=n[1],e[6]=s[0],e[7]=s[1],e}function re(e,t,o,n,s,i,a,c,u){return xe(e,pe(at,t,o,n,s),pe(ct,i,a,c,u))}function ut(e,t,o,n){const s=K(0,o),i=K(0,0),a=K(t,0),c=K(t,o);return $(s,s,e),$(i,i,e),$(a,a,e),$(c,c,e),new oe({rings:[[s,i,a,c,s]],spatialReference:n})}const Pe=x,U=R();let S=class extends Q{constructor(e){super(e),this.bottomLeft=null,this.bottomRight=null,this.topLeft=null,this.topRight=null,this.type="corners"}get coords(){let{topLeft:e,topRight:t,bottomLeft:o,bottomRight:n}=this;if(e==null||t==null||o==null||n==null)return null;const s=e.spatialReference;return t=this.projectOrWarn(t,s),o=this.projectOrWarn(o,s),n=this.projectOrWarn(n,s),t==null||o==null||n==null?null:new oe({rings:[[[o.x,o.y],[e.x,e.y],[t.x,t.y],[n.x,n.y],[o.x,o.y]]],spatialReference:s})}set coords(e){const{topLeft:t}=this;if(t==null)return;const o=t.spatialReference;if((e=this.projectOrWarn(e,o))==null)return;const{rings:[[n,s,i,a]]}=e;this.bottomLeft=new m({x:n[0],y:n[1],spatialReference:o}),this.topLeft=new m({x:s[0],y:s[1],spatialReference:o}),this.topRight=new m({x:i[0],y:i[1],spatialReference:o}),this.bottomRight=new m({x:a[0],y:a[1],spatialReference:o})}toSourceNormalized(e){const{topLeft:t,topRight:o,bottomRight:n,bottomLeft:s}=this;if(e==null||t==null||o==null||n==null||s==null)return null;const i=t.spatialReference;e=e.normalize();const a=F(e,i).geometry;if(a==null)return null;T(U,a.x,a.y);const c=xe(Y(),[t.x,t.y,s.x,s.y,o.x,o.y,n.x,n.y],[0,0,0,1,1,0,1,1]);return $(U,U,c),H(U[0],U[1])}};r([l()],S.prototype,"coords",null),r([l({type:m})],S.prototype,"bottomLeft",void 0),r([l({type:m})],S.prototype,"bottomRight",void 0),r([l({type:m})],S.prototype,"topLeft",void 0),r([l({type:m})],S.prototype,"topRight",void 0),S=r([v("esri.layers.support.CornersGeoreference")],S);const pt=S;let V=class extends Q{constructor(e){super(e),this.extent=null,this.rotation=0,this.type="extent-and-rotation"}get coords(){if(this.extent==null)return null;const{xmin:e,ymin:t,xmax:o,ymax:n,spatialReference:s}=this.extent;let i;if(this.rotation){const{x:a,y:c}=this.extent.center,u=ee(a,c,this.rotation);i=[u(e,t),u(e,n),u(o,n),u(o,t)],i.push(i[0])}else i=[[e,t],[e,n],[o,n],[o,t],[e,t]];return new oe({rings:[i],spatialReference:s})}set coords(e){if(e==null||this.extent==null)return;const t=this.extent.spatialReference;if(e=this.projectOrWarn(e,t),(e==null?void 0:e.extent)==null)return;const{rings:[[o,n,s]],extent:{center:{x:i,y:a}}}=e,c=Ie(Math.PI/2-Math.atan2(n[1]-o[1],n[0]-o[0])),u=ee(i,a,-c),[h,d]=u(o[0],o[1]),[g,w]=u(s[0],s[1]);this.extent=new se({xmin:h,ymin:d,xmax:g,ymax:w,spatialReference:t}),this.rotation=c}toSourceNormalized(e){const{extent:t,rotation:o}=this;if(e==null||t==null)return null;const{xmin:n,ymin:s,xmax:i,ymax:a,center:c,spatialReference:u}=t;e=e.normalize();const h=F(e,u).geometry;if(h==null)return null;let d=h.x,g=h.y;return o&&([d,g]=ee(c.x,c.y,-o)(d,g)),H(ae(d,n,i,0,1),ae(g,a,s,0,1))}};function ee(e,t,o){const n=je(o),s=Math.cos(n),i=Math.sin(n);return(a,c)=>[s*(a-e)+i*(c-t)+e,s*(c-t)-i*(a-e)+t]}r([l()],V.prototype,"coords",null),r([l({type:se})],V.prototype,"extent",void 0),r([l({type:Number})],V.prototype,"rotation",void 0),V=r([v("esri.layers.support.ExtentAndRotationGeoreference")],V);const ht=V,dt={key:"type",base:Q,typeMap:{"control-points":Pe,corners:pt,"extent-and-rotation":ht}};let N=class extends Me(me(ye)){constructor(e){super(e),this.georeference=null,this.opacity=1}readGeoreference(e){return Pe.fromJSON(e)}get contentWidth(){return 0}get contentHeight(){return 0}toSource(e){const{georeference:t,contentWidth:o,contentHeight:n}=this;if(e==null||t==null||o===0||n===0)return null;const s=t.toSourceNormalized(e);return s==null?null:(s.x*=o,s.y*=n,s)}};r([l({types:dt,json:{write:!0}})],N.prototype,"georeference",void 0),r([Z("georeference")],N.prototype,"readGeoreference",null),r([l()],N.prototype,"opacity",void 0),N=r([v("esri.layers.support.MediaElementBase")],N);const ie=N;let P=class extends ie{constructor(t){super(t),this.animationOptions=null,this.content=null,this.image=null,this.type="image",this.image=null}load(){const t=this.image;if(typeof t=="string"){const o=tt(t).then(n=>{this._set("content",n)});this.addResolvingPromise(o)}else if(t instanceof HTMLImageElement){const o=t.decode().then(()=>{this._set("content",t)});this.addResolvingPromise(o)}else t?this._set("content",t):this.addResolvingPromise(Promise.reject(new J("image-element:invalid-image-type","Invalid image type",{image:t})));return Promise.resolve(this)}get contentWidth(){return this.content==null?0:this.content instanceof HTMLImageElement?this.content.naturalWidth:this.content.width}get contentHeight(){return this.content==null?0:this.content instanceof HTMLImageElement?this.content.naturalHeight:this.content.height}readImage(t,o,n){return Se(o.url,n)}writeImage(t,o,n,s){if(t==null)return;const i=s==null?void 0:s.portalItem,a=s==null?void 0:s.resources;if(!i||!a)return void(typeof t=="string"&&(o[n]=ce(t,s)));const c=typeof t!="string"||ge(t)||Le(t)?null:t;if(c){if(Ee(c)==null)return void(o[n]=c);const u=ce(c,{...s,verifyItemRelativeUrls:s!=null&&s.verifyItemRelativeUrls?{writtenUrls:s.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},Oe.NO);if(i&&u&&!He(u))return a.toKeep.push({resource:i.resourceFromPath(u),compress:!1}),void(o[n]=u)}o[n]="<pending>",a.pendingOperations.push(mt(t).then(u=>{const h=yt(u,i);o[n]=h.itemRelativeUrl,a.toAdd.push({resource:h,content:{type:"blob",blob:u},compress:!1,finish:d=>{this.image=d.url}})}))}};r([l()],P.prototype,"animationOptions",void 0),r([l({readOnly:!0})],P.prototype,"content",void 0),r([l({readOnly:!0})],P.prototype,"contentWidth",null),r([l({readOnly:!0})],P.prototype,"contentHeight",null),r([l({json:{name:"url",type:String}})],P.prototype,"image",void 0),r([Z("image",["url"])],P.prototype,"readImage",null),r([ne("image")],P.prototype,"writeImage",null),r([l({readOnly:!0,json:{name:"mediaType"}})],P.prototype,"type",void 0),P=r([v("esri.layers.support.ImageElement")],P);const ve=P;async function mt(e){return typeof e=="string"?ge(e)?Te(e):(await Ce(e,{responseType:"blob"})).data:new Promise(t=>ft(e).toBlob(t))}function ft(e){if(e instanceof HTMLCanvasElement)return e;const t=e instanceof HTMLImageElement?e.naturalWidth:e.width,o=e instanceof HTMLImageElement?e.naturalHeight:e.height,n=document.createElement("canvas"),s=n.getContext("2d");return n.width=t,n.height=o,e instanceof HTMLImageElement?s.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&s.putImageData(e,0,0),n}function yt(e,t){const o=We(),n=`${Ve("media",o)}.${st({type:"blob",blob:e})}`;return t.resourceFromPath(n)}let L=class extends ie{constructor(e){super(e),this.autoplay=!0,this.content=null,this.type="video"}load(){const e=this.video;if(typeof e=="string"){const t=document.createElement("video");t.src=e,t.crossOrigin="anonymous",t.autoplay=!0,t.muted=!0,t.loop=!0,this.addResolvingPromise(this._loadVideo(t).then(()=>{this._set("content",t)}))}else e instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(e).then(()=>{this._set("content",e)})):this.addResolvingPromise(Promise.reject(new J("video-element:invalid-video-type","Invalid video type",{video:e})));return Promise.resolve(this)}get contentWidth(){var e;return((e=this.content)==null?void 0:e.videoWidth)??0}get contentHeight(){var e;return((e=this.content)==null?void 0:e.videoHeight)??0}set video(e){this.loadStatus==="not-loaded"?this._set("video",e):G.getLogger(this).error("#video","video cannot be changed after the element is loaded.")}_loadVideo(e){return new Promise((t,o)=>{var s;const n=Ne(e,"canplay",()=>{this.removeHandles("canplay"),this.autoplay?e.play().then(t,o):t()});this.addHandles(n,"canplay"),e.crossOrigin!=="anonymous"&&(e.crossOrigin="anonymous",(s=e.src)!=null&&s.includes("blob:")||(e.src=e.src))})}};r([l()],L.prototype,"autoplay",void 0),r([l({readOnly:!0})],L.prototype,"content",void 0),r([l({readOnly:!0})],L.prototype,"contentWidth",null),r([l({readOnly:!0})],L.prototype,"contentHeight",null),r([l()],L.prototype,"video",null),L=r([v("esri.layers.support.VideoElement")],L);const Re=L,gt={key:"type",defaultKeyValue:"image",base:ie,typeMap:{image:ve,video:Re}},he=D.ofType(gt);let z=class extends ye.LoadableMixin(ze(Ae.EventedAccessor)){constructor(e){super(e),this._index=new rt,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=t=>{for(const n of t.removed){const s=this._elementViewsMap.get(n);this._elementViewsMap.delete(n),this._index.delete(s),this.removeHandles(s),s.destroy(),this.notifyChange("fullExtent")}const{spatialReference:o}=this;for(const n of t.added){if(this._elementViewsMap.get(n))continue;const s=new nt({spatialReference:o,element:n});this._elementViewsMap.set(n,s);const i=Ge(()=>s.coords,()=>this._updateIndexForElement(s,!1));this._updateIndexForElement(s,!0),this.addHandles(i,s)}this._elementsIndexes.clear(),this.elements.forEach((n,s)=>this._elementsIndexes.set(n,s)),this.emit("refresh")},this.elements=new he}async load(e){if(Ue(e),!this.spatialReference){const t=this.elements.find(o=>{var n;return((n=o.georeference)==null?void 0:n.coords)!=null});this._set("spatialReference",t?t.georeference.coords.spatialReference:fe.WGS84)}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.addHandles(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(e){this._set("elements",Be(e,this._get("elements"),he))}get fullExtent(){if(this.loadStatus==="not-loaded")return null;const e=this._index.fullBounds;return e==null?null:new se({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){this.loadStatus==="not-loaded"?this._set("spatialReference",e):G.getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}async queryElements(e,t){await this.load(),await Fe(e.spatialReference,this.spatialReference,null,t);const o=Je(e.spatialReference,this.spatialReference)?e:Ke(e,this.spatialReference);if(!o)return[];const n=o.normalize(),s=[];for(const i of n)this._index.forEachInBounds(qe(i),({normalizedCoords:a,element:c})=>{a!=null&&ke(i,a)&&s.push(c)});return s.sort((i,a)=>this._elementsIndexes.get(i)-this._elementsIndexes.get(a)),s}_updateIndexForElement(e,t){const o=e.normalizedBounds,n=this._index.has(e),s=o!=null;this._index.delete(e),s&&this._index.set(e,o),this.notifyChange("fullExtent"),t||(n!==s?this.emit("refresh"):this.emit("change",{element:e.element}))}};r([l()],z.prototype,"elements",null),r([l({readOnly:!0})],z.prototype,"fullExtent",null),r([l()],z.prototype,"spatialReference",null),z=r([v("esri.layers.support.LocalMediaElementSource")],z);const k=z;function de(e){return typeof e=="object"&&e!=null&&"type"in e}let y=class extends De(Ye(Ze(Qe(et)))){constructor(e){super(e),this.effectiveSource=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this.source=new k}load(e){const t=this.source;if(!t)return this.addResolvingPromise(Promise.reject(new J("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer."))),Promise.resolve(this);const o=de(t)?new k({elements:new D([t])}):t;this._set("effectiveSource",o),this.spatialReference&&(o.spatialReference=this.spatialReference);const n=o.load(e).then(()=>{this.spatialReference=o.spatialReference});return this.addResolvingPromise(n),Promise.resolve(this)}destroy(){var e,t;(e=this.effectiveSource)==null||e.destroy(),(t=this.source)==null||t.destroy()}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}set source(e){this.loadStatus==="not-loaded"?this._set("source",e):G.getLogger(this).error("#source","source cannot be changed after the layer is loaded.")}castSource(e){return e?Array.isArray(e)?new k({elements:new D(e)}):e instanceof D?new k({elements:e}):e:null}readSource(e,t,o){const n=t.mediaType==="image"?new ve:t.mediaType==="video"?new Re:null;return n==null||n.read(t,o),n}writeSource(e,t,o,n){var s;e&&de(e)&&e.type==="image"?e.write(t,n):n!=null&&n.messages&&((s=n==null?void 0:n.messages)==null||s.push(new J("media-layer:unsupported-source","source must be an 'ImageElement'")))}};r([l({readOnly:!0})],y.prototype,"effectiveSource",void 0),r([l({type:String})],y.prototype,"copyright",void 0),r([l({readOnly:!0})],y.prototype,"fullExtent",null),r([l({type:["MediaLayer"]})],y.prototype,"operationalLayerType",void 0),r([l({type:["show","hide"]})],y.prototype,"listMode",void 0),r([l({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1}}})],y.prototype,"source",null),r([Xe("source")],y.prototype,"castSource",null),r([Z("source",["url"])],y.prototype,"readSource",null),r([ne("source")],y.prototype,"writeSource",null),r([l()],y.prototype,"spatialReference",void 0),r([l({readOnly:!0})],y.prototype,"type",void 0),y=r([v("esri.layers.MediaLayer")],y);const jt=y;export{jt as default};
