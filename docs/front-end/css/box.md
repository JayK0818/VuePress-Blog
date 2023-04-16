# 盒模型

  当对一个文档进行布局的时候,浏览器的渲染引擎会根据标准之一的CSS基础框盒模型,将所有元素表示为一个个矩形的盒子(Box)。
	CSS决定这些盒子的大小,位置以及属性。
	每个盒子有四个边界: 内容边界Content edge,内边距边界 Padding Edge 边框边界Border Edge,外边框边界 Margin Edge.

1. 标准盒模型: 实际的元素 是 width padding 和 border 一起决定整个盒子的大小。(margin不回计入实际大小,会影响盒子在页面所占空间)
2. 怪异盒模型: 元素所占的空间就是实际设置的width/height。 可以通过 box-sizing: border-box来实现。

## margin

  为给定元素设置 上下左右 四个方向的外边距属性。

  可能的值: length(固定值作为外边距) / percentage(百分比) / auto
```css
.box{
  margin: 0 auto; /*块元素左右居中*/
  margin: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-top: 10%;  /*相对父元素宽度的10%*/
  margin-top: 10%;  /*相对父元素宽度的10%*/
  margin-left: -10px;
}
```
:::tip
上下外边距的设置 对不可替换的 内联元素无效, 如span i 等。 外边距控制等是外部空出等空间, 而padding操作元素
内部空出等空间。

margin 可以设置为负数, 但是padding不可以. margin-top 和 margin-left设置负值, 元素分别向上 和 向左移动。
margin-bottom 和 margin-right 设置负数, 自身元素不受影响。 margin-right设置负数, 右侧元素左移动, margin-bottom设置负数,
下方元素向上移动。
:::

## padding

  定义元素边框与元素内容之间的空间。
  可能的值: length(px,em等) %
```css
.box{
  padding: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left:10%;  /* 相对于父级宽度的10% */
  padding-top:10%;	  /* 相对于父级宽度的10% */
}

```
## border

  border属性是一个用于设置各种单独的边界属性。可以用于设置一个或多个以下属性的值:
  border-width / border-style / border-color

```css
.box {
  border: 1px solid #e8e8e8;
  border-style: solid;
  border-color: red;
  border-width: 1px;
}
```

## display

  display 属性设置一个元素应该如何显示.

1. display-outside(外部值)
2. display-inside(内部值)
3. display-listitem(列表值)
4. display-internal(属性值)
5. display-box(显示值)
6. display-legacy(混合值)
7. global(全局值)

:::tip
隐藏一个元素可以通过 display:none(不会占据之前的空间,仍会影响布局), 或者把visibility设置为 hidden(会占据之前一样的空间)。
:::

  外部值就是定义自身元素的外部表现, 而不影响内部的子元素。
    display-outside: block / inline

  外部值: 定义子元素布局的。
    display-inside: flex / grid / table

  列表值: ul / ol

  混合值: inline-block / inline-table / inline-flex / inline-grid

  全局值:
  inherit: 继承父元素的属性
  initial: 初始值
  unset:  混合了inherit 和 initial, 如果该属性可以继承, 则等同于inherit,否则等同于 initial

```css
/* 自定义滚动条 */
.box::-webkit-scrollbar{
  width: 6px;
  height: 6px;
}
.box::-webkit-scrollbar-thumb{
  background: #51606d;
  border-radius: 3px;
}
.box::-webkit-scrollbar-track {
  background: #263849;
}
```
## line-height

  line-height 属性用于设置多行元素的空间量。对于块级元素,它指定元素行盒(line boxes)的最小高度。对于非替代的inline元素, 它用于计算行盒的高度。(该行内元素的行高实际没有变, 效果类似于padding。)

```css
.line-height-text {
  /* 取决于浏览器 */
  line-height: normal;
  /* 1.5 乘以 字体大小的值 */
  line-height: 1.5;
  line-height: 24px;
  /* 如果自己设置了font-size, 就是该font-size的2倍行高, 如果自己没有设置字体大小,则使用父级设置了字体大小的2倍 */
  line-height: 2em;
  /* 自身字体大小的百分比 */
  line-height: 30%;
}
```
  推荐在设置 line-height时使用无单位数值。

**一道题**

  下面的文本 hello 和 world 之间的距离。
```html
<style>
  p {
    font-size: 16px;
    line-height: 1;
    margin-top: 10px;
    margin-bottom: 15px;
  }
</style>

<p class="hello-text">HELLO</p>
<p></p>
<p></p>
<p></p>
<p class="world-text">WORLD</p>
```
  答案是: 15px; margin-top 和 margin-bottom 会发生重叠, 没有内容的p标签没有高度margin也会发生重叠.最后 *hello* 和 *text*
  之间只会有 margin 较大的 那个间距!

**空的块元素**

  当一个块元素上边界**margin-top** 直接贴到元素下边界**margin-bottom**时也会发生边距坍塌。这种情况会发生一个块元素完全没有设定边框*border*, 内边距*padding*, 高度*height* 最小高度*min-height*, 最大高度*max-height*。

```html
<style>
p {margin: 0; }
div {margin-top: 13px; margin-bottom: 87px;}
</style>

<p>下边界范围是 87 ...</p>
<div></div>
<p>... 上边界范围是 87</p>
```

[外边距坍塌](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)