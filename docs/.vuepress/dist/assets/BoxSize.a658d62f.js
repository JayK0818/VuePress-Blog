import{_ as c,f,$ as r,I as g,o as u,c as h,b as _,a as n,w as a,a0 as i,F as m,e as l,a1 as x,a2 as v}from"./app.3aec440b.js";const b=f({name:"box-size",components:{[r.name]:r},setup(){const e=g(null);return{box:e,getHeight:o=>{if(!e.value)return;const p=e.value[o];window.$message.success(`${o} - ${p}`)}}}}),H=e=>(x("data-v-f16f8a10"),e=e(),v(),e),$={class:"box",ref:"box"},w=H(()=>_("div",{class:"inner"},null,-1)),z=[w],y=l("Element.clientHeight"),k=l("Element.offsetHeight"),B=l("Element.scrollHeight");function S(e,t,o,p,C,I){const s=r;return u(),h(m,null,[_("div",$,z,512),n(s,{type:"primary",size:"small",onClick:t[0]||(t[0]=i(d=>e.getHeight("clientHeight"),["stop"]))},{default:a(()=>[y]),_:1}),n(s,{type:"primary",size:"small",onClick:t[1]||(t[1]=i(d=>e.getHeight("offsetHeight"),["stop"]))},{default:a(()=>[k]),_:1}),n(s,{type:"primary",size:"small",onClick:t[2]||(t[2]=i(d=>e.getHeight("scrollHeight"),["stop"]))},{default:a(()=>[B]),_:1})],64)}var N=c(b,[["render",S],["__scopeId","data-v-f16f8a10"],["__file","BoxSize.vue"]]);export{N as default};
