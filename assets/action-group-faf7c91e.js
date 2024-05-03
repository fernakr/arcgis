import{b9 as u,ba as d,en as m,bc as o}from"./index-3f4f2f72.js";import{c as p,d as h}from"./conditionalSlot-38ff865f.js";import{c as g,s as f,a as b}from"./loadable-776ea719.js";import{u as x,c as C,a as v,d as y,b as M,s as E}from"./t9n-0786ae55.js";import{d as S,a as L,S as a}from"./action-menu-0a86c76c.js";import{d as O}from"./action-c9413e88.js";import{d as k}from"./icon-9cf84669.js";import{d as A}from"./loader-12c316fa.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */const i={menuActions:"menu-actions",menuTooltip:"menu-tooltip"},z={menu:"ellipsis"},w={container:"container"},$=':host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:flex;flex-direction:column;padding:0px;--calcite-action-group-columns:3;--calcite-action-group-gap:1px;--calcite-action-group-padding:1px}.container{display:flex;flex-grow:1;flex-direction:column}:host([columns="1"]){--calcite-action-group-columns:1}:host([columns="2"]){--calcite-action-group-columns:2}:host([columns="3"]){--calcite-action-group-columns:3}:host([columns="4"]){--calcite-action-group-columns:4}:host([columns="5"]){--calcite-action-group-columns:5}:host([columns="6"]){--calcite-action-group-columns:6}:host(:first-child){padding-block-start:0px}:host([layout=horizontal]),:host([layout=horizontal]) .container{flex-direction:row}:host([layout=grid]){display:grid}:host([layout=grid]) .container{display:grid;place-content:stretch;background-color:var(--calcite-ui-background);gap:var(--calcite-action-group-gap);padding:var(--calcite-action-group-gap);grid-template-columns:repeat(var(--calcite-action-group-columns), auto)}:host([hidden]){display:none}[hidden]{display:none}',H=u(class extends d{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.setMenuOpen=t=>{this.menuOpen=!!t.target.open},this.handleMenuActionsSlotChange=t=>{this.hasMenuActions=m(t)},this.expanded=!1,this.label=void 0,this.layout="vertical",this.columns=void 0,this.menuOpen=!1,this.overlayPositioning="absolute",this.scale=void 0,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale="",this.defaultMessages=void 0,this.hasMenuActions=!1}expandedHandler(){this.menuOpen=!1}onMessagesChange(){}effectiveLocaleChange(){x(this,this.effectiveLocale)}async setFocus(){await g(this),this.el.focus()}connectedCallback(){C(this),v(this),p(this)}disconnectedCallback(){y(this),M(this),h(this)}async componentWillLoad(){f(this),await E(this)}componentDidLoad(){b(this)}renderMenu(){const{expanded:t,menuOpen:e,scale:s,layout:c,messages:n,overlayPositioning:l,hasMenuActions:r}=this;return o("calcite-action-menu",{expanded:t,flipPlacements:["left","right"],hidden:!r,label:n.more,onCalciteActionMenuOpen:this.setMenuOpen,open:e,overlayPositioning:l,placement:c==="horizontal"?"bottom-start":"leading-start",scale:s},o("calcite-action",{icon:z.menu,scale:s,slot:a.trigger,text:n.more,textEnabled:t}),o("slot",{name:i.menuActions,onSlotchange:this.handleMenuActionsSlotChange}),o("slot",{name:i.menuTooltip,slot:a.tooltip}))}render(){return o("div",{"aria-label":this.label,class:w.container,role:"group"},o("slot",null),this.renderMenu())}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return $}},[17,"calcite-action-group",{expanded:[516],label:[1],layout:[513],columns:[514],menuOpen:[1540,"menu-open"],overlayPositioning:[513,"overlay-positioning"],scale:[513],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],hasMenuActions:[32],setFocus:[64]}]);function P(){if(typeof customElements>"u")return;["calcite-action-group","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover"].forEach(e=>{switch(e){case"calcite-action-group":customElements.get(e)||customElements.define(e,H);break;case"calcite-action":customElements.get(e)||O();break;case"calcite-action-menu":customElements.get(e)||L();break;case"calcite-icon":customElements.get(e)||k();break;case"calcite-loader":customElements.get(e)||A();break;case"calcite-popover":customElements.get(e)||S();break}})}P();export{H as A,i as S,P as d};
