import{_ as m,$ as s,I as i,o as a,c as n,b as l,a as p,w as b,a0 as f,F as v,l as g,d as h,t as c}from"./app.084d5aed.js";const k={name:"attribute",components:{[s.name]:s},setup(){const t=i(null),e=i({});return{get_attribute:()=>{e.value=t.value.attributes},div:t,attributes:e}}},x={class:"name",id:"hello","data-id":"123",style:{color:"red"},ref:"div"},y=h("click me get attribute");function w(t,e,u,r,B,C){const _=s;return a(),n("div",null,[l("div",x,null,512),p(_,{onClick:f(r.get_attribute,["stop"]),type:"primary",size:"small"},{default:b(()=>[y]),_:1},8,["onClick"]),l("ol",null,[(a(!0),n(v,null,g(r.attributes,(o,d)=>(a(),n("li",{key:d}," name: "+c(o.name)+" ---- value: "+c(o.value),1))),128))])])}var V=m(k,[["render",w],["__file","Attribute.vue"]]);export{V as default};
