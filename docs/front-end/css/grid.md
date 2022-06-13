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
}
```
## grid-template-areas


<Css-Grid-Template/>
