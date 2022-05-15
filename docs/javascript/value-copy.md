# 深拷贝与浅拷贝

## Shallow Copy

  基本数据类型存储在栈, 而引用数据类型存在堆内存中。变量保存的是对象的内存地址,如果两个变量保存的是同一个对象引用,当其中一个
  变量属性修改时,另一个也会受到印象。 而基本数据类型是相互独立的。
```js
let a = 'kyrie'
let b = a;
console.log(a,b)  // kyrie kyrie

a = 'lebron'
console.log(a,b)  // lebron kyrie
//-----------------------------------------------------
const player = {
  firstName:'kyrie',
  lastName: 'irving',
  age:29
}
let p = player;
p.age = 30;
console.log(p,player)
// {age: 30,firstName: "kyrie",lastName: "irving"}
// {age: 30,firstName: "kyrie",lastName: "irving"}
```
  Object.assign() 

  该方法将所有可枚举属性的值从一个或多个源对象分配到目标对象,它将返回目标对象 (浅拷贝)
```js
const target = {a:1,b:{c:0}}
let obj2 = Object.assign({},target)
console.log(obj2) // {a:1,b:{c:10}}
target.b.c = 10;
console.log(obj2) // {a:1,b:{c:10}}

target.a = 10;
console.log(target,obj2)
// {a:10,b:{c:10}}
// {a:1,b:{c:10}}
```
[MDN-Object.assign文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

[对象新增的方法](https://es6.ruanyifeng.com/#docs/object-methods#Object-assign)

  对象的扩展运算符 (浅拷贝)
```js
let a = {name:'You do not known javascript',info:{price:40}}
let b = {...a}
a.info.price = 50
console.log(a,b)
// {info: {price: 50}, name: "You do not known javascript"}
```
  Array.prototype.slice()
  该方法返回一个新的数组对象, 这个对象是一个由begin和end决定的原数组的浅拷贝,原数组不会被改变
```js
const player_list = [{name:'kyrie'},{name:'lebron'},{name:'durant'}];
const copy_player_list = player_list.slice()

copy_player_list[0]['name'] = 'wade';

console.log(player_list, copy_player_list)
// [{name:'wade'},{name:'lebron'},{name:'durant'}]
// [{name:'wade'},{name:'lebron'},{name:'durant'}]
```
[MDN-Array.prototype.slice](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

[MDN-Array.prototype.concat](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
  
## Deep Copy

  1. JSON.stringify()
```js
let book = {
  name: 'JavaScript高级程序设计',
  info:{
    price:100
  }
}
let copy_book = JSON.parse(JSON.stringify(book))
copy_book.info.price = 101;
console.log(book,copy_book)
/*
let book = {
  name: 'JavaScript高级程序设计',
  info:{
    price:100
  }
}

let book = {
  name: 'JavaScript高级程序设计',
  info:{
    price:101
  }
}
*/
```
  使用JSON.stringify()方法有一些问题:
  1. undefined symbol及 任意的函数值 在序列化过程中会被忽略
  2. 所有以symbol为属性键的属性都会被完全忽略
  3. 对包含循环引用的对象(对象之间相互引用,形成无限循环)执行此方法,会抛出错误
```js
const obj1 = {
  name:'kyrie',
  a:undefined,
  b:Symbol('foo'),
  c:function f (){}
}
console.log(JSON.stringify(obj1)) // {"name":"kyrie"}
``` 

  实现一个深拷贝
```js
function deepClone(source) {
  // typeof []/typeof {} / typeof null 都返回 object
  if(typeof source === 'object' && source !== null) {
    let target = Array.isArray(source) ? [] : {};
    for(let key of Object.keys(source)) {
      if(typeof source[key] === 'object') {
        target[key] = deepClone(source[key])
      }else{
        target[key] = source[key]
      }
    }
    return target;
  }else{
    return source
  }
}
let copy_book = deepClone(book)
copy_book.info.price = 101;
console.log(book,copy_book)
/*
* let book = {
  name: 'JavaScript高级程序设计',
  info:{
    price:100
  }
}

let book = {
  name: 'JavaScript高级程序设计',
  info:{
    price:101
  }
}
* */

const players = [
  {
    firstName: 'kyrie',
    lastName: 'irving'
  },
  {
    firstName: 'lebron',
    lastName: 'james'
  }
]
const clone_players = deepClone(players)
players[0]['age'] = 100
console.log(clone_players)
/*
{
  '0': { firstName: 'kyrie', lastName: 'irving' },
  '1': { firstName: 'lebron', lastName: 'james' }
}
*/
console.log(players)
/*
[
  { firstName: 'kyrie', lastName: 'irving', age: 100 },
  { firstName: 'lebron', lastName: 'james' }
]
*/
```
  但是上面的算法不支持Map/Set结构,也无法解决循环引用问题。
```js
// ----- map 结构 -------
const map = new Map([
  ['name', '张三'],
  ['title', 'Author']
])

const clone_map = deepClone(map)
console.log(clone_map)  // {}

// ------ set结构 -------
const s1 = new Set()
const s2 = new Set()
s1.add('hello')
s2.add('world')
console.log([s1, s2]) // [ Set(1) { 'hello' }, Set(1) { 'world' } ]
console.log(clone([s1, s2]))  // [ {}, {} ]
```
## 深拷贝(Map/Set/Array/Object)

```ts
// ------------ 支持array/object/map/set -------------
function deep_clone(object: any, map = new WeakMap()) :any {
  if(typeof object !== 'object' || object == null) return object
  const fromMap = map.get(object) // 判断是否循环引用了
  if(fromMap) return fromMap
  let target: any = {};
  map.set(object, target)
  const type = Object.prototype.toString.call(object).slice(8,-1)
  switch(type) {
    case 'Map': {
      target = new Map()
      object.forEach((value, key) => {
        target.set(deep_clone(value, map), deep_clone(key, map))
      })
    }
    break;
    case 'Set': {
      target = new Set()
      object.forEach(v => {
        target.add(deep_clone(v), map)
      })
    }
    break;
    case 'Array': {
      target = object.map(item => deep_clone(item), map)
    }
    break;
    case 'Object': {
      target = {}
      for(const key in object) {
        const v = deep_clone(object[key], map)
        target[key] = v
      }
    }
    break;
  }
  return target
}

// ----- 测试 ------
const k1 = [new Set().add('hello'), new Set().add('world')]
console.log('k1:', deep_clone(k1))  // [ Set(1) { 'hello' }, Set(1) { 'world' } ]

const k2 = [new Map([['hello', 'world'], ['你好', '生活']])]
console.log('k2', deep_clone(k2)) // [ Map(2) { 'world' => 'hello', '生活' => '你好' } ]

const k3 = {
  name: 'hello',
}
const deep_k3 = deep_clone(k3)
k3.name = '你好'
console.log(deep_k3)  // { name: 'hello' }


const o = {
  a: null
}
o.a = o

const deep_o = deep_clone(o)
console.log(deep_o) // { a: {} }
```
