<template>
  <ul class='player-list' @click='get_player'>
    <li>Lebron James</li>
    <li>Kevin Durant</li>
    <li>Kyrie Irving</li>
  </ul>
</template>

<script>
import { defineComponent } from 'vue'
import { createDiscreteApi } from 'naive-ui'

export default defineComponent({
  setup () {
    const { message } = createDiscreteApi(['message'])
    function get_player(event) {
      const text = event.target.textContent;
      const aLi = event.target.parentElement.children;
      const index = Array.from(aLi).indexOf(event.target)
      message.success(`${index} - ${text}`)
    }
    return {
      get_player
    }
  }
})
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
