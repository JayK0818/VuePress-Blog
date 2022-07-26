# CSS动画

  transition属性设置元素过渡效果,由四个属性简写而成

1. transition-property
2. transition-duration
3. transition-timing-function
4. transition-delay

```css
.box {
  transition: margin-left 4s;
  transition: margin-left 4s 1s;
  transition: margin-right 4s ease-in-out;
  transition: margin-right 4s, color 1s;
}
```
  当一个过渡事件完成之后, 在符合标准的浏览器下, 会触发transitionend事件,transitionend事件提供两个属性
  propertyName: 指示已完成过渡的属性
  elapsedTime: 指示触发这个事件过渡已运行的事件。
```js
el.addEventListener("transitionend", updateTransition, true);
```

  下面是一个案例, 点击按钮, 每个div按照对应的缓动函数移动到右侧。transition可以让运动效果平滑而不用修改JavaScript。

<ClientOnly>
  <Css-Animation/>
</ClientOnly>

```css
.animation-container{
  width: 100px;
  height: 100px;
  background-color: #0ff;
  border:1px solid #e8e8e8;
  transition: width 2s, height 2s, background-color 2s, transform 2s;
  &:hover {
    background-color: #fcc;
    width: 200px;
    height: 200px;
    transform: rotate(180deg)
  }
}
```
[MDN-Transition]('https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions')
