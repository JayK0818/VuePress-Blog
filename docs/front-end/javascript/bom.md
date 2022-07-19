# BOM

  浏览器对象模型(Browser Object Model)。

## window对象

  所有浏览器都支持window对象。它表示浏览器窗口。
```js
window.innerWidth // 浏览器窗口的内部宽度
window.innerHeight // 浏览器窗口的内部高度
```
  对于IE 8 7 6 5:
```js
document.documentElement.clientWidth/document.documentElement.clientHeight
document.body.clientWidth / document.body.clientHeight
```
### 打开一个弹窗

  经常会有在当前页面打开弹窗查看某些信息的需求。 有时，在打开弹窗的情况下, 页面内容依然可以滚动,这时需要做一个判断,
  在有滚动条的时候隐藏滚动条,并且防止隐藏滚动条时页面内容抖动。
```js
// --------- 判断页面是否有滚动条 -------
function hasScrollbar() {
  document.body.scrollHeight > (
    window.innerHeight || document.documentElement.clientHeight
  )
}

// --------获取滚动条的宽度 --------
function getScrollBarWidth() {
  const div = document.createElement('div')
  div.style.cssText = 'position:absolute;top:-9999px;'+
  'width:100px;height:100px;overflow:scroll;'
  document.body.appendChild(div)
  const scrollBarWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div)
  return scrollBarWidth;
}
```

<ClientOnly>
  <JavaScript-ModalButton/>
</ClientOnly>

### 全局变量

  通过var定义的全局变量不能通过delete操作符删除,而window属性上定义的变量可以删除。
```js
var firstName = 'kyrie'
window.lastName = 'irving'
delete firstName;
delete lastName;
console.log(firstName, window.lastName)  // kyrie undefined
```
  可以通过Object.getOwnPropertyDescriptor()获取一个对象的属性标识符。通过var定义的全局变量
  的配置configure为false,而手动在window上添加的属性configure为true.
```js
Object.getOwnPropertyDescriptor(window,'firstName')
/*
configurable: false
enumerable: true
value: "kyrie"
writable: true
*/

Object.getOwnPropertyDescriptor(window,'lastName')
/*
configurable: true
enumerable: true
value: "irving"
writable: true
*/
```
## Location

  window.location 对象用于获得当前页面的地址 (URL)
  Location对象的href属性是一个字符串,包含URL的完整文本。Location对象的toString()方法返回href的属性值。
```js
function parseUrl(){
  const args = {}
  const query = window.location.search.substring(1)
  const paris = query.split('&')
  for(let i = 0, length = paris.length; i <length; i++){
    const pos = paris[i].indexOf('=')
    if(pos === -1) continue;
    const name = paris.substring(0,pos);
    const value = paris.substring(pos+1)
    args[name] = decodeURIComponent(value)
  }
  return args
}
```
## 定时器

  window.setTimeout() 定时器到期后执行一个函数。
```js
var timeoutID = scope.setTimeout(function[, delay, arg1, arg2, ...]);
```
  返回值timeoutID是一个正整数,表示定时器的编号。 这个值可以传递给clearTimeout()来取消定时器。

:::tip
setTimeout()和setInterval()共用一个编号池, 技术上,clearTimeout()和clearInterval()可以互换, 但是为了避免混淆,
不要混用取消定时函数。
:::

```js
// 监听窗口是否可见
window.addEventListener('focus', () => {
  console.log('focus, I am seen now')
}, false)
window.addEventListener('blur', () => {
  console.log('blur, I am hidden')
})

// -------- visibilitychange ----------
// 当其选项卡的内容变得可见或被隐藏时，会在文档上触发 visibilitychange (能见度更改) 事件。
document.addEventListener('visibilitychange', function(event) {
  console.log(document.visibilityState) // hidden / visible
}, false)

document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === 'visible') {
    backgroundMusic.play();
  } else {
    backgroundMusic.pause();
  }
});
```
## window.devicePixelRatio

  window接口的devicePixelRatio返回当前设备的物理分辨率和CSS像素分辨率之比。

  媒体查询以(resolution: 1dppx) 或者(resolution:2dppx) 设置不同分辨率下的样式。
```css
@media screen and (min-resolution:2dppx) {
  .border-bottom-1px {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    transform: scale(0, .5);
  }
}
```
## window.open

  window.open() 方法用于打开一个新的浏览器窗口或者查找一个已经命名的窗口。
```js
button.addEventListener('click', () => {
  const opener = window.open('')
  console.log(opener)
  setTimeout(() => {
    opener.close()
  }, 1000)
}, false)
```
  opener表示对通过window.open()放大打开窗口的引用, 可以通过调用close()方法关闭窗口。

## window.postMessage

  window.postMessage() 方法可以安全地实现跨源通信。该方法提供了一种受控机制来规避同源限制。
  一个窗口可以获得另一个窗口的引用。然后在窗口上调用targetWindow.postMessage() 方法分发一个MessageEvent消息。
  接受消息的窗口可以根据需要自由处理此事件。
```js
window.postMessage(message, targetOrigin, [transfer])
```
```js
button.addEventListener('click', () => {
  const iframe = document.querySelector('.iframe')
  iframe.contentWindow.postMessage('hello world')
}, false)

// iframe
window.addEventListener('click', function(event) {
  console.log(event.data) // 从父窗口传递过来的数据,数据可以是对象或者数组
}, false)
```

## storage

1. window.localStorage
2. window.sessionStorage

  window.localStorage和window.sessionStorage提供了访问特定域名下会话存储或者本地存储的功能。
  两种方式操作本地数据的API相同,但是window.localStorage存储的数据没有时间限制。除非手动删除, 但是sessionStorage
  存储的数据在窗口关闭后会清除(刷新时不会)。
```js
// Storage.setItem()
window.localStorage.setItem('key', 'hello')
window.localStorage.setItem('key', JSON.stringify([{firstName:'kyrie', lastName:'irving'}]))

// Storage.getItem()
window.localStorage.getItem('key')

// Storage.removeItem()
window.localStorage.removeItem('key')

// Storage.clear()
window.localStorage.clear()
```

  storage event
  当存储区域(localStorage或者sessionStorage)被修改时, 将触发storage事件。
```js
window.addEventListener('storage', (event) => {
  console.log(JSON.parse(event.oldValue))
  console.log(JSON.parse(event.newValue))
  console.log(event.key)  // 键更改时
  console.log(event.type) // storage
  console.log(event.storageArea)
})
```
[MDN-localStorage]('https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage')

## window.location

  window.location是一个只读属性,返回一个location对象,其中包含有关文档当前位置的信息。
```js
window.location.href = 'http://www.baidu.com'
window.location.assign('http://www.baidu.com')
window.location.reload(true)
window.location.replace('http://www.baidu.com')
window.location.search  // 地址?后的部分(设置或者获取)
window.location.hash    // #a (设置或者获取)

// window.hashchange
window.addEventListener('hashchange', () => {
  console.log('hash changed')
}, false)
```
