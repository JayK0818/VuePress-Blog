# Element

## Element.attributes

  Element.attributes 属性返回该元素所有属性节点的一个实时集合.该集合是一个NamedNodeMap对象。不是Array,没有**Array**的方法。 可以使用
  *for...of*枚举一个元素的所有属性

```html
<div class='name' id='hello' data-id='123' style='color:red;'></div>

<script>
const oDiv = document.querySelector('.name');
oDiv.attributes // 返回
/*
{
  0: class='name',
  1: id='hello',
  2: data-id='123',
  3: style='color:red;'
}
*/

for(const value of Object.values(attribute.attributes)){
  console.log('value:', value)
}
/*
value: class=​"name"
value: id=​"hello"
value: data-id=​"123"
value: style=​"color:​red;​"
*/

for(const [key,value] of Object.entries(attribute.attributes)){
  console.log(key, value)
}
/*
0 class=​"name"
1 id=​"hello"
2 data-id=​"123"
3 style=​"color:​red;​"
*/
</script>
```

<ClientOnly>
  <JavaScript-Attribute/>
</ClientOnly>

:::tip
遍历attributes对象,每个attribute也是一个对象, 可以通过attribute.name 和 attribute.value 属性获取属性名和值.
:::

## Element.children

  Element.children 是一个只读属性,返回一个Node的子*elements*, 是一个动态更新的 HTMLCollection。
```js
const children = nodeReference.children
for (let i = 0; i < children.length; i++) {
  console.log(children[i])
  // 对nodeReference进行操作和更新,都会立即更新children的值
}
```

## Element.classList

  Element.classList是一个只读属性,返回一个元素**class**属性的动态 DOMTokenList**集合。相比将 *element.className*作为空格分隔
  的字符串来使用, *classList*是一种更方便的访问元素的类别。

1. add()
2. remove()
3. replace()
4. toggle()

```js
element.classList.add('hello')
element.classList.add('world')
console.log(element.classList)
// DOMTokenList(2) ['hello', 'world', value: 'hello world']

element.classList.toggle('text')  //因为之前没有text类名
// ['hello', 'world', 'text', value: 'hello world text']

element.classList.toggle('text')
// DOMTokenList(2) ['hello', 'world', value: 'hello world']

element.classList.replace('foo', 'bar') // 将类名foo 替换为 bar

element.className // 'hello world'
```

[MDN-Element.classList](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMTokenList/replace)

## Element.hasAttribute()

  hasAttribute 返回一个布尔值，指示该元素是否包含有指定的属性（attribute）。

## Element.clientWidth / Element.clientHeight

  内联元素以及没有CSS样式的元素的clientWidth属性值为0. Element.clientWidth属性表示元素的内部宽度。该属性包括
  内边距padding,但不包括边框border,外边距margin和垂直滚动条.
:::tip
该属性值会被四舍五入为一个整数。如果你需要一个小数值，可使用 element.getBoundingClientRect()。
:::
  Element.clientWidth是一个只读属性。

  如果包含滚动条, clientHeight可以通过CSS height + CSS padding - 水平滚动条的高度来计算。

## Element.clientLeft / Element.clientTop

  Element.clientTop: 一个元素顶部边框的宽度。不包括顶部外边距或内边距。*clientTop*是只读的。
  Element.clientLeft: 表示一个元素的左边框的宽度, *clientLeft* 不包括左外边距和左内边距。该属性是只读的

:::danger
如果只设置了边框宽度,没有设置边框样式,则返回0
```css
.box {
  border-top-width: 10px;
  border-left-width: 20px;
}
```
```js
box.clientLeft  // 0
box.clientTop   // 0
```
:::

## Element.offsetParent

该属性是一个只读属性,返回一个指向最近的(closest,指包含层级上的最近)包含该元素的定位元素。如果没有定位的元素,则
offsetParent为最近的table table cell 或根元素。当元素的display设置为none,offsetParent返回Null。
  
:::tip	
1. 在weibkit中,如果元素为隐藏的 或者该元素的style.position被设置为fixed,则该属性返回null
2. 在IE9中,如果该元素的style.position被设置为fixed,则该属性返回Null,(display:none)无影响。
:::

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

<ClientOnly>
  <JavaScript-BoxSize/>
</ClientOnly>

上面是一个div, 里面包含一个更大的div, 可以分别点击 不同按钮 获取它的尺寸数据。

### 判断元素是否滚动到底

  scrollTop是一个非整数, 而scrollHeight 和 clientHeight 是四舍五入的, 因此确认滚动区域是否滚动到底的
  唯一方法是查看滚动量是否接近某个阀值。
:::tip
  在使用显示比例缩放的系统上, scrollTop可能会提供一个小数。
:::

<ClientOnly>
  <JavaScript-ScrollBottom/>
</ClientOnly>

## Document

1. 显式地创建一个元素
```js
const div = document.createElement('div')
const comment = document.createComment('注释')
const text = document.createTextNode('文本')
const fragment = document.createDocumentFragment()
```

2. 挂载元素
```js
// 1 append 最后一个子元素之后插入节点
const body = document.querySelector('body')
body.append(document.createTextNode('hello world')) // body的子元素

// 2. before 在节点之前插入元素
const element = document.createElement('div')
document.body.appendChild(element)
element.before(document.createTextNode('你好,世界'))  // text和element同级,text在element前

// 3. prepend 在第一个节点之前插入元素
element.prepend(document.createTextNode('我是前面的元素'))

// 4. after 在节点之后插入元素
element.after(document.createTextNode('hello')) // 和element同级, text在element后

// 5. element.insertAdjacentHTML(position, string)
const insert = document.createElement('div')
document.body.appendChild(insert)

insert.insertAdjacentHTML('afterbegin', '<p>after-begin</p>')
insert.insertAdjacentHTML('afterend', '<p>after-end</p>')
insert.insertAdjacentHTML('beforebegin', '<p>before-begin</p>')
insert.insertAdjacentHTML('beforeend', '<p>before-end</p>')
/*
<p>before-begin</p>
<div>
  <p>after-begin</p>
  <p>before-end</p>
</div>
<p>after-end</p>
*/

// 5. element.insertAdjacentText(position, text)
insert.insertAdjacentText('afterbegin', 'HELLO')
insert.insertAdjacentText('beforeend', 'WORLD')

// 6. element.insertAdjacentElement(position, element)
message.insertAdjacentElement('beforeend', document.createElement('div'))
message.insertAdjacentElement('beforebegin', document.createTextNode('hello')) // 报错,不是一个element
```
3. 删除元素
```js
// 把对象从所属的DOM树中删除
const message = document.createElement('div')
message.textContent = 'hello world, 你好世界';
document.body.appendChild(message)
message.remove()
```
4. outerHTML

  element DOM接口的outerHTML属性获取描述元素的序列化HTML片段。也可以设置为指定字符串解析的节点替换元素。
```js
const content = document.body.outerHTML
element.outerHTML = "<p>This paragraph replaced the original div.</p>";
/*
element不再是文档树的一部分,新段替换了它(不在页面中显示, 但是仍然在内存中)
*/
```

## MutationObserver

  MutationObserver接口提供了监视对DOM树所做更改的能力。该功能是DOM3 Events规范的一部分。

```js
// 一个DEMO
const targetNode = document.querySelector('.mutation-container')
const observer_button = document.querySelector('.mutation-observer-button')

const observer = new MutationObserver(function(mutationList, observer) {
  // observer是一个微任务
  setTimeout(() => {
    console.log('我执行了')
  }, 0)
  for(const mutation of mutationList) {
    console.log('mutation:', mutation)
  }
})
observer.observe(targetNode, {
  attributes: true, // 属性变化
  childList: true,  // 子节点变化
  subtree: true     // 后代节点变化
})

observer_button.addEventListener('click', () => {
  targetNode.style.color = 'red'
  targetNode.setAttribute('data-id', Math.random().toString().substring(0, 6))
  /*
  {
    attributeName: 'style',
    type: 'attributes',
    oldValue: ''
  }
  */ 
  const element = document.createElement('img')
  targetNode.appendChild(element) /*
    {
      attributeName: null,
      type: 'childList'
    }
  */
}, false)
```
  MutationObserver的disconnect()方法停止观察对象,可以通过调用observe()方法重用观察者。
```js
observer.disconnect();
```

[MDN-MutationObserver]('https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver')
