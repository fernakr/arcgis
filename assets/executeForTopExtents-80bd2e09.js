import{aZ as e,ek as p,be as i}from"./index-32200583.js";import{d as n}from"./queryTopFeatures-daa5a433.js";import"./query-23bcd6ad.js";import"./pbfQueryUtils-0bd7da4b.js";import"./pbf-5c902a16.js";import"./OptimizedGeometry-196224d4.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";async function k(o,r,a){const m=e(o),t=await n(m,p.from(r),{...a});return{count:t.data.count,extent:i.fromJSON(t.data.extent)}}export{k as executeForTopExtents};