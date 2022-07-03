# 运算符

  在JavaScript中的强制类型转换总是返回标量基本类型值。如字符串,数值和布尔值,不会返回对象和函数。

## ToNumber

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
console.log(Number(a), Number(b), Number(c))  //42, 42, 34
console.log(Number([]))         // 0
console.log(Number(''))         // 0
console.log(Number('abc'))      // NaN
console.log(Number(NaN))        // NaN
console.log(Number(undefined))  // NaN
console.log(Number([1,2,3]))    // NaN
console.log(Number(null))       // 0
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
