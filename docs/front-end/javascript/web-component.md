# WebComponent

  Web Components 是一套不同的技术, 允许创建可重用的定制元素。

## window.customElements

  window.customElements.define() 允许注册一个custom element,
```js
window.customElements.define('custom-element', CustomElement)
```
  下面是一个实例, 注册一个自定义的元素
```js
class UserCard extends HTMLElement {
  constructor() {
    super()
    const img = document.createElement('img')
    img.width = 100
    img.src = 'https://gimg2.baidu.com/image_search/src?xxx'
    const container = document.createElement('div')
    container.style.cssText = 'width:100px;height:100px;padding:10px;border:1px solid #e8e8e8;'
    const span = document.createElement('span')
    span.textContent = 'Hello, Kyrie'
    container.append(img, span)
    this.append(container)
  }
}
window.customElements.define('user-card', UserCard)
```
  然后在页面中可以通过 标签的方式 user-card 的方式使用它, 或者通过document.createElement('user-card')。

  自定义内置元素.
  window.customElements.define() 接受三个参数, 第三个参数是一个对象,用来扩展自定义元素
```js
class ExpandingParagraph extends HTMLParagraphElement {
  constructor() {
    self = super()
      this.style.cssText = 'padding:0; margin: 0; color:red'
  }
}
window.customElements.define('expanding-paragraph', ExpandingParagraph, {extends: 'p'})
```
```html
<p is='expanding-paragraph'></p>
```
  这样使用后页面上渲染一个p标签,但是没有默认的padding和margin, 同时字体也变为红色

## 生命周期函数

  在custom element的构造函数中, 可以指定多个不同的回调函数,它们将会在元素的不同生命时期被调用:
1. connectedCallback: 元素首次被插入到文档DOM时被调用。
2. disconnectedCallback: 元素从DOM中删除被调用
3. adoptedCallback: 当元素被移动到新的文档时被调用
4. attributeChangedCallback: 当元素的属性新增 删除 修改时被调用。

```js
class CustomSquare extends HTMLElement {
  static get observedAttributes() {
    return ['c', 'l']; // 需要监听的属性变更
  }
  constructor() {
    super()
    const element = document.createElement('div')
    element.textContent = 'hello world!!!!!!!'
    this.append(element)
  }
  connectedCallback() {
    console.log('connectedCallback')
  }
  disconnectedCallback() {
    console.log('disconnectedCallback')
  }
  attributeChangedCallback() {
    console.log('attributeChangedCallback')
    updateStyle(this)
  }
}
window.customElements.define('custom-square', CustomSquare)
const update_button = document.querySelector('.update-button')
update_button.onclick = function() {
  const element = document.querySelector('custom-square')
  element.setAttribute('l', Math.floor(Math.random()*100))
  document.body.removeChild(element)
}
```
## Shadow DOM

  Shadow DOM允许将隐藏的DOM树附加到常规的DOM树中。

  Element.attachShadow() 方法将一个shadow root附加到任何一个元素上。接受一个配置对象作为参数,该对象有一个mode属性,可以是open
  或者closed。
```js
const shadow = element.attachShadow({mode: 'open'})
const shadow = element.attachShadow({mode: 'closed'})
```
```js
class PopUp extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({mode: 'closed'})
    const span = document.createElement('span')
    span.textContent = 'hello world'
    span.classList.add('text')
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    const style = document.createElement('style')
    style.textContent = `
      .text {
        position: relative;
        color: red;
      }
      .text:hover {
        color: red;
        text-decoration: underline;
      }
      .wrapper {
        position: absolute;
        left:0;
        top:0;
        width: 200px;
        height: 200px;
        z-index: 20;
        background-color: pink;
        opacity: 0;
        z-index: 10;
      }
      .text:hover .wrapper {
        opacity: 1;
      }
    `
    shadow.append(span)
    shadow.append(style)
    span.appendChild(wrapper)
  }
}
window.customElements.define('pop-up', PopUp)
```
## Template

  在构造函数中创建各种元素比较麻烦, 可以通过template模版语法,具有更好的html标签层级效果显示。
```html
<template id="my-paragraph">
  <p>My paragraph</p>
</template>

<script>
class MyParagraph extends HTMLElement {
  constructor() {
    super()
    const template = document.getElementById('paragraph')
    const content = template.content.cloneNode(true)
    const shadow = this.attachShadow({mode: 'closed'})
    const style = document.createElement('style')
    style.textContent = `
      .title {
        color: red;
      }
      .content {
        font-size: 18px;
        color: pink;
      }
    `
    shadow.append(content, style)
  }
}
window.customElements.define('my-paragraph', MyParagraph)
</script>
```
