var Vw=Object.defineProperty,jw=Object.defineProperties;var Pw=Object.getOwnPropertyDescriptors;var Jn=Object.getOwnPropertySymbols;var _w=Object.prototype.hasOwnProperty,Xw=Object.prototype.propertyIsEnumerable;var Fn=(c,xA,KA)=>xA in c?Vw(c,xA,{enumerable:!0,configurable:!0,writable:!0,value:KA}):c[xA]=KA,Kn=(c,xA)=>{for(var KA in xA||(xA={}))_w.call(xA,KA)&&Fn(c,KA,xA[KA]);if(Jn)for(var KA of Jn(xA))Xw.call(xA,KA)&&Fn(c,KA,xA[KA]);return c},Rn=(c,xA)=>jw(c,Pw(xA));(function(){"use strict";let c;const xA=new Array(32).fill(void 0);function KA(C){return xA[C]}xA.push(void 0,null,!0,!1);let UB=xA.length;function tt(C){const A=KA(C);return function(I){I<36||(xA[I]=UB,UB=I)}(C),A}function AI(C){UB===xA.length&&xA.push(xA.length+1);const A=UB;return UB=xA[A],xA[A]=C,A}let et=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});et.decode();let SQ=null;function cQ(){return SQ!==null&&SQ.buffer===c.memory.buffer||(SQ=new Uint8Array(c.memory.buffer)),SQ}function lQ(C,A){return et.decode(cQ().subarray(C,C+A))}function at(C){return C==null}let GQ=null,kQ=null;function iI(){return kQ!==null&&kQ.buffer===c.memory.buffer||(kQ=new Int32Array(c.memory.buffer)),kQ}function Vi(C){const A=typeof C;if(A=="number"||A=="boolean"||C==null)return`${C}`;if(A=="string")return`"${C}"`;if(A=="symbol"){const B=C.description;return B==null?"Symbol":`Symbol(${B})`}if(A=="function"){const B=C.name;return typeof B=="string"&&B.length>0?`Function(${B})`:"Function"}if(Array.isArray(C)){const B=C.length;let Q="[";B>0&&(Q+=Vi(C[0]));for(let i=1;i<B;i++)Q+=", "+Vi(C[i]);return Q+="]",Q}const I=/\[object ([^\]]+)\]/.exec(toString.call(C));let g;if(!(I.length>1))return toString.call(C);if(g=I[1],g=="Object")try{return"Object("+JSON.stringify(C)+")"}catch{return"Object"}return C instanceof Error?`${C.name}: ${C.message}
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pE="138",Qh=0,ye=1,ih=2,Me=1,Eh=2,OB=3,bB=0,hI=1,RC=2,Je=1,Og=0,pC=1,Fe=2,Ke=3,Re=4,oh=5,NC=100,th=101,eh=102,pe=103,Ne=104,ah=200,sh=201,nh=202,Dh=203,qe=204,de=205,hh=206,rh=207,Sh=208,ch=209,lh=210,Gh=0,kh=1,wh=2,NE=3,Uh=4,yh=5,Mh=6,Jh=7,VQ=0,Fh=1,Kh=2,bg=0,Rh=1,ph=2,Nh=3,qh=4,dh=5,fe=300,qC=301,dC=302,qE=303,dE=304,jQ=306,fE=307,uE=1e3,TI=1001,YE=1002,lI=1003,ue=1004,Ye=1005,EI=1006,fh=1007,vB=1008,sC=1009,uh=1010,Yh=1011,ZB=1012,Lh=1013,PQ=1014,sg=1015,ng=1016,Hh=1017,mh=1018,fC=1020,Th=1021,xh=1022,fI=1023,Oh=1024,bh=1025,nC=1026,uC=1027,vh=1028,Zh=1029,Wh=1030,Vh=1031,jh=1033,LE=33776,HE=33777,mE=33778,TE=33779,Le=35840,He=35841,me=35842,Te=35843,Ph=36196,xe=37492,Oe=37496,be=37808,ve=37809,Ze=37810,We=37811,Ve=37812,je=37813,Pe=37814,_e=37815,Xe=37816,ze=37817,$e=37818,Aa=37819,Ia=37820,ga=37821,Ca=36492,_h=2200,Xh=2201,zh=2202,_Q=2300,XQ=2301,xE=2302,YC=2400,LC=2401,zQ=2402,OE=2500,Ba=2501,$h=0,Dg=3e3,gI=3001,Ar=3200,Ir=3201,HC=0,gr=1,bE=7680,Cr=519,WB=35044,$Q=35048,Qa="300 es",vE=1035;class DC{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const B=this._listeners[A];if(B!==void 0){const Q=B.indexOf(I);Q!==-1&&B.splice(Q,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const g=this._listeners[A.type];if(g!==void 0){A.target=this;const B=g.slice(0);for(let Q=0,i=B.length;Q<i;Q++)B[Q].call(this,A);A.target=null}}}const UI=[];for(let C=0;C<256;C++)UI[C]=(C<16?"0":"")+C.toString(16);const ZE=Math.PI/180,WE=180/Math.PI;function hg(){const C=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(UI[C&255]+UI[C>>8&255]+UI[C>>16&255]+UI[C>>24&255]+"-"+UI[A&255]+UI[A>>8&255]+"-"+UI[A>>16&15|64]+UI[A>>24&255]+"-"+UI[I&63|128]+UI[I>>8&255]+"-"+UI[I>>16&255]+UI[I>>24&255]+UI[g&255]+UI[g>>8&255]+UI[g>>16&255]+UI[g>>24&255]).toUpperCase()}function xI(C,A,I){return Math.max(A,Math.min(I,C))}function Br(C,A){return(C%A+A)%A}function VE(C,A,I){return(1-I)*C+I*A}function ia(C){return(C&C-1)===0&&C!==0}function jE(C){return Math.pow(2,Math.floor(Math.log(C)/Math.LN2))}class IA{constructor(A=0,I=0){this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A,I){return I!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(A,I)):(this.x+=A.x,this.y+=A.y,this)}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A,I){return I!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(A,I)):(this.x-=A.x,this.y-=A.y,this)}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,B=A.elements;return this.x=B[0]*I+B[3]*g+B[6],this.y=B[1]*I+B[4]*g+B[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I,g){return g!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),B=Math.sin(I),Q=this.x-A.x,i=this.y-A.y;return this.x=Q*g-i*B+A.x,this.y=Q*B+i*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}IA.prototype.isVector2=!0;class yI{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(A,I,g,B,Q,i,E,o,t){const e=this.elements;return e[0]=A,e[1]=B,e[2]=E,e[3]=I,e[4]=Q,e[5]=o,e[6]=g,e[7]=i,e[8]=t,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,B=I.elements,Q=this.elements,i=g[0],E=g[3],o=g[6],t=g[1],e=g[4],a=g[7],s=g[2],n=g[5],r=g[8],S=B[0],w=B[3],h=B[6],D=B[1],y=B[4],k=B[7],l=B[2],K=B[5],N=B[8];return Q[0]=i*S+E*D+o*l,Q[3]=i*w+E*y+o*K,Q[6]=i*h+E*k+o*N,Q[1]=t*S+e*D+a*l,Q[4]=t*w+e*y+a*K,Q[7]=t*h+e*k+a*N,Q[2]=s*S+n*D+r*l,Q[5]=s*w+n*y+r*K,Q[8]=s*h+n*k+r*N,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],B=A[2],Q=A[3],i=A[4],E=A[5],o=A[6],t=A[7],e=A[8];return I*i*e-I*E*t-g*Q*e+g*E*o+B*Q*t-B*i*o}invert(){const A=this.elements,I=A[0],g=A[1],B=A[2],Q=A[3],i=A[4],E=A[5],o=A[6],t=A[7],e=A[8],a=e*i-E*t,s=E*o-e*Q,n=t*Q-i*o,r=I*a+g*s+B*n;if(r===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/r;return A[0]=a*S,A[1]=(B*t-e*g)*S,A[2]=(E*g-B*i)*S,A[3]=s*S,A[4]=(e*I-B*o)*S,A[5]=(B*Q-E*I)*S,A[6]=n*S,A[7]=(g*o-t*I)*S,A[8]=(i*I-g*Q)*S,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,B,Q,i,E){const o=Math.cos(Q),t=Math.sin(Q);return this.set(g*o,g*t,-g*(o*i+t*E)+i+A,-B*t,B*o,-B*(-t*i+o*E)+E+I,0,0,1),this}scale(A,I){const g=this.elements;return g[0]*=A,g[3]*=A,g[6]*=A,g[1]*=I,g[4]*=I,g[7]*=I,this}rotate(A){const I=Math.cos(A),g=Math.sin(A),B=this.elements,Q=B[0],i=B[3],E=B[6],o=B[1],t=B[4],e=B[7];return B[0]=I*Q+g*o,B[3]=I*i+g*t,B[6]=I*E+g*e,B[1]=-g*Q+I*o,B[4]=-g*i+I*t,B[7]=-g*E+I*e,this}translate(A,I){const g=this.elements;return g[0]+=A*g[2],g[3]+=A*g[5],g[6]+=A*g[8],g[1]+=I*g[2],g[4]+=I*g[5],g[7]+=I*g[8],this}equals(A){const I=this.elements,g=A.elements;for(let B=0;B<9;B++)if(I[B]!==g[B])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}yI.prototype.isMatrix3=!0;function Ea(C){for(let A=C.length-1;A>=0;--A)if(C[A]>65535)return!0;return!1}function VB(C){return document.createElementNS("http://www.w3.org/1999/xhtml",C)}const oa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$I={h:0,s:0,l:0},Ai={h:0,s:0,l:0};function PE(C,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?C+(A-C)*6*I:I<1/2?A:I<2/3?C+(A-C)*6*(2/3-I):C}function mC(C){return C<.04045?C*.0773993808:Math.pow(C*.9478672986+.0521327014,2.4)}function _E(C){return C<.0031308?C*12.92:1.055*Math.pow(C,.41666)-.055}class lA{constructor(A,I,g){return I===void 0&&g===void 0?this.set(A):this.setRGB(A,I,g)}set(A){return A&&A.isColor?this.copy(A):typeof A=="number"?this.setHex(A):typeof A=="string"&&this.setStyle(A),this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,this}setRGB(A,I,g){return this.r=A,this.g=I,this.b=g,this}setHSL(A,I,g){if(A=Br(A,1),I=xI(I,0,1),g=xI(g,0,1),I===0)this.r=this.g=this.b=g;else{const B=g<=.5?g*(1+I):g+I-g*I,Q=2*g-B;this.r=PE(Q,B,A+1/3),this.g=PE(Q,B,A),this.b=PE(Q,B,A-1/3)}return this}setStyle(A){function I(B){B!==void 0&&parseFloat(B)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let g;if(g=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(A)){let B;const Q=g[1],i=g[2];switch(Q){case"rgb":case"rgba":if(B=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return this.r=Math.min(255,parseInt(B[1],10))/255,this.g=Math.min(255,parseInt(B[2],10))/255,this.b=Math.min(255,parseInt(B[3],10))/255,I(B[4]),this;if(B=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return this.r=Math.min(100,parseInt(B[1],10))/100,this.g=Math.min(100,parseInt(B[2],10))/100,this.b=Math.min(100,parseInt(B[3],10))/100,I(B[4]),this;break;case"hsl":case"hsla":if(B=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i)){const E=parseFloat(B[1])/360,o=parseInt(B[2],10)/100,t=parseInt(B[3],10)/100;return I(B[4]),this.setHSL(E,o,t)}break}}else if(g=/^\#([A-Fa-f\d]+)$/.exec(A)){const B=g[1],Q=B.length;if(Q===3)return this.r=parseInt(B.charAt(0)+B.charAt(0),16)/255,this.g=parseInt(B.charAt(1)+B.charAt(1),16)/255,this.b=parseInt(B.charAt(2)+B.charAt(2),16)/255,this;if(Q===6)return this.r=parseInt(B.charAt(0)+B.charAt(1),16)/255,this.g=parseInt(B.charAt(2)+B.charAt(3),16)/255,this.b=parseInt(B.charAt(4)+B.charAt(5),16)/255,this}return A&&A.length>0?this.setColorName(A):this}setColorName(A){const I=oa[A.toLowerCase()];return I!==void 0?this.setHex(I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=mC(A.r),this.g=mC(A.g),this.b=mC(A.b),this}copyLinearToSRGB(A){return this.r=_E(A.r),this.g=_E(A.g),this.b=_E(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(A){const I=this.r,g=this.g,B=this.b,Q=Math.max(I,g,B),i=Math.min(I,g,B);let E,o;const t=(i+Q)/2;if(i===Q)E=0,o=0;else{const e=Q-i;switch(o=t<=.5?e/(Q+i):e/(2-Q-i),Q){case I:E=(g-B)/e+(g<B?6:0);break;case g:E=(B-I)/e+2;break;case B:E=(I-g)/e+4;break}E/=6}return A.h=E,A.s=o,A.l=t,A}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(A,I,g){return this.getHSL($I),$I.h+=A,$I.s+=I,$I.l+=g,this.setHSL($I.h,$I.s,$I.l),this}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL($I),A.getHSL(Ai);const g=VE($I.h,Ai.h,I),B=VE($I.s,Ai.s,I),Q=VE($I.l,Ai.l,I);return this.setHSL(g,B,Q),this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),A.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}lA.NAMES=oa,lA.prototype.isColor=!0,lA.prototype.r=1,lA.prototype.g=1,lA.prototype.b=1;let TC;class hC{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement=="undefined")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{TC===void 0&&(TC=VB("canvas")),TC.width=A.width,TC.height=A.height;const g=TC.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=TC}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap){const I=VB("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const B=g.getImageData(0,0,A.width,A.height),Q=B.data;for(let i=0;i<Q.length;i++)Q[i]=mC(Q[i]/255)*255;return g.putImageData(B,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(mC(I[g]/255)*255):I[g]=mC(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}class ta{constructor(A=null){this.uuid=hg(),this.data=A,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},B=this.data;if(B!==null){let Q;if(Array.isArray(B)){Q=[];for(let i=0,E=B.length;i<E;i++)B[i].isDataTexture?Q.push(XE(B[i].image)):Q.push(XE(B[i]))}else Q=XE(B);g.url=Q}return I||(A.images[this.uuid]=g),g}}function XE(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap?hC.getDataURL(C):C.data?{data:Array.prototype.slice.call(C.data),width:C.width,height:C.height,type:C.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}ta.prototype.isSource=!0;let Qr=0;class GI extends DC{constructor(A=GI.DEFAULT_IMAGE,I=GI.DEFAULT_MAPPING,g=TI,B=TI,Q=EI,i=vB,E=fI,o=sC,t=1,e=Dg){super();Object.defineProperty(this,"id",{value:Qr++}),this.uuid=hg(),this.name="",this.source=new ta(A),this.mipmaps=[],this.mapping=I,this.wrapS=g,this.wrapT=B,this.magFilter=Q,this.minFilter=i,this.anisotropy=t,this.format=E,this.internalFormat=null,this.type=o,this.offset=new IA(0,0),this.repeat=new IA(1,1),this.center=new IA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yI,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=e,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.encoding=A.encoding,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==fe)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case uE:A.x=A.x-Math.floor(A.x);break;case TI:A.x=A.x<0?0:1;break;case YE:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case uE:A.y=A.y-Math.floor(A.y);break;case TI:A.y=A.y<0?0:1;break;case YE:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}}GI.DEFAULT_IMAGE=null,GI.DEFAULT_MAPPING=fe,GI.prototype.isTexture=!0;class XA{constructor(A=0,I=0,g=0,B=1){this.x=A,this.y=I,this.z=g,this.w=B}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,B){return this.x=A,this.y=I,this.z=g,this.w=B,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A,I){return I!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(A,I)):(this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this)}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A,I){return I!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(A,I)):(this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this)}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,B=this.z,Q=this.w,i=A.elements;return this.x=i[0]*I+i[4]*g+i[8]*B+i[12]*Q,this.y=i[1]*I+i[5]*g+i[9]*B+i[13]*Q,this.z=i[2]*I+i[6]*g+i[10]*B+i[14]*Q,this.w=i[3]*I+i[7]*g+i[11]*B+i[15]*Q,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,B,Q;const o=A.elements,t=o[0],e=o[4],a=o[8],s=o[1],n=o[5],r=o[9],S=o[2],w=o[6],h=o[10];if(Math.abs(e-s)<.01&&Math.abs(a-S)<.01&&Math.abs(r-w)<.01){if(Math.abs(e+s)<.1&&Math.abs(a+S)<.1&&Math.abs(r+w)<.1&&Math.abs(t+n+h-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const y=(t+1)/2,k=(n+1)/2,l=(h+1)/2,K=(e+s)/4,N=(a+S)/4,x=(r+w)/4;return y>k&&y>l?y<.01?(g=0,B=.707106781,Q=.707106781):(g=Math.sqrt(y),B=K/g,Q=N/g):k>l?k<.01?(g=.707106781,B=0,Q=.707106781):(B=Math.sqrt(k),g=K/B,Q=x/B):l<.01?(g=.707106781,B=.707106781,Q=0):(Q=Math.sqrt(l),g=N/Q,B=x/Q),this.set(g,B,Q,I),this}let D=Math.sqrt((w-r)*(w-r)+(a-S)*(a-S)+(s-e)*(s-e));return Math.abs(D)<.001&&(D=1),this.x=(w-r)/D,this.y=(a-S)/D,this.z=(s-e)/D,this.w=Math.acos((t+n+h-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this.w=Math.max(A.w,Math.min(I.w,this.w)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this.w=Math.max(A,Math.min(I,this.w)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I,g){return g!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}XA.prototype.isVector4=!0;class OI extends DC{constructor(A,I,g={}){super();this.width=A,this.height=I,this.depth=1,this.scissor=new XA(0,0,A,I),this.scissorTest=!1,this.viewport=new XA(0,0,A,I);const B={width:A,height:I,depth:1};this.texture=new GI(B,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=g.generateMipmaps!==void 0?g.generateMipmaps:!1,this.texture.internalFormat=g.internalFormat!==void 0?g.internalFormat:null,this.texture.minFilter=g.minFilter!==void 0?g.minFilter:EI,this.depthBuffer=g.depthBuffer!==void 0?g.depthBuffer:!0,this.stencilBuffer=g.stencilBuffer!==void 0?g.stencilBuffer:!1,this.depthTexture=g.depthTexture!==void 0?g.depthTexture:null,this.samples=g.samples!==void 0?g.samples:0}setSize(A,I,g=1){(this.width!==A||this.height!==I||this.depth!==g)&&(this.width=A,this.height=I,this.depth=g,this.texture.image.width=A,this.texture.image.height=I,this.texture.image.depth=g,this.dispose()),this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.width=A.width,this.height=A.height,this.depth=A.depth,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.image=Object.assign({},A.texture.image),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}OI.prototype.isWebGLRenderTarget=!0;class Ii extends GI{constructor(A=null,I=1,g=1,B=1){super(null);this.image={data:A,width:I,height:g,depth:B},this.magFilter=lI,this.minFilter=lI,this.wrapR=TI,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Ii.prototype.isDataArrayTexture=!0;class ir extends OI{constructor(A,I,g){super(A,I);this.depth=g,this.texture=new Ii(null,A,I,g),this.texture.isRenderTargetTexture=!0}}ir.prototype.isWebGLArrayRenderTarget=!0;class zE extends GI{constructor(A=null,I=1,g=1,B=1){super(null);this.image={data:A,width:I,height:g,depth:B},this.magFilter=lI,this.minFilter=lI,this.wrapR=TI,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}zE.prototype.isData3DTexture=!0;class Er extends OI{constructor(A,I,g){super(A,I);this.depth=g,this.texture=new zE(null,A,I,g),this.texture.isRenderTargetTexture=!0}}Er.prototype.isWebGL3DRenderTarget=!0;class or extends OI{constructor(A,I,g,B={}){super(A,I,B);const Q=this.texture;this.texture=[];for(let i=0;i<g;i++)this.texture[i]=Q.clone(),this.texture[i].isRenderTargetTexture=!0}setSize(A,I,g=1){if(this.width!==A||this.height!==I||this.depth!==g){this.width=A,this.height=I,this.depth=g;for(let B=0,Q=this.texture.length;B<Q;B++)this.texture[B].image.width=A,this.texture[B].image.height=I,this.texture[B].image.depth=g;this.dispose()}return this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I),this}copy(A){this.dispose(),this.width=A.width,this.height=A.height,this.depth=A.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,this.depthTexture=A.depthTexture,this.texture.length=0;for(let I=0,g=A.texture.length;I<g;I++)this.texture[I]=A.texture[I].clone();return this}}or.prototype.isWebGLMultipleRenderTargets=!0;class FI{constructor(A=0,I=0,g=0,B=1){this._x=A,this._y=I,this._z=g,this._w=B}static slerp(A,I,g,B){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),g.slerpQuaternions(A,I,B)}static slerpFlat(A,I,g,B,Q,i,E){let o=g[B+0],t=g[B+1],e=g[B+2],a=g[B+3];const s=Q[i+0],n=Q[i+1],r=Q[i+2],S=Q[i+3];if(E===0){A[I+0]=o,A[I+1]=t,A[I+2]=e,A[I+3]=a;return}if(E===1){A[I+0]=s,A[I+1]=n,A[I+2]=r,A[I+3]=S;return}if(a!==S||o!==s||t!==n||e!==r){let w=1-E;const h=o*s+t*n+e*r+a*S,D=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const l=Math.sqrt(y),K=Math.atan2(l,h*D);w=Math.sin(w*K)/l,E=Math.sin(E*K)/l}const k=E*D;if(o=o*w+s*k,t=t*w+n*k,e=e*w+r*k,a=a*w+S*k,w===1-E){const l=1/Math.sqrt(o*o+t*t+e*e+a*a);o*=l,t*=l,e*=l,a*=l}}A[I]=o,A[I+1]=t,A[I+2]=e,A[I+3]=a}static multiplyQuaternionsFlat(A,I,g,B,Q,i){const E=g[B],o=g[B+1],t=g[B+2],e=g[B+3],a=Q[i],s=Q[i+1],n=Q[i+2],r=Q[i+3];return A[I]=E*r+e*a+o*n-t*s,A[I+1]=o*r+e*s+t*a-E*n,A[I+2]=t*r+e*n+E*s-o*a,A[I+3]=e*r-E*a-o*s-t*n,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,B){return this._x=A,this._y=I,this._z=g,this._w=B,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I){if(!(A&&A.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const g=A._x,B=A._y,Q=A._z,i=A._order,E=Math.cos,o=Math.sin,t=E(g/2),e=E(B/2),a=E(Q/2),s=o(g/2),n=o(B/2),r=o(Q/2);switch(i){case"XYZ":this._x=s*e*a+t*n*r,this._y=t*n*a-s*e*r,this._z=t*e*r+s*n*a,this._w=t*e*a-s*n*r;break;case"YXZ":this._x=s*e*a+t*n*r,this._y=t*n*a-s*e*r,this._z=t*e*r-s*n*a,this._w=t*e*a+s*n*r;break;case"ZXY":this._x=s*e*a-t*n*r,this._y=t*n*a+s*e*r,this._z=t*e*r+s*n*a,this._w=t*e*a-s*n*r;break;case"ZYX":this._x=s*e*a-t*n*r,this._y=t*n*a+s*e*r,this._z=t*e*r-s*n*a,this._w=t*e*a+s*n*r;break;case"YZX":this._x=s*e*a+t*n*r,this._y=t*n*a+s*e*r,this._z=t*e*r-s*n*a,this._w=t*e*a-s*n*r;break;case"XZY":this._x=s*e*a-t*n*r,this._y=t*n*a-s*e*r,this._z=t*e*r+s*n*a,this._w=t*e*a+s*n*r;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+i)}return I!==!1&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,B=Math.sin(g);return this._x=A.x*B,this._y=A.y*B,this._z=A.z*B,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],B=I[4],Q=I[8],i=I[1],E=I[5],o=I[9],t=I[2],e=I[6],a=I[10],s=g+E+a;if(s>0){const n=.5/Math.sqrt(s+1);this._w=.25/n,this._x=(e-o)*n,this._y=(Q-t)*n,this._z=(i-B)*n}else if(g>E&&g>a){const n=2*Math.sqrt(1+g-E-a);this._w=(e-o)/n,this._x=.25*n,this._y=(B+i)/n,this._z=(Q+t)/n}else if(E>a){const n=2*Math.sqrt(1+E-g-a);this._w=(Q-t)/n,this._x=(B+i)/n,this._y=.25*n,this._z=(o+e)/n}else{const n=2*Math.sqrt(1+a-g-E);this._w=(i-B)/n,this._x=(Q+t)/n,this._y=(o+e)/n,this._z=.25*n}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(xI(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const B=Math.min(1,I/g);return this.slerp(A,B),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A,I){return I!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(A,I)):this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,B=A._y,Q=A._z,i=A._w,E=I._x,o=I._y,t=I._z,e=I._w;return this._x=g*e+i*E+B*t-Q*o,this._y=B*e+i*o+Q*E-g*t,this._z=Q*e+i*t+g*o-B*E,this._w=i*e-g*E-B*o-Q*t,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,B=this._y,Q=this._z,i=this._w;let E=i*A._w+g*A._x+B*A._y+Q*A._z;if(E<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,E=-E):this.copy(A),E>=1)return this._w=i,this._x=g,this._y=B,this._z=Q,this;const o=1-E*E;if(o<=Number.EPSILON){const n=1-I;return this._w=n*i+I*this._w,this._x=n*g+I*this._x,this._y=n*B+I*this._y,this._z=n*Q+I*this._z,this.normalize(),this._onChangeCallback(),this}const t=Math.sqrt(o),e=Math.atan2(t,E),a=Math.sin((1-I)*e)/t,s=Math.sin(I*e)/t;return this._w=i*a+this._w*s,this._x=g*a+this._x*s,this._y=B*a+this._y*s,this._z=Q*a+this._z*s,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=Math.random(),I=Math.sqrt(1-A),g=Math.sqrt(A),B=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random();return this.set(I*Math.cos(B),g*Math.sin(Q),g*Math.cos(Q),I*Math.sin(B))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}}FI.prototype.isQuaternion=!0;class F{constructor(A=0,I=0,g=0){this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A,I){return I!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(A,I)):(this.x+=A.x,this.y+=A.y,this.z+=A.z,this)}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A,I){return I!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(A,I)):(this.x-=A.x,this.y-=A.y,this.z-=A.z,this)}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A,I){return I!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(A,I)):(this.x*=A.x,this.y*=A.y,this.z*=A.z,this)}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return A&&A.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(ea.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(ea.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,B=this.z,Q=A.elements;return this.x=Q[0]*I+Q[3]*g+Q[6]*B,this.y=Q[1]*I+Q[4]*g+Q[7]*B,this.z=Q[2]*I+Q[5]*g+Q[8]*B,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,B=this.z,Q=A.elements,i=1/(Q[3]*I+Q[7]*g+Q[11]*B+Q[15]);return this.x=(Q[0]*I+Q[4]*g+Q[8]*B+Q[12])*i,this.y=(Q[1]*I+Q[5]*g+Q[9]*B+Q[13])*i,this.z=(Q[2]*I+Q[6]*g+Q[10]*B+Q[14])*i,this}applyQuaternion(A){const I=this.x,g=this.y,B=this.z,Q=A.x,i=A.y,E=A.z,o=A.w,t=o*I+i*B-E*g,e=o*g+E*I-Q*B,a=o*B+Q*g-i*I,s=-Q*I-i*g-E*B;return this.x=t*o+s*-Q+e*-E-a*-i,this.y=e*o+s*-i+a*-Q-t*-E,this.z=a*o+s*-E+t*-i-e*-Q,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,B=this.z,Q=A.elements;return this.x=Q[0]*I+Q[4]*g+Q[8]*B,this.y=Q[1]*I+Q[5]*g+Q[9]*B,this.z=Q[2]*I+Q[6]*g+Q[10]*B,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A,I){return I!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(A,I)):this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,B=A.y,Q=A.z,i=I.x,E=I.y,o=I.z;return this.x=B*o-Q*E,this.y=Q*i-g*o,this.z=g*E-B*i,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return $E.copy(this).projectOnVector(A),this.sub($E)}reflect(A){return this.sub($E.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(xI(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,B=this.z-A.z;return I*I+g*g+B*B}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const B=Math.sin(I)*A;return this.x=B*Math.sin(g),this.y=Math.cos(I)*A,this.z=B*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),B=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=B,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I,g){return g!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,I=Math.random()*Math.PI*2,g=Math.sqrt(1-A**2);return this.x=g*Math.cos(I),this.y=g*Math.sin(I),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}F.prototype.isVector3=!0;const $E=new F,ea=new FI;class Ag{constructor(A=new F(1/0,1/0,1/0),I=new F(-1/0,-1/0,-1/0)){this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){let I=1/0,g=1/0,B=1/0,Q=-1/0,i=-1/0,E=-1/0;for(let o=0,t=A.length;o<t;o+=3){const e=A[o],a=A[o+1],s=A[o+2];e<I&&(I=e),a<g&&(g=a),s<B&&(B=s),e>Q&&(Q=e),a>i&&(i=a),s>E&&(E=s)}return this.min.set(I,g,B),this.max.set(Q,i,E),this}setFromBufferAttribute(A){let I=1/0,g=1/0,B=1/0,Q=-1/0,i=-1/0,E=-1/0;for(let o=0,t=A.count;o<t;o++){const e=A.getX(o),a=A.getY(o),s=A.getZ(o);e<I&&(I=e),a<g&&(g=a),s<B&&(B=s),e>Q&&(Q=e),a>i&&(i=a),s>E&&(E=s)}return this.min.set(I,g,B),this.max.set(Q,i,E),this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=rC.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){A.updateWorldMatrix(!1,!1);const g=A.geometry;if(g!==void 0)if(I&&g.attributes!=null&&g.attributes.position!==void 0){const Q=g.attributes.position;for(let i=0,E=Q.count;i<E;i++)rC.fromBufferAttribute(Q,i).applyMatrix4(A.matrixWorld),this.expandByPoint(rC)}else g.boundingBox===null&&g.computeBoundingBox(),Ao.copy(g.boundingBox),Ao.applyMatrix4(A.matrixWorld),this.union(Ao);const B=A.children;for(let Q=0,i=B.length;Q<i;Q++)this.expandByObject(B[Q],I);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,rC),rC.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(jB),gi.subVectors(this.max,jB),xC.subVectors(A.a,jB),OC.subVectors(A.b,jB),bC.subVectors(A.c,jB),vg.subVectors(OC,xC),Zg.subVectors(bC,OC),SC.subVectors(xC,bC);let I=[0,-vg.z,vg.y,0,-Zg.z,Zg.y,0,-SC.z,SC.y,vg.z,0,-vg.x,Zg.z,0,-Zg.x,SC.z,0,-SC.x,-vg.y,vg.x,0,-Zg.y,Zg.x,0,-SC.y,SC.x,0];return!Io(I,xC,OC,bC,gi)||(I=[1,0,0,0,1,0,0,0,1],!Io(I,xC,OC,bC,gi))?!1:(Ci.crossVectors(vg,Zg),I=[Ci.x,Ci.y,Ci.z],Io(I,xC,OC,bC,gi))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return rC.copy(A).clamp(this.min,this.max).sub(A).length()}getBoundingSphere(A){return this.getCenter(A.center),A.radius=this.getSize(rC).length()*.5,A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(Rg[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),Rg[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),Rg[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),Rg[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),Rg[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),Rg[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),Rg[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),Rg[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(Rg),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}Ag.prototype.isBox3=!0;const Rg=[new F,new F,new F,new F,new F,new F,new F,new F],rC=new F,Ao=new Ag,xC=new F,OC=new F,bC=new F,vg=new F,Zg=new F,SC=new F,jB=new F,gi=new F,Ci=new F,cC=new F;function Io(C,A,I,g,B){for(let Q=0,i=C.length-3;Q<=i;Q+=3){cC.fromArray(C,Q);const E=B.x*Math.abs(cC.x)+B.y*Math.abs(cC.y)+B.z*Math.abs(cC.z),o=A.dot(cC),t=I.dot(cC),e=g.dot(cC);if(Math.max(-Math.max(o,t,e),Math.min(o,t,e))>E)return!1}return!0}const tr=new Ag,aa=new F,Bi=new F,go=new F;class vC{constructor(A=new F,I=-1){this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):tr.setFromPoints(A).getCenter(g);let B=0;for(let Q=0,i=A.length;Q<i;Q++)B=Math.max(B,g.distanceToSquared(A[Q]));return this.radius=Math.sqrt(B),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){go.subVectors(A,this.center);const I=go.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),B=(g-this.radius)*.5;this.center.add(go.multiplyScalar(B/g)),this.radius+=B}return this}union(A){return this.center.equals(A.center)===!0?Bi.set(0,0,1).multiplyScalar(A.radius):Bi.subVectors(A.center,this.center).normalize().multiplyScalar(A.radius),this.expandByPoint(aa.copy(A.center).add(Bi)),this.expandByPoint(aa.copy(A.center).sub(Bi)),this}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pg=new F,Co=new F,Qi=new F,Wg=new F,Bo=new F,ii=new F,Qo=new F;class ZC{constructor(A=new F,I=new F(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.direction).multiplyScalar(A).add(this.origin)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,pg)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.direction).multiplyScalar(g).add(this.origin)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=pg.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(pg.copy(this.direction).multiplyScalar(I).add(this.origin),pg.distanceToSquared(A))}distanceSqToSegment(A,I,g,B){Co.copy(A).add(I).multiplyScalar(.5),Qi.copy(I).sub(A).normalize(),Wg.copy(this.origin).sub(Co);const Q=A.distanceTo(I)*.5,i=-this.direction.dot(Qi),E=Wg.dot(this.direction),o=-Wg.dot(Qi),t=Wg.lengthSq(),e=Math.abs(1-i*i);let a,s,n,r;if(e>0)if(a=i*o-E,s=i*E-o,r=Q*e,a>=0)if(s>=-r)if(s<=r){const S=1/e;a*=S,s*=S,n=a*(a+i*s+2*E)+s*(i*a+s+2*o)+t}else s=Q,a=Math.max(0,-(i*s+E)),n=-a*a+s*(s+2*o)+t;else s=-Q,a=Math.max(0,-(i*s+E)),n=-a*a+s*(s+2*o)+t;else s<=-r?(a=Math.max(0,-(-i*Q+E)),s=a>0?-Q:Math.min(Math.max(-Q,-o),Q),n=-a*a+s*(s+2*o)+t):s<=r?(a=0,s=Math.min(Math.max(-Q,-o),Q),n=s*(s+2*o)+t):(a=Math.max(0,-(i*Q+E)),s=a>0?Q:Math.min(Math.max(-Q,-o),Q),n=-a*a+s*(s+2*o)+t);else s=i>0?-Q:Q,a=Math.max(0,-(i*s+E)),n=-a*a+s*(s+2*o)+t;return g&&g.copy(this.direction).multiplyScalar(a).add(this.origin),B&&B.copy(Qi).multiplyScalar(s).add(Co),n}intersectSphere(A,I){pg.subVectors(A.center,this.origin);const g=pg.dot(this.direction),B=pg.dot(pg)-g*g,Q=A.radius*A.radius;if(B>Q)return null;const i=Math.sqrt(Q-B),E=g-i,o=g+i;return E<0&&o<0?null:E<0?this.at(o,I):this.at(E,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,B,Q,i,E,o;const t=1/this.direction.x,e=1/this.direction.y,a=1/this.direction.z,s=this.origin;return t>=0?(g=(A.min.x-s.x)*t,B=(A.max.x-s.x)*t):(g=(A.max.x-s.x)*t,B=(A.min.x-s.x)*t),e>=0?(Q=(A.min.y-s.y)*e,i=(A.max.y-s.y)*e):(Q=(A.max.y-s.y)*e,i=(A.min.y-s.y)*e),g>i||Q>B||((Q>g||g!==g)&&(g=Q),(i<B||B!==B)&&(B=i),a>=0?(E=(A.min.z-s.z)*a,o=(A.max.z-s.z)*a):(E=(A.max.z-s.z)*a,o=(A.min.z-s.z)*a),g>o||E>B)||((E>g||g!==g)&&(g=E),(o<B||B!==B)&&(B=o),B<0)?null:this.at(g>=0?g:B,I)}intersectsBox(A){return this.intersectBox(A,pg)!==null}intersectTriangle(A,I,g,B,Q){Bo.subVectors(I,A),ii.subVectors(g,A),Qo.crossVectors(Bo,ii);let i=this.direction.dot(Qo),E;if(i>0){if(B)return null;E=1}else if(i<0)E=-1,i=-i;else return null;Wg.subVectors(this.origin,A);const o=E*this.direction.dot(ii.crossVectors(Wg,ii));if(o<0)return null;const t=E*this.direction.dot(Bo.cross(Wg));if(t<0||o+t>i)return null;const e=-E*Wg.dot(Qo);return e<0?null:this.at(e/i,Q)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wA{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(A,I,g,B,Q,i,E,o,t,e,a,s,n,r,S,w){const h=this.elements;return h[0]=A,h[4]=I,h[8]=g,h[12]=B,h[1]=Q,h[5]=i,h[9]=E,h[13]=o,h[2]=t,h[6]=e,h[10]=a,h[14]=s,h[3]=n,h[7]=r,h[11]=S,h[15]=w,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wA().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,B=1/WC.setFromMatrixColumn(A,0).length(),Q=1/WC.setFromMatrixColumn(A,1).length(),i=1/WC.setFromMatrixColumn(A,2).length();return I[0]=g[0]*B,I[1]=g[1]*B,I[2]=g[2]*B,I[3]=0,I[4]=g[4]*Q,I[5]=g[5]*Q,I[6]=g[6]*Q,I[7]=0,I[8]=g[8]*i,I[9]=g[9]*i,I[10]=g[10]*i,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){A&&A.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const I=this.elements,g=A.x,B=A.y,Q=A.z,i=Math.cos(g),E=Math.sin(g),o=Math.cos(B),t=Math.sin(B),e=Math.cos(Q),a=Math.sin(Q);if(A.order==="XYZ"){const s=i*e,n=i*a,r=E*e,S=E*a;I[0]=o*e,I[4]=-o*a,I[8]=t,I[1]=n+r*t,I[5]=s-S*t,I[9]=-E*o,I[2]=S-s*t,I[6]=r+n*t,I[10]=i*o}else if(A.order==="YXZ"){const s=o*e,n=o*a,r=t*e,S=t*a;I[0]=s+S*E,I[4]=r*E-n,I[8]=i*t,I[1]=i*a,I[5]=i*e,I[9]=-E,I[2]=n*E-r,I[6]=S+s*E,I[10]=i*o}else if(A.order==="ZXY"){const s=o*e,n=o*a,r=t*e,S=t*a;I[0]=s-S*E,I[4]=-i*a,I[8]=r+n*E,I[1]=n+r*E,I[5]=i*e,I[9]=S-s*E,I[2]=-i*t,I[6]=E,I[10]=i*o}else if(A.order==="ZYX"){const s=i*e,n=i*a,r=E*e,S=E*a;I[0]=o*e,I[4]=r*t-n,I[8]=s*t+S,I[1]=o*a,I[5]=S*t+s,I[9]=n*t-r,I[2]=-t,I[6]=E*o,I[10]=i*o}else if(A.order==="YZX"){const s=i*o,n=i*t,r=E*o,S=E*t;I[0]=o*e,I[4]=S-s*a,I[8]=r*a+n,I[1]=a,I[5]=i*e,I[9]=-E*e,I[2]=-t*e,I[6]=n*a+r,I[10]=s-S*a}else if(A.order==="XZY"){const s=i*o,n=i*t,r=E*o,S=E*t;I[0]=o*e,I[4]=-a,I[8]=t*e,I[1]=s*a+S,I[5]=i*e,I[9]=n*a-r,I[2]=r*a-n,I[6]=E*e,I[10]=S*a+s}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(er,A,ar)}lookAt(A,I,g){const B=this.elements;return bI.subVectors(A,I),bI.lengthSq()===0&&(bI.z=1),bI.normalize(),Vg.crossVectors(g,bI),Vg.lengthSq()===0&&(Math.abs(g.z)===1?bI.x+=1e-4:bI.z+=1e-4,bI.normalize(),Vg.crossVectors(g,bI)),Vg.normalize(),Ei.crossVectors(bI,Vg),B[0]=Vg.x,B[4]=Ei.x,B[8]=bI.x,B[1]=Vg.y,B[5]=Ei.y,B[9]=bI.y,B[2]=Vg.z,B[6]=Ei.z,B[10]=bI.z,this}multiply(A,I){return I!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(A,I)):this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,B=I.elements,Q=this.elements,i=g[0],E=g[4],o=g[8],t=g[12],e=g[1],a=g[5],s=g[9],n=g[13],r=g[2],S=g[6],w=g[10],h=g[14],D=g[3],y=g[7],k=g[11],l=g[15],K=B[0],N=B[4],x=B[8],W=B[12],u=B[1],G=B[5],R=B[9],f=B[13],Y=B[2],H=B[6],m=B[10],T=B[14],q=B[3],V=B[7],gA=B[11],AA=B[15];return Q[0]=i*K+E*u+o*Y+t*q,Q[4]=i*N+E*G+o*H+t*V,Q[8]=i*x+E*R+o*m+t*gA,Q[12]=i*W+E*f+o*T+t*AA,Q[1]=e*K+a*u+s*Y+n*q,Q[5]=e*N+a*G+s*H+n*V,Q[9]=e*x+a*R+s*m+n*gA,Q[13]=e*W+a*f+s*T+n*AA,Q[2]=r*K+S*u+w*Y+h*q,Q[6]=r*N+S*G+w*H+h*V,Q[10]=r*x+S*R+w*m+h*gA,Q[14]=r*W+S*f+w*T+h*AA,Q[3]=D*K+y*u+k*Y+l*q,Q[7]=D*N+y*G+k*H+l*V,Q[11]=D*x+y*R+k*m+l*gA,Q[15]=D*W+y*f+k*T+l*AA,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],B=A[8],Q=A[12],i=A[1],E=A[5],o=A[9],t=A[13],e=A[2],a=A[6],s=A[10],n=A[14],r=A[3],S=A[7],w=A[11],h=A[15];return r*(+Q*o*a-B*t*a-Q*E*s+g*t*s+B*E*n-g*o*n)+S*(+I*o*n-I*t*s+Q*i*s-B*i*n+B*t*e-Q*o*e)+w*(+I*t*a-I*E*n-Q*i*a+g*i*n+Q*E*e-g*t*e)+h*(-B*E*e-I*o*a+I*E*s+B*i*a-g*i*s+g*o*e)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const B=this.elements;return A.isVector3?(B[12]=A.x,B[13]=A.y,B[14]=A.z):(B[12]=A,B[13]=I,B[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],B=A[2],Q=A[3],i=A[4],E=A[5],o=A[6],t=A[7],e=A[8],a=A[9],s=A[10],n=A[11],r=A[12],S=A[13],w=A[14],h=A[15],D=a*w*t-S*s*t+S*o*n-E*w*n-a*o*h+E*s*h,y=r*s*t-e*w*t-r*o*n+i*w*n+e*o*h-i*s*h,k=e*S*t-r*a*t+r*E*n-i*S*n-e*E*h+i*a*h,l=r*a*o-e*S*o-r*E*s+i*S*s+e*E*w-i*a*w,K=I*D+g*y+B*k+Q*l;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/K;return A[0]=D*N,A[1]=(S*s*Q-a*w*Q-S*B*n+g*w*n+a*B*h-g*s*h)*N,A[2]=(E*w*Q-S*o*Q+S*B*t-g*w*t-E*B*h+g*o*h)*N,A[3]=(a*o*Q-E*s*Q-a*B*t+g*s*t+E*B*n-g*o*n)*N,A[4]=y*N,A[5]=(e*w*Q-r*s*Q+r*B*n-I*w*n-e*B*h+I*s*h)*N,A[6]=(r*o*Q-i*w*Q-r*B*t+I*w*t+i*B*h-I*o*h)*N,A[7]=(i*s*Q-e*o*Q+e*B*t-I*s*t-i*B*n+I*o*n)*N,A[8]=k*N,A[9]=(r*a*Q-e*S*Q-r*g*n+I*S*n+e*g*h-I*a*h)*N,A[10]=(i*S*Q-r*E*Q+r*g*t-I*S*t-i*g*h+I*E*h)*N,A[11]=(e*E*Q-i*a*Q-e*g*t+I*a*t+i*g*n-I*E*n)*N,A[12]=l*N,A[13]=(e*S*B-r*a*B+r*g*s-I*S*s-e*g*w+I*a*w)*N,A[14]=(r*E*B-i*S*B-r*g*o+I*S*o+i*g*w-I*E*w)*N,A[15]=(i*a*B-e*E*B+e*g*o-I*a*o-i*g*s+I*E*s)*N,this}scale(A){const I=this.elements,g=A.x,B=A.y,Q=A.z;return I[0]*=g,I[4]*=B,I[8]*=Q,I[1]*=g,I[5]*=B,I[9]*=Q,I[2]*=g,I[6]*=B,I[10]*=Q,I[3]*=g,I[7]*=B,I[11]*=Q,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],B=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,B))}makeTranslation(A,I,g){return this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),B=Math.sin(I),Q=1-g,i=A.x,E=A.y,o=A.z,t=Q*i,e=Q*E;return this.set(t*i+g,t*E-B*o,t*o+B*E,0,t*E+B*o,e*E+g,e*o-B*i,0,t*o-B*E,e*o+B*i,Q*o*o+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,B,Q,i){return this.set(1,g,Q,0,A,1,i,0,I,B,1,0,0,0,0,1),this}compose(A,I,g){const B=this.elements,Q=I._x,i=I._y,E=I._z,o=I._w,t=Q+Q,e=i+i,a=E+E,s=Q*t,n=Q*e,r=Q*a,S=i*e,w=i*a,h=E*a,D=o*t,y=o*e,k=o*a,l=g.x,K=g.y,N=g.z;return B[0]=(1-(S+h))*l,B[1]=(n+k)*l,B[2]=(r-y)*l,B[3]=0,B[4]=(n-k)*K,B[5]=(1-(s+h))*K,B[6]=(w+D)*K,B[7]=0,B[8]=(r+y)*N,B[9]=(w-D)*N,B[10]=(1-(s+S))*N,B[11]=0,B[12]=A.x,B[13]=A.y,B[14]=A.z,B[15]=1,this}decompose(A,I,g){const B=this.elements;let Q=WC.set(B[0],B[1],B[2]).length();const i=WC.set(B[4],B[5],B[6]).length(),E=WC.set(B[8],B[9],B[10]).length();this.determinant()<0&&(Q=-Q),A.x=B[12],A.y=B[13],A.z=B[14],Ig.copy(this);const t=1/Q,e=1/i,a=1/E;return Ig.elements[0]*=t,Ig.elements[1]*=t,Ig.elements[2]*=t,Ig.elements[4]*=e,Ig.elements[5]*=e,Ig.elements[6]*=e,Ig.elements[8]*=a,Ig.elements[9]*=a,Ig.elements[10]*=a,I.setFromRotationMatrix(Ig),g.x=Q,g.y=i,g.z=E,this}makePerspective(A,I,g,B,Q,i){i===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const E=this.elements,o=2*Q/(I-A),t=2*Q/(g-B),e=(I+A)/(I-A),a=(g+B)/(g-B),s=-(i+Q)/(i-Q),n=-2*i*Q/(i-Q);return E[0]=o,E[4]=0,E[8]=e,E[12]=0,E[1]=0,E[5]=t,E[9]=a,E[13]=0,E[2]=0,E[6]=0,E[10]=s,E[14]=n,E[3]=0,E[7]=0,E[11]=-1,E[15]=0,this}makeOrthographic(A,I,g,B,Q,i){const E=this.elements,o=1/(I-A),t=1/(g-B),e=1/(i-Q),a=(I+A)*o,s=(g+B)*t,n=(i+Q)*e;return E[0]=2*o,E[4]=0,E[8]=0,E[12]=-a,E[1]=0,E[5]=2*t,E[9]=0,E[13]=-s,E[2]=0,E[6]=0,E[10]=-2*e,E[14]=-n,E[3]=0,E[7]=0,E[11]=0,E[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let B=0;B<16;B++)if(I[B]!==g[B])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}wA.prototype.isMatrix4=!0;const WC=new F,Ig=new wA,er=new F(0,0,0),ar=new F(1,1,1),Vg=new F,Ei=new F,bI=new F,sa=new wA,na=new FI;class lC{constructor(A=0,I=0,g=0,B=lC.DefaultOrder){this._x=A,this._y=I,this._z=g,this._order=B}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,B=this._order){return this._x=A,this._y=I,this._z=g,this._order=B,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const B=A.elements,Q=B[0],i=B[4],E=B[8],o=B[1],t=B[5],e=B[9],a=B[2],s=B[6],n=B[10];switch(I){case"XYZ":this._y=Math.asin(xI(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(-e,n),this._z=Math.atan2(-i,Q)):(this._x=Math.atan2(s,t),this._z=0);break;case"YXZ":this._x=Math.asin(-xI(e,-1,1)),Math.abs(e)<.9999999?(this._y=Math.atan2(E,n),this._z=Math.atan2(o,t)):(this._y=Math.atan2(-a,Q),this._z=0);break;case"ZXY":this._x=Math.asin(xI(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(-a,n),this._z=Math.atan2(-i,t)):(this._y=0,this._z=Math.atan2(o,Q));break;case"ZYX":this._y=Math.asin(-xI(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(s,n),this._z=Math.atan2(o,Q)):(this._x=0,this._z=Math.atan2(-i,t));break;case"YZX":this._z=Math.asin(xI(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-e,t),this._y=Math.atan2(-a,Q)):(this._x=0,this._y=Math.atan2(E,n));break;case"XZY":this._z=Math.asin(-xI(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(s,t),this._y=Math.atan2(E,Q)):(this._x=Math.atan2(-e,n),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return sa.makeRotationFromQuaternion(A),this.setFromRotationMatrix(sa,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return na.setFromEuler(this),this.setFromQuaternion(na,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}}lC.prototype.isEuler=!0,lC.DefaultOrder="XYZ",lC.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Da{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let sr=0;const ha=new F,VC=new FI,Ng=new wA,oi=new F,PB=new F,nr=new F,Dr=new FI,ra=new F(1,0,0),Sa=new F(0,1,0),ca=new F(0,0,1),hr={type:"added"},la={type:"removed"};class VA extends DC{constructor(){super();Object.defineProperty(this,"id",{value:sr++}),this.uuid=hg(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=VA.DefaultUp.clone();const A=new F,I=new lC,g=new FI,B=new F(1,1,1);function Q(){g.setFromEuler(I,!1)}function i(){I.setFromQuaternion(g,void 0,!1)}I._onChange(Q),g._onChange(i),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:B},modelViewMatrix:{value:new wA},normalMatrix:{value:new yI}}),this.matrix=new wA,this.matrixWorld=new wA,this.matrixAutoUpdate=VA.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Da,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return VC.setFromAxisAngle(A,I),this.quaternion.multiply(VC),this}rotateOnWorldAxis(A,I){return VC.setFromAxisAngle(A,I),this.quaternion.premultiply(VC),this}rotateX(A){return this.rotateOnAxis(ra,A)}rotateY(A){return this.rotateOnAxis(Sa,A)}rotateZ(A){return this.rotateOnAxis(ca,A)}translateOnAxis(A,I){return ha.copy(A).applyQuaternion(this.quaternion),this.position.add(ha.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(ra,A)}translateY(A){return this.translateOnAxis(Sa,A)}translateZ(A){return this.translateOnAxis(ca,A)}localToWorld(A){return A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return A.applyMatrix4(Ng.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?oi.copy(A):oi.set(A,I,g);const B=this.parent;this.updateWorldMatrix(!0,!1),PB.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ng.lookAt(PB,oi,this.up):Ng.lookAt(oi,PB,this.up),this.quaternion.setFromRotationMatrix(Ng),B&&(Ng.extractRotation(B.matrixWorld),VC.setFromRotationMatrix(Ng),this.quaternion.premultiply(VC.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(hr)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(la)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){for(let A=0;A<this.children.length;A++){const I=this.children[A];I.parent=null,I.dispatchEvent(la)}return this.children.length=0,this}attach(A){return this.updateWorldMatrix(!0,!1),Ng.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),Ng.multiply(A.parent.matrixWorld)),A.applyMatrix4(Ng),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,B=this.children.length;g<B;g++){const i=this.children[g].getObjectByProperty(A,I);if(i!==void 0)return i}}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(PB,A,nr),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(PB,Dr,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,B=I.length;g<B;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,B=I.length;g<B;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,B=I.length;g<B;g++)I[g].updateMatrixWorld(A)}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),I===!0){const B=this.children;for(let Q=0,i=B.length;Q<i;Q++)B[Q].updateWorldMatrix(!1,!0)}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const B={};B.uuid=this.uuid,B.type=this.type,this.name!==""&&(B.name=this.name),this.castShadow===!0&&(B.castShadow=!0),this.receiveShadow===!0&&(B.receiveShadow=!0),this.visible===!1&&(B.visible=!1),this.frustumCulled===!1&&(B.frustumCulled=!1),this.renderOrder!==0&&(B.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(B.userData=this.userData),B.layers=this.layers.mask,B.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(B.matrixAutoUpdate=!1),this.isInstancedMesh&&(B.type="InstancedMesh",B.count=this.count,B.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(B.instanceColor=this.instanceColor.toJSON()));function Q(E,o){return E[o.uuid]===void 0&&(E[o.uuid]=o.toJSON(A)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?B.background=this.background.toJSON():this.background.isTexture&&(B.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&(B.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){B.geometry=Q(A.geometries,this.geometry);const E=this.geometry.parameters;if(E!==void 0&&E.shapes!==void 0){const o=E.shapes;if(Array.isArray(o))for(let t=0,e=o.length;t<e;t++){const a=o[t];Q(A.shapes,a)}else Q(A.shapes,o)}}if(this.isSkinnedMesh&&(B.bindMode=this.bindMode,B.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(Q(A.skeletons,this.skeleton),B.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const E=[];for(let o=0,t=this.material.length;o<t;o++)E.push(Q(A.materials,this.material[o]));B.material=E}else B.material=Q(A.materials,this.material);if(this.children.length>0){B.children=[];for(let E=0;E<this.children.length;E++)B.children.push(this.children[E].toJSON(A).object)}if(this.animations.length>0){B.animations=[];for(let E=0;E<this.animations.length;E++){const o=this.animations[E];B.animations.push(Q(A.animations,o))}}if(I){const E=i(A.geometries),o=i(A.materials),t=i(A.textures),e=i(A.images),a=i(A.shapes),s=i(A.skeletons),n=i(A.animations),r=i(A.nodes);E.length>0&&(g.geometries=E),o.length>0&&(g.materials=o),t.length>0&&(g.textures=t),e.length>0&&(g.images=e),a.length>0&&(g.shapes=a),s.length>0&&(g.skeletons=s),n.length>0&&(g.animations=n),r.length>0&&(g.nodes=r)}return g.object=B,g;function i(E){const o=[];for(const t in E){const e=E[t];delete e.metadata,o.push(e)}return o}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const B=A.children[g];this.add(B.clone())}return this}}VA.DefaultUp=new F(0,1,0),VA.DefaultMatrixAutoUpdate=!0,VA.prototype.isObject3D=!0;const gg=new F,qg=new F,io=new F,dg=new F,jC=new F,PC=new F,Ga=new F,Eo=new F,oo=new F,to=new F;class aI{constructor(A=new F,I=new F,g=new F){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,B){B.subVectors(g,I),gg.subVectors(A,I),B.cross(gg);const Q=B.lengthSq();return Q>0?B.multiplyScalar(1/Math.sqrt(Q)):B.set(0,0,0)}static getBarycoord(A,I,g,B,Q){gg.subVectors(B,I),qg.subVectors(g,I),io.subVectors(A,I);const i=gg.dot(gg),E=gg.dot(qg),o=gg.dot(io),t=qg.dot(qg),e=qg.dot(io),a=i*t-E*E;if(a===0)return Q.set(-2,-1,-1);const s=1/a,n=(t*o-E*e)*s,r=(i*e-E*o)*s;return Q.set(1-n-r,r,n)}static containsPoint(A,I,g,B){return this.getBarycoord(A,I,g,B,dg),dg.x>=0&&dg.y>=0&&dg.x+dg.y<=1}static getUV(A,I,g,B,Q,i,E,o){return this.getBarycoord(A,I,g,B,dg),o.set(0,0),o.addScaledVector(Q,dg.x),o.addScaledVector(i,dg.y),o.addScaledVector(E,dg.z),o}static isFrontFacing(A,I,g,B){return gg.subVectors(g,I),qg.subVectors(A,I),gg.cross(qg).dot(B)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,B){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[B]),this}setFromAttributeAndIndices(A,I,g,B){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,B),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return gg.subVectors(this.c,this.b),qg.subVectors(this.a,this.b),gg.cross(qg).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return aI.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return aI.getBarycoord(A,this.a,this.b,this.c,I)}getUV(A,I,g,B,Q){return aI.getUV(A,this.a,this.b,this.c,I,g,B,Q)}containsPoint(A){return aI.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return aI.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,B=this.b,Q=this.c;let i,E;jC.subVectors(B,g),PC.subVectors(Q,g),Eo.subVectors(A,g);const o=jC.dot(Eo),t=PC.dot(Eo);if(o<=0&&t<=0)return I.copy(g);oo.subVectors(A,B);const e=jC.dot(oo),a=PC.dot(oo);if(e>=0&&a<=e)return I.copy(B);const s=o*a-e*t;if(s<=0&&o>=0&&e<=0)return i=o/(o-e),I.copy(g).addScaledVector(jC,i);to.subVectors(A,Q);const n=jC.dot(to),r=PC.dot(to);if(r>=0&&n<=r)return I.copy(Q);const S=n*t-o*r;if(S<=0&&t>=0&&r<=0)return E=t/(t-r),I.copy(g).addScaledVector(PC,E);const w=e*r-n*a;if(w<=0&&a-e>=0&&n-r>=0)return Ga.subVectors(Q,B),E=(a-e)/(a-e+(n-r)),I.copy(B).addScaledVector(Ga,E);const h=1/(w+S+s);return i=S*h,E=s*h,I.copy(g).addScaledVector(jC,i).addScaledVector(PC,E)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}let rr=0;class rI extends DC{constructor(){super();Object.defineProperty(this,"id",{value:rr++}),this.uuid=hg(),this.name="",this.type="Material",this.fog=!0,this.blending=pC,this.side=bB,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=qe,this.blendDst=de,this.blendEquation=NC,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=NE,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bE,this.stencilZFail=bE,this.stencilZPass=bE,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn("THREE.Material: '"+I+"' parameter is undefined.");continue}if(I==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=g===Je;continue}const B=this[I];if(B===void 0){console.warn("THREE."+this.type+": '"+I+"' is not a property of this material.");continue}B&&B.isColor?B.set(g):B&&B.isVector3&&g&&g.isVector3?B.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==pC&&(g.blending=this.blending),this.side!==bB&&(g.side=this.side),this.vertexColors&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=this.transparent),g.depthFunc=this.depthFunc,g.depthTest=this.depthTest,g.depthWrite=this.depthWrite,g.colorWrite=this.colorWrite,g.stencilWrite=this.stencilWrite,g.stencilWriteMask=this.stencilWriteMask,g.stencilFunc=this.stencilFunc,g.stencilRef=this.stencilRef,g.stencilFuncMask=this.stencilFuncMask,g.stencilFail=this.stencilFail,g.stencilZFail=this.stencilZFail,g.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(g.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(g.wireframe=this.wireframe),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=this.flatShading),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(g.userData=this.userData);function B(Q){const i=[];for(const E in Q){const o=Q[E];delete o.metadata,i.push(o)}return i}if(I){const Q=B(A.textures),i=B(A.images);Q.length>0&&(g.textures=Q),i.length>0&&(g.images=i)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.fog=A.fog,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const B=I.length;g=new Array(B);for(let Q=0;Q!==B;++Q)g[Q]=I[Q].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}rI.prototype.isMaterial=!0,rI.fromType=function(){return null};class ti extends rI{constructor(A){super();this.type="MeshBasicMaterial",this.color=new lA(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=VQ,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this}}ti.prototype.isMeshBasicMaterial=!0;const II=new F,ei=new IA;class SI{constructor(A,I,g){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g===!0,this.usage=WB,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let B=0,Q=this.itemSize;B<Q;B++)this.array[A+B]=I.array[g+B];return this}copyArray(A){return this.array.set(A),this}copyColorsArray(A){const I=this.array;let g=0;for(let B=0,Q=A.length;B<Q;B++){let i=A[B];i===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",B),i=new lA),I[g++]=i.r,I[g++]=i.g,I[g++]=i.b}return this}copyVector2sArray(A){const I=this.array;let g=0;for(let B=0,Q=A.length;B<Q;B++){let i=A[B];i===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",B),i=new IA),I[g++]=i.x,I[g++]=i.y}return this}copyVector3sArray(A){const I=this.array;let g=0;for(let B=0,Q=A.length;B<Q;B++){let i=A[B];i===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",B),i=new F),I[g++]=i.x,I[g++]=i.y,I[g++]=i.z}return this}copyVector4sArray(A){const I=this.array;let g=0;for(let B=0,Q=A.length;B<Q;B++){let i=A[B];i===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",B),i=new XA),I[g++]=i.x,I[g++]=i.y,I[g++]=i.z,I[g++]=i.w}return this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)ei.fromBufferAttribute(this,I),ei.applyMatrix3(A),this.setXY(I,ei.x,ei.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)II.fromBufferAttribute(this,I),II.applyMatrix3(A),this.setXYZ(I,II.x,II.y,II.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)II.x=this.getX(I),II.y=this.getY(I),II.z=this.getZ(I),II.applyMatrix4(A),this.setXYZ(I,II.x,II.y,II.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)II.x=this.getX(I),II.y=this.getY(I),II.z=this.getZ(I),II.applyNormalMatrix(A),this.setXYZ(I,II.x,II.y,II.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)II.x=this.getX(I),II.y=this.getY(I),II.z=this.getZ(I),II.transformDirection(A),this.setXYZ(I,II.x,II.y,II.z);return this}set(A,I=0){return this.array.set(A,I),this}getX(A){return this.array[A*this.itemSize]}setX(A,I){return this.array[A*this.itemSize]=I,this}getY(A){return this.array[A*this.itemSize+1]}setY(A,I){return this.array[A*this.itemSize+1]=I,this}getZ(A){return this.array[A*this.itemSize+2]}setZ(A,I){return this.array[A*this.itemSize+2]=I,this}getW(A){return this.array[A*this.itemSize+3]}setW(A,I){return this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,B){return A*=this.itemSize,this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=B,this}setXYZW(A,I,g,B,Q){return A*=this.itemSize,this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=B,this.array[A+3]=Q,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==WB&&(A.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(A.updateRange=this.updateRange),A}}SI.prototype.isBufferAttribute=!0;class ka extends SI{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class wa extends SI{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class Sr extends SI{constructor(A,I,g){super(new Uint16Array(A),I,g)}}Sr.prototype.isFloat16BufferAttribute=!0;class kI extends SI{constructor(A,I,g){super(new Float32Array(A),I,g)}}let cr=0;const PI=new wA,eo=new VA,_C=new F,vI=new Ag,_B=new Ag,wI=new F;class CI extends DC{constructor(){super();Object.defineProperty(this,"id",{value:cr++}),this.uuid=hg(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(Ea(A)?wa:ka)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const Q=new yI().getNormalMatrix(A);g.applyNormalMatrix(Q),g.needsUpdate=!0}const B=this.attributes.tangent;return B!==void 0&&(B.transformDirection(A),B.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return PI.makeRotationFromQuaternion(A),this.applyMatrix4(PI),this}rotateX(A){return PI.makeRotationX(A),this.applyMatrix4(PI),this}rotateY(A){return PI.makeRotationY(A),this.applyMatrix4(PI),this}rotateZ(A){return PI.makeRotationZ(A),this.applyMatrix4(PI),this}translate(A,I,g){return PI.makeTranslation(A,I,g),this.applyMatrix4(PI),this}scale(A,I,g){return PI.makeScale(A,I,g),this.applyMatrix4(PI),this}lookAt(A){return eo.lookAt(A),eo.updateMatrix(),this.applyMatrix4(eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_C).negate(),this.translate(_C.x,_C.y,_C.z),this}setFromPoints(A){const I=[];for(let g=0,B=A.length;g<B;g++){const Q=A[g];I.push(Q.x,Q.y,Q.z||0)}return this.setAttribute("position",new kI(I,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ag);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,B=I.length;g<B;g++){const Q=I[g];vI.setFromBufferAttribute(Q),this.morphTargetsRelative?(wI.addVectors(this.boundingBox.min,vI.min),this.boundingBox.expandByPoint(wI),wI.addVectors(this.boundingBox.max,vI.max),this.boundingBox.expandByPoint(wI)):(this.boundingBox.expandByPoint(vI.min),this.boundingBox.expandByPoint(vI.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vC);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(A){const g=this.boundingSphere.center;if(vI.setFromBufferAttribute(A),I)for(let Q=0,i=I.length;Q<i;Q++){const E=I[Q];_B.setFromBufferAttribute(E),this.morphTargetsRelative?(wI.addVectors(vI.min,_B.min),vI.expandByPoint(wI),wI.addVectors(vI.max,_B.max),vI.expandByPoint(wI)):(vI.expandByPoint(_B.min),vI.expandByPoint(_B.max))}vI.getCenter(g);let B=0;for(let Q=0,i=A.count;Q<i;Q++)wI.fromBufferAttribute(A,Q),B=Math.max(B,g.distanceToSquared(wI));if(I)for(let Q=0,i=I.length;Q<i;Q++){const E=I[Q],o=this.morphTargetsRelative;for(let t=0,e=E.count;t<e;t++)wI.fromBufferAttribute(E,t),o&&(_C.fromBufferAttribute(A,t),wI.add(_C)),B=Math.max(B,g.distanceToSquared(wI))}this.boundingSphere.radius=Math.sqrt(B),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=A.array,B=I.position.array,Q=I.normal.array,i=I.uv.array,E=B.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new SI(new Float32Array(4*E),4));const o=this.getAttribute("tangent").array,t=[],e=[];for(let u=0;u<E;u++)t[u]=new F,e[u]=new F;const a=new F,s=new F,n=new F,r=new IA,S=new IA,w=new IA,h=new F,D=new F;function y(u,G,R){a.fromArray(B,u*3),s.fromArray(B,G*3),n.fromArray(B,R*3),r.fromArray(i,u*2),S.fromArray(i,G*2),w.fromArray(i,R*2),s.sub(a),n.sub(a),S.sub(r),w.sub(r);const f=1/(S.x*w.y-w.x*S.y);!isFinite(f)||(h.copy(s).multiplyScalar(w.y).addScaledVector(n,-S.y).multiplyScalar(f),D.copy(n).multiplyScalar(S.x).addScaledVector(s,-w.x).multiplyScalar(f),t[u].add(h),t[G].add(h),t[R].add(h),e[u].add(D),e[G].add(D),e[R].add(D))}let k=this.groups;k.length===0&&(k=[{start:0,count:g.length}]);for(let u=0,G=k.length;u<G;++u){const R=k[u],f=R.start,Y=R.count;for(let H=f,m=f+Y;H<m;H+=3)y(g[H+0],g[H+1],g[H+2])}const l=new F,K=new F,N=new F,x=new F;function W(u){N.fromArray(Q,u*3),x.copy(N);const G=t[u];l.copy(G),l.sub(N.multiplyScalar(N.dot(G))).normalize(),K.crossVectors(x,G);const f=K.dot(e[u])<0?-1:1;o[u*4]=l.x,o[u*4+1]=l.y,o[u*4+2]=l.z,o[u*4+3]=f}for(let u=0,G=k.length;u<G;++u){const R=k[u],f=R.start,Y=R.count;for(let H=f,m=f+Y;H<m;H+=3)W(g[H+0]),W(g[H+1]),W(g[H+2])}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new SI(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let s=0,n=g.count;s<n;s++)g.setXYZ(s,0,0,0);const B=new F,Q=new F,i=new F,E=new F,o=new F,t=new F,e=new F,a=new F;if(A)for(let s=0,n=A.count;s<n;s+=3){const r=A.getX(s+0),S=A.getX(s+1),w=A.getX(s+2);B.fromBufferAttribute(I,r),Q.fromBufferAttribute(I,S),i.fromBufferAttribute(I,w),e.subVectors(i,Q),a.subVectors(B,Q),e.cross(a),E.fromBufferAttribute(g,r),o.fromBufferAttribute(g,S),t.fromBufferAttribute(g,w),E.add(e),o.add(e),t.add(e),g.setXYZ(r,E.x,E.y,E.z),g.setXYZ(S,o.x,o.y,o.z),g.setXYZ(w,t.x,t.y,t.z)}else for(let s=0,n=I.count;s<n;s+=3)B.fromBufferAttribute(I,s+0),Q.fromBufferAttribute(I,s+1),i.fromBufferAttribute(I,s+2),e.subVectors(i,Q),a.subVectors(B,Q),e.cross(a),g.setXYZ(s+0,e.x,e.y,e.z),g.setXYZ(s+1,e.x,e.y,e.z),g.setXYZ(s+2,e.x,e.y,e.z);this.normalizeNormals(),g.needsUpdate=!0}}merge(A,I){if(!(A&&A.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",A);return}I===void 0&&(I=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const g=this.attributes;for(const B in g){if(A.attributes[B]===void 0)continue;const i=g[B].array,E=A.attributes[B],o=E.array,t=E.itemSize*I,e=Math.min(o.length,i.length-t);for(let a=0,s=t;a<e;a++,s++)i[s]=o[a]}return this}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)wI.fromBufferAttribute(A,I),wI.normalize(),A.setXYZ(I,wI.x,wI.y,wI.z)}toNonIndexed(){function A(E,o){const t=E.array,e=E.itemSize,a=E.normalized,s=new t.constructor(o.length*e);let n=0,r=0;for(let S=0,w=o.length;S<w;S++){E.isInterleavedBufferAttribute?n=o[S]*E.data.stride+E.offset:n=o[S]*e;for(let h=0;h<e;h++)s[r++]=t[n++]}return new SI(s,e,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new CI,g=this.index.array,B=this.attributes;for(const E in B){const o=B[E],t=A(o,g);I.setAttribute(E,t)}const Q=this.morphAttributes;for(const E in Q){const o=[],t=Q[E];for(let e=0,a=t.length;e<a;e++){const s=t[e],n=A(s,g);o.push(n)}I.morphAttributes[E]=o}I.morphTargetsRelative=this.morphTargetsRelative;const i=this.groups;for(let E=0,o=i.length;E<o;E++){const t=i[E];I.addGroup(t.start,t.count,t.materialIndex)}return I}toJSON(){const A={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const t in o)o[t]!==void 0&&(A[t]=o[t]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const o in g){const t=g[o];A.data.attributes[o]=t.toJSON(A.data)}const B={};let Q=!1;for(const o in this.morphAttributes){const t=this.morphAttributes[o],e=[];for(let a=0,s=t.length;a<s;a++){const n=t[a];e.push(n.toJSON(A.data))}e.length>0&&(B[o]=e,Q=!0)}Q&&(A.data.morphAttributes=B,A.data.morphTargetsRelative=this.morphTargetsRelative);const i=this.groups;i.length>0&&(A.data.groups=JSON.parse(JSON.stringify(i)));const E=this.boundingSphere;return E!==null&&(A.data.boundingSphere={center:E.center.toArray(),radius:E.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const B=A.attributes;for(const t in B){const e=B[t];this.setAttribute(t,e.clone(I))}const Q=A.morphAttributes;for(const t in Q){const e=[],a=Q[t];for(let s=0,n=a.length;s<n;s++)e.push(a[s].clone(I));this.morphAttributes[t]=e}this.morphTargetsRelative=A.morphTargetsRelative;const i=A.groups;for(let t=0,e=i.length;t<e;t++){const a=i[t];this.addGroup(a.start,a.count,a.materialIndex)}const E=A.boundingBox;E!==null&&(this.boundingBox=E.clone());const o=A.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,A.parameters!==void 0&&(this.parameters=Object.assign({},A.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}CI.prototype.isBufferGeometry=!0;const Ua=new wA,XC=new ZC,ao=new vC,jg=new F,Pg=new F,_g=new F,so=new F,no=new F,Do=new F,ai=new F,si=new F,ni=new F,Di=new IA,hi=new IA,ri=new IA,ho=new F,Si=new F;class uI extends VA{constructor(A=new CI,I=new ti){super();this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A){return super.copy(A),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=A.material,this.geometry=A.geometry,this}updateMorphTargets(){const A=this.geometry;if(A.isBufferGeometry){const I=A.morphAttributes,g=Object.keys(I);if(g.length>0){const B=I[g[0]];if(B!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Q=0,i=B.length;Q<i;Q++){const E=B[Q].name||String(Q);this.morphTargetInfluences.push(0),this.morphTargetDictionary[E]=Q}}}}else{const I=A.morphTargets;I!==void 0&&I.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(A,I){const g=this.geometry,B=this.material,Q=this.matrixWorld;if(B===void 0||(g.boundingSphere===null&&g.computeBoundingSphere(),ao.copy(g.boundingSphere),ao.applyMatrix4(Q),A.ray.intersectsSphere(ao)===!1)||(Ua.copy(Q).invert(),XC.copy(A.ray).applyMatrix4(Ua),g.boundingBox!==null&&XC.intersectsBox(g.boundingBox)===!1))return;let i;if(g.isBufferGeometry){const E=g.index,o=g.attributes.position,t=g.morphAttributes.position,e=g.morphTargetsRelative,a=g.attributes.uv,s=g.attributes.uv2,n=g.groups,r=g.drawRange;if(E!==null)if(Array.isArray(B))for(let S=0,w=n.length;S<w;S++){const h=n[S],D=B[h.materialIndex],y=Math.max(h.start,r.start),k=Math.min(E.count,Math.min(h.start+h.count,r.start+r.count));for(let l=y,K=k;l<K;l+=3){const N=E.getX(l),x=E.getX(l+1),W=E.getX(l+2);i=ci(this,D,A,XC,o,t,e,a,s,N,x,W),i&&(i.faceIndex=Math.floor(l/3),i.face.materialIndex=h.materialIndex,I.push(i))}}else{const S=Math.max(0,r.start),w=Math.min(E.count,r.start+r.count);for(let h=S,D=w;h<D;h+=3){const y=E.getX(h),k=E.getX(h+1),l=E.getX(h+2);i=ci(this,B,A,XC,o,t,e,a,s,y,k,l),i&&(i.faceIndex=Math.floor(h/3),I.push(i))}}else if(o!==void 0)if(Array.isArray(B))for(let S=0,w=n.length;S<w;S++){const h=n[S],D=B[h.materialIndex],y=Math.max(h.start,r.start),k=Math.min(o.count,Math.min(h.start+h.count,r.start+r.count));for(let l=y,K=k;l<K;l+=3){const N=l,x=l+1,W=l+2;i=ci(this,D,A,XC,o,t,e,a,s,N,x,W),i&&(i.faceIndex=Math.floor(l/3),i.face.materialIndex=h.materialIndex,I.push(i))}}else{const S=Math.max(0,r.start),w=Math.min(o.count,r.start+r.count);for(let h=S,D=w;h<D;h+=3){const y=h,k=h+1,l=h+2;i=ci(this,B,A,XC,o,t,e,a,s,y,k,l),i&&(i.faceIndex=Math.floor(h/3),I.push(i))}}}else g.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}uI.prototype.isMesh=!0;function lr(C,A,I,g,B,Q,i,E){let o;if(A.side===hI?o=g.intersectTriangle(i,Q,B,!0,E):o=g.intersectTriangle(B,Q,i,A.side!==RC,E),o===null)return null;Si.copy(E),Si.applyMatrix4(C.matrixWorld);const t=I.ray.origin.distanceTo(Si);return t<I.near||t>I.far?null:{distance:t,point:Si.clone(),object:C}}function ci(C,A,I,g,B,Q,i,E,o,t,e,a){jg.fromBufferAttribute(B,t),Pg.fromBufferAttribute(B,e),_g.fromBufferAttribute(B,a);const s=C.morphTargetInfluences;if(Q&&s){ai.set(0,0,0),si.set(0,0,0),ni.set(0,0,0);for(let r=0,S=Q.length;r<S;r++){const w=s[r],h=Q[r];w!==0&&(so.fromBufferAttribute(h,t),no.fromBufferAttribute(h,e),Do.fromBufferAttribute(h,a),i?(ai.addScaledVector(so,w),si.addScaledVector(no,w),ni.addScaledVector(Do,w)):(ai.addScaledVector(so.sub(jg),w),si.addScaledVector(no.sub(Pg),w),ni.addScaledVector(Do.sub(_g),w)))}jg.add(ai),Pg.add(si),_g.add(ni)}C.isSkinnedMesh&&(C.boneTransform(t,jg),C.boneTransform(e,Pg),C.boneTransform(a,_g));const n=lr(C,A,I,g,jg,Pg,_g,ho);if(n){E&&(Di.fromBufferAttribute(E,t),hi.fromBufferAttribute(E,e),ri.fromBufferAttribute(E,a),n.uv=aI.getUV(ho,jg,Pg,_g,Di,hi,ri,new IA)),o&&(Di.fromBufferAttribute(o,t),hi.fromBufferAttribute(o,e),ri.fromBufferAttribute(o,a),n.uv2=aI.getUV(ho,jg,Pg,_g,Di,hi,ri,new IA));const r={a:t,b:e,c:a,normal:new F,materialIndex:0};aI.getNormal(jg,Pg,_g,r.normal),n.face=r}return n}class XB extends CI{constructor(A=1,I=1,g=1,B=1,Q=1,i=1){super();this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:B,heightSegments:Q,depthSegments:i};const E=this;B=Math.floor(B),Q=Math.floor(Q),i=Math.floor(i);const o=[],t=[],e=[],a=[];let s=0,n=0;r("z","y","x",-1,-1,g,I,A,i,Q,0),r("z","y","x",1,-1,g,I,-A,i,Q,1),r("x","z","y",1,1,A,g,I,B,i,2),r("x","z","y",1,-1,A,g,-I,B,i,3),r("x","y","z",1,-1,A,I,g,B,Q,4),r("x","y","z",-1,-1,A,I,-g,B,Q,5),this.setIndex(o),this.setAttribute("position",new kI(t,3)),this.setAttribute("normal",new kI(e,3)),this.setAttribute("uv",new kI(a,2));function r(S,w,h,D,y,k,l,K,N,x,W){const u=k/N,G=l/x,R=k/2,f=l/2,Y=K/2,H=N+1,m=x+1;let T=0,q=0;const V=new F;for(let gA=0;gA<m;gA++){const AA=gA*G-f;for(let BA=0;BA<H;BA++){const UA=BA*u-R;V[S]=UA*D,V[w]=AA*y,V[h]=Y,t.push(V.x,V.y,V.z),V[S]=0,V[w]=0,V[h]=K>0?1:-1,e.push(V.x,V.y,V.z),a.push(BA/N),a.push(1-gA/x),T+=1}}for(let gA=0;gA<x;gA++)for(let AA=0;AA<N;AA++){const BA=s+AA+H*gA,UA=s+AA+H*(gA+1),ZA=s+(AA+1)+H*(gA+1),MA=s+(AA+1)+H*gA;o.push(BA,UA,MA),o.push(UA,ZA,MA),q+=6}E.addGroup(n,q,W),n+=q,s+=T}}static fromJSON(A){return new XB(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function zC(C){const A={};for(const I in C){A[I]={};for(const g in C[I]){const B=C[I][g];B&&(B.isColor||B.isMatrix3||B.isMatrix4||B.isVector2||B.isVector3||B.isVector4||B.isTexture||B.isQuaternion)?A[I][g]=B.clone():Array.isArray(B)?A[I][g]=B.slice():A[I][g]=B}}return A}function KI(C){const A={};for(let I=0;I<C.length;I++){const g=zC(C[I]);for(const B in g)A[B]=g[B]}return A}const Gr={clone:zC,merge:KI};var kr=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wr=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cg extends rI{constructor(A){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=kr,this.fragmentShader=wr,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&(A.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(A))}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=zC(A.uniforms),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const B in this.uniforms){const i=this.uniforms[B].value;i&&i.isTexture?I.uniforms[B]={type:"t",value:i.toJSON(A).uuid}:i&&i.isColor?I.uniforms[B]={type:"c",value:i.getHex()}:i&&i.isVector2?I.uniforms[B]={type:"v2",value:i.toArray()}:i&&i.isVector3?I.uniforms[B]={type:"v3",value:i.toArray()}:i&&i.isVector4?I.uniforms[B]={type:"v4",value:i.toArray()}:i&&i.isMatrix3?I.uniforms[B]={type:"m3",value:i.toArray()}:i&&i.isMatrix4?I.uniforms[B]={type:"m4",value:i.toArray()}:I.uniforms[B]={value:i}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader;const g={};for(const B in this.extensions)this.extensions[B]===!0&&(g[B]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}Cg.prototype.isShaderMaterial=!0;class ro extends VA{constructor(){super();this.type="Camera",this.matrixWorldInverse=new wA,this.projectionMatrix=new wA,this.projectionMatrixInverse=new wA}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(-I[8],-I[9],-I[10]).normalize()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}ro.prototype.isCamera=!0;class YI extends ro{constructor(A=50,I=1,g=.1,B=2e3){super();this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=B,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=WE*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(ZE*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return WE*2*Math.atan(Math.tan(ZE*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(A,I,g,B,Q,i){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=B,this.view.width=Q,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(ZE*.5*this.fov)/this.zoom,g=2*I,B=this.aspect*g,Q=-.5*B;const i=this.view;if(this.view!==null&&this.view.enabled){const o=i.fullWidth,t=i.fullHeight;Q+=i.offsetX*B/o,I-=i.offsetY*g/t,B*=i.width/o,g*=i.height/t}const E=this.filmOffset;E!==0&&(Q+=A*E/this.getFilmWidth()),this.projectionMatrix.makePerspective(Q,Q+B,I,I-g,A,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}}YI.prototype.isPerspectiveCamera=!0;const $C=90,AB=1;class So extends VA{constructor(A,I,g){super();if(this.type="CubeCamera",g.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=g;const B=new YI($C,AB,A,I);B.layers=this.layers,B.up.set(0,-1,0),B.lookAt(new F(1,0,0)),this.add(B);const Q=new YI($C,AB,A,I);Q.layers=this.layers,Q.up.set(0,-1,0),Q.lookAt(new F(-1,0,0)),this.add(Q);const i=new YI($C,AB,A,I);i.layers=this.layers,i.up.set(0,0,1),i.lookAt(new F(0,1,0)),this.add(i);const E=new YI($C,AB,A,I);E.layers=this.layers,E.up.set(0,0,-1),E.lookAt(new F(0,-1,0)),this.add(E);const o=new YI($C,AB,A,I);o.layers=this.layers,o.up.set(0,-1,0),o.lookAt(new F(0,0,1)),this.add(o);const t=new YI($C,AB,A,I);t.layers=this.layers,t.up.set(0,-1,0),t.lookAt(new F(0,0,-1)),this.add(t)}update(A,I){this.parent===null&&this.updateMatrixWorld();const g=this.renderTarget,[B,Q,i,E,o,t]=this.children,e=A.xr.enabled,a=A.getRenderTarget();A.xr.enabled=!1;const s=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0),A.render(I,B),A.setRenderTarget(g,1),A.render(I,Q),A.setRenderTarget(g,2),A.render(I,i),A.setRenderTarget(g,3),A.render(I,E),A.setRenderTarget(g,4),A.render(I,o),g.texture.generateMipmaps=s,A.setRenderTarget(g,5),A.render(I,t),A.setRenderTarget(a),A.xr.enabled=e,g.texture.needsPMREMUpdate=!0}}class li extends GI{constructor(A,I,g,B,Q,i,E,o,t,e){A=A!==void 0?A:[],I=I!==void 0?I:qC;super(A,I,g,B,Q,i,E,o,t,e);this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}li.prototype.isCubeTexture=!0;class ya extends OI{constructor(A,I={}){super(A,A,I);const g={width:A,height:A,depth:1},B=[g,g,g,g,g,g];this.texture=new li(B,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:EI}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.format=fI,this.texture.encoding=I.encoding,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},B=new XB(5,5,5),Q=new Cg({name:"CubemapFromEquirect",uniforms:zC(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:hI,blending:Og});Q.uniforms.tEquirect.value=I;const i=new uI(B,Q),E=I.minFilter;return I.minFilter===vB&&(I.minFilter=EI),new So(1,10,this).update(A,i),I.minFilter=E,i.geometry.dispose(),i.material.dispose(),this}clear(A,I,g,B){const Q=A.getRenderTarget();for(let i=0;i<6;i++)A.setRenderTarget(this,i),A.clear(I,g,B);A.setRenderTarget(Q)}}ya.prototype.isWebGLCubeRenderTarget=!0;const co=new F,Ur=new F,yr=new yI;class fg{constructor(A=new F(1,0,0),I=0){this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,B){return this.normal.set(A,I,g),this.constant=B,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const B=co.subVectors(g,I).cross(Ur.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(B,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(this.normal).multiplyScalar(-this.distanceToPoint(A)).add(A)}intersectLine(A,I){const g=A.delta(co),B=this.normal.dot(g);if(B===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const Q=-(A.start.dot(this.normal)+this.constant)/B;return Q<0||Q>1?null:I.copy(g).multiplyScalar(Q).add(A.start)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||yr.getNormalMatrix(A),B=this.coplanarPoint(co).applyMatrix4(A),Q=this.normal.applyMatrix3(g).normalize();return this.constant=-B.dot(Q),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}fg.prototype.isPlane=!0;const IB=new vC,Gi=new F;class ki{constructor(A=new fg,I=new fg,g=new fg,B=new fg,Q=new fg,i=new fg){this.planes=[A,I,g,B,Q,i]}set(A,I,g,B,Q,i){const E=this.planes;return E[0].copy(A),E[1].copy(I),E[2].copy(g),E[3].copy(B),E[4].copy(Q),E[5].copy(i),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A){const I=this.planes,g=A.elements,B=g[0],Q=g[1],i=g[2],E=g[3],o=g[4],t=g[5],e=g[6],a=g[7],s=g[8],n=g[9],r=g[10],S=g[11],w=g[12],h=g[13],D=g[14],y=g[15];return I[0].setComponents(E-B,a-o,S-s,y-w).normalize(),I[1].setComponents(E+B,a+o,S+s,y+w).normalize(),I[2].setComponents(E+Q,a+t,S+n,y+h).normalize(),I[3].setComponents(E-Q,a-t,S-n,y-h).normalize(),I[4].setComponents(E-i,a-e,S-r,y-D).normalize(),I[5].setComponents(E+i,a+e,S+r,y+D).normalize(),this}intersectsObject(A){const I=A.geometry;return I.boundingSphere===null&&I.computeBoundingSphere(),IB.copy(I.boundingSphere).applyMatrix4(A.matrixWorld),this.intersectsSphere(IB)}intersectsSprite(A){return IB.center.set(0,0,0),IB.radius=.7071067811865476,IB.applyMatrix4(A.matrixWorld),this.intersectsSphere(IB)}intersectsSphere(A){const I=this.planes,g=A.center,B=-A.radius;for(let Q=0;Q<6;Q++)if(I[Q].distanceToPoint(g)<B)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const B=I[g];if(Gi.x=B.normal.x>0?A.max.x:A.min.x,Gi.y=B.normal.y>0?A.max.y:A.min.y,Gi.z=B.normal.z>0?A.max.z:A.min.z,B.distanceToPoint(Gi)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ma(){let C=null,A=!1,I=null,g=null;function B(Q,i){I(Q,i),g=C.requestAnimationFrame(B)}return{start:function(){A!==!0&&I!==null&&(g=C.requestAnimationFrame(B),A=!0)},stop:function(){C.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(Q){I=Q},setContext:function(Q){C=Q}}}function Mr(C,A){const I=A.isWebGL2,g=new WeakMap;function B(t,e){const a=t.array,s=t.usage,n=C.createBuffer();C.bindBuffer(e,n),C.bufferData(e,a,s),t.onUploadCallback();let r;if(a instanceof Float32Array)r=5126;else if(a instanceof Uint16Array)if(t.isFloat16BufferAttribute)if(I)r=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else r=5123;else if(a instanceof Int16Array)r=5122;else if(a instanceof Uint32Array)r=5125;else if(a instanceof Int32Array)r=5124;else if(a instanceof Int8Array)r=5120;else if(a instanceof Uint8Array)r=5121;else if(a instanceof Uint8ClampedArray)r=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:n,type:r,bytesPerElement:a.BYTES_PER_ELEMENT,version:t.version}}function Q(t,e,a){const s=e.array,n=e.updateRange;C.bindBuffer(a,t),n.count===-1?C.bufferSubData(a,0,s):(I?C.bufferSubData(a,n.offset*s.BYTES_PER_ELEMENT,s,n.offset,n.count):C.bufferSubData(a,n.offset*s.BYTES_PER_ELEMENT,s.subarray(n.offset,n.offset+n.count)),n.count=-1)}function i(t){return t.isInterleavedBufferAttribute&&(t=t.data),g.get(t)}function E(t){t.isInterleavedBufferAttribute&&(t=t.data);const e=g.get(t);e&&(C.deleteBuffer(e.buffer),g.delete(t))}function o(t,e){if(t.isGLBufferAttribute){const s=g.get(t);(!s||s.version<t.version)&&g.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version});return}t.isInterleavedBufferAttribute&&(t=t.data);const a=g.get(t);a===void 0?g.set(t,B(t,e)):a.version<t.version&&(Q(a.buffer,t,e),a.version=t.version)}return{get:i,remove:E,update:o}}class lo extends CI{constructor(A=1,I=1,g=1,B=1){super();this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:B};const Q=A/2,i=I/2,E=Math.floor(g),o=Math.floor(B),t=E+1,e=o+1,a=A/E,s=I/o,n=[],r=[],S=[],w=[];for(let h=0;h<e;h++){const D=h*s-i;for(let y=0;y<t;y++){const k=y*a-Q;r.push(k,-D,0),S.push(0,0,1),w.push(y/E),w.push(1-h/o)}}for(let h=0;h<o;h++)for(let D=0;D<E;D++){const y=D+t*h,k=D+t*(h+1),l=D+1+t*(h+1),K=D+1+t*h;n.push(y,k,K),n.push(k,l,K)}this.setIndex(n),this.setAttribute("position",new kI(r,3)),this.setAttribute("normal",new kI(S,3)),this.setAttribute("uv",new kI(w,2))}static fromJSON(A){return new lo(A.width,A.height,A.widthSegments,A.heightSegments)}}var Jr=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Fr=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kr=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Rr=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pr=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Nr=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qr="vec3 transformed = vec3( position );",dr=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fr=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,ur=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yr=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Lr=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hr=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mr=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tr=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xr=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Or=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,br=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vr=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Zr=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wr=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vr=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jr=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Pr=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_r=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xr="gl_FragColor = linearToOutputTexel( gl_FragColor );",zr=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$r=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,AS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,IS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,BS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ES=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,tS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,eS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aS=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,sS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nS=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,DS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,rS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,cS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,lS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,GS=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,US=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,JS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,FS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ]
		#endif
	}
#endif`,fS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,uS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			float texelIndex = float( vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,YS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,LS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,HS=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,OS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,bS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,vS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ZS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,WS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,VS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,jS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_S=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$S=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ac=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ic=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gc=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Cc=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qc=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,ic=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ec=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,oc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ec=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ac=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sc=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,nc=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Dc=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,hc=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,rc=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Sc=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,cc=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,lc=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Gc=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mA={alphamap_fragment:Jr,alphamap_pars_fragment:Fr,alphatest_fragment:Kr,alphatest_pars_fragment:Rr,aomap_fragment:pr,aomap_pars_fragment:Nr,begin_vertex:qr,beginnormal_vertex:dr,bsdfs:fr,bumpmap_pars_fragment:ur,clipping_planes_fragment:Yr,clipping_planes_pars_fragment:Lr,clipping_planes_pars_vertex:Hr,clipping_planes_vertex:mr,color_fragment:Tr,color_pars_fragment:xr,color_pars_vertex:Or,color_vertex:br,common:vr,cube_uv_reflection_fragment:Zr,defaultnormal_vertex:Wr,displacementmap_pars_vertex:Vr,displacementmap_vertex:jr,emissivemap_fragment:Pr,emissivemap_pars_fragment:_r,encodings_fragment:Xr,encodings_pars_fragment:zr,envmap_fragment:$r,envmap_common_pars_fragment:AS,envmap_pars_fragment:IS,envmap_pars_vertex:gS,envmap_physical_pars_fragment:nS,envmap_vertex:CS,fog_vertex:BS,fog_pars_vertex:QS,fog_fragment:iS,fog_pars_fragment:ES,gradientmap_pars_fragment:oS,lightmap_fragment:tS,lightmap_pars_fragment:eS,lights_lambert_vertex:aS,lights_pars_begin:sS,lights_toon_fragment:DS,lights_toon_pars_fragment:hS,lights_phong_fragment:rS,lights_phong_pars_fragment:SS,lights_physical_fragment:cS,lights_physical_pars_fragment:lS,lights_fragment_begin:GS,lights_fragment_maps:kS,lights_fragment_end:wS,logdepthbuf_fragment:US,logdepthbuf_pars_fragment:yS,logdepthbuf_pars_vertex:MS,logdepthbuf_vertex:JS,map_fragment:FS,map_pars_fragment:KS,map_particle_fragment:RS,map_particle_pars_fragment:pS,metalnessmap_fragment:NS,metalnessmap_pars_fragment:qS,morphcolor_vertex:dS,morphnormal_vertex:fS,morphtarget_pars_vertex:uS,morphtarget_vertex:YS,normal_fragment_begin:LS,normal_fragment_maps:HS,normal_pars_fragment:mS,normal_pars_vertex:TS,normal_vertex:xS,normalmap_pars_fragment:OS,clearcoat_normal_fragment_begin:bS,clearcoat_normal_fragment_maps:vS,clearcoat_pars_fragment:ZS,output_fragment:WS,packing:VS,premultiplied_alpha_fragment:jS,project_vertex:PS,dithering_fragment:_S,dithering_pars_fragment:XS,roughnessmap_fragment:zS,roughnessmap_pars_fragment:$S,shadowmap_pars_fragment:Ac,shadowmap_pars_vertex:Ic,shadowmap_vertex:gc,shadowmask_pars_fragment:Cc,skinbase_vertex:Bc,skinning_pars_vertex:Qc,skinning_vertex:ic,skinnormal_vertex:Ec,specularmap_fragment:oc,specularmap_pars_fragment:tc,tonemapping_fragment:ec,tonemapping_pars_fragment:ac,transmission_fragment:sc,transmission_pars_fragment:nc,uv_pars_fragment:Dc,uv_pars_vertex:hc,uv_vertex:rc,uv2_pars_fragment:Sc,uv2_pars_vertex:cc,uv2_vertex:lc,worldpos_vertex:Gc,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`},oA={common:{diffuse:{value:new lA(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new yI},uv2Transform:{value:new yI},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new IA(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lA(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lA(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new yI}},sprite:{diffuse:{value:new lA(16777215)},opacity:{value:1},center:{value:new IA(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new yI}}},rg={basic:{uniforms:KI([oA.common,oA.specularmap,oA.envmap,oA.aomap,oA.lightmap,oA.fog]),vertexShader:mA.meshbasic_vert,fragmentShader:mA.meshbasic_frag},lambert:{uniforms:KI([oA.common,oA.specularmap,oA.envmap,oA.aomap,oA.lightmap,oA.emissivemap,oA.fog,oA.lights,{emissive:{value:new lA(0)}}]),vertexShader:mA.meshlambert_vert,fragmentShader:mA.meshlambert_frag},phong:{uniforms:KI([oA.common,oA.specularmap,oA.envmap,oA.aomap,oA.lightmap,oA.emissivemap,oA.bumpmap,oA.normalmap,oA.displacementmap,oA.fog,oA.lights,{emissive:{value:new lA(0)},specular:{value:new lA(1118481)},shininess:{value:30}}]),vertexShader:mA.meshphong_vert,fragmentShader:mA.meshphong_frag},standard:{uniforms:KI([oA.common,oA.envmap,oA.aomap,oA.lightmap,oA.emissivemap,oA.bumpmap,oA.normalmap,oA.displacementmap,oA.roughnessmap,oA.metalnessmap,oA.fog,oA.lights,{emissive:{value:new lA(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mA.meshphysical_vert,fragmentShader:mA.meshphysical_frag},toon:{uniforms:KI([oA.common,oA.aomap,oA.lightmap,oA.emissivemap,oA.bumpmap,oA.normalmap,oA.displacementmap,oA.gradientmap,oA.fog,oA.lights,{emissive:{value:new lA(0)}}]),vertexShader:mA.meshtoon_vert,fragmentShader:mA.meshtoon_frag},matcap:{uniforms:KI([oA.common,oA.bumpmap,oA.normalmap,oA.displacementmap,oA.fog,{matcap:{value:null}}]),vertexShader:mA.meshmatcap_vert,fragmentShader:mA.meshmatcap_frag},points:{uniforms:KI([oA.points,oA.fog]),vertexShader:mA.points_vert,fragmentShader:mA.points_frag},dashed:{uniforms:KI([oA.common,oA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mA.linedashed_vert,fragmentShader:mA.linedashed_frag},depth:{uniforms:KI([oA.common,oA.displacementmap]),vertexShader:mA.depth_vert,fragmentShader:mA.depth_frag},normal:{uniforms:KI([oA.common,oA.bumpmap,oA.normalmap,oA.displacementmap,{opacity:{value:1}}]),vertexShader:mA.meshnormal_vert,fragmentShader:mA.meshnormal_frag},sprite:{uniforms:KI([oA.sprite,oA.fog]),vertexShader:mA.sprite_vert,fragmentShader:mA.sprite_frag},background:{uniforms:{uvTransform:{value:new yI},t2D:{value:null}},vertexShader:mA.background_vert,fragmentShader:mA.background_frag},cube:{uniforms:KI([oA.envmap,{opacity:{value:1}}]),vertexShader:mA.cube_vert,fragmentShader:mA.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mA.equirect_vert,fragmentShader:mA.equirect_frag},distanceRGBA:{uniforms:KI([oA.common,oA.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mA.distanceRGBA_vert,fragmentShader:mA.distanceRGBA_frag},shadow:{uniforms:KI([oA.lights,oA.fog,{color:{value:new lA(0)},opacity:{value:1}}]),vertexShader:mA.shadow_vert,fragmentShader:mA.shadow_frag}};rg.physical={uniforms:KI([rg.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new IA(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new lA(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new IA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new lA(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new lA(1,1,1)},specularColorMap:{value:null}}]),vertexShader:mA.meshphysical_vert,fragmentShader:mA.meshphysical_frag};function kc(C,A,I,g,B,Q){const i=new lA(0);let E=B===!0?0:1,o,t,e=null,a=0,s=null;function n(S,w){let h=!1,D=w.isScene===!0?w.background:null;D&&D.isTexture&&(D=A.get(D));const y=C.xr,k=y.getSession&&y.getSession();k&&k.environmentBlendMode==="additive"&&(D=null),D===null?r(i,E):D&&D.isColor&&(r(D,1),h=!0),(C.autoClear||h)&&C.clear(C.autoClearColor,C.autoClearDepth,C.autoClearStencil),D&&(D.isCubeTexture||D.mapping===jQ)?(t===void 0&&(t=new uI(new XB(1,1,1),new Cg({name:"BackgroundCubeMaterial",uniforms:zC(rg.cube.uniforms),vertexShader:rg.cube.vertexShader,fragmentShader:rg.cube.fragmentShader,side:hI,depthTest:!1,depthWrite:!1,fog:!1})),t.geometry.deleteAttribute("normal"),t.geometry.deleteAttribute("uv"),t.onBeforeRender=function(l,K,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(t.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),g.update(t)),t.material.uniforms.envMap.value=D,t.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,(e!==D||a!==D.version||s!==C.toneMapping)&&(t.material.needsUpdate=!0,e=D,a=D.version,s=C.toneMapping),S.unshift(t,t.geometry,t.material,0,0,null)):D&&D.isTexture&&(o===void 0&&(o=new uI(new lo(2,2),new Cg({name:"BackgroundMaterial",uniforms:zC(rg.background.uniforms),vertexShader:rg.background.vertexShader,fragmentShader:rg.background.fragmentShader,side:bB,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),g.update(o)),o.material.uniforms.t2D.value=D,D.matrixAutoUpdate===!0&&D.updateMatrix(),o.material.uniforms.uvTransform.value.copy(D.matrix),(e!==D||a!==D.version||s!==C.toneMapping)&&(o.material.needsUpdate=!0,e=D,a=D.version,s=C.toneMapping),S.unshift(o,o.geometry,o.material,0,0,null))}function r(S,w){I.buffers.color.setClear(S.r,S.g,S.b,w,Q)}return{getClearColor:function(){return i},setClearColor:function(S,w=1){i.set(S),E=w,r(i,E)},getClearAlpha:function(){return E},setClearAlpha:function(S){E=S,r(i,E)},render:n}}function wc(C,A,I,g){const B=C.getParameter(34921),Q=g.isWebGL2?null:A.get("OES_vertex_array_object"),i=g.isWebGL2||Q!==null,E={},o=S(null);let t=o;function e(f,Y,H,m,T){let q=!1;if(i){const V=r(m,H,Y);t!==V&&(t=V,s(t.object)),q=w(m,T),q&&h(m,T)}else{const V=Y.wireframe===!0;(t.geometry!==m.id||t.program!==H.id||t.wireframe!==V)&&(t.geometry=m.id,t.program=H.id,t.wireframe=V,q=!0)}f.isInstancedMesh===!0&&(q=!0),T!==null&&I.update(T,34963),q&&(N(f,Y,H,m),T!==null&&C.bindBuffer(34963,I.get(T).buffer))}function a(){return g.isWebGL2?C.createVertexArray():Q.createVertexArrayOES()}function s(f){return g.isWebGL2?C.bindVertexArray(f):Q.bindVertexArrayOES(f)}function n(f){return g.isWebGL2?C.deleteVertexArray(f):Q.deleteVertexArrayOES(f)}function r(f,Y,H){const m=H.wireframe===!0;let T=E[f.id];T===void 0&&(T={},E[f.id]=T);let q=T[Y.id];q===void 0&&(q={},T[Y.id]=q);let V=q[m];return V===void 0&&(V=S(a()),q[m]=V),V}function S(f){const Y=[],H=[],m=[];for(let T=0;T<B;T++)Y[T]=0,H[T]=0,m[T]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:H,attributeDivisors:m,object:f,attributes:{},index:null}}function w(f,Y){const H=t.attributes,m=f.attributes;let T=0;for(const q in m){const V=H[q],gA=m[q];if(V===void 0||V.attribute!==gA||V.data!==gA.data)return!0;T++}return t.attributesNum!==T||t.index!==Y}function h(f,Y){const H={},m=f.attributes;let T=0;for(const q in m){const V=m[q],gA={};gA.attribute=V,V.data&&(gA.data=V.data),H[q]=gA,T++}t.attributes=H,t.attributesNum=T,t.index=Y}function D(){const f=t.newAttributes;for(let Y=0,H=f.length;Y<H;Y++)f[Y]=0}function y(f){k(f,0)}function k(f,Y){const H=t.newAttributes,m=t.enabledAttributes,T=t.attributeDivisors;H[f]=1,m[f]===0&&(C.enableVertexAttribArray(f),m[f]=1),T[f]!==Y&&((g.isWebGL2?C:A.get("ANGLE_instanced_arrays"))[g.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](f,Y),T[f]=Y)}function l(){const f=t.newAttributes,Y=t.enabledAttributes;for(let H=0,m=Y.length;H<m;H++)Y[H]!==f[H]&&(C.disableVertexAttribArray(H),Y[H]=0)}function K(f,Y,H,m,T,q){g.isWebGL2===!0&&(H===5124||H===5125)?C.vertexAttribIPointer(f,Y,H,T,q):C.vertexAttribPointer(f,Y,H,m,T,q)}function N(f,Y,H,m){if(g.isWebGL2===!1&&(f.isInstancedMesh||m.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;D();const T=m.attributes,q=H.getAttributes(),V=Y.defaultAttributeValues;for(const gA in q){const AA=q[gA];if(AA.location>=0){let BA=T[gA];if(BA===void 0&&(gA==="instanceMatrix"&&f.instanceMatrix&&(BA=f.instanceMatrix),gA==="instanceColor"&&f.instanceColor&&(BA=f.instanceColor)),BA!==void 0){const UA=BA.normalized,ZA=BA.itemSize,MA=I.get(BA);if(MA===void 0)continue;const _=MA.buffer,WA=MA.type,uA=MA.bytesPerElement;if(BA.isInterleavedBufferAttribute){const rA=BA.data,SA=rA.stride,TA=BA.offset;if(rA.isInstancedInterleavedBuffer){for(let O=0;O<AA.locationSize;O++)k(AA.location+O,rA.meshPerAttribute);f.isInstancedMesh!==!0&&m._maxInstanceCount===void 0&&(m._maxInstanceCount=rA.meshPerAttribute*rA.count)}else for(let O=0;O<AA.locationSize;O++)y(AA.location+O);C.bindBuffer(34962,_);for(let O=0;O<AA.locationSize;O++)K(AA.location+O,ZA/AA.locationSize,WA,UA,SA*uA,(TA+ZA/AA.locationSize*O)*uA)}else{if(BA.isInstancedBufferAttribute){for(let rA=0;rA<AA.locationSize;rA++)k(AA.location+rA,BA.meshPerAttribute);f.isInstancedMesh!==!0&&m._maxInstanceCount===void 0&&(m._maxInstanceCount=BA.meshPerAttribute*BA.count)}else for(let rA=0;rA<AA.locationSize;rA++)y(AA.location+rA);C.bindBuffer(34962,_);for(let rA=0;rA<AA.locationSize;rA++)K(AA.location+rA,ZA/AA.locationSize,WA,UA,ZA*uA,ZA/AA.locationSize*rA*uA)}}else if(V!==void 0){const UA=V[gA];if(UA!==void 0)switch(UA.length){case 2:C.vertexAttrib2fv(AA.location,UA);break;case 3:C.vertexAttrib3fv(AA.location,UA);break;case 4:C.vertexAttrib4fv(AA.location,UA);break;default:C.vertexAttrib1fv(AA.location,UA)}}}}l()}function x(){G();for(const f in E){const Y=E[f];for(const H in Y){const m=Y[H];for(const T in m)n(m[T].object),delete m[T];delete Y[H]}delete E[f]}}function W(f){if(E[f.id]===void 0)return;const Y=E[f.id];for(const H in Y){const m=Y[H];for(const T in m)n(m[T].object),delete m[T];delete Y[H]}delete E[f.id]}function u(f){for(const Y in E){const H=E[Y];if(H[f.id]===void 0)continue;const m=H[f.id];for(const T in m)n(m[T].object),delete m[T];delete H[f.id]}}function G(){R(),t!==o&&(t=o,s(t.object))}function R(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:e,reset:G,resetDefaultState:R,dispose:x,releaseStatesOfGeometry:W,releaseStatesOfProgram:u,initAttributes:D,enableAttribute:y,disableUnusedAttributes:l}}function Uc(C,A,I,g){const B=g.isWebGL2;let Q;function i(t){Q=t}function E(t,e){C.drawArrays(Q,t,e),I.update(e,Q,1)}function o(t,e,a){if(a===0)return;let s,n;if(B)s=C,n="drawArraysInstanced";else if(s=A.get("ANGLE_instanced_arrays"),n="drawArraysInstancedANGLE",s===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}s[n](Q,t,e,a),I.update(e,Q,a)}this.setMode=i,this.render=E,this.renderInstances=o}function yc(C,A,I){let g;function B(){if(g!==void 0)return g;if(A.has("EXT_texture_filter_anisotropic")===!0){const N=A.get("EXT_texture_filter_anisotropic");g=C.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else g=0;return g}function Q(N){if(N==="highp"){if(C.getShaderPrecisionFormat(35633,36338).precision>0&&C.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";N="mediump"}return N==="mediump"&&C.getShaderPrecisionFormat(35633,36337).precision>0&&C.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const i=typeof WebGL2RenderingContext!="undefined"&&C instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&C instanceof WebGL2ComputeRenderingContext;let E=I.precision!==void 0?I.precision:"highp";const o=Q(E);o!==E&&(console.warn("THREE.WebGLRenderer:",E,"not supported, using",o,"instead."),E=o);const t=i||A.has("WEBGL_draw_buffers"),e=I.logarithmicDepthBuffer===!0,a=C.getParameter(34930),s=C.getParameter(35660),n=C.getParameter(3379),r=C.getParameter(34076),S=C.getParameter(34921),w=C.getParameter(36347),h=C.getParameter(36348),D=C.getParameter(36349),y=s>0,k=i||A.has("OES_texture_float"),l=y&&k,K=i?C.getParameter(36183):0;return{isWebGL2:i,drawBuffers:t,getMaxAnisotropy:B,getMaxPrecision:Q,precision:E,logarithmicDepthBuffer:e,maxTextures:a,maxVertexTextures:s,maxTextureSize:n,maxCubemapSize:r,maxAttributes:S,maxVertexUniforms:w,maxVaryings:h,maxFragmentUniforms:D,vertexTextures:y,floatFragmentTextures:k,floatVertexTextures:l,maxSamples:K}}function Mc(C){const A=this;let I=null,g=0,B=!1,Q=!1;const i=new fg,E=new yI,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(a,s,n){const r=a.length!==0||s||g!==0||B;return B=s,I=e(a,n,0),g=a.length,r},this.beginShadows=function(){Q=!0,e(null)},this.endShadows=function(){Q=!1,t()},this.setState=function(a,s,n){const r=a.clippingPlanes,S=a.clipIntersection,w=a.clipShadows,h=C.get(a);if(!B||r===null||r.length===0||Q&&!w)Q?e(null):t();else{const D=Q?0:g,y=D*4;let k=h.clippingState||null;o.value=k,k=e(r,s,y,n);for(let l=0;l!==y;++l)k[l]=I[l];h.clippingState=k,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=D}};function t(){o.value!==I&&(o.value=I,o.needsUpdate=g>0),A.numPlanes=g,A.numIntersection=0}function e(a,s,n,r){const S=a!==null?a.length:0;let w=null;if(S!==0){if(w=o.value,r!==!0||w===null){const h=n+S*4,D=s.matrixWorldInverse;E.getNormalMatrix(D),(w===null||w.length<h)&&(w=new Float32Array(h));for(let y=0,k=n;y!==S;++y,k+=4)i.copy(a[y]).applyMatrix4(D,E),i.normal.toArray(w,k),w[k+3]=i.constant}o.value=w,o.needsUpdate=!0}return A.numPlanes=S,A.numIntersection=0,w}}function Jc(C){let A=new WeakMap;function I(i,E){return E===qE?i.mapping=qC:E===dE&&(i.mapping=dC),i}function g(i){if(i&&i.isTexture&&i.isRenderTargetTexture===!1){const E=i.mapping;if(E===qE||E===dE)if(A.has(i)){const o=A.get(i).texture;return I(o,i.mapping)}else{const o=i.image;if(o&&o.height>0){const t=new ya(o.height/2);return t.fromEquirectangularTexture(C,i),A.set(i,t),i.addEventListener("dispose",B),I(t.texture,i.mapping)}else return null}}return i}function B(i){const E=i.target;E.removeEventListener("dispose",B);const o=A.get(E);o!==void 0&&(A.delete(E),o.dispose())}function Q(){A=new WeakMap}return{get:g,dispose:Q}}class Go extends ro{constructor(A=-1,I=1,g=1,B=-1,Q=.1,i=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=g,this.bottom=B,this.near=Q,this.far=i,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,g,B,Q,i){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=B,this.view.width=Q,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,B=(this.top+this.bottom)/2;let Q=g-A,i=g+A,E=B+I,o=B-I;if(this.view!==null&&this.view.enabled){const t=(this.right-this.left)/this.view.fullWidth/this.zoom,e=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Q+=t*this.view.offsetX,i=Q+t*this.view.width,E-=e*this.view.offsetY,o=E-e*this.view.height}this.projectionMatrix.makeOrthographic(Q,i,E,o,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}}Go.prototype.isOrthographicCamera=!0;const gB=4,Ja=[.125,.215,.35,.446,.526,.582],GC=20,ko=new Go,Fa=new lA;let wo=null;const kC=(1+Math.sqrt(5))/2,CB=1/kC,Ka=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,kC,CB),new F(0,kC,-CB),new F(CB,0,kC),new F(-CB,0,kC),new F(kC,CB,0),new F(-kC,CB,0)];class Ra{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,g=.1,B=100){wo=this._renderer.getRenderTarget(),this._setSize(256);const Q=this._allocateTargets();return Q.depthBuffer=!0,this._sceneToCubeUV(A,g,B,Q),I>0&&this._blur(Q,0,0,I),this._applyPMREM(Q),this._cleanup(Q),Q}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Na(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(wo),A.scissorTest=!1,wi(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===qC||A.mapping===dC?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),wo=this._renderer.getRenderTarget();const g=I||this._allocateTargets();return this._textureToCubeUV(A,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize-32,g={magFilter:EI,minFilter:EI,generateMipmaps:!1,type:ng,format:fI,encoding:Dg,depthBuffer:!1},B=pa(A,I,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pa(A,I,g);const{_lodMax:Q}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fc(Q)),this._blurMaterial=Kc(Q,A,I)}return B}_compileMaterial(A){const I=new uI(this._lodPlanes[0],A);this._renderer.compile(I,ko)}_sceneToCubeUV(A,I,g,B){const E=new YI(90,1,I,g),o=[1,-1,1,1,1,1],t=[1,1,1,-1,-1,-1],e=this._renderer,a=e.autoClear,s=e.toneMapping;e.getClearColor(Fa),e.toneMapping=bg,e.autoClear=!1;const n=new ti({name:"PMREM.Background",side:hI,depthWrite:!1,depthTest:!1}),r=new uI(new XB,n);let S=!1;const w=A.background;w?w.isColor&&(n.color.copy(w),A.background=null,S=!0):(n.color.copy(Fa),S=!0);for(let h=0;h<6;h++){const D=h%3;D===0?(E.up.set(0,o[h],0),E.lookAt(t[h],0,0)):D===1?(E.up.set(0,0,o[h]),E.lookAt(0,t[h],0)):(E.up.set(0,o[h],0),E.lookAt(0,0,t[h]));const y=this._cubeSize;wi(B,D*y,h>2?y:0,y,y),e.setRenderTarget(B),S&&e.render(r,E),e.render(A,E)}r.geometry.dispose(),r.material.dispose(),e.toneMapping=s,e.autoClear=a,A.background=w}_textureToCubeUV(A,I){const g=this._renderer,B=A.mapping===qC||A.mapping===dC;B?(this._cubemapMaterial===null&&(this._cubemapMaterial=qa()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Na());const Q=B?this._cubemapMaterial:this._equirectMaterial,i=new uI(this._lodPlanes[0],Q),E=Q.uniforms;E.envMap.value=A;const o=this._cubeSize;wi(I,0,0,3*o,2*o),g.setRenderTarget(I),g.render(i,ko)}_applyPMREM(A){const I=this._renderer,g=I.autoClear;I.autoClear=!1;for(let B=1;B<this._lodPlanes.length;B++){const Q=Math.sqrt(this._sigmas[B]*this._sigmas[B]-this._sigmas[B-1]*this._sigmas[B-1]),i=Ka[(B-1)%Ka.length];this._blur(A,B-1,B,Q,i)}I.autoClear=g}_blur(A,I,g,B,Q){const i=this._pingPongRenderTarget;this._halfBlur(A,i,I,g,B,"latitudinal",Q),this._halfBlur(i,A,g,g,B,"longitudinal",Q)}_halfBlur(A,I,g,B,Q,i,E){const o=this._renderer,t=this._blurMaterial;i!=="latitudinal"&&i!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const e=3,a=new uI(this._lodPlanes[B],t),s=t.uniforms,n=this._sizeLods[g]-1,r=isFinite(Q)?Math.PI/(2*n):2*Math.PI/(2*GC-1),S=Q/r,w=isFinite(Q)?1+Math.floor(e*S):GC;w>GC&&console.warn(`sigmaRadians, ${Q}, is too large and will clip, as it requested ${w} samples when the maximum is set to ${GC}`);const h=[];let D=0;for(let N=0;N<GC;++N){const x=N/S,W=Math.exp(-x*x/2);h.push(W),N===0?D+=W:N<w&&(D+=2*W)}for(let N=0;N<h.length;N++)h[N]=h[N]/D;s.envMap.value=A.texture,s.samples.value=w,s.weights.value=h,s.latitudinal.value=i==="latitudinal",E&&(s.poleAxis.value=E);const{_lodMax:y}=this;s.dTheta.value=r,s.mipInt.value=y-g;const k=this._sizeLods[B],l=3*k*(B>y-gB?B-y+gB:0),K=4*(this._cubeSize-k);wi(I,l,K,3*k,2*k),o.setRenderTarget(I),o.render(a,ko)}}function Fc(C){const A=[],I=[],g=[];let B=C;const Q=C-gB+1+Ja.length;for(let i=0;i<Q;i++){const E=Math.pow(2,B);I.push(E);let o=1/E;i>C-gB?o=Ja[i-C+gB-1]:i===0&&(o=0),g.push(o);const t=1/(E-1),e=-t/2,a=1+t/2,s=[e,e,a,e,a,a,e,e,a,a,e,a],n=6,r=6,S=3,w=2,h=1,D=new Float32Array(S*r*n),y=new Float32Array(w*r*n),k=new Float32Array(h*r*n);for(let K=0;K<n;K++){const N=K%3*2/3-1,x=K>2?0:-1,W=[N,x,0,N+2/3,x,0,N+2/3,x+1,0,N,x,0,N+2/3,x+1,0,N,x+1,0];D.set(W,S*r*K),y.set(s,w*r*K);const u=[K,K,K,K,K,K];k.set(u,h*r*K)}const l=new CI;l.setAttribute("position",new SI(D,S)),l.setAttribute("uv",new SI(y,w)),l.setAttribute("faceIndex",new SI(k,h)),A.push(l),B>gB&&B--}return{lodPlanes:A,sizeLods:I,sigmas:g}}function pa(C,A,I){const g=new OI(C,A,I);return g.texture.mapping=jQ,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function wi(C,A,I,g,B){C.viewport.set(A,I,g,B),C.scissor.set(A,I,g,B)}function Kc(C,A,I){const g=new Float32Array(GC),B=new F(0,1,0);return new Cg({name:"SphericalGaussianBlur",defines:{n:GC,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${C}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:B}},vertexShader:Uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Og,depthTest:!1,depthWrite:!1})}function Na(){return new Cg({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Og,depthTest:!1,depthWrite:!1})}function qa(){return new Cg({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Og,depthTest:!1,depthWrite:!1})}function Uo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Rc(C){let A=new WeakMap,I=null;function g(E){if(E&&E.isTexture){const o=E.mapping,t=o===qE||o===dE,e=o===qC||o===dC;if(t||e)if(E.isRenderTargetTexture&&E.needsPMREMUpdate===!0){E.needsPMREMUpdate=!1;let a=A.get(E);return I===null&&(I=new Ra(C)),a=t?I.fromEquirectangular(E,a):I.fromCubemap(E,a),A.set(E,a),a.texture}else{if(A.has(E))return A.get(E).texture;{const a=E.image;if(t&&a&&a.height>0||e&&a&&B(a)){I===null&&(I=new Ra(C));const s=t?I.fromEquirectangular(E):I.fromCubemap(E);return A.set(E,s),E.addEventListener("dispose",Q),s.texture}else return null}}}return E}function B(E){let o=0;const t=6;for(let e=0;e<t;e++)E[e]!==void 0&&o++;return o===t}function Q(E){const o=E.target;o.removeEventListener("dispose",Q);const t=A.get(o);t!==void 0&&(A.delete(o),t.dispose())}function i(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:g,dispose:i}}function pc(C){const A={};function I(g){if(A[g]!==void 0)return A[g];let B;switch(g){case"WEBGL_depth_texture":B=C.getExtension("WEBGL_depth_texture")||C.getExtension("MOZ_WEBGL_depth_texture")||C.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":B=C.getExtension("EXT_texture_filter_anisotropic")||C.getExtension("MOZ_EXT_texture_filter_anisotropic")||C.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":B=C.getExtension("WEBGL_compressed_texture_s3tc")||C.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||C.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":B=C.getExtension("WEBGL_compressed_texture_pvrtc")||C.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:B=C.getExtension(g)}return A[g]=B,B}return{has:function(g){return I(g)!==null},init:function(g){g.isWebGL2?I("EXT_color_buffer_float"):(I("WEBGL_depth_texture"),I("OES_texture_float"),I("OES_texture_half_float"),I("OES_texture_half_float_linear"),I("OES_standard_derivatives"),I("OES_element_index_uint"),I("OES_vertex_array_object"),I("ANGLE_instanced_arrays")),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture")},get:function(g){const B=I(g);return B===null&&console.warn("THREE.WebGLRenderer: "+g+" extension not supported."),B}}}function Nc(C,A,I,g){const B={},Q=new WeakMap;function i(a){const s=a.target;s.index!==null&&A.remove(s.index);for(const r in s.attributes)A.remove(s.attributes[r]);s.removeEventListener("dispose",i),delete B[s.id];const n=Q.get(s);n&&(A.remove(n),Q.delete(s)),g.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,I.memory.geometries--}function E(a,s){return B[s.id]===!0||(s.addEventListener("dispose",i),B[s.id]=!0,I.memory.geometries++),s}function o(a){const s=a.attributes;for(const r in s)A.update(s[r],34962);const n=a.morphAttributes;for(const r in n){const S=n[r];for(let w=0,h=S.length;w<h;w++)A.update(S[w],34962)}}function t(a){const s=[],n=a.index,r=a.attributes.position;let S=0;if(n!==null){const D=n.array;S=n.version;for(let y=0,k=D.length;y<k;y+=3){const l=D[y+0],K=D[y+1],N=D[y+2];s.push(l,K,K,N,N,l)}}else{const D=r.array;S=r.version;for(let y=0,k=D.length/3-1;y<k;y+=3){const l=y+0,K=y+1,N=y+2;s.push(l,K,K,N,N,l)}}const w=new(Ea(s)?wa:ka)(s,1);w.version=S;const h=Q.get(a);h&&A.remove(h),Q.set(a,w)}function e(a){const s=Q.get(a);if(s){const n=a.index;n!==null&&s.version<n.version&&t(a)}else t(a);return Q.get(a)}return{get:E,update:o,getWireframeAttribute:e}}function qc(C,A,I,g){const B=g.isWebGL2;let Q;function i(s){Q=s}let E,o;function t(s){E=s.type,o=s.bytesPerElement}function e(s,n){C.drawElements(Q,n,E,s*o),I.update(n,Q,1)}function a(s,n,r){if(r===0)return;let S,w;if(B)S=C,w="drawElementsInstanced";else if(S=A.get("ANGLE_instanced_arrays"),w="drawElementsInstancedANGLE",S===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[w](Q,n,E,s*o,r),I.update(n,Q,r)}this.setMode=i,this.setIndex=t,this.render=e,this.renderInstances=a}function dc(C){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function g(Q,i,E){switch(I.calls++,i){case 4:I.triangles+=E*(Q/3);break;case 1:I.lines+=E*(Q/2);break;case 3:I.lines+=E*(Q-1);break;case 2:I.lines+=E*Q;break;case 0:I.points+=E*Q;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i);break}}function B(){I.frame++,I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:B,update:g}}function fc(C,A){return C[0]-A[0]}function uc(C,A){return Math.abs(A[1])-Math.abs(C[1])}function yo(C,A){let I=1;const g=A.isInterleavedBufferAttribute?A.data.array:A.array;g instanceof Int8Array?I=127:g instanceof Int16Array?I=32767:g instanceof Int32Array?I=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",g),C.divideScalar(I)}function Yc(C,A,I){const g={},B=new Float32Array(8),Q=new WeakMap,i=new XA,E=[];for(let t=0;t<8;t++)E[t]=[t,0];function o(t,e,a,s){const n=t.morphTargetInfluences;if(A.isWebGL2===!0){const r=e.morphAttributes.position||e.morphAttributes.normal||e.morphAttributes.color,S=r!==void 0?r.length:0;let w=Q.get(e);if(w===void 0||w.count!==S){let H=function(){f.dispose(),Q.delete(e),e.removeEventListener("dispose",H)};w!==void 0&&w.texture.dispose();const y=e.morphAttributes.position!==void 0,k=e.morphAttributes.normal!==void 0,l=e.morphAttributes.color!==void 0,K=e.morphAttributes.position||[],N=e.morphAttributes.normal||[],x=e.morphAttributes.color||[];let W=0;y===!0&&(W=1),k===!0&&(W=2),l===!0&&(W=3);let u=e.attributes.position.count*W,G=1;u>A.maxTextureSize&&(G=Math.ceil(u/A.maxTextureSize),u=A.maxTextureSize);const R=new Float32Array(u*G*4*S),f=new Ii(R,u,G,S);f.format=fI,f.type=sg,f.needsUpdate=!0;const Y=W*4;for(let m=0;m<S;m++){const T=K[m],q=N[m],V=x[m],gA=u*G*4*m;for(let AA=0;AA<T.count;AA++){const BA=AA*Y;y===!0&&(i.fromBufferAttribute(T,AA),T.normalized===!0&&yo(i,T),R[gA+BA+0]=i.x,R[gA+BA+1]=i.y,R[gA+BA+2]=i.z,R[gA+BA+3]=0),k===!0&&(i.fromBufferAttribute(q,AA),q.normalized===!0&&yo(i,q),R[gA+BA+4]=i.x,R[gA+BA+5]=i.y,R[gA+BA+6]=i.z,R[gA+BA+7]=0),l===!0&&(i.fromBufferAttribute(V,AA),V.normalized===!0&&yo(i,q),R[gA+BA+8]=i.x,R[gA+BA+9]=i.y,R[gA+BA+10]=i.z,R[gA+BA+11]=V.itemSize===4?i.w:1)}}w={count:S,texture:f,size:new IA(u,G)},Q.set(e,w),e.addEventListener("dispose",H)}let h=0;for(let y=0;y<n.length;y++)h+=n[y];const D=e.morphTargetsRelative?1:1-h;s.getUniforms().setValue(C,"morphTargetBaseInfluence",D),s.getUniforms().setValue(C,"morphTargetInfluences",n),s.getUniforms().setValue(C,"morphTargetsTexture",w.texture,I),s.getUniforms().setValue(C,"morphTargetsTextureSize",w.size)}else{const r=n===void 0?0:n.length;let S=g[e.id];if(S===void 0||S.length!==r){S=[];for(let k=0;k<r;k++)S[k]=[k,0];g[e.id]=S}for(let k=0;k<r;k++){const l=S[k];l[0]=k,l[1]=n[k]}S.sort(uc);for(let k=0;k<8;k++)k<r&&S[k][1]?(E[k][0]=S[k][0],E[k][1]=S[k][1]):(E[k][0]=Number.MAX_SAFE_INTEGER,E[k][1]=0);E.sort(fc);const w=e.morphAttributes.position,h=e.morphAttributes.normal;let D=0;for(let k=0;k<8;k++){const l=E[k],K=l[0],N=l[1];K!==Number.MAX_SAFE_INTEGER&&N?(w&&e.getAttribute("morphTarget"+k)!==w[K]&&e.setAttribute("morphTarget"+k,w[K]),h&&e.getAttribute("morphNormal"+k)!==h[K]&&e.setAttribute("morphNormal"+k,h[K]),B[k]=N,D+=N):(w&&e.hasAttribute("morphTarget"+k)===!0&&e.deleteAttribute("morphTarget"+k),h&&e.hasAttribute("morphNormal"+k)===!0&&e.deleteAttribute("morphNormal"+k),B[k]=0)}const y=e.morphTargetsRelative?1:1-D;s.getUniforms().setValue(C,"morphTargetBaseInfluence",y),s.getUniforms().setValue(C,"morphTargetInfluences",B)}}return{update:o}}function Lc(C,A,I,g){let B=new WeakMap;function Q(o){const t=g.render.frame,e=o.geometry,a=A.get(o,e);return B.get(a)!==t&&(A.update(a),B.set(a,t)),o.isInstancedMesh&&(o.hasEventListener("dispose",E)===!1&&o.addEventListener("dispose",E),I.update(o.instanceMatrix,34962),o.instanceColor!==null&&I.update(o.instanceColor,34962)),a}function i(){B=new WeakMap}function E(o){const t=o.target;t.removeEventListener("dispose",E),I.remove(t.instanceMatrix),t.instanceColor!==null&&I.remove(t.instanceColor)}return{update:Q,dispose:i}}const da=new GI,fa=new Ii,ua=new zE,Ya=new li,La=[],Ha=[],ma=new Float32Array(16),Ta=new Float32Array(9),xa=new Float32Array(4);function BB(C,A,I){const g=C[0];if(g<=0||g>0)return C;const B=A*I;let Q=La[B];if(Q===void 0&&(Q=new Float32Array(B),La[B]=Q),A!==0){g.toArray(Q,0);for(let i=1,E=0;i!==A;++i)E+=I,C[i].toArray(Q,E)}return Q}function qI(C,A){if(C.length!==A.length)return!1;for(let I=0,g=C.length;I<g;I++)if(C[I]!==A[I])return!1;return!0}function RI(C,A){for(let I=0,g=A.length;I<g;I++)C[I]=A[I]}function Ui(C,A){let I=Ha[A];I===void 0&&(I=new Int32Array(A),Ha[A]=I);for(let g=0;g!==A;++g)I[g]=C.allocateTextureUnit();return I}function Hc(C,A){const I=this.cache;I[0]!==A&&(C.uniform1f(this.addr,A),I[0]=A)}function mc(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(C.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(qI(I,A))return;C.uniform2fv(this.addr,A),RI(I,A)}}function Tc(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(C.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(C.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(qI(I,A))return;C.uniform3fv(this.addr,A),RI(I,A)}}function xc(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(C.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(qI(I,A))return;C.uniform4fv(this.addr,A),RI(I,A)}}function Oc(C,A){const I=this.cache,g=A.elements;if(g===void 0){if(qI(I,A))return;C.uniformMatrix2fv(this.addr,!1,A),RI(I,A)}else{if(qI(I,g))return;xa.set(g),C.uniformMatrix2fv(this.addr,!1,xa),RI(I,g)}}function bc(C,A){const I=this.cache,g=A.elements;if(g===void 0){if(qI(I,A))return;C.uniformMatrix3fv(this.addr,!1,A),RI(I,A)}else{if(qI(I,g))return;Ta.set(g),C.uniformMatrix3fv(this.addr,!1,Ta),RI(I,g)}}function vc(C,A){const I=this.cache,g=A.elements;if(g===void 0){if(qI(I,A))return;C.uniformMatrix4fv(this.addr,!1,A),RI(I,A)}else{if(qI(I,g))return;ma.set(g),C.uniformMatrix4fv(this.addr,!1,ma),RI(I,g)}}function Zc(C,A){const I=this.cache;I[0]!==A&&(C.uniform1i(this.addr,A),I[0]=A)}function Wc(C,A){const I=this.cache;qI(I,A)||(C.uniform2iv(this.addr,A),RI(I,A))}function Vc(C,A){const I=this.cache;qI(I,A)||(C.uniform3iv(this.addr,A),RI(I,A))}function jc(C,A){const I=this.cache;qI(I,A)||(C.uniform4iv(this.addr,A),RI(I,A))}function Pc(C,A){const I=this.cache;I[0]!==A&&(C.uniform1ui(this.addr,A),I[0]=A)}function _c(C,A){const I=this.cache;qI(I,A)||(C.uniform2uiv(this.addr,A),RI(I,A))}function Xc(C,A){const I=this.cache;qI(I,A)||(C.uniform3uiv(this.addr,A),RI(I,A))}function zc(C,A){const I=this.cache;qI(I,A)||(C.uniform4uiv(this.addr,A),RI(I,A))}function $c(C,A,I){const g=this.cache,B=I.allocateTextureUnit();g[0]!==B&&(C.uniform1i(this.addr,B),g[0]=B),I.setTexture2D(A||da,B)}function Al(C,A,I){const g=this.cache,B=I.allocateTextureUnit();g[0]!==B&&(C.uniform1i(this.addr,B),g[0]=B),I.setTexture3D(A||ua,B)}function Il(C,A,I){const g=this.cache,B=I.allocateTextureUnit();g[0]!==B&&(C.uniform1i(this.addr,B),g[0]=B),I.setTextureCube(A||Ya,B)}function gl(C,A,I){const g=this.cache,B=I.allocateTextureUnit();g[0]!==B&&(C.uniform1i(this.addr,B),g[0]=B),I.setTexture2DArray(A||fa,B)}function Cl(C){switch(C){case 5126:return Hc;case 35664:return mc;case 35665:return Tc;case 35666:return xc;case 35674:return Oc;case 35675:return bc;case 35676:return vc;case 5124:case 35670:return Zc;case 35667:case 35671:return Wc;case 35668:case 35672:return Vc;case 35669:case 35673:return jc;case 5125:return Pc;case 36294:return _c;case 36295:return Xc;case 36296:return zc;case 35678:case 36198:case 36298:case 36306:case 35682:return $c;case 35679:case 36299:case 36307:return Al;case 35680:case 36300:case 36308:case 36293:return Il;case 36289:case 36303:case 36311:case 36292:return gl}}function Bl(C,A){C.uniform1fv(this.addr,A)}function Ql(C,A){const I=BB(A,this.size,2);C.uniform2fv(this.addr,I)}function il(C,A){const I=BB(A,this.size,3);C.uniform3fv(this.addr,I)}function El(C,A){const I=BB(A,this.size,4);C.uniform4fv(this.addr,I)}function ol(C,A){const I=BB(A,this.size,4);C.uniformMatrix2fv(this.addr,!1,I)}function tl(C,A){const I=BB(A,this.size,9);C.uniformMatrix3fv(this.addr,!1,I)}function el(C,A){const I=BB(A,this.size,16);C.uniformMatrix4fv(this.addr,!1,I)}function al(C,A){C.uniform1iv(this.addr,A)}function sl(C,A){C.uniform2iv(this.addr,A)}function nl(C,A){C.uniform3iv(this.addr,A)}function Dl(C,A){C.uniform4iv(this.addr,A)}function hl(C,A){C.uniform1uiv(this.addr,A)}function rl(C,A){C.uniform2uiv(this.addr,A)}function Sl(C,A){C.uniform3uiv(this.addr,A)}function cl(C,A){C.uniform4uiv(this.addr,A)}function ll(C,A,I){const g=A.length,B=Ui(I,g);C.uniform1iv(this.addr,B);for(let Q=0;Q!==g;++Q)I.setTexture2D(A[Q]||da,B[Q])}function Gl(C,A,I){const g=A.length,B=Ui(I,g);C.uniform1iv(this.addr,B);for(let Q=0;Q!==g;++Q)I.setTexture3D(A[Q]||ua,B[Q])}function kl(C,A,I){const g=A.length,B=Ui(I,g);C.uniform1iv(this.addr,B);for(let Q=0;Q!==g;++Q)I.setTextureCube(A[Q]||Ya,B[Q])}function wl(C,A,I){const g=A.length,B=Ui(I,g);C.uniform1iv(this.addr,B);for(let Q=0;Q!==g;++Q)I.setTexture2DArray(A[Q]||fa,B[Q])}function Ul(C){switch(C){case 5126:return Bl;case 35664:return Ql;case 35665:return il;case 35666:return El;case 35674:return ol;case 35675:return tl;case 35676:return el;case 5124:case 35670:return al;case 35667:case 35671:return sl;case 35668:case 35672:return nl;case 35669:case 35673:return Dl;case 5125:return hl;case 36294:return rl;case 36295:return Sl;case 36296:return cl;case 35678:case 36198:case 36298:case 36306:case 35682:return ll;case 35679:case 36299:case 36307:return Gl;case 35680:case 36300:case 36308:case 36293:return kl;case 36289:case 36303:case 36311:case 36292:return wl}}function yl(C,A,I){this.id=C,this.addr=I,this.cache=[],this.setValue=Cl(A.type)}function Oa(C,A,I){this.id=C,this.addr=I,this.cache=[],this.size=A.size,this.setValue=Ul(A.type)}Oa.prototype.updateCache=function(C){const A=this.cache;C instanceof Float32Array&&A.length!==C.length&&(this.cache=new Float32Array(C.length)),RI(A,C)};function ba(C){this.id=C,this.seq=[],this.map={}}ba.prototype.setValue=function(C,A,I){const g=this.seq;for(let B=0,Q=g.length;B!==Q;++B){const i=g[B];i.setValue(C,A[i.id],I)}};const Mo=/(\w+)(\])?(\[|\.)?/g;function va(C,A){C.seq.push(A),C.map[A.id]=A}function Ml(C,A,I){const g=C.name,B=g.length;for(Mo.lastIndex=0;;){const Q=Mo.exec(g),i=Mo.lastIndex;let E=Q[1];const o=Q[2]==="]",t=Q[3];if(o&&(E=E|0),t===void 0||t==="["&&i+2===B){va(I,t===void 0?new yl(E,C,A):new Oa(E,C,A));break}else{let a=I.map[E];a===void 0&&(a=new ba(E),va(I,a)),I=a}}}function Xg(C,A){this.seq=[],this.map={};const I=C.getProgramParameter(A,35718);for(let g=0;g<I;++g){const B=C.getActiveUniform(A,g),Q=C.getUniformLocation(A,B.name);Ml(B,Q,this)}}Xg.prototype.setValue=function(C,A,I,g){const B=this.map[A];B!==void 0&&B.setValue(C,I,g)},Xg.prototype.setOptional=function(C,A,I){const g=A[I];g!==void 0&&this.setValue(C,I,g)},Xg.upload=function(C,A,I,g){for(let B=0,Q=A.length;B!==Q;++B){const i=A[B],E=I[i.id];E.needsUpdate!==!1&&i.setValue(C,E.value,g)}},Xg.seqWithValue=function(C,A){const I=[];for(let g=0,B=C.length;g!==B;++g){const Q=C[g];Q.id in A&&I.push(Q)}return I};function Za(C,A,I){const g=C.createShader(A);return C.shaderSource(g,I),C.compileShader(g),g}let Jl=0;function Fl(C){const A=C.split(`
`);for(let I=0;I<A.length;I++)A[I]=I+1+": "+A[I];return A.join(`
`)}function Kl(C){switch(C){case Dg:return["Linear","( value )"];case gI:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",C),["Linear","( value )"]}}function Wa(C,A,I){const g=C.getShaderParameter(A,35713),B=C.getShaderInfoLog(A).trim();return g&&B===""?"":I.toUpperCase()+`

`+B+`

`+Fl(C.getShaderSource(A))}function Rl(C,A){const I=Kl(A);return"vec4 "+C+"( vec4 value ) { return LinearTo"+I[0]+I[1]+"; }"}function pl(C,A){let I;switch(A){case Rh:I="Linear";break;case ph:I="Reinhard";break;case Nh:I="OptimizedCineon";break;case qh:I="ACESFilmic";break;case dh:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+C+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}function Nl(C){return[C.extensionDerivatives||!!C.envMapCubeUVHeight||C.bumpMap||C.tangentSpaceNormalMap||C.clearcoatNormalMap||C.flatShading||C.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(C.extensionFragDepth||C.logarithmicDepthBuffer)&&C.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",C.extensionDrawBuffers&&C.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(C.extensionShaderTextureLOD||C.envMap||C.transmission)&&C.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zB).join(`
`)}function ql(C){const A=[];for(const I in C){const g=C[I];g!==!1&&A.push("#define "+I+" "+g)}return A.join(`
`)}function dl(C,A){const I={},g=C.getProgramParameter(A,35721);for(let B=0;B<g;B++){const Q=C.getActiveAttrib(A,B),i=Q.name;let E=1;Q.type===35674&&(E=2),Q.type===35675&&(E=3),Q.type===35676&&(E=4),I[i]={type:Q.type,location:C.getAttribLocation(A,i),locationSize:E}}return I}function zB(C){return C!==""}function Va(C,A){return C.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function ja(C,A){return C.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const fl=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jo(C){return C.replace(fl,ul)}function ul(C,A){const I=mA[A];if(I===void 0)throw new Error("Can not resolve #include <"+A+">");return Jo(I)}const Yl=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Ll=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pa(C){return C.replace(Ll,_a).replace(Yl,Hl)}function Hl(C,A,I,g){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),_a(C,A,I,g)}function _a(C,A,I,g){let B="";for(let Q=parseInt(A);Q<parseInt(I);Q++)B+=g.replace(/\[\s*i\s*\]/g,"[ "+Q+" ]").replace(/UNROLLED_LOOP_INDEX/g,Q);return B}function Xa(C){let A="precision "+C.precision+` float;
precision `+C.precision+" int;";return C.precision==="highp"?A+=`
#define HIGH_PRECISION`:C.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:C.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function ml(C){let A="SHADOWMAP_TYPE_BASIC";return C.shadowMapType===Me?A="SHADOWMAP_TYPE_PCF":C.shadowMapType===Eh?A="SHADOWMAP_TYPE_PCF_SOFT":C.shadowMapType===OB&&(A="SHADOWMAP_TYPE_VSM"),A}function Tl(C){let A="ENVMAP_TYPE_CUBE";if(C.envMap)switch(C.envMapMode){case qC:case dC:A="ENVMAP_TYPE_CUBE";break;case jQ:case fE:A="ENVMAP_TYPE_CUBE_UV";break}return A}function xl(C){let A="ENVMAP_MODE_REFLECTION";if(C.envMap)switch(C.envMapMode){case dC:case fE:A="ENVMAP_MODE_REFRACTION";break}return A}function Ol(C){let A="ENVMAP_BLENDING_NONE";if(C.envMap)switch(C.combine){case VQ:A="ENVMAP_BLENDING_MULTIPLY";break;case Fh:A="ENVMAP_BLENDING_MIX";break;case Kh:A="ENVMAP_BLENDING_ADD";break}return A}function bl(C){const A=C.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A/32+1)+3,g=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:g,maxMip:I}}function vl(C,A,I,g){const B=C.getContext(),Q=I.defines;let i=I.vertexShader,E=I.fragmentShader;const o=ml(I),t=Tl(I),e=xl(I),a=Ol(I),s=bl(I),n=I.isWebGL2?"":Nl(I),r=ql(Q),S=B.createProgram();let w,h,D=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(w=[r].filter(zB).join(`
`),w.length>0&&(w+=`
`),h=[n,r].filter(zB).join(`
`),h.length>0&&(h+=`
`)):(w=[Xa(I),"#define SHADER_NAME "+I.shaderName,r,I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+I.maxBones,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+e:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMap&&I.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",I.normalMap&&I.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.displacementMap&&I.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",I.specularColorMap?"#define USE_SPECULARCOLORMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEENCOLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",I.vertexTangents?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUvs?"#define USE_UV":"",I.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.useVertexTexture?"#define BONE_TEXTURE":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors&&I.isWebGL2?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zB).join(`
`),h=[n,Xa(I),"#define SHADER_NAME "+I.shaderName,r,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+t:"",I.envMap?"#define "+e:"",I.envMap?"#define "+a:"",s?"#define CUBEUV_TEXEL_WIDTH "+s.texelWidth:"",s?"#define CUBEUV_TEXEL_HEIGHT "+s.texelHeight:"",s?"#define CUBEUV_MAX_MIP "+s.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMap&&I.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",I.normalMap&&I.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",I.specularColorMap?"#define USE_SPECULARCOLORMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEENCOLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",I.vertexTangents?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUvs?"#define USE_UV":"",I.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==bg?"#define TONE_MAPPING":"",I.toneMapping!==bg?mA.tonemapping_pars_fragment:"",I.toneMapping!==bg?pl("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",mA.encodings_pars_fragment,Rl("linearToOutputTexel",I.outputEncoding),I.depthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(zB).join(`
`)),i=Jo(i),i=Va(i,I),i=ja(i,I),E=Jo(E),E=Va(E,I),E=ja(E,I),i=Pa(i),E=Pa(E),I.isWebGL2&&I.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,w=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+w,h=["#define varying in",I.glslVersion===Qa?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===Qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=D+w+i,k=D+h+E,l=Za(B,35633,y),K=Za(B,35632,k);if(B.attachShader(S,l),B.attachShader(S,K),I.index0AttributeName!==void 0?B.bindAttribLocation(S,0,I.index0AttributeName):I.morphTargets===!0&&B.bindAttribLocation(S,0,"position"),B.linkProgram(S),C.debug.checkShaderErrors){const W=B.getProgramInfoLog(S).trim(),u=B.getShaderInfoLog(l).trim(),G=B.getShaderInfoLog(K).trim();let R=!0,f=!0;if(B.getProgramParameter(S,35714)===!1){R=!1;const Y=Wa(B,l,"vertex"),H=Wa(B,K,"fragment");console.error("THREE.WebGLProgram: Shader Error "+B.getError()+" - VALIDATE_STATUS "+B.getProgramParameter(S,35715)+`

Program Info Log: `+W+`
`+Y+`
`+H)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(u===""||G==="")&&(f=!1);f&&(this.diagnostics={runnable:R,programLog:W,vertexShader:{log:u,prefix:w},fragmentShader:{log:G,prefix:h}})}B.deleteShader(l),B.deleteShader(K);let N;this.getUniforms=function(){return N===void 0&&(N=new Xg(B,S)),N};let x;return this.getAttributes=function(){return x===void 0&&(x=dl(B,S)),x},this.destroy=function(){g.releaseStatesOfProgram(this),B.deleteProgram(S),this.program=void 0},this.name=I.shaderName,this.id=Jl++,this.cacheKey=A,this.usedTimes=1,this.program=S,this.vertexShader=l,this.fragmentShader=K,this}let Zl=0;class Wl{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,g=A.fragmentShader,B=this._getShaderStage(I),Q=this._getShaderStage(g),i=this._getShaderCacheForMaterial(A);return i.has(B)===!1&&(i.add(B),B.usedTimes++),i.has(Q)===!1&&(i.add(Q),Q.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const g of I)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;return I.has(A)===!1&&I.set(A,new Set),I.get(A)}_getShaderStage(A){const I=this.shaderCache;if(I.has(A)===!1){const g=new Vl;I.set(A,g)}return I.get(A)}}class Vl{constructor(){this.id=Zl++,this.usedTimes=0}}function jl(C,A,I,g,B,Q,i){const E=new Da,o=new Wl,t=[],e=B.isWebGL2,a=B.logarithmicDepthBuffer,s=B.floatVertexTextures,n=B.maxVertexUniforms,r=B.vertexTextures;let S=B.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(G){const f=G.skeleton.bones;if(s)return 1024;{const H=Math.floor((n-20)/4),m=Math.min(H,f.length);return m<f.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+f.length+" bones. This GPU supports "+m+"."),0):m}}function D(G,R,f,Y,H){const m=Y.fog,T=H.geometry,q=G.isMeshStandardMaterial?Y.environment:null,V=(G.isMeshStandardMaterial?I:A).get(G.envMap||q),gA=!!V&&(V.mapping===jQ||V.mapping===fE)?V.image.height:null,AA=w[G.type],BA=H.isSkinnedMesh?h(H):0;G.precision!==null&&(S=B.getMaxPrecision(G.precision),S!==G.precision&&console.warn("THREE.WebGLProgram.getParameters:",G.precision,"not supported, using",S,"instead."));const UA=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,ZA=UA!==void 0?UA.length:0;let MA=0;T.morphAttributes.position!==void 0&&(MA=1),T.morphAttributes.normal!==void 0&&(MA=2),T.morphAttributes.color!==void 0&&(MA=3);let _,WA,uA,rA;if(AA){const iA=rg[AA];_=iA.vertexShader,WA=iA.fragmentShader}else _=G.vertexShader,WA=G.fragmentShader,o.update(G),uA=o.getVertexShaderID(G),rA=o.getFragmentShaderID(G);const SA=C.getRenderTarget(),TA=G.alphaTest>0,O=G.clearcoat>0;return{isWebGL2:e,shaderID:AA,shaderName:G.type,vertexShader:_,fragmentShader:WA,defines:G.defines,customVertexShaderID:uA,customFragmentShaderID:rA,isRawShaderMaterial:G.isRawShaderMaterial===!0,glslVersion:G.glslVersion,precision:S,instancing:H.isInstancedMesh===!0,instancingColor:H.isInstancedMesh===!0&&H.instanceColor!==null,supportsVertexTextures:r,outputEncoding:SA===null?C.outputEncoding:SA.isXRRenderTarget===!0?SA.texture.encoding:Dg,map:!!G.map,matcap:!!G.matcap,envMap:!!V,envMapMode:V&&V.mapping,envMapCubeUVHeight:gA,lightMap:!!G.lightMap,aoMap:!!G.aoMap,emissiveMap:!!G.emissiveMap,bumpMap:!!G.bumpMap,normalMap:!!G.normalMap,objectSpaceNormalMap:G.normalMapType===gr,tangentSpaceNormalMap:G.normalMapType===HC,decodeVideoTexture:!!G.map&&G.map.isVideoTexture===!0&&G.map.encoding===gI,clearcoat:O,clearcoatMap:O&&!!G.clearcoatMap,clearcoatRoughnessMap:O&&!!G.clearcoatRoughnessMap,clearcoatNormalMap:O&&!!G.clearcoatNormalMap,displacementMap:!!G.displacementMap,roughnessMap:!!G.roughnessMap,metalnessMap:!!G.metalnessMap,specularMap:!!G.specularMap,specularIntensityMap:!!G.specularIntensityMap,specularColorMap:!!G.specularColorMap,opaque:G.transparent===!1&&G.blending===pC,alphaMap:!!G.alphaMap,alphaTest:TA,gradientMap:!!G.gradientMap,sheen:G.sheen>0,sheenColorMap:!!G.sheenColorMap,sheenRoughnessMap:!!G.sheenRoughnessMap,transmission:G.transmission>0,transmissionMap:!!G.transmissionMap,thicknessMap:!!G.thicknessMap,combine:G.combine,vertexTangents:!!G.normalMap&&!!T.attributes.tangent,vertexColors:G.vertexColors,vertexAlphas:G.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,vertexUvs:!!G.map||!!G.bumpMap||!!G.normalMap||!!G.specularMap||!!G.alphaMap||!!G.emissiveMap||!!G.roughnessMap||!!G.metalnessMap||!!G.clearcoatMap||!!G.clearcoatRoughnessMap||!!G.clearcoatNormalMap||!!G.displacementMap||!!G.transmissionMap||!!G.thicknessMap||!!G.specularIntensityMap||!!G.specularColorMap||!!G.sheenColorMap||!!G.sheenRoughnessMap,uvsVertexOnly:!(!!G.map||!!G.bumpMap||!!G.normalMap||!!G.specularMap||!!G.alphaMap||!!G.emissiveMap||!!G.roughnessMap||!!G.metalnessMap||!!G.clearcoatNormalMap||G.transmission>0||!!G.transmissionMap||!!G.thicknessMap||!!G.specularIntensityMap||!!G.specularColorMap||G.sheen>0||!!G.sheenColorMap||!!G.sheenRoughnessMap)&&!!G.displacementMap,fog:!!m,useFog:G.fog,fogExp2:m&&m.isFogExp2,flatShading:!!G.flatShading,sizeAttenuation:G.sizeAttenuation,logarithmicDepthBuffer:a,skinning:H.isSkinnedMesh===!0&&BA>0,maxBones:BA,useVertexTexture:s,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:ZA,morphTextureStride:MA,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numClippingPlanes:i.numPlanes,numClipIntersection:i.numIntersection,dithering:G.dithering,shadowMapEnabled:C.shadowMap.enabled&&f.length>0,shadowMapType:C.shadowMap.type,toneMapping:G.toneMapped?C.toneMapping:bg,physicallyCorrectLights:C.physicallyCorrectLights,premultipliedAlpha:G.premultipliedAlpha,doubleSided:G.side===RC,flipSided:G.side===hI,depthPacking:G.depthPacking!==void 0?G.depthPacking:!1,index0AttributeName:G.index0AttributeName,extensionDerivatives:G.extensions&&G.extensions.derivatives,extensionFragDepth:G.extensions&&G.extensions.fragDepth,extensionDrawBuffers:G.extensions&&G.extensions.drawBuffers,extensionShaderTextureLOD:G.extensions&&G.extensions.shaderTextureLOD,rendererExtensionFragDepth:e||g.has("EXT_frag_depth"),rendererExtensionDrawBuffers:e||g.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:e||g.has("EXT_shader_texture_lod"),customProgramCacheKey:G.customProgramCacheKey()}}function y(G){const R=[];if(G.shaderID?R.push(G.shaderID):(R.push(G.customVertexShaderID),R.push(G.customFragmentShaderID)),G.defines!==void 0)for(const f in G.defines)R.push(f),R.push(G.defines[f]);return G.isRawShaderMaterial===!1&&(k(R,G),l(R,G),R.push(C.outputEncoding)),R.push(G.customProgramCacheKey),R.join()}function k(G,R){G.push(R.precision),G.push(R.outputEncoding),G.push(R.envMapMode),G.push(R.envMapCubeUVHeight),G.push(R.combine),G.push(R.vertexUvs),G.push(R.fogExp2),G.push(R.sizeAttenuation),G.push(R.maxBones),G.push(R.morphTargetsCount),G.push(R.morphAttributeCount),G.push(R.numDirLights),G.push(R.numPointLights),G.push(R.numSpotLights),G.push(R.numHemiLights),G.push(R.numRectAreaLights),G.push(R.numDirLightShadows),G.push(R.numPointLightShadows),G.push(R.numSpotLightShadows),G.push(R.shadowMapType),G.push(R.toneMapping),G.push(R.numClippingPlanes),G.push(R.numClipIntersection)}function l(G,R){E.disableAll(),R.isWebGL2&&E.enable(0),R.supportsVertexTextures&&E.enable(1),R.instancing&&E.enable(2),R.instancingColor&&E.enable(3),R.map&&E.enable(4),R.matcap&&E.enable(5),R.envMap&&E.enable(6),R.lightMap&&E.enable(7),R.aoMap&&E.enable(8),R.emissiveMap&&E.enable(9),R.bumpMap&&E.enable(10),R.normalMap&&E.enable(11),R.objectSpaceNormalMap&&E.enable(12),R.tangentSpaceNormalMap&&E.enable(13),R.clearcoat&&E.enable(14),R.clearcoatMap&&E.enable(15),R.clearcoatRoughnessMap&&E.enable(16),R.clearcoatNormalMap&&E.enable(17),R.displacementMap&&E.enable(18),R.specularMap&&E.enable(19),R.roughnessMap&&E.enable(20),R.metalnessMap&&E.enable(21),R.gradientMap&&E.enable(22),R.alphaMap&&E.enable(23),R.alphaTest&&E.enable(24),R.vertexColors&&E.enable(25),R.vertexAlphas&&E.enable(26),R.vertexUvs&&E.enable(27),R.vertexTangents&&E.enable(28),R.uvsVertexOnly&&E.enable(29),R.fog&&E.enable(30),G.push(E.mask),E.disableAll(),R.useFog&&E.enable(0),R.flatShading&&E.enable(1),R.logarithmicDepthBuffer&&E.enable(2),R.skinning&&E.enable(3),R.useVertexTexture&&E.enable(4),R.morphTargets&&E.enable(5),R.morphNormals&&E.enable(6),R.morphColors&&E.enable(7),R.premultipliedAlpha&&E.enable(8),R.shadowMapEnabled&&E.enable(9),R.physicallyCorrectLights&&E.enable(10),R.doubleSided&&E.enable(11),R.flipSided&&E.enable(12),R.depthPacking&&E.enable(13),R.dithering&&E.enable(14),R.specularIntensityMap&&E.enable(15),R.specularColorMap&&E.enable(16),R.transmission&&E.enable(17),R.transmissionMap&&E.enable(18),R.thicknessMap&&E.enable(19),R.sheen&&E.enable(20),R.sheenColorMap&&E.enable(21),R.sheenRoughnessMap&&E.enable(22),R.decodeVideoTexture&&E.enable(23),R.opaque&&E.enable(24),G.push(E.mask)}function K(G){const R=w[G.type];let f;if(R){const Y=rg[R];f=Gr.clone(Y.uniforms)}else f=G.uniforms;return f}function N(G,R){let f;for(let Y=0,H=t.length;Y<H;Y++){const m=t[Y];if(m.cacheKey===R){f=m,++f.usedTimes;break}}return f===void 0&&(f=new vl(C,R,G,Q),t.push(f)),f}function x(G){if(--G.usedTimes===0){const R=t.indexOf(G);t[R]=t[t.length-1],t.pop(),G.destroy()}}function W(G){o.remove(G)}function u(){o.dispose()}return{getParameters:D,getProgramCacheKey:y,getUniforms:K,acquireProgram:N,releaseProgram:x,releaseShaderCache:W,programs:t,dispose:u}}function Pl(){let C=new WeakMap;function A(Q){let i=C.get(Q);return i===void 0&&(i={},C.set(Q,i)),i}function I(Q){C.delete(Q)}function g(Q,i,E){C.get(Q)[i]=E}function B(){C=new WeakMap}return{get:A,remove:I,update:g,dispose:B}}function _l(C,A){return C.groupOrder!==A.groupOrder?C.groupOrder-A.groupOrder:C.renderOrder!==A.renderOrder?C.renderOrder-A.renderOrder:C.material.id!==A.material.id?C.material.id-A.material.id:C.z!==A.z?C.z-A.z:C.id-A.id}function za(C,A){return C.groupOrder!==A.groupOrder?C.groupOrder-A.groupOrder:C.renderOrder!==A.renderOrder?C.renderOrder-A.renderOrder:C.z!==A.z?A.z-C.z:C.id-A.id}function $a(){const C=[];let A=0;const I=[],g=[],B=[];function Q(){A=0,I.length=0,g.length=0,B.length=0}function i(a,s,n,r,S,w){let h=C[A];return h===void 0?(h={id:a.id,object:a,geometry:s,material:n,groupOrder:r,renderOrder:a.renderOrder,z:S,group:w},C[A]=h):(h.id=a.id,h.object=a,h.geometry=s,h.material=n,h.groupOrder=r,h.renderOrder=a.renderOrder,h.z=S,h.group=w),A++,h}function E(a,s,n,r,S,w){const h=i(a,s,n,r,S,w);n.transmission>0?g.push(h):n.transparent===!0?B.push(h):I.push(h)}function o(a,s,n,r,S,w){const h=i(a,s,n,r,S,w);n.transmission>0?g.unshift(h):n.transparent===!0?B.unshift(h):I.unshift(h)}function t(a,s){I.length>1&&I.sort(a||_l),g.length>1&&g.sort(s||za),B.length>1&&B.sort(s||za)}function e(){for(let a=A,s=C.length;a<s;a++){const n=C[a];if(n.id===null)break;n.id=null,n.object=null,n.geometry=null,n.material=null,n.group=null}}return{opaque:I,transmissive:g,transparent:B,init:Q,push:E,unshift:o,finish:e,sort:t}}function Xl(){let C=new WeakMap;function A(g,B){let Q;return C.has(g)===!1?(Q=new $a,C.set(g,[Q])):B>=C.get(g).length?(Q=new $a,C.get(g).push(Q)):Q=C.get(g)[B],Q}function I(){C=new WeakMap}return{get:A,dispose:I}}function zl(){const C={};return{get:function(A){if(C[A.id]!==void 0)return C[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new F,color:new lA};break;case"SpotLight":I={position:new F,direction:new F,color:new lA,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new F,color:new lA,distance:0,decay:0};break;case"HemisphereLight":I={direction:new F,skyColor:new lA,groundColor:new lA};break;case"RectAreaLight":I={color:new lA,position:new F,halfWidth:new F,halfHeight:new F};break}return C[A.id]=I,I}}}function $l(){const C={};return{get:function(A){if(C[A.id]!==void 0)return C[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new IA};break;case"SpotLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new IA};break;case"PointLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new IA,shadowCameraNear:1,shadowCameraFar:1e3};break}return C[A.id]=I,I}}}let AG=0;function IG(C,A){return(A.castShadow?1:0)-(C.castShadow?1:0)}function gG(C,A){const I=new zl,g=$l(),B={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let e=0;e<9;e++)B.probe.push(new F);const Q=new F,i=new wA,E=new wA;function o(e,a){let s=0,n=0,r=0;for(let W=0;W<9;W++)B.probe[W].set(0,0,0);let S=0,w=0,h=0,D=0,y=0,k=0,l=0,K=0;e.sort(IG);const N=a!==!0?Math.PI:1;for(let W=0,u=e.length;W<u;W++){const G=e[W],R=G.color,f=G.intensity,Y=G.distance,H=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)s+=R.r*f*N,n+=R.g*f*N,r+=R.b*f*N;else if(G.isLightProbe)for(let m=0;m<9;m++)B.probe[m].addScaledVector(G.sh.coefficients[m],f);else if(G.isDirectionalLight){const m=I.get(G);if(m.color.copy(G.color).multiplyScalar(G.intensity*N),G.castShadow){const T=G.shadow,q=g.get(G);q.shadowBias=T.bias,q.shadowNormalBias=T.normalBias,q.shadowRadius=T.radius,q.shadowMapSize=T.mapSize,B.directionalShadow[S]=q,B.directionalShadowMap[S]=H,B.directionalShadowMatrix[S]=G.shadow.matrix,k++}B.directional[S]=m,S++}else if(G.isSpotLight){const m=I.get(G);if(m.position.setFromMatrixPosition(G.matrixWorld),m.color.copy(R).multiplyScalar(f*N),m.distance=Y,m.coneCos=Math.cos(G.angle),m.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),m.decay=G.decay,G.castShadow){const T=G.shadow,q=g.get(G);q.shadowBias=T.bias,q.shadowNormalBias=T.normalBias,q.shadowRadius=T.radius,q.shadowMapSize=T.mapSize,B.spotShadow[h]=q,B.spotShadowMap[h]=H,B.spotShadowMatrix[h]=G.shadow.matrix,K++}B.spot[h]=m,h++}else if(G.isRectAreaLight){const m=I.get(G);m.color.copy(R).multiplyScalar(f),m.halfWidth.set(G.width*.5,0,0),m.halfHeight.set(0,G.height*.5,0),B.rectArea[D]=m,D++}else if(G.isPointLight){const m=I.get(G);if(m.color.copy(G.color).multiplyScalar(G.intensity*N),m.distance=G.distance,m.decay=G.decay,G.castShadow){const T=G.shadow,q=g.get(G);q.shadowBias=T.bias,q.shadowNormalBias=T.normalBias,q.shadowRadius=T.radius,q.shadowMapSize=T.mapSize,q.shadowCameraNear=T.camera.near,q.shadowCameraFar=T.camera.far,B.pointShadow[w]=q,B.pointShadowMap[w]=H,B.pointShadowMatrix[w]=G.shadow.matrix,l++}B.point[w]=m,w++}else if(G.isHemisphereLight){const m=I.get(G);m.skyColor.copy(G.color).multiplyScalar(f*N),m.groundColor.copy(G.groundColor).multiplyScalar(f*N),B.hemi[y]=m,y++}}D>0&&(A.isWebGL2||C.has("OES_texture_float_linear")===!0?(B.rectAreaLTC1=oA.LTC_FLOAT_1,B.rectAreaLTC2=oA.LTC_FLOAT_2):C.has("OES_texture_half_float_linear")===!0?(B.rectAreaLTC1=oA.LTC_HALF_1,B.rectAreaLTC2=oA.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),B.ambient[0]=s,B.ambient[1]=n,B.ambient[2]=r;const x=B.hash;(x.directionalLength!==S||x.pointLength!==w||x.spotLength!==h||x.rectAreaLength!==D||x.hemiLength!==y||x.numDirectionalShadows!==k||x.numPointShadows!==l||x.numSpotShadows!==K)&&(B.directional.length=S,B.spot.length=h,B.rectArea.length=D,B.point.length=w,B.hemi.length=y,B.directionalShadow.length=k,B.directionalShadowMap.length=k,B.pointShadow.length=l,B.pointShadowMap.length=l,B.spotShadow.length=K,B.spotShadowMap.length=K,B.directionalShadowMatrix.length=k,B.pointShadowMatrix.length=l,B.spotShadowMatrix.length=K,x.directionalLength=S,x.pointLength=w,x.spotLength=h,x.rectAreaLength=D,x.hemiLength=y,x.numDirectionalShadows=k,x.numPointShadows=l,x.numSpotShadows=K,B.version=AG++)}function t(e,a){let s=0,n=0,r=0,S=0,w=0;const h=a.matrixWorldInverse;for(let D=0,y=e.length;D<y;D++){const k=e[D];if(k.isDirectionalLight){const l=B.directional[s];l.direction.setFromMatrixPosition(k.matrixWorld),Q.setFromMatrixPosition(k.target.matrixWorld),l.direction.sub(Q),l.direction.transformDirection(h),s++}else if(k.isSpotLight){const l=B.spot[r];l.position.setFromMatrixPosition(k.matrixWorld),l.position.applyMatrix4(h),l.direction.setFromMatrixPosition(k.matrixWorld),Q.setFromMatrixPosition(k.target.matrixWorld),l.direction.sub(Q),l.direction.transformDirection(h),r++}else if(k.isRectAreaLight){const l=B.rectArea[S];l.position.setFromMatrixPosition(k.matrixWorld),l.position.applyMatrix4(h),E.identity(),i.copy(k.matrixWorld),i.premultiply(h),E.extractRotation(i),l.halfWidth.set(k.width*.5,0,0),l.halfHeight.set(0,k.height*.5,0),l.halfWidth.applyMatrix4(E),l.halfHeight.applyMatrix4(E),S++}else if(k.isPointLight){const l=B.point[n];l.position.setFromMatrixPosition(k.matrixWorld),l.position.applyMatrix4(h),n++}else if(k.isHemisphereLight){const l=B.hemi[w];l.direction.setFromMatrixPosition(k.matrixWorld),l.direction.transformDirection(h),l.direction.normalize(),w++}}}return{setup:o,setupView:t,state:B}}function As(C,A){const I=new gG(C,A),g=[],B=[];function Q(){g.length=0,B.length=0}function i(a){g.push(a)}function E(a){B.push(a)}function o(a){I.setup(g,a)}function t(a){I.setupView(g,a)}return{init:Q,state:{lightsArray:g,shadowsArray:B,lights:I},setupLights:o,setupLightsView:t,pushLight:i,pushShadow:E}}function CG(C,A){let I=new WeakMap;function g(Q,i=0){let E;return I.has(Q)===!1?(E=new As(C,A),I.set(Q,[E])):i>=I.get(Q).length?(E=new As(C,A),I.get(Q).push(E)):E=I.get(Q)[i],E}function B(){I=new WeakMap}return{get:g,dispose:B}}class Fo extends rI{constructor(A){super();this.type="MeshDepthMaterial",this.depthPacking=Ar,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}Fo.prototype.isMeshDepthMaterial=!0;class Ko extends rI{constructor(A){super();this.type="MeshDistanceMaterial",this.referencePosition=new F,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(A)}copy(A){return super.copy(A),this.referencePosition.copy(A.referencePosition),this.nearDistance=A.nearDistance,this.farDistance=A.farDistance,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}Ko.prototype.isMeshDistanceMaterial=!0;const BG=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QG=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
`,s=function(y,k,l){k=k||1024;let N=y.pos,x=-1,W=0,u="",G=String.fromCharCode.apply(null,new Uint16Array(y.subarray(N,N+128)));for(;0>(x=G.indexOf(a))&&W<k&&N<y.byteLength;)u+=G,W+=G.length,N+=128,G+=String.fromCharCode.apply(null,new Uint16Array(y.subarray(N,N+128)));return-1<x?(l!==!1&&(y.pos+=W+x+1),u+G.slice(0,x)):!1},n=function(y){const k=/^#\?(\S+)/,l=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,K=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,N=/^\s*FORMAT=(\S+)\s*$/,x=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,W={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let u,G;if(y.pos>=y.byteLength||!(u=s(y)))return E(1,"no header found");if(!(G=u.match(k)))return E(3,"bad initial token");for(W.valid|=1,W.programtype=G[1],W.string+=u+`
`;u=s(y),u!==!1;){if(W.string+=u+`
`,u.charAt(0)==="#"){W.comments+=u+`
`;continue}if((G=u.match(l))&&(W.gamma=parseFloat(G[1])),(G=u.match(K))&&(W.exposure=parseFloat(G[1])),(G=u.match(N))&&(W.valid|=2,W.format=G[1]),(G=u.match(x))&&(W.valid|=4,W.height=parseInt(G[1],10),W.width=parseInt(G[2],10)),W.valid&2&&W.valid&4)break}return W.valid&2?W.valid&4?W:E(3,"missing image size specifier"):E(3,"missing format specifier")},r=function(y,k,l){const K=k;if(K<8||K>32767||y[0]!==2||y[1]!==2||y[2]&128)return new Uint8Array(y);if(K!==(y[2]<<8|y[3]))return E(3,"wrong scanline width");const N=new Uint8Array(4*k*l);if(!N.length)return E(4,"unable to allocate buffer space");let x=0,W=0;const u=4*K,G=new Uint8Array(4),R=new Uint8Array(u);let f=l;for(;f>0&&W<y.byteLength;){if(W+4>y.byteLength)return E(1);if(G[0]=y[W++],G[1]=y[W++],G[2]=y[W++],G[3]=y[W++],G[0]!=2||G[1]!=2||(G[2]<<8|G[3])!=K)return E(3,"bad rgbe scanline format");let Y=0,H;for(;Y<u&&W<y.byteLength;){H=y[W++];const T=H>128;if(T&&(H-=128),H===0||Y+H>u)return E(3,"bad scanline data");if(T){const q=y[W++];for(let V=0;V<H;V++)R[Y++]=q}else R.set(y.subarray(W,W+H),Y),Y+=H,W+=H}const m=K;for(let T=0;T<m;T++){let q=0;N[x]=R[T+q],q+=K,N[x+1]=R[T+q],q+=K,N[x+2]=R[T+q],q+=K,N[x+3]=R[T+q],x+=4}f--}return N},S=function(y,k,l,K){const N=y[k+3],x=Math.pow(2,N-128)/255;l[K+0]=y[k+0]*x,l[K+1]=y[k+1]*x,l[K+2]=y[k+2]*x,l[K+3]=1},w=function(y,k,l,K){const N=y[k+3],x=Math.pow(2,N-128)/255;l[K+0]=xi.toHalfFloat(Math.min(y[k+0]*x,65504)),l[K+1]=xi.toHalfFloat(Math.min(y[k+1]*x,65504)),l[K+2]=xi.toHalfFloat(Math.min(y[k+2]*x,65504)),l[K+3]=xi.toHalfFloat(1)},h=new Uint8Array(A);h.pos=0;const D=n(h);if(D!==-1){const y=D.width,k=D.height,l=r(h.subarray(h.pos),y,k);if(l!==-1){let K,N,x,W;switch(this.type){case sg:W=l.length/4;const u=new Float32Array(W*4);for(let R=0;R<W;R++)S(l,R*4,u,R*4);K=u,x=sg;break;case ng:W=l.length/4;const G=new Uint16Array(W*4);for(let R=0;R<W;R++)w(l,R*4,G,R*4);K=G,x=ng;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:y,height:k,data:K,header:D.string,gamma:D.gamma,exposure:D.exposure,format:N,type:x}}}return null}setDataType(A){return this.type=A,this}load(A,I,g,B){function Q(i,E){switch(i.type){case sg:i.encoding=Dg,i.minFilter=EI,i.magFilter=EI,i.generateMipmaps=!1,i.flipY=!0;break;case ng:i.encoding=Dg,i.minFilter=EI,i.magFilter=EI,i.generateMipmaps=!1,i.flipY=!0;break}I&&I(i,E)}return super.load(A,Q,g,B)}}var an=(C=>(C.RGBE="rgbe",C))(an||{});function Xk(C,A={}){const I=HD(C.world),g={type:Pk};A.environmentMapUrl&&(g.environmentTextureResourceId=xg(C.resourceManager,{type:"texture",textureType:an.RGBE,url:A.environmentMapUrl}));const B=xg(C.resourceManager,g);return(A.setActive===void 0||A.setActive)&&Zk(C,I,B),I}const zk=(C,A)=>{const{world:I,resourceManager:g,physicsWorld:B}=C,Q=tg(I);Kg(I,Q);const i=xg(g,{type:"material",materialType:on.Physical,baseColorFactor:[Math.random(),Math.random(),Math.random(),1],roughnessFactor:.8,metallicFactor:.8}),E=xg(g,{type:"mesh",geometryResourceId:A,materialResourceId:i}),o=ht.newDynamic(),t=B.createRigidBody(o),e=bt.cuboid(.5,.5,.5);return B.createCollider(e,t.handle),En(I,Q,t),Oi(C,Q,E),Q};function $k(C,A=!0){const I=tg(C.world);Kg(C.world,I);const g=xg(C.resourceManager,{type:"camera",cameraType:tn.Perspective,yfov:75,znear:.1});return Oi(C,I,g),A&&Wk(C,I),I}function Aw(C,A){const I=tg(C.world);Kg(C.world,I);const g=xg(C.resourceManager,{type:_k,lightType:en.Directional,intensity:.5});return Oi(C,I,g),A!==void 0&&KC(A,I),I}const sn={Look:"FirstPersonCamera/Look"},gC=LB({maxAngle:TB.f32,minAngle:TB.f32,sensitivity:TB.f32}),bi=LB({sensitivity:TB.f32});function Iw(C,A){aC(C,gC,A),gC.maxAngle[A]=89,gC.minAngle[A]=-89,gC.sensitivity[A]=1}function gw(C,A){aC(C,bi,A),bi.sensitivity[A]=1}const Cw=YB([gC,hA]),Bw=YB([bi,hA]);function Qw({input:C,world:A}){const[I,g]=C.actions.get(sn.Look),B=Cw(A);Math.abs(g)>1&&B.forEach(i=>{const E=hA.rotation[i],o=gC.sensitivity[i]||1,t=gC.maxAngle[i],e=gC.minAngle[i],a=ee(t||89),s=ee(e||-89);E[0]-=g/(1e3/(o||1)),E[0]>a?E[0]=a:E[0]<s&&(E[0]=s),RE(hA.quaternion[i],hA.rotation[i])});const Q=Bw(A);return Math.abs(I)>1&&Q.forEach(i=>{const E=bi.sensitivity[i]||1;hA.rotation[i][1]-=I/(1e3/(E||1)),RE(hA.quaternion[i],hA.rotation[i])}),A}function iw(C,A){return C<<16|A}const Ew=iw(65535,~1);function vi(C){return"PhysicsCharacterController/"+C}const CC={Move:vi("Move"),Jump:vi("Jump"),Sprint:vi("Sprint"),Crouch:vi("Crouch")},BC=new VA,ow=50,tw=10,ew=100,aw=10,sw=.5,nw=10,Dw=.7,hw=1.5,rw=3,Sw=50,cw=150,nn=1,lw=1.8,Gw=25,QC=new F,Ct=new F,Bt=new F,Dn=new F,hn=new FI;let wC=!1;const rn=new F;let Qt=0;const kw=new qQ.Capsule(.5,.5),ww=new F(0,.8,0),Uw=new FI(0,0,0,0),Sn=LB(),yw=YB([Sn]),Mw=(C,A=!0)=>{const{world:I,physicsWorld:g}=C,B=tg(I);Kg(I,B),aC(I,Sn,B),hA.position[B][2]=50,gw(I,B);const Q=hA.position[B],i=qQ.RigidBodyDesc.newDynamic().setTranslation(Q[0],Q[1],Q[2]),E=g.createRigidBody(i),o=qQ.ColliderDesc.cuboid(.5,.5,.5);g.createCollider(o,E.handle),En(I,B,E);const t=$k(C,A);Iw(I,t),KC(B,t);const e=hA.position[t];return e[1]=1.6,B},Jw=C=>{const A=yw(C.world)[0],I=SB.store.get(A);if(I){BC.quaternion.x=hA.quaternion[A][0],BC.quaternion.y=hA.quaternion[A][1],BC.quaternion.z=hA.quaternion[A][2],BC.quaternion.w=hA.quaternion[A][3],I.setRotation(BC.quaternion,!0);const g=C.input.actions.get(CC.Move),B=C.input.actions.get(CC.Jump),Q=C.input.actions.get(CC.Crouch),i=C.input.actions.get(CC.Sprint);Bt.copy(I.linvel()),Dn.copy(I.translation()).add(ww),hn.copy(BC.quaternion).multiply(Uw);const o=!!C.physicsWorld.castShape(Dn,hn,C.physicsWorld.gravity,kw,C.time.dt,Ew),t=o&&i.held&&!wC,e=Bt.length();if(e<(t?Gw:ew)&&(QC.set(g[0],0,-g[1]).normalize().applyQuaternion(BC.quaternion).multiplyScalar(ow*C.time.dt),o?o&&Q.held&&!wC?QC.multiplyScalar(Dw):o&&i.held&&!wC&&QC.multiplyScalar(lw):QC.multiplyScalar(sw)),Q.pressed&&e>rw&&o&&!wC&&C.time.dt>Qt+nn?(rn.set(0,0,(e+1)*-Sw).applyQuaternion(BC.quaternion),QC.add(rn),wC=!0,Qt=C.time.elapsed):(Q.released||C.time.dt>Qt+nn)&&(wC=!1),e!==0){let s=tw;wC?s=cw:o||(s=nw),Ct.copy(Bt).negate().multiplyScalar(s*C.time.dt),Ct.y=0,QC.add(Ct)}if(B.pressed&&o){const s=Q.held?hw:1;QC.y+=aw*s}I.applyImpulse(QC,!0),I.applyForce(C.physicsWorld.gravity,!0)}};var cn=(C=>(C.Box="box",C))(cn||{});const DQ=LB({resourceId:TB.ui32});function Fw({resourceManager:C,world:A},I,g){const B=xg(C,{type:"gltf",url:g});aC(A,DQ,I),DQ.resourceId[I]=B}function Kw(C,A,I){const{world:g}=C,B=tg(g);return Kg(g,B),Fw(C,B,A),I!==void 0&&KC(I,B),B}function ln(C,A,I){const{world:g}=C,B=tg(g);for(const Q of A.components)switch(Q.type){case"transform":Kg(g,B),hA.position[B].set(Q.position),hA.rotation[B].set(Q.rotation),hA.scale[B].set(Q.scale),RE(hA.quaternion[B],hA.rotation[B]),Ge(B),I!==void 0&&KC(I,B);break;case"renderable":Oi(C,B,Q.resourceId);break}if(A.children)for(const Q of A.children)ln(C,Q,B);return B}const Rw=YB([DQ]);function pw(C){const{world:A,resourceManager:I}=C,g=Rw(A);for(let B=0;B<g.length;B++){const Q=g[B],i=DQ.resourceId[Q],E=I.store.get(i);E.state===xB.Loaded&&E.remoteResource&&(ln(C,E.remoteResource.scene,Q),sD(A,DQ,Q))}}const lB=(C,A)=>Math.random()*(A-C)+C;async function Nw(C){const{resourceManager:A,physicsWorld:I}=C;C.input.actionMaps=[{id:"movement",actions:[{id:"look",path:sn.Look,type:hB.Vector2,bindings:[{type:rB.Axes,x:"Mouse/movementX",y:"Mouse/movementY"}]},{id:"move",path:CC.Move,type:hB.Vector2,bindings:[{type:rB.DirectionalButtons,up:"Keyboard/KeyW",down:"Keyboard/KeyS",left:"Keyboard/KeyA",right:"Keyboard/KeyD"}]},{id:"jump",path:CC.Jump,type:hB.Button,bindings:[{type:rB.Button,path:"Keyboard/Space"}]},{id:"crouch",path:CC.Crouch,type:hB.Button,bindings:[{type:rB.Button,path:"Keyboard/KeyC"}]},{id:"sprint",path:CC.Sprint,type:hB.Button,bindings:[{type:rB.Button,path:"Keyboard/ShiftLeft"}]}]}];const g=Xk(C,{environmentMapUrl:"/cubemap/venice_sunset_1k.hdr"});Aw(C,g);const B=qQ.ColliderDesc.cuboid(1e3,1,1e3);I.createCollider(B);const Q=xg(A,{type:"geometry",geometryType:cn.Box});for(let E=0;E<100;E++){const o=zk(C,Q),t=hA.position[o],e=hA.rotation[o];t[0]=lB(-10,10),t[1]=lB(5,50),t[2]=lB(-10,10),e[0]=lB(0,5),e[1]=lB(0,5),e[2]=lB(0,5);const a=SB.store.get(o);a&&a.setTranslation(new F().fromArray(t),!0),KC(g,o)}Kw(C,"/gltf/OutdoorFestival/OutdoorFestival.glb",g);const i=Mw(C);KC(g,i),C.systems.push(pw,Tk,Qw,Jw,vk,jk)}var Gn=(C=>(C[C.fps=0]="fps",C[C.frameTime=1]="frameTime",C[C.frameDuration=2]="frameDuration",C[C.gameTime=3]="gameTime",C[C.gameDuration=4]="gameDuration",C[C.frame=5]="frame",C[C.staleFrames=6]="staleFrames",C[C.drawCalls=7]="drawCalls",C[C.programs=8]="programs",C[C.geometries=9]="geometries",C[C.textures=10]="textures",C[C.triangles=11]="triangles",C[C.points=12]="points",C[C.lines=13]="lines",C))(Gn||{});const kn=Object.keys(Gn).filter(C=>isNaN(+C));function qw(C){const A=C||new SharedArrayBuffer(Float32Array.BYTES_PER_ELEMENT*kn.length);return{buffer:A,f32:new Float32Array(A),u32:new Uint32Array(A)}}function dw(C,A){C.statsBuffer.f32[3]=C.time.dt,C.statsBuffer.f32[4]=A}Object.fromEntries(kn.map(C=>[C,0]));const Zi=globalThis,wn=C=>({data:A})=>{if(typeof A!="object")return;const I=A;switch(I.type){case jI.StartGameWorker:Yw(C);break;case jI.ResourceLoaded:bD(C.resourceManager,I.resourceId,I.remoteResource);break;case jI.ResourceLoadError:vD(C.resourceManager,I.resourceId,I.error);break;case jI.ResourceDisposed:ZD(C.resourceManager,I.resourceId);break}};async function Un({data:C}){if(typeof C!="object")return;const A=C;if(A.type===jI.InitializeGameWorker){try{A.renderWorkerMessagePort&&A.renderWorkerMessagePort.start();const I=await uw(A);postMessage({type:jI.GameWorkerInitialized}),Zi.addEventListener("message",wn(I)),A.renderWorkerMessagePort&&A.renderWorkerMessagePort.addEventListener("message",wn(I))}catch(I){postMessage({type:jI.GameWorkerError,error:I})}Zi.removeEventListener("message",Un)}}Zi.addEventListener("message",Un);const fw=(C,A)=>Object.defineProperties({},Object.fromEntries(Object.entries(Ch).map(([I,g])=>[I,{enumerable:!0,get:()=>g(C[PD(A)])}])));async function uw({inputTripleBuffer:C,resourceManagerBuffer:A,renderWorkerMessagePort:I,renderableTripleBuffer:g,statsSharedArrayBuffer:B}){const Q=I||Zi,i=qw(B),E=rD(JI);tg(E);const o=tg(E);Kg(E,o);const t=tg(E);Kg(E,t),await _t();const e=new AE(0,-9.81,0),a=new aE(e),s=C.buffers.map(D=>ZQ(D)).map(D=>Ah(D)),n=OD(A,Q),r={tripleBuffer:g,port:Q},S={tripleBuffer:C,inputStates:s,actions:new Map,actionMaps:[],raw:fw(s,C)},w={elapsed:performance.now(),dt:0},h={world:E,scene:o,camera:t,resourceManager:n,renderer:r,physicsWorld:a,input:S,time:w,systems:[],statsBuffer:i};return await Nw(h),h}function Yw(C){yn(C)}const Lw=C=>{le(C.scene)},Hw=({renderer:C})=>{XD(C.tripleBuffer,FC),$D(C.tripleBuffer)},mw=({time:C})=>{const A=performance.now();C.dt=(A-C.elapsed)/1e3,C.elapsed=A},Tw=C=>{mw(C),Bh(C);for(let A=0;A<C.systems.length;A++)C.systems[A](C);Lw(C),Hw(C)},xw=4;function yn(C){Tw(C);const A=performance.now()-C.time.elapsed,I=Math.max(1e3/LD-A-xw,0);dw(C,A),setTimeout(()=>yn(C),I)}})();