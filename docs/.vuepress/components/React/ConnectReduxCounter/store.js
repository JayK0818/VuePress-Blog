import { createStore } from 'redux'

const INCREMENT = 'counter/increment'
const DECREMENT = 'counter/decrement'

function reducer(state = 0, action) {
  const { type } = action
  switch(type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default: 
      return state
  }
}
const store = createStore(reducer, 0)

const increment = () => ({
  type: INCREMENT
})

const decrement = () => ({
  type: DECREMENT
})

export {
  increment,
  decrement
}

export default store