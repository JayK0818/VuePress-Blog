<template>
  <div class='float-layout-container'>
    <div class="left"></div>
    <div class="right"></div>
    <div class="middle"></div>
  </div>
</template>

<style lang='scss' scoped>
.float-layout-container{
  height: 200px;
  overflow:hidden;
  &:after{
    content: '';
    display: block;
    clear: both;
  }
  .left{
    float: left;
    width: 6rem;
    height: 100%;
    background-color: skyblue;
  }
  .right{
    float: right;
    width: 6rem;
    height: 100%;
    background-color: orange;
  }
  .middle{
    width: auto;
    background-color: pink;
    min-width:5rem;
    height: 100%;
  }
}
</style>
