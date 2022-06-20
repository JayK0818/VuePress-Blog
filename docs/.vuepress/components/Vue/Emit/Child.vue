<template>
  <div>
    子组件:
    {{count}}
    <n-button type='primary' size='small' @click.stop='add'>click</n-button>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import { NButton } from 'naive-ui'
export default defineComponent({
  name: 'child',
  components: {
    [NButton.name]: NButton
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
