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
  只不过被合并为了一个API。
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
