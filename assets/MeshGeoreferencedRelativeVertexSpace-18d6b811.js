import{aX as a,aY as n,aZ as p,a_ as c,F as o,a$ as l,G as g,H as y,b0 as d}from"./index-02c681c0.js";let r=class extends a(d){constructor(e){super(e),this.type="georeferenced-relative",this.isRelative=!0,this.isGeoreferenced=!0,this.origin=n()}getOriginPoint(e){const[t,i,s]=this.origin;return new p({x:t,y:i,z:s,spatialReference:e})}setOriginFromPoint({x:e,y:t,z:i}){this.origin=c(e,t,i??0)}};o([l({georeferencedRelative:"georeferenced-relative"},{readOnly:!0})],r.prototype,"type",void 0),o([g({type:[Number],nonNullable:!0,json:{write:!0}})],r.prototype,"origin",void 0),r=o([y("esri.geometry.support.MeshGeoreferencedRelativeVertexSpace")],r);const h=r;export{h as m};