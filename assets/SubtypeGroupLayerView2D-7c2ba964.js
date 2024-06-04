import{F as m,H as d,J as u,P as y,a1 as h,a2 as c}from"./index-994ee346.js";import b from"./FeatureLayerView2D-c8ae97a2.js";import"./definitions-63b730da.js";import"./LayerView-8bc55094.js";import"./Container-20a1e59f.js";import"./enums-bdecffa2.js";import"./Texture-184d16e2.js";import"./AttributeStoreView-d75a2f22.js";import"./TiledDisplayObject-9e3b5b8f.js";import"./color-c0eea5ad.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./WGLContainer-4482cbb5.js";import"./FramebufferObject-d85900a3.js";import"./ProgramTemplate-37609082.js";import"./GeometryUtils-be62b3f9.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-4a44eaa5.js";import"./featureConversionUtils-a2ee31db.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-40faaaa4.js";import"./cimAnalyzer-1bb4b7dd.js";import"./fontUtils-49904cec.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-e33eda13.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-8a604a4d.js";import"./floatRGBA-401ee15e.js";import"./ExpandedCIM-771ef486.js";import"./util-4e5d796d.js";import"./BitmapTileContainer-b6595a75.js";import"./Bitmap-95838629.js";import"./TileContainer-513958cf.js";import"./CircularArray-ef508845.js";import"./BufferPool-34c1fc21.js";import"./FeatureContainer-e211d540.js";import"./popupUtils-01559aa0.js";import"./RefreshableLayerView-6abc0323.js";function g(i,e){return!i.visible||i.minScale!==0&&e>i.minScale||i.maxScale!==0&&e<i.maxScale}let n=class extends b{initialize(){this.addHandles([u(()=>this.view.scale,()=>this._update(),y)],"constructor")}isUpdating(){var p;const i=this.layer.sublayers.some(l=>l.renderer!=null),e=this._commandsQueue.updating,s=this._updatingRequiredFieldsPromise!=null,t=!this._proxy||!this._proxy.isReady,r=this._pipelineIsUpdating,o=this.tileRenderer==null||((p=this.tileRenderer)==null?void 0:p.updating),a=i&&(e||s||t||r||o);return h("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${a}
  -> hasRenderer ${i}
  -> hasPendingCommand ${e}
  -> updatingRequiredFields ${s}
  -> updatingProxy ${t}
  -> updatingPipeline ${r}
  -> updatingTileRenderer ${o}
`),a}_injectOverrides(i){let e=super._injectOverrides(i);const s=this.view.scale,t=this.layer.sublayers.filter(o=>g(o,s)).map(o=>o.subtypeCode);if(!t.length)return e;e=e??new c().toJSON();const r=`NOT ${this.layer.subtypeField} IN (${t.join(",")})`;return e.where=e.where?`(${e.where}) AND (${r})`:r,e}_setLayersForFeature(i){const e=this.layer.fieldsIndex.get(this.layer.subtypeField),s=i.attributes[e.name],t=this.layer.sublayers.find(r=>r.subtypeCode===s);i.layer=i.sourceLayer=t}_createSchemaConfig(){const i={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(r=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:r.labelingInfo,labelsVisible:r.labelsVisible,renderer:r.renderer,subtypeCode:r.subtypeCode,orderBy:null}))},e=this.layer.sublayers.map(r=>r.subtypeCode).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${e})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...i,definitionExpression:t}}};n=m([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],n);const pe=n;export{pe as default};
