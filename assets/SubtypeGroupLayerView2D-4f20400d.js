import{F as m,H as d,J as u,P as y,a1 as h,a2 as c}from"./index-b42b51f4.js";import b from"./FeatureLayerView2D-4223af0d.js";import"./definitions-bd91c74e.js";import"./LayerView-5533f0af.js";import"./Container-7092958d.js";import"./enums-bdecffa2.js";import"./Texture-c4373a43.js";import"./AttributeStoreView-d7431c24.js";import"./TiledDisplayObject-084ff05f.js";import"./color-7c3d4c52.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./WGLContainer-0bd2f570.js";import"./FramebufferObject-d023aa56.js";import"./ProgramTemplate-29ee3d2c.js";import"./GeometryUtils-99b185b3.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-0f846efb.js";import"./featureConversionUtils-a6fdc429.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-fba68e3c.js";import"./cimAnalyzer-796a97a9.js";import"./fontUtils-21e9c5c5.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-4750dcfd.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-b62f8e27.js";import"./floatRGBA-051e168c.js";import"./ExpandedCIM-86344f8a.js";import"./util-b3041282.js";import"./BitmapTileContainer-ffe2b16a.js";import"./Bitmap-b2122a4e.js";import"./TileContainer-d60709b9.js";import"./CircularArray-ef508845.js";import"./BufferPool-3674f5b6.js";import"./FeatureContainer-5c44643c.js";import"./popupUtils-e951396e.js";import"./RefreshableLayerView-6053c661.js";function g(i,e){return!i.visible||i.minScale!==0&&e>i.minScale||i.maxScale!==0&&e<i.maxScale}let n=class extends b{initialize(){this.addHandles([u(()=>this.view.scale,()=>this._update(),y)],"constructor")}isUpdating(){var p;const i=this.layer.sublayers.some(l=>l.renderer!=null),e=this._commandsQueue.updating,s=this._updatingRequiredFieldsPromise!=null,t=!this._proxy||!this._proxy.isReady,r=this._pipelineIsUpdating,o=this.tileRenderer==null||((p=this.tileRenderer)==null?void 0:p.updating),a=i&&(e||s||t||r||o);return h("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${a}
  -> hasRenderer ${i}
  -> hasPendingCommand ${e}
  -> updatingRequiredFields ${s}
  -> updatingProxy ${t}
  -> updatingPipeline ${r}
  -> updatingTileRenderer ${o}
`),a}_injectOverrides(i){let e=super._injectOverrides(i);const s=this.view.scale,t=this.layer.sublayers.filter(o=>g(o,s)).map(o=>o.subtypeCode);if(!t.length)return e;e=e??new c().toJSON();const r=`NOT ${this.layer.subtypeField} IN (${t.join(",")})`;return e.where=e.where?`(${e.where}) AND (${r})`:r,e}_setLayersForFeature(i){const e=this.layer.fieldsIndex.get(this.layer.subtypeField),s=i.attributes[e.name],t=this.layer.sublayers.find(r=>r.subtypeCode===s);i.layer=i.sourceLayer=t}_createSchemaConfig(){const i={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(r=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:r.labelingInfo,labelsVisible:r.labelsVisible,renderer:r.renderer,subtypeCode:r.subtypeCode,orderBy:null}))},e=this.layer.sublayers.map(r=>r.subtypeCode).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${e})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...i,definitionExpression:t}}};n=m([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],n);const pe=n;export{pe as default};
