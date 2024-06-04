import{gc as Ie,lS as ae,eL as Ue,h9 as $e,a1 as q,lT as ke,lU as Le,lV as Ne,id as He,lW as qe,lX as Ge,eN as x,ay as Ve,aM as Me,T as Ce,eY as We,b0 as K,eM as Z,fb as Y,kz as je,eS as oe,eT as Ke,eQ as Ye,jV as Xe,jX as Qe,c$ as le,hN as Je,kj as Ze,lY as et,lZ as tt,s as it,kl as de,l_ as rt,_ as ue,km as st,O as nt,eH as at,J as X,P as ot,aG as ce,cy as lt,l$ as dt,ad as he}from"./index-12dd5c8b.js";import{i as ut}from"./CIMResourceManager-a5d8c3b8.js";import{t as ct,a as ht,o as _e,h as _t,i as ft}from"./Container-198529e2.js";import{i as mt}from"./BufferPool-71afc5af.js";import{T as B,E as S,S as $}from"./color-6ec0570b.js";import{g as pt,a as L,h as G,w as A,d as gt,m as vt}from"./WGLContainer-243184a6.js";import{L as E}from"./enums-fb086c25.js";import{e as bt,a as W,f as ee}from"./ProgramTemplate-999f70b4.js";import{n as U}from"./programUtils-715182e9.js";import{e as fe,r as xt,t as wt,a as yt,m as Tt,J as Ft,n as Bt,b as Et,c as Ot}from"./MagnifierPrograms-d7a974ec.js";import{d as as,y as os}from"./MagnifierPrograms-d7a974ec.js";import{h as te,E as C,a as ie,i as Rt}from"./FramebufferObject-6ee3ae72.js";import{R as v,E as H,F as re,O as j,I as Q,L as D,C as me,D as O,B as se,G as T,U as ne,P as Pt}from"./enums-bdecffa2.js";import{o as pe,N as Mt}from"./RenderingContext-086bb0e3.js";import{z as Ct,q as St,Q as At,E as Dt,F as zt,L as N,M as It,_ as Se,R as ge}from"./definitions-155f1005.js";import{t as ve}from"./VertexElementDescriptor-2925c6af.js";import{e as R,T as k}from"./Texture-0cf2362c.js";import{s as Ut}from"./imageUtils-da6bf03a.js";import{r as ds}from"./GraphicsView2D-34fcbb1f.js";import{i as cs}from"./GraphicContainer-12e57e9b.js";import{t as be}from"./requestImageUtils-0d64e764.js";import"./fontUtils-212fe9b0.js";import"./AttributeStoreView-7efabc1c.js";import"./TiledDisplayObject-ed5a7e78.js";import"./visualVariablesUtils-db1790bf.js";import"./cimAnalyzer-2bfe9e9b.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-7ea6e057.js";import"./OptimizedGeometry-196224d4.js";import"./GeometryUtils-984e8446.js";import"./enums-f1a6a48a.js";import"./alignmentUtils-ae955d28.js";import"./number-e491b09e.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-a229a918.js";import"./floatRGBA-21bd05a4.js";import"./GeometryUtils-4e58e792.js";import"./ExpandedCIM-08454bd2.js";import"./util-f64b12a5.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-e291056a.js";import"./featureConversionUtils-95549077.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./NestedMap-1b5db22e.js";import"./Rasterizer-c2747039.js";import"./rasterizingUtils-6d9b72cc.js";import"./pbf-6250b773.js";import"./imageutils-7c870b1d.js";import"./Matcher-f26993e5.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-efc94998.js";import"./CircularArray-ef508845.js";import"./testSVGPremultipliedAlpha-db1c4796.js";import"./throttle-7bf02de9.js";import"./ComputedAttributeStorage-b52a4bf7.js";import"./TimeOnly-6c59d70d.js";import"./OrderIndependentTransparency-6ae10952.js";import"./basicInterfaces-11f56cb3.js";import"./doublePrecisionUtils-e3c3d0d8.js";import"./normalizeUtilsSync-5cd22245.js";import"./projectionSupport-828b93bf.js";import"./json-48e3ea08.js";import"./BaseGraphicContainer-32ae5692.js";import"./FeatureContainer-b7e40b42.js";import"./TileContainer-7d42903b.js";import"./vec3f32-2da9db36.js";let $t=class{constructor(e){this.events=new Ie,this._hasMajorPerformanceCaveat=!1,this._lastRenderFrameCounter=0,this._canvas=document.createElement("canvas"),this._canvas.setAttribute("style","width: 100%; height:100%; display:block; willChange:transform");const t={failIfMajorPerformanceCaveat:!0,alpha:!0,antialias:!1,depth:!0,stencil:!0};e.appendChild(this._canvas);let i=ae("2d",this._canvas,t);i||(i=ae("2d",this._canvas,{...t,failIfMajorPerformanceCaveat:!1}),this._hasMajorPerformanceCaveat=!0),this._gl=i,this._handles=Ue([$e(this._canvas,"webglcontextlost",r=>this.events.emit("webgl-context-lost",r))])}destroy(){var e;(e=this._canvas.parentNode)==null||e.removeChild(this._canvas),this._canvas=null,this._handles.remove(),this._gl=null}get gl(){return this._gl}render(e,t){if(this._hasMajorPerformanceCaveat||q("esri-force-performance-mode")){if(++this._lastRenderFrameCounter>=q("esri-performance-mode-frames-between-render")&&(t(),this._lastRenderViewState=e.state.clone(),this._lastRenderFrameCounter=0),this._lastRenderViewState){const[i,r,n,s,a,o]=this._computeViewTransform(this._lastRenderViewState,e.state);this._canvas.style.transform=`matrix(${i}, ${r}, ${n}, ${s}, ${a}, ${o})`}}else t()}resize(e){const t=this._canvas,i=t.style,{state:{size:r},pixelRatio:n}=e,s=r[0],a=r[1],o=Math.round(s*n),d=Math.round(a*n);t.width===o&&t.height===d||(t.width=o,t.height=d),i.width=s+"px",i.height=a+"px"}_computeViewTransform(e,t){const[i,r]=e.center,[n,s]=t.center,[a,o]=e.toScreen([0,0],n,s),[d,u]=e.toScreen([0,0],i,r),c=d-a,_=u-o,m=e.scale/t.scale,g=t.rotation-e.rotation,f=Ge();return ke(f),Le(f,f,[m,m]),Ne(f,f,He(g)),qe(f,f,[c,_]),f}};const kt={background:{"background.frag":`#ifdef PATTERN
uniform lowp float u_opacity;
uniform lowp sampler2D u_texture;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_tileTextureCoord;
#else
uniform lowp vec4 u_color;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
void main() {
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = u_opacity * color;
#else
gl_FragColor = u_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"background.vert":`precision mediump float;
attribute vec2 a_pos;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform mediump float u_coord_range;
uniform mediump float u_depth;
#ifdef PATTERN
uniform mediump mat3 u_pattern_matrix;
varying mediump vec2 v_tileTextureCoord;
uniform mediump vec4 u_tlbr;
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
#endif
void main() {
gl_Position = vec4((u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0)).xy, u_depth, 1.0);
#ifdef PATTERN
v_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;
v_tlbr             = u_tlbr / u_mosaicSize.xyxy;
#endif
#ifdef ID
v_id = u_id / 255.0;
#endif
}`},circle:{"circle.frag":`precision lowp float;
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
mediump float dist = length(v_offset);
mediump float alpha = smoothstep(0.0, -v_blur, dist - 1.0);
lowp float color_mix_ratio = v_stroke_width < 0.01 ? 0.0 : smoothstep(-v_blur, 0.0, dist - v_radius / (v_radius + v_stroke_width));
gl_FragColor = alpha * mix(v_color, v_stroke_color, color_mix_ratio);
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"circle.vert":`precision mediump float;
attribute vec2 a_pos;
#pragma header
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_circleTranslation;
uniform mediump float u_depth;
uniform mediump float u_antialiasingWidth;
void main()
{
#pragma main
v_color = color * opacity;
v_stroke_color = stroke_color * stroke_opacity;
v_stroke_width = stroke_width;
v_radius = radius;
v_blur = max(blur, u_antialiasingWidth / (radius + stroke_width));
mediump vec2 offset = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);
v_offset = offset;
#ifdef ID
v_id = u_id / 255.0;
#endif
mediump vec3 pos = u_dvsMat3 * vec3(a_pos * 0.5, 1.0) + u_displayMat3 * vec3((v_radius + v_stroke_width) * offset + u_circleTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},fill:{"fill.frag":`precision lowp float;
#ifdef PATTERN
uniform lowp sampler2D u_texture;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = fract(v_tileTextureCoord);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = v_color[3] * color;
#else
gl_FragColor = v_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"fill.vert":`precision mediump float;
attribute vec2 a_pos;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump float u_depth;
uniform mediump vec2 u_fillTranslation;
#ifdef PATTERN
#include <util/util.glsl>
uniform mediump vec2 u_mosaicSize;
uniform mediump float u_patternFactor;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
void main()
{
#pragma main
v_color = color * opacity;
#ifdef ID
v_id = u_id / 255.0;
#endif
#ifdef PATTERN
float patternWidth = nextPOT(tlbr.z - tlbr.x);
float patternHeight = nextPOT(tlbr.w - tlbr.y);
float scaleX = 1.0 / (patternWidth * u_patternFactor);
float scaleY = 1.0 / (patternHeight * u_patternFactor);
mat3 patterMat = mat3(scaleX, 0.0,    0.0,
0.0,    -scaleY, 0.0,
0.0,    0.0,    1.0);
v_tileTextureCoord = (patterMat * vec3(a_pos, 1.0)).xy;
v_tlbr             = tlbr / u_mosaicSize.xyxy;
#endif
vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},icon:{"icon.frag":`precision mediump float;
uniform lowp sampler2D u_texture;
#ifdef SDF
uniform lowp vec4 u_color;
uniform lowp vec4 u_outlineColor;
#endif
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
varying lowp vec4 v_color;
#ifdef SDF
varying mediump flaot v_halo_width;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
#include <util/encoding.glsl>
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef SDF
lowp vec4 fillPixelColor = v_color;
float d = rgba2float(texture2D(u_texture, v_tex)) - 0.5;
const float softEdgeRatio = 0.248062016;
float size = max(v_size.x, v_size.y);
float dist = d * softEdgeRatio * size;
fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);
if (v_halo_width > 0.25) {
lowp vec4 outlinePixelColor = u_outlineColor;
const float outlineLimitRatio = (16.0 / 86.0);
float clampedOutlineSize = softEdgeRatio * min(v_halo_width, outlineLimitRatio * max(v_size.x, v_size.y));
outlinePixelColor *= clamp(0.5 - (abs(dist) - clampedOutlineSize), 0.0, 1.0);
gl_FragColor = v_opacity * mixColors(fillPixelColor, outlinePixelColor);
}
else {
gl_FragColor = v_opacity * fillPixelColor;
}
#else
lowp vec4 texColor = texture2D(u_texture, v_tex);
gl_FragColor = v_opacity * texColor;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"icon.vert":`attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
#ifdef SDF
varying mediump float v_halo_width;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_iconTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
const float C_OFFSET_PRECISION = 1.0 / 8.0;
const float C_256_TO_RAD = 3.14159265359 / 128.0;
const float C_DEG_TO_RAD = 3.14159265359 / 180.0;
const float tileCoordRatio = 1.0 / 8.0;
uniform highp float u_time;
void main()
{
#pragma main
v_color = color;
v_opacity = opacity;
#ifdef SDF
v_halo_width = halo_width;
#endif
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_opacity *= interpolatedOpacity;
mediump float a_angle         = a_levelInfo[1];
mediump float a_minLevel      = a_levelInfo[2];
mediump float a_maxLevel      = a_levelInfo[3];
mediump vec2 a_tex            = a_texAngleRange.xy;
mediump float delta_z = 0.0;
mediump float rotated = mod(a_angle + u_mapRotation, 256.0);
delta_z += (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated));
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_opacity, 0.0);
vec2 offset = C_OFFSET_PRECISION * a_vertexOffset;
v_size = abs(offset);
#ifdef SDF
offset = (120.0 / 86.0) * offset;
#endif
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayViewMat3 * vec3(size * offset, 0.0) + u_displayMat3 * vec3(u_iconTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
#ifdef ID
v_id = u_id / 255.0;
#endif
v_tex = a_tex.xy / u_mosaicSize;
}`},line:{"line.frag":`precision lowp float;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
varying mediump float v_lineHalfWidth;
varying lowp vec4 v_color;
varying mediump float v_blur;
#if defined (PATTERN) || defined(SDF)
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
uniform sampler2D u_texture;
uniform mediump float u_antialiasing;
#endif
#ifdef SDF
#include <util/encoding.glsl>
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
mediump float fragDist = length(v_normal) * v_lineHalfWidth;
lowp float alpha = clamp((v_lineHalfWidth - fragDist) / v_blur, 0.0, 1.0);
#ifdef PATTERN
mediump float relativeTexX = fract(v_accumulatedDistance / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY = 0.5 + v_normal.y * v_lineHalfWidth / (v_patternSize.y * v_widthRatio);
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
lowp vec4 color = texture2D(u_texture, texCoord);
gl_FragColor = alpha * v_color[3] * color;
#elif defined(SDF)
mediump float relativeTexX = fract((v_accumulatedDistance * 0.5) / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY =  0.5 + 0.25 * v_normal.y;
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
mediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;
float dist = d * (v_lineHalfWidth + u_antialiasing / 2.0);
gl_FragColor = alpha * clamp(0.5 - dist, 0.0, 1.0) * v_color;
#else
gl_FragColor = alpha * v_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"line.vert":`precision mediump float;
attribute vec2 a_pos;
attribute vec4 a_extrude_offset;
attribute vec4 a_dir_normal;
attribute vec2 a_accumulatedDistance;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump float u_zoomFactor;
uniform mediump vec2 u_lineTranslation;
uniform mediump float u_antialiasing;
uniform mediump float u_depth;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
const float scale = 1.0 / 31.0;
const mediump float tileCoordRatio = 8.0;
#if defined (SDF)
const mediump float sdfPatternHalfWidth = 15.5;
#endif
#if defined (PATTERN) || defined(SDF)
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
#endif
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
varying mediump float v_lineHalfWidth;
varying mediump float v_blur;
void main()
{
#pragma main
v_color = color * opacity;
v_blur = blur + u_antialiasing;
v_normal = a_dir_normal.zw * scale;
#if defined (PATTERN) || defined(SDF)
v_tlbr          = tlbr / u_mosaicSize.xyxy;
v_patternSize   = vec2(tlbr.z - tlbr.x, tlbr.y - tlbr.w);
#if defined (PATTERN)
v_widthRatio = width / v_patternSize.y;
#else
v_widthRatio = width / sdfPatternHalfWidth / 2.0;
#endif
#endif
v_lineHalfWidth = (width + u_antialiasing) * 0.5;
mediump vec2 dir = a_dir_normal.xy * scale;
mediump vec2 offset_ = a_extrude_offset.zw * scale * offset;
mediump vec2 dist = v_lineHalfWidth * scale * a_extrude_offset.xy;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos + offset_ * tileCoordRatio / u_zoomFactor, 1.0) + u_displayViewMat3 * vec3(dist, 0.0) + u_displayMat3 * vec3(u_lineTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
#if defined (PATTERN) || defined(SDF)
v_accumulatedDistance = a_accumulatedDistance.x * u_zoomFactor / tileCoordRatio + dot(dir, dist + offset_);
#endif
#ifdef ID
v_id = u_id / 255.0;
#endif
}`},outline:{"outline.frag":`varying lowp vec4 v_color;
varying mediump vec2 v_normal;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
lowp float dist = abs(v_normal.y);
lowp float alpha = smoothstep(1.0, 0.0, dist);
gl_FragColor = alpha * v_color;
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"outline.vert":`attribute vec2 a_pos;
attribute vec2 a_offset;
attribute vec2 a_xnormal;
#pragma header
varying lowp vec4 v_color;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_fillTranslation;
uniform mediump float u_depth;
uniform mediump float u_outline_width;
varying lowp vec2 v_normal;
const float scale = 1.0 / 15.0;
void main()
{
#pragma main
v_color = color * opacity;
#ifdef ID
v_id = u_id / 255.0;
#endif
v_normal = a_xnormal;
mediump vec2 dist = u_outline_width * scale * a_offset;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(dist + u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},text:{"text.frag":`uniform lowp sampler2D u_texture;
varying lowp vec2 v_tex;
varying lowp vec4 v_color;
varying mediump float v_edgeWidth;
varying mediump float v_edgeDistance;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
lowp float dist = texture2D(u_texture, v_tex).a;
mediump float alpha = smoothstep(v_edgeDistance - v_edgeWidth, v_edgeDistance + v_edgeWidth, dist);
gl_FragColor = alpha * v_color;
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"text.vert":`attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
varying lowp vec4 v_color;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_textTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying lowp vec2 v_tex;
const float offsetPrecision = 1.0 / 8.0;
const mediump float edgePos = 0.75;
uniform mediump float u_antialiasingWidth;
varying mediump float v_edgeDistance;
varying mediump float v_edgeWidth;
uniform lowp float u_halo;
const float sdfFontScale = 1.0 / 24.0;
const float sdfPixel = 3.0;
uniform highp float u_time;
void main()
{
#pragma main
if (u_halo > 0.5)
{
v_color = halo_color * opacity;
halo_width *= sdfPixel;
halo_blur *= sdfPixel;
}
else
{
v_color = color * opacity;
halo_width = 0.0;
halo_blur = 0.0;
}
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_color *= interpolatedOpacity;
mediump float a_angle       = a_levelInfo[1];
mediump float a_minLevel    = a_levelInfo[2];
mediump float a_maxLevel    = a_levelInfo[3];
mediump vec2 a_tex          = a_texAngleRange.xy;
mediump float a_visMinAngle    = a_texAngleRange.z;
mediump float a_visMaxAngle    = a_texAngleRange.w;
mediump float delta_z = 0.0;
mediump float angle = mod(a_angle + u_mapRotation, 256.0);
if (a_visMinAngle < a_visMaxAngle)
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) + (1.0 - step(a_visMinAngle, angle)));
}
else
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) * (1.0 - step(a_visMinAngle, angle)));
}
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_color[3], 0.0);
v_tex = a_tex.xy / u_mosaicSize;
#ifdef ID
v_id = u_id / 255.0;
#endif
v_edgeDistance = edgePos - halo_width / size;
v_edgeWidth = (u_antialiasingWidth + halo_blur) / size;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + sdfFontScale * u_displayViewMat3 * vec3(offsetPrecision * size * a_vertexOffset, 0.0) + u_displayMat3 * vec3(u_textTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
}`},util:{"encoding.glsl":`const vec4 rgba2float_factors = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, rgba2float_factors);
}`,"util.glsl":`float nextPOT(in float x) {
return pow(2.0, ceil(log2(abs(x))));
}`}};function Lt(l){let e=kt;return l.split("/").forEach(t=>{e&&(e=e[t])}),e}const Nt=new bt(Lt);function P(l){return Nt.resolveIncludes(l)}const xe=l=>U({ID:l.id,PATTERN:l.pattern}),Ht={shaders:l=>({vertexShader:xe(l)+P("background/background.vert"),fragmentShader:xe(l)+P("background/background.frag")})},we=l=>U({ID:l.id}),qt={shaders:l=>({vertexShader:we(l)+P("circle/circle.vert"),fragmentShader:we(l)+P("circle/circle.frag")})},ye=l=>U({ID:l.id,PATTERN:l.pattern}),Gt={shaders:l=>({vertexShader:ye(l)+P("fill/fill.vert"),fragmentShader:ye(l)+P("fill/fill.frag")})},Te=l=>U({ID:l.id}),Vt={shaders:l=>({vertexShader:Te(l)+P("outline/outline.vert"),fragmentShader:Te(l)+P("outline/outline.frag")})},Fe=l=>U({ID:l.id,SDF:l.sdf}),Wt={shaders:l=>({vertexShader:Fe(l)+P("icon/icon.vert"),fragmentShader:Fe(l)+P("icon/icon.frag")})},Be=l=>U({ID:l.id,PATTERN:l.pattern,SDF:l.sdf}),jt={shaders:l=>({vertexShader:Be(l)+P("line/line.vert"),fragmentShader:Be(l)+P("line/line.frag")})},Ee=l=>U({ID:l.id}),Kt={shaders:l=>({vertexShader:Ee(l)+P("text/text.vert"),fragmentShader:Ee(l)+P("text/text.frag")})};let Yt=class{constructor(){this._programByKey=new Map}dispose(){this._programByKey.forEach(e=>e.dispose()),this._programByKey.clear()}getMaterialProgram(e,t,i){const r=t.key<<3|this._getMaterialOptionsValue(t.type,i);if(this._programByKey.has(r))return this._programByKey.get(r);const n=this._getProgramTemplate(t.type),{shaders:s}=n,{vertexShader:a,fragmentShader:o}=s(i),d=t.getShaderHeader(),u=t.getShaderMain(),c=a.replace("#pragma header",d).replace("#pragma main",u),_=e.programCache.acquire(c,o,t.getAttributeLocations());return this._programByKey.set(r,_),_}_getMaterialOptionsValue(e,t){switch(e){case E.BACKGROUND:{const i=t;return(i.pattern?1:0)<<1|(i.id?1:0)}case E.FILL:{const i=t;return(i.pattern?1:0)<<1|(i.id?1:0)}case E.OUTLINE:return t.id?1:0;case E.LINE:{const i=t;return(i.sdf?1:0)<<2|(i.pattern?1:0)<<1|(i.id?1:0)}case E.ICON:{const i=t;return(i.sdf?1:0)<<1|(i.id?1:0)}case E.CIRCLE:return t.id?1:0;case E.TEXT:return t.id?1:0;default:return 0}}_getProgramTemplate(e){switch(e){case E.BACKGROUND:return Ht;case E.CIRCLE:return qt;case E.FILL:return Gt;case E.ICON:return Wt;case E.LINE:return jt;case E.OUTLINE:return Vt;case E.TEXT:return Kt;default:return null}}},Ae=class{constructor(){this._initialized=!1}dispose(){this._program=x(this._program),this._vertexArrayObject=x(this._vertexArrayObject)}render(e,t,i,r){e&&(this._initialized||this._initialize(e),e.setBlendFunctionSeparate(v.ONE,v.ONE_MINUS_SRC_ALPHA,v.ONE,v.ONE_MINUS_SRC_ALPHA),e.bindVAO(this._vertexArrayObject),e.useProgram(this._program),t.setSamplingMode(i),e.bindTexture(t,0),this._program.setUniform1i("u_tex",0),this._program.setUniform1f("u_opacity",r),e.drawArrays(H.TRIANGLE_STRIP,0,4),e.bindTexture(null,0),e.bindVAO())}_initialize(e){if(this._initialized)return!0;const t=W(e,fe);if(!t)return!1;const i=new Int8Array(16);i[0]=-1,i[1]=-1,i[2]=0,i[3]=0,i[4]=1,i[5]=-1,i[6]=1,i[7]=0,i[8]=-1,i[9]=1,i[10]=0,i[11]=1,i[12]=1,i[13]=1,i[14]=1,i[15]=1;const r=fe.attributes,n=new ee(e,r,pt,{geometry:te.createVertex(e,re.STATIC_DRAW,i)});return this._program=t,this._vertexArrayObject=n,this._initialized=!0,!0}};const De=l=>l===B.HITTEST||l===B.LABEL_ALPHA,Xt=l=>(De(l)?1:0)|(l===B.HIGHLIGHT?2:0),Qt=({rendererInfo:l,drawPhase:e},t,i)=>`${t.getVariationHash()}-${Xt(e)}-${l.getVariationHash()}-${i!=null&&i.join(".")}`,Jt=(l,e,t,i={})=>{if(i={...i,...e.getVariation(),...l.rendererInfo.getVariation(),highlight:l.drawPhase===B.HIGHLIGHT,id:De(l.drawPhase)},t!=null)for(const r of t)i[r]=!0;return i};let Zt=class{constructor(e){this._rctx=e,this._programByKey=new Map}dispose(){this._programByKey.forEach(e=>e.dispose()),this._programByKey.clear()}getProgram(e,t=[]){const i=e.vsPath+"."+e.fsPath+JSON.stringify(t);if(this._programByKey.has(i))return this._programByKey.get(i);const r={...t.map(u=>typeof u=="string"?{name:u,value:!0}:u).reduce((u,c)=>({...u,[c.name]:c.value}),{})},{vsPath:n,fsPath:s,attributes:a}=e,o=pe(n,s,a,r),d=this._rctx.programCache.acquire(o.shaders.vertexShader,o.shaders.fragmentShader,o.attributes);if(!d)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(i,d),d}getMaterialProgram(e,t,i,r,n){const s=Qt(e,t,n);if(this._programByKey.has(s))return this._programByKey.get(s);const a=Jt(e,t,n,{ignoresSamplerPrecision:e.context.driverTest.ignoresSamplerPrecision.result}),o=pe(i,i,r,a),d=this._rctx.programCache.acquire(o.shaders.vertexShader,o.shaders.fragmentShader,o.attributes);if(!d)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(s,d),d}},ei=class{constructor(e,t){this._queue=[],this._context=e,this._refreshable=t}destroy(){this._queue=[]}enqueueTextureUpdate(e,t){const i=Ve(),r=e,n=St,s=Math.ceil(r.height/n);if(Me(t),this._context.type===Ce.WEBGL1)this._queue.push({type:"no-chunk",request:e,resolver:i,options:t});else for(let a=0;a<s;a++){const o=a*n,d=a===s-1,u=d?r.height-n*a:n;this._queue.push({type:"chunk",request:e,resolver:i,chunk:a,chunkOffset:o,destHeight:u,chunkIsLast:d,options:t})}return We(t,a=>i.reject(a)),i.promise}upload(){let e=0;for(;this._queue.length;){const t=performance.now(),i=this._queue.shift();if(i){if(i.options.signal!=null&&i.options.signal.aborted)continue;switch(i.type){case"chunk":this._uploadChunk(i);break;case"no-chunk":this._uploadNoChunk(i)}const r=performance.now()-t;if(e+=r,e+r>=Ct)break}}this._queue.length&&this._refreshable.requestRender()}_uploadChunk(e){const{request:t,resolver:i,chunkOffset:r,chunkIsLast:n,destHeight:s}=e,{data:a,texture:o,width:d}=t;a!=null&&(o.updateData(0,0,r,d,s,a,r),n&&i.resolve())}_uploadNoChunk(e){const{request:t,resolver:i}=e,{data:r,texture:n}=t;n.setData(r),i.resolve()}};const ti=Xe(-.5,-.5);let ii=class{constructor(){this._centerNdc=K(),this._pxToNdc=K(),this._worldDimensionsPx=K(),this._mat3=Z(),this._initialized=!1}dispose(){this._program=x(this._program),this._quad=x(this._quad)}render(e,t,i){const{context:r}=e,n=this._updateGeometry(e,i);if(t!=null){const{r:s,g:a,b:o,a:d}=t;r.setClearColor(d*s/255,d*a/255,d*o/255,d)}else r.setClearColor(0,0,0,0);if(r.setStencilFunction(j.ALWAYS,0,255),r.setStencilWriteMask(255),!n)return r.setClearStencil(1),void r.clear(r.gl.STENCIL_BUFFER_BIT|r.gl.COLOR_BUFFER_BIT);r.setClearStencil(0),r.clear(r.gl.STENCIL_BUFFER_BIT|r.gl.COLOR_BUFFER_BIT),this._initialized||this._initialize(r),r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.setColorMask(!1,!1,!1,!1),r.setBlendingEnabled(!1),r.setStencilOp(Q.KEEP,Q.KEEP,Q.REPLACE),r.setStencilFunction(j.ALWAYS,1,255),r.setStencilTestEnabled(!0),r.useProgram(this._program),this._program.setUniformMatrix3fv("u_worldExtent",this._mat3),this._quad.draw(),this._quad.unbind()}_initialize(e){if(this._initialized)return;const t=W(e,xt);t&&(this._program=t,this._quad=new L(e,[0,0,1,0,0,1,1,1]),this._initialized=!0)}_updateGeometry(e,t){const{state:i,pixelRatio:r}=e,{size:n,rotation:s}=i,a=Math.round(n[0]*r),o=Math.round(n[1]*r);if(!i.spatialReference.isWrappable)return!1;const d=Qe(s),u=Math.abs(Math.cos(d)),c=Math.abs(Math.sin(d)),_=Math.round(a*u+o*c),m=Math.round(i.worldScreenWidth);if(_<=m)return!1;const g=a*c+o*u,f=m*r,b=(t.left-t.right)*r/a,p=(t.bottom-t.top)*r/o;Y(this._worldDimensionsPx,f,g,1),Y(this._pxToNdc,2/a,-2/o,1),Y(this._centerNdc,b,p,1);const h=this._mat3;return je(h,this._centerNdc),oe(h,h,this._pxToNdc),s!==0&&Ke(h,h,d),oe(h,h,this._worldDimensionsPx),Ye(h,h,ti),!0}},ri=class extends G{constructor(){super(...arguments),this.defines=[],this._desc={vsPath:"fx/integrate",fsPath:"fx/integrate",attributes:new Map([["a_position",0]])}}dispose(){this._quad&&this._quad.dispose()}bind(){}unbind(){}draw(e,t){if(!(t!=null&&t.size))return;const{context:i,renderingOptions:r}=e;this._quad||(this._quad=new L(i,[0,0,1,0,0,1,1,1]));const n=i.getBoundFramebufferObject(),{x:s,y:a,width:o,height:d}=i.getViewport();t.bindTextures(i);const u=t.getBlock(At);if(u==null)return;const c=u.getFBO(i),_=u.getFBO(i,1);i.setViewport(0,0,t.size,t.size),this._computeDelta(e,_,r.labelsAnimationTime),this._updateAnimationState(e,_,c),i.bindFramebuffer(n),i.setViewport(s,a,o,d)}_computeDelta(e,t,i){const{context:r,painter:n,displayLevel:s}=e,a=n.materialManager.getProgram(this._desc,["delta"]);r.bindFramebuffer(t),r.setClearColor(0,0,0,0),r.clear(r.gl.COLOR_BUFFER_BIT),r.useProgram(a);const o=q("featurelayer-animation-enabled")?i:1;a.setUniform1i("u_maskTexture",Dt),a.setUniform1i("u_sourceTexture",zt),a.setUniform1f("u_timeDelta",e.deltaTime),a.setUniform1f("u_animationTime",o),a.setUniform1f("u_zoomLevel",Math.round(10*s)),this._quad.draw()}_updateAnimationState(e,t,i){const{context:r,painter:n}=e,s=n.materialManager.getProgram(this._desc,["update"]);r.bindTexture(t.colorTexture,1),r.useProgram(s),s.setUniform1i("u_sourceTexture",1),r.bindFramebuffer(i),r.setClearColor(0,0,0,0),r.clear(r.gl.COLOR_BUFFER_BIT),this._quad.draw()}},Oe=class extends G{constructor(e){super(),this.name=this.constructor.name,this.defines=[e]}dispose(){}bind({context:e,painter:t}){this._prev=e.getBoundFramebufferObject();const i=t.getFbos().effect0;e.bindFramebuffer(i),e.setColorMask(!0,!0,!0,!0),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT)}unbind(){}draw(e,t){const{context:i,painter:r}=e,n=r.getPostProcessingEffects(t),s=i.getBoundFramebufferObject();for(const{postProcessingEffect:a,effect:o}of n)a.draw(e,s,o);i.bindFramebuffer(this._prev),i.setStencilTestEnabled(!1),r.blitTexture(i,s.colorTexture,D.NEAREST),i.setStencilTestEnabled(!0)}},si=class{constructor(){this._width=void 0,this._height=void 0,this._resources=null}dispose(){this._resources&&(this._resources.quadGeometry.dispose(),this._resources.quadVAO.dispose(),this._resources.highlightProgram.dispose(),this._resources.blurProgram.dispose(),this._resources=null)}preBlur(e,t){e.bindTexture(t,N),e.useProgram(this._resources.blurProgram),this._resources.blurProgram.setUniform4fv("u_direction",[1,0,1/this._width,0]),this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",ct),e.bindVAO(this._resources.quadVAO),e.drawArrays(H.TRIANGLE_STRIP,0,4),e.bindVAO()}finalBlur(e,t){e.bindTexture(t,N),e.useProgram(this._resources.blurProgram),this._resources.blurProgram.setUniform4fv("u_direction",[0,1,0,1/this._height]),this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",ht),e.bindVAO(this._resources.quadVAO),e.drawArrays(H.TRIANGLE_STRIP,0,4),e.bindVAO()}renderHighlight(e,t,i){e.bindTexture(t,N),e.useProgram(this._resources.highlightProgram),i.applyHighlightOptions(e,this._resources.highlightProgram),e.bindVAO(this._resources.quadVAO),e.setBlendingEnabled(!0),e.setBlendFunction(v.ONE,v.ONE_MINUS_SRC_ALPHA),e.drawArrays(H.TRIANGLE_STRIP,0,4),e.bindVAO()}_initialize(e,t,i){this._width=t,this._height=i;const r=te.createVertex(e,re.STATIC_DRAW,new Int8Array([-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,1,1,1]).buffer),n=new ee(e,new Map([["a_position",0],["a_texcoord",1]]),{geometry:[new ve("a_position",2,me.BYTE,0,4),new ve("a_texcoord",2,me.UNSIGNED_BYTE,2,4)]},{geometry:r}),s=W(e,wt),a=W(e,yt);e.useProgram(s),s.setUniform1i("u_texture",N),s.setUniform1i("u_shade",It),s.setUniform1f("u_sigma",_e),e.useProgram(a),a.setUniform1i("u_texture",N),a.setUniform1f("u_sigma",_e),this._resources={quadGeometry:r,quadVAO:n,highlightProgram:s,blurProgram:a}}setup(e,t,i){this._resources?(this._width=t,this._height=i):this._initialize(e,t,i)}};function Re(l,e,t){const i=new R(e,t);return i.wrapMode=O.CLAMP_TO_EDGE,new C(l,i,new ie(se.STENCIL_INDEX8,e,t))}let ni=class{constructor(){this._width=void 0,this._height=void 0,this._resources=null}dispose(){this._resources&&(this._resources.sharedBlur1Fbo.dispose(),this._resources.sharedBlur2Fbo.dispose(),this._resources=null)}_initialize(e,t,i){this._width=t,this._height=i;const r=Re(e,t,i),n=Re(e,t,i);this._resources={sharedBlur1Fbo:r,sharedBlur2Fbo:n}}setup(e,t,i){!this._resources||this._width===t&&this._height===i||this.dispose(),this._resources||this._initialize(e,t,i)}get sharedBlur1Tex(){return this._resources.sharedBlur1Fbo.colorTexture}get sharedBlur1Fbo(){return this._resources.sharedBlur1Fbo}get sharedBlur2Tex(){return this._resources.sharedBlur2Fbo.colorTexture}get sharedBlur2Fbo(){return this._resources.sharedBlur2Fbo}};const I=4,V=4/I;let ai=class extends G{constructor(){super(...arguments),this.defines=["highlight"],this._hlRenderer=new si,this._width=void 0,this._height=void 0,this._boundFBO=null,this._hlSurfaces=new ni,this._adjustedWidth=void 0,this._adjustedHeight=void 0,this._blitRenderer=new Ae}dispose(){var e,t;(e=this._hlSurfaces)==null||e.dispose(),(t=this._hlRenderer)==null||t.dispose(),this._boundFBO=null}bind(e){const{context:t,painter:i}=e,{width:r,height:n}=t.getViewport(),s=i.getFbos().effect0;this.setup(e,r,n),t.bindFramebuffer(s),t.setColorMask(!0,!0,!0,!0),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT)}unbind(){}setup({context:e},t,i){this._width=t,this._height=i;const r=t%I,n=i%I;t+=r<I/2?-r:I-r,i+=n<I/2?-n:I-n,this._adjustedWidth=t,this._adjustedHeight=i,this._boundFBO=e.getBoundFramebufferObject();const s=Math.round(t*V),a=Math.round(i*V);this._hlRenderer.setup(e,s,a),this._hlSurfaces.setup(e,s,a)}draw(e){const{context:t,highlightGradient:i}=e;if(!i)return;const r=t.getBoundFramebufferObject();t.setViewport(0,0,this._adjustedWidth*V,this._adjustedHeight*V),t.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),t.setStencilTestEnabled(!1),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT),this._blitRenderer.render(t,r.colorTexture,D.NEAREST,1),t.setStencilTestEnabled(!1),t.setBlendingEnabled(!1),t.setColorMask(!1,!1,!1,!0),t.bindFramebuffer(this._hlSurfaces.sharedBlur2Fbo),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT),this._hlRenderer.preBlur(t,this._hlSurfaces.sharedBlur1Tex),t.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT),this._hlRenderer.finalBlur(t,this._hlSurfaces.sharedBlur2Tex),t.bindFramebuffer(this._boundFBO),t.setBlendingEnabled(!0),t.setColorMask(!0,!0,!0,!0),t.setViewport(0,0,this._width,this._height),this._hlRenderer.renderHighlight(t,this._hlSurfaces.sharedBlur1Tex,i),this._boundFBO=null}},oi=class extends G{constructor(){super(...arguments),this.name=this.constructor.name,this.defines=["hittest"]}dispose(){this._fbo!=null&&this._fbo.dispose()}createOptions({pixelRatio:e},t,i=Se){if(!t.length)return null;const r=t.shift(),n=r.x,s=r.y;return this._outstanding=r,{type:"hittest",distance:i*e,position:[n,s]}}bind(e){const{context:t,attributeView:i}=e;if(!i.size)return;const r=i.getBlock(ge);if(r==null)return;const n=r.getFBO(t);t.setViewport(0,0,i.size,i.size),t.bindFramebuffer(n),t.setColorMask(!0,!0,!0,!0),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT|t.gl.DEPTH_BUFFER_BIT)}unbind(e){}draw(e){if(this._outstanding==null)return;const t=this._outstanding;this._outstanding=null,this._resolve(e,t.resolvers)}async _resolve(e,t){const{context:i,attributeView:r}=e,n=r.getBlock(ge);if(n==null)return void t.forEach(u=>u.resolve([]));const s=n.getFBO(i),a=new Uint8Array(s.width*s.height*4);try{await s.readPixelsAsync(0,0,s.width,s.height,T.RGBA,ne.UNSIGNED_BYTE,a)}catch{return void t.forEach(c=>c.resolve([]))}const o=[];for(let u=0;u<a.length;u+=4){const c=a[u],_=a[u+3];c&&o.push({id:u/4,directHits:_})}o.sort((u,c)=>c.directHits===u.directHits?c.id-u.id:c.directHits-u.directHits);const d=o.map(u=>u.id);t.forEach(u=>u.resolve(d))}};class li extends G{constructor(){super(...arguments),this.name=this.constructor.name,this.defines=["id"],this._lastSize=0,this._boundFBO=null}dispose(){this._fbo!=null&&this._fbo.dispose()}bind({context:e,painter:t}){this._boundFBO=e.getBoundFramebufferObject();const i=t.getFbos().effect0;e.bindFramebuffer(i),e.setColorMask(!0,!0,!0,!0),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT)}unbind({context:e}){e.bindFramebuffer(this._boundFBO),this._boundFBO=null}draw(e,t,i=2*Se){this._resolve(e,t,i)}async _resolve({context:e,state:t,pixelRatio:i},r,n){const s=e.getBoundFramebufferObject(),a=t.size[1]*i,o=Math.round(n*i),d=o/2,u=o/2;this._ensureBuffer(o),r.forEach(async(c,_)=>{const m=new Map,g=Math.floor(_.x*i-o/2),f=Math.floor(a-_.y*i-o/2);await s.readPixelsAsync(g,f,o,o,T.RGBA,ne.UNSIGNED_BYTE,this._buf);for(let p=0;p<this._buf32.length;p++){const h=this._buf32[p];if(h!==4294967295&&h!==0){const M=p%o,w=o-Math.floor(p/o),y=(d-M)*(d-M)+(u-w)*(u-w),F=m.has(h)?m.get(h):4294967295;m.set(h,Math.min(y,F))}}const b=Array.from(m).sort((p,h)=>p[1]-h[1]).map(p=>p[0]);c.resolve(b),r.delete(_)})}_ensureBuffer(e){this._lastSize!==e&&(this._lastSize=e,this._buf=new Uint8Array(4*e*e),this._buf32=new Uint32Array(this._buf.buffer))}}const J=5,di=[1,0],ui=[0,1],ci=[1,.8,.6,.4,.2],hi=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];let _i=class{constructor(){this._intensityFBO=null,this._compositeFBO=null,this._mipsFBOs=new Array(J),this._nMips=J,this._kernelSizeArray=[3,5,7,9,11],this._size=[0,0],this._programDesc={luminosityHighPass:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/luminosityHighPass",attributes:new Map([["a_position",0]])},gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){if(this._quad=x(this._quad),this._intensityFBO=x(this._intensityFBO),this._compositeFBO=x(this._compositeFBO),this._mipsFBOs){for(let e=0;e<this._nMips;e++)this._mipsFBOs[e]&&(this._mipsFBOs[e].horizontal.dispose(),this._mipsFBOs[e].vertical.dispose());this._mipsFBOs=null}}draw(e,t,i){const{width:r,height:n}=t,{context:s,painter:a}=e,{materialManager:o}=a,d=s.gl,u=this._programDesc,{strength:c,radius:_,threshold:m}=i;this._quad||(this._quad=new L(s,[-1,-1,1,-1,-1,1,1,1])),this._createOrResizeResources(e,r,n),s.setStencilTestEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunction(v.ONE,v.ONE_MINUS_SRC_ALPHA),s.setStencilWriteMask(0);const g=this._quad;g.bind(),s.bindFramebuffer(this._intensityFBO);const f=o.getProgram(u.luminosityHighPass);s.useProgram(f),s.bindTexture(t.colorTexture,0),f.setUniform1i("u_texture",0),f.setUniform3fv("u_defaultColor",[0,0,0]),f.setUniform1f("u_defaultOpacity",0),f.setUniform1f("u_luminosityThreshold",m),f.setUniform1f("u_smoothWidth",.01);const b=[Math.round(r/2),Math.round(n/2)];s.setViewport(0,0,b[0],b[1]),s.setClearColor(0,0,0,0),s.clear(d.COLOR_BUFFER_BIT),g.draw(),s.setBlendingEnabled(!1);let p=this._intensityFBO.colorTexture;for(let w=0;w<this._nMips;w++){const y=o.getProgram(u.gaussianBlur,[{name:"radius",value:this._kernelSizeArray[w]}]);s.useProgram(y),s.bindTexture(p,w+1),y.setUniform1i("u_colorTexture",w+1),y.setUniform2fv("u_texSize",b),y.setUniform2fv("u_direction",di),s.setViewport(0,0,b[0],b[1]);const F=this._mipsFBOs[w];s.bindFramebuffer(F.horizontal),g.draw(),p=F.horizontal.colorTexture,s.bindFramebuffer(F.vertical),s.bindTexture(p,w+1),y.setUniform2fv("u_direction",ui),g.draw(),p=F.vertical.colorTexture,b[0]=Math.round(b[0]/2),b[1]=Math.round(b[1]/2)}s.setViewport(0,0,r,n);const h=o.getProgram(u.composite,[{name:"nummips",value:J}]);s.bindFramebuffer(this._compositeFBO),s.useProgram(h),h.setUniform1f("u_bloomStrength",c),h.setUniform1f("u_bloomRadius",_),h.setUniform1fv("u_bloomFactors",ci),h.setUniform3fv("u_bloomTintColors",hi),s.bindTexture(this._mipsFBOs[0].vertical.colorTexture,1),h.setUniform1i("u_blurTexture1",1),s.bindTexture(this._mipsFBOs[1].vertical.colorTexture,2),h.setUniform1i("u_blurTexture2",2),s.bindTexture(this._mipsFBOs[2].vertical.colorTexture,3),h.setUniform1i("u_blurTexture3",3),s.bindTexture(this._mipsFBOs[3].vertical.colorTexture,4),h.setUniform1i("u_blurTexture4",4),s.bindTexture(this._mipsFBOs[4].vertical.colorTexture,5),h.setUniform1i("u_blurTexture5",5),g.draw(),s.bindFramebuffer(t),s.setBlendingEnabled(!0);const M=o.getProgram(u.blit);s.useProgram(M),s.bindTexture(this._compositeFBO.colorTexture,6),M.setUniform1i("u_texture",6),s.setBlendFunction(v.ONE,v.ONE),g.draw(),g.unbind(),s.setBlendFunction(v.ONE,v.ONE_MINUS_SRC_ALPHA),s.setStencilTestEnabled(!0)}_createOrResizeResources(e,t,i){const{context:r}=e;if(this._compositeFBO&&this._size[0]===t&&this._size[1]===i)return;this._size[0]=t,this._size[1]=i;const n=[Math.round(t/2),Math.round(i/2)];if(this._compositeFBO)this._compositeFBO.resize(t,i);else{const s=new R(t,i);s.internalFormat=T.RGBA,s.wrapMode=O.CLAMP_TO_EDGE,this._compositeFBO=new C(r,s)}if(this._intensityFBO)this._intensityFBO.resize(n[0],n[1]);else{const s=new R(n[0],n[1]);s.internalFormat=T.RGBA,s.wrapMode=O.CLAMP_TO_EDGE,this._intensityFBO=new C(r,s)}for(let s=0;s<this._nMips;s++){if(this._mipsFBOs[s])this._mipsFBOs[s].horizontal.resize(n[0],n[1]),this._mipsFBOs[s].vertical.resize(n[0],n[1]);else{const a=new R(n[0],n[1]);a.internalFormat=T.RGBA,a.wrapMode=O.CLAMP_TO_EDGE,this._mipsFBOs[s]={horizontal:new C(r,a),vertical:new C(r,a)}}n[0]=Math.round(n[0]/2),n[1]=Math.round(n[1]/2)}}};const fi=[1,0],mi=[0,1];let pi=class{constructor(){this._blurFBO=null,this._size=[0,0],this._programDesc={gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},radialBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/radial-blur",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){this._blurFBO&&(this._blurFBO.dispose(),this._blurFBO=null)}draw(e,t,i){const{context:r}=e,{type:n,radius:s}=i;if(s===0)return;this._createOrResizeResources(e),this._quad||(this._quad=new L(r,[-1,-1,1,-1,-1,1,1,1]));const a=this._quad;a.bind(),n==="blur"?this._gaussianBlur(e,t,s):this._radialBlur(e,t),a.unbind()}_gaussianBlur(e,t,i){const{context:r,state:n,painter:s,pixelRatio:a}=e,{size:o}=n,{materialManager:d}=s,u=this._programDesc,c=this._quad,_=[Math.round(a*o[0]),Math.round(a*o[1])],m=this._blurFBO,g=d.getProgram(u.gaussianBlur,[{name:"radius",value:Math.ceil(i)}]);r.useProgram(g),r.setBlendingEnabled(!1),r.bindFramebuffer(m),r.bindTexture(t.colorTexture,4),g.setUniform1i("u_colorTexture",4),g.setUniform2fv("u_texSize",_),g.setUniform2fv("u_direction",fi),g.setUniform1f("u_sigma",i),c.draw(),r.bindFramebuffer(t),r.setStencilWriteMask(0),r.setStencilTestEnabled(!1),r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.bindTexture(m==null?void 0:m.colorTexture,5),g.setUniform1i("u_colorTexture",5),g.setUniform2fv("u_direction",mi),c.draw(),r.setBlendingEnabled(!0),r.setBlendFunction(v.ONE,v.ONE_MINUS_SRC_ALPHA),r.setStencilTestEnabled(!0)}_radialBlur(e,t){const{context:i,painter:r}=e,{materialManager:n}=r,s=this._programDesc,a=this._quad,o=this._blurFBO;i.bindFramebuffer(o);const d=n.getProgram(s.radialBlur);i.useProgram(d),i.setBlendingEnabled(!1),i.bindTexture(t.colorTexture,4),d.setUniform1i("u_colorTexture",4),a.draw(),i.bindFramebuffer(t),i.setStencilWriteMask(0),i.setStencilTestEnabled(!1),i.setDepthWriteEnabled(!1),i.setDepthTestEnabled(!1),i.setBlendingEnabled(!0);const u=n.getProgram(s.blit);i.useProgram(u),i.bindTexture(o==null?void 0:o.colorTexture,5),u.setUniform1i("u_texture",5),i.setBlendFunction(v.ONE,v.ONE_MINUS_SRC_ALPHA),a.draw()}_createOrResizeResources(e){const{context:t,state:i,pixelRatio:r}=e,{size:n}=i,s=Math.round(r*n[0]),a=Math.round(r*n[1]);if(!this._blurFBO||this._size[0]!==s||this._size[1]!==a)if(this._size[0]=s,this._size[1]=a,this._blurFBO)this._blurFBO.resize(s,a);else{const o=new R(s,a);o.internalFormat=T.RGBA,o.wrapMode=O.CLAMP_TO_EDGE,this._blurFBO=new C(t,o)}}};class gi{constructor(){this._layerFBOTexture=null,this._size=[0,0],this._programDesc={vsPath:"post-processing/pp",fsPath:"post-processing/filterEffect",attributes:new Map([["a_position",0]])}}dispose(){this._layerFBOTexture=x(this._layerFBOTexture)}draw(e,t,i){const{width:r,height:n}=t;this._createOrResizeResources(e,r,n);const{context:s,painter:a}=e,{materialManager:o}=a,d=this._programDesc,u=this._quad,c=i.colorMatrix;u.bind();const _=this._layerFBOTexture;s.bindFramebuffer(t),t.copyToTexture(0,0,r,n,0,0,_),s.setBlendingEnabled(!1),s.setStencilTestEnabled(!1);const m=o.getProgram(d);s.useProgram(m),s.bindTexture(_,2),m.setUniformMatrix4fv("u_coefficients",c),m.setUniform1i("u_colorTexture",2),u.draw(),s.setBlendingEnabled(!0),s.setBlendFunction(v.ONE,v.ONE_MINUS_SRC_ALPHA),s.setStencilTestEnabled(!0),u.unbind()}_createOrResizeResources(e,t,i){const{context:r}=e;if(!this._layerFBOTexture||this._size[0]!==t||this._size[1]!==i){if(this._size[0]=t,this._size[1]=i,this._layerFBOTexture)this._layerFBOTexture.resize(t,i);else{const n=new R;n.internalFormat=T.RGBA,n.wrapMode=O.CLAMP_TO_EDGE,n.width=t,n.height=i,this._layerFBOTexture=new k(r,n)}this._quad||(this._quad=new L(r,[-1,-1,1,-1,-1,1,1,1]))}}}const vi=[1,0],bi=[0,1];class xi{constructor(){this._layerFBOTexture=null,this._horizontalBlurFBO=null,this._verticalBlurFBO=null,this._size=[0,0],this._quad=null,this._programDesc={blur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/drop-shadow/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){this._layerFBOTexture=x(this._layerFBOTexture),this._horizontalBlurFBO=x(this._horizontalBlurFBO),this._verticalBlurFBO=x(this._verticalBlurFBO)}draw(e,t,i){const{context:r,state:n,painter:s}=e,{materialManager:a}=s,o=this._programDesc,d=t.width,u=t.height,c=[Math.round(d),Math.round(u)],{blurRadius:_,offsetX:m,offsetY:g,color:f}=i,b=[le(m),le(g)];this._createOrResizeResources(e,d,u,c);const p=this._horizontalBlurFBO,h=this._verticalBlurFBO;r.setStencilWriteMask(0),r.setStencilTestEnabled(!1),r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1);const M=this._layerFBOTexture;t.copyToTexture(0,0,d,u,0,0,M),this._quad||(this._quad=new L(r,[-1,-1,1,-1,-1,1,1,1])),r.setViewport(0,0,c[0],c[1]);const w=this._quad;w.bind(),r.setBlendingEnabled(!1);const y=a.getProgram(o.blur,[{name:"radius",value:Math.ceil(_)}]);r.useProgram(y),r.bindFramebuffer(p),r.bindTexture(t.colorTexture,4),y.setUniform1i("u_colorTexture",4),y.setUniform2fv("u_texSize",c),y.setUniform2fv("u_direction",vi),y.setUniform1f("u_sigma",_),w.draw(),r.bindFramebuffer(h),r.bindTexture(p==null?void 0:p.colorTexture,5),y.setUniform1i("u_colorTexture",5),y.setUniform2fv("u_direction",bi),w.draw(),r.bindFramebuffer(t),r.setViewport(0,0,d,u);const F=a.getProgram(o.composite);r.useProgram(F),r.bindTexture(h==null?void 0:h.colorTexture,2),F.setUniform1i("u_blurTexture",2),r.bindTexture(M,3),F.setUniform1i("u_layerFBOTexture",3),F.setUniform4fv("u_shadowColor",[f[3]*(f[0]/255),f[3]*(f[1]/255),f[3]*(f[2]/255),f[3]]),F.setUniformMatrix3fv("u_displayViewMat3",n.displayMat3),F.setUniform2fv("u_shadowOffset",b),w.draw(),r.setBlendingEnabled(!0),r.setStencilTestEnabled(!0),r.setBlendFunction(v.ONE,v.ONE_MINUS_SRC_ALPHA),w.unbind()}_createOrResizeResources(e,t,i,r){const{context:n}=e;if(!this._horizontalBlurFBO||this._size[0]!==t||this._size[1]!==i){if(this._size[0]=t,this._size[1]=i,this._horizontalBlurFBO)this._horizontalBlurFBO.resize(r[0],r[1]);else{const s=new R(r[0],r[1]);s.internalFormat=T.RGBA,s.wrapMode=O.CLAMP_TO_EDGE,this._horizontalBlurFBO=new C(n,s)}if(this._verticalBlurFBO)this._verticalBlurFBO.resize(r[0],r[1]);else{const s=new R(r[0],r[1]);s.internalFormat=T.RGBA,s.wrapMode=O.CLAMP_TO_EDGE,this._verticalBlurFBO=new C(n,s)}if(this._layerFBOTexture)this._layerFBOTexture.resize(t,i);else{const s=new R;s.internalFormat=T.RGBA,s.wrapMode=O.CLAMP_TO_EDGE,s.width=t,s.height=i,this._layerFBOTexture=new k(n,s)}}}}class wi{constructor(){this._size=[0,0],this._layerFBOTexture=null}dispose(){this._layerFBOTexture=x(this._layerFBOTexture)}draw(e,t,i){const{width:r,height:n}=t;this._createOrResizeResources(e,r,n);const{context:s,painter:a}=e,{amount:o}=i,d=s.gl,u=this._layerFBOTexture;s.bindFramebuffer(t),t.copyToTexture(0,0,r,n,0,0,u),s.setBlendingEnabled(!0),s.setStencilTestEnabled(!1),s.setDepthTestEnabled(!1),s.setClearColor(0,0,0,0),s.clear(d.COLOR_BUFFER_BIT),a.blitTexture(s,u,D.NEAREST,o)}_createOrResizeResources(e,t,i){const{context:r}=e;if(!this._layerFBOTexture||this._size[0]!==t||this._size[1]!==i)if(this._size[0]=t,this._size[1]=i,this._layerFBOTexture)this._layerFBOTexture.resize(t,i);else{const n=new R;n.internalFormat=T.RGBA,n.wrapMode=O.CLAMP_TO_EDGE,n.samplingMode=D.NEAREST,n.width=t,n.height=i,this._layerFBOTexture=new k(r,n)}}}function yi(l){switch(l){case"bloom":case"blur":case"opacity":case"drop-shadow":return l;default:return"colorize"}}const Ti={colorize:()=>new gi,blur:()=>new pi,bloom:()=>new _i,opacity:()=>new wi,"drop-shadow":()=>new xi};class Fi{constructor(){this._effectMap=new Map}dispose(){this._effectMap.forEach(e=>e.dispose()),this._effectMap.clear()}getPostProcessingEffects(e){if(!e||e.length===0)return[];const t=[];for(const i of e){const r=yi(i.type);let n=this._effectMap.get(r);n||(n=Ti[r](),this._effectMap.set(r,n)),t.push({postProcessingEffect:n,effect:i})}return t}}class Bi{constructor(e,t){this.brushes=e,this.name=t.name,this.drawPhase=t.drawPhase||B.MAP,this._targetFn=t.target,this.effects=t.effects||[],this.enableDefaultDraw=t.enableDefaultDraw??(()=>!0),this.forceDrawByDisplayOrder=!!t.forceDrawByDisplayOrder}render(e){var s;const{context:t,profiler:i}=e,r=this._targetFn(),n=this.drawPhase&e.drawPhase;if(i.recordPassStart(this.name),n){this.enableDefaultDraw()&&this._doRender(e,r),i.recordPassEnd();for(const a of this.effects){if(!a.enable())continue;const o=a.apply,d=(s=a.args)==null?void 0:s.call(a),u=t.getViewport(),c=t.getBoundFramebufferObject(),_=e.passOptions;this._bindEffect(e,o,d),this._doRender(e,r,o.defines),this._drawAndUnbindEffect(e,o,u,c,_,d)}}}_doRender(e,t,i){if(t==null)return;const{profiler:r,context:n}=e;if(this.forceDrawByDisplayOrder){for(const o of this.brushes){if(r.recordBrushStart(o.name),o.brushEffect!=null){const d=n.getViewport(),u=n.getBoundFramebufferObject(),c=e.passOptions;this._bindEffect(e,o.brushEffect),this._drawWithBrush(o,e,t,i),this._drawAndUnbindEffect(e,o.brushEffect,d,u,c)}else this._drawWithBrush(o,e,t,i);r.recordBrushEnd()}const s=t,a=e;a.attributeView.bindTextures(e.context);for(const o of s){if(!o.visible)continue;o.commit(a),a.context.setStencilFunction(j.EQUAL,o.stencilRef,255);const d=o.getGeometry(S.MARKER),u=o.getGeometry(S.TEXT);if(d!=null&&d.records&&(u!=null&&u.records)){const c=new Map,_=d.records.getCursor();for(;_.next();)c.set(_.id,[_.getDrawInfo(d,S.MARKER)]);const m=u.records.getCursor();for(;m.next();){const f=c.get(m.id),b=m.getDrawInfo(u,S.TEXT);f?f.push(b):c.set(m.id,[b])}const g=Array.from(c.entries()).sort(([f,b],[p,h])=>p-f);for(const[f,b]of g)for(const p of b){const h=a.painter.getBrush(p.geometryType,$.DEFAULT);h.prepareState(a,i),h.drawGeometry(a,o,p,i)}}else if(d){const c=a.painter.getBrush(S.MARKER,$.DEFAULT);c.prepareState(a,i),d.forEachCommand(_=>{c.drawGeometry(a,o,_,i)})}else if(u){const c=a.painter.getBrush(S.TEXT,$.DEFAULT);c.prepareState(a,i),u.forEachCommand(_=>{c.drawGeometry(a,o,_,i)})}}}else for(const s of this.brushes){if(r.recordBrushStart(s.name),s.brushEffect!=null){const a=n.getViewport(),o=n.getBoundFramebufferObject(),d=e.passOptions;this._bindEffect(e,s.brushEffect),this._drawWithBrush(s,e,t,i),this._drawAndUnbindEffect(e,s.brushEffect,a,o,d)}else this._drawWithBrush(s,e,t,i);r.recordBrushEnd()}}_drawWithBrush(e,t,i,r){Je(i)?(e.prepareState(t,r),e.drawMany(t,i,r)):i.visible&&(e.prepareState(t,r),e.draw(t,i,r))}_bindEffect(e,t,i){const{profiler:r}=e;r.recordPassStart(this.name+"."+t.name),t.bind(e,i);const n=t.createOptions(e,i);e.passOptions=n}_drawAndUnbindEffect(e,t,i,r,n,s){const{profiler:a,context:o}=e;e.passOptions=n,a.recordBrushStart(t.name),t.draw(e,s),t.unbind(e,s),o.bindFramebuffer(r);const{x:d,y:u,width:c,height:_}=i;o.setViewport(d,u,c,_),a.recordBrushEnd(),a.recordPassEnd()}}function Ei(l,e){switch(l){case S.LINE:return A.line;case S.TEXT:return A.text;case S.LABEL:return A.label;case S.FILL:return e===$.DOT_DENSITY?A.dotDensity:A.fill;case S.MARKER:switch(e){case $.HEATMAP:return A.heatmap;case $.PIE_CHART:return A.pieChart;default:return A.marker}}}let Oi=class{constructor(e,t,i){this.context=e,this._blitRenderer=new Ae,this._worldExtentRenderer=new ii,this._brushCache=new Map,this._lastWidth=null,this._lastHeight=null,this._vtlMaterialManager=new Yt,this._blendEffect=new Tt,this._stencilBuf=null,this._prevBeforeLayerFBOStack=[],this._fboPool=[],this.effects={highlight:new ai,hittest:new oi,hittestVTL:new li,integrate:new ri,insideEffect:new Oe("inside"),outsideEffect:new Oe("outside")},this.materialManager=new Zt(e),this.textureManager=new Ft(t,i,e.type===Ce.WEBGL2),this.textureUploadManager=new ei(e,t),this._effectsManager=new Fi}dispose(){if(this.materialManager.dispose(),this.textureManager.dispose(),this.textureUploadManager.destroy(),this._blitRenderer=x(this._blitRenderer),this._worldExtentRenderer=x(this._worldExtentRenderer),this._brushCache&&(this._brushCache.forEach(e=>e.dispose()),this._brushCache.clear(),this._brushCache=null),this._fbos){let e;for(e in this._fbos)this._fbos[e]&&this._fbos[e].dispose()}for(const e of this._fboPool)e.dispose();if(this._fboPool.length=0,this.effects){let e;for(e in this.effects)this.effects[e]&&this.effects[e].dispose()}this._effectsManager.dispose(),this._blendEffect.dispose(this.context),this._vtlMaterialManager=x(this._vtlMaterialManager)}get blitRenderer(){return this._blitRenderer}get vectorTilesMaterialManager(){return this._vtlMaterialManager}getFbos(){if(!this._fbos)throw new Error("InternalError: Painter FBOs not initialized");return this._fbos}acquireFbo(e,t){let i;if(this._fboPool.length>0)i=this._fboPool.pop();else{const r=new R(e,t);r.samplingMode=D.NEAREST,r.wrapMode=O.CLAMP_TO_EDGE,i=new C(this.context,r,this._stencilBuf)}return i.width===e&&i.height===t||i.resize(e,t),i}releaseFbo(e){this._fboPool.push(e)}getSharedStencilBuffer(){return this._stencilBuf}beforeRenderPhases(e,t,i){const{context:r}=e;this._worldExtentRenderer.render(e,t,i);const{width:n,height:s}=r.getViewport();if(this.updateFBOs(n,s),this._prevFBO=r.getBoundFramebufferObject(),r.bindFramebuffer(this.getFbos().output),r.setColorMask(!0,!0,!0,!0),t!=null){const{r:a,g:o,b:d,a:u}=t;r.setClearColor(u*a/255,u*o/255,u*d/255,u)}else r.setClearColor(0,0,0,0);r.setDepthWriteEnabled(!0),r.setClearDepth(1),r.clear(r.gl.COLOR_BUFFER_BIT|r.gl.DEPTH_BUFFER_BIT),r.setDepthWriteEnabled(!1)}afterRenderPhases(e){const{context:t}=e;t.bindFramebuffer(this._prevFBO),t.setStencilFunction(j.EQUAL,1,255),t.setStencilTestEnabled(!0),t.setDepthTestEnabled(!1),this.blitTexture(t,this.getFbos().output.colorTexture,D.NEAREST)}beforeRenderLayer(e,t,i){const{context:r,blendMode:n,effects:s,drawPhase:a,requireFBO:o}=e;if(o||Pe(a,n,s,i)){const d=r.getBoundFramebufferObject();this._prevBeforeLayerFBOStack.push(d);const{width:u,height:c}=r.getViewport(),_=this.acquireFbo(u,c);r.bindFramebuffer(_),r.setColorMask(!0,!0,!0,!0),r.setClearColor(0,0,0,0),r.setDepthWriteEnabled(!0),r.setClearDepth(1),r.clear(r.gl.COLOR_BUFFER_BIT|r.gl.DEPTH_BUFFER_BIT),r.setDepthWriteEnabled(!1)}r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.setStencilTestEnabled(!0),r.setClearStencil(t),r.setStencilWriteMask(255),r.clear(r.gl.STENCIL_BUFFER_BIT)}afterRenderLayer(e,t){const{context:i,blendMode:r,effects:n,requireFBO:s,drawPhase:a}=e;if(s||Pe(a,r,n,t)){const o=i.getBoundFramebufferObject();n!=null&&n.length>0&&a===B.MAP&&this._applyEffects(e,n,o),i.bindFramebuffer(this._prevBeforeLayerFBOStack.pop()),i.setStencilTestEnabled(!1),i.setStencilWriteMask(0),i.setBlendingEnabled(!0),i.setBlendFunctionSeparate(v.ONE,v.ONE_MINUS_SRC_ALPHA,v.ONE,v.ONE_MINUS_SRC_ALPHA),i.setColorMask(!0,!0,!0,!0);const d=r==null||a===B.HIGHLIGHT?"normal":r;this._blendEffect.draw(e,o.colorTexture,D.NEAREST,d,t),this.releaseFbo(o)}}getBrush(e,t){const i=Ei(e,t);let r=this._brushCache.get(i);return r===void 0&&(r=new i,this._brushCache.set(i,r)),r}renderObject(e,t,i,r){const n=A[i];if(!n)return;let s=this._brushCache.get(n);s===void 0&&(s=new n,this._brushCache.set(n,s)),s.prepareState(e,r),s.draw(e,t,r)}renderObjects(e,t,i,r){const n=A[i];if(!n)return;let s=this._brushCache.get(n);s===void 0&&(s=new n,this._brushCache.set(n,s)),s.drawMany(e,t,r)}registerRenderPass(e){const t=e.brushes.map(i=>(this._brushCache.has(i)||this._brushCache.set(i,new i),this._brushCache.get(i)));return new Bi(t,e)}blitTexture(e,t,i,r=1){e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(v.ONE,v.ONE_MINUS_SRC_ALPHA,v.ONE,v.ONE_MINUS_SRC_ALPHA),e.setColorMask(!0,!0,!0,!0),this._blitRenderer.render(e,t,i,r)}getPostProcessingEffects(e){return this._effectsManager.getPostProcessingEffects(e)}updateFBOs(e,t){if(e!==this._lastWidth||t!==this._lastHeight){if(this._lastWidth=e,this._lastHeight=t,this._fbos){let n;for(n in this._fbos)this._fbos[n].resize(e,t);return}const i=new R(e,t);i.samplingMode=D.NEAREST,i.wrapMode=O.CLAMP_TO_EDGE;const r=new ie(se.DEPTH_STENCIL,e,t);this._stencilBuf=new Rt(this.context,r),this._fbos={output:new C(this.context,i,this._stencilBuf),effect0:new C(this.context,i,this._stencilBuf)}}}_applyEffects(e,t,i){const{context:r}=e,n=this._effectsManager.getPostProcessingEffects(t);for(const{postProcessingEffect:s,effect:a}of n)r.bindFramebuffer(i),s.draw(e,i,a)}};function Pe(l,e,t,i){return l!==B.LABEL_ALPHA&&l!==B.LABEL&&l!==B.HIGHLIGHT&&(i!==1||e!=null&&e!=="normal"||t!=null&&t.length>0)}const Ri=2e3;class is extends _t{constructor(e,t){super(),this._trash=new Set,this._renderRemainingTime=0,this._lastFrameRenderTime=0,this._renderRequested=Ze(!1),this.stage=this,this._stationary=!0,this._canvas=new $t(e),this.context=new Mt(this._canvas.gl,t.contextOptions??{}),this.resourceManager=new ut,this.painter=new Oi(this.context,this,this.resourceManager),q("esri-2d-profiler")&&(this._debugOutput=document.createElement("div"),this._debugOutput.setAttribute("style","margin: 24px 64px; position: absolute; color: red;"),e.appendChild(this._debugOutput));const i=()=>this._highlightGradient;this._renderParameters={drawPhase:0,state:this.state,pixelRatio:window.devicePixelRatio,stationary:!1,globalOpacity:1,blendMode:null,deltaTime:-1,time:0,inFadeTransition:!1,effects:null,context:this.context,painter:this.painter,timeline:t.timeline||new et,renderingOptions:t.renderingOptions,requestRender:()=>this.requestRender(),allowDelayedRender:!1,requireFBO:!1,profiler:new Bt(this.context,this._debugOutput),dataUploadCounter:0,get highlightGradient(){return i()},backgroundColor:t.backgroundColor},this._taskHandle=tt({render:r=>this.renderFrame(r)}),this._taskHandle.pause(),this._lostWebGLContextHandle=this._canvas.events.on("webgl-context-lost",r=>this.emit("webgl-error",{error:new it("webgl-context-lost",r.statusMessage)})),this._bufferPool=new mt}destroy(){var e,t;this.removeAllChildren(),this._emptyTrash(),this._taskHandle=de(this._taskHandle),this._lostWebGLContextHandle=de(this._lostWebGLContextHandle),this._canvas.destroy(),(t=(e=this._debugOutput)==null?void 0:e.parentNode)==null||t.removeChild(this._debugOutput),this._bufferPool.destroy(),this.resourceManager.destroy(),this.painter.dispose(),this.context.dispose(),this._canvas=null}get backgroundColor(){return this._renderParameters.backgroundColor}set backgroundColor(e){this._renderParameters.backgroundColor=e,this.requestRender()}get bufferPool(){return this._bufferPool}get renderingOptions(){return this._renderingOptions}set renderingOptions(e){this._renderingOptions=e,this.requestRender()}get renderRequested(){return this._renderRequested.value}get state(){return this._state}set state(e){this._state=e,this.requestRender()}get stationary(){return this._stationary}set stationary(e){this._stationary!==e&&(this._stationary=e,this.requestRender())}trashDisplayObject(e){this._trash.add(e),this.requestRender()}untrashDisplayObject(e){return this._trash.delete(e)}requestRender(){this._renderRemainingTime=Ri,this.renderRequested||(this._renderRequested.value=!0,this._taskHandle.resume())}renderFrame(e){const t=this._lastFrameRenderTime?e.time-this._lastFrameRenderTime:0;this._renderRemainingTime-=t,this._renderRemainingTime<=0&&this._taskHandle.pause(),this._lastFrameRenderTime=e.time,this._renderRequested.value=!1,this._renderParameters.state=this._state,this._renderParameters.stationary=this.stationary,this._renderParameters.pixelRatio=window.devicePixelRatio,this._renderParameters.globalOpacity=1,this._renderParameters.time=e.time,this._renderParameters.deltaTime=e.deltaTime,this._renderParameters.effects=null,this.processRender(this._renderParameters),this._emptyTrash()}_createTransforms(){return{dvs:Z()}}renderChildren(e){for(const t of this.children)t.beforeRender(e);this._canvas.render(e,()=>this._renderChildren(this.children,e));for(const t of this.children)t.afterRender(e)}_renderChildren(e,t){const i=this.context;this.painter.textureUploadManager.upload(),i.resetInfo(),t.profiler.recordStart("drawLayers"),t.dataUploadCounter=0,this.painter.beforeRenderPhases(t,t.backgroundColor,this.state.padding),t.drawPhase=B.MAP;for(const r of e)r.processRender(t);if(this.children.some(r=>r.hasHighlight)){t.drawPhase=B.HIGHLIGHT;for(const r of e)r.processRender(t)}if(this.children.some(r=>r.hasLabels)){t.drawPhase=B.LABEL;for(const r of e)r.processRender(t)}if(q("esri-tiles-debug")){t.drawPhase=B.DEBUG;for(const r of e)r.processRender(t)}this.painter.afterRenderPhases(t),t.profiler.recordEnd("drawLayers"),i.logInfo()}doRender(e){const t=this.context,{state:i,pixelRatio:r}=e;this._canvas.resize(e),t.setViewport(0,0,r*i.size[0],r*i.size[1]),t.setDepthWriteEnabled(!0),t.setStencilWriteMask(255),this.renderChildren(e)}async takeScreenshot(e,t,i,r){const n=Math.round(this.state.size[0]*e.resolutionScale),s=Math.round(this.state.size[1]*e.resolutionScale),a=e.resolutionScale,o=this.context,d=this._state.clone();if(r!=null){const M=d.viewpoint;d.viewpoint.rotation=r,d.viewpoint=M}const u={...this._renderParameters,drawPhase:null,globalOpacity:1,stationary:!0,state:d,pixelRatio:a,time:performance.now(),deltaTime:0,blendMode:null,effects:null,inFadeTransition:!1,backgroundColor:i},c=gt(o.gl),_=new R(n,s);_.wrapMode=O.CLAMP_TO_EDGE,_.internalFormat=c?Pt.RGBA8:T.RGBA,_.isImmutable=c;const m=new C(o,_,new ie(se.DEPTH_STENCIL,n,s)),g=o.getBoundFramebufferObject(),f=o.getViewport();o.bindFramebuffer(m),o.setViewport(0,0,n,s),this._renderChildren(t??this.children,u);const b=this._readbackScreenshot(m,{...e.cropArea,y:s-(e.cropArea.y+e.cropArea.height)});o.bindFramebuffer(g),o.setViewport(f.x,f.y,f.width,f.height),this.requestRender();const p=await b;let h;return e.outputScale===1?h=p:(h=new ImageData(Math.round(p.width*e.outputScale),Math.round(p.height*e.outputScale)),rt(p,h,!0)),m.dispose(),h}async _readbackScreenshot(e,t){const i=Ut(t.width,t.height,document.createElement("canvas"));return await e.readPixelsAsync(t.x,t.y,t.width,t.height,T.RGBA,ne.UNSIGNED_BYTE,new Uint8Array(i.data.buffer)),i}_emptyTrash(){for(;this._trash.size>0;){const e=Array.from(this._trash);this._trash.clear();for(const t of e)t.processDetach()}}}async function Pi(l){const e=ue(()=>import("./mask-svg-023bbc42.js"),[]),t=ue(()=>import("./overlay-svg-d62383f3.js"),[]),i=be((await e).default,{signal:l}),r=be((await t).default,{signal:l}),n={mask:await i,overlay:await r};return Me(l),n}class rs extends ft{constructor(){super(),this._handles=new st,this._resourcePixelRatio=1,this.visible=!1}destroy(){this._handles=nt(this._handles),this._disposeRenderResources(),this._resourcesTask=at(this._resourcesTask)}get backgroundColor(){return this._backgroundColor}set backgroundColor(e){this._backgroundColor=e,this.requestRender()}get magnifier(){return this._magnifier}set magnifier(e){this._magnifier=e,this._handles.removeAll(),this._handles.add([X(()=>e.version,()=>{this.visible=e.visible&&e.position!=null&&e.size>0,this.requestRender()},ot),X(()=>[e.maskUrl,e.overlayUrl],()=>this._reloadResources()),X(()=>e.size,()=>{this._disposeRenderResources(),this.requestRender()})])}_createTransforms(){return{dvs:Z()}}doRender(e){const t=e.context;if(!this._resourcesTask)return void this._reloadResources();if(e.drawPhase!==B.MAP||!this._canRender())return;this._updateResources(e);const i=this._magnifier;if(i.position==null)return;const r=e.pixelRatio,n=i.size*r,s=1/i.factor,a=Math.ceil(s*n);this._readbackTexture.resize(a,a);const{size:o}=e.state,d=r*o[0],u=r*o[1],c=.5*a,_=.5*a,m=ce(r*i.position.x,c,d-c-1),g=ce(u-r*i.position.y,_,u-_-1);t.setBlendingEnabled(!0);const f=m-c,b=g-_,p=this._readbackTexture;t.bindTexture(p,0),t.gl.copyTexImage2D(p.descriptor.target,0,p.descriptor.pixelFormat,f,b,a,a,0);const h=this.backgroundColor,M=h?[h.a*h.r/255,h.a*h.g/255,h.a*h.b/255,h.a]:[1,1,1,1],w=(m+i.offset.x*r)/d*2-1,y=(g-i.offset.y*r)/u*2-1,F=n/d*2,ze=n/u*2,z=this._program;t.bindVAO(this._vertexArrayObject),t.bindTexture(this._overlayTexture,6),t.bindTexture(this._maskTexture,7),t.useProgram(z),z.setUniform4fv("u_background",M),z.setUniform1i("u_readbackTexture",0),z.setUniform1i("u_overlayTexture",6),z.setUniform1i("u_maskTexture",7),z.setUniform4f("u_drawPos",w,y,F,ze),z.setUniform1i("u_maskEnabled",i.maskEnabled?1:0),z.setUniform1i("u_overlayEnabled",i.overlayEnabled?1:0),t.setStencilTestEnabled(!1),t.setColorMask(!0,!0,!0,!0),t.drawArrays(H.TRIANGLE_STRIP,0,4),t.bindVAO()}_canRender(){return this.mask&&this.overlay&&this._magnifier!=null}_reloadResources(){this._resourcesTask&&this._resourcesTask.abort();const e=this._magnifier!=null?this._magnifier.maskUrl:null,t=this._magnifier!=null?this._magnifier.overlayUrl:null;this._resourcesTask=lt(async i=>{const r=e==null||t==null?Pi(i):null,n=e!=null?he(e,{responseType:"image",signal:i}).then(d=>d.data):r.then(d=>d.mask),s=t!=null?he(t,{responseType:"image",signal:i}).then(d=>d.data):r.then(d=>d.overlay),[a,o]=await Promise.all([n,s]);this.mask=a,this.overlay=o,this._disposeRenderResources(),this.requestRender()})}_disposeRenderResources(){this._readbackTexture=x(this._readbackTexture),this._overlayTexture=x(this._overlayTexture),this._maskTexture=x(this._maskTexture),this._vertexArrayObject=x(this._vertexArrayObject),this._program=x(this._program)}_updateResources(e){if(e.pixelRatio!==this._resourcePixelRatio&&this._disposeRenderResources(),this._readbackTexture)return;const t=e.context;this._resourcePixelRatio=e.pixelRatio;const i=Math.ceil(this._magnifier.size*e.pixelRatio);this._program=Et(t);const r=new Uint16Array([0,1,0,0,1,1,1,0]),n=Ot.attributes;this._vertexArrayObject=new ee(t,n,vt,{geometry:te.createVertex(t,re.STATIC_DRAW,r)}),this.overlay.width=i,this.overlay.height=i;const s=new R;s.internalFormat=T.RGBA,s.wrapMode=O.CLAMP_TO_EDGE,s.samplingMode=D.NEAREST,s.flipped=!0,s.preMultiplyAlpha=!dt(this.overlay.src)||!e.context.driverTest.svgPremultipliesAlpha.result,this._overlayTexture=new k(t,s,this.overlay),this.mask.width=i,this.mask.height=i,s.pixelFormat=s.internalFormat=T.ALPHA,this._maskTexture=new k(t,s,this.mask);const a=1/this._magnifier.factor;s.pixelFormat=s.internalFormat=T.RGBA,s.width=s.height=Math.ceil(a*i),s.samplingMode=D.LINEAR,s.flipped=!1,this._readbackTexture=new k(t,s)}}export{cs as GraphicContainer,ds as GraphicsView2D,as as LabelManager,rs as MagnifierView2D,os as MapViewNavigation,is as Stage};
