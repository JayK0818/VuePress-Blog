import { createRoot } from 'react-dom/client';
import React from 'react';
const initial_state = 0
function reducer(state = initial_state, action) {
  const { type } = action
  switch(type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    default:
      return state
  }
}
const { useReducer } = React
function ReducerCounter() {
  const [count, dispatch] = useReducer(reducer, initial_state)
  const handleIncrement = () => {
    dispatch({
      type: 'increment'
    })
  }
  const handleDecrement = () => {
    dispatch({
      type: 'decrement'
    })
  }
  return (
    <div>
      <button onClick={handleDecrement} className='primary-button'>decrement</button>
      <span>{count}</span>
      <button onClick={handleIncrement} className='primary-button'>increment</button>
    </div>
  )
}

if(!__VUEPRESS_SSR__) {
  const root = createRoot(document.querySelector('._react_usereducer_counter'))
  root.render(
    <ReducerCounter/>
  )
}
