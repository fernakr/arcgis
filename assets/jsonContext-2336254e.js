import{I as e,j as o}from"./index-3f4f2f72.js";function i(t){return{origin:"portal-item",url:e(t.itemUrl),portal:t.portal||o.getDefault(),portalItem:t,readResourcePaths:[]}}function n(t){const r=e(t.itemUrl);return{origin:"portal-item",messages:[],writtenProperties:[],url:r,portal:t.portal||o.getDefault(),portalItem:t,verifyItemRelativeUrls:r?{rootPath:r.path,writtenUrls:[]}:null,blockedRelativeUrls:[]}}function p(t){return{origin:"web-map",url:e(t.itemUrl),portal:t.portal||o.getDefault(),portalItem:t,readResourcePaths:[]}}function s(t,r){const l=e(t.itemUrl);return{origin:"web-map",messages:[],writtenProperties:[],url:l,portal:t.portal||o.getDefault(),portalItem:t,initiator:r,verifyItemRelativeUrls:l?{rootPath:l.path,writtenUrls:[]}:null,blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}}}export{s as a,i as e,p as l,n as o};
