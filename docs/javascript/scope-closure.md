# 作用域和闭包

  - 引擎：  负责整个JavaScript程序的编译以及执行过程
  - 编译器: 负责语法分析及代码生成
  - 作用域: 负责收集并维护由所有声明的标识符组成的一系列查询,并实施一套非常严格的规则,确定当前执行的代码
  对这些标识符的访问权限。(LHS查询和RHS查询)

```js
var a = 2
// 定义声明是在编译阶段进行的, 赋值声明会被留在原地等待执行阶段。
```

## 变量查询

```js
function foo(a) {
  console.log(a)
}
foo(2)
/*
最后1行foo()函数意味着调用需要对foo进行RHS引用, 代码中隐式的 a = 2 需要进行一次LHS查询。
还有对a进行的RHS引用, 并且将得到的值传递给了 console.log()。
*/
```
```js
// demo
function foo(a){
  var b = a;
  return a + b
}
/*
LHS查询和RHS查询
c = ... , a = 2, b =..
foo(2... ,=a, a, b)
*/
```
## 作用域嵌套

  当一个块或者函数在另一个块或者函数中时,就发生了作用域的嵌套。因此,在当前作用域中无法找到某个变量时,
  引擎就会在外层嵌套的作用域链中继续查找,直到找到该变量为止。

```js
function foo(a) {
  return a + b
}
var b = 2
foo(2)  // 4
```
  区分RHS和LHS查询的原因:
  如果使用RHS查询在所有嵌套的作用域中遍寻不到所需要的变量,引擎就会抛出ReferenceError异常,如果RHS查询到一个变量,
  但是试图对这个变量进行不合理的操作,那么引擎会抛出另一个类型的异常,TypeError.

  如果使用LHS查询时,如果在顶层中也无法找到目标变量, 全局作用域中就会创建一个具有该名称的变量,并将其返还给引擎。

:::tip
ReferenceError同作用域判断失败相关,而TypeError则代表了作用域判断成功,但是对结果的操作是非法的。

由Function 构造的函数 [[scope]] 里只有全局的变量对象
:::

```js
var a = 10
function foo() {
  var b = 20
  function f1() {
    console.log(a, b)
  }
  var f2 = function(){
    console.log(a, b)
  }
  var f3 = Function('console.log(a, b)')
  f1()  // 10 20
  f2()  // 10 20
  f3()  // 10 b is not defined
}
```
## 函数作用域

```js
function doSomething(a) {
  function doSomethingElse(a) {
    return a - 1;
  }
  b = a + doSomethingElse(a * 2)
  console.log(b * 3)
}
doSomething(2)  // 15
```
  '隐藏' 作用域中的变量和函数 可以避免同名标识符之间的冲突。

### 匿名和具名

```js
setTimeout(function() {
  console.log('I waited 1 second')
})
```
  函数表达式可以是匿名的, 函数声明不可以省略函数名 - 在JavaScript的语法中是非法的。

### 立即执行函数表达式(IIFE)

  Immediately Invoked Function Expression.
  
  IIFE最常见的用法是使用一个匿名函数表达式.
```js
var a = 2;
(function foo() {
  var a = 3;
  console.log(a)
})()

console.log(a)  // 2


// 把IIFE当作函数调用并传递参数
var a = 2
(function foo(global) {
  var a = 3;
  console.log(a)  // 3
  console.log(global.a) // 2
})(window)
console.log(a)  // 2
```

## 提升

```js
a = 2
var a;
console.log(a)    // 2


// -------- 
console.log(a)  // undefined
var a = 2

// -------
foo()
function foo() {
  console.log(a)  // undefined
  var a = 2
}
```
:::tip
只有声明本身会被提升, 而赋值或其他运行逻辑会留在原地。
:::

### 函数优先

  函数声明和变量声明都会被提升, 但是函数会首先被提升, 然后才是变量。
```js
foo()

var foo
function foo() {
  console.log(1)
}
foo = function() {
  console.log(2)
}
// 以上代码输出1

// ---------
baz()
function baz() {
  console.log(1)
}
var baz = function() {
  console.log(2)
}
function baz() {
  console.log(3)
}
// 以上代码输出3
```

## 闭包

  一个函数和对其周围状态的引用捆绑在一起 这样的组合就是闭包。闭包可以让你可以在一个内层函数中访问到其外层函数的作用域。

```js
function foo() {
  var a = 2
  function bar() {
    console.log(a)
  }
  bar()
}
foo()

// bar()对a的引用的方法是词法作用域的查找规则,这些规则只是闭包一部分。


// 下面的代码展示了闭包:
function foo() {
  var a = 2
  function bar() {
    console.log(a)
  }
  // 将bar所引用的函数对象本身当作返回值。
  return bar;
}
var baz = foo()
baz()
// foo()执行后, 其返回值赋值给变量baz并调用baz(),实际上只是通过不同的标识符引用
// 调用了函数的内部bar(). 调用baz()后依然持有对该作用域的引用, 
//而这个引用就叫做闭包。闭包使得函数可以继续访问,定义时的词法作用域。

// --------- 直接传递函数 --------
function foo() {
  var a = 2
  function baz() {
    console.log(a)
  }
  bar(baz)
}
function bar(fn) {
  fn()
}

// 传递函数也可以是间接的 。
var fn
function foo() {
  var a = 2
  function baz() {
    console.log(a)
  }
  fn = baz;
}
function bar() {
  fn()
}
foo()
```

```js
// 下面是一个mdn的demo
function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px'
  }
}

const size12 = makeSizer(12)
const size14 = makeSizer(14)
const size16 = makeSizer(16)


// ---------- 用闭包模拟私有方法 ---------
const Counter = (function() {
  let privateCounter = 0;
  function changeBy(value) {
    privateCounter += value;
  }
  return {
    increment: function() {
      changeBy(1)
    },
    decrement: function() {
      changeBy(-1)
    },
    value: function() {
      return privateCounter
    }
  }
})()
```
:::tip
在定时器, 事件监听器, Ajax请求或者任何其他的异步(或者同步)任务中, 只要使用了回调函数, 实际上就是在使用
闭包
:::
