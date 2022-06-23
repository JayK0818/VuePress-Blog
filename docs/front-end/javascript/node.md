# Node

## Node.textContent

  Node 接口的 textContent 属性表示一个节点及其后代的文本内容
    返回一个字符串或者 null
  在节点上设置 textContent属性的话,会删除它的所有的子节点,并替换为一个具有给定值的文本节点。
  1. 如果节点是一个document,则textContent返回null, 如果想获取整个文档的文本,可以使用document.documentElement.textContent
```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Node</title>
  <style>
    body{padding: 0;margin: 0;}
  </style>
</head>
<body>
  <div>hello world</div>
  <script src='./src/text-content.js'></script>
  <script>
    function print(message){
      console.log(message)
    }
    print('hello world')
  </script>
</body>
</html>
```
```js
document.textContent  // null

// 在一段html代码获取的文本为, 包括style和script之间的文本
document.documentElement.textContent
// Node
// body{padding: 0;margin: 0;}
// hello world
```
  2. 在节点设置textContent属性的话,会删除它的所有子节点,并替换为一个具有给定值的文本节点。

### 与innerText的区别

  1. textContent会获取所有元素的内容,包括 script 和 style 元素, 而innerText只展示给人看的元素。
```js
<div class='wrapper'>
  <div style='opacity:0'>opacity:0</div>
  <div>now you can see me</div>
  <div style='visibility:none;'>visibility</div>
  <div style='display:none;'>display:none</div>
</div>
```

  在上面类名为wrapper的div的子元素, 使用textContent和innerText的区别为 innerText无法获取display:none的文本
```js
document.querySelector('.wrapper').textContent
/*
opacity:0
now you can see me
visibility
display:none
*/

document.querySelector('.wrapper').innerText
/*
opacity:0
now you can see me
visibility
*/
```
  2. textContent 会返回节点中的每一个元素。相反,innerText 受 CSS 样式的影响,并且不会返回隐藏元素的文本。
    此外,由于 innerText 受 CSS 样式的影响,它会触发回流（ reflow ）去确保是最新的计算样式。

### 与innerHTML区别

  Element.innerHTML通常返回HTML。但是textContent通常具有更好的性能,因为文本不会被解析为html,此外,使用textContent可以
  防止XSS攻击。

```js
divElement.innerHTML = `<h1>我是新插入的html</h1>`; // 浏览器会解析html
divElement.textContent = `<h1>我是新插入的html</h1>`; // 直接插入标签,不会解析html
```

[MDN-textContent](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/textContent)

##  Node.insertBefore() 

  在参考节点之前插入一个拥有指定父节点的子节点。如果给定的子节点是对文档中现有节点对引用,inertBefore()会将其从当前位置
  移动到新位置。
  1. 如果引用节点为null,则将指定对节点添加到指定父节点的子节点列表的末尾。
  2. 如果给定的子节点是DocumentFragment,那么DocumentFragment的全部内容将被移动到指定父节点的子节点列表中.

  函数返回被插入过的子节点;当newNode是DocumentFragment时,返回空DocumentFragment.

[MDN-Node.insertBefore(newNode,referenceNode)](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/insertBefore)

<ClientOnly>
  <JavaScript-InsertBefore/>
</ClientOnly>

## NodeList

  NodeList对象是节点的集合。通常是由属性, 如Node.childNodes 和 方法 document.querySelectorAll返回的。

  在一些情况下, NodeList是一个实时集合,如果文档节点发生变化,NoList也会随之变化。如Node.childNodes是实时的。
  在其他情况下, NodeList是一个静态集合。也就意味着对文档对象模型的任何改动都不会影响集合的内容。如document.querySelectorAll()

```html
<div id="node-list">
  <span class="text">1</span>
  <span class="text">2</span>
</div>

<script>
  const nodeList = document.querySelector('#node-list')
  const childNodes = nodeList.childNodes

  button.addEventListener('click', function() {
    const span = document.createElement('span')
    span.textContent = [...text].length + 1
    nodeList.appendChild(span)

    console.log(text.length)  // 一直都是2
    console.log(childNodes.length, childNodes)
    // 随着插入元素的增加而增加
  }, false)
</script>
```

### 遍历NodeList

  NodeList.entries() / NodeList.values() / Node.keys() / Node.forEach()

```js
// forEach
text.forEach(text => {
  console.log('each', text)
  // <span class="text">1</span>
  // <span class="text">2</span>
})

// entries
console.log(text.entries())
for(const tag of text.entries()){
  console.log(tag)
}
/*
[0, span.text]
[1, span.text]
*/


// keys
for(const key of text.keys()){
  console.log(key)  // 0 1
}

// values
for(const value of text.values()){
  console.log(value)
  // <span class="text">1</span>
  // <span class="text">2</span>
}
```
  不要尝试使用for...in 来遍历一个NodeList对象中的元素。 此时会把NodeList对象中的length和item属性遍历出来。此外,
  for...in不会保证访问这些属性的顺序。
```js
for(const key in text){
  console.log('key', key)
  /*
  0 ,1 ,entries ,keys ,values ,forEach ,length ,item
  */
}
```
  for...of 循环将会正确的遍历 NodeList对象。
```js
for(const tag of text){
  console.log('tag', tag)
// <span class="text">1</span>
// <span class="text">2</span>
}
```

### 深度遍历DOM数

```html
<div id="node-container">
  <!-- player -->
  <ul>
    <li>kyrie</li>
    <li>lebron</li>
    <li>
      <img src="" alt="">
    </li>
  </ul>
  hello world
</div>
```
```js
function visitNode(n) { // 访问节点信息
  switch(n.nodeType) {
    case n.ELEMENT_NODE:
      console.info('------- element -------', n.nodeName)
      break;
    case n.TEXT_NODE:
      if(n.textContent.trim()){
        console.info('------- text -------', n.textContent)
      }
      break;
    case n.COMMENT_NODE:
      console.info('------- comment------', n.textContent)
      break;
  }
}

// ----- 深度遍历 ----- 
function traverse(root){
  visitNode(root)
  const childNodes = root.childNodes
  if(childNodes.length > 0) {
    childNodes.forEach(n => {
      traverse(n)
    })
  }
}
/*
------- element ------- DIV
------- comment------  player 
------- element ------- UL
------- element ------- LI
------- text ------- kyrie
------- element ------- LI
------- text ------- lebron
------- element ------- LI
------- element ------- IMG
------- text -------  hello world
*/

// 上面的方法使用的是递归, 可以使用while循环改写
/*
同级dom节点, 从数组末尾取出dom元素读取信息, 如果其有子节点, 将子节点
反转 添加进数组。
*/
function traverse(root) {
  const array = [root]
  while(array.length > 0) {
    const node = array.pop()
    if(node == null) break;
    visitNode(node)
    const childNodes = node.childNodes
    if(childNodes && childNodes.length) {
      Array.from(childNodes).reverse().forEach(n => {
        array.push(n)
      })
    }
  }
}
/*
------- element ------- DIV
------- comment------  player 
------- element ------- UL
------- element ------- LI
------- text ------- kyrie
------- element ------- LI
------- text ------- lebron
------- element ------- LI
------- element ------- IMG
------- text -------  hello world
*/ 
```

### 广度遍历DOM数

```js
/*把同一层的所有DOM节点添加进数组,依次遍历,如果有子节点,然后将子节点遍历添加进数组*/
// 从头部取出父节点,如果有子节点然后将子节点依次push进数组
function traverse(root) {
  const array = [root]
  while(array.length > 0) {
    const node = array.shift()
    if(node == null) break;
    visitNode(node)
    if(node.childNodes && node.childNodes.length > 0) {
      node.childNodes.forEach(n => {
        array.push(n)
      })
    }
  }
}
/*
------- element ------- DIV
------- comment------  player 
------- element ------- UL
------- text ------- hello world
------- element ------- LI
------- element ------- LI
------- element ------- LI
------- text ------- kyrie
------- text ------- lebron
------- element ------- IMG
*/
```
