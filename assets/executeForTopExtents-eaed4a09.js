import{aZ as e,ek as p,be as i}from"./index-7e9b571f.js";import{d as n}from"./queryTopFeatures-a1ace296.js";import"./query-e74f98fe.js";import"./pbfQueryUtils-e62737c4.js";import"./pbf-c2017a09.js";import"./OptimizedGeometry-196224d4.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";async function k(o,r,a){const m=e(o),t=await n(m,p.from(r),{...a});return{count:t.data.count,extent:i.fromJSON(t.data.extent)}}export{k as executeForTopExtents};
