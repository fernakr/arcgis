import{E as y,s as E,hO as v,c$ as g}from"./index-c43fbcbe.js";import{$ as u,L as o,r as x}from"./color-05f597e4.js";import{t as z}from"./definitions-595e04a3.js";const h=8388607,m=8388608,$=254,w=255,M=0,S=1,d=e=>(e&m)>>>23,U=e=>e&h,F=e=>d(e)===S?$:w;function Z(e){return d(e)===S}function T(e,s){return((s?m:0)|e)>>>0}const N=(e,s)=>e&&((...t)=>s.warn("DEBUG:",...t))||(()=>null),O=!1;function _(e){return u(e.minDataValue)&&u(e.maxDataValue)&&e.minSize!=null&&e.maxSize!=null?o.SIZE_MINMAX_VALUE:(e.expression&&e.expression==="view.scale"||e.valueExpression&&e.valueExpression==="$view.scale")&&Array.isArray(e.stops)?o.SIZE_SCALE_STOPS:(e.field!=null||e.expression&&e.expression!=="view.scale"||e.valueExpression&&e.valueExpression!=="$view.scale")&&(Array.isArray(e.stops)||"levels"in e&&e.levels)?o.SIZE_FIELD_STOPS:(e.field!=null||e.expression&&e.expression!=="view.scale"||e.valueExpression&&e.valueExpression!=="$view.scale")&&e.valueUnit!=null?o.SIZE_UNIT_VALUE:(y.getLogger("esri.views.2d.engine.webgl").error(new E("mapview-bad-type","Found invalid size VisualVariable",e)),o.NONE)}function P(e,s){if(!e||!s)return e;switch(s){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e}function A(e){return{value:e.value,size:v(e.size)}}function l(e){return(e??[]).map(s=>A(s))}function p(e){if(typeof e=="string"||typeof e=="number")return v(e);const s=e;return{type:"size",expression:s.expression,stops:l(s.stops)}}const c=e=>{const s=[],t=[],n=l(e),i=n.length;for(let r=0;r<6;r++){const a=n[Math.min(r,i-1)];s.push(a.value),t.push(a.size==null?z:g(a.size))}return{values:new Float32Array(s),sizes:new Float32Array(t)}};function R(e){const s=e&&e.length>0?{}:null,t=s?{}:null;if(!s||!t)return{vvFields:s,vvRanges:t};for(const n of e)if(n.field&&(s[n.type]=n.field),n.type==="size"){t.size||(t.size={});const i=n;switch(_(i)){case o.SIZE_MINMAX_VALUE:t.size.minMaxValue={minDataValue:i.minDataValue,maxDataValue:i.maxDataValue,minSize:p(i.minSize),maxSize:p(i.maxSize)};break;case o.SIZE_SCALE_STOPS:t.size.scaleStops={stops:l(i.stops)};break;case o.SIZE_FIELD_STOPS:if(i.levels){const r={};for(const a in i.levels)r[a]=c(i.levels[a]);t.size.fieldStops={type:"level-dependent",levels:r}}else t.size.fieldStops={type:"static",...c(i.stops)};break;case o.SIZE_UNIT_VALUE:t.size.unitValue={unit:i.valueUnit,valueRepresentation:i.valueRepresentation??void 0}}}else if(n.type==="color")t.color=V(n);else if(n.type==="opacity")t.opacity=I(n);else if(n.type==="rotation"){const i=n;t.rotation={type:i.rotationType}}return{vvFields:s,vvRanges:t}}function I(e){const s={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if(typeof e.field=="string"){if(!e.stops)return null;{if(e.stops.length>8)return null;const t=e.stops;for(let n=0;n<8;++n){const i=t[Math.min(n,t.length-1)];s.values[n]=i.value,s.opacities[n]=i.opacity}}}else{if(!(e.stops&&e.stops.length>=0))return null;{const t=e.stops&&e.stops.length>=0?e.stops[0].opacity:0;for(let n=0;n<8;n++)s.values[n]=1/0,s.opacities[n]=t}}return s}function f(e,s,t){e[4*s]=t.r/255,e[4*s+1]=t.g/255,e[4*s+2]=t.b/255,e[4*s+3]=t.a}function V(e){if(e==null||e.normalizationField)return null;const s={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};if(typeof e.field=="string"){if(!e.stops)return null;{if(e.stops.length>8)return null;s.field=e.field;const t=e.stops;for(let n=0;n<8;++n){const i=t[Math.min(n,t.length-1)];s.values[n]=i.value,f(s.colors,n,i.color)}}}else{if(!(e.stops&&e.stops.length>=0))return null;{const t=e.stops&&e.stops.length>=0&&e.stops[0].color;for(let n=0;n<8;n++)s.values[n]=1/0,f(s.colors,n,t)}}for(let t=0;t<32;t+=4)x(s.colors,t,!0);return s}export{P as a,h as b,S as c,_ as d,d as e,U as f,R as g,F as i,O as l,N as n,Z as p,T as s,M as u};
