import{bk as h,bl as m}from"./index-3f4f2f72.js";async function x(e,d=e.popupTemplate){var n,o;if(d==null)return[];const s=await d.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:r}=d,{objectIdField:u,typeIdField:i,globalIdField:p,relationships:a}=e;if(s.includes("*"))return["*"];const c=r?h(e):[],l=m(e.fieldsIndex,[...s,...c]);return i&&l.push(i),l&&u&&((n=e.fieldsIndex)!=null&&n.has(u))&&!l.includes(u)&&l.push(u),l&&p&&((o=e.fieldsIndex)!=null&&o.has(p))&&!l.includes(p)&&l.push(p),a&&a.forEach(I=>{var f;const{keyField:t}=I;l&&t&&((f=e.fieldsIndex)!=null&&f.has(t))&&!l.includes(t)&&l.push(t)}),l}function T(e,d){return e.popupTemplate?e.popupTemplate:d!=null&&d.defaultPopupTemplateEnabled&&e.defaultPopupTemplate!=null?e.defaultPopupTemplate:null}export{x as n,T as p};
