<template>
  <div class='container' :style='{
    background: colors[index]
  }'>
    <span style='font-size:16px;color:#fff;'>{{index+1}}</span>
    <div class="dot-container">
      <div
        class="dot"
        v-for='(item, i) in colors' :key='item'
        @click.stop='toggle(i)'
        :class='{active: index === i}'
      ></div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
const index = ref(0)
const toggle = (number: number) => {
  if(index.value === number) return
  index.value = number
}
const colors = ['#f50', '#2db7f5', '#87d068', '#108ee9']
</script>
<style lang="scss" scoped>
.container{
  position: relative;
  height: 200px;
  text-align: center;
}
.dot-container{
  text-align: center;
  font-size: 0;
  // display: flex;
  // justify-content: center;
  position:absolute;
  left: 0;
  right: 0;
  bottom: 10px;
}
.dot{
  display: inline-block;
  margin:0 5px;
  width: 10px;
  height: 10px;
  background-color:rgba(200,200,200,.5);
  border-radius: 50%;
  cursor: pointer;
  &.active{
    background-color: rgb(200, 200, 200)
  }
}
</style>
