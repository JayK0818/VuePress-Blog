# 移动端

## 像素

  逻辑像素/物理像素/设备像素比

1. 逻辑像素: 也叫 设备独立像素(CSS像素), 保证不同设备下元素的尺寸是相同的。 例子: iPhone下的逻辑像素是375px。
2. 物理像素: 即设备屏幕实际拥有的像素点. iPhone6 下的物理像素为 750px。
3. 设备像素比: 物理像素除以逻辑像素, window.devicePixelRatio来获取设备像素比。

## viewport

  viewport 它提供有关视口初始大小的提示,仅供移动设备使用。

1. width:           以pixels为单位,定义viewport的宽度。(device-width)
2. height:          以pixels为单位,定义viewport的高度 (device-height)
3. initial-scale:  定义设备宽度与视口大小之间的缩放比率
4. maximum-scale:  定义缩放的最大值
5. minimum-scale:  定义缩放的最小值
6. user-scalable:  如果设置为no,用户将不能放大或缩小网页。

## 媒体查询

  使用@media, 可以针对不同的媒体类型定义不同的样式。@media可以针对不同的屏幕尺寸设置不同的样式。

  媒体类型:
1. all 用于所有设备
2. print 用于打印机和打印预览
3. screen 用于电脑屏幕, 平板电脑 智能手机等
4. speech 用于屏幕阅读器等发声设备

  媒体功能:
1. device-height / device-width
2. height / width
3. max-device-height / max-device-width
4. max-resolution / min-resolution
5. max-width / max-height
6. resolution
7. orientation

```css
/* 横屏 */
@media (orientation: landscape) {
  body {
    background: pink;
  }
}
/* 竖屏 */
@media (orientation: portrait) {
  body {
    background: skyblue;
  }
}

@media screen and (max-width: 300px) {
  body {
    background-color: skyblue;
  }
}
```
  移动端 -> PC端的适配原则： min-width从小到大
  PC端 -> 移动端适配原则： max-width从大到小  
## 固定宽度布局

  假定设计稿的宽度为750px, 根据设备的分辨率将设计稿进行缩放 装载进 屏幕

```js
function setSize(w = window.screen.width) {
  const meta = document.querySelector('meta[name="viewport"]');
  const designWidth = 750;
  const scale = (w / designWidth).toFixed(5)
  if(meta) {
    meta.setAttribute('content', 
    `width=${designWidth}, initial-scale=${scale}, 
    maximum-scale=${scale},minimum-scale=${scale},user-scalable=no`
  )
  }else {
    const meta = document.createElement('meta')
    meta.setAttribute('name', 'viewport')
    meta.setAttribute('content', 
      `width=${designWidth}, initial-scale=${scale}, maximum-scale=${scale},
      minimum-scale=${scale},user-scalable=no`
    )
    document.head.append(meta)
  }
}
setSize()
window.addEventListener('orientationchange', () => {
  const deg = window.orientation
  if(deg === 90 || deg === -90) { // 横屏
    const w = window.screen.height;
    setSize(w)
  }
  if(deg === 0 || deg === 180) { // 数屏
    const w = window.screen.width
    setSize(w)
  }
}, false)
```
## rem布局

  rem 是CSS3新增的一个相对单位。使用rem为元素设定字体大小时, 相对html根元素的font-size。

:::tip
rm是相对长度单位,相对于当前对象内文本的字体尺寸。如果当前元素没有设置字体尺寸, 则相对于腹肌元素的字体大小。
:::

```js
// 假定设计稿的宽度为750px, 此时以html的font-size为100px 作为基准, 计算在不同设备下
// html的font-size
(function(window,document) {
  function refresh() {
    const oHtml = document.querySelector('html');
    const oWidth = oHtml.getBoundingClientRect().width || window.screen.width;
    const baseWidth = 750;  // 设计稿的宽度
    const baseFontSize = 100;   // 750设计稿的宽度下，以根元素的字体大小为100px;
    oHtml.style.fontSize = (baseFontSize / (baseWidth/oWidth)) + 'px';
  }
  const resizeEvent = 'orientationchange' in window ? 'orientation' : 'resize';
  window.addEventListener(resizeEvent, refresh, false);
  // document.addEventListener('DOMContentLoaded',refresh,false);
  document.addEventListener('readystatechange',() => {
    if(document.readyState === "interactive"){
      refresh()
    }
  },false);
})(window,document)
```

## vw

  vm就是视口的宽度, 把屏幕均分为100份。 1vw = 1 / 100 屏幕的宽度。
  在750px的设计稿下, 1vw 就是 7.5px。
```css
.box{
  width: 10vw;
  height: 10vw;
}
```

## 阈值设定

1. extra small < 576px
2. small >= 576px
3. medium >= 768px
4. large >= 992px
5. x-large >= 1200px
6. extra-large >= 1400px
```css
@media screen and (min-width: 576px) {
  .col-2 {
    width: 5%;
  }
  .sm-hidden {
    display: none;
  }
}
```

## 判断是否为移动端

1. window.navigator.userAgent

```js
if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
  // 移动设备
}
```

2. 通过屏幕宽度判断

```js
const is_mobile = () => {
  return document.documentElement.clientWidth < 750
}
```

3. window.orientation

  手机屏幕可以横屏或者竖屏, 可以判断在window上是否有orientation属性。只有移动设备才有这个属性
```js
const is_mobile = () => {
  return 'orientation' in window
}
```

4. 移动端设备可以在DOM元素上设置touchstart属性,而移动设备没有这个属性。

```js
const is_mobile = () => {
  return 'ontouchstart' in document.documentElement
}
```

5. ua-parser-js

  通过第三方工具包来检测是否是移动设备
```js
npm install ua-parser-js

const is_mobile = () => {
  const parser = new UAParser()
  return parser.getDevice().type === 'mobile'
}
/*
parser.getDevice().type: console / mobile / tablet / smarttv /...
*/
```
[npm-ua-parser-js]('https://www.npmjs.com/package/ua-parser-js')

[js判断设备是否为移动端]('https://www.ruanyifeng.com/blog/2021/09/detecting-mobile-browser.html')