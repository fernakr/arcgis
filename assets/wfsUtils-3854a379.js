import{ad as h,cS as U,s as l,cT as I,cU as R,cV as $,cW as C,f as k,be as L,d as M,au as O,bj as V,cX as d,cY as W,cZ as X,cs as Y,cw as F}from"./index-7e9b571f.js";import{u as z}from"./geojson-068934fa.js";import{o as S,n as T}from"./xmlUtils-444cb4c0.js";const x="xlink:href",f="2.0.0",E="__esri_wfs_id__",q="wfs-layer:getWFSLayerTypeInfo-error",_="wfs-layer:empty-service",A="wfs-layer:feature-type-not-found",H="wfs-layer:geojson-not-supported",J="wfs-layer:kvp-encoding-not-supported",K="wfs-layer:malformed-json",N="wfs-layer:unknown-geometry-type",Q="wfs-layer:unknown-field-type",B="wfs-layer:unsupported-spatial-reference",Z="wfs-layer:unsupported-wfs-version";async function he(r,t){const e=ee((await h(r,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:f,...t==null?void 0:t.customParameters},signal:t==null?void 0:t.signal})).data);return ne(r,e),e}function ee(r){const t=G(r);ge(t),j(t);const e=t.firstElementChild,a=U(re(e));return{operations:ae(e),get featureTypes(){return Array.from(a())},readFeatureTypes:a}}const te=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function ae(r){let t=!1;const e={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if(S(r,{OperationsMetadata:{Operation:a=>{switch(a.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:n=>{e.GetCapabilities.url=n.getAttribute(x)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:n=>{e.DescribeFeatureType.url=n.getAttribute(x)}}}};case"GetFeature":return{DCP:{HTTP:{Get:n=>{e.GetFeature.url=n.getAttribute(x)}}},Parameter:n=>{if(n.getAttribute("name")==="outputFormat")return{AllowedValues:{Value:s=>{const o=s.textContent;o&&te.has(o.toLowerCase())&&(e.GetFeature.outputFormat=o)}}}}}}},Constraint:a=>{switch(a.getAttribute("name")){case"KVPEncoding":return{DefaultValue:n=>{t=n.textContent.toLowerCase()==="true"}};case"ImplementsResultPaging":return{DefaultValue:n=>{e.GetFeature.supportsPagination=n.textContent.toLowerCase()==="true"}}}}}}),!t)throw new l(J,"WFS service doesn't support key/value pair (KVP) encoding");if(e.GetFeature.outputFormat==null)throw new l(H,"WFS service doesn't support GeoJSON output format");return e}function ne(r,t){I(r)&&(R(r,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=$(t.operations.DescribeFeatureType.url)),R(r,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=$(t.operations.GetFeature.url)))}function P(r){var e,a,n;const t=parseInt(((n=(a=(e=r.textContent)==null?void 0:e.match(/(?<wkid>\d+$)/i))==null?void 0:a.groups)==null?void 0:n.wkid)??"",10);if(!Number.isNaN(t))return t}function re(r){return T(r,{FeatureTypeList:{FeatureType:t=>{const e={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",defaultSpatialReference:4326,supportedSpatialReferences:[]},a=new Set;return S(t,{Name:n=>{const{name:s,prefix:o}=g(n.textContent);e.typeName=`${o}:${s}`,e.name=s,e.namespacePrefix=o,e.namespaceUri=n.lookupNamespaceURI(o)},Abstract:n=>{e.description=n.textContent},Title:n=>{e.title=n.textContent},WGS84BoundingBox:n=>{e.extent=se(n)},DefaultCRS:n=>{const s=P(n);s&&(e.defaultSpatialReference=s,a.add(s))},OtherCRS:n=>{const s=P(n);s&&a.add(s)}}),e.title||(e.title=e.name),a.add(4326),e.supportedSpatialReferences.push(...a),e}}})}function se(r){let t,e,a,n;for(const s of r.children)switch(s.localName){case"LowerCorner":[t,e]=s.textContent.split(" ").map(o=>Number.parseFloat(o));break;case"UpperCorner":[a,n]=s.textContent.split(" ").map(o=>Number.parseFloat(o))}return{xmin:t,ymin:e,xmax:a,ymax:n,spatialReference:Y}}function oe(r,t,e){return C(r,a=>e?a.name===t&&a.namespaceUri===e:a.typeName===t||a.name===t)}async function Se(r,t,e,a={}){const{featureType:n,extent:s}=await ie(r,t,e,a),{spatialReference:o}=we(r.operations.GetFeature.url,n,a.spatialReference),{fields:i,geometryType:p,swapXY:c,objectIdField:u,geometryField:y}=await ue(r,n,o,a);return{url:r.operations.GetCapabilities.url,name:n.name,namespaceUri:n.namespaceUri,fields:i,geometryField:y,geometryType:p,objectIdField:u,spatialReference:a.spatialReference??new k({wkid:n.defaultSpatialReference}),extent:s,swapXY:c,wfsCapabilities:r,customParameters:a.customParameters}}async function ie(r,t,e,a={}){const n=r.readFeatureTypes(),s=t?oe(n,t,e):n.next().value,{spatialReference:o=new k({wkid:s==null?void 0:s.defaultSpatialReference})}=a;if(s==null)throw t?new l(A,`The type '${t}' could not be found in the service`):new l(_,"The service is empty");let i=new L({...s.extent,spatialReference:k.WGS84});if(!M(i.spatialReference,o))try{await O(i.spatialReference,o,void 0,a),i=V(i,o)}catch{throw new l(B,"Projection not supported")}return{extent:i,spatialReference:o,featureType:s}}async function ue(r,t,e,a={}){var m,w,b;const{typeName:n}=t,[s,o]=await Promise.allSettled([ce(r.operations.DescribeFeatureType.url,n,a),le(r,n,e,a)]),i=D=>new l(q,`An error occurred while getting info about the feature type '${n}'`,{error:D});if(s.status==="rejected")throw i(s.reason);if(o.status==="rejected")throw i(o.reason);const{fields:p,errors:c}=s.value??{},u=((m=s.value)==null?void 0:m.geometryType)||((w=o.value)==null?void 0:w.geometryType),y=((b=o.value)==null?void 0:b.swapXY)??!1;if(u==null)throw new l(N,`The geometry type could not be determined for type '${n}`,{typeName:n,geometryType:u,fields:p,errors:c});return{...pe(p??[]),geometryType:u,swapXY:y}}function pe(r){const t=r.find(a=>a.type==="geometry");let e=r.find(a=>a.type==="oid");return r=r.filter(a=>a.type!=="geometry"),e||(e=new d({name:E,type:"oid",alias:E}),r.unshift(e)),{geometryField:(t==null?void 0:t.name)??null,objectIdField:e.name,fields:r}}async function le(r,t,e,a={}){var c;let n,s=!1;const[o,i]=await Promise.all([fe(r.operations.GetFeature.url,t,e,r.operations.GetFeature.outputFormat,{...a,count:1}),h(r.operations.GetFeature.url,{responseType:"text",query:v(t,e,void 0,{...a,count:1}),signal:a==null?void 0:a.signal})]),p=o.type==="FeatureCollection"&&((c=o.features[0])==null?void 0:c.geometry);if(p){let u;switch(n=W.fromJSON(z(p.type)),p.type){case"Point":u=p.coordinates;break;case"LineString":case"MultiPoint":u=p.coordinates[0];break;case"MultiLineString":case"Polygon":u=p.coordinates[0][0];break;case"MultiPolygon":u=p.coordinates[0][0][0]}const y=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(i.data);if(y){const m=u[0].toFixed(3),w=u[1].toFixed(3),b=parseFloat(y[1]).toFixed(3);m===parseFloat(y[2]).toFixed(3)&&w===b&&(s=!0)}}return{geometryType:n,swapXY:s}}async function ce(r,t,e){return ye(t,(await h(r,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:f,TYPENAME:t,...e==null?void 0:e.customParameters},signal:e==null?void 0:e.signal})).data)}function ye(r,t){const{name:e}=g(r),a=G(t);j(a);const n=C(T(a.firstElementChild,{element:s=>({name:s.getAttribute("name"),typeName:g(s.getAttribute("type")).name})}),({name:s})=>s===e);if(n!=null){const s=C(T(a.firstElementChild,{complexType:o=>o}),o=>o.getAttribute("name")===n.typeName);if(s!=null)return de(s)}throw new l(A,`Type '${r}' not found in document`,{document:new XMLSerializer().serializeToString(a)})}const me=new Set(["objectid","fid"]);function de(r){const t=[],e=[];let a;const n=T(r,{complexContent:{extension:{sequence:{element:s=>s}}}});for(const s of n){const o=s.getAttribute("name");if(!o)continue;let i,p;if(s.hasAttribute("type")?i=g(s.getAttribute("type")).name:S(s,{simpleType:{restriction:y=>(i=g(y.getAttribute("base")).name,{maxLength:m=>{p=+m.getAttribute("value")}})}}),!i)continue;const c=s.getAttribute("nillable")==="true";let u=!1;switch(i.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":e.push(new d({name:o,alias:o,type:"integer",nullable:c,length:F("integer")}));break;case"float":case"double":case"decimal":e.push(new d({name:o,alias:o,type:"double",nullable:c,length:F("double")}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":e.push(new d({name:o,alias:o,type:"string",nullable:c,length:p??F("string")}));break;case"datetime":case"date":e.push(new d({name:o,alias:o,type:"date",nullable:c,length:p??F("date")}));break;case"pointpropertytype":a="point",u=!0;break;case"multipointpropertytype":a="multipoint",u=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":a="polyline",u=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":a="polygon",u=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":u=!0,t.push(new l(N,`geometry type '${i}' is not supported`,{type:new XMLSerializer().serializeToString(r)}));break;default:t.push(new l(Q,`Unknown field type '${i}'`,{type:new XMLSerializer().serializeToString(r)}))}u&&e.push(new d({name:o,alias:o,type:"geometry",nullable:c}))}for(const s of e)if(s.type==="integer"&&!s.nullable&&me.has(s.name.toLowerCase())){s.type="oid";break}return{geometryType:a,fields:e,errors:t}}async function fe(r,t,e,a,n){let{data:s}=await h(r,{responseType:"text",query:v(t,e,a,n),signal:n==null?void 0:n.signal});s=s.replaceAll(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{return JSON.parse(s)}catch(o){throw new l(K,"Error while parsing the response",{response:s,error:o})}}function v(r,t,e,a){const n=typeof t=="number"?t:t.wkid;return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:f,TYPENAMES:r,OUTPUTFORMAT:e,SRSNAME:"EPSG:"+n,STARTINDEX:a==null?void 0:a.startIndex,COUNT:a==null?void 0:a.count,...a==null?void 0:a.customParameters}}function G(r){return new DOMParser().parseFromString(r.trim(),"text/xml")}function g(r){const[t,e]=r.split(":");return{prefix:e?t:"",name:e??t}}function ge(r){var e;const t=(e=r.firstElementChild)==null?void 0:e.getAttribute("version");if(t&&t!==f)throw new l(Z,`Unsupported WFS version ${t}. Supported version: ${f}`)}function j(r){let t="",e="";if(S(r.firstElementChild,{Exception:a=>(t=a.getAttribute("exceptionCode"),{ExceptionText:n=>{e=n.textContent}})}),t)throw new l(`wfs-layer:${t}`,e)}function we(r,t,e){const a={wkid:t.defaultSpatialReference},n=(e==null?void 0:e.wkid)!=null?{wkid:e.wkid}:a;return{spatialReference:n,getFeatureSpatialReference:X(r)||n.wkid&&t.supportedSpatialReferences.includes(n.wkid)?{wkid:n.wkid}:{wkid:t.defaultSpatialReference}}}export{fe as B,E as S,oe as V,Se as W,we as a,pe as q,he as v};
