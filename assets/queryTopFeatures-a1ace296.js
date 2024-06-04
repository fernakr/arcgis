import{el as p,I as m,b9 as F,ad as f,aP as E,cz as j,dY as a}from"./index-7e9b571f.js";import{t as x}from"./query-e74f98fe.js";const c="Layer does not support extent calculation.";function O(o,e){var u,y;const n=o.geometry,t=o.toJSON(),r=t;if(n!=null&&(r.geometry=JSON.stringify(n),r.geometryType=j(n),r.inSR=a(n.spatialReference)),(u=t.topFilter)!=null&&u.groupByFields&&(r.topFilter.groupByFields=t.topFilter.groupByFields.join(",")),(y=t.topFilter)!=null&&y.orderByFields&&(r.topFilter.orderByFields=t.topFilter.orderByFields.join(",")),t.topFilter&&(r.topFilter=JSON.stringify(r.topFilter)),t.objectIds&&(r.objectIds=t.objectIds.join(",")),t.orderByFields&&(r.orderByFields=t.orderByFields.join(",")),t.outFields&&!(e!=null&&e.returnCountOnly||e!=null&&e.returnExtentOnly||e!=null&&e.returnIdsOnly)?t.outFields.includes("*")?r.outFields="*":r.outFields=t.outFields.join(","):delete r.outFields,t.outSR?r.outSR=a(t.outSR):n&&t.returnGeometry&&(r.outSR=r.inSR),t.returnGeometry&&delete t.returnGeometry,t.timeExtent){const l=t.timeExtent,{start:s,end:i}=l;s==null&&i==null||(r.time=s===i?s:`${s??"null"},${i??"null"}`),delete t.timeExtent}return r}async function S(o,e,n,t){const r=await d(o,e,"json",t);return p(e,n,r.data),r}async function I(o,e,n){return e.timeExtent!=null&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:d(o,e,"json",n,{returnIdsOnly:!0})}async function R(o,e,n){return e.timeExtent!=null&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:d(o,e,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then(t=>{const r=t.data;if(r.hasOwnProperty("extent"))return t;if(r.features)throw new Error(c);if(r.hasOwnProperty("count"))throw new Error(c);return t})}function b(o,e,n){return e.timeExtent!=null&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):d(o,e,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function d(o,e,n,t={},r={}){const u=typeof o=="string"?m(o):o,y=e.geometry?[e.geometry]:[];return t.responseType=n==="pbf"?"array-buffer":"json",F(y,null,t).then(l=>{const s=l==null?void 0:l[0];s!=null&&((e=e.clone()).geometry=s);const i=x({...u.query,f:n,...r,...O(e,r)});return f(E(u.path,"queryTopFeatures"),{...t,query:{...i,...t.query}})})}export{b as a,R as d,I as m,S as p};
