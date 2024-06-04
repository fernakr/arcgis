import{T as L,X as C}from"./index-b1de92dd.js";import{P as d,G as T,U as A,L as _,D as h,o}from"./enums-bdecffa2.js";import{e as E,T as O}from"./Texture-46909090.js";function F(e,n,t="nearest",i=!1){var c;const a=!(i&&n.pixelType==="u8"),s=a?A.FLOAT:A.UNSIGNED_BYTE,u=n.pixels==null||n.pixels.length===0?null:a?n.getAsRGBAFloat():n.getAsRGBA(),f=(c=e.capabilities.textureFloat)==null?void 0:c.textureFloatLinear,r=new E;return r.width=n.width,r.height=n.height,r.internalFormat=e.type===L.WEBGL2&&a?d.RGBA32F:T.RGBA,r.samplingMode=!f||t!=="bilinear"&&t!=="cubic"?_.NEAREST:_.LINEAR,r.dataType=s,r.wrapMode=h.CLAMP_TO_EDGE,new O(e,r,u)}function M(e,n){const{spacing:t,offsets:i,coefficients:a,size:[s,u]}=n,f=t[0]>1,r=new E;r.width=f?4*s:s,r.height=u,r.internalFormat=e.type===L.WEBGL2?d.RGBA32F:T.RGBA,r.dataType=A.FLOAT,r.samplingMode=_.NEAREST,r.wrapMode=h.CLAMP_TO_EDGE;const c=new Float32Array(f?s*u*16:2*i.length);if(f&&a!=null)for(let m=0,l=0;m<a.length;m++)c[l++]=a[m],m%3==2&&(c[l++]=1);else for(let m=0;m<u;m++)for(let l=0;l<s;l++){const g=4*(m*s+l),p=2*(l*u+m);c[g]=i[p],c[g+1]=i[p+1],c[g+3]=i[p]===-1?0:1}return new O(e,r,c)}function G(e,n){const t=new E;return t.internalFormat=T.RGBA,t.width=n.length/4,t.height=1,t.samplingMode=_.NEAREST,t.wrapMode=h.CLAMP_TO_EDGE,new O(e,t,n)}function B(e,n,t,i=1,a=!0){return{u_flipY:a,u_applyTransform:!!e,u_opacity:i,u_transformSpacing:e?e.spacing:C,u_transformGridSize:e?e.size:C,u_targetImageSize:n,u_srcImageSize:t}}function V(e,n){return{u_colormapOffset:n||0,u_colormapMaxIndex:e?e.length/4-1:0}}function k(e,n){return{u_scale:e,u_offset:n}}function y(e){return{u_bandCount:e.bandCount,u_minOutput:e.outMin,u_maxOutput:e.outMax,u_minCutOff:e.minCutOff,u_maxCutOff:e.maxCutOff,u_factor:e.factor,u_useGamma:e.useGamma,u_gamma:e.gamma,u_gammaCorrection:e.gammaCorrection}}function N(e){return{u_hillshadeType:e.hillshadeType,u_sinZcosAs:e.sinZcosAs,u_sinZsinAs:e.sinZsinAs,u_cosZs:e.cosZs,u_weights:e.weights,u_factor:e.factor,u_minValue:e.minValue,u_maxValue:e.maxValue}}function R(e,n){const t=e.gl,i=n.glName,a=new Map;if(i==null)return a;const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);let u;for(let f=0;f<s;f++)u=t.getActiveUniform(i,f),u&&a.set(u.name,{location:t.getUniformLocation(i,u.name),info:u});return a}function v(e,n,t){Object.keys(t).forEach(i=>{const a=n.get(i)||n.get(i+"[0]");a&&U(e,i,t[i],a)})}function I(e,n,t,i){t.length===i.length&&(i.some(a=>a==null)||t.some(a=>a==null)||t.forEach((a,s)=>{n.setUniform1i(a,s),e.bindTexture(i[s],s)}))}function U(e,n,t,i){if(i===null||t==null)return!1;const{info:a}=i;switch(a.type){case o.FLOAT:a.size>1?e.setUniform1fv(n,t):e.setUniform1f(n,t);break;case o.FLOAT_VEC2:e.setUniform2fv(n,t);break;case o.FLOAT_VEC3:e.setUniform3fv(n,t);break;case o.FLOAT_VEC4:e.setUniform4fv(n,t);break;case o.FLOAT_MAT3:e.setUniformMatrix3fv(n,t);break;case o.FLOAT_MAT4:e.setUniformMatrix4fv(n,t);break;case o.INT:a.size>1?e.setUniform1iv(n,t):e.setUniform1i(n,t);break;case o.BOOL:e.setUniform1i(n,t?1:0);break;case o.INT_VEC2:case o.BOOL_VEC2:e.setUniform2iv(n,t);break;case o.INT_VEC3:case o.BOOL_VEC3:e.setUniform3iv(n,t);break;case o.INT_VEC4:case o.BOOL_VEC4:e.setUniform4iv(n,t);break;default:return!1}return!0}export{y as A,v as E,I as O,N as T,B as _,F as c,k as g,R as h,G as l,M as m,V as p};
