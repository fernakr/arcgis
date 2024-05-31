import{aI as Tn}from"./index-9762d29e.js";function Dn(e,g){for(var m=0;m<g.length;m++){const p=g[m];if(typeof p!="string"&&!Array.isArray(p)){for(const f in p)if(f!=="default"&&!(f in e)){const h=Object.getOwnPropertyDescriptor(p,f);h&&Object.defineProperty(e,f,h.get?h:{enumerable:!0,get:()=>p[f]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var tn,S,rn,T={exports:{}};T.exports,tn=T,T.exports,S=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0,typeof __filename<"u"&&(S=S||__filename),rn=function(e){var g,m;(e=(e=e||{})!==void 0?e:{}).ready=new Promise(function(n,t){g=n,m=t});var p,f,h,D,P,H,q=Object.assign({},e),C=typeof window=="object",v=typeof importScripts=="function",F=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",c="";function sn(n){return e.locateFile?e.locateFile(n,c):c+n}F?(c=v?require("path").dirname(c)+"/":__dirname+"/",H=()=>{P||(D=require("fs"),P=require("path"))},p=function(n,t){return H(),n=P.normalize(n),D.readFileSync(n,t?void 0:"utf8")},h=n=>{var t=p(n,!0);return t.buffer||(t=new Uint8Array(t)),t},f=(n,t,r)=>{H(),n=P.normalize(n),D.readFile(n,function(o,u){o?r(o):t(u.buffer)})},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(n){if(!(n instanceof jn))throw n}),process.on("unhandledRejection",function(n){throw n}),e.inspect=function(){return"[Emscripten Module object]"}):(C||v)&&(v?c=self.location.href:typeof document<"u"&&document.currentScript&&(c=document.currentScript.src),S&&(c=S),c=c.indexOf("blob:")!==0?c.substr(0,c.replace(/[?#].*/,"").lastIndexOf("/")+1):"",p=n=>{var t=new XMLHttpRequest;return t.open("GET",n,!1),t.send(null),t.responseText},v&&(h=n=>{var t=new XMLHttpRequest;return t.open("GET",n,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),f=(n,t,r)=>{var o=new XMLHttpRequest;o.open("GET",n,!0),o.responseType="arraybuffer",o.onload=()=>{o.status==200||o.status==0&&o.response?t(o.response):r()},o.onerror=r,o.send(null)}),e.print||console.log.bind(console);var w,M,b=e.printErr||console.warn.bind(console);Object.assign(e,q),q=null,e.arguments&&e.arguments,e.thisProgram&&e.thisProgram,e.quit&&e.quit,e.wasmBinary&&(w=e.wasmBinary),e.noExitRuntime,typeof WebAssembly!="object"&&x("no native wasm support detected");var B,A,E,y,d,k,z=!1,L=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function un(n,t,r){for(var o=t+r,u=t;n[u]&&!(u>=o);)++u;if(u-t>16&&n.buffer&&L)return L.decode(n.subarray(t,u));for(var s="";t<u;){var i=n[t++];if(128&i){var l=63&n[t++];if((224&i)!=192){var nn=63&n[t++];if((i=(240&i)==224?(15&i)<<12|l<<6|nn:(7&i)<<18|l<<12|nn<<6|63&n[t++])<65536)s+=String.fromCharCode(i);else{var en=i-65536;s+=String.fromCharCode(55296|en>>10,56320|1023&en)}}else s+=String.fromCharCode((31&i)<<6|l)}else s+=String.fromCharCode(i)}return s}function O(n,t){return n?un(E,n,t):""}function G(n){B=n,e.HEAP8=A=new Int8Array(n),e.HEAP16=new Int16Array(n),e.HEAP32=y=new Int32Array(n),e.HEAPU8=E=new Uint8Array(n),e.HEAPU16=new Uint16Array(n),e.HEAPU32=d=new Uint32Array(n),e.HEAPF32=new Float32Array(n),e.HEAPF64=new Float64Array(n)}e.INITIAL_MEMORY;var X=[],N=[],Y=[];function an(){if(e.preRun)for(typeof e.preRun=="function"&&(e.preRun=[e.preRun]);e.preRun.length;)pn(e.preRun.shift());W(X)}function cn(){W(N)}function fn(){if(e.postRun)for(typeof e.postRun=="function"&&(e.postRun=[e.postRun]);e.postRun.length;)hn(e.postRun.shift());W(Y)}function pn(n){X.unshift(n)}function ln(n){N.unshift(n)}function hn(n){Y.unshift(n)}var _=0,R=null;function dn(n){_++,e.monitorRunDependencies&&e.monitorRunDependencies(_)}function mn(n){if(_--,e.monitorRunDependencies&&e.monitorRunDependencies(_),_==0&&R){var t=R;R=null,t()}}function x(n){e.onAbort&&e.onAbort(n),b(n="Aborted("+n+")"),z=!0,n+=". Build with -sASSERTIONS for more info.";var t=new WebAssembly.RuntimeError(n);throw m(t),t}var a,_n="data:application/octet-stream;base64,";function $(n){return n.startsWith(_n)}function J(n){return n.startsWith("file://")}function K(n){try{if(n==a&&w)return new Uint8Array(w);if(h)return h(n);throw"both async and sync fetching of the wasm failed"}catch(t){x(t)}}function yn(){if(!w&&(C||v)){if(typeof fetch=="function"&&!J(a))return fetch(a,{credentials:"same-origin"}).then(function(n){if(!n.ok)throw"failed to load wasm binary file at '"+a+"'";return n.arrayBuffer()}).catch(function(){return K(a)});if(f)return new Promise(function(n,t){f(a,function(r){n(new Uint8Array(r))},t)})}return Promise.resolve().then(function(){return K(a)})}function gn(){var n={a:In};function t(s,i){var l=s.exports;e.asm=l,G((M=e.asm.g).buffer),k=e.asm.m,ln(e.asm.h),mn()}function r(s){t(s.instance)}function o(s){return yn().then(function(i){return WebAssembly.instantiate(i,n)}).then(function(i){return i}).then(s,function(i){b("failed to asynchronously prepare wasm: "+i),x(i)})}function u(){return w||typeof WebAssembly.instantiateStreaming!="function"||$(a)||J(a)||F||typeof fetch!="function"?o(r):fetch(a,{credentials:"same-origin"}).then(function(s){return WebAssembly.instantiateStreaming(s,n).then(r,function(i){return b("wasm streaming compile failed: "+i),b("falling back to ArrayBuffer instantiation"),o(r)})})}if(dn(),e.instantiateWasm)try{return e.instantiateWasm(n,t)}catch(s){return b("Module.instantiateWasm callback failed with error: "+s),!1}return u().catch(m),{}}function W(n){for(;n.length>0;){var t=n.shift();if(typeof t!="function"){var r=t.func;typeof r=="number"?t.arg===void 0?Q(r)():Q(r)(t.arg):r(t.arg===void 0?null:t.arg)}else t(e)}}$(a="lerc-wasm.wasm")||(a=sn(a));var I=[];function Q(n){var t=I[n];return t||(n>=I.length&&(I.length=n+1),I[n]=t=k.get(n)),t}function vn(n,t,r,o){x("Assertion failed: "+O(n)+", at: "+[t?O(t):"unknown filename",r,o?O(o):"unknown function"])}function wn(n){return V(n+24)+24}function bn(n){this.excPtr=n,this.ptr=n-24,this.set_type=function(t){d[this.ptr+4>>2]=t},this.get_type=function(){return d[this.ptr+4>>2]},this.set_destructor=function(t){d[this.ptr+8>>2]=t},this.get_destructor=function(){return d[this.ptr+8>>2]},this.set_refcount=function(t){y[this.ptr>>2]=t},this.set_caught=function(t){t=t?1:0,A[this.ptr+12>>0]=t},this.get_caught=function(){return A[this.ptr+12>>0]!=0},this.set_rethrown=function(t){t=t?1:0,A[this.ptr+13>>0]=t},this.get_rethrown=function(){return A[this.ptr+13>>0]!=0},this.init=function(t,r){this.set_adjusted_ptr(0),this.set_type(t),this.set_destructor(r),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var t=y[this.ptr>>2];y[this.ptr>>2]=t+1},this.release_ref=function(){var t=y[this.ptr>>2];return y[this.ptr>>2]=t-1,t===1},this.set_adjusted_ptr=function(t){d[this.ptr+16>>2]=t},this.get_adjusted_ptr=function(){return d[this.ptr+16>>2]},this.get_exception_ptr=function(){if(Z(this.get_type()))return d[this.excPtr>>2];var t=this.get_adjusted_ptr();return t!==0?t:this.excPtr}}function An(n,t,r){throw new bn(n).init(t,r),n}function Rn(){x("")}function xn(n,t,r){E.copyWithin(n,t,t+r)}function Sn(){return 2147483648}function Pn(n){try{return M.grow(n-B.byteLength+65535>>>16),G(M.buffer),1}catch{}}function En(n){var t=E.length;n>>>=0;var r=Sn();if(n>r)return!1;let o=(i,l)=>i+(l-i%l)%l;for(var u=1;u<=4;u*=2){var s=t*(1+.2/u);if(s=Math.min(s,n+100663296),Pn(Math.min(r,o(Math.max(n,s),65536))))return!0}return!1}var In={a:vn,c:wn,b:An,d:Rn,f:xn,e:En};gn(),e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.h).apply(null,arguments)},e._lerc_getBlobInfo=function(){return(e._lerc_getBlobInfo=e.asm.i).apply(null,arguments)},e._lerc_getDataRanges=function(){return(e._lerc_getDataRanges=e.asm.j).apply(null,arguments)},e._lerc_decode=function(){return(e._lerc_decode=e.asm.k).apply(null,arguments)},e._lerc_decode_4D=function(){return(e._lerc_decode_4D=e.asm.l).apply(null,arguments)};var V=e._malloc=function(){return(V=e._malloc=e.asm.n).apply(null,arguments)};e._free=function(){return(e._free=e.asm.o).apply(null,arguments)};var j,Z=e.___cxa_is_pointer_type=function(){return(Z=e.___cxa_is_pointer_type=e.asm.p).apply(null,arguments)};function jn(n){this.name="ExitStatus",this.message="Program terminated with exit("+n+")",this.status=n}function U(n){function t(){j||(j=!0,e.calledRun=!0,z||(cn(),g(e),e.onRuntimeInitialized&&e.onRuntimeInitialized(),fn()))}_>0||(an(),_>0||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1),t()},1)):t()))}if(R=function n(){j||U(),j||(R=n)},e.run=U,e.preInit)for(typeof e.preInit=="function"&&(e.preInit=[e.preInit]);e.preInit.length>0;)e.preInit.pop()();return U(),e.ready},tn.exports=rn;var on=T.exports;const Mn=Dn({__proto__:null,default:Tn(on)},[on]);export{Mn as l};
