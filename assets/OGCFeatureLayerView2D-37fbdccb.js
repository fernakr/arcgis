import{F as t,G as p,H as e}from"./index-cdf69f36.js";import a from"./FeatureLayerView2D-172e84c1.js";import"./definitions-eba50215.js";import"./LayerView-384e2573.js";import"./Container-7bafc118.js";import"./enums-bdecffa2.js";import"./Texture-4ee49a9f.js";import"./AttributeStoreView-49c0d98e.js";import"./TiledDisplayObject-a41da2a0.js";import"./color-9054a86e.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./WGLContainer-e978ac2e.js";import"./FramebufferObject-32003335.js";import"./ProgramTemplate-b0743a30.js";import"./GeometryUtils-fd0f8ba8.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-adc00ba5.js";import"./featureConversionUtils-e1010ffb.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-77f475fd.js";import"./cimAnalyzer-b1f151f7.js";import"./fontUtils-51011e9c.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-0c908705.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-73ecda2d.js";import"./floatRGBA-b8cf594d.js";import"./ExpandedCIM-eb3c19b3.js";import"./util-4c6b6efd.js";import"./BitmapTileContainer-6e541105.js";import"./Bitmap-71881aec.js";import"./TileContainer-22451a4c.js";import"./CircularArray-ef508845.js";import"./BufferPool-8e715b15.js";import"./FeatureContainer-e27574d8.js";import"./popupUtils-06867166.js";import"./RefreshableLayerView-73b9895f.js";const s=i=>{let r=class extends i{get availableFields(){return this.layer.fieldsIndex.fields.map(m=>m.name)}};return t([p()],r.prototype,"layer",void 0),t([p({readOnly:!0})],r.prototype,"availableFields",null),r=t([e("esri.views.layers.OGCFeatureLayerView")],r),r};let o=class extends s(a){supportsSpatialReference(i){return this.layer.serviceSupportsSpatialReference(i)}};o=t([e("esri.views.2d.layers.OGCFeatureLayerView2D")],o);const $=o;export{$ as default};