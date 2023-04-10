# React基础

## JSX

  JSX是React.createElement(component, props, ...children)函数的语法糖

```jsx
// 用户定义的组件必须以大写字母开头。以小写字母开头的元素表示一个HTML标签。
function Player({firstName, lastName}) {
  return (
    <div>{firstName} {lastName}</div>
  )
}
// 自动展开数组
const players = ['kyrie', 'lebron', 'durant']
function PlayerList() {
  return (
    <div>{players}</div>
  )
}

const name = 'kyrie'
const element = <h1>'Hello', {name}</h1>
const root = React.createRoot(document.getElementById('#app'))
root.render(
  element
)
```
```jsx
// 根据动态prop来渲染不同组件的情况
const components = {
  photo: PhotoStory,
  video: VideoStory
}
function Store(props) {
  const RenderComponent = components[props.type]
  return (
    <RenderComponent/>
  )
}
```

## 事件

```jsx
function Counter() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count+1)
  }
  return (
    <button onClick={handleClick}>{count}</button>
  )
}

const Toggle = () => {
  const [isToggle, setIsToggle] = useState(false)
  const handleToggle = () => {
    setIsToggle(isToggle => !isToggle)
  }
  return (
    <button onClick={handleToggle}>{isToggle ? 'On' : 'Off'}</button>
  )
}
```
## 遍历
```jsx
// for循环 和向函数传递参数
function Players() {
  const players = [
    {
      firstName: 'kyrie',
      lastName: 'irving'
    },
    {
      firstName: 'lebron',
      lastName: 'james'
    },
    {
      firstName: 'kevin',
      lastName: 'durant'
    }
  ]
  const handleClick = (player) => {
    console.log(player)
  }
  return (
    <ul>
      {
        players.length > 0 && players.map(p => (
          <li key={p.firstName} onClick={handleClick.bind(null, p)}>{p.firstName} - {p.lastName}</li>
        ))
      }
    </ul>
  )
}
// key 只是在兄弟节点之间是独一无二的,不需要是全局唯一的
function Blog(props) {
  const sidebar = (
    <ul>
      {
        props.posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))
      }
    </ul>
  )
  const content = (
    <ul>
      {
        props.posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))
      }
    </ul>
  )
  return (
    <div>
      {sidebar}
      <hr/>
      {content}
    </div>
  )
}
const posts = [
  {
    id: 1,
    title: 'Hello World',
    content: 'Welcome to learning React'
  },
  {
    id: 2,
    title: 'Installation',
    content: 'You can install React from npm'
  }
]
```
## 条件渲染

```jsx
function ConditionComponent(props) {
  const isLogin = props.isLogin
  if(isLogin) return (
    <div>Hello, Welcome back!</div>
  )
  return <div>Login in</div>
}
// 阻止组件渲染(返回一个null)
function WarningBanner(props) {
  if(!props.warn) return null
  return (
    <div>Warning!</div>
  )
}

// 三元运算
function ExpressComponent () {
  const [flag, setFlag] = useState(false)
  const handleClick = () => {
    setFlag(flag => !flag)
  }
  return (
    <button onClick={handleClick}>{flag ? 'hello' : 'world'}</button>
  )
}

// && 运算符
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}
```
## 样式

```jsx
//  行内样式
const box_style = {
  width: '100px',
  height: '100px',
  textAlign: 'center',
  lineHeight: '100px',
  backgroundColor: 'skyblue'
}
function BoxComponent() {
  return (
    <div style={box_style}></div>
  )
}

// 组件内作用域的样式
import styles from './button.module.scss'
function ButtonComponent () {
  return (
    <button className={styles.button}></button>
  )
}
```
## Props

  无论是函数组件还是class组件, 都拥有defaultProps属性. 且无论是函数组件还是class组件, 都不能修改自身都props。
  所有React组件都必须像纯函数一样保护它们的props不被更改。
```jsx
// Props 以及默认值
// 函数组件
function PropsComponent(props) {
  return (
    <div>我是传递了值: {props.username}</div>
  )
}
function DefaultPropsComponent(props) {
  return (
    <div>我是没有传递值: {props.username}</div>
  )
}
DefaultPropsComponent.defaultProps = {
  username: 'irving'
}


// class组件
class ClassPropsComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <div>{this.props.username}</div>
    )
  }
}
ClassPropsComponent.defaultProps = {
  username: 'hello, 我是默认值'
}
```

## State

1. 不要直接修改state
2. state的更新可能是异步的, React可能会把多个setState()调用合并成一个调用
3. 数据是向下流动的

```jsx
function FunctionClock () {
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  const timer = useRef(null)
  useEffect(() => {
    timer.current = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    },1000)
    return () => {
      clearInterval(timer.current)
    }
  }, [])
  return (
    <div>{time}</div>
  )
}

class ClassClock extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      time: new Date().toLocaleTimeString()
    }
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(state => ({
        time: new Date().toLocaleTimeString()
      }))
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    return (
      <div>{this.state.time}</div>
    )
  }
}
```

## 生命周期函数

```jsx
class LifeCycleComponent extends React.Component {
  constructor(props) {
    super(props)
    console.log('constructor')
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate',nextProps, nextState)
    return true
  }
  componentDidUpdate(prevProps, prevState, snap) {
    console.log('componentDidUpdate',prevProps, prevState, snap)
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate', prevProps, prevState)
    return 'hello' // componentDidUpdate 的第三个参数
  }
  handleClick = () => {
    this.setState(state => ({
      count: state.count + 1
    }))
  }
  render() {
    console.log('render')
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.count}</button>
      </div>
    )
  }
}
/*
---- 初始渲染 ---
constructor -> render -> componentDidMount
----- 更新 -----
shouldComponentUpdate -> render -> getSnapshotBeforeUpdate -> componentDidUpdate
*/
```

  shouldComponentUpdate()返回false不会子组件在state更新时重新渲染。 在函数组件中可以使用memo包裹组件。

```jsx
// 当app组件更新page时, Counter1和Counter2 Counter3是不用更新的
function App(){
  const [count, setCount] = useState(0)
  const [page, setPage] = useState(0)
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
    console.log('counter-1 render')
    return (
      <div>{this.props.count}</div>
    )
  }
}
class Counter2 extends React.PureComponent{
  console.log('counter-2 render')
  render() {
    return (
      <div>{this.props.count}</div>
    )
  }
}
const Counter3 = memo(function({count}) {
  console.log('counter-3 render')
  return (
    <div>{count}</div>
  )
})
```

## 表单
```jsx
// ---- 受控组件 ------
class FormControlledClassComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      player: 'kyrie',
      content: ''
    }
  }
  onUserChanged = (event) => {
    this.setState(state => ({
      username: event.target.value.trim()
    }))
  }
  handleSubmit = () => {
    console.log(this.state.username, this.state.player, this.state.content)
  }
  onPlayerChanged = (event) => {
    this.setState(state => ({
      player: event.target.value
    }))
  }
  onContentChanged = (event) => {
    this.setState(state => ({
      content: event.target.value.trim()
    }))
  }
  render() {
    return (
      <div>
        <input type='text' value={this.state.username} onChange={this.onUserChanged}/>
        <select value={this.state.player} onChange={this.onPlayerChanged}>
          <option value='kyrie'>kyrie</option>
          <option value='durant'>durant</option>
          <option value='lebron'>lebron</option>
        </select>
        <textarea 
          value={this.state.content} onChange={this.onContentChanged} placeholder='content...'
        ></textarea>
        <button onClick={this.handleSubmit}>submit</button>
      </div>
    )
  }
}
//  非受控组件 defaultValue 作为初始值
// 在React中, input[type='file'] 始终是一个非受控组件
class UnControlledForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'hello'
    }
    this.inputRef = window.React.createRef()
  }
  handleSubmit = () => {
    const value = this.inputRef.current.value.trim()
    console.log('value', value)
  }
  render() {
    return (
      <div>
        <input defaultValue={this.state.value} ref={this.inputRef}/>
        <input type='submit' onClick={this.handleSubmit}/>
      </div>
    )
  }
}
```
## context

  context提供了一个无需为每层组件手动添加props, 就能在组件树之间进行数据传递的方法。

1. React.createContext(defaultValue)  创建一个context对象。只有当前组件所处的组件树中没有匹配到Provider
时其defaultValue参数才会生效。
:::tip
将undefined传递给Provider的value时, 消费组件的defaultValue不会生效
:::
2. Context.Provider 每个Context对象都会返回一个Provider React组件,它允许消费组件订阅context的变化
:::tip
当Provider的value发生变化时, 它内部的所有消费组件都会重新渲染.Provider及其内部consumer组件都不受制于
shouldComponentUpdate函数。
:::
3. Class.contextType  挂载在class上的contextType属性会被重写赋值为一个由 React.createContext()创建的context
对象。可以通过this.context来消费最近Context上的那个值。
4. Context.Consumer 可以在函数组件中完成订阅context。
```jsx
// class组件
// 这里只是演示一下context使用方式, 所以就不嵌套多层 组件
const ThemeContext = window.React.createContext('light') // light 作为默认值

class ClassContextComponent extends window.React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ThemeContext.Provider value={'dark'}>
        <ThemeButton/>
      </ThemeContext.Provider>
    )
  }
}

class ThemeButton extends window.React.Component {
  static contextType = ThemeContext
  render() {
    return (
      <button>{this.context}</button>
    )
  }
}
```
```jsx
const CounterContext = React.createContext(0)
class ContextCounter extends window.React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  handleClick = () => {
    this.setState(state => ({
      count: state.count+=1
    }))
  }
  render() {
    return (
      <CounterContext.Provider value={this.state.count}>
        <ClassCounter/>
        <FunctionCounter/>
        <button onClick={this.handleClick}>{this.state.count}</button>
      </CounterContext.Provider>
    )
  }
}
// function函数组件
function FunctionCounter() {
  return (
    <CounterContext.Consumer>
      {value => (<div>函数组件: {value}</div>)}
    </CounterContext.Consumer>
  )
}

// class组件
class ClassCounter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'hello'
    }
  }
  // shouldComponent 不受限制 (此时没有执行)
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState)
    return false
  }
  static contextType = CounterContext
  render() {
    return (
      <div>{this.state.name} - {this.context}</div>
    )
  }
}
const MemoCounter = memo(function() {
  // 此时函数组件只会渲染一次, 但是value值会更新, 而class组件即使shouldComponentUpdate返回false, render函数也会执行
  return (
    <CounterContext.Consumer>
      {value => (<div>函数组件: {value}</div>)}
    </CounterContext.Consumer>
  )
})
```
:::danger
这里可能会有一些陷阱, 当provider的父组件进行重新渲染时, 可能会在consumers组件中触发意外的渲染。
```jsx
class App extends React.Component {
  render() {
    return (
      // value属性总是会被赋值为新的对象, 可以将value提升到 state里
      <MyContext.Provider value={{something: 'something'}}>
        <Toolbar />
      </MyContext.Provider>
    );
  }
}
```
:::

  在嵌套组件中更新Context

```jsx
const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  }
}
const ThemeContext = React.createContext({
  theme: themes.light,
  toggle: () => {}
})

class App extends React.Component {
  constructor() {
    super(...arguments)
    this.toggle = () => {
      this.setState(state => ({
        theme: this.state.theme == themes.light
          ? themes.dark
          : themes.light
      }))
    }
    this.state = {
      theme: themes.light,
      toggle: this.toggle
    }
  }
  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <ThemeButtonClassComponent/>
        <ThemeButtonFunctionComponent/>
      </ThemeContext.Provider>
    )
  }
}
class ThemeButtonClassComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  static contextType = ThemeContext
  render(){
    return <button style={{
      background: this.context.theme.background,
      color: this.context.theme.foreground
    }} onClick={this.context.toggle}>toggle</button>
  }
}

function ThemeButtonFunctionComponent() {
  return (
    <ThemeContext.Consumer>
      {({theme, toggle}) => (
        <button onClick={toggle} style={{
          background: theme.background,
          color: theme.foreground
        }}>toggle</button>
      )}
    </ThemeContext.Consumer>
  )
}
```
## 组合

```jsx
function SideBar(props) {
  return (
    <div>{props.children}</div>
  )
}
function NavigationBar(props) {
  return (
    <div>{props.children}</div>
  )
}
function Dialog(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <div>{props.content}</div>  
    </div>
  )
}
function App() {
  return (
    <div className='app'>
      <SideBar>我是侧边导航栏</SideBar>
      <NavigationBar>我是顶部导航栏</NavigationBar>
      <Dialog
        title='Welcome'
        content='Thank you for visiting our spacecraft!'
      />
    </div>
  )
}
```

## 错误边界

  错误边界是一种React组件, 这种组件可以捕获并打印发生在其子组件树中任何位置的JavaScript, 并且它会渲染备用UI, 而不是渲染那些崩溃了的
  子组件树。
:::tip
错误边界无法在以下场景中产生的错误:
1. 事件处理
2. 异步代码 (setTimeout 等)
3. 服务端渲染
4. 它自身抛出的错误而非子组件
:::
  在错误边界组件中 定义了任意 static getDerivedStateFromError 或者 componentDidCatch 两个生命周期方法中的任意一个时
  它就变成了错误边界。
```jsx
// componentDidCatch
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      errorInfo: null
    }
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    })
  }
  render() {
    if(this.state.hasError) return (
      <div>Something went wrong</div>
    )
    return this.props.children
  }
}


// getDerivedStateFromError
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError
    }
  }
  static getDerivedStateFromError() {
    return {
      hasError
    }
  }
  render() {
    if(this.state.hasError) return (
      <div>Something went wrong</div>
    )
    return this.props.children
  }
}
```

## refs及refs转发
  
  refs提供了一种方式允许我们访问DOM节点或者在render方法中创建的react元素
  Refs 可以通过React.createRef()创建, 并通过ref属性附加到React元素。
1. 当ref属性用于HTML元素时, React组件中使用createRef()创建的ref接受底层DOM元素作为其current属性
2. 当ref属性用于自定义class组件时, ref对象接受组件的挂载实例作为current属性。
:::tip
1. 不能在函数组件上使用ref属性, 因为它们没有实例, 可以在函数组件内部使用ref属性,只要它们指向一个DOM元素或class组件
2. 避免在dialog组件里暴露open() 和 close() 方法, 最后传递isOpen属性
:::

  Refs转发是一个可选特性, 其允许某些组件接受ref, 并将其向下传递给子组件。
```jsx
function App () {
  const ref1 = React.createRef(null)
  const ref2 = useRef(null)
  const handleFocus = () => {
    console.log(ref1, ref2)
    // ref1 和 ref2下的current属性挂载了 input元素
  }
  return (
    <div>
      <input type="text" ref={ref1}/>
      <input type="text" ref={ref2}/>
      <button onClick={handleFocus}>click</button>
    </div>
  )
}
```
```jsx
// refs转发
// 获取input焦点
const InputComponent = React.forwardRef((props, ref) => (
  <input type='input' placeholder={props.placeholder} ref={ref}/>
))

// 获取textarea焦点
class TextareaComponent extends React.Component {
  constructor(props) {
    super(props)
    this.textareaRef = React.createRef()
    this.focus = this.focus.bind(this)
  }
  focus() {
    this.textareaRef.current.focus()
  }
  render() {
    return (
      <textarea placeholder={this.props.placeholder} ref={this.textareaRef}></textarea>
    )
  }
}

function App () {
  const [count, setCount] = useState(0)
  const inputRef = useRef(null)
  const componentRef = useRef(null)
  const handleFocus = () => {
    // 轮流获取 input 和 textarea焦点(分别通过refs转发 和 refs)
    setCount(count => {
      if(count % 2 === 0) {
        inputRef.current.focus()
      } else {
        componentRef.current.focus()
      }
      return count+1
    })
  }
  return (
    <div>
      <InputComponent ref={inputRef} placeholder='What next to do ?'/>
      <TextareaComponent ref={componentRef} placeholder='hello world'/>
      <button onClick={handleFocus}>click</button>
    </div>
  )
}
```
  回调Refs, 它能帮助你更精细地控制何时refs被设置和解除。回调refs挂载的DOM节点不是在current属性下。

```jsx
// class组件
class InputClassComponent extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      inputRef: null
    }
  }
  handleFocus = () => {
    this.state.inputRef.focus()
  }
  render() {
    return (
      <div>
        <input type='text' ref={element => this.state.inputRef = element}/>
        <button onClick={this.handleFocus}>click</button>
      </div>
    )
  }
}

// 函数组件里也可以使用回调refs, 因为有useRef()钩子函数,所以这么使用没必要, 这里只作为演示...
function InputFunctionComponent() {
  const [inputRef, setInputRef] = useState(null)
  const handleClick = () => {
    inputRef.focus()
  }
  return (
    <div>
      <input type='text' ref={element => setInputRef(element)}/>
      <button onClick={handleClick}>click</button>
    </div>
  )
}
```

## Fragments

  Fragments允许将子列表分组, 而无需向DOM添加额外节点。
```jsx
class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Hello</td>
        <td>World</td>
      </React.Fragment>
    );
  }
}
```
  key是唯一可以传递给Fragment的属性。

## Portals

  ReactDOM.createPortal(child, container) 可以将子节点渲染到存在于父组件以外的DOM节点的方法。
```jsx
// 创建一个水平垂直居中的 dialog 挂载到 body下
const wrapper_style = {
  position: 'fixed',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background:'rgba(0, 0, 0, .65)',
  zIndex: 100
}
const container_style = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  width: '400px',
  height: '400px',
  background: '#fff',
  transform: 'translate(-50%, -50%)'
}

function DialogComponent() {
  const wrapperRef = useRef(null)
  const handleClose = () => {
    document.body.removeChild(wrapperRef.current)
  }
  const element = (
    <div style={wrapper_style} ref={wrapperRef}>
      <div style={container_style}>
        <button onClick={handleClose}>close</button>
      </div>
    </div>
  )
  return window.ReactDOM.createPortal(element, document.body)
}


// 一个通用的 Modal 组件
class Modal extends window.React.Component {
  constructor(props) {
    super(props)
    this.element = document.createElement('div')
  }
  componentDidMount() {
    document.body.appendChild(this.element)
  }
  componentWillUnmount() {
    document.body.removeChild(this.element)
  }
  render() {
    return window.ReactDOM.createPortal(this.props.children, this.element)
  }
}
```
  虽然可以通过createPortal修改DOM节点渲染的位置, 由于portal仍然存在于React树, 从portal内部触发的事件也会一直冒泡至
  包含React树的祖先。
```jsx
function ChildComponent() {
  return (
    // 点击button, 会发现文档标题栏也会修改
    <button>click me</button>
  )
}
function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count => count+1)
  }
  useEffect(() => {
    document.title = `you clicked ${count} times`
  }, [count])
  return (
    <div onClick={handleClick}>
      <Modal>
        <ChildComponent/>
      </Modal>
    </div>
  )
}
```
