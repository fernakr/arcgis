import{z as m,eu as g,ev as v,ew as y,s as f,ex as h,aU as b,aZ as x,aY as $,cW as E,ey as F,ez as Z}from"./index-308e373b.js";const d=m.getLogger("esri.layers.support.labelFormatUtils"),p={type:"simple",evaluate:()=>null},z={getAttribute:(r,t)=>r.field(t)};async function T(r,t,c){if(!r||!r.symbol||!t)return p;const l=r.where,u=g(r);let a;if(u.type==="arcade"){const e=await v(u.expression,c,t);if(e==null)return p;a={type:"arcade",evaluate(o,n){try{const s="attributes"in o?e.repurposeFeature(o):o;s.contextTimeZone=n??null;const i=e.evaluate({$view:{timeZone:n},$feature:s},e.services);if(i!=null)return i.toString()}catch(s){d.error(new f("arcade-expression-error","Encountered an error when evaluating label expression for feature",{error:s,feature:o,expression:u}))}return null},needsHydrationToEvaluate:()=>Z(u.expression)==null}}else a={type:"simple",evaluate:e=>u.expression.replaceAll(/{[^}]*}/g,o=>{const n=o.slice(1,-1),s=t.get(n);if(!s)return o;let i=null;return"attributes"in e?e&&e.attributes&&(i=e.attributes[s.name]):i=e.field(s.name),i==null?"":A(i,s)})};if(l){let e;try{e=await y(l,t)}catch(n){return d.error(new f("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:l,error:n})),p}const o=a.evaluate;a.evaluate=(n,s)=>{const i="attributes"in n?void 0:z;try{if(e.testFeature(n,i))return o(n,s)}catch(w){d.error(new f("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:l,feature:n,error:w}))}return null}}return a}function A(r,t){if(r==null)return"";const c=t.domain;if(c){if(c.type==="codedValue"||c.type==="coded-value"){const u=r;for(const a of c.codedValues)if(a.code===u)return a.name}else if(c.type==="range"){const{max:u,min:a}=h(t),e=+r;if(a!=null&&u!=null&&a<=e&&e<=u)return c.name}}let l=r;return b(t)?l=x(l,$("short-date")):E(t)&&(l=F(+l)),l||""}export{T as createLabelFunction,A as formatField};
