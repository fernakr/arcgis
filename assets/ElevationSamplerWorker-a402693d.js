import{a1 as l}from"./index-12a23f8f.js";import{s as p}from"./PooledRBush-16be7c97.js";import{q as h}from"./georeference-db1134e7.js";import"./mat3f64-221ce671.js";import"./mat4f64-1413b4a7.js";import"./spatialReferenceEllipsoidUtils-f5c3de41.js";import"./MeshLocalVertexSpace-725d7187.js";import"./MeshGeoreferencedRelativeVertexSpace-eb8c1a5b.js";import"./quat-370384ba.js";import"./quatf64-3363c48e.js";import"./vec32-ba071736.js";import"./BufferView-7df6a2c7.js";class g{async createIndex(t,o){var m;const e=new Array;if(!((m=t.vertexAttributes)!=null&&m.position))return new p;const a=this._createMeshData(t),n=o!=null?await o.invoke("createIndexThread",a,{transferList:e}):this.createIndexThread(a).result;return this._createPooledRBush().fromJSON(n)}createIndexThread(t){const o=new Float64Array(t.position),e=this._createPooledRBush();return t.components?this._createIndexComponentsThread(e,o,t.components.map(a=>new Uint32Array(a))):this._createIndexAllThread(e,o)}_createIndexAllThread(t,o){const e=new Array(o.length/9);let a=0;for(let n=0;n<o.length;n+=9)e[a++]=c(o,n,n+3,n+6);return t.load(e),{result:t.toJSON()}}_createIndexComponentsThread(t,o,e){let a=0;for(const s of e)a+=s.length/3;const n=new Array(a);let m=0;for(const s of e)for(let i=0;i<s.length;i+=3)n[m++]=c(o,3*s[i],3*s[i+1],3*s[i+2]);return t.load(n),{result:t.toJSON()}}_createMeshData(t){const o=(t.vertexSpace.isRelative?h({position:t.vertexAttributes.position,normal:null,tangent:null},t.vertexSpace,t.transform,t.spatialReference).position:t.vertexAttributes.position).buffer;return!t.components||t.components.some(e=>!e.faces)?{position:o}:{position:o,components:t.components.map(e=>e.faces)}}_createPooledRBush(){return new p(9,l("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}}function c(r,t,o,e){return{minX:Math.min(r[t],r[o],r[e]),maxX:Math.max(r[t],r[o],r[e]),minY:Math.min(r[t+1],r[o+1],r[e+1]),maxY:Math.max(r[t+1],r[o+1],r[e+1]),p0:[r[t],r[t+1],r[t+2]],p1:[r[o],r[o+1],r[o+2]],p2:[r[e],r[e+1],r[e+2]]}}export{g as default};
