import{t as s}from"./lazyLayerLoader-0671582c.js";async function b(t,a){const r=await s(t,a);y(r),o(r);const n={serviceJSON:r};if((r.currentVersion??0)<10.5)return n;const e=await s(t+"/layers",a);return y(e),o(e),n.layersJSON={layers:e.layers,tables:e.tables},n}function i(t){return t.type==="Feature Layer"||t.type==="Oriented Imagery Layer"}function l(t){return t.type==="Table"}function o(t){var a,r;t.layers=(a=t.layers)==null?void 0:a.filter(i),t.tables=(r=t.tables)==null?void 0:r.filter(l)}function c(t){t.type||(t.type="Feature Layer")}function u(t){t.type||(t.type="Table")}function y(t){var a,r;(a=t.layers)==null||a.forEach(c),(r=t.tables)==null||r.forEach(u)}export{b as t};