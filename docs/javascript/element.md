# Element

## Element.attributes

  Element.attributes 属性返回该元素所有属性节点的一个实时集合.该集合是一个NamedNodeMap对象。
```html
<div class='name' id='hello' data-id='123' style='color:red;'></div>

<script>
  let oDiv = document.querySelector('.name');
  oDiv.attributes // 返回
  /*
  {
    0: class='name',
    1: id='hello',
    2: data-id='123',
    3: style='color:red;'
  }
  */
</script>
```

<JavaScript-Attribute/>

:::tip
遍历attributes对象,每个attribute也是一个对象, 可以通过attribute.name 和 attribute.value 属性获取属性名和值.
:::

## Element.hasAttribute()

  hasAttribute 返回一个布尔值，指示该元素是否包含有指定的属性（attribute）。

## Element.clientWidth/Element.clientHeight

  内联元素以及没有CSS样式的元素的clientWidth属性值为0. Element.clientWidth属性表示元素的内部宽度。该属性包括
  内边距padding,但不包括边框border,外边距margin和垂直滚动条.
:::tip
该属性值会被四舍五入为一个整数。如果你需要一个小数值，可使用 element.getBoundingClientRect()。
:::
  Element.clientWidth是一个只读属性。

  如果包含滚动条, clientHeight可以通过CSS height + CSS padding - 水平滚动条的高度来计算。

## Element.offsetWidth

  HTMLElement.offsetWidth是一个只读属性,返回一个元素的布局宽度。 offsetWidth是测量包含元素的边框(border)
  水平线上的内边距(padding) 垂直方向滚动条(scrollbar)(如果存在的话),以及CSS设置的宽度(width)的值。

:::tip
这个属性将会四舍五入为一个整数, 如果想要获取一个小数值, 可以使用element.getBoundingClientRect()。
:::

[MDN-Element.offsetHeight](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetWidth)

## Element.scrollHeight

  Element.scrollHeight 是一个只读属性, 返回一个元素内容高度的度量。包含由于溢出导致的视图中不可见的内容。
  (包含元素的padding,但不包含元素的border和margin)。
  同样, 该属性也会对值进行取整。
:::tip
该属性值会被四舍五入为一个整数。如果你需要一个小数值，可使用 element.getBoundingClientRect()。
:::
[MDN-Element.scrollHeight](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollHeight)

```css
.box{
  width:100px;
  height:100px;
  padding:10px;
  margin:5px;
  border:5px;
  box-sizing:border-box;
  overflow:auto;
}
.inner{
  background-color:#98c379;
  width:400px;
  height:400px;
}
```

<JavaScript-BoxSize/>

上面是一个div, 里面包含一个更大的div, 可以分别点击 不同按钮 获取它的尺寸数据。

### 判断元素是否滚动到底

  scrollTop是一个非整数, 而scrollHeight 和 clientHeight 是四舍五入的, 因此确认滚动区域是否滚动到底的
  唯一方法是查看滚动量是否接近某个阀值。
:::tip
  在使用显示比例缩放的系统上, scrollTop可能会提供一个小数。
:::
<JavaScript-ScrollBottom/>
