# React性能优化

## shouldComponentUpdate() / PureComponent / memo()

  根据shouldComponentUpdate()的返回值,判断React组件的输出是否受当前state或props更改的影响。首次渲染不会调用该方法。
  PureComponent会对props和state进行浅层比较,并减少了跳过必要更新的可能性。

  tips: shouldComponentUpdate()返回false不会子组件在state更新时重新渲染。
```jsx
import React, {useState,PureComponent} from 'react'
// 当app组件更新page时, Counter1和Counter2 Counter3是不用更新的
function App(){
  const [count,setCount] = useState(0)
  const [page,setPage] = useState(0)
  return(
    <div>
      <button onClick={() => setCount(count+1)}>{count}</button>
      <button onClick={() => setPage(page+1)}>change-page-{page}</button>
      <Counter1 count={count}/>
      <Counter2 count={count}/>
      <Counter3 count={count}/>
    </div>
  )
}

class Counter1 extends React.Component {
  shouldComponentUpdate(nextProps,nextState){
    return this.props.count !== nextProps.count
  }
  render() {
    return (
      <div>{this.props.count}</div>
    )
  }
}
class Counter2 extends PureComponent{
  render() {
    return (
      <div>{this.props.count}</div>
    )
  }
}
const Counter3 = memo(function({count}) {
  return (
    <div>{count}</div>
  )
})
```

## useState的惰性初始state

  initialState参数只会在组件的初试渲染中起作用,如果初始state需要通过复杂计算获得,useState中可以传入一个函数
```js
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
```

## useEffect

  默认情况下,effect将在每轮渲染结束后执行,但是可以让它在只有某些值改变的时候菜执行。要实现这一点,可以给useEffect的
  第二个参数传递一个数组。
```jsx
useEffect(
  () => {
    const subscription = props.source.subscribe();
    return () => {
      subscription.unsubscribe();
    };
  },
  [props.source],
);
// 这个例子来源于react官网
// 如果传递一个空数组,这就告诉React，effect不依赖于props或state中的任何值.则只会渲染一次

// App.jsx
function App () {
  const [count,setCount] = useState(0)
  useEffect(() => {
    document.title = `You clicked ${count} times`
  },[])
  return (
    <button onClick={() => {setCount(count+1)}}>{count}</button>
  )
}
// 上面的案例button按钮的count值再每次点击后都会更新,但是标题文字一直停留在0次
```

## useMemo

  返回一个memoized值。它仅会在某个依赖改变时才会重新计算memoized值。这种优化有助于避免在每次渲染时
  都进行高开销都计算。
```jsx
import {useMemo, useState} from 'react'
function Counter() {
  const [count, setCount] = useState(0)
  // 仅仅在count变更时才会重新计算
  const double = useMemo(() => {
    return count * 2
  },[count])
  return (
    <div>
      <button onClick={() => setCount(count => count+1)}>{double} - {count}</button>
    </div>
  )
}
```

## useCallback

  跟useMemo()不同的是, useMemo()缓存一个值,而useCallback缓存一个函数,该回调函数仅在某个依赖项改变时才会更新。
```jsx
import {useState, memo, useCallback} from 'react'

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
