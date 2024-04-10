"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[702],{53702:function(e,t,r){r.r(t),r.d(t,{default:function(){return M}});var n=r(73396);const a=e=>((0,n.dD)("data-v-4f41587c"),e=e(),(0,n.Cn)(),e),i={class:"container"},o=a((()=>(0,n._)("div",{id:"cesiumContainer"},null,-1))),s=a((()=>(0,n._)("canvas",{id:"threeContainer"},null,-1))),c=[o,s];function l(e,t,r,a,o,s){return(0,n.wg)(),(0,n.iD)("div",i,c)}r(57658);var d=r(15863),h=r(12062),u=r(40617),m=r(70805),w=r(33350),v=r(11114);const p={viewer:null},f={renderer:null,camera:null,scene:null};let g=[115.23,39.55],x=[116.23,41.55];const S=[];function D(){this.threeMesh=null,this.minWGS84=null,this.maxWGS84=null}var y={mounted(){this.init()},methods:{init(){this.initCesium(),this.initThreejs(),this.init3DObject(),this.startRenderLoop()},initCesium(){p.viewer=new d.Z("cesiumContainer",{useDefaultRenderLoop:!1,selectionIndicator:!1,infoBox:!1,navigationInstructionsInitiallyVisible:!1,fullscreenButton:!1,allowTextureFilterAnisotropic:!1,contextOptions:{webgl:{alpha:!1,antialias:!0,preserveDrawingBuffer:!0,failIfMajorPerformanceCaveat:!1,depth:!0,stencil:!1,anialias:!1}},targetFrameRate:60,resolutionScale:.1,orderIndependentTranslucency:!0,imageryProvider:void 0,baseLayerPicker:!1,automaticallyTrackDataSourceClocks:!1,dataSources:null,clock:null,terrainShadows:h.Z.DISABLED});const e=u.Z.fromDegrees((g[0]+x[0])/2,(g[1]+x[1])/2-1,2e5);p.viewer.camera.flyTo({destination:e,orientation:{heading:m.Z.toRadians(0),pitch:m.Z.toRadians(-60),roll:m.Z.toRadians(0)},duration:3})},initThreejs(){const e=document.querySelector("#threeContainer"),t=new v.CP7({canvas:e,alpha:!0,logarithmicDepthBuffer:!0,antialias:!0});var r=45,n=e.clientWidth,a=e.clientHeight,i=n/a,o=1,s=1e7;const c=new v.cPb(r,i,o,s),l=new v.xsS;f.renderer=t,f.scene=l,f.camera=c},init3DObject(){const e={name:"Polygon",polygon:{hierarchy:u.Z.fromDegreesArray([g[0],g[1],x[0],g[1],x[0],x[1],g[0],x[1]]),material:w.Z.RED.withAlpha(.2)}};p.viewer.entities.add(e);for(var t=new v.RSm({side:v.ehD}),r=10,n=[],a=0;a<r;a++)n.push(new v.FM8(Math.sin(.2*a)*r+5,2*(a-5)));var i=new v.p7y(n),o=new v.Kj0(i,t);o.scale.set(1500,1500,1500),o.position.z+=15e3,o.rotation.x=Math.PI/2;var s=new v.ZAu;s.add(o),f.scene.add(s);var c=new D;c.threeMesh=s,c.minWGS84=g,c.maxWGS84=x,S.push(c),i=new v.Kgo;var l=new v.Kj0(i,new v.RSm);l.scale.set(1e4,1e4,1e4),l.position.z+=1e4,l.rotation.x=Math.PI/2;var d=new v.ZAu;d.add(l),f.scene.add(d),c=new D,c.threeMesh=d,c.minWGS84=g,c.maxWGS84=x,S.push(c);for(const h in S){g=S[h].minWGS84,x=S[h].maxWGS84;const e=u.Z.fromDegrees((g[0]+x[0])/2,(g[1]+x[1])/2),t=u.Z.fromDegrees((g[0]+x[0])/2,(g[1]+x[1])/2,1);S[h].threeMesh.position.copy(e),S[h].threeMesh.lookAt(t.x,t.y,t.z)}},threeRender(){f.camera.matrixAutoUpdate=!1;const e=p.viewer.camera.viewMatrix,t=p.viewer.camera.inverseViewMatrix;f.camera.lookAt(0,0,0),f.camera.matrixWorld.set(t[0],t[4],t[8],t[12],t[1],t[5],t[9],t[13],t[2],t[6],t[10],t[14],t[3],t[7],t[11],t[15]),f.camera.matrixWorldInverse.set(e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15]);const r=f.renderer.domElement;f.renderer.setPixelRatio(window.devicePixelRatio);const n=r.clientWidth,a=r.clientHeight,i=r.width!==n||r.height!==a;i&&f.renderer.setSize(n,a,!1),f.camera.aspect=n/a,f.camera.fov=m.Z.toDegrees(p.viewer.camera.frustum.fovy),f.camera.updateProjectionMatrix(),f.renderer.render(f.scene,f.camera)},startRenderLoop(){p.viewer.render(),this.threeRender(),requestAnimationFrame(this.startRenderLoop)}}},R=r(40089);const Z=(0,R.Z)(y,[["render",l],["__scopeId","data-v-4f41587c"]]);var M=Z}}]);
//# sourceMappingURL=702.7cf51442.js.map