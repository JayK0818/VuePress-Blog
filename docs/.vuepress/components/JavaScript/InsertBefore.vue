<template>
  <div class='insert-before-container'>
    <div class="button-container">
      <n-button type='primary' size='small' @click.stop='insert_target'>插入到指定位置</n-button>
      <n-button type='primary' size='small' @click.stop='insert_null'>参考节点为null</n-button>
      <n-button type='primary' size='small' @click.stop='insert_document_fragment'>插入节点为DocumentFragment</n-button>
    </div>
    <ol ref='parent'>
      <li>kyrie</li>
      <li>durant</li>
      <li>curry</li>
    </ol>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
const parent = ref<null | HTMLOListElement>(null)
const player = ref<string []>(['paul','wade','bosh'])

const insert_target = ():void => {
  const li = document.createElement('li')
  li.textContent = 'lebron'
  const reference_element = (parent.value as HTMLElement).children[player.value.length-1];
  (parent.value as HTMLElement).insertBefore(li, reference_element)
}

const insert_null = ():void => {
  const li = document.createElement('li')
  li.textContent = 'lebron';
  (parent.value as HTMLElement).insertBefore(li,null)
}

function insert_document_fragment(): void {
  const fragment = document.createDocumentFragment()
  for(let i = 0; i < 3; i++){
    const li = document.createElement('li')
    li.textContent = player.value[i];
    fragment.appendChild(li)
  }
  (parent.value as HTMLElement).insertBefore(fragment, null)
}
</script>

<style lang='scss' scoped>
button{
  margin-right:10px;
}
</style>
