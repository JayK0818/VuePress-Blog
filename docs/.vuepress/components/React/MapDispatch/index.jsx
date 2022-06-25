import { connect, Provider } from 'react-redux'
import React from 'react'
import { createRoot } from 'react-dom/client'
import store, { DOUBLE_INCREMENT, DOUBLE_DECREMENT, TRIPLE_INCREMENT, TRIPLE_DECREMENT } from './store.js'

const mapDoubleState = state => ({count: state.double})
const mapTripleState = state => ({count: state.triple})

const mapDoubleDispatch = function(dispatch, ownProps) {
  return {
    increment: () => dispatch({type: DOUBLE_INCREMENT, payload: ownProps.multiple}),
    decrement: () => dispatch({type: DOUBLE_DECREMENT, payload: ownProps.multiple})
  }
}

const mapTripleDispatch = function(dispatch, ownProps) {
  return {
    increment: () => dispatch({type: TRIPLE_INCREMENT, payload: ownProps.multiple}),
    decrement: () => dispatch({type: TRIPLE_DECREMENT, payload: ownProps.multiple})
  }
}

const style = {
  padding: '5px 0'
}

const DoubleCounter = connect(mapDoubleState, mapDoubleDispatch)((props) => {
  return (
    <div style={style}>
      <button className={'primary-button'} onClick={props.decrement}>decrement</button>
      <span>{props.count}</span>
      <button className={'primary-button'} onClick={props.increment}>increment</button>
    </div>
  )
})

const TripleCounter = connect(mapTripleState, mapTripleDispatch)((props) => {
  return (
    <div style={style}>
      <button className={'primary-button'} onClick={props.decrement}>decrement</button>
      <span>{props.count}</span>
      <button className={'primary-button'} onClick={props.increment}>increment</button>
    </div>
  )
})

function App() {
  return (
    <React.Fragment>
      <DoubleCounter multiple={2}/>
      <TripleCounter multiple={3}/>
    </React.Fragment>
  )
}

if(!__VUEPRESS_SSR__) {
  const root = createRoot(document.querySelector('._react_map_dispatch'))
  root.render(
    <Provider store={store}>
      <App/>
    </Provider>
  )
}