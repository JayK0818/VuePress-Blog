# CSS属性

## object-fit

  object-fit属性指定元素内容应该如何去适应指定容器的高度与宽度, object-fit一般用于img和video标签。
1. fill 默认, 不保证保持原油的比例, 内容拉伸填充整个内容容器
2. contain 保持原油比例,内容被缩放
3. cover 保持原油比例, 但部分内容可能被裁剪
4. none 

## object-position

  object-position属性一般与object-fit一起使用, 用来设置元素的位置。
```css
.img{
  width: 300px;
  height: 300px;
  object-fit: contain;
  object-position: 50% 50%;
  object-position: right top;
  object-position: left bottom;
  object-position: 250px 125px;
}
```
