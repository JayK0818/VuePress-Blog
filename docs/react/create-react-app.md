# create-react-app

## 配置别名

  为了简化文件引入路径配置react别名,在vue脚手架中已经配置好了webpack,通过 @ 引入src目录下的文件,或者用webpack自行搭建项目时可以
  在 resolve选项设置 alias 配置别名:
```js
// webpack.config.js
module.exports = {
  resolve:{
    alias: {
      '@': path.resolve(__dirname,'src')
    }
  }
}
```
  在ts环境下以上配置会报警告, 在tsconfig.json文件中添加如下配置
```js
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

[webpack-alias](https://webpack.docschina.org/configuration/resolve/#resolvealias)

  在react 中设置别名的方式需引入第三方库

  第一步,先下载需要的包
```js
npm install react-app-rewired --save-dev
npm install customize-cra --save-dev
```
  第二步修改package.json文件 
```js
// package.json
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test",
}
```
  第三步 在项目根目录下创建 config.overrides.js文件
```js
// config.overrides.js
const path = require("path");
const {override,addWebpackAlias} = require("customize-cra");

// 第一种方式
module.exports = override(
  config => {
    config.resolve.alias = {
      "@":path.resolve(__dirname, 'src')
    }
    return config
  }
)

// 第二种方式
module.exports = override(
  addWebpackAlias({
    "@":path.resolve(__dirname, "src")
  })
)
```
## 开发环境代理
### proxy

  当前端服务与后端api接口请求出现跨域时设置代理.在项目根目录的package.json文件里 添加 proxy 字段, 地址为后台数据接口地址
```js
// app.js 使用koa搭建一个简单的数据接口
const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const player = [
  'kyrie', 'durant', 'james', 'kobe'
]
router.get('/api/player', async ctx => {
  ctx.body = {
    player
  }
})
app.use(router.routes()).use(router.allowedMethods())
app.listen(5000)
```
::: tip
在设置代理前,请求跨域报错:
Access to XMLHttpRequest at 'http://192.168.31.206:5000/api/player' from origin 'http://192.168.31.206:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
:::

```js
// package.json 配置代理后再请求
{
  // ...
  "proxy":"http://192.168.31.206:5000" // 在本地测试时,后端数据部署在5000端口
  // ...
}
```
```jsx
import {useEffect} from 'react'
import axios from 'axios'
function App() {
  useEffect(() => {
    axios({
      url:'/api/player',
      method:'get'
    }).then(list => {
      console.log('list:',list)
      /*{
        config:{},
        data:{
          player:['kyrie', 'durant', 'james', 'kobe']
        },
        headers:{},
        request:{},
        status:200,
        statusText:'OK'
      }*/ 
    })
  },[])
  return (
    <div className="App"></div>
  );
}
```

### http-proxy-middleware

```js
// Install
$ npm install http-proxy-middleware --save
$ # or
$ yarn add http-proxy-middleware
```
```js
// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  app.use('/api', 
    createProxyMiddleware({
      target:'http://192.168.31.206:5000',
      changeOrigin:true
    })
  )
}

// shorthand syntax
module.exports = function(app) {
  app.use(
    createProxyMiddleware('http://192.168.31.206:5000/api')
  )
}
```
  重新启动项目就可以跨域请求数据了。
::: tip
This feature is available with react-scripts@2.0.0 and higher
:::

 npm文档 [http-proxy-middleware](https://www.npmjs.com/package/http-proxy-middleware)
 
 ```js
// 其他配置
const options = {
  target:'http://www.example.com',
  changeOrigin:true,  // needed for virtual hosted sites
  ws:true,  // proxy websockets
  pathRewrite:{
    '^api/old-path': '/api/new-path' // rewrite path
  }
}
 ```
