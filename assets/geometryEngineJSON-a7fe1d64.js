import{G as r}from"./geometryEngineBase-7b4e6e55.js";import{t as i}from"./json-48e3ea08.js";function l(e){return r.extendedSpatialReferenceInfo(e)}function a(e,n,t){return r.clip(i,e,n,t)}function s(e,n,t){return r.cut(i,e,n,t)}function p(e,n,t){return r.contains(i,e,n,t)}function d(e,n,t){return r.crosses(i,e,n,t)}function g(e,n,t,u){return r.distance(i,e,n,t,u)}function m(e,n,t){return r.equals(i,e,n,t)}function h(e,n,t){return r.intersects(i,e,n,t)}function x(e,n,t){return r.touches(i,e,n,t)}function y(e,n,t){return r.within(i,e,n,t)}function S(e,n,t){return r.disjoint(i,e,n,t)}function R(e,n,t){return r.overlaps(i,e,n,t)}function w(e,n,t,u){return r.relate(i,e,n,t,u)}function D(e,n){return r.isSimple(i,e,n)}function A(e,n){return r.simplify(i,e,n)}function T(e,n,t=!1){return r.convexHull(i,e,n,t)}function E(e,n,t){return r.difference(i,e,n,t)}function L(e,n,t){return r.symmetricDifference(i,e,n,t)}function V(e,n,t){return r.intersect(i,e,n,t)}function b(e,n,t=null){return r.union(i,e,n,t)}function v(e,n,t,u,o,c,f){return r.offset(i,e,n,t,u,o,c,f)}function z(e,n,t,u,o=!1){return r.buffer(i,e,n,t,u,o)}function I(e,n,t,u,o,c,f){return r.geodesicBuffer(i,e,n,t,u,o,c,f)}function j(e,n,t,u=!0){return r.nearestCoordinate(i,e,n,t,u)}function H(e,n,t){return r.nearestVertex(i,e,n,t)}function _(e,n,t,u,o){return r.nearestVertices(i,e,n,t,u,o)}function P(e,n,t,u){if(n==null||u==null)throw new Error("Illegal Argument Exception");const o=r.rotate(n,t,u);return o.spatialReference=e,o}function q(e,n,t){if(n==null||t==null)throw new Error("Illegal Argument Exception");const u=r.flipHorizontal(n,t);return u.spatialReference=e,u}function B(e,n,t){if(n==null||t==null)throw new Error("Illegal Argument Exception");const u=r.flipVertical(n,t);return u.spatialReference=e,u}function C(e,n,t,u,o){return r.generalize(i,e,n,t,u,o)}function O(e,n,t,u){return r.densify(i,e,n,t,u)}function G(e,n,t,u,o=0){return r.geodesicDensify(i,e,n,t,u,o)}function M(e,n,t){return r.planarArea(i,e,n,t)}function $(e,n,t){return r.planarLength(i,e,n,t)}function k(e,n,t,u){return r.geodesicArea(i,e,n,t,u)}function F(e,n,t,u){return r.geodesicLength(i,e,n,t,u)}function J(e,n,t){return n==null||t==null?[]:r.intersectLinesToPoints(i,e,n,t)}function K(e,n){r.changeDefaultSpatialReferenceTolerance(e,n)}function N(e){r.clearDefaultSpatialReferenceTolerance(e)}const W=Object.freeze(Object.defineProperty({__proto__:null,buffer:z,changeDefaultSpatialReferenceTolerance:K,clearDefaultSpatialReferenceTolerance:N,clip:a,contains:p,convexHull:T,crosses:d,cut:s,densify:O,difference:E,disjoint:S,distance:g,equals:m,extendedSpatialReferenceInfo:l,flipHorizontal:q,flipVertical:B,generalize:C,geodesicArea:k,geodesicBuffer:I,geodesicDensify:G,geodesicLength:F,intersect:V,intersectLinesToPoints:J,intersects:h,isSimple:D,nearestCoordinate:j,nearestVertex:H,nearestVertices:_,offset:v,overlaps:R,planarArea:M,planarLength:$,relate:w,rotate:P,simplify:A,symmetricDifference:L,touches:x,union:b,within:y},Symbol.toStringTag,{value:"Module"}));export{b as A,M as B,F as C,v as D,j as E,K as G,G as H,C as I,H as L,N as M,W as O,J as P,z as R,L as S,_ as T,O as V,$ as _,p as a,P as b,h as c,w as d,x as f,R as g,A as h,s as i,I as j,y as l,D as m,d as o,S as p,k as q,a as r,g as s,l as t,m as u,q as v,V as w,E as x,T as y,B as z};
