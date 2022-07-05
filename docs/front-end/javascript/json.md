# JSON

  JSON对象包含两个方法: JSON.stringify() 和 JSON.parse(). 除了这两个方法,JSON对象本身并没有其他作用,也不能被调用
  或者作为构造函数调用。
  
## JSON.stringify()

  JSON.stringify() 方法将一个 JavaScript 对象或值转换为 JSON 字符串，如果指定了一个 replacer 函数.
  则可以选择性地替换值，或者指定的 replacer 是数组，则可选择性地仅包含数组指定的属性
```js
// 1. 对大多数简单值来说,JSON.stringify()效果和toString()一样
console.log(JSON.stringify(123))  // '123'
console.log(JSON.stringify(true)) // 'true'
console.log(JSON.stringify(undefined))  // 'undefined'
console.log(JSON.stringify(null)) // 'null'
console.log(JSON.stringify("123"))  // ""123""
const set = new Set()
const map = new Map()
set.add(1)
map.set('hello', 'world')
console.log(JSON.stringify(set), JSON.stringify(map)) // {} {}
console.log(JSON.stringify(NaN))        // null
console.log(JSON.stringify(Infinity))   // null

// 2. 转换值如果有 toJSON() 方法，该方法定义什么值将被序列化
const obj = {
  toJSON() {
    return {name:'lebron'}
  },
  name:'kyrie'
}
console.log(JSON.stringify(obj)) // {"name":"lebron"}

// 3 布尔值,数字 字符串的包装对象在序列化过程中会自动转换成对应的原始值
const obj = {
  a:Number(123),
  b:String(123),
  c:Boolean(false)
}
const array = [Number(123),String(123),Boolean(false)]
console.log(JSON.stringify(obj)) // {"a":123,"b":"123","c":false}
console.log(JSON.stringify(array)) // [123,"123",false]


/*4. undefined任意的函数以及symbol值,在序列化的过程中会被忽略
(出现在数组对象的属性值中时被转换成null(以保证单元位置不变) */
console.log(JSON.stringify(undefined), JSON.stringify(function() {})) 
// undefined undefined

const obj = {
  [Symbol(123)]: 'hello',
  b: function() {
    return 'hello'
  },
  a: undefined
}
console.log(JSON.stringify(obj))  // {}


const obj = {
  a: undefined,
  b: function() {},
  c: Symbol['foo'],
  d: 'hello world'
}
const array = [undefined,function(){},Symbol('foo'),'hello world']
console.log(JSON.stringify(obj))  // {"d":"hello world"}
console.log(JSON.stringify(array))  // [null,null,null,"hello world"]


//5. 包含循环引用的对象(对象之间相互引用,形成无线循环)执行此方法会报错
const a = {}, b = {};
a.foo = b;
b.bar = a;
console.log(JSON.stringify(a))
// Converting circular structure to JSON


//6. 所有以Symbol为属性键的属性都会被完全忽略掉,即使replacer参数中强制指定包含了它们
const obj = {
  [Symbol('foo')]:'foo',
  [Symbol('bar')]:'bar'
}
console.log(JSON.stringify(obj))  // {}

// 6. Date日期调用了toJSON()将其转换为了string字符串 因此会被当做字符串处理
console.log(JSON.stringify(new Date())) // "2021-09-30T01:36:41.191Z"

// 7 NaN 和 Infinity 格式的数值及 null 都会被当做 null。
console.log(JSON.stringify(NaN), JSON.stringify(null), 
JSON.stringify(Infinity), JSON.stringify(-Infinity)) 
// null null null null
```

  replacer参数 可以是一个函数或者数组. 作为函数,它有两个参数, 键(key)和值(value),它们都会被序列化。
:::tip
在开始时,replacer函数会被传入一个空字符串作为key值,代表着要被stringify的这个对象。随后每个对象或数组上的属性会被依次传入。
:::
```js
const foo = {
  foundation:'Mozilla', model:'box', 
  week:45, transport:'car', month:7
}
function replacer(key,value) {
  if(typeof value === 'string'){
    return undefined
  }
  return value;
}
console.log(JSON.stringify(foo,replacer)) // {"week":45,"month":7}

// 如果replacer是一个数组, 那么它必定是一个字符串数组, 包含要处理对象的属性名称。
JSON.stringify(foo, ['week', 'month']);
// '{"week":45,"month":7}', 只保留 “week” 和 “month” 属性值。

const foo = {
  foundation:'Mozilla', model:'box', 
  week:45, transport:'car', month:7
}
function replacer(key,value) {
  if(key === ''){
    return {
      name:'kyrie',
      age:'29'
    }
  }
  if(typeof value === 'string'){
    return value
  }
}
// {"name":"kyrie","age":"29"}
```

  toJSON()

  如果一个被序列化的对象拥有toJSON方法,那么该toJSON方法就会覆盖该对象默认的序列化行为:不是该对象被序列化,而是调用toJSON()后返回值被序列化
```js
var obj = {
  foo: 'foo',
  toJSON: function () {
    return 'bar';
  }
};
JSON.stringify(obj);      // '"bar"'
JSON.stringify({x: obj}); // '{"x":"bar"}'
```
:::tip
箭头函数不能用来定义toJSON()方法,主要原因是箭头函数的词法作用域是全局作用域。
:::
  使用场景:
  1. JSON.stringify()可以判断数组是否包含对象,或者判断对象是否相等
```js
const data = [
  {name:'kyrie'},
  {name:'lebron'},
  {name:'wade'}
]
const obj = {name:'kyrie'}
console.log(JSON.stringify(data).indexOf(JSON.stringify(obj)))  // 1
```
  2. localStorage/sessionStorage默认只能存储字符串，如果存储的是一个对象,则会调用toString()方法变为[object Object]
```js
const obj = {firstName:'kyrie',lastName:'irving'}
console.log(window.localStorage.setItem('player',JSON.stringify(obj)))
```
  3. 可以实现深拷贝,开发中,有时候怕影响原始数据,可以深拷贝一份数据做任意操作。

  JSON.stringify() 还有一个可选的第三个参数space, 用来指定输出的缩紧格式。
```js
const player = {
  firstName: 'lebron',
  lastName: 'james',
  age: 38
}
console.log(JSON.stringify(player, null, 3))
console.log(JSON.stringify(player, null, '------'))
/*
{
   "firstName": "lebron",
   "lastName": "james",
   "age": 38
}

{
------"firstName": "lebron",
------"lastName": "james",
------"age": 38
}
*/
```
## JSON.parse()
  
  JSON.parse()用来解析JSON字符串。
```js
JSON.parse('{}');              // {}
JSON.parse('true');            // true
JSON.parse('"foo"');           // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse('null');            // null
```

[MDN-JavaScript Object Notation](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON#javascript_object_notation)

[MDN-JSON.stringify()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
