# 函数防抖与函数截流

## Debounce
  
  当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次

```js
// 实现一个函数防抖 debounce
function debounce(fun,interval = 300) {
  let timer = null
  return function() {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fun.apply(this,arguments);
    },interval)
  }
}
```
```jsx
// 在react中 当搜索框输入字符进行搜索数据时使用函数防抖控制请求
import React from 'react'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      result:[]
    }
    this.handleInputDebounce = debounce(this.handleInput,3000)
  }
  handleInput = (event) => {
    let keyword = event.target.value.trim()
    if(!keyword) return;
    fetch('/api/xxxx').then(res => res.json())
      .then(res => {
        this.setState({
          result:res
        })
      })
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleInputDebounce}/>
      </div>
    )
  }
}
```
  下面input框设置的防抖间隔为500ms, 最后一次输入结束后500ms, input框的内容会显示在下方。

<ClientOnly>
  <JavaScript-Debounce/>
</ClientOnly>

## Throttle

  函数在指定的时间间隔内执行
  对于函数节流,同样实现一个
```js
// 第一次触发的时候马上执行
function throttle_immediate(fn,delay = 500) {
  let prevTime = 0
  return function() {
    if(Date.now() - prevTime < delay) return
    fn.apply(this, arguments)
    prevTime = Date.now()
  }
}
```
```jsx
// 监听窗口改变时 显示当前窗口尺寸大小
import {React} from 'react'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
    this.onResizeThrottle = throttle_immediate(this.onResize,500)
  }
  componentDidMount() {
    window.addEventListener('resize',this.onResizeThrottle,false)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResizeThrottle,false)
  }
  onResize = () => {
    let width = document.documentElement.clientWidth,
        height = document.documentElement.clientHeight;
    this.setState({
      width,
      height
    })
  }
  render() {
    const {width, height} = this.state;
    return (
      <div>{width} X {height}</div>
    )
  }
}
```
  但是上面的函数节流 对监听当前窗口尺寸有点问题,如果立马触发 resize 事件马上就停止了(<500ms), 此时页面上显示的 第一次触发 resize 事件时
  记录到的文档尺寸大小。而不是resize停止时的文档大小。

<ClientOnly>
  <React-Throttle-Immediate/>
</ClientOnly>

  对上面的 throttle_immediate() 另一种实现方式, 延后指定的时间再执行,首次不执行
```js
function throttle_delay(fn,delay = 300) {
  let timer = null;
  return function () {
    let _this = this, args = arguments;
    if(timer) return;
    timer = setTimeout(function() {
      fn.apply(_this,args)
      timer = null;
      clearTimeout(timer)
    },delay)
  }
}
```
  下面也是一个例子, 试着调节窗口大小
  
<ClientOnly>
  <React-Throttle-Delay/>
</ClientOnly>
