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
  然后在页面中可以通过 <user-card></user-card> 的方式使用它, 或者通过document.createElement('user-card')。

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
