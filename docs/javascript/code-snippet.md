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
// 暂只考虑正整数
// ---- 使用数组的reduce方法 ----
function format1(money: number): number | string {
  if(money >= 0 && money <= 999) return money
  const array = money.toString().split('').reverse()
  // [7,6,5,4,3,2,1]
  return array.reduce((prev,next,i) => {
    if(i % 3 === 0 && i !== 0) {
      return next + ',' + prev
    }else{
      return next + prev
    }
  }, '')
}
const number = 1234567;
console.log(format(number)) // 1,234,567


// --- 使用字符串的方法 -----
function format2(money: number): number | string {
  if(money >= 0 && money <= 999) return money
  const string = money.toString()
  const length = string.length
  // 1234567
  let str = '';
  //i 6 / j 1
  for(let i = length - 1; i >= 0; i--) {
    const j = length - i - 1
    if(j % 3 === 0 && j !== 0) {
      str = string[i] + ',' + str
    }else{
      str = string[i] + str
    }
  }
  return str
}
const number = 1234567678
console.log(format2(number)) // 1,234,567,678
```
