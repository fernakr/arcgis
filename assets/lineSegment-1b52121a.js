import{d2 as e,bV as c,d3 as g,d4 as s,cI as m,d5 as p,d6 as b,aD as h,d7 as l}from"./index-308e373b.js";import{s as w,c as x}from"./sphere-9618f76b.js";function a(r){return r?{origin:e(r.origin),vector:e(r.vector)}:{origin:c(),vector:c()}}function V(r,o,n=a()){return g(n.origin,r),s(n.vector,o,r),n}function j(r,o,n){return D(r,o,0,1,n)}function D(r,o,n,u,i){const{vector:t,origin:v}=r,d=s(x.get(),o,v),f=m(t,d)/p(t);return b(i,t,h(f,n,u)),l(i,i,r.origin)}new w(()=>a());export{V as b,j as l,a as v};
