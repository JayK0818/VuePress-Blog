import{_ as m,f as g,ae as r,I as o,j as v,o as u,c as i,b as f,a as _,F as y,l as j,S as b,t as C}from"./app.7b5becf5.js";const F=g({name:"grid-content",components:{[r.name]:r},setup(){const e=["#f00","#ff8c00","#00b03b","#0071c8","#cc6cb1","#fdd394","#b5aa79","#cae9a2","#00c8f2"],l=o(1),s=o(1),n=o([{value:0,label:"\u5BF9\u9F50\u65B9\u5F0F",disabled:!0},{label:"start",value:1},{label:"center",value:2},{label:"end",value:3},{label:"space-between",value:4},{label:"space-around",value:5},{label:"space-evenly",value:6}]),c=v(()=>{const a=n.value.find(t=>t.value===l.value);if(a)return{justifyContent:a.label}}),d=v(()=>{const a=n.value.find(t=>t.value===s.value);if(a)return{alignContent:a.label}});return{select_options:n,align:s,justify:l,colors:e,justify_style:c,align_style:d}}}),B={class:"select-header"};function k(e,l,s,n,c,d){const a=r;return u(),i(y,null,[f("div",B,[_(a,{options:e.select_options,class:"select",value:e.justify,"onUpdate:value":l[0]||(l[0]=t=>e.justify=t)},null,8,["options","value"]),_(a,{class:"select",options:e.select_options,value:e.align,"onUpdate:value":l[1]||(l[1]=t=>e.align=t)},null,8,["options","value"])]),f("div",{class:"container",style:b({...e.justify_style,...e.align_style})},[(u(!0),i(y,null,j(e.colors,(t,p)=>(u(),i("div",{class:"item",key:p,style:b({background:t})},C(p+1),5))),128))],4)],64)}var G=m(F,[["render",k],["__scopeId","data-v-47eaeaf1"],["__file","GridContent.vue"]]);export{G as default};
