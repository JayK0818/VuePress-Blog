# react-router-dom

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
  Whenever the location changes, **Routes** looks through all its children **Route** elements to find the best match and renders that branch of the UI

## Link

  在react中 使用 Link 组件进行页面跳转。传递一个 to props 用来指定路径, Link 组件渲染的是一个a标签, href属性为跳转路径。
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

## NavLink

  给匹配路由的导航文本一些特殊样式.
  activeClassName and activeStyle have been removed from NavLinkProps, Instead, you can pass a function to either style or className
  that will allow you to customize the inline styling or the class string based on the component's active state.
```jsx
function App() {
  return (
    <nav>
      {
        players.map(player => (<NavLink to={`player/${player.id}`} key={player.id} 
          style={({isActive}) => {
            return {
              color: isActive ? 'red' : ''
            }
          }}
          className={({isActive}) => isActive ? 'active' : ''}
        >{player.firstName}</NavLink>))
      }
      {
       players.map(player => (
        <NavLink to={`player/${player.id}`} key={player.id}>
          {({isActive}) => (<span className={isActive ? 'active' : ''}>{player.firstName}</span>)}
        </NavLink>))
      }
    </nav>
  )
}
// 动态设置 className 或者 style 样式, 返回一个函数
// 或者动态设置 NavLink 子元素的样式或类名
```

## Outlet

  有时会有一些重复渲染的布局, 例如顶部导航栏 或者 侧边导航栏, 在不同的页面都需要使用, 这时可以使用嵌套路由。
  在重复使用的父级路由下渲染一个 Outlet 组件。如果当前路径和父组件的path匹配,那么将会渲染一个child index route(如果有的话)
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

## Index Route

1. Index routes render in the parent routes outlet at the parent route's path.
2. Index routes match when a parent route matches but none of the other children match.
3. Index routes are the default child route for a parent route.
4. Index routes render when the user hasn't clicked one of the items in a navigation list yet.
```jsx
function App() {
  return (
    <Routes>
      <Route element={<PlayerList/>} path={'/player'}>
      // 当路径为 /player是, 不会匹配到动态路由, 此时会显示 index route
        <Route index element={<div>没有球员的时候显示</div>}/>
        <Route element={<Player/>} path={'/player/:id'}/>
      </Route>
    </Routes>
  )
}
```

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
    <div>
      Player Page
      { findPlayer?<span>{findPlayer.firstName+''+findPlayer.lastName}</span> : null}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      {
        players.map(player => (
          <Link key={player.id} to={`player/${player.id}`}>{player.firstName}</Link>
        ))
      }
      <Routes>
        <Route element={<Player/>} path={'/player/:id'}/>
      </Routes>
    </div>
  )
}
// 此时 player/1 和 player/2 都会渲染 player 组件
```

## Hooks

1. useNavigate 返回一个函数可以用来编程式导航

```jsx
import { useLocation, useNavigate } from 'react-router-dom'
function App() {
  const location = useLocation()
  console.log('location', location)
  /*
  {
    hash: ""
    key: "kg6706jo"
    pathname: "/player/2"
    search: ""
    state: null
  }
  */
  const navigate = useNavigate()
  const handleClick = () => {
    // 三种用法
    navigate('/player/1',{
      replace: true
    })
    navigate(-1)
    navigate('/player/2')
  }
  return (
    <div>Hooks</div>
  )
}
```
2. useOutletContext
```jsx
import { useOutletContext } from "react-router-dom";

function Parent() {
  const [count, setCount] = React.useState(0);
  return <Outlet context={[count, setCount]} />;
}


function Child() {
  const [count, setCount] = useOutletContext();
  const increment = () => setCount((c) => c + 1);
  return <button onClick={increment}>{count}</button>;
}
```
3. useParams 返回动态路由的一个键值对对象,键值为动态路由参数
4. useResolvedPath 返回一个对象, pathname为该hook的参数.
6. useSearchParams 查询参数
```jsx
function App() {
  const [ searchParams, serSearchParams] = useSearchParams()
  console.log(searchParams.getAll('page'))  // ['2']
  console.log(searchParams.get('page')) // 2
  console.log(searchParams.toString())  // page=2&size=30
  const handleClick = () => {
    serSearchParams({
      page:2,
      size: 30
    })
  }
  return (
    <Fragment>
      <button onClick={handleClick}>click</button>
    </Fragment>
  )
}
```
## 一个验证登录的例子

```jsx
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { useState, createContext, useContext } from 'react'

const AuthContext = createContext(null)

function AuthProvider ({children}) {
  const user = window.localStorage.getItem('user')
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}
function useAuth() {
  return useContext(AuthContext)
}

function RequireAuth({children}) {
  const auth = useAuth()
  if(!auth) return <Navigate to='/login'/>
  return children
}

function User(){
  return (<div>Hello, World</div>)
}


function Login() {
  const [user, setUser ] = useState('')
  const navigate = useNavigate()
  const onContentChanged = (event) => {
    const v = event.target.value
    setUser(v)
  }
  const handleLogin = () => {
    window.localStorage.setItem('user',user)
    navigate('/user')
  }
  return (
    <div>
      <input type='text' placeholder='username' value={user} onChange={onContentChanged}/>
      <button onClick={handleLogin}>login</button>
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Login/>} path='/login'/>
        <Route path='/user' element={<RequireAuth><User/></RequireAuth>}/>
      </Routes>
    </AuthProvider>
  )
}
```

## 动态路由

  React.lazy 函数可以动态引入一个组件。然后再Suspense组件中渲染。基于路由分割代码是一个不错的选择。
```jsx
const User = React.lazy(() => import('./components/User'))
const Login = React.lazy(() => import('./components/Login'))

function App() {
  return (
    <Routes>
      <Route path='/user' element={<Suspense fallback={<div>Loading...</div>}><User/></Suspense>}></Route>
      <Route path='/login' element={<Suspense fallback={<div>Loading...</div>}><Login/></Suspense>}></Route>
    </Routes>
  )
}
```