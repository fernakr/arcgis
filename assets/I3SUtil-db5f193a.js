import{h$ as y,ae as n,ad as f,i0 as I,i1 as T}from"./index-34cda61d.js";import"./mat3f64-221ce671.js";import"./mat4f64-1413b4a7.js";import"./quat-d8b3fa65.js";import"./quatf64-3363c48e.js";import"./spatialReferenceEllipsoidUtils-eee87bb5.js";import{I as h}from"./I3SBinaryReader-50c5b5d7.js";import{H as C}from"./orientedBoundingBox-5b7b8958.js";const F={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsAsyncApplyEdits:!1,zDefault:void 0},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}};var e;(function(t){t[t.INVISIBLE=0]="INVISIBLE",t[t.TRANSPARENT=1]="TRANSPARENT",t[t.OPAQUE=2]="OPAQUE"})(e||(e={}));function R(t){return{...A,...t,type:"solid"}}const A={color:y(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:e.OPAQUE,hasSlicePlane:!1};y(0,0,0,.2),e.OPAQUE;n();var d;async function H(t,u,s,S,E){const a=[];for(const p of u)if(p&&E.includes(p.name)){const o=`${t}/nodes/${s}/attributes/${p.key}/0`;a.push({url:o,storageInfo:p})}const i=await Promise.allSettled(a.map(p=>f(p.url,{responseType:"array-buffer"}).then(o=>h(p.storageInfo,o.data)))),c=[];for(const p of S){const o={};for(let r=0;r<i.length;r++){const l=i[r];if(l.status==="fulfilled"){const m=l.value;o[a[r].storageInfo.name]=D(m,p)}}c.push(o)}return c}(function(t){t[t.OUTSIDE=0]="OUTSIDE",t[t.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",t[t.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",t[t.INSIDE=3]="INSIDE"})(d||(d={}));const g=-32768,N=-(2**31);function D(t,u){if(!t)return null;const s=t[u];return I(t)?s===g?null:s:T(t)?s===N?null:s:s!=s?null:s}R({color:[0,0,0,0],opacity:0});new Array(24);n();n();C();new Array(72);export{H as i,F as s};
