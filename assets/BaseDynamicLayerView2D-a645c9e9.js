import{C as s,E as p,F as r,G as a,H as m}from"./index-02c681c0.js";import{a as h}from"./BitmapContainer-cdfdf5f9.js";import{m as n,u as d}from"./LayerView-b99358c7.js";import{v as c}from"./ExportStrategy-c15e44c0.js";import{a as u}from"./RefreshableLayerView-d5ec67d7.js";import"./WGLContainer-4727e9d1.js";import"./definitions-4480d7fd.js";import"./FramebufferObject-e38d036e.js";import"./Texture-1b4066a3.js";import"./enums-bdecffa2.js";import"./ProgramTemplate-1e065e03.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-2b1e5e11.js";import"./enums-f1a6a48a.js";import"./number-e491b09e.js";import"./GeometryUtils-8461dbec.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./Container-eca5ccfd.js";import"./earcut-c210587c.js";import"./featureConversionUtils-6032b3c7.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./Bitmap-fcd2c0ca.js";let t=class extends u(n(d)){update(e){this._strategy.update(e).catch(i=>{s(i)||p.getLogger(this).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new h,this.container.addChild(this._bitmapContainer),this._strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(e,i,o){return this.layer.fetchImageBitmap(e,i,o)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};r([a()],t.prototype,"_strategy",void 0),r([a()],t.prototype,"updating",void 0),t=r([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const k=t;export{k as default};
