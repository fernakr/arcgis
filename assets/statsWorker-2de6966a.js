import{b as d,f as z,d as T,p as I,C as x,k as y,$ as V,E as w,P as F,U as P,j as D,x as E}from"./utils-c28e32e2.js";import"./index-308e373b.js";import"./quantizationUtils-d3f85899.js";import"./utils-94dd3829.js";import"./generateRendererUtils-725078ad.js";async function M(s){const{attribute:a,features:r}=s,{normalizationType:i,normalizationField:e,minValue:n,maxValue:t,fieldType:o}=a,l=await d({field:a.field,valueExpression:a.valueExpression,normalizationType:i,normalizationField:e,normalizationTotal:a.normalizationTotal,viewInfoParams:a.viewInfoParams,timeZone:a.timeZone,fieldInfos:a.fieldInfos},r),m=z({normalizationType:i,normalizationField:e,minValue:n,maxValue:t}),u={value:.5,fieldType:o},f=o==="esriFieldTypeString"?T({values:l,supportsNullCount:m,percentileParams:u}):I({values:l,minValue:n,maxValue:t,useSampleStdDev:!i,supportsNullCount:m,percentileParams:u});return x(f,o==="esriFieldTypeDate")}async function $(s){const{attribute:a,features:r}=s,i=await d({field:a.field,field2:a.field2,field3:a.field3,fieldDelimiter:a.fieldDelimiter,valueExpression:a.valueExpression,viewInfoParams:a.viewInfoParams,timeZone:a.timeZone,fieldInfos:a.fieldInfos},r,!1),e=y(i);return V(e,a.domains,a.returnAllCodedValues,a.fieldDelimiter)}async function g(s){const{attribute:a,features:r}=s,{field:i,normalizationType:e,normalizationField:n,normalizationTotal:t,classificationMethod:o}=a,l=await d({field:i,valueExpression:a.valueExpression,normalizationType:e,normalizationField:n,normalizationTotal:t,viewInfoParams:a.viewInfoParams,timeZone:a.timeZone,fieldInfos:a.fieldInfos},r),m=w(l,{field:i,normalizationType:e,normalizationField:n,normalizationTotal:t,classificationMethod:o,standardDeviationInterval:a.standardDeviationInterval,numClasses:a.numClasses,minValue:a.minValue,maxValue:a.maxValue});return F(m,o)}async function B(s){const{attribute:a,features:r}=s,{field:i,normalizationType:e,normalizationField:n,normalizationTotal:t,classificationMethod:o}=a,l=await d({field:i,valueExpression:a.valueExpression,normalizationType:e,normalizationField:n,normalizationTotal:t,viewInfoParams:a.viewInfoParams,timeZone:a.timeZone,fieldInfos:a.fieldInfos},r);return P(l,{field:i,normalizationType:e,normalizationField:n,normalizationTotal:t,classificationMethod:o,standardDeviationInterval:a.standardDeviationInterval,numBins:a.numBins,minValue:a.minValue,maxValue:a.maxValue})}async function k(s){const{attribute:a,features:r}=s,{field:i,radius:e,fieldOffset:n,transform:t,spatialReference:o}=a,l=a.size??[0,0],m=D(r??[],t,o,l),{count:u,min:f,max:p,mean:v,stdDev:c}=E(m,e??void 0,n,i,l[0],l[1]);return{count:u,min:f,max:p,avg:v,stddev:c}}export{g as classBreaks,k as heatmapStatistics,B as histogram,M as summaryStatistics,$ as uniqueValues};
