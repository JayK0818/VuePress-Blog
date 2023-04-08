<template>
  <div>父组件: {{count}}</div>
  <child @increment='increment'/>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import Child from './Child.vue'

const count = ref<number>(1)
const increment = (payload: number): void => {
  count.value = payload
}
</script>
