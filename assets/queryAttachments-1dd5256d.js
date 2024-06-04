import{ei as h,ej as d,ad as p}from"./index-0dd4b1c4.js";import{t as f}from"./query-06c46432.js";import{l}from"./AttachmentInfo-99138bf1.js";import"./pbfQueryUtils-eab5c15b.js";import"./pbf-48d613a0.js";import"./OptimizedGeometry-196224d4.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";function j(n){const t=n.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function w(n,t){const e={};for(const a of t){const{parentObjectId:o,parentGlobalId:s,attachmentInfos:c}=a;for(const r of c){const{id:i}=r,u=h(d(`${n.path}/${o}/attachments/${i}`)),m=l.fromJSON(r);m.set({url:u,parentObjectId:o,parentGlobalId:s}),e[o]?e[o].push(m):e[o]=[m]}}return e}function z(n,t,e){let a={query:f({...n.query,f:"json",...j(t)})};return e&&(a={...e,...a,query:{...e.query,...a.query}}),p(n.path+"/queryAttachments",a).then(o=>o.data.attachmentGroups)}async function G(n,t,e){const{objectIds:a}=t,o=[];for(const s of a)o.push(p(n.path+"/"+s+"/attachments",e));return Promise.all(o).then(s=>a.map((c,r)=>({parentObjectId:c,attachmentInfos:s[r].data.attachmentInfos})))}export{z as executeAttachmentQuery,G as fetchAttachments,w as processAttachmentQueryResult};
