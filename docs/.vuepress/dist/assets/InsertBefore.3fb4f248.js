import{_ as h,f as v,$ as i,I as f,o as b,c as g,b as o,a as r,w as l,a0 as c,d as u,a1 as B,a2 as C}from"./app.084d5aed.js";const y=v({name:"InsertBefore",components:{[i.name]:i},setup(){const e=f(null),s=f(["paul","wade","bosh"]),d=()=>{const t=document.createElement("li");t.textContent="lebron";const n=e.value.children[s.value.length-1];e.value.insertBefore(t,n)},p=()=>{const t=document.createElement("li");t.textContent="lebron",e.value.insertBefore(t,null)};function a(){const t=document.createDocumentFragment();for(let n=0;n<3;n++){const m=document.createElement("li");m.textContent=s.value[n],t.appendChild(m)}e.value.children[s.value.length-1],e.value.insertBefore(t,null)}return{parent:e,insert_target:d,insert_null:p,insert_document_fragment:a,insert_document_fragment:a}}}),_=e=>(B("data-v-b5bdf1a4"),e=e(),C(),e),k={class:"insert-before-container"},I={class:"button-container"},x=u("\u63D2\u5165\u5230\u6307\u5B9A\u4F4D\u7F6E"),E=u("\u53C2\u8003\u8282\u70B9\u4E3Anull"),w=u("\u63D2\u5165\u8282\u70B9\u4E3ADocumentFragment"),D={ref:"parent"},$=_(()=>o("li",null,"kyrie",-1)),F=_(()=>o("li",null,"durant",-1)),z=_(()=>o("li",null,"curry",-1)),A=[$,F,z];function N(e,s,d,p,a,t){const n=i;return b(),g("div",k,[o("div",I,[r(n,{type:"primary",size:"small",onClick:c(e.insert_target,["stop"])},{default:l(()=>[x]),_:1},8,["onClick"]),r(n,{type:"primary",size:"small",onClick:c(e.insert_null,["stop"])},{default:l(()=>[E]),_:1},8,["onClick"]),r(n,{type:"primary",size:"small",onClick:c(e.insert_document_fragment,["stop"])},{default:l(()=>[w]),_:1},8,["onClick"])]),o("ol",D,A,512)])}var V=h(y,[["render",N],["__scopeId","data-v-b5bdf1a4"],["__file","InsertBefore.vue"]]);export{V as default};
