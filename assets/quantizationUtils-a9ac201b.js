import{aj as P,an as d,am as L,ak as k,al as A}from"./index-c6695971.js";const f=(r,n,t)=>[n,t],s=(r,n,t)=>[n,t,r[2]],m=(r,n,t)=>[n,t,r[2],r[3]];function U(r){return r?{originPosition:r.originPosition==="upper-left"?"upperLeft":r.originPosition==="lower-left"?"lowerLeft":r.originPosition,scale:r.tolerance?[r.tolerance,r.tolerance]:[1,1],translate:r.extent!=null?[r.extent.xmin,r.extent.ymax]:[0,0]}:null}function h({scale:r,translate:n},t){return Math.round((t-n[0])/r[0])}function x({scale:r,translate:n},t){return Math.round((n[1]-t)/r[1])}function g(r,n,t){const u=[];let o,l,i,e;for(let c=0;c<t.length;c++){const a=t[c];c>0?(i=h(r,a[0]),e=x(r,a[1]),i===o&&e===l||(u.push(n(a,i-o,e-l)),o=i,l=e)):(o=h(r,a[0]),l=x(r,a[1]),u.push(n(a,o,l)))}return u.length>0?u:null}function M(r,n,t,u){return g(r,t?u?m:s:u?s:f,n)}function b(r,n,t,u){const o=[],l=t?u?m:s:u?s:f;for(let i=0;i<n.length;i++){const e=g(r,l,n[i]);e&&e.length>=3&&o.push(e)}return o.length?o:null}function j(r,n,t,u){const o=[],l=t?u?m:s:u?s:f;for(let i=0;i<n.length;i++){const e=g(r,l,n[i]);e&&e.length>=2&&o.push(e)}return o.length?o:null}function p({scale:r,translate:n},t){return t*r[0]+n[0]}function y({scale:r,translate:n},t){return n[1]-t*r[1]}function z(r,n,t){const u=new Array(t.length);if(!t.length)return u;const[o,l]=r.scale;let i=p(r,t[0][0]),e=y(r,t[0][1]);u[0]=n(t[0],i,e);for(let c=1;c<t.length;c++){const a=t[c];i+=a[0]*o,e-=a[1]*l,u[c]=n(a,i,e)}return u}function w(r,n,t){const u=new Array(t.length);for(let o=0;o<t.length;o++)u[o]=z(r,n,t[o]);return u}function q(r,n,t,u){return z(r,t?u?m:s:u?s:f,n)}function v(r,n,t,u){return w(r,t?u?m:s:u?s:f,n)}function E(r,n,t,u){return w(r,t?u?m:s:u?s:f,n)}function G(r,n,t,u,o){return n.xmin=h(r,t.xmin),n.ymin=x(r,t.ymin),n.xmax=h(r,t.xmax),n.ymax=x(r,t.ymax),n!==t&&(u&&(n.zmin=t.zmin,n.zmax=t.zmax),o&&(n.mmin=t.mmin,n.mmax=t.mmax)),n}function I(r,n,t,u,o){return n.points=M(r,t.points,u,o)??[],n}function N(r,n,t,u,o){return n.x=h(r,t.x),n.y=x(r,t.y),n!==t&&(u&&(n.z=t.z),o&&(n.m=t.m)),n}function O(r,n,t,u,o){const l=b(r,t.rings,u,o);return l?(n.rings=l,n):null}function S(r,n,t,u,o){const l=j(r,t.paths,u,o);return l?(n.paths=l,n):null}function B(r,n){return r&&n?P(n)?N(r,{},n,!1,!1):d(n)?S(r,{},n,!1,!1):L(n)?O(r,{},n,!1,!1):k(n)?I(r,{},n,!1,!1):A(n)?G(r,{},n,!1,!1):null:null}function C(r,n,t,u,o){return t!=null&&(n.points=q(r,t.points,u,o)),n}function D(r,n,t,u,o){return t==null||(n.x=p(r,t.x),n.y=y(r,t.y),n!==t&&(u&&(n.z=t.z),o&&(n.m=t.m))),n}function F(r,n,t,u,o){return t!=null&&(n.rings=E(r,t.rings,u,o)),n}function H(r,n,t,u,o){return t!=null&&(n.paths=v(r,t.paths,u,o)),n}export{N as L,C as U,B as d,D as k,U as m,F as q,H as v};
