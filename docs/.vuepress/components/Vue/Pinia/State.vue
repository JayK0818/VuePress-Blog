<template>
  <div>
    <h4>Pinia基本使用</h4>
    <div class='count'>{{counter.count}} --> {{counter.double}}</div>
    <a-button @click.stop='counter.increment' type='primary' size='small'>increment</a-button>
    <a-button @click.stop='counter.decrement' type='primary' size='small'>decrement</a-button>
  </div>
</template>

<script lang="ts" setup>
import useCounterStore from '../../../store/counter.js'
const counter = useCounterStore()
</script>

<style lang='scss' scoped>
.count{
  padding-bottom:5px;
  font-size:18px;
  font-weight:bold;
}
button{
  margin-right:5px;
}
</style>
