import{a6 as u,_ as d,f as _,$ as t,o as p,c as l,b as r,t as n,a,w as s,a0 as c,a1 as m,a2 as f,d as i}from"./app.084d5aed.js";const h=u("counter",{state(){return{count:0}},getters:{double:e=>e.count*2},actions:{increment(){this.count+=1},decrement(){this.count-=1}}});const v=_({name:"state",components:{[t.name]:t},setup(){return{counter:h()}}}),S=e=>(m("data-v-33a88696"),e=e(),f(),e),g=S(()=>r("h4",null,"Pinia\u57FA\u672C\u4F7F\u7528",-1)),y={class:"count"},C=i("increment"),b=i("decrement");function k(e,w,x,$,I,z){const o=t;return p(),l("div",null,[g,r("div",y,n(e.counter.count)+" --> "+n(e.counter.double),1),a(o,{onClick:c(e.counter.increment,["stop"]),type:"primary",size:"small"},{default:s(()=>[C]),_:1},8,["onClick"]),a(o,{onClick:c(e.counter.decrement,["stop"]),type:"primary",size:"small"},{default:s(()=>[b]),_:1},8,["onClick"])])}var N=d(v,[["render",k],["__scopeId","data-v-33a88696"],["__file","State.vue"]]);export{N as default};