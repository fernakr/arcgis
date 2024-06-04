import{bP as I,bQ as L,ep as p,bS as i,bT as v,em as g,bR as U,bU as R}from"./index-dade14c2.js";import{c as j,u as W,d as G}from"./interactive-c9da0e26.js";import{g as y,I as m,C as a,S as C,a as Q,u as q}from"./utils3-d75d2492.js";import{a as E,c as k,s as A,b as w,d as D,u as H}from"./t9n-ff003e4b.js";import{s as M,a as B,c as P}from"./loadable-390706bf.js";import{d as J}from"./action-b528d2cc.js";import{d as z}from"./icon-3a9f06cb.js";import{d as V}from"./loader-b86c0162.js";import"./observers-176bb4d4.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */const x={handle:"handle",handleActivated:"handle--activated"},X={drag:"drag"},Y=`:host{display:flex}.handle{display:flex;cursor:move;align-items:center;justify-content:center;align-self:stretch;border-style:none;background-color:transparent;outline-color:transparent;color:var(--calcite-ui-border-input);padding-block:0.75rem;padding-inline:0.25rem;line-height:0}.handle:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.handle:focus{color:var(--calcite-ui-text-1);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-ui-focus-offset-invert),
                1
              )
            )
          )}.handle--activated{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}.handle calcite-icon{color:inherit}:host([hidden]){display:none}[hidden]{display:none}`,Z=I(class extends L{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteHandleNudge=p(this,"calciteHandleNudge",6),this.calciteInternalHandleChange=p(this,"calciteInternalHandleChange",6),this.handleKeyDown=e=>{switch(e.key){case" ":this.activated=!this.activated,e.preventDefault();break;case"ArrowUp":if(!this.activated)return;e.preventDefault(),this.calciteHandleNudge.emit({direction:"up"});break;case"ArrowDown":if(!this.activated)return;e.preventDefault(),this.calciteHandleNudge.emit({direction:"down"});break}},this.handleBlur=()=>{this.activated=!1},this.activated=!1,this.dragHandle=void 0,this.messages=void 0,this.setPosition=void 0,this.setSize=void 0,this.label=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}handleAriaTextChange(){const e=this.getAriaText("live");e&&this.calciteInternalHandleChange.emit({message:e})}onMessagesChange(){}connectedCallback(){E(this),k(this)}async componentWillLoad(){M(this),await A(this)}componentDidLoad(){B(this)}disconnectedCallback(){w(this),D(this)}effectiveLocaleChange(){H(this,this.effectiveLocale)}async setFocus(){var e;await P(this),(e=this.handleButton)==null||e.focus()}getAriaText(e){const{setPosition:t,setSize:n,label:s,messages:l,activated:o}=this;return!l||!s||typeof n!="number"||typeof t!="number"?null:(e==="label"?o?l.dragHandleChange:l.dragHandleIdle:o?l.dragHandleActive:l.dragHandleCommit).replace("{position}",t.toString()).replace("{itemLabel}",s).replace("{total}",n.toString())}render(){var e;return i("span",{"aria-label":this.getAriaText("label"),"aria-pressed":v(this.activated),class:{[x.handle]:!0,[x.handleActivated]:this.activated},onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,role:"button",tabindex:"0",title:(e=this.messages)==null?void 0:e.dragHandle,ref:t=>{this.handleButton=t}},i("calcite-icon",{icon:X.drag,scale:"s"}))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messages:["handleAriaTextChange"],label:["handleAriaTextChange"],activated:["handleAriaTextChange"],setPosition:["handleAriaTextChange"],setSize:["handleAriaTextChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return Y}},[1,"calcite-handle",{activated:[1540],dragHandle:[513,"drag-handle"],messages:[16],setPosition:[2,"set-position"],setSize:[2,"set-size"],label:[1],messageOverrides:[16],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]}]);function O(){if(typeof customElements>"u")return;["calcite-handle","calcite-icon"].forEach(t=>{switch(t){case"calcite-handle":customElements.get(t)||customElements.define(t,Z);break;case"calcite-icon":customElements.get(t)||z();break}})}O();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */const N=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;--calcite-list-item-icon-color:var(--calcite-ui-brand);--calcite-list-item-spacing-indent:1rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{box-sizing:border-box;display:flex;flex:1 1 0%;background-color:var(--calcite-ui-foreground-1);font-family:var(--calcite-sans-family);padding-inline-start:calc(var(--calcite-list-item-spacing-indent) * var(--calcite-list-item-spacing-indent-multiplier))}.container *{box-sizing:border-box}.container:hover{cursor:pointer;background-color:var(--calcite-ui-foreground-2)}.container:active{background-color:var(--calcite-ui-foreground-1)}.container--border-selected{border-inline-start:4px solid var(--calcite-ui-brand)}.container--border-unselected{border-inline-start:4px solid transparent}.nested-container{display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1)}.nested-container--hidden{display:none}.content-container{display:flex;flex:1 1 auto;align-items:stretch;padding:0px;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2)}tr,td{outline-color:transparent}tr:focus,td:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-ui-focus-offset-invert),
                1
              )
            )
          )}.content,.custom-content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375}.label,.description,.content-bottom{font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--2);font-weight:var(--calcite-font-weight-normal);word-wrap:break-word;word-break:break-word}.label:only-child,.description:only-child,.content-bottom:only-child{margin:0px;padding-block:0.25rem}.label{color:var(--calcite-ui-text-1)}.description{margin-block-start:0.125rem;color:var(--calcite-ui-text-3)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:1 1 auto}.content-bottom{display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1);padding-inline-start:calc(var(--calcite-list-item-spacing-indent) * var(--calcite-list-item-spacing-indent-multiplier))}.content-container--has-center-content .content-start,.content-container--has-center-content .content-end{flex:0 1 auto}.selection-container{display:flex;padding-inline:0.75rem;color:var(--calcite-list-item-icon-color)}.actions-start,.actions-end,.content-start,.content-end,.selection-container,.drag-container,.open-container{display:flex;align-items:center}.open-container,.selection-container{cursor:pointer}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.actions-start ::slotted(calcite-action),.actions-start ::slotted(calcite-action-menu),.actions-start ::slotted(calcite-handle),.actions-start ::slotted(calcite-dropdown),.actions-end ::slotted(calcite-action),.actions-end ::slotted(calcite-action-menu),.actions-end ::slotted(calcite-handle),.actions-end ::slotted(calcite-dropdown){align-self:stretch;color:inherit}::slotted(calcite-list-item){border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3)}:host([hidden]){display:none}[hidden]{display:none}`,b=new Map,ee="calcite-list",T=I(class extends L{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteListItemSelect=p(this,"calciteListItemSelect",6),this.calciteListItemClose=p(this,"calciteListItemClose",6),this.calciteInternalListItemSelect=p(this,"calciteInternalListItemSelect",6),this.calciteInternalListItemActive=p(this,"calciteInternalListItemActive",6),this.calciteInternalFocusPreviousItem=p(this,"calciteInternalFocusPreviousItem",6),this.calciteInternalListItemChange=p(this,"calciteInternalListItemChange",6),this.closeClickHandler=()=>{this.closed=!0,this.calciteListItemClose.emit()},this.handleContentSlotChange=e=>{this.hasCustomContent=g(e)},this.handleActionsStartSlotChange=e=>{this.hasActionsStart=g(e)},this.handleActionsEndSlotChange=e=>{this.hasActionsEnd=g(e)},this.handleContentStartSlotChange=e=>{this.hasContentStart=g(e)},this.handleContentEndSlotChange=e=>{this.hasContentEnd=g(e)},this.handleContentBottomSlotChange=e=>{this.hasContentBottom=g(e)},this.handleDefaultSlotChange=e=>{this.handleOpenableChange(e.target)},this.toggleOpen=()=>{this.open=!this.open},this.itemClicked=e=>{e.defaultPrevented||(this.toggleSelected(),this.calciteInternalListItemActive.emit())},this.toggleSelected=()=>{const{selectionMode:e,selected:t}=this;this.disabled||(e==="multiple"||e==="single"?this.selected=!t:e==="single-persist"&&(this.selected=!0),this.calciteListItemSelect.emit())},this.handleItemKeyDown=e=>{if(e.defaultPrevented)return;const{key:t}=e,n=e.composedPath(),{containerEl:s,contentEl:l,actionsStartEl:o,actionsEndEl:c,open:d,openable:f}=this,r=[o,l,c].filter(Boolean),h=r.findIndex(u=>n.includes(u));if(t==="Enter"&&!n.includes(o)&&!n.includes(c))e.preventDefault(),this.toggleSelected();else if(t==="ArrowRight"){e.preventDefault();const u=h+1;h===-1?!d&&f?(this.open=!0,this.focusCell(null)):r[0]&&this.focusCell(r[0]):r[h]&&r[u]&&this.focusCell(r[u])}else if(t==="ArrowLeft"){e.preventDefault();const u=h-1;h===-1?(this.focusCell(null),d&&f?this.open=!1:this.calciteInternalFocusPreviousItem.emit()):h===0?(this.focusCell(null),s.focus()):r[h]&&r[u]&&this.focusCell(r[u])}},this.focusCellNull=()=>{this.focusCell(null)},this.focusCell=(e,t=!0)=>{const{contentEl:n,actionsStartEl:s,actionsEndEl:l,parentListEl:o}=this;t&&b.set(o,null),[s,n,l].filter(Boolean).forEach((c,d)=>{const f="tabindex";c===e?(c.setAttribute(f,"0"),t&&b.set(o,d)):c.removeAttribute(f)}),e==null||e.focus()},this.active=!1,this.closable=!1,this.closed=!1,this.description=void 0,this.disabled=!1,this.dragHandle=!1,this.label=void 0,this.metadata=void 0,this.open=!1,this.setSize=null,this.setPosition=null,this.selected=!1,this.value=void 0,this.selectionMode=null,this.selectionAppearance=null,this.messageOverrides=void 0,this.messages=void 0,this.effectiveLocale="",this.defaultMessages=void 0,this.level=null,this.visualLevel=null,this.parentListEl=void 0,this.openable=!1,this.hasActionsStart=!1,this.hasActionsEnd=!1,this.hasCustomContent=!1,this.hasContentStart=!1,this.hasContentEnd=!1,this.hasContentBottom=!1}activeHandler(e){e||this.focusCell(null,!1)}handleClosedChange(){this.emitCalciteInternalListItemChange()}handleDisabledChange(){this.emitCalciteInternalListItemChange()}handleSelectedChange(){this.calciteInternalListItemSelect.emit()}onMessagesChange(){}handleCalciteInternalListDefaultSlotChanges(e){e.stopPropagation(),this.handleOpenableChange(this.defaultSlotEl)}effectiveLocaleChange(){H(this,this.effectiveLocale)}connectedCallback(){j(this),k(this),E(this);const{el:e}=this;this.parentListEl=e.closest(ee),this.level=y(e)+1,this.visualLevel=y(e,!0),this.setSelectionDefaults()}async componentWillLoad(){M(this),await A(this)}componentDidLoad(){B(this)}componentDidRender(){W(this)}disconnectedCallback(){G(this),D(this),w(this)}async setFocus(){await P(this);const{containerEl:e,contentEl:t,actionsStartEl:n,actionsEndEl:s,parentListEl:l}=this,o=b.get(l);if(typeof o=="number"){const c=[n,t,s].filter(Boolean);c[o]?this.focusCell(c[o]):e==null||e.focus();return}e==null||e.focus()}renderSelected(){const{selected:e,selectionMode:t,selectionAppearance:n}=this;return t==="none"||n==="border"?null:i("td",{class:a.selectionContainer,key:"selection-container",onClick:this.itemClicked},i("calcite-icon",{icon:e?t==="multiple"?m.selectedMultiple:m.selectedSingle:m.unselected,scale:"s"}))}renderDragHandle(){return this.dragHandle?i("td",{class:a.dragContainer,key:"drag-handle-container"},i("calcite-handle",{label:this.label,setPosition:this.setPosition,setSize:this.setSize})):null}renderOpen(){const{el:e,open:t,openable:n,parentListEl:s}=this,l=U(e),o=n?t?m.open:l==="rtl"?m.closedRTL:m.closedLTR:m.blank,c=n?this.toggleOpen:this.itemClicked;return n||s!=null&&s.openable?i("td",{class:a.openContainer,key:"open-container",onClick:c},i("calcite-icon",{icon:o,key:o,scale:"s"})):null}renderActionsStart(){const{label:e,hasActionsStart:t}=this;return i("td",{"aria-label":e,class:a.actionsStart,hidden:!t,key:"actions-start-container",role:"gridcell",ref:n=>this.actionsStartEl=n},i("slot",{name:C.actionsStart,onSlotchange:this.handleActionsStartSlotChange}))}renderActionsEnd(){const{label:e,hasActionsEnd:t,closable:n,messages:s}=this;return i("td",{"aria-label":e,class:a.actionsEnd,hidden:!(t||n),key:"actions-end-container",role:"gridcell",ref:l=>this.actionsEndEl=l},i("slot",{name:C.actionsEnd,onSlotchange:this.handleActionsEndSlotChange}),n?i("calcite-action",{appearance:"transparent",icon:m.close,key:"close-action",label:s.close,onClick:this.closeClickHandler,text:s.close}):null)}renderContentStart(){const{hasContentStart:e}=this;return i("div",{class:a.contentStart,hidden:!e},i("slot",{name:C.contentStart,onSlotchange:this.handleContentStartSlotChange}))}renderCustomContent(){const{hasCustomContent:e}=this;return i("div",{class:a.customContent,hidden:!e},i("slot",{name:C.content,onSlotchange:this.handleContentSlotChange}))}renderContentEnd(){const{hasContentEnd:e}=this;return i("div",{class:a.contentEnd,hidden:!e},i("slot",{name:C.contentEnd,onSlotchange:this.handleContentEndSlotChange}))}renderContentBottom(){const{hasContentBottom:e,visualLevel:t}=this;return i("div",{class:a.contentBottom,hidden:!e,style:{"--calcite-list-item-spacing-indent-multiplier":`${t}`}},i("slot",{name:C.contentBottom,onSlotchange:this.handleContentBottomSlotChange}))}renderDefaultContainer(){return i("div",{class:{[a.nestedContainer]:!0,[a.nestedContainerHidden]:this.openable&&!this.open}},i("slot",{onSlotchange:this.handleDefaultSlotChange,ref:e=>this.defaultSlotEl=e}))}renderContentProperties(){const{label:e,description:t,hasCustomContent:n}=this;return!n&&(e||t)?i("div",{class:a.content,key:"content"},e?i("div",{class:a.label,key:"label"},e):null,t?i("div",{class:a.description,key:"description"},t):null):null}renderContentContainer(){const{description:e,label:t,selectionMode:n,hasCustomContent:s}=this,l=s||!!t||!!e,o=[this.renderContentStart(),this.renderCustomContent(),this.renderContentProperties(),this.renderContentEnd()];return i("td",{"aria-label":t,class:{[a.contentContainer]:!0,[a.contentContainerSelectable]:n!=="none",[a.contentContainerHasCenterContent]:l},key:"content-container",onClick:this.itemClicked,role:"gridcell",ref:c=>this.contentEl=c},o)}render(){const{openable:e,open:t,level:n,setPosition:s,setSize:l,active:o,label:c,selected:d,selectionAppearance:f,selectionMode:r,closed:h,visualLevel:u}=this,S=r!=="none"&&f==="border",F=S&&d,_=S&&!d;return i(R,null,i("tr",{"aria-expanded":e?v(t):null,"aria-label":c,"aria-level":n,"aria-posinset":s,"aria-selected":v(d),"aria-setsize":l,class:{[a.container]:!0,[a.containerBorderSelected]:F,[a.containerBorderUnselected]:_},hidden:h,onFocus:this.focusCellNull,onKeyDown:this.handleItemKeyDown,role:"row",style:{"--calcite-list-item-spacing-indent-multiplier":`${u}`},tabIndex:o?0:-1,ref:K=>this.containerEl=K},this.renderDragHandle(),this.renderSelected(),this.renderOpen(),this.renderActionsStart(),this.renderContentContainer(),this.renderActionsEnd()),this.renderContentBottom(),this.renderDefaultContainer())}emitCalciteInternalListItemChange(){this.calciteInternalListItemChange.emit()}setSelectionDefaults(){const{parentListEl:e,selectionMode:t,selectionAppearance:n}=this;e&&(t||(this.selectionMode=e.selectionMode),n||(this.selectionAppearance=e.selectionAppearance))}handleOpenableChange(e){if(!e)return;const{parentListEl:t}=this,n=Q(e);q(n);const s=!!n.length;s&&t&&!t.openable&&(t.openable=!0),this.openable=s,s||(this.open=!1)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{active:["activeHandler"],closed:["handleClosedChange"],disabled:["handleDisabledChange"],selected:["handleSelectedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return N}},[1,"calcite-list-item",{active:[4],closable:[516],closed:[1540],description:[1],disabled:[516],dragHandle:[4,"drag-handle"],label:[1],metadata:[16],open:[1540],setSize:[2,"set-size"],setPosition:[2,"set-position"],selected:[1540],value:[8],selectionMode:[1025,"selection-mode"],selectionAppearance:[1025,"selection-appearance"],messageOverrides:[1040],messages:[1040],effectiveLocale:[32],defaultMessages:[32],level:[32],visualLevel:[32],parentListEl:[32],openable:[32],hasActionsStart:[32],hasActionsEnd:[32],hasCustomContent:[32],hasContentStart:[32],hasContentEnd:[32],hasContentBottom:[32],setFocus:[64]},[[0,"calciteInternalListItemGroupDefaultSlotChange","handleCalciteInternalListDefaultSlotChanges"],[0,"calciteInternalListDefaultSlotChange","handleCalciteInternalListDefaultSlotChanges"]]]);function $(){if(typeof customElements>"u")return;["calcite-list-item","calcite-action","calcite-handle","calcite-icon","calcite-loader"].forEach(t=>{switch(t){case"calcite-list-item":customElements.get(t)||customElements.define(t,T);break;case"calcite-action":customElements.get(t)||J();break;case"calcite-handle":customElements.get(t)||O();break;case"calcite-icon":customElements.get(t)||z();break;case"calcite-loader":customElements.get(t)||V();break}})}$();const de=T,he=$;export{de as CalciteListItem,he as defineCustomElement};
