import{aZ as r,bg as c,bh as h,bi as x,bj as m}from"./index-02c681c0.js";const P={convertToGEGeometry:g,exportPoint:p,exportPolygon:u,exportPolyline:l,exportMultipoint:M,exportExtent:f};function g(t,e){if(e==null)return null;let a="cache"in e?e.cache._geVersion:void 0;return a==null&&(a=t.convertJSONToGeometry(e),"cache"in e&&(e.cache._geVersion=a)),a}function p(t,e,a){const o=t.hasZ(e),n=t.hasM(e),s=new r({x:t.getPointX(e),y:t.getPointY(e),spatialReference:a});return o&&(s.z=t.getPointZ(e)),n&&(s.m=t.getPointM(e)),s.cache._geVersion=e,s}function u(t,e,a){const o=new c({rings:t.exportPaths(e),hasZ:t.hasZ(e),hasM:t.hasM(e),spatialReference:a});return o.cache._geVersion=e,o}function l(t,e,a){const o=new h({paths:t.exportPaths(e),hasZ:t.hasZ(e),hasM:t.hasM(e),spatialReference:a});return o.cache._geVersion=e,o}function M(t,e,a){const o=new x({hasZ:t.hasZ(e),hasM:t.hasM(e),points:t.exportPoints(e),spatialReference:a});return o.cache._geVersion=e,o}function f(t,e,a){const o=t.hasZ(e),n=t.hasM(e),s=new m({xmin:t.getXMin(e),ymin:t.getYMin(e),xmax:t.getXMax(e),ymax:t.getYMax(e),spatialReference:a});if(o){const i=t.getZExtent(e);s.zmin=i.vmin,s.zmax=i.vmax}if(n){const i=t.getMExtent(e);s.mmin=i.vmin,s.mmax=i.vmax}return s.cache._geVersion=e,s}export{P as hydratedAdapter};
