import{g as p,h as v,m as h,o as c,c as _,d as r,F as f,j as m,p as y,k as g,i as B,t as k,q as S,a as d}from"./app-ec006255.js";import{m as b}from"./mitt-f7ef348c.js";import{_ as u}from"./framework-c27b6911.js";const x=b(),n=x,I=e=>(y("data-v-8a8759cd"),e=e(),g(),e),C={class:"left-container"},E=I(()=>r("div",{class:"title"},"首发",-1)),U={class:"player-list"},w=["onClick"],F=p({__name:"StartingUp",setup(e){const s=v(["詹姆斯","奥尼尔","乔丹","科比","库里"]),l=(t,a)=>{n.emit("starting_up",{player:t}),s.value.splice(a,1)};return h(()=>{n.on("bench",({player:t})=>{s.value.push(t)})}),(t,a)=>(c(),_("div",C,[E,r("ul",U,[(c(!0),_(f,null,m(s.value,(o,i)=>(c(),_("li",{key:i,class:"player-item",onClick:B($=>l(o,i),["stop"])},k(o),9,w))),128))])]))}});const M=u(F,[["__scopeId","data-v-8a8759cd"],["__file","StartingUp.vue"]]),N=e=>(y("data-v-1dc5fbe0"),e=e(),g(),e),V={class:"right-container"},j=N(()=>r("div",{class:"title"},"替补",-1)),q={class:"player-list"},D=["onClick"],L=p({__name:"Bench",setup(e){const s=v(["杜兰特","贾巴尔","罗伯特森","韦德","斯托克顿"]),l=(t,a)=>{s.value.splice(a,1),n.emit("bench",{player:t})};return h(()=>{n.on("starting_up",({player:t})=>{s.value.push(t)})}),(t,a)=>(c(),_("div",V,[j,r("ul",q,[(c(!0),_(f,null,m(s.value,(o,i)=>(c(),_("li",{key:i,class:"player-item",onClick:B($=>l(o,i),["stop"])},k(o),9,D))),128))])]))}});const z=u(L,[["__scopeId","data-v-1dc5fbe0"],["__file","Bench.vue"]]),A={class:"container"},G=p({__name:"EventBus",setup(e){return S(()=>{n.off("bench"),n.off("starting_up")}),(s,l)=>(c(),_("div",A,[d(M),d(z)]))}});const O=u(G,[["__scopeId","data-v-2414eca4"],["__file","EventBus.vue"]]);export{O as default};
