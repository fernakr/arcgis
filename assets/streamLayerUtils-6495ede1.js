import{I as o,b as m}from"./utils-f869f030.js";import{u,i as c,g as y}from"./index-aa00a0dc.js";import"./originUtils-cfe4feaf.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./jsonContext-4c1f5308.js";import"./saveAPIKeyUtils-85a757be.js";const s="Stream Service",p="stream-layer-save",f="stream-layer-save-as";function i(r){return{isValid:r.type==="stream"&&!!r.url&&!r.webSocketUrl,errorMessage:"Stream layer should be created using a url to a stream service"}}function n(r){const e=r.layerJSON;return Promise.resolve(e&&Object.keys(e).length?e:null)}async function v(r,e){const{parsedUrl:t,title:l,fullExtent:a}=r;e.url=t.path,e.title||(e.title=l),e.extent=null,a!=null&&(e.extent=await u(a)),c(e,y.SINGLE_LAYER)}async function L(r,e){return o({layer:r,itemType:s,validateLayer:i,createItemData:n,errorNamePrefix:p},e)}async function N(r,e,t){return m({layer:r,itemType:s,validateLayer:i,createItemData:n,errorNamePrefix:f,newItem:e,setItemProperties:v},t)}export{L as save,N as saveAs};
