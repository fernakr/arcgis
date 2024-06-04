import{a1 as O,gc as b,ay as C,E as y,hK as T,eM as w}from"./index-c43fbcbe.js";import{M}from"./definitions-595e04a3.js";import{D as x}from"./enums-bdecffa2.js";import{e as q,T as H}from"./Texture-fc7ce7cc.js";const W=1/O("mapview-transitions-duration");let D=class extends b{constructor(){super(...arguments),this._fadeOutResolver=null,this._fadeInResolver=null,this._clips=null,this.computedVisible=!0,this.computedOpacity=1,this.fadeTransitionEnabled=!1,this.inFadeTransition=!1,this._isReady=!1,this._opacity=1,this.parent=null,this._stage=null,this._visible=!0}get clips(){return this._clips}set clips(t){this._clips=t,this.requestRender()}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(t){this._opacity!==t&&(this._opacity=Math.min(1,Math.max(t,0)),this.requestRender())}get stage(){return this._stage}set stage(t){var i;if(this._stage===t)return;const e=this._stage;this._stage=t,t?(i=this._stage)!=null&&i.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):e==null||e.trashDisplayObject(this)}get transforms(){return this._getTransforms()}_getTransforms(){return this._transforms==null&&(this._transforms=this._createTransforms()),this._transforms}get visible(){return this._visible}set visible(t){this._visible!==t&&(this._visible=t,this.requestRender())}get hasLabels(){return!1}get hasHighlight(){return!1}get hasBlending(){return!1}fadeIn(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.opacity=1,this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=C(),this.requestRender()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this.opacity=0,this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=C(),this.requestRender()),this._fadeOutResolver.promise}endTransitions(){var t,e;(t=this._fadeInResolver)==null||t.call(this),this._fadeInResolver=null,(e=this._fadeOutResolver)==null||e.call(this),this._fadeOutResolver=null,this.computedOpacity=this.visible?this.opacity:0,this.requestRender()}beforeRender(t){this.updateTransitionProperties(t.deltaTime,t.state.scale),this.setTransform(t.state)}afterRender(t){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&this.computedOpacity===0&&(this._fadeOutResolver(),this._fadeOutResolver=null)}remove(){var t;(t=this.parent)==null||t.removeChild(this)}setTransform(t){}processRender(t){this.stage&&this.computedVisible&&this.doRender(t)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.onDetach(),this.emit("detach")}updateTransitionProperties(t,e){if(this.fadeTransitionEnabled){const i=this._fadeOutResolver||!this.visible?0:this.opacity,n=this.computedOpacity;if(n===i)this.computedVisible=this.visible;else{const u=t*W;this.computedOpacity=n>i?Math.max(i,n-u):Math.min(i,n+u),this.computedVisible=this.computedOpacity>0;const o=i===this.computedOpacity;this.inFadeTransition=!o,o||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible}onAttach(){}onDetach(){}doRender(t){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}};const I=1,L=[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],B=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],g=256,a={outlineWidth:1.3,outerHaloWidth:.4,innerHaloWidth:.4,outlinePosition:0},R=y.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");function P(h,t){t.fillColor[0]=h.color.r/255,t.fillColor[1]=h.color.g/255,t.fillColor[2]=h.color.b/255,t.fillColor[3]=h.color.a,h.haloColor?(t.outlineColor[0]=h.haloColor.r/255,t.outlineColor[1]=h.haloColor.g/255,t.outlineColor[2]=h.haloColor.b/255,t.outlineColor[3]=h.haloColor.a):(t.outlineColor[0]=t.fillColor[0],t.outlineColor[1]=t.fillColor[1],t.outlineColor[2]=t.fillColor[2],t.outlineColor[3]=t.fillColor[3]),t.fillColor[3]*=h.fillOpacity,t.outlineColor[3]*=h.haloOpacity,t.fillColor[0]*=t.fillColor[3],t.fillColor[1]*=t.fillColor[3],t.fillColor[2]*=t.fillColor[3],t.outlineColor[0]*=t.outlineColor[3],t.outlineColor[1]*=t.outlineColor[3],t.outlineColor[2]*=t.outlineColor[3],t.outlineWidth=a.outlineWidth,t.outerHaloWidth=a.outerHaloWidth,t.innerHaloWidth=a.innerHaloWidth,t.outlinePosition=a.outlinePosition}const V=[0,0,0,0];class S{constructor(){this._convertedHighlightOptions={fillColor:[.2*.75,.6*.75,.675,.75],outlineColor:[.2*.9,.54,.81,.9],outlinePosition:a.outlinePosition,outlineWidth:a.outlineWidth,innerHaloWidth:a.innerHaloWidth,outerHaloWidth:a.outerHaloWidth},this._shadeTexChanged=!0,this._texelData=new Uint8Array(4*g),this._minMaxDistance=[0,0]}setHighlightOptions(t){const e=this._convertedHighlightOptions;P(t,e);const i=e.outlinePosition-e.outlineWidth/2-e.outerHaloWidth,n=e.outlinePosition-e.outlineWidth/2,u=e.outlinePosition+e.outlineWidth/2,o=e.outlinePosition+e.outlineWidth/2+e.innerHaloWidth,p=Math.sqrt(Math.PI/2)*I,c=Math.abs(i)>p?Math.round(10*(Math.abs(i)-p))/10:0,f=Math.abs(o)>p?Math.round(10*(Math.abs(o)-p))/10:0;let d;c&&!f?R.error("The outer rim of the highlight is "+c+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."):!c&&f?R.error("The inner rim of the highlight is "+f+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."):c&&f&&R.error("The highlight is "+Math.max(c,f)+"px away from the edge of the feature; consider reducing some width values.");const s=[void 0,void 0,void 0,void 0];function v(r,m,l){s[0]=(1-l)*r[0]+l*m[0],s[1]=(1-l)*r[1]+l*m[1],s[2]=(1-l)*r[2]+l*m[2],s[3]=(1-l)*r[3]+l*m[3]}const{_texelData:_}=this;for(let r=0;r<g;++r)d=i+r/(g-1)*(o-i),d<i?(s[0]=0,s[1]=0,s[2]=0,s[3]=0):d<n?v(V,e.outlineColor,(d-i)/(n-i)):d<u?[s[0],s[1],s[2],s[3]]=e.outlineColor:d<o?v(e.outlineColor,e.fillColor,(d-u)/(o-u)):[s[0],s[1],s[2],s[3]]=e.fillColor,_[4*r]=255*s[0],_[4*r+1]=255*s[1],_[4*r+2]=255*s[2],_[4*r+3]=255*s[3];this._minMaxDistance[0]=i,this._minMaxDistance[1]=o,this._shadeTexChanged=!0}applyHighlightOptions(t,e){if(!this._shadeTex){const i=new q;i.wrapMode=x.CLAMP_TO_EDGE,i.width=g,i.height=1,this._shadeTex=new H(t,i)}this._shadeTexChanged&&(this._shadeTex.updateData(0,0,0,g,1,this._texelData),this._shadeTexChanged=!1),t.bindTexture(this._shadeTex,M),e.setUniform2fv("u_minMaxDistance",this._minMaxDistance)}destroy(){var t;(t=this._shadeTex)==null||t.dispose(),this._shadeTex=null}}class j extends D{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this.children=[],this._effectView=null,this._highlightOptions=null,this._highlightGradient=null}get blendMode(){return this._blendMode}set blendMode(t){this._blendMode=t,this.requestRender()}get clips(){return this._clips}set clips(t){this._clips=t,this.children.forEach(e=>e.clips=t)}get computedEffects(){var t;return((t=this._effectView)==null?void 0:t.effects)??null}get effect(){var t;return((t=this._effectView)==null?void 0:t.effect)??""}set effect(t){(this._effectView||t)&&(this._effectView||(this._effectView=new T),this._effectView.effect=t,this.requestRender())}get highlightOptions(){return this._highlightOptions}set highlightOptions(t){if(!t)return this._highlightOptions=null,void(this._highlightGradient&&(this._highlightGradient.destroy(),this._highlightGradient=null,this.requestRender()));this._highlightOptions&&this._highlightOptions.equals(t)||(this._highlightOptions=t,this._highlightGradient||(this._highlightGradient=new S),this._highlightGradient.setHighlightOptions(t),this.requestRender())}get hasBlending(){return!!this.blendMode}get hasHighlight(){return this.children.some(t=>t.hasHighlight)}get hasLabels(){return this.children.some(t=>t.hasLabels)}get requiresDedicatedFBO(){return this.children.some(t=>"blendMode"in t&&t.blendMode&&t.blendMode!=="normal")}updateTransitionProperties(t,e){super.updateTransitionProperties(t,e),this._effectView&&(this._effectView.transitionStep(t,e),this._effectView.transitioning&&this.requestRender())}doRender(t){var n;const e=this.createRenderParams(t),{painter:i}=e;i.beforeRenderLayer(e,(n=this._clips)!=null&&n.length?255:0,this.computedOpacity),this.renderChildren(e),i.afterRenderLayer(e,this.computedOpacity)}addChild(t){return this.addChildAt(t,this.children.length)}addChildAt(t,e=this.children.length){if(!t||this.contains(t))return t;this._needsSort=!0;const i=t.parent;return i&&i!==this&&i.removeChild(t),e>=this.children.length?this.children.push(t):this.children.splice(e,0,t),this._childrenSet.add(t),t.parent=this,t.stage=this.stage,this!==this.stage&&(t.clips=this.clips),this.requestRender(),t}contains(t){return this._childrenSet.has(t)}endTransitions(){super.endTransitions(),this._effectView&&(this._effectView.endTransitions(),this.requestRender())}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const t of this.children)this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null;this.children.length=0}removeChild(t){return this.contains(t)?this.removeChildAt(this.children.indexOf(t)):t}removeChildAt(t){if(t<0||t>=this.children.length)return null;this._needsSort=!0;const e=this.children.splice(t,1)[0];return this._childrenSet.delete(e),this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null,e}sortChildren(t){this._needsSort&&(this.children.sort(t),this._needsSort=!1)}beforeRender(t){super.beforeRender(t);for(const e of this.children)e.beforeRender(t)}afterRender(t){super.afterRender(t);for(const e of this.children)e.afterRender(t)}_createTransforms(){return{dvs:w()}}onAttach(){super.onAttach();const t=this.stage;for(const e of this.children)e.stage=t}onDetach(){super.onDetach();for(const t of this.children)t.stage=null}renderChildren(t){for(const e of this.children)e.processRender(t)}createRenderParams(t){return{...t,requireFBO:this.requiresDedicatedFBO,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:t.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition,highlightGradient:this._highlightGradient||t.highlightGradient}}}export{B as a,j as h,D as i,I as o,L as t};
