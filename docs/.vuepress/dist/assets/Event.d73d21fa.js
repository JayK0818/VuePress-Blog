import{_,f,I as s,R as x,a4 as u,Y as b,o as p,c as m,d as e,a1 as h,a2 as k}from"./app.a286d625.js";const E=f({setup(){const t=s(null),n=s(null),o=s(null),c=s(null),a=s(null),i=s(null);function l(){window.$message.success("box1...")}function r(){window.$message.success("box2...")}function d(){window.$message.success("box3...")}return x(()=>{u(()=>{t.value.addEventListener("click",l,!0),n.value.addEventListener("click",r,!0),o.value.addEventListener("click",d,!0),c.value.addEventListener("click",l,!1),a.value.addEventListener("click",r,!1),i.value.addEventListener("click",d,!1)})}),b(()=>{u(()=>{!t.value||(t.value.removeEventListener("click",l,!0),n.value.removeEventListener("click",r,!0),o.value.removeEventListener("click",d,!0),c.value.removeEventListener("click",l,!1),a.value.removeEventListener("click",r,!1),i.value.removeEventListener("click",d,!1))})}),{box_1:t,box_2:n,box_3:o,box_4:c,box_5:a,box_6:i}}}),v=t=>(h("data-v-557dae74"),t=t(),k(),t),g={class:"container"},L=v(()=>e("div",{class:"title"},"\u4E8B\u4EF6\u6355\u83B7\u89E6\u53D1",-1)),w={class:"box1",ref:"box_1"},y={class:"box2",ref:"box_2"},$={class:"box3",ref:"box_3"},I=v(()=>e("div",{class:"title"},"\u4E8B\u4EF6\u5192\u6CE1\u89E6\u53D1",-1)),j={class:"box1",ref:"box_4"},B={class:"box2",ref:"box_5"},S={class:"box3",ref:"box_6"};function C(t,n,o,c,a,i){return p(),m("div",g,[e("div",null,[L,e("div",w,[e("div",y,[e("div",$,null,512)],512)],512)]),e("div",null,[I,e("div",j,[e("div",B,[e("div",S,null,512)],512)],512)])])}var N=_(E,[["render",C],["__scopeId","data-v-557dae74"],["__file","Event.vue"]]);export{N as default};