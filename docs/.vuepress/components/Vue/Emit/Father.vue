<template>
  <div>父组件: {{count}}</div>
  <child @increment='increment'/>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import Child from './Child.vue'

export default defineComponent({
  name: 'father',
  components: {
    [Child.name]: Child
  },
  setup () {
    const count = ref<number>(1)
    const increment = (payload): void => {
      count.value = payload;
    }
    return {
      count, increment
    }
  }
})
</script>
<style lang="scss" scoped>
</style>
