import"./index-34cda61d.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */const u={container:"container",containerBorderSelected:"container--border-selected",containerBorderUnselected:"container--border-unselected",contentContainer:"content-container",contentContainerSelectable:"content-container--selectable",contentContainerHasCenterContent:"content-container--has-center-content",nestedContainer:"nested-container",nestedContainerHidden:"nested-container--hidden",content:"content",customContent:"custom-content",actionsStart:"actions-start",contentStart:"content-start",label:"label",description:"description",contentEnd:"content-end",contentBottom:"content-bottom",actionsEnd:"actions-end",selectionContainer:"selection-container",openContainer:"open-container",dragContainer:"drag-container"},m={actionsStart:"actions-start",contentStart:"content-start",content:"content",contentBottom:"content-bottom",contentEnd:"content-end",actionsEnd:"actions-end"},S=0,C={selectedMultiple:"check-circle-f",selectedSingle:"circle-f",unselected:"blank",closedLTR:"caret-right",closedRTL:"caret-left",open:"caret-down",blank:"blank",close:"x"},a="calcite-list",i="calcite-list-item-group",r="calcite-list-item";function p(n){const e=n.assignedElements({flatten:!0}),o=e.filter(t=>t==null?void 0:t.matches(i)).map(t=>Array.from(t.querySelectorAll(r))).reduce((t,c)=>[...t,...c],[]),s=e.filter(t=>t==null?void 0:t.matches(r));return[...e.filter(t=>t==null?void 0:t.matches(a)).map(t=>Array.from(t.querySelectorAll(r))).reduce((t,c)=>[...t,...c],[]),...o,...s]}function h(n){n.forEach(e=>{e.setPosition=n.indexOf(e)+1,e.setSize=n.length})}function f(n,e=!1){const o=e?"ancestor::calcite-list-item | ancestor::calcite-list-item-group":"ancestor::calcite-list-item";return document.evaluate(o,n,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}export{u as C,C as I,S as M,m as S,p as a,f as g,h as u};
