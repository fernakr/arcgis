import{F as a,G as i,H as h,$ as o,C as l,E as d}from"./index-7e9b571f.js";const y=r=>{let e=class extends r{initialize(){this.addHandles(o(()=>this.layer,"refresh",t=>{this.doRefresh(t.dataChanged).catch(s=>{l(s)||d.getLogger(this).error(s)})}),"RefreshableLayerView")}};return a([i()],e.prototype,"layer",void 0),e=a([h("esri.layers.mixins.RefreshableLayerView")],e),e};export{y as a};
