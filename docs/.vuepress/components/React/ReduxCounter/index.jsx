import { Provider, useSelector, useDispatch } from 'react-redux'
import { createRoot } from 'react-dom/client'
import store, { INCREMENT, DECREMENT } from './store'

function Counter() {
  const count = useSelector(state => state)
  const dispatch = useDispatch()
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
  return (
    <div>
      <button className='primary-button' onClick={handleDecrement}>Decrement</button>
      <span>{count}</span>
      <button className='primary-button' onClick={handleIncrement}>Increment</button>
    </div>
  )
}

if(!__VUEPRESS_SSR__) {
  const root = createRoot(document.querySelector('._react_redux_counter'))
  root.render(
    <Provider store={store}>
      <Counter/>
    </Provider>
  )
}
