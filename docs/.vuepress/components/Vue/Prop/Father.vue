<template>
  <div>父组件: {{count}} <n-button @click.stop='add' type='primary' size='small'>click</n-button></div>
  <child :count='count'/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Child from './Child.vue'

const count = ref<number>(0)
const add = () => {
  count.value += 1
}
</script>
<style lang="scss" scoped>
</style>
