import{cL as t,a_ as e,cM as m,cN as a,cn as p,cO as P,cP as b,aC as d,cQ as h}from"./index-994ee346.js";import{s as l,c as w}from"./sphere-1be2af97.js";function s(r){return r?{origin:t(r.origin),vector:t(r.vector)}:{origin:e(),vector:e()}}function M(r,o,n=s()){return m(n.origin,r),a(n.vector,o,r),n}function N(r,o,n){return x(r,o,0,1,n)}function x(r,o,n,u,c){const{vector:i,origin:v}=r,f=a(w.get(),o,v),g=p(i,f)/P(i);return b(c,i,d(g,n,u)),h(c,c,r.origin)}new l(()=>s());export{M as b,N as l,s as v};
