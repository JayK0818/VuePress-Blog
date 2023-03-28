<template>
  <div>
    <a-button type='primary' @click='open_dialog_1' size='small'>click me</a-button>
    <a-button type='primary' @click='open_dialog_2' style='margin-left:10px;' size='small'>click me</a-button>
  </div>
  <teleport to='body' v-if='visible'>
    <div class='wrapper'>
      <div class="container">
        <div class="header">这是一个弹窗</div>
        <div class="body">爱情来得很快,只是需要等待</div>
        <div class="footer">
          <a-button type='error' @click='close_modal' size='small'>取消</a-button>
          <a-button type='primary' style='margin-left:10px;' size='small'>确认</a-button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang='ts' setup>
// --------判断页面是否有滚动条------
function hasScrollbar() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight)
}

// --------获取滚动条的宽度 --------
function getScrollBarWidth() {
  const div = document.createElement('div')
  div.style.cssText = 'position:absolute;top:-9999999px;width:100px;height:100px;overflow:scroll;'
  document.body.appendChild(div)
  const scrollBarWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div)
  return scrollBarWidth;
}
import { ref } from 'vue'
const visible = ref<boolean>(false)

const open_dialog_1 = ():void => {
  visible.value = true
}

const open_dialog_2 = (): void => {
  if(hasScrollbar()){
    const barwidth = getScrollBarWidth();
    document.body.style.cssText = `width:calc(100% - ${barwidth}px);overflow:hidden;`
  }
  visible.value = true;
}

const close_modal = (): void => {
  document.body.style.cssText = '';
  visible.value = false;
}
</script>
<style lang='scss' scoped>
.wrapper{
  position:fixed;
  width:100%;
  top:0;
  bottom:0;
  background-color:rgba(0,0,0,.3);
  z-index:1000;
  .container{
    display:flex;
    flex-direction:column;
    position:relative;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    width:24rem;
    height: 20rem;
    background-color:#fff;
    box-shadow:0 2px 10px 0 rgba(0,0,0,.1);
  }
  .body{
    flex:1;
    padding:10px 16px 0;
    color:rgba(0,0,0,.85);
  }
  .header{
    padding-left:20px;
    height:40px;
    line-height:40px;
    color:#000;
    border-bottom:1px solid #e8e8e8;
  }
  .footer{
    border-top:1px solid #e8e8e8;
    padding:8px 30px 8px 0;
    text-align:right;
  }
}
@media screen and (max-width: 768px) {
  .wrapper .container{
    width: 80%;
    height: 40%;
  }
}
</style>
