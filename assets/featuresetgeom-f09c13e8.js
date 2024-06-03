import{Z as h,n as F,d as p,H as s,a as o,r as l}from"./arcadeUtils-46c91ec9.js";import{s as w}from"./TimeOnly-51bfdcd1.js";import{u as c,f as R}from"./SpatialFilter-92af591f.js";import{er as u}from"./index-8fbcd33f.js";import{R as I,m as A,S as P,x as g,O as C,p as O,h as S}from"./geometryEngineAsync-267ba99c.js";import"./number-cf7082ef.js";import"./featureConversionUtils-d21d2be5.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./WhereClause-38736187.js";function f(r){return r instanceof u}function a(r,t,i,d){return d(r,t,async(y,e,n)=>{if(n.length<2)throw new o(r,l.WrongNumberOfParameters,t);if((n=h(n))[0]===null&&n[1]===null)return!1;if(s(n[0])){if(n[1]instanceof u)return new R({parentfeatureset:n[0],relation:i,relationGeom:n[1]});if(n[1]===null)return new c({parentfeatureset:n[0]});throw new o(r,l.InvalidParameter,t)}if(f(n[0])){if(f(n[1])){switch(i){case"esriSpatialRelEnvelopeIntersects":return S(w(n[0]),w(n[1]));case"esriSpatialRelIntersects":return S(n[0],n[1]);case"esriSpatialRelContains":return O(n[0],n[1]);case"esriSpatialRelOverlaps":return C(n[0],n[1]);case"esriSpatialRelWithin":return g(n[0],n[1]);case"esriSpatialRelTouches":return P(n[0],n[1]);case"esriSpatialRelCrosses":return A(n[0],n[1])}throw new o(r,l.InvalidParameter,t)}if(s(n[1]))return new R({parentfeatureset:n[1],relation:i,relationGeom:n[0]});if(n[1]===null)return!1;throw new o(r,l.InvalidParameter,t)}if(n[0]!==null)throw new o(r,l.InvalidParameter,t);return s(n[1])?new c({parentfeatureset:n[1]}):!(n[1]instanceof u||n[1]===null)&&void 0})}function j(r){r.mode==="async"&&(r.functions.intersects=function(t,i){return a(t,i,"esriSpatialRelIntersects",r.standardFunctionAsync)},r.functions.envelopeintersects=function(t,i){return a(t,i,"esriSpatialRelEnvelopeIntersects",r.standardFunctionAsync)},r.signatures.push({name:"envelopeintersects",min:2,max:2}),r.functions.contains=function(t,i){return a(t,i,"esriSpatialRelContains",r.standardFunctionAsync)},r.functions.overlaps=function(t,i){return a(t,i,"esriSpatialRelOverlaps",r.standardFunctionAsync)},r.functions.within=function(t,i){return a(t,i,"esriSpatialRelWithin",r.standardFunctionAsync)},r.functions.touches=function(t,i){return a(t,i,"esriSpatialRelTouches",r.standardFunctionAsync)},r.functions.crosses=function(t,i){return a(t,i,"esriSpatialRelCrosses",r.standardFunctionAsync)},r.functions.relate=function(t,i){return r.standardFunctionAsync(t,i,(d,y,e)=>{if(e=h(e),F(e,3,3,t,i),f(e[0])&&f(e[1]))return I(e[0],e[1],p(e[2]));if(e[0]instanceof u&&e[1]===null||e[1]instanceof u&&e[0]===null)return!1;if(s(e[0])&&e[1]===null)return new c({parentfeatureset:e[0]});if(s(e[1])&&e[0]===null)return new c({parentfeatureset:e[1]});if(s(e[0])&&e[1]instanceof u)return e[0].relate(e[1],p(e[2]));if(s(e[1])&&e[0]instanceof u)return e[1].relate(e[0],p(e[2]));if(e[0]===null&&e[1]===null)return!1;throw new o(t,l.InvalidParameter,i)})})}export{j as registerFunctions};
