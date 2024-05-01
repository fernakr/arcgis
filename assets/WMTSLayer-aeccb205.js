import{F as o,G as u,bd as A,cb as z,H as N,aa as Q,bT as R,V as J,s as _,b0 as ge,e7 as we,i7 as B,i8 as xe,t as de,bO as ve,dr as Se,bP as Me,ds as Ie,dt as Te,du as Le,J as ie,eC as j,$ as se,bY as ae,i9 as be,ae as K,aX as le,I as G,e8 as Ee,bU as Pe,bS as Ce}from"./index-12a23f8f.js";import{p as Re,I as Oe}from"./WebTileLayer-f80cbe70.js";import{o as oe}from"./imageBitmapUtils-75400143.js";import{e as Ae}from"./TileInfoTilemapCache-8e1e3f7e.js";import{o as Z}from"./crsUtils-3bab3d8c.js";import{o as ne}from"./xmlUtils-444cb4c0.js";var q;let F=q=class extends Q{constructor(e){super(e),this.fullExtent=null,this.id=null,this.tileInfo=null}clone(){const e=new q;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e}};o([u({type:A,json:{read:{source:"fullExtent"}}})],F.prototype,"fullExtent",void 0),o([u({type:String,json:{read:{source:"id"}}})],F.prototype,"id",void 0),o([u({type:z,json:{read:{source:"tileInfo"}}})],F.prototype,"tileInfo",void 0),F=q=o([N("esri.layer.support.TileMatrixSet")],F);const Fe=F;var H;let b=H=class extends Q{constructor(e){super(e),this.id=null,this.title=null,this.description=null,this.legendUrl=null}clone(){const e=new H;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e}};o([u({json:{read:{source:"id"}}})],b.prototype,"id",void 0),o([u({json:{read:{source:"title"}}})],b.prototype,"title",void 0),o([u({json:{read:{source:"abstract"}}})],b.prototype,"description",void 0),o([u({json:{read:{source:"legendUrl"}}})],b.prototype,"legendUrl",void 0),o([u({json:{read:{source:"isDefault"}}})],b.prototype,"isDefault",void 0),o([u({json:{read:{source:"keywords"}}})],b.prototype,"keywords",void 0),b=H=o([N("esri.layer.support.WMTSStyle")],b);const $e=b;var X;let x=X=class extends Q{constructor(e){super(e),this.description=null,this.fullExtent=null,this.fullExtents=null,this.id=null,this.imageFormats=null,this.layer=null,this.parent=null,this.styles=null,this.title=null,this.tileMatrixSetId=null,this.tileMatrixSets=null}readFullExtent(e,t){return(e=t.fullExtent)?A.fromJSON(e):null}readFullExtents(e,t){var r,i;return(r=t.fullExtents)!=null&&r.length?t.fullExtents.map(s=>A.fromJSON(s)):((i=t.tileMatrixSets)==null?void 0:i.map(s=>A.fromJSON(s.fullExtent)).filter(s=>s))??[]}get imageFormat(){let e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e}set imageFormat(e){const t=this.imageFormats;e&&(e.includes("image/")||t&&!t.includes(e))&&(e.includes("image/")||(e="image/"+e),t&&!t.includes(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)}get styleId(){var t,r;let e=this._get("styleId");return e||(e=((r=(t=this.styles)==null?void 0:t.at(0))==null?void 0:r.id)??""),e}set styleId(e){this._set("styleId",e)}get tileMatrixSet(){return this.tileMatrixSets?this.tileMatrixSets.find(e=>e.id===this.tileMatrixSetId):null}clone(){var t,r,i;const e=new X;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("imageFormats")&&(e.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(e.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(e.fullExtent=(t=this.fullExtent)==null?void 0:t.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("styleId")&&(e.styleId=this.styleId),this.hasOwnProperty("styles")&&(e.styles=(r=this.styles)==null?void 0:r.clone()),this.hasOwnProperty("tileMatrixSetId")&&(e.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(e.tileMatrixSets=(i=this.tileMatrixSets)==null?void 0:i.clone()),this.hasOwnProperty("title")&&(e.title=this.title),e}};o([u()],x.prototype,"description",void 0),o([u()],x.prototype,"fullExtent",void 0),o([R("fullExtent",["fullExtent"])],x.prototype,"readFullExtent",null),o([u({readOnly:!0})],x.prototype,"fullExtents",void 0),o([R("fullExtents",["fullExtents","tileMatrixSets"])],x.prototype,"readFullExtents",null),o([u()],x.prototype,"id",void 0),o([u()],x.prototype,"imageFormat",null),o([u({json:{read:{source:"formats"}}})],x.prototype,"imageFormats",void 0),o([u()],x.prototype,"layer",void 0),o([u()],x.prototype,"parent",void 0),o([u()],x.prototype,"styleId",null),o([u({type:J.ofType($e),json:{read:{source:"styles"}}})],x.prototype,"styles",void 0),o([u({json:{write:{ignoreOrigin:!0}}})],x.prototype,"title",void 0),o([u()],x.prototype,"tileMatrixSetId",void 0),o([u({readOnly:!0})],x.prototype,"tileMatrixSet",null),o([u({type:J.ofType(Fe),json:{read:{source:"tileMatrixSets"}}})],x.prototype,"tileMatrixSets",void 0),x=X=o([N("esri.layers.support.WMTSSublayer")],x);const U=x,me=90.71428571428571;function ue(e){const t=e.replaceAll(/ows:/gi,"");if(!g("Contents",new DOMParser().parseFromString(t,"text/xml").documentElement))throw new _("wmtslayer:wmts-capabilities-xml-is-not-valid","the wmts get capabilities response is not compliant",{text:e})}function Ve(e,t){var re;e=e.replaceAll(/ows:/gi,"");const r=new DOMParser().parseFromString(e,"text/xml").documentElement,i=new Map,s=new Map,l=g("Contents",r);if(!l)throw new _("wmtslayer:wmts-capabilities-xml-is-not-valid");const a=g("OperationsMetadata",r),n=a==null?void 0:a.querySelector("[name='GetTile']"),p=n==null?void 0:n.getElementsByTagName("Get"),c=p&&Array.prototype.slice.call(p),h=(re=t.url)==null?void 0:re.indexOf("https"),f=h!==void 0&&h>-1;let d,w,S=t.serviceMode,v=t==null?void 0:t.url;if(c!=null&&c.length&&c.some(T=>{const L=g("Constraint",T);return!L||$("AllowedValues","Value",S,L)?(v=T.attributes[0].nodeValue,!0):(!L||$("AllowedValues","Value","RESTful",L)||$("AllowedValues","Value","REST",L)?w=T.attributes[0].nodeValue:L&&!$("AllowedValues","Value","KVP",L)||(d=T.attributes[0].nodeValue),!1)}),!v)if(w)v=w,S="RESTful";else if(d)v=d,S="KVP";else{const T=g("ServiceMetadataURL",r);v=T==null?void 0:T.getAttribute("xlink:href")}const E=v.indexOf("1.0.0/");E===-1&&S==="RESTful"?v+="/":E>-1&&(v=v.substring(0,E)),S==="KVP"&&(v+=E>-1?"":"?"),f&&(v=v.replace(/^http:/i,"https:"));const M=y("ServiceIdentification>ServiceTypeVersion",r),I=y("ServiceIdentification>AccessConstraints",r),P=I&&/^none$/i.test(I)?null:I,k=C("Layer",l),W=C("TileMatrixSet",l),D=k.map(T=>{const L=y("Identifier",T);return i.set(L,T),je(L,T,W,f,M)});return{copyright:P,dimensionMap:s,layerMap:i,layers:D,serviceMode:S,tileUrl:v}}function Ue(e){return e.layers.forEach(t=>{var r;(r=t.tileMatrixSets)==null||r.forEach(i=>{var l;const s=i.tileInfo;s&&s.dpi!==96&&((l=s.lods)==null||l.forEach(a=>{var n;a.scale=96*a.scale/s.dpi,a.resolution=fe((n=s.spatialReference)==null?void 0:n.wkid,a.scale*me/96,i.id)}),s.dpi=96)})}),e}function ee(e){return e.nodeType===Node.ELEMENT_NODE}function g(e,t){for(let r=0;r<t.childNodes.length;r++){const i=t.childNodes[r];if(ee(i)&&i.nodeName===e)return i}return null}function C(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];ee(s)&&s.nodeName===e&&r.push(s)}return r}function O(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];ee(s)&&s.nodeName===e&&r.push(s)}return r.map(i=>i.textContent).filter(de)}function y(e,t){return e.split(">").forEach(r=>{t&&(t=g(r,t))}),t&&t.textContent}function $(e,t,r,i){let s;return Array.prototype.slice.call(i.childNodes).some(l=>{if(l.nodeName.includes(e)){const a=g(t,l),n=a==null?void 0:a.textContent;if(n===r||r.split(":")&&r.split(":")[1]===n)return s=l,!0}return!1}),s}function je(e,t,r,i,s){const l=y("Abstract",t),a=O("Format",t);return{id:e,fullExtent:We(t),fullExtents:De(t),description:l,formats:a,styles:Be(t,i),title:y("Title",t),tileMatrixSets:Ke(s,t,r)}}function he(e,t){var h;const r=[],i=(h=e.layerMap)==null?void 0:h.get(t);if(!i)return null;const s=C("ResourceURL",i),l=C("Dimension",i);let a,n,p,c;return l.length&&(a=y("Identifier",l[0]),n=O("Default",l[0])||O("Value",l[0])),l.length>1&&(p=y("Identifier",l[1]),c=O("Default",l[1])||O("Value",l[1])),e.dimensionMap.set(t,{dimensions:n,dimensions2:c}),s.forEach(f=>{let d=f.getAttribute("template");if(f.getAttribute("resourceType")==="tile"){if(a&&n.length)if(d.includes("{"+a+"}"))d=d.replace("{"+a+"}","{dimensionValue}");else{const w=d.toLowerCase().indexOf("{"+a.toLowerCase()+"}");w>-1&&(d=d.substring(0,w)+"{dimensionValue}"+d.substring(w+a.length+2))}if(p&&c.length)if(d.includes("{"+p+"}"))d=d.replace("{"+p+"}","{dimensionValue2}");else{const w=d.toLowerCase().indexOf("{"+p.toLowerCase()+"}");w>-1&&(d=d.substring(0,w)+"{dimensionValue2}"+d.substring(w+p.length+2))}r.push({template:d,format:f.getAttribute("format"),resourceType:"tile"})}}),r}function _e(e,t,r,i,s,l,a,n){var d,w;const p=Ne(e,t,i);if(!((p==null?void 0:p.length)>0))return"";const{dimensionMap:c}=e,h=(d=c.get(t).dimensions)==null?void 0:d[0],f=(w=c.get(t).dimensions2)==null?void 0:w[0];return p[a%p.length].template.replaceAll(/\{Style\}/gi,s??"").replaceAll(/\{TileMatrixSet\}/gi,r??"").replaceAll(/\{TileMatrix\}/gi,l).replaceAll(/\{TileRow\}/gi,""+a).replaceAll(/\{TileCol\}/gi,""+n).replaceAll(/\{dimensionValue\}/gi,h).replaceAll(/\{dimensionValue2\}/gi,f)}function Ne(e,t,r){const i=he(e,t),s=i==null?void 0:i.filter(l=>l.format===r);return(s!=null&&s.length?s:i)??[]}function ke(e,t,r,i){var n,p;const{dimensionMap:s}=e,l=he(e,t);let a="";if(l&&l.length>0){const c=(n=s.get(t).dimensions)==null?void 0:n[0],h=(p=s.get(t).dimensions2)==null?void 0:p[0];a=l[0].template,a.indexOf(".xxx")===a.length-4&&(a=a.slice(0,-4)),a=a.replaceAll(/\{Style\}/gi,i),a=a.replaceAll(/\{TileMatrixSet\}/gi,r),a=a.replaceAll(/\{TileMatrix\}/gi,"{level}"),a=a.replaceAll(/\{TileRow\}/gi,"{row}"),a=a.replaceAll(/\{TileCol\}/gi,"{col}"),a=a.replaceAll(/\{dimensionValue\}/gi,c),a=a.replaceAll(/\{dimensionValue2\}/gi,h)}return a}function We(e){const t=g("WGS84BoundingBox",e),r=t?y("LowerCorner",t).split(" "):["-180","-90"],i=t?y("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}function De(e){const t=[];return ne(e,{BoundingBox:r=>{if(!r.getAttribute("crs"))return;const i=r.getAttribute("crs").toLowerCase(),s=te(i),l=i.includes("epsg")&&Z(s.wkid);let a,n,p,c;ne(r,{LowerCorner:h=>{[a,n]=h.textContent.split(" ").map(f=>Number.parseFloat(f)),l&&([a,n]=[n,a])},UpperCorner:h=>{[p,c]=h.textContent.split(" ").map(f=>Number.parseFloat(f)),l&&([p,c]=[c,p])}}),t.push({xmin:a,ymin:n,xmax:p,ymax:c,spatialReference:s})}}),t}function Be(e,t){return C("Style",e).map(r=>{const i=g("LegendURL",r),s=g("Keywords",r),l=s?O("Keyword",s):[];let a=i&&i.getAttribute("xlink:href");return t&&(a=a&&a.replace(/^http:/i,"https:")),{abstract:y("Abstract",r),id:y("Identifier",r),isDefault:r.getAttribute("isDefault")==="true",keywords:l,legendUrl:a,title:y("Title",r)}})}function Ke(e,t,r){return C("TileMatrixSetLink",t).map(i=>Ge(e,i,r))}function Ge(e,t,r){const i=g("TileMatrixSet",t).textContent,s=O("TileMatrix",t),l=r.find(M=>{const I=g("Identifier",M),P=I==null?void 0:I.textContent;return!!(P===i||i.split(":")&&i.split(":")[1]===P)}),a=g("TileMatrixSetLimits",t),n=a&&C("TileMatrixLimits",a),p=new Map;if(n!=null&&n.length)for(const M of n){const I=g("TileMatrix",M).textContent,P=+g("MinTileRow",M).textContent,k=+g("MaxTileRow",M).textContent,W=+g("MinTileCol",M).textContent,D=+g("MaxTileCol",M).textContent;p.set(I,{minCol:W,maxCol:D,minRow:P,maxRow:k})}const c=y("SupportedCRS",l).toLowerCase(),h=Je(l,c),f=h.spatialReference,d=g("TileMatrix",l),w=[parseInt(y("TileWidth",d),10),parseInt(y("TileHeight",d),10)],S=[];s.length?s.forEach((M,I)=>{const P=$("TileMatrix","Identifier",M,l);S.push(pe(P,c,I,i,p))}):C("TileMatrix",l).forEach((M,I)=>{S.push(pe(M,c,I,i,p))});const v=qe(e,l,h,w,S[0]).toJSON(),E=new z({dpi:96,spatialReference:f,size:w,origin:h,lods:S}).toJSON();return{id:i,fullExtent:v,tileInfo:E}}function te(e){e=e.toLowerCase();let t=parseInt(e.split(":").pop(),10);t!==900913&&t!==3857||(t=102100);const r=Xe(e);return r!=null&&(t=r),{wkid:t}}function Je(e,t){return ye(g("TileMatrix",e),t)}function ye(e,t){const r=te(t),[i,s]=y("TopLeftCorner",e).split(" ").map(a=>parseFloat(a)),l=t.includes("epsg")&&Z(r.wkid);return new ge(l?{x:s,y:i,spatialReference:r}:{x:i,y:s,spatialReference:r})}function qe(e,t,r,i,s){const l=g("BoundingBox",t);let a,n,p,c,h,f;if(l&&(a=y("LowerCorner",l).split(" "),n=y("UpperCorner",l).split(" ")),a&&a.length>1&&n&&n.length>1)p=parseFloat(a[0]),h=parseFloat(a[1]),c=parseFloat(n[0]),f=parseFloat(n[1]);else{const d=g("TileMatrix",t),w=parseInt(y("MatrixWidth",d),10),S=parseInt(y("MatrixHeight",d),10);p=r.x,f=r.y,c=p+w*i[0]*s.resolution,h=f-S*i[1]*s.resolution}return He(e,r.spatialReference,r)?new A(h,p,f,c,r.spatialReference):new A(p,h,c,f,r.spatialReference)}function He(e,t,r){return e==="1.0.0"&&Z(t.wkid)&&!(r.spatialReference.isGeographic&&r.x<-90&&r.y>=-90)}var V;function Xe(e){return e.includes("crs84")||e.includes("crs:84")?V.CRS84:e.includes("crs83")||e.includes("crs:83")?V.CRS83:e.includes("crs27")||e.includes("crs:27")?V.CRS27:null}function pe(e,t,r,i,s){const l=te(t),a=y("Identifier",e);let n=parseFloat(y("ScaleDenominator",e));const p=fe(l.wkid,n,i);n*=96/me;const c=+y("MatrixWidth",e),h=+y("MatrixHeight",e),{maxCol:f=c-1,maxRow:d=h-1,minCol:w=0,minRow:S=0}=s.get(a)??{},{x:v,y:E}=ye(e,t);return new we({cols:[w,f],level:r,levelValue:a,origin:[v,E],scale:n,resolution:p,rows:[S,d]})}function fe(e,t,r){let i;return i=B.hasOwnProperty(""+e)?B.values[B[e]]:r==="default028mm"?6370997*Math.PI/180:xe(e).metersPerDegree,7*t/25e3/i}(function(e){e[e.CRS84=4326]="CRS84",e[e.CRS83=4269]="CRS83",e[e.CRS27=4267]="CRS27"})(V||(V={}));var Y;const ce={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},Ye=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let m=Y=class extends ve(Se(Me(Ie(Te(Le(Ce)))))){constructor(...e){super(...e),this.activeLayer=null,this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.addHandles([ie(()=>this.activeLayer,(t,r)=>{var i;r&&!((i=this.sublayers)!=null&&i.includes(r))&&(r.layer=null,r.parent=null),t&&(t.layer=this,t.parent=this)},j),se(()=>this.sublayers,"after-add",({item:t})=>{t.layer=this,t.parent=this},j),se(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=null,t.parent=null},j),ie(()=>this.sublayers,(t,r)=>{if(r)for(const i of r)i.layer=null,i.parent=null;if(t)for(const i of t)i.layer=this,i.parent=this},j)])}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).catch(ae).then(()=>this._fetchService(e)).catch(t=>{throw ae(t),new _("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:t})})),Promise.resolve(this)}readActiveLayerFromService(e,t,r){this.activeLayer||(this.activeLayer=new U);let i=t.layers.find(s=>s.id===this.activeLayer.id);return i||(i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:r,wmtsInfo:i}=t,s=r?this._getLowerCasedUrlParams(r):null,l=i==null?void 0:i.layerIdentifier;let a=null;const n=i==null?void 0:i.tileMatrixSet;n&&(Array.isArray(n)?n.length&&(a=n[0]):a=n);const p=s==null?void 0:s.format,c=s==null?void 0:s.style;return new U({id:l,imageFormat:p,styleId:c,tileMatrixSetId:a})}writeActiveLayer(e,t,r,i){const s=this.activeLayer;t.templateUrl=this.getUrlTemplate(s.id,s.tileMatrixSetId,s.imageFormat,s.styleId);const l=be("tileMatrixSet.tileInfo",s);t.tileInfo=l?l.toJSON(i):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:s.id,tileMatrixSet:s.tileMatrixSetId}}readCustomParameters(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}get fullExtents(){return this.activeLayer.fullExtents}readServiceMode(e,t){return t.templateUrl.includes("?")?"KVP":"RESTful"}readSublayersFromService(e,t,r){return ze(t.layers,r)}get supportedSpatialReferences(){var e;return((e=this.activeLayer.tileMatrixSets)==null?void 0:e.map(t=>{var r;return(r=t.tileInfo)==null?void 0:r.spatialReference}).toArray().filter(de))??[]}get tilemapCache(){var t,r;const e=(r=(t=this.activeLayer)==null?void 0:t.tileMatrixSet)==null?void 0:r.tileInfo;return e?new Ae(e):void 0}get title(){var e;return((e=this.activeLayer)==null?void 0:e.title)??"Layer"}set title(e){this._overrideIfSome("title",e)}get url(){return this._get("url")}set url(e){e&&e.substr(-1)==="/"?this._set("url",e.slice(0,-1)):this._set("url",e)}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId),i=r==null?void 0:r.tileInfo,s=e.fullExtent,l=new Re({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(l.customLayerParameters=this.customLayerParameters),this.customParameters&&(l.customParameters=this.customParameters),new Oe({fullExtent:s,urlTemplate:t,tileInfo:i,wmtsInfo:l})}async fetchTile(e,t,r,i={}){const{signal:s}=i,l=this.getTileUrl(e,t,r),{data:a}=await K(l,{responseType:"image",signal:s});return a}async fetchImageBitmapTile(e,t,r,i={}){const{signal:s}=i;if(this.fetchTile!==Y.prototype.fetchTile){const n=await this.fetchTile(e,t,r,i);return oe(n,e,t,r,s)}const l=this.getTileUrl(e,t,r),{data:a}=await K(l,{responseType:"blob",signal:s});return oe(a,e,t,r,s)}findSublayerById(e){var t;return(t=this.sublayers)==null?void 0:t.find(r=>r.id===e)}getTileUrl(e,t,r){var n;const i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId),s=(n=i==null?void 0:i.tileInfo)==null?void 0:n.lods[e],l=s?s.levelValue||`${s.level}`:`${e}`;let a=this.resourceInfo?"":_e({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,l,t,r);return a||(a=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replaceAll(/\{level\}/gi,l).replaceAll(/\{row\}/gi,`${t}`).replaceAll(/\{col\}/gi,`${r}`)),a=this._appendCustomLayerParameters(a),a}getUrlTemplate(e,t,r,i){if(!this.resourceInfo){const s=ke({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(s)return s}if(this.serviceMode==="KVP")return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if(this.serviceMode==="RESTful"){let s="";return ce[r.toLowerCase()]&&(s=ce[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+s}return""}async _fetchService(e){let t;if(this.resourceInfo)this.resourceInfo.serviceMode==="KVP"&&(this.url+=this.url.includes("?")?"":"?"),t={ssl:!1,data:this.resourceInfo};else try{t=await this._getCapabilities(this.serviceMode,e),ue(t.data)}catch{const r=this.serviceMode==="KVP"?"RESTful":"KVP";try{t=await this._getCapabilities(r,e),ue(t.data),this.serviceMode=r}catch(i){throw new _("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:i})}}this.resourceInfo?t.data=Ue(t.data):t.data=Ve(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"})}async _getCapabilities(e,t){const r=this._getCapabilitiesUrl(e);return await K(r,{...t,responseType:"text"})}_getTileMatrixSetById(e){var i;const t=this.findSublayerById(this.activeLayer.id);return(i=t==null?void 0:t.tileMatrixSets)==null?void 0:i.find(s=>s.id===e)}_appendCustomParameters(e){return this._appendParameters(e,this.customParameters)}_appendCustomLayerParameters(e){return this._appendParameters(e,{...le(this.customParameters),...this.customLayerParameters})}_appendParameters(e,t){const r=G(e),i={...r.query,...t},s=Ee(i);return s===""?r.path:`${r.path}?${s}`}_getCapabilitiesUrl(e){this.url=G(this.url).path;let t=this.url;switch(e){case"KVP":t+=`?request=GetCapabilities&service=WMTS&version=${this.version}`;break;case"RESTful":{const r=`/${this.version}/WMTSCapabilities.xml`,i=new RegExp(r,"i");t=t.replace(i,""),t+=r;break}}return this._appendCustomParameters(t)}_getLowerCasedUrlParams(e){if(!e)return null;const t=G(e).query;if(!t)return null;const r={};return Object.keys(t).forEach(i=>{r[i.toLowerCase()]=t[i]}),r}_mergeParams(e,t){const r=this._getLowerCasedUrlParams(t);if(r){const i=Object.keys(r);i.length&&(e=e?le(e):{},i.forEach(s=>{e.hasOwnProperty(s)||Ye.has(s)||(e[s]=r[s])}))}return e}};function ze(e,t){return e.map(r=>{const i=new U;return i.read(r,t),i})}o([u()],m.prototype,"dimensionMap",void 0),o([u()],m.prototype,"layerMap",void 0),o([u({type:U,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],m.prototype,"activeLayer",void 0),o([R("service","activeLayer",["layers"])],m.prototype,"readActiveLayerFromService",null),o([R(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],m.prototype,"readActiveLayerFromItemOrWebDoc",null),o([Pe(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:z},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],m.prototype,"writeActiveLayer",null),o([u({type:String,value:"",json:{write:!0}})],m.prototype,"copyright",void 0),o([u({type:["show","hide"]})],m.prototype,"listMode",void 0),o([u({json:{read:!0,write:!0}})],m.prototype,"blendMode",void 0),o([u({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],m.prototype,"customParameters",void 0),o([R(["portal-item","web-document"],"customParameters")],m.prototype,"readCustomParameters",null),o([u({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],m.prototype,"customLayerParameters",void 0),o([u({type:A,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],m.prototype,"fullExtent",void 0),o([u({readOnly:!0})],m.prototype,"fullExtents",null),o([u({type:["WebTiledLayer"]})],m.prototype,"operationalLayerType",void 0),o([u()],m.prototype,"resourceInfo",void 0),o([u()],m.prototype,"serviceMode",void 0),o([R(["portal-item","web-document"],"serviceMode",["templateUrl"])],m.prototype,"readServiceMode",null),o([u({type:J.ofType(U)})],m.prototype,"sublayers",void 0),o([R("service","sublayers",["layers"])],m.prototype,"readSublayersFromService",null),o([u({readOnly:!0})],m.prototype,"supportedSpatialReferences",null),o([u({readOnly:!0})],m.prototype,"tilemapCache",null),o([u({json:{read:{source:"title"}}})],m.prototype,"title",null),o([u({json:{read:!1},readOnly:!0,value:"wmts"})],m.prototype,"type",void 0),o([u({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],m.prototype,"url",null),o([u()],m.prototype,"version",void 0),m=Y=o([N("esri.layers.WMTSLayer")],m);const st=m;export{st as default};
