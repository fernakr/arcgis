import{cI as d,cJ as h,cH as m,cK as p,cL as y,cM as g,av as a,_ as w}from"./index-aa00a0dc.js";import{n as I}from"./date-294ce3fb.js";class _{constructor(){this.code=null,this.description=null}}class b{constructor(r){this.error=new _,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=r}}function l(n){return new b(n)}class q{constructor(r){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=r}}function A(n){return new q(n)}const c=new Set;function F(n,r,e,f=!1){c.clear();for(const i in e){const t=n.get(i);if(!t)continue;const o=P(t,e[i]);if(c.add(t.name),t&&(f||t.editable)){const u=d(t,o);if(u)return l(h(u,t,o));r[t.name]=o}}for(const i of(n==null?void 0:n.requiredFields)??[])if(!c.has(i.name))return l(`missing required field "${i.name}"`);return null}function P(n,r){let e=r;return m(n)&&typeof r=="string"?e=parseFloat(r):p(n)&&r!=null&&typeof r!="string"?e=String(r):y(n)&&typeof r=="string"&&(e=I(r)),g(e)}let s;function G(n,r){if(!n||!a(r))return n;if("rings"in n||"paths"in n){if(s==null)throw new TypeError("geometry engine not loaded");return s.simplify(r,n)}return n}async function j(){return s==null&&(s=await w(()=>import("./geometryEngineJSON-29ccfa69.js"),["assets/geometryEngineJSON-29ccfa69.js","assets/geometryEngineBase-848ffe91.js","assets/index-aa00a0dc.js","assets/index-298317a1.css","assets/geometryEngineJSON-b79c6f68.js","assets/json-48e3ea08.js"])),s}async function L(n,r){!a(n)||r!=="esriGeometryPolygon"&&r!=="esriGeometryPolyline"||await j()}export{L as I,A as d,l as f,F as p,G as w};
