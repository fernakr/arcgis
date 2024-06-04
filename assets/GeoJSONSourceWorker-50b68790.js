import{cs as _,ct as R,s as I,cu as D,cv as Q,cw as v,cx as Z,cy as A,C as P,E as G,d as N,ad as M,cz as O}from"./index-dade14c2.js";import{r as z,s as B,e as J,n as L,t as W}from"./featureConversionUtils-98930eb8.js";import{m as H}from"./FeatureStore-85786eab.js";import{x as E,j as b}from"./projectionSupport-fbcfed3b.js";import{W as U}from"./QueryEngine-9915d497.js";import{I as V,N as K,E as Y}from"./geojson-30ce9c6c.js";import{o as X,a as ee,i as te}from"./clientSideDefaults-06c4e668.js";import{I as se,p as w,d as T,f as F,w as k}from"./sourceUtils-f97587fe.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./BoundsStore-7b27c51b.js";import"./PooledRBush-545723ca.js";import"./timeSupport-3fee0918.js";import"./json-48e3ea08.js";import"./WhereClause-9a9e60aa.js";import"./TimeOnly-b53a8ed4.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./quantizationUtils-a73da41e.js";import"./utils-5eddb409.js";import"./generateRendererUtils-ea829a5e.js";import"./RenderState-1d6218ee.js";import"./date-294ce3fb.js";const ie={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class Se{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e,t={}){this._loadOptions={url:e.url,customParameters:e.customParameters};const n=[],[s]=await Promise.all([e.url?this._fetch(t==null?void 0:t.signal):null,this._checkProjection(e.spatialReference)]),i=V(s,{geometryType:e.geometryType}),o=e.fields||i.fields||[],d=e.hasZ!=null?e.hasZ:i.hasZ,p=i.geometryType;let y=e.objectIdField||i.objectIdFieldName||"__OBJECTID";const m=e.spatialReference||_;let r=e.timeInfo;o===i.fields&&i.unknownFields.length>0&&n.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:i.unknownFields}});const l=new R(o);let u=l.get(y);u?(u.type!=="esriFieldTypeString"&&(u.type="esriFieldTypeOID"),u.editable=!1,u.nullable=!1,y=u.name):(u={alias:y,name:y,type:i.objectIdFieldType==="string"?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},o.unshift(u));const h={};for(const a of o){if(a.name==null&&(a.name=a.alias),a.alias==null&&(a.alias=a.name),!a.name)throw new I("geojson-layer:invalid-field-name","field name is missing",{field:a});if(!D.jsonValues.includes(a.type))throw new I("geojson-layer:invalid-field-type",`invalid type for field "${a.name}"`,{field:a});if(a.name!==u.name){const g=Q(a);g!==void 0&&(h[a.name]=g)}a.length==null&&(a.length=v(a))}if(r){if(r.startTimeField){const a=l.get(r.startTimeField);a?(r.startTimeField=a.name,a.type="esriFieldTypeDate"):r.startTimeField=null}if(r.endTimeField){const a=l.get(r.endTimeField);a?(r.endTimeField=a.name,a.type="esriFieldTypeDate"):r.endTimeField=null}if(r.trackIdField){const a=l.get(r.trackIdField);a?r.trackIdField=a.name:(r.trackIdField=null,n.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:r}}))}r.startTimeField||r.endTimeField||(n.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:r}}),r=null)}const c=p?X(p):void 0,j=l.dateFields.length?{timeZoneIANA:Z}:null,f={warnings:n,featureErrors:[],layerDefinition:{...ie,drawingInfo:c??void 0,templates:ee(h),extent:void 0,geometryType:p,objectIdField:y,fields:o,hasZ:!!d,timeInfo:r,dateFieldsTimeReference:j}};this._queryEngine=new U({fieldsIndex:R.fromLayerJSON({fields:o,timeInfo:r,dateFieldsTimeReference:j}),geometryType:p,hasM:!1,hasZ:d,objectIdField:y,spatialReference:m,timeInfo:r,featureStore:new H({geometryType:p,hasM:!1,hasZ:d}),cacheSpatialQueries:!0});const q=this._queryEngine.fieldsIndex.requiredFields.indexOf(u);q>-1&&this._queryEngine.fieldsIndex.requiredFields.splice(q,1),this._createDefaultAttributes=te(h,y);const x=await this._createFeatures(s);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,x);const $=this._normalizeFeatures(x,f.featureErrors);this._queryEngine.featureStore.addMany($);const{fullExtent:C,timeExtent:S}=await this._queryEngine.fetchRecomputedExtents();if(f.layerDefinition.extent=C,S){const{start:a,end:g}=S;f.layerDefinition.timeInfo.timeExtent=[a,g]}return f}async applyEdits(e){const{spatialReference:t,geometryType:n}=this._queryEngine;return await Promise.all([se(t,n),E(e.adds,t),E(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var s;this._loadOptions.customParameters=e,(s=this._snapshotTask)==null||s.abort(),this._snapshotTask=A(this._snapshotFeatures),this._snapshotTask.promise.then(i=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,i);const o=this._normalizeFeatures(i);o&&this._queryEngine.featureStore.addMany(o)},i=>{this._queryEngine.featureStore.clear(),P(i)||G.getLogger("esri.layers.GeoJSONLayer").error(new I("geojson-layer:refresh","An error occurred during refresh",{error:i}))}),await this._waitSnapshotComplete();const{fullExtent:t,timeExtent:n}=await this._queryEngine.fetchRecomputedExtents();return{extent:t,timeExtent:n}}async _createFeatures(e){if(e==null)return[];const{geometryType:t,hasZ:n,objectIdField:s}=this._queryEngine,i=K(e,{geometryType:t,hasZ:n,objectIdField:s});if(!N(this._queryEngine.spatialReference,_))for(const o of i)o.geometry!=null&&(o.geometry=z(b(B(o.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),_,this._queryEngine.spatialReference)));return i}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:n}=this._loadOptions,s=(await M(t,{responseType:"json",query:{...n},signal:e})).data;return Y(s),s}_normalizeFeatures(e,t){const{objectIdField:n,fieldsIndex:s}=this._queryEngine,i=[];for(const o of e){const d=this._createDefaultAttributes(),p=w(s,d,o.attributes,!0);p?t==null||t.push(p):(this._assignObjectId(d,o.attributes,!0),o.attributes=d,o.objectId=d[n],i.push(o))}return i}async _applyEdits(e){const{adds:t,updates:n,deletes:s}=e,i={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t!=null&&t.length&&this._applyAddEdits(i,t),n!=null&&n.length&&this._applyUpdateEdits(i,n),s==null?void 0:s.length){for(const p of s)i.deleteResults.push(T(p));this._queryEngine.featureStore.removeManyById(s)}const{fullExtent:o,timeExtent:d}=await this._queryEngine.fetchRecomputedExtents();return{extent:o,timeExtent:d,featureEditResults:i}}_applyAddEdits(e,t){const{addResults:n}=e,{geometryType:s,hasM:i,hasZ:o,objectIdField:d,spatialReference:p,featureStore:y,fieldsIndex:m}=this._queryEngine,r=[];for(const l of t){if(l.geometry&&s!==O(l.geometry)){n.push(F("Incorrect geometry type."));continue}const u=this._createDefaultAttributes(),h=w(m,u,l.attributes);if(h)n.push(h);else{if(this._assignObjectId(u,l.attributes),l.attributes=u,l.uid!=null){const c=l.attributes[d];e.uidToObjectId[l.uid]=c}if(l.geometry!=null){const c=l.geometry.spatialReference??p;l.geometry=b(k(l.geometry,c),c,p)}r.push(l),n.push(T(l.attributes[d]))}}y.addMany(J([],r,s,o,i,d))}_applyUpdateEdits({updateResults:e},t){const{geometryType:n,hasM:s,hasZ:i,objectIdField:o,spatialReference:d,featureStore:p,fieldsIndex:y}=this._queryEngine;for(const m of t){const{attributes:r,geometry:l}=m,u=r==null?void 0:r[o];if(u==null){e.push(F(`Identifier field ${o} missing`));continue}if(!p.has(u)){e.push(F(`Feature with object id ${u} missing`));continue}const h=L(p.getFeature(u),n,i,s);if(l!=null){if(n!==O(l)){e.push(F("Incorrect geometry type."));continue}const c=l.spatialReference??d;h.geometry=b(k(l,c),c,d)}if(r){const c=w(y,h.attributes,r);if(c){e.push(c);continue}}p.add(W(h,n,i,s,o)),e.push(T(u))}}_createObjectIdGenerator(e,t){const n=e.fieldsIndex.get(e.objectIdField);if(n.type==="esriFieldTypeString")return()=>n.name+"-"+Date.now().toString(16);let s=Number.NEGATIVE_INFINITY;for(const i of t)i.objectId&&(s=Math.max(s,i.objectId));return s=Math.max(0,s)+1,()=>s++}_assignObjectId(e,t,n=!1){const s=this._queryEngine.objectIdField;e[s]=n&&s in t?t[s]:this._objectIdGenerator()}async _checkProjection(e){try{await E(_,e)}catch{throw new I("geojson-layer","Projection not supported")}}}export{Se as default};