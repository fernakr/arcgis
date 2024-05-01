import{b3 as W}from"./index-beb896e6.js";import{J,C as L,r as q}from"./rasterProjectionHelper-11f56921.js";class F{constructor(n=15e3,e=5e3){this._timer=null,this._cachedBlocks=new Map,this._size=-1,this._duration=n,this._interval=Math.min(n,e)}decreaseRefCount(n,e){const t=n+"/"+e,r=this._cachedBlocks;if(r.has(t)){const l=r.get(t);return l.refCount--,l.refCount<=0&&(r.delete(t),l.controller&&l.controller.abort()),l.refCount}return 0}getBlock(n,e){const t=n+"/"+e,r=this._cachedBlocks;if(r.has(t)){const l=r.get(t);return l.ts=Date.now(),l.refCount++,r.delete(t),r.set(t,l),l.block}return null}putBlock(n,e,t,r){const l=this._cachedBlocks,i=n+"/"+e;if(l.has(i)){const c=l.get(i);c.ts=Date.now(),c.refCount++}else l.set(i,{block:t,ts:Date.now(),refCount:1,controller:r});this._trim(),this._updateTimer()}deleteBlock(n,e){const t=this._cachedBlocks,r=n+"/"+e;t.has(r)&&t.delete(r)}updateMaxSize(n){this._size=n,this._trim()}empty(){this._cachedBlocks.clear(),this._clearTimer()}getCurrentSize(){return this._cachedBlocks.size}_updateTimer(){if(this._timer!=null)return;const n=this._cachedBlocks;this._timer=setInterval(()=>{const e=Array.from(n),t=Date.now();for(let r=0;r<e.length&&e[r][1].ts<=t-this._duration;r++)n.delete(e[r][0]);n.size===0&&this._clearTimer()},this._interval)}_trim(){const n=this._cachedBlocks;if(this._size===-1||this._size>=n.size)return;const e=Array.from(n);for(let t=0;t<e.length-this._size;t++)n.delete(e[t][0])}_clearTimer(){this._timer!=null&&(clearInterval(this._timer),this._timer=null)}}const f=new Map,d=new F;function O(o,n){return n==null?o:`${o}?sliceId=${n}`}function P(o,n){const e={extent:null,rasterInfo:n,cache:new Map},t=f.get(o);return t?(t.push(e),t.length-1):(f.set(o,[e]),0)}function Q(o,n){const e=f.get(o);e&&(e[n]=null,e.some(t=>t!=null)||f.delete(o))}function U(o,n,e){var i,c;const t=f.get(o);if(!t)return n==null?d.decreaseRefCount(o,e):0;if(n==null||t[n]==null)return d.decreaseRefCount(o,e);const r=(i=t[n])==null?void 0:i.cache,l=r==null?void 0:r.get(e);if(r&&l){if(l.refCount--,l.refCount===0){r.delete(e);for(let s=0;s<t.length;s++)(c=t[s])==null||c.cache.delete(e);l.controller&&l.controller.abort()}return l.refCount}return 0}function V(o,n,e){var l,i,c;const t=f.get(o);if(!t)return n==null?d.getBlock(o,e):null;if(n==null||t[n]==null){for(let s=0;s<t.length;s++){const a=(l=t[s])==null?void 0:l.cache.get(e);if(a)return a.refCount++,a.block}return d.getBlock(o,e)}const r=(i=t[n])==null?void 0:i.cache.get(e);if(r)return r.refCount++,r.block;for(let s=0;s<t.length;s++){if(s===n||!t[s])continue;const a=(c=t[s])==null?void 0:c.cache,m=a==null?void 0:a.get(e);if(a&&m)return m.refCount++,a.set(e,m),m.block}return null}function X(o,n,e,t,r=null){var c;const l=f.get(o);if(!l)return void(n==null&&d.putBlock(o,e,t,r));if(n==null||l[n]==null)return void d.putBlock(o,e,t,r);const i={refCount:1,block:t,isResolved:!1,isRejected:!1,controller:r};t.then(()=>i.isResolved=!0).catch(()=>i.isRejected=!0),(c=l[n])==null||c.cache.set(e,i)}function Y(o,n,e){var r;const t=f.get(o);t?n!=null&&t[n]!=null?(r=t[n])==null||r.cache.delete(e):d.deleteBlock(o,e):n==null&&d.deleteBlock(o,e)}function G(o,n){const e=f.get(o);return e?e[n]??null:null}function Z(o,n,e,t,r,l,i=null){const c=G(o,n);if(!c)return;const s=c.extent,{cache:a,rasterInfo:m}=c;if(s&&s.xmin===e.xmin&&s.xmax===e.xmax&&s.ymin===e.ymin&&s.ymax===e.ymax)return;t=t??0;const M=e.clone().normalize(),{spatialReference:R,transform:v}=m,b=new Set;for(let g=0;g<M.length;g++){const h=M[g];if(h.xmax-h.xmin<=t||h.ymax-h.ymin<=t)continue;let u=J(h,R,i);v!=null&&(u=v.inverseTransform(u));const I=new W({x:t,y:t,spatialReference:h.spatialReference});if(r==null&&!(r=L(I,R,h,i)))return;const{pyramidLevel:p,pyramidResolution:_,excessiveReading:T}=q(r,m,l||"closest");if(T)return;const{storageInfo:x}=m,{origin:w}=x,k={x:Math.max(0,Math.floor((u.xmin-w.x)/_.x)),y:Math.max(0,Math.floor((w.y-u.ymax)/_.y))},j=Math.ceil((u.xmax-u.xmin)/_.x-.1),D=Math.ceil((u.ymax-u.ymin)/_.y-.1),z=p>0?x.pyramidBlockWidth:x.blockWidth,$=p>0?x.pyramidBlockHeight:x.blockHeight,y=1,H=Math.max(0,Math.floor(k.x/z)-y),S=Math.max(0,Math.floor(k.y/$)-y),A=Math.floor((k.x+j-1)/z)+y,E=Math.floor((k.y+D-1)/$)+y;for(let B=S;B<=E;B++)for(let C=H;C<=A;C++)b.add(`${p}/${B}/${C}`)}a.forEach((g,h)=>{if(!b.has(h)){const u=a.get(h);(u==null||u.isResolved||u.isRejected)&&a.delete(h)}}),c.extent={xmin:e.xmin,ymin:e.ymin,xmax:e.xmax,ymax:e.ymax}}export{Q as a,Z as g,Y as h,O as i,V as m,U as s,P as u,X as x};
