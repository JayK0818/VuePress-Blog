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