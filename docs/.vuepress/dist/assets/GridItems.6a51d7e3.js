import{_ as b,f as y,ad as d,I as i,j as p,o,c as r,b as v,a as f,F as m,l as h,S as g,t as x}from"./app.cae4c64a.js";const j=y({name:"grid-items",components:{[d.name]:d},setup(){const e=["#f00","#ff8c00","#00b03b","#0071c8","#cc6cb1","#fdd394","#b5aa79","#cae9a2","#00c8f2"],n=i(1),l=i(1),s=i([{value:0,label:"\u5BF9\u9F50\u65B9\u5F0F",disabled:!0},{label:"start",value:1},{label:"center",value:2},{label:"end",value:3}]),c=p(()=>{const t=s.value.find(a=>a.value===n.value);if(t)return{justifyItems:t.label}}),u=p(()=>{const t=s.value.find(a=>a.value===l.value);if(t)return{alignItems:t.label}});return{colors:e,select_options:s,justify:n,align:l,justify_style:c,align_style:u}}}),w={class:"select-container"};function I(e,n,l,s,c,u){const t=d;return o(),r(m,null,[v("div",w,[f(t,{class:"select",options:e.select_options,value:e.justify,"onUpdate:value":n[0]||(n[0]=a=>e.justify=a)},null,8,["options","value"]),f(t,{class:"select",options:e.select_options,value:e.align,"onUpdate:value":n[1]||(n[1]=a=>e.align=a)},null,8,["options","value"])]),v("div",{class:"container",style:g({...e.align_style,...e.justify_style})},[(o(!0),r(m,null,h(e.colors,(a,_)=>(o(),r("div",{class:"item",style:g({background:a}),key:a},x(_+1),5))),128))],4)],64)}var k=b(j,[["render",I],["__scopeId","data-v-4eb5aea8"],["__file","GridItems.vue"]]);export{k as default};
