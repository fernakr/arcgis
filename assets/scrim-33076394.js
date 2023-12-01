import{a4 as c,a5 as o,dl as l,a7 as t}from"./index-308e373b.js";import{u as r,c as d,a as h,s as m,d as f,b as g}from"./t9n-2f528f8c.js";import{c as u}from"./observers-cbb94143.js";import{d as p}from"./loader-e71a2d79.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0
 */const i={scrim:"scrim",content:"content"},a={s:72,l:480},v=":host{position:absolute;inset:0px;z-index:var(--calcite-app-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-scrim-background-internal))}.content{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}",C=c(class extends o{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.resizeObserver=u("resize",()=>this.handleResize()),this.handleDefaultSlotChange=e=>{this.hasContent=l(e)},this.storeLoaderEl=e=>{this.loaderEl=e,this.handleResize()},this.loading=!1,this.messages=void 0,this.messageOverrides=void 0,this.loaderScale=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.hasContent=!1}onMessagesChange(){}effectiveLocaleChange(){r(this,this.effectiveLocale)}connectedCallback(){var e;d(this),h(this),(e=this.resizeObserver)==null||e.observe(this.el)}async componentWillLoad(){await m(this)}disconnectedCallback(){var e;f(this),g(this),(e=this.resizeObserver)==null||e.disconnect()}render(){const{hasContent:e,loading:s,messages:n}=this;return t("div",{class:i.scrim},s?t("calcite-loader",{label:n.loading,scale:this.loaderScale,ref:this.storeLoaderEl}):null,t("div",{class:i.content,hidden:!e},t("slot",{onSlotchange:this.handleDefaultSlotChange})))}getScale(e){return e<a.s?"s":e>=a.l?"l":"m"}handleResize(){const{loaderEl:e,el:s}=this;e&&(this.loaderScale=this.getScale(Math.min(s.clientHeight,s.clientWidth)??0))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return v}},[1,"calcite-scrim",{loading:[516],messages:[1040],messageOverrides:[1040],loaderScale:[32],defaultMessages:[32],effectiveLocale:[32],hasContent:[32]}]);function b(){if(typeof customElements>"u")return;["calcite-scrim","calcite-loader"].forEach(s=>{switch(s){case"calcite-scrim":customElements.get(s)||customElements.define(s,C);break;case"calcite-loader":customElements.get(s)||p();break}})}b();export{b as d};
