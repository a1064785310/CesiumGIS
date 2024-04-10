/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.111
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */
import{a as J}from"./chunk-ZKHPTJEK.js";import{a as Nt}from"./chunk-FDKE3YW2.js";import{a as zt}from"./chunk-3ZQZIWLR.js";import"./chunk-PNRMC4IG.js";import"./chunk-V6ZHITEJ.js";import{a as ut}from"./chunk-N52FZRFP.js";import{a as X}from"./chunk-WIRUK4BS.js";import{b as Rt}from"./chunk-BVOZOPDI.js";import"./chunk-BSXS3UVL.js";import"./chunk-OH4CN3UY.js";import"./chunk-AAJ456AA.js";import{a as yt}from"./chunk-JZL634RF.js";import{a as Vt}from"./chunk-3UAKIC5Y.js";import{b as Mt,c as Pt,d as q}from"./chunk-QEWKHB6D.js";import{d as st,f as Lt}from"./chunk-DV7DPSRL.js";import"./chunk-4FFHQQYZ.js";import{c as S,d as G,e as At}from"./chunk-KCIWEUSR.js";import{a as Y}from"./chunk-7XDW3BZW.js";import{a as _,b as wt,c as H,d as ft}from"./chunk-F33YCXD2.js";import{a as W}from"./chunk-DUBQPPQZ.js";import"./chunk-CG3JQAX7.js";import"./chunk-P3JQY4NV.js";import{a as L}from"./chunk-K36PKEJW.js";import{a as Et,b as lt}from"./chunk-KD2PMTHD.js";import{e as $}from"./chunk-ZUCO5WNM.js";var Tt=new _,Bt=new _,Ut=new _,Yt=new _,qt=new S,Zt=new G,Kt=new st,$t=new st;function Xt(t,e){let n=new Pt({attributes:new Vt,primitiveType:Mt.TRIANGLES});return n.attributes.position=new q({componentDatatype:Y.DOUBLE,componentsPerAttribute:3,values:e.positions}),t.normal&&(n.attributes.normal=new q({componentDatatype:Y.FLOAT,componentsPerAttribute:3,values:e.normals})),t.tangent&&(n.attributes.tangent=new q({componentDatatype:Y.FLOAT,componentsPerAttribute:3,values:e.tangents})),t.bitangent&&(n.attributes.bitangent=new q({componentDatatype:Y.FLOAT,componentsPerAttribute:3,values:e.bitangents})),n}function Gt(t,e,n,o){let a=t.length,r=e.normal?new Float32Array(a):void 0,i=e.tangent?new Float32Array(a):void 0,s=e.bitangent?new Float32Array(a):void 0,l=0,u=Yt,c=Ut,p=Bt;if(e.normal||e.tangent||e.bitangent)for(let m=0;m<a;m+=3){let a=_.fromArray(t,m,Tt),h=l+1,f=l+2;p=n.geodeticSurfaceNormal(a,p),(e.tangent||e.bitangent)&&(_.cross(_.UNIT_Z,p,c),ft.multiplyByVector(o,c,c),_.normalize(c,c),e.bitangent&&_.normalize(_.cross(p,c,u),u)),e.normal&&(r[l]=p.x,r[h]=p.y,r[f]=p.z),e.tangent&&(i[l]=c.x,i[h]=c.y,i[f]=c.z),e.bitangent&&(s[l]=u.x,s[h]=u.y,s[f]=u.z),l+=3}return Xt(e,{positions:t,normals:r,tangents:i,bitangents:s})}var Ct=new _,jt=new _;function te(t,e,n){let o=t.length,a=e.normal?new Float32Array(o):void 0,r=e.tangent?new Float32Array(o):void 0,i=e.bitangent?new Float32Array(o):void 0,s=0,l=0,u=0,c=!0,p=Yt,m=Ut,h=Bt;if(e.normal||e.tangent||e.bitangent)for(let f=0;f<o;f+=6){let g=_.fromArray(t,f,Tt),d=_.fromArray(t,(f+6)%o,Ct);if(c){let e=_.fromArray(t,(f+3)%o,jt);_.subtract(d,g,d),_.subtract(e,g,e),h=_.normalize(_.cross(e,d,h),h),c=!1}_.equalsEpsilon(d,g,W.EPSILON10)&&(c=!0),(e.tangent||e.bitangent)&&(p=n.geodeticSurfaceNormal(g,p),e.tangent&&(m=_.normalize(_.cross(p,h,m),m))),e.normal&&(a[s++]=h.x,a[s++]=h.y,a[s++]=h.z,a[s++]=h.x,a[s++]=h.y,a[s++]=h.z),e.tangent&&(r[l++]=m.x,r[l++]=m.y,r[l++]=m.z,r[l++]=m.x,r[l++]=m.y,r[l++]=m.z),e.bitangent&&(i[u++]=p.x,i[u++]=p.y,i[u++]=p.z,i[u++]=p.x,i[u++]=p.y,i[u++]=p.z)}return Xt(e,{positions:t,normals:a,tangents:r,bitangents:i})}function It(t,e){let n=t._vertexFormat,o=t._ellipsoid,a=e.height,r=e.width,i=e.northCap,s=e.southCap,l=0,u=a,c=a,p=0;i&&(l=1,c-=1,p+=1),s&&(u-=1,c-=1,p+=1),p+=r*c;let m=n.position?new Float64Array(3*p):void 0,h=n.st?new Float32Array(2*p):void 0,f=0,g=0,_=Tt,d=Zt,y=Number.MAX_VALUE,w=Number.MAX_VALUE,b=-Number.MAX_VALUE,A=-Number.MAX_VALUE;for(let F=l;F<u;++F)for(let t=0;t<r;++t)J.computePosition(e,o,n.st,F,t,_,d),m[f++]=_.x,m[f++]=_.y,m[f++]=_.z,n.st&&(h[g++]=d.x,h[g++]=d.y,y=Math.min(y,d.x),w=Math.min(w,d.y),b=Math.max(b,d.x),A=Math.max(A,d.y));if(i&&(J.computePosition(e,o,n.st,0,0,_,d),m[f++]=_.x,m[f++]=_.y,m[f++]=_.z,n.st&&(h[g++]=d.x,h[g++]=d.y,y=d.x,w=d.y,b=d.x,A=d.y)),s&&(J.computePosition(e,o,n.st,a-1,0,_,d),m[f++]=_.x,m[f++]=_.y,m[f]=_.z,n.st&&(h[g++]=d.x,h[g]=d.y,y=Math.min(y,d.x),w=Math.min(w,d.y),b=Math.max(b,d.x),A=Math.max(A,d.y))),n.st&&(y<0||w<0||b>1||A>1))for(let F=0;F<h.length;F+=2)h[F]=(h[F]-y)/(b-y),h[F+1]=(h[F+1]-w)/(A-w);let v=Gt(m,n,o,e.tangentRotationMatrix),x=6*(r-1)*(c-1);i&&(x+=3*(r-1)),s&&(x+=3*(r-1));let L,P=yt.createTypedArray(p,x),E=0,k=0;for(L=0;L<c-1;++L){for(let t=0;t<r-1;++t){let t=E,e=t+r,n=e+1,o=t+1;P[k++]=t,P[k++]=e,P[k++]=o,P[k++]=o,P[k++]=e,P[k++]=n,++E}++E}if(i||s){let t,e,n=p-1,o=p-1;if(i&&s&&(n=p-2),E=0,i)for(L=0;L<r-1;L++)t=E,e=t+1,P[k++]=n,P[k++]=t,P[k++]=e,++E;if(s)for(E=(c-1)*r,L=0;L<r-1;L++)t=E,e=t+1,P[k++]=t,P[k++]=o,P[k++]=e,++E}return v.indices=P,n.st&&(v.attributes.st=new q({componentDatatype:Y.FLOAT,componentsPerAttribute:2,values:h})),v}function ht(t,e,n,o,a){return t[e++]=o[n],t[e++]=o[n+1],t[e++]=o[n+2],t[e++]=a[n],t[e++]=a[n+1],t[e]=a[n+2],t}function pt(t,e,n,o){return t[e++]=o[n],t[e++]=o[n+1],t[e++]=o[n],t[e]=o[n+1],t}var Dt=new X;function ee(t,e){let n,o=t._shadowVolume,a=t._offsetAttribute,r=t._vertexFormat,i=t._extrudedHeight,s=t._surfaceHeight,l=t._ellipsoid,u=e.height,c=e.width;if(o){let e=X.clone(r,Dt);e.normal=!0,t._vertexFormat=e}let p=It(t,e);o&&(t._vertexFormat=r);let m=Rt.scaleToGeodeticHeight(p.attributes.position.values,s,l,!1);m=new Float64Array(m);let h=m.length,f=2*h,g=new Float64Array(f);g.set(m);let d=Rt.scaleToGeodeticHeight(p.attributes.position.values,i,l);g.set(d,h),p.attributes.position.values=g;let y,w,b=r.normal?new Float32Array(f):void 0,A=r.tangent?new Float32Array(f):void 0,v=r.bitangent?new Float32Array(f):void 0,x=r.st?new Float32Array(f/3*2):void 0;if(r.normal){for(w=p.attributes.normal.values,b.set(w),n=0;n<h;n++)w[n]=-w[n];b.set(w,h),p.attributes.normal.values=b}if(o){w=p.attributes.normal.values,r.normal||(p.attributes.normal=void 0);let t=new Float32Array(f);for(n=0;n<h;n++)w[n]=-w[n];t.set(w,h),p.attributes.extrudeDirection=new q({componentDatatype:Y.FLOAT,componentsPerAttribute:3,values:t})}let L,P=$(a);if(P){let t=h/3*2,e=new Uint8Array(t);a===ut.TOP?e=e.fill(1,0,t/2):(L=a===ut.NONE?0:1,e=e.fill(L)),p.attributes.applyOffset=new q({componentDatatype:Y.UNSIGNED_BYTE,componentsPerAttribute:1,values:e})}if(r.tangent){let t=p.attributes.tangent.values;for(A.set(t),n=0;n<h;n++)t[n]=-t[n];A.set(t,h),p.attributes.tangent.values=A}if(r.bitangent){let t=p.attributes.bitangent.values;v.set(t),v.set(t,h),p.attributes.bitangent.values=v}r.st&&(y=p.attributes.st.values,x.set(y),x.set(y,h/3*2),p.attributes.st.values=x);let E=p.indices,k=E.length,F=h/3,R=yt.createTypedArray(f/3,2*k);for(R.set(E),n=0;n<k;n+=3)R[n+k]=E[n+2]+F,R[n+1+k]=E[n+1]+F,R[n+2+k]=E[n]+F;p.indices=R;let S=e.northCap,H=e.southCap,D=u,N=2,T=0,O=4,j=4;S&&(N-=1,D-=1,T+=1,O-=2,j-=1),H&&(N-=1,D-=1,T+=1,O-=2,j-=1),T+=N*c+2*D-O;let I=2*(T+j),G=new Float64Array(3*I),C=o?new Float32Array(3*I):void 0,U=P?new Uint8Array(I):void 0,M=r.st?new Float32Array(2*I):void 0,Q=a===ut.TOP;P&&!Q&&(L=a===ut.ALL?1:0,U=U.fill(L));let J,V=0,z=0,B=0,Z=0,K=c*D;for(n=0;n<K;n+=c)J=3*n,G=ht(G,V,J,m,d),V+=6,r.st&&(M=pt(M,z,2*n,y),z+=4),o&&(B+=3,C[B++]=w[J],C[B++]=w[J+1],C[B++]=w[J+2]),Q&&(U[Z++]=1,Z+=1);if(H){let t=S?K+1:K;for(J=3*t,n=0;n<2;n++)G=ht(G,V,J,m,d),V+=6,r.st&&(M=pt(M,z,2*t,y),z+=4),o&&(B+=3,C[B++]=w[J],C[B++]=w[J+1],C[B++]=w[J+2]),Q&&(U[Z++]=1,Z+=1)}else for(n=K-c;n<K;n++)J=3*n,G=ht(G,V,J,m,d),V+=6,r.st&&(M=pt(M,z,2*n,y),z+=4),o&&(B+=3,C[B++]=w[J],C[B++]=w[J+1],C[B++]=w[J+2]),Q&&(U[Z++]=1,Z+=1);for(n=K-1;n>0;n-=c)J=3*n,G=ht(G,V,J,m,d),V+=6,r.st&&(M=pt(M,z,2*n,y),z+=4),o&&(B+=3,C[B++]=w[J],C[B++]=w[J+1],C[B++]=w[J+2]),Q&&(U[Z++]=1,Z+=1);if(S){let t=K;for(J=3*t,n=0;n<2;n++)G=ht(G,V,J,m,d),V+=6,r.st&&(M=pt(M,z,2*t,y),z+=4),o&&(B+=3,C[B++]=w[J],C[B++]=w[J+1],C[B++]=w[J+2]),Q&&(U[Z++]=1,Z+=1)}else for(n=c-1;n>=0;n--)J=3*n,G=ht(G,V,J,m,d),V+=6,r.st&&(M=pt(M,z,2*n,y),z+=4),o&&(B+=3,C[B++]=w[J],C[B++]=w[J+1],C[B++]=w[J+2]),Q&&(U[Z++]=1,Z+=1);let tt=te(G,r,l);r.st&&(tt.attributes.st=new q({componentDatatype:Y.FLOAT,componentsPerAttribute:2,values:M})),o&&(tt.attributes.extrudeDirection=new q({componentDatatype:Y.FLOAT,componentsPerAttribute:3,values:C})),P&&(tt.attributes.applyOffset=new q({componentDatatype:Y.UNSIGNED_BYTE,componentsPerAttribute:1,values:U}));let et,nt,ot,at,rt=yt.createTypedArray(I,6*T);h=G.length/3;let it=0;for(n=0;n<h-1;n+=2){et=n,at=(et+2)%h;let t=_.fromArray(G,3*et,Ct),e=_.fromArray(G,3*at,jt);_.equalsEpsilon(t,e,W.EPSILON10)||(nt=(et+1)%h,ot=(nt+2)%h,rt[it++]=et,rt[it++]=nt,rt[it++]=at,rt[it++]=at,rt[it++]=nt,rt[it++]=ot)}return tt.indices=rt,tt=zt.combineInstances([new Nt({geometry:p}),new Nt({geometry:tt})]),tt[0]}var ne=[new _,new _,new _,new _],Wt=new wt,oe=new wt;function Ht(t,e,n,o,a){if(0===n)return S.clone(t,a);let r=J.computeOptions(t,e,n,0,qt,Wt),i=r.height,s=r.width,l=ne;return J.computePosition(r,o,!1,0,0,l[0]),J.computePosition(r,o,!1,0,s-1,l[1]),J.computePosition(r,o,!1,i-1,0,l[2]),J.computePosition(r,o,!1,i-1,s-1,l[3]),S.fromCartesianArray(l,o,a)}function Q(t){t=L(t,L.EMPTY_OBJECT);let e=t.rectangle;if(lt.typeOf.object("rectangle",e),S.validate(e),e.north<e.south)throw new Et("options.rectangle.north must be greater than or equal to options.rectangle.south");let n=L(t.height,0),o=L(t.extrudedHeight,n);this._rectangle=S.clone(e),this._granularity=L(t.granularity,W.RADIANS_PER_DEGREE),this._ellipsoid=H.clone(L(t.ellipsoid,H.WGS84)),this._surfaceHeight=Math.max(n,o),this._rotation=L(t.rotation,0),this._stRotation=L(t.stRotation,0),this._vertexFormat=X.clone(L(t.vertexFormat,X.DEFAULT)),this._extrudedHeight=Math.min(n,o),this._shadowVolume=L(t.shadowVolume,!1),this._workerName="createRectangleGeometry",this._offsetAttribute=t.offsetAttribute,this._rotatedRectangle=void 0,this._textureCoordinateRotationPoints=void 0}Q.packedLength=S.packedLength+H.packedLength+X.packedLength+7,Q.pack=function(t,e,n){return lt.typeOf.object("value",t),lt.defined("array",e),n=L(n,0),S.pack(t._rectangle,e,n),n+=S.packedLength,H.pack(t._ellipsoid,e,n),n+=H.packedLength,X.pack(t._vertexFormat,e,n),n+=X.packedLength,e[n++]=t._granularity,e[n++]=t._surfaceHeight,e[n++]=t._rotation,e[n++]=t._stRotation,e[n++]=t._extrudedHeight,e[n++]=t._shadowVolume?1:0,e[n]=L(t._offsetAttribute,-1),e};var Jt=new S,Qt=H.clone(H.UNIT_SPHERE),tt={rectangle:Jt,ellipsoid:Qt,vertexFormat:Dt,granularity:void 0,height:void 0,rotation:void 0,stRotation:void 0,extrudedHeight:void 0,shadowVolume:void 0,offsetAttribute:void 0};Q.unpack=function(t,e,n){lt.defined("array",t),e=L(e,0);let o=S.unpack(t,e,Jt);e+=S.packedLength;let a=H.unpack(t,e,Qt);e+=H.packedLength;let r=X.unpack(t,e,Dt);e+=X.packedLength;let i=t[e++],s=t[e++],l=t[e++],u=t[e++],c=t[e++],p=1===t[e++],m=t[e];return $(n)?(n._rectangle=S.clone(o,n._rectangle),n._ellipsoid=H.clone(a,n._ellipsoid),n._vertexFormat=X.clone(r,n._vertexFormat),n._granularity=i,n._surfaceHeight=s,n._rotation=l,n._stRotation=u,n._extrudedHeight=c,n._shadowVolume=p,n._offsetAttribute=-1===m?void 0:m,n):(tt.granularity=i,tt.height=s,tt.rotation=l,tt.stRotation=u,tt.extrudedHeight=c,tt.shadowVolume=p,tt.offsetAttribute=-1===m?void 0:m,new Q(tt))},Q.computeRectangle=function(t,e){t=L(t,L.EMPTY_OBJECT);let n=t.rectangle;if(lt.typeOf.object("rectangle",n),S.validate(n),n.north<n.south)throw new Et("options.rectangle.north must be greater than or equal to options.rectangle.south");let o=L(t.granularity,W.RADIANS_PER_DEGREE),a=L(t.ellipsoid,H.WGS84),r=L(t.rotation,0);return Ht(n,o,r,a,e)};var ie=new ft,Ft=new Lt,ae=new wt;Q.createGeometry=function(t){if(W.equalsEpsilon(t._rectangle.north,t._rectangle.south,W.EPSILON10)||W.equalsEpsilon(t._rectangle.east,t._rectangle.west,W.EPSILON10))return;let e=t._rectangle,n=t._ellipsoid,o=t._rotation,a=t._stRotation,r=t._vertexFormat,i=J.computeOptions(e,t._granularity,o,a,qt,Wt,oe),s=ie;if(0!==a||0!==o){let t=S.center(e,ae),o=n.geodeticSurfaceNormalCartographic(t,Ct);Lt.fromAxisAngle(o,-a,Ft),ft.fromQuaternion(Ft,s)}else ft.clone(ft.IDENTITY,s);let l,u,c=t._surfaceHeight,p=t._extrudedHeight,m=!W.equalsEpsilon(c,p,0,W.EPSILON2);if(i.lonScalar=1/t._rectangle.width,i.latScalar=1/t._rectangle.height,i.tangentRotationMatrix=s,e=t._rectangle,m){l=ee(t,i);let o=st.fromRectangle3D(e,n,c,$t),a=st.fromRectangle3D(e,n,p,Kt);u=st.union(o,a)}else{if(l=It(t,i),l.attributes.position.values=Rt.scaleToGeodeticHeight(l.attributes.position.values,c,n,!1),$(t._offsetAttribute)){let e=l.attributes.position.values.length,n=t._offsetAttribute===ut.NONE?0:1,o=new Uint8Array(e/3).fill(n);l.attributes.applyOffset=new q({componentDatatype:Y.UNSIGNED_BYTE,componentsPerAttribute:1,values:o})}u=st.fromRectangle3D(e,n,c)}return r.position||delete l.attributes.position,new Pt({attributes:l.attributes,indices:l.indices,primitiveType:l.primitiveType,boundingSphere:u,offsetAttribute:t._offsetAttribute})},Q.createShadowVolume=function(t,e,n){let o=t._granularity,a=t._ellipsoid,r=e(o,a),i=n(o,a);return new Q({rectangle:t._rectangle,rotation:t._rotation,ellipsoid:a,stRotation:t._stRotation,granularity:o,extrudedHeight:i,height:r,vertexFormat:X.POSITION_ONLY,shadowVolume:!0})};var vt=new S,se=[new G,new G,new G],re=new At,ce=new wt;function le(t){if(0===t._stRotation)return[0,0,0,1,1,0];let e=S.clone(t._rectangle,vt),n=t._granularity,o=t._ellipsoid,a=t._rotation-t._stRotation,r=Ht(e,n,a,o,vt),i=se;i[0].x=r.west,i[0].y=r.south,i[1].x=r.west,i[1].y=r.north,i[2].x=r.east,i[2].y=r.south;let s=t.rectangle,l=At.fromRotation(t._stRotation,re),u=S.center(s,ce);for(let f=0;f<3;++f){let t=i[f];t.x-=u.longitude,t.y-=u.latitude,At.multiplyByVector(l,t,t),t.x+=u.longitude,t.y+=u.latitude,t.x=(t.x-s.west)/s.width,t.y=(t.y-s.south)/s.height}let c=i[0],p=i[1],m=i[2],h=new Array(6);return G.pack(c,h),G.pack(p,h,2),G.pack(m,h,4),h}Object.defineProperties(Q.prototype,{rectangle:{get:function(){return $(this._rotatedRectangle)||(this._rotatedRectangle=Ht(this._rectangle,this._granularity,this._rotation,this._ellipsoid)),this._rotatedRectangle}},textureCoordinateRotationPoints:{get:function(){return $(this._textureCoordinateRotationPoints)||(this._textureCoordinateRotationPoints=le(this)),this._textureCoordinateRotationPoints}}});var Ot=Q;function fe(t,e){return $(e)&&(t=Ot.unpack(t,e)),t._ellipsoid=H.clone(t._ellipsoid),t._rectangle=S.clone(t._rectangle),Ot.createGeometry(t)}var Ye=fe;export{Ye as default};