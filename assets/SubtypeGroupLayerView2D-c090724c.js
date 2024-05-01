import{F as m,H as d,J as u,P as y,a1 as h,a2 as c}from"./index-e88387f3.js";import b from"./FeatureLayerView2D-11f1a715.js";import"./definitions-1a0e2008.js";import"./LayerView-2bbefb29.js";import"./Container-36c05c87.js";import"./enums-bdecffa2.js";import"./Texture-827b9aaa.js";import"./AttributeStoreView-0568c808.js";import"./TiledDisplayObject-32b04012.js";import"./color-10797745.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./WGLContainer-dd32c3b7.js";import"./FramebufferObject-ed33cce4.js";import"./ProgramTemplate-da7f9006.js";import"./GeometryUtils-cf666b71.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-ee9358e2.js";import"./featureConversionUtils-4c659ed1.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-00a07529.js";import"./cimAnalyzer-a10249d4.js";import"./fontUtils-42144027.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-074eea2c.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-a0dc59e7.js";import"./floatRGBA-51fb6cf9.js";import"./ExpandedCIM-9cfbdbef.js";import"./util-c018a817.js";import"./BitmapTileContainer-3acea145.js";import"./Bitmap-6916d168.js";import"./TileContainer-29f9b11c.js";import"./CircularArray-ef508845.js";import"./BufferPool-dabc0029.js";import"./FeatureContainer-1b758af7.js";import"./popupUtils-1ff95f49.js";import"./RefreshableLayerView-8526b31a.js";function g(i,e){return!i.visible||i.minScale!==0&&e>i.minScale||i.maxScale!==0&&e<i.maxScale}let n=class extends b{initialize(){this.addHandles([u(()=>this.view.scale,()=>this._update(),y)],"constructor")}isUpdating(){var p;const i=this.layer.sublayers.some(l=>l.renderer!=null),e=this._commandsQueue.updating,s=this._updatingRequiredFieldsPromise!=null,t=!this._proxy||!this._proxy.isReady,r=this._pipelineIsUpdating,o=this.tileRenderer==null||((p=this.tileRenderer)==null?void 0:p.updating),a=i&&(e||s||t||r||o);return h("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${a}
  -> hasRenderer ${i}
  -> hasPendingCommand ${e}
  -> updatingRequiredFields ${s}
  -> updatingProxy ${t}
  -> updatingPipeline ${r}
  -> updatingTileRenderer ${o}
`),a}_injectOverrides(i){let e=super._injectOverrides(i);const s=this.view.scale,t=this.layer.sublayers.filter(o=>g(o,s)).map(o=>o.subtypeCode);if(!t.length)return e;e=e??new c().toJSON();const r=`NOT ${this.layer.subtypeField} IN (${t.join(",")})`;return e.where=e.where?`(${e.where}) AND (${r})`:r,e}_setLayersForFeature(i){const e=this.layer.fieldsIndex.get(this.layer.subtypeField),s=i.attributes[e.name],t=this.layer.sublayers.find(r=>r.subtypeCode===s);i.layer=i.sourceLayer=t}_createSchemaConfig(){const i={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(r=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:r.labelingInfo,labelsVisible:r.labelsVisible,renderer:r.renderer,subtypeCode:r.subtypeCode,orderBy:null}))},e=this.layer.sublayers.map(r=>r.subtypeCode).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${e})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...i,definitionExpression:t}}};n=m([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],n);const pe=n;export{pe as default};
