import{a4 as j,iB as C,b9 as D,et as V,al as y,am as g,an as B,d as J,bl as Z,iC as z,iD as W,ah as H,cx as x,_ as F,iE as K,iF as L,iG as Y,iH as k,s as $,av as N,cE as Q}from"./index-aa00a0dc.js";import{x as I,j as A}from"./projectionSupport-aa58b99c.js";import{d as X,h as G,b as ee,P as v,$ as te,H as ie,U as re,K as b}from"./featureConversionUtils-17cb1a84.js";import{t as S}from"./OptimizedGeometry-196224d4.js";const E=new S,ne=new S,P=new S,m={esriGeometryPoint:v,esriGeometryPolyline:te,esriGeometryPolygon:ie,esriGeometryMultipoint:re};function xe(e,t,n,i=e.hasZ,s=e.hasM){if(t==null)return null;const r=e.hasZ&&i,l=e.hasM&&s;if(n){const a=G(P,t,e.hasZ,e.hasM,"esriGeometryPoint",n,i,s);return v(a,r,l)}return v(t,r,l)}function h(e,t,n,i,s,r,l=t,a=n){var R,p,d;const o=t&&l,u=n&&a,c=i!=null?"coords"in i?i:i.geometry:null;if(c==null)return null;if(s){let f=X(ne,c,t,n,e,s,l,a);return r&&(f=G(P,f,o,u,e,r)),((R=m[e])==null?void 0:R.call(m,f,o,u))??null}if(r){const f=G(P,c,t,n,e,r,l,a);return((p=m[e])==null?void 0:p.call(m,f,o,u))??null}return ee(E,c,t,n,l,a),((d=m[e])==null?void 0:d.call(m,E,o,u))??null}function Ne(e){return e&&T in e?JSON.parse(JSON.stringify(e,se)):e}const T="_geVersion",se=(e,t)=>e!==T?t:void 0,le=new j({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),M=Object.freeze({});async function be(e,t,n){const{outFields:i,orderByFields:s,groupByFieldsForStatistics:r,outStatistics:l}=e;if(i)for(let a=0;a<i.length;a++)i[a]=i[a].trim();if(s)for(let a=0;a<s.length;a++)s[a]=s[a].trim();if(r)for(let a=0;a<r.length;a++)r[a]=r[a].trim();if(l)for(let a=0;a<l.length;a++)l[a].onStatisticField&&(l[a].onStatisticField=l[a].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),ae(e,t,n)}async function ae(e,t,n){var r;if(!e)return null;let{where:i}=e;if(e.where=i=i==null?void 0:i.trim(),(!i||/^1 *= *1$/.test(i)||t&&t===i)&&(e.where=null),!e.geometry)return e;let s=await ue(e);if(e.distance=0,e.units=null,e.spatialRel==="esriSpatialRelEnvelopeIntersects"){const{spatialReference:l}=e.geometry;s=C(s),s.spatialReference=l}if(s){await I(s.spatialReference,n),s=oe(s,n);const l=(await D(V(s)))[0];if(l==null)throw M;const a="quantizationParameters"in e&&((r=e.quantizationParameters)==null?void 0:r.tolerance)||"maxAllowableOffset"in e&&e.maxAllowableOffset||0,o=a&&U(s,n)?{densificationStep:8*a}:void 0,u=l.toJSON(),c=A(u,u.spatialReference,n,o);if(!c)throw M;c.spatialReference=n,e.geometry=c}return e}function U(e,t){if(!e)return!1;const n=e.spatialReference;return(y(e)||g(e)||B(e))&&!J(n,t)&&!Z(n,t)}function oe(e,t){const n=e.spatialReference;return U(e,t)&&y(e)?{spatialReference:n,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}:e}async function ue(e){const{distance:t,units:n}=e,i=e.geometry;if(t==null||"vertexAttributes"in i)return i;const s=i.spatialReference,r=n?le.fromJSON(n):z(s),l=s&&(W(s)||H(s))?i:await I(s,x).then(()=>A(i,x));return(await ce())(l.spatialReference,l,t,r)}async function ce(){return(await F(()=>import("./geometryEngineJSON-29ccfa69.js"),["assets/geometryEngineJSON-29ccfa69.js","assets/geometryEngineBase-848ffe91.js","assets/index-aa00a0dc.js","assets/index-298317a1.css","assets/geometryEngineJSON-b79c6f68.js","assets/json-48e3ea08.js"])).geodesicBuffer}function fe(e){return e==="mesh"?K:L(e)}function O(e,t){return e?t?4:3:t?3:2}function me(e,t,n,i){return q(e,t,n,i.coords[0],i.coords[1])}function pe(e,t,n,i,s,r){const l=O(s,r),{coords:a,lengths:o}=i;if(!o)return!1;for(let u=0,c=0;u<o.length;u++,c+=l)if(!q(e,t,n,a[c],a[c+1]))return!1;return!0}function q(e,t,n,i,s){if(!e)return!1;const r=O(t,n),{coords:l,lengths:a}=e;let o=!1,u=0;for(const c of a)o=ye(o,l,r,u,c,i,s),u+=c*r;return o}function ye(e,t,n,i,s,r,l){let a=e,o=i;for(let u=i,c=i+s*n;u<c;u+=n){o=u+n,o===c&&(o=i);const R=t[u],p=t[u+1],d=t[o],f=t[o+1];(p<l&&f>=l||f<l&&p>=l)&&R+(l-p)/(f-p)*(d-R)<r&&(a=!a)}return a}const w="unsupported-query",Re={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},_={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function Se(e){return e!=null&&_.spatialRelationship[e]===!0}function de(e){return e!=null&&_.queryGeometry[Q(e)]===!0}function he(e){return e!=null&&_.layerGeometry[e]===!0}function ge(){return F(()=>import("./geometryEngineJSON-29ccfa69.js"),["assets/geometryEngineJSON-29ccfa69.js","assets/geometryEngineBase-848ffe91.js","assets/index-aa00a0dc.js","assets/index-298317a1.css","assets/geometryEngineJSON-b79c6f68.js","assets/json-48e3ea08.js"])}function Ee(e,t,n,i,s){if(g(t)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains")){const r=b(new S,t,!1,!1);return Promise.resolve(l=>me(r,!1,!1,l))}if(g(t)&&n==="esriGeometryMultipoint"){const r=b(new S,t,!1,!1);if(e==="esriSpatialRelContains")return Promise.resolve(l=>pe(r,!1,!1,l,i,s))}if(y(t)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains"))return Promise.resolve(r=>Y(t,h(n,i,s,r)));if(y(t)&&n==="esriGeometryMultipoint"&&e==="esriSpatialRelContains")return Promise.resolve(r=>k(t,h(n,i,s,r)));if(y(t)&&e==="esriSpatialRelIntersects"){const r=fe(n);return Promise.resolve(l=>r(t,h(n,i,s,l)))}return ge().then(r=>{const l=r[Re[e]].bind(null,t.spatialReference,t);return a=>l(h(n,i,s,a))})}async function Me(e,t,n){var r;const{spatialRel:i,geometry:s}=e;if(s){if(!Se(i))throw new $(w,"Unsupported query spatial relationship",{query:e});if(N(s.spatialReference)&&N(n)){if(!de(s))throw new $(w,"Unsupported query geometry type",{query:e});if(!he(t))throw new $(w,"Unsupported layer geometry type",{query:e});if(e.outSR)return I((r=e.geometry)==null?void 0:r.spatialReference,e.outSR)}}}function Fe(e){if(y(e))return!0;if(g(e)){for(const t of e.rings)if(t.length!==5||t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1;return!0}return!1}async function Ae(e,t){if(!e)return null;const n=t.featureAdapter,{startTimeField:i,endTimeField:s}=e;let r=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY;if(i&&s)await t.forEach(a=>{const o=n.getAttribute(a,i),u=n.getAttribute(a,s);o==null||isNaN(o)||(r=Math.min(r,o)),u==null||isNaN(u)||(l=Math.max(l,u))});else{const a=i||s;await t.forEach(o=>{const u=n.getAttribute(o,a);u==null||isNaN(u)||(r=Math.min(r,u),l=Math.max(l,u))})}return{start:r,end:l}}function Te(e,t,n){var o;if(!t||!e)return null;const{startTimeField:i,endTimeField:s}=e;if(!i&&!s)return null;const{start:r,end:l}=t;if(r===null&&l===null)return null;if(r===void 0&&l===void 0)return Ge();const a=((o=n.getAttributeAsTimestamp)==null?void 0:o.bind(n))??n.getAttribute.bind(n);return i&&s?$e(a,i,s,r,l):we(a,i||s,r,l)}function $e(e,t,n,i,s){return i!=null&&s!=null?r=>{const l=e(r,t),a=e(r,n);return(l==null||l<=s)&&(a==null||a>=i)}:i!=null?r=>{const l=e(r,n);return l==null||l>=i}:s!=null?r=>{const l=e(r,t);return l==null||l<=s}:void 0}function we(e,t,n,i){return n!=null&&i!=null&&n===i?s=>e(s,t)===n:n!=null&&i!=null?s=>{const r=e(s,t);return r!=null&&r>=n&&r<=i}:n!=null?s=>{const r=e(s,t);return r!=null&&r>=n}:i!=null?s=>{const r=e(s,t);return r!=null&&r<=i}:void 0}function Ge(){return()=>!1}export{Fe as I,Me as P,be as S,h as a,M as g,Ne as h,ae as j,Ae as n,Te as t,Ee as v,xe as y};