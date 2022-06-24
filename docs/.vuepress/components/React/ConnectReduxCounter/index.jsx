import { Provider, connect } from 'react-redux'
import { createRoot } from 'react-dom/client'
import store, { decrement, increment } from './store'

const mapStateToProps = state => ({count: state})
const mapDispatchToProps = {
  decrement,
  increment
}

const Counter = connect(mapStateToProps, mapDispatchToProps)((props) => {
  return (
    <div>
      <button className='primary-button' onClick={props.decrement}>Decrement</button>
      <span>{props.count}</span>
      <button className='primary-button' onClick={props.increment}>Increment</button>
    </div>
  )
})

if(!__VUEPRESS_SSR__) {
  const root = createRoot(document.querySelector('._redux_connect_counter'))
  root.render(
    <Provider store={store}>
      <Counter/>
    </Provider>
  )
}
