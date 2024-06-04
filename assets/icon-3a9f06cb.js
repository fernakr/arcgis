import{bP as b,bQ as f,bR as m,bS as h,bT as x,bU as g,bV as v}from"./index-dade14c2.js";import{c as z}from"./observers-176bb4d4.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */const y={icon:"icon",flipRtl:"flip-rtl"},p={},d={},u={s:16,m:24,l:32};async function C({icon:t,scale:e}){const s=u[e],n=w(t),o=n.charAt(n.length-1)==="F",i=`${o?n.substring(0,n.length-1):n}${s}${o?"F":""}`;if(p[i])return p[i];d[i]||(d[i]=fetch(v(`./assets/icon/${i}.json`)).then(r=>r.json()).catch(()=>(console.error(`"${i}" is not a valid calcite-ui-icon name`),"")));const a=await d[i];return p[i]=a,a}function w(t){const e=!isNaN(Number(t.charAt(0))),s=t.split("-");if(s.length>0){const o=/[a-z]/i;t=s.map((l,i)=>l.replace(o,function(r,c){return i===0&&c===0?r:r.toUpperCase()})).join("")}return e?`i${t}`:t}const D=":host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}",I=b(class extends f{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.waitUntilVisible(()=>{this.visible=!0,this.loadIconPathData()})}disconnectedCallback(){var t;(t=this.intersectionObserver)==null||t.disconnect(),this.intersectionObserver=null}async componentWillLoad(){this.loadIconPathData()}render(){const{el:t,flipRtl:e,pathData:s,scale:n,textLabel:o}=this,l=m(t),i=u[n],a=!!o,r=[].concat(s||"");return h(g,{"aria-hidden":x(!a),"aria-label":a?o:null,role:a?"img":null},h("svg",{"aria-hidden":"true",class:{[y.flipRtl]:l==="rtl"&&e,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${i} ${i}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},r.map(c=>typeof c=="string"?h("path",{d:c}):h("path",{d:c.d,opacity:"opacity"in c?c.opacity:1}))))}async loadIconPathData(){const{icon:t,scale:e,visible:s}=this;if(!t||!s)return;const n=await C({icon:t,scale:e});t===this.icon&&(this.pathData=n)}waitUntilVisible(t){if(this.intersectionObserver=z("intersection",e=>{e.forEach(s=>{s.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,t())})},{rootMargin:"50px"}),!this.intersectionObserver){t();return}this.intersectionObserver.observe(this.el)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return D}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]);function k(){if(typeof customElements>"u")return;["calcite-icon"].forEach(e=>{switch(e){case"calcite-icon":customElements.get(e)||customElements.define(e,I);break}})}k();export{I,k as d};
