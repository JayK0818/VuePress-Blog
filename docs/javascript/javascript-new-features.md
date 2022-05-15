
# ECMAScript新特性

## ES2015

### for...of循环和iterator

  遍历器(Iterator)提供了一个统一的,简便的访问接口,为各种不同的数据结构提供了统一的访问机制。任何数据只要部署了
  Iterator接口,就可以完成遍历操作。Iterator接口主要供for...of消费。

  原生具备Iterator接口的数据结构
1. Array
2. Map
3.  Set
4. String
5. arguments对象
6. NodeList对象

  对象(Object)没有默认部署的Iterator接口,是因为对象的哪个属性先遍历,哪个属性后遍历是不确定的。需要
  开发者手动指定。
```js
// array-like对象 调用数组的 Symbol.iterator方法
const iterator = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
  [Symbol.iterator]: Array.prototype[Symbol.iterator]
}
for(let item of iterator){
  console.log(item) // a b c
}
```
:::tip
普通对象部署数组的遍历器方法没有效果
```js
let iterable = {
  a: 'a',
  b: 'b',
  c: 'c',
  length: 3,
  [Symbol.iterator]: Array.prototype[Symbol.iterator]
};
for (let item of iterable) {
  console.log(item); // undefined, undefined, undefined
}
```
:::

  **判断一个数据结构是否具有遍历器方法.**
```js
const set = new Set().add('1').add('2').add('3')
const map = new Map().set({name:'hello'},{name:'world'})
const array = [1,2,3,4,5]
const array_like = {
  0: 'hello',
  1: 'world',
  2: '你好',
  length: 3
}
const string = 'hello world';

function has_iterator(data){
  return typeof data[Symbol.iterator] === 'function';
}

console.log(has_iterator(set)) // true
console.log(has_iterator(map)) // true
console.log(has_iterator(array)) // true
console.log(has_iterator(array_like))  // false
console.log(has_iterator(string))  // true

function foo() {
  console.log(has_iterator(arguments))  // true
}
foo(1,2,3,4,5)
```
  **给一个普通对象添加遍历器接口,使其能够被for...of遍历**
```js
const player = {
  firstName: 'kyrie',
  lastName: 'irving',
  age: '30',
  [Symbol.iterator]: function() {
    const _this = this;
    const keys = Object.keys(this);
    let nextId = 0;
    return {
      next:function() {
        return nextId < keys.length ? {
          value: _this[keys[nextId++]],
          done: false
        } : {
          value: undefined,
          done: true
        }
      }
    }
  }
}

for(let item of player){
  console.log(item) // kyrie, irving, 30
}
```
### Symbol

  1. Symbol表示独一无二的值,它是JavaScript语言的第七种数据类型。
```js
Symbol('foo') === Symbol('foo') // false
```
  消除魔术字符串(在代码之中多次出现与代码形成强耦合的某一个具体的字符串或数值)
```js
function getArea(shape, options) {
  let area = 0;
  switch (shape) {
    case 'Triangle': // 魔术字符串
      area = .5 * options.width * options.height;
      break;
    /* ... more code ... */
  }
  return area;
}
getArea('Triangle', { width: 100, height: 100 }); // 魔术字符串

// 常用的消除魔术字符串的方法就是把它写成一个常量.
const shapeType = {
  triangle: Symbol('triangle')
};

function getArea(shape, options) {
  let area = 0;
  switch (shape) {
    case shapeType.triangle:
      area = .5 * options.width * options.height;
      break;
  }
  return area;
}
getArea(shapeType.triangle, { width: 100, height: 100 });
```
  2. Symbol作为属性名遍历对象的时候,不会被for...in Object.keys() Object.getOwnPropertyNames() JSON.stringify()返回
```js
let player = {
  [Symbol('first')]: 'kyrie',
  [Symbol('last')]: 'irving',
  [Symbol('age')]: 30,
  team:'nets'
}

for(let key in player){
  console.log('for--in-key:', key)  // team
}

for(let key of Object.keys(player)){
  console.log('for-of-key:', key) // team
}

Object.getOwnPropertyNames(player) // ['team']
Object.getOwnPropertySymbols(player); 
//[Symbol(first),Symbol(last),Symbol(age)]
JSON.stringify(player) // {"team":"nets"}
```
  3. Symbol.for() / Symbol.keyFor()

  Symbol.for()不会每次调用就返回一个新的 Symbol 类型的值，而是会先检查给定的key是否已经存在，如果不存在才会新建一个值。
```js
Symbol.for('key') === Symbol.for('key');  // true
```
  4. Symbol.toStringTag
  
  Symbol.toStringTag 是一个内置symbol,它通常作为对象的属性键使用,对应的属性值应该为字符串类型,通常只有内置的Object.prototype.toString()
  方法会读取这个标签并把它包含在自己的返回值里。
:::tip
许多内置的JavaScript对象类型即使没有toStringTag属性,也能被toString()方法识别并返回特定的类型。
:::
```js
Object.prototype.toString.call(false)           // [object Boolean]
Object.prototype.toString.call('foo')           // [object String]
Object.prototype.toString.call(3)               // [object Number]
Object.prototype.toString.call([1,2,3])         // [object Array]
Object.prototype.toString.call({name:'kyrie'})  // [object Object]
Object.prototype.toString.call(null)            // [object Null]
Object.prototype.toString.call(undefined)       // [object Undefined]
Object.prototype.toString.call(function(){})    // [object Function]
Object.prototype.toString.call(new Date())      // [object Date]

// ------ 引擎为它们设置好了toStringTag标签 ---------
Object.prototype.toString.call(new Map())       // [object Map]
Object.prototype.toString.call(new Set())       // [object Set]
Object.prototype.toString.call(function *m(){}) // [object GeneratorFunction]

//-------------------------------------------------
const d1 = {}
Object.defineProperty(d1,Symbol.toStringTag,{
  value:'hello world'
})
Object.prototype.toString.call(d1)             // [object hello world]
```
:::tip
  在对webpack打包后的文件分析中,__ webpack_require __.r方法中, 使用了这个属性
:::
```js
(() => {
  __webpack_require__.r = (exports) => {
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
    // 调用 Object.prototype.toString.call(exports) 会返回Module
      Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    }
    // 给exports 添加一个 _esModule属性 值为true
    Object.defineProperty(exports, "__esModule", { value: true });
  };
})();
```
### Set和Map数据解构

  1. Set数据解构类似与数组,但数据的成员值都是唯一的,没有重复的值。
```js
const array = [1,2,3,4,5,4,3,2,1];
const s = new Set();
array.forEach(item => s.add(item))  // Set {1,2,3,4,5}

s.size()                            // 5
// 像set加入值的时候,不会发生类型转换, NaN等于自身。
let s = new Set()
s.add(NaN)
s.add(NaN)
console.log(s)                      // Set {NaN}
```
```js
// Set的操作方法和遍历方法
Set.prototype.add(value)
Set.prototype.delete(value)
Set.prototype.has(value)
Set.prototype.clear()
```
```js
let s = new Set(['kyrie','lebron','durant','wade']);
s.add('curry');    // Set(5) { 'kyrie', 'durant', 'wade', 'james', 'curry' }
s.delete('kyrie')  // Set(4) { 'durant', 'wade', 'james', 'curry' }
s.has('kyrie')     // false
 // 可以将set结构转化为数组
Array.from(s)         // [ 'durant', 'wade', 'james', 'curry' ]
s.clear()             // Set(0) {}
```
```js
// 遍历方法:
Set.prototype.keys()
Set.prototype.values()
Set.prototype.entries()
Set.prototype.forEach()
```
```js
let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]
```
  2. Map
  
  Map数据结构类似于对象,但是键的范围不限于字符串,各种类型的值(包括对象)都可以当作键。
```js
const m1 = new Map()
const o = {p:'Hello World!'}
m1.set(o,'content')

console.log('m1:', m1)  // Map(1) { { p: 'Hello World!' } => 'content' }
console.log(m1.get(o))  // content
console.log(m1.has(o))  // true
```
  Map也可以接受一个数组作为参数,该数组的成员是一个个表示键值对的数组
```js
const map = new Map([
  ['name', '张三'],
  ['title', 'Author']
]);
//Map(2) { 'name' => '张三', 'title' => 'Author' }

const array = [
  [{firstName:'kyrie'}, {lastName:'irving'}],
  [{firstName:'lebron'}, {lastName:'james'}]
]
console.log(new Map(array))
/*
Map(2) {
  { firstName: 'kyrie' } => { lastName: 'irving' },
  { firstName: 'lebron' } => { lastName: 'james' }
}
*/
```
```js
// 实例的属性和操作方法
size
Map.prototype.set(key,value)
Map.prototype.get(key)  
Map.prototype.has(key)
Map.prototype.clear()
```
```js
const m5 = new Map();
const o1 = {firstName:'kyrie',lastName:'irving'}
const o2 = {firstName:'lebron',lastName:'james'}
m5.set(o1,o2)
m5.set(262,'standard')
m5.set('year',2021)
/*m5: Map(3) {
{firstName:'kyrie',lastName:'irving'}
=> {firstName:'lebron',lastName:'james'}
262 => 'standard',
'year' => 2021
}*/

m5.size               // 3
m5.get(o1)            // { firstName: 'lebron', lastName: 'james' }
m5.has(o1)            // true
m5.delete(o1)         // true
m5                    // Map(2) { 262 => 'standard', 'year' => 2021 }
m5.clear()
m5                    // Map(0) {}
```

1. Map.prototype.keys()
2. Map.prototype.values()
3. Map.prototype.entries()
4. Map.prototype.forEach()

```js
const map = new Map([
  ['F', 'foo'],
  ['T', 'yes']
])
for(let key of map.keys()) {
  console.log('key:', key)       // F  T
}

for(let value of map.values()){
  console.log('value:', value)  // foo yes
}

for(let [key,value] of map.entries()){
  console.log(key,value)        // F foo  T yes
}
```
### 数值的扩展
#### Number.isFinite() Number.isNaN()

  Number.isFinite() 分别判断一个数值是否为有限的
```js
console.log(Number.isFinite(13))  // true
console.log(Number.isFinite(NaN)) // false
console.log(Number.isFinite('123')) // false
console.log(Number.isFinite(true))  // false
console.log(Number.isFinite(Infinity))  // false
console.log(Number.isFinite(-Infinity)) // false
```
  Number.isNaN() 用来检测一个值是否为NaN
```js
console.log(Number.isNaN(NaN))  // true
console.log(Number.isNaN(13)) // false
console.log(Number.isNaN('13')) // false
console.log(Number.isNaN(true)) // false
console.log(Number.isNaN(Infinity)) // false
console.log(Number.isNaN(1/Infinity)) // false
console.log(Number.isNaN('true'/0)) // true
```
:::tip
1. Number.isFinite() 如果参数类型不是数值,isFinite()一律返回false
2. Number.isNaN()只有对于NaN才返回true，非NaN一律返回false。
:::

  与传统的全局方法isFinite() 和 isNaN()的区别在于 传统方法先调用Number() 将非数值转化为数值,再进行判断。
```js
console.log(Number.isFinite('13'))  // false
console.log(isFinite('13')) // true

console.log(isNaN(NaN)) // true
console.log(isNaN('NaN')) // true

console.log(Number.isNaN(NaN))  // false
console.log(Number.isNaN('NaN'))  // false
```
#### Number.parseFloat() 和 Number.parseInt()

  ES6 将全局方法 parseInt() 和 parseFloat()移植到Number对象上面,行为保持不变。
```js
// ES5的写法
parseInt('12.34') // 12
parseFloat('123.45#') // 123.45

// ES6的写法
Number.parseFloat(Infinity)  // Infinity
Number.parseFloat(-Infinity) // -Infinity
Number.parseInt(Infinity)   // NaN
Number.parseInt(-Infinity)   // NaN
Number.parseInt('12.34') // 12
Number.parseFloat('123.45#') // 123.45
```
  Number.parseInt 和 Number.parseFloat 对 Infinity -Infinity的处理结果不同

### 数组的扩展

#### 扩展运算符

  扩展运算符(...) 将一个数组转为用都好分隔的参数序列。
```js
console.log(...[1,2,3]) // 1 2 3
console.log([1,...[2,3,4],5]) // [1,2,3,4,5]

function push(array, ...items) {
  array.push(...items)
}


// ------ 应用 --------
// 1. 合并数组
const arr1 = [1,2,3], arr2 = [4,5,6]
[...arr1, ...arr2]  // [1,2,3,4,5,6]

// 2. 与解构赋值结合
const array = [1,2,3,4,5]
[1,...rest] = array
console.log(rest) // [2,3,4,5]

// 3. 字符串
[...'hello']  // ['h', 'e', 'l', 'l', 'o']

// 4. 实现了Iterator接口的对象
const nodeList = document.querySelectorAll('div')
[...nodeList]
```
#### Array.from()

  1. Array.from() 方法用于将两类对象转为真正的数组:类似数组的对象(array-like) 和可遍历(iterable)的对象。
```js
const arrayLike = {
  0:'a',
  1:'b',
  2:'c',
  length:3
}
console.log(Array.from(arrayLike))  // [a, b, c]

Array.from({length:3})  // [undefined,undefined,undefined]
```
:::tip
任何有length属性的对象,都可以通过Array.from方法转为数组。
:::
  2. Array.from() 还可以接受第二个参数,作用类似于数组的map方法,用来对每个元素进行处理,将处理后的值放入返回的数组
```js
let array = Array.from({length:10},() => Math.random())
//  [
//   0.9914679755190499,
//   0.6476812277611301,
//   0.7714291351785123,
//   0.08156054668342261,
//   0.4137601519196352,
//   0.5975863812315991,
//   0.7500119437899317,
//   0.9440579010811851,
//   0.5190184961310442,
//   0.40094030827389204
// ]
```
#### Array.of()

  Array.of()用于将一组值,转换为数组
```js
Array.of(3, 11, 8) // [3,11,8]
Array.of(3) // [3]
Array.of()  // []
```
#### find()/findIndex()

  找到数组中第一个符合条件的数组成员/成员序号
```js
[1,2,3,4].find(n => n > 3)  // 4
[5,10,15].find((value, index, array) => value > 9)  // 10
[5,10,15].findIndex((value, index, array) => value > 9) // 1
// find和findIndex弥补了indexOf()方法的不足,可以发现NaN.
```
#### entries()/keys()/values()

  ES6新增了三个新方法 - entries()/keys()/values(),用于遍历数组,它们都返回一个遍历器对象。可用for...of循环遍历。
```js
for(const key of ['a','b','c'].keys()){
  console.log(key)  // 0 1 2
}

for(const value of ['a','b','c'].values()){
  console.log(value)  // a b c
}

for(const [key,value] of ['a','b','c'].entries()){
  console.log(key, value)
  /*
  0 a
  1 b
  2 c
  */
}
```
### 函数的扩展

  1. 函数参数默认值与对象的解构赋值结合
```js
// 设置了解构赋值的默认值,函数参数默认值是控对象
function m1({x = 0, y = 0} = {}){
  console.log([x,y])
}
// 没有设置解构赋值的默认值,默认值不是空对象
function m2({x,y} = {x:0,y:0}){
  console.log([x,y])
}
m1()  // 0  0
m2()  // 0  0

m1({x:3,y:8}) // 3  8
m2({x:3,y:8}) // 3  8

m1({x:3}) // 3  0
m2({x:3}) // 3  undefined

m1({})   // 0 0
m2({})   // undefined undefined

m1({z:3}) // 0 0
m2({z:3}) // undefined undefined
```
  2. 函数的length

  返回没有指定默认值的参数个数。
```js
(function (a){}).length // 1
(function (a = 5){}).length // 0
(function (a,b,c=5){}).length // 2
(function (...args){}).length // 0
(function (a,b = 3,c){}).length // 1
```
:::tip
如果设置了默认值的参数不是尾参数,那么length属性也不再计入后面的参数
:::

  3. rest参数 
  
  rest参数搭配的是一个数组,而arguments对象是一个伪数组。
```js
function sum(...args){
  // Array.isArray(args)  // true
  return args.reduce((prev,next) => prev + next, 0)
}
sum(1,2,3,4)  // 10
```
:::tip
rest参数之后不能再有其他参数,否则会报错。 并且函数的length属性,不包括rest参数
:::
  4. 箭头函数的this 
  
  对于普通函数,内部的this指向函数运行时所在的对象,但是在箭头函数,它没有自己的this对象,内部的this就是定义时上层作用域 中的this.(箭头函数内部的this指向是固定的.而普通函数的this指向是可变的。)
```js
var id = 21
function foo(){
  setTimeout(() => {
    console.log(this.id)  // 42
  },100)
}

function foo(){
  setTimeout(function(){
    console.log(this.id)  // 21
  })
}
foo.call({id:42})
```
:::tip
1. 箭头函数没有自己的this,也就不能使用call() apply()和bind()方法改变this的指向。
2. 同样arguments super 和new.target在箭头函数中也是不存在的。
3. 不可以使用yield命令, 因此箭头函数不能用作Generator函数。
:::
```js
function foo() {
  setTimeout(() => {
    console.log('args', ...arguments)
  })
}
foo(1,2,3)  // [1,2,3]
```

  5. 作用域

  一旦设置了参数的默认值, 函数进行声明初始化时, 参数会形成一个单独的作用域。等到初始化结束时,这个作用域就会消失。
```js
var x = 1
function f(x, y = x) {
  console.log(y)
}
f(2)  // 2

let x = 1
function f(y = x) {
  let x = 2
  console.log(y)
}
f() // 1
```
  6. function.name
```js
const f = function() {}
console.log(f.name) // f

const baz = function bar(){}
console.log(baz.name) // bar


(new Function).name // 'anonymous'
function foo(){}
foo.bind({}).name   // bound foo
```

### 对象的扩展

1. 允许直接写入变量和函数作为对象的属性和方法

```js
function f(x, y) {
  return {
    x,
    y
  }
}
// ---- 等同于 -----
function f(x, y) {
  return {
    x: x,
    y: y
  }
}

// ---- 方法也可以简写
var object = {
  method(){
    return 'hello world'
  }
}
```
2. 属性名表达式

```js
const obj = {
  ['a' + 'bc']: 123
}

const lastWord = 'last word'
const obj = {
  'first word': 'hello',
  [lastWord]: 'world',
  ['hello' + '1'](){
    return 'hello world'
  }
}
```

3. Object.is()

```js
Object.is('a', 'a') // true
Object.is({},{})    // false
Object.is(+0,-0)    // false
Object.is(NaN,NaN)  // true
```
```js
// 模拟一个Object.is 方法
Object.defineProperty(Object, 'is', {
  value: function(x, y) {
    if(x === y) {
      return x !== 0 || 1 / x === 1 / y
    }
    return x !== x && y !== y
  },
  configurable: true,
  enumerable: false,
  writable: true
})
```
4. Object.assign()

  用于将源对象的所有可枚举属性复制到目标对象。 如果目标对象与源对象有同名属性, 则后面的属性会覆盖前面的属性。
```js
const target = {a: 1, b: 2}
const source1 = {b: 2, c: 2}
const source2 = {c: 3}
Object.assign(target, source1, source2)
// {a: 1, b: 2, c: 3}
```
:::tip
Object.assign()复制的属性是有限制的, 只能复制源对象自身的属性(不复制继承属性),也不复制不可枚举属性
```js
function Player(name){this.name = name;}
Player.prototype.skill = function(){console.log('crossover')}

const kyrie = new Player('kyrie')
kyrie.skill() // crossover

const a = Object.assign({}, kyrie)
a.skill()     // a.skill is not a function


Object.assign({b: 'c'}, 
  Object.defineProperty({}, 'c', {
    value: 'hello',
    enumerable: false
  })
)
// {b: 'c'}
```
:::

5. Object.getOwnPropertyDescriptor

  对象的每个属性都有一个描述对象,该方法可以获取对象属性的描述对象。
```js
const obj = {foo: 123}
Object.getOwnPropertyDescriptor(obj, 'foo')
/*
configurable: true
enumerable: true
value: 123
writable: true
*/
```
  ES6规定, 所有Class的原型方法都是不可枚举的

6. 属性的遍历

```js
// for...in
// 循环遍历对象自身的属性和继承的可枚举属性.
function Player(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
  this[Symbol('fullName')] = this.firstName + this.lastName
}
Player.prototype.say = function() {
  console.log(this.firstName + '-' + this.lastName)
}
const player = new Player('kyrie', 'irving')

Object.defineProperty(player, 'age', {
  value: 30,
  enumerable: false
})


for(const key in player){
  console.log('key', key, 'value', player[key])
}
/*
key firstName value kyrie
key lastName value irving
key say value ƒ () {
  console.log(this.firstName + '-' + this.lastName)
}
*/

// Object.keys()  返回一个数组,包含对象自身的所有可枚举属性
console.log(Object.keys(player))
// ['firstName', 'lastName']


// Object.getOwnPropertyNames(obj)
// 返回一个数组,包含对象自身所有属性(不包含symbol, 但是包含不可枚举属性
console.log(Object.getOwnPropertyNames(player))
// ['firstName', 'lastName', 'age']


// Object.getOwnPropertySymbols(obj)
// 返回一个数组, 包含对象自身所有symbol属性
console.log(Object.getOwnPropertySymbols(player))
// [Symbol(fullName)]

// Reflect.ownKeys()
// 返回一个数组, 包含对象自身的所有属性,不管属性名是symbol 还是字符串,无论是否可枚举。
console.log(Reflect.ownKeys(player))
```

7. Object.setPrototypeOf()/Object.getPrototypeOf()
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
```

### 字符串的扩展

#### 字符串的遍历器接口
```js
for(const s of 'hello'){
  console.log(s)  // 'h' 'e' 'l' 'l' 'o'
}
```
#### codePointAt() 返回一个字符的码点

  该方法能够正确处理4个字节存储的字符, 返回一个字符的码点。

#### String.fromCharCode()
  该方法用于Unicode码点返回对应字符串。

#### includes()/startsWith()/endsWith()

  includes()    表示是否找到了匹配点字符串
  startsWith()  表示字符串是否在原字符串的头部
  endsWith()    表示字符串是否在原字符串的尾部
```js
const s = 'Hello world!';

s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true
```
#### repeat()

  repeat方法返回一个新字符串, 表示将原字符串重复n次。
```js
'x'.repeat(3) // "xxx"
'hello'.repeat(2) // "hellohello"
'na'.repeat(0) // ""
```

### Proxy

  Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截
```js
const proxy = new Proxy(target, handler)
```

#### get

  拦截对象属性的读取
```js
const player = new Proxy({
  firstName:'kyrie',
  lastName:'irving',
  age:30
}, {
  get: function(target, prop, receiver){
    if(prop === 'age'){
      return 18
    }
    return target[prop]
  }
})
console.log(player.age) // 18
console.log(player.firstName) // kyrie


// ---------- get方法可以继承 ---------
const proto = new Proxy({}, {
  get(target, prop, receiver) {
    console.log('get', prop)
    return target[prop]
  }
})
const obj = Object.create(proto)
console.log(obj.foo)  // get foo
```
#### set

  set方法用于拦截某个属性的赋值操作
```js
const monster = {
  eyeCount: 4
}

const monster_proxy = new Proxy(monster, {
  set:function(obj, prop, value) {
    if(prop === 'eyeCount' && (value%2 !== 0)){
      console.log('Monsters must have an even number of eyes')
    }else{
      obj[prop] = value
      return true
    }
  }
})
// monster_proxy.eyeCount = 1  // 无法设置, 必须为偶数
monster_proxy.eyeCount = 2
console.log(monster_proxy.eyeCount) // 2
```

#### apply

  apply方法拦截函数的调用 , call 和 apply操作, 接受三个参数, 分别是目标对象, 目标对象的上下文对象 以及 目标对象的参数
```js
function sum(a, b, c) {
  return a + b + c
}
const proxyDoubleSum = new Proxy(sum, {
  // target sum
  // context {times:2}
  // args [1,2,3]
  apply(target, context, args) {
    return target(...args) * context.times
  }
})

console.log(sum(1,2,3)) // 6
console.log(proxyDoubleSum.call({times: 2}, 1,2,3)) // 12
```

#### has

  has方法用来拦截判断对象是否具有某个属性时生效。典型的操作就是in运算符。
```js
const proxy = new Proxy({
  _prop: 'hello',
  prop: 'world'
}, {
  has(target, key, receiver) {
    if(key.startsWith('_')) {
      return false
    }
    return key in target
  }
})

console.log('_prop' in proxy) // false
// has 拦截对 for ... in 遍历不生效。
```

#### deleteProperty

  deleteProperty方法用于拦截delete操作,如果抛出错误或者返回false,当前属性就无法被delete删除
```js
const proxy = new Proxy({
  _prop: 'hello',
  prop: 'world'
}, {
  deleteProperty(target, key) {
    if(key.startsWith('_')) {
      return false
    }
    return Reflect.deleteProperty(target, key)
  }
})
console.log('start:', proxy)  // { _prop: 'hello', prop: 'world' }
delete proxy._prop
console.log(proxy)  // { _prop: 'hello', prop: 'world' }
delete proxy.prop
console.log(proxy)  //  { _prop: 'hello' }
```

## ES2016

### Array.prototype.includes

  Array.prototype.includes()方法返回一个布尔值,表示数组是否包含给定的值。
```js
[1,2,3].includes(4)       // false
[1,2,3].includes(2)       // true
[1,2,NaN].includes(NaN)   // true
```
  该方法还支持第二个参数, 表示搜索的起始位置。
```js
[1,2,3].includes(3, 3)  // false
[1,2,3].includes(3,-1)  // true
[NaN].includes(NaN)     // 0
```
### 指数运算符
```js
2 ** 2  //4
2 ** 10 // 1024
2 ** 3 ** 2 // 512
```
  多个指数运算符的时候 先从右边开始计算。

## ES2017

### padStart/padEnd

  如果某个字符串不够指定长度,会在头部或尾部补全。padStart()用于头部补全,padEnd()用于尾部补全。
  padStart()和padEnd() 一共接收两个参数, 第一个参数是字符串补全生效的最大长度,第二个参数是用来补全的字符串。
```js
console.log('x'.padStart(5,'0'))  // 0000x
console.log('x'.padEnd(5,'0'))    // x0000
```
  1. 原字符串的长度大于或等于要补全的最大长度,返回原字符串。
```js
'xxx'.padStart(2,'0') // xxx
'xxx'.padEnd(2,'0')  // xxx
```
  2. 用来补全的字符串与原字符串,两者的长度之和超过了最大长度,则会截取超出位数的补全字符串。
```js
'xxx'.padStart(5,'1234567') // 12xxx
'xxx'.padEnd(5,'1234567')  // xxx12
```
```js
/*
if(原字符串的长度 >= 最大长度) {
  返回原字符串
}else{
  if(补全字符串+原字符串 >= 最大长度 ){
    原字符串 + 补全字符串 切割0 或 1次
  }else{
    原字符串 + 补全字符串重复 并切割1次
  }
}
*/
```
### Object.getOwnPropertyDescriptors()

  返回指定对象所有自身属性的描述对象。
```js
const o = {
  foo: 123,
  baz: 456
}
console.log(Object.getOwnPropertyDescriptors(o))
/*
{
  baz: {
    configurable: true
    enumerable: true
    value: 456
    writable: true
  }
  foo:{
    configurable: true
    enumerable: true
    value: 123
    writable: true
  }
}
*/
```

### Object.values/Object.entries() 

  返回对象自身可遍历的属性
```js
let {keys, values, entries} = Object;
let obj = { a: 1, b: 2, c: 3 };

for (let key of keys(obj)) {
  console.log(key); // 'a', 'b', 'c'
}

for (let value of values(obj)) {
  console.log(value); // 1, 2, 3
}

const object = {100: 'a', 2: 'b', 3: 'c'}
Object.values(object) // ['b', 'c',  'a']

for (let [key, value] of entries(obj)) {
  console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
}
```

### async

  ES2017引入了async函数,使得异步操作变得更加方便. async函数返回一个Promise对象, 可以使用then和catch方法添加回调函数。
```js
async function foo() {
  return 'hello'
}
console.log(foo())  // Promise {<fulfilled>: 'hello'}

foo().then(res => {
  console.log(res)  // 'hello'
})
```

```js
function timeout(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}
async function foo(value, ms) {
  await timeout(1000)
  console.log(value)
}
foo('hello', 1000)  // 1s后输出hello
```
  async函数返回的Promise对象,必须等到内部所有await命令后面的promise对象执行完,才会发生状态改变。

#### await命令

  正常情况下, await命令后面是一个Promise对象, 返回该对象的结果。如果不是Promise对象,就直接返回对应的值。
```js
async function f1() {
  return await 123
}

async function f2() {
  return await Promise.resolve(123)
}

f1().then(v => {console.log(v)})  // 123
f2().then(v => {console.log(v)})  // 123
```

#### 继发/并发

```js
// 如果两个请求前后之间没有关系, 可以同时发起请求 减少请求时间
const [foo, bar] = await Promise.all([getFoo(), getBar()]);


// 继发执行
async function dbFuc(db) {
  const docs = [{}, {}, {}];

  for (const doc of docs) {
    await db.post(doc);
  }
}
```

## ES2018 

### 对象扩展运算符 ...

```js
const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x // 1
y // 2
z // { a: 3, b: 4 }
```
:::tip
解构赋值必须是最后一个参数,拷贝是浅拷贝,且不会拷贝对象原型上的属性,只会拷贝对象自身的属性。
:::
```js
const o = Object.create({m:1,n:2})
o.z = 3;

const {m,...newObj} = o;
console.log(m, newObj);  // 1  {z:3}

// 解构赋值可以读取原型上的属性,扩展运算符只能复制对象实例的属性。
const o2 = Object.create({p:1})
o2.q = 2;
const { p, q } = o2;
console.log(p, q)  // 1 2


const z = { a: 3, b: 4}
z.__proto__.c = 5
console.log('z', z) // {a: 3, b: 4}
const { ...m} = z;
console.log(m)  // {a: 3, b: 4}

const { a, b, c } = z;
console.log(a, b, c)  // 3 4 5
```

### Promise.prototype.finally()

  finally()方法用于指定不管Promise对象最后状态如何,都会执行的操作.该方法是ES2018引入标准的。
```js
promise.then(result => {})
.catch(err => {})
.finally(() => {})


// finally的实现
Promise.prototype.finally = function(callback) {
  const P = this.constructor;
  return this.then(
    value => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => {throw reason})
  )
}
```
## ES2019 

### trimStart()/trimEnd()

  对字符串新增了 trimStart() 和 trimEnd() 方法，分别用于取消字符串头部与尾部对空格。
```js
const s1 = 'abc     '
const s2 = '      abc'
console.log(s2.trimStart()) //  abc
console.log(s1.trimEnd()) // abc
```
  浏览器还部署了额外的两个方法，trimLeft()是trimStart()的别名，trimRight()是trimEnd()的别名。
### Function.prototype.toString()

  ES2019对函数实例的toString()方法做出了修改。toString()方法返回函数代码本身,以前会省略注释和空格。
  修改后的toString()方法明确要求返回一摸一样的原始代码

### Array.prototype.sort()

  ES2019明确规定,Array.prototype.sort()的默认排序算法必须稳定。

### Symbol.prototype.description

  返回symbol的描述
```js
const symbol = Symbol('foo')
console.log(symbol.description) // foo
```
### Object.fromEntries()

  Object.entries() 可以将一个对象转化为键值对的二维数组, Object.fromEntries()是对 Object.entries()的反向操作。
```js
const object = {
  firstName: 'kyrie',
  lastName: 'irving',
  age: 30
}
const array = Object.entries(object)
/*
[ ['firstName', 'kyrie'], ['lastName', 'irving'], ['age', 30]]
*/

const reverseObject = Object.fromEntries(array)
/*
const reverseObject = {
  firstName: 'kyrie',
  lastName: 'irving',
  age: 30
}
*/


const entries = new Map([
  ['foo', 'bar'],
  ['baz', '42']
])
console.log(Object.fromEntries(entries))
/*
{
  foo: 'bar',
  baz: 42
}
*/
```
[MDN-Object.fromEntries](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)
### catch命令的参数省略

  JavaScript语言的 try...catch结构, 以前明确要求catch命令后面必须跟参数,接受try代码块抛出的错误对象。
```js
try{
  //...
}catch(err) {

}
```
  ES2019做出了改变,允许catch语句省略参数。

## ES2020

### import()

  ES2020引入import函数,支持动态加载模块, 可以在需要的时候,再加载某个模块。

```js
import('./math.js').then(() => {

})
```

### globalThis

  全局属性globalThis包含全局的this值,提供了一个标准的方法来获取不同环境下的全局this对象。确保可以在有无窗口的各种环境下
  正常工作。
```js
// es6-shim
var getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};
```

### BigInt

  BigInt是一种内置对象, 它提供了一种方法来表示大于2^53 - 1的整数。BigInt可以表示任意大的整数。
  可以在一个整数字面量后面加n的方式定义一个BigInt.
```js
Number.MAX_SAFE_INTEGER // 9007199254740991
Math.pow(2, 53)         // 9007199254740992

9007199254740992+1      // 9007199254740992
Math.pow(2, 53) === 9007199254740993  // true

typeof 9007199254740992n    // bigint
```
  bigint 也可以和 + - * / 等运算符一起使用。不能用于Math对象中等方法。
```js
9007199254740992n + 9007199254740992n   // 18014398509481984n
BigInt(Number.MAX_SAFE_INTEGER)         // 9007199254740991n

Math.pow(2n, 54n)   // 报错 Cannot convert a BigInt value to a number
2n ** 54n           // 18014398509481984n
10n.toString()      // '10'

// / 操作符会向0取整
5n/3n // 1n
5n/2n // 2n


1n == 1   // true
1n === 1  // false
```
### Array.prototype.flat()

  Array.prototype.flat()用于将嵌套的数组 '拉平', 变成一维的数组,该方法返回一个新数组。对愿数组没有影响。
```js
[1,2,3,4,[4,6]].flat() // [ 1, 2, 3, 4, 4, 6 ]
[1,2,[3,4],[[5,6]]].flat() // [ 1, 2, 3, 4, [ 5, 6 ] ]

[1,2,[3,4],[[5,6]]].flat(2) // [ 1, 2, 3, 4, 5, 6 ]
[1,2,[3,4,[4,5,[7,8,[9,10]]]]].flat(Infinity)
/*
[
  1, 2, 3, 4,  4,
  5, 7, 8, 9, 10
]
*/
```
  flat()默认只会 拉平 一层, 如果想要拉平多层的嵌套数组, 可以将flat()方法的参数写一个整数,
  或者 直接写成Infinity,不管有多少层嵌套,都会转成一维数组。

- 如果有空位,flat方法会跳过空位
```js
// flat方法的实现
function flat(array, d = 1){
  if(d <= 0) {
    return array.slice();
  }else{
    return array.reduce((prev,next) => {
      if(Array.isArray(next)) {
        prev = prev.concat(flat(next, d-1))
      }else{
        if(next){
          prev = prev.concat(next)
        }
      }
      return prev;
    }, [])
  }
}

function flat(array, d = 1){
  const temp = [...array]
  if(d <= 0) {
    return temp;
  }else{
    const t = []
    for(let item of temp) {
      if(Array.isArray(item)){
        t.push(...flat(item, d-1))
      }else{
        if(item){
          t.push(item)
        }
      }
    }
    return t;
  }
}

const flat_array = [1,[2,3],[4,5, undefined, ,[6,7, [8,9,[10]]]]]

console.log(flat(flat_array, Infinity))
/*
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
*/
console.log(flat(flat_array, Infinity))
/*
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
*/
```
### Promise.allSettled

  Promise.allSettled()方法接收一个数组作为参数, 数组的每个成员都是一个Promise对象。并返回一个Promise对象。
  所有Promise的状态都变更, 返回的Promise对象才会发生状态变更(不管是fulfilled还是rejected)。
```js
const resolved = Promise.resolve(42);
const rejected = Promise.reject(-1);

Promise.allSettled([resolved, rejected]).then((result) => {
  console.log('result', result)
})
/*
result [
  { status: 'fulfilled', value: 42 },
  { status: 'rejected', reason: -1 }
]
*/
```
### 链判断运算符

```js
const message_1 = {
  body: {
    user: {
      firstName: 'kyrie'
    }
  }
}
const message_2 = {
  body: {

  }
}
message_1.body.user.firstName  // kyrie
message_2.body.user.firstName; 
//  can not read property 'firstName' of undefined
// 上面的例子判断是否有firstName的时候 需要每一层都判断 对象是否有属性。

const firstName = message_2?.body?.user?.firstName  // undefined
```
  左侧的对象是否为null或undefined.如果是的话 就不再往下运算 而是返回undefined

### 判断Null

  ??  只要运算符左侧的值为null 或undefined时, 才会返回右侧的值。
```js
console.log( '' || 'hello') // hello
console.log(false || 'hello') // hello
console.log(0 || 'hello') // hello
console.log(null || 'hello')  // hello
console.log(undefined || 'hello') // hello
console.log(NaN || 'hello') // hello

console.log('' ?? 'hello')  // ''
console.log(false ?? 'hello') // false
console.log(0 ?? 'hello') // 0
console.log(null ?? 'hello')  // hello
console.log(undefined ?? 'hello') // hello
console.log(NaN ?? 'hello') // NaN
```
## ES2021 

### replaceAll()
  replace方法只能替换第一个匹配,如果要替换所有的匹配,可以使用正则表达式全局匹配。
  在ES2021中字符串的方法引入了replaceAll()方法,可以一次性替换所有匹配。
```js
'aabbc_cc'.replace('c','')     // aabb_cc
'aabbccc'.replace(/c/g,'')     // aabb
'aabbccc'.replaceAll('c','')   // aabb
```
  replaceAll()的第二个参数replacement除了为字符串,也可以是一个函数,该函数的返回值将替换第一个参数searchValue匹配的文本
```js
'aabbccc'.replaceAll('b',() => '_') // aa_ccc
```
:::tip
如果使用replaceAll(searchValue,replacement),searchValue作为正则时不带g修饰符,会导致replaceAll()报错
:::
### 允许JavaScript的数值使用下划线(_)作为分隔符
```js
const n1 = 1_000
const n2 = 1000;
console.log(n1 === n2)  // true
```
:::tip
除了十进制,其他进制的数值也可以使用分隔符,但分隔符不能紧跟着进制的前缀。
:::
  
  for...of循环, 扩展运算符, 解构赋值和Array.from方法内部调用的都是遍历器接口。

## ES2022

### at

  数组实例上新增了at()方法, 接受一个整数作为参数,返回对应位置等成员. 支持负索引。
```js
const players = ['kyrie', 'lebron', 'wade']
players.at(0)   // kyrie
players.at(-1)  // wade
players.at(players.length)  // undefined

const string = 'hello world'
string.at(0)  // h
```
  
### Object.hasOwn()

  The Object.hasOwn() static method returns true if the specified object has the indicated property as its
  own property. If the property is inherited, or does not exist, the method returns false

```js
let object = { foo: false }
Object.hasOwn(object, "foo") // true

let object2 = Object.create({ foo: true })
Object.hasOwn(object2, "foo") // false

let object3 = Object.create(null)
Object.hasOwn(object3, "foo") // false
```
[MDN-hasOwn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)

[ES6入门教程](https://es6.ruanyifeng.com/#README)

[ECMAScript-TC39](https://github.com/tc39/proposals/blob/HEAD/finished-proposals.md)
