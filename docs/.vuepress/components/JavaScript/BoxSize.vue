<template>
  <div class='box' ref='box'>
    <div class="inner"></div>
  </div>
  <n-button type='primary' size='small' @click.stop='getHeight("clientHeight")'>Element.clientHeight</n-button>
  <n-button type='primary' size='small' @click.stop='getHeight("offsetHeight")'>Element.offsetHeight</n-button>
  <n-button type='primary' size='small' @click.stop='getHeight("scrollHeight")'>Element.scrollHeight</n-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type ElementSizeType = 'clientHeight' | 'offsetHeight' | 'scrollHeight'

const box = ref<HTMLElement | null>(null)

const getHeight = (type: ElementSizeType):void => {
  if(!box.value) return
  const height = (box.value as HTMLElement)[type];
  window.$message.success(`${type} - ${height}`)
}
</script>
<style lang="scss" scoped>
.box{
  width:100px;
  height:100px;
  padding:10px;
  margin:5px;
  overflow:auto;
  box-sizing:border-box;
}
.inner{
  background-color:#98c379;
  width:400px;
  height:400px;
}
button{
  margin-top:10px;
  margin-right:5px;
}
</style>
