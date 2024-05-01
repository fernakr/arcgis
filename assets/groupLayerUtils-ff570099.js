import{I as l,b as p}from"./utils-f869f030.js";import{a as s}from"./jsonContext-4c1f5308.js";import{i as y,g as f,b as v}from"./index-aa00a0dc.js";import{u as i}from"./saveUtils-7ac1d4ec.js";import"./originUtils-cfe4feaf.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./saveAPIKeyUtils-85a757be.js";import"./resourceUtils-c2cf4877.js";const n="Group Layer",d="group-layer-save",I="group-layer-save-as",o=f.GROUP_LAYER_MAP;function c(e){return{isValid:e.type==="group",errorMessage:"Layer.type should be 'group'"}}function g(e){return{isValid:v(e,o),errorMessage:`Layer.portalItem.typeKeywords should have '${o}'`}}function u(e){const r=e.layerJSON;return Promise.resolve(r&&Object.keys(r).length?r:null)}async function P(e,r){r.title||(r.title=e.title),y(r,o)}async function $(e,r){return l({layer:e,itemType:n,validateLayer:c,validateItem:g,createJSONContext:t=>s(t,e),createItemData:u,errorNamePrefix:d,saveResources:async(t,a)=>(e.sourceIsPortalItem||await t.removeAllResources().catch(()=>{}),i(e.resourceReferences,a))},r)}async function w(e,r,t){return p({layer:e,itemType:n,validateLayer:c,createJSONContext:a=>s(a,e),createItemData:u,errorNamePrefix:I,newItem:r,setItemProperties:P,saveResources:(a,m)=>i(e.resourceReferences,m)},t)}export{$ as save,w as saveAs};
