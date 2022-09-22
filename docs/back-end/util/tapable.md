# Tapable

  The tapable package expose many hook classes, which can be used to create hooks for plugins.

  All hook constructors take one optional argument, which is a list of argument names as strings
```js
同步钩子:
SyncHook / SyncBailHook / SyncWaterfallHook / SyncLoopHook

异步钩子:
AsyncParallelHook / AsyncSeriesHook / AsyncSeriesWaterfallHook 
```
## SyncHook

1. For sync hooks, tap is the only valid method to add a plugin. Async hooks also support async plugins
2. Basic hook simply calls every function it tapped in a row.

```js
const { SyncHook } = require('tapable')
const hook = new SyncHook(['name', 'age'])

hook.tap('m1', function(name, age) {
  console.log('m1 call', name, age, typeof age)
})
hook.tap('m2', function(name, age) {
  console.log('m2 call', name, age)
})
hook.tap('m3', function(name, age) {
  console.log('m3 call', name, age)
})

hook.call('kyrie', 30)
/*
m1 call kyrie 30
m2 call kyrie 30
m3 call kyrie 30
*/
```
## SyncBailHook

  When any of the tapped function returns anything, the bail hook will stop executing the remaining ones
```js
const { SyncBailHook } = require("tapable");

const hook = new SyncBailHook(['name', 'age'])

hook.tap('m1', (name, age) => {
  console.log('m1', name, age)
})
hook.tap('m2', (name, age) => {
  console.log('m2', name, age)
  // return 非undefined时 会阻止后面的 函数执行
})
hook.tap('m3', (name, age) => {
  console.log('m3', name, age)
})

hook.call('lebron', 38)
/*
m1 lebron 38
m2 lebron 38
m3 lebron 38
*/

// 当在第二个 函数 返回 非undefined时, 注册的m3 不会执行。
```

## SyncLoopHook

  When a plugin in a loop hook returns a non-undefined value the hook will restart from the first plugin
  it will loop until all plugins return undefined

```js
const { SyncLoopHook } = require('tapable')

const hook = SyncLoopHook()

let count1 = 0, count2 = 0;
hook.tap('m1', function() {
  console.log('m1 invoke...')
  count1 += 1
  if(count1 > 2) return undefined
  return true
})

hook.tap('m2', function() {
  console.log('m2 invoke...')
  count2 += 1
  //  只要不符合条件, 重头开始执行
  if(count2 > 2) return undefined
  return true
})

hook.tap('m3', () => {
  console.log('m3 invoke...')
})

hook.call()
/*
m1 invoke...
m1 invoke...
m1 invoke...
m2 invoke...
m1 invoke...
m2 invoke...
m1 invoke...
m2 invoke...
m3 invoke...
*/
```

## SyncWaterfallHook

  A waterfall hook also calls each tapped function in a row, Unlike the basic hook, it passes a return value
  from each function to the next function.

```js
const { SyncWaterfallHook } = require('tapable')
const hook = SyncWaterfallHook(['name'])

hook.tap('m1', function(name) {
  console.log('m1 invoke...', name)
  return `Hello, ${name}`
})
hook.tap('m2', function(name) {
  console.log('m2 invoke...', name)
  return `你好 ${name}`
})
hook.tap('m3', function(name) {
  console.log('m3 invoke...', name) // Hello, kyrie-30 30
  return `Welcome, ${name}`
})

hook.call('kyrie')
/*
m1 invoke... kyrie
m2 invoke... Hello, kyrie
m3 invoke... 你好 Hello, kyrie
*/
```

## AsyncSeriesHook

  可以使用 hook.tap() / hook.tapAsync() / hook.tapPromise() 注册函数。(串行执行)
```js
const { AsyncSeriesHook } = require('tapable')

const series_hook = AsyncSeriesHook(['name', 'age'])
series_hook.tapAsync('m1', function(name, age, callback) {
  setTimeout(() => {
    console.log('m1 invoke...', name, age)
    callback()
  }, 1000)
})
series_hook.tapAsync('m2', function(name, age, callback) {
  setTimeout(() => {
    console.log('m2 invoke...', name, age)
    callback()
  }, 1200)
})
series_hook.tapAsync('m3', function(name, age, callback) {
  setTimeout(() => {
    console.log('m3 invoke...', name, age)
    callback()
  }, 2000)
})

series_hook.callAsync('kyrie', 30, function() {
  console.log('end')
})

/* m1 invoke... kyrie 30
m2 invoke... kyrie 30
m3 invoke... kyrie 30
end */


// .tap的方式 无需执行回调函数
const sync_series_hook = new AsyncSeriesHook(['namge'])
sync_series_hook.tap('f1', (name) => {
  console.log('f1 invoke...', name) // lebron
})
sync_series_hook.tap('f2', (name) => {
  console.log('f2 invoke...', name) // lebron
})
// 此处调用的时候 必须传递一个回调函数, 否则会报错
sync_series_hook.callAsync('lebron', () => {
  console.log('sync end...')
})
/*
f1 invoke... lebron
f2 invoke... lebron
sync end...
*/


const promise_series_hook = new AsyncSeriesHook(['firstName', 'lastName'])
promise_series_hook.tapPromise('p1', (firstName, lastName) => {
  // 此处必须返回一个promise, 并执行resolve
  // 如果没有返回promise,则报错, 没有执行resolve, 后续注册的函数不会执行
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
      console.log(`p1 invoke... ${firstName} - ${lastName}`)
    }, 1000)
  })
})

promise_series_hook.tapPromise('p2', (firstName, lastName) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
      console.log(`p2 invoke... ${firstName} - ${lastName}`)
    }, 1200)
  })
})

promise_series_hook.callAsync('lebron', 'james', () => {
  console.log('promise end...')
})
/*
p1 invoke... lebron - james
p2 invoke... lebron - james
promise end...
 */
```

## AsyncParallelHook

```js
const { AsyncParallelHook } = require('tapable')
const parallel_hook = AsyncParallelHook(['firstName', 'lastName'])

parallel_hook.tapAsync('m1', (firstName, lastName, callback) => {
  setTimeout(() => {
    console.log('m1 invoke...', firstName, lastName)
    callback()
  }, 2000 )
})

parallel_hook.tapAsync('m2', (firstName, lastName, callback) => {
  setTimeout(() => {
    console.log('m2 invoke...', firstName, lastName)
    callback()
  }, 1500)
})

parallel_hook.tapAsync('m3', (firstName, lastName, callback) => {
  setTimeout(() => {
    console.log('m3 invoke...', firstName, lastName)
    callback()
  }, 1800)
})

parallel_hook.callAsync('lebron', 'james', () => {
  console.log('parallel end...')
})
// 并行执行, 并且 谁先执行完 谁先输出
/*
m2 invoke... lebron james
m3 invoke... lebron james
m1 invoke... lebron james
parallel end...
*/


const parallel_promise_hook = AsyncParallelHook(['firstName'])
parallel_promise_hook.tapPromise('p1', (firstName) => {
  // 一定要返回一个 promise
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('p1 invoke...', firstName)
      resolve()
    }, 1000)
  })
})
parallel_promise_hook.tapPromise('p2', (firstName) => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('p2 invoke...', firstName)
      resolve()
    }, 800)
  })
})
parallel_promise_hook.callAsync('durant', () => {
  console.log('promise called')
})
/*
p2 invoke... durant
p1 invoke... durant
promise called
*/
```

## AsyncSeriesWaterfallHook

```js
const { AsyncSeriesWaterfallHook } = require('tapable')
const hook = AsyncSeriesWaterfallHook(['name'])

hook.tapAsync('m1', (name, callback) => {
  setTimeout(() => {
    console.log('m1 invoke...', name)
    // 参数通过第二个callback 的第二个参数传递
    callback(null, '你好')
  }, 1000)
})

hook.tapAsync('m2', (name, callback) => {
  setTimeout(() => {
    console.log('m2 invoke...', name)
    callback(null, '生活')
  }, 1000)
})

hook.tapAsync('m3', (name, callback) => {
  setTimeout(() => {
    console.log('m3 invoke...', name)
    callback(null, '你好,生活')
  }, 1000)
})

hook.callAsync('hello', (a, end) => {
  console.log('end...', end)
})
/*
m1 invoke... hello
m2 invoke... 你好
m3 invoke... 生活
end... 你好,生活
*/
```

## HookMap

```js
// A HookMap is a helper class for a Map with hooks
const keyHook = new HookMap(key => SyncHook(['arg']))
keyHook.tap('kyrie', 'f1', (arg) => {
  console.log('f1 invoke...', arg)
})
keyHook.tap('kyrie', 'f2', (arg) => {
  console.log('f2 invoke...', arg)
})
keyHook.tap('lebron', 'f1', (arg) => {
  console.log('f1 invoke...', arg)
})
keyHook.tap('lebron', 'f2', (arg) => {
  console.log('f2 invoke...', arg)
})

const kyrie_hook = keyHook.get('kyrie')
const lebron_hook = keyHook.get('lebron')

if(kyrie_hook) {
  kyrie_hook.call(30)
}
if(lebron_hook) {
  lebron_hook.call(38)
}
/*
f1 invoke... 30
f2 invoke... 30
f1 invoke... 38
f2 invoke... 38
*/
```