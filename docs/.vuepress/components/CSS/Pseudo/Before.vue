<template>
  <div class='container'>
    我们有一些 <span data-descr="collection of words and punctuation">文字</span> 有一些
    <span data-descr="small popups which also hide again">提示</span>。<br />
    把鼠标放上去<span data-descr="not to be taken literally">看看</span>。
  </div>
</template>

<style lang="scss" scoped>
.container {
  span[data-descr] {
    position: relative;
    text-decoration: underline;
    color: #00F;
    cursor: help;
  }
  span[data-descr]:hover::after {
    content: attr(data-descr);
    position: absolute;
    left: 0;
    top: 24px;
    min-width: 200px;
    border: 1px #aaaaaa solid;
    border-radius: 10px;
    background-color: #ffffcc;
    padding: 12px;
    color: #000000;
    font-size: 14px;
    z-index: 1;
  }
}
</style>
