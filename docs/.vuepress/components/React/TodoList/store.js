import { createStore, combineReducers } from 'redux'

const ADD_TODO = 'todo/add', DELETE_TODO = 'todo/delete', TOGGLE_TODO = 'todo/toggle'

const initial_state = [
  {
    id: 1,
    text: '学习React和Redux',
    completed: false
  },
  {
    id: 2,
    text: '学习Vue和Vuex',
    completed: true
  }
]

const todos_reducer = (state = initial_state, action) => {
  const { type, payload } = action
  switch(type) {
    case ADD_TODO:
      return [...state, payload]
    case DELETE_TODO:
      return state.filter(todo => todo.id !== payload)
    case TOGGLE_TODO:
      return state.map(todo => {
        if(todo.id === payload) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    default:
      return state
  }
}

const SET_VISIBILITY = 'visibility'
const ALL = 'All'

const visibility_reducer = (state = ALL, action) => {
  const { type, payload } = action
  switch(type) {
    case SET_VISIBILITY:
      return payload
    default:
      return state
  }
}
const reducer = combineReducers({
  todos: todos_reducer,
  visibility: visibility_reducer
})

const store = createStore(reducer)

const toggle_todo = (payload) => ({type: TOGGLE_TODO, payload})
const delete_todo = payload => ({type: DELETE_TODO, payload})
const add_todo = payload => ({type: ADD_TODO, payload})
const set_visibility = payload => ({type: SET_VISIBILITY, payload})

export {
  toggle_todo,
  delete_todo,
  add_todo,
  set_visibility
}

export default store