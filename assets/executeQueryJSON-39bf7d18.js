import{E as e,b2 as f,b3 as i}from"./index-8a7d0ddb.js";import{c as m}from"./query-32db14c9.js";async function d(a,r,t){const n=await u(a,r,t);return e.fromJSON(n)}async function u(a,r,t){const n=f(a),s={...t},o=i.from(r),{data:c}=await m(n,o,o.sourceSpatialReference,s);return c}export{u as a,d as s};