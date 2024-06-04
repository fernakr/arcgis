import{fy as B,aM as K,fz as Z,fA as _,c$ as k,fB as $,ad as ee,d6 as te,fC as ae,fD as O,da as G,d0 as H,d5 as ie}from"./index-7adde551.js";import{r as re,b as Q,n as A,e as ne,j as se,V as oe,Q as le}from"./cimAnalyzer-8e3e5a7f.js";import{i as ce}from"./CIMResourceManager-509c6324.js";import{c as he}from"./Rasterizer-28756a1c.js";import"./fontUtils-889df40f.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-a5c58509.js";import"./OptimizedGeometry-196224d4.js";import"./GeometryUtils-984e8446.js";import"./enums-f1a6a48a.js";import"./alignmentUtils-ae955d28.js";import"./definitions-018a576d.js";import"./number-e491b09e.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-c03207f7.js";import"./floatRGBA-709d6df7.js";import"./imageUtils-2cf82e4a.js";import"./rasterizingUtils-82211441.js";const T=g=>g!=null&&g.scaleFactor?g.scaleFactor:1,me=96/72;class ge{constructor(e,t){this._spatialReference=e,this._avoidSDF=t,this._resourceCache=new Map,this._lazyImageDataCanvas=null,this._pictureMarkerCache=new Map,this._textRasterizer=new re,this._cimResourceManager=new ce,this._rasterizer=new he(this._cimResourceManager)}get _imageDataCanvas(){return this._lazyImageDataCanvas??(this._lazyImageDataCanvas=document.createElement("canvas")),this._lazyImageDataCanvas}get _imageDataContext(){return this._imageDataCanvas.getContext("2d",{willReadFrequently:!0})}get resourceManager(){return this._cimResourceManager}async rasterizeCIMSymbolAsync(e,t,n,a,i,r,l,s,y){if(!e)return null;const{data:f}=e;if(!f||f.type!=="CIMSymbolReference"||!f.symbol)return null;const{symbol:d}=f;r||(r=B(d));const u=await Q.resolveSymbolOverrides(f,t,this._spatialReference,i,r,l,s),c=this._imageDataCanvas,p=this._cimResourceManager,C=[];A.fetchResources(u,p,C),A.fetchFonts(u,p,C),C.length>0&&await Promise.all(C);const{width:h,height:m}=n,b=ue(r,h,m,a),o=A.getEnvelope(u,b,p);if(!o)return null;const I=(window.devicePixelRatio||1)*me;let w=1,R=0,z=0;switch(d.type){case"CIMPointSymbol":case"CIMTextSymbol":{let D=1;o.width>h&&(D=h/o.width);let M=1;o.height>m&&(M=m/o.height),a==="preview"&&(o.width<h&&(D=h/o.width),o.height<m&&(M=m/o.height)),w=Math.min(D,M),R=o.x+o.width/2,z=o.y+o.height/2}break;case"CIMLineSymbol":{(y||o.height>m)&&(w=m/o.height),z=o.y+o.height/2;const D=o.x*w+h/2,M=(o.x+o.width)*w+h/2,{paths:v}=b;v[0][0][0]-=D/w,v[0][2][0]-=(M-h)/w}break;case"CIMPolygonSymbol":{R=o.x+o.width/2,z=o.y+o.height/2;const D=o.x*w+h/2,M=(o.x+o.width)*w+h/2,v=o.y*w+m/2,L=(o.y+o.height)*w+m/2,{rings:S}=b;D<0&&(S[0][0][0]-=D,S[0][3][0]-=D,S[0][4][0]-=D),v<0&&(S[0][0][1]+=v,S[0][1][1]+=v,S[0][4][1]+=v),M>h&&(S[0][1][0]-=M-h,S[0][2][0]-=M-h),L>m&&(S[0][2][1]+=L-m,S[0][3][1]+=L-m)}}c.width=h*I,c.height=m*I;const x=1;c.width+=2*x,c.height+=2*x;const P=this._imageDataContext,F=le.createIdentity();return F.translate(-R,-z),F.scale(w*I,-w*I),F.translate(h*I/2+x,m*I/2+x),P.clearRect(0,0,c.width,c.height),new ne(P,p,F,!0).drawSymbol(u,b),P.getImageData(0,0,c.width,c.height)}async analyzeCIMSymbol3D(e,t,n,a,i){const r=[],l=t?{geometryType:a,spatialReference:this._spatialReference,fields:t}:null,s=[];A.fetchFonts(e.data.symbol,this._cimResourceManager,s),await Promise.all(s);const y=new se(this._cimResourceManager,l);let f;await y.analyzeSymbolReference(e.data,this._avoidSDF,r),K(i);for(const d of r)d.cim.type!=="CIMPictureMarker"&&d.cim.type!=="CIMPictureFill"&&d.cim.type!=="CIMPictureStroke"||(f||(f=[]),f.push(this._fetchPictureMarkerResource(d,i))),n&&d.type==="text"&&typeof d.text=="string"&&d.text.includes("[")&&(d.text=Z(n,d.text,d.cim.textCase));return f&&await Promise.all(f),r}rasterizeCIMSymbol3D(e,t,n,a,i,r){const l=[];for(const s of e){a&&typeof a.scaleFactor=="function"&&(a.scaleFactor=a.scaleFactor(t,i,r));const y=this._getRasterizedResource(s,t,n,a,i,r);if(!y)continue;let f=0,d=y.anchorX||0,u=y.anchorY||0,c=!1,p=0,C=0;if(n==="esriGeometryPoint"){const h=T(a);if(p=_(s.offsetX,t,i,r)*h||0,C=_(s.offsetY,t,i,r)*h||0,s.type==="marker")f=_(s.rotation,t,i,r)||0,c=s.rotateClockwise??!1;else if(s.type==="text"){if(f=_(s.angle,t,i,r)||0,s.horizontalAlignment!==void 0)switch(s.horizontalAlignment){case"left":d=-.5;break;case"right":d=.5;break;default:d=0}if(s.verticalAlignment!==void 0)switch(s.verticalAlignment){case"top":u=.5;break;case"bottom":u=-.5;break;case"baseline":u=-.25;break;default:u=0}}}y!=null&&l.push({angle:f,rotateClockWise:c,anchorX:d,anchorY:u,offsetX:p,offsetY:C,rasterizedResource:y})}return this.getSymbolImage(l)}getSymbolImage(e){const t=document.createElement("canvas"),n=t.getContext("2d");let a=0,i=0,r=0,l=0;const s=[];for(let u=0;u<e.length;u++){const c=e[u],p=c.rasterizedResource;if(!p)continue;const C=p.size,h=c.offsetX,m=c.offsetY,b=c.anchorX,o=c.anchorY,I=c.rotateClockWise||!1;let w=c.angle,R=k(h)-C[0]*(.5+b),z=k(m)-C[1]*(.5+o),x=R+C[0],P=z+C[1];if(w){I&&(w=-w);const M=Math.sin(w*Math.PI/180),v=Math.cos(w*Math.PI/180),L=R*v-z*M,S=R*M+z*v,j=R*v-P*M,W=R*M+P*v,E=x*v-P*M,N=x*M+P*v,U=x*v-z*M,V=x*M+z*v;R=Math.min(L,j,E,U),z=Math.min(S,W,N,V),x=Math.max(L,j,E,U),P=Math.max(S,W,N,V)}a=R<a?R:a,i=z<i?z:i,r=x>r?x:r,l=P>l?P:l;const F=n.createImageData(p.size[0],p.size[1]);F.data.set(new Uint8ClampedArray(p.image.buffer));const D={offsetX:h,offsetY:m,rotateClockwise:I,angle:w,rasterizedImage:F,anchorX:b,anchorY:o};s.push(D)}t.width=r-a,t.height=l-i;const y=-a,f=l;for(let u=0;u<s.length;u++){const c=s[u],p=this._imageDataToCanvas(c.rasterizedImage),C=c.rasterizedImage.width,h=c.rasterizedImage.height,m=y-C*(.5+c.anchorX),b=f-h*(.5-c.anchorY);if(c.angle){const o=(360-c.angle)*Math.PI/180;n.save(),n.translate(k(c.offsetX),-k(c.offsetY)),n.translate(y,f),n.rotate(o),n.translate(-y,-f),n.drawImage(p,m,b),n.restore()}else n.drawImage(p,m+k(c.offsetX),b-k(c.offsetY))}const d=new $({x:y/t.width-.5,y:f/t.height-.5});return{imageData:t.width!==0&&t.height!==0?n.getImageData(0,0,t.width,t.height):n.createImageData(1,1),anchorPosition:d}}async _fetchPictureMarkerResource(e,t){const n=e.materialHash;if(!this._pictureMarkerCache.get(n)){const a=(await ee(e.cim.url,{responseType:"image",signal:t==null?void 0:t.signal})).data;this._pictureMarkerCache.set(n,a)}}_imageDataToCanvas(e){const t=this._imageDataCanvas,n=this._imageDataContext;return t.width=e.width,t.height=e.height,n.putImageData(e,0,0),t}_imageTo32Array(e,t,n,a){const i=this._imageDataCanvas,r=this._imageDataContext;if(i.width=t,i.height=n,r.drawImage(e,0,0,t,n),a){r.save();const l=new te(a);r.fillStyle=l.toHex(),r.globalCompositeOperation="multiply",r.fillRect(0,0,t,n),r.globalCompositeOperation="destination-atop",r.drawImage(e,0,0,t,n),r.restore()}return new Uint32Array(r.getImageData(0,0,t,n).data.buffer)}_getRasterizedResource(e,t,n,a,i,r){let l,s,y;if(e.type==="text")return this._rasterizeTextResource(e,t,a,i,r);({analyzedCIM:l,hash:s}=fe(e,t,i,r));const u=T(a);if(e.cim.type==="CIMPictureMarker"){const C=_(e.size,t,i,r)*u,{image:h,width:m,height:b}=this._getPictureResource(e,C,_(e.color,t,i,r));return y={image:h,size:[m,b],sdf:!1,simplePattern:!1,anchorX:e.anchorPoint?e.anchorPoint.x:0,anchorY:e.anchorPoint?e.anchorPoint.y:0},y}ae(l,u,{preserveOutlineWidth:!1});const c=l;s+=n,a&&(s+=JSON.stringify(a));const p=this._resourceCache;return p.has(s)?p.get(s):(y=this._rasterizer.rasterizeJSONResource({cim:c,type:e.type,url:e.url,mosaicHash:s,size:null,path:null},window.devicePixelRatio||1,this._avoidSDF),p.set(s,y),y)}_rasterizeTextResource(e,t,n,a,i){var z,x,P;const r=T(n),l=_(e.text,t,a,i);if(!l||l.length===0)return null;const s=e.cim,y=_((s==null?void 0:s.fontFamilyName)||e.fontName,t,a,i),f=_(((z=s==null?void 0:s.font)==null?void 0:z.style)||e.style,t,a,i),d=_(((x=s==null?void 0:s.font)==null?void 0:x.weight)||e.weight,t,a,i),u=_(((P=s==null?void 0:s.font)==null?void 0:P.decoration)||e.decoration,t,a,i),c=_(e.size,t,a,i)*r,p=_(e.horizontalAlignment,t,a,i),C=_(e.verticalAlignment,t,a,i),h=O(_(e.color,t,a,i)),m=O(_(e.outlineColor,t,a,i)),b=_(e.outlineSize,t,a,i),o=e.backgroundColor!=null?O(e.backgroundColor):null,I=e.borderLineColor!=null?O(e.borderLineColor):null,w=e.borderLineWidth!=null?e.borderLineWidth:null,R={color:h,size:c,horizontalAlignment:p,verticalAlignment:C,font:{family:y,style:f,weight:d,decoration:u},halo:{size:b||0,color:m,style:f},backgroundColor:o,borderLine:I!=null&&w!=null?{color:I,size:w}:null,pixelRatio:1,premultiplyColors:!this._avoidSDF};return this._textRasterizer.rasterizeText(l,R)}_getPictureResource(e,t,n){const a=this._pictureMarkerCache.get(e.materialHash);if(!a)return null;const i=a.height/a.width,r=t?i>1?k(t):k(t)/i:a.width,l=t?i>1?k(t)*i:k(t):a.height;return{image:this._imageTo32Array(a,r,l,n),width:r,height:l}}}function ue(g,e,t,n){const i=-e/2+1,r=e/2-1,l=t/2-1,s=-t/2+1;switch(g){case"esriGeometryPoint":return{x:0,y:0};case"esriGeometryPolyline":return{paths:[[[i,0],[0,0],[r,0]]]};default:return n==="legend"?{rings:[[[i,l],[r,0],[r,s],[i,s],[i,l]]]}:{rings:[[[i,l],[r,l],[r,s],[i,s],[i,l]]]}}}function fe(g,e,t,n){let a,i;return typeof g.materialHash=="function"?(a=(0,g.materialHash)(e,t,n),i=oe(g.cim,g.materialOverrides)):(a=g.materialHash,i=g.cim),{analyzedCIM:i,hash:a}}const Y=new ge(null,!0),X=G(H.size),q=G(H.maxSize),J=G(H.lineWidth),de=1;async function ye(g,e,t){const n=e==null?void 0:e.size;let a=n!=null&&typeof n=="object"&&"width"in n?n.width:n,i=n!=null&&typeof n=="object"&&"height"in n?n.height:n;if(a==null||i==null)if(t==="esriGeometryPolygon")a=X,i=X;else{const r=await pe(g,e,t);r&&(a=r.width,i=r.height),t==="esriGeometryPolyline"&&(a=J),a=a!=null&&isFinite(a)?Math.min(a,q):X,i=i!=null&&isFinite(i)?Math.max(Math.min(i,q),de):X}return e.style==="legend"&&t==="esriGeometryPolyline"&&(a=J),{width:a,height:i}}async function pe(g,e,t){const{feature:n,fieldMap:a,viewParams:i}=e.cimOptions||e,r=await Q.resolveSymbolOverrides(g.data,n,null,a,t,null,i);if(!r)return null;(g=g.clone()).data={type:"CIMSymbolReference",symbol:r},g.data.primitiveOverrides=void 0;const l=[];return A.fetchResources(r,Y.resourceManager,l),A.fetchFonts(r,Y.resourceManager,l),l.length>0&&await Promise.all(l),A.getEnvelope(r,null,Y.resourceManager)}async function Xe(g,e={}){var I;const{node:t,opacity:n,symbolConfig:a}=e,i=a!=null&&typeof a=="object"&&"isSquareFill"in a&&a.isSquareFill,r=e.cimOptions||e,l=r.geometryType||B((I=g==null?void 0:g.data)==null?void 0:I.symbol),s=await ye(g,e,l),{feature:y,fieldMap:f}=r,d=i||l!=="esriGeometryPolygon"?"preview":"legend",u=await Y.rasterizeCIMSymbolAsync(g,y,s,d,f,l,null,r.viewParams,r.allowScalingUp);if(!u)return null;const{width:c,height:p}=u,C=document.createElement("canvas");C.width=c,C.height=p,C.getContext("2d").putImageData(u,0,0);const h=k(s.width),m=k(s.height),b=new Image(h,m);b.src=C.toDataURL(),b.ariaLabel=e.ariaLabel??null,b.alt=e.ariaLabel??"",n!=null&&(b.style.opacity=`${n}`);let o=b;if(e.effectView!=null){const w={shape:{type:"image",x:0,y:0,width:h,height:m,src:b.src},fill:null,stroke:null,offset:[0,0]};o=ie([[w]],[h,m],{effectView:e.effectView,ariaLabel:e.ariaLabel})}return t&&o&&t.appendChild(o),o}export{Xe as previewCIMSymbol};
