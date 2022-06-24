import { useReducer } from 'react'
import { createRoot } from 'react-dom/client'
const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const RESET = 'reset'
const initial_count = 0

function reducer(state = initial_count, action) {
  const { type, payload } = action
  switch(type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    case RESET:
      return payload
    default:
      return state
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, initial_count)
  const handleIncrement = () => {
    dispatch({
      type: INCREMENT
    })
  }
  const handleDecrement = () => {
    dispatch({
      type: DECREMENT
    })
  }
  const handleReset = () => {
    dispatch({
      type: RESET,
      payload: initial_count
    })
  }
  return (
    <div>
      <span>{count}</span>
      <button onClick={handleIncrement} className='primary-button'>Increment</button>
      <button onClick={handleDecrement} className='primary-button'>Decrement</button>
      <button onClick={handleReset} className='primary-button'>Reset</button>
    </div>
  )
}

if(!__VUEPRESS_SSR__) {
  const element = document.querySelector('._usereducer_counter')
  const root = createRoot(element)
  root.render(
    <Counter/>
  )
}