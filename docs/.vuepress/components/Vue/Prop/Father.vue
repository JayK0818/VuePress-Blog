<template>
  <div>父组件: {{count}} <a-button @click.stop='add' type='primary' size='small'>click</a-button></div>
  <child :count='count'/>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import { Button } from 'ant-design-vue'
import Child from './Child.vue'
export default defineComponent({
  name:'Father',
  components: {
    [Child.name]: Child,
    [Button.name]: Button
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
