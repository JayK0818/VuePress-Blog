import{_ as n,o as l,c as h,t as r}from"./app.fae5d520.js";function c(t,i=300){let e=null;return function(){let o=this,s=arguments;e||(e=setTimeout(function(){t.apply(o,s),clearTimeout(e),e=null},i))}}const a={name:"Throttle-Delay",data(){return{width:0,height:0}},created(){this.setSize(),this.setSizeThrottle=c(this.setSize,1e3)},methods:{setSize(){let t=document.documentElement.clientWidth,i=document.documentElement.clientHeight;this.width=t,this.height=i}},mounted(){window.addEventListener("resize",this.setSizeThrottle,!1)},beforeDestroy(){window.removeEventListener("resize",this.setSizeThrottle,!1)}},d={style:{color:"red"}};function u(t,i,e,o,s,m){return l(),h("div",d," \u65F6\u95F4\u95F4\u9694\u4E3A 1s : "+r(s.width)+"px X "+r(s.height)+"px",1)}var f=n(a,[["render",u],["__file","ThrottleDelay.vue"]]);export{f as default};
