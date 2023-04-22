<template>
  <ol class='player-list' @click='get_player'>
    <li v-for="player in player_list" :key="player">{{ player }}</li>
  </ol>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const player_list = ref<string[]>(['Lebron', 'Kyrie', 'Durant', 'Wade'])
const get_player = (event: Event):void => {
  const text = (event.target as HTMLElement).textContent;
  const aLi = ((event.target as HTMLElement).parentElement as HTMLElement).children
  const index = Array.from(aLi).indexOf(event.target as HTMLElement)
  window.$message.success(`${index} - ${text}`)
}
</script>

<style lang="scss" scoped>
.player-list{
  position:relative;
  margin: 0;
  padding-left: 0;
  list-style: none;
  z-index: 100;
  li{
    cursor: pointer;
    padding: 3px 0 3px 6px;
    transition: all .3s;
    &:hover{
      background-color:rgb(240,240,240)!important;
    }
  }
}
</style>
