import{eM as f,eN as R,eO as A,eP as O,a6 as D,eQ as E,eR as C,eS as N,eT as S,O as L}from"./index-34cda61d.js";import{o as $}from"./FeatureContainer-6da53b39.js";import{r as I}from"./vec3f32-2da9db36.js";import{i as T}from"./Container-7d8130b2.js";import{e as P}from"./color-c12b74e0.js";import{h as _}from"./FramebufferObject-c5fc78ea.js";import{R as m,E as w,C as v,F as p,O as F}from"./enums-bdecffa2.js";import{f as U}from"./ProgramTemplate-8488bed7.js";const k=Math.PI/180,H=4;class W extends T{constructor(t){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=f(),this._localOrigin={x:0,y:0},this._getBounds=t}destroy(){this._vao&&(this._vao.dispose(),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=R(this._program)}doRender(t){const{context:e}=t,i=this._getBounds();if(i.length<1)return;this._createShaderProgram(e),this._updateMatricesAndLocalOrigin(t),this._updateBufferData(e,i),e.setBlendingEnabled(!0),e.setDepthTestEnabled(!1),e.setStencilWriteMask(0),e.setStencilTestEnabled(!1),e.setBlendFunction(m.ONE,m.ONE_MINUS_SRC_ALPHA),e.setColorMask(!0,!0,!0,!0);const o=this._program;e.bindVAO(this._vao),e.useProgram(o),o.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),e.gl.lineWidth(1),e.drawElements(w.LINES,8*i.length,v.UNSIGNED_INT,0),e.bindVAO()}_createTransforms(){return{dvs:f()}}_createShaderProgram(t){if(this._program)return;const e=`precision highp float;
        uniform mat3 u_dvsMat3;

        attribute vec2 a_position;

        void main() {
          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);
          gl_Position = vec4(pos.xy, 0.0, 1.0);
        }`,i=`precision mediump float;
      void main() {
        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);
      }`;this._program=t.programCache.acquire(e,i,g().attributes)}_updateMatricesAndLocalOrigin(t){const{state:e}=t,{displayMat3:i,size:o,resolution:d,pixelRatio:n,rotation:a,viewpoint:s}=e,h=k*a,{x:r,y}=s.targetGeometry,B=A(r,e.spatialReference);this._localOrigin.x=B,this._localOrigin.y=y;const c=n*o[0],u=n*o[1],M=d*c,b=d*u,l=O(this._dvsMat3);D(l,l,i),E(l,l,C(c/2,u/2)),N(l,l,I(o[0]/M,-u/b,1)),S(l,l,-h)}_updateBufferData(t,e){const{x:i,y:o}=this._localOrigin,d=2*H*e.length,n=new Float32Array(d),a=new Uint32Array(8*e.length);let s=0,h=0;for(const r of e)r&&(n[2*s]=r[0]-i,n[2*s+1]=r[1]-o,n[2*s+2]=r[0]-i,n[2*s+3]=r[3]-o,n[2*s+4]=r[2]-i,n[2*s+5]=r[3]-o,n[2*s+6]=r[2]-i,n[2*s+7]=r[1]-o,a[h]=s+0,a[h+1]=s+3,a[h+2]=s+3,a[h+3]=s+2,a[h+4]=s+2,a[h+5]=s+1,a[h+6]=s+1,a[h+7]=s+0,s+=4,h+=8);if(this._vertexBuffer?this._vertexBuffer.setData(n.buffer):this._vertexBuffer=_.createVertex(t,p.DYNAMIC_DRAW,n.buffer),this._indexBuffer?this._indexBuffer.setData(a):this._indexBuffer=_.createIndex(t,p.DYNAMIC_DRAW,a),!this._vao){const r=g();this._vao=new U(t,r.attributes,r.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const g=()=>P("bounds",{geometry:[{location:0,name:"a_position",count:2,type:v.FLOAT}]});let K=class extends ${constructor(t){super(t),this.checkHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=L(this._boundsRenderer)}enableRenderingBounds(t){this._boundsRenderer=new W(t),this.requestRender()}get hasHighlight(){return this.checkHighlight()}onTileData(t,e){t.patch(e),this.contains(t)||this.addChild(t),this.requestRender()}onTileError(t){t.clear(),this.contains(t)||this.addChild(t)}_renderChildren(t,e){for(const i of this.children)i.isReady&&i.hasData&&(i.commit(t),t.context.setStencilFunction(F.EQUAL,i.stencilRef,255),i.getDisplayList().replay(t,i,e))}};export{K as i};
