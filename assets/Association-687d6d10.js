import{F as o,G as l,a7 as i,bA as m,bB as s,bc as a,H as d,a9 as p}from"./index-32200583.js";let e=class extends p{constructor(r){super(r),this.globalId=null,this.associationType=null,this.fromNetworkElement=null,this.toNetworkElement=null,this.geometry=null,this.errorMessage=null,this.percentAlong=null,this.errorCode=null,this.isContentVisible=null,this.status=null}readFromNetworkElement(r,t){const n=new i;return n.globalId=t.fromGlobalId,n.networkSourceId=t.fromNetworkSourceId,n.terminalId=t.fromTerminalId,n}writeFromNetworkElement(r,t){r&&(t.fromGlobalId=r.globalId,t.fromNetworkSourceId=r.networkSourceId,t.fromTerminalId=r.terminalId)}readToNetworkElement(r,t){const n=new i;return n.globalId=t.toGlobalId,n.networkSourceId=t.toNetworkSourceId,n.terminalId=t.toTerminalId,n}writeToNetworkElement(r,t){r&&(t.toGlobalId=r.globalId,t.toNetworkSourceId=r.networkSourceId,t.toTerminalId=r.terminalId)}};o([l({type:String,json:{write:!0}})],e.prototype,"globalId",void 0),o([l({type:["attachment","connectivity","containment"],json:{write:!0}})],e.prototype,"associationType",void 0),o([l({type:i,json:{write:{target:{fromGlobalId:{type:String},fromNetworkSourceId:{type:Number},fromTerminalId:{type:Number}}},read:{source:["fromGlobalId","fromNetworkSourceId","fromTerminalId"]}}})],e.prototype,"fromNetworkElement",void 0),o([m("fromNetworkElement")],e.prototype,"readFromNetworkElement",null),o([s("fromNetworkElement")],e.prototype,"writeFromNetworkElement",null),o([l({type:i,json:{write:{target:{toGlobalId:{type:String},toNetworkSourceId:{type:Number},toTerminalId:{type:Number}}},read:{source:["toGlobalId","toNetworkSourceId","toTerminalId"]}}})],e.prototype,"toNetworkElement",void 0),o([m("toNetworkElement")],e.prototype,"readToNetworkElement",null),o([s("toNetworkElement")],e.prototype,"writeToNetworkElement",null),o([l({type:a,json:{write:!0}})],e.prototype,"geometry",void 0),o([l({type:String,json:{write:!0}})],e.prototype,"errorMessage",void 0),o([l({type:Number,json:{write:!0}})],e.prototype,"percentAlong",void 0),o([l({type:Number,json:{write:!0}})],e.prototype,"errorCode",void 0),o([l({type:Boolean,json:{write:!0}})],e.prototype,"isContentVisible",void 0),o([l({type:Number,json:{write:!0}})],e.prototype,"status",void 0),e=o([d("esri.rest.networks.support.Association")],e);const u=e;export{u as p};
