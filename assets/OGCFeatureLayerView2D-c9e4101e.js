import{F as t,G as p,H as e}from"./index-b1de92dd.js";import a from"./FeatureLayerView2D-8a8e82f2.js";import"./definitions-2c27d0b7.js";import"./LayerView-d5db53eb.js";import"./Container-945bd996.js";import"./enums-bdecffa2.js";import"./Texture-46909090.js";import"./AttributeStoreView-f7e87fd3.js";import"./TiledDisplayObject-aad630a8.js";import"./color-fd4b99b8.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./WGLContainer-97234da9.js";import"./FramebufferObject-b81dd1d4.js";import"./ProgramTemplate-d64d3aed.js";import"./GeometryUtils-4544060c.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-d528aa83.js";import"./featureConversionUtils-c440e28e.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-ff289c3e.js";import"./cimAnalyzer-7839a604.js";import"./fontUtils-62393e60.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-a1ab1a9e.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-769e59ad.js";import"./floatRGBA-98e1e6fe.js";import"./ExpandedCIM-5390ef98.js";import"./util-998051f8.js";import"./BitmapTileContainer-087acfa7.js";import"./Bitmap-c1c55e57.js";import"./TileContainer-127f9af8.js";import"./CircularArray-ef508845.js";import"./BufferPool-b975361b.js";import"./FeatureContainer-16f2b7f2.js";import"./popupUtils-8e5c0d2c.js";import"./RefreshableLayerView-6b512db6.js";const s=i=>{let r=class extends i{get availableFields(){return this.layer.fieldsIndex.fields.map(m=>m.name)}};return t([p()],r.prototype,"layer",void 0),t([p({readOnly:!0})],r.prototype,"availableFields",null),r=t([e("esri.views.layers.OGCFeatureLayerView")],r),r};let o=class extends s(a){supportsSpatialReference(i){return this.layer.serviceSupportsSpatialReference(i)}};o=t([e("esri.views.2d.layers.OGCFeatureLayerView2D")],o);const $=o;export{$ as default};
