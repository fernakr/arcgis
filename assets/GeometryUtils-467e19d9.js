import{s as w}from"./index-8fbcd33f.js";import{i as C}from"./alignmentUtils-ae955d28.js";import{S as o,E as i,L as n,A as S}from"./color-887ae2cd.js";function P(s,t,e){const r=n.SIZE_FIELD_STOPS|n.SIZE_MINMAX_VALUE|n.SIZE_SCALE_STOPS|n.SIZE_UNIT_VALUE,a=(t&(S.FIELD_TARGETS_OUTLINE|S.MINMAX_TARGETS_OUTLINE|S.SCALE_TARGETS_OUTLINE|S.UNIT_TARGETS_OUTLINE))>>>4;return s===i.LINE&&e.isOutline||s===i.FILL&&R(e.symbologyType)?r&a:r&~a}const T=0,z=8,Z=7,m=8,E=11,L=11,M=12,I=13,_=14,b=15,O=16,f=17,A=18,F=19,U=20,x=21,B=26,$=Object.keys(o).filter(s=>typeof o[s]=="number").reduce((s,t)=>({...s,[t]:o[t]}),{});function X(s){return s===o.SIMPLE||s===o.OUTLINE_FILL_SIMPLE}function R(s){return s===o.OUTLINE_FILL||s===o.OUTLINE_FILL_SIMPLE}function j(s){return X(s.symbologyType)}function q(s){return R(s.symbologyType)}function J(s,t){switch(s){case i.FILL:return u.from(t);case i.LINE:return c.from(t);case i.MARKER:return p.from(t);case i.TEXT:return y.from(t);case i.LABEL:return V.from(t);default:throw new Error(`Unable to createMaterialKey for unknown geometryType ${s}`)}}function Q(s){switch(v.load(s).geometryType){case i.MARKER:return new p(s);case i.FILL:return new u(s);case i.LINE:return new c(s);case i.TEXT:return new y(s);case i.LABEL:return new V(s)}}class v{static load(t){const e=this.shared;return e.data=t,e}constructor(t){this._data=0,this._data=t}set data(t){this._data=t??0}get data(){return this._data}get geometryType(){return this.bits(m,E)}set geometryType(t){this.setBits(t,m,E)}get mapAligned(){return!!this.bit(U)}set mapAligned(t){this.setBit(U,t)}get sdf(){return!!this.bit(L)}set sdf(t){this.setBit(L,t??!1)}get pattern(){return!!this.bit(M)}set pattern(t){this.setBit(M,t)}get textureBinding(){return this.bits(T,z)}set textureBinding(t){this.setBits(t,T,z)}get symbologyType(){return this.bits(x,B)}set symbologyType(t){this.setBits(t,x,B)}get geometryTypeString(){switch(this.geometryType){case i.FILL:return"fill";case i.MARKER:return"marker";case i.LINE:return"line";case i.TEXT:return"text";case i.LABEL:return"label";default:throw new w(`Unable to handle unknown geometryType: ${this.geometryType}`)}}setBit(t,e){const r=1<<t;e?this._data|=r:this._data&=~r}bit(t){return(this._data&1<<t)>>t}setBits(t,e,r){for(let a=e,l=0;a<r;a++,l++)this.setBit(a,(t&1<<l)!=0)}bits(t,e){let r=0;for(let a=t,l=0;a<e;a++,l++)r|=this.bit(a)<<l;return r}hasVV(){return!1}setVV(t,e){}getVariation(){return{mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf,symbologyType:{value:o[this.symbologyType],options:$,namespace:"SYMBOLOGY_TYPE"}}}getVariationHash(){return this._data&~(Z&this.textureBinding)}}v.shared=new v(0);const h=s=>class extends s{get vvSizeMinMaxValue(){return this.bit(O)!==0}set vvSizeMinMaxValue(t){this.setBit(O,t)}get vvSizeScaleStops(){return this.bit(f)!==0}set vvSizeScaleStops(t){this.setBit(f,t)}get vvSizeFieldStops(){return this.bit(A)!==0}set vvSizeFieldStops(t){this.setBit(A,t)}get vvSizeUnitValue(){return this.bit(F)!==0}set vvSizeUnitValue(t){this.setBit(F,t)}hasSizeVV(){return this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}hasVV(){return super.hasVV()||this.hasSizeVV()}setVV(t,e){super.setVV(t,e);const r=P(this.geometryType,t,e)&t;this.vvSizeMinMaxValue=!!(r&n.SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(r&n.SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(r&n.SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(r&n.SIZE_SCALE_STOPS)}},N=s=>class extends s{get vvRotation(){return this.bit(b)!==0}set vvRotation(t){this.setBit(b,t)}hasVV(){return super.hasVV()||this.vvRotation}setVV(t,e){super.setVV(t,e),this.vvRotation=!e.isOutline&&!!(t&n.ROTATION)}},d=s=>class extends s{get vvColor(){return this.bit(I)!==0}set vvColor(t){this.setBit(I,t)}hasVV(){return super.hasVV()||this.vvColor}setVV(t,e){super.setVV(t,e),this.vvColor=!e.isOutline&&!!(t&n.COLOR)}},g=s=>class extends s{get vvOpacity(){return this.bit(_)!==0}set vvOpacity(t){this.setBit(_,t)}hasVV(){return super.hasVV()||this.vvOpacity}setVV(t,e){super.setVV(t,e),this.vvOpacity=!e.isOutline&&!!(t&n.OPACITY)}};class u extends d(g(h(v))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const{symbologyType:e,vvFlags:r}=t,a=this.load(0);return a.geometryType=i.FILL,a.symbologyType=e,e!==o.DOT_DENSITY&&a.setVV(r,t),a.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}u.shared=new u(0);class p extends d(g(N(h(v)))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const{symbologyType:e,vvFlags:r}=t,a=this.load(0);return a.geometryType=i.MARKER,a.symbologyType=e,e!==o.HEATMAP&&a.setVV(r,t),a.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}p.shared=new p(0);class c extends d(g(h(v))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=i.LINE,e.symbologyType=t.symbologyType,e.setVV(t.vvFlags,t),e.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}c.shared=new c(0);class y extends d(g(N(h(v)))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=i.TEXT,e.symbologyType=t.symbologyType,e.setVV(t.vvFlags,t),e.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}y.shared=new y(0);class V extends h(v){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=i.LABEL,e.symbologyType=t.symbologyType,e.setVV(t.vvFlags,t),e.mapAligned=C(t.placement),e.data}getVariation(){return{...super.getVariation(),vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}V.shared=new V(0);const D=256/360,G=1/Math.LN2;function K(s,t){return(s%=t)>=0?s:s+t}function W(s){return K(s*D,256)}function tt(s){return Math.log(s)*G}export{Q as A,c as C,p as N,q as O,y as P,v as U,V as Z,R as _,j as b,W as c,tt as e,J as f,u as w};
