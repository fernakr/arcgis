import{F as a,H as n}from"./index-b42b51f4.js";import{T as h}from"./color-7c3d4c52.js";import{i as o}from"./BaseGraphicContainer-ed8290f7.js";import{_ as d}from"./enums-bdecffa2.js";let i=class extends o{get hasHighlight(){return this.children.some(e=>e.hasData)}renderChildren(e){if(e.drawPhase!==h.HIGHLIGHT||(this.attributeView.update(),!this.children.some(s=>s.hasData)))return;this.attributeView.bindTextures(e.context),super.renderChildren(e);const{painter:r}=e,t=r.effects.highlight;t.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(d.COLOR_BUFFER_BIT),this._renderChildren(e,t.defines.concat(["highlightAll"])),t.draw(e),t.unbind()}};i=a([n("esri.views.2d.layers.support.HighlightGraphicContainer")],i);const u=i;export{u as a};