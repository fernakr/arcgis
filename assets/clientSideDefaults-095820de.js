import{aV as o,aW as u,aX as n,a1 as a,aY as i}from"./index-7adde551.js";import{t as l}from"./QueryEngineCapabilities-85c4f1d0.js";function h(t){return{renderer:{type:"simple",symbol:t==="esriGeometryPoint"||t==="esriGeometryMultipoint"?o:t==="esriGeometryPolyline"?u:n}}}const c=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let y=1;function A(t,s){if(a("esri-csp-restrictions"))return()=>({[s]:null,...t});try{let e=`this.${s} = null;`;for(const r in t)e+=`this${c.test(r)?`.${r}`:`["${r}"]`} = ${JSON.stringify(t[r])};`;const p=new Function(`
      return class AttributesClass$${y++} {
        constructor() {
          ${e};
        }
      }
    `)();return()=>new p}catch{return()=>({[s]:null,...t})}}function $(t={}){return[{name:"New Feature",description:"",prototype:{attributes:i(t)}}]}function f(t,s){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:s,supportsDelete:s,supportsEditing:s,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:s,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:l,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:s,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}export{$ as a,A as i,f as l,h as o};
