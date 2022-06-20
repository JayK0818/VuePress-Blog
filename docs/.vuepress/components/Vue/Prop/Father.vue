<template>
  <div>父组件: {{count}} <n-button @click.stop='add' type='primary' size='small'>click</n-button></div>
  <child :count='count'/>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import { NButton } from 'naive-ui'
import Child from './Child.vue'
export default defineComponent({
  name:'Father',
  components: {
    [Child.name]: Child,
    [NButton.name]: NButton
  },
  setup () {
    const count = ref<number>(0)

    const add = () => {
      count.value += 1
    }
    return {
      count,
      add
    }
  }
})
</script>
<style lang="scss" scoped>
</style>
