<template>
  <div>
    <n-checkbox :checked="visible" @click="toggle">{{ visible ? '销毁组件' : '创建组件' }}</n-checkbox>
  </div>
  <todo v-if="visible"/>
  <ol v-if="life_cycles.length">
    <li v-for="item in life_cycles">{{ item }}</li>
  </ol>
</template>

<script setup lang="ts">
import Todo from './components/Todo.vue'
import { ref, onBeforeUnmount } from 'vue'
import bus from './utils/bus'

const life_cycles = ref<string[]>([])
const visible = ref<boolean>(true)

bus.on('clear', () => {
  life_cycles.value = []
})
bus.on('update', s => {
  life_cycles.value.push(s)
})
const toggle = () => {
  bus.emit('clear')
  visible.value = !visible.value
}

onBeforeUnmount(() => {
  bus.off('update')
  bus.off('clear')
})

</script>

<style lang="scss" scoped>
ul{
  padding: 0;
  font-size: 13px;
}
</style>