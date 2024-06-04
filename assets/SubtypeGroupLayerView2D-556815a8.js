import{F as m,H as d,J as u,P as y,a1 as h,a2 as c}from"./index-34cda61d.js";import b from"./FeatureLayerView2D-e5678287.js";import"./definitions-1347aba7.js";import"./LayerView-ee351242.js";import"./Container-7d8130b2.js";import"./enums-bdecffa2.js";import"./Texture-411087e4.js";import"./AttributeStoreView-181eae40.js";import"./TiledDisplayObject-d93ab1fe.js";import"./color-c12b74e0.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./WGLContainer-0d473fac.js";import"./FramebufferObject-c5fc78ea.js";import"./ProgramTemplate-8488bed7.js";import"./GeometryUtils-416cc9f2.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-4a0507bc.js";import"./featureConversionUtils-a198d4c5.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-4c2763f4.js";import"./cimAnalyzer-60e14e2e.js";import"./fontUtils-a37ef260.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-c58a1652.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-f12b8404.js";import"./floatRGBA-b5f5da20.js";import"./ExpandedCIM-9bd29fba.js";import"./util-5430748d.js";import"./BitmapTileContainer-334cb0b1.js";import"./Bitmap-054bed52.js";import"./TileContainer-f9a0f593.js";import"./CircularArray-ef508845.js";import"./BufferPool-197d804c.js";import"./FeatureContainer-6da53b39.js";import"./popupUtils-ce1123df.js";import"./RefreshableLayerView-7d4f24bf.js";function g(i,e){return!i.visible||i.minScale!==0&&e>i.minScale||i.maxScale!==0&&e<i.maxScale}let n=class extends b{initialize(){this.addHandles([u(()=>this.view.scale,()=>this._update(),y)],"constructor")}isUpdating(){var p;const i=this.layer.sublayers.some(l=>l.renderer!=null),e=this._commandsQueue.updating,s=this._updatingRequiredFieldsPromise!=null,t=!this._proxy||!this._proxy.isReady,r=this._pipelineIsUpdating,o=this.tileRenderer==null||((p=this.tileRenderer)==null?void 0:p.updating),a=i&&(e||s||t||r||o);return h("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${a}
  -> hasRenderer ${i}
  -> hasPendingCommand ${e}
  -> updatingRequiredFields ${s}
  -> updatingProxy ${t}
  -> updatingPipeline ${r}
  -> updatingTileRenderer ${o}
`),a}_injectOverrides(i){let e=super._injectOverrides(i);const s=this.view.scale,t=this.layer.sublayers.filter(o=>g(o,s)).map(o=>o.subtypeCode);if(!t.length)return e;e=e??new c().toJSON();const r=`NOT ${this.layer.subtypeField} IN (${t.join(",")})`;return e.where=e.where?`(${e.where}) AND (${r})`:r,e}_setLayersForFeature(i){const e=this.layer.fieldsIndex.get(this.layer.subtypeField),s=i.attributes[e.name],t=this.layer.sublayers.find(r=>r.subtypeCode===s);i.layer=i.sourceLayer=t}_createSchemaConfig(){const i={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(r=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:r.labelingInfo,labelsVisible:r.labelsVisible,renderer:r.renderer,subtypeCode:r.subtypeCode,orderBy:null}))},e=this.layer.sublayers.map(r=>r.subtypeCode).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${e})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...i,definitionExpression:t}}};n=m([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],n);const pe=n;export{pe as default};