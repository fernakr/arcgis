import{cL as t,b0 as e,cM as m,cN as s,cn as p,cO as b,cP as P,aG as d,cQ as h}from"./index-c43fbcbe.js";import{s as l,c as w}from"./sphere-056a5bef.js";function a(r){return r?{origin:t(r.origin),vector:t(r.vector)}:{origin:e(),vector:e()}}function M(r,o,n=a()){return m(n.origin,r),s(n.vector,o,r),n}function N(r,o,n){return x(r,o,0,1,n)}function x(r,o,n,u,c){const{vector:i,origin:v}=r,f=s(w.get(),o,v),g=p(i,f)/b(i);return P(c,i,d(g,n,u)),h(c,c,r.origin)}new l(()=>a());export{M as b,N as l,a as v};
