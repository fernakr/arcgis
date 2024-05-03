import{cD as d,cE as h,cC as m,cF as p,cG as y,cH as g,ar as a,_ as w}from"./index-08b3f6d9.js";import{n as _}from"./date-294ce3fb.js";class I{constructor(){this.code=null,this.description=null}}class b{constructor(r){this.error=new I,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=r}}function l(n){return new b(n)}class q{constructor(r){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=r}}function G(n){return new q(n)}const c=new Set;function v(n,r,e,f=!1){c.clear();for(const i in e){const t=n.get(i);if(!t)continue;const o=E(t,e[i]);if(c.add(t.name),t&&(f||t.editable)){const u=d(t,o);if(u)return l(h(u,t,o));r[t.name]=o}}for(const i of(n==null?void 0:n.requiredFields)??[])if(!c.has(i.name))return l(`missing required field "${i.name}"`);return null}function E(n,r){let e=r;return m(n)&&typeof r=="string"?e=parseFloat(r):p(n)&&r!=null&&typeof r!="string"?e=String(r):y(n)&&typeof r=="string"&&(e=_(r)),g(e)}let s;function A(n,r){if(!n||!a(r))return n;if("rings"in n||"paths"in n){if(s==null)throw new TypeError("geometry engine not loaded");return s.simplify(r,n)}return n}async function P(){return s==null&&(s=await w(()=>import("./geometryEngineJSON-4cea5c89.js"),["assets/geometryEngineJSON-4cea5c89.js","assets/geometryEngineBase-325f76ec.js","assets/index-08b3f6d9.js","assets/index-298317a1.css","assets/geometryEngineJSON-d19ab7f2.js","assets/json-48e3ea08.js"])),s}async function D(n,r){!a(n)||r!=="esriGeometryPolygon"&&r!=="esriGeometryPolyline"||await P()}export{D as I,G as d,l as f,v as p,A as w};
