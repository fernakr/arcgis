import{m as g}from"./TimeOnly-99ef6280.js";import{n as p,H as m,q as l,P as h,b as d,a as w,r as S,Y as f,A as c,y as v}from"./arcadeUtils-deec73a3.js";import{x as y,r as x}from"./WhereClause-16ab2071.js";import"./index-2cba8b26.js";import"./number-d4e29c66.js";import"./featureConversionUtils-0a1f3a04.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";async function s(n,e,a,t,i,r){if(t.length===1){if(l(t[0]))return f(n,t[0],c(t[1],-1));if(d(t[0]))return f(n,t[0].toArray(),c(t[1],-1))}else if(t.length===2){if(l(t[0]))return f(n,t[0],c(t[1],-1));if(d(t[0]))return f(n,t[0].toArray(),c(t[1],-1));if(m(t[0])){const o=await t[0].load(),u=await F(y.create(t[1],o.getFieldsIndex(),o.dateFieldsTimeZoneDefaultUTC),r,i);return A(i,await t[0].calculateStatistic(n,u,c(t[2],1e3),e.abortSignal))}}else if(t.length===3&&m(t[0])){const o=await t[0].load(),u=await F(y.create(t[1],o.getFieldsIndex(),o.dateFieldsTimeZoneDefaultUTC),r,i);return A(i,await t[0].calculateStatistic(n,u,c(t[2],1e3),e.abortSignal))}return f(n,t,-1)}function A(n,e){return e instanceof x?g.fromReaderAsTimeStampOffset(e.toStorageFormat()):e instanceof Date?g.dateJSAndZoneToArcadeDate(e,v(n)):e}async function F(n,e,a){const t=n.getVariables();if(t.length>0){const i=[];for(let o=0;o<t.length;o++){const u={name:t[o]};i.push(await e.evaluateIdentifier(a,u))}const r={};for(let o=0;o<t.length;o++)r[t[o]]=i[o];return n.parameters=r,n}return n}function U(n){n.mode==="async"&&(n.functions.stdev=function(e,a){return n.standardFunctionAsync(e,a,(t,i,r)=>s("stdev",t,i,r,e,n))},n.functions.variance=function(e,a){return n.standardFunctionAsync(e,a,(t,i,r)=>s("variance",t,i,r,e,n))},n.functions.average=function(e,a){return n.standardFunctionAsync(e,a,(t,i,r)=>s("mean",t,i,r,e,n))},n.functions.mean=function(e,a){return n.standardFunctionAsync(e,a,(t,i,r)=>s("mean",t,i,r,e,n))},n.functions.sum=function(e,a){return n.standardFunctionAsync(e,a,(t,i,r)=>s("sum",t,i,r,e,n))},n.functions.min=function(e,a){return n.standardFunctionAsync(e,a,(t,i,r)=>s("min",t,i,r,e,n))},n.functions.max=function(e,a){return n.standardFunctionAsync(e,a,(t,i,r)=>s("max",t,i,r,e,n))},n.functions.count=function(e,a){return n.standardFunctionAsync(e,a,(t,i,r)=>{if(p(r,1,1,e,a),m(r[0]))return r[0].count(t.abortSignal);if(l(r[0])||h(r[0]))return r[0].length;if(d(r[0]))return r[0].length();throw new w(e,S.InvalidParameter,a)})})}export{U as registerFunctions};
