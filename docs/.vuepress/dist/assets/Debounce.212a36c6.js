import{_ as d,f as l,I as i,o as p,c,b as s,t as _,F as v}from"./app.084d5aed.js";const f=l({setup(){const e=i("");function n(o,r){let t=null;return function(){t&&clearTimeout(t),t=setTimeout(()=>{o.apply(this,arguments),t&&clearTimeout(t)},r)}}const a=n(function(){const o=arguments[0].target.value.trim();e.value=o},500);return{keyword:e,handler:a}}}),m=["value"],b={class:"text"};function h(e,n,a,o,r,t){return p(),c(v,null,[s("input",{placeholder:"\u8BF7\u8F93\u5165...",class:"input",value:e.keyword,onKeyup:n[0]||(n[0]=(...u)=>e.handler&&e.handler(...u))},null,40,m),s("div",b,_(e.keyword),1)],64)}var y=d(f,[["render",h],["__scopeId","data-v-511104b4"],["__file","Debounce.vue"]]);export{y as default};
