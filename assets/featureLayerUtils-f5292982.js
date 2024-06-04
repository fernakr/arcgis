import{o as Y,q as f,t as _,u as A,a as I,g as c,v as $,h as G,s as y,i as T}from"./index-b1de92dd.js";import{i as P}from"./originUtils-cfe4feaf.js";import{I as k,y as E,w as N,b as z,u as B,v as j,l as g,d as q,m as b}from"./utils-b7764122.js";import{t as V}from"./fetchService-a4eded1e.js";import{a as C}from"./lazyLayerLoader-3be2c892.js";import{o as x}from"./jsonContext-5eff8bc5.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./saveAPIKeyUtils-c24460a1.js";const h="Feature Service",w="feature-layer-utils",H=`${w}-save`,Q=`${w}-save-as`,p=`${w}-saveall`,m=`${w}-saveall-as`;function v(e){return{isValid:G(e)&&(e.type!=="feature"||!e.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function O(e){const a=[],t=[];for(const{layer:n,layerJSON:l}of e)n.isTable?t.push(l):a.push(l);return{layers:a,tables:t}}function F(e){return O([e])}async function J(e,a){return/\/\d+\/?$/.test(e.url)?F(a[0]):M(a,e)}async function M(e,a){if(!a)return e.reverse(),O(e);const{layer:{url:t,customParameters:n,apiKey:l}}=e[0];let r=await a.fetchData("json");(r==null?void 0:r.layers)!=null&&(r==null?void 0:r.tables)!=null||(r=await W(r,{url:t??"",customParameters:n,apiKey:l},e.map(s=>s.layer.layerId)));for(const s of e)R(s.layer,s.layerJSON,r);return r}async function W(e,a,t){e||(e={}),e.layers||(e.layers=[]),e.tables||(e.tables=[]);const{url:n,customParameters:l,apiKey:r}=a,{serviceJSON:s,layersJSON:o}=await V(n,{customParameters:l,apiKey:r}),i=S(e.layers,s.layers,t),u=S(e.tables,s.tables,t);e.layers=i.itemResources,e.tables=u.itemResources;const d=[...i.added,...u.added],K=o?[...o.layers,...o.tables]:[];return await X(e,d,n,K),e}function S(e,a,t){const n=Y(e,a,(r,s)=>r.id===s.id);e=e.filter(r=>!n.removed.some(s=>s.id===r.id));const l=n.added;return l.forEach(({id:r})=>{e.push({id:r})}),{itemResources:e,added:l.filter(({id:r})=>!t.includes(r))}}async function X(e,a,t,n){const l=await Z(a),r=a.map(({id:s,type:o})=>new(l.get(o))({url:t,layerId:s,sourceJSON:n.find(({id:i})=>i===s)}));await Promise.allSettled(r.map(s=>s.load())),r.forEach(s=>{const{layerId:o,loaded:i,defaultPopupTemplate:u}=s;if(!i||u==null)return;const d={id:o,popupInfo:u.toJSON()};s.operationalLayerType!=="ArcGISFeatureLayer"&&(d.layerType=s.operationalLayerType),R(s,d,e)})}async function Z(e){const a=[];e.forEach(({type:l})=>{const r=ee(l),s=C[r];a.push(s())});const t=await Promise.all(a),n=new Map;return e.forEach(({type:l},r)=>{n.set(l,t[r])}),n}function ee(e){let a;switch(e){case"Feature Layer":case"Table":a="FeatureLayer";break;case"Oriented Imagery Layer":a="OrientedImageryLayer"}return a}function R(e,a,t){e.isTable?L(t.tables,a):L(t.layers,a)}function L(e,a){const t=e.findIndex(({id:n})=>n===a.id);t===-1?e.push(a):e[t]=a}function D(e,a){if(!e.length)throw new y(`${a}:missing-parameters`,"'layers' array should contain at least one feature layer")}function ae(e,a){const t=e.map(n=>n.portalItem.id);if(new Set(t).size>1)throw new y(`${a}:invalid-parameters`,"All layers in the 'layers' array should be loaded from the same portal item")}function U(e,a){const t=e.map(n=>n.layerId);if(new Set(t).size!==t.length)throw new y(`${a}:invalid-parameters`,"'layers' array should contain only one instance each of layer or table in a feature service")}async function te(e){D(e,p),await Promise.all(e.map(a=>a.load()));for(const a of e)g(a,p,v),q({layer:a,itemType:h,errorNamePrefix:p});ae(e,p),U(e,p)}async function re(e,a){const{url:t,layerId:n,title:l,fullExtent:r,isTable:s}=e,o=f(t);a.url=(o==null?void 0:o.serverType)==="FeatureServer"?t:`${t}/${n}`,a.title||(a.title=l),a.extent=null,s||r==null||(a.extent=await A(r)),I(a,c.METADATA),I(a,c.MULTI_LAYER),T(a,c.SINGLE_LAYER),s&&T(a,c.TABLE)}function se(e,a){for(const r of e){const s=r.parsedUrl.path,o=f(s);if(!(o==null?void 0:o.url.path))throw new y(`${a}:invalid-parameters`,b(r,`has unsupported url pattern: ${s}`),{layer:r});const u=o==null?void 0:o.serverType;if(u!=="FeatureServer"&&u!=="MapServer")throw new y(`${a}:invalid-parameters`,b(r,`has unsupported server type: ${u}`),{layer:r});if(u==="MapServer"&&e.length>1)throw new y(`${a}:invalid-parameters`,"Only one layer or table in a map service can be saved")}const t=f(e[0].parsedUrl.path),n=t==null?void 0:t.url.path;if(!e.every(r=>{const s=f(r.parsedUrl.path);return(s==null?void 0:s.url.path)===n}))throw new y(`${a}:invalid-parameters`,"'layers' array should only contain layers or tables that belong to the same feature service")}async function ne(e){D(e,m),await Promise.all(e.map(a=>a.load()));for(const a of e)g(a,m,v);se(e,m),U(e,m)}async function oe(e,a){let t=0,n=0;for(const{isTable:s}of a)s?n++:t++;const l=a[0].parsedUrl.path,r=f(l);if(e.url=(r==null?void 0:r.serverType)==="FeatureServer"?r.url.path:l,e.title||(e.title=r.title),e.extent=null,t>0){const s=a.map(o=>o.fullExtent).filter(_).reduce((o,i)=>o.clone().union(i));s&&(e.extent=await A(s))}I(e,c.METADATA),$(e,c.MULTI_LAYER,a.length>1),$(e,c.SINGLE_LAYER,a.length===1),$(e,c.TABLE,n>0&&t===0),N(e)}async function de(e,a){return k({layer:e,itemType:h,validateLayer:v,createItemData:(t,n)=>J(n,[t]),errorNamePrefix:H},a)}async function he(e,a){await te(e);const t=e[0].portalItem,n=x(t),l=await Promise.all(e.map(s=>E(s,n,a))),r=await J(t,e.map((s,o)=>({layer:s,layerJSON:l[o]})));return N(t),await t.update({data:r}),await Promise.all(e.slice(1).map(s=>s.portalItem.reload())),P(n),t.clone()}async function we(e,a,t){return z({layer:e,itemType:h,validateLayer:v,createItemData:(n,l)=>Promise.resolve(F(n)),errorNamePrefix:Q,newItem:a,setItemProperties:re},t)}async function ve(e,a,t){await ne(e);const n=B({itemType:h,errorNamePrefix:m,newItem:a}),l=x(n),r=await Promise.all(e.map(o=>E(o,l,t))),s=await M(e.map((o,i)=>({layer:o,layerJSON:r[i]})));await oe(n,e),await j(n,s,t);for(const o of e)o.portalItem=n.clone();return P(l),n}export{de as save,he as saveAll,ve as saveAllAs,we as saveAs};
