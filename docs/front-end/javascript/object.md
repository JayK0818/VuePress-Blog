# Object

## 对象初始化

  可以通过new Object() / Object.create()方法，或者使用字面量标记 初始化对象。
```js
const player = {
  name:'kyrie'
}

const player = Object.create(null)

const player = new Object({})
```
## Object.isExtensible()

  判断一个对象是否是可扩展的( 是否可以在 上面添加 **新** 的属性 ), 返回一个布尔值.
```js
const object_1 = {
  player:'kyrie'
}

const object_2 = Object.defineProperty({}, 'player',{
  value:'kyrie'
})

const object3 = Object.defineProperty({}, 'player', {
  value:'lebron',
  configurable:true
})

const object_4 = Object.freeze({player:'durant'})

const object_5 = Object.seal({player:'curry'})
```
  可以分别点击下列按钮,查看创建的对象是否是可以扩展的。

<ClientOnly>
  <JavaScript-Object/>
</ClientOnly>

:::tip
在 ES5 中,如果参数不是一个对象类型,将抛出一个 TypeError 异常。在 ES6 中, non-object 参数将被视为一个不可扩展的普通对象,因此会返回 false。
:::


## Object.freeze()

  Object.freeze()可以冻结一个对象。一个被冻结的对象再也不能被修改。不能添加新的属性,不能删除已有属性。不能修改
  对象已有属性的可枚举性,可配置性,可写性以及不能修改已有属性的值。
  此外,冻结一个对象后该对象的原型也不能修改。 freeze()返回和传入的参数相同的对象。


[Object.isExtensible]('https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible')

[Object.freeze()]('https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze')
