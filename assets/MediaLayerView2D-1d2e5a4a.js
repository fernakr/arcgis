import{h7 as ee,J as A,P as T,eN as L,h8 as te,h9 as se,E as J,s as re,T as U,ha as $,fe as ie,hb as ne,eM as ae,eO as oe,eP as le,a6 as he,eQ as me,eR as pe,eS as ce,eT as de,af as ue,hc as fe,V as ye,$ as W,z as _e,A as ve,hd as ge,C as we,be as Re,he as xe,F as G,G as z,H as Te,ae as $e,hf as Me}from"./index-9762d29e.js";import{j as be,i as Q}from"./perspectiveUtils-a275886d.js";import{i as Ee}from"./Container-397ab820.js";import"./BufferPool-b15dedaa.js";import{T as Ve}from"./color-28b049aa.js";import{n as Ce,w as Se}from"./WGLContainer-bcbb569b.js";import{D as qe,F as k}from"./enums-bdecffa2.js";import{e as Ae,T as B}from"./Texture-367f0a32.js";import{f as Ge}from"./ProgramTemplate-7d064a06.js";import"./definitions-8ac54cf0.js";import"./GeometryUtils-a273db93.js";import{h as F}from"./FramebufferObject-73c0729f.js";import"./number-e491b09e.js";import"./StyleDefinition-29c49b98.js";import"./enums-fb086c25.js";import{l as Pe}from"./MagnifierPrograms-61e968ea.js";import"./OrderIndependentTransparency-6ae10952.js";import"./floatRGBA-9b7b4649.js";import"./testSVGPremultipliedAlpha-e7ab8e95.js";import"./GraphicsView2D-d741fc49.js";import"./AttributeStoreView-99c500cf.js";import"./earcut-367b5789.js";import"./featureConversionUtils-ca303552.js";import{r as Oe}from"./vec3f32-2da9db36.js";import{e as De}from"./mat3f64-221ce671.js";import{d as P}from"./enums-f1a6a48a.js";import{m as He,u as je}from"./LayerView-7c2ae353.js";import"./normalizeUtilsSync-ff112d00.js";import"./VertexElementDescriptor-2925c6af.js";import"./config-1337d16e.js";import"./OptimizedGeometry-196224d4.js";import"./alignmentUtils-ae955d28.js";import"./cimAnalyzer-5fbbaa5c.js";import"./fontUtils-241f2cc4.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-2b9fbefe.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-84a1ae54.js";import"./Rasterizer-4145eaec.js";import"./rasterizingUtils-8fd9470a.js";import"./pbf-6107044f.js";import"./imageutils-645dc5fe.js";import"./Matcher-860623de.js";import"./visualVariablesUtils-66ee7ab0.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-125a4260.js";import"./ExpandedCIM-637c7c3b.js";import"./CircularArray-ef508845.js";import"./throttle-7bf02de9.js";import"./ComputedAttributeStorage-2f068a41.js";import"./OptimizedFeature-e90b69df.js";import"./TimeOnly-3430cacd.js";import"./basicInterfaces-11f56cb3.js";import"./projectionSupport-3ff2afc5.js";import"./json-48e3ea08.js";import"./TiledDisplayObject-3303a832.js";import"./util-42fe6801.js";import"./OptimizedFeatureSet-1d1ac4b9.js";const y=De(),Ie={none:P.None,loop:P.Loop,oscillate:P.Oscillate};function Le(s){return s?{...s,playAnimation:s.playing,repeatType:s.repeatType?Ie[s.repeatType]:void 0}:{}}let Ue=class extends Ee{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this.perspectiveTransform=ee(),this._playHandle=null,this._vertices=new Float32Array(20),this._handles=[],this._handles.push(A(()=>this.elementView.element.opacity,t=>this.opacity=t,T),A(()=>[this.elementView.coords],()=>{this.requestRender()},T),A(()=>["animationOptions"in this.elementView.element&&this.elementView.element.animationOptions],()=>{var t;(t=this._playHandle)==null||t.remove(),this.texture=L(this.texture),this.requestRender()},T),te(()=>this.elementView.element.loaded,()=>{const t=this.elementView.element;this.ready(),t.type==="video"&&t.content!=null&&this._handles.push(se(t.content,"play",()=>this.requestRender()))},T)),e.element.load().catch(t=>{J.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new re("element-load-error","Element cannot be displayed",{element:e,error:t}))})}destroy(){var e;(e=this._playHandle)==null||e.remove(),this._handles.forEach(t=>t.remove()),this.texture=L(this.texture)}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,r=this.elementView.element.content;if(r!=null){const i=r instanceof HTMLImageElement,n=r instanceof HTMLVideoElement,l=i?r.naturalWidth:n?r.videoWidth:r.width,a=i?r.naturalHeight:n?r.videoHeight:r.height;if(this._updatePerspectiveTransform(l,a),this.texture)n&&!r.paused&&(this.texture.setData(r),this.requestRender(),(t.type===U.WEBGL2||$(l)&&$(a))&&this.texture.generateMipmap());else{const m=new Ae;if(m.wrapMode=qe.CLAMP_TO_EDGE,m.preMultiplyAlpha=!0,m.width=l,m.height=a,"getFrame"in r){const h=o=>{this.texture?this.texture.setData(o):this.texture=new B(t,m,o),this.requestRender()};"animationOptions"in this.elementView.element&&(this._playHandle=Pe(r,Le(this.elementView.element.animationOptions),null,h))}else this.texture=new B(t,m,r);(t.type===U.WEBGL2||$(l)&&$(a))&&this.texture.generateMipmap(),n&&!r.paused&&this.requestRender()}}super.beforeRender(e)}_createTransforms(){return null}updateDrawCoords(e,t){const r=this.elementView.coords;if(r==null)return;const[i,n,l,a]=r.rings[0],m=this._vertices,{x:h,y:o}=e,d=t!==0;d?m.set([n[0]-h,n[1]-o,i[0]-h,i[1]-o,l[0]-h,l[1]-o,a[0]-h,a[1]-o,a[0]-h,a[1]-o,n[0]+t-h,n[1]-o,n[0]+t-h,n[1]-o,i[0]+t-h,i[1]-o,l[0]+t-h,l[1]-o,a[0]+t-h,a[1]-o]):m.set([n[0]-h,n[1]-o,i[0]-h,i[1]-o,l[0]-h,l[1]-o,a[0]-h,a[1]-o]),this.isWrapAround=d}getVAO(e,t,r){if(this.elementView.coords==null)return null;const i=this._vertices;if(this._vao)this._geometryVbo.setData(i);else{this._geometryVbo=F.createVertex(e,k.DYNAMIC_DRAW,i);const n=F.createVertex(e,k.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new Ge(e,r,t,{geometry:this._geometryVbo,tex:n})}return this._vao}_updatePerspectiveTransform(e,t){const r=this._vertices;be(y,[0,0,e,0,0,t,e,t],[r[0],r[1],r[4],r[5],r[2],r[3],r[6],r[7]]),ie(this.perspectiveTransform,y[6]/y[8]*e,y[7]/y[8]*t)}};class We extends Ce{constructor(){super(...arguments),this._localOrigin=ne(0,0),this._viewStateId=-1,this._dvsMat3=ae()}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"overlay",brushes:[Se.overlay],target:()=>this.children,drawPhase:Ve.MAP});return[...super.prepareRenderPasses(e),t]}_updateMatrices(e){const{state:t}=e,{id:r,size:i,pixelRatio:n,resolution:l,rotation:a,viewpoint:m,displayMat3:h}=t;if(this._viewStateId===r)return;const o=Math.PI/180*a,d=n*i[0],f=n*i[1],{x:M,y:g}=m.targetGeometry,b=oe(M,t.spatialReference);this._localOrigin.x=b,this._localOrigin.y=g;const E=l*d,w=l*f,p=le(this._dvsMat3);he(p,p,h),me(p,p,pe(d/2,f/2)),ce(p,p,Oe(d/E,-f/w,1)),de(p,p,-o),this._viewStateId=r}_updateOverlays(e,t){const{state:r}=e,{rotation:i,spatialReference:n,worldScreenWidth:l,size:a,viewpoint:m}=r,h=this._localOrigin;let o=0;const d=ue(n);if(d&&n.isWrappable){const f=a[0],M=a[1],g=180/Math.PI*i,b=Math.abs(Math.cos(g)),E=Math.abs(Math.sin(g)),w=Math.round(f*b+M*E),[p,V]=d.valid,u=fe(n),{x:O,y:Y}=m.targetGeometry,K=[O,Y],C=[0,0];r.toScreen(C,K);const R=[0,0];let S;S=w>l?.5*l:.5*w;const D=Math.floor((O+.5*u)/u),X=p+D*u,Z=V+D*u,q=[C[0]+S,0];r.toMap(R,q),R[0]>Z&&(o=u),q[0]=C[0]-S,r.toMap(R,q),R[0]<X&&(o=-u);for(const x of t){const H=x.elementView.bounds;if(H==null)continue;const[j,,I]=H;j<p&&I>p?x.updateDrawCoords(h,u):I>V&&j<V?x.updateDrawCoords(h,-u):x.updateDrawCoords(h,o)}}else for(const f of t)f.updateDrawCoords(h,o)}}let v=class extends He(je){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this.layer=null,this.elements=new ye}attach(){this.addAttachHandles([W(()=>this.layer.effectiveSource,"refresh",()=>{this._tileStrategy.refresh(s=>this._updateTile(s)),this.requestUpdate()}),W(()=>this.layer.effectiveSource,"change",({element:s})=>this._elementUpdateHandler(s))]),this._overlayContainer=new We,this.container.addChild(this._overlayContainer),this._fetchQueue=new _e({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(s,e)=>this._queryElements(s,e)}),this._tileStrategy=new ve({cachePolicy:"purge",resampling:!0,acquireTile:s=>this._acquireTile(s),releaseTile:s=>this._releaseTile(s),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){var s;this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),(s=this._debugGraphicsView)==null||s.destroy()}supportsSpatialReference(s){return!0}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(s){var e;this._tileStrategy.update(s),(e=this._debugGraphicsView)==null||e.update(s)}async hitTest(s,e){const t=[],r=s.normalize(),i=[r.x,r.y];for(const{projectedElement:{normalizedCoords:n,element:l}}of this._elementReferences.values())n!=null&&ge(n.rings,i)&&t.push({type:"media",element:l,layer:this.layer,mapPoint:s,sourcePoint:l.toSource(s)});return t.reverse()}canResume(){return this.layer.source!=null&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.refresh(s=>this._updateTile(s))}_acquireTile(s){const e=new ze(s.clone());return this._updateTile(e),e}_updateTile(s){this._updatingHandles.addPromise(this._fetchQueue.push(s.key).then(e=>{const[t,r]=s.setElements(e);this._referenceElements(s,t),this._dereferenceElements(s,r),this.requestUpdate()},e=>{we(e)||J.getLogger(this).error(e)}))}_releaseTile(s){this._fetchQueue.abort(s.key.id),s.elements&&this._dereferenceElements(s,s.elements),this.requestUpdate()}async _queryElements(s,e){const t=this.layer.effectiveSource;if(t==null)return[];this.view.featuresTilingScheme.getTileBounds(c,s,!0);const r=new Re({xmin:c[0],ymin:c[1],xmax:c[2],ymax:c[3],spatialReference:this.view.spatialReference});return t.queryElements(r,e)}_referenceElements(s,e){if(this.layer.source!=null)for(const t of e)this._referenceElement(s,t)}_referenceElement(s,e){xe(this._elementReferences,e.uid,()=>{const t=new Q({element:e,spatialReference:this.view.spatialReference}),r=new Ue(t);return this._overlayContainer.addChild(r),this.elements.add(e),{tiles:new Set,projectedElement:t,overlay:r,debugGraphic:null}}).tiles.add(s)}_dereferenceElements(s,e){for(const t of e)this._dereferenceElement(s,t)}_dereferenceElement(s,e){var r;const t=this._elementReferences.get(e.uid);t.tiles.delete(s),t.tiles.size||(this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.projectedElement.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),(r=this._debugGraphicsView)==null||r.graphics.remove(t.debugGraphic))}_elementUpdateHandler(s){var r;let e=this._elementReferences.get(s.uid);if(e){const i=e.projectedElement.normalizedCoords;if(i==null)return this._overlayContainer.removeChild(e.overlay),e.overlay.destroy(),e.projectedElement.destroy(),this._elementReferences.delete(s.uid),this.elements.remove(s),void((r=this._debugGraphicsView)==null?void 0:r.graphics.remove(e.debugGraphic));const n=[],l=[];for(const a of this._tileStrategy.tiles){const m=N(this.view.featuresTilingScheme,a,i);e.tiles.has(a)?m||l.push(a):m&&n.push(a)}for(const a of n)this._referenceElement(a,s);for(const a of l)this._dereferenceElement(a,s);return e=this._elementReferences.get(s.uid),void((e==null?void 0:e.debugGraphic)&&(e.debugGraphic.geometry=e.projectedElement.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:e.debugGraphic,property:"geometry"})))}const t=new Q({element:s,spatialReference:this.view.spatialReference}).normalizedCoords;if(t!=null)for(const i of this._tileStrategy.tiles)N(this.view.featuresTilingScheme,i,t)&&this._referenceElement(i,s)}};G([z()],v.prototype,"layer",void 0),G([z({readOnly:!0})],v.prototype,"elements",void 0),v=G([Te("esri.views.2d.layers.MediaLayerView2D")],v);const c=$e(),_={xmin:0,ymin:0,xmax:0,ymax:0};function N(s,e,t){return s.getTileBounds(c,e.key,!0),_.xmin=c[0],_.ymin=c[1],_.xmax=c[2],_.ymax=c[3],Me(_,t)}class ze{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const t=[],r=new Set(this.elements);this.elements=e;for(const i of e)r.has(i)?r.delete(i):t.push(i);return this.isReady=!0,[t,Array.from(r)]}destroy(){}}const Yt=v;export{Yt as default};
