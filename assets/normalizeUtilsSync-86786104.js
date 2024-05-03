import{aa as V,ab as A,ac as X,ad as j,ae as T,af as G,ag as J,ah as N,ai as R,aj as k,ak as $,al as q,am as z,an as p}from"./index-02c681c0.js";function K(e){return M(e,!0)}function Q(e){return M(e,!1)}function M(e,s){if(e==null)return null;const i=e.spatialReference,n=A(i),t=X(e)?e.toJSON():e;if(!n)return t;const h=j(i)?102100:4326,u=T[h].maxX,x=T[h].minX;if(G(t))return S(t,u,x);if(J(t))return t.points=t.points.map(o=>S(o,u,x)),t;if(N(t))return B(t,n);if(R(t)||k(t)){const o=$(E,t),r={xmin:o[0],ymin:o[1],xmax:o[2],ymax:o[3]},a=p(r.xmin,x)*(2*u),_=a===0?t:q(t,a);return r.xmin+=a,r.xmax+=a,r.xmax>u?L(_,u,s):r.xmin<x?L(_,x,s):_}return t}function B(e,s){if(!s)return e;const i=D(e,s).map(n=>n.extent);return i.length<2?i[0]||e:i.length>2?(e.xmin=s.valid[0],e.xmax=s.valid[1],e):{rings:i.map(n=>[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]])}}function S(e,s,i){if(Array.isArray(e)){const n=e[0];if(n>s){const t=p(n,s);e[0]=n+t*(-2*s)}else if(n<i){const t=p(n,i);e[0]=n+t*(-2*i)}}else{const n=e.x;if(n>s){const t=p(n,s);e.x+=t*(-2*s)}else if(n<i){const t=p(n,i);e.x+=t*(-2*i)}}return e}function D(e,s){const i=[],{ymin:n,ymax:t,xmin:h,xmax:u}=e,x=e.xmax-e.xmin,[o,r]=s.valid,{x:a,frameId:_}=w(e.xmin,s),{x:l,frameId:c}=w(e.xmax,s),b=a===l&&x>0;if(x>2*r){const v={xmin:h<u?a:l,ymin:n,xmax:r,ymax:t},O={xmin:o,ymin:n,xmax:h<u?l:a,ymax:t},P={xmin:0,ymin:n,xmax:r,ymax:t},C={xmin:o,ymin:n,xmax:0,ymax:t},f=[],d=[];g(v,P)&&f.push(_),g(v,C)&&d.push(_),g(O,P)&&f.push(c),g(O,C)&&d.push(c);for(let y=_+1;y<c;y++)f.push(y),d.push(y);i.push(new m(v,[_]),new m(O,[c]),new m(P,f),new m(C,d))}else a>l||b?i.push(new m({xmin:a,ymin:n,xmax:r,ymax:t},[_]),new m({xmin:o,ymin:n,xmax:l,ymax:t},[c])):i.push(new m({xmin:a,ymin:n,xmax:l,ymax:t},[_]));return i}function w(e,s){const[i,n]=s.valid,t=2*n;let h,u=0;return e>n?(h=Math.ceil(Math.abs(e-n)/t),e-=h*t,u=h):e<i&&(h=Math.ceil(Math.abs(e-i)/t),e+=h*t,u=-h),{x:e,frameId:u}}function g(e,s){const{xmin:i,ymin:n,xmax:t,ymax:h}=s;return I(e,i,n)&&I(e,i,h)&&I(e,t,h)&&I(e,t,n)}function I(e,s,i){return s>=e.xmin&&s<=e.xmax&&i>=e.ymin&&i<=e.ymax}function L(e,s,i=!0){const n=!k(e);if(n&&z(e),i)return new F().cut(e,s);const t=n?e.rings:e.paths,h=n?4:2,u=t.length,x=-2*s;for(let o=0;o<u;o++){const r=t[o];if(r&&r.length>=h){const a=[];for(const _ of r)a.push([_[0]+x,_[1]]);t.push(a)}}return n?e.rings=t:e.paths=t,e}class m{constructor(s,i){this.extent=s,this.frameIds=i}}const E=V();class F{constructor(){this._linesIn=[],this._linesOut=[]}cut(s,i){let n;if(this._xCut=i,s.rings)this._closed=!0,n=s.rings,this._minPts=4;else{if(!s.paths)return null;this._closed=!1,n=s.paths,this._minPts=2}for(const h of n){if(!h||h.length<this._minPts)continue;let u=!0;for(const x of h)u?(this.moveTo(x),u=!1):this.lineTo(x);this._closed&&this.close()}this._pushLineIn(),this._pushLineOut(),n=[];for(const h of this._linesIn)h&&h.length>=this._minPts&&n.push(h);const t=-2*this._xCut;for(const h of this._linesOut)if(h&&h.length>=this._minPts){for(const u of h)u[0]+=t;n.push(h)}return this._closed?s.rings=n:s.paths=n,s}moveTo(s){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(s[0]),this._moveTo(s[0],s[1],this._prevSide),this._prevPt=s,this._firstPt=s}lineTo(s){const i=this._side(s[0]);if(i*this._prevSide==-1){const n=this._intersect(this._prevPt,s);this._lineTo(this._xCut,n,0),this._prevSide=0,this._lineTo(s[0],s[1],i)}else this._lineTo(s[0],s[1],i);this._prevSide=i,this._prevPt=s}close(){const s=this._firstPt,i=this._prevPt;s[0]===i[0]&&s[1]===i[1]||this.lineTo(s),this._checkClosingPt(this._lineIn),this._checkClosingPt(this._lineOut)}_moveTo(s,i,n){this._closed?(this._lineIn.push([n<=0?s:this._xCut,i]),this._lineOut.push([n>=0?s:this._xCut,i])):(n<=0&&this._lineIn.push([s,i]),n>=0&&this._lineOut.push([s,i]))}_lineTo(s,i,n){this._closed?(this._addPolyVertex(this._lineIn,n<=0?s:this._xCut,i),this._addPolyVertex(this._lineOut,n>=0?s:this._xCut,i)):n<0?(this._prevSide===0&&this._pushLineOut(),this._lineIn.push([s,i])):n>0?(this._prevSide===0&&this._pushLineIn(),this._lineOut.push([s,i])):this._prevSide<0?(this._lineIn.push([s,i]),this._lineOut.push([s,i])):this._prevSide>0&&(this._lineOut.push([s,i]),this._lineIn.push([s,i]))}_addPolyVertex(s,i,n){const t=s.length;t>1&&s[t-1][0]===i&&s[t-2][0]===i?s[t-1][1]=n:s.push([i,n])}_checkClosingPt(s){const i=s.length;i>3&&s[0][0]===this._xCut&&s[i-2][0]===this._xCut&&s[1][0]===this._xCut&&(s[0][1]=s[i-2][1],s.pop())}_side(s){return s<this._xCut?-1:s>this._xCut?1:0}_intersect(s,i){const n=(this._xCut-s[0])/(i[0]-s[0]);return s[1]+n*(i[1]-s[1])}_pushLineIn(){this._lineIn&&this._lineIn.length>=this._minPts&&this._linesIn.push(this._lineIn),this._lineIn=[]}_pushLineOut(){this._lineOut&&this._lineOut.length>=this._minPts&&this._linesOut.push(this._lineOut),this._lineOut=[]}}export{Q as a,K as p};
