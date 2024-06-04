import{I as m,b as n}from"./utils-06a8baa6.js";import{u as o,i as c,g as p}from"./index-98a329ed.js";import"./originUtils-cfe4feaf.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./jsonContext-802609e4.js";import"./saveAPIKeyUtils-b038cf25.js";const i="Image Service",u="imagery-layer-save",g="imagery-layer-save-as",f="imagery-tile-layer-save",v="imagery-tile-layer-save-as";function s(r){var t;if(r.type==="imagery")return{isValid:!0};const{raster:e}=r,a=(e==null?void 0:e.datasetFormat)==="Function"?(t=e.primaryRasters)==null?void 0:t.rasters[0]:e;return{isValid:(a==null?void 0:a.datasetFormat)==="RasterTileServer"&&(a.tileType==="Raster"||a.tileType==="Map"),errorMessage:"imagery tile layer should be created from a tiled image service."}}function l(r){const e=r.layerJSON;return Promise.resolve(e&&Object.keys(e).length?e:null)}async function d(r,e){const{parsedUrl:a,title:t,fullExtent:y}=r;e.url=a.path,e.title||(e.title=t),e.extent=await o(y),r.type==="imagery-tile"&&c(e,p.TILED_IMAGERY)}async function h(r,e){const a=r.type==="imagery"?u:f;return m({layer:r,itemType:i,validateLayer:s,createItemData:l,errorNamePrefix:a},e)}async function D(r,e,a){const t=r.type==="imagery"?g:v;return n({layer:r,itemType:i,validateLayer:s,createItemData:l,errorNamePrefix:t,newItem:e,setItemProperties:d},a)}export{h as save,D as saveAs};
