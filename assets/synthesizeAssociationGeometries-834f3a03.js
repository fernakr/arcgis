import{F as n,G as r,H as u,a9 as y,aZ as d,bD as h,bC as l,ad as x}from"./index-7e9b571f.js";import{p as G}from"./Association-50200809.js";let a=class extends y{constructor(s){super(s),this.maxGeometryCountExceeded=!1,this.associations=[]}};n([r({type:Boolean,json:{write:!0}})],a.prototype,"maxGeometryCountExceeded",void 0),n([r({type:[G],json:{write:!0}})],a.prototype,"associations",void 0),a=n([u("esri.rest.networks.support.AssociationGeometriesResult")],a);const $=a;async function C(s,o,e){const t=d(s),i={...o.toJSON(),f:"json"},c=h({...t.query,...i});e?e.method="post":e={method:"post"};const p=l(c,e),m=`${t.path}/synthesizeAssociationGeometries`;return x(m,p).then(f=>j(f,o.outSpatialReference))}function j(s,o){const{data:e}=s,t=$.fromJSON(e);if(o)for(const i of t.associations)i.geometry.spatialReference=o.clone();return t}export{C as synthesizeAssociationGeometries};
