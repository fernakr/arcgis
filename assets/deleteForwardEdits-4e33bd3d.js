import{s as n,aV as f,bP as u,bQ as p,a9 as m}from"./index-02c681c0.js";async function g(a,s,i,e){if(!s)throw new n("post:missing-guid","guid for version is missing");const t=f(a),o=i.toJSON(),r=u(t.query,{query:p({...o,f:"json"}),...e,method:"post"});s.startsWith("{")&&(s=s.slice(1,-1));const d=`${t.path}/versions/${s}/deleteForwardEdits`,{data:c}=await m(d,r);return c.success}export{g as deleteForwardEdits};
