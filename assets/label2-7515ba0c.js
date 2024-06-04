import{fi as P,fj as g,bS as O,fk as x}from"./index-c43fbcbe.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */const v="hidden-form-input";function k(e){return"checked"in e}const C=new WeakMap,F=new WeakSet;function q(e,t){if(g(t.parentElement,"[form]"))return!0;const s="calciteInternalFormComponentRegister";let a=!1;return e.addEventListener(s,r=>{a=r.composedPath().some(l=>F.has(l)),r.stopPropagation()},{once:!0}),t.dispatchEvent(new CustomEvent(s,{bubbles:!0,composed:!0})),a}function K(e){const{formEl:t}=e;return t?(t.requestSubmit(),!0):!1}function Q(e){var t;(t=e.formEl)==null||t.reset()}function U(e){const{el:t,value:n}=e,s=T(e);if(!s||q(s,t))return;e.formEl=s,e.defaultValue=n,k(e)&&(e.defaultChecked=e.checked);const a=(e.onFormReset||N).bind(e);s.addEventListener("reset",a),C.set(e.el,a),F.add(t)}function T(e){const{el:t,form:n}=e;return n?P(t,{id:n}):g(t,"form")}function N(){if(k(this)){this.checked=this.defaultChecked;return}this.value=this.defaultValue}function X(e){const{el:t,formEl:n}=e;if(!n)return;const s=C.get(t);n.removeEventListener("reset",s),C.delete(t),e.formEl=null,F.delete(t)}const W=e=>{e.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputChange",{bubbles:!0}))},S=e=>e.removeEventListener("change",W);function V(e){const{el:t,formEl:n,name:s,value:a}=e,{ownerDocument:r}=t,l=t.querySelectorAll(`input[slot="${v}"]`);if(!n||!s){l.forEach(i=>{S(i),i.remove()});return}const d=Array.isArray(a)?a:[a],c=[],w=new Set;l.forEach(i=>{const o=d.find(H=>H==i.value);o!=null?(w.add(o),M(e,i,o)):c.push(i)});let f;d.forEach(i=>{if(w.has(i))return;let o=c.pop();o||(o=r.createElement("input"),o.slot=v),f||(f=r.createDocumentFragment()),f.append(o),o.addEventListener("change",W),M(e,o,i)}),f&&t.append(f),c.forEach(i=>{S(i),i.remove()})}function M(e,t,n){var c;const{defaultValue:s,disabled:a,form:r,name:l,required:d}=e;t.defaultValue=s,t.disabled=a,t.name=l,t.required=d,t.tabIndex=-1,r?t.setAttribute("form",r):t.removeAttribute("form"),k(e)?(t.checked=e.checked,t.defaultChecked=e.defaultChecked,t.value=e.checked?n||"on":""):t.value=n||"",(c=e.syncHiddenFormInput)==null||c.call(e,t)}const Y=({component:e})=>(V(e),O("slot",{name:v}));/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */const A="calciteInternalLabelClick",I="calciteInternalLabelConnected",L="calciteInternalLabelDisconnected",y="calcite-label",h=new WeakMap,b=new WeakMap,E=new WeakMap,m=new WeakMap,u=new WeakSet,B=e=>{const{id:t}=e,n=t&&P(e,{selector:`${y}[for="${t}"]`});if(n)return n;const s=g(e,y);return!s||$(s,e)?null:s};function $(e,t){let n;const s="custom-element-ancestor-check",a=l=>{l.stopImmediatePropagation();const d=l.composedPath();n=d.slice(d.indexOf(t),d.indexOf(e))};return e.addEventListener(s,a,{once:!0}),t.dispatchEvent(new CustomEvent(s,{composed:!0,bubbles:!0})),e.removeEventListener(s,a),n.filter(l=>l!==t&&l!==e).filter(l=>{var d;return(d=l.tagName)==null?void 0:d.includes("-")}).length>0}function j(e){const t=B(e.el);if(b.has(t)&&t===e.labelEl||!t&&u.has(e))return;const n=G.bind(e);if(t){e.labelEl=t;const s=h.get(t)||[];s.push(e),h.set(t,s.sort(D)),b.has(e.labelEl)||(b.set(e.labelEl,R),e.labelEl.addEventListener(A,R)),u.delete(e),document.removeEventListener(I,E.get(e)),m.set(e,n),document.addEventListener(L,n)}else u.has(e)||(n(),document.removeEventListener(L,m.get(e)))}function Z(e){if(u.delete(e),document.removeEventListener(I,E.get(e)),document.removeEventListener(L,m.get(e)),E.delete(e),m.delete(e),!e.labelEl)return;const t=h.get(e.labelEl);t.length===1&&(e.labelEl.removeEventListener(A,b.get(e.labelEl)),b.delete(e.labelEl)),h.set(e.labelEl,t.filter(n=>n!==e).sort(D)),e.labelEl=null}function D(e,t){return x(e.el,t.el)?-1:1}function _(e){var t,n;return e.label||((n=(t=e.labelEl)==null?void 0:t.textContent)==null?void 0:n.trim())||""}function R(e){const t=e.detail.sourceEvent.target,n=h.get(this),s=n.find(l=>l.el===t);if(n.includes(s))return;const r=n[0];r.disabled||r.onLabelClick(e)}function z(){u.has(this)&&j(this)}function G(){u.add(this);const e=E.get(this)||z.bind(this);E.set(this,e),document.addEventListener(I,e)}export{Y as H,U as a,X as b,j as c,Z as d,T as f,_ as g,Q as r,K as s};
