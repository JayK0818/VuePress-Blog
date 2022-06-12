<template>
  <div class='container'>
    <img src="../images/logo.svg" alt="">
    <div class="title">Vue.js</div>
    <div class="text">学习</div>
    <div class="text">生态系统</div>
    <div class="text">团队</div>
    <div class="text">资源列表</div>
    <div class="text">支持Vue</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'flex-group'
})
</script>
<style lang="scss" scoped>
.container{
  display: flex;
  align-items:center;
  padding: 10px 0;
  border-bottom: 1px solid #d9d9d9;
  img{
    width: 60px;
  }
  .title{
    margin-right: auto;
    font-size: 18px;
  }
  .text{
    margin: 0 5px;
    cursor: pointer;
    transition: all .3s;
    &:hover{
      color: #1890ff;
    }
  }
}
</style>
