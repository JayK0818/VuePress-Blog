# Ajax

  AJAX最大的优点是在不重新加载整个页面的情况下,可以与服务器交换数据并更新部分网页内容 通过在后台与服务器进行少量数据交换,
  AJAX可以使网页实现异步更新.

  EventTarget --- XMLHttpRequestEventTarget --- XMLHttpRequest
```js
// usage:
const xhr = new XMLHttpRequest()
```
## 属性

  **XMLHttpRequest.onreadystatechange**: 当readyState属性发生变化时调用的event handler.
  **XMLHttpRequest.readyState**:         请求的状态码

| 值        | 描述           |
| ------------- |:-------------:|
| 0      | 代理被创建，但尚未调用 open() 方法。 |
| 1      | open() 方法已经被调用      |
| 2 | send() 方法已经被调用，并且头部和状态已经可获得。      |
| 3 | 下载中； responseText 属性已经包含部分数据。      |
| 4 | 下载操作已完成。      |

1. **XMLHttpRequest.response**: 返回响应的正文。返回类型包括ArrayBuffer/Blob/Document...
:::tip
取值类型取决于responseType的值, 可以设置responseType的值, 需要在open()初始化请求之后调用,并且要在调用send()
发送请求之前
:::

2. **XMLHttpRequest.responseType**: 用于指定响应中包含的数据类型。
    arraybuffer/blob/json/text
3. **XMLHttpRequest.timeout**: 代表一个请求在被自动终止前所消耗的毫秒数,默认值为0。意味着没有超时！

4. **XMLHttpRequest.upload**: 返回一个XMLHttpRequestUpload对象，用来表示上传的进度。

## 事件

| 事件        | 描述           |
| ------------- |:-------------:|
| onloadstart      | 获取开始 |
| onprogress      | 数据传输进行中      |
| onabort | 获取操作终止      |
| onerror | 获取失败      |
| onload | 获取成功      |
| ontimeout | 获取操作在用户规定的时间内未完成  |
| onloadend | 获取完成（不论成功与否） |

## 方法

1. **XMLHttpRequest.abort()**            终止发送的请求
2. **XMLHttpRequest.open()**             初始化一个请求,该方法只能在JavaScript中使用
3. **XMLHttpRequest.send()**             发送请求

:::tip
  如果请求方法是GET或者HEAD,则应将请求主体设置为null
:::

  **XMLHttpRequest.setRequestHeader()** 设置HTTP请求头的值,必须在open()之后,send()之前调用

### Demo

```js
// 用koa搭建一个简单的server
const Koa = require('koa')
const router = require('koa-router')()
const cors = require('koa-cors')
const koaBody = require('koa-body')
const app = new Koa()
app.use(cors())
app.use(koaBody())
const player = [
  {
    id:1,
    firstName:'kyrie',
    lastName:'irving'
  },
  {
    id:2,
    firstName:'lebron',
    lastName:'james'
  },
  {
    id:3,
    firstName:'kevin',
    lastName:'durant'
  }
]
router.get('/api/player', async ctx => {
  ctx.body = player
})

router.post('/api/player', async ctx => {
  const id = ctx.request.body.id;
  const findPlayer = player.find(p => p.id == id);
  ctx.body = findPlayer
})

app.use(router.routes()).use(router.allowedMethods())
app.listen('9000', () => {
  console.log('app starting...')
})
```
```js
// 一个简单的ajax get请求
const xhr = new XMLHttpRequest()
xhr.open('GET', 'http://localhost:9000/api/player', true)
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4 && xhr.status === 200){
    const data = JSON.parse(xhr.response)
    console.log(data)
    /*
    0: {id:1, firstName: 'kyrie', lastName: 'irving'}
    1: {id:2, firstName: 'lebron', lastName: 'james'}
    2: {id:3, firstName: 'kevin', lastName: 'durant'}
    */ 
  }
}
xhr.send(null)
```
```js
// 一个简单的post请求
const xhr = new XMLHttpRequest()
xhr.open('POST', 'http://localhost:9000/api/player', true)
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4 && xhr.status === 200){
    const data = JSON.parse(xhr.response)
    console.log('post:',data)
    /*
    {
      firstName: "kyrie"
      id: 1
      lastName: "irving"
    }
    */
  }
}
xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
xhr.send('id=1')
```

```js
// server  将一张图片原始二进制数据返回
function readFile(path) {
  return new Promise((resolve,reject) => {
    fs.readFile(path, (err,data) => {
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}
router.get('/api/iu', async ctx => {
  const data = await readFile('./iu.jpeg')
  ctx.body = data;
})

const xhr = new XMLHttpRequest()
xhr.open('GET', 'http://localhost:9000/api/iu', true)
xhr.responseType = 'blob' // 注意设置responseType的位置
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4 && xhr.status === 200){
    console.log(xhr.response)
    const url = window.URL.createObjectURL(xhr.response)
    const image = new Image(400,600)
    image.onload = function(){
      window.URL.revokeObjectURL(image.src)
    }
    image.src = url;
    document.body.appendChild(image)
  }
}
xhr.send(null)
```

```js
// 文件上传进度
const data = new FormData()
for(let i = 0; i < files.length; i++) {
  const file = files[i];
  data.append('file', file)
}
const xhr = new XMLHttpRequest()
xhr.open('POST','http://localhost:9000/api/upload', true)
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.response)
  }
}
xhr.upload.onprogress = function(event){
  console.log(event.total, event.loaded)
}
xhr.send(data)
```

[XMLHttpRequest2新技巧](https://www.html5rocks.com/zh/tutorials/file/xhr2/)

## Form表单的enctype

  当method的值为post时,enctype就是将表单的内容提交给服务器的MIME类型。

  -  application/x-www-form-urlencoded (默认)
  -  multipart/form-data               当表单包含type=file
  -  text/plain                        出现于HTML5,用于调试
```js
// server  ----- 处理表单数据(使用了一个formidable的库)
const formidable = require('formidable')
router.post('/api/register', async ctx => {
  const form = formidable({ multiples: true });
  await new Promise(resolve => {
    form.parse(ctx.req,(err,fields,files) => {
      console.log(fields)
      resolve()
    })
  })
  ctx.body = '注册成功';
})


// ----ajax提交表单 ---
const submit = document.querySelector('.submit')
submit.onclick = function(event) {
  event.preventDefault()
  const data = new FormData()
  data.append('username', username.value)
  data.append('age', age.value)
  const xhr = new XMLHttpRequest()
  xhr.open('POST', 'http://localhost:9000/api/register', true)
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200){
      console.log(xhr.response)
    }
  }
  xhr.send(data)
}
```

## Ajax简易封装

```js
function parse(obj) {
  const temp = []
  const _obj = {...obj}
  for(let key in _obj) {
    temp.push(`${key}=${encodeURIComponent(_obj[key])}`)
  }
  return temp.join('&')
}

function _ajax(options = {
  url:'',
  method:'GET',
  data:{},
  timeout:3000
}) {
  return new Promise((resolve,reject) => {
    if(!options.url) return;
    let xhr, timer = null;
    if(window.XMLHttpRequest) {
      xhr = new XMLHttpRequest()
    }else{
      xhr = ActiveXObject('Microsoft.XMLHTTP')
    }

    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4){
        if(timer){
          reject('超时啦啦啦啦')
          clearTimeout(timer)
          timer = null;
        }
        if((xhr.status >= 200 && xhr.status < 300)) {
          resolve(xhr.response)
        }else{
          reject(xhr.status)
        }
      }
    }
    if(options.timeout !== 0) {
      timer = setTimeout(() => {
        xhr.abort()
      }, options.timeout)
    }
    if(options.method.toUpperCase() === 'GET') {
      xhr.open('GET', `${options.url}${parse(options.data)}`, true)
      xhr.send(null)
    }else {
      xhr.open('POST',options.url, true)
      xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
      xhr.send(parse(options.data))

      // 或者另一种方式
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.send(JSON.stringify(options.data))
    }
  })
}
```

## axios

  axios是一个基于promise的HTTP库,可以用在浏览器和node.js中。
```js
// --------- 第一种方式 -----------
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token,
})

source.cancel()


// --------- 第二种方式 --------
const CancelToken = axios.CancelToken;
let cancel;
axios.get('/user/123', {
  cancelToken: new CancelToken(function executor(c) {
    cancel = c
  })
})
cancel()
```

<!-- <JavaScript-AxiosCancel/> -->


