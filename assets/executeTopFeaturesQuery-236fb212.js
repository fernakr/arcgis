import{aZ as e,ek as s,K as f}from"./index-6c8fba83.js";import{p as n}from"./queryTopFeatures-dcf70afe.js";import"./query-9c0ef28a.js";import"./pbfQueryUtils-acc9797f.js";import"./pbf-04f3423d.js";import"./OptimizedGeometry-196224d4.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";async function w(r,o,t,m){const a=e(r),i={...m},{data:p}=await n(a,s.from(o),t,i);return f.fromJSON(p)}export{w as executeTopFeaturesQuery};