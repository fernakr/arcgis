import{F as t,G as p,H as e}from"./index-dade14c2.js";import a from"./FeatureLayerView2D-09e80180.js";import"./definitions-0509da3e.js";import"./LayerView-764b83bc.js";import"./Container-30b1bd37.js";import"./enums-bdecffa2.js";import"./Texture-be9b5d1c.js";import"./AttributeStoreView-a010b8c1.js";import"./TiledDisplayObject-1d3f4e42.js";import"./color-2a6af067.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./WGLContainer-fb0ff87f.js";import"./FramebufferObject-4b1219b6.js";import"./ProgramTemplate-f3cf6f84.js";import"./GeometryUtils-df0db2f3.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-5406b9f6.js";import"./featureConversionUtils-98930eb8.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-c0074acc.js";import"./cimAnalyzer-604dca85.js";import"./fontUtils-f896f516.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-251dae52.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-a73da41e.js";import"./floatRGBA-6bd81ad0.js";import"./ExpandedCIM-5e6311a6.js";import"./util-563277c5.js";import"./BitmapTileContainer-37cdd272.js";import"./Bitmap-b10bd5a9.js";import"./TileContainer-1f0bf5f3.js";import"./CircularArray-ef508845.js";import"./BufferPool-3bb24936.js";import"./FeatureContainer-c7385c1a.js";import"./popupUtils-eabdd2fa.js";import"./RefreshableLayerView-638803e0.js";const s=i=>{let r=class extends i{get availableFields(){return this.layer.fieldsIndex.fields.map(m=>m.name)}};return t([p()],r.prototype,"layer",void 0),t([p({readOnly:!0})],r.prototype,"availableFields",null),r=t([e("esri.views.layers.OGCFeatureLayerView")],r),r};let o=class extends s(a){supportsSpatialReference(i){return this.layer.serviceSupportsSpatialReference(i)}};o=t([e("esri.views.2d.layers.OGCFeatureLayerView2D")],o);const $=o;export{$ as default};
