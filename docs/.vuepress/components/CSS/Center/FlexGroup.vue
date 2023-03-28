<template>
  <div class="title">Vue官网的导航栏</div>
  <div class='container'>
    <img src="../images/logo.svg" alt="">
    <div class="title">Vue.js</div>
    <div class="text">学习</div>
    <div class="text">生态系统</div>
    <div class="text">团队</div>
    <div class="text">资源列表</div>
    <div class="text">支持Vue</div>
  </div>
  <div class="title">知乎官网导航栏</div>
  <div class="zhihu-container">
    <img src="../images/zhihu.png" alt="" class='logo'>
    <div class="nav">
      <span class="text">首页</span>
      <span class="text">会员</span>
      <span class="text">发现</span>
      <span class="text">等你来答</span>
    </div>
    <div class="search-wrapper">
      <input type="text" class='search-input' placeholder='你见过最烂的代码...'>
    </div>
    <a-button type='default' size='small'>登录</a-button>
    <a-button type='primary' size='small'>加入知乎</a-button>
  </div>
</template>

<style lang="scss" scoped>
.title{
  padding-bottom: 4px;
  padding-top: 16px;
  color:#000;
  font-size: 16px;
}
.container{
  display: flex;
  align-items:center;
  padding: 10px 0;
  border-bottom: 1px solid #e8e8e8;
  overflow: auto;
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
    white-space: nowrap;
    &:hover{
      color: #3eaf7c;
    }
  }
}
// 知乎
.zhihu-container{
  margin: 0 auto;
  max-width: 100%;
  min-width: 700px;
  padding: 10px 0;
  display:flex;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
  overflow: auto;
  .nav{
    padding:0 10px;
    white-space: nowrap;
    .text{
      font-size: 15px;
      padding: 0 8px;
      cursor: pointer;
      color: #8590a6;
      transition: all .3s;
      &:hover{
        color:#121212;
      }
    }
  }
  .search-wrapper{
    flex: 1;
    display: flex;
    justify-content: center;
  }
  .search-input{
    flex-grow: 1;
    max-width: 400px;
    min-width: 280px;
    outline: none;
    border: 1px solid #d9d9d9;
    height: 26px;
    text-indent: 6px;
    &::-webkit-input-placeholder{
      color:rgba(0,0,0, .45);
    }
  }
  button{
    margin-left: 10px;
  }
}
</style>
