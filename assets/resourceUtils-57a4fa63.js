import{a1 as L}from"./index-9762d29e.js";import{u as d}from"./basicInterfaces-11f56cb3.js";class h{constructor(r){this.data=r,this.type="encoded-mesh-texture",this.encoding=d.KTX2_ENCODING}}function w(e){return(e==null?void 0:e.type)==="encoded-mesh-texture"}async function f(e){const r=new Blob([e]),o=await r.text();return JSON.parse(o)}async function p(e,r){if(r===d.KTX2_ENCODING)return new h(e);const o=new Blob([e],{type:r}),n=URL.createObjectURL(o),t=new Image;if(L("esri-iPhone"))return new Promise((c,m)=>{const s=()=>{i(),c(t)},a=u=>{i(),m(u)},i=()=>{URL.revokeObjectURL(n),t.removeEventListener("load",s),t.removeEventListener("error",a)};t.addEventListener("load",s),t.addEventListener("error",a),t.src=n});try{t.src=n,await t.decode()}catch{console.warn("Failed decoding HTMLImageElement")}return URL.revokeObjectURL(n),t}export{f as n,p as o,w as r,h as t};
