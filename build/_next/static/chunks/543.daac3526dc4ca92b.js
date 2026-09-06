(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[543],{60543:function(e,t,i){"use strict";i.r(t);var r=i(57437),o=i(48906),s=i(2265),n=i(72079),a=i(51448);i(37064);let h={onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:10,islandWidth:2,lanesPerRoad:4,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:20,lightPairsPerRoadWay:40,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[12,80],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.8,.8],carFloorSeparation:[0,5],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:16777215,brokenLines:16777215,leftCars:[14177983,6770850,12732332],rightCars:[242627,941733,3294549],sticks:242627}};t.default=e=>{let{effectOptions:t=h}=e,i=(0,s.useRef)(null),u=(0,s.useRef)(null);return(0,s.useEffect)(()=>{if(u.current){u.current.dispose(),u.current=null;let e=i.current;if(e)for(;e.firstChild;)e.removeChild(e.firstChild)}let e={uFreq:{value:new n.Pa4(3,6,10)},uAmp:{value:new n.Pa4(30,30,20)}},r={uFreq:{value:new n.FM8(5,2)},uAmp:{value:new n.FM8(25,15)}},s={uFreq:{value:new n.FM8(2,3)},uAmp:{value:new n.FM8(35,10)}},l={uFreq:{value:new n.Ltg(4,8,8,1)},uAmp:{value:new n.Ltg(25,5,10,10)}},d={uFreq:{value:new n.FM8(4,8)},uAmp:{value:new n.FM8(10,20)},uPowY:{value:new n.FM8(20,2)}},c=e=>.5*Math.sin(e)+.5,p={mountainDistortion:{uniforms:e,getDistortion:`
          uniform vec3 uAmp;
          uniform vec3 uFreq;
          #define PI 3.14159265358979
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          vec3 getDistortion(float progress){
            float movementProgressFix = 0.02;
            return vec3( 
              cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
              nsin(progress * PI * uFreq.y + uTime) * uAmp.y - nsin(movementProgressFix * PI * uFreq.y + uTime) * uAmp.y,
              nsin(progress * PI * uFreq.z + uTime) * uAmp.z - nsin(movementProgressFix * PI * uFreq.z + uTime) * uAmp.z
            );
          }
        `,getJS:(t,i)=>{let r=e.uFreq.value,o=e.uAmp.value,s=new n.Pa4(Math.cos(t*Math.PI*r.x+i)*o.x-Math.cos(.02*Math.PI*r.x+i)*o.x,c(t*Math.PI*r.y+i)*o.y-c(.02*Math.PI*r.y+i)*o.y,c(t*Math.PI*r.z+i)*o.z-c(.02*Math.PI*r.z+i)*o.z),a=new n.Pa4(2,2,2),h=new n.Pa4(0,0,-5);return s.multiply(a).add(h)}},xyDistortion:{uniforms:r,getDistortion:`
          uniform vec2 uFreq;
          uniform vec2 uAmp;
          #define PI 3.14159265358979
          vec3 getDistortion(float progress){
            float movementProgressFix = 0.02;
            return vec3( 
              cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
              sin(progress * PI * uFreq.y + PI/2. + uTime) * uAmp.y - sin(movementProgressFix * PI * uFreq.y + PI/2. + uTime) * uAmp.y,
              0.
            );
          }
        `,getJS:(e,t)=>{let i=r.uFreq.value,o=r.uAmp.value,s=new n.Pa4(Math.cos(e*Math.PI*i.x+t)*o.x-Math.cos(.02*Math.PI*i.x+t)*o.x,Math.sin(e*Math.PI*i.y+t+Math.PI/2)*o.y-Math.sin(.02*Math.PI*i.y+t+Math.PI/2)*o.y,0),a=new n.Pa4(2,.4,1),h=new n.Pa4(0,0,-3);return s.multiply(a).add(h)}},LongRaceDistortion:{uniforms:s,getDistortion:`
          uniform vec2 uFreq;
          uniform vec2 uAmp;
          #define PI 3.14159265358979
          vec3 getDistortion(float progress){
            float camProgress = 0.0125;
            return vec3( 
              sin(progress * PI * uFreq.x + uTime) * uAmp.x - sin(camProgress * PI * uFreq.x + uTime) * uAmp.x,
              sin(progress * PI * uFreq.y + uTime) * uAmp.y - sin(camProgress * PI * uFreq.y + uTime) * uAmp.y,
              0.
            );
          }
        `,getJS:(e,t)=>{let i=s.uFreq.value,r=s.uAmp.value,o=new n.Pa4(Math.sin(e*Math.PI*i.x+t)*r.x-Math.sin(.0125*Math.PI*i.x+t)*r.x,Math.sin(e*Math.PI*i.y+t)*r.y-Math.sin(.0125*Math.PI*i.y+t)*r.y,0),a=new n.Pa4(1,1,0),h=new n.Pa4(0,0,-5);return o.multiply(a).add(h)}},turbulentDistortion:{uniforms:l,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              cos(PI * progress * uFreq.r + uTime) * uAmp.r +
              pow(cos(PI * progress * uFreq.g + uTime * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
            );
          }
          float getDistortionY(float progress){
            return (
              -nsin(PI * progress * uFreq.b + uTime) * uAmp.b +
              -pow(nsin(PI * progress * uFreq.a + uTime / (uFreq.b / uFreq.a)), 5.) * uAmp.a
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.0125),
              getDistortionY(progress) - getDistortionY(0.0125),
              0.
            );
          }
        `,getJS:(e,t)=>{let i=l.uFreq.value,r=l.uAmp.value,o=e=>Math.cos(Math.PI*e*i.x+t)*r.x+Math.pow(Math.cos(Math.PI*e*i.y+i.y/i.x*t),2)*r.y,s=e=>-c(Math.PI*e*i.z+t)*r.z-Math.pow(c(Math.PI*e*i.w+t/(i.z/i.w)),5)*r.w,a=new n.Pa4(o(e)-o(e+.007),s(e)-s(e+.007),0),h=new n.Pa4(-2,-5,0),u=new n.Pa4(0,0,-10);return a.multiply(h).add(u)}},turbulentDistortionStill:{uniforms:l,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              cos(PI * progress * uFreq.r) * uAmp.r +
              pow(cos(PI * progress * uFreq.g * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
            );
          }
          float getDistortionY(float progress){
            return (
              -nsin(PI * progress * uFreq.b) * uAmp.b +
              -pow(nsin(PI * progress * uFreq.a / (uFreq.b / uFreq.a)), 5.) * uAmp.a
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.02),
              getDistortionY(progress) - getDistortionY(0.02),
              0.
            );
          }
        `},deepDistortionStill:{uniforms:d,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          uniform vec2 uPowY;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              sin(progress * PI * uFreq.x) * uAmp.x * 2.
            );
          }
          float getDistortionY(float progress){
            return (
              pow(abs(progress * uPowY.x), uPowY.y) + sin(progress * PI * uFreq.y) * uAmp.y
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.02),
              getDistortionY(progress) - getDistortionY(0.05),
              0.
            );
          }
        `},deepDistortion:{uniforms:d,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          uniform vec2 uPowY;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              sin(progress * PI * uFreq.x + uTime) * uAmp.x
            );
          }
          float getDistortionY(float progress){
            return (
              pow(abs(progress * uPowY.x), uPowY.y) + sin(progress * PI * uFreq.y + uTime) * uAmp.y
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.02),
              getDistortionY(progress) - getDistortionY(0.02),
              0.
            );
          }
        `,getJS:(e,t)=>{let i=d.uFreq.value,r=d.uAmp.value,o=d.uPowY.value,s=e=>Math.sin(e*Math.PI*i.x+t)*r.x,a=e=>Math.pow(e*o.x,o.y)+Math.sin(e*Math.PI*i.y+t)*r.y,h=new n.Pa4(s(e)-s(e+.01),a(e)-a(e+.01),0),u=new n.Pa4(-2,-4,0),l=new n.Pa4(0,0,-10);return h.multiply(u).add(l)}}};class g{constructor(e,t={}){this.options=t,null==this.options.distortion&&(this.options.distortion={uniforms:m,getDistortion:f}),this.container=e,this.hasValidSize=!1,this.disposed=!1;let i=Math.max(1,e.offsetWidth||window.innerWidth),r=Math.max(1,e.offsetHeight||window.innerHeight);try{this.renderer=new a.CP7({antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1,failIfMajorPerformanceCaveat:!1});let s=t.colors&&null!=t.colors.background?t.colors.background:328965;this.renderer.setClearColor(s,1),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setSize(i,r,!1),this.composer=new o.xC(this.renderer),e.append(this.renderer.domElement),this.webglSupported=!0}catch(e){console.warn("WebGL or postprocessing not supported, disabling Hyperspeed.",e),this.webglSupported=!1;return}this.camera=new n.cPb(t.fov,i/r,.1,1e4),this.camera.position.z=-5,this.camera.position.y=8,this.camera.position.x=0,this.scene=new n.xsS;let s=t.colors&&null!=t.colors.background?t.colors.background:328965;this.scene.background=new n.Ilk(s);let h=new n.ybr(s,.2*t.length,500*t.length);this.scene.fog=h,this.fogUniforms={fogColor:{value:h.color},fogNear:{value:h.near},fogFar:{value:h.far}},this.clock=new n.SUY,this.assets={},this.road=new S(this,t),this.leftCarLights=new x(this,t,t.colors.leftCars,t.movingAwaySpeed,new n.FM8(0,1-t.carLightsFade)),this.rightCarLights=new x(this,t,t.colors.rightCars,t.movingCloserSpeed,new n.FM8(1,0+t.carLightsFade)),this.leftSticks=new F(this,t),this.fovTarget=t.fov,this.speedUpTarget=0,this.speedUp=0,this.timeOffset=0,this.tick=this.tick.bind(this),this.init=this.init.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onContextMenu=this.onContextMenu.bind(this),window.addEventListener("resize",this.onWindowResize,{passive:!0}),"undefined"!=typeof ResizeObserver&&this.container&&(this.resizeObserver=new ResizeObserver(()=>{this.onWindowResize()}),this.resizeObserver.observe(this.container)),i>0&&r>0&&(this.hasValidSize=!0)}onWindowResize(){if(!this.webglSupported||this.disposed||!this.container)return;let e=this.container.offsetWidth,t=this.container.offsetHeight;e<=0||t<=0||this.currentWidth===e&&this.currentHeight===t||(this.currentWidth=e,this.currentHeight=t,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.composer&&this.composer.setSize(e,t,!1),this.hasValidSize=!0)}initPasses(){this.webglSupported&&(this.renderPass=new o.CD(this.scene,this.camera),this.bloomPass=new o.H5(this.camera,new o.rk({luminanceThreshold:.25,luminanceSmoothing:.35,resolutionScale:.5})),this.renderPass.renderToScreen=!1,this.bloomPass.renderToScreen=!0,this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass))}init(){if(!this.webglSupported||this.disposed)return;try{this.initPasses()}catch(e){console.warn("Postprocessing passes failed to init, falling back to basic render.",e),this.renderPass&&(this.renderPass.renderToScreen=!0)}let e=this.options;this.road.init(),this.leftCarLights.init(),this.leftCarLights.mesh.position.setX(-e.roadWidth/2-e.islandWidth/2),this.rightCarLights.init(),this.rightCarLights.mesh.position.setX(e.roadWidth/2+e.islandWidth/2),this.leftSticks.init(),this.leftSticks.mesh.position.setX(-(e.roadWidth+e.islandWidth/2)),this.container.addEventListener("mousedown",this.onMouseDown),this.container.addEventListener("mouseup",this.onMouseUp),this.container.addEventListener("mouseout",this.onMouseUp),this.container.addEventListener("touchstart",this.onTouchStart,{passive:!0}),this.container.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.container.addEventListener("touchcancel",this.onTouchEnd,{passive:!0}),this.container.addEventListener("contextmenu",this.onContextMenu),this.onWindowResize(),this.tick()}onMouseDown(e){this.webglSupported&&(this.options.onSpeedUp&&this.options.onSpeedUp(e),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp)}onMouseUp(e){this.webglSupported&&(this.options.onSlowDown&&this.options.onSlowDown(e),this.fovTarget=this.options.fov,this.speedUpTarget=0)}onTouchStart(e){this.webglSupported&&(this.options.onSpeedUp&&this.options.onSpeedUp(e),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp)}onTouchEnd(e){this.webglSupported&&(this.options.onSlowDown&&this.options.onSlowDown(e),this.fovTarget=this.options.fov,this.speedUpTarget=0)}onContextMenu(e){e.preventDefault()}update(e){if(!this.webglSupported||this.disposed)return;let t=Math.exp(-(-60*Math.log2(.9))*e);this.speedUp+=P(this.speedUp,this.speedUpTarget,t,1e-5),this.timeOffset+=this.speedUp*e;let i=this.clock.elapsedTime+this.timeOffset;this.rightCarLights.update(i),this.leftCarLights.update(i),this.leftSticks.update(i),this.road.update(i);let r=!1,o=P(this.camera.fov,this.fovTarget,t);if(0!==o&&(this.camera.fov+=o*e*6,r=!0),this.options.distortion.getJS){let e=this.options.distortion.getJS(.025,i);this.camera.lookAt(new n.Pa4(this.camera.position.x+e.x,this.camera.position.y+e.y,this.camera.position.z+e.z)),r=!0}r&&this.camera.updateProjectionMatrix()}render(e){this.webglSupported&&!this.disposed&&(this.composer&&this.bloomPass?this.composer.render(e):this.renderer&&this.renderer.render(this.scene,this.camera))}dispose(){if(this.webglSupported){if(this.disposed=!0,this.animationFrameId&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null),window.removeEventListener("resize",this.onWindowResize),this.container&&(this.container.removeEventListener("mousedown",this.onMouseDown),this.container.removeEventListener("mouseup",this.onMouseUp),this.container.removeEventListener("mouseout",this.onMouseUp),this.container.removeEventListener("touchstart",this.onTouchStart),this.container.removeEventListener("touchend",this.onTouchEnd),this.container.removeEventListener("touchcancel",this.onTouchEnd),this.container.removeEventListener("contextmenu",this.onContextMenu)),this.scene&&(this.scene.traverse(e=>{e.isMesh&&(e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.dispose()):e.material.dispose()))}),this.scene.clear()),this.composer)try{this.composer.dispose()}catch(e){}if(this.renderer)try{this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement&&this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement)}catch(e){}}}tick(){if(this.disposed||!this.webglSupported)return;if(!this.hasValidSize){let e=this.container?this.container.offsetWidth:0,t=this.container?this.container.offsetHeight:0;if(e>0&&t>0)this.onWindowResize();else{this.animationFrameId=requestAnimationFrame(this.tick);return}}let e=Math.min(this.clock.getDelta(),.1);this.render(e),this.update(e),this.animationFrameId=requestAnimationFrame(this.tick)}}let m={uDistortionX:{value:new n.FM8(80,3)},uDistortionY:{value:new n.FM8(-40,2.5)}},f=`
      #define PI 3.14159265358979
      uniform vec2 uDistortionX;
      uniform vec2 uDistortionY;
      float nsin(float val){
        return sin(val) * 0.5 + 0.5;
      }
      vec3 getDistortion(float progress){
        progress = clamp(progress, 0., 1.);
        float xAmp = uDistortionX.r;
        float xFreq = uDistortionX.g;
        float yAmp = uDistortionY.r;
        float yFreq = uDistortionY.g;
        return vec3( 
          xAmp * nsin(progress * PI * xFreq - PI / 2.),
          yAmp * nsin(progress * PI * yFreq - PI / 2.),
          0.
        );
      }
    `,v=e=>Array.isArray(e)?Math.random()*(e[1]-e[0])+e[0]:Math.random()*e,w=e=>Array.isArray(e)?e[Math.floor(Math.random()*e.length)]:e;function P(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.001,o=(t-e)*i;return Math.abs(o)<r&&(o=t-e),o}class x{constructor(e,t,i,r,o){this.webgl=e,this.options=t,this.colors=i,this.speed=r,this.fade=o}init(){let e=this.options,t=new n.U7(new n.Pa4(0,0,0),new n.Pa4(0,0,-1)),i=new n.WXh(t,40,1,8,!1),r=new n.L5s().copy(i);r.instanceCount=2*e.lightPairsPerRoadWay;let o=e.roadWidth/e.lanesPerRoad,s=[],a=[],h=[],u=this.colors;u=Array.isArray(u)?u.map(e=>new n.Ilk(e)):new n.Ilk(u);for(let t=0;t<e.lightPairsPerRoadWay;t++){let i=v(e.carLightsRadius),r=v(e.carLightsLength),n=v(this.speed),l=t%e.lanesPerRoad*o-e.roadWidth/2+o/2,d=v(e.carWidthPercentage)*o;l+=v(e.carShiftX)*o;let c=v(e.carFloorSeparation)+1.3*i,p=-v(e.length);s.push(l-d/2),s.push(c),s.push(p),s.push(l+d/2),s.push(c),s.push(p),a.push(i),a.push(r),a.push(n),a.push(i),a.push(r),a.push(n);let g=w(u);h.push(g.r),h.push(g.g),h.push(g.b),h.push(g.r),h.push(g.g),h.push(g.b)}r.setAttribute("aOffset",new n.lb7(new Float32Array(s),3,!1)),r.setAttribute("aMetrics",new n.lb7(new Float32Array(a),3,!1)),r.setAttribute("aColor",new n.lb7(new Float32Array(h),3,!1));let l=new n.jyz({fragmentShader:y,vertexShader:b,transparent:!0,uniforms:Object.assign({uTime:{value:0},uTravelLength:{value:e.length},uFade:{value:this.fade}},this.webgl.fogUniforms,e.distortion.uniforms)});l.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <getDistortion_vertex>",e.distortion.getDistortion)};let d=new n.Kj0(r,l);d.frustumCulled=!1,this.webgl.scene.add(d),this.mesh=d}update(e){this.mesh.material.uniforms.uTime.value=e}}let y=`
      #define USE_FOG;
      ${a.WdD.fog_pars_fragment}
      varying vec3 vColor;
      varying vec2 vUv; 
      uniform vec2 uFade;
      void main() {
        vec3 color = vec3(vColor);
        float alpha = smoothstep(uFade.x, uFade.y, vUv.x);
        gl_FragColor = vec4(color, alpha);
        if (gl_FragColor.a < 0.0001) discard;
        ${a.WdD.fog_fragment}
      }
    `,b=`
      #define USE_FOG;
      ${a.WdD.fog_pars_vertex}
      attribute vec3 aOffset;
      attribute vec3 aMetrics;
      attribute vec3 aColor;
      uniform float uTravelLength;
      uniform float uTime;
      varying vec2 vUv; 
      varying vec3 vColor; 
      #include <getDistortion_vertex>
      void main() {
        vec3 transformed = position.xyz;
        float radius = aMetrics.r;
        float myLength = aMetrics.g;
        float speed = aMetrics.b;

        transformed.xy *= radius;
        transformed.z *= myLength;

        transformed.z += myLength - mod(uTime * speed + aOffset.z, uTravelLength);
        transformed.xy += aOffset.xy;

        float progress = abs(transformed.z / uTravelLength);
        transformed.xyz += getDistortion(progress);

        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vUv = uv;
        vColor = aColor;
        ${a.WdD.fog_vertex}
      }
    `;class F{constructor(e,t){this.webgl=e,this.options=t}init(){let e=this.options,t=new n._12(1,1),i=new n.L5s().copy(t),r=e.totalSideLightSticks;i.instanceCount=r;let o=e.length/(r-1),s=[],a=[],h=[],u=e.colors.sticks;u=Array.isArray(u)?u.map(e=>new n.Ilk(e)):new n.Ilk(u);for(let t=0;t<r;t++){let i=v(e.lightStickWidth),r=v(e.lightStickHeight);s.push((t-1)*o*2+o*Math.random());let n=w(u);a.push(n.r),a.push(n.g),a.push(n.b),h.push(i),h.push(r)}i.setAttribute("aOffset",new n.lb7(new Float32Array(s),1,!1)),i.setAttribute("aColor",new n.lb7(new Float32Array(a),3,!1)),i.setAttribute("aMetrics",new n.lb7(new Float32Array(h),2,!1));let l=new n.jyz({fragmentShader:L,vertexShader:M,side:n.ehD,uniforms:Object.assign({uTravelLength:{value:e.length},uTime:{value:0}},this.webgl.fogUniforms,e.distortion.uniforms)});l.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <getDistortion_vertex>",e.distortion.getDistortion)};let d=new n.Kj0(i,l);d.frustumCulled=!1,this.webgl.scene.add(d),this.mesh=d}update(e){this.mesh.material.uniforms.uTime.value=e}}let M=`
      #define USE_FOG;
      ${a.WdD.fog_pars_vertex}
      attribute float aOffset;
      attribute vec3 aColor;
      attribute vec2 aMetrics;
      uniform float uTravelLength;
      uniform float uTime;
      varying vec3 vColor;
      mat4 rotationY( in float angle ) {
        return mat4(	cos(angle),		0,		sin(angle),	0,
                     0,		1.0,			 0,	0,
                -sin(angle),	0,		cos(angle),	0,
                0, 		0,				0,	1);
      }
      #include <getDistortion_vertex>
      void main(){
        vec3 transformed = position.xyz;
        float width = aMetrics.x;
        float height = aMetrics.y;

        transformed.xy *= vec2(width, height);
        float time = mod(uTime * 60. * 2. + aOffset, uTravelLength);

        transformed = (rotationY(3.14/2.) * vec4(transformed,1.)).xyz;

        transformed.z += - uTravelLength + time;

        float progress = abs(transformed.z / uTravelLength);
        transformed.xyz += getDistortion(progress);

        transformed.y += height / 2.;
        transformed.x += -width / 2.;
        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vColor = aColor;
        ${a.WdD.fog_vertex}
      }
    `,L=`
      #define USE_FOG;
      ${a.WdD.fog_pars_fragment}
      varying vec3 vColor;
      void main(){
        vec3 color = vec3(vColor);
        gl_FragColor = vec4(color,1.);
        ${a.WdD.fog_fragment}
      }
    `;class S{constructor(e,t){this.webgl=e,this.options=t,this.uTime={value:0}}createPlane(e,t,i){let r=this.options,o=new n._12(i?r.roadWidth:r.islandWidth,r.length,20,100),s={uTravelLength:{value:r.length},uColor:{value:new n.Ilk(i?r.colors.roadColor:r.colors.islandColor)},uTime:this.uTime};i&&(s=Object.assign(s,{uLanes:{value:r.lanesPerRoad},uBrokenLinesColor:{value:new n.Ilk(r.colors.brokenLines)},uShoulderLinesColor:{value:new n.Ilk(r.colors.shoulderLines)},uShoulderLinesWidthPercentage:{value:r.shoulderLinesWidthPercentage},uBrokenLinesLengthPercentage:{value:r.brokenLinesLengthPercentage},uBrokenLinesWidthPercentage:{value:r.brokenLinesWidthPercentage}}));let a=new n.jyz({fragmentShader:i?W:I,vertexShader:k,side:n.ehD,uniforms:Object.assign(s,this.webgl.fogUniforms,r.distortion.uniforms)});a.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <getDistortion_vertex>",r.distortion.getDistortion)};let h=new n.Kj0(o,a);return h.rotation.x=-Math.PI/2,h.position.z=-r.length/2,h.position.x+=(this.options.islandWidth/2+r.roadWidth/2)*e,this.webgl.scene.add(h),h}init(){this.leftRoadWay=this.createPlane(-1,this.options.roadWidth,!0),this.rightRoadWay=this.createPlane(1,this.options.roadWidth,!0),this.island=this.createPlane(0,this.options.islandWidth,!1)}update(e){this.uTime.value=e}}let D=`
      #define USE_FOG;
      varying vec2 vUv; 
      uniform vec3 uColor;
      uniform float uTime;
      #include <roadMarkings_vars>
      ${a.WdD.fog_pars_fragment}
      void main() {
        vec2 uv = vUv;
        vec3 color = vec3(uColor);
        #include <roadMarkings_fragment>
        gl_FragColor = vec4(color, 1.);
        ${a.WdD.fog_fragment}
      }
    `,I=D.replace("#include <roadMarkings_fragment>","").replace("#include <roadMarkings_vars>",""),T=`
      uniform float uLanes;
      uniform vec3 uBrokenLinesColor;
      uniform vec3 uShoulderLinesColor;
      uniform float uShoulderLinesWidthPercentage;
      uniform float uBrokenLinesWidthPercentage;
      uniform float uBrokenLinesLengthPercentage;
      highp float random(vec2 co) {
        highp float a = 12.9898;
        highp float b = 78.233;
        highp float c = 43758.5453;
        highp float dt = dot(co.xy, vec2(a, b));
        highp float sn = mod(dt, 3.14);
        return fract(sin(sn) * c);
      }
    `,A=`
      uv.y = mod(uv.y + uTime * 0.05, 1.);
      float laneWidth = 1.0 / uLanes;
      float brokenLineWidth = laneWidth * uBrokenLinesWidthPercentage;
      float laneEmptySpace = 1. - uBrokenLinesLengthPercentage;

      float brokenLines = step(1.0 - brokenLineWidth, fract(uv.x * 2.0)) * step(laneEmptySpace, fract(uv.y * 10.0));
      float sideLines = step(1.0 - brokenLineWidth, fract((uv.x - laneWidth * (uLanes - 1.0)) * 2.0)) + step(brokenLineWidth, uv.x);

      brokenLines = mix(brokenLines, sideLines, uv.x);
    `,W=D.replace("#include <roadMarkings_fragment>",A).replace("#include <roadMarkings_vars>",T),k=`
      #define USE_FOG;
      uniform float uTime;
      ${a.WdD.fog_pars_vertex}
      uniform float uTravelLength;
      varying vec2 vUv; 
      #include <getDistortion_vertex>
      void main() {
        vec3 transformed = position.xyz;
        vec3 distortion = getDistortion((transformed.y + uTravelLength / 2.) / uTravelLength);
        transformed.x += distortion.x;
        transformed.z += distortion.y;
        transformed.y += -1. * distortion.z;  
        
        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vUv = uv;
        ${a.WdD.fog_vertex}
      }
    `,C=i.current;if(!C)return;let q={...h,...t,colors:{...h.colors,...t.colors}};q.distortion=p[q.distortion];let z=new g(C,q);return u.current=z,z.init(),()=>{u.current&&(u.current.dispose(),u.current=null)}},[t]),(0,r.jsx)("div",{id:"lights",ref:i,style:{width:"100%",height:"100%"}})}},37064:function(){}}]);