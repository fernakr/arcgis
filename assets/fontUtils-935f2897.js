import{az as c}from"./index-33d448c3.js";const u="arial-unicode-ms",a="woff2",i=new Map,f=new Set;class l{constructor(e,r){this.fontFace=e,this.promise=r}}async function y(t){const e=w(t),r=i.get(e);if(r)return r.promise;const n=new FontFace(t.family,`url('${c.fontsUrl}/woff2/${e}.${a}') format('${a}')`,{style:t.style,weight:t.weight}),s=document.fonts;if(s.has(n)&&n.status==="loading")return n.loaded;const o=n.load().then(()=>(s.add(n),n));return i.set(e,new l(n,o)),f.add(n),o}function d(t){if(!t)return u;const e=t.toLowerCase().split(" ").join("-");switch(e){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return e}}function w(t){const e=h(t)+m(t);return d(t.family)+(e.length>0?e:"-regular")}function h(t){if(!t.weight)return"";switch(t.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}function m(t){if(!t.style)return"";switch(t.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}export{y as c,w as f,u as t,d as u};
