import{fu as i,ft as s,a$ as l,a9 as y,b0 as c,b1 as u,b2 as f,F as a,b3 as p,G as g,H as h}from"./index-98a329ed.js";function $(r,e=!1){return r<=i?e?new Array(r).fill(0):new Array(r):new Float64Array(r)}function b(r){return(s(r)?r.length:r.byteLength/8)<=i?Array.from(r):new Float64Array(r)}function m(r,e,t){return Array.isArray(r)?r.slice(e,e+t):r.subarray(e,e+t)}function w(r,e){for(let t=0;t<e.length;++t)r[t]=e[t];return r}function x(r){return Array.isArray(r)?new Float64Array(r):r}let o=class extends l(y){constructor(r){super(r),this.type="local",this.isRelative=!0,this.isGeoreferenced=!1,this.origin=c()}getOriginPoint(r){const[e,t,n]=this.origin;return new u({x:e,y:t,z:n,spatialReference:r})}setOriginFromPoint({x:r,y:e,z:t}){this.origin=f(r,e,t??0)}};a([p({local:"local"},{readOnly:!0})],o.prototype,"type",void 0),a([g({type:[Number],nonNullable:!0,json:{write:!0}})],o.prototype,"origin",void 0),o=a([h("esri.geometry.support.MeshLocalVertexSpace")],o);const d=o;export{m as a,b as e,d as m,w as o,$ as t,x as y};
