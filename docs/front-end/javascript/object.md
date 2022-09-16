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
## Object.seal

  Object.seal()方法封闭一个对象,阻止添加新属性并将现在所有属性标记为不可配置。当前属性的值 只要原来是可写的就可以改变。

```js
const kyrie = Object.seal({
  firstName: 'kyrie',
  lastName: 'irving'
})
// ----- 无法添加新的属性 -----
kyrie.age = 30
console.log(kyrie)
/*
kyrie:  {firstName: 'kyrie', lastName: 'irving'}
irving: {firstName: 'kyrie', lastName: 'irving', age: 30}
*/

console.log(Object.getOwnPropertyDescriptors(kyrie))
/*
{
  firstName: {
    configurable: false
    enumerable: true
    value: "kyrie"
    writable: true
  }
  lastName: {
    configurable: false
    enumerable: true
    value: "irving"
    writable: true
  }
}
*/
// 无法删除属性
delete kyrie.firstName
console.log(kyrie) /* {firstName: 'kyrie', lastName: 'irving'} */

// 之前的属性可以修改
kyrie.firstName = 'Kyrie'
kyrie.lastName = 'Irving'
console.log(kyrie)  // {firstName: 'Kyrie', lastName: 'Irving'}

// Cannot define property age, object is not extensible
Object.defineProperty(kyrie, 'age', {
  value: 30
})


const lebron = {}
Object.defineProperty(lebron, 'firstName', {
  value: 'lebron',
  configurable: true,
  writable: false,
  enumerable: true
})
Object.defineProperty(lebron, 'lastName', {
  value: 'james',
  configurable: true,
  writable: true,
  enumerable: true
})

Object.seal(lebron)

lebron.firstName = 'Lebron'
lebron.lastName = 'James'
// 因为 firstName 原来是不可写的
console.log(lebron) // {firstName: 'lebron', lastName: 'James'}
```

## Object.freeze

  Object.freeze()可以冻结一个对象。一个被冻结的对象再也不能被修改。不能添加新的属性,不能删除已有属性。不能修改
  对象已有属性的可枚举性,可配置性,可写性以及不能修改已有属性的值。
  此外,冻结一个对象后该对象的原型也不能修改。 freeze()返回和传入的参数相同的对象。
```js
const player = Object.freeze({
  firstName: 'lebron',
  lastName: 'james',
  age: {
    last_year: 37,
    this_year: 38
  }
})

player.firstName = 'lebron'
player.age = 38
delete player.lastName
console.log(player)   // {firstName: 'lebron', lastName: 'james'}

Object.defineProperty(player, 'firstName', {  // Cannot redefine property: firstName
  configurable: false,
  writable: false,
  enumerable: false,
  value: 'Lebron'
})

 // 如果一个属性值是对象, 则这个对象中的属性是可以修改的
player.age.last_year = 38,
player.age.this_year = 39
console.log(player)
/*
{
  age: {
    last_year: 38,
    this_year: 39
  },
  firstName: "lebron"
  lastName: "james"
}
*/
```

[Object.isExtensible](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible)

[Object.freeze()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)

## Object.isExtensible

  判断一个对象是否是可扩展的( 是否可以在 上面添加 **新** 的属性 ), 返回一个布尔值.
```js
const object_1 = { // true
  player:'kyrie'  
}
const object_2 = Object.defineProperty({}, 'player',{ // true
  value:'kyrie'
})
const object3 = Object.defineProperty({}, 'player', { // true
  value:'lebron',
  configurable:true
})
const object_4 = Object.freeze({player:'durant'}) // false
const object_5 = Object.seal({player:'curry'})  // false
```

:::tip
在 ES5 中,如果参数不是一个对象类型,将抛出一个 TypeError 异常。在 ES6 中, non-object 参数将被视为一个不可扩展的普通对象,因此会返回 false。
:::

## Object.prototype.toString

  toString() 方法返回一个表示该对象的字符串。

  可以通过使用toString() 方法来获取每个对象的类型。返回内部属性[[Class]]的值
```js
const toString = Object.prototype.toString
toString.call(new Date); // [object Date]
toString.call(new String); // [object String]
toString.call(Math); // [object Math]

//Since JavaScript 1.8.5
toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]
```
  Symbol.toStringTag 是一个内置的symbol, 它通常作为对象的属性键使用, 对应的属性值应该为字符串类型。这个字符串用来表示该对象的
  自定义类型标签。通常只有内置的Object.prototype.toString() 方法会读取这个标签
```js
const obj = {
  firstName: 'hello',
  [Symbol.toStringTag]: 'world'
}
console.log(Object.prototype.toString.call(obj))  // [object world]
```

## Object.setPrototypeOf

  Object.setPrototypeOf() 方法设置一个指定的对象的圆形到另一个对象或 null
```js
Object.setPrototypeOf(object, prototype)
```
  如果prototype参数是 数字 字符串 布尔值 或者undefined等, 则什么都不做, 否则该方法将object的[[Prototype]] 修改为新的值

```js
const a = {
  name: 'hello',
}
const b = {
  getName(){
    return this.name
  }
}
Object.setPrototypeOf(a, b)
console.log(a.getName())  // hello
console.log(Object.getPrototypeOf(a) === b) // true


const z = { a: 3, b: 4}
z.__proto__.c = 5
console.log('z', z) // {a: 3, b: 4}
const { ...m} = z;
console.log(m)  // {a: 3, b: 4}

const { a, b, c } = z;
console.log(a, b, c)  // 3 4 5
```
```js
Object.prototype.setPrototypeOf(object, prototype) {
  if(object.__proto__) {
    object.__proto__ = prototype
  } else {
    const Fn = function() {
      for(const key in object) {
        Object.defineProperty(this, key, {
          value: obj[key]
        })
      }
    }
    Fn.prototype = prototype
    return new Fn()
  }
}
```

## Object.getPrototypeOf

  Object.getPrototypeOf 方法返回指定对象的原型。
```js
const obj = Object.create(null)
console.log(Object.getPrototypeOf(obj)) // null


function Player(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
const player = new Player('kyrie', 'irving')

const object = {};
object.__proto__ = player;
console.log(Object.getPrototypeOf(object))  // Player{ firstName: "kyrie", lastName: "irving"}


console.log(Object.getPrototypeOf(Object))    // ƒ () { [native code] }
console.log(Object.getPrototypeOf(Function))  // f () { [native code] }
console.log(Object.getPrototypeOf(Object) === Function.prototype) // true
```

## Object.prototype.valueOf

  valueOf() 方法返回指定对象的原始值。
  默认情况下, valueOf()方法由 Object后面的每个对象继承, 每个内置的核心对象都会覆盖此方法以返回适当的值。如果对象没有原始值,则
  valueOf将返回本身。
| 对象 | 返回值 |
| --- | --- |
| Array | 返回数组对象本身 |
| Boolean | 布尔值 |
| Date | 自1970年1月1日 午夜开始计的毫秒数 |
| Function | 函数本身 |
| Number | 数字值 |
| Object | 对象本身 |
| String | 字符串值 |

```js
const array = [1, 2, 3], boolean = false;
const date = new Date()
const fn = function() {}
const number = 123
const string = '123'
const object = {msg: 'hello world'}

console.log(array.valueOf(), array.valueOf() === array) // [1, 2, 3]  true
console.log(boolean.valueOf(), boolean.valueOf() === boolean) // false true
console.log(date.valueOf()) // 1656855031156
console.log(fn.valueOf(), fn.valueOf() === fn)  // ƒ () {} true
console.log(number.valueOf(), number.valueOf() === number)  // 123 true
console.log(string.valueOf(), string.valueOf() === string)  // 123 true
console.log(object.valueOf(), object.valueOf() === object)  // {msg: 'hello world'} true
```
```js
const objA = {property: 'ObjectA'}
const objB = {property: 'ObjectB'}

const o = {
  [objA]: 'hello',
  [objB]: 'world'
}
console.log(o)
/*
{
  [object Object]: "world"
}
*/


const objA = {property: 'ObjectA', valueOf() {return 'hello'}}
const objB = {property: 'ObjectB', toString() {return 'world'}}

const o = {
  [objA]: 'hello',
  [objB]: 'world'
}
console.log(o)
/*
{
[object Object]: "hello"
world: "world"
}
*/
```

## 对象的属性

```js
// 常规属性
const a = {}
a.b = 'hello'
a.a = 'world'
a.d = '你好'
a.c = '世界'

for(const key in a) {
  console.log(key)  // b a d c
}

for(const key of Object.keys(a)) {
  console.log(key)  // b a d c
}


// 排序属性, 遍历时按照索引升序
const c = {}
c[1] = 'hello'
c[0] = 'world'
c[3] = '你好'
c[2] = '世界'
for(const key of Object.keys(c)) {
  console.log(key) // 0 1 2 3
}

// 如果对象属性是字符串数字, 依然按照顺序输出
const d = {}
d['1'] = 'hello'
d['0'] = 'world'
d['3'] = '你好'
d['2'] = '世界'
for(const key of Object.keys(d)) {
  console.log('d-key', key) // 0 1 2 3
}

// 如果排序属性和常规属性都有的话
const e = {
  a: 'h',
  c: 'e',
  b: 'l',
  2: 'l',
  1: 'o',
  0: 'w'
}
for(const key of Object.keys(e)) {
  console.log('e-key', key)
  // 0 1 2 a c b
}
```
  对象拥有两个隐藏属性 elements 和 properties, 数字属性会被放到elements属性中,被称为排序属性。在elements对象中,会按照属性值数字大小排序。
  字符串属性被称为常规属性, 在properties中会按照创建属性的先后顺序保存。
  
## 遍历


| 方法名 | 普通属性 | 不可枚举属性 | Symbol属性 | 原型属性 |
| --- | --- | --- | --- | --- |
| for...in | :ok_hand: | :x: |  :x:| :ok_hand: |
| Object.getOwnPropertyNames | :ok_hand: | :ok_hand: | :x: | :x: |
| Object.getOwnPropertySymbols | :x: | :ok_hand: | :ok_hand: | :x: |
| Object.keys | :ok_hand: | :x: | :x: | :x: |
| Reflect.ownKeys | :ok_hand: | :ok_hand: | :ok_hand:| :x: |

```js
// 遍历object的属性(普通属性/不可枚举属性/原型属性/Symbol属性/静态属性)
const object = {
  firstName: 'kyrie',
  [Symbol('lastName')]: 'irving'
}
Object.defineProperty(object, 'age', {
  value: 30,
  enumerable: false,
  writable: true,
  configurable: true
})
object.__proto__.skill = 'crossover'
console.log('player', object)

for(const key in object) {
  console.log('for---in', key)  // firstName, skill (原型和普通属性)
}
for(const key of Object.keys(object)) {
  console.log('Object.key---', key) // firstName (普通属性)
}
console.log(Object.getOwnPropertyNames(object)) // ['firstName', 'age'] (普通属性和不可枚举属性)
console.log(Object.getOwnPropertySymbols(object)) // [Symbol(lastName)] (Symbol属性)

console.log(Reflect.ownKeys(object))  
//['firstName', 'lastName', 'age', Symbol(fullName)] (普通属性/不可枚举属性/Symbol属性)
```
