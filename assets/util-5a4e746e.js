import{a1 as i}from"./index-308e373b.js";const l=new i({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function u(e){return l.toJSON(e)}function m(e){const{bandCount:o,attributeTable:r,colormap:n,pixelType:t}=e.raster.rasterInfo;return o===1&&(r!=null||n!=null||t==="u8"||t==="s8")}export{u as e,m as r};
