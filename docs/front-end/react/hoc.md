# 高阶组件

  高阶组件是一种可以重用组件逻辑的高级技巧。高阶组件是一个函数 它接受一个组件作为参数并返回一个新组件。
```js
const EnchancedComponent = highOrderComponent(WrapperComponent);
```
**案例一**
```jsx
// 一个跟踪鼠标位置的 使用高阶组件实现的例子
const mouseMoveFactory = (Component) => {
  return class MouseMove extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        x: 0,
        y: 0
      }
    }
    componentDidMount () {
      document.addEventListener('mousemove', this.mousemove, false)
    }
    mousemove = (event) => {
      this.setState({
        x: event.clientX,
        y: event.clientY
      })
    }
    componentWillUnMount () {
      document.removeEventListener('mousemove', this.mousemove, false)
    }
    render() {
      const data = {
        ...this.state,
        ...this.props
      }
      return (
        <Component {...data}/>
      )
    }
  }
}

const MousePosition = mouseMoveFactory((props) => {
  // 子组件接受 处理过后的数据作为props
  return (
    <>
      <div>{props.name}</div>
      <div>x: <i>{props.x}</i></div>
      <div>y: <i>{props.y}</i></div>  
    </>
  )
})
```

**案例二**

  在页面中经常有这样的功能, 请求数据时加载Loading, 有数据时展示数据, 无数据时展示一个空组件 或者 报错提示信息. 这样重复的功能就可以使用高阶组件进行封装

```jsx
const PromisedWrapperComponent = (promiseProps, Component) => {
  return class PromiseComponent extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        loading: true,
        error: null,
        value: null
      }
    }
    componentDidMount() {
      promiseProps()
        .then(res => {
          this.setState({
            loading: false,
            value: res
          })
        })
        .catch((err) => {
          this.setState({
            loading: false,
            error: err
          })
        })
    }
    render () {
      const { error, value, loading} = this.state
      if (loading) {
        return <div style={{color: '#1890ff'}}>Loading...</div>
      }
      if (error) return (<div style={{color: 'red'}}>Something went wrong {error}</div>)
      return ( <Component data={value}/> )
    }
  }
}

const fetch_data = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    const number = Math.random()
    if (number > 0.5) {
      resolve(['王力宏', '周杰伦', '陶喆'])
    } else {
      reject('暂无数据！')
    }
  }, 2000)
})

const PlayerListComonent = PromisedWrapperComponent(fetch_data, class Player extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { data } = this.props
    return (
      <ul>
        { data.map(singer => (<li key={singer}>{singer}</li>))}
      </ul>
    )
  }
})
```
:::tip
高阶组件 不会获取 被包裹组件的 静态方法, 如果需要使用被包裹组件的静态方法, 需要明确知道复制哪个方法.
:::

# render props

  The term 'render prop' refers to a technique for shaing code between React components using a props whose value is a function.

  render props同样是React中一项重用组件逻辑的功能, 组件调用传递过来props中的 render函数, 并将数据作为render的参数传递。 重用逻辑的组件 获取render函数的参数进行渲染。

```jsx
class MousePosition extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      x: 0,
      y: 0
    }
  }
  componentDidMount() {
    document.addEventListener('mousemove', this.mousemove, false)
  }
  mousemove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }
  componentWillUnmount() {
    document.removeEventListener('mousemove', this.mousemove, false)
  }
  render() {
    return (
      <>
      {/* 将state作为参数传递给render函数 */}
        { this.props.render(this.state)}
      </>
    )
  }
}
const Position = () => {
  return <MousePosition render={({x, y}) => (
    <div>
      x: {x}
      y: {y}
    </div>
  )}/>
}
```
  It's important to remember that just because the pattern is called 'render props' you do not have to use a prop named render
  to use this pattern.

```jsx
class MousePosition extends React.Component {
  // ...
  render() {
    return (
      <>{this.props.children(this.state)}</>
    )
  }
}

const Position = () => {
  return <MousePosition>{({x, y}) => (
    <div>
      x: {x}
      y: {y}
    </div>
  )}</MousePosition>
}
```