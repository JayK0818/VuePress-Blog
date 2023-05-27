# Cors

  跨域资源共享 是一种基于 HTTP 头的机制, 该机制通过允许服务器标示除了它自己以外的其他源(域,协议或端口), 使得浏览器允许这些源访问加载自己的资源。
  出于安全性, 浏览器限制脚本内发起的跨源HTTP请求。
  跨源资源共享标准新增了一组**HTTP标头**字段,允许服务器声明哪些源站通过浏览器有权访问哪些资源。

  **CORS** 请求只能用于 HTTP 或 HTTPS URL方案。

## Access-Control-Allow-Origin

  允许跨站访问的请求源。但是当响应的附带身份凭证的请求时, 服务端必须明确 **Access-Control-Allow-Origin** 的值 不能使用通配符 * 。

  如果响应包含多个 **Access-Control-Allow-Origin** 标头, 也会发生此错误。确保响应中只有一个这样的标头,并且它只能包含一个单独的源。
:::danger
Response to preflight request doesn't pass access control check: The 'Access-Control-Allow-Origin' header contains multiple values 'http://192.168.0.141:5600,http://192.168.0.141:5500', but only one is allowed.
:::

```js
// 简单的 server
const http = require('http')
const players = ['kyrie', 'durant', 'lebron']

const app = http.createServer(function(req,res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  })
  res.end(JSON.stringify(players))
})

app.listen(3000)
```

```js
const xhr = new XMLHttpRequest()
xhr.open('GET', 'http://192.168.0.141:3000', true)
xhr.send(null)
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.response)
  }
}
```
:::danger
Access to XMLHttpRequest at 'http://192.168.0.141:3000/' from origin 'http://192.168.0.141:5500' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource
:::

```js
res.writeHead(200, {
  // ...
  'Access-Control-Allow-Origin': '*'
})

// 以上server 添加 允许所有源访问的表头  则可以成功请求数据。
```

## Access-Control-Allow-Methods

  该标头字段指定了访问资源时允许使用的请求方法, 用于预检请求的响应。指明了实际请求所允许使用的HTTP方法。

## Access-Control-Allow-Headers

  该表头字段用于**预检请求**的响应。指明了实际请求中允许携带的标头字段。这个标头是服务器端对浏览器端 **Access-Control-Request-Headers** 标头的响应。

## 预检请求

  需预检的请求 要求必须首先使用 **OPTIONS** 方法发起一个预检请求到服务器, 以获知服务器是否允许该实际请求。预检请求的使用, 可以避免跨源请求
  对服务器的用户数据产生未预期的影响。

```js
const xhr = new XMLHttpRequest()
xhr.setRequestHeader('X-PINGOTHER', 'pingpong')
// ...
```

  在预检请求中,请求字段 **Access-Control-Request-xxx** 标头, 它们仅用于 **OPTIONS** 请求。实际的请求不会携带。
```js
{
  'Access-Control-Request-Method': 'POST',      // 请求将使用POST方法
  'Access-Control-Request-Headers': 'X-PINGOTHER Content-Type'  // 告知服务器 实际请求会携带两个标头字段。
}
```

```js
// server
res.writeHead(200, {
  //...
  'Access-Control-Allow-Origin': 'http://192.168.0.141:5500', // 允许访问的源
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS', // 允许访问的请求方法
  'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type',  // 允许请求中携带字段
  'Access-Control-Max-Age': 86400 // 预检请求可供缓存的时间长短, 单位为秒。
})
```

## 附带身份凭证的请求

  一般而言, 对于跨源 **XMLHttpRequest** 或 **Fetch** 请求, 浏览器不会发送身份凭证信息。如果需要发送凭证信息, 需要设置 **XMLHttpRequest** 对象的某个特殊标志位。
  或在 构造 **Request**对象时设置。

```js
// request
xhr.open('POST', 'http://192.168.0.141:3000', true)
xhr.withCredentials = true
xhr.send(null)
```

  如果请求的时候设置了 **withCredentials** 而服务端未设置 相应的 响应标头, 请求时会报错。
:::danger
Access to XMLHttpRequest at 'http://192.168.0.141:3000/' from origin 'http://192.168.0.141:5500' has been blocked by CORS policy: The value of the 'Access-Control-Allow-Credentials' header in the response is '' which must be 'true' when the request's credentials mode is 'include'. The credentials mode of requests initiated by the XMLHttpRequest is controlled by the withCredentials attribute.
:::

```js
// server
res.writeHead(200, {
  'Set-Cookie': 'name=kyrie',
  'Access-Control-Allow-Origin': 'http://192.168.0.141:5500',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
  'Access-Control-Allow-Credentials': true
})
```
  如果服务端设置了 **Access-Control-Allow-Credentials** 而请求未设置 **withCredentials**, 下发的cookie无法写入浏览器, 请求的时候也就无法携带cookie.
  只有前后端同时设置了相应的配置, cookie才会正常写入与发送。

## Access-Control-Expose-Headers

  在跨源访问时, **XMLHttpRequest** 对象的 **getResponseHeader()** 方法只能拿到一些基本的响应头。如果要访问其他头, 则需要服务器设置本响应头。

```js
// server
res.writeHead(200, {
  'Access-Control-Expose-Headers': 'Access-Control-Allow-Origin, Access-Control-Allow-Methods'
})

// request
console.log(xhr.getResponseHeaders())
/**
  access-control-allow-methods: GET,POST,OPTIONS
  access-control-allow-origin: http://192.168.0.141:5500
  content-type: text/plain
 * 
*/
```