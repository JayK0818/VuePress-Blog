import{_ as c,f as d,I as l,o,c as a,b as r,t as p,F as u,l as _,S as f,D as v,a0 as g}from"./app.cae4c64a.js";const b=d({name:"row-center",setup(){const e=l(0);return{index:e,toggle:t=>{e.value!==t&&(e.value=t)},colors:["#f50","#2db7f5","#87d068","#108ee9"]}}}),h={style:{"font-size":"16px",color:"#fff"}},m={class:"dot-container"},x=["onClick"];function k(e,s,t,y,C,w){return o(),a("div",{class:"container",style:f({background:e.colors[e.index]})},[r("span",h,p(e.index+1),1),r("div",m,[(o(!0),a(u,null,_(e.colors,(i,n)=>(o(),a("div",{class:v(["dot",{active:e.index===n}]),key:i,onClick:g($=>e.toggle(n),["stop"])},null,10,x))),128))])],4)}var B=c(b,[["render",k],["__scopeId","data-v-b0ad88ea"],["__file","RowCenter.vue"]]);export{B as default};
