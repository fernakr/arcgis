import{aZ as e,ek as p,be as i}from"./index-b42b51f4.js";import{d as n}from"./queryTopFeatures-f2945fa7.js";import"./query-30a70988.js";import"./pbfQueryUtils-a1d989c4.js";import"./pbf-ff12f41b.js";import"./OptimizedGeometry-196224d4.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";async function k(o,r,a){const m=e(o),t=await n(m,p.from(r),{...a});return{count:t.data.count,extent:i.fromJSON(t.data.extent)}}export{k as executeForTopExtents};
