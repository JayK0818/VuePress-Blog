# Context

  Context提供了一个无需为每层组件手动添加props,就能在组件树间进行数据传递的方法,以下案例 来自react官网的整理.
  为了方便，只嵌套了一层子组件的方式实现。

:::tip
如果只是想避免层层传递一些属性,组件组合有时候是比context更好的解决方案。
:::

```jsx
import React,{useContext} from 'react'
const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  }
}
// 创建一个context对象并提供一个默认值
const ThemeContext = React.createContext(themes.light)  
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      theme: themes.light
    }
  }
  handleToggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.light ?
        themes.dark : themes.light
    }))
  }
  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemeButton1/>
          <ThemeButton2/>
          <ThemeButton3/>
        </ThemeContext.Provider>
        <button onClick={this.handleToggleTheme}>toggle theme</button>
      </button>
    )
  }
}

// class组件使用
class ThemeButton1 extends React.Component {
  constructor(props){
    super(props)
  }
  static contextType = ThemeContext
  render(){
    return (
      <button 
        style={{
          background:this.context.background,
          color:this.context.foreground
        }}>hello world</button>
    )
  }
}
// 也可以使用下面的方式
ThemeButton1.contextType = ThemeContext


// 函数组件使用consumer
function ThemeButton2 () {
  return (
    <ThemeContext.Consumer>
      {theme => 
        (<button 
          style={{background:theme.background,color:theme.foreground}}
        >hello world</button>)}
    </ThemeContext.Consumer>
  )
}

// 函数组件使用 useContext
function ThemeButton3(){
  const theme = useContext(ThemeContext)
  return (
    <button 
      style={{background:theme.background,color:theme.foreground}}
    >hello world</button>
  )
}

/*当Provider的value值发生变化时,它内部所有消费组件都会重新渲染。从Provider到内部consumer组件的
传播不受制于shouldComponentUpdate函数*/
class ThemeButton4 extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  shouldComponent(nextProps,nextState) {
    return false
  }
  static contextType = ThemeContext
  render(){
    return (
      <button 
        style={{background:this.context.background,color:this.context.foreground}}
      >hello world</button>
    )
  }
}
// 在函数里面,Provider数据更新同样不受制于memo
const ThemeButton5 = memo(function(){
  const theme = useContext(ThemeContext)
  return (
    <button 
      style={{background:theme.background,color:theme.foreground}}
    >hello world</button>
  )
})
```
:::danger
当provider的父组件重新渲染时,可能会在consumers组件中触发意外的渲染。比如当传递给Provider的value值为一个对象时。
为避免这种情况,可以将value状态值提升到父节点state里。
:::
