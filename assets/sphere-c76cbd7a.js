import{iL as T,iM as F,iN as G,iO as H,cL as x,b0 as g,cM as C,cN as m,cn as Q,cQ as b,cP as p,fJ as f,iJ as v,iP as U,cm as J,cc as z,h$ as N,E as W,cb as tt,ie as j,co as O,iQ as et,iR as it,cO as st,iS as $,cq as nt,iT as V,fb as q,hJ as rt,hI as ot,fK as ct}from"./index-b42b51f4.js";import{E as ut}from"./ByteSizeUnit-d4757d40.js";import{n as at}from"./mat3f64-221ce671.js";import{n as ft}from"./mat4f64-1413b4a7.js";import{n as ht}from"./quatf64-3363c48e.js";class mt{constructor(e){this._allocator=e,this._items=[],this._itemsPtr=0,this._grow()}get(){return this._itemsPtr===0&&T(()=>this._reset()),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*R);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}_grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,R));e++)this._items.push(this._allocator())}}const R=1024;let l=class a{constructor(e,i,s){this._itemByteSize=e,this._itemCreate=i,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(s/this._itemByteSize)}get(){this._itemsPtr===0&&T(()=>this._reset());const e=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=e;){const i=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize);for(let s=0;s<this._itemsPerBuffer;++s)this._items.push(this._itemCreate(i,s*this._itemByteSize));this._buffers.push(i)}return this._items[this._itemsPtr++]}_reset(){const e=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>e;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(e=_){return new a(16,F,e)}static createVec3f64(e=_){return new a(24,G,e)}static createVec4f64(e=_){return new a(32,H,e)}static createMat3f64(e=_){return new a(72,at,e)}static createMat4f64(e=_){return new a(128,ft,e)}static createQuatf64(e=_){return new a(32,ht,e)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}};const _=4*ut.KILOBYTES;l.createVec2f64();const h=l.createVec3f64();l.createVec4f64();l.createMat3f64();const _t=l.createMat4f64();l.createQuatf64();function I(t){return t?L(x(t.origin),x(t.direction)):L(g(),g())}function L(t,e){return{origin:t,direction:e}}function Yt(t,e){const i=pt.get();return i.origin=t,i.direction=e,i}function gt(t,e,i=I()){return C(i.origin,t),m(i.direction,e,t),i}function lt(t,e,i){const s=Q(t.direction,m(i,e,t.origin));return b(i,t.origin,p(i,t.direction,s)),i}const pt=new mt(()=>I());function Pt(t,e){const i=Q(t,e)/(f(t)*f(e));return-v(i)}const Mt=P();function P(){return U()}const $t=J,dt=J;function K(t,e=P()){return z(e,t)}function bt(t,e){return N(t[0],t[1],t[2],e)}function wt(t){return t}function yt(t){t[0]=t[1]=t[2]=t[3]=0}function St(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t}function w(t){return t[3]}function Bt(t){return t}function zt(t,e,i,s){return N(t,e,i,s)}function At(t,e,i){return t!==i&&C(i,t),i[3]=t[3]+e,i}function Et(t,e,i){return W.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),t===i?i:K(t,i)}function y(t,e,i){if(e==null||!Y(t,e,d))return!1;let{t0:s,t1:n}=d;if((s<0||n<s&&n>0)&&(s=n),s<0)return!1;if(i){const{origin:r,direction:o}=e;i[0]=r[0]+o[0]*s,i[1]=r[1]+o[1]*s,i[2]=r[2]+o[2]*s}return!0}function xt(t,e,i){const s=gt(e,i);if(!Y(t,s,d))return[];const{origin:n,direction:r}=s,{t0:o,t1:c}=d,u=M=>{const S=g();return ct(S,n,r,M),E(t,S,S)};return Math.abs(o-c)<tt()?[u(o)]:[u(o),u(c)]}const d={t0:0,t1:0};function Y(t,e,i){const{origin:s,direction:n}=e,r=Ot;r[0]=s[0]-t[0],r[1]=s[1]-t[1],r[2]=s[2]-t[2];const o=n[0]*n[0]+n[1]*n[1]+n[2]*n[2];if(o===0)return!1;const c=2*(n[0]*r[0]+n[1]*r[1]+n[2]*r[2]),u=c*c-4*o*(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-t[3]*t[3]);if(u<0)return!1;const M=Math.sqrt(u);return i.t0=(-c-M)/(2*o),i.t1=(-c+M)/(2*o),!0}const Ot=g();function Vt(t,e){return y(t,e,null)}function qt(t,e,i){if(y(t,e,i))return i;const s=Z(t,e,h.get());return b(i,e.origin,p(h.get(),e.direction,j(e.origin,s)/f(e.direction))),i}function Z(t,e,i){const s=h.get(),n=_t.get();O(s,e.origin,e.direction);const r=w(t);O(i,s,e.origin),p(i,i,1/f(i)*r);const o=X(t,e.origin),c=Pt(e.origin,i);return et(n,c+o,s),it(i,i,n),i}function Rt(t,e,i){return y(t,e,i)?i:(lt(e,t,i),E(t,i,i))}function E(t,e,i){const s=m(h.get(),e,t),n=p(h.get(),s,t[3]/f(s));return b(i,n,t)}function Lt(t,e){const i=m(h.get(),e,t),s=st(i),n=t[3]*t[3];return Math.sqrt(Math.abs(s-n))}function X(t,e){const i=m(h.get(),e,t),s=f(i),n=w(t),r=n+Math.abs(n-s);return v(n/r)}const B=g();function k(t,e,i,s){const n=m(B,e,t);switch(i){case $.X:{const r=V(n,B)[2];return q(s,-Math.sin(r),Math.cos(r),0)}case $.Y:{const r=V(n,B),o=r[1],c=r[2],u=Math.sin(o);return q(s,-u*Math.cos(c),-u*Math.sin(c),Math.cos(o))}case $.Z:return nt(s,n);default:return}}function D(t,e){const i=m(A,e,t);return f(i)-t[3]}function Tt(t,e,i,s){const n=D(t,e),r=k(t,e,$.Z,A),o=p(A,r,i-n);return b(s,e,o)}function Ct(t,e){const i=rt(t,e),s=w(t);return i<=s*s}function Qt(t,e,i=P()){const s=j(t,e),n=t[3],r=e[3];return s+r<n?(z(i,t),i):s+n<r?(z(i,e),i):(ot(i,t,e,(s+r-n)/(2*s)),i[3]=(s+n+r)/2,i)}const A=g(),vt=P();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:Mt,altitudeAt:D,angleToSilhouette:X,axisAt:k,clear:yt,closestPoint:Rt,closestPointOnSilhouette:Z,containsPoint:Ct,copy:K,create:P,distanceToSilhouette:Lt,elevate:At,equals:dt,exactEquals:$t,fromCenterAndRadius:bt,fromRadius:St,fromValues:zt,getCenter:Bt,getRadius:w,intersectLine:xt,intersectRay:y,intersectRayClosestSilhouette:qt,intersectsRay:Vt,projectPoint:E,setAltitudeAt:Tt,setExtent:Et,tmpSphere:vt,union:Qt,wrap:wt},Symbol.toStringTag,{value:"Module"}));export{w as B,P as E,Vt as J,K as T,Bt as U,h as c,I as d,Ct as i,Yt as p,mt as s};
