# Hooks

  Hook是React 16.8新增的特性。可以在不编写class的情况下使用state以及其他的React特性。Hook只能在
  函数组件中使用。

## useState

  useState 会返回一对值: 当前状态和一个更新它的函数。初始state参数只有在第一次渲染时才会被用到
```jsx
function Counter() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count => count+1)
  }
  return (
    <button onClick={handleClick}>click {count} times</button>
  )
}
```
  在回调函数中更新state
```jsx
function Counter() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1)
    }, 1000)
    return () => clearInterval(id)
  }, [])
}
// 传递空的数组[], 意味着hook只在组件挂载时运行一次。但是在setInterval()的回调中, count的值不会发生变化。
// 因为当effect执行时, 会创建一个闭包,并将count 的值保存在闭包中。且初始值为0！
```
  1. 指定[count]作为依赖列表可以修复此bug, 但会导致每次发生改变时定时器被重置。
  2. 可以使用setState的函数形式更新。
```jsx
// ...
useEffect(() => {
  const id = setInterval(() => {
    setCount(c => c + 1)
  })
  return () => clearInterval(id)
})
```
  如果初始state需要通过复杂计算获得,useState中可以传入一个函数,initialState参数只会在组件的初试渲染中起作用.
```jsx
// App.jsx
import {useState} from 'react'
function App({props}) {
  const [count,setCount] = useState(() => {
    // 只会在第一次初始渲染的时候才会计算
    return props.count || 0
  })
  return (
    <div>{count}</div>
  )
}

function App() {
  const [count, setCount] = useState(() => {
    const array = []
    for(let i = 0; i < 100; i++) {
      array.push(i)
    }
    console.log('initial state') // 只会在第一次渲染的时候执行
    return array.reduce((prev,next) => prev + next, 0)
  })
  const handleClick = () => {
    setCount(count => count+1)
  }
  return (
    <button onClick={handleClick}>click {count}</button>
  )
}
```

## useEffect

  useEffect 跟class组件中的componentDidMount, componentDidUpdate 和 componentWillUnmount 具有相同的用途。
  只不过被合并为了一个API。默认情况下, React会在每次渲染后调用副作用函数 --- 包括第一次渲染的时候。React保证了每次运行effect的同时, DOM都已经更新
  完毕。
```jsx
function UpdateTitle() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count])
  const handleClick = () => {
    setCount(count+1)
  }
  return (
    <button onClick={handleClick}>click</button>
  )
}

// 使用class组件实现相同的功能
class Counter extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      count: 0
    }
  }
  handleClick = () => {
    this.setState(state => ({
      count: state.count += 1
    }))
  }
  componentDidMount() {
    document.title = `you clicked ${this.state.count} times`
  }
  componentDidUpdate() {
    document.title = `you clicked ${this.state.count} times`
  }
  render() {
    return (
      <button onClick={this.handleClick}>{this.state.count}</button>
    )
  }
}
```
  useEffect可以返回一个函数来 '清除' 副作用。
  和useState一样, 可以在组件中多次使用useEffect。
```jsx
function Component() {
  const listen_scroll = () => {
    console.log('scroll')
  }
  useEffect(() => {
    document.addEventListener('scroll', listen_scroll, false)
    return () => {
      document.removeEventListener('scroll', listen_scroll, false)
    }
  }, [])
}
```
  React会在执行当前effect之前对上一个effect进行清除。
```jsx
function App () {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count+1)
  }
  useEffect(() => {
    console.log('hello')
    return function clean() {
      console.log('clean', count)
    }
  }, [count])
  console.log('render')
  return (
    <div>
      <button onClick={handleClick}>click {count} times</button>
    </div>
  )
}
// 每次点击button按钮时执行effect, 会执行上一次清除副作用的函数, 当count为1时, 此时执行的cleanup函数返回的count为0
// --- initial render ----> render  hello
// --- re-render      ----> render (上一次的count) hello
```

  在某些情况下, 每次渲染后执行清理或者执行effect可能会导致性能问题。可以在useEffect第二个参数传递一个数组, 
  参数为 执行effect函数的依赖, 数组里的值更新时才执行effect函数
```jsx
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // 仅在 count 更改时更新
```
  如果想执行只运行一次的effect(仅在组件挂载和卸载时执行), 可以传递一个空数组([])作为第二个参数.
  如果更新后的state与当前的state相同时, React将跳过子组件的渲染并且不会触发effect执行。

## 自定义Hook

  自定义Hook必须以 use开头, 否则React无法判断Hook使用是否违反了规则。(自定义Hook可以使用其他hook.否则hook需要在React组件中顶层使用)
```jsx
function useFriendStatus () {
  const [isOnline, setIsOnline] = useState(null)
  useEffect(() => {
    setTimeout(() => {
      setIsOnline(Math.random() > 0.5 ? true : false)
    }, 3000)
  }, [])
  return isOnline
}
function App() {
  const isOnline = useFriendStatus()
  if(isOnline === null) return 'Loading...'
  return isOnline ? 'Online' : 'Offline'
}
```

## useContext

  接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值。当前的 context 值由上层组件中距离当前组件最近的
  MyContext.Provider 的 value prop 决定。
```jsx
function Counter() {
  const count = useContext(CounterContext)
  return (
    <div>{count}</div>
  )
}
// 当组件最近的Context.Provider更新时,该Hook会触发重新渲染，即使使用了memo
const Counter = memo(() => {
  const count = useContext(CounterContext)
  return (
    <div>count {count}</div>
  )
})


function App() {
  const [count, setCount ] = useState(initial_count)
  const handleClick = () => {
    setCount(count+1)
  }
  return (
    <React.Fragment>
      <CounterContext.Provider value={count}>
        <Counter/>
        <button onClick={handleClick}>click</button>
      </CounterContext.Provider>
    </React.Fragment>
  )
}
```

## useReducer

```js
// 语法
const [state, dispatch] = useReducer(reducer, initialState, init)
```

  下面是一个计数器的Demo
```jsx
function reducer(state = 0, payload) {
  const { type } = payload
  switch(type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state -1;
    default:
      return state
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0)
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
      {count}
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  )
}
```
  React会确保dispatch函数的标识符是稳定的, 并且不回在组件重新渲染时改变。
  和useState一样, 可以为useReducer惰性地 创建初始state。将一个函数传递给 useReducer()的第三个参数
```jsx
const initial_count = 10
function App() {
  const [count, dispatch] = useReducer(reducer, initial_count, function() {
    return initial_count * 10 + 20
  })
}
// 此时初始count 就是120
```
<div class="_react_usereducer_counter"></div>

<ClientOnly>
  <ReactUseReducerCounter/>
</ClientOnly>

  虽然这是用vuepress搭建的博客, 但是这个组件确实使用react+useReducer实现的!

## useCallback

  useCallback返回一个缓存的函数. 将内联回调函数以及依赖数组作为参数传入useCallback, 它将返回回调函数的memorized版本。
  该回调函数仅在某个依赖项改变时才会更新。
```jsx
// 验证useCallback
const set = new Set()
function App() {
  const [ count, setCount ] = useState(0)
  const a = useCallback(() => {
    console.log(a)
  }, [])
  const handleClick = () => {
    setCount(count+1)
    set.add(a)
    console.log(set.size) // 在使用useCallback之后,set.size始终输出的是1.而在使用
    // useCallback之前, set.size是自增的,因为每次都会创建一个新的函数
  }
  return (
    <button onClick={handleClick}>{count}</button>
  )
}
```
```jsx
// 将一个函数传递给子组件
const Foo = memo(function Foo({click}){
  console.log('foo-render')
  return (
    <p onClick={click}>click me</p>
  )
})

function Container() {
  const [count, setCount] = useState(0)
  //在点击button时，如果不使用useCallback,每次传递给Foo组件的都是新的函数,会导致Foo组件重新渲染
  const callback = useCallback(() => {
    console.log('click')
  },[])
  return (
    <div>
      <button onClick={() => setCount(count => count+1)}>click{count}times</button>
      <Foo click={callback}/>
    </div>
  )
}
```

## useMemo

```js
// 语法
const memoizedValue = useMemo(() => computedExpensiveValue(a, b), [a, b])
```
  useMemo用来缓存一个值。useCallback(fn, deps)相当于 useMemo(() => fn, deps)
```jsx
const App = () => {
  const [count, setCount] = useState(0)
  const memoizedValue1 = useMemo(() => {
    const array = []
    for(let i = 0; i <= 50; i++) {
      array.push(i)
    }
    console.log('computed1...')
    return array.reduce((prev,next) => prev + next, 0)
  }, [])
  const handleClick = () => {
    setCount(count + 1)
  }
  const memoizedValue2 = (() => {
    const array = []
    for(let i = 0; i <= 50; i++) {
      array.push(i)
    }
    console.log('computed2...')
    return array.reduce((prev,next) => prev + next, 0)
  })()
  return (
    <div>
      <div>{memoizedValue1} - {memoizedValue2}</div>
      <button onClick={handleClick}>click - {count}</button>
    </div>
  )
}
// 自增count的时候, computed1只会在初始渲染的时候输出1次, 而 computed2会在每次更新的时候输出
```
## useRef

  useRef返回一个可变的ref对象, 其.current属性被初始化为传入的参数。返回的ref对象在整个组件的生命周期内保持不变。
  变更.current属性不会引发组件重新渲染。
:::tip
使用useRef() 和 自建一个{current:...}对象的唯一区别就是 useRef会在每次渲染时返回同一个ref对象。
:::
```jsx
const set = new Set()
function Counter() {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const handleClick = () => {
    setCount(count+1)
    set.add(ref)
    console.log(set.size)
    // set.size 输出的始终是1
  }
  return (
    <div>
      <button onClick={handleClick}>{count}</button>
    </div>
  )
}
```
  应用场景: 1. 调用子组件上的某个方法, 和 createRef() 效果一样。
    2. 清除setInterval 或者 setTimeout
```jsx
function HelloWorld() {
  let timer = null
  const [count, setCount] = useState(0)
  useEffect(() => {
    timer = setInterval(() => {
      setCount(count => count+1)
    }, 1000)
  }, [])
  useEffect(() => {
    if(count > 5) {
      clearInterval(timer) // 无法清除定时器
    }
  }, [count])
  return (
    <div>{count}</div>
  )
}

// 使用useRef
function HelloWorld() {
  const timer = useRef(null)
  //...
  useEffect(() => {
    if(count > 5) {
      clearInterval(timer.current)
    }
  }, [])
}
```

