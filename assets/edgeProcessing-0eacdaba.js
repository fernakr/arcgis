import{e as pt}from"./deduplicate-9982c575.js";import{H as D}from"./InterleavedLayout-9d37d737.js";import{e as l}from"./VertexAttribute-0e674613.js";import{C as R}from"./enums-bdecffa2.js";import{t as Ot}from"./VertexElementDescriptor-2925c6af.js";import{id as nt,iI as dt,ie as At,fb as W,cM as ot,cn as z,iJ as ht,iK as St,co as lt,cN as rt,cq as ut,b0 as w,cQ as Tt,ic as Et}from"./index-7e9b571f.js";function j(t,e=0){const o=t.stride;return Array.from(t.fields.keys()).map(s=>{const r=t.fields.get(s),c=r.constructor.ElementCount,g=wt(r.constructor.ElementType),a=r.offset,I=!(!r.optional||!r.optional.glNormalized);return new Ot(s,c,g,a,o,I,e)})}function wt(t){const e=vt[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}const vt={u8:R.UNSIGNED_BYTE,u16:R.UNSIGNED_SHORT,u32:R.UNSIGNED_INT,i8:R.BYTE,i16:R.SHORT,i32:R.INT,f32:R.FLOAT},$t=D().vec3f(l.POSITION).u16(l.COMPONENTINDEX),yt=D().vec2u8(l.SIDENESS);j(yt);const K=D().vec3f(l.POSITION0).vec3f(l.POSITION1).vec3f(l.NORMAL).u16(l.COMPONENTINDEX).u8(l.VARIANTOFFSET,{glNormalized:!0}).u8(l.VARIANTSTROKE).u8(l.VARIANTEXTENSION,{glNormalized:!0}),G=D().vec3f(l.POSITION0).vec3f(l.POSITION1).vec3f(l.NORMALA).vec3f(l.NORMALB).u16(l.COMPONENTINDEX).u8(l.VARIANTOFFSET,{glNormalized:!0}).u8(l.VARIANTSTROKE).u8(l.VARIANTEXTENSION,{glNormalized:!0});l.POSITION0,l.POSITION1,l.COMPONENTINDEX,l.VARIANTOFFSET,l.VARIANTSTROKE,l.VARIANTEXTENSION,l.NORMAL,l.NORMALA,l.NORMALB,l.SIDENESS;const M=-1;var st;function Vt(t,e,o,s=Dt){const r=t.vertices.position,c=t.vertices.componentIndex,g=nt(s.anglePlanar),a=nt(s.angleSignificantEdge),I=Math.cos(a),f=Math.cos(g),u=k.edge,O=u.position0,d=u.position1,p=u.faceNormal0,v=u.faceNormal1,A=xt(t),$=Lt(t),n=$.length/4,i=e.allocate(n);let N=0;const m=n,h=o.allocate(m);let E=0,y=0,S=0;const Q=dt(0,n),_=new Float32Array(n);_.forEach((P,T,F)=>{r.getVec($[4*T],O),r.getVec($[4*T+1],d),F[T]=At(O,d)}),Q.sort((P,T)=>_[T]-_[P]);const Z=new Array,tt=new Array;for(let P=0;P<n;P++){const T=Q[P],F=_[T],H=$[4*T],It=$[4*T+1],L=$[4*T+2],b=$[4*T+3],et=b===M;if(r.getVec(H,O),r.getVec(It,d),et)W(p,A[3*L],A[3*L+1],A[3*L+2]),ot(v,p),u.componentIndex=c.get(H),u.cosAngle=z(p,v);else{if(W(p,A[3*L],A[3*L+1],A[3*L+2]),W(v,A[3*b],A[3*b+1],A[3*b+2]),u.componentIndex=c.get(H),u.cosAngle=z(p,v),Mt(u,f))continue;u.cosAngle<-.9999&&ot(v,p)}y+=F,S++,et||Rt(u,I)?(e.write(i,N++,u),Z.push(F)):Pt(u,g)&&(o.write(h,E++,u),tt.push(F))}const Nt=new Float32Array(Z.reverse()),mt=new Float32Array(tt.reverse());return{regular:{instancesData:e.trim(i,N),lodInfo:{lengths:Nt}},silhouette:{instancesData:o.trim(h,E),lodInfo:{lengths:mt}},averageEdgeLength:y/S}}function Rt(t,e){return t.cosAngle<e}function Mt(t,e){return t.cosAngle>e}function Pt(t,e){const o=ht(t.cosAngle),s=k.fwd,r=k.ortho;return St(s,t.position1,t.position0),o*(z(lt(r,t.faceNormal0,t.faceNormal1),s)>0?-1:1)>e}function Lt(t){const e=t.faces.length/3,o=t.faces,s=t.neighbors;let r=0;for(let a=0;a<e;a++){const I=s[3*a],f=s[3*a+1],u=s[3*a+2],O=o[3*a],d=o[3*a+1],p=o[3*a+2];r+=I===M||O<d?1:0,r+=f===M||d<p?1:0,r+=u===M||p<O?1:0}const c=new Int32Array(4*r);let g=0;for(let a=0;a<e;a++){const I=s[3*a],f=s[3*a+1],u=s[3*a+2],O=o[3*a],d=o[3*a+1],p=o[3*a+2];(I===M||O<d)&&(c[g++]=O,c[g++]=d,c[g++]=a,c[g++]=I),(f===M||d<p)&&(c[g++]=d,c[g++]=p,c[g++]=a,c[g++]=f),(u===M||p<O)&&(c[g++]=p,c[g++]=O,c[g++]=a,c[g++]=u)}return c}function xt(t){const e=t.faces.length/3,o=t.vertices.position,s=t.faces,r=X.v0,c=X.v1,g=X.v2,a=new Float32Array(3*e);for(let I=0;I<e;I++){const f=s[3*I],u=s[3*I+1],O=s[3*I+2];o.getVec(f,r),o.getVec(u,c),o.getVec(O,g),rt(c,c,r),rt(g,g,r),lt(r,c,g),ut(r,r),a[3*I]=r[0],a[3*I+1]=r[1],a[3*I+2]=r[2]}return a}(function(t){t[t.SOLID=0]="SOLID",t[t.SKETCH=1]="SKETCH"})(st||(st={}));const k={edge:{position0:w(),position1:w(),faceNormal0:w(),faceNormal1:w(),componentIndex:0,cosAngle:0},ortho:w(),fwd:w()},X={v0:w(),v1:w(),v2:w()},Dt={anglePlanar:4,angleSignificantEdge:35};function it(t,e,o){const s=e/3,r=new Uint32Array(o+1),c=new Uint32Array(o+1),g=(n,i)=>{n<i?r[n+1]++:c[i+1]++};for(let n=0;n<s;n++){const i=t[3*n],N=t[3*n+1],m=t[3*n+2];g(i,N),g(N,m),g(m,i)}let a=0,I=0;for(let n=0;n<o;n++){const i=r[n+1],N=c[n+1];r[n+1]=a,c[n+1]=I,a+=i,I+=N}const f=new Uint32Array(6*s),u=r[o],O=(n,i,N)=>{if(n<i){const m=r[n+1]++;f[2*m]=i,f[2*m+1]=N}else{const m=c[i+1]++;f[2*u+2*m]=n,f[2*u+2*m+1]=N}};for(let n=0;n<s;n++){const i=t[3*n],N=t[3*n+1],m=t[3*n+2];O(i,N,n),O(N,m,n),O(m,i,n)}const d=(n,i)=>{const N=2*n,m=i-n;for(let h=1;h<m;h++){const E=f[N+2*h],y=f[N+2*h+1];let S=h-1;for(;S>=0&&f[N+2*S]>E;S--)f[N+2*S+2]=f[N+2*S],f[N+2*S+3]=f[N+2*S+1];f[N+2*S+2]=E,f[N+2*S+3]=y}};for(let n=0;n<o;n++)d(r[n],r[n+1]),d(u+c[n],u+c[n+1]);const p=new Int32Array(3*s),v=(n,i)=>n===t[3*i]?0:n===t[3*i+1]?1:n===t[3*i+2]?2:-1,A=(n,i)=>{const N=v(n,i);p[3*i+N]=-1},$=(n,i,N,m)=>{const h=v(n,i);p[3*i+h]=m;const E=v(N,m);p[3*m+E]=i};for(let n=0;n<o;n++){let i=r[n];const N=r[n+1];let m=c[n];const h=c[n+1];for(;i<N&&m<h;){const E=f[2*i],y=f[2*u+2*m];E===y?($(n,f[2*i+1],y,f[2*u+2*m+1]),i++,m++):E<y?(A(n,f[2*i+1]),i++):(A(y,f[2*u+2*m+1]),m++)}for(;i<N;)A(n,f[2*i+1]),i++;for(;m<h;)A(f[2*u+2*m],f[2*u+2*m+1]),m++}return p}let gt=class{updateSettings(e){this.settings=e,this._edgeHashFunction=e.reducedPrecision?_t:Ft}write(e,o,s){const r=this._edgeHashFunction(s);U.seed=r;const c=U.getIntRange(0,255),g=U.getIntRange(0,this.settings.variants-1),a=.7,I=U.getFloat(),f=255*(.5*bt(-(1-Math.min(I/a,1))+Math.max(0,I-a)/(1-a),1.2)+.5);e.position0.setVec(o,s.position0),e.position1.setVec(o,s.position1),e.componentIndex.set(o,s.componentIndex),e.variantOffset.set(o,c),e.variantStroke.set(o,g),e.variantExtension.set(o,f)}trim(e,o){return e.slice(0,o)}};const J=new Float32Array(6),B=new Uint32Array(J.buffer),V=new Uint32Array(1);function Ft(t){const e=J;e[0]=t.position0[0],e[1]=t.position0[1],e[2]=t.position0[2],e[3]=t.position1[0],e[4]=t.position1[1],e[5]=t.position1[2],V[0]=5381;for(let o=0;o<B.length;o++)V[0]=31*V[0]+B[o];return V[0]}function _t(t){const e=J;e[0]=x(t.position0[0]),e[1]=x(t.position0[1]),e[2]=x(t.position0[2]),e[3]=x(t.position1[0]),e[4]=x(t.position1[1]),e[5]=x(t.position1[2]),V[0]=5381;for(let o=0;o<B.length;o++)V[0]=31*V[0]+B[o];return V[0]}const ct=1e4;function x(t){return Math.round(t*ct)/ct}function bt(t,e){const o=t<0?-1:1;return Math.abs(t)**e*o}let q=class{constructor(){this._commonWriter=new gt}updateSettings(e){this._commonWriter.updateSettings(e)}allocate(e){return K.createBuffer(e)}write(e,o,s){this._commonWriter.write(e,o,s),Tt(C,s.faceNormal0,s.faceNormal1),ut(C,C),e.normal.setVec(o,C)}trim(e,o){return this._commonWriter.trim(e,o)}};q.Layout=K,q.glLayout=j(K,1);class Y{constructor(){this._commonWriter=new gt}updateSettings(e){this._commonWriter.updateSettings(e)}allocate(e){return G.createBuffer(e)}write(e,o,s){this._commonWriter.write(e,o,s),e.normalA.setVec(o,s.faceNormal0),e.normalB.setVec(o,s.faceNormal1)}trim(e,o){return this._commonWriter.trim(e,o)}}Y.Layout=G,Y.glLayout=j(G,1);const C=w(),U=new Et;function qt(t){const e=Ct(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return at.updateSettings(t.writerSettings),ft.updateSettings(t.writerSettings),Vt(e,at,ft)}function Ct(t,e,o,s){if(e){const g=it(o,s,t.count);return new Ut(o,s,g,t)}const r=pt(t.buffer,t.stride/4,{originalIndices:o,originalIndicesLength:s}),c=it(r.indices,s,r.uniqueCount);return{faces:r.indices,facesLength:r.indices.length,neighbors:c,vertices:$t.createView(r.buffer)}}class Ut{constructor(e,o,s,r){this.faces=e,this.facesLength=o,this.neighbors=s,this.vertices=r}}const at=new q,ft=new Y,Yt=D().vec3f(l.POSITION0).vec3f(l.POSITION1),jt=D().vec3f(l.POSITION0).vec3f(l.POSITION1).u16(l.COMPONENTINDEX);export{$t as T,Yt as d,qt as f,jt as m,Vt as p,Ct as u};