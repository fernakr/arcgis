import{gR as ee,J as A,P as T,eI as U,gS as te,gT as se,E as J,s as re,T as j,gU as $,f4 as ie,gV as ne,eH as ae,eJ as oe,eK as le,aF as he,eL as me,eM as ce,eN as pe,eO as de,ah as ue,gW as fe,V as ye,$ as W,z as _e,A as ge,gX as ve,C as we,bh as Re,gY as xe,F as G,G as z,H as Te,ag as $e,gZ as Me}from"./index-beb896e6.js";import{j as Ve,i as Q}from"./perspectiveUtils-a47403a9.js";import{i as be}from"./Container-02b4a6b8.js";import"./BufferPool-4a187877.js";import{T as Ee}from"./color-944dd38f.js";import{n as Ce,w as Se}from"./WGLContainer-38e98ad9.js";import{D as qe,F}from"./enums-bdecffa2.js";import{e as Ae,T as k}from"./Texture-b333fdd2.js";import{f as Ge}from"./ProgramTemplate-606471cc.js";import"./definitions-6a669cbf.js";import"./GeometryUtils-44280cce.js";import{h as B}from"./FramebufferObject-491629cf.js";import"./StyleDefinition-29c49b98.js";import"./enums-fb086c25.js";import{l as Pe}from"./MagnifierPrograms-ae7512cf.js";import"./OrderIndependentTransparency-6ae10952.js";import"./floatRGBA-4f45cc9e.js";import"./testSVGPremultipliedAlpha-7a13241e.js";import"./GraphicsView2D-544bc609.js";import"./AttributeStoreView-4c98d8d0.js";import"./earcut-6a68c9cf.js";import"./featureConversionUtils-516805c0.js";import{r as Oe}from"./vec3f32-2da9db36.js";import{e as De}from"./mat3f64-221ce671.js";import{d as P}from"./enums-f1a6a48a.js";import{m as He,u as Ie}from"./LayerView-cbfa4095.js";import"./normalizeUtilsSync-356bf2a3.js";import"./VertexElementDescriptor-2925c6af.js";import"./config-1337d16e.js";import"./OptimizedGeometry-d94e541f.js";import"./ExpandedCIM-e96c57c5.js";import"./BidiEngine-9a40f2f4.js";import"./visualVariablesUtils-0415b7cb.js";import"./GeometryUtils-984e8446.js";import"./utils-22e38934.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-b4957971.js";import"./rasterizingUtils-aea1169b.js";import"./pbf-e182fc3f.js";import"./imageutils-fb43c211.js";import"./Matcher-e035a85a.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-249c3b9b.js";import"./CircularArray-ef508845.js";import"./throttle-7bf02de9.js";import"./ComputedAttributeStorage-53c7776b.js";import"./TimeOnly-d45aa4b9.js";import"./basicInterfaces-11f56cb3.js";import"./projectionSupport-eea3fa9d.js";import"./json-48e3ea08.js";import"./TiledDisplayObject-feb746bb.js";import"./util-555b9be5.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./scaleUtils-6a58a2e8.js";const y=De(),Le={none:P.None,loop:P.Loop,oscillate:P.Oscillate};function Ue(s){return s?{...s,playAnimation:s.playing,repeatType:s.repeatType?Le[s.repeatType]:void 0}:{}}let je=class extends be{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this.perspectiveTransform=ee(),this._playHandle=null,this._vertices=new Float32Array(20),this._handles=[],this._handles.push(A(()=>this.elementView.element.opacity,t=>this.opacity=t,T),A(()=>[this.elementView.coords],()=>{this.requestRender()},T),A(()=>["animationOptions"in this.elementView.element&&this.elementView.element.animationOptions],()=>{var t;(t=this._playHandle)==null||t.remove(),this.texture=U(this.texture),this.requestRender()},T),te(()=>this.elementView.element.loaded,()=>{const t=this.elementView.element;this.ready(),t.type==="video"&&t.content!=null&&this._handles.push(se(t.content,"play",()=>this.requestRender()))},T)),e.element.load().catch(t=>{J.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new re("element-load-error","Element cannot be displayed",{element:e,error:t}))})}destroy(){var e;(e=this._playHandle)==null||e.remove(),this._handles.forEach(t=>t.remove()),this.texture=U(this.texture)}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,r=this.elementView.element.content;if(r!=null){const i=r instanceof HTMLImageElement,n=r instanceof HTMLVideoElement,l=i?r.naturalWidth:n?r.videoWidth:r.width,a=i?r.naturalHeight:n?r.videoHeight:r.height;if(this._updatePerspectiveTransform(l,a),this.texture)n&&!r.paused&&(this.texture.setData(r),this.requestRender(),(t.type===j.WEBGL2||$(l)&&$(a))&&this.texture.generateMipmap());else{const m=new Ae;if(m.wrapMode=qe.CLAMP_TO_EDGE,m.preMultiplyAlpha=!0,m.width=l,m.height=a,"getFrame"in r){const h=o=>{this.texture?this.texture.setData(o):this.texture=new k(t,m,o),this.requestRender()};"animationOptions"in this.elementView.element&&(this._playHandle=Pe(r,Ue(this.elementView.element.animationOptions),null,h))}else this.texture=new k(t,m,r);(t.type===j.WEBGL2||$(l)&&$(a))&&this.texture.generateMipmap(),n&&!r.paused&&this.requestRender()}}super.beforeRender(e)}_createTransforms(){return null}updateDrawCoords(e,t){const r=this.elementView.coords;if(r==null)return;const[i,n,l,a]=r.rings[0],m=this._vertices,{x:h,y:o}=e,d=t!==0;d?m.set([n[0]-h,n[1]-o,i[0]-h,i[1]-o,l[0]-h,l[1]-o,a[0]-h,a[1]-o,a[0]-h,a[1]-o,n[0]+t-h,n[1]-o,n[0]+t-h,n[1]-o,i[0]+t-h,i[1]-o,l[0]+t-h,l[1]-o,a[0]+t-h,a[1]-o]):m.set([n[0]-h,n[1]-o,i[0]-h,i[1]-o,l[0]-h,l[1]-o,a[0]-h,a[1]-o]),this.isWrapAround=d}getVAO(e,t,r){if(this.elementView.coords==null)return null;const i=this._vertices;if(this._vao)this._geometryVbo.setData(i);else{this._geometryVbo=B.createVertex(e,F.DYNAMIC_DRAW,i);const n=B.createVertex(e,F.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new Ge(e,r,t,{geometry:this._geometryVbo,tex:n})}return this._vao}_updatePerspectiveTransform(e,t){const r=this._vertices;Ve(y,[0,0,e,0,0,t,e,t],[r[0],r[1],r[4],r[5],r[2],r[3],r[6],r[7]]),ie(this.perspectiveTransform,y[6]/y[8]*e,y[7]/y[8]*t)}};class We extends Ce{constructor(){super(...arguments),this._localOrigin=ne(0,0),this._viewStateId=-1,this._dvsMat3=ae()}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"overlay",brushes:[Se.overlay],target:()=>this.children,drawPhase:Ee.MAP});return[...super.prepareRenderPasses(e),t]}_updateMatrices(e){const{state:t}=e,{id:r,size:i,pixelRatio:n,resolution:l,rotation:a,viewpoint:m,displayMat3:h}=t;if(this._viewStateId===r)return;const o=Math.PI/180*a,d=n*i[0],f=n*i[1],{x:M,y:v}=m.targetGeometry,V=oe(M,t.spatialReference);this._localOrigin.x=V,this._localOrigin.y=v;const b=l*d,w=l*f,c=le(this._dvsMat3);he(c,c,h),me(c,c,ce(d/2,f/2)),pe(c,c,Oe(d/b,-f/w,1)),de(c,c,-o),this._viewStateId=r}_updateOverlays(e,t){const{state:r}=e,{rotation:i,spatialReference:n,worldScreenWidth:l,size:a,viewpoint:m}=r,h=this._localOrigin;let o=0;const d=ue(n);if(d&&n.isWrappable){const f=a[0],M=a[1],v=180/Math.PI*i,V=Math.abs(Math.cos(v)),b=Math.abs(Math.sin(v)),w=Math.round(f*V+M*b),[c,E]=d.valid,u=fe(n),{x:O,y:Y}=m.targetGeometry,K=[O,Y],C=[0,0];r.toScreen(C,K);const R=[0,0];let S;S=w>l?.5*l:.5*w;const D=Math.floor((O+.5*u)/u),X=c+D*u,Z=E+D*u,q=[C[0]+S,0];r.toMap(R,q),R[0]>Z&&(o=u),q[0]=C[0]-S,r.toMap(R,q),R[0]<X&&(o=-u);for(const x of t){const H=x.elementView.bounds;if(H==null)continue;const[I,,L]=H;I<c&&L>c?x.updateDrawCoords(h,u):L>E&&I<E?x.updateDrawCoords(h,-u):x.updateDrawCoords(h,o)}}else for(const f of t)f.updateDrawCoords(h,o)}}let g=class extends He(Ie){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this.layer=null,this.elements=new ye}attach(){this.addAttachHandles([W(()=>this.layer.effectiveSource,"refresh",()=>{this._tileStrategy.refresh(s=>this._updateTile(s)),this.requestUpdate()}),W(()=>this.layer.effectiveSource,"change",({element:s})=>this._elementUpdateHandler(s))]),this._overlayContainer=new We,this.container.addChild(this._overlayContainer),this._fetchQueue=new _e({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(s,e)=>this._queryElements(s,e)}),this._tileStrategy=new ge({cachePolicy:"purge",resampling:!0,acquireTile:s=>this._acquireTile(s),releaseTile:s=>this._releaseTile(s),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){var s;this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),(s=this._debugGraphicsView)==null||s.destroy()}supportsSpatialReference(s){return!0}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(s){var e;this._tileStrategy.update(s),(e=this._debugGraphicsView)==null||e.update(s)}async hitTest(s,e){const t=[],r=s.normalize(),i=[r.x,r.y];for(const{projectedElement:{normalizedCoords:n,element:l}}of this._elementReferences.values())n!=null&&ve(n.rings,i)&&t.push({type:"media",element:l,layer:this.layer,mapPoint:s,sourcePoint:l.toSource(s)});return t.reverse()}canResume(){return this.layer.source!=null&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.refresh(s=>this._updateTile(s))}_acquireTile(s){const e=new ze(s.clone());return this._updateTile(e),e}_updateTile(s){this._updatingHandles.addPromise(this._fetchQueue.push(s.key).then(e=>{const[t,r]=s.setElements(e);this._referenceElements(s,t),this._dereferenceElements(s,r),this.requestUpdate()},e=>{we(e)||J.getLogger(this).error(e)}))}_releaseTile(s){this._fetchQueue.abort(s.key.id),s.elements&&this._dereferenceElements(s,s.elements),this.requestUpdate()}async _queryElements(s,e){const t=this.layer.effectiveSource;if(t==null)return[];this.view.featuresTilingScheme.getTileBounds(p,s,!0);const r=new Re({xmin:p[0],ymin:p[1],xmax:p[2],ymax:p[3],spatialReference:this.view.spatialReference});return t.queryElements(r,e)}_referenceElements(s,e){if(this.layer.source!=null)for(const t of e)this._referenceElement(s,t)}_referenceElement(s,e){xe(this._elementReferences,e.uid,()=>{const t=new Q({element:e,spatialReference:this.view.spatialReference}),r=new je(t);return this._overlayContainer.addChild(r),this.elements.add(e),{tiles:new Set,projectedElement:t,overlay:r,debugGraphic:null}}).tiles.add(s)}_dereferenceElements(s,e){for(const t of e)this._dereferenceElement(s,t)}_dereferenceElement(s,e){var r;const t=this._elementReferences.get(e.uid);t.tiles.delete(s),t.tiles.size||(this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.projectedElement.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),(r=this._debugGraphicsView)==null||r.graphics.remove(t.debugGraphic))}_elementUpdateHandler(s){var r;let e=this._elementReferences.get(s.uid);if(e){const i=e.projectedElement.normalizedCoords;if(i==null)return this._overlayContainer.removeChild(e.overlay),e.overlay.destroy(),e.projectedElement.destroy(),this._elementReferences.delete(s.uid),this.elements.remove(s),void((r=this._debugGraphicsView)==null?void 0:r.graphics.remove(e.debugGraphic));const n=[],l=[];for(const a of this._tileStrategy.tiles){const m=N(this.view.featuresTilingScheme,a,i);e.tiles.has(a)?m||l.push(a):m&&n.push(a)}for(const a of n)this._referenceElement(a,s);for(const a of l)this._dereferenceElement(a,s);return e=this._elementReferences.get(s.uid),void((e==null?void 0:e.debugGraphic)&&(e.debugGraphic.geometry=e.projectedElement.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:e.debugGraphic,property:"geometry"})))}const t=new Q({element:s,spatialReference:this.view.spatialReference}).normalizedCoords;if(t!=null)for(const i of this._tileStrategy.tiles)N(this.view.featuresTilingScheme,i,t)&&this._referenceElement(i,s)}};G([z()],g.prototype,"layer",void 0),G([z({readOnly:!0})],g.prototype,"elements",void 0),g=G([Te("esri.views.2d.layers.MediaLayerView2D")],g);const p=$e(),_={xmin:0,ymin:0,xmax:0,ymax:0};function N(s,e,t){return s.getTileBounds(p,e.key,!0),_.xmin=p[0],_.ymin=p[1],_.xmax=p[2],_.ymax=p[3],Me(_,t)}class ze{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const t=[],r=new Set(this.elements);this.elements=e;for(const i of e)r.has(i)?r.delete(i):t.push(i);return this.isReady=!0,[t,Array.from(r)]}destroy(){}}const Ft=g;export{Ft as default};
