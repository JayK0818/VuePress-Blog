import{_ as d,f as u,a2 as l,I as g,o as m,c as f,b as c,a as n,w as i,a3 as a,F as h,e as _,a4 as v,a5 as H}from"./app.7b5becf5.js";const x=u({name:"box-size",components:{[l.name]:l},setup(){const e=g(null);return{box:e,getHeight:s=>{if(!e.value)return;const r=e.value[s];window.$message.success(`${s} - ${r}`)}}}}),$=e=>(v("data-v-4620b119"),e=e(),H(),e),b={class:"box",ref:"box"},y=$(()=>c("div",{class:"inner"},null,-1)),z=[y],w=_("Element.clientHeight"),B=_("Element.offsetHeight"),S=_("Element.scrollHeight");function k(e,t,s,r,C,I){const o=l;return m(),f(h,null,[c("div",b,z,512),n(o,{type:"primary",size:"small",onClick:t[0]||(t[0]=a(p=>e.getHeight("clientHeight"),["stop"]))},{default:i(()=>[w]),_:1}),n(o,{type:"primary",size:"small",onClick:t[1]||(t[1]=a(p=>e.getHeight("offsetHeight"),["stop"]))},{default:i(()=>[B]),_:1}),n(o,{type:"primary",size:"small",onClick:t[2]||(t[2]=a(p=>e.getHeight("scrollHeight"),["stop"]))},{default:i(()=>[S]),_:1})],64)}var N=d(x,[["render",k],["__scopeId","data-v-4620b119"],["__file","BoxSize.vue"]]);export{N as default};