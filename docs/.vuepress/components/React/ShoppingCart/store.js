import { createStore } from 'redux'

const ADD_GOOD = 'good/add', DELETE_GOOD = 'good/delete', INCREMENT_GOOD = 'good/increment', DECREMENT_GOOD = 'good/decrement'

const add_good = (payload) => ({type: ADD_GOOD, payload})
const delete_good = (payload) => ({type: DELETE_GOOD, payload})
const increment_good = (payload) => ({type: INCREMENT_GOOD, payload})
const decrement_good = (payload) => ({type: DECREMENT_GOOD, payload})

function reducer(state = [], action) {
  const { type, payload } = action
  switch(type) {
    case ADD_GOOD: {
      // 判断是否已经添加过, 如果没有添加则新增, 否则新增数量
      const index = state.findIndex(good => good.id === payload.id)
      if(index === -1) {
        return [...state, {...payload, count: 1}]
      }
      const goods_list = [...state]
      goods_list[index]['count'] += 1
      return goods_list
    }
    case DELETE_GOOD: {
      return state.filter(good => good.id !== payload)
    }
    case INCREMENT_GOOD: {
      const index = state.findIndex(good => good.id === payload)
      if(index < 0) return [...state]
      const goods_list = [...state]
      goods_list[index]['count'] += 1
      return goods_list
    }
    case DECREMENT_GOOD: {
      const index = state.findIndex(good => good.id === payload)
      if(index < 0) return [...state]
      const goods_list = [...state]
      goods_list[index]['count'] -= 1
      return goods_list
    }
    default:
      return state
  }
}

const store = createStore(reducer)

export {
  add_good,
  delete_good,
  increment_good,
  decrement_good
}
export default store
