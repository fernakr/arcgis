import{cQ as t,aY as e,cR as m,cS as s,cs as p,cT as b,cU as d,aC as h,cV as l}from"./index-3f4f2f72.js";import{s as w,c as x}from"./sphere-71860854.js";function a(r){return r?{origin:t(r.origin),vector:t(r.vector)}:{origin:e(),vector:e()}}function R(r,o,n=a()){return m(n.origin,r),s(n.vector,o,r),n}function S(r,o,n){return C(r,o,0,1,n)}function C(r,o,n,u,c){const{vector:i,origin:v}=r,f=s(x.get(),o,v),g=p(i,f)/b(i);return d(c,i,h(g,n,u)),l(c,c,r.origin)}new w(()=>a());export{R as b,S as l,a as v};