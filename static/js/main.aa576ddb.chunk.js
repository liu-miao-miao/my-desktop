(this["webpackJsonpmy-desktop"]=this["webpackJsonpmy-desktop"]||[]).push([[0],{162:function(e,t,n){},163:function(e,t,n){var a={"./Calculator.png":164,"./Finder.png":165,"./Launchpad.png":166,"./PrefApp.png":167,"./Terminal.png":168};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=i,e.exports=o,o.id=163},164:function(e,t,n){e.exports=n.p+"static/media/Calculator.112067bf.png"},165:function(e,t,n){e.exports=n.p+"static/media/Finder.1c968893.png"},166:function(e,t,n){e.exports=n.p+"static/media/Launchpad.103dd990.png"},167:function(e,t,n){e.exports=n.p+"static/media/PrefApp.d4c5a626.png"},168:function(e,t,n){e.exports=n.p+"static/media/Terminal.27ca471e.png"},169:function(e,t,n){},171:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(14),r=n.n(i),c=(n(59),n(6));function l(e,t){var n="top"===t?e.offsetTop:e.offsetLeft;return null==e.offsetParent?n:n+l(e.offsetParent,t)}function u(e){var t=document.getElementById(e.el),n=document.getElementById(e.bg),a=Array.from(document.getElementsByTagName(e.toTag)),o=a.length,i=0,r=0,c=0,u=0;function s(){for(u=0;u<o;u++)a[u].width=e.toTagLength;"bottom"===e.type||"top"===e.type?(n.width=(o-1)*e.toTagLength,n.height=e.toTagLength):(n.height=(o-1)*e.toTagLength,n.width=e.toTagLength)}s(),t.onmousemove=function(s){for(s=s||window.event,u=0;u<o;u++)"bottom"===e.type||"left"===e.type?(r=s.clientX-(a[u].offsetLeft+e.toTagLength/2),c=a[u].offsetTop+l(t,"top")+a[u].offsetHeight/2-s.clientY):(r=s.clientY-(a[u].offsetTop+e.toTagLength/2),c=a[u].offsetLeft+l(t,"left")+a[u].offsetWidth/2-s.clientX),(i=1-Math.sqrt(r*r+c*c)/(o*e.toTagLength))<.5&&(i=.5),a[u].width=2*e.toTagLength*i;if("bottom"===e.type||"top"===e.type)for(n.width=0,u=0;u<o;u++)n.width=n.width+a[u].width;else for(n.height=0,u=0;u<o;u++)n.height=n.height+a[u].width},t.onmouseleave=function(){s()}}n(60);var s=n(9),g=o.a.memo((function(e){var t=e.children,n=(e.closeModal,e.onDrag),i=e.onDragEnd,l={x:(window.innerWidth-684)/2,y:(window.innerHeight-466)/2},u=document.getElementById("modal-root"),g=document.getElementById("drag-modal"),m=Object(a.useState)({isDragging:!1,origin:{x:0,y:0},translation:l}),d=Object(c.a)(m,2),f=d[0],p=d[1],h=Object(a.useCallback)((function(e){var t=e.clientX,n=e.clientY;p((function(e){return Object(s.a)(Object(s.a)({},e),{},{isDragging:!0,origin:{x:t,y:n}})}))}),[]),b=Object(a.useCallback)((function(e){var t=e.clientX,a=e.clientY,o=t-f.origin.x+f.translation.x,i=a-f.origin.y+f.translation.y;o<=0?o=0:o>window.innerWidth-g.offsetWidth&&(o=window.innerWidth-g.offsetWidth),i<=0?i=0:i>window.innerHeight-g.offsetHeight&&(i=window.innerHeight-g.offsetHeight),p((function(e){return Object(s.a)(Object(s.a)({},e),{},{translation:{x:o,y:i}})})),n({translation:l,domEl:u})}),[f.origin,n,u]),w=Object(a.useCallback)((function(){p((function(e){return Object(s.a)(Object(s.a)({},e),{},{isDragging:!1})})),i()}),[i]);Object(a.useEffect)((function(){f.isDragging?(window.addEventListener("mousemove",b),window.addEventListener("mouseup",w)):(window.removeEventListener("mousemove",b),window.removeEventListener("mouseup",w))}),[f.isDragging,b,w]);var E=Object(a.useMemo)((function(){return{left:"".concat(f.translation.x,"px"),top:"".concat(f.translation.y,"px"),transition:f.isDragging?"none":"transform 500ms",zIndex:f.isDragging?2:1,position:"absolute"}}),[f.isDragging,f.translation]);return u?r.a.createPortal(o.a.createElement("div",{style:E,onMouseDown:h,id:"drag-modal"},t),u):null})),m=n(7),d=(n(162),o.a.memo((function(){var e=function(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),n=t[0],i=t[1],r=function(){return i(!1)};return{show:function(){return i(!0)},hide:r,RenderModal:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,null,n&&o.a.createElement(g,{closeModal:r,onDrag:function(){return console.log("onDrag")},onDragEnd:function(){return console.log("onDragEnd")}},t))}}}(),t=e.show,n=e.hide,i=e.RenderModal,r=Object(a.useContext)(f),l=Object(c.a)(r,7),u=l[0],d=l[1],p=l[2],h=l[3],b=l[4],w=l[5],E=l[6],v=[{title:"\u56fe\u6807\u9ed8\u8ba4\u5927\u5c0f",value:w}],O=Object(a.useState)(!1),j=Object(c.a)(O,2),y=j[0],x=j[1];Object(a.useEffect)(u?t:n,[u]);var L=Object(a.useState)("\u901a\u7528"),T=Object(c.a)(L,2),k=T[0],C=T[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"modal-root"},o.a.createElement(i,null,o.a.createElement("div",{className:"SettingView"},o.a.createElement(m.View,{className:"leftSet"},o.a.createElement(m.TitleBar,{className:"TitleBar",controls:!0,inset:!0,isFullscreen:y,onCloseClick:n,onMinimizeClick:n,onMaximizeClick:t,onResizeClick:function(){return x(!y)}},o.a.createElement(m.Toolbar,{height:"24",horizontalAlignment:"center",verticalAlignment:"center"}),o.a.createElement(m.ListView,{className:"ListView",width:"172"},[{title:"\u901a\u7528"}].map((function(e,t){return o.a.createElement(m.ListViewRow,{key:e.title+t,onClick:function(){return C(e.title)},background:k===e.title?"#bfbfbf":null,padding:"11px 20px"},o.a.createElement("svg",{x:"0px",y:"0px",width:"18",height:"12",viewBox:"0 0 18 16",style:{marginRight:"6px"}},o.a.createElement("path",{fill:"#727476",d:"M13.2,0H4.9L0,6.8v3.7C0,11.3,0.7,12,1.5,12h15 c0.8,0,1.5-0.7,1.5-1.5V6.8L13.2,0z M13.8,6.8L12.3,9L5.9,9L4.2,6.8l-3.1,0l4.2-6h7.4l4.2,6L13.8,6.8z"}),o.a.createElement("polygon",{fill:"#C9CBCD",points:"13.8,6.8 12.3,9 5.9,9 4.2,6.8 1.2,6.7 5.4,0.8 12.8,0.8 17,6.7 "})),o.a.createElement(m.Text,{color:"#414141",size:"14",bold:!0},e.title))}))))),o.a.createElement(m.View,{className:"rightSet"},o.a.createElement(m.Text,{bold:!0,marginBottom:"10px",size:"20"},k),o.a.createElement("div",{className:"divide"}),v.map((function(e,t){return o.a.createElement("div",{className:"options",key:t+e.value},o.a.createElement(m.Text,{bold:!0,marginBottom:"10px"},e.title),o.a.createElement("input",{min:"25",max:"128",type:"range",value:w,onChange:function(e){E({name:"change",length:e.target.value}),b({name:"change",props:Object(s.a)(Object(s.a)({},h),{},{toTagLength:e.target.value,type:d})})}}),o.a.createElement("span",null,w))})),o.a.createElement(m.Text,{bold:!0},"Dock \u6240\u5728\u5c4f\u5e55\u4f4d\u7f6e"),o.a.createElement(m.View,null,["bottom","top","left","right"].map((function(e,t){return o.a.createElement("div",{style:{paddingRight:"24px"},key:t+e},o.a.createElement(m.Radio,{label:e,name:e,onChange:function(e){p({name:"change",position:e.target.value}),b({name:"change",props:Object(s.a)(Object(s.a)({},h),{},{toTagLength:w,type:e.target.value})})},defaultValue:e,defaultChecked:e===d}))}))))))))}))),f=Object(a.createContext)([]),p=o.a.memo((function(){var e=Object(a.useState)(["Finder.png","Launchpad.png","PrefApp.png","Terminal.png","Calculator.png"]),t=Object(c.a)(e,1)[0],i=Object(a.useReducer)((function(e,t){switch(t.name){case"change":return t.position;default:return e}}),"bottom"),r=Object(c.a)(i,2),l=r[0],s=r[1],g=Object(a.useReducer)((function(e,t){switch(t.name){case"change":return t.length;default:return e}}),76),m=Object(c.a)(g,2),p=m[0],h=m[1],b=Object(a.useReducer)((function(e,t){switch(t.name){case"change":return t.props;default:return e}}),{el:"AppFooter",bg:"DockBackground",toTag:"img",toTagLength:p,type:l}),w=Object(c.a)(b,2),E=w[0],v=w[1],O=Object(a.useState)(!1),j=Object(c.a)(O,2),y=j[0],x=j[1];return Object(a.useEffect)((function(){u(E)}),[E]),o.a.createElement(o.a.Fragment,null,o.a.createElement(f.Provider,{value:[y,l,s,E,v,p,h]},o.a.createElement(d,null)),o.a.createElement("img",{className:l,id:"DockBackground",alt:""}),o.a.createElement("footer",{className:l,id:"AppFooter"},t.map((function(e,t){return o.a.createElement("img",{src:n(163)("./"+e),alt:e,key:t+e,onClick:function(){return function(e,t){switch(e){case"PrefApp.png":return void x(!y)}}(e)}})}))))})),h=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:"AppFinder"}))},b=(n(169),n(170),function(){return o.a.createElement("div",{className:"App"},o.a.createElement(h,null),o.a.createElement(p,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},54:function(e,t,n){e.exports=n(171)},59:function(e,t,n){},60:function(e,t,n){}},[[54,1,2]]]);
//# sourceMappingURL=main.aa576ddb.chunk.js.map