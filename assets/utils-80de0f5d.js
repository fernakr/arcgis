import{S as I,j as b,i as g,g as h,s as l}from"./index-3f4f2f72.js";import{i as c}from"./originUtils-cfe4feaf.js";import{o as m}from"./jsonContext-2336254e.js";import{i as S}from"./saveAPIKeyUtils-d295ffdb.js";function x(t,r,a){const e=a(t);if(!e.isValid)throw new l(`${r}:invalid-parameters`,e.errorMessage,{layer:t})}async function f(t){const{layer:r,errorNamePrefix:a,validateLayer:e}=t;await r.load(),x(r,a,e)}function u(t,r){return`Layer (title: ${t.title}, id: ${t.id}) of type '${t.declaredClass}' ${r}`}function y(t){const{item:r,itemType:a,errorNamePrefix:e,layer:o,validateItem:s}=t;if(S(r),r.type!==a)throw new l(`${e}:portal-item-wrong-type`,`Portal item type should be "${a}"`,{item:r,layer:o});if(s){const i=s(r);if(!i.isValid)throw new l(`${e}:invalid-parameters`,i.errorMessage,{layer:o})}}function N(t){const{layer:r,errorNamePrefix:a}=t,{portalItem:e}=r;if(!e)throw new l(`${a}:portal-item-not-set`,u(r,"requires the portalItem property to be set"));if(!e.loaded)throw new l(`${a}:portal-item-not-loaded`,u(r,"cannot be saved to a portal item that does not exist or is inaccessible"));y({...t,item:e})}function P(t){const{newItem:r,itemType:a}=t;let e=I.from(r);return e.id&&(e=e.clone(),e.id=null),e.type??(e.type=a),e.portal??(e.portal=b.getDefault()),y({...t,item:e}),e}function O(t,r){let a=(t.messages??[]).filter(({type:e})=>e==="error").map(({name:e,message:o,details:s})=>new l(e,o,s));if(t.blockedRelativeUrls&&(a=a.concat(t.blockedRelativeUrls.map(e=>new l("url:unsupported",`Relative url '${e}' is not supported`)))),r!=null&&r.ignoreUnsupported&&(a=a.filter(({name:e})=>e!=="layer:unsupported"&&e!=="symbol:unsupported"&&e!=="symbol-layer:unsupported"&&e!=="property:unsupported"&&e!=="url:unsupported")),a.length>0)throw new l("layer-write:unsupported","Failed to save layer due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:a})}async function w(t,r,a){var o;"beforeSave"in t&&typeof t.beforeSave=="function"&&await t.beforeSave();const e=t.write({},r);return await Promise.all(((o=r.resources)==null?void 0:o.pendingOperations)??[]),O(r,a),e}function $(t){g(t,h.JSAPI),t.typeKeywords&&(t.typeKeywords=t.typeKeywords.filter((r,a,e)=>e.indexOf(r)===a))}async function J(t,r,a){var o;const e=t.portal;await e.signIn(),await((o=e.user)==null?void 0:o.addItem({item:t,data:r,folder:a==null?void 0:a.folder}))}async function U(t,r){const{layer:a,createItemData:e,createJSONContext:o,saveResources:s}=t;await f(t),N(t);const i=a.portalItem,n=o?o(i):m(i),p=await w(a,n,r),d=await e({layer:a,layerJSON:p},i);return $(i),await i.update({data:d}),c(n),await(s==null?void 0:s(i,n)),i}async function k(t,r){const{layer:a,createItemData:e,createJSONContext:o,setItemProperties:s,saveResources:i}=t;await f(t);const n=P(t),p=o?o(n):m(n),d=await w(a,p,r),v=await e({layer:a,layerJSON:d},n);return await s(a,n),$(n),await J(n,v,r),a.portalItem=n,c(p),await(i==null?void 0:i(n,p)),n}export{U as I,k as b,N as d,x as l,u as m,P as u,J as v,$ as w,w as y};
