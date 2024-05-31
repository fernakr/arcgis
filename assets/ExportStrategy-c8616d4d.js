import{ae as W,D as E,F as h,G as l,H as N,bz as H,eX as R,aM as _,af as $,bF as T,aN as q,e7 as z,bK as I,y as B}from"./index-79fc10e5.js";import{b as C}from"./Bitmap-fa4388b2.js";const F=Math.PI/180;function G(e){return e*F}function U(e,i){const s=G(i.rotation),t=Math.abs(Math.cos(s)),r=Math.abs(Math.sin(s)),[o,n]=i.size;return e[0]=Math.round(n*r+o*t),e[1]=Math.round(n*t+o*r),e}function j(e,i,s,t){const[r,o]=i,[n,a]=t,c=.5*s;return e[0]=r-c*n,e[1]=o-c*a,e[2]=r+c*n,e[3]=o+c*a,e}const u=W(),m=[0,0],v=new E(0,0,0,0),y={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1};let p=class extends H{constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=y.hidpi,this.imageMaxWidth=y.imageMaxWidth,this.imageMaxHeight=y.imageMaxHeight,this.imageRotationSupported=y.imageRotationSupported,this.imageNormalizationSupported=y.imageNormalizationSupported,this.update=R(async(i,s)=>{if(_(s),!i.stationary||this.destroyed)return;const t=i.state,r=$(t.spatialReference),o=this.hidpi?i.pixelRatio:1,n=this.imageNormalizationSupported&&t.worldScreenWidth&&t.worldScreenWidth<t.size[0],a=this.imageMaxWidth??0,c=this.imageMaxHeight??0;n?(m[0]=t.worldScreenWidth,m[1]=t.size[1]):this.imageRotationSupported?(m[0]=t.size[0],m[1]=t.size[1]):U(m,t);const M=Math.floor(m[0]*o)>a||Math.floor(m[1]*o)>c,S=r&&(t.extent.xmin<r.valid[0]||t.extent.xmax>r.valid[1]),f=!this.imageNormalizationSupported&&S,w=!M&&!f,x=this.imageRotationSupported?t.rotation:0,b=this.container.children.slice();if(w){const d=n?t.paddedViewState.center:t.center;this._imagePromise&&console.error("Image promise was not defined!"),this._imagePromise=this._singleExport(t,m,d,t.resolution,x,o,s)}else{let d=Math.min(a,c);f&&(d=Math.min(t.worldScreenWidth,d)),this._imagePromise=this._tiledExport(t,d,o,s)}try{const d=await this._imagePromise??[];_(s);const P=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=d;for(const g of b)d.includes(g)||P.push(g.fadeOut().then(()=>{g.remove(),g.destroy()}));for(const g of d)P.push(g.fadeIn());await Promise.all(P)}catch(d){this._imagePromise=null,T(d)}},5e3),this.updateExports=R(async i=>{const s=[];for(const t of this.container.children){if(!t.visible||!t.stage)return;s.push(i(t).then(()=>{t.invalidateTexture(),t.requestRender()}))}this._imagePromise=q(s).then(()=>this._imagePromise=null),await this._imagePromise})}destroy(){this.bitmaps.forEach(e=>e.destroy()),this.bitmaps=[]}get updating(){return!this.destroyed&&this._imagePromise!==null}async _export(e,i,s,t,r,o){const n=await this.fetchSource(e,Math.floor(i*r),Math.floor(s*r),{rotation:t,pixelRatio:r,signal:o});_(o);const a=new C(null,!0);return a.x=e.xmin,a.y=e.ymax,a.resolution=e.width/i,a.rotation=t,a.pixelRatio=r,a.opacity=0,this.container.addChild(a),await a.setSourceAsync(n,o),_(o),a}async _singleExport(e,i,s,t,r,o,n){j(u,s,t,i);const a=z(u,e.spatialReference);return[await this._export(a,i[0],i[1],r,o,n)]}_tiledExport(e,i,s,t){const r=I.create({size:i,spatialReference:e.spatialReference,scales:[e.scale]}),o=new B(r),n=o.getTileCoverage(e);if(!n)return null;const a=[];return n.forEach((c,M,S,f)=>{v.set(c,M,S,0),o.getTileBounds(u,v);const w=z(u,e.spatialReference);a.push(this._export(w,i,i,0,s,t).then(x=>(f!==0&&(v.set(c,M,S,f),o.getTileBounds(u,v),x.x=u[0],x.y=u[3]),x)))}),Promise.all(a)}};h([l()],p.prototype,"_imagePromise",void 0),h([l()],p.prototype,"bitmaps",void 0),h([l()],p.prototype,"container",void 0),h([l()],p.prototype,"fetchSource",void 0),h([l()],p.prototype,"hidpi",void 0),h([l()],p.prototype,"imageMaxWidth",void 0),h([l()],p.prototype,"imageMaxHeight",void 0),h([l()],p.prototype,"imageRotationSupported",void 0),h([l()],p.prototype,"imageNormalizationSupported",void 0),h([l()],p.prototype,"requestUpdate",void 0),h([l()],p.prototype,"updating",null),p=h([N("esri.views.2d.layers.support.ExportStrategy")],p);const D=p;export{D as v};
