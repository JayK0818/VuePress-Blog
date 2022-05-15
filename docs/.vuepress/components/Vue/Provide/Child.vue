<template>
  <div>
    子组件: {{number}} - {{double}}
  </div>
</template>

<script lang='ts'>
import { defineComponent, inject } from 'vue'
export default defineComponent({
  name: 'child',
  inject: ['number'],
  setup() {
    const double = inject('times')
    return {
      double
    }
  }
})
</script>
<style lang="scss" scoped>
</style>
