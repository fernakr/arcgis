import{F as t,G as p,H as e}from"./index-0dd4b1c4.js";import a from"./FeatureLayerView2D-35f5433a.js";import"./definitions-03efbf21.js";import"./LayerView-da9ddbdb.js";import"./Container-a69b5afb.js";import"./enums-bdecffa2.js";import"./Texture-585b9804.js";import"./AttributeStoreView-a4783192.js";import"./TiledDisplayObject-052ee98a.js";import"./color-2af27954.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./WGLContainer-e0bd9c44.js";import"./FramebufferObject-f933361c.js";import"./ProgramTemplate-57476d93.js";import"./GeometryUtils-e4823541.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-038e5cda.js";import"./featureConversionUtils-c62affbb.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-25165d50.js";import"./cimAnalyzer-fce0ab81.js";import"./fontUtils-4d5fb79d.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-f81f09e9.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-78cd16f4.js";import"./floatRGBA-a8507788.js";import"./ExpandedCIM-8e5d472b.js";import"./util-93976bcd.js";import"./BitmapTileContainer-0c0c4466.js";import"./Bitmap-1d69efab.js";import"./TileContainer-6b946220.js";import"./CircularArray-ef508845.js";import"./BufferPool-af60ba7b.js";import"./FeatureContainer-dd9c9d52.js";import"./popupUtils-ab129257.js";import"./RefreshableLayerView-a3691908.js";const s=i=>{let r=class extends i{get availableFields(){return this.layer.fieldsIndex.fields.map(m=>m.name)}};return t([p()],r.prototype,"layer",void 0),t([p({readOnly:!0})],r.prototype,"availableFields",null),r=t([e("esri.views.layers.OGCFeatureLayerView")],r),r};let o=class extends s(a){supportsSpatialReference(i){return this.layer.serviceSupportsSpatialReference(i)}};o=t([e("esri.views.2d.layers.OGCFeatureLayerView2D")],o);const $=o;export{$ as default};