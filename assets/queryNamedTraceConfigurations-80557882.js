import{F as o,b6 as l,G as d,fb as m,H as p,a$ as y,bY as b,bX as N,af as $}from"./index-beb896e6.js";let t=class extends l{constructor(r){super(r),this.namedTraceConfigurations=[]}};o([d({type:[m],json:{read:{source:"traceConfigurations"},write:{target:"traceConfigurations"}}})],t.prototype,"namedTraceConfigurations",void 0),t=o([p("esri.rest.networks.support.QueryNamedTraceConfigurationsResult")],t);const h=t;async function J(r,s,i){const e=y(r),a=s.toJSON();s.globalIds&&s.globalIds.length>0&&(a.globalIds=JSON.stringify(s.globalIds)),s.creators&&s.creators.length>0&&(a.creators=JSON.stringify(s.creators)),s.tags&&s.tags.length>0&&(a.tags=JSON.stringify(s.tags)),s.names&&s.names.length>0&&(a.names=JSON.stringify(s.names));const n={...a,f:"json"},g=b({...e.query,...n}),c=N(g,{...i,method:"post"}),f=`${e.path}/traceConfigurations/query`,{data:u}=await $(f,c);return h.fromJSON(u)}export{J as queryNamedTraceConfigurations};
