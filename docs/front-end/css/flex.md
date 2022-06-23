# Flex

  Flex 是弹性布局, 用来为盒模型布局提供最大的灵活性。将容器的 display 属性值 改为 flex 或者 inline-flex.
  完成这一步之后, 容器之中的 直系子元素就会变为 flex 元素。
```css
.box{
  display: flex;
  display: inline-flex; 
}
```
  flex容器中的所有flex元素都会有以下行为:
1. 元素排列为一行(flex-direction属性的初始值为 row)
2. 元素从主轴的起始线开始
3. 元素不会在主维度方向拉伸, 但是可以缩小
4. 元素被拉伸来填充交叉轴大小
5. flex-wrap 属性为 nowrap
6. flex-basic 属性为 auto;

## flex-direction

  row / row-reverse / column / column-reverse

  row或者 row-reverse 主轴将沿着 水平方向延伸, column / column-reverse 主轴将沿着垂直方向延伸。

## flex-flow

  flex-flow属性是 flex-direction 和 flex-wrap属性的简写形式。默认值为 row nowrap;

  flex-wrap 默认值为 nowrap, 如果没有设置换行且子元素宽度大于容器宽度时, 它们会缩小以适应容器。

## justify-content

  该属性用来使元素在主轴方向上对齐, 主轴就是通过 flex-direction 设置的方向。初始值是flex-start。

  flex-start / flex-end / center / space-between / space-around

## align-items

  该属性定义项目在交叉轴上如何对齐. 初始值为stretch, 这就是为什么flex 元素默认会被拉伸到最高元素的高度。

  align-items: flex-start | flex-end | center  | stretch

  stretch: 如果项目没有设置高度 将占满整个父级div的高度。

## align-content

  align-content 属性定义了多根轴线的对齐方法。 如果项目只有一根轴线, 该属性不起作用。

  align-content: flex-start / flex-end / center / space-between / space-around / stretch

<ClientOnly>
  <Css-Flex/>
</ClientOnly>

## flex-grow

  这个属性规定了 在flex容器中,分配剩余空间的相对比例。
  剩余空间是 flex 容器的大小减去所有 flex 项的大小 加起来的大小。 如果所有的兄弟项目都有相同的 flex-grow系数, 那么所有的
  项目将剩余空间按照相同比例分配。
```css
.container{
  width: 500px;
  display: flex;
}
.items{
  width: 100px;
  flex-grow: 0; /* 默认 */
  flex-grow: 1;  /* 将占满剩余空间 */
  flex-grow: 0.5 /* 剩余空间为400, 0.5就是200, 再加上自身的100. */
}
```

## flex-shrink

  flex-shrink 属性指定了 flex 元素的收缩规则。 flex 元素仅在默认宽度之和 大于容器的时候才发生收缩。

  flex-shrink: 0 为不收缩。
```css
.container{
  width: 500px;
  height: 100px;
  display: flex;
}
.item1{
  width: 300px;
  flex-shrink: 1
}
.item2{
  width: 400px;
  flex-shrink: 1
}
/*
超出父元素的 宽度之差 为 200px; 所以 在 item1 和 item2 都收缩相同值时, 
item1 收缩宽度为 200 * 3/7, item2收缩宽度为 200 * 4/7, 然后将两者自身宽度 减去 收缩的宽度 为最终渲染的宽度
*/

.item1{
  width:300px;
  flex-shrink: 2;
}
.item2{
  width: 400px;
  flex-shrink: 1;
}
/*
收缩值不同时的计算方式为:
因为item1收缩比例为2, 所以item1收缩宽度为 6/10 (计算为 300*2/(300*2+400)), item2的收缩比例为
4/10, 再将两者的宽度 减去收缩宽度为实际渲染的宽度
*/
```

## flex-basis

  flex-basic 指定了flex元素在主轴方向上的初始大小。如果不使用 box-sizing 改变盒模型的话, 那么这个属性就决定了
  flex元素的内容 盒(content-box) 的尺寸。

  如果父元素设置了 flex-direction: column, 则设置的是元素的高度。
:::tip
当一个元素同时设置了flex-basis(除值为auto外) 和 width (或者在 flex-direction:column的情况下设置了height)
flex-basis 具有更高的优先级。
:::

## 不定项居中对齐

  下列轮播图切换的 点击的按钮 水平居中对齐
```css
.dot-container{
  display: flex;
  justify-content: center;
}
.dot{
  margin:0 5px;
  width: 10px;
  height: 10px;
  background-color:rgba(200,200,200,.5);
  border-radius: 50%;
}
```

  如果不用display:flex的话, 也可以通过 display:inline-block; 实现
```css
.dot-container{
  /* ... */
  text-align: center;
  font-size: 0;
}
.dot{
  /* ... */
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}
```

<ClientOnly>
  <Css-RowCenter/>
</ClientOnly>

## 列均分布局

  每个项目在水平方向占据的空间一样大。

<ClientOnly>
  <Css-FlexColumn/>
</ClientOnly>

## 子项分组布局

  给父级设置为弹性布局, 某个子元素的右侧 在另一侧布局的话, 设置该元素的 margin-right:auto;

```css
.container{
  display: flex;
  align-items: center;
}
.title{
  margin-right: auto;
}
```
  通过浮动, 或者左侧元素包裹在一个div里, 设置flex:1; 也可以实现上述布局效果。

<ClientOnly>
  <Css-FlexGroup/>
</ClientOnly>

## sticky-footer

  A sticky footer pattern is one where the footer of your page 'sticks' to the bottom of the viewport.
  In case where the content is shorter than the viewport height.
  If the content of the page extends past the viewport bottom, the footer then sits below the
  content as normal.

  下面是两种实现方式:

```css
/* flex  */
.container{
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
.container .body{
  flex-grow: 1;
}


/* 利用padding-bottom 和 margin-top  */
.clearfix-container{
  min-height: 100%;
  height: 600px;
  padding-bottom: 30px;
  &::after {
    display: block;
    content: ".";
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
.footer{
  margin: -30px 0 0 auto;
}
/* 也可以通过绝对定位的方式 */
```
<ClientOnly>
  <Css-StickyFooter/>
</ClientOnly>
