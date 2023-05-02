<template>
  <div class="todo-wrapper">
    <n-input placeholder="What next todo?" :value="todo" @input="handle_todo_changed"/>
    <n-button type="primary" @click.stop="increment">新增</n-button>
  </div>
  <todo-list :list="todo_list" @toggle="toggle"/>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUpdated, onUnmounted, onBeforeMount, onBeforeUnmount, onBeforeUpdate } from 'vue'
import TodoList from './TodoList.vue'
// @ts-ignore
import type { TodoProps } from '../interface/todo-interface.ts'
import bus from '../utils/bus'


export default defineComponent({
  data() {
    return {
      todo: '',
      todo_list: [] as Array<TodoProps>
    }
  },
  components: {
    TodoList
  },
  beforeCreate() {
    bus.emit('update', 'parent-beforeCreate')
  },
  created() {
    bus.emit('update', 'parent-created')
  },
  beforeMount() {
    bus.emit('update', 'parent-beforeMount')
  },
  mounted() {
    bus.emit('update', 'parent-mounted')
  },
  beforeUpdate() {
    bus.emit('update', 'parent-beforeUpdate')
  },
  updated() {
    bus.emit('update', 'parent-updated')
  },
  beforeUnmount() {
    bus.emit('update', 'parent-beforeUnmount')
  },
  unmounted() {
    bus.emit('update', 'parent-unmounted')
  },
  methods: {
    increment(){
      bus.emit('clear')
      this.todo_list.push({
        text: this.todo,
        id: this.todo_list.length + 1,
        completed: false
      })
      this.todo = ''
    },
    toggle(item: TodoProps) {
      bus.emit('clear')
      item.completed = !item.completed
    },
    handle_todo_changed(value: string) {
      bus.emit('clear')
      this.todo = value
    }
  },
  setup () {
    onMounted(() => {
      bus.emit('update', 'parent-setup-onMounted')
    })
    onUpdated(() => {
      bus.emit('update', 'parent-setup-onUpdated')
    })
    onUnmounted(() => {
      bus.emit('update', 'parent-setup-onUnmounted')
    })
    onBeforeMount(() => {
      bus.emit('update', 'parent-setup-onBeforeMount')
    })
    onBeforeUnmount(() => {
      bus.emit('update', 'parent-setup-onBeofreUnmount')
    })
    onBeforeUpdate(() => {
      bus.emit('update', 'parent-setup-onBeforeUpdate')
    })
  }
})
</script>

<style lang="scss" scoped>
.todo-wrapper {
  display: flex;
  align-items: center;
  padding: 6px 0;
}
</style>