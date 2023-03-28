<template>
  <div class="container">
    <div class="content">
      <div class="flex-container">
        <div class="header">Header</div>
        <div class="body">Hello World</div>
        <div class="footer">Footer</div>
      </div>
    </div>
    <div class="content">
      <div class="clearfix-container">
        <div class="header">Header</div>
        <div class="body">Hello World</div>
      </div>
      <div class="footer">Footer</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container{
  display: flex;
  align-items: center;
  height: 500px;
  justify-content: space-between;
  .content{
    text-align: center;
    width: 300px;
    height: 100%;
    border: 1px solid #e8e8e8;
    overflow: auto;
  }
  .body{
    flex-grow: 1;
  }
  .header{
    color:#000;
  }
}
.flex-container{
  display: flex;
  min-height: 100%;
  height: 600px;
  flex-direction: column;
}
.clearfix-container{
  min-height: 100%;
  height: 600px;
  padding-bottom: 30px;
  &::after {
    display: block;
    content: ".";
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
.clearfix-container+.footer{
  margin: -30px 0 0 auto;
}
</style>
