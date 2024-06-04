import{F as m,H as d,J as u,P as y,a1 as h,a2 as c}from"./index-dade14c2.js";import b from"./FeatureLayerView2D-09e80180.js";import"./definitions-0509da3e.js";import"./LayerView-764b83bc.js";import"./Container-30b1bd37.js";import"./enums-bdecffa2.js";import"./Texture-be9b5d1c.js";import"./AttributeStoreView-a010b8c1.js";import"./TiledDisplayObject-1d3f4e42.js";import"./color-2a6af067.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./WGLContainer-fb0ff87f.js";import"./FramebufferObject-4b1219b6.js";import"./ProgramTemplate-f3cf6f84.js";import"./GeometryUtils-df0db2f3.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-5406b9f6.js";import"./featureConversionUtils-98930eb8.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-c0074acc.js";import"./cimAnalyzer-604dca85.js";import"./fontUtils-f896f516.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-251dae52.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-a73da41e.js";import"./floatRGBA-6bd81ad0.js";import"./ExpandedCIM-5e6311a6.js";import"./util-563277c5.js";import"./BitmapTileContainer-37cdd272.js";import"./Bitmap-b10bd5a9.js";import"./TileContainer-1f0bf5f3.js";import"./CircularArray-ef508845.js";import"./BufferPool-3bb24936.js";import"./FeatureContainer-c7385c1a.js";import"./popupUtils-eabdd2fa.js";import"./RefreshableLayerView-638803e0.js";function g(i,e){return!i.visible||i.minScale!==0&&e>i.minScale||i.maxScale!==0&&e<i.maxScale}let n=class extends b{initialize(){this.addHandles([u(()=>this.view.scale,()=>this._update(),y)],"constructor")}isUpdating(){var p;const i=this.layer.sublayers.some(l=>l.renderer!=null),e=this._commandsQueue.updating,s=this._updatingRequiredFieldsPromise!=null,t=!this._proxy||!this._proxy.isReady,r=this._pipelineIsUpdating,o=this.tileRenderer==null||((p=this.tileRenderer)==null?void 0:p.updating),a=i&&(e||s||t||r||o);return h("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${a}
  -> hasRenderer ${i}
  -> hasPendingCommand ${e}
  -> updatingRequiredFields ${s}
  -> updatingProxy ${t}
  -> updatingPipeline ${r}
  -> updatingTileRenderer ${o}
`),a}_injectOverrides(i){let e=super._injectOverrides(i);const s=this.view.scale,t=this.layer.sublayers.filter(o=>g(o,s)).map(o=>o.subtypeCode);if(!t.length)return e;e=e??new c().toJSON();const r=`NOT ${this.layer.subtypeField} IN (${t.join(",")})`;return e.where=e.where?`(${e.where}) AND (${r})`:r,e}_setLayersForFeature(i){const e=this.layer.fieldsIndex.get(this.layer.subtypeField),s=i.attributes[e.name],t=this.layer.sublayers.find(r=>r.subtypeCode===s);i.layer=i.sourceLayer=t}_createSchemaConfig(){const i={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(r=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:r.labelingInfo,labelsVisible:r.labelsVisible,renderer:r.renderer,subtypeCode:r.subtypeCode,orderBy:null}))},e=this.layer.sublayers.map(r=>r.subtypeCode).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${e})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...i,definitionExpression:t}}};n=m([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],n);const pe=n;export{pe as default};
