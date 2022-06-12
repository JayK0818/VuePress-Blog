# 水平垂直居中

## 文本居中

  单行文本水平垂直居中 可以通过设置 text-align 和line-height 属性实现
```css
.box{
  text-align: center;
  line-height: 100px; /*父容器高度*/
}
```

  如果是多行文本, 可以通过设置 display:table-cell; 或者 display: flex; 实现
```css
/* 多行文本水平垂直居中 */
.box{
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}

/* display: flex; */
.box{
  display: flex;
  align-items: center;  /*垂直方向居中*/
  text-align: center;
}
```
## 块元素居中

```css
/* 利用display */
.parent{
  display: flex;
  align-items: center;
  justify-content: center;
}


/* 利用display:flex 和子元素设置为auto */
.parent{
  display: flex;
}
.child{
  margin: auto;
}


/* 利用绝对定位和相对定位 */
/* 第一种方式 */
.parent{
  position:relative;
}
.child{
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}


/* 第二种方式 */
.parent{
  position: relative;
}
.child{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
```

  下面是使用上述四种方式 设置子元素 水平垂直居中。

<Css-Center/>

