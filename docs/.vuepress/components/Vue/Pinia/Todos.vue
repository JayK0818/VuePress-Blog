<template>
  <div class='todo-container'>
    <div class="header">
      <input type="text" class='text-input' placeholder='what next to do' v-model.trim='todo'>
      <a-button type='primary' @click.stop='submit'>submit</a-button>
    </div>
    <div class="filter">
      <span
        class='filter-item'
        v-for='f in filters' :key='f'
        :class='{ active: f === filter }'
        @click.stop='filter_todo(f)'
      >{{f}}</span>
      <span class='filter-item' @click='reset'>reset</span>
    </div>
    <div class="todo-list">
      <ul>
        <li class="item" v-for='todo in store.filteredTodo' :key='todo.id'>
          <section style='flex:1;'>
            <a-checkbox :checked='todo.completed' @click.stop='toggle_todo(todo.id)'/>
            <span class='text' :class='{active: todo.completed}'>{{todo.text}}</span>
          </section>
          <span class='icon' @click.stop='delete_todo(todo.id)'>
            <svg focusable="false" class="" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
          </span>
        </li>
      </ul>
      <div style='padding:5px 0;'>{{store.unFinishedLength}} items left</div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import useTodoStore from '../../../store/todos.js'
import { storeToRefs } from 'pinia'
import { Button, Checkbox } from 'ant-design-vue'

type Filter = 'All' | 'Finished' | 'Unfinished'
export default defineComponent({
  components: {
    [Button.name]: Button,
    [Checkbox.name]: Checkbox
  },
  setup() {
    const todo = ref<string>('')
    const store = useTodoStore()
    const { filter } = storeToRefs(store)
    const { addTodo, deleteTodo, toggleTodo, filterTodo } = store
    const filters = ref<Filter []>(['All', 'Finished', 'Unfinished'])
    function submit() {
      if(!todo.value) {
        window.alert('todo is required')
        return
      }
      addTodo({
        text: todo.value,
        id: Date.now(),
        completed: false
      })
      todo.value = ''
    }
    function delete_todo(id: number): void {
      deleteTodo(id)
    }
    function toggle_todo(id: number): void {
      toggleTodo(id)
    }
    function filter_todo(type: string): void {
      filterTodo(type)
    }
    function reset() {
      store.$reset()
    }
    store.$subscribe((mutation, state) => {
      console.log(state)
    })
    return {
      store,
      todo,
      filters,
      filter,
      submit,
      delete_todo,
      toggle_todo,
      filter_todo,
      reset
    }
  }
})
</script>
<style scoped lang='scss'>
.todo-container{
  padding-top:10px;
}
.header{
  padding:5px 0;
  .text-input{
    outline:none;
    border:1px solid #d9d9d9;
    height:32px;
    text-indent:8px;
    width:500px;
    font-size:16px;
    transition:all .3s;
    &::-webkit-input-placeholder{
      color:rgba(0,0,0,.45);
    }
    &:hover{
      border-color:#1890ff;
    }
  }
  button{
    vertical-align:bottom;
  }
}
.filter{
  padding:5px 0;
  .filter-item{
    cursor:pointer;
    padding:0 5px;
    font-size:14px;
    color:rgba(0,0,0,.85);
    &:hover{
      text-decoration:underline;
    }
    &.active{
      color:red;
    }
  }
}
.todo-list{
  .item{
    display:flex;
    align-items:center;
    padding:3px 0;
  }
  .text{
    font-size:16px;
    margin-left:10px;
    &.active{
      text-decoration:line-through;
      color:rgba(0,0,0,.45);
      font-style:italic;
    }
  }
  .icon{
    font-size:14px;
    transition: all .3s;
    cursor:pointer;
    &:hover{
      color:red;
    }
  }
}
</style>
