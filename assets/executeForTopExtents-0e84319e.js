import{b2 as e,em as n,aT as p}from"./index-308e373b.js";import{d as i}from"./queryTopFeatures-cb56ae25.js";import"./query-301b2482.js";import"./pbfQueryUtils-98bd69a5.js";import"./pbf-98a81c0b.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";async function T(o,r,a){const m=e(o),t=await i(m,n.from(r),{...a});return{count:t.data.count,extent:p.fromJSON(t.data.extent)}}export{T as executeForTopExtents};