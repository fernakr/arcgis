import{a1 as d,aF as u}from"./index-98a329ed.js";var a;(function(r){r[r.varint=0]="varint",r[r.fixed64=1]="fixed64",r[r.delimited=2]="delimited",r[r.fixed32=5]="fixed32",r[r.unknown=99]="unknown"})(a||(a={}));const p=4294967296,f=new TextDecoder("utf-8"),c=d("safari")||d("ios")?6:d("ff")?12:32;let g=class o{constructor(t,s,i=0,e=t?t.byteLength:0){this._tag=0,this._dataType=a.unknown,this._init(t,s,i,e)}_init(t,s,i,e){this._data=t,this._dataView=s,this._pos=i,this._end=e}asUnsafe(){return this}clone(){return new o(this._data,this._dataView,this._pos,this._end)}pos(){return this._pos}move(t){this._pos=t}nextTag(t){for(;;){if(this._pos===this._end)return!1;const s=this._decodeVarint();if(this._tag=s>>3,this._dataType=7&s,!t||t===this._tag)break;this.skip()}return!0}next(){if(this._pos===this._end)return!1;const t=this._decodeVarint();return this._tag=t>>3,this._dataType=7&t,!0}empty(){return this._pos>=this._end}tag(){return this._tag}getInt32(){return this._decodeVarint()}getInt64(){return this._decodeVarint()}getUInt32(){let t=4294967295;return t=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128?t:(t=(t|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128?t:(t=(t|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128?t:(t=(t|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128?t:(t=(t|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128?t:void 0))))}getUInt64(){return this._decodeVarint()}getSInt32(){const t=this.getUInt32();if(t!==void 0)return t>>>1^-(1&t)|0}getSInt64(){return this._decodeSVarint()}getBool(){const t=this._data[this._pos]!==0;return this._skip(1),t}getEnum(){return this._decodeVarint()}getFixed64(){const t=this._dataView,s=this._pos,i=t.getUint32(s,!0)+t.getUint32(s+4,!0)*p;return this._skip(8),i}getSFixed64(){const t=this._dataView,s=this._pos,i=t.getUint32(s,!0)+t.getInt32(s+4,!0)*p;return this._skip(8),i}getDouble(){const t=this._dataView.getFloat64(this._pos,!0);return this._skip(8),t}getFixed32(){const t=this._dataView.getUint32(this._pos,!0);return this._skip(4),t}getSFixed32(){const t=this._dataView.getInt32(this._pos,!0);return this._skip(4),t}getFloat(){const t=this._dataView.getFloat32(this._pos,!0);return this._skip(4),t}getString(){const t=this._getLength(),s=this._pos,i=this._toString(this._data,s,s+t);return this._skip(t),i}getBytes(){const t=this._getLength(),s=this._pos,i=this._toBytes(this._data,s,s+t);return this._skip(t),i}getLength(){return this._getLengthUnsafe()}processMessageWithArgs(t,s,i,e){const n=this.getMessage(),h=t(n,s,i,e);return n.release(),h}processMessage(t){const s=this.getMessage(),i=t(s);return s.release(),i}getMessage(){const t=this._getLength(),s=o.pool.acquire();return s._init(this._data,this._dataView,this._pos,this._pos+t),this._skip(t),s}release(){o.pool.release(this)}dataType(){return this._dataType}skip(){switch(this._dataType){case a.varint:this._decodeVarint();break;case a.fixed64:this._skip(8);break;case a.delimited:this._skip(this._getLength());break;case a.fixed32:this._skip(4);break;default:throw new Error("Invalid data type!")}}skipLen(t){this._skip(t)}_skip(t){if(this._pos+t>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=t}_decodeVarint(){const t=this._data;let s=this._pos,i=0,e=0;if(this._end-s>=10)do{if(e=t[s++],i|=127&e,(128&e)==0||(e=t[s++],i|=(127&e)<<7,(128&e)==0)||(e=t[s++],i|=(127&e)<<14,(128&e)==0)||(e=t[s++],i|=(127&e)<<21,(128&e)==0)||(e=t[s++],i+=268435456*(127&e),(128&e)==0)||(e=t[s++],i+=34359738368*(127&e),(128&e)==0)||(e=t[s++],i+=4398046511104*(127&e),(128&e)==0)||(e=t[s++],i+=562949953421312*(127&e),(128&e)==0)||(e=t[s++],i+=72057594037927940*(127&e),(128&e)==0)||(e=t[s++],i+=9223372036854776e3*(127&e),(128&e)==0))break;throw new Error("Varint too long!")}while(0);else{let n=1;for(;s!==this._end&&(e=t[s],(128&e)!=0);)++s,i+=(127&e)*n,n*=128;if(s===this._end)throw new Error("Varint overrun!");++s,i+=e*n}return this._pos=s,i}_decodeSVarint(){const t=this._data;let s,i=0,e=0;const n=1&t[this._pos];if(e=t[this._pos++],i|=127&e,(128&e)==0||(e=t[this._pos++],i|=(127&e)<<7,(128&e)==0)||(e=t[this._pos++],i|=(127&e)<<14,(128&e)==0)||(e=t[this._pos++],i|=(127&e)<<21,(128&e)==0)||(e=t[this._pos++],i+=268435456*(127&e),(128&e)==0)||(e=t[this._pos++],i+=34359738368*(127&e),(128&e)==0)||(e=t[this._pos++],i+=4398046511104*(127&e),(128&e)==0))return n?-(i+1)/2:i/2;if(s=BigInt(i),e=t[this._pos++],s+=0x2000000000000n*BigInt(127&e),(128&e)==0||(e=t[this._pos++],s+=0x100000000000000n*BigInt(127&e),(128&e)==0)||(e=t[this._pos++],s+=0x8000000000000000n*BigInt(127&e),(128&e)==0))return Number(n?-(s+1n)/2n:s/2n);throw new Error("Varint too long!")}_getLength(){if(this._dataType!==a.delimited)throw new Error("Not a delimited data type!");return this._decodeVarint()}_getLengthUnsafe(){return this.getUInt32()}_toString(t,s,i){if((i=Math.min(this._end,i))-s>c){const h=t.subarray(s,i);return f.decode(h)}let e="",n="";for(let h=s;h<i;++h){const _=t[h];128&_?n+="%"+_.toString(16):(e+=decodeURIComponent(n)+String.fromCharCode(_),n="")}return n.length&&(e+=decodeURIComponent(n)),e}_toBytes(t,s,i){return i=Math.min(this._end,i),new Uint8Array(t.buffer,s,i-s)}};g.pool=new u(g,void 0,r=>{r._data=null,r._dataView=null});export{g as r};
