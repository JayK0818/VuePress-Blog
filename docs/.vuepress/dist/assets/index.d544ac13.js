import{_,f as p,I as r,O as g,R as h,aa as x,o as w,c as m}from"./app.02e89851.js";function f(t){return("00"+t).substring(t.toString().length)}const k=p({name:"Home",setup(){const t=r(null),n=r(null),o=r(0),i=r(0),c=g();h(()=>{const e=window.innerWidth,a=window.innerHeight;!t.value||(t.value.width=e,t.value.height=a,o.value=e,i.value=a,n.value=setInterval(()=>{d()},1e3),d())});const u=()=>{const[e,a,s]=new Date().toLocaleDateString().split("/");return`${e}\u5E74${f(a)}\u6708${f(s)}\u65E5`},l=()=>new Date().toLocaleTimeString(),d=()=>{if(!t.value)return;const e=t.value.getContext("2d");if(!e)return;e.clearRect(0,0,t.value.width,t.value.height);const a=u();e.font="24px serif",e.fillStyle="#fff",e.textAlign="center",e.fillText(a,o.value/2,i.value/2-10),e.font="38px serif";const s=l();e.fillText(s,o.value/2,i.value/2+40),e.font="52px serif",e.fillText("What next to do ?",o.value/2,i.value/2+100)},v=()=>{c.push("/front-end/javascript/bom")};return x(()=>{n.value&&clearInterval(n.value)}),{canvas:t,click:v}}});function $(t,n,o,i,c,u){return w(),m("canvas",{ref:"canvas",class:"canvas",onClick:n[0]||(n[0]=(...l)=>t.click&&t.click(...l))},null,512)}var I=_(k,[["render",$],["__scopeId","data-v-a01aac8a"],["__file","index.vue"]]);export{I as default};
