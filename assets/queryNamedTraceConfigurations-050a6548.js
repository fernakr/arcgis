import{A as o,by as l,B as d,fb as m,C as y,b2 as p,bC as b,bB as C,ad as N}from"./index-8a7d0ddb.js";let t=class extends l{constructor(r){super(r),this.namedTraceConfigurations=[]}};o([d({type:[m],json:{read:{source:"traceConfigurations"},write:{target:"traceConfigurations"}}})],t.prototype,"namedTraceConfigurations",void 0),t=o([y("esri.rest.networks.support.QueryNamedTraceConfigurationsResult")],t);const h=t;async function J(r,s,i){const e=p(r),a=s.toJSON();s.globalIds&&s.globalIds.length>0&&(a.globalIds=JSON.stringify(s.globalIds)),s.creators&&s.creators.length>0&&(a.creators=JSON.stringify(s.creators)),s.tags&&s.tags.length>0&&(a.tags=JSON.stringify(s.tags)),s.names&&s.names.length>0&&(a.names=JSON.stringify(s.names));const n={...a,f:"json"},g=b({...e.query,...n}),c=C(g,{...i,method:"post"}),f=`${e.path}/traceConfigurations/query`,{data:u}=await N(f,c);return h.fromJSON(u)}export{J as queryNamedTraceConfigurations};