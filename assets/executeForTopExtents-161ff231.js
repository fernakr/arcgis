import{aV as e,el as p,bj as i}from"./index-3f4f2f72.js";import{d as n}from"./queryTopFeatures-a1b0a927.js";import"./query-88b4f998.js";import"./pbfQueryUtils-10a92700.js";import"./pbf-b7e567bf.js";import"./OptimizedGeometry-196224d4.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";async function j(o,r,a){const m=e(o),t=await n(m,p.from(r),{...a});return{count:t.data.count,extent:i.fromJSON(t.data.extent)}}export{j as executeForTopExtents};