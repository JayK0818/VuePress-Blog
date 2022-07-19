# Event

  1. 事件类型(event type)
  2. 事件目标(event target)
  3. 事件对象(event object)
  4. 事件传播(event propagation) -> 事件冒泡和事件捕获

## window事件

  window.load()
    当整个页面及所有依赖资源 如样式表和图片都已经加载完成时, 将触发load事件。
  
  window.unload()
    unload()事件处理程序可以用于保存用户的状态,但是它不能用于取消用户转向其他地方

  window.beforeunload()
    当浏览器窗口关闭或者刷新时,会触发beforeunload事件。
```js
window.addEventListener('beforeunload', (event) => {
  // Cancel the event as stated by the standard.
  event.preventDefault();
  // Chrome requires returnValue to be set.
  event.returnValue = '';
});
```
:::tip
并非所有浏览器都支持此方法,有些浏览器需要事件处理程序实现两个遗留方法中都一个作为替代:
1. 将字符串分配给事件的returnValue属性
2. 从事件处理程序返回一个字符串
:::

## addEventListener()

  EventTarget.addEventListener() 将指定的监听器注册到EventTarget上,当该对象触发指定的事件时,指定的回调函数就会被执行。
1. 它允许给一个事件注册多个监听器。
2. 它提供了一种更精细的手段控制listener的触发阶段。
3. 它对任何DOM元素都是有效的。

```js
target.addEventListener(type, listener, options);

// options(可选)
{
  capture: Boolean  // false冒泡阶段, true 捕获阶段
  once: Boolean     // 如果设置为true,listener会在其被调用之后自动移除
  passive: Boolean  // 设置为true, 表示listener永远不会调用preventDefault()
  signal: AbortSignal // 该AbortSignal的abort()方法被调用时,监听器会被移除。
}
```
```js
// 检测是否支持passive
var passiveSupported = false;
try{
  var options = Object.defineProperty({}, 'passive', {
    get:function() {
      passiveSupported = true
    }
  })
  window.addEventListener('test',null, options)
}catch(err) {
}
```

```js
class DomEvent {
  constructor(element){
    this.element = element
  }
  addEvent(type, handler){
    if(this.element.addEventListener){
      this.element.addEventListener(type, handler, false)
    }else if(this.element.attachEvent){
      this.element.attachEvent('on'+type, handler)
    }else{
      this.element['on' + type] = handler
    }
  }
  removeEvent(type, handler) {
    if(this.element.removeEventListener){
      this.element.removeEventListener(type, handler, false)
    }else if(this.element.detachEvent){
      this.element.detachEvent('on' + type)
    }else{
      this.element['on'+type] = null
    }
  }
}

function stopPropagation(event){
  if(event.stopPropagation()){
    event.stopPropagation()
  }else{
    event.cancelBubble = true
  }
}

function preventDefault(event){
  if(event.preventDefault()) event.preventDefault()
  if(event.returnValue) event.returnValue = false
  return false
}

// IE9 及 之前的IE不支持addEventListener()和removeEventListener(), 
// IE5之后定义了类似的  attachEvent()和 detachEvent()
```
:::tip
stopPropagation()可以在事件传播期间的任何时间调用,它能工作在捕获阶段,事件目标本身中和冒泡阶段
:::
```js
// 如果addEventListener() 注册事件的参数都相同,那么只会执行一次
function listen_click() {
  console.log('click')
}
const click_button = document.querySelector('.click_button')
click_button.addEventListener('click', listen_click, true)
click_button.addEventListener('click', listen_click, true)
// 点击button时只会执行一次, listen_click只会执行一次,重复的都被自动抛弃了。

// 这样注册时会执行两次,因为函数句柄不相同
click_button.addEventListener('click', function() {
  console.log('click')
}, false)
click_button.addEventListener('click', function() {
  console.log('click')
}, false)
```
```html
<!-- This 问题 -->
<button onclick='click1'>click-1</button>
<button onclick='click2'>click-2</button>
<script>
function click1() {
  console.log('click-1', this)  // window
}
function click2(t) {
  console.log('click-2', t);  // button元素
}
</script>
```
## removeEventListener()

  删除使用EventTarget.addEventListener()方法添加的事件。
```js
target.removeEventListener(type, listener[, options]);
target.removeEventListener(type, listener[, useCapture]);
```

  事件处理程序的参数

  在IE8及之前的版本中, 调用事件处理函数时并未传递事件对象作为第一个参数,此时需要通过全局对象window.event来获得事件对象。
```js
function handler(event) {
  event = event || window.event
}
```

## 事件传播

  事件捕获 -> 目标对象 -> 事件冒泡

  事件捕获提供了在事件还没有发送到目标之前查看它们的机会,事件捕获能用于程序调试,或者用于事件取消技术,
  过滤掉事件从而使目标事件处理程序绝对不会被调用。

  可点击下方带颜色的盒子,从大到小 依次为 box1 box2 box3.

<ClientOnly>
  <JavaScript-Event/>
</ClientOnly>

## Event.target

  触发事件的对象(某个DOM元素的)引用。 使用该属性可以用来实现事件委托。


**可点击下方球员列表,会弹出当前球员姓名和li元素索引。**

<ClientOnly>
  <JavaScript-EventDelegation/>
</ClientOnly>

## Event.currentTarget

  event.currentTarget总是指向事件绑定的元素。

## Event.stopPropagation

  阻止捕获和冒泡阶段中当前事件的进一步传播, 但是它不能阻止任何默认行为的发生,例如对连接的点击仍会被处理。

## Event.type

  只读属性Event.type会返回一个字符串,表示该事件对象的事件类型。

```js
function getEventType(event) {
  console.log(event.type)
}

document.addEventListener('keypress', getEventType, false)
document.addEventListener('keydown', getEventType, false)
document.addEventListener('click', getEventType, false)
```
```html
<button onclick='click1()'>click-1</button>
<button onclick='click2(this)'>click-2</button>
<button onclick='console.log("Hello World")'>click-3</button>

<script>
  // click1 和 click2会在全局作用域下查找。
var click1 = () => {
  console.log('click-1')
}

var click2 = (...args) => { // this指向button自身
  console.log(args)
}
</script>
```
## Event.preventDefault

  用来阻止浏览器的默认行为, 此事件还是会继续传播。 比如禁止a标签跳转, checkbox选中 或者表单提交等。
```js
document.getElementById('checkbox').addEventListener('click', function(event) {
  event.preventDefault()
}, false)

document.querySelector('.link').addEventListener('click', function(event) {
  event.preventDefault()
})
```
## Event.stopImmediatePropagation

  Event.stopImmediatePropagation() 阻止监听同一事件的其他事件监听器被调用。如果在其中一个事件监听器中执行 stopImmediatePropagation() ，那么剩下的事件监听器都不会被调用。
```js
immediate_button.addEventListener('click', function() {
  console.log('hello 1')
})
immediate_button.addEventListener('click', function(event) {
  console.log('hello 2')
  // event.stopImmediatePropagation() // 不仅阻止事件冒泡, 后面注册的相同类型事件全部不执行
  event.stopPropagation() // 仅阻止事件冒泡,button注册的其他click事件会被执行
})
immediate_button.addEventListener('click', function() {
  console.log('hello 3')
})
immediate_button.addEventListener('click', function() {
  console.log('hello 4')
})
```
## CustomEvent

  使用CustomEvent 可以创建自定义事件。
```js
const event = new CustomEvent(type, {
  detail: null,  // default null
  bubbles: false, //表示事件是否冒泡
  cancelable: true  // 表示事件是否可以取消
})
```
```js
// 一个案例
window.addEventListener('cat', function(e) {
  console.log(e.detail) //  {message: 'hello world'}
})
const custom_event = new CustomEvent('cat', {
  detail: {
    message: 'hello world'
  }
})
const custom_button = document.querySelector('.custom-button')
custom_button.addEventListener('click', function() {
  window.dispatchEvent(custom_event)
})
```
## 发布订阅模式

  利用window.addEventListener() / window.removeEventListener() 实现一个发布订阅模式
```js
window._on = window.addEventListener
window._off = window.removeEventListener
window._once = (type, listener) => window.addEventListener(type, listener, {
  once: true
})
window._emit = (type, detail) => window.dispatchEvent(new CustomEvent(type, {
  detail
}))

const listen_custom_event = (event) => {
  console.log(event.detail)
}

window._on('custom-event', listen_custom_event)
window._emit('custom-event', { message: '你好生活'})  // {message: '你好生活'}

window._once('once-event', listen_custom_event)
window._emit('once-event', { message: 'hello, world'})  // {message: 'hello, world'}
window._emit('once-event', { message: 'hello, world'})  // 无输出

window._emit('custom-event', { message: '你好生活'})    // {message: '你好生活'}
window._off('custom-event', listen_custom_event)
window._emit('custom-event', { message: '你好生活'})  //  无输出
```

```js
// 将上述挂载在window上的事件监听和触发 通过EventTarget修改
// EventTarget是一个DOM接口,可以接收事件,并且可以创建侦听器的对象实现。
class EventEmitter extends EventTarget {
  on(type, listener) {
    this.addEventListener(type, listener)
  }
  once(type, listener) {
    this.addEventListener(type, listener, {
      once: true
    })
  }
  off(type, listener) {
    this.removeEventListener(type, listener)
  }
  emit(type, data) {
    this.dispatchEvent(new CustomEvent(type, {
      detail: data
    }))
  }
}

const event_emitter = new EventEmitter()
const listen_event_emitter = (event) => {
  console.log('event-emitter:', event.detail)
}
event_emitter.on('dog', listen_event_emitter)
event_emitter.emit('dog', {
  name: 'hello'
})  // 正常触发
event_emitter.emit('dog', {
  name: 'world'
}) // 正常触发
event_emitter.off('dog', listen_event_emitter)
event_emitter.emit('dog', {
  name: 'hello world'
})  // 此时触发没有输出


event_emitter.once('cat', listen_event_emitter)
event_emitter.emit('cat', {
  name: '你好'
})
event_emitter.emit('cat', {
  name: '生活'
})
```
[MDN-EventTarget]('https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget')

## BroadcastChannel

  BroadcastChannel接口代理了一个命名频道, 可以让指定origin下当任意browsing context来订阅它。它允许同源的不同浏览器窗口,tab页面,
  iframe下的不同文档之间相互通信。
```js
// 父窗口
const channel = new BroadcastChannel('cat')
button.addEventListener('click', () => {
  channel.postMessage('hello world')
  channel.postMessage([{firstName: 'kyrie', lastName: 'irving'}])
}, false)


// 子窗口
const channel = new BroadcastChannel('cat')
channel.addEventListener('message', function(e) {
  console.log(e.data)
})

console.log(channel.name)   // cat
```
1. BroadcastChannel.close()
  通过调用BroadcastChannel.close() 方法可以马上断开其与对应频道的关联。并让其被垃圾回收。

2. BroadcastChannel.postMessage()
  BroadcastChannel.postMessage()发送一条任意Object类型的消息。给所有同源下监听了该频道的所有浏览器上下文。

3. BroadcastChannel: message event

  监听通过postMessage()发送的消息
```js
const channel = new BroadcastChannel('cat')
channel.addEventListener('message', function(event) {
  console.log(event.data)
})
```
