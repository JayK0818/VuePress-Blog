# Fetch

  Fetch API提供了一个JavaScript接口,用于访问或者操作HTTP管道的一些具体部分,例如请求和响应。

  fetch和ajax主要有以下不同:
  - 当接受到一个错误的HTTP状态码时,从fetch()返回的Promise不会标记为reject,仅当网络故障或者请求被阻止时
  才会标记为reject.
  - fetch不会发送跨域cookies,除非使用了credentials的初始化选项。
```js
// server ,body参数使用body-parser解析的
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
  const id = ctx.request.query.id;
  if(!id) {
    ctx.body = player
  }else{
    const findPlayer = player.find(p => p.id == id);
    if(findPlayer){
      ctx.body = findPlayer
    }else{
      ctx.body = {
        code:0,
        message:'未找到'
      }
    }
  }
})

router.post('/api/register', async ctx => {
  const request = ctx.request.body;
  ctx.body = {
    code:1,
    message:'注册成功'
  };
})
```
## 支持的请求参数

  fetch()接受第二个可选参数,一个可以控制不同配置的init对象。
```js
// get请求(默认)
fetch('http://localhost:9000/api/player?id=1',{
  method:'GET',
}).then(res => res.json()).then(res => {
  console.log(res)
  /*
  0: {id: 1, firstName: 'kyrie', lastName: 'irving'}
  1: {id: 2, firstName: 'lebron', lastName: 'james'}
  2: {id: 3, firstName: 'kevin', lastName: 'durant'}
  */
})


// post请求
fetch('http://localhost:9000/api/register',{
  method:'POST',
  headers:{
    'Content-Type':'application/x-www-form-urlencoded'
  },
  body:'username=lebron&age=30'
}).then(res => res.json())
.then(res => {})
// 服务端接受的参数
/*{ username: 'lebron', age: 30 }*/


fetch('http://localhost:9000/api/register',{
  method:'POST',
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify({
    username:'lebron',
    age:30
  })
}).then(res => res.json()).then(res => {})
/*同样服务端接受到的参数: { username: 'lebron', age: 30 }*/
```

## 上传文件

```js
const data = new FormData()
for(let i = 0; i < files.length; i++) {
  const file = files[i];
  data.append('file', file)
}
fetch('http://localhost:9000/api/upload',{
  method:'POST',
  body:data
}).then(res => {
  return res.json()
}).then(res => {})
```

## 检测请求是否成功

  想要精确的判断fetch()是否成功,需要包含promise resolved的情况,此时再判断Response.ok是否为true.
```js
fetch('flowers.jpg')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.blob();
  })
  .then(myBlob => {
    myImage.src = URL.createObjectURL(myBlob);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation',error);
  });
```

## 取消Fetch请求

  AbortController 接口表示一个控制器对象，允许你根据需要中止一个或多个 Web 请求

**属性**
  AbortController.signal  用来abort一个网络请求

**方法**
  AbortController.abort() 用来中止一个尚未完成的网络请求。

```js
const controller = new AbortController()
const signal = controller.signal;

fetch('htt://www.xxx.example.com',{
  signal,
  method:'GET'
}).then(res => res.json()).then(res => {
  console.log(res)
})
// 取消请求
controller.abort()
```

[AbortController.signal](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/signal)

