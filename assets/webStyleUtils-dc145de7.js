import{s as c,dc as u,bF as r,dd as d,de as i,df as m,j as b,I as f,dg as p,dh as w,di as h,dj as g,dk as $}from"./index-8fbcd33f.js";async function D(e,t,a){if(!e.name)throw new c("style-symbol-reference-name-missing","Missing name in style symbol reference");if(e.styleName&&e.styleName==="Esri2DPointSymbolsStyle")return j(e,a);try{return N(await u(e,t,a),e.name,t,a)}catch(n){return r(n),null}}async function j(e,t){const a=d.replaceAll(/\{SymbolName\}/gi,e.name);try{const n=await i(a,t);return m(n.data)}catch(n){return r(n),null}}async function N(e,t,a,n){const y={portal:(a==null?void 0:a.portal)!=null?a.portal:b.getDefault(),url:f(e.baseUrl),origin:"portal-item"},o=p(t,e.data);if(!o)throw new c("symbolstyleutils:symbol-name-not-found",`The symbol name '${t}' could not be found`,{symbolName:t});let s=w(h(o,"cimRef"),y);g()&&(s=$(s));try{const l=await i(s,n);return m(l.data)}catch(l){return r(l),null}}export{D as fetchCIMSymbolReference};
