import{aZ as e,ek as p,be as i}from"./index-2cba8b26.js";import{d as n}from"./queryTopFeatures-b83df1f0.js";import"./query-8dc056ca.js";import"./pbfQueryUtils-f01d28b9.js";import"./pbf-7172b132.js";import"./OptimizedGeometry-196224d4.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";async function k(o,r,a){const m=e(o),t=await n(m,p.from(r),{...a});return{count:t.data.count,extent:i.fromJSON(t.data.extent)}}export{k as executeForTopExtents};
