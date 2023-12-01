import{A as m,C as d,D as u,P as y,Y as h,Z as c}from"./index-8a7d0ddb.js";import b from"./FeatureLayerView2D-ac22cc66.js";import"./Container-e3e1f850.js";import"./definitions-181aacbc.js";import"./enums-bdecffa2.js";import"./Texture-276891d4.js";import"./LayerView-c208e979.js";import"./scaleUtils-bb2ad117.js";import"./AttributeStoreView-e7acbf82.js";import"./TiledDisplayObject-a16a6043.js";import"./color-66a81566.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./WGLContainer-ee25c10b.js";import"./FramebufferObject-bee5421c.js";import"./ProgramTemplate-a8c46b04.js";import"./GeometryUtils-a163e449.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-7c5e4cbe.js";import"./featureConversionUtils-8b26ee93.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./visualVariablesUtils-f801a5b9.js";import"./ExpandedCIM-e2ecad80.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./utils-c8352706.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-d2ecb0cf.js";import"./floatRGBA-e76f1a93.js";import"./util-de2a9e3f.js";import"./BitmapTileContainer-f68856e9.js";import"./Bitmap-568b12ce.js";import"./TileContainer-e01d67f6.js";import"./CircularArray-ef508845.js";import"./BufferPool-42343b92.js";import"./FeatureContainer-ae205864.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-a7e74ce3.js";import"./RefreshableLayerView-350224e6.js";function g(i,e){return!i.visible||i.minScale!==0&&e>i.minScale||i.maxScale!==0&&e<i.maxScale}let n=class extends b{initialize(){this.addHandles([u(()=>this.view.scale,()=>this._update(),y)],"constructor")}isUpdating(){var p;const i=this.layer.sublayers.some(l=>l.renderer!=null),e=this._commandsQueue.updating,s=this._updatingRequiredFieldsPromise!=null,t=!this._proxy||!this._proxy.isReady,r=this._pipelineIsUpdating,o=this.tileRenderer==null||((p=this.tileRenderer)==null?void 0:p.updating),a=i&&(e||s||t||r||o);return h("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${a}
  -> hasRenderer ${i}
  -> hasPendingCommand ${e}
  -> updatingRequiredFields ${s}
  -> updatingProxy ${t}
  -> updatingPipeline ${r}
  -> updatingTileRenderer ${o}
`),a}_injectOverrides(i){let e=super._injectOverrides(i);const s=this.view.scale,t=this.layer.sublayers.filter(o=>g(o,s)).map(o=>o.subtypeCode);if(!t.length)return e;e=e??new c().toJSON();const r=`NOT ${this.layer.subtypeField} IN (${t.join(",")})`;return e.where=e.where?`(${e.where}) AND (${r})`:r,e}_setLayersForFeature(i){const e=this.layer.fieldsIndex.get(this.layer.subtypeField),s=i.attributes[e.name],t=this.layer.sublayers.find(r=>r.subtypeCode===s);i.layer=i.sourceLayer=t}_createSchemaConfig(){const i={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(r=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:r.labelingInfo,labelsVisible:r.labelsVisible,renderer:r.renderer,subtypeCode:r.subtypeCode,orderBy:null}))},e=this.layer.sublayers.map(r=>r.subtypeCode).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${e})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...i,definitionExpression:t}}};n=m([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],n);const oe=n;export{oe as default};