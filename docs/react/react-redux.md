# React Redux

  React Redux is the official Redux UI binding library for React. If you are using Redux and React togther,
  you should also use React Redux to bind these two libraries.

:::tip
You can ensure that each connected component only extracts the specific pieces of data from the store state that 
are needed by that component. This means that you own component will need to re-render less ofen.
:::

## Provider

  Once the store is created, we can make is available to our React components by putting a React Redux Provider
  around out application.
```jsx
// usage
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
const root = createRoot(document.getElementById('root'))
root.render(
  <Provider>
    <App store={store}/>
  </Provider>
)
```
## useDispatch / useSelector

  The useSelector hooks lets our component extract whatever pieces of data it needs from the Redux store state.

  The useDispatch hook can give us the actual dispatch method from the Redux store,so we can dispatch actions when the user does
  something like clicking on a button.

  Now we can use the React Redux hooks to let React components interact with the Redux store.
```js
const dispatch = useDispatch()
const todos = useSelector(state => state.todos)
```
```js
// store.js
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

// App.jsx
import { useSelector, useDispatch, Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
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
      <button className='primary-button' onClick={handleIncrement}>Increment</button>
      <span>{count}</span>
      <button className='primary-button' onClick={handleDecrement}>Decrement</button>
    </div>
  )
}
const root = createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Counter/>
  </Provider>
)
```
  Any time an action has been dispatched and the Redux store has been updated, useSelector will re-run our selector function.

<div class="_react_redux_counter"></div>
<ClientOnly>
  <ReduxCounter/>
</ClientOnly>
  
  这个是上面代码的展示效果

## connect

  React Redux provides a connect function for you to react values from the Redux store(and re-read the values when the store updates)
  
  Arguments:
1. mapStateToProps  called every time the store state chagnes. It receives the entire store state, and should return an object
of data this component needs

2. mapDispatchToProps : (functions / object)
  参数可以是对象 或者 函数, 一般来说是一个函数 包含当前组件需要的 actionCreator。

```jsx
// 将上面的计数器 使用useSelector 和 useDispatch 通过connect 方法实现
// store.js
const increment = () => ({
  type: INCREMENT
})
const decrement = () => ({
  type: DECREMENT
})

// App.jsx
import { decrement, increment } from './store'

const mapStateToProps = state => ({count: state})
const mapDispatchToProps = {
  decrement,
  increment
}

const Counter = connect(mapStateToProps, mapDispatchToProps)((props) => {
  return (
    <div>
      <button className='primary-button' onClick={props.increment}>Increment</button>
      <span>{props.count}</span>
      <button className='primary-button' onClick={props.decrement}>Decrement</button>
    </div>
  )
})
```
<div class="_redux_connect_counter"></div>
<ClientOnly>
  <ReduxConnectCounter/>
</ClientOnly>

  这是一个通过connect方法实现的counter计数器, 效果和使用useSelector/useDispatch 相同。

## Common ways of calling connect

1. 如果connect函数两个参数都没有传递, 那么组件将不会更新(当store的数据更新时)。 组件会接受props.dispatch
2. 如果只传递了mapStatetoProps,但是没有传递mapDispatchToProps, 组件会在store数据更新时更新, 并接受props.dispatch。
3. 如果只传递了mapDispatchToProps,但是没有传递mapStateToProps, 组件在store数据更新时不会更新, 并接受action生成器(传递给mapDispatchToProps里的函数)
4. 两个参数mapDispatchToProps 和 mapStateToProps都传递了,那么组件会正常更新并且接受action生成器。

| | Do Not Subscribe to the Store | Subscribe to the Store |
|  ------------- |:-------------: |:-------------:|
| Do Not Inject Action Creators | connect()(Component) | connect(mapStateToProps)(Component) | 
| Inject Action Creators | connect(null, mapDispatchToProps)(Component) | connect(mapStateToProps, mapDispatchToProps)(Component) |

:::tip
只要第一个参数mapStateToProps没有传递, 那么当store中的数据更新时,当前组件不会触发重新渲染。
:::