import{F as t,G as p,H as e}from"./index-12a23f8f.js";import a from"./FeatureLayerView2D-e5aea254.js";import"./Container-32966a35.js";import"./definitions-81a14670.js";import"./enums-bdecffa2.js";import"./Texture-112dea01.js";import"./LayerView-12613381.js";import"./scaleUtils-dff3c467.js";import"./AttributeStoreView-31552075.js";import"./TiledDisplayObject-f5f785fe.js";import"./color-64e9e29b.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./WGLContainer-61563beb.js";import"./FramebufferObject-eafad06d.js";import"./ProgramTemplate-d6dd973d.js";import"./GeometryUtils-dd49d312.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-930b2254.js";import"./featureConversionUtils-6e3aaf33.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./visualVariablesUtils-90c2aed5.js";import"./ExpandedCIM-f92b0e9f.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./utils-9fb68141.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-84e07faa.js";import"./floatRGBA-c851a2c2.js";import"./util-9f2f1fb1.js";import"./BitmapTileContainer-de8fbdc0.js";import"./Bitmap-4c7f0f15.js";import"./TileContainer-83f45892.js";import"./CircularArray-ef508845.js";import"./BufferPool-f61e14f2.js";import"./FeatureContainer-074590b8.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-08e4cacb.js";import"./RefreshableLayerView-29df7f53.js";const s=i=>{let r=class extends i{get availableFields(){return this.layer.fieldsIndex.fields.map(m=>m.name)}};return t([p()],r.prototype,"layer",void 0),t([p({readOnly:!0})],r.prototype,"availableFields",null),r=t([e("esri.views.layers.OGCFeatureLayerView")],r),r};let o=class extends s(a){supportsSpatialReference(i){return this.layer.serviceSupportsSpatialReference(i)}};o=t([e("esri.views.2d.layers.OGCFeatureLayerView2D")],o);const Y=o;export{Y as default};