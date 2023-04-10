<template>
  <ul class='player-list' @click='get_player'>
    <li>Lebron James</li>
    <li>Kevin Durant</li>
    <li>Kyrie Irving</li>
  </ul>
</template>

<script setup lang="ts">
function get_player(event: Event) {
  const text = (event.target as HTMLElement).textContent;
  const aLi = ((event.target as HTMLElement).parentElement as HTMLElement).children
  const index = Array.from(aLi).indexOf(event.target as HTMLElement)
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
