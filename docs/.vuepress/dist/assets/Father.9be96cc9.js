import{f as r,$ as a,I as i,_ as u,o as l,c as d,d as m,t as p,a as _,w as $,a0 as v,r as C,b as F,F as k}from"./app.cae4c64a.js";const E=r({name:"child",components:{[a.name]:a},emits:["increment"],setup(e,t){const n=i(1);return{count:n,add:()=>{n.value+=1,t.emit("increment",n.value)}}}}),B=m("click");function g(e,t,n,s,f,h){const o=a;return l(),d("div",null,[m(" \u5B50\u7EC4\u4EF6: "+p(e.count)+" ",1),_(o,{type:"primary",size:"small",onClick:v(e.add,["stop"])},{default:$(()=>[B]),_:1},8,["onClick"])])}var c=u(E,[["render",g],["__file","Child.vue"]]);const w=r({name:"father",components:{[c.name]:c},setup(){const e=i(1);return{count:e,increment:n=>{e.value=n}}}});function y(e,t,n,s,f,h){const o=C("child");return l(),d(k,null,[F("div",null,"\u7236\u7EC4\u4EF6: "+p(e.count),1),_(o,{onIncrement:e.increment},null,8,["onIncrement"])],64)}var N=u(w,[["render",y],["__file","Father.vue"]]);export{N as default};
