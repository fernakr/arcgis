import{F as e,G as o,be as r,f as a,H as c,a9 as p,aa as u}from"./index-c43fbcbe.js";var n;let t=n=class extends p{static from(s){return u(n,s)}constructor(s){super(s),this.returnAttachmentAssociations=!1,this.returnConnectivityAssociations=!1,this.returnContainmentAssociations=!1,this.extent=null,this.maxGeometryCount=null,this.outSpatialReference=null,this.gdbVersion=null,this.moment=null}};e([o({type:Boolean,json:{read:{source:"attachmentAssociations"},write:{target:"attachmentAssociations"}}})],t.prototype,"returnAttachmentAssociations",void 0),e([o({type:Boolean,json:{read:{source:"connectivityAssociations"},write:{target:"connectivityAssociations"}}})],t.prototype,"returnConnectivityAssociations",void 0),e([o({type:Boolean,json:{read:{source:"containmentAssociations"},write:{target:"containmentAssociations"}}})],t.prototype,"returnContainmentAssociations",void 0),e([o({type:r,json:{write:!0}})],t.prototype,"extent",void 0),e([o({type:Number,json:{write:!0}})],t.prototype,"maxGeometryCount",void 0),e([o({type:a,json:{read:{source:"outSR"},write:{target:"outSR"}}})],t.prototype,"outSpatialReference",void 0),e([o({type:String,json:{write:!0}})],t.prototype,"gdbVersion",void 0),e([o({type:Date,json:{type:Number,write:{writer:(s,i)=>{i.moment=s==null?void 0:s.getTime()}}}})],t.prototype,"moment",void 0),t=n=e([c("esri.rest.networks.support.SynthesizeAssociationGeometriesParameters")],t);const y=t;export{y as default};
