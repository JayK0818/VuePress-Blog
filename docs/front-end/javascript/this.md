# This

  this是在函数被调用时发生对绑定,它指向什么完全取决于函数在哪里被调用。
  误区：把this理解成指向函数自身
```js
function foo(number){
  console.log('foo------', number)
  this.count += 1;
}
foo.count = 0;
for(let i = 0; i < 3; i++){
  foo(i)
}
console.log(foo.count)  // 0
```


## 默认绑定
```js
function foo() {
  console.log(this.a)
}
var a = 2;
foo() // 2
```
:::tip
如果使用严格模式,那么全局对象将无法使用默认绑定。this会绑定到undefined.
:::

## 隐式绑定

```js
function foo() {
  console.log(this.a)
}
const object = {
  a: 2,
  foo
}
obj.foo() // 2
```

  对象属性引用链中只有最后一层影响调用位置。
```js
function foo() {
  console.log(this.a)
}
const object2 = {
  a: 100,
  foo
}
const object1 = {
  a: 2,
  object2
}

object2.object1.foo() // 2
object1.object2.foo() // 100
```

### 隐式丢失

  一个最常见的this绑定问题就是隐式绑定的函数会丢失绑定对象。从而把this绑定到全局对象或者undefined上。
```js
function foo() {
  console.log(this.a)
}
const object = {
  a: 2,
  foo
}
const baz = object.foo;
var a = 'oops global';
baz() // oops global



// ------------ 参数传递也是一个隐式赋值 ----------
function foo() {
  console.log(this.a)
}
function doFoo(fn) {
  fn()
}
const object = {
  a: 2,
  foo
}
var a = 'oops global';
doFoo(object.foo) // oops global


// --------- 给内置函数 传递 函数也会丢失 this ---------
function foo() {
  console.log(this.z)
}
const object = {
  z:100,
  foo
}
var z = 'oops global';
setTimeout(object.foo, 100) // oops global
```

## 硬绑定

```js
//-------------- 显示绑定 -------------
function foo() {
  console.log(this.a)
}

const object = {
  a: 3
}
foo.call(object)  // 3
```
:::tip
如果传入了一个原始值(字符串类型,布尔值类型或者数字类型)来当作this的绑定对象, 这个原始值会被转换为
它的对象形式。这通常被称为 '装箱'。
:::
```js
function fn() {
  console.log('this:', this)  // Number {1}
}

const f = fn.bind(1).bind(2)
f()
```

```js
// bind修改this绑定
function f1(something) {
  console.log(this.a, something)  // 3 6
  return this.a + something;
}
const o = {
  a: 3
}
const bind_f1 = f1.bind(o, 6)
console.log(bind_f1())  // 9
```

## new绑定

```js
function Foo(a) {
  this.a = a;
}
const bar = new Foo(2)
console.log(bar.a)
```

```js
function m1() {
  console.log('this-m1-a:', this.a) // 10
}
var a = 10;
m1.call(null)
```
:::tip
第一个参数为null的时候 还是会绑定到全局
:::

### Demo

```js
// demo-1
function fn(){
  return {
    b:() => {
      console.log(this)
    }
  }
}

fn().b()                  // window
fn.b.bind(1)()            // window
fn.bind(2)().b.bind(3)()  // Number {2}



// demo-2
function foo() {
  console.log(this.a) // 2
}
var a = 2;
(function() {
  'use strict'
  foo()
})()

// demo-3
function foo() {
  'use strict'
  console.log(this.a)
  /* Cannot read properties of undefined (reading 'a') at foo*/
}
var a = 2;
(function() {
  foo()
})()

// demo - 4
var name = 'the window';
var object = {
  name: 'my object',
  getName: function() {
    return this.name;
  }
}
object.getName()  // 'my object'

(object.getName)()  // 'my object'
// 丢失this指向
(object.getName = object.getName)() // the window
(object.getName, object.getName)()  // the window


// demo - 5
var x = 3;
const obj1 = {
  x: 1,
  getX: function() {
    var x = 5;
    return function() {
      return this.x;
    }()
  }
}
console.log(obj1.getX())  // 3


// demo - 6
function a(x) {
  this.x = x;
  return this;
}
var x = a(5)
var y = a(6)
console.log(x.x, y.x) // undefined 6
/*
以上代码等价于:
window.x = 5
window.x = window

window.x = 6
window.y = window
*/ 
```

### 优先级

  默认绑定的优先级是最低的。
```js
// 隐式绑定和 硬绑定优先级: 硬绑定优先级更高
function f2() {
  console.log(this._a)
}
const o1 = {
  _a: 10,
  f2
}
const o2 = {
  _a: 20,
  f2
}
o1.f2()   // 10
o2.f2()   // 20

o1.f2.call(o2)  // 20
o2.f2.call(o1)  // 10
```
```js
// 隐式绑定和new绑定 new绑定优先级更高
function foo(something) {
  this.a = something;
}
const obj1 = {
  foo:foo
}

const obj2 = {}
obj1.foo(2)
console.log(obj1.a) // 2

obj1.foo.call(obj2, 3)
console.log(obj2.a) // 3

const bar = new obj1.foo(4)
console.log(obj1.a) // 2
console.log(bar.a)  // 4
```
## bind

  bind()方法创建一个新的函数, 在bind()被调用时, 这个新函数的this被指定为bind()的第一个参数,
  而其余参数将作为新函数的参数, 供调用时使用。

```js
const module = {
  x: 42,
  getX: function(){
    return this.x
  }
}
const bindGetX = m2.module.bind({x: 50})
console.log(bindGetX()) // 50
```

[bind-MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

### 偏函数

  bind()的一个最简单的用户是使一个函数拥有预设的初始参数.只要将这些参数 作为bind()的参数写在this后面, 当绑定函数
  被调用时, 这些参数会被插入到目标函数的参数列表的开始位置。

```js
function list() {
  return Array.prototype.slice.call(arguments)
}
const leadingSeven = list.bind(null, 12) // 创建一个函数,它拥有预设的第一个参数
console.log(leadingSeven(1,2,3))  // 12 1 2 3
```

### 配合setTimeout

  默认情况下, 使用window.setTimeout()时，this关键字会指向window对象。
  
```js
function Player(name) {
  this.firstName = name
}
Player.prototype.say = function(){
  console.log(this,this.firstName)
}
/* Player.prototype.invoke = function(){
  window.setTimeout(this.say, 1000) // 输出undefined
} */
// ------ 可以使用箭头函数 --------
/* Player.prototype.invoke = function(){
  window.setTimeout(() => {
    this.say()
  },1000)
} */
// ------- 使用bind解决 ---------
Player.prototype.invoke = function(){
  window.setTimeout(this.say.bind(this), 1000)
}
const kyrie = new Player('kyrie')
kyrie.invoke()
```
### 手写bind

```js
Function.prototype.myBind = function(context, ...args) {
  const self = this
  return function(...arguments) {
    const newArguments = [...args,...arguments]
    return self.apply(context, ...newArguments)
  }
}
// ------ 测试 ------
function list() {
  return Array.prototype.slice.call(arguments)
}
const myList = list.bind(null, 30)
console.log(myList(1,2,4))  // [30, 1, 2, 4]

// 求和
function sum(a, b, c) {
  return a + b + c
}
const s1 = sum.bind(null ,10)
console.log(s1(20, 30)) // 60
console.log(s1(30,40))  // 80
```

## apply

  apply() 方法调用一个具有给定this值的函数, 以及一个数组的形式提供的参数。

```js
// demo
const numbers = [1,2,3,4,5]
const max = Math.max.apply(null, numbers)
console.log(max)  // 5

const min = Math.min.apply(null, numbers)
console.log(min)  // 1

// 如果不使用apply
let max = -Infinity, min = Infinity;
numbers.forEach(item => {
  if(item > max) {
    max = item
  }
  if(item < min) {
    min = item
  }
})
console.log(max, min) // 5  1
```
### 手写apply

```js
Function.prototype.myApply = function(context, args) {
  if(context === null || context === undefined) context = globalThis
  if(! typeof context !== 'object') context = Object(context)
  const fnKey = Symbol()  // 防止属性名称被覆盖
  context[fnKey] = this
  const result = context[fnKey](...args)
  delete context[fnKey]
  return result
}

console.log(Math.min.myApply(null, numbers))  // 1
console.log(Math.max.myApply(null, numbers))  // 5
```
