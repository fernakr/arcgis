import{E as L,s as g,a9 as F,cu as z,ct as _,cx as B,f as I,cJ as C,cs as Q}from"./index-994ee346.js";import{c as U,s as V,r as H}from"./featureConversionUtils-a2ee31db.js";import{e as X}from"./OptimizedFeatureSet-1d1ac4b9.js";import{E as Y,I as ee,N as ne}from"./geojson-cf3245dc.js";import{o as te}from"./clientSideDefaults-607f330c.js";const $=L.getLogger("esri.layers.graphics.sources.ogcfeature"),G="http://www.opengis.net/def/crs/",pe=`${G}OGC/1.3/CRS84`;async function ge(n,t,e={},i=5){const{links:s}=n,l=f(s,"items","application/geo+json")||f(s,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(l==null)throw new g("ogc-feature-layer:missing-items-page","Missing items url");const{data:u}=await F(l.href,{signal:e.signal,query:{limit:i,...e.customParameters,token:e.apiKey},headers:{accept:"application/geo+json"}});Y(u);const o=ee(u,{geometryType:t.geometryType}),d=t.fields||o.fields||[],T=t.hasZ!=null?t.hasZ:o.hasZ,b=o.geometryType,m=t.objectIdField||o.objectIdFieldName||"OBJECTID";let r=t.timeInfo;const j=d.find(({name:a})=>a===m);if(j)j.editable=!1,j.nullable=!1;else{if(!o.objectIdFieldType)throw new g("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");d.unshift({name:m,alias:m,type:o.objectIdFieldType==="number"?"esriFieldTypeOID":"esriFieldTypeString",editable:!1,nullable:!1})}if(m!==o.objectIdFieldName){const a=d.find(({name:c})=>c===o.objectIdFieldName);a&&(a.type="esriFieldTypeInteger")}d===o.fields&&o.unknownFields.length>0&&$.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:o.unknownFields}});for(const a of d){if(a.name==null&&(a.name=a.alias),a.alias==null&&(a.alias=a.name),a.type!=="esriFieldTypeOID"&&a.type!=="esriFieldTypeGlobalID"&&(a.editable=a.editable==null||!!a.editable,a.nullable=a.nullable==null||!!a.nullable),!a.name)throw new g("ogc-feature-layer:invalid-field-name","field name is missing",{field:a});if(!z.jsonValues.includes(a.type))throw new g("ogc-feature-layer:invalid-field-type",`invalid type for field "${a.name}"`,{field:a})}if(r){const a=new _(d);if(r.startTimeField){const c=a.get(r.startTimeField);c?(r.startTimeField=c.name,c.type="esriFieldTypeDate"):r.startTimeField=null}if(r.endTimeField){const c=a.get(r.endTimeField);c?(r.endTimeField=c.name,c.type="esriFieldTypeDate"):r.endTimeField=null}if(r.trackIdField){const c=a.get(r.trackIdField);c?r.trackIdField=c.name:(r.trackIdField=null,$.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:r}}))}r.timeReference||(r.timeReference={timeZoneIANA:B}),r.startTimeField||r.endTimeField||($.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:r}}),r=null)}return{drawingInfo:b?te(b):null,extent:le(n),geometryType:b,fields:d,hasZ:!!T,objectIdField:m,timeInfo:r}}async function ye(n,t={}){const{links:e}=n,i=f(e,"data","application/json")||f(e,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json");if(i==null)throw new g("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:s,customParameters:l,signal:u}=t,{data:o}=await F(i.href,{signal:u,headers:{accept:"application/json"},query:{...l,token:s}});return o}async function we(n,t={}){const{links:e}=n,i=f(e,"conformance","application/json")||f(e,"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json");if(i==null)throw new g("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:s,customParameters:l,signal:u}=t,{data:o}=await F(i.href,{signal:u,headers:{accept:"application/json"},query:{...l,token:s}});return o}async function be(n,t={}){const{apiKey:e,customParameters:i,signal:s}=t,{data:l}=await F(n,{signal:s,headers:{accept:"application/json"},query:{...i,token:e}});return l}async function he(n,t={}){const e="application/vnd.oai.openapi+json;version=3.0",i=f(n.links,"service-desc",e);if(i==null)return $.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:s,customParameters:l,signal:u}=t,{data:o}=await F(i.href,{signal:u,headers:{accept:e},query:{...l,token:s}});return o}function Ie(n){const t=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(n),e=t==null?void 0:t.groups;if(!e)return null;const{authority:i,code:s}=e;switch(i.toLowerCase()){case"ogc":switch(s.toLowerCase()){case"crs27":return I.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return I.WGS84.wkid;default:return null}case"esri":case"epsg":{const l=Number.parseInt(s,10);return Number.isNaN(l)?null:l}default:return null}}async function Fe(n,t,e){const i=await ie(n,t,e);return U(i)}async function ie(n,t,e){const{collection:i,layerDefinition:s,maxRecordCount:l,queryParameters:{apiKey:u,customParameters:o},spatialReference:d,supportedCrs:T}=n,{links:b}=i,m=f(b,"items","application/geo+json")||f(b,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(m==null)throw new g("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:r,num:j,start:a,timeExtent:c,where:W}=t;if(t.objectIds)throw new g("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");const P=I.fromJSON(d),h=t.outSpatialReference??P,k=h.isWGS84?null:M(h,T),Z=oe(r,T),D=re(c),K=se(W),A=j??(a!=null&&a!==void 0?10:l),{data:y}=await F(m.href,{...e,query:{...o,...Z,crs:k,datetime:D,query:K,limit:A,startindex:a,token:u},headers:{accept:"application/geo+json"}});let x=!1;y.links&&(x=!!y.links.find(S=>S.rel==="next")),!x&&Number.isInteger(y.numberMatched)&&Number.isInteger(y.numberReturned)&&(x=y.numberReturned<y.numberMatched);const{fields:J,geometryType:N,hasZ:v,objectIdField:q}=s,O=ne(y,{geometryType:N,hasZ:v,objectIdField:q});if(!k&&h.isWebMercator){for(const w of O)if(w.geometry!=null&&N!=null){const S=V(w.geometry,N,v,!1);S.spatialReference=I.WGS84,w.geometry=H(C(S,h))}}for(const w of O)w.objectId=w.attributes[q];const E=k||!k&&h.isWebMercator?h.toJSON():Q,p=new X;return p.exceededTransferLimit=x,p.features=O,p.fields=J,p.geometryType=N,p.hasZ=v,p.objectIdFieldName=q,p.spatialReference=E,p}function ae(n){return n!=null&&n.type==="extent"}function M(n,t){const{isWebMercator:e,wkid:i}=n;if(!i)return null;const s=e?t[3857]??t[102100]??t[102113]??t[900913]:t[n.wkid];return s?`${G}${s}`:null}function R(n){if(n==null)return"";const{xmin:t,ymin:e,xmax:i,ymax:s}=n;return`${t},${e},${i},${s}`}function re(n){if(n==null)return null;const{start:t,end:e}=n;return`${t!=null?t.toISOString():".."}/${e!=null?e.toISOString():".."}`}function se(n){return n!=null&&n&&n!=="1=1"?n:null}function oe(n,t){if(!ae(n))return null;const{spatialReference:e}=n;if(!e||e.isWGS84)return{bbox:R(n)};const i=M(e,t);return i!=null?{bbox:R(n),"bbox-crs":i}:e.isWebMercator?{bbox:R(C(n,I.WGS84))}:null}function le(n){var o;const t=(o=n.extent)==null?void 0:o.spatial;if(!t)return null;const e=t.bbox[0],i=e.length===4,s=e[0],l=e[1],u=i?void 0:e[2];return{xmin:s,ymin:l,xmax:i?e[2]:e[3],ymax:i?e[3]:e[4],zmin:u,zmax:i?void 0:e[5],spatialReference:I.WGS84.toJSON()}}function f(n,t,e){return n.find(i=>i.rel===t&&i.type===e)||n.find(i=>i.rel===t&&!i.type)}export{ye as F,we as I,Fe as S,be as T,G as b,pe as h,ge as j,he as k,ie as v,Ie as x};
