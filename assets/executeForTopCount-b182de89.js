import{a$ as m,ee as i}from"./index-beb896e6.js";import{a as p}from"./queryTopFeatures-af05107d.js";import"./query-63b45489.js";import"./pbfQueryUtils-9051f8dd.js";import"./pbf-e182fc3f.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";async function d(o,t,r){const a=m(o);return(await p(a,i.from(t),{...r})).data.count}export{d as executeForTopCount};