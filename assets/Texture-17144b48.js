import{E as k,a1 as K,s as m,T as w,ha as C}from"./index-5bbab0a9.js";import{A as q,c as E,P as s,B as I,G as p,M as x,U as L,L as g,D as S,V as F}from"./enums-bdecffa2.js";const j=k.getLogger("esri.views.webgl.checkWebGLError");function Z(t,e){switch(e){case t.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case t.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case t.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case t.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case t.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case t.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}const H=!!K("enable-feature:webgl-debug");function J(){return H}function le(){return H}function b(t){if(J()){const e=t.getError();if(e){const r=Z(t,e),a=new Error().stack;j.error(new m("webgl-error","WebGL error occurred",{message:r,stack:a}))}}}var O;(function(t){t[t.Texture=0]="Texture",t[t.RenderBuffer=1]="RenderBuffer"})(O||(O={}));function _e(t){const e=t.gl;switch(e.getError()){case e.NO_ERROR:return null;case e.INVALID_ENUM:return"An unacceptable value has been specified for an enumerated argument";case e.INVALID_VALUE:return"An unacceptable value has been specified for an argument";case e.INVALID_OPERATION:return"The specified command is not allowed for the current state";case e.INVALID_FRAMEBUFFER_OPERATION:return"The currently bound framebuffer is not framebuffer complete";case e.OUT_OF_MEMORY:return"Not enough memory is left to execute the command";case e.CONTEXT_LOST_WEBGL:return"WebGL context is lost"}return"Unknown error"}function de(t,e,r,a,i=0){var _,d,c;const l=t.gl;t.bindBuffer(r);for(const o of a){const n=e.get(o.name);n===void 0&&console.error(`There is no location for vertex attribute '${o.name}' defined.`);const u=i*o.stride;if(o.count<=4)l.vertexAttribPointer(n,o.count,o.type,o.normalized,o.stride,o.offset+u),l.enableVertexAttribArray(n),o.divisor>0&&((_=t.gl2)==null||_.vertexAttribDivisor(n,o.divisor));else if(o.count===9)for(let h=0;h<3;h++)l.vertexAttribPointer(n+h,3,o.type,o.normalized,o.stride,o.offset+12*h+u),l.enableVertexAttribArray(n+h),o.divisor>0&&((d=t.gl2)==null||d.vertexAttribDivisor(n+h,o.divisor));else if(o.count===16)for(let h=0;h<4;h++)l.vertexAttribPointer(n+h,4,o.type,o.normalized,o.stride,o.offset+16*h+u),l.enableVertexAttribArray(n+h),o.divisor>0&&((c=t.gl2)==null||c.vertexAttribDivisor(n+h,o.divisor));else console.error("Unsupported vertex attribute element count: "+o.count)}}function he(t,e,r,a){var l,_,d;const i=t.gl;t.bindBuffer(r);for(const c of a){const o=e.get(c.name);if(c.count<=4)i.disableVertexAttribArray(o),c.divisor&&c.divisor>0&&((l=t.gl2)==null||l.vertexAttribDivisor(o,0));else if(c.count===9)for(let n=0;n<3;n++)i.disableVertexAttribArray(o+n),c.divisor&&c.divisor>0&&((_=t.gl2)==null||_.vertexAttribDivisor(o+n,0));else if(c.count===16)for(let n=0;n<4;n++)i.disableVertexAttribArray(o+n),c.divisor&&c.divisor>0&&((d=t.gl2)==null||d.vertexAttribDivisor(o+n,0));else console.error("Unsupported vertex attribute element count: "+c.count)}t.unbindBuffer(q.ARRAY_BUFFER)}function Q(t){switch(t){case p.ALPHA:case p.LUMINANCE:case p.RED:case p.RED_INTEGER:case s.R8:case s.R8I:case s.R8UI:case s.R8_SNORM:case I.STENCIL_INDEX8:return 1;case p.LUMINANCE_ALPHA:case p.RG:case p.RG_INTEGER:case s.RGBA4:case s.R16F:case s.R16I:case s.R16UI:case s.RG8:case s.RG8I:case s.RG8UI:case s.RG8_SNORM:case s.RGB565:case s.RGB5_A1:case I.DEPTH_COMPONENT16:return 2;case p.DEPTH_COMPONENT:case p.RGB:case p.RGB_INTEGER:case s.RGB8:case s.RGB8I:case s.RGB8UI:case s.RGB8_SNORM:case s.SRGB8:case I.DEPTH_COMPONENT24:return 3;case p.DEPTH_STENCIL:case p.DEPTH24_STENCIL8:case p.RGBA:case p.RGBA_INTEGER:case s.RGBA8:case s.R32F:case s.R11F_G11F_B10F:case s.RG16F:case s.R32I:case s.R32UI:case s.RG16I:case s.RG16UI:case s.RGBA8I:case s.RGBA8UI:case s.RGBA8_SNORM:case s.SRGB8_ALPHA8:case s.RGB9_E5:case s.RGB10_A2UI:case s.RGB10_A2:case I.DEPTH_STENCIL:case I.DEPTH_COMPONENT32F:case I.DEPTH24_STENCIL8:return 4;case I.DEPTH32F_STENCIL8:return 5;case s.RGB16F:case s.RGB16I:case s.RGB16UI:return 6;case s.RG32F:case s.RG32I:case s.RG32UI:case s.RGBA16F:case s.RGBA16I:case s.RGBA16UI:return 8;case s.RGB32F:case s.RGB32I:case s.RGB32UI:return 12;case s.RGBA32F:case s.RGBA32I:case s.RGBA32UI:return 16;case E.COMPRESSED_RGB_S3TC_DXT1_EXT:case E.COMPRESSED_RGBA_S3TC_DXT1_EXT:return .5;case E.COMPRESSED_RGBA_S3TC_DXT3_EXT:case E.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case E.COMPRESSED_R11_EAC:case E.COMPRESSED_SIGNED_R11_EAC:case E.COMPRESSED_RGB8_ETC2:case E.COMPRESSED_SRGB8_ETC2:case E.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case E.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return .5;case E.COMPRESSED_RG11_EAC:case E.COMPRESSED_SIGNED_RG11_EAC:case E.COMPRESSED_RGBA8_ETC2_EAC:case E.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}class ee{constructor(e=0,r=e){this.width=e,this.height=r,this.target=x.TEXTURE_2D,this.pixelFormat=p.RGBA,this.dataType=L.UNSIGNED_BYTE,this.samplingMode=g.LINEAR,this.wrapMode=S.REPEAT,this.maxAnisotropy=1,this.flipped=!1,this.hasMipmap=!1,this.isOpaque=!1,this.unpackAlignment=4,this.preMultiplyAlpha=!1,this.depth=1,this.isImmutable=!1}}function te(t){return t.width<=0||t.height<=0?0:t.width*t.height*(t.hasMipmap?4/3:1)*(t.internalFormat==null?4:Q(t.internalFormat))}class B extends ee{constructor(e,r){switch(super(),this.context=e,Object.assign(this,r),this.internalFormat){case s.R16F:case s.R16I:case s.R16UI:case s.R32F:case s.R32I:case s.R32UI:case s.R8_SNORM:case s.R8:case s.R8I:case s.R8UI:this.pixelFormat=p.RED}}static validate(e,r){return new B(e,r)}}const v=4;let f=class{constructor(e,r=null,a=null){if(this.type=O.Texture,this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,"context"in e)this._descriptor=e,a=r;else{const i=B.validate(e,r);if(!i)throw new m("Texture descriptor invalid");this._descriptor=i}if(this._descriptor.context.type!==w.WEBGL2&&(this._descriptor.isImmutable&&(this._descriptor.isImmutable=!1),M(this._descriptor.target)))throw new m("3D and array textures are not supported in WebGL1");this._descriptor.target===x.TEXTURE_CUBE_MAP?this._setDataCubeMap(a):this.setData(a)}get glName(){return this._glName}get descriptor(){return this._descriptor}get gpuMemoryUsage(){return oe.delete(this),te(this._descriptor)}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._glName&&this._descriptor.context.instanceCounter.decrement(F.Texture,this),this._descriptor.context.gl&&this._glName&&(this._descriptor.context.unbindTexture(this),this._descriptor.context.gl.deleteTexture(this._glName),this._glName=null)}release(){this.dispose()}resize(e,r){const a=this._descriptor;if(a.width!==e||a.height!==r){if(this._wasImmutablyAllocated)throw new m("Immutable textures can't be resized!");a.width=e,a.height=r,this._descriptor.target===x.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(e=null){for(let r=x.TEXTURE_CUBE_MAP_POSITIVE_X;r<=x.TEXTURE_CUBE_MAP_NEGATIVE_Z;r++)this._setData(e,r)}setData(e){this._setData(e)}_setData(e,r){var o;if(!((o=this._descriptor.context)!=null&&o.gl))return;const a=this._descriptor.context.gl;b(a),this._glName||(this._glName=a.createTexture(),this._glName&&this._descriptor.context.instanceCounter.increment(F.Texture,this)),e===void 0&&(e=null);const i=this._descriptor,l=r??i.target,_=M(l);e===null&&(i.width=i.width||v,i.height=i.height||v,_&&(i.depth=i.depth??1));const d=this._descriptor.context.bindTexture(this,f.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(f.TEXTURE_UNIT_FOR_UPDATES),G(this._descriptor.context,i),this._configurePixelStorage(),b(a);const c=this._deriveInternalFormat();if(U(e)){let n="width"in e?e.width:e.codedWidth,u="height"in e?e.height:e.codedHeight;const h=1;e instanceof HTMLVideoElement&&(n=e.videoWidth,u=e.videoHeight),i.width&&i.height,_&&i.depth,i.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(l,c,i.hasMipmap,n,u,h),this._texImage(l,0,c,n,u,h,e),b(a),i.hasMipmap&&this.generateMipmap(),i.width||(i.width=n),i.height||(i.height=u),_&&!i.depth&&(i.depth=h)}else{const{width:n,height:u,depth:h}=i;if(n==null||u==null)throw new m("Width and height must be specified!");if(_&&h==null)throw new m("Depth must be specified!");if(i.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(l,c,i.hasMipmap,n,u,h),P(e)){const R=e.levels,A=W(l,n,u,h),T=Math.min(A-1,R.length-1);this._descriptor.context.gl2!=null?a.texParameteri(i.target,this._descriptor.context.gl2.TEXTURE_MAX_LEVEL,T):i.hasMipmap=i.hasMipmap&&A===R.length;const D=c;if(!se(D))throw new m("Attempting to use compressed data with an uncompressed format!");this._forEachMipmapLevel((N,V,$,z)=>{const Y=R[Math.min(N,R.length-1)];this._compressedTexImage(l,N,D,V,$,z,Y)},T)}else this._texImage(l,0,c,n,u,h,e),b(a),i.hasMipmap&&this.generateMipmap()}y(a,this._descriptor),X(a,this._descriptor),re(this._descriptor.context,this._descriptor),b(a),this._descriptor.context.bindTexture(d,f.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,r,a,i,l,_,d=0){_||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const c=this._descriptor.context.gl,o=this._descriptor.context.gl2,n=this._descriptor,u=this._deriveInternalFormat(),{pixelFormat:h,dataType:R,target:A,isImmutable:T}=n;if(T&&!this._wasImmutablyAllocated)throw new m("Cannot update immutable texture before allocation!");const D=this._descriptor.context.bindTexture(this,f.TEXTURE_UNIT_FOR_UPDATES,!0);if((r<0||a<0||i>n.width||l>n.height||r+i>n.width||a+l>n.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),d){if(!o)return void console.error("Webgl2 must be enabled to use dataRowOffset!");c.pixelStorei(o.UNPACK_SKIP_ROWS,d)}if(U(_)?o?o.texSubImage2D(A,e,r,a,i,l,h,R,_):c.texSubImage2D(A,e,r,a,h,R,_):P(_)?c.compressedTexSubImage2D(A,e,r,a,i,l,u,_.levels[e]):c.texSubImage2D(A,e,r,a,i,l,h,R,_),d){if(!o)return void console.error("Webgl2 must be enabled to use dataRowOffset!");c.pixelStorei(o.UNPACK_SKIP_ROWS,0)}this._descriptor.context.bindTexture(D,f.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(e,r,a,i,l,_,d,c){c||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const o=this._descriptor.context.gl2;if(o==null)throw new m("3D textures are not supported in WebGL1");const n=this._descriptor,u=this._deriveInternalFormat(),{pixelFormat:h,dataType:R,isImmutable:A,target:T}=n;if(A&&!this._wasImmutablyAllocated)throw new m("Cannot update immutable texture before allocation!");M(T)||console.warn("Attempting to set 3D texture data on a non-3D texture");const D=this._descriptor.context.bindTexture(this,f.TEXTURE_UNIT_FOR_UPDATES);if(this._descriptor.context.setActiveTexture(f.TEXTURE_UNIT_FOR_UPDATES),(r<0||a<0||i<0||l>n.width||_>n.height||d>n.depth||r+l>n.width||a+_>n.height||i+d>n.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),P(c))c=c.levels[e],o.compressedTexSubImage3D(T,e,r,a,i,l,_,d,u,c);else{const N=c;o.texSubImage3D(T,e,r,a,i,l,_,d,h,R,N)}this._descriptor.context.bindTexture(D,f.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;if(!e.hasMipmap){if(this._wasImmutablyAllocated)throw new m("Cannot add mipmaps to immutable texture after allocation");e.hasMipmap=!0,this._samplingModeDirty=!0,G(this._descriptor.context,e)}e.samplingMode===g.LINEAR?(this._samplingModeDirty=!0,e.samplingMode=g.LINEAR_MIPMAP_NEAREST):e.samplingMode===g.NEAREST&&(this._samplingModeDirty=!0,e.samplingMode=g.NEAREST_MIPMAP_NEAREST);const r=this._descriptor.context.bindTexture(this,f.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(f.TEXTURE_UNIT_FOR_UPDATES),this._descriptor.context.gl.generateMipmap(e.target),this._descriptor.context.bindTexture(r,f.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,G(this._descriptor.context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._descriptor.context.gl,r=this._descriptor;this._samplingModeDirty&&(y(e,r),this._samplingModeDirty=!1),this._wrapModeDirty&&(X(e,r),this._wrapModeDirty=!1)}_deriveInternalFormat(){if(this._descriptor.context.type===w.WEBGL1)return this._descriptor.internalFormat=this._descriptor.pixelFormat;if(this._descriptor.internalFormat!=null)return this._descriptor.internalFormat===p.DEPTH_STENCIL&&(this._descriptor.internalFormat=p.DEPTH24_STENCIL8),this._descriptor.internalFormat;switch(this._descriptor.dataType){case L.FLOAT:switch(this._descriptor.pixelFormat){case p.RGBA:return this._descriptor.internalFormat=s.RGBA32F;case p.RGB:return this._descriptor.internalFormat=s.RGB32F;default:throw new m("Unable to derive format")}case L.UNSIGNED_BYTE:switch(this._descriptor.pixelFormat){case p.RGBA:return this._descriptor.internalFormat=s.RGBA8;case p.RGB:return this._descriptor.internalFormat=s.RGB8}}return this._descriptor.internalFormat=this._descriptor.pixelFormat===p.DEPTH_STENCIL?p.DEPTH24_STENCIL8:this._descriptor.pixelFormat}_configurePixelStorage(){const e=this._descriptor.context.gl,{unpackAlignment:r,flipped:a,preMultiplyAlpha:i}=this._descriptor;e.pixelStorei(e.UNPACK_ALIGNMENT,r),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a?1:0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i?1:0)}_texStorage(e,r,a,i,l,_){const d=this._descriptor.context.gl2;if(d==null)throw new m("Immutable textures are not supported in WebGL1");if(!ie(r))throw new m("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const c=a?W(e,i,l,_):1;if(M(e)){if(_==null)throw new m("Missing depth dimension for 3D texture upload");d.texStorage3D(e,c,r,i,l,_)}else d.texStorage2D(e,c,r,i,l);this._wasImmutablyAllocated=!0}_texImage(e,r,a,i,l,_,d){const c=this._descriptor.context.gl,o=M(e),{isImmutable:n,pixelFormat:u,dataType:h}=this._descriptor,R=this._descriptor.context.type===w.WEBGL2,A=R?c:null;if(R||!U(d))if(n){if(d!=null){const T=d;if(o){if(_==null)throw new m("Missing depth dimension for 3D texture upload");A.texSubImage3D(e,r,0,0,0,i,l,_,u,h,T)}else c.texSubImage2D(e,r,0,0,i,l,u,h,T)}}else{const T=d;if(o){if(_==null)throw new m("Missing depth dimension for 3D texture upload");A.texImage3D(e,r,a,i,l,_,0,u,h,T)}else c.texImage2D(e,r,a,i,l,0,u,h,T)}else c.texImage2D(e,0,a,u,h,d)}_compressedTexImage(e,r,a,i,l,_,d){const c=this._descriptor.context.gl;let o=null;const n=M(e),u=this._descriptor.isImmutable;if(n){if(this._descriptor.context.type!==w.WEBGL2)throw new m("3D textures are not supported in WebGL1");o=c}if(u){if(d!=null)if(n){if(_==null)throw new m("Missing depth dimension for 3D texture upload");o.compressedTexSubImage3D(e,r,0,0,0,i,l,_,a,d)}else c.compressedTexSubImage2D(e,r,0,0,i,l,a,d)}else if(n){if(_==null)throw new m("Missing depth dimension for 3D texture upload");o.compressedTexImage3D(e,r,a,i,l,_,0,d)}else c.compressedTexImage2D(e,r,a,i,l,0,d)}_forEachMipmapLevel(e,r=1/0){let{width:a,height:i,depth:l,hasMipmap:_,target:d}=this._descriptor;const c=d===x.TEXTURE_3D;if(a==null||i==null||c&&l==null)throw new m("Missing texture dimensions for mipmap calculation");for(let o=0;e(o,a,i,l),_&&(a!==1||i!==1||c&&l!==1)&&!(o>=r);++o)a=Math.max(1,a>>1),i=Math.max(1,i>>1),c&&(l=Math.max(1,l>>1))}};function G(t,e){(e.width!=null&&e.width<0||e.height!=null&&e.height<0||e.depth!=null&&e.depth<0)&&console.error("Negative dimension parameters are not allowed!");const r=t.type===w.WEBGL2;r||!e.isImmutable&&!M(e.target)||console.error("Immutable and 3D-like textures are not supported in WebGL1!"),!r&&(e.width!=null&&C(e.width)&&e.height!=null&&C(e.height)||(typeof e.wrapMode=="number"?e.wrapMode!==S.CLAMP_TO_EDGE&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):e.wrapMode.s===S.CLAMP_TO_EDGE&&e.wrapMode.t===S.CLAMP_TO_EDGE||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),e.hasMipmap&&console.error("Mipmapping requires power-of-two textures!")))}function y(t,e){let r=e.samplingMode,a=e.samplingMode;r===g.LINEAR_MIPMAP_NEAREST||r===g.LINEAR_MIPMAP_LINEAR?(r=g.LINEAR,e.hasMipmap||(a=g.LINEAR)):r!==g.NEAREST_MIPMAP_NEAREST&&r!==g.NEAREST_MIPMAP_LINEAR||(r=g.NEAREST,e.hasMipmap||(a=g.NEAREST)),t.texParameteri(e.target,t.TEXTURE_MAG_FILTER,r),t.texParameteri(e.target,t.TEXTURE_MIN_FILTER,a)}function X(t,e){typeof e.wrapMode=="number"?(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode)):(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode.s),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode.t))}function re(t,e){const r=t.capabilities.textureFilterAnisotropic;r&&t.gl.texParameterf(e.target,r.TEXTURE_MAX_ANISOTROPY,e.maxAnisotropy??1)}function ie(t){return t in s}function se(t){return t in E}function P(t){return t!=null&&"type"in t&&t.type==="compressed"}function ae(t){return t!=null&&"byteLength"in t}function U(t){return t!=null&&!P(t)&&!ae(t)}function M(t){return t===x.TEXTURE_3D||t===x.TEXTURE_2D_ARRAY}function W(t,e,r,a=1){let i=Math.max(e,r);return t===x.TEXTURE_3D&&(i=Math.max(i,a)),Math.round(Math.log(i)/Math.LN2)+1}f.TEXTURE_UNIT_FOR_UPDATES=0;const oe=new Map;export{Q as E,f as T,O as a,J as b,le as c,_e as d,ee as e,de as i,he as o,b as u};
