"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[506],{85506:function(i,e,t){t.r(e),t.d(e,{default:function(){return m}});var s=t(73396);const n={id:"cesiumContainer"};function o(i,e,t,o,a,c){return(0,s.wg)(),(0,s.iD)("div",n)}var a=t(51119),c=t(28807),r=t(51625),h=t(69530),d=t(74683),l=t(40617),v=t(31724),p=t(33350),u=t(15863),w=t(40985);class Z{constructor(i){this.layer=new a.Z("MyCircles"),this.center=void 0,this.activePosition=void 0,this.activeShape=void 0,this.handler=void 0}bindAction(i){this.handler||(this.handler=new c.Z(i.scene.canvas)),this.handler.setInputAction((e=>{const t=this.getPosition(i,e.position);r.Z(t)&&(this.center||(this.center=t))}),h.Z.LEFT_CLICK),this.handler.setInputAction((e=>{if(this.center){const t=this.getPosition(i,e.endPosition);if(r.Z(t)&&(this.activePosition=t,!this.activeShape)){const i=new d.Z((()=>l.Z.distance(this.center,this.activePosition)),!1);this.activeShape=this.drawCircle(this.center,i)}}}),h.Z.MOUSE_MOVE),this.handler.setInputAction((e=>{if(this.activeShape){const t=this.getPosition(i,e.position);if(r.Z(t)){const i=l.Z.distance(this.center,t);this.drawCircle(this.center,i),this.layer.entities.remove(this.activeShape),this.center=void 0,this.activePosition=void 0,this.activeShape=void 0}}}),h.Z.RIGHT_CLICK)}unbindAcion(){this.handler=this.handler&&this.handler.destroy()}getPosition(i,e){let t;if(i.terrainProvider instanceof v.Z)t=i.scene.camera.pickEllipsoid(e);else{const s=i.camera.getPickRay(e);t=i.scene.globe.pick(s,i.scene)}return t}drawCircle(i,e){return this.layer.entities.add({position:i,ellipse:{semiMinorAxis:e,semiMajorAxis:e,material:p.Z.RED.withAlpha(.5)}})}addToMap(i){i.dataSources.add(this.layer)}}var P={mounted(){this.init()},methods:{init(){const i=new u.Z("cesiumContainer",{infoBox:!1,selectionIndicator:!1});w.Z.supportsImageRenderingPixelated()&&(i.resolutionScale=window.devicePixelRatio),i.scene.postProcessStages.fxaa.enabled=!0,i.scene.debugShowFramesPerSecond=!0;const e=new Z;e.bindAction(i),e.addToMap(i)}}},f=t(40089);const g=(0,f.Z)(P,[["render",o],["__scopeId","data-v-c27719da"]]);var m=g}}]);
//# sourceMappingURL=506.eb554704.js.map