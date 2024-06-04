import{E as q}from"./index-34cda61d.js";const V=q.getLogger("esri.views.3d.support.buffer.math");function x(t,n,e){_(t.typedBuffer,n.typedBuffer,e,t.typedBufferStride,n.typedBufferStride)}function _(t,n,e,r=3,d=r){if(t.length/r!==Math.ceil(n.length/d))return V.error("source and destination buffers need to have the same number of elements"),t;const u=t.length/r,i=e[0],s=e[1],o=e[2],f=e[4],a=e[5],h=e[6],p=e[8],S=e[9],M=e[10],y=e[12],B=e[13],g=e[14];let l=0,c=0;for(let m=0;m<u;m++){const b=n[l],v=n[l+1],w=n[l+2];t[c]=i*b+f*v+p*w+y,t[c+1]=s*b+a*v+S*w+B,t[c+2]=o*b+h*v+M*w+g,l+=d,c+=r}return t}function E(t,n,e){z(t.typedBuffer,n.typedBuffer,e,t.typedBufferStride,n.typedBufferStride)}function z(t,n,e,r=3,d=r){if(t.length/r!==Math.ceil(n.length/d))return void V.error("source and destination buffers need to have the same number of elements");const u=t.length/r,i=e[0],s=e[1],o=e[2],f=e[3],a=e[4],h=e[5],p=e[6],S=e[7],M=e[8];let y=0,B=0;for(let g=0;g<u;g++){const l=n[y],c=n[y+1],m=n[y+2];t[B]=i*l+f*c+p*m,t[B+1]=s*l+a*c+S*m,t[B+2]=o*l+h*c+M*m,y+=d,B+=r}}function L(t,n,e){j(t.typedBuffer,n,e,t.typedBufferStride)}function j(t,n,e,r=3){const d=Math.min(t.length/r,n.count),u=n.typedBuffer,i=n.typedBufferStride;let s=0,o=0;for(let f=0;f<d;f++)t[o]=e*u[s],t[o+1]=e*u[s+1],t[o+2]=e*u[s+2],s+=i,o+=r}function P(t,n){O(t.typedBuffer,n.typedBuffer,t.typedBufferStride,n.typedBufferStride)}function O(t,n,e=3,r=e){const d=Math.min(t.length/e,n.length/r);let u=0,i=0;for(let s=0;s<d;s++){const o=n[u],f=n[u+1],a=n[u+2],h=o*o+f*f+a*a;if(h>0){const p=1/Math.sqrt(h);t[i]=p*o,t[i+1]=p*f,t[i+2]=p*a}u+=r,i+=e}}function R(t,n,e){const r=Math.min(t.count,n.count),d=t.typedBuffer,u=t.typedBufferStride,i=n.typedBuffer,s=n.typedBufferStride;let o=0,f=0;for(let a=0;a<r;a++)d[f]=i[o]>>e,d[f+1]=i[o+1]>>e,d[f+2]=i[o+2]>>e,o+=s,f+=u}Object.freeze(Object.defineProperty({__proto__:null,normalize:O,normalizeView:P,scale:j,scaleView:L,shiftRight:R,transformMat3:z,transformMat3View:E,transformMat4:_,transformMat4View:x},Symbol.toStringTag,{value:"Module"}));export{V as e,E as f,P as i,z as n,L as o,_ as r,O as s,x as t,j as u};
