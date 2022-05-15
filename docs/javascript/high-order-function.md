# 高阶函数

## Pure Function

  函数输出的结果取决于传入的参数,不会产生副作用,相同的输入会有相同的输出。
```js
function sum(x,y){
  return x + y;
}
// 上面的函数就是一个纯函数,每次输入相同的值都会返回相同的结果
sum(3,4)  // 7
sum(3,4)  // 7
```
  副作用指使外部环境发生了可观察的变化
```js
const bag = {price: 40}

function m1(obj,count){
  return obj.price * count;
}
function m2(obj,count){ 
  obj.price = 50; // 修改了bag对象的属性,不是一个纯函数
  return obj.price * count
}
console.log(m1(bag,10)) // 400
console.log(m2(bag,10));  // 500
```

### 纯函数的优势

  可以缓存结果:当一个函数的计算非常耗时,如果某个计算结果需要多次使用,那么可以将计算结果缓存,当需要的时候
  从缓存中读取数据即可。
```js
// 以求圆的面积为例: 不使用缓存
function getArea(r){
  console.log('r:', r);
  return Math.PI * r * r;
}
console.log(getArea(4));
console.log(getArea(4));
/* 因为计算结果没有缓存计算结果, 以上调用会依次输出
  r: 4
  50.26548245743669
  r: 4
  50.26548245743669
*/
```
  下面实现一个缓存函数,该缓存函数是一个高阶函数,将输输入的键名为输入的参数(因为相同的输入会有相同的输出),计算结果作为键值。
```js
function memorize(fun) {
  const cache = Object.create(null); // 存储计算结果的对象
  return function() {
    const key = JSON.stringify([...arguments])
    cache[key] = cache[key] || fun.apply(null,[...arguments])
    return cache[key]
  }
}
const f = memorize(getArea)
console.log(f(4))
console.log(f(4))
/* 输出结果为, 只执行了一次计算的过程
r: 4
50.26548245743669
50.26548245743669
*/
```

## Function Currying

  函数柯里化(currying) 是把接收多个参数的函数 转换为接收一个单一参数(通常这个参数不变)的函数,并返回接收剩余参数的函数。
  (将接收n个参数的函数变成只接收1个参数的函数)

  比如计算一个数的平方 或者计算 三次方
```js
Math.pow(5,2)
Math.pow(6,2) 
// 每次都要书写Math.pow 和 第二个参数 2, 这里可以认为是重复的书写代码

function getPower(x) { // 将上面的函数进行改造
  return function(y){
    return Math.pow(y,x)
  }
}
const pow2 = getPower(2)  // 计算二次方
const pow3 = getPower(3)  // 计算三次方

console.log(pow2(5))  // 25
console.log(pow2(6))  // 36
console.log(pow3(10)) // 1000
```
```ts
// --------- 获取值的准确类型 --------
const s = '123'
const n = 123
const b = true
const f = () => {}
const r = /\d+/g;
const d = new Date()
const u = undefined
const n1 = null
const s1 = Symbol('foo')
const s2 = new Set()
const m = new Map()
const o = {a:1}
const a = [1,2,3]

typeof s  // string
typeof n  // number
typeof b  // boolean
typeof f  // function
typeof r  // object
typeof d  // object
typeof u  // undefined
typeof n1 // object
typeof s1 // symbol
typeof o  // object
typeof a  // object
typeof s2 // object
typeof m  // object

// typeof判断值的类型有缺陷, 只能判断值类型， 其他就是 function / object

function getType(data:any): string { // [object ]
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase()
}
getType(s) // string
getType(n) // number
getType(b) // boolean
getType(f) // function
getType(r) // regexp
getType(d) // date
getType(u) // undefined
getType(n1)  // null
getType(s1)  // symbol
getType(o) // object
getType(a) // array
getType(s2)  // set
getType(m) // map

// --------- 利用函数柯里化, 判断某个值是不是指定的类型 ---------
function isType(type: string):(data: any) => boolean {
  return function(object) {
    return Object.prototype.toString.call(object) === `[object ${type}]`
  }
}
const isString = isType('String')
console.log(isString('123'))  // true
console.log(isString(123))    // false
```

  下面实现一个柯里化的封装函数
```js
function add(a,b,c,d){
  return a + b + c + d
}
function curry(fun){
  return function(...args) {
    return function(){
      const arr = [...args,...arguments]
      return fun.apply(null,[...arr])
    }
  }
}
const c_add = curry(add)
c_add(1,2)(3,4)  // 10
c_add(1,2,3)(4) // 10
c_add(1)(2,3,4)  // 10
```
  首先获取一部分参数,然后通过将剩余参数收集起来合并,一起传递给被柯里化的函数作为参数。上面的封装在有些情况下可以解决一部分问题。
  但是只能多扩展一个参数, curry(a)(b)(c) 这样多调用就不支持了。所以对上面的封装做一层改进:
```js
function sum(a,b,c,d){
  return a + b + c + d
}

function curry(fun) {  
  // fun为传递的参数, fun.length为函数的参数个数, ...args为返回的函数接收的参数
  return function curriedFun(...args) {
    // 如果被柯里化的函数的参数个数大于第一次接收的参数个数,则还需要接收剩下的参数
    if(args.length < fun.length) { 
      return function() { // ...arguments接收剩下的参数
        // 将所有参数合并 接着传递给curriedFun,再次判断所有参数是否与被柯里化的函数的参数个数相等
        const arr = [...args,...arguments]  
        return curriedFun(...arr)
      }
    }
    return fun(...args)
  }
}
const add = curry(sum);
add(1)(2)(3)(4) // 10
add(1,2)(3,4) // 10
add(1)(2)(3,4)  // 10
add(1,2,3,4)  // 10


// ------ 另一种收集函数参数的方法 --------
function curry(fn) {
  const argsLength = fn.length
  let args = []
  return function f1() {
    args = [...args, ...arguments]
    if(args.length < argsLength) {
      return f1
    }
    return fn.apply(this, ...args)
  }
}
const s = curry(sum)
console.log(s(1)(2)(3)(4))  // 10
console.log(s(1,2)(3,4))   // 10
console.log(s(1,2,3)(4))   // 10
```
:::tip
Function.length 指明函数的行参个数, 不包括rest参数
:::
```js
(function foo(a){}).length      // 1
(function foo(a,...b){}).length // 1
```
## Compose Function

  函数柯里化很容易写出洋葱型代码 如 f(g(h(v)),而组合函数可以让我们把细粒度的函数重新组合生成一个新的函数并完成参数的传递.
```js
const fn = compose(f1,f2,f3,f4)
fn(123)
```
  下面的例子 通过函数组合的方式实现一个返回数组的最后一个元素 
::: tip
(实现这个需求很简单:disappointed: 这里只是为了展示组合函数的实现。思路是 先反转数组,然后取数组的第一个元素即可)
:::
```js
function reverse(array){
  return array.reverse()
}
function first(array){
  return array[0]
}

function compose(f,g){  // 组合函数,参数里的函数从右往左执行
  return function(array) {
    return f(g(array))
  }
}

const find = compose(first,reverse)
find([1,2,3,4,5]);  // 5
```
  上面虽然实现了 一个简单的函数组合封装,但和函数柯里化一开始的实现方式一样有一点缺陷,就是只能传递两个函数作为参数。无法
  传递多个。下面的封装作为改进,可以接收多个 函数参数
```js
function compose(...args){
  let check = args.every(fn => typeof fn === 'function')
  if(!check) {
    throw new Error('arguments expected function')
  }
  return function(value) {//要处理的数据,默认从右往左执行,然后将执行结果传递给前一个函数
    return args.reverse.reduce((acc,fn) => fn(acc), value)
  }
}
// 再次执行上面的函数
const last = compose(first,reverse)
last([1,2,3,4,5]) // 5
```

