<template>
  <div>
    子组件:
    {{count}}
    <a-button type='primary' size='small' @click.stop='add'>click</a-button>
  </div>
</template>

<script lang='ts' setup>
import { defineComponent, ref } from 'vue'
const emit = defineEmits(['increment'])

const count = ref<number>(1)
const add = ():void => {
  count.value += 1
  emit('increment', count.value)
}
</script>
