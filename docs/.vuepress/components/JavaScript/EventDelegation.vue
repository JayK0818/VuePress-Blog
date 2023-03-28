<template>
  <ul class='player-list' @click='get_player'>
    <li>Lebron James</li>
    <li>Kevin Durant</li>
    <li>Kyrie Irving</li>
  </ul>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'
import { createDiscreteApi } from 'naive-ui'

function get_player(event) {
  const text = event.target.textContent;
  const aLi = event.target.parentElement.children;
  const index = Array.from(aLi).indexOf(event.target)
  window.$message.success(`${index} - ${text}`)
}
</script>
<style lang="scss" scoped>
ul{
  padding: 0;
  margin:0;
  list-style:none;
}
.player-list{
  li{
    cursor:pointer;
    padding:3px 0 3px 5px;
    transition:all .3s;
    &:hover{
      background-color:rgb(240,240,240);
    }
  }
}
</style>
