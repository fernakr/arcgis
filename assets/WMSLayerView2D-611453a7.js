import{F as o,G as m,eK as C,H as I,O as F,s as l,C as E,E as R,J as $,be as q}from"./index-cdf69f36.js";import{a as b}from"./BitmapContainer-64b98fb0.js";import{m as U,u as V}from"./LayerView-384e2573.js";import{v as W}from"./ExportStrategy-debdd9ef.js";import{a as H}from"./RefreshableLayerView-73b9895f.js";import{o as L}from"./ExportWMSImageParameters-d0b3be7a.js";import"./WGLContainer-e978ac2e.js";import"./definitions-eba50215.js";import"./FramebufferObject-32003335.js";import"./Texture-4ee49a9f.js";import"./enums-bdecffa2.js";import"./ProgramTemplate-b0743a30.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-9054a86e.js";import"./enums-f1a6a48a.js";import"./number-e491b09e.js";import"./GeometryUtils-fd0f8ba8.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./Container-7bafc118.js";import"./earcut-adc00ba5.js";import"./featureConversionUtils-e1010ffb.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./Bitmap-71881aec.js";const j=e=>{let t=class extends e{initialize(){this.exportImageParameters=new L({layer:this.layer})}destroy(){this.exportImageParameters=F(this.exportImageParameters)}get exportImageVersion(){var r;return(r=this.exportImageParameters)==null||r.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(r){const{layer:a}=this;if(!r)return Promise.reject(new l("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));const{popupEnabled:p}=a;if(!p)return Promise.reject(new l("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:p}));const u=this.createFetchPopupFeaturesQuery(r);if(!u)return Promise.resolve([]);const{extent:i,width:s,height:n,x:d,y:c}=u;if(!(i&&s&&n))throw new l("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:i,width:s,height:n});return a.fetchFeatureInfo(i,s,n,d,c)}};return o([m()],t.prototype,"exportImageParameters",void 0),o([m({readOnly:!0})],t.prototype,"exportImageVersion",null),o([m()],t.prototype,"layer",void 0),o([m(C)],t.prototype,"timeExtent",void 0),t=o([I("esri.layers.mixins.WMSLayerView")],t),t};let h=class extends j(H(U(V))){constructor(){super(...arguments),this.bitmapContainer=new b}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch(t=>{E(t)||R.getLogger(this).error(t)})}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:r}=e;this.bitmapContainer=new b,this.container.addChild(this.bitmapContainer),this.strategy=new W({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles($(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=F(this.strategy),this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t,bitmapContainer:r}=this,{x:a,y:p}=e,{spatialReference:u}=t;let i,s=0,n=0;if(r.children.some(S=>{const{width:x,height:f,resolution:w,x:y,y:g}=S,v=y+w*x,P=g-w*f;return a>=y&&a<=v&&p<=g&&p>=P&&(i=new q({xmin:y,ymin:P,xmax:v,ymax:g,spatialReference:u}),s=x,n=f,!0)}),!i)return null;const d=i.width/s,c=Math.round((a-i.xmin)/d),M=Math.round((i.ymax-p)/d);return{extent:i,width:s,height:n,x:c,y:M}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,a){return this.layer.fetchImageBitmap(e,t,r,{timeExtent:this.timeExtent,...a})}};o([m()],h.prototype,"strategy",void 0),o([m()],h.prototype,"updating",void 0),h=o([I("esri.views.2d.layers.WMSLayerView2D")],h);const ut=h;export{ut as default};
