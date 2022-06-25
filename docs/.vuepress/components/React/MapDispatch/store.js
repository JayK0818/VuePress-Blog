import { createStore, combineReducers } from 'redux'

const DOUBLE_INCREMENT = 'double/increment'
const DOUBLE_DECREMENT = 'double/decrement'

function double_reducer(state = 1, action) {
  const { type, payload } = action
  switch(type) {
    case DOUBLE_INCREMENT:
      return state * payload
    case DOUBLE_DECREMENT:
      if (state === 1) {
        window.$message.warning('最小值为1')
        return state
      }
      return state / payload;
    default:
      return state
  }
}


const TRIPLE_INCREMENT = 'triple/increment'
const TRIPLE_DECREMENT = 'triple/decrement'

function triple_reducer(state = 1, action) {
  const { type, payload } = action
  switch(type) {
    case TRIPLE_INCREMENT:
      return state * payload
    case TRIPLE_DECREMENT:
      if (state === 1) {
        window.$message.warning('最小值为1')
        return state
      }
      return state / payload
    default:
      return state
  }
}

const store = createStore(combineReducers({
  double: double_reducer,
  triple: triple_reducer
}))

export {
  DOUBLE_INCREMENT,
  DOUBLE_DECREMENT,
  TRIPLE_INCREMENT,
  TRIPLE_DECREMENT
}

export default store