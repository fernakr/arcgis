import{k7 as ze,eM as pe,a5 as qe,a6 as je,k8 as We,k9 as Qe,E as ae,a1 as k,eU as se,s as p,hO as ye,ev as Xe,gs as Ze,c$ as me,hC as Ce,t as et,ka as tt,kb as st,ay as it}from"./index-32200583.js";import{c as xe,d as Me,S as ge,E as _e,F as be,G as Ee,H as Te,I as j,J as W,K as Re,P as rt,R as nt,Q as at,U as ot}from"./definitions-fd2386f9.js";import{r as lt}from"./TiledDisplayObject-def6cac3.js";import{L as J,E as z,S as b,V as ut,W as H,K as dt}from"./color-97ee9019.js";import{b as ct}from"./WGLContainer-4837399a.js";import{d as ht,n as ft,l as pt,f as Se}from"./visualVariablesUtils-294ba6f1.js";import{n as yt}from"./cimAnalyzer-4558feca.js";import{f as C,_ as Oe,A as mt}from"./GeometryUtils-317757bd.js";import"./alignmentUtils-ae955d28.js";import"./number-e491b09e.js";import"./ExpandedCIM-627604bd.js";import{e as Ve}from"./util-b70432fe.js";import{D as De,L as Ie,U as xt}from"./enums-bdecffa2.js";import{E as gt}from"./FramebufferObject-d94676df.js";import{e as Le,T as Ne}from"./Texture-b83f1754.js";class R{constructor(e){if(this.next=null,!Array.isArray(e))return void(this.data=e);this.data=e[0];let t=this;for(let s=1;s<e.length;s++)t.next=new R([e[s]]),t=t.next}*values(){let e=this;for(;e;)yield e.data,e=e.next}forEach(e){let t=this;for(;t;)e(t.data),t=t.next}find(e){var t;return e(this.data)?this:(t=this.next)==null?void 0:t.find(e)}max(e,t=this){const s=e(this.data)>e(t.data)?this:t;return this.next?this.next.max(e,s):s}remove(e,t=null){var s;return this===e?t?(t.next=this.next,t):this.next:((s=this.next)==null?void 0:s.remove(e,this))??null}get last(){return this.next?this.next.last:this}}let us=class{constructor(e){this._head=null,e!=null&&(this._head=new R(e))}get head(){return this._head}maxAvailableSpace(){if(this._head==null)return 0;const e=this._head.max(t=>t.end-t.start);return e.data.end-e.data.start}firstFit(e){if(this._head==null)return null;let t=null,s=this._head;for(;s;){const r=s.data.end-s.data.start;if(r===e)return t?t.next=s.next:this._head=s.next,s.data.start;if(r>e){const n=s.data.start;return s.data.start+=e,n}t=s,s=s.next}return null}free(e,t){const s=e+t;if(this._head==null){const o=new R({start:e,end:s});return void(this._head=o)}if(s<=this._head.data.start){if(s===this._head.data.start)return void(this._head.data.start-=t);const o=new R({start:e,end:s});return o.next=this._head,void(this._head=o)}let r=this._head,n=r.next;for(;n;){if(n.data.start>=s){if(r.data.end===e){if(r.data.end+=t,r.data.end===n.data.start){const l=n.data.end-n.data.start;return r.data.end+=l,void(r.next=n.next)}return}if(n.data.start===s)return void(n.data.start-=t);const o=new R({start:e,end:s});return o.next=r.next,void(r.next=o)}r=n,n=n.next}if(e===r.data.end)return void(r.data.end+=t);const a=new R({start:e,end:s});r.next=a}},_t=class{acquire(e){return{refCount:1,version:-1,labelMat2d:ze(),tileMat3:pe(),dvs:pe()}}release(e){}},bt=class ie extends lt{constructor(e,t,s,r){super(e,t,s,r,xe,xe)}destroy(){super.destroy(),this._transforms&&ie.TransformCache.release(this.key.hash)}setTransform(e){const t=this.resolution/e.resolution,s=this.transforms.tileMat3,[r,n]=e.toScreenNoRotation([0,0],[this.x,this.y]),a=this.width/this.rangeX*t,o=this.height/this.rangeY*t;qe(s,a,0,0,0,o,0,r,n,1),je(this.transforms.dvs,e.displayViewMat3,s);const l=this.transforms.labelMat2d,u=window.devicePixelRatio,d=We(ze(),a*u,0,0,o*u,r*u,n*u);Qe(l,e.viewMat2d,d)}_createTransforms(){return ie.TransformCache.acquire(this.key.hash)}};bt.TransformCache=new _t;let N=class{constructor(e,t,s,r,n){this.target=e,this.geometryType=t,this.materialKey=s,this.indexFrom=r,this.indexCount=n}get indexEnd(){return this.indexFrom+this.indexCount}extend(e){this.indexCount+=e}},fs=class Ae{constructor(e,t){this.geometryType=0,this._target=e,this.geometryType=t}static from(e,t,s,r){const n=new Ae(e,t);if(r!=null)for(const a of r)s.seekIndex(a),n.addRecord(s);else for(;s.next();)n.addRecord(s);return n}addRecord(e){const t=this._target,s=this.geometryType,r=e.materialKey;let n=e.indexFrom,a=e.indexCount;const o=e.vertexFrom,l=e.vertexCount;if(a||(n=o,a=l),this._head==null){const c=new N(t,s,r,n,a);return void(this._head=new R(c))}let u=null,d=this._head;for(;d;){if(n<d.data.indexFrom)return this._insert(r,n,a,u,d);u=d,d=d.next}this._insert(r,n,a,u,null)}forEach(e){this._head!=null&&this._head.forEach(e)}*infos(){if(this._head!=null)for(const e of this._head.values())yield e}_insert(e,t,s,r,n){if(r==null&&n==null){const a=new N(this._target,this.geometryType,e,t,s);this._head=new R(a)}return r==null&&n!=null?this._insertAtHead(e,t,s,n):r!=null&&n==null?this._insertAtEnd(e,t,s,r):r!=null&&n!=null?this._insertAtMiddle(e,t,s,r,n):void 0}_insertAtHead(e,t,s,r){const n=t+s;if(e===r.data.materialKey&&n===r.data.indexFrom)r.data.indexFrom=t,r.data.indexCount+=s;else{const a=new N(this._target,this.geometryType,e,t,s);this._head=new R(a),this._head.next=r}}_insertAtEnd(e,t,s,r){if(r.data.materialKey===e&&r.data.indexEnd===t)r.data.indexCount+=s;else{const n=new N(this._target,this.geometryType,e,t,s),a=new R(n);r.next=a}}_insertAtMiddle(e,t,s,r,n){const a=t+s;if(r.data.materialKey===e&&r.data.indexEnd===t)r.data.indexCount+=s,r.data.materialKey===n.data.materialKey&&r.data.indexEnd===n.data.indexFrom&&(r.data.indexCount+=n.data.indexCount,r.next=n.next);else if(e===n.data.materialKey&&a===n.data.indexFrom)n.data.indexFrom=t,n.data.indexCount+=s;else{const o=new N(this._target,this.geometryType,e,t,s),l=new R(o);r.next=l,l.next=n}}};const Y=2147483647;class A{constructor(e){this._head=e,this._cursor=e}static from(e,t=0,s=e.byteLength/w.BYTES_PER_RECORD-t){const r=new w(new Int32Array(e,t*w.BYTES_PER_RECORD,s*w.ELEMENTS_PER_RECORD));return new A(r)}size(){let e=this._cursor,t=0;for(;e;)t+=e.size(),e=e._link;return t}get id(){return this._cursor.id}set id(e){this._cursor.id=e}get materialKey(){return this._cursor.materialKey}set materialKey(e){this._cursor.materialKey=e}get insertAfter(){return this._cursor.insertAfter}get indexFrom(){return this._cursor.indexFrom}set indexFrom(e){this._cursor.indexFrom=e}get indexCount(){return this._cursor.indexCount}set indexCount(e){this._cursor.indexCount=e}get vertexFrom(){return this._cursor.vertexFrom}set vertexFrom(e){this._cursor.vertexFrom=e}get vertexCount(){return this._cursor.vertexCount}set vertexCount(e){this._cursor.vertexCount=e}get sortKey(){return this._cursor.sortKey}set sortKey(e){this._cursor.sortKey=e}get index(){return this._cursor._indexStart+this._cursor._index}seekIndex(e){let t=e;for(this._cursor=this._head;this._cursor;){const s=this._cursor.size();if(t<s)return this._cursor._index=t,!0;t-=s,this._cursor=this._cursor._link}return!1}forEach(e){const t=this.getCursor();for(;t.next();)e(t)}link(e){if(!this._head)return void(this._head=e._head);let t=this._head;for(;t._link;)t=t._link;t._link=e._head,t._link._indexStart=t._indexStart+t.size()}getCursor(){return this.copy()}getDrawInfo(e,t){return new N(e,t,this.materialKey,this.indexFrom,this.indexCount)}lookup(e){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(e);){if(!this._cursor._link)return!1;this._cursor=this._cursor._link}return!!this._cursor}copy(){var r;const e=new A((r=this._head)==null?void 0:r.copy());if(!e._head)return e;let t=e._head,s=e._head._link;for(;s;)t._link=s.copy(),t=s,s=t._link;return e}next(){return!!this._cursor&&(!!this._cursor.next()||!!this._cursor._link&&(this._cursor=this._cursor._link,this.next()))}peekId(){return this._cursor.peekId()??this._cursor._link.peekId()}delete(e){let t=this._head,s=null;for(;t;){if(t.delete(e))return t.isEmpty()&&(s!=null&&(s._link=t._link),t===this._head&&(this._head=t._link),t===this._cursor&&(this._cursor=t._link)),!0;s=t,t=t._link}return!1}}A.ELEMENTS_PER_RECORD=Me,A.BYTES_PER_RECORD=A.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT;let w=class f{constructor(e){this._link=null,this._index=-1,this._indexStart=0,this._packedRecordsF32=null,this._deletedCount=0,this._offsets={instance:null},this._packedRecords=e}static from(e,t=0,s=e.byteLength/this.BYTES_PER_RECORD-t){return new f(new Int32Array(e,t*this.BYTES_PER_RECORD,s*this.ELEMENTS_PER_RECORD))}delete(e){const t=this._index,s=this.lookup(e);if(s)for(this.id=Y,++this._deletedCount;this.next()&&this.id===e;)this.id=Y,++this._deletedCount;return this._index=t,s}isEmpty(){return this._deletedCount===this.size()}link(e){this._link?this._link.link(e):this._link=e}lookup(e){if(this._offsets.instance==null){this._offsets.instance=new Map;const s=this.copy();s._index=-1;let r=0;for(;s.next();)s.id!==r&&(this._offsets.instance.set(s.id,s._index),r=s.id)}if(!this._offsets.instance.has(e))return!1;const t=this._index;return this._index=this._offsets.instance.get(e),this.id!==Y||(this._index=t,!1)}get id(){return this._packedRecords[this._index*f.ELEMENTS_PER_RECORD]}set id(e){this._packedRecords[this._index*f.ELEMENTS_PER_RECORD]=e}get materialKey(){return this._packedRecords[this._index*f.ELEMENTS_PER_RECORD+1]}set materialKey(e){this._packedRecords[this._index*f.ELEMENTS_PER_RECORD+1]=e}get insertAfter(){return this._packedRecords[this._index*f.ELEMENTS_PER_RECORD+2]}get indexFrom(){return this._packedRecords[this._index*f.ELEMENTS_PER_RECORD+3]}set indexFrom(e){this._packedRecords[this._index*f.ELEMENTS_PER_RECORD+3]=e}get indexCount(){return this._packedRecords[this._index*f.ELEMENTS_PER_RECORD+4]}set indexCount(e){this._packedRecords[this._index*f.ELEMENTS_PER_RECORD+4]=e}get vertexFrom(){return this._packedRecords[this._index*f.ELEMENTS_PER_RECORD+5]}set vertexFrom(e){this._packedRecords[this._index*f.ELEMENTS_PER_RECORD+5]=e}get vertexCount(){return this._packedRecords[this._index*f.ELEMENTS_PER_RECORD+6]}set vertexCount(e){this._packedRecords[this._index*f.ELEMENTS_PER_RECORD+6]=e}get sortKey(){return this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*f.ELEMENTS_PER_RECORD+7]}set sortKey(e){this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*f.ELEMENTS_PER_RECORD+7]=e}get index(){return this._index}size(){return this._packedRecords.length/f.ELEMENTS_PER_RECORD}next(){for(;++this._index<this.size()&&this.id===Y;);return this._index<this.size()}peekId(){const e=(this._index+1)*f.ELEMENTS_PER_RECORD;return e>=this._packedRecords.length?0:this._packedRecords[e]}getCursor(){return this.copy()}copy(){const e=new f(this._packedRecords);return e._indexStart=this._indexStart,e._link=this._link,e._index=this._index,e._offsets=this._offsets,e._deletedCount=this._deletedCount,e}};w.ELEMENTS_PER_RECORD=Me,w.BYTES_PER_RECORD=w.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT;function $e(i){if(!i)return J.NONE;let e=0;for(const t of i)if(t.type==="size"){const s=ht(t);e|=s,t.target==="outline"&&(e|=s<<4)}else t.type==="color"?e|=J.COLOR:t.type==="opacity"?e|=J.OPACITY:t.type==="rotation"&&(e|=J.ROTATION);return e}function M(i){var e;return i.type==="line-marker"?{type:"line-marker",color:(e=i.color)==null?void 0:e.toJSON(),placement:i.placement,style:i.style}:i.constructor.fromJSON(i.toJSON()).toJSON()}function O(i){return mt(i)}function g(i,e,t=!1){if(!i)return null;switch(i.type){case"simple-fill":case"picture-fill":return Tt(i,e,t);case"simple-marker":case"picture-marker":return St(i,e,t);case"simple-line":return Rt(i,e,t);case"text":return vt(i,e,t);case"label":return Et(i,e,t);case"cim":return{type:"cim",rendererKey:e.vvFlags,data:i.data,maxVVSize:e.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:e.vvFlags,data:i,maxVVSize:e.maxVVSize};case"web-style":return{...M(i),type:"web-style",hash:i.hash(),rendererKey:e.vvFlags,maxVVSize:e.maxVVSize};default:throw new Error(`symbol not supported ${i.type}`)}}function Et(i,e,t){const s=i.toJSON(),r=C(z.LABEL,{...e,placement:s.labelPlacement});return{materialKey:t?O(r):r,hash:i.hash(),...s,labelPlacement:s.labelPlacement}}function Tt(i,e,t){const s=C(z.FILL,e),r=t?O(s):s,n=i.clone(),a=n.outline,o=Oe(e.symbologyType);o||(n.outline=null);const l={materialKey:r,hash:n.hash(),...M(n)};if(o)return l;const u=[];if(u.push(l),a){const d=C(z.LINE,{...e,isOutline:!0}),c={materialKey:t?O(d):d,hash:a.hash(),...M(a)};u.push(c)}return{type:"composite-symbol",layers:u,hash:u.reduce((d,c)=>c.hash+d,"")}}function Rt(i,e,t){const s=Oe(e.symbologyType)?b.DEFAULT:e.symbologyType,r=C(z.LINE,{...e,symbologyType:s}),n=t?O(r):r,a=i.clone(),o=a.marker;a.marker=null;const l=[];if(l.push({materialKey:n,hash:a.hash(),...M(a)}),o){const u=C(z.MARKER,e),d=t?O(u):u;o.color=o.color??a.color,l.push({materialKey:d,hash:o.hash(),lineWidth:a.width,...M(o)})}return{type:"composite-symbol",layers:l,hash:l.reduce((u,d)=>d.hash+u,"")}}function St(i,e,t){if(i.type==="simple-marker"&&(i.style==="path"||i.outline&&i.outline.style!=="solid"&&i.outline.style!=="none"))return g({type:"CIMSymbolReference",symbol:yt.fromSimpleMarker(i)},e,t);const s=C(z.MARKER,e),r=t?O(s):s,n=M(i);return{materialKey:r,hash:i.hash(),...n,angle:i.angle,maxVVSize:e.maxVVSize}}function vt(i,e,t){const s=C(z.TEXT,e),r=t?O(s):s,n=M(i);return{materialKey:r,hash:i.hash(),...n,angle:i.angle,maxVVSize:e.maxVVSize}}const ps=Object.freeze(Object.defineProperty({__proto__:null,createSymbolSchema:g},Symbol.toStringTag,{value:"Module"}));function wt(i,e){if(!("visualVariables"in i)||!i.hasVisualVariables("size"))return 0;const t=i.getVisualVariablesForType("size");if(!t[0])return 0;const s=t[0];if(e&&s.field==="cluster_count"&&e.type==="cluster")return e.clusterMaxSize;if(s.target==="outline")return 0;if(s.transformationType==="stops")return s.stops.map(r=>r.size).reduce(Q,0);if(s.transformationType==="clamped-linear"){let r=-1/0,n=-1/0;return r=typeof s.maxSize=="number"?s.maxSize:s.maxSize.stops.map(a=>a.size).reduce(Q,0),n=typeof s.minSize=="number"?s.minSize:s.minSize.stops.map(a=>a.size).reduce(Q,0),Math.max(r,n)}return s.transformationType==="real-world-size"?30:void 0}function Q(i,e){return Math.max(i,e)}const G=8,Pe=G-2,q=ae.getLogger("esri.views.2d.layers.features.support.rendererUtils"),ys=i=>{var s;if(!("visualVariables"in i)||!((s=i.visualVariables)!=null&&s.length))return i;const e=i.clone(),t=e.visualVariables.map(r=>Ue(r)?Ke(r):r);return e.visualVariables=t,e};function Ft(i){return i.map(e=>Ue(e)?Ke(e.clone()):e)}function Ue(i){return(i.type==="size"||i.type==="color"||i.type==="opacity")&&i.stops!=null}function Ke(i){return i.stops=Ct(i.type,i.stops??[]),i}function L(i,e,t){return(1-t)*i+t*e}function kt(i,e){const[t,...s]=e,r=s.pop(),n=s[0].value,a=s[s.length-1].value,o=(a-n)/Pe,l=[];for(let u=n;u<a;u+=o){let d=0;for(;u>=s[d].value;)d++;const c=s[d],h=e[d-1],S=u-h.value,E=c.value===h.value?1:S/(c.value-h.value);if(i==="color"){const m=s[d],T=e[d-1],y=m.color.clone();y.r=L(T.color.r,y.r,E),y.g=L(T.color.g,y.g,E),y.b=L(T.color.b,y.b,E),y.a=L(T.color.a,y.a,E),l.push({value:u,color:y,label:m.label})}else if(i==="size"){const m=s[d],T=e[d-1],y=ye(m.size),_=L(ye(T.size),y,E);l.push({value:u,size:_,label:m.label})}else{const m=s[d],T=L(e[d-1].opacity,m.opacity,E);l.push({value:u,opacity:T,label:m.label})}}return[t,...l,r]}function zt(i){const[e,...t]=i,s=t.pop();for(;t.length>Pe;){let r=0,n=0;for(let a=1;a<t.length;a++){const o=t[a-1],l=t[a],u=Math.abs(l.value-o.value);u>n&&(n=u,r=a)}t.splice(r,1)}return[e,...t,s]}function Ct(i,e){return e.length<=G?e:(q.warn(`Found ${e.length} Visual Variable stops, but MapView only supports ${G}. Displayed stops will be simplified.`),e.length>2*G?kt(i,e):zt(e))}function oe(){if(k("heatmap-force-raster"))return"raster";const{supportsTextureFloat:i,supportsTextureHalfFloat:e,supportsColorBufferFloat:t,supportsColorBufferFloatBlend:s,supportsColorBufferHalfFloat:r}=se("2d");return i&&t&&s||e&&r?"symbol":k("heatmap-allow-raster-fallback")?"raster":"none"}function ms(i){if(!i)return!0;switch(i.type){case"dot-density":if(!se("2d").supportsTextureFloat)return q.error(new p("webgl-missing-extension","Missing WebGL extension OES_Texture_Float which is required for DotDensity")),!1;break;case"heatmap":{const e=oe();if(e==="none"||e==="raster"&&!k("heatmap-force-raster")){const t=se("2d"),s=["supportsTextureFloat","supportsTextureHalfFloat","supportsColorBufferFloat","supportsColorBufferFloatBlend","supportsColorBufferHalfFloat"].filter(r=>!t[r]).join(", ");if(e==="none")return q.errorOnce(new p("webgl-missing-extension",`Missing WebGL${t.type} requirements for Heatmap: ${s}`)),!1;e==="raster"&&q.warnOnce(`Missing WebGL${t.type} requirements for accelerated Heatmap: ${s}. Feature support may be limited.`)}break}}return!0}const V=ae.getLogger("esri.views.2d.layers.features.schemaUtils"),x="ValidationError";function re(i,e){let t=0,s=0,r=b.DEFAULT;if(i!=null){if(s=wt(i,e),"visualVariables"in i&&(t=$e(i.visualVariables||[]),i.type==="dot-density"&&(r=b.DOT_DENSITY)),i.type==="heatmap"&&(r=b.HEATMAP),i.type==="dictionary")return{maxVVSize:s,vvFlags:t,symbologyType:b.DEFAULT};if(i.type==="pie-chart")return{maxVVSize:s,vvFlags:t,symbologyType:b.PIE_CHART};if(r!==b.DOT_DENSITY&&r!==b.HEATMAP){const n=i.getSymbols();"backgroundFillSymbol"in i&&i.backgroundFillSymbol&&n.push(i.backgroundFillSymbol);let a=!0,o=!0;for(const l of n)if(l.type!=="cim"&&l.type!=="web-style"||(o=!1),l.type==="simple-fill"||l.type==="picture-fill"){const u=l.outline,d=u&&u.style!=="none"&&u.style!=="solid",c=l.type==="simple-fill"&&l.style!=="none"&&l.style!=="solid";d&&(a=!1),(l.type==="picture-fill"||c||d)&&(o=!1)}a?r=o?b.OUTLINE_FILL_SIMPLE:b.OUTLINE_FILL:o&&(r=b.SIMPLE)}}return{vvFlags:t,maxVVSize:s,symbologyType:r}}let ve=null;function xs(i){if(k("esri-2d-update-debug")){const e=we(i,!0);console.debug("Created new schema",e),console.debug("Schema diff",Xe(ve,e)),ve=e}return we(i)}function we(i,e=!1){var t,s;try{const r=Dt(i,e),n=Nt(i),a={};r.map(u=>Mt(a,i,u));const o=i.subtypeCode!=null?`${i.subtypeField} = ${i.subtypeCode}`:null;return{source:{definitionExpression:Ze(i.definitionExpression,o),fields:i.fields.map(u=>u.toJSON()),gdbVersion:i.gdbVersion,historicMoment:(t=i.historicMoment)==null?void 0:t.getTime(),outFields:i.availableFields,pixelBuffer:i.pixelBuffer,spatialReference:i.spatialReference.toJSON(),timeExtent:(s=i.timeExtent)==null?void 0:s.toJSON(),customParameters:i.customParameters},attributes:{fields:{},indexCount:0},processors:r,tileRenderer:n,targets:a}}catch(r){if(r.fieldName===x)return V.error(r),null;throw r}}function Mt(i,e,t){switch(t.target){case"feature":return void Z(i,X(e),t);case"aggregate":{if(!("featureReduction"in e))return;const s=e.featureReduction;switch(s==null?void 0:s.type){case"selection":throw new p(x,"Mapview does not support `selection` reduction type",s);case"binning":return Z(i,X(e),t),void Ot(i,s,e.fields.map(r=>r.toJSON()),t);case"cluster":return Z(i,X(e),t),void Vt(i,s,e.fields.map(r=>r.toJSON()),t)}}}}function le(i,e){var t,s;for(const r in e){const n=e[r];if(n.target!==i.name)continue;const a=i.attributes[r];if(a!=null&&a.context){const o=a.context;o.mesh=o.mesh||((t=n.context)==null?void 0:t.mesh),o.storage=o.storage||((s=n.context)==null?void 0:s.storage)}else i.attributes[r]=n}return i}function X(i){var e,t,s;return[((e=i.filter)==null?void 0:e.toJSON())??null,((s=(t=i.featureEffect)==null?void 0:t.filter)==null?void 0:s.toJSON())??null]}function Z(i,e,t){return i.feature||(i.feature={name:"feature",input:"source",filters:e,attributes:{}}),le(i.feature,t.attributes.fields),i}function Be(i,e){const{onStatisticExpression:t,onStatisticField:s,statisticType:r}=i;switch(r){case"min":case"max":case"avg":case"avg_angle":case"sum":case"count":return"esriFieldTypeDouble";case"mode":{if(t){const{returnType:a}=t;return a?a==="string"?"esriFieldTypeString":"esriFieldTypeDouble":(V.error(new p(x,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",i)),"esriFieldTypeString")}const n=e.find(a=>a.name===s);return n?n.type:(V.error(new p(x,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",i)),"esriFieldTypeString")}}}function Ot(i,e,t,s){return i.aggregate||(i.aggregate={name:"aggregate",type:"bin",filters:null,input:"feature",params:{fixedBinLevel:e.fixedBinLevel,fields:(e.fields??[]).map(r=>({...r.toJSON(),type:Be(r,t)}))},attributes:{}}),le(i.aggregate,s.attributes.fields),i}function Vt(i,e,t,s){const r=s.aggregateFields??[],n=new Set;for(const a of r)n.add(a.name);for(const a of(e==null?void 0:e.fields)??[])n.has(a.name)||r.push(a);return i.aggregate||(i.aggregate={name:"aggregate",type:"cluster",input:"feature",filters:null,attributes:{},params:{clusterRadius:me(e.clusterRadius/2),clusterPixelBuffer:64*Math.ceil(me(e.clusterMaxSize)/64),fields:r.map(a=>({...a.toJSON(),type:Be(a,t)}))}}),le(i.aggregate,s.attributes.fields),i}function v(i,e){return e.field?F(i,{...e,type:"field",field:e.field}):e.valueExpression?F(i,{...e,type:"expression",valueExpression:e.valueExpression}):{field:void 0,fieldIndex:void 0}}function F(i,e){switch(e.type){case"expression":{const t=e.valueExpression;if(!i.fields[t]){const s=i.indexCount++;i.fields[t]={...e,name:t,fieldIndex:s}}return{fieldIndex:i.fields[t].fieldIndex}}case"label-expression":{const t=JSON.stringify(e.label);if(!i.fields[t]){const s=i.indexCount++;i.fields[t]={...e,name:t,fieldIndex:s}}return{fieldIndex:i.fields[t].fieldIndex}}case"field":{const t=e.field;return e.target==="aggregate"&&i.fields[t]||(i.fields[t]={...e,name:t}),{field:t}}case"statistic":return i.fields[e.name]={...e},{field:e.name}}}function Dt(i,e=!1){const t=new Array;let s=0;return t.push(Lt(i,s++,e)),t}function ee(i,e,t,s,r,n=!1){const a=F(i,{type:"label-expression",target:t,context:{mesh:!0},resultType:"string",label:{labelExpression:e.labelExpression,labelExpressionInfo:e.labelExpressionInfo?{expression:e.labelExpressionInfo.expression}:null,symbol:!!e.symbol,where:e.where}}),{fieldIndex:o}=a;return{...g(e,r,n),fieldIndex:o,target:t,index:s}}function It(i,e,t){var d;const s="featureReduction"in e&&e.featureReduction;if(!s)return{fields:[],labels:[],matcher:void 0,rendererOverride:void 0};const r="aggregate",n=[];let a=null,o=Ve(e.geometryType),l=[],u=null;if(s)switch(s.type){case"selection":return V.error(new p(x,"Mapview does not support `selection` reduction type",s)),{fields:[],labels:[],matcher:void 0,rendererOverride:void 0};case"cluster":case"binning":if(n.push(...s.fields??[]),s.type==="cluster"?o="esriGeometryPoint":s.type==="binning"&&(o="esriGeometryPolygon"),s.renderer&&!((d=s.renderer.authoringInfo)!=null&&d.isAutoGenerated)){if(s.type==="cluster"){const{renderer:h}=tt(s.renderer,s,null);u=h}else u=s.renderer;const c=re(s.renderer,s);a=ne(i,r,s.renderer,c,t),l=s&&s.labelsVisible&&s.labelingInfo||[]}else if(s.type==="cluster"){if(u=st(n,e.renderer,s,null,!0),s.symbol){const c=re(u,s);a={type:"simple",symbol:g(s.symbol,c,t),symbologyType:c.symbologyType}}l=s&&s.labelsVisible&&s.labelingInfo||[]}}return $t(i,n),{labels:Ce(l,s.type==="binning"?"esriGeometryPolygon":o),matcher:a,fields:n,rendererOverride:u}}function Lt(i,e,t=!1){var y;const s={indexCount:0,fields:{}},r="featureReduction"in i?i.featureReduction??void 0:void 0,n=r?"aggregate":"feature";if("sublayers"in i){const _={type:"subtype",subtypeField:i.subtypeField,renderers:{},symbologyType:b.DEFAULT},K={type:"subtype",mapping:{},target:"feature",subtypeField:i.subtypeField},B={type:"subtype",classes:{}},Je={type:"symbol",target:"feature",aggregateFields:[],attributes:s,storage:K,mesh:{matcher:_,aggregateMatcher:null,labels:B,sortKey:null}},de=new Set;let He=0;for(const{renderer:D,subtypeCode:$,labelingInfo:Ye,labelsVisible:Ge}of i.sublayers){let ce=0;"visualVariables"in D&&D.visualVariables&&(D.visualVariables.some(U=>U.type!=="rotation")&&V.warnOnce("SubtypeGroupLayer currently only supports rotation visualVariables. All other visualVariable types will be ignored."),ce=$e(D.visualVariables.filter(U=>U.type!=="size")));const he={symbologyType:b.DEFAULT,vvFlags:ce,maxVVSize:0},P=ne(s,n,D,he,t),I=Fe(s,n,D),fe=Ge&&Ye;if(P.type==="dictionary")throw new p(x,"Dictionary renderer is not supported in subtype layers");if(P.type==="subtype")throw new p(x,"Nested subtype renderers is not supported");if(I!=null&&I.type==="subtype")throw new p(x,"Nested subtype storage is not supported");if((I==null?void 0:I.attributeMapping)!=null)throw new p(x,"Non-visual-variable attributes are not supported in subtype layers");if(P.type==="heatmap")throw new p(x,"Heatmaps are not supported in subtype layers");if(P.type==="pie-chart")throw new p(x,"Pie-charts are not supported in subtype layers");if(de.has($))throw new p(x,"Subtype codes for sublayers must be unique");de.add($),_.renderers[$]=P,K.mapping[$]=I,fe&&(B.classes[$]=fe.map(U=>ee(s,U,"feature",He++,he,t)))}return Je}if(((y=i.renderer)==null?void 0:y.type)==="heatmap"&&oe()==="raster"){const{radius:_,fieldOffset:K,field:B}=i.renderer;return{type:"heatmap",aggregateFields:[],attributes:s,target:n,storage:null,mesh:{radius:_,fieldOffset:K,field:v(s,{target:n,field:B,resultType:"numeric"}).field}}}const a=It(s,i,t),o=Ve(i.geometryType),l=a.rendererOverride??i.renderer,u=re(l,r),d=ne(s,n,l,u,t),c=Fe(s,n,l),h=At(s,i.orderBy,i.renderer,r),S=i.labelsVisible&&i.labelingInfo||[],E=Ce(S,o);let m=0;const T=[...E.map(_=>ee(s,_,"feature",m++,u,t)),...a.labels.map(_=>ee(s,_,"aggregate",m++,u,t))];return{type:"symbol",target:n,attributes:s,aggregateFields:a.fields,storage:c,mesh:{matcher:d,labels:{type:"simple",classes:T},aggregateMatcher:a.matcher,sortKey:h}}}function Nt(i){var e;return((e=i.renderer)==null?void 0:e.type)==="heatmap"&&oe()==="raster"?{type:"heatmap"}:{type:"symbol"}}function At(i,e,t,s){if(s!=null)return null;if(e!=null&&e.length){e.length>1&&V.warn(`Layer rendering currently only supports ordering by 1 orderByInfo, but found ${e.length}. All but the first will be discarded`);const r=e[0],n=r.order==="ascending"?"asc":"desc";return r.field?{field:r.field,order:n}:r.valueExpression?{fieldIndex:F(i,{type:"expression",target:"feature",valueExpression:r.valueExpression,resultType:"numeric"}).fieldIndex,order:n}:(V.error(new p(x,"Expected to find a field or valueExpression for OrderByInfo",r)),null)}return t!=null&&t.type==="unique-value"&&t.orderByClassesEnabled?{byRenderer:!0,order:"asc"}:null}function $t(i,e){const t={mesh:!0,storage:!0};for(const s of e){const{name:r,onStatisticField:n,onStatisticExpression:a,statisticType:o}=s;let l,u;const d="numeric",c="feature";a?u=F(i,{type:"expression",target:c,valueExpression:a.expression,resultType:d}).fieldIndex:l=F(i,{type:"field",target:c,field:n}).field,F(i,{type:"statistic",target:"aggregate",name:r,context:t,inField:l,inFieldIndex:u,statisticType:o})}}function Fe(i,e,t){let s;switch(t.type){case"simple":case"class-breaks":case"unique-value":case"dictionary":s={visualVariables:!0,attributes:null};break;default:s=ct(t).getStorageSpec(t)}return Pt(i,e,s,t)}function Pt(i,e,t,s){if(t==null)return null;const{visualVariables:r,attributes:n}=t;let a=null;r&&"visualVariables"in s&&(a=Ut(i,e,s.visualVariables));const o=a!=null?4:0;let l=null;return n!=null&&(l=n.map((u,d)=>{const{field:c,fieldIndex:h}=v(i,{valueExpression:u.valueExpression,field:u.field,resultType:"numeric",target:e});return{binding:d+o,field:c,fieldIndex:h}})),{type:"simple",target:e,attributeMapping:l,vvMapping:a}}function Ut(i,e,t){if(!(t!=null&&t.length))return[];const s={storage:!0},r="numeric";return Ft(t).map(n=>{const a=ut(n.type),{field:o,fieldIndex:l}=v(i,{target:e,valueExpression:n.valueExpression,field:n.field,context:s,resultType:r});switch(n.type){case"size":return n.valueExpression==="$view.scale"?null:{type:"size",binding:a,field:o,fieldIndex:l,normalizationField:v(i,{target:e,field:n.normalizationField,context:s,resultType:r}).field,valueRepresentation:n.valueRepresentation??null};case"color":return{type:"color",binding:a,field:o,fieldIndex:l,normalizationField:v(i,{target:e,field:n.normalizationField,context:s,resultType:r}).field};case"opacity":return{type:"opacity",binding:a,field:o,fieldIndex:l,normalizationField:v(i,{target:e,field:n.normalizationField,context:s,resultType:r}).field};case"rotation":return{type:"rotation",binding:a,field:o,fieldIndex:l}}}).filter(et)}function ne(i,e,t,s,r=!1){const n=i??{indexCount:0,fields:{}};switch(t.type){case"simple":case"dot-density":return Kt(n,t,s,r);case"class-breaks":return Jt(n,e,t,s,r);case"unique-value":return Ht(n,e,t,s,r);case"dictionary":return Yt(n,t,s,r);case"heatmap":return Gt(n,t,s,r);case"pie-chart":return Bt(n,t,s,r)}}function Kt(i,e,t,s=!1){const r=e.getSymbols(),n=r.length?r[0]:null;return{type:"simple",symbol:g(n,t,s),symbologyType:t.symbologyType}}function Bt(i,e,t,s=!1){const r=e.getSymbols(),n=r[0],a=r.length>1?r[1]:null;return{type:"pie-chart",markerSymbol:g(n,t,s),fillSymbol:g(a,t,s),symbologyType:t.symbologyType}}function Jt(i,e,t,s,r=!1){const n={mesh:!0,use:"renderer.field"},a=t.backgroundFillSymbol,{field:o,fieldIndex:l}=v(i,{target:e,field:t.field,valueExpression:t.valueExpression,resultType:"numeric",context:n}),u=t.normalizationType,d=u==="log"?"esriNormalizeByLog":u==="percent-of-total"?"esriNormalizeByPercentOfTotal":u==="field"?"esriNormalizeByField":null,c=t.classBreakInfos.map(h=>({symbol:g(h.symbol,s,r),min:h.minValue,max:h.maxValue})).sort((h,S)=>h.min-S.min);return{type:"interval",attributes:i.fields,field:o,fieldIndex:l,backgroundFillSymbol:g(a,s,r),defaultSymbol:g(t.defaultSymbol,s,r),intervals:c,normalizationField:t.normalizationField,normalizationTotal:t.normalizationTotal,normalizationType:d,isMaxInclusive:t.isMaxInclusive,symbologyType:s.symbologyType}}function Ht(i,e,t,s,r=!1){const n=[],a=t.backgroundFillSymbol,o={target:e,context:{mesh:!0},resultType:"string"};if(t.field&&typeof t.field!="string")throw new p(x,"Expected renderer.field to be a string",t);const{field:l,fieldIndex:u}=v(i,{...o,field:t.field,valueExpression:t.valueExpression});for(const d of t.uniqueValueInfos??[])n.push({value:""+d.value,symbol:g(d.symbol,s,r)});return{type:"map",attributes:i.fields,field:l,fieldIndex:u,field2:v(i,{...o,field:t.field2}).field,field3:v(i,{...o,field:t.field3}).field,fieldDelimiter:t.fieldDelimiter??void 0,backgroundFillSymbol:g(a,s),defaultSymbol:g(t.defaultSymbol,s),map:n,symbologyType:s.symbologyType}}function Yt(i,e,t,s=!1){return{type:"dictionary",config:e.config,fieldMap:e.fieldMap,scaleExpression:e.scaleExpression,url:e.url,symbolOptions:t,symbologyType:t.symbologyType}}function Gt(i,e,t,s=!1){const r=e.getSymbols(),n=r.length?r[0]:null;return{type:"heatmap",symbol:g(n,t,s),symbologyType:t.symbologyType}}const ue=ae.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),te=ft(pt,ue);class ke{constructor(e,t,s){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;const{buffer:r,pixelType:n,textureOnly:a}=e,o=H(n);this.shared=s,this.pixelType=n,this.size=t,this.textureOnly=a,a||(this.data=new o(r)),this._resetRange()}destroy(){var e;(e=this._texture)==null||e.dispose();for(const t in this._fbos){const s=this._fbos[t];s&&(t==="0"&&s.detachColorTexture(),s.dispose()),this._fbos[t]=null}this._texture=null}get _textureDesc(){const e=new Le;return e.wrapMode=De.CLAMP_TO_EDGE,e.samplingMode=Ie.NEAREST,e.dataType=this.pixelType,e.width=this.size,e.height=this.size,e}setData(e,t,s){const r=Se(e),n=this.data,a=r*this.texelSize+t;!n||a>=n.length||(n[a]=s,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r))}getData(e,t){if(this.data==null)return null;const s=Se(e)*this.texelSize+t;return!this.data||s>=this.data.length?null:this.data[s]}getTexture(e){return this._texture??this._initTexture(e)}getFBO(e,t=0){if(!this._fbos[t]){const s=t===0?this.getTexture(e):this._textureDesc;this._fbos[t]=new gt(e,s)}return this._fbos[t]}get locked(){return!(this.pixelType!==xt.UNSIGNED_BYTE||!this.shared||this.textureOnly||!k("esri-atomics")||!this.data)&&Atomics.load(this.data,0)===1}get hasDirty(){const e=this.dirtyStart;return this.dirtyEnd>=e}updateTexture(e,t){if(!this.locked){try{const s=this.dirtyStart,r=this.dirtyEnd;if(!this.hasDirty)return;this._resetRange();const n=this.data.buffer,a=this.getTexture(e),o=4,l=(s-s%this.size)/this.size,u=(r-r%this.size)/this.size,d=l,c=this.size,h=u,S=l*this.size*o,E=(c+h*this.size)*o-S,m=H(this.pixelType),T=new m(n,S*m.BYTES_PER_ELEMENT,E),y=this.size,_=h-d+1;if(_>this.size)return void ue.error(new p("mapview-webgl","Out-of-bounds index when updating AttributeData"));a.updateData(0,0,d,y,_,T)}catch{}t()}}update(e){const{data:t,start:s,end:r}=e;if(t!=null&&this.data!=null){const n=this.data,a=s*this.texelSize;for(let o=0;o<t.length;o++){const l=1<<o%this.texelSize;e.layout&l&&(n[a+o]=t[o])}}this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,r)}resize(e,t){const s=this.size;if(this.size=t,this.textureOnly)return void(s!==this.size&&(this._lastTexture=this._texture,this._texture=null));const r=H(this.pixelType);this.destroy(),this.data=new r(e.buffer)}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(e){const t=new Ne(e,this._textureDesc,this.data??void 0);if(this._lastTexture!=null&&this._fbos[0]){const s=this._lastTexture.descriptor.width,r=this._lastTexture.descriptor.height,n=this._lastTexture.descriptor.dataType,a=this._lastTexture.descriptor.pixelFormat,o=this.getFBO(e),l=dt(n),u=new(H(n))(new ArrayBuffer(s*r*l*this.texelSize)),d=e.getBoundFramebufferObject(),{x:c,y:h,width:S,height:E}=e.getViewport();e.bindFramebuffer(o),o.readPixels(0,0,s,r,a,n,u),t.updateData(0,0,0,2*s,r/2,u),e.setViewport(c,h,S,E),e.bindFramebuffer(d)}return this.destroy(),this._texture=t,this._texture}}class gs{constructor(e){this._onUpdate=e,this._initialized=!1,this._forceNextUpload=!1,this._locked=!1}initialize(e){const{blocks:t,shared:s,size:r}=e;if(this.shared=s,this.size=r,te("Initializing AttributeStoreView",e),this._data==null)this._data=t.map(n=>n!=null?new ke(n,r,s):null);else for(let n=0;n<this._data.length;n++){const a=this._data[n],o=t[n];o!=null&&(a==null?this._data[n]=new ke(o,r,s):a.resize(o,r))}this._initialized=!0}destroy(){var e;for(const t of this._data??[])t==null||t.destroy();(e=this._defaultTexture)==null||e.dispose()}isEmpty(){return this._data==null}isUpdating(){const e=this._pendingAttributeUpdate!=null,t=e;return k("esri-2d-log-updating")&&console.log(`Updating AttributeStoreView ${t}
  -> hasPendingUpdate ${e}`),t}getBlock(e){return this._data==null?null:this._data[e]}setLabelMinZoom(e,t){this.setData(e,0,1,t)}getLabelMinZoom(e){return this.getData(e,0,1,255)}getFilterFlags(e){return this.getData(e,0,0,0)}getVVSize(e){return this.getData(e,ge,0,0)}getData(e,t,s,r){if(!this._data)return 0;const n=this._data[t];if(n==null)return 0;const a=n.getData(e,s);return a??r}setData(e,t,s,r){this._data[t].setData(e,s,r)}lockTextureUpload(){this._locked=!0}unlockTextureUpload(){this._locked=!1}forceTextureUpload(){this._forceNextUpload=!0}async requestUpdate(e){if(this._pendingAttributeUpdate)return void ue.error(new p("mapview-webgl","Tried to update attribute data with a pending update"));const t=it();return te("AttributeStoreView Update Requested",e),this._pendingAttributeUpdate={data:e,resolver:t},this._onUpdate(),t.promise}update(){if(this._initialized&&this._pendingAttributeUpdate!=null){k("esri-2d-update-debug")&&console.debug("AttributeStoreView::update");const{data:e,resolver:t}=this._pendingAttributeUpdate,s=this._data;for(let r=0;r<e.blocks.length;r++){const n=e.blocks[r],a=s[r];a!=null&&n!=null&&(te(`Updating block ${r}`,n),a.update(n))}this._pendingAttributeUpdate=null,t(),this._onUpdate()}}bindTextures(e,t=!0){var n,a,o,l,u,d,c;const s=this._getDefaultTexture(e);if(!this._initialized)return e.bindTexture(s,_e),void(t&&(e.bindTexture(s,be),e.bindTexture(s,Ee),e.bindTexture(s,Te),e.bindTexture(s,j),e.bindTexture(s,W),e.bindTexture(s,Re)));const r=this._data;if(!this._locked||this._forceNextUpload){for(const h of r)h==null||h.updateTexture(e,()=>this._onUpdate());this._forceNextUpload=!1}e.bindTexture(((n=r[rt])==null?void 0:n.getTexture(e))??s,_e),t&&(e.bindTexture(((a=r[nt])==null?void 0:a.getTexture(e))??s,Re),e.bindTexture(((o=r[at])==null?void 0:o.getTexture(e))??s,be),e.bindTexture(((l=r[ge])==null?void 0:l.getTexture(e))??s,Ee),e.bindTexture(((u=r[ot])==null?void 0:u.getTexture(e))??s,Te),e.bindTexture(((d=r[j])==null?void 0:d.getTexture(e))??s,j),e.bindTexture(((c=r[W])==null?void 0:c.getTexture(e))??s,W))}_getDefaultTexture(e){if(this._defaultTexture==null){const t=new Le;t.wrapMode=De.CLAMP_TO_EDGE,t.samplingMode=Ie.NEAREST,t.width=1,t.height=1,this._defaultTexture=new Ne(e,t,new Uint8Array(4))}return this._defaultTexture}}export{re as T,ne as _,us as a,ys as b,ps as c,ms as h,g as i,gs as j,bt as m,fs as n,A as r,xs as w};
