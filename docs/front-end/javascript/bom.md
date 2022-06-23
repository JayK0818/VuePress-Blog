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
### Location

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
