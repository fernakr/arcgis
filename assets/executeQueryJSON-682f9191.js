import{K as e,aZ as f,a_ as i}from"./index-98a329ed.js";import{c as m}from"./query-a4c922d9.js";async function w(a,r,t){const n=await u(a,r,t);return e.fromJSON(n)}async function u(a,r,t){const n=f(a),s={...t},o=i.from(r),{data:c}=await m(n,o,o.sourceSpatialReference,s);return c}export{u as a,w as s};
