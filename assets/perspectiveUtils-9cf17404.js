import{F as a,G as l,H as w,bz as E,fa as d,e5 as F,bb as G,fb as $,fc as y,fd as b,fe as p,a6 as g,ff as h,a5 as c,b0 as H}from"./index-33d448c3.js";import{p as J}from"./normalizeUtilsSync-34032b4e.js";import{e as u}from"./mat3f64-221ce671.js";let n=class extends E{constructor(o){super(o)}get bounds(){const o=this.coords;return(o==null?void 0:o.extent)==null?null:d(o.extent)}get coords(){var t;const o=(t=this.element.georeference)==null?void 0:t.coords;return F(o,this.spatialReference).geometry}get normalizedCoords(){return G.fromJSON(J(this.coords))}get normalizedBounds(){const o=this.normalizedCoords!=null?this.normalizedCoords.extent:null;return o!=null?d(o):null}};a([l()],n.prototype,"spatialReference",void 0),a([l()],n.prototype,"element",void 0),a([l()],n.prototype,"bounds",null),a([l()],n.prototype,"coords",null),a([l()],n.prototype,"normalizedCoords",null),a([l()],n.prototype,"normalizedBounds",null),n=a([w("esri.layers.support.MediaElementView")],n);const r=H(),s=u(),i=u(),f=u();function V(e,o,t){return $(r,o[0],o[1],1),y(r,r,b(s,t)),r[2]===0?p(e,r[0],r[1]):p(e,r[0]/r[2],r[1]/r[2])}function q(e,o,t){return m(i,o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7]),m(f,t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]),g(e,h(i,i),f),e[8]!==0&&(e[0]/=e[8],e[1]/=e[8],e[2]/=e[8],e[3]/=e[8],e[4]/=e[8],e[5]/=e[8],e[6]/=e[8],e[7]/=e[8],e[8]/=e[8]),e}function m(e,o,t,z,x,C,j,v,B){c(e,o,z,C,t,x,j,1,1,1),$(r,v,B,1),h(s,e);const[R,S,k]=y(r,r,b(s,s));return c(s,R,0,0,0,S,0,0,0,k),g(e,s,e)}export{V as h,n as i,q as j};
