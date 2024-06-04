import{E as m,ez as u,s as p,ae as _,a_ as c,ao as y}from"./index-0dd4b1c4.js";import{j as f,v as w,t as I}from"./timeSupport-07cfaeb2.js";import{I as b}from"./FeatureStore2D-6898d40c.js";import"./projectionSupport-348b839c.js";import"./json-48e3ea08.js";import"./featureConversionUtils-c62affbb.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./CircularArray-ef508845.js";import"./ComputedAttributeStorage-034a0679.js";import"./TimeOnly-b3750999.js";import"./labelPoint-f81f09e9.js";import"./definitions-03efbf21.js";import"./visualVariablesUtils-25165d50.js";import"./color-2af27954.js";import"./enums-f1a6a48a.js";import"./enums-bdecffa2.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";const d=m.getLogger("esri.views.2d.layers.features.support.whereUtils"),g={getAttribute:(r,e)=>r.readAttribute(e)};async function T(r,e){try{const t=await u(r,e);if(!t.isStandardized){const i=new p("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",t);d.error(i)}return i=>{const s=i.readArcadeFeature();return t.testFeature(s,g)}}catch{return d.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",r),i=>!0}}const a=1,v=2;class k{constructor(e){this._geometryBounds=_(),this._idToVisibility=new Map,this._serviceInfo=e}get hash(){return this._hash}check(e){return this._applyFilter(e)}clear(){const e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}}invalidate(){this._idToVisibility.forEach((e,t)=>{this._idToVisibility.set(t,0)})}setKnownIds(e){for(const t of e)this._idToVisibility.set(t,a)}setTrue(e){const t=[],i=[],s=new Set(e);return this._idToVisibility.forEach((h,o)=>{const l=!!(this._idToVisibility.get(o)&a),n=s.has(o);!l&&n?t.push(o):l&&!n&&i.push(o),this._idToVisibility.set(o,n?a|v:0)}),{show:t,hide:i}}createQuery(){const{geometry:e,spatialRel:t,where:i,timeExtent:s,objectIds:h}=this;return c.fromJSON({geometry:e,spatialRel:t,where:i,timeExtent:s,objectIds:h})}async update(e,t){this._hash=JSON.stringify(e);const i=await f(e,null,t);await Promise.all([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)])}async _setAttributeFilter(e){if(!(e!=null&&e.where))return this._clause=null,void(this.where=null);this._clause=await T(e.where,this._serviceInfo.fieldsIndex),this.where=e.where}_setIdFilter(e){this._idsToShow=(e==null?void 0:e.objectIds)&&new Set(e.objectIds),this._idsToHide=(e==null?void 0:e.hiddenIds)&&new Set(e.hiddenIds),this.objectIds=e==null?void 0:e.objectIds}async _setGeometryFilter(e){if(!(e!=null&&e.geometry))return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const t=e.geometry,i=e.spatialRel||"esriSpatialRelIntersects",s=await w(i,t,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);y(this._geometryBounds,t),this._spatialQueryOperator=s,this.geometry=t,this.spatialRel=i}_setTimeFilter(e){if(this.timeExtent=this._timeOperator=null,e==null?void 0:e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=I(this._serviceInfo.timeInfo,e.timeExtent,b);else{const t=new p("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);m.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter").error(t)}}_applyFilter(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)}_filterByExpression(e){return!this.where||this._clause(e)}_filterById(e){var t,i;return(!((t=this._idsToHide)!=null&&t.size)||!this._idsToHide.has(e.getObjectId()))&&(!((i=this._idsToShow)!=null&&i.size)||this._idsToShow.has(e.getObjectId()))}_filterByGeometry(e){if(!this.geometry)return!0;const t=e.readHydratedGeometry();return!!t&&this._spatialQueryOperator(t)}_filterByTime(e){return this._timeOperator==null||this._timeOperator(e)}_resetAllHiddenIds(){const e=[];return this._idToVisibility.forEach((t,i)=>{t&a||(this._idToVisibility.set(i,a),e.push(i))}),e}}export{k as default};