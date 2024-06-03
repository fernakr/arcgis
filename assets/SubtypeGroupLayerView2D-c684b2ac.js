import{F as m,H as d,J as u,P as y,a1 as h,a2 as c}from"./index-3f4f2f72.js";import b from"./FeatureLayerView2D-f84e42da.js";import"./definitions-90fc683e.js";import"./LayerView-674b4a9a.js";import"./Container-36af1642.js";import"./enums-bdecffa2.js";import"./Texture-d1bd8e31.js";import"./AttributeStoreView-e0a9a73b.js";import"./TiledDisplayObject-dfd59b45.js";import"./color-f45feb47.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./WGLContainer-9e17e7ce.js";import"./FramebufferObject-1bbb28fe.js";import"./ProgramTemplate-4bdb7173.js";import"./GeometryUtils-172b796e.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-c94eb856.js";import"./featureConversionUtils-d6208516.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-202dad20.js";import"./cimAnalyzer-d2466652.js";import"./fontUtils-1b1814c8.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-f2b94dc5.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-b8c275a1.js";import"./floatRGBA-f1f0d7a4.js";import"./ExpandedCIM-38e0e9e3.js";import"./util-b46a3e55.js";import"./BitmapTileContainer-65a59b54.js";import"./Bitmap-edae020e.js";import"./TileContainer-b14f110f.js";import"./CircularArray-ef508845.js";import"./BufferPool-1f13a84e.js";import"./FeatureContainer-b0e73d75.js";import"./popupUtils-fe518c1d.js";import"./RefreshableLayerView-57c92896.js";function g(i,e){return!i.visible||i.minScale!==0&&e>i.minScale||i.maxScale!==0&&e<i.maxScale}let n=class extends b{initialize(){this.addHandles([u(()=>this.view.scale,()=>this._update(),y)],"constructor")}isUpdating(){var p;const i=this.layer.sublayers.some(l=>l.renderer!=null),e=this._commandsQueue.updating,s=this._updatingRequiredFieldsPromise!=null,t=!this._proxy||!this._proxy.isReady,r=this._pipelineIsUpdating,o=this.tileRenderer==null||((p=this.tileRenderer)==null?void 0:p.updating),a=i&&(e||s||t||r||o);return h("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${a}
  -> hasRenderer ${i}
  -> hasPendingCommand ${e}
  -> updatingRequiredFields ${s}
  -> updatingProxy ${t}
  -> updatingPipeline ${r}
  -> updatingTileRenderer ${o}
`),a}_injectOverrides(i){let e=super._injectOverrides(i);const s=this.view.scale,t=this.layer.sublayers.filter(o=>g(o,s)).map(o=>o.subtypeCode);if(!t.length)return e;e=e??new c().toJSON();const r=`NOT ${this.layer.subtypeField} IN (${t.join(",")})`;return e.where=e.where?`(${e.where}) AND (${r})`:r,e}_setLayersForFeature(i){const e=this.layer.fieldsIndex.get(this.layer.subtypeField),s=i.attributes[e.name],t=this.layer.sublayers.find(r=>r.subtypeCode===s);i.layer=i.sourceLayer=t}_createSchemaConfig(){const i={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(r=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:r.labelingInfo,labelsVisible:r.labelsVisible,renderer:r.renderer,subtypeCode:r.subtypeCode,orderBy:null}))},e=this.layer.sublayers.map(r=>r.subtypeCode).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${e})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...i,definitionExpression:t}}};n=m([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],n);const pe=n;export{pe as default};