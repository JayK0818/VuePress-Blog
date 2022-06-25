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

  The store is created by passing in a reducer.
```js
import { createStore } from 'redux'
const store = createStore(reducer)
```
## Dispatch

  The Redux store has a method called dispatch,The only way to update the state is to call store.dispatch()
  and pass in an action object.
```js
const increment = () => {
  return {
    type: 'counter/increment'
  }
}
store.dispatch(increment())
```
## combineReducers

  Redux has a function called combineReducers,It accepts an object full of slice reducers as its argument, and returns a
  function that calls each slice reducer whenever an action is dispatched.The result from each slice reducer are all combined
  together into a single object as the final result.
```js
const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer
})
```
  The key names in the object will define the keys in our final state value. When we pass in an object like {counter:counterReducer},
  that says we want to have a state.counter section of our Redux state object.
