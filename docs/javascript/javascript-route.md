# 前端路由

## history

  window.history对象包含浏览器的历史

  window.history.back()

  window.history.forward()

  window.history.go()

### history.pushState() / history.replaceState()

  history.pushState() 方法向当前浏览器会话的历史堆栈中添加一个状态。

  history.replaceState() 修改当前历史记录实体。

  history.pushState(state, title, url)

:::tip
state 是一个JavaScript状态对象,它与pushState()创建的历史记录条目相关联。
title 当前大多数浏览器都忽略此参数.
url   新的历史条目
:::

[MDN-history.pushState](https://developer.mozilla.org/zh-CN/docs/Web/API/History/pushState)

  描述:
  从某种程度上说, 调用pushState() 和 window.location = '#foo'基本上一样, 它们都会在当前都document中创建和激活一个新的历史记录。
  但是pushState()有以下优势:

**1 新的url可以是任何和当前url同源的url,当设置window.location只会在你只设置锚的时候才会使用当前url.**

**2. window.location = '#foo' 仅仅会在锚的值不是 #foo情况下创建一条新的历史记录**

**3 可以在新的历史记录中关联任何数据。**
  

### popState

  当活动历史条目更改时,将会触发popstate事件。 如果被激活的历史条目是通过history.pushState()或者history.replaceState()
  的调用影响,popstate事件的state属性包含历史条目的状态对象的副本。
:::tip
history.pushState() 或者 history.replaceState() 不会触发popstate事件。
用户点击浏览器的回退按钮,或者history.back() / history.forward()
:::

## hash

  location.hash 返回一个string, 其中会包含URL标识中的 # 和后面URL片段标识符。

### 修改hash

  window.location.hash = '#foo'

  <a href='#foo'></a>

### hashchange

  当URL的片段标识符更改时,将触发hashchange事件。

```js
window.addEventListener('hashchange', function() {
  console.log('The hash has changed!')
}, false);
```
