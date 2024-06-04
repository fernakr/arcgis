import{az as M,aA as b}from"./index-994ee346.js";import{d as A,n as C,l as v,t as _,a as I}from"./cimAnalyzer-1bb4b7dd.js";import{r as R,e as P}from"./rasterizingUtils-b95dee64.js";const k=512;class D{constructor(e){this._resourceManager=e,this._lazyRasterizationCanvas=null}dispose(){this._lazyRasterizationCanvas=null}get _rasterizationCanvas(){return this._lazyRasterizationCanvas==null&&(this._lazyRasterizationCanvas=document.createElement("canvas"),this._lazyRasterizationCanvas.getContext("2d",{willReadFrequently:!0})),this._lazyRasterizationCanvas}rasterizeJSONResource(e,i,l){if(e.type==="simple-fill"||e.type==="esriSFS"){const[a,n,f]=R(this._rasterizationCanvas,e.style,i);return{size:[n,f],image:new Uint32Array(a.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0,rasterizationScale:M(Math.ceil(i))}}if(e.type==="simple-line"||e.type==="esriSLS"||e.type==="line"&&e.dashTemplate){let a,n;if(e.type==="simple-line"||e.type==="esriSLS")switch(a=A(e.style,e.cap),e.cap){case"butt":n="Butt";break;case"square":n="Square";break;default:n="Round"}else a=e.dashTemplate,n=e.cim.capStyle;const[f,z,d]=P(a,n);return{size:[z,d],image:new Uint32Array(f.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}let t,h=null,y=null,r=1;if(e.type==="simple-marker"||e.type==="esriSMS"||e.type==="line-marker"?(t=C.fromSimpleMarker(e),y=v(t)):e.cim&&e.cim.type==="CIMHatchFill"?(t=C.fromCIMHatchFill(e.cim,i),h=new _(t.frame.xmin,-t.frame.ymax,t.frame.xmax-t.frame.xmin,t.frame.ymax-t.frame.ymin),r=i):e.cim.markerPlacement&&e.cim.markerPlacement.type==="CIMMarkerPlacementInsidePolygon"?(t=C.fromCIMInsidePolygon(e.cim),h=new _(t.frame.xmin,-t.frame.ymax,t.frame.xmax-t.frame.xmin,t.frame.ymax-t.frame.ymin)):(t=e.cim,e.avoidSDFRasterization||(y=v(t))),y&&!l){const[a,n,f]=I(y);return a?{size:[n,f],image:new Uint32Array(a.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0,rasterizationScale:r}:null}const[u,p,o,m,c]=C.rasterize(this._rasterizationCanvas,t,h,this._resourceManager,!l);return u?{size:[p,o],image:new Uint32Array(u.buffer),sdf:!1,simplePattern:!1,anchorX:m,anchorY:c}:null}rasterizeImageResource(e,i,l,t){this._rasterizationCanvas.width=e,this._rasterizationCanvas.height=i;const h=this._rasterizationCanvas.getContext("2d");l instanceof ImageData?h.putImageData(l,0,0):(l.setAttribute("width",`${e}px`),l.setAttribute("height",`${i}px`),h.drawImage(l,0,0,e,i));const y=h.getImageData(0,0,e,i),r=new Uint8Array(y.data);if(t){for(const a of t)if(a&&a.oldColor&&a.oldColor.length===4&&a.newColor&&a.newColor.length===4){const[n,f,z,d]=a.oldColor,[g,w,x,S]=a.newColor;if(n===g&&f===w&&z===x&&d===S)continue;for(let s=0;s<r.length;s+=4)n===r[s]&&f===r[s+1]&&z===r[s+2]&&d===r[s+3]&&(r[s]=g,r[s+1]=w,r[s+2]=x,r[s+3]=S)}}let u;for(let a=0;a<r.length;a+=4)u=r[a+3]/255,r[a]=r[a]*u,r[a+1]=r[a+1]*u,r[a+2]=r[a+2]*u;let p=r,o=e,m=i;const c=k;if(o>=c||m>=c){const a=o/m;a>1?(o=c,m=Math.round(c/a)):(m=c,o=Math.round(c*a)),p=new Uint8Array(4*o*m);const n=new Uint8ClampedArray(p.buffer);b(r,e,i,n,o,m,!1)}return{size:[o,m],image:new Uint32Array(p.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}export{D as c};
