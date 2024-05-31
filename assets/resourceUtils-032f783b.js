import{aP as n,s as p,aQ as g,ad as w}from"./index-6c8fba83.js";async function P(e,t={},a){await e.load(a);const r=n(e.itemUrl,"resources"),{start:o=1,num:i=10,sortOrder:l="asc",sortField:c="created"}=t,s={query:{start:o,num:i,sortOrder:l,sortField:c,token:e.apiKey},signal:a==null?void 0:a.signal},u=await e.portal.request(r,s);return{total:u.total,nextStart:u.nextStart,resources:u.resources.map(({created:h,size:f,resource:y})=>({created:new Date(h),size:f,resource:e.resourceFromPath(y)}))}}async function R(e,t,a,r){if(!e.hasPath())throw new p(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");const o=e.portalItem;await o.load(r);const i=n(o.userItemUrl,t==="add"?"addResources":"updateResources"),[l,c]=d(e.path),s=new FormData;return l&&l!=="."&&s.append("resourcesPrefix",l),r!=null&&r.compress&&s.append("compress","true"),s.append("fileName",c),s.append("file",a,c),s.append("f","json"),r!=null&&r.access&&s.append("access",r.access),await o.portal.request(i,{method:"post",body:s,signal:r==null?void 0:r.signal}),e}async function I(e,t,a){if(!t.hasPath())throw new p("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(a);const r=n(e.userItemUrl,"removeResources");await e.portal.request(r,{method:"post",query:{resource:t.path},signal:a==null?void 0:a.signal}),t.portalItem=null}async function q(e,t){await e.load(t);const a=n(e.userItemUrl,"removeResources");return e.portal.request(a,{method:"post",query:{deleteAll:!0},signal:t==null?void 0:t.signal})}function d(e){const t=e.lastIndexOf("/");return t===-1?[".",e]:[e.slice(0,t),e.slice(t+1)]}function m(e){const[t,a]=b(e),[r,o]=d(t);return[r,o,a]}function b(e){const t=g(e);return t==null?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}async function x(e){return e.type==="blob"?e.blob:e.type==="json"?new Blob([e.jsonString],{type:"application/json"}):(await w(e.url,{responseType:"blob"})).data}function F(e,t){if(!e.hasPath())return null;const[a,,r]=m(e.path);return e.portalItem.resourceFromPath(n(a,t+r))}function S(e,t){if(!e.hasPath())return null;const[a,,r]=m(e.path);return e.portalItem.resourceFromPath(n(a,t+r))}export{R as addOrUpdateResource,x as contentToBlob,P as fetchResources,F as getSiblingOfSameType,S as getSiblingOfSameTypeI,q as removeAllResources,I as removeResource,m as splitPrefixFileNameAndExtension};
