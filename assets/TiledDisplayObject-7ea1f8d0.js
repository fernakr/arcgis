import{D as a,a5 as l,a6 as u}from"./index-aa00a0dc.js";import{i as g}from"./Container-84efe056.js";let m=class extends g{constructor(t,s,i,h,e,r,o=e,n=r){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new a(t),this.resolution=s,this.x=i,this.y=h,this.width=e,this.height=r,this.rangeX=o,this.rangeY=n}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}setTransform(t){const s=this.resolution/(t.resolution*t.pixelRatio),i=this.transforms.tileMat3,[h,e]=t.toScreenNoRotation([0,0],[this.x,this.y]),r=this.width/this.rangeX*s,o=this.height/this.rangeY*s;l(i,r,0,0,0,o,0,h,e,1),u(this.transforms.dvs,t.displayViewMat3,i)}};export{m as r};
