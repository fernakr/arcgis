import{V as i,Y as n,F as s,G as a,Z as l,H as o}from"./index-994ee346.js";import{m as h,u as d}from"./LayerView-8bc55094.js";import"./Container-20a1e59f.js";import"./definitions-63b730da.js";import"./enums-bdecffa2.js";import"./Texture-184d16e2.js";let t=class extends h(d){constructor(e){super(e),this.layerViews=new i}set layerViews(e){this._set("layerViews",n(e,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((e,r)=>e+r.updatingProgress,0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(e){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,r)=>this.container.addChildAt(e.container,r))}};s([a({cast:l})],t.prototype,"layerViews",null),s([a({readOnly:!0})],t.prototype,"updatingProgress",null),t=s([o("esri.views.2d.layers.KnowledgeGraphLayerView2D")],t);const m=t;export{m as default};