# React-Router-DOM

## Usage

```js
// install
npm install react-router-dom --save

// index.js 使用BrowserRouter 包裹App根组件
import { BrowserRouter } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

// Usage
import { Routes, Route } from 'react-router-dom'
function User() {
  return <div>User</div>
}
function Login() {
  return <div>Login</div>
}
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<User/>} path='/user'/>
        <Route element={<Login/>} path='/login'/>
      </Routes>
    </div>
  )
}
// 现在可以通过 /user 和 /login 路径显示 对应组件
```
## Link

  在react中 使用 Link 组件进行页面跳转。传递一个 to props 用来指定路径
```jsx
function App() {
  return (
    <div>
      <Link children={'user'} to='/user'/>
      <Link children={'login'} to='/login'/>
    </div>
  )
}
```

## Outlet

  有时会有一些重复渲染的布局, 例如顶部导航栏 或者 侧边导航栏, 在不同的页面都需要使用, 这时可以使用嵌套路由。
  在重复使用的父级路由下渲染一个 Outlet 组件。
```js
function App() {
  return (
    // 此处渲染子组件, User 和 Login组件
    <div><Outlet/></div>
  )
}

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="user" element={<User />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
```
  嵌套组件的路径 会将父组件的路径和子组件的路径合并, 上述路由分别是 '/user', '/login', 如果App组件路由是 /home的话, 那么子路由分别对应
  /home/user 和 /home/login

## URL params

```jsx
const players = [
  {
    firstName: 'kyrie',
    lastName: 'irving',
    id: 1
  },
  {
    firstName: 'lebron',
    lastName: 'james',
    id: 2
  }
]
function Player() {
  // 此构造函数用来接受动态路由参数, 键名为 路由组件上定义的 参数
  const params = useParams() // {id: 1}
  const findPlayer = players.find(p => p.id === params.id*1) // 此处id 是一个字符串
  return (
    <div>Player Page {findPlayer ? <span>{findPlayer.firstName + '' + findPlayer.lastName}</span> : null}</div>
  )
}

function App() {
  return (
    <div className="App">
      {
        players.map(player => (<Link key={player.id} to={`player/${player.id}`}>{player.firstName}</Link>))
      }
      <Routes>
        <Route element={<Player/>} path={'/player/:id'}/>
      </Routes>
    </div>
  )
}
// 此时 player/1 和 player/2 都会渲染 player 组件
```