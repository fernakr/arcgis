import{aZ as e,ek as p,be as i}from"./index-79fc10e5.js";import{d as n}from"./queryTopFeatures-2b4043bf.js";import"./query-1333e738.js";import"./pbfQueryUtils-ea3fa794.js";import"./pbf-1a6216cd.js";import"./OptimizedGeometry-196224d4.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";async function k(o,r,a){const m=e(o),t=await n(m,p.from(r),{...a});return{count:t.data.count,extent:i.fromJSON(t.data.extent)}}export{k as executeForTopExtents};