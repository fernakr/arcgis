import{s as n,b2 as f,bB as u,bC as p,ad as m}from"./index-308e373b.js";async function g(i,s,a,e){if(!s)throw new n("post:missing-guid","guid for version is missing");const t=f(i),o=a.toJSON(),r=u(t.query,{query:p({...o,f:"json"}),...e,method:"post"});s.startsWith("{")&&(s=s.slice(1,-1));const d=`${t.path}/versions/${s}/deleteForwardEdits`,{data:c}=await m(d,r);return c.success}export{g as deleteForwardEdits};