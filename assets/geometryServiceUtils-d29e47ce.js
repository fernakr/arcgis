import{aH as s,s as l,j as c,p as g,n as u}from"./index-12a23f8f.js";async function f(e=null,o){var a,r;if(s.geometryServiceUrl)return s.geometryServiceUrl;if(!e)throw new l("internal:geometry-service-url-not-configured");let t;t="portal"in e?e.portal||c.getDefault():e,await t.load({signal:o});const n=(r=(a=t.helperServices)==null?void 0:a.geometry)==null?void 0:r.url;if(!n)throw new l("internal:geometry-service-url-not-configured");return n}async function y(e,o,t=null,n){const a=await f(t,n),r=new g;r.geometries=[e],r.outSpatialReference=o;const i=await u(a,r,{signal:n});if(i&&Array.isArray(i)&&i.length===1)return i[0];throw new l("internal:geometry-service-projection-failed")}export{f as getGeometryServiceURL,y as projectGeometry};
