import{d9 as X,d5 as P,cM as d,cJ as l,b2 as i}from"./index-beb896e6.js";import"./sphere-e0e23b39.js";function p(I=O){return[I[0],I[1],I[2],I[3]]}function x(I,N,M,r=p()){const f=M[0]-N[0],n=M[1]-N[1],a=M[2]-N[2],o=I[0]-N[0],b=I[1]-N[1],m=I[2]-N[2],F=n*m-a*b,h=a*o-f*m,T=f*b-n*o,_=F*F+h*h+T*T,A=Math.abs(_-1)>1e-5&&_>1e-12?1/Math.sqrt(_):1;return r[0]=F*A,r[1]=h*A,r[2]=T*A,r[3]=-(r[0]*I[0]+r[1]*I[1]+r[2]*I[2]),r}function C(I,N,M,r=0,f=Math.floor(M*(1/3)),n=Math.floor(M*(2/3))){if(M<3)return!1;N(s,r);let a=f,o=!1;for(;a<M-1&&!o;)N(u,a),a++,o=!X(s,u);if(!o)return!1;for(a=Math.max(a,n),o=!1;a<M&&!o;)N(t,a),a++,P(E,s,u),d(E,E),P(e,u,t),d(e,e),o=!X(s,t)&&!X(u,t)&&Math.abs(l(E,e))<L;return o?(x(s,u,t,I),!0):(r!==0||f!==1||n!==2)&&C(I,N,M,0,1,2)}const L=.99619469809,s=i(),u=i(),t=i(),E=i(),e=i();function z(I){return I}const O=[0,0,1,0];var c;(function(I){I[I.NONE=0]="NONE",I[I.CLAMP=1]="CLAMP",I[I.INFINITE_MIN=4]="INFINITE_MIN",I[I.INFINITE_MAX=8]="INFINITE_MAX"})(c||(c={}));c.INFINITE_MIN|c.INFINITE_MAX;c.INFINITE_MAX;export{C as X,p as b,z as o};