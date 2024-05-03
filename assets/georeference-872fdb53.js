import{j8 as Nt,j9 as et,ja as Lt,jb as Bt,jc as f,d as Gt,g_ as It,jd as w,je as Vt,id as yt,aY as v,aX as Wt,b0 as $t,F as m,a$ as qt,H as mt,jf as zt,jg as Ht,jh as Ut,cR as Yt,ia as Dt,G as T,ji as kt,a_ as ht,cQ as b,jj as Kt,jk as At,iR as rt,jl as Qt,E as Pt,fx as q,jm as nt,fh as ot,fg as at,jn as Xt,cv as Jt,jo as Zt,ce as te,cf as ee,i8 as H,jp as Ft,jq as it,jr as re,cW as ne,bq as oe,js as ae,jt as ie,g$ as se,ju as le}from"./index-02c681c0.js";import{e as Rt}from"./mat3f64-221ce671.js";import{e as E,o as I}from"./mat4f64-1413b4a7.js";import{c as O}from"./spatialReferenceEllipsoidUtils-be4cfd18.js";import{m as ce,t as st,o as ue}from"./MeshLocalVertexSpace-346384b1.js";import{m as fe}from"./MeshGeoreferencedRelativeVertexSpace-18d6b811.js";import{v as k,y as pe,x as ge}from"./quat-05d11d14.js";import{e as J}from"./quatf64-3363c48e.js";import{n as M,s as Tt,r as j}from"./vec32-2a2226a8.js";import{i as F,T as R}from"./BufferView-95286fa8.js";function dt(t,e,r){const n=Math.sin(t),o=Math.cos(t),a=Math.sin(e),s=Math.cos(e),i=r;return i[0]=-n,i[4]=-a*o,i[8]=s*o,i[12]=0,i[1]=o,i[5]=-a*n,i[9]=s*n,i[13]=0,i[2]=0,i[6]=s,i[10]=a,i[14]=0,i[3]=0,i[7]=0,i[11]=0,i[15]=1,i}function ye(t,e,r){return dt(t,e,r),Nt(r,r),r}function z(t,e,r,n){if(t==null||n==null)return!1;const o=et(t,Lt),a=et(n,Bt);if(o===a&&!lt(a)&&(o!==f.UNKNOWN||Gt(t,n)))return It(r,e),!0;if(lt(a)){const s=w[o][f.LON_LAT],i=w[f.LON_LAT][a];return s!=null&&i!=null&&(s(e,0,A,0),i(A,0,P,0),dt(S*A[0],S*A[1],r),r[12]=P[0],r[13]=P[1],r[14]=P[2],!0)}if((a===f.WEB_MERCATOR||a===f.PLATE_CARREE)&&(o===f.WGS84||o===f.CGCS2000&&a===f.PLATE_CARREE||o===f.SPHERICAL_ECEF||o===f.WEB_MERCATOR)){const s=w[o][f.LON_LAT],i=w[f.LON_LAT][a];return s!=null&&i!=null&&(s(e,0,A,0),i(A,0,P,0),o===f.SPHERICAL_ECEF?ye(S*A[0],S*A[1],r):Vt(r),r[12]=P[0],r[13]=P[1],r[14]=P[2],!0)}return!1}function lt(t){return t===f.SPHERICAL_ECEF||t===f.SPHERICAL_MARS_PCPF||t===f.SPHERICAL_MOON_PCPF}const S=yt(1),A=v(),P=v();let V=class extends Wt($t){constructor(){super({}),this.type="georeferenced",this.isRelative=!1,this.isGeoreferenced=!0}};m([qt({georeferenced:"georeferenced"},{readOnly:!0})],V.prototype,"type",void 0),V=m([mt("esri.geometry.support.MeshGeoreferencedVertexSpace")],V);const $e=V;function _(t=_t){return[t[0],t[1],t[2],t[3]]}function W(t,e,r=_()){return Yt(r,t),r[3]=e,r}function ct(t,e,r=_()){return k(N,t,K(t)),k(ut,e,K(e)),pe(N,ut,N),he(r,Dt(ge(r,N)))}function Xe(t,e,r,n=_()){return W(zt,t,L),W(Ht,e,ft),W(Ut,r,pt),ct(L,ft,L),ct(L,pt,n),n}function Je(t){return t}function me(t){return t[3]}function K(t){return yt(t[3])}function he(t,e){return t[3]=e,t}const _t=[0,0,1,0],N=J(),ut=J();_();const L=_(),ft=_(),pt=_();var Q;let $=Q=class extends $t{constructor(t){super(t),this.translation=v(),this.rotationAxis=kt(_t),this.rotationAngle=0,this.scale=ht(1,1,1)}get rotation(){return W(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=b(t),this.rotationAngle=me(t)}get localMatrix(){const t=E();return k(gt,this.rotation,K(this.rotation)),Kt(t,gt,this.translation,this.scale),t}get localMatrixInverse(){return At(E(),this.localMatrix)}applyLocal(t,e){return rt(e,t,this.localMatrix)}applyLocalInverse(t,e){return rt(e,t,this.localMatrixInverse)}equals(t){return this===t||t!=null&&Qt(this.localMatrix,t.localMatrix)}clone(){const t={translation:b(this.translation),rotationAxis:b(this.rotationAxis),rotationAngle:this.rotationAngle,scale:b(this.scale)};return new Q(t)}};m([T({type:[Number],nonNullable:!0,json:{write:!0}})],$.prototype,"translation",void 0),m([T({type:[Number],nonNullable:!0,json:{write:!0}})],$.prototype,"rotationAxis",void 0),m([T({type:Number,nonNullable:!0,json:{write:!0}})],$.prototype,"rotationAngle",void 0),m([T({type:[Number],nonNullable:!0,json:{write:!0}})],$.prototype,"scale",void 0),m([T()],$.prototype,"rotation",null),m([T()],$.prototype,"localMatrix",null),m([T()],$.prototype,"localMatrixInverse",null),$=Q=m([mt("esri.geometry.support.MeshTransform")],$);const gt=J(),Ae=$;function Mt(t,e){return t.isGeographic||t.isWebMercator&&((e==null?void 0:e.geographic)??!0)}function Ze(t,e,r){const n=!t.isGeoreferenced;(r==null?void 0:r.geographic)!=null&&r.geographic!==n&&Pt.getLogger(e).warnOnce(`Specifying the 'geographic' parameter (${r.geographic}) for a Mesh vertex space of type "${t.type}" is not supported. This parameter will be ignored.`)}const U=Pt.getLogger("esri.geometry.support.meshUtils.normalProjection");function Pe(t,e,r,n,o){return D(n)?(Y(h.TO_PCPF,F.fromTypedArray(t),R.fromTypedArray(e),R.fromTypedArray(r),n,F.fromTypedArray(o)),o):(U.error("Cannot convert spatial reference to PCPF"),o)}function Fe(t,e,r,n,o){return D(n)?(Y(h.FROM_PCPF,F.fromTypedArray(t),R.fromTypedArray(e),R.fromTypedArray(r),n,F.fromTypedArray(o)),o):(U.error("Cannot convert to spatial reference from PCPF"),o)}function Re(t,e,r){return q(t,e,0,r,O(e),0,t.length/3),r}function Te(t,e,r){return q(t,O(r),0,e,r,0,t.length/3),e}function de(t,e,r){return H(u,r),M(e,t,u),Ft(u)||Tt(e,e),e}function _e(t,e,r){if(H(u,r),M(e,t,u,4),Ft(u)||Tt(e,e,4),t!==e)for(let n=3;n<t.length;n+=4)e[n]=t[n];return e}function Me(t,e,r,n,o){if(!D(n))return U.error("Cannot convert spatial reference to PCPF"),o;Y(h.TO_PCPF,F.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),R.fromTypedArray(e),R.fromTypedArray(r),n,F.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT));for(let a=3;a<t.length;a+=4)o[a]=t[a];return o}function Ce(t,e,r,n,o){if(!D(n))return U.error("Cannot convert to spatial reference from PCPF"),o;Y(h.FROM_PCPF,F.fromTypedArray(t,16),R.fromTypedArray(e),R.fromTypedArray(r),n,F.fromTypedArray(o,16));for(let a=3;a<t.length;a+=4)o[a]=t[a];return o}function Y(t,e,r,n,o,a){if(!e)return;const s=r.count,i=O(o);if(Ct(o))for(let c=0;c<s;c++)n.getVec(c,B),e.getVec(c,y),z(i,B,G,i),nt(u,G),t===h.FROM_PCPF&&ot(u,u),at(y,y,u),a.setVec(c,y);else for(let c=0;c<s;c++){n.getVec(c,B),e.getVec(c,y),z(i,B,G,i),nt(u,G);const l=Xt(r.get(c,1));let p=Math.cos(l);t===h.TO_PCPF&&(p=1/p),u[0]*=p,u[1]*=p,u[2]*=p,u[3]*=p,u[4]*=p,u[5]*=p,t===h.FROM_PCPF&&ot(u,u),at(y,y,u),Jt(y,y),a.setVec(c,y)}return a}function D(t){return Ct(t)||xe(t)}function Ct(t){return t.isWGS84||Zt(t)||te(t)||ee(t)}function xe(t){return t.isWebMercator}var h;(function(t){t[t.TO_PCPF=0]="TO_PCPF",t[t.FROM_PCPF=1]="FROM_PCPF"})(h||(h={}));const B=v(),y=v(),G=E(),u=Rt();function Z(t,e,r){return Mt(e.spatialReference,r)?we(t,e,r):Oe(t,e,r)}function xt(t,e=I){const{position:r,normal:n,tangent:o}=t;return{position:j(new Float64Array(r.length),r,e),normal:n!=null?de(n,new Float32Array(n.length),e):null,tangent:o!=null?_e(o,new Float32Array(o.length),e):null}}function Et(t,e,r,n){const{position:o,normal:a,tangent:s}=t;return e.isRelative?Z(xt(t,r==null?void 0:r.localMatrix),e.getOriginPoint(n),{geographic:!e.isGeoreferenced}):{position:o,normal:a,tangent:s}}function Ee(t,e,r){if(r!=null&&r.useTransform){const{position:n,normal:o,tangent:a}=t,{x:s,y:i,z:c}=e,l=ht(s,i,c??0);return{vertexAttributes:{position:n,normal:o,tangent:a},vertexSpace:r.geographic??1?new ce({origin:l}):new fe({origin:l}),transform:new Ae}}return{vertexAttributes:Z(t,e,r),vertexSpace:new $e,transform:null}}function X(t,e,r){return Mt(e.spatialReference,r)?Le(t,e,r):jt(t,e,r)}function je(t,e,r,n,o){if(!e.isRelative)return X(t,n,o);const{spatialReference:a}=n,s=Et(t,e,r,a);return n.equals(e.getOriginPoint(a))?jt(s,n,o):X(s,n,o)}function ve({positions:t,transform:e,vertexSpace:r,inSpatialReference:n,outSpatialReference:o,outPositions:a,localMode:s}){const i=r.isRelative?r.origin:it,c=r.isRelative?(e==null?void 0:e.localMatrix)??I:I;if(r.isGeoreferenced){const g=a??st(t.length);if(re(c,I)?ue(g,t):j(g,t,c),!ne(i,it)){const[wt,bt,St]=i;for(let x=0;x<g.length;x+=3)g[x]+=wt,g[x+1]+=bt,g[x+2]+=St}return q(g,n,0,g,o,0,g.length/3),g}let l=n;const p=O(n);l=o.isWebMercator&&s||!oe(n,p)?l:p,z(n,i,d,l),ae(d,d,c);const C=a??st(t.length);return j(C,t,d),q(C,l,0,C,o,0,C.length/3),C}function Oe(t,e,r){const n=new Float64Array(t.position.length),o=t.position,a=e.x,s=e.y,i=e.z??0,c=tt(r?r.unit:null,e.spatialReference);for(let l=0;l<o.length;l+=3)n[l]=o[l]*c+a,n[l+1]=o[l+1]*c+s,n[l+2]=o[l+2]*c+i;return{position:n,normal:t.normal,tangent:t.tangent}}function we(t,e,r){const n=e.spatialReference,o=vt(e,r,d),a=new Float64Array(t.position.length),s=be(t.position,o,n,a),i=H(Ot,o);return{position:s,normal:Se(s,a,t.normal,i,n),tangent:Ne(s,a,t.tangent,i,n)}}function be(t,e,r,n){j(n,t,e);const o=new Float64Array(t.length);return Te(n,o,r)}function Se(t,e,r,n,o){if(r==null)return null;const a=new Float32Array(r.length);return M(a,r,n),Fe(a,t,e,o,a),a}function Ne(t,e,r,n,o){if(r==null)return null;const a=new Float32Array(r.length);M(a,r,n,4);for(let s=3;s<a.length;s+=4)a[s]=r[s];return Ce(a,t,e,o,a),a}function jt(t,e,r){const n=new Float64Array(t.position.length),o=t.position,a=e.x,s=e.y,i=e.z??0,c=tt(r?r.unit:null,e.spatialReference);for(let l=0;l<o.length;l+=3)n[l]=(o[l]-a)/c,n[l+1]=(o[l+1]-s)/c,n[l+2]=(o[l+2]-i)/c;return{position:n,normal:t.normal,tangent:t.tangent}}function Le(t,e,r){const n=e.spatialReference;vt(e,r,d);const o=At(Ve,d),a=new Float64Array(t.position.length),s=Be(t.position,n,o,a),i=H(Ot,o);return{position:s,normal:Ge(t.normal,t.position,a,n,i),tangent:Ie(t.tangent,t.position,a,n,i)}}function vt(t,e,r){z(t.spatialReference,[t.x,t.y,t.z??0],r,O(t.spatialReference));const n=tt(e?e.unit:null,t.spatialReference);return ie(r,r,[n,n,n]),r}function Be(t,e,r,n){const o=Re(t,e,n),a=new Float64Array(o.length);return j(a,o,r),a}function Ge(t,e,r,n,o){if(t==null)return null;const a=Pe(t,e,r,n,new Float32Array(t.length));return M(a,a,o),a}function Ie(t,e,r,n,o){if(t==null)return null;const a=Me(t,e,r,n,new Float32Array(t.length));return M(a,a,o,4),a}function tt(t,e){if(t==null)return 1;const r=se(e);return 1/le(r,"meters",t)}const d=E(),Ve=E(),Ot=Rt(),tr=Object.freeze(Object.defineProperty({__proto__:null,applyTransform:xt,georeference:Z,georeferenceApplyTransform:Et,georeferenceByTransform:Ee,project:ve,ungeoreference:X,ungeoreferenceByTransform:je},Symbol.toStringTag,{value:"Module"}));export{Ee as B,X as D,je as E,ve as I,z as L,Ae as N,Te as O,Me as R,Z as U,xt as V,Fe as _,_ as a,ct as b,tr as c,Xe as g,Re as h,Pe as j,Je as l,Ze as o,$e as p,Et as q,Mt as r,Ce as v,K as w};
