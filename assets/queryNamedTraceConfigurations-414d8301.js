import{F as o,a9 as l,G as d,fl as m,H as p,aZ as y,bD as C,bC as N,ad as h}from"./index-cdf69f36.js";let t=class extends l{constructor(r){super(r),this.namedTraceConfigurations=[]}};o([d({type:[m],json:{read:{source:"traceConfigurations"},write:{target:"traceConfigurations"}}})],t.prototype,"namedTraceConfigurations",void 0),t=o([p("esri.rest.networks.support.QueryNamedTraceConfigurationsResult")],t);const $=t;async function J(r,a,i){const e=y(r),s=a.toJSON();a.globalIds&&a.globalIds.length>0&&(s.globalIds=JSON.stringify(a.globalIds)),a.creators&&a.creators.length>0&&(s.creators=JSON.stringify(a.creators)),a.tags&&a.tags.length>0&&(s.tags=JSON.stringify(a.tags)),a.names&&a.names.length>0&&(s.names=JSON.stringify(a.names));const n={...s,f:"json"},g=C({...e.query,...n}),c=N(g,{...i,method:"post"}),f=`${e.path}/traceConfigurations/query`,{data:u}=await h(f,c);return $.fromJSON(u)}export{J as queryNamedTraceConfigurations};
