import{aY as e,ef as n,bd as p}from"./index-12a23f8f.js";import{d as i}from"./queryTopFeatures-604a7392.js";import"./query-6f1214e9.js";import"./pbfQueryUtils-a2f764fe.js";import"./pbf-7ed7c749.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";async function b(o,r,a){const m=e(o),t=await i(m,n.from(r),{...a});return{count:t.data.count,extent:p.fromJSON(t.data.extent)}}export{b as executeForTopExtents};