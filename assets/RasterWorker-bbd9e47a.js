import{be as a,b1 as l,cK as c}from"./index-0dd4b1c4.js";import{u as i,f as m,W as f,U as u,R as p,I as S,a as d,s as x}from"./dataUtils-145ffb8e.js";import{m as y,j as h,L as O,h as N}from"./RasterSymbolizer-7406a9e3.js";import{R as J,i as b}from"./utils-78478b4a.js";import{M as P,T as g,e as B}from"./rasterProjectionHelper-a2b37671.js";class R{convertVectorFieldData(e){const t=i.fromJSON(e.pixelBlock),s=m(t,e.type);return Promise.resolve(s!=null?s.toJSON():null)}computeStatisticsHistograms(e){const t=i.fromJSON(e.pixelBlock),s=y(t);return Promise.resolve(s)}async decode(e){const t=await h(e.data,e.options);return t&&t.toJSON()}symbolize(e){e.pixelBlock=i.fromJSON(e.pixelBlock),e.extent=e.extent?a.fromJSON(e.extent):null;const t=this.symbolizer.symbolize(e);return Promise.resolve(t!=null?t.toJSON():null)}async updateSymbolizer(e){var t;this.symbolizer=O.fromJSON(e.symbolizerJSON),e.histograms&&((t=this.symbolizer)==null?void 0:t.rendererJSON.type)==="rasterStretch"&&(this.symbolizer.rendererJSON.histograms=e.histograms)}async updateRasterFunction(e){this.rasterFunction=J(e.rasterFunctionJSON)}async process(e){var s;const t=this.rasterFunction.process({extent:a.fromJSON(e.extent),primaryPixelBlocks:e.primaryPixelBlocks.map(o=>o!=null?i.fromJSON(o):null),primaryPixelSizes:(s=e.primaryPixelSizes)==null?void 0:s.map(o=>o!=null?l.fromJSON(o):null),primaryRasterIds:e.primaryRasterIds});return t!=null?t.toJSON():null}stretch(e){const t=this.symbolizer.simpleStretch(i.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(t==null?void 0:t.toJSON())}estimateStatisticsHistograms(e){const t=N(i.fromJSON(e.srcPixelBlock));return Promise.resolve(t)}split(e){const t=f(i.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel);return t&&t.forEach((s,o)=>{t.set(o,s==null?void 0:s.toJSON())}),Promise.resolve(t)}async mosaicAndTransform(e){const t=e.srcPixelBlocks.map(n=>n?new i(n):null),s=u(t,e.srcMosaicSize,{blockWidths:e.blockWidths,alignmentInfo:e.alignmentInfo,clipOffset:e.clipOffset,clipSize:e.clipSize});let o,r=s;return e.coefs&&(r=p(s,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation)),e.projectDirections&&e.gcsGrid&&(o=S(e.destDimension,e.gcsGrid),r=d(r,e.isUV?"vector-uv":"vector-magdir",o)),{pixelBlock:r==null?void 0:r.toJSON(),localNorthDirections:o}}async createFlowMesh(e,t){const s={data:new Float32Array(e.flowData.buffer),mask:new Uint8Array(e.flowData.maskBuffer),width:e.flowData.width,height:e.flowData.height},{vertexData:o,indexData:r}=await x(e.meshType,e.simulationSettings,s,t.signal);return{result:{vertexBuffer:o.buffer,indexBuffer:r.buffer},transferList:[o.buffer,r.buffer]}}async getProjectionOffsetGrid(e){const t=a.fromJSON(e.projectedExtent),s=a.fromJSON(e.srcBufferExtent);let o=null;e.datumTransformationSteps&&(o=new c({steps:e.datumTransformationSteps})),(e.includeGCSGrid||P(t.spatialReference,s.spatialReference,o))&&await g();const r=e.rasterTransform?b(e.rasterTransform):null;return B({...e,projectedExtent:t,srcBufferExtent:s,datumTransformation:o,rasterTransform:r})}}export{R as default};
