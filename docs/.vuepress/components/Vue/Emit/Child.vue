<template>
  <div>
    子组件:
    {{count}}
    <a-button type='primary' size='small' @click.stop='add'>click</a-button>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import { Button } from 'ant-design-vue'
export default defineComponent({
  name: 'child',
  components: {
    [Button.name]: Button
  },
  emits:['increment'],
  setup (props, context) {
    const count = ref<number>(1)
    const add = ():void => {
      count.value += 1
      context.emit('increment', count.value)
    }
    return {
      count, add
    }
  }
})
</script>
<style lang="scss" scoped>
</style>
