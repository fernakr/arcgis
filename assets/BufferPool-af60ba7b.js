import{a1 as n,a3 as l}from"./index-0dd4b1c4.js";import{a as h}from"./AttributeStoreView-a4783192.js";const o=n("esri-2d-log-allocations");class a{constructor(t,e){this._array=t,this._pool=e}get array(){return this._array}get length(){return this._array.length}static create(t,e){const r=e.acquire(t);return new a(r,e)}expand(t){const e=this._pool.acquire(t);e.set(this._array),this._pool.release(this._array),this._array=e}destroy(){this._pool.release(this._array)}set(t,e){this._array.set(t._array,e)}slice(){const t=this._pool.acquire(this._array.byteLength);return t.set(this._array),new a(t,this._pool)}}class s{constructor(){this._data=new ArrayBuffer(s.BYTE_LENGTH),this._freeList=new h({start:0,end:this._data.byteLength})}static get BYTE_LENGTH(){return 64e6}get buffer(){return this._data}allocate(t){const e=this._freeList.firstFit(t);return e==null?null:new Uint32Array(this._data,e,t/Uint32Array.BYTES_PER_ELEMENT)}free(t){this._freeList.free(t.byteOffset,t.byteLength)}}class g{constructor(){this._bytesAllocated=0,this._pages=[],this._pagesByBuffer=new Map,this._addPage()}destroy(){this._pages=[],this._pagesByBuffer=null}get _bytesTotal(){return this._pages.length*s.BYTE_LENGTH}acquire(t){if(this._bytesAllocated+=t,o&&console.log(`Allocating ${t}, (${this._bytesAllocated} / ${this._bytesTotal})`),t>s.BYTE_LENGTH)return new Uint32Array(t/Uint32Array.BYTES_PER_ELEMENT);for(const r of this._pages){const i=r.allocate(t);if(i!=null)return i}const e=this._addPage().allocate(t);return l(e,"Expected to allocate page"),e}release(t){this._bytesAllocated-=t.byteLength,o&&console.log(`Freeing ${t.byteLength}, (${this._bytesAllocated} / ${this._bytesTotal})`);const e=this._pagesByBuffer.get(t.buffer);e&&e.free(t)}_addPage(){const t=new s;return this._pages.push(t),this._pagesByBuffer.set(t.buffer,t),t}}export{g as i,a as r};
