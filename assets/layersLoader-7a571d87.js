import{s as h,bJ as F,b as D,j,q as k}from"./index-9762d29e.js";import{t as x}from"./fetchService-5f5f36a8.js";import{a as G,n as T,s as P,i as E,l as $,t as g,r as C,e as L}from"./portalLayers-ea975add.js";import{populateGroupLayer as J}from"./layersCreator-11073eda.js";import{t as O,a as R}from"./lazyLayerLoader-313fae20.js";import{e as N,l as q}from"./jsonContext-bcd5ec9e.js";import"./associatedFeatureServiceUtils-f6233061.js";async function se(t,a){const r=t.instance.portalItem;if(r!=null&&r.id)return await r.load(a),z(t),A(t,a)}function z(t){const a=t.instance.portalItem;if(!(a!=null&&a.type)||!t.supportedTypes.includes(a.type))throw new h("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:a==null?void 0:a.type,expectedType:t.supportedTypes.join(", ")})}async function A(t,a){const r=t.instance,e=r.portalItem;if(!e)return;const{url:s,title:n}=e,i=N(e);if(r.type==="group")return B(r,i,t);s&&r.read({url:s},i);const o=new L,l=await S(t,o,a);return l&&r.read(l,i),r.resourceReferences={portalItem:e,paths:i.readResourcePaths??[]},r.type!=="subtype-group"&&r.read({title:n},i),F(r,i)}async function B(t,a,r){const e=t.portalItem;if(!t.sourceIsPortalItem)return;const{title:s,type:n}=e;if(n==="Group Layer"){if(!D(e,"Map"))throw new h("portal:invalid-layer-item-typekeyword","'Group Layer' item without 'Map' type keyword is not supported");return H(t)}return t.read({title:s},a),K(t,r)}async function H(t){const a=t.portalItem,r=await a.fetchData("json");if(!r)return;const e=q(a);t.read(r,e),await J(t,r,{context:e}),t.resourceReferences={portalItem:a,paths:e.readResourcePaths??[]}}async function K(t,a){let r;const{portalItem:e}=t;if(!e)return;const s=e.type,n=a.layerModuleTypeMap;switch(s){case"Feature Service":case"Feature Collection":r=n.FeatureLayer;break;case"Stream Service":r=n.StreamLayer;break;case"Scene Service":r=n.SceneLayer;break;default:throw new h("portal:unsupported-item-type-as-group",`The item type '${s}' is not supported as a 'IGroupLayer'`)}const i=new L;let[o,l]=await Promise.all([r(),S(a,i)]),u=()=>o;if(s==="Feature Service"){l=e.url?await G(l,e.url,i):{};const y=T(l),c=P(l),f=[];if(y.length||c!=null&&c.length){y.length&&f.push("SubtypeGroupLayer"),c!=null&&c.length&&f.push("OrientedImageryLayer");const w=[];for(const p of f){const d=n[p];w.push(d())}const M=await Promise.all(w),b=new Map;f.forEach((p,d)=>{b.set(p,M[d])}),u=p=>p.layerType?b.get(p.layerType)??o:o}const v=await Y(e.url);return await m(t,u,l,v)}return s==="Scene Service"&&e.url&&(l=await E(e,l,i)),$(l)>0?await m(t,u,l):await Q(t,u)}async function Q(t,a){var s,n;const{portalItem:r}=t;if(!(r!=null&&r.url))return;const e=await O(r.url);e&&m(t,a,{layers:(s=e.layers)==null?void 0:s.map(g),tables:(n=e.tables)==null?void 0:n.map(g)})}async function m(t,a,r,e){var i;let s=r.layers||[];const n=r.tables||[];if(((i=t.portalItem)==null?void 0:i.type)==="Feature Collection"?(s.forEach((o,l)=>{var u;o.id=l,((u=o==null?void 0:o.layerDefinition)==null?void 0:u.type)==="Table"&&n.push(o)}),s=s.filter(o=>{var l;return((l=o==null?void 0:o.layerDefinition)==null?void 0:l.type)!=="Table"})):(s.reverse(),n.reverse()),s.forEach(o=>{const l=e==null?void 0:e(o);if(l||!e){const u=I(t,a(o),r,o,l);t.add(u)}}),n.length){const o=await R.FeatureLayer();n.forEach(l=>{const u=e==null?void 0:e(l);if(u||!e){const y=I(t,o,r,l,u);t.tables.add(y)}})}}function I(t,a,r,e,s){const n=t.portalItem,i={portalItem:n.clone(),layerId:e.id};e.url!=null&&(i.url=e.url);const o=new a(i);if("sourceJSON"in o&&(o.sourceJSON=s),o.type!=="subtype-group"&&(o.sublayerTitleMode="service-name"),n.type==="Feature Collection"){const l={origin:"portal-item",portal:n.portal||j.getDefault()};o.read(e,l);const u=r.showLegend;u!=null&&o.read({showLegend:u},l)}return o}async function S(t,a,r){if(t.supportsData===!1)return;const e=t.instance,s=e.portalItem;if(!s)return;let n=null;try{n=await s.fetchData("json",r)}catch{}if(W(e)){let i=null;const o=await U(s,n,a);if((n!=null&&n.layers||n!=null&&n.tables)&&o>0){if(e.layerId==null){const l=T(n);e.layerId=e.type==="subtype-group"?l==null?void 0:l[0]:C(n)}i=V(n,e),i&&n.showLegend!=null&&(i.showLegend=n.showLegend)}return o>1&&"sublayerTitleMode"in e&&e.sublayerTitleMode!=="service-name"&&(e.sublayerTitleMode="item-title-and-service-name"),i}return n}async function U(t,a,r){var n,i,o,l;if(a!=null&&a.layers&&(a!=null&&a.tables))return $(a);const e=k(t.url);if(!e)return 1;const s=await r.fetchServiceMetadata(e.url.path).catch(()=>null);return(((n=a==null?void 0:a.layers)==null?void 0:n.length)??((i=s==null?void 0:s.layers)==null?void 0:i.length)??0)+(((o=a==null?void 0:a.tables)==null?void 0:o.length)??((l=s==null?void 0:s.tables)==null?void 0:l.length)??0)}function V(t,a){var s,n;const{layerId:r}=a,e=((s=t.layers)==null?void 0:s.find(i=>i.id===r))||((n=t.tables)==null?void 0:n.find(i=>i.id===r));return e&&X(e,a)?e:null}function W(t){return t.type!=="stream"&&"layerId"in t}function X(t,a){return!(a.type==="feature"&&"layerType"in t&&t.layerType==="SubtypeGroupLayer"||a.type==="subtype-group"&&!("layerType"in t))}async function Y(t){const{layersJSON:a}=await x(t);if(!a)return null;const r=[...a.layers,...a.tables];return e=>r.find(s=>s.id===e.id)}export{se as load};
