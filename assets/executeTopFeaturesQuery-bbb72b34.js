import{aV as e,el as s,K as f}from"./index-02c681c0.js";import{p as n}from"./queryTopFeatures-4ba073d3.js";import"./query-285201d0.js";import"./pbfQueryUtils-eaf36613.js";import"./pbf-aae2126d.js";import"./OptimizedGeometry-196224d4.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";async function w(r,o,t,m){const a=e(r),i={...m},{data:p}=await n(a,s.from(o),t,i);return f.fromJSON(p)}export{w as executeTopFeaturesQuery};