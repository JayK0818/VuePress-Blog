# 代码片段

## Object.defineProperty()

  Object.defineProperty()方法会直接在一个对象上定义一个新属性,或者修改一个对象的现有属性,并返回此对象。
```js
function Archiver() {
  let temperature = null;
  var archive = []
  Object.defineProperty(this, 'temperature', {
    get:function() {
      return temperature
    },
    set:function(value) {
      temperature = value;
      archive.push({value:temperature})
    }
  })
  this.getArchive = function() {
    return archive
  }
}
const arc = new Archiver()
arc.temperature = 11
console.log(arc.temperature)  // 11
arc.temperature = 12;
arc.temperature = 13;
console.log(arc.getArchive());
/*
[{value: 11},{value: 12},{value: 13}]
*/
```
## isNative(Ctor)

  判断浏览器对某些原生方法对支持情况。如Proxy, Promise, Map, Symbol等。
```js
function isNative(Ctor){
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

//--------------------------
isNative(Object)   // true
isNative(String)   // true
isNative(Number)   // true
isNative(Proxy)    // true
isNative(Promise)  // true
isNative(Date)     // true
isNative(Function) // true
isNative(Boolean)  // true
isNative(Symbol)   // true
Object.toString(), typeof Object.toString()  
// function Object() { [native code] } string

Symbol.toString(), typeof Symbol.toString()  
// function Symbol() { [native code] } string
```

## 千分位转化数字

```ts
// ---- 使用数组的reduce 或者 forEach 遍历方法 ----
function format(money: number): number | string {
  const arr = (money+'').split('.')
  const int = arr[0]
  const decimal = arr[1] || ''
  int.split('').reverse().reduce((prev, next, i) => {
    if(i !== 0 && i % 3 === 0) {
      return next + ',' + prev
    } else {
      return next + prev
    }
  })
  return decimal ? (number_string + '.' + decimal) : number_string
}
const number = 1234567;
console.log(format(number)) // 1,234,567

function format(number) {
  const arr = (number+'').split('.')
  const int = arr[0]
  const decimal = arr[1] || ''
  let number_string = ''
  int.split('').reverse().forEach((n, i) => {
    if(i !== 0 && i % 3 === 0) {
      number_string = n + ',' + number_string
    } else {
      number_string = n + number_string
    }
  })
  return decimal ? (number_string + '.' + decimal) : number_string
}

// --- 使用字符串的方法 -----
function format(money: number | string) {
  const arr = (money+'').split('.')
  const int = arr[0]
  const decimal = arr[1] || ''
  let number_string = ''
  for(let i = int.length-1; i >= 0; i--) {
    const j = int.length - i - 1
    if(j !== 0 && j % 3 == 0) {
      number_string = int[i] + ',' + number_string
    } else {
      number_string = int[i] + number_string
    }
  }
  return decimal ? (number_string + '.' + decimal) : number_string
}
const number = 1234567678
console.log(format(number)) // 1,234,567,678
```

## 判断对象是否具有属性

### in运算符

```js
const player = {firstName: 'kyrie', lastName: 'irving'}
console.log('firstName' in player)  // true
console.log('age' in player)        // false

// in运算符也可以访问对象原型上的属性
console.log( 'toString' in player)  // true
```
### Reflect.has()

  语法: Reflect.has(object, property)
```js
console.log(Reflect.has(player, 'firstName')) // true
console.log(Reflect.has(player, 'age'))       // false
```

### hasOwnProperty

  语法: object.hasOwnProperty(property)
```js
console.log(player.hasOwnProperty('firstName')) // true
console.log(player.hasOwnProperty('age'))       // false
```
  这个写法会有一个缺点, 就是如果对象是使用Object.create(null)创建的话, 直接在对象上调用这个方法会报错
```js
const player = Object.create(null, {
  firstName: {
    value: 'kyrie',
    writable: true,
    enumerable: true,
    configurable: true
  },
  lastName: {
    value: 'irving',
    writable: true,
    enumerable: true,
    configurable: true
  }
})
//  player.hasOwnProperty is not a function  报错

// Object.prototype.hasOwnProperty.call(obj, property) 可以这么调用
console.log(Object.prototype.hasOwnProperty.call(player, 'firstName'))  // true
```
### Object.hasOwn

  ES2022中一个新的方法, 如果对象中存在某个执行属性则返回true, 如果不存在 或者出现出现在原型上 则返回false.
```js
console.log(Object.hasOwn(player, 'firstName')) // true
console.log(Object.hasOwn(player, 'age'))  // false
```

## NaN

```js
console.log(typeof NaN)   // number
Object.getOwnPropertyDescriptor(window, 'NaN')

console.log(NaN === NaN)  // false
console.log(Object.getOwnPropertyDescriptor(window, 'NaN'))
/*
{
  configurable: false
  enumerable: false
  value: NaN
  writable: false
}
*/

// Number.isNaN() 是ES6 新增的方法
console.log(Object.getOwnPropertyDescriptor(Number, 'NaN'))
/*
{
  configurable: false
  enumerable: false
  value: NaN
  writable: false
}
*/

// -------- 判断是否为NaN ----------
function isNaN(number) {
  return typeof number === 'number' && number !== number
}
function isNaN(number) {
  
}
```

## 数组

### Array.from

```js
// 将length 转换为 合法的值
function ToIntegerInfinity(number) {
  if(typeof number === 'number' || typeof number === 'string') {
    const n = Number(number)
    if(Number.isNaN(n)) return 0
    if(!Number.isFinite(n)) return 0
    return n > 0 ? n : -n
  }
  return 0
}

function myArrayFrom(arg, callback, thisArg) {
  if(typeof arg === null) return []
  if(typeof arg !== 'object') return []
  if(callback && typeof callback !== 'function') {
    throw new Error('callback must be a function')
  }
  const length = Array.isArray(arg) ? arg.length : ToIntegerInfinity(arg.length)
  const temp = []
  for(let i = 0; i < length; i++) {
    const item = arg[i]
    if(callback) {
      temp[i] = typeof thisArg === 'undefined' ? callback(item, i) : callback.call(thisArg, item, i)
    } else {
      temp[i] = item
    }
  }
  return temp
}

const _temp = myArrayFrom({length: 10}, (_, i) => (`hello-${i}`))
console.log(_temp)
/*
[
  'hello-0', 'hello-1',
  'hello-2', 'hello-3',
  'hello-4', 'hello-5',
  'hello-6', 'hello-7',
  'hello-8', 'hello-9'
]
*/
const _array = myArrayFrom(['hello', 'world'], (_, i) => ({label: _.toUpperCase(), value: i}))
console.log(_array)
/*
[ { label: 'HELLO', value: 0 }, { label: 'WORLD', value: 1 } ]
*/

const _this = myArrayFrom(['hello', 'world'], function(_, i) {
  console.log(this)
  return {
    label: this[i] + '-' + _,
    value: i
  }
}, {0: '你好', 1: '世界'})
// [ { label: '你好-hello', value: 0 }, { label: '世界-world', value: 1 } ]
```

```js
// --------- 生成指定长度的数组 -----------
function create_array(length) {
  return new Array(length).fill(null).map((item, i) => i)
}
create_array(100) // [0,2,3,4,5,...,99]


function create_array(length) {
  return Array.from({length}, (item, i) => i)
}
create_array(100) // [0,2,3,4,5,...,99]

// ------------ 序列生成器 ---------
const range = (start, stop, step) => Array.from({length: (stop-start)/step + 1}, (_, i) => {
  return start + (i*step)
})
console.log('range:' ,range(1, 10, 2))  // [1, 3, 5, 7, 9]


// -------- 排除 falsy值. Array.prototype.filter(Boolean) ---------
const has_virtual_item = ['', undefined, NaN, 0, 123, 'hello', false, '你好']
console.log(has_virtual_item.filter(Boolean)) // [ 123, 'hello', '你好' ]
```

### Array.isArray

  Array.isArray 用来判断参数是否是一个数组。
```js
const proxy_array = new Proxy(['hello', 'world'],{})
console.log(Array.isArray(proxy_array)) // true
console.log(proxy_array.__proto__ === Array.prototype)  // true
console.log(proxy_array instanceof Array) // true
console.log(Object.prototype.toString.call(proxy_array))  // [object Array]
console.log(Proxy.prototype)  // undefined


// -------- 实现一个Array.isArray ---------
const my_is_array1 = (arg) => {
  if(typeof arg !== 'object' || arg === null) return false
  return arg instanceof Array
}

const my_is_array2 = (arg) => {
  return Object.prototype.toString.call(arg).slice(8,-1).toLowerCase() === 'array'
}

console.log(my_is_array1([1,2,3]), my_is_array1(proxy_array)) // true true
console.log(my_is_array2([1,2,3]), my_is_array2(proxy_array)) // true true
```

### Array.prototype.includes

  Array.prototype.includes(searchElement, fromIndex) 用来判断数组是否包含指定的值。

```js
/*
1. 如果length为0, 返回false
2. 如果n < 0
  2.1 k = length + n
  2.2 如果k还是小于 0, k = 0
3. 如果n > 0 k = n
4. Infinity false
5. -Infinity false
*/
const symbol = Symbol('symbol')
const array = [1, 2, NaN, 'hello', symbol ,false, '你好']
const log = console.log
log(array.includes(NaN, Infinity))    // false
log(array.includes(NaN, -Infinity))   // true
log(array.includes(NaN, -8))          // true
log(array.includes(NaN, 100))         // false
log(array.includes(NaN, 2))           // true
log(array.includes(NaN, 3))           // false
log(array.includes(symbol))           // true
log(array.includes(NaN, NaN))         // true
```

### 类数组

```js
// 判断一个对象是数组还是类数组
function isArrayLikeObject(arr) {
  if(typeof arr !== 'object') return false
  if(arr === null) return false
  const max_length = Math.pow(2,53) - 1;
  // 判断是否有length属性
  if(!Object.prototype.hasOwnProperty.call(arr, 'length')) return false
  // 判断length 是否为 number
  if(typeof arr.length !== 'number') return false
  // 判断是否是 有限的length
  if(!Number.isFinite(arr.length)) return false
  // 判断是不是数组本身
  if(Array.isArray(arr)) return false
  if(arr.length >= 0 && arr.length < max_length) return true
  return false
}

const a = {
  0: 'hello',
  1: 'world',
  length: 'hello'
}
const b = [1, 2, 3]

const player = {
  firstName: 'kyrie',
  lastName: 'irving',
  age: 30
}
const c = {
  0: 'hello',
  1: 'world',
  length: Infinity
}
const d = {
  0: 'hello',
  1: 'world',
  length: 2
}
isArrayLikeObject(a)  // false
isArrayLikeObject(b)  // false
isArrayLikeObject(c)  // false
isArrayLikeObject(d)  // true
isArrayLikeObject(player) // false
```
