import{_ as n,o as r,c as h,t as s}from"./app.7b5becf5.js";function d(e,t=300){let i=0;return function(){Date.now()-i>t&&(e.apply(this,arguments),i=Date.now())}}const a={name:"Throttle-Immediate",data(){return{width:0,height:0}},created(){this.setSize(),this.setSizeThrottle=d(this.setSize,1e3)},methods:{setSize(){let e=document.documentElement.clientWidth,t=document.documentElement.clientHeight;this.width=e,this.height=t}},mounted(){window.addEventListener("resize",this.setSizeThrottle,!1)},beforeDestroy(){window.removeEventListener("resize",this.setSizeThrottle,!1)}},l={style:{color:"red"}};function m(e,t,i,c,o,u){return r(),h("div",l," \u65F6\u95F4\u95F4\u9694\u4E3A 1s : "+s(o.width)+"px X "+s(o.height)+"px",1)}var _=n(a,[["render",m],["__file","ThrottleImmediate.vue"]]);export{_ as default};
