<template>
  <div class='float-layout-container'>
    <div class="left"></div>
    <div class="right"></div>
    <div class="middle"></div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'float-layout'
})
</script>

<style lang='scss' scoped>
.float-layout-container{
  height: 200px;
  &:after{
    content: '';
    display: block;
    clear: both;
  }
  .left{
    float: left;
    width: 120px;
    height: 100%;
    background-color: skyblue;
  }
  .right{
    float: right;
    width: 100px;
    height: 100%;
    background-color: orange;
  }
  .middle{
    background-color: pink;
    width: auto;
    height: 100%;
  }
}
</style>
