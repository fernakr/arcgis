import{F as i,G as u,H as d,a9 as l,aZ as y,bD as f,bC as $,ad as S,a8 as b}from"./index-98a329ed.js";import{p as g}from"./Association-012be1ad.js";let o=class extends l{constructor(t){super(t),this.associations=[]}};i([u({type:[g],json:{write:!0}})],o.prototype,"associations",void 0),o=i([d("esri.rest.networks.support.QueryAssociationsResult")],o);const I=o;function w(t){const{returnDeletes:r,elements:a,gdbVersion:e,moment:n}=t.toJSON();return{returnDeletes:r,elements:JSON.stringify(a.map(s=>({globalId:s.globalId,networkSourceId:s.networkSourceId,terminalId:s.terminalId}))),types:JSON.stringify(t.types.map(s=>b.toJSON(s))),gdbVersion:e,moment:n}}async function O(t,r,a){const e=y(t),n={...w(r),f:"json"},s=f({...e.query,...n}),c=$(s,{...a,method:"post"}),p=`${e.path}/associations/query`,{data:m}=await S(p,c);return I.fromJSON(m)}export{O as queryAssociations};
