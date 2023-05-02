<template>
  <ul class="todo-list">
    <li
      class="todo-item"
      v-for="item in list"
      :key="item.id"
    >
      <n-checkbox :checked="item.completed" @click.stop="toggle(item)"></n-checkbox>
      <span class="text">{{ item.text }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { PropType, defineComponent, onMounted, onUpdated, onUnmounted, onBeforeMount, onBeforeUpdate, onBeforeUnmount } from 'vue'
// @ts-ignore
import type { TodoProps } from '../interface/todo-interface.ts'
import bus from '../utils/bus'

export default defineComponent({
  name: 'todo-list',
  props: {
    list: {
      type: Array as PropType<TodoProps[]>,
      required: true
    }
  },
  beforeCreate() {
    bus.emit('update', 'child-beforeCreate')
  },
  created() {
    bus.emit('update', 'child-created')
  },
  beforeMount() {
    bus.emit('update', 'child-beforeMount')
  },
  mounted() {
    bus.emit('update', 'child-mounted')
  },
  beforeUpdate() {
    bus.emit('update', 'child-beforeUpdate')
  },
  updated() {
    bus.emit('update', 'child-updated')
  },
  beforeUnmount() {
    bus.emit('update', 'child-beforeUnmount')
  },
  unmounted() {
    bus.emit('update', 'child-unmounted')
  },
  setup () {
    onMounted(() => {
      bus.emit('update', 'child-setup-onMounted')
    })
    onUpdated(() => {
      bus.emit('update', 'child-setup-onUpdated')
    })
    onUnmounted(() => {
      bus.emit('update', 'child-setup-onUnmounted')
    })
    onBeforeMount(() => {
      bus.emit('update', 'child-setup-onBeforeMount')
    })
    onBeforeUpdate(() => {
      bus.emit('update', 'child-setup-onBeforeUpdate')
    })
    onBeforeUnmount(() => {
      bus.emit('update', 'child-setup-onBeforeUnmount')
    })
  },
  methods: {
    toggle(item: { id: number; completed: boolean; text: string}) {
      this.$emit('toggle', item)
    }
  }
})
</script>

<style lang="scss" scoped>
.todo-list {
  padding: 0;
  .todo-item {
    display: flex;
    padding: 2px 0;
    align-items: center;
    list-style: none;
  }
  .text {
    padding: 0 5px;
    color: rgba(0, 0, 0, .65);
  }
}
</style>