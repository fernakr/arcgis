import{a9 as d,d3 as m,d4 as r,d5 as u}from"./index-02c681c0.js";function c(e,i,t){const s=e.thumbnail&&e.thumbnail.url;return s?d(s,{responseType:"image"}).then(a=>{const h=n(a.data,t);return t!=null&&t.node?(t.node.appendChild(h),t.node):h}):m(e).then(a=>a?i(a,t):null)}function n(e,i){const t=!/\\.svg$/i.test(e.src)&&i&&i.disableUpsampling,s=Math.max(e.width,e.height);let a=(i==null?void 0:i.maxSize)!=null?r(i.maxSize):u.maxSize;t&&(a=Math.min(s,a));const h=typeof(i==null?void 0:i.size)=="number"?i==null?void 0:i.size:null,l=Math.min(a,h!=null?r(h):s);if(l!==s){const o=e.width!==0&&e.height!==0?e.width/e.height:1;o>=1?(e.width=l,e.height=l/o):(e.width=l*o,e.height=l)}return e}export{c as previewWebStyleSymbol};