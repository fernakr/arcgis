import{F as t,G as p,H as e}from"./index-9762d29e.js";import a from"./FeatureLayerView2D-eb1a91bb.js";import"./definitions-8ac54cf0.js";import"./LayerView-7c2ae353.js";import"./Container-397ab820.js";import"./enums-bdecffa2.js";import"./Texture-367f0a32.js";import"./AttributeStoreView-99c500cf.js";import"./TiledDisplayObject-3303a832.js";import"./color-28b049aa.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./WGLContainer-bcbb569b.js";import"./FramebufferObject-73c0729f.js";import"./ProgramTemplate-7d064a06.js";import"./GeometryUtils-a273db93.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-367b5789.js";import"./featureConversionUtils-ca303552.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-66ee7ab0.js";import"./cimAnalyzer-5fbbaa5c.js";import"./fontUtils-241f2cc4.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-2b9fbefe.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-84a1ae54.js";import"./floatRGBA-9b7b4649.js";import"./ExpandedCIM-637c7c3b.js";import"./util-42fe6801.js";import"./BitmapTileContainer-46403008.js";import"./Bitmap-bea1d240.js";import"./TileContainer-8142c284.js";import"./CircularArray-ef508845.js";import"./BufferPool-b15dedaa.js";import"./FeatureContainer-c117373e.js";import"./popupUtils-f8692832.js";import"./RefreshableLayerView-17006814.js";const s=i=>{let r=class extends i{get availableFields(){return this.layer.fieldsIndex.fields.map(m=>m.name)}};return t([p()],r.prototype,"layer",void 0),t([p({readOnly:!0})],r.prototype,"availableFields",null),r=t([e("esri.views.layers.OGCFeatureLayerView")],r),r};let o=class extends s(a){supportsSpatialReference(i){return this.layer.serviceSupportsSpatialReference(i)}};o=t([e("esri.views.2d.layers.OGCFeatureLayerView2D")],o);const $=o;export{$ as default};