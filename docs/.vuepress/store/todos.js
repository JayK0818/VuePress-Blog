import { defineStore } from 'pinia'
const useTodoStore = defineStore('todos', {
  state:() => ({
    list: [
      {
        text: 'Vue',
        id: 1,
        completed: false
      },
      {
        text: 'Pinia',
        id: 2,
        completed: true
      }
    ],
    filter: 'All'
  }),
  getters: {
    unFinishedLength: state => state.list.filter(todo => !todo.completed).length,
    filteredTodo: state => {
      if(state.filter === 'All') {
        return state.list
      }else{
        const completed = state.filter === 'Finished' ? true : false
        return state.list.filter(todo => todo.completed === completed)
      }
    }
  },
  actions: {
    addTodo ({text, id, completed}) {  // 添加todo
      this.list.unshift({
        text,
        id,
        completed
      })
    },
    deleteTodo (id) { // 切换
      const todoIndex = this.list.findIndex(todo => todo.id === id)
      if(todoIndex >= 0) {
        this.list.splice(todoIndex, 1)
      }
    },
    toggleTodo (id) {
      const findTodo = this.list.find(todo => todo.id === id)
      if(findTodo) {
        findTodo.completed = !findTodo.completed
      }
    },
    filterTodo (type) {
      this.filter = type
    }
  }
})

export default useTodoStore