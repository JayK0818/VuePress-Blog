import{g as s,o as _,c,d as r,t as l,h as p,e as a,a as o,w as d,i as m,F as h,_ as f}from"./app-ec006255.js";import{_ as i}from"./framework-c27b6911.js";const v={class:"child-container"},C=s({__name:"Child",props:{count:{type:Number,required:!0}},setup(t){return(e,n)=>(_(),c("div",v,[r("span",null,"子组件: "+l(t.count),1)]))}});const x=i(C,[["__scopeId","data-v-214eb78a"],["__file","Child.vue"]]),y=s({__name:"Father",setup(t){const e=p(0),n=()=>{e.value+=1};return(g,k)=>{const u=f;return _(),c(h,null,[r("div",null,[a("父组件: "+l(e.value)+" ",1),o(u,{onClick:m(n,["stop"]),type:"primary",size:"small"},{default:d(()=>[a("click")]),_:1},8,["onClick"])]),o(x,{count:e.value},null,8,["count"])],64)}}}),N=i(y,[["__file","Father.vue"]]);export{N as default};
