# BFC
    
  Block Formatting Context 是Web页面的可视CSS渲染的一部分，是块盒子的布局过程发生的区域。也是浮动元素与其他元素交互的区域。
  以下方式会创建块格式化上下文:

1. 根元素 html
2. 浮动元素(元素的float不是none)
3. 绝对定位元素(元素的position为absolute或fixed)
4. 行内块元素(元素的display为inline-block)
5. 表格单元格(元素的display为table-cell)
6. 表格标题(元素的display为table-caption)
7. overflow值不为visible的块元素
8. 弹性元素(display为flex或inline-flex元素的直接子元素)
9. 元素属性为 display: flow-root (类似于一个新的根元素,就像html一样) 或 display: flow-root list-item
    
  块格式化上下文包含创建它的元素内部的所有内容。  清除浮动只能清除同一BFC中在它前面的元素的浮动.外边距折叠
  只会发生在属于同一BFC的块级元素之间。
    
  BFC的特性:
1. 属于同一个BFC的两个相邻容器的上下margin会重叠
2. 计算BFC高度时,浮动元素也参与计算
3. BFC的区域不会与浮动元素容器发生重叠
4. BFC内的容器在垂直方向依次排列
5. 元素的margin-left与其包含块的border-left相接触
6. BFC是独立容器，容器内部元素不会影响容器外部元素

[MDN-BFC](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)

  外边距重叠

:::tip
有设置float 和 position=absolute的元素不会发生外边距重叠行为。
:::

  下面的demo, 两个div子元素设置了左浮动, 但是上下边距没有合并！
```html
<style>
.float-margin-container {
  display:flow-root; width: 110px; border: 1px solid skyblue;
}
.float-margin-container .item-1, .float-margin-container .item-2{
  width: 100px; height: 100px; background-color:pink;
}
.float-margin-container .item-1{margin-bottom: 10px; float: left;}
.float-margin-container .item-2{margin-top: 20px; float: left;}
</style>

<div class="float-margin-container">
  <div class="item-1"></div>
  <div class="item-2"></div>
</div>
```

1. 块的上外边距和下外边距有时合并为单个边距, 其大小为单个边距的最大值, 这种行为称为外边距折叠。
2.  如果没有边框border，内边距padding，行内内容，也没有创建块级格式上下文或清除浮动来分开一个块级元素的
上边界margin-top 与其内一个或多个后代块级元素的上边界margin-top；或没有边框，内边距，行内内容，高度height，
最小高度min-height或 最大高度max-height 来分开一个块级元素的下边界margin-bottom与其内的一个或多个后代后代块元素的下边界margin-bottom，则就会出现父块元素和其内后代块元素外边界重叠，重叠部分最终会溢出到父级块元素外面

  以下是MDN的一个demo。父元素的 marin-top 和 margin-bottom 分别和 header的 margin-top, footer的margin-bottom合并
```html
<style>
  section{ margin-top: 13px; margin-bottom:87px;}
  section header{ margin-top: 87px;}
  section footer{ margin-bottom: 87px;}
</style>

<section>
  <header>上边界重叠 87</header>
  <main></main>
  <footer>下边界重叠 87 不能再高了</footer>
</section>
```

```css
/* 两个元素之间的margin为20px */
.top{
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  background-color: skyblue;
}
.bottom {
  /* float: left; */
  /* display: inline-block */
  margin-top: 20px;
  width: 100px;
  height: 100px;
  background-color: pink;
}
```

```css
.container{
  width: 100px;
  height: 100px;
}
.container .item{
  margin-top: 10px;
  width: 10px;
  height: 10px;
}
/* 利用伪元素清除 父元素内的子元素 margin 重叠 */
.container:before{
  content: "";
  display: block;
  overflow: hidden;
}
```

## 脱离常规流的元素

1. floated items。 浮动的元素
2. items with *position: absolute* (including *position: fixed* which acts in the same way).
3. the root element(html)根元素

  脱离常规流的元素会创建一个新的块级格式化上下文环境, 其中包含的所有元素构成了一个小的布局环境, 与页面中的其他内分隔开来。而根元素, 作为页面所有内容的容器, 自身脱离常规流, 为整个文档创建了一个块级格式化上下文环境。