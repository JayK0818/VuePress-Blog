# 概念

## Event Loop

1. 进程(process)是计算机中的程序关于某数据集合上的一次运行活动, 是系统进行资源分配和调度的基本单位, 是操作系统结构的基础。

2. 线程(thread) 是操作系统能否进行运算调度的最小单位。它被包含在进程之中,是进程中的实际运作单位。 一个进程中可以有很多线程, 每条线程
  并行执行不同的任务。

  JavaScript的单线程，与它的用途有关。作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。这决定了它只能是单线程，
  否则会带来很复杂的同步问题。

3. 同步任务和异步任务:
    同步任务指的是 在主线程上排队执行的任务,只有前一个任务执行完毕,才能执行后一个任务。（执行栈 execution context stack）
    异步任务: 不进入主线程,而进入任务队列, 只有任务队列通知主线程,某个异步任务可以执行了,该任务才会进入到主线程执行。(task queue)

  主线程空了,就会去读取'任务队列', 任务队列是一个先进先出的数据结构。只要执行栈一清空,'任务队列'上第一位的事件就自动进入到主线程。
  这个过程是循环不断的,所以整个的这种运行机制又称为Event Loop(事件循环)
  
```js
setTimeout(() => {console.log(1)}, 0)
```
  HTML5规定了setTimeout()的第二个参数最小值不得低于4ms，如果低于这个值就会自动增加。 setTimeout()只是将事件插入了'任务队列',
  所以没有办法保证,回调函数一定会在setTimeout()指定的事件执行。

**宏任务/微任务**

1. 宏任务: 整体代码 setTimeout setInterval
2. 微任务: Promise MutationObserver

  第一次事件循环中，JavaScript 引擎会把整个 script 代码当成一个宏任务执行，执行完成之后，再检测本次循环中是否寻在微任务，存在的话就依次从微任务的任务队列中读取执行完所有的微任务，再读取宏任务的任务队列中的任务执行，再执行所有的微任务，如此循环。JS 的执行顺序就是每次事件循环中的 宏任务-微任务。

[JavaScript-Event-Loop](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)
```js
// 面试题 下面代码的执行顺序
async function async1(){
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}
async function async2(){
  console.log('async2')
}
console.log('script start')
setTimeout(() => {
  console.log('setTimeout')
},0)
async1()

new Promise(resolve => {
  console.log('promise1')
  resolve()
}).then(() => {
  console.log('promise2')
})
console.log('script end')
/* 正确执行顺序 ： 
script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout
*/ 
```
  Promise新建后就会立即执行。 立即resolve()的Promise对象,是在本轮事件循环的结束时执行,而不是在下一轮 事件循环开始时。
```js
// 以下代码的执行顺序
console.log('start')
setTimeout(() => {
  console.log('children2')
  Promise.resolve().then(() => {
    console.log('children3')
  })
},0)
new Promise(resolve => {
  console.log('children4')
  setTimeout(() => {
    console.log('children5')
    resolve('children6')
  },0)
}).then(res => {
  console.log('children7')
  setTimeout(() => {
    console.log(res)
  },0)
})
/*
start
children4
children2
children3
children5
children7
children6
*/
```
```js
const p = function() {
  return new Promise(resolve => {
    const p1 = new Promise(resolve => {
      setTimeout(() => {
        resolve(1)
      },0)
      resolve(2)
    })
    p1.then(res => {
      console.log(res)
    })
    console.log(3)
    resolve(4)
  })
}
p().then(res => {
  console.log(res)
})
console.log('end')
/*
3
end
4
2
*/
```
  Promise对象的状态改变,只有两种可能:从pending变为fulfilled和从pending变为rejected.状态改变就凝固了不会再改变了。

## 垃圾回收

1. 函数的局部变量

  局部变量只在函数执行的过程中存在,在这个过程中会为局部变量在栈(或堆)内存上分配相应的空间。以便存储它们的值。然后在函数中使用这些值。
  直至函数执行完成, 此时局部变量就没有存在的必要了。

### 引用计数

  另一种不太常见的垃圾收集策略 叫做 引用计数(reference counting).
  引用计数有一个问题, 就是无法回收循环引用的对象。

```js
function count_fn(){
  const object1 = {}
  const object2 = {}
  object1.name = object2;
  object2.name = object1;
}
```
  在采用引用计数的垃圾回收策略中,当函数执行完毕后, object1和object2将继续存在,因为它们的引用次数永远不会是0。
### 标记清除

  JavaScript中最常用的垃圾收集方式就是 标记清除。
  垃圾收集器在运行的时候会给存储在内存中的所有变量都加上标记, 然后它会去掉环境中的变量 以及被环境中的变量引用的变量的标记。而
  在此之后再被加上标记的变量将被视为准备删除的变量。原因是环境中的变量已经无法访问到这些变量了。最后,垃圾收集器完成内存清除工作。
  销毁那些带标记的值并回收它们所占用的内存空间。

  分标记和清除,先遍历所有对象找到活动对象,再次遍历清除没有标记的对象,可以解决循环引用不能回收。

### 管理内存

  确保占用最少的内存可以让页面获得更好的性能。而优化内存占用的最佳方式,就是为执行的代码只保存必要的数据。一旦数据
  不再有用, 最后通过将其值设置为null来释放其引用。这种方法叫做解除引用。

```js
// 创建dom,但不再页面上显示 分离dom
let tempElement = null;
function fn() {
 const ul = document.createElement('ul')
 for(let i = 0; i < 10; i++){
   ul.appendChild(document.createElement('li'))
 }
 tempElement = ul;
 tempElement = null;
}

// 事件解绑
{
  methods: {
    listen_click() {}
  },
  mounted() {
    document.addEventListener('click', this.listen_click, false)
  },
  beforeUnmounted(){
    document.removeEventListener('click', this.listen_click, false)
  }
}

// 清除定时器
{
  mounted() {
    this.timer = setTimeout(() => {

    })
  },
  beforeUnmounted() {
    if(this.timer) clearTimeout(this.timer)
  }
}
```

