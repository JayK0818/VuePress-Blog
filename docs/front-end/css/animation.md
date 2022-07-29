# CSS动画

## Transition

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
```css
.box-1 {transition-timing-function: linear;}
.box-2 {transition-timing-function: ease;}
.box-3 {transition-timing-function: ease-in;}
.box-4 {transition-timing-function: ease-out;}
.box-5 {transition-timing-function: ease-in-out;}
.box-6 {transition-timing-function: cubic-bezier(.29, .49, 1, .5);}
```
<ClientOnly>
  <Css-Transition/>
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

[cubic-bezier]('https://cubic-bezier.com/#.17,.67,.83,.67')

## Animation

  animation是一个简写属性,用来设置CSS动画:
1. animation-name: 使用@keyframes定义的动画
2. animation-duration: 完成动画需要的时间
3. animation-timing-function: 缓动函数
4. animation-delay: 延迟时间
5. animation-iteration-count: 运动次数
6. animation-direction: 是否应该反向播放动画

  下面是一个进度条的例子
```css
@keyframes move {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
.progress-container{
  position: relative;
  height: 30px;
  border:1px solid #e8e8e8;
  width: 600px;
}
.progress-inner {
  position: absolute;
  height: 100%;
  background-color: skyblue;
  animation: move 4s linear 0s infinite;
}
```

<ClientOnly>
  <Css-Animation/>
</ClientOnly>

```css
/* animation-timing-function 使用方式和 transition一样 */
.box {
  animation-timing-function: ease;
  animation-timing-function: ease-in;
  animation-timing-function: ease-out;
  animation-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
}

/* animation-iteration-count: 动画运动次数 */
.box {
  animation-iteration-count: 1;
  animation-iteration-count: infinite; 
}

/* animation-direction: 运动方法, 是否可以反向播放 */
.box {
  animation-direction: normal;  /*正常播放*/
  animation-direction: alternate; /*动画交替反向运行*/
  animation-direction: reverse; /*反向运行, 每周期结束后由尾到头运行*/
  animation-direction: alternate-reverse; /*第一次反向, 第二次正向 依次循环*/
}

/* animation-fill-mode: 设置css动画在执行之前和之后如何将样式应用于目标 */
.box{ animation-fill-mode: none;}
.box{ animation-fill-mode: forwards;}
.box{ animation-fill-mode: backwards;}
.box{ animation-fill-mode: both;}

/* animation-play-state: running / paused; 定义动画是否运行 */
.box{ animation-play-state: running;}
.box{ animation-play-state: paused;}
```

1. animationstart
  animationstart 事件会在CSS动画开始时触发。如果有 animation-delay 延时，事件会在延迟时效过后立即触发

2. animationend
  animationend 事件会在CSS动画结束时触发。

3. animationiteration
  当CSS animation 运动到最后一帧时触发

```js
progress_container.addEventListener('animationstart', () => {
  console.log('start')
})
progress_container.addEventListener('animationend', () => {
  console.log('end')
})
progress_container.addEventListener('animationiteration', () => {
  console.log('hello')
})
```
:::tip
不支持animation的属性: background-image / float / display / position / visibility, 多个属性同时变化,
用逗号分隔。
:::

[Animate-API]('https://developer.mozilla.org/zh-CN/docs/Web/API/Element/animate')
