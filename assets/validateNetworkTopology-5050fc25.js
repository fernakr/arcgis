import{aY as v,bW as y,bV as p,ae as c,c9 as S,s as f}from"./index-12a23f8f.js";async function N(e,t,s){var l;const o=v(e),i=t.toJSON();t.validationSet&&(i.validationSet=JSON.stringify(t.validationSet));const n={...i,returnEdits:!0,f:"json"},r=y({...o.query,...n}),a=p(r,{...s,method:"post"}),m=`${o.path}/validateNetworkTopology`,{data:g}=await c(m,a),d=S.fromJSON(g);return d.serviceEdits=((l=d.serviceEdits)==null?void 0:l.map(u=>({layerId:u.id,editedFeatures:u.editedFeatures})))??[],d}async function b(e,t,s){if(!t.gdbVersion)throw new f("submit-validate-network-topology-job:missing-gdb-version","version is missing");const o=v(e),i=t.toJSON();t.validationSet&&(i.validationSet=JSON.stringify(t.validationSet));const n=p(o.query,{query:y({...i,returnEdits:!0,async:!0,f:"json"}),...s,method:"post"}),r=`${o.path}/validateNetworkTopology`,{data:a}=await c(r,n);return a?a.statusUrl:null}export{b as submitValidateNetworkTopologyJob,N as validateNetworkTopology};
