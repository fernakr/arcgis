import"./index-aa00a0dc.js";function r(e){return e?t:f}function u(e,o){return o!=null&&o.mode?o.mode:r(e).mode}function i(e,o){return u(e!=null&&e.hasZ,o)}function s(e,o,n){return n&&n.mode!==o?`${e} only support ${o} elevation mode`:null}function p(e,o,n){return(n==null?void 0:n.mode)===o?`${e} do not support ${o} elevation mode`:null}function d(e,o){return(o==null?void 0:o.featureExpressionInfo)!=null&&o.featureExpressionInfo.expression!=="0"?`${e} do not support featureExpressionInfo`:null}function m(e,o){o&&e.warn(".elevationInfo=",o)}const t={mode:"absolute-height",offset:0},f={mode:"on-the-ground",offset:null};export{d as E,p as b,s as p,i as r,m as x};
