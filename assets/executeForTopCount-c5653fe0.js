import{aZ as a,ek as i}from"./index-7e9b571f.js";import{a as p}from"./queryTopFeatures-a1ace296.js";import"./query-e74f98fe.js";import"./pbfQueryUtils-e62737c4.js";import"./pbf-c2017a09.js";import"./OptimizedGeometry-196224d4.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";async function k(o,t,r){const m=a(o);return(await p(m,i.from(t),{...r})).data.count}export{k as executeForTopCount};