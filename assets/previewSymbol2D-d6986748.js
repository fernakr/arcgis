import{d0 as L,c$ as w,d1 as q,d2 as O,d3 as H,s as R,d4 as j,d5 as V,d6 as E,d7 as D,d8 as W,d9 as x,da as U}from"./index-994ee346.js";import{c as G}from"./fontUtils-49904cec.js";const P="picture-fill",I="picture-marker",J="simple-fill",K="simple-line",N="simple-marker",Q="text",X="Aa",Y=L.size,z=L.maxSize,_=L.maxOutlineSize,$=L.lineWidth,T=225,ee=document.createElement("canvas");function A(a,e){const n=ee.getContext("2d"),l=[];return e&&(e.weight&&l.push(e.weight),e.size&&l.push(e.size+"px"),e.family&&l.push(e.family)),n.font=l.join(" "),n.measureText(a).width}const ae=7.2/2.54,le=72/2.54;function ne(a){if(a.length===0)return 0;if(a.length>2){const e=U(1),n=parseFloat(a);switch(a.slice(-2)){case"px":return n;case"pt":return n*e;case"in":return 72*n*e;case"pc":return 12*n*e;case"mm":return n*ae*e;case"cm":return n*le*e}}return parseFloat(a)}function k(a){const e=a==null?void 0:a.size;return{width:e!=null&&typeof e=="object"&&"width"in e?w(e.width):null,height:e!=null&&typeof e=="object"&&"height"in e?w(e.height):null}}async function ie(a,e){const n=e.fill,l=a.color;if((n==null?void 0:n.type)==="pattern"&&l&&a.type!==P){const c=await W(n.src,l.toCss(!0));n.src=c,e.fill=n}}async function se(a,e,n,l){var d,t,r;if(!("font"in a)||!a.font||e.shape.type!=="text")return;try{await G(a.font)}catch{}const{width:c}=k(l),u=/[\uE600-\uE6FF]/.test(e.shape.text);c!=null||u||(n[0]=A(e.shape.text,{weight:(d=e.font)==null?void 0:d.weight,size:(t=e.font)==null?void 0:t.size,family:(r=e.font)==null?void 0:r.family}))}function oe(a,e,n,l,c){var u;if(a.haloColor!=null&&a.haloSize!=null){c.masking??(c.masking=n.map(()=>[]));const d=w(a.haloSize);l[0]+=d,l[1]+=d,n.unshift([{...e,fill:null,stroke:{color:a.haloColor,width:2*d,join:"round",cap:"round"}}]),c.masking.unshift([{shape:{type:"rect",x:0,y:0,width:l[0]+2*x,height:l[1]+2*x},fill:[255,255,255],stroke:null},{...e,fill:[0,0,0,0],stroke:null}])}a.backgroundColor==null&&a.borderLineColor==null||(l[0]+=2*x,l[1]+=2*x,n.unshift([{shape:{type:"rect",x:0,y:0,width:l[0],height:l[1]},fill:a.backgroundColor,stroke:{color:a.borderLineColor,width:w(a.borderLineSize)}}]),(u=c.masking)==null||u.unshift([]))}function Z(a,e){return a>e?"dark":"light"}function te(a,e){var M,C;const n=typeof(e==null?void 0:e.size)=="number"?e==null?void 0:e.size:null,l=n!=null?w(n):null,c=(e==null?void 0:e.maxSize)!=null?w(e.maxSize):null,u=(e==null?void 0:e.rotation)!=null?e.rotation:"angle"in a?a.angle:null,d=q(a);let t=O(a);ce(a,245)!=="dark"||e!=null&&e.ignoreWhiteSymbols||(t={width:.75,...t,color:"#bdc3c7"});const r={shape:null,fill:d,stroke:t,offset:[0,0]};t!=null&&t.width&&(t.width=Math.min(t.width,_));const p=(t==null?void 0:t.width)||0;let g=(e==null?void 0:e.size)!=null&&((e==null?void 0:e.scale)==null||(e==null?void 0:e.scale)),i=0,s=0,b=!1;switch(a.type){case N:{const h=a.style,{width:m,height:o}=k(e),v=m===o&&m!=null?m:l??Math.min(w(a.size),c||z);switch(i=v,s=v,h){case"circle":r.shape={type:"circle",cx:0,cy:0,r:.5*v},g||(i+=p,s+=p);break;case"cross":r.shape={type:"path",path:[{command:"M",values:[0,.5*s]},{command:"L",values:[i,.5*s]},{command:"M",values:[.5*i,0]},{command:"L",values:[.5*i,s]}]};break;case"diamond":r.shape={type:"path",path:[{command:"M",values:[0,.5*s]},{command:"L",values:[.5*i,0]},{command:"L",values:[i,.5*s]},{command:"L",values:[.5*i,s]},{command:"Z",values:[]}]},g||(i+=p,s+=p);break;case"square":r.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[i,0]},{command:"L",values:[i,s]},{command:"L",values:[0,s]},{command:"Z",values:[]}]},g||(i+=p,s+=p),u&&(b=!0);break;case"triangle":r.shape={type:"path",path:[{command:"M",values:[.5*i,0]},{command:"L",values:[i,s]},{command:"L",values:[0,s]},{command:"Z",values:[]}]},g||(i+=p,s+=p),u&&(b=!0);break;case"x":r.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[i,s]},{command:"M",values:[i,0]},{command:"L",values:[0,s]}]},u&&(b=!0);break;case"path":r.shape={type:"path",path:a.path||""},g||(i+=p,s+=p),u&&(b=!0),g=!0}break}case K:{const{width:h,height:m}=k(e),o=m??l??p,v=h??$;t&&(t.width=o),i=v,s=o;const y=((M=r==null?void 0:r.stroke)==null?void 0:M.cap)||"butt",f=y==="round";g=!0,r.stroke&&(r.stroke.cap=y==="butt"?"square":y),r.shape={type:"path",path:[{command:"M",values:[f?o/2:0,s/2]},{command:"L",values:[f?i-o/2:i,s/2]}]};break}case P:case J:{const h=typeof(e==null?void 0:e.symbolConfig)=="object"&&!!((C=e==null?void 0:e.symbolConfig)!=null&&C.isSquareFill),{width:m,height:o}=k(e);i=!h&&m!==o||m==null?l??Y:m,s=!h&&m!==o||o==null?i:o,g||(i+=p,s+=p),g=!0,r.shape=h?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[i,0]},{command:"L",values:[i,s]},{command:"L",values:[0,s]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:H.fill[0];break}case I:{const h=Math.min(w(a.width),c||z),m=Math.min(w(a.height),c||z),{width:o,height:v}=k(e),y=o===v&&o!=null?o:l??Math.max(h,m),f=h/m;i=f<=1?Math.ceil(y*f):y,s=f<=1?y:Math.ceil(y/f),r.shape={type:"image",x:-Math.round(i/2),y:-Math.round(s/2),width:i,height:s,src:a.url||""},u&&(b=!0);break}case Q:{const h=a,m=(e==null?void 0:e.overrideText)||h.text||X,o=h.font,{width:v,height:y}=k(e),f=y??l??Math.min(w(o.size),c||z),B=A(m,{weight:o.weight,size:f,family:o.family}),S=/[\uE600-\uE6FF]/.test(m);i=v??(S?f:B),s=f;let F=.25*ne((o?f:0).toString());S&&(F+=5),r.shape={type:"text",text:m,x:h.xoffset||0,y:h.yoffset||F,align:"middle",alignBaseline:h.verticalAlignment,decoration:o&&o.decoration,rotated:h.rotated,kerning:h.kerning},r.font=o&&{size:f,style:o.style,decoration:o.decoration,weight:o.weight,family:o.family};break}}return{shapeDescriptor:r,size:[i,s],renderOptions:{node:e==null?void 0:e.node,scale:g,opacity:e==null?void 0:e.opacity,rotation:u,useRotationSize:b,effectView:e==null?void 0:e.effectView,ariaLabel:e==null?void 0:e.ariaLabel}}}async function he(a,e){var d;const{shapeDescriptor:n,size:l,renderOptions:c}=te(a,e);if(!n.shape)throw new R("symbolPreview: renderPreviewHTML2D","symbol not supported.");await ie(a,n),await se(a,n,l,e);const u=[[n]];if(typeof(e==null?void 0:e.symbolConfig)=="object"&&((d=e==null?void 0:e.symbolConfig)!=null&&d.applyColorModulation)){const t=.6*l[0];u.unshift([{...n,offset:[-t,0],fill:j(n.fill,-.3)}]),u.push([{...n,offset:[t,0],fill:j(n.fill,.3)}]),l[0]+=2*t,c.scale=!1}return a.type==="text"&&oe(a,n,u,l,c),V(u,l,c)}function ce(a,e=T){const n=q(a),l=O(a),c=!n||"type"in n?null:new E(n),u=l!=null&&l.color?new E(l==null?void 0:l.color):null,d=c?Z(D(c),e):null,t=u?Z(D(u),e):null;return t?d?d===t?d:e>=T?"light":"dark":t:d}export{ce as getContrastingBackgroundTheme,te as getRenderSymbolParameters,he as previewSymbol2D};
