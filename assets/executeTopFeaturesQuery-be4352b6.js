import{aX as e,ek as s,K as f}from"./index-b1de92dd.js";import{p as n}from"./queryTopFeatures-a3410eb2.js";import"./query-d6a15cc2.js";import"./pbfQueryUtils-118df0b4.js";import"./pbf-49894844.js";import"./OptimizedGeometry-196224d4.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";async function w(r,o,t,m){const a=e(r),i={...m},{data:p}=await n(a,s.from(o),t,i);return f.fromJSON(p)}export{w as executeTopFeaturesQuery};