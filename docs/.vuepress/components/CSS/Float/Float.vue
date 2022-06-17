<template>
  <div class='float-container'>
    <div class="left">
      <div class="title">未清除浮动</div>
      <div class="content">
        <div class="item" v-for='item in 4' :style='{
          background: colors[item-1]
        }'></div>
      </div>
    </div>
    <div class="right">
      <div class="title">已清除浮动</div>
      <div class="content clearfix">
        <div class="item" v-for='item in 4' :style='{
          background: colors[item-1]
        }'></div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'float',
    setup() {
      return {
        colors: ['#f50', '#2db7f5', '#87d068', '#108ee9']
      }
    }
  })
</script>

<style lang='scss' scoped>
.float-container{
  height: 200px;
  font-size:0;
}
.left,.right{
  margin:0 2px;
  font-size: 14px;
  text-align:center;
  display:inline-block;
  padding: 5px 0;
  color:rgba(0, 0, 0, .85);
  width: 48%;
}
.content{
  border: 1px solid red;
  .item{
    float: left;
    width: 4rem;
    height: 4rem;
  }
  &.clearfix:after{
    content: '';
    display: block;
    clear: both;
  }
}
</style>
