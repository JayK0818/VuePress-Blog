# 运算符

  在JavaScript中的强制类型转换总是返回标量基本类型值。如字符串,数值和布尔值,不会返回对象和函数。

## typeof

```js
const type_array = [ 123, '123', true, null, undefined, NaN, Infinity, [], {},
  new Set(), new Map(), () => {}, /\d+/, new Date() ]

for (const type of type_array) {
  console.log(typeof type)
  /***
   * number
   * string
   * boolean
   * object
   * undefined
   * number
   * number
   * object
   * object
   * object
   * object
   * function
   * object
   * object
   */
}
```

## toString

  将非字符串到字符串的强制类型转换。基本类型的字符串化规则为:
1. null ---> 'null'
2. undefined ---> 'undefined'
3. true ---> 'true'

  对普通对象来说, 除非自行定义, 否则toString() 返回内部属性[[Class]]的值。

```js
console.log((123).toString())   // '123'
console.log((true).toString())  // 'true'
console.log(String(undefined))  // 'undefined'
console.log(String(null))       // 'null'
// --------------------
const obj = { //定义了toString() 方法
  value: 123,
  toString() {
    return this.value
  }
}
console.log(obj.toString())     // 123

// --------------------
const player = {
  firstName: 'kyrie',
  lastName: 'irving'
}
console.log(player.toString())  // [object Object]

// --------------------
//  数组的toString()方法经过了重新定义。将所有单元字符串化以后在用','拼接起来。
const a = [1, 2, 3]
console.log(a.toString()) // 1,2,3
const p = ['kyrie', 'irving']
console.log(p.toString()) // kyrie,irving

// --------------------
const list = [
  {
    firstName: 'kyrie',
    lastName: 'irving'
  },
  {
    firstName: 'lebron',
    lastName: 'james'
  }
]
console.log(list.toString())    // [object Object],[object Object]

// -----------------
const user = {
  name: 'kyrie',
  age: 30,
  toString() {
    return this.name
  },
  valueOf() {
    return this.age
  }
}
console.log(+user)      // 30
console.log(`${user}`)  // kyrie
```

## toNumber

1. true      ---> 1
2. false     ---> 0
3. undefined ---> NaN
4. null      ---> 0

  对象和数组会首先被转换为相应的基本类型值, 如果返回的是非数字的基本类型只,则再遵循以上规则将其强制转化为数字。
  如果toString() 和 valueOf() 都不返回基本类型值,会产生TypeError错误。
```js
const a = {
  valueOf() {
    return '42'
  }
}
const b = {
  toString () {
    return '42'
  }
}
const c = [3, 4]
c.toString = function() {
  return c.join('')
}
// -----------------
console.log(Number(a), Number(b), Number(c))  //42, 42, 34
console.log(Number([]))         // 0
console.log(Number(undefined))  // NaN
console.log(Number(null))       // 0
console.log(Number({}))         // NaN
console.log(Number('123'))      // 123
console.log(Number(true))       // 1
console.log(Number(false))      // 0
console.log(Number([1,2,3]))    // NaN
console.log(Number([1]))        // 1
console.log(Number(['1']))      // 1
console.log(Number(['abc']))    // NaN

// -----------------
const a = {
  toString() {
    return 12
  },
  valueOf() {
    return 34
  },
  [Symbol.toPrimitive]() {
    return 56
  }
}
console.log(Number(a))  // 56

// -----------------
const c = {
  toString() {
    return 12
  },
  valueOf() {
    return 34
  }
}
console.log(Number(c))  // 34

// --------------
const d = new Date()
console.log(+d) // 1657029251856  返回当前的时间戳

const s = '3.14'
console.log(+s) // 3.14
```
1. 一个Demo

```js
console.log([] + [])  // ''
// [] 数组的valueOf() 返回[], 继续调用toString() 返回'' 


console.log([] + {})  // '[object Object]'
//{} 对象的valueOf() 返回{}, 继续调用{}的toString() 返回 [object Object]

console.log({} + []) // 0
// 上面将 {} 当成一个语句, 在执行的时候 就是+[], 效果和{}; + [] 一样
```

## toBoolean

  以下类型强制转化为布尔值时是false
1. undefined
2. null
3. false
4. ''
5. 0

```js
const a = new Boolean(false)
const b = new Number(1)
const c = new String('123')

console.log(Boolean(a && b && c)) // true  (因为它们都是包装对象)
```

## 按位运算符

1. 按位非运算符(~) 大致等同于 ~x ===> -(x+1)

  在-(x+1)中唯一能得到0的x值是 -1。x为-1时, 会返回假值0, 其他情况则返回真值。在JavaScript中的indexOf()方法也
  遵循这一惯例。如果找到就返回字符串所在的位置(从0开始), 否则返回-1.
```js
const a = 'Hello World'
if(a.indexOf('lo') >=0) {
  //
}
if(a.indexOf('lo') != -1) {
  //
}
if(a.indexOf('lo') < 0) {
  // 
}
if(a.indexOf('lo') == -1) {
  //
}

// >=0 和 == -1 这样的写法不是很好, 被称为'抽象捡漏', 在代码中暴露了底层的实现细节。
```
```js
const string = 'Hello World'
~indexOf('lo')  // -4     真值

if(!~indexOf('')) {

}
```

2. | 和 & 

  按位运算符& 在两个操作数对应的二进位都为1时, 该位的结果值才为1, 否则为0.
  
```js
const a = 123, b = 234;
console.log(!!(a & 1))  // true
console.log(!!(b & 1))  // false
console.log(!!(12 & 1)) // false
console.log(!!(13 & 1)) // true

console.log(1.23 | 0) // 1
console.log(456 | 0)  // 456
```
