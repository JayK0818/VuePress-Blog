# Grid

  CSS网格布局可以将一个页面划分为几个主要区域, 以及定义这些区域的大小, 位置, 层次罐子。
```css
.box{
  display: grid;
  display: inline-grid;
}
```

## grid-template-columns/grid-template-rows

  grid-template-columns 基于网格列的维度, 定义网格线的名称和网格轨道的尺寸大小。
  grid-template-rows    基于网格行的维度, 定义网格线的名称和网格轨道的尺寸大小。
```css
.box{
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  /* 或者使用百分比 */
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 100px 1fr 100px;
  grid-template-columns: repeat(3, 100px);  /*重复3次, 每列100px*/
}
```

  auto-fill: 有时单元格的大小是固定的, 但是容器大小是不确定的, 如果希望每一行 或者每一列 容纳尽可能多的单元格, 可以使用
  auto-fill 关键字自动填充.
```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  grid-template-columns: 100px repeat(5, 100px);
  grid-template-columns: 100px minmax(100px, 1fr) 100px; /*中间的宽度自适应,最小100px*/
}
```
## grid-template-areas/grid-area

  grid-template-areas 是网格区域grid areas在CSS中的特定命名, 可以合并不同的区域。
  每行 由单引号内定义, 以空格分隔。 . 号表示没有名称的网格项。

  grid-area 使用在 grid-template-areas 定义布局的名字, 相同的部分将会合并。

  grid-area 属性指定网格元素在网格布局中的大小和位置, 是以下属性的简写属性:

1. grid-row-start
2. grid-row-end
3. grid-column-start
4. grid-column-end

```css
.grid-example {
  display: grid;
  width: 300px;
  height: 300px;
  grid-template-areas:
  'a a a'
  'b c c'
  'b c c';
  grid-template-columns: repeat(3 100px);
}
.grid-example .item1{
  grid-area: a; /*不能使用引号*/
  background-color:pink;
}
.grid-example .item2{
  grid-area: b;
  background-color: skyblue;
}
.grid-example .item3{
  grid-area: c;
  background-color: orange;
}

/* 从第2行和第1列开始, 横跨2行3列 */
.item {
  grid-area: 2 / 1 / span 2 / span 3
}

/* 栅格布局 */
.col-1 {
  grid-area: auto / auto / auto / auto / span 1;
}
.col-2 {
  grid-area: auto / auto / auto / auto / span 2;
}
.col-3 {
  grid-area: auto / auto / auto / auto / span 3;
}
/*
...
*/
```
## column-gap/row-gap

  column-gap 和 row-gap 用来设置网格的间隙。 分别用来设置行 或 列的间隔
```css
.box {
  display: grid;
  column-gap: 10px;
  row-gap: 10px;
  /* 或者使用百分比 */
  row-gap: 10%;
  column-gap: 10%;
  column-gap: 2rem;
}
```
<ClientOnly>
  <Css-Grid-Template/>
</ClientOnly>

## justify-items/align-items

  justify-items属性设置单元格内内容的水平位置, align-items属性设置单元格内内容的垂直位置。
```css
.box{
  display: grid;
  justify-items: start | center | end | stretch;
  align-items: start | center | end | stretch;
}
```
  justify-items 和 align-items 可以通过 place-items属性结合写在一起.
```css
.box{
  place-items: <align-items> <justify-items>
}
```

<ClientOnly>
  <Css-Grid-Items/>
</ClientOnly>

## justify-content/align-content

  justify-content 和 align-content 属性是在整个内容区域在容器里面的水平位置 和 垂直位置的对齐方式。
```css
.container {
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly
  align-content: start | end | center | stretch | space-around | space-between | space-evenly 
}
/*
同样,和place-items一样, place-content属性是 align-content和justify-content属性的合并简写形式
*/
.container {
  place-content: <align-content> <justify-content>
}
```

<ClientOnly>
  <Css-Grid-Content/>
</ClientOnly>

## grid-auto-flow

  grid-auto-flow 属性控制着自动布局算法怎样运作, 划分网格以后, 容器的子元素会按照顺序自动放置在每一个网格。
  默认的放置顺序是 先行后列。
```css
.container {
  display: grid;
  grid-auto-flow: row | column | dense | row dense | column dense;
}
/*
dense 关键字指定 自动布局算法使用一种 '稠密' 堆积算法, 如果后面出现了较小的元素, 则去试图去填充网
格中前面留下的空白。可能会导致原来出现的次序被打乱。
*/
```

## grid-column-start

  grid-column-start / grid-column-end / grid-row-start / grid-row-end

  项目的位置是可以指定的, 具体方法就是指定项目的四个边框, 分别定位在哪根网格线

1. grid-column-start属性：左边框所在的垂直网格线
2. grid-column-end属性：右边框所在的垂直网格线
3. grid-row-start属性：上边框所在的水平网格线
4. grid-row-end属性：下边框所在的水平网格线

```css
.item-1{
  grid-column-start: 2;
  grid-column-end: 4;
}
/* 还可以使用span关键字 表示跨域 多少个网格 */
.item-2{
  grid-column-start: span 2;
  grid-row-start: 2;
}
```

<ClientOnly>
  <Css-Grid-Flow/>
</ClientOnly>

## justify-self/align-self

  justify-self 和 align-self 属性设置单元格内容的水平位置 和 justify-items/align-items属性的用法完全一致, 但只作用于单个项目。

```css
.item {
  justify-self: start | end | center | stretch;
  align-self: start | end | center | stretch;
}
```
