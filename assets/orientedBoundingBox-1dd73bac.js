import{cQ as g,fG as T,fy as h,fH as y,fI as v,fJ as w,fK as I,cV as M,cR as x,fc as R,cU as b,fL as s,fM as A,fN as B,b0 as o}from"./index-e88387f3.js";import"./mat3f64-221ce671.js";import{B as E,O as G}from"./quat-b2c157d4.js";import{r as K,e as J}from"./quatf64-3363c48e.js";import"./plane-f843e57c.js";var H;(function(n){n[n.Multiply=1]="Multiply",n[n.Ignore=2]="Ignore",n[n.Replace=3]="Replace",n[n.Tint=4]="Tint"})(H||(H={}));function V(n=[0,0,0],t=[-1,-1,-1],e=J()){return{center:g(n),halfSize:g(t),quaternion:K(e)}}(()=>{const n=new Int8Array(162);let t=0;const e=l=>{for(let r=0;r<l.length;r++)n[t+r]=l[r];t+=6};return e([6,2,3,1,5,4]),e([0,2,3,1,5,4]),e([0,2,3,7,5,4]),e([0,1,3,2,6,4]),e([0,1,3,2,0,0]),e([0,1,5,7,3,2]),e([0,1,3,7,6,4]),e([0,1,3,7,6,2]),e([0,1,5,7,6,2]),e([0,1,5,4,6,2]),e([0,1,5,4,0,0]),e([0,1,3,7,5,4]),e([0,2,6,4,0,0]),e([0,0,0,0,0,0]),e([1,3,7,5,0,0]),e([2,3,7,6,4,0]),e([2,3,7,6,0,0]),e([2,3,1,5,7,6]),e([0,1,5,7,6,2]),e([0,1,5,7,6,4]),e([0,1,3,7,6,4]),e([4,5,7,6,2,0]),e([4,5,7,6,0,0]),e([4,5,1,3,7,6]),e([0,2,3,7,5,4]),e([6,2,3,7,5,4]),e([6,2,3,1,5,4]),n})();function d(n,t,e,l,r){if(E(r.quaternion,n.quaternion),l===T.Global){G(u,n.quaternion),h(i,n.center,u),y(c,i),v(f,c,n.halfSize),w(f,c,f);const a=I(f);M(f,c,n.halfSize);const z=I(f);if(a<e)x(r.center,n.center),R(i,e,e,e),M(r.halfSize,n.halfSize,i);else{const S=z>0?1+t/z:1,p=a>0?1+e/a:1,m=(p+S)/2,q=(p-S)/2;b(r.halfSize,c,q),s(r.halfSize,r.halfSize,n.halfSize,m),b(r.center,c,m),s(r.center,r.center,n.halfSize,q),A(i,i),B(r.center,r.center,i),h(r.center,r.center,r.quaternion)}}else{const a=R(i,0,0,1);s(r.center,n.center,a,(e+t)/2),G(u,n.quaternion),h(a,a,u),y(a,a),s(r.halfSize,n.halfSize,a,(e-t)/2)}return r}const i=o(),c=o(),f=o(),u=J();export{V as H,d as e,H as n};
