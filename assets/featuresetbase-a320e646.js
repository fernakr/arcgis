import{m as Ie}from"./TimeOnly-439b6d0d.js";import{n as N,K as De,X as J,H as L,N as v,a as m,r as y,P,d as b,x as Te,y as fe,Q as ue,A as S,B as U,q as x,U as G,E as Ee,b as M,J as be,v as Ne,c as O,D as xe,S as Ae,T as _,V as X,Y}from"./arcadeUtils-1bd1bd91.js";import{e as ce,j as Le,q as de,f as Se,c as me,a as Ce,b as ve,d as Pe,g as q,k as Ze,F as Re,T as $e,B as k,h as ke,i as B,L as C,I as ee}from"./featureSetUtils-6d37a27c.js";import{l as Me}from"./portalUtils-7278d82a.js";import{u as Ue,D as ye}from"./SpatialFilter-e45e2a21.js";import{j as pe,eu as Oe,e3 as ne,cX as W}from"./index-5bbab0a9.js";import{x as T}from"./WhereClause-9d60f717.js";import"./number-80ee5871.js";import"./featureConversionUtils-474eebfc.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./SubtypeGroupLayer-8df310ac.js";import"./executeQueryJSON-6cead980.js";import"./query-06ec1aa7.js";import"./pbfQueryUtils-7ec752bb.js";import"./pbf-093819f0.js";import"./executeQueryPBF-5262adc4.js";import"./AttachmentInfo-08f7582f.js";import"./executeForIds-d41a29c2.js";import"./geometryEngineAsync-80dfa8ab.js";function ze(s,n,r,d){if(d.length===1){if(x(d[0]))return Y(s,d[0],-1);if(M(d[0]))return Y(s,d[0].toArray(),-1)}return Y(s,d,-1)}async function te(s,n,r){const d=s.getVariables();if(d.length>0){const F=[];for(let t=0;t<d.length;t++){const i={name:d[t]};F.push(await n.evaluateIdentifier(r,i))}const e={};for(let t=0;t<d.length;t++)e[d[t]]=F[t];return s.parameters=e,s}return s}function c(s,n,r=null){for(const d in s)if(d.toLowerCase()===n.toLowerCase())return s[d];return r}function we(s){if(s===null)return null;const n={type:c(s,"type",""),name:c(s,"name","")};if(n.type==="range")n.range=c(s,"range",[]);else{n.codedValues=[];for(const r of c(s,"codedValues",[]))n.codedValues.push({name:c(r,"name",""),code:c(r,"code",null)})}return n}function ae(s){if(s===null)return null;const n={},r=c(s,"wkt",null);r!==null&&(n.wkt=r);const d=c(s,"wkid",null);return d!==null&&(n.wkid=d),n}function he(s){if(s===null)return null;const n={hasZ:c(s,"hasz",!1),hasM:c(s,"hasm",!1)},r=c(s,"spatialreference",null);r&&(n.spatialReference=ae(r));const d=c(s,"x",null);if(d!==null)return n.x=d,n.y=c(s,"y",null),n;const F=c(s,"rings",null);if(F!==null)return n.rings=F,n;const e=c(s,"paths",null);if(e!==null)return n.paths=e,n;const t=c(s,"points",null);if(t!==null)return n.points=t,n;for(const i of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const u=c(s,i,null);u!==null&&(n[i]=u)}return n}function je(s,n){for(const r of n)if(r===s)return!0;return!1}function He(s){return!!s.layerDefinition&&!!s.featureSet&&je(s.layerDefinition.geometryType,["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])!==!1&&x(s.layerDefinition.fields)!==!1&&x(s.featureSet.features)!==!1}function z(s){return(s==null?void 0:s.toLowerCase())==="utc"?"UTC":(s==null?void 0:s.toLowerCase())==="unknown"?"Unknown":s}function cn(s){s.mode==="async"&&(s.functions.timezone=function(n,r){return s.standardFunctionAsync(n,r,async(d,F,e)=>{var u,p;if(N(e,1,2,n,r),De(e[0])||J(e[0]))return"Unknown";if(L(e[0])){if(await e[0].load(),e.length===1||e[1]===null)return e[0].datesInUnknownTimezone?z("unknown"):z(e[0].dateFieldsTimeZone);if(!(e[1]instanceof v)||e[1].hasField("type")===!1)throw new m(n,y.InvalidParameter,r);const o=e[1].field("type");if(P(o)===!1)throw new m(n,y.InvalidParameter,r);switch(b(o).toLowerCase()){case"preferredtimezone":return z(e[0].preferredTimeZone);case"editfieldsinfo":return z(((u=e[0].editFieldsInfo)==null?void 0:u.timeZone)??null);case"timeinfo":return z(((p=e[0].timeInfo)==null?void 0:p.timeZone)??null);case"field":if(e[1].hasField("fieldname")&&P(e[1].field("fieldname")))return z(e[0].fieldTimeZone(b(e[1].field("fieldname"))))}throw new m(n,y.InvalidParameter,r)}const t=Te(e[0],fe(n));if(t===null)return null;const i=t.timeZone;return i==="system"?Ie.systemTimeZoneCanonicalName:i.toLowerCase()==="utc"?"UTC":i.toLowerCase()==="unknown"?"Unknown":i})},s.functions.sqltimestamp=function(n,r){return s.standardFunctionAsync(n,r,async(d,F,e)=>{N(e,1,3,n,r);const t=e[0];if(ue(t)){if(e.length===1)return t.toSQLWithKeyword();if(e.length===2)return t.changeTimeZone(b(e[1])).toSQLWithKeyword();throw new m(n,y.InvalidParameter,r)}if(J(t))return t.toSQLWithKeyword();if(L(t)){if(e.length!==3)throw new m(n,y.InvalidParameter,r);await t.load();const i=b(e[1]);if(J(e[2]))return e[2].toSQLWithKeyword();if(ue(e[2])===!1)throw new m(n,y.InvalidParameter,r);const u=t.fieldTimeZone(i);return u===null?e[2].toSQLWithKeyword():e[2].changeTimeZone(u).toSQLWithKeyword()}throw new m(n,y.InvalidParameter,r)})},s.signatures.push({name:"sqltimestamp",min:2,max:4}),s.functions.featuresetbyid=function(n,r){return s.standardFunctionAsync(n,r,(d,F,e)=>{if(N(e,2,4,n,r),e[0]instanceof ce){const t=b(e[1]);let i=S(e[2],null);const u=U(S(e[3],!0));if(i===null&&(i=["*"]),x(i)===!1)throw new m(n,y.InvalidParameter,r);return e[0].featureSetById(t,u,i)}throw new m(n,y.InvalidParameter,r)})},s.signatures.push({name:"featuresetbyid",min:2,max:4}),s.functions.getfeatureset=function(n,r){return s.standardFunctionAsync(n,r,(d,F,e)=>{if(N(e,1,2,n,r),G(e[0])){let t=S(e[1],"datasource");return t===null&&(t="datasource"),t=b(t).toLowerCase(),Le(e[0].fullSchema(),t,n.lrucache,n.interceptor,n.spatialReference)}throw new m(n,y.InvalidParameter,r)})},s.signatures.push({name:"getfeatureset",min:1,max:2}),s.functions.featuresetbyportalitem=function(n,r){return s.standardFunctionAsync(n,r,(d,F,e)=>{var o,a;if(N(e,2,5,n,r),e[0]===null)throw new m(n,y.PortalRequired,r);if(e[0]instanceof Ee){const l=b(e[1]),f=b(e[2]);let I=S(e[3],null);const D=U(S(e[4],!0));if(I===null&&(I=["*"]),x(I)===!1)throw new m(n,y.InvalidParameter,r);let w=null;return w=(o=n.services)!=null&&o.portal?n.services.portal:pe.getDefault(),w=Me(e[0],w),de(l,f,n.spatialReference,I,D,w,n.lrucache,n.interceptor)}if(P(e[0])===!1)throw new m(n,y.PortalRequired,r);const t=b(e[0]),i=b(e[1]);let u=S(e[2],null);const p=U(S(e[3],!0));if(u===null&&(u=["*"]),x(u)===!1)throw new m(n,y.InvalidParameter,r);return de(t,i,n.spatialReference,u,p,((a=n.services)==null?void 0:a.portal)??pe.getDefault(),n.lrucache,n.interceptor)})},s.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),s.functions.featuresetbyname=function(n,r){return s.standardFunctionAsync(n,r,(d,F,e)=>{if(N(e,2,4,n,r),e[0]instanceof ce){const t=b(e[1]);let i=S(e[2],null);const u=U(S(e[3],!0));if(i===null&&(i=["*"]),x(i)===!1)throw new m(n,y.InvalidParameter,r);return e[0].featureSetByName(t,u,i)}throw new m(n,y.InvalidParameter,r)})},s.signatures.push({name:"featuresetbyname",min:2,max:4}),s.functions.featureset=function(n,r){return s.standardFunction(n,r,(d,F,e)=>{N(e,1,1,n,r);let t=e[0];const i={layerDefinition:{geometryType:"",objectIdField:"",hasM:!1,hasZ:!1,globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(P(t))t=JSON.parse(t),t.layerDefinition!==void 0?(i.layerDefinition=t.layerDefinition,i.featureSet=t.featureSet,t.layerDefinition.spatialReference&&(i.layerDefinition.spatialReference=t.layerDefinition.spatialReference)):(i.featureSet.features=t.features,i.featureSet.geometryType=t.geometryType,i.layerDefinition.geometryType=i.featureSet.geometryType,i.layerDefinition.objectIdField=t.objectIdFieldName??"",i.layerDefinition.typeIdField=t.typeIdFieldName,i.layerDefinition.globalIdField=t.globalIdFieldName,i.layerDefinition.fields=t.fields,t.spatialReference&&(i.layerDefinition.spatialReference=t.spatialReference));else{if(!(e[0]instanceof v))throw new m(n,y.InvalidParameter,r);{t=JSON.parse(e[0].castToText(!0));const u=c(t,"layerdefinition");if(u!==null){i.layerDefinition.geometryType=c(u,"geometrytype",""),i.featureSet.geometryType=i.layerDefinition.geometryType,i.layerDefinition.globalIdField=c(u,"globalidfield",""),i.layerDefinition.objectIdField=c(u,"objectidfield",""),i.layerDefinition.typeIdField=c(u,"typeidfield",""),i.layerDefinition.hasZ=c(u,"hasz",!1)===!0,i.layerDefinition.hasM=c(u,"hasm",!1)===!0;const p=c(u,"spatialreference",null);p&&(i.layerDefinition.spatialReference=ae(p));for(const a of c(u,"fields",[])){const l={name:c(a,"name",""),alias:c(a,"alias",""),type:c(a,"type",""),nullable:c(a,"nullable",!0),editable:c(a,"editable",!0),length:c(a,"length",null),domain:we(c(a,"domain"))};i.layerDefinition.fields.push(l)}const o=c(t,"featureset",null);if(o){const a={};for(const l of i.layerDefinition.fields)a[l.name.toLowerCase()]=l.name;for(const l of c(o,"features",[])){const f={},I=c(l,"attributes",{});for(const D in I)f[a[D.toLowerCase()]]=I[D];i.featureSet.features.push({attributes:f,geometry:he(c(l,"geometry",null))})}}}else{i.layerDefinition.hasZ=c(t,"hasz",!1)===!0,i.layerDefinition.hasM=c(t,"hasm",!1)===!0,i.layerDefinition.geometryType=c(t,"geometrytype",""),i.featureSet.geometryType=i.layerDefinition.geometryType,i.layerDefinition.objectIdField=c(t,"objectidfieldname",""),i.layerDefinition.typeIdField=c(t,"typeidfieldname","");const p=c(t,"spatialreference",null);p&&(i.layerDefinition.spatialReference=ae(p));let o=c(t,"fields",null);if(x(o))for(const f of o){const I={name:c(f,"name",""),alias:c(f,"alias",""),type:c(f,"type",""),nullable:c(f,"nullable",!0),editable:c(f,"editable",!0),length:c(f,"length",null),domain:we(c(f,"domain"))};i.layerDefinition.fields.push(I)}else o=null,i.layerDefinition.fields=o;const a={};for(const f of i.layerDefinition.fields)a[f.name.toLowerCase()]=f.name;let l=c(t,"features",null);if(x(l))for(const f of l){const I={},D=c(f,"attributes",{});for(const w in D)I[a[w.toLowerCase()]]=D[w];i.featureSet.features.push({attributes:I,geometry:he(c(f,"geometry",null))})}else l=null,i.featureSet.features=l}}}if(He(i)===!1)throw new m(n,y.InvalidParameter,r);return i.layerDefinition.geometryType||(i.layerDefinition.geometryType="esriGeometryNull"),Se.create(i,n.spatialReference)})},s.signatures.push({name:"featureset",min:1,max:1}),s.functions.filter=function(n,r){return s.standardFunctionAsync(n,r,async(d,F,e)=>{if(N(e,2,2,n,r),x(e[0])||M(e[0])){const t=[];let i=e[0];i instanceof be&&(i=i.toArray());let u=null;if(!Ne(e[1]))throw new m(n,y.InvalidParameter,r);u=e[1].createFunction(n);for(const p of i){const o=u(p);Oe(o)?await o===!0&&t.push(p):o===!0&&t.push(p)}return t}if(L(e[0])){const t=await e[0].load(),i=T.create(e[1],t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC),u=i.getVariables();if(u.length>0){const p=[];for(let a=0;a<u.length;a++){const l={name:u[a]};p.push(await s.evaluateIdentifier(n,l))}const o={};for(let a=0;a<u.length;a++)o[u[a]]=p[a];return i.parameters=o,new me({parentfeatureset:e[0],whereclause:i})}return new me({parentfeatureset:e[0],whereclause:i})}throw new m(n,y.InvalidParameter,r)})},s.signatures.push({name:"filter",min:2,max:2}),s.functions.orderby=function(n,r){return s.standardFunctionAsync(n,r,async(d,F,e)=>{if(N(e,2,2,n,r),L(e[0])){const t=new Ce(e[1]);return new ve({parentfeatureset:e[0],orderbyclause:t})}throw new m(n,y.InvalidParameter,r)})},s.signatures.push({name:"orderby",min:2,max:2}),s.functions.top=function(n,r){return s.standardFunctionAsync(n,r,async(d,F,e)=>{if(N(e,2,2,n,r),L(e[0]))return new Pe({parentfeatureset:e[0],topnum:e[1]});if(x(e[0]))return O(e[1])>=e[0].length?e[0].slice(0):e[0].slice(0,O(e[1]));if(M(e[0]))return O(e[1])>=e[0].length()?e[0].slice(0):e[0].slice(0,O(e[1]));throw new m(n,y.InvalidParameter,r)})},s.signatures.push({name:"top",min:2,max:2}),s.functions.first=function(n,r){return s.standardFunctionAsync(n,r,async(d,F,e)=>{if(N(e,1,1,n,r),L(e[0])){const t=await e[0].first(d.abortSignal);if(t!==null){const i=xe.createFromGraphicLikeObject(t.geometry,t.attributes,e[0],n.timeZone);return i._underlyingGraphic=t,i}return t}return x(e[0])?e[0].length===0?null:e[0][0]:M(e[0])?e[0].length()===0?null:e[0].get(0):null})},s.signatures.push({name:"first",min:1,max:1}),s.functions.attachments=function(n,r){return s.standardFunctionAsync(n,r,async(d,F,e)=>{N(e,1,2,n,r);const t={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(e.length>1){if(e[1]instanceof v){if(e[1].hasField("minsize")&&(t.minsize=O(e[1].field("minsize"))),e[1].hasField("metadata")&&(t.returnMetadata=U(e[1].field("metadata"))),e[1].hasField("maxsize")&&(t.maxsize=O(e[1].field("maxsize"))),e[1].hasField("types")){const i=Ae(e[1].field("types"),!1);i.length>0&&(t.types=i)}}else if(e[1]!==null)throw new m(n,y.InvalidParameter,r)}if(G(e[0])){let i=e[0]._layer;return i instanceof ne&&(i=q(i,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),i===null?[]:L(i)===!1?[]:(await i.load(),i.queryAttachments(e[0].field(i.objectIdField),t.minsize,t.maxsize,t.types,t.returnMetadata))}if(e[0]===null)return[];throw new m(n,y.InvalidParameter,r)})},s.signatures.push({name:"attachments",min:1,max:2}),s.functions.featuresetbyrelationshipname=function(n,r){return s.standardFunctionAsync(n,r,async(d,F,e)=>{N(e,2,4,n,r);const t=e[0],i=b(e[1]);let u=S(e[2],null);const p=U(S(e[3],!0));if(u===null&&(u=["*"]),x(u)===!1)throw new m(n,y.InvalidParameter,r);if(e[0]===null)return null;if(!G(e[0]))throw new m(n,y.InvalidParameter,r);let o=t._layer;if(o instanceof ne&&(o=q(o,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),o===null||L(o)===!1)return null;o=await o.load();const a=o.relationshipMetaData().filter(w=>w.name===i);if(a.length===0)return null;if(a[0].relationshipTableId!==void 0&&a[0].relationshipTableId!==null&&a[0].relationshipTableId>-1)return Ze(o,a[0],t.field(o.objectIdField),o.spatialReference,u,p,n.lrucache,n.interceptor);let l=o.serviceUrl();if(!l)return null;l=l.charAt(l.length-1)==="/"?l+a[0].relatedTableId.toString():l+"/"+a[0].relatedTableId.toString();const f=await Re(l,o.spatialReference,u,p,n.lrucache,n.interceptor);await f.load();let I=f.relationshipMetaData();if(I=I.filter(w=>w.id===a[0].id),t.hasField(a[0].keyField)===!1||t.field(a[0].keyField)===null){const w=await o.getFeatureByObjectId(t.field(o.objectIdField),[a[0].keyField]);if(w){const E=T.create(I[0].keyField+"= @id",f.getFieldsIndex(),f.dateFieldsTimeZoneDefaultUTC);return E.parameters={id:w.attributes[a[0].keyField]},f.filter(E)}return new Ue({parentfeatureset:f})}const D=T.create(I[0].keyField+"= @id",f.getFieldsIndex(),f.dateFieldsTimeZoneDefaultUTC);return D.parameters={id:t.field(a[0].keyField)},f.filter(D)})},s.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),s.functions.featuresetbyassociation=function(n,r){return s.standardFunctionAsync(n,r,async(d,F,e)=>{N(e,2,3,n,r);const t=e[0],i=b(S(e[1],"")).toLowerCase(),u=P(e[2])?b(e[2]):null;if(e[0]===null)return null;if(!G(e[0]))throw new m(n,y.InvalidParameter,r);let p=t._layer;if(p instanceof ne&&(p=q(p,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),p===null||L(p)===!1)return null;await p.load();const o=p.serviceUrl(),a=await $e(o,n.spatialReference);let l=null,f=null,I=!1;if(u!==null&&u!==""&&u!==void 0){for(const g of a.terminals)g.terminalName===u&&(f=g.terminalId);f===null&&(I=!0)}const D=a.associations.getFieldsIndex(),w=D.get("TOGLOBALID").name,E=D.get("FROMGLOBALID").name,K=D.get("TOTERMINALID").name,V=D.get("FROMTERMINALID").name,j=D.get("FROMNETWORKSOURCEID").name,H=D.get("TONETWORKSOURCEID").name,$=D.get("ASSOCIATIONTYPE").name,ge=D.get("ISCONTENTVISIBLE").name,Fe=D.get("OBJECTID").name;for(const g of p.fields)if(g.type==="global-id"){l=t.field(g.name);break}let Z=null,ie=new k(new W({name:"percentalong",alias:"percentalong",type:"double"}),T.create("0",a.associations.getFieldsIndex(),a.associations.dateFieldsTimeZoneDefaultUTC)),re=new k(new W({name:"side",alias:"side",type:"string"}),T.create("''",a.associations.getFieldsIndex(),a.associations.dateFieldsTimeZoneDefaultUTC));const A="globalid",se="globalId",le={};for(const g in a.lkp)le[g]=a.lkp[g].sourceId;const R=new ke(new W({name:"classname",alias:"classname",type:"string"}),null,le);let h="";switch(i){case"midspan":{h=`((${w}='${l}') OR ( ${E}='${l}')) AND (${$} IN (5))`,R.codefield=T.create(`CASE WHEN (${w}='${l}') THEN ${j} ELSE ${H} END`,a.associations.getFieldsIndex(),a.associations.dateFieldsTimeZoneDefaultUTC);const g=X(C.findField(a.associations.fields,E));g.name=A,g.alias=A,Z=new k(g,T.create(`CASE WHEN (${E}='${l}') THEN ${w} ELSE ${E} END`,a.associations.getFieldsIndex(),a.associations.dateFieldsTimeZoneDefaultUTC)),ie=a.unVersion>=4?new ee(C.findField(a.associations.fields,D.get("PERCENTALONG").name)):new k(new W({name:"percentalong",alias:"percentalong",type:"double"}),T.create("0",a.associations.getFieldsIndex(),a.associations.dateFieldsTimeZoneDefaultUTC));break}case"junctionedge":{h=`((${w}='${l}') OR ( ${E}='${l}')) AND (${$} IN (4,6))`,R.codefield=T.create(`CASE WHEN (${w}='${l}') THEN ${j} ELSE ${H} END`,a.associations.getFieldsIndex(),a.associations.dateFieldsTimeZoneDefaultUTC);const g=X(C.findField(a.associations.fields,E));g.name=A,g.alias=A,Z=new k(g,T.create(`CASE WHEN (${E}='${l}') THEN ${w} ELSE ${E} END`,a.associations.getFieldsIndex(),a.associations.dateFieldsTimeZoneDefaultUTC)),re=new k(new W({name:"side",alias:"side",type:"string"}),T.create(`CASE WHEN (${$}=4) THEN 'from' ELSE 'to' END`,a.associations.getFieldsIndex(),a.associations.dateFieldsTimeZoneDefaultUTC));break}case"connected":{let g=`${w}='@T'`,oe=`${E}='@T'`;f!==null&&(g+=` AND ${K}=@A`,oe+=` AND ${V}=@A`),h="(("+g+") OR ("+oe+"))",h=_(h,"@T",l??""),g=_(g,"@T",l??""),f!==null&&(g=_(g,"@A",f.toString()),h=_(h,"@A",f.toString())),R.codefield=T.create("CASE WHEN "+g+` THEN ${j} ELSE ${H} END`,a.associations.getFieldsIndex(),a.associations.dateFieldsTimeZoneDefaultUTC);const Q=X(C.findField(a.associations.fields,E));Q.name=A,Q.alias=A,Z=new k(Q,T.create("CASE WHEN "+g+` THEN ${E} ELSE ${w} END`,a.associations.getFieldsIndex(),a.associations.dateFieldsTimeZoneDefaultUTC));break}case"container":h=`${w}='${l}' AND ${$} = 2`,f!==null&&(h+=` AND ${K} = `+f.toString()),R.codefield=j,h="( "+h+" )",Z=new B(C.findField(a.associations.fields,E),A,A);break;case"content":h=`(${E}='${l}' AND ${$} = 2)`,f!==null&&(h+=` AND ${V} = `+f.toString()),R.codefield=H,h="( "+h+" )",Z=new B(C.findField(a.associations.fields,w),A,A);break;case"structure":h=`(${w}='${l}' AND ${$} = 3)`,f!==null&&(h+=` AND ${K} = `+f.toString()),R.codefield=j,h="( "+h+" )",Z=new B(C.findField(a.associations.fields,E),A,se);break;case"attached":h=`(${E}='${l}' AND ${$} = 3)`,f!==null&&(h+=` AND ${V} = `+f.toString()),R.codefield=H,h="( "+h+" )",Z=new B(C.findField(a.associations.fields,w),A,se);break;default:throw new m(n,y.InvalidParameter,r)}return I&&(h="1 <> 1"),new C({parentfeatureset:a.associations,adaptedFields:[new ee(C.findField(a.associations.fields,Fe)),new ee(C.findField(a.associations.fields,ge)),Z,re,R,ie],extraFilter:h?T.create(h,a.associations.getFieldsIndex(),a.associations.dateFieldsTimeZoneDefaultUTC):null})})},s.signatures.push({name:"featuresetbyassociation",min:2,max:6}),s.functions.groupby=function(n,r){return s.standardFunctionAsync(n,r,async(d,F,e)=>{if(N(e,3,3,n,r),!L(e[0]))throw new m(n,y.InvalidParameter,r);const t=await e[0].load(),i=[],u=[];let p=!1,o=[];if(P(e[1]))o.push(e[1]);else if(e[1]instanceof v)o.push(e[1]);else if(x(e[1]))o=e[1];else{if(!M(e[1]))throw new m(n,y.InvalidParameter,r);o=e[1].toArray()}for(const a of o)if(P(a)){const l=T.create(b(a),t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC),f=ye(l)===!0?b(a):"%%%%FIELDNAME";i.push({name:f,expression:l}),f==="%%%%FIELDNAME"&&(p=!0)}else{if(!(a instanceof v))throw new m(n,y.InvalidParameter,r);{const l=a.hasField("name")?a.field("name"):"%%%%FIELDNAME",f=a.hasField("expression")?a.field("expression"):"";if(l==="%%%%FIELDNAME"&&(p=!0),!l)throw new m(n,y.InvalidParameter,r);i.push({name:l,expression:T.create(f||l,t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC)})}}if(o=[],P(e[2]))o.push(e[2]);else if(x(e[2]))o=e[2];else if(M(e[2]))o=e[2].toArray();else{if(!(e[2]instanceof v))throw new m(n,y.InvalidParameter,r);o.push(e[2])}for(const a of o){if(!(a instanceof v))throw new m(n,y.InvalidParameter,r);{const l=a.hasField("name")?a.field("name"):"",f=a.hasField("statistic")?a.field("statistic"):"",I=a.hasField("expression")?a.field("expression"):"";if(!l||!f||!I)throw new m(n,y.InvalidParameter,r);u.push({name:l,statistic:f.toLowerCase(),expression:T.create(I,t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC)})}}if(p){const a={};for(const f of t.fields)a[f.name.toLowerCase()]=1;for(const f of i)f.name!=="%%%%FIELDNAME"&&(a[f.name.toLowerCase()]=1);for(const f of u)f.name!=="%%%%FIELDNAME"&&(a[f.name.toLowerCase()]=1);let l=0;for(const f of i)if(f.name==="%%%%FIELDNAME"){for(;a["field_"+l.toString()]===1;)l++;a["field_"+l.toString()]=1,f.name="FIELD_"+l.toString()}}for(const a of i)await te(a.expression,s,n);for(const a of u)await te(a.expression,s,n);return e[0].groupby(i,u)})},s.signatures.push({name:"groupby",min:3,max:3}),s.functions.distinct=function(n,r){return s.standardFunctionAsync(n,r,async(d,F,e)=>{if(L(e[0])){N(e,2,2,n,r);const t=await e[0].load(),i=[];let u=[];if(P(e[1]))u.push(e[1]);else if(e[1]instanceof v)u.push(e[1]);else if(x(e[1]))u=e[1];else{if(!M(e[1]))throw new m(n,y.InvalidParameter,r);u=e[1].toArray()}let p=!1;for(const o of u)if(P(o)){const a=T.create(b(o),t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC),l=ye(a)===!0?b(o):"%%%%FIELDNAME";i.push({name:l,expression:a}),l==="%%%%FIELDNAME"&&(p=!0)}else{if(!(o instanceof v))throw new m(n,y.InvalidParameter,r);{const a=o.hasField("name")?o.field("name"):"%%%%FIELDNAME",l=o.hasField("expression")?o.field("expression"):"";if(a==="%%%%FIELDNAME"&&(p=!0),!a)throw new m(n,y.InvalidParameter,r);i.push({name:a,expression:T.create(l||a,t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC)})}}if(p){const o={};for(const l of t.fields)o[l.name.toLowerCase()]=1;for(const l of i)l.name!=="%%%%FIELDNAME"&&(o[l.name.toLowerCase()]=1);let a=0;for(const l of i)if(l.name==="%%%%FIELDNAME"){for(;o["field_"+a.toString()]===1;)a++;o["field_"+a.toString()]=1,l.name="FIELD_"+a.toString()}}for(const o of i)await te(o.expression,s,n);return e[0].groupby(i,[])}return ze("distinct",d,F,e)})}),s.functions.getfeaturesetinfo=function(n,r){return s.standardFunctionAsync(n,r,async(d,F,e)=>{if(N(e,1,1,n,r),!L(e[0]))return null;const t=await e[0].getFeatureSetInfo();return t?v.convertObjectToArcadeDictionary({layerId:t.layerId,layerName:t.layerName,itemId:t.itemId,serviceLayerUrl:t.serviceLayerUrl,webMapLayerId:t.webMapLayerId??null,webMapLayerTitle:t.webMapLayerTitle??null,className:null,objectClassId:null},fe(n),!1,!1):null})},s.signatures.push({name:"getfeaturesetinfo",min:1,max:1})}export{cn as registerFunctions};
