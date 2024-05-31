import{dl as x,a$ as T,ik as d,F as i,G as s,b1 as w,gn as $,H as h,bz as N,ig as P,V as v,Z as C,J as O,gb as L,Y as R,il as H,e5 as k,im as G,io as J,dq as M,dt as U,dC as V}from"./index-6c8fba83.js";import{c as Y}from"./Analysis-e84d2804.js";import{j as f}from"./persistable-254808c1.js";import{r as Z}from"./elevationInfoUtils-c3c589f6.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./resourceExtension-7f3e0379.js";function E(t,e){return I(t)===I(e)}function I(t){if(t==null)return null;const e=t.layer!=null?t.layer.id:"";let r=null;return r=t.objectId!=null?t.objectId:t.layer!=null&&"objectIdField"in t.layer&&t.layer.objectIdField!=null&&t.attributes!=null?t.attributes[t.layer.objectIdField]:t.uid,r==null?null:`o-${e}-${r}`}const F={json:{write:{writer:B,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:D}}}};function B(t,e){var r;((r=t==null?void 0:t.layer)==null?void 0:r.objectIdField)!=null&&t.attributes!=null&&(e.feature={layerId:t.layer.id,objectId:t.attributes[t.layer.objectIdField]})}function D(t){if(t.layerId!=null&&t.objectId!=null)return{uid:null,layer:{id:t.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:t.objectId}}}let a=class extends x(T(N)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return d(this.position,e.position)&&d(this.elevationInfo,e.elevationInfo)&&E(this.feature,e.feature)}};i([s({type:w,json:{write:{isRequired:!0}}})],a.prototype,"position",void 0),i([s({type:$}),f()],a.prototype,"elevationInfo",void 0),i([s(F)],a.prototype,"feature",void 0),a=i([h("esri.analysis.LineOfSightAnalysisObserver")],a);const z=a;let u=class extends x(P){constructor(t){super(t),this.position=null,this.elevationInfo=null,this.feature=null}equals(t){return d(this.position,t.position)&&d(this.elevationInfo,t.elevationInfo)&&E(this.feature,t.feature)}};i([s({type:w}),f()],u.prototype,"position",void 0),i([s({type:$}),f()],u.prototype,"elevationInfo",void 0),i([s(F)],u.prototype,"feature",void 0),u=i([h("esri.analysis.LineOfSightAnalysisTarget")],u);const S=u,g=v.ofType(S);let l=class extends Y{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles(O(()=>this._computeExtent(),e=>{(e==null?void 0:e.pending)==null&&this._set("extent",e!=null?e.extent:null)},L))}get targets(){return this._get("targets")||new g}set targets(e){this._set("targets",R(e,this.targets,g))}get spatialReference(){var e;return((e=this.observer)==null?void 0:e.position)!=null?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){var e;return[(e=this.observer)==null?void 0:e.position]}async waitComputeExtent(){const e=this._computeExtent();return e!=null?e.pending:Promise.resolve()}_computeExtent(){var m;const e=this.spatialReference;if(((m=this.observer)==null?void 0:m.position)==null||e==null)return null;const r=p=>Z(p.position,p.elevationInfo)==="absolute-height",o=this.observer.position,b=H(o.x,o.y,o.z,o.x,o.y,o.z);for(const p of this.targets)if(p.position!=null){const y=k(p.position,e);if(y.pending!=null)return{pending:y.pending,extent:null};if(y.geometry!=null){const{x:q,y:A,z:_}=y.geometry;G(b,[q,A,_])}}const c=J(b,e);return r(this.observer)&&this.targets.every(r)||(c.zmin=void 0,c.zmax=void 0),{pending:null,extent:c}}clear(){this.observer=null,this.targets.removeAll()}};i([s({type:["line-of-sight"]})],l.prototype,"type",void 0),i([s({type:z,json:{read:!0,write:!0}})],l.prototype,"observer",void 0),i([s({cast:C,type:g,nonNullable:!0,json:{read:!0,write:!0}})],l.prototype,"targets",null),i([s({value:null,readOnly:!0})],l.prototype,"extent",void 0),i([s({readOnly:!0})],l.prototype,"spatialReference",null),i([s({readOnly:!0})],l.prototype,"requiredPropertiesForEditing",null),l=i([h("esri.analysis.LineOfSightAnalysis")],l);const j=l,K=v.ofType(S);let n=class extends M(U(V)){constructor(t){super(t),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new j,this.opacity=1}initialize(){this.addHandles(O(()=>this.analysis,(t,e)=>{e!=null&&e.parent===this&&(e.parent=null),t!=null&&(t.parent=this)},L))}async load(){return this.analysis!=null&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){var t;return(t=this.analysis)==null?void 0:t.observer}set observer(t){const{analysis:e}=this;e&&(e.observer=t)}get targets(){return this.analysis!=null?this.analysis.targets:new v}set targets(t){var e;R(t,(e=this.analysis)==null?void 0:e.targets)}get fullExtent(){return this.analysis!=null?this.analysis.extent:null}get spatialReference(){return this.analysis!=null?this.analysis.spatialReference:null}releaseAnalysis(t){this.analysis===t&&(this.analysis=new j)}};i([s({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),i([s({type:["LineOfSightLayer"]})],n.prototype,"operationalLayerType",void 0),i([s({type:z,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],n.prototype,"observer",null),i([s({type:K,json:{read:!0,write:{ignoreOrigin:!0}}})],n.prototype,"targets",null),i([s({nonNullable:!0,json:{read:!1,write:!1}})],n.prototype,"analysis",void 0),i([s({readOnly:!0})],n.prototype,"fullExtent",null),i([s({readOnly:!0})],n.prototype,"spatialReference",null),i([s({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],n.prototype,"opacity",void 0),i([s({type:["show","hide"]})],n.prototype,"listMode",void 0),n=i([h("esri.layers.LineOfSightLayer")],n);const rt=n;export{rt as default};
