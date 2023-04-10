# Redux ToolKit

  redux toolkit 是官方推荐的编写redux逻辑的工具。包含了redux的核心代码.可以用来更好的创建reducer和store.
```js
// install
npm install @reduxjs/toolkit react-redux
```

## createSlice

  creating a slice requires a string name to identify the slice, and initial state value, and one or more
  reducer functions to define how the state can be updated.

```js
// 一个计数器案例
import { createSlice } from '@reduxjs/toolkit'
const COUNTER_KEY = 'counter'
const counter = createSlice({
  name: COUNTER_KEY,  //作为action type 的前缀
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
    // increment和decrement接受的第二个参数是 一个对象, 包含type和payload字段(就是action creator生成的对象一样)
    increment: (state, creator) => state + 1
    // creator {type: 'counter/increment', payload: undefined}
  }
})
// 创建好reducer之后 到处action creators和reducer,推荐使用ES6的解构语法
export { increment, decrement } = counter.actions
export counter.reducer
```
  createSlice会自动生成 action types 和 action creators. 根据传递给createSlice的name属性和函数名称
  上述计数器的例子, type 分别是 counter/increment, counter/decrement。

  如果需要自定义生成的数据, 可以给对应的reducer传递一个对象, 该对象接受两个参数, 一个reducer 和 一个prepare函数。
  prepare返回一个对象,该对象下的payload属性即为 最后自定义生成的内容。
```js
const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    add_todo: {
      reducer: (state, action) => ([...state, action.payload]),
      prepare: text => ({
        payload: {
          text,
          id: nanoid(),
          completed: false
        }
      })
    }
  }
})
```
  createSlice() 返回一个对象, 该对象包含以下方法：

```ts
{
  name : string,
  reducer : ReducerFunction,
  actions : Record<string, ActionCreator>,
  caseReducers: Record<string, CaseReducer>.
  getInitialState: () => State
}
```
```js
// extraReducers
const uppercase = createAction('todo/uppercase')
const lowercase = createAction('todo/lowercase')
createSlice({
  // ...
  extraReducers: builder => {
    builder.addCase(uppercase, (state, action) => {
      console.log(state, action)
      return state.map(todo => ({...todo, text: todo.text.toUpperCase()}))
    })
  }
  // 或者使用对象的方法
  extraReducers: {
    [uppercase]: (state, action) => (state.map(todo => ({...todo, text: todo.text.toUpperCase()})))
    [lowercase]: (state, action) => (state.map(todo => ({...todo, text: todo.text.toLowerCase()})))
  }
})
```

## configureStore

  configureStore 默认内置了一些中间件, 比如 redux-thunk, 开发环境下开启devtools

```js
import { configureStore } from '@reduxjs/toolkit'
function logger(state) {
  return next => {
    return action => {
      console.log('logger', action)
      next(action)
    }
  }
}

const store = configureStore({
  reducer: {
    counter: counterReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(logger)
  },
  devTool: true
})
```
## createAsyncThunk

  在configureStore中调用异步逻辑, 需要使用createAsyncThunk函数, 它接受三个参数, 第一个参数是action type, 字符串.
  第二个参数是一个函数payloadCreator, 这个函数接受两个参数(payload, thunkApi), thunkApi下有一个dispatch方法, 可以在异步操作结束后
  dispatch触发更新。

```js
const increment_async = createAsyncThunk('counter/async_increment', (payload, {dispatch}) => {
  setTimeout(() => {
    dispatch(increment(payload))
  },2000)
})
```
1. type将会生成三个 action type 变量, 在上面的案例中, counter/async_increment 将会生成：

**counter/async_increment/pending**

**counter/async_increment/fulfilled** 

**counter/async_increment/rejected**


2. payloadCreator 返回一个promise,返回最终的异步操作后的结果。该函数接受两个参数：

2.1  arg: a single value, containing the first parameter that was passed to the thunk action creator when it was dispatched。

2.2 thunkApi: 是一个对象,包含dispatch, getState 等redux store method.

```js
// 一个异步添加todo的例子
import { createAsyncThunk } from '@reduxjs/toolkit'

const add_todo_async = createAsyncThunk('add_todo/async', (payload) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(payload)
    }, 2000)
  })
})
const todo_reducer = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    // ...
  },
  extraReducers: {
    [add_todo_async.fulfilled]: (state, action) => {
      state.push({
        id: nanoid(),
        text: action.payload,
        completed: false
      })
    }
  }
})
```
  add_todo_async.pending / add_todo_async.fulfilled / add_todo_async.rejected 是一个action creator. 它们的toString()方法会返回对应的
  action type.

## createAction

  一个工具函数用来定义 redux action type 和 action creator。
```js
import { createAction } from '@reduxjs/toolkit'
const increment = createAction('counter/increment')

let action = increment()
// { type: 'counter/increment' }

action = increment(3)
// returns { type: 'counter/increment', payload: 3 }

console.log(increment.toString())
// 'counter/increment'
```
  接受一个参数的情况下, 该参数会成为返回值的 type 属性。 也可以传递第二个参数 用来定义生成的payload。该参数是一个函数,
  必须返回一个对象, 对象下有一个payload属性。
```js
const add_todo = createAction('todo/add', text => {
  return {
    payload: {
      text,
      completed: false
    }
  }
})
console.log(add_todo('hello world'))
console.log(add_todo('你好, 生活'))
/*
{
  payload: {text: 'hello world', completed: false}
  type: "todo/add"
}
{
  payload: {text: '你好, 生活', completed: false}
  type: "todo/add"
}
*/
```

## createReducer

### Builder Callback

  在redux中书写reducer函数时, 有时需要写很多的 case 语句来为不同的action定义对应的数据更新。createReducer可以简化
  此类reducer的实现.
```js
const increment = createAction('counter/increment')
const decrement = createAction('counter/decrement')
const initial_state = 0
const reducer = createReducer(initial_state, (builder) => {
  builder
  .addCase(increment, (state, action) => state + 1)
  .addCase(decrement, (state, action) => state - 1)
})
```
  initialState可以传递一个数值 或者一个函数, 函数返回值作为state. 比如需要读取localStorage的数据时！

  builder.addCase() 行为和switch...case语句一样。
  第一个参数是createAction() 生成的action creator 生成一个 action type。
  第二个参数是一个reducer 函数。
```js
reducer.getInitialState() // 0  获取初始状态值。
```

  createReducer第二个参数也可以传递一个对象, 对象的每个键名 为createAction() 返回的对象上的type字段
```js
const reducer = createReducer(0, {
  [increment.type]: (state, action) => state + 1,
  [decrement]: (state, action) => state - 1
})
```
  上面用到了对象的计算属性, 第二种方式 会调用decrement.toString()方法, 该函数改写了toString(),返回值和直接调用decrement.type
  结果是一样的, 都是 counter/decrement.

  在Redux中要求reducer必须是一个纯函数,不允许直接修改参数state,但是在createReducer中 可以直接修改对象的属性提交, 而无需使用对象扩展运算符 或者 Object.assign 来返回一个新的对象。
```js
// 在一个todo-list中, 新增todo,和 toggle。直接在原始数组push一条数据
import { createAction, createReducer } from '@reduxjs/toolkit'

const toggle = createAction('todo/toggle')
const add = createAction('todo/add')

const todo_reducer = createReducer([], builder => {
  builder
  .addCase(toggle, (state, action) => {
    const index = action.payload
    const todo = state[index]
    todo.completed = !todo.completed
  })
  .addCase(add, (state, action) => {
    const todo = action.payload
    state.push(todo)
  })
})
```
### Map Object

```jsx
// 或者使用对象方式
const todo_reducer = createReducer([], {
  [toggle_todo]: (state, action) => {
    const todo = state.find(todo => todo.id === action.payload)
    if(todo) {
      todo.completed = !todo.completed
    }
  },
  [add_todo]: (state, action) => {
    state.push(action.payload)
  }
})
```
:::tip 
在createReducer中,可以提交可变更新, 或者 返回一个新数据, 但是只能使用其中一种方式, 不可以在变更state状态后 再将变更后的数据返回。
```js
const todo_reducer = createReducer([], {
  [toggle_todo]: (state, action) => {
    const index = state.findIndex(todo => todo.id === action.payload)
    if(index >= 0) {
      const todo = state[index]
      todo.completed = !todo.completed // 变更状态就可以了, 无需再次返回新的state, 否则会报错
      return [...state.slice(0, index), todo, ...state.slice(index+1)]
    }
  },
  [add_todo]: (state, action) => {
    state.push(action.payload)
  }
})
```
:::

### current

```jsx
import { createSlice, current } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'todos',
  initialState: [{ id: 1, title: 'Example todo' }],
  reducers: {
    addTodo: (state, action) => {
      console.log(state)  // state 是一个proxy对象, 在控制台比较难以阅读
      console.log('before', current(state))
      state.push(action.payload)
      console.log('after', current(state))
    },
  },
})
```

