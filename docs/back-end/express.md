# Express

  基于Node.js 平台 快速 开放 极简的Web开发框架。 本章记录按照express学习过程!

```js
// 下载
npm install express


// create an express application
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(3000)
```
[Express官网](https://www.expressjs.com.cn/5x/api.html#express)


## express.json

  express.json() is a build-in middleware function in Express. It parse incoming requests with JSON payloads and is based on body-parser.
  A new body object containing the parsed data is populated on the request object after the middleware (req.body) or an empty object({})
  if there was no body to parse.

```js
// 前端传递参数
const xhr = new XMLHttpRequest()
xhr.open('POST', '/api/login', true)

xhr.setRequestHeader('Content-Type', 'application/json')
xhr.send(JSON.stringify({
  username: 'jack',
  password: 123456
}))


// node-sever
const app = require('express')()
app.use(express.json())

/*
express.json({
  inflate: true  Enables of disables handling defalted(compressed) bodies
  limit: '100kb' Controls the maximum request body size.
  reviver: null  passed directly to JSON.parse() as the second argument
  strict: true   Enables or disable only accepting arrays and objects.
})
*/

app.post('/api/login', (req, res) => {
  console.log(req.body) // { username: jack, password: 123456 }
  res.send('success')
})
```

## express.urlencoded

  Express内置的一个中间件用来解析 body 参数。解析的数据将挂载到 req.body 对象里。如果没有数据 将返回一个空对象。
```js
// 前端传递的数据形式
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
xhr.send('username=jack&password=123456')

// node-server
const app = require('express')()
app.use(express.urlencoded({
  extended: true
/* This option allows to choose between parsing the URL_encoded data with the querystring (false)
library or the qs library (true)*/
}))

app.post('/api/login', (req, res) => {
  console.log(req.body) // { username: jack, password: 123456 }
  res.send('success')
})
```

## express.static

  This is a build-in middleware function in Express, It serves static files and is based on **server-static**

```js
// 基本使用
const app = require('express')()

app.use(
  express.static(path.resolve(__dirname, 'public'))
)

app.listen(3000)

// 部分参数解析
express.static(root, {
  dotfiles: 'ignore',  // 怎么处理 . 开头的文件夹 (allow / deny / ignore)
  extensions: false,   // 设置文件后缀
  index: 'index.html',  // 指定文件首页
  immutable: false,
  /* Enable or disable the immutable directive in the Cache-Control response header.
  If enabled, the maxAge option should also be specified to enable caching.*/
  maxAge: 0, // Set the max-age property of the Cache-Control header in milliseconds
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
})
```

## express.Router

  The top-level **express** object has a Router() method that creates a new router object.

```js
const router = express.Router({
  caseSensitive: false, // 路由是否大小写敏感, '/Foo' 和 '/foo'
  mergeParams: false,
  strict: false,  // '/foo' 和 '/foo/' 是否一致
})


// 另一种方式
const app = require('express')()
const router = app.router;
router.get('/api/login', (req, res) => {
  res.send('hello world')
})
app.listen(3000)

// 不同的路由对象
const player_router = express.Router()
const singer_router = express.Router()

player_router.get('/player', (req, res) => {
  res.send([
    {
      firstName: 'kyriv',
      lastName: 'irving'
    },
    {
      firstName: 'lebron',
      lastName: 'james'
    }
  ])
})

singer_router.get('/singer', (req, res) => {
  res.send(['周杰伦', '王力宏'])
})

app.use('/api', player_router)
app.use('/api', singer_router)
```
  Once you have created a router object, you can add middleware and HTTP method routes to it just like an application.

```js
player_router.use((req, res, next) => {
  next()
})
```
## router.param

  可以用来验证动态路由的参数。
```js
user_router.param('user_id', (req, res, next, user_id) => {
  if (typeof user_id === 'string') {
    next(new Error('user_id must be int'))
  } else {
    next()
  }

  if (typeof user_id === 'string') {
    req.params.user_id = Number(user_id)
    next()
  } else {
    next()
  }
})

user_router.get('/user/:user_id',  (req, res) => {
  console.log(req.params.user_id, typeof req.params.user_id) // number
  res.send('hello')
})
```
  A param callback will be called only once in a request-response cycle.
```js
router.param('id', function (req, res, next, id) {
  console.log('CALLED ONLY ONCE')
  next()
})

router.get('/user/:id', function (req, res, next) {
  console.log('although this matches')
  next()
})

router.get('/user/:id', function (req, res) {
  console.log('and this matches too')
  res.end()
})

/*
CALLED ONLY ONCE
although this matches
and this matches too
*/
```

## router.use

  Uses the specified middleware function or functions, This is method is similar to app.use().

```js
router.use((req, res, next) => {
  console.log('logger1 - start')
  next()
  console.log('logger1 - end')
})

router.use((req, res, next) => {
  console.log('logger2 - start')
  next()
  console.log('logger2 - end')
})

app.use('/user', router)

/**
 *  logger1 - start
    logger2 - start
    logger2 - end
    logger1 - end
 */
```
  The order in which you define middleware with router.use() is very importan. They are invoked sequentially!

## request

  The *req* object represents the HTTP request and has properties for the request query string, parameters, body, Http headers, and so on.
```js
req.baseUrl
req.cookies
req.hostname
req.ip
req.method
req.path
req.protocol
req.query
req.params
```

## response

  The *res* object represents the HTTP response that an Express app sends when it gets an HTTP request
```js
// Appends the specified value to the HTTP response header field.
res.append('Set-Cookie', ['language=javascript'])

res.cookie(name, value, {
  domain: '', // Domain name for the cookie
  encode: 'encodeURIComponent',
  expires: 0, // 过期时间
  httpOnly: true, // 控制客户端js可否读取cookie
  maxAge: 10000,
  // Convenient option for setting the expiry time relative to the current time in milliseconds
  path: '/',
  secure: false, // marks the cookie to be used with Https only
  signed: true, // indicates if the cookie should be signed
})

// use to quickly end the response without any data
res.end() / res.status(200).end()

// sends a json response.
res.json()

res.redirect()

// renders a view and sends the rendered HTML string to the client.
res.render()

res.send(Buffer.from('hello world'))
res.send({ user: 'jack'})
res.send('<p>Hello</p>')

// set the http status for the response.
res.status()

// set the response's http header field to value
res.set()
```