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

