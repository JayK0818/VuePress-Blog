import{g as I,h as o,v as i,o as r,c as _,d as u,a as d,F as v,j,E as f,H as p,I as k,t as x}from"./app-ec006255.js";import{_ as G}from"./framework-c27b6911.js";const B={class:"select-container"},E=I({__name:"GridItems",setup(F){const m=["#f00","#ff8c00","#00b03b","#0071c8","#cc6cb1","#fdd394","#b5aa79","#cae9a2","#00c8f2"],l=o(1),n=o(1),a=o([{value:0,label:"对齐方式",disabled:!0},{label:"start",value:1},{label:"center",value:2},{label:"end",value:3}]),y=i(()=>{const s=a.value.find(e=>e.value===l.value);if(s)return{justifyItems:s.label}}),b=i(()=>{const s=a.value.find(e=>e.value===n.value);if(s)return{alignItems:s.label}});return(s,e)=>{const c=k;return r(),_(v,null,[u("div",B,[d(c,{class:"select",options:a.value,value:l.value,"onUpdate:value":e[0]||(e[0]=t=>l.value=t)},null,8,["options","value"]),d(c,{class:"select",options:a.value,value:n.value,"onUpdate:value":e[1]||(e[1]=t=>n.value=t)},null,8,["options","value"])]),u("div",{class:"container",style:f({...p(b),...p(y)})},[(r(),_(v,null,j(m,(t,g)=>u("div",{class:"item",style:f({background:t}),key:t},x(g+1),5)),64))],4)],64)}}});const U=G(E,[["__scopeId","data-v-13938e16"],["__file","GridItems.vue"]]);export{U as default};
