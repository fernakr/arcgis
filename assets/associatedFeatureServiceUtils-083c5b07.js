import{q as w,s as u,S as h,j as I,bF as y,ad as f,bs as U}from"./index-98a329ed.js";async function q(e,a){const t=w(e);if(!t)throw new u("invalid-url","Invalid scene service url");const r={...a,sceneServerUrl:t.url.path,layerId:t.sublayer??void 0};if(r.sceneLayerItem??(r.sceneLayerItem=await j(r)),r.sceneLayerItem==null)return v(r.sceneServerUrl.replace("/SceneServer","/FeatureServer"),r);const n=await $(r);if(!(n!=null&&n.url))throw new u("related-service-not-found","Could not find feature service through portal item relationship");const i=await v(n.url,r);return i.portalItem=n,i}async function j(e){const a=(await m(e)).serviceItemId;if(!a)return null;const t=new h({id:a,apiKey:e.apiKey}),r=await D(e);r!=null&&(t.portal=new I({url:r}));try{return t.load({signal:e.signal})}catch(n){return y(n),null}}async function m(e){if(e.rootDocument)return e.rootDocument;const a={query:{f:"json",token:e.apiKey},responseType:"json",signal:e.signal};try{const t=await f(e.sceneServerUrl,a);e.rootDocument=t.data}catch{e.rootDocument={}}return e.rootDocument}async function D(e){var r;const a=(r=U)==null?void 0:r.findServerInfo(e.sceneServerUrl);if(a!=null&&a.owningSystemUrl)return a.owningSystemUrl;const t=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const n=(await f(t,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(n)return n}catch(n){y(n)}return null}async function v(e,a){const t=w(e);if(!t)throw new u("invalid-feature-service-url","Invalid feature service url");const r=t.url.path,n=a.layerId;if(n==null)return{serverUrl:r};const i=m(a),d=s=>{const S={query:{f:"json"},responseType:"json",authMode:s,signal:a.signal};return f(r,S)},g=d("anonymous").catch(()=>d("no-prompt")),[p,o]=await Promise.all([g,i]),c=o==null?void 0:o.layers,l=p.data&&p.data.layers;if(!Array.isArray(l))throw new Error("expected layers array");if(Array.isArray(c)){for(let s=0;s<Math.min(c.length,l.length);s++)if(c[s].id===n)return{serverUrl:r,layerId:l[s].id}}else if(n!=null&&n<l.length)return{serverUrl:r,layerId:l[n].id};throw new Error("could not find matching associated sublayer")}async function $({sceneLayerItem:e,signal:a}){if(!e)return null;try{const t=(await e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:a})).find(n=>n.type==="Feature Service")||null;if(!t)return null;const r=new h({portal:t.portal,id:t.id});return await r.load(),r}catch(t){return y(t),null}}export{q as l};
