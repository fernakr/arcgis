import{K as e,aX as f,aY as i}from"./index-b1de92dd.js";import{c as m}from"./query-d6a15cc2.js";async function w(a,r,t){const n=await u(a,r,t);return e.fromJSON(n)}async function u(a,r,t){const n=f(a),s={...t},o=i.from(r),{data:c}=await m(n,o,o.sourceSpatialReference,s);return c}export{u as a,w as s};
