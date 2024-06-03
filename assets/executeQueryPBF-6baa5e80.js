import{f8 as c,a3 as l,aZ as f,a_ as p}from"./index-8fbcd33f.js";import{I as _,s as m}from"./featureConversionUtils-d21d2be5.js";import{f as y}from"./query-20743e72.js";function P(o,t){return t}function h(o,t,e,r){switch(e){case 0:return n(o,t+r,0);case 1:return o.originPosition==="lowerLeft"?n(o,t+r,1):G(o,t+r,1)}}function u(o,t,e,r){return e===2?n(o,t,2):h(o,t,e,r)}function C(o,t,e,r){return e===2?n(o,t,3):h(o,t,e,r)}function g(o,t,e,r){return e===3?n(o,t,3):u(o,t,e,r)}function n({translate:o,scale:t},e,r){return o[r]+e*t[r]}function G({translate:o,scale:t},e,r){return o[r]-e*t[r]}class M{constructor(t){this._options=t,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=P,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{}}createFeatureResult(){return{fields:[],features:[]}}finishFeatureResult(t){if(this._options.applyTransform&&(t.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!t.hasZ)return;const e=c(t.geometryType,this._options.sourceSpatialReference,t.spatialReference);if(e!=null)for(const r of t.features)e(r.geometry)}createSpatialReference(){return{}}addField(t,e){const r=t.fields;l(r),r.push(e);const s=r.map(i=>i.name);this._attributesConstructor=function(){for(const i of s)this[i]=null}}addFeature(t,e){t.features.push(e)}prepareFeatures(t){switch(this._transform=t.transform,this._options.applyTransform&&t.transform&&(this._applyTransform=this._deriveApplyTransform(t)),this._vertexDimension=2,t.hasZ&&this._vertexDimension++,t.hasM&&this._vertexDimension++,t.geometryType){case"esriGeometryPoint":this.addCoordinate=(e,r,s)=>this.addCoordinatePoint(e,r,s),this.createGeometry=e=>this.createPointGeometry(e);break;case"esriGeometryPolygon":this.addCoordinate=(e,r,s)=>this._addCoordinatePolygon(e,r,s),this.createGeometry=e=>this._createPolygonGeometry(e);break;case"esriGeometryPolyline":this.addCoordinate=(e,r,s)=>this._addCoordinatePolyline(e,r,s),this.createGeometry=e=>this._createPolylineGeometry(e);break;case"esriGeometryMultipoint":this.addCoordinate=(e,r,s)=>this._addCoordinateMultipoint(e,r,s),this.createGeometry=e=>this._createMultipointGeometry(e)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,{attributes:new this._attributesConstructor}}allocateCoordinates(){}addLength(t,e,r){this._lengths.length===0&&(this._toAddInCurrentPath=e),this._lengths.push(e)}addQueryGeometry(t,e){const{queryGeometry:r,queryGeometryType:s}=e,i=_(r.clone(),r,!1,!1,this._transform),a=m(i,s,!1,!1);t.queryGeometryType=s,t.queryGeometry={...a}}createPointGeometry(t){const e={x:0,y:0,spatialReference:t.spatialReference};return t.hasZ&&(e.z=0),t.hasM&&(e.m=0),e}addCoordinatePoint(t,e,r){const s=this._transform;switch(e=this._applyTransform(s,e,r,0),r){case 0:t.x=e;break;case 1:t.y=e;break;case 2:"z"in t?t.z=e:t.m=e;break;case 3:t.m=e}}_transformPathLikeValue(t,e){let r=0;e<=1&&(r=this._previousCoordinate[e],this._previousCoordinate[e]+=t);const s=this._transform;return this._applyTransform(s,t,e,r)}_addCoordinatePolyline(t,e,r){this._dehydratedAddPointsCoordinate(t.paths,e,r)}_addCoordinatePolygon(t,e,r){this._dehydratedAddPointsCoordinate(t.rings,e,r)}_addCoordinateMultipoint(t,e,r){r===0&&t.points.push([]);const s=this._transformPathLikeValue(e,r);t.points[t.points.length-1].push(s)}_createPolygonGeometry(t){return{rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createPolylineGeometry(t){return{paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createMultipointGeometry(t){return{points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_dehydratedAddPointsCoordinate(t,e,r){r===0&&this._toAddInCurrentPath--==0&&(t.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const s=this._transformPathLikeValue(e,r),i=t[t.length-1];r===0&&(this._coordinateBufferPtr=0,this._coordinateBuffer=new Array(this._vertexDimension),i.push(this._coordinateBuffer)),this._coordinateBuffer[this._coordinateBufferPtr++]=s}_deriveApplyTransform(t){const{hasZ:e,hasM:r}=t;return e&&r?g:e?u:r?C:h}}async function b(o,t,e){const r=f(o),s={...e},i=p.from(t),a=!i.quantizationParameters,{data:d}=await y(r,i,new M({sourceSpatialReference:i.sourceSpatialReference,applyTransform:a}),s);return d}export{b as n};
