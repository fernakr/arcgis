import{eH as n,ag as d}from"./index-beb896e6.js";import{b as h}from"./Bitmap-274b5992.js";import{r as l}from"./TiledDisplayObject-feb746bb.js";import{w as f}from"./WGLContainer-38e98ad9.js";import{T as o}from"./color-944dd38f.js";import{i as b}from"./TileContainer-5c95f629.js";class c extends l{constructor(e,t,s,i,r,a,p=null){super(e,t,s,i,r,a),this.bitmap=new h(p),this.bitmap.coordScale=[r,a],this.bitmap.once("isReady",()=>this.ready())}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){this.bitmap.beforeRender(e),super.beforeRender(e)}afterRender(e){this.bitmap.afterRender(e),super.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{dvs:n(),tileMat3:n()}}setTransform(e){super.setTransform(e),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}class v extends b{get requiresDedicatedFBO(){return this.children.some(e=>e.bitmap.blendFunction==="additive")}createTile(e){const t=this._tileInfoView.getTileBounds(d(),e),s=this._tileInfoView.getTileResolution(e.level),[i,r]=this._tileInfoView.tileInfo.size;return new c(e,s,t[0],t[3],i,r)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[f.bitmap],target:()=>this.children.map(s=>s.bitmap),drawPhase:o.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===o.MAP&&super.doRender(e)}}export{v as n};
