import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', {
  state() {
    return {
      count: 0
    }
  },
  getters: {
    double:state => state.count * 2
  },
  actions: {
    increment() {
      this.count += 1
    },
    decrement() {
      this.count -= 1
    }
  }
})

export default useCounterStore