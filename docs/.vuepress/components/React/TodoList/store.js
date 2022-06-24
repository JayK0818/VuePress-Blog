import { createStore, combineReducers } from 'redux'

const INCREMENT = 'todo/increment'
const DELETE = 'todo/delete'
const TOGGLE = 'todo/toggle'

function todos(state = [], action) {
  const { type, payload } = action
  switch(type) {
    case INCREMENT: 
      return [...state, payload]
    case DELETE:
      return state.filter(todo => todo.id !== payload)
    case TOGGLE:
      return state.slice().map(todo => {
        if(todo.id === payload) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default: 
      return state
  }
}

const reducer = combineReducers({
  todos
})
const store = createStore(reducer)

export {
  INCREMENT,
  DELETE,
  TOGGLE
}

export default store