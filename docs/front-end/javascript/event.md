# 事件

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
    }else if(this.element.detachEvent{
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

## removeEventListener()

  删除使用EventTarget.addEventListener()方法添加的事件。
```js
target.removeEventListener(type, listener[, options]);
target.removeEventListener(type, listener[, useCapture]);
```

### 事件处理程序的参数

  在IE8及之前的版本中, 调用事件处理函数时并未传递事件对象作为第一个参数,此时需要通过全局对象window.event来获得事件对象。
```js
function handler(event) {
  event = event || window.event
}
```

### 事件传播

  事件捕获 -> 目标对象 -> 事件冒泡

  事件捕获提供了在事件还没有发送到目标之前查看它们的机会,事件捕获能用于程序调试,或者用于事件取消技术,
  过滤掉事件从而使目标事件处理程序绝对不会被调用。

  可点击下方带颜色的盒子,从大到小 依次为 box1 box2 box3.

<JavaScript-Event/>

### Event.target

  触发事件的对象(某个DOM元素的)引用。 使用该属性可以用来实现事件委托。


**可点击下方球员列表,会弹出当前球员姓名和li元素索引。**

<JavaScript-EventDelegation/>

### Event.currentTarget

  event.currentTarget总是指向事件绑定的元素。

### Event.stopPropagation

  阻止捕获和冒泡阶段中当前事件的进一步传播, 但是它不能阻止任何默认行为的发生,例如对连接的点击仍会被处理。
