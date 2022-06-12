# 浮动

  当一个元素浮动起来之后, 它会被移出正常当文档流, 然后向左或者向右平移, 一直平移到碰到了所处容器的边框。或者碰到
  另外一个浮动的元素。
```css
.box{
  float: left;  /*左浮动*/
  float: right; /*右浮动*/
}
```
## 清除浮动

  如果父元素没有设置高度, 并且子元素 是浮动的情况下, 无法正常撑开父元素的高度。 此时需要清除浮动。
```css
.box{
  border: 1px solid #e8e8e8;
}
.box:after{
  content: '';
  display: block;
  clear: both;  /*同时清除左右浮动*/
}
.box .child{
  width: 100px;
  height: 100px;
  float: left;
  background-color:red;
}
```
<Css-Float/>

## 三栏布局

  两侧宽度固定, 中间自适应。

```css
.container{
  border: 1px solid #e8e8e8;
  height: 300px;
  &:after{
    content: '';
    display: block;
    clear: both;
  }
  .left{
    width:100px;
    background-color:orange;
  }
  .right{
    width: 120px;
    background-color: green;
  }
  .middle{
    width: auto;
    background-color : blue;
  }
  .left,.right,.middle{
    height: 100%;
  }
}
```
<Css-FloatLayout/>

## 文字环绕

  最初引入float属性是为了能够让web开发人员实现简单的布局, 包括在一列文本中浮动的图像, 文字环绕在它的左边 或者 右边。
```css
.container{
  height: 300px;
  border: 1px solid #d9d9d9;
  padding: 5px 10px;
  overflow: auto;
  img{
    margin-right: 10px;
    width: 240px;
    float: left;
  }
  .text{
    margin: 0;
  }
}
```
<Css-FloatText/>

## 首字下沉

```css
p::first-letter {
  font-size: 3em;
  border: 1px solid black;
  background: red;
  float: left;
  padding: 2px;
  margin-right: 4px;
}
```
<Css-FloatSilence/>
