# Redux

  Redux is a library for managing global application state

## Immutability

  'Mutable' means 'changeable',If something is 'immutable', It can never be changed.
  In order to update values immutably,your code must make copies of existing objects/arrays,and then modify the copies. We can do this by hand using JavaScript's array/object spread operators.
```js
const obj = {a:1, b:2}
obj.a = 3
// still the same object outside,but the contents have changed

const arr = ['a', 'b']
arr.push('c')
In the same way, we can change the contents of this array.
```
```js
const obj = {
  a: {
    c: 3
  },
  b: 2
}
const obj2 = {
  ...obj,
  a: {
    ...obj.a,
    c: 42
  }
}
```
## Actions

  An action is a plain JavaScript objet that has a type filed.The type filed should be a string that gives this 
  action a descriptive name,like 'todos/todoAdded', ------- 'domain/eventName'。

  An action creator is a function that creates and returns an action object.
```js
const addTodo = text => {
  return {
    type: 'todos/todoAdded',
    payload:text
  }
}
```
## Reducers

  A reducer is a function that receives the current state and an action object,decides how to update the state if necessary.
  and returns the new state:(state,action) => newState.
```js
const initialState = {value: 0}
function counterReducer(state = initialState, action) {
  if(action.type === 'counter/increment'){
    return {
      ...state,
      value: state.value + 1
    }
  }
  return state
}
```
## Store

  The store is created by passing in a reducer. createStore to actually create a Redux store.
```js
import { createStore } from 'redux'
const store = createStore(reducer)
```
  一个应用程序只能有一个store, 可以使用combineReducers 合并多个reducer。更改store状态的唯一方式是派发action。
  你也可以通过store.subscribe() 订阅状态的更新。
```js
// usage
function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}
const store = createStore(todos, ['Use Redux'])
```

```js
// store's Api
const state = store.getState()
/*
返回当前store的状态。
*/


// dispatch
/*
dispatches an action, This is the only way to trigger a state change。
*/
const store = createStore(todos, ['Use Redux'])
const addTodo = text => ({type: 'ADD_TODO', text})
store.dispatch(addTodo('Hello World'))


// subscribe
/*
It will be called any time an action is dispatched.
*/
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})
// 如果要取消订阅, 可以执行store.subscribe() 返回的函数
```
## combineReducers

  如果你的项目变得越来越复杂, 需要维护的状态越来越多, 可以使用combineReducers来组织你的reducer, 可以将不同的状态维护切分为比较小的reducer。
  combineReducers接受一个对象, 对象的每个字段都是一个reducer。

```js
// example
const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer
})
```
  The key names in the object will define the keys in our final state value. When we pass in an object like {counter:counterReducer},
  that says we want to have a state.counter section of our Redux state object.
```js
function combineReducers(reducers) {
  if(Object.prototype.toString.call(reducers) !== '[object Object]') {
    throw new Error('arguments must be a object')
  }
  const reducer_keys = Object.keys(reducers)
  for(let i = 0, length = reducer_keys.length; i < length; i++) {
    const reducer = reducers[reducer_keys[i]]
    if(typeof reducer !== 'function') {
      throw new Error('reducer must be a function')
    }
  }
  // 这里的state是root state
  return function(state, action) {
    const nextState = {}
    for(let i = 0, length = reducer_keys.length; i < length; i++) {
      const key = reducer_keys[i]
      const reducer = reducers[key]
      nextState[key] = reducer(state[key], action)
    }
    return nextState
  }
}
```
## applyMiddleware

  applyMiddleware 是一个用来扩展redux的方法.一般来说,如果需要触发异步的action, 需要使用中间件。
  如果需要使用多个中间件, 可以依次传递给applyMiddleware, 将返回结果作为参数传递到 createStore。

  每一个中间件会接受 store's dispatch 和 getState 函数。 并且返回一个函数。 该函数接受一个next参数(middleware's dispatch methods) 并且返回一个调用 next(action)就会触发dispatch。
  中间件的 方式 （{getState, dispatch}） => next => action.
```js
// usage

// 一个打印redux日志的中间件
const logger = store => next => action => {
  console.log(store.getState(), action.type)
  next(action)  // 一定要调用next(action)
}

import { applyMiddleware, createStore } from 'redux'
const store = createStore(reducer, applyMiddleware(logger))
```

  如果是一个异步操作, 可以actionCreator 返回的不是一个对象,而是一个函数, 该函数会接受dispatch 和 getState作为参数。
  当异步操作完成后再调用 next(action)。
```js
import { applyMiddleware, createStore } from 'redux'
function increment_async() {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch({
        type: 'increment'
      })
    }, 2000)
  }
}

const thunk = store => next => action => {
  if(typeof action === 'function') {
    return action(store.dispatch, store.getState)
  }
  next(action)
}
const store = createStore(reducer, applyMiddleware(thunk))
```

## mini-redux

  一个简易的redux
```js
function createStore(reducer, initialState) {
  // 验证reducer是否是一个函数
  if(typeof reducer !== 'function') {
    throw new Error('reducer must be function')
  }
  let state = initialState // 初始state
  const listener_cbs = []
  function getState() {
    return state
  }
  function subscribe(cb) {
    listener_cbs.push(cb)
  }
  function dispatch(action) {
    // 验证action是否是对象, 并且是否有type 字段
    const type = Object.prototype.toString.call(action)
    if(type !== '[object Object]') {
      throw new Error('action must be object')
    }
    if(!Object.prototype.hasOwnProperty.call(action, 'type')) {
      throw new Error('action must have a field type')
    }
    state = reducer(state, action)
    if(listener_cbs.length) {
      listener_cbs.forEach(listener => {
        listener()
      })
    }
  }
  return {
    getState,
    subscribe,
    dispatch
  }
}
```
```html
<!-- 验证 -->
<div id='mini-redux-app'>
  <button class='decrement-button'>-</button>
  <span class="count"></span>
  <button class='increment-button'>+</button>
</div>

<script>
  function reducer(state = 0, action) {
    const { type, payload } = action
    switch(type) {
      case 'increment':
        return state+1
      case 'decrement':
        return state-1
      default:
        return state
    }
  }
  const { getState, subscribe, dispatch } = createStore(reducer, 0)
  const increment_button = document.querySelector('#mini-redux-app .increment-button')
  const decrement_button = document.querySelector('#mini-redux-app .decrement-button')

  increment_button.addEventListener('click', () => {
    dispatch({type: 'increment'})
  }, false)
  decrement_button.addEventListener('click', () => {
    dispatch({type: 'decrement'})
  })
  subscribe(() => {
    document.querySelector('#mini-redux-app .count').textContent = getState()
  })
  document.querySelector('#mini-redux-app .count').textContent = getState()
</script>
```
  上面的redux 暂时无法触发异步action, 可以传递第三个参数对 createStore进行增强
```js
// 如果触发的是异步action, action是一个函数, 所以上面的代码action 判断是否是对象需要换个地方
function createStore(reducer, initialState, enhancer) {
  // ...
  let state = initialState
  if(enhancer !== undefined) {
    if(typeof enhancer !== 'function') {
      throw new Error('enhancer must be function')
    }
    return enhancer(createStore)(reducer,initialState)
  }
  // ...
}
function enhancer(createStore) {
  // 通过传递过来的createStore再执行上面的逻辑, 此时不再传递第三个参数.
  return (reducer, initialState) => {
    const store = createStore(reducer, initialState)
    const dispatch = store.dispatch
    function _dispatch(action) {
      if(typeof action === 'function') {
        // 将dispatch 作为action的第一个参数, 当异步操作完成时, 再进行dispatch
        return action(dispatch)
      } else {
        if(Object.prototype.toString.call(action) !== '[object Object]') {
          throw new Error('action must be object')
        }
        return dispatch(action)
      }
    }
    return {
      ...store,
      dispatch: _dispatch
    }
  }
}
```
  Each middlewares receives Store's dispatch and getState functions as names arguments. The last middleware
  in the chain will receive the real store's dispatch method as the next parameter.
  So, the middleware signature is ({getState, dispatch}) => next => action.
```js
// applyMiddleware 实现
// 中间件
const logger = store => next => action => {
  console.log('logger')
  next(action)
}
const thunk = store => next => action => {
  console.log('thunk')
  next(action)
}

function middleware(store) {
  return function(next) {
    return function(action) {
      console.log('middleware')
      next(action)
    }
  }
}
function applyMiddleware() {  // 所有中间件
  const middlewares = Array.from(arguments)
  return createStore => {
    return (reducer, initialState) => {
      const { dispatch, getState, subscribe } = createStore(reducer, initialState)
      const chain_function_array = middlewares.map(middleware => middleware({dispatch, getState}))
      const _dispatch = compose(...chain_function_array)(dispatch)
      return {
        getState,
        dispatch:_dispatch,
        subscribe
      }
    }
  }
}

function compose() {
  const funs = Array.from(arguments)
  return function(dispatch) {
    for(let i = funs.length - 1; i >= 0; i--) {
      dispatch = funs[i](dispatch)
    }
    return dispatch
  }
}
```

## Redux性能优化

  使用函数式编程 对reducer做一层拦截, 判断每个reducer的执行时间, 如果某个reducer执行时间特别长, 那么可以查看代码是否有逻辑对其进行优化。
```js
// 传递给createStore中的reducers是一个对象, 对 对象进行遍历即可
const logShowReducers = (reducers) => {
  Object.keys(reducers).forEach(name => {
    const originalReducer = reducers[name]
    // 每个reducer接受state和action
    reducers[name] = (state, action) => {
      const start = Date.now()
      const result = originalReducer(state, action)
      console.log(`time-diff ${Date.now() - start}`)
      return result
    }
  })
  return combineReducers(reducers)
}
const store = createStore(logShowReducers)
```

**1**
  每个组件只获取当前组件需要的数据。如果返回整个state, 那么当其他组件更新store数据时, 获取整个store数据的组件也会重新渲染。
```jsx
const store = createStore(combineReducers({
  counter: counterReducer,
  todos: todoReducer
}))

// todoApp
const todoApp = () => {
  const store = useSelector(state => stete)
  return (
    <ul>{store.todos.map(todo => (<li>{todo.text}</li>))}</ul>
  )
}
// todoApp组件在 counter组件更新时也会更新, 即使todos数据未更新。
```

**2**
  有时会存在需要获取store数据中的派生状态, 比如获取数据的id。每次调用map函数都会返回一个新数组, 此时组件会重新更新。
```jsx
const todoApp = () => {
  const todoList = useSelector(state => state.todos)
  // 此时每次在counter组件更新时 也会更新当前组件
  const ids = useSelector(state => state.todos.map(todo => todo.id))
  return (
    <>
    {/*  */}
    </>
  )
}
```

  可以使用第三方库reselect, 将结果缓存, 如果结果未更新则返回缓存的数据。该缓存函数可以传入多个input, 每个input返回的参数 依次传递给 最后一个output 函数作为参数。
```jsx
const getTodoList = (
  state => state.todos,
  todos => todo.map(todo => todo.id)
)
const todoApp = () => {
  const todoList = useSelector(state => state.todos)
  const ids = useSelector(getTodoList)
    return (
    <>
    {/*  */}
    </>
  )
}
```
  A library for creating memoized 'selector' function. Commonly used with Redux, but usable with any plain JS immutable data as well.

**Basic Usage**

Reselect exports a createSelector API, which generates memoized selector functions. createSelector accepts one or more "input" selectors, which extract values from arguments, and an "output" selector that receives the extracted values and should return a derived value. If the generated selector is called multiple times, the output will only be recalculated when the extracted values have changed

[npm-reselect](https://www.npmjs.com/package/reselect)

**3**

  每次更新store的时候, 所有的reducer都会执行判断 action.type, 因为reducer是一个纯函数, 可以通过函数式编程 对 reducer做一层拦截。如果不是更新当前reducer则无需执行当前纯函数的逻辑。
```js
// counter中的action 都有counter 前缀
const counterReducer = (state = 0, action) => {
  console.log('counter执行了吗')
  const { type, payload } = action
  switch (type) {
    case 'counter/increment':
      return state + payload
    case 'counter/decrement':
      return state - payload
    default:
      return state
  }
}

// 拦截reducer 判断当前reducer 能不能执行
const specialActions = (reducer, prefix, defaultState) => {
  return (state, action) => {
    if (action.type.match(prefix)) {
      return reducer(state, action)
    }
    // 返回一个默认值, 因为action不匹配 没有走到reducer
    return defaultState
  }
}

const store = createStore(combineReducers({
  car: shopCarReducer,
  counter: specialActions(counterReducer, 'counter', 0)
}))
```