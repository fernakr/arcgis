import{ft as h,fu as A}from"./index-5bbab0a9.js";let g=class{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}};function M(r,e){if(!r){e=e||"Assertion";const n=new Error(e).stack;throw new g(`${e} at ${n}`)}}function T(r,e,n,a){let i,f=(n[0]-r[0])/e[0],t=(a[0]-r[0])/e[0];f>t&&(i=f,f=t,t=i);let u=(n[1]-r[1])/e[1],o=(a[1]-r[1])/e[1];if(u>o&&(i=u,u=o,o=i),f>o||u>t)return!1;u>f&&(f=u),o<t&&(t=o);let y=(n[2]-r[2])/e[2],l=(a[2]-r[2])/e[2];return y>l&&(i=y,y=l,l=i),!(f>l||y>t)&&(l<t&&(t=l),!(t<0))}function _(r){if(h(r)){if(r.length<A)return r}else if(r.length<A)return Array.from(r);let e=!0,n=!0;return r.some((a,i)=>(e=e&&a===0,n=n&&a===i,!e&&!n)),e?$(r.length):n?m(r.length):h(r)||r.BYTES_PER_ELEMENT!==Uint16Array.BYTES_PER_ELEMENT?E(r):r}function E(r){let e=!0;for(const n of r){if(n>=65536)return h(r)?new Uint32Array(r):r;n>=256&&(e=!1)}return e?new Uint8Array(r):new Uint16Array(r)}function p(r){return r<=A?new Array(r):r<=65536?new Uint16Array(r):new Uint32Array(r)}let s=(()=>{const r=new Uint32Array(131072);for(let e=0;e<r.length;++e)r[e]=e;return r})();const U=[0],w=(()=>{const r=new Uint16Array(65536);for(let e=0;e<r.length;++e)r[e]=e;return r})();function m(r){if(r===1)return U;if(r<A)return Array.from(new Uint16Array(w.buffer,0,r));if(r<w.length)return new Uint16Array(w.buffer,0,r);if(r>s.length){const e=Math.max(2*s.length,r);s=new Uint32Array(e);for(let n=0;n<s.length;n++)s[n]=n}return new Uint32Array(s.buffer,0,r)}let c=new Uint8Array(65536);function $(r){if(r===1)return U;if(r<A)return new Array(r).fill(0);if(r>c.length){const e=Math.max(2*c.length,r);c=new Uint8Array(e)}return new Uint8Array(c.buffer,0,r)}export{T as a,p as i,m as l,M as s,_ as t};
