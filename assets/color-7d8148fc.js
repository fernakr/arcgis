import{E as B,s as m}from"./index-33d448c3.js";import{e as N,n as d}from"./enums-f1a6a48a.js";import{F as G,U as f,C as l}from"./enums-bdecffa2.js";import{t as H}from"./VertexElementDescriptor-2925c6af.js";import{x as h}from"./number-e491b09e.js";var i,R,L,E,M,D,S;(function(t){t[t.FILL=0]="FILL",t[t.LINE=1]="LINE",t[t.MARKER=2]="MARKER",t[t.TEXT=3]="TEXT",t[t.LABEL=4]="LABEL"})(i||(i={})),function(t){t[t.NONE=0]="NONE",t[t.MAP=1]="MAP",t[t.LABEL=2]="LABEL",t[t.LABEL_ALPHA=4]="LABEL_ALPHA",t[t.HITTEST=8]="HITTEST",t[t.HIGHLIGHT=16]="HIGHLIGHT",t[t.CLIP=32]="CLIP",t[t.DEBUG=64]="DEBUG",t[t.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES"}(R||(R={})),function(t){t[t.SIZE=0]="SIZE",t[t.COLOR=1]="COLOR",t[t.OPACITY=2]="OPACITY",t[t.ROTATION=3]="ROTATION"}(L||(L={})),function(t){t[t.NONE=0]="NONE",t[t.OPACITY=1]="OPACITY",t[t.COLOR=2]="COLOR",t[t.ROTATION=4]="ROTATION",t[t.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",t[t.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",t[t.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",t[t.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE"}(E||(E={})),function(t){t[t.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",t[t.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",t[t.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",t[t.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE"}(M||(M={})),function(t){t[t.SPRITE=0]="SPRITE",t[t.GLYPH=1]="GLYPH"}(D||(D={})),function(t){t[t.DEFAULT=0]="DEFAULT",t[t.SIMPLE=1]="SIMPLE",t[t.DOT_DENSITY=2]="DOT_DENSITY",t[t.OUTLINE_FILL=3]="OUTLINE_FILL",t[t.OUTLINE_FILL_SIMPLE=4]="OUTLINE_FILL_SIMPLE",t[t.HEATMAP=5]="HEATMAP",t[t.PIE_CHART=6]="PIE_CHART"}(S||(S={}));const A=B.getLogger("esri.views.2d.engine.webgl.Utils"),c="geometry",$=[{name:c,strideInBytes:12}],v=[{name:c,strideInBytes:36}],b=[{name:c,strideInBytes:24}],Y=[{name:c,strideInBytes:12}],Z=[{name:c,strideInBytes:40}],x=[{name:c,strideInBytes:36}],V=[{name:c,strideInBytes:36}];function T(t){const n={};for(const e of t)n[e.name]=e.strideInBytes;return n}const z=T([{name:c,strideInBytes:36}]),X=T($),k=T(v),K=T(b),W=T(Y),q=T(Z),J=T(x),Q=T(V);function _t(t,n){switch(t){case i.MARKER:return n===S.HEATMAP?X:z;case i.FILL:switch(n){case S.DOT_DENSITY:return W;case S.SIMPLE:case S.OUTLINE_FILL_SIMPLE:return K;default:return k}case i.LINE:return q;case i.TEXT:return J;case i.LABEL:return Q}}const j=[c],tt=[c],nt=[c],et=[c],rt=[c];function at(t){switch(t){case i.MARKER:return j;case i.FILL:return tt;case i.LINE:return nt;case i.TEXT:return et;case i.LABEL:return rt}}function st(t){switch(t%4){case 0:case 2:return 4;case 1:case 3:return 1}}function Nt(t,n){switch(n%4){case 0:case 2:return new Uint32Array(Math.floor(t*n/4));case 1:case 3:return new Uint8Array(t*n)}}function dt(t,n){switch(n%4){case 0:case 2:return new Uint32Array(t);case 1:case 3:return new Uint8Array(t)}}function mt(t){return t!=null}function Ot(t){return typeof t=="number"}function yt(t){switch(t){case"butt":return N.BUTT;case"round":return N.ROUND;case"square":return N.SQUARE;default:return A.error(new m("mapview-invalid-type",`Cap type ${t} is not a valid option. Defaulting to round`)),N.ROUND}}function Ut(t){switch(t){case"miter":return d.MITER;case"bevel":return d.BEVEL;case"round":return d.ROUND;default:return A.error(new m("mapview-invalid-type",`Join type ${t} is not a valid option. Defaulting to round`)),d.ROUND}}function pt(t){switch(t){case"opacity":return L.OPACITY;case"color":return L.COLOR;case"rotation":return L.ROTATION;case"size":return L.SIZE;default:return A.error(`Cannot interpret unknown vv: ${t}`),null}}function Rt(t,n,e,r,a,o,s){for(const I in o){const u=o[I].stride,O=st(u),U=o[I].data,p=e[I].data;if(U==null||p==null)continue;const w=u*a.vertexCount/O,C=u*t/O,F=u*a.vertexFrom/O;for(let _=0;_<w;++_)p[_+C]=U[_+F]}if(s!=null&&r!=null){const I=a.indexCount;for(let u=0;u<I;++u)r[u+n]=s[u+a.indexFrom]-a.vertexFrom+t}}const Et={[c]:G.STATIC_DRAW};function Mt(t,n){const e=[];for(let r=0;r<5;++r){const a=at(r),o={};for(const s of a)o[s]={data:n(r,s)};e.push({data:t(r),buffers:o})}return e}function it(t){switch(t){case l.BYTE:case l.UNSIGNED_BYTE:return 1;case l.SHORT:case l.UNSIGNED_SHORT:return 2;case l.FLOAT:case l.INT:case l.UNSIGNED_INT:return 4}}function Dt(t){switch(t){case f.UNSIGNED_BYTE:return 1;case f.UNSIGNED_SHORT_4_4_4_4:return 2;case f.FLOAT:return 4;default:return void A.error(new m("webgl-utils",`Unable to handle type ${t}`))}}function Pt(t){switch(t){case f.UNSIGNED_BYTE:return Uint8Array;case f.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case f.FLOAT:return Float32Array;default:return void A.error(new m("webgl-utils",`Unable to handle type ${t}`))}}function ct(t){var e;const n={};for(const r in t){const a=t[r];let o=0;n[r]=a.map(s=>{const I=new H(s.name,s.count,s.type,o,0,s.normalized||!1);return o+=s.count*it(s.type),I}),(e=n[r])==null||e.forEach(s=>s.stride=o)}return n}const ot=t=>{const n=new Map;for(const e in t)for(const r of t[e])n.set(r.name,r.location);return n},ut=t=>{const n={};for(const e in t){const r=t[e];n[e]=r!=null&&r.length?r[0].stride:0}return n},y=new Map,gt=(t,n)=>{if(!y.has(t)){const e=ct(n),r={strides:ut(e),bufferLayouts:e,attributes:ot(n)};y.set(t,r)}return y.get(t)};function ht(t){t(i.FILL),t(i.LINE),t(i.MARKER),t(i.TEXT),t(i.LABEL)}const wt=t=>"path"in t&&Tt(t.path),Ct=t=>!(!("url"in t)||!t.url)||!(!("imageData"in t)||!t.imageData),Ft=t=>"imageData"in t&&t.imageData&&"contentType"in t&&t.contentType?`data:${t.contentType};base64,${t.imageData}`:"url"in t?t.url:null,P=t=>t!=null&&t.startsWith("data:image/gif"),Bt=t=>"url"in t&&t.url&&(t.url.includes(".gif")||P(t.url))||"contentType"in t&&t.contentType==="image/gif"||"imageData"in t&&P(t.imageData),g=t=>t!=null&&t.startsWith("data:image/png"),Gt=t=>"url"in t&&t.url&&(t.url.includes(".png")||g(t.url))||"contentType"in t&&t.contentType==="image/png"||"imageData"in t&&g(t.imageData),Ht=t=>t.type&&t.type.toLowerCase().includes("3d");function $t(t){switch(t.type){case"line":{const n=t;return n.cim.type==="CIMSolidStroke"&&!n.dashTemplate}case"fill":return t.cim.type==="CIMSolidFill";case"esriSFS":return t.style==="esriSFSSolid"||t.style==="esriSFSNull";case"esriSLS":return t.style==="esriSLSSolid"||t.style==="esriSLSNull";default:return!1}}function vt(t){switch("cim"in t?t.cim.type:t.type){case"esriSMS":case"esriPMS":case"CIMPointSymbol":return!1;case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":return It(t);default:return!0}}function bt(t){const n="maxVVSize"in t&&t.maxVVSize,e="width"in t&&t.width||"size"in t&&t.size||0;return n||e}function Yt(t){const n=[];for(let e=0;e<t.length;e++)n.push(t.charCodeAt(e));return n}const Tt=t=>!!t&&(t=t.trim(),!!(/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4)),It=t=>{var n,e;return t.type==="fill"&&((e=(n=t==null?void 0:t.cim)==null?void 0:n.markerPlacement)==null?void 0:e.type)==="CIMMarkerPlacementInsidePolygon"};function Zt(t,n=0,e=!1){const r=t[n+3];return t[n]*=r,t[n+1]*=r,t[n+2]*=r,e||(t[n+3]*=255),t}function xt(t){if(!t)return 0;const{r:n,g:e,b:r,a}=t;return h(n*a,e*a,r*a,255*a)}function Vt(t){if(!t)return 0;const[n,e,r,a]=t;return h(n*(a/255),e*(a/255),r*(a/255),a)}function zt(t,n,e=0){if(n==null)return t[e]=0,t[e+1]=0,t[e+2]=0,void(t[e+3]=0);const{r,g:a,b:o,a:s}=n;t[e]=r*s/255,t[e+1]=a*s/255,t[e+2]=o*s/255,t[e+3]=s}export{Ot as $,M as A,i as E,st as F,Ut as G,Mt as H,Dt as K,E as L,Nt as P,_t as R,S,R as T,pt as V,Pt as W,Et as Y,D as _,Ct as a,Vt as b,xt as c,Yt as d,gt as e,vt as f,zt as g,Bt as i,Rt as j,yt as k,$t as l,bt as m,wt as n,Gt as o,Zt as r,Ft as s,ht as t,Ht as u,dt as x,It as y,mt as z};
