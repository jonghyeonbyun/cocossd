(this.webpackJsonpcocossd=this.webpackJsonpcocossd||[]).push([[0],{100:function(e,t,n){},104:function(e,t){},106:function(e,t){},137:function(e,t){},138:function(e,t){},94:function(e,t,n){"use strict";n.r(t);var i=n(87),c=n(88),r=n(93),a=n(92),o=n(16),s=n(15),u=n.n(s),d=n(89),l=n.n(d),f=(n(100),n(90)),v=(n(5),function(e){Object(r.a)(n,e);var t=Object(a.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).canvasRef=u.a.createRef(),e.videoRef=u.a.createRef(),e.detectFrame=function(t,n){n.detect(t).then((function(i){e.renderPredictions(i),requestAnimationFrame((function(){e.detectFrame(t,n)}))}))},e.renderPredictions=function(t){var n=e.canvasRef.current.getContext("2d");n.clearRect(0,0,n.canvas.width,n.canvas.height);var i="18px sans-serif";n.font=i,n.textBaseline="top",t.forEach((function(e){var t=e.bbox[0],c=e.bbox[1],r=e.bbox[2],a=e.bbox[3];n.strokeStyle="#fc685b",n.lineWidth=4,n.strokeRect(t,c,r,a),n.fillStyle="#fc685b";var o=n.measureText(e.class).width,s=parseInt(i,10);n.fillRect(t,c,o+4,s+4)})),t.forEach((function(e){var t=e.bbox[0],i=e.bbox[1];n.fillStyle="#FFFFFF",n.fillText(e.class,t,i)}))},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){var t=navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user"}}).then((function(t){return window.stream=t,e.videoRef.current.srcObject=t,new Promise((function(t,n){e.videoRef.current.onloadedmetadata=function(){t()}}))})),n=f.a();Promise.all([n,t]).then((function(t){e.detectFrame(e.videoRef.current,t[0])})).catch((function(e){console.error(e)}));var i=this.canvasRef;i.requestFullscreen?i.requestFullscreen():i.mozRequestFullScreen?i.mozRequestFullScreen():i.webkitRequestFullscreen?i.webkitRequestFullscreen():i.msRequestFullscreen&&i.msRequestFullscreen()}}},{key:"render",value:function(){return Object(o.jsxs)("div",{id:"screen",children:[Object(o.jsx)("video",{className:"size",autoPlay:!0,playsInline:!0,muted:!0,ref:this.videoRef,width:window.innerWidth,height:window.innerHeight}),Object(o.jsx)("canvas",{className:"size",ref:this.canvasRef,width:window.innerWidth,height:window.innerHeight})]})}}]),n}(u.a.Component));l.a.render(Object(o.jsx)(v,{}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.ee625aff.chunk.js.map