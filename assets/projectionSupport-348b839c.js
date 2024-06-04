import{as as M,at as b,t as Z,au as z,av as t,d as h,aw as u,ah as c,ax as l,ay as R}from"./index-0dd4b1c4.js";import{t as p}from"./json-48e3ea08.js";const o=[0,0];function f(i,n){if(!n)return null;if("x"in n){const s={x:0,y:0};return[s.x,s.y]=i(n.x,n.y,o),n.z!=null&&(s.z=n.z),n.m!=null&&(s.m=n.m),s}if("xmin"in n){const s={xmin:0,ymin:0,xmax:0,ymax:0};return[s.xmin,s.ymin]=i(n.xmin,n.ymin,o),[s.xmax,s.ymax]=i(n.xmax,n.ymax,o),n.hasZ&&(s.zmin=n.zmin,s.zmax=n.zmax,s.hasZ=!0),n.hasM&&(s.mmin=n.mmin,s.mmax=n.mmax,s.hasM=!0),s}return"rings"in n?{rings:m(n.rings,i),hasM:n.hasM,hasZ:n.hasZ}:"paths"in n?{paths:m(n.paths,i),hasM:n.hasM,hasZ:n.hasZ}:"points"in n?{points:x(n.points,i),hasM:n.hasM,hasZ:n.hasZ}:null}function m(i,n){const s=[];for(const e of i)s.push(x(e,n));return s}function x(i,n){const s=[];for(const e of i){const r=n(e[0],e[1],[0,0]);s.push(r),e.length>2&&r.push(e[2]),e.length>3&&r.push(e[3])}return s}async function T(i,n){if(!i||!n)return;const s=Array.isArray(i)?i.map(e=>e.geometry!=null?e.geometry.spatialReference:null).filter(Z):[i];await z(s.map(e=>({source:e,dest:n})))}const y=f.bind(null,M),g=f.bind(null,b);function w(i,n,s,e){if(!i||(s||(s=n,n=i.spatialReference),!t(n)||!t(s)||h(n,s)))return i;if(u(n,s)){const r=c(s)?y(i):g(i);return r.spatialReference=s,r}return l(p,[i],n,s,null,e)[0]}class d{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(n,s,e,r){if(!(n!=null&&n.length)||!s||!e||h(s,e))return n;const a={geometries:n,inSpatialReference:s,outSpatialReference:e,geographicTransformation:r,resolve:R()};return this._jobs.push(a),this._timer??(this._timer=setTimeout(this._process,10)),a.resolve.promise}_process(){this._timer=null;const n=this._jobs.shift();if(!n)return;const{geometries:s,inSpatialReference:e,outSpatialReference:r,resolve:a,geographicTransformation:_}=n;u(e,r)?c(r)?a(s.map(y)):a(s.map(g)):a(l(p,s,e,r,_,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}const j=new d;function A(i,n,s,e){return j.push(i,n,s,e)}export{A as b,w as j,T as x};
