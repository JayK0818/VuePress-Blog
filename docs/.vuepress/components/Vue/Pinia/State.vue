<template>
  <div>
    <h4>Pinia基本使用</h4>
    <div class='count'>{{counter.count}} --> {{counter.double}}</div>
    <n-button @click.stop='counter.increment' type='primary' size='small'>increment</n-button>
    <n-button @click.stop='counter.decrement' type='primary' size='small'>decrement</n-button>
  </div>
</template>

<script>
import useCounterStore from '../../../store/counter.js'
import { defineComponent } from 'vue'
import { NButton } from 'naive-ui'

export default defineComponent({
  name: 'state',
  components: {
    [NButton.name]: NButton
  },
  setup() {
    const counter = useCounterStore()
    return {
      counter
    }
  }
})
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
