# 伪元素与伪类

  伪类是选择器的一种, 它用于选择处于特定状态的元素。伪类就是开头为冒号的关键字。
  伪元素开头为双冒号。
:::tip
一些早期的伪元素曾使用单冒号的语法，所以你可能会在代码或者示例中看到。现代的浏览器为了保持后向兼容，支持早期的带有单双冒号语法的伪元素。
:::

## 伪类

1. :active  匹配用户激活的元素。active伪类一般用在 a 和 button元素中
```css
a:link { color: blue; }          /* 未访问链接 */
a:visited { color: purple; }     /* 已访问链接 */
a:hover { background: yellow; }  /* 用户鼠标悬停 */
a:active { color: red; }         /* 激活链接 */
```
2. :checked 选中状态的单选或者复选框
3. :first-child 兄弟元素中的第一个元素
4. :first-of-type
5. :focus 当一个元素有焦点当时候匹配
6. :hover
7. :last-child
8. :last-of-type
9. :is
10. :not
11. :nth-child
12. :nth-of-type
13. :root
14. :playing  匹配音频, 视频 或者相似的能播放 或暂停的 资源的, 且正在播放的元素
15. :paused   匹配音频, 视频 或者相似的能播放 或暂停的 资源的, 且正在暂停的元素

```css
/* 定义css 主题变量 */
:root {
  --light-theme: #1890ff;
}
```
```js
// 修改变量
document.documentElement.style.setProperty('--light-theme', 'red')
```

## 伪元素

1. ::after
2. ::before
3. ::first-letter 匹配第一个字母
4. ::first-line   匹配第一行
5. ::selection

  ::before和::after伪元素与content属性的共同使用,使用 CSS 将内容插入到你的文档中中
```css
element:after  { style properties }  /* CSS2 语法 */
element::after { style properties }  /* CSS3 语法 */
```
  ::after表示法 是在CSS3中引入的。::符号是用来区分伪类和伪元素的。

  CSS表达式 attr() 用来获取选择到的元素的某一个HTML属性值。并用于其样式。
  attr() 理论上能用于所有CSS属性 但目前支持但仅有伪元素的content属性。

  下面是一个案例， 将伪类和伪元素结合在一起使用.

<ClientOnly>
  <Css-Pseudo-Before/>
</ClientOnly>

```html
<div class='container'>
  我们有一些 <span data-descr="collection of words and punctuation">文字</span> 有一些
  <span data-descr="small popups which also hide again">提示</span>。<br />
  把鼠标放上去<span data-descr="not to be taken literally">看看</span>。
</div>
```
```css
.container {
  span[data-descr] {
    position: relative;
    text-decoration: underline;
    color: #00F;
    cursor: help;
  }
  span[data-descr]:hover::after {
    content: attr(data-descr);
    position: absolute;
    left: 0;
    top: 24px;
    min-width: 200px;
    border: 1px #aaaaaa solid;
    border-radius: 10px;
    background-color: #ffffcc;
    padding: 12px;
    color: #000000;
    font-size: 14px;
    z-index: 1;
  }
}
```
:::tip
::first-letter 和 ::first-line 只能在块容器中. 伪元素 只在display属性值为 block, inline-block, 
table-cell, list-item 或者 table-caption的元素上才起作用。
:::

```css
.text::first-letter {
  color: red;
}

.text::first-line {
  text-transform: uppercase;
}
```
