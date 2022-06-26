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
