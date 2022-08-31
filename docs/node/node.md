# Node.js

## Buffer

  Buffer 库为 Node.js 带来了一种存储原始数据的方法，可以让 Node.js 处理二进制数据. Buffer对象类似于数组,它的元素为16进制的两位数。
```js
const buffer = Buffer.alloc(5)
// <Buffer 00 00 00 00 00>
const buffer = Buffer.alloc(5, 'a')
// <Buffer 61 61 61 61 61>

const buffer = Buffer.from('hello world') // 默认使用utf-8编码进行转码和存储
// <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>

// 将buffer转换为字符串
console.log(buffer.toString())  // hello world

// 合并buffer
const buf1 = Buffer.from('hello')
const buf2 = Buffer.from('world')
console.log(Buffer.concat([buf1, buf2]).toString())

// 设置编码方式
const b3 = Buffer.from('hello world', 'utf8')
console.log(b3.toString('utf16le')) // 敨汬⁯潷汲
console.log(b3.toString('base64'))  // aGVsbG8gd29ybGQ=
```

```js
// hello.txt
/* 窗前明月光,疑似地上床。
举头望明月,低头思故乡。*/

// 从输入流中读取buffer
const rs = fs.createReadStream('./hello.txt')
let data = ''
rs.on('data', function (chunk) {
  data += chunk
})
rs.on('end', () => {
  console.log(data)
})
```
  这段代码在 data += chunk 时隐藏了toString()操作, 等价于data = data.toString() + chunk.toString(). 在中文下可能会出现乱码问题。
```js
// 添加这行代码, 这是每次可读流读取的buffer长度为11.
const rs = fs.createReadStream('./hello.txt', { highWaterMark: 11 })
/*
窗前明��光，疑���地上霜。
举头望明月��低头思���乡。
*/

// 1. 可以通过buffer.concat方法将buffer拼接后再转换为字符串。
const array = []
rs.on('data', function (chunk) {
  array.push(chunk)
})
rs.on('end', () => {
  console.log(Buffer.concat(array).toString())
  /*
  窗前明月光,疑似地上霜。
  举头望明月,低头思故乡。
  */
})

// 2: 可以通过设置可读流的编码方式
rs.setEncoding('utf8')
let data = ''
rs.on('data', function (chunk) {
  data += chunk
})
rs.on('end', () => {
  console.log(data)
  /*
  窗前明月光,疑似地上霜。
  举头望明月,低头思故乡。
  */
})
```

## File System

  fs 是node.js 内置的 可以对文件进行操作的模块

```js
const fs = require('fs')
// 读取文件
fs.readFile('./data/input.txt', 'utf8', (err,data) => {
  if (err) {
    console.log('error', err)
  } else {
    console.log(data) // 'hello world'
  }
})


// 打开文件
// r: 读取模式打开文件
fs.open('./data/input.txt', 'r', (err, data) => {
  console.log(data) // hello world
})

// w:以写入模式打开文件,没有的话就创建
fs.open('./data/poem.txt', 'w', (err, data) => {
  if(err) {
    console.log(err)
  } else {
    console.log(data)
  }
})

// ------ 获取文件信息 -------
fs.stat('./data/input.txt', (err, stats) => {
  if(!err) {
    console.log(stats.isFile(), stats.isDirectory())
    // true false
  }
})

// --------- 写入文件 -------
fs.writeFile('./data/input.txt', '我是通过fs写入的内容', (err) => {
  if (err) {
    console.log('write-error', err)
  } else {
    console.log('写入成功')
  }
})
// ------ 追加写入内容 -------
fs.writeFile('./data/input.txt', 'hello, 我是追加的内容', {
  encoding: 'utf8',
  flag: 'a'
}, (err) => {
  if (!err) {
    console.log('追加成功')
  } else {
    console.log('write-error', err)
  }
})


// --------- 删除文件 --------
fs.unlink('./data/poem1.txt', (err) => {
  if (!err) {
    console.log('delete success')
  }
})

// --- 创建目录 ------
fs.mkdir('./src/views', (err) => {
  if (!err) {
    console.log('create directory success')
  }
}) 

// ------ 读取目录 ------
fs.readdir('./src/', (err, data) => {
  if (!err) {
    data.forEach(file => {
      console.log('file', file) // file views/components
    })
  }
})


// ------ 检测文件路径是否存在 ------
fs.exists('./data/hello.txt', (err) => {
  console.log(err)  // false
})
fs.exists('./data/input.txt', (err) => {
  console.log(err)  // true
})
```

## 模块系统

  Node.js提供了一个模块系统，一个文件就是一个模块。通过require引入模块。
```js
// math.js
const increase = (a, b) => a + b
const decrease = (a, b) => a - b

exports.increase = increase
exports.decrease = decrease

// index.js
const math = require('./math.js')
console.log(math.decrease(1, 3))  // -2
console.log(math.increase(1, 3))  // 4


// 或者通过module.exports 导出
// math.js
module.exports = {
  increase,
  decrease
}
// index.js
const { increase, decrease } = require('./math.js')
console.log(increase(1, 3))
console.log(decrease(1, 3))
```
  exports是module.exports的一个引用。如果对外暴露属性或者方法, 用exports就行, 如果要对外导出对象,使用module.exports。

```js
// 在node.js中引入 esm 导出的文件()
// math.mjs
const increase = (a, b) => a + b
const decrease = (a, b) => a - b

export {
  increase,
  decrease
}

// index.mjs
import { decrease, increase } from './math.mjs'
console.log(decrease(1, 3)) // -2
console.log(increase(1, 3)) // 4
```

## Stream

  Stream 是一个抽象接口。Node.js中有四种流类型:
1. Readable   - 可读流
2. Writable   - 可写流
3. Duplex     - 可读可写操作
4. Transform  - 操作被写入数据,然后读出结果

  所有Stream对象都是EventEmitter的实例, 常用的事件有:
1. data   - 数据可读时触发
2. end    - 没有更多数据可读时触发
3. error  - 接收和写入发生错误时触发
4. finish - 所有数据都已被写入到底层系统时触发

```js
// 创建可读流
const fs = require('fs')
const readStream = fs.createReadStream('./input.txt')

const chunks = []
readStream.on('data', chunk => {
  chunks.push(chunk)
})
readStream.on('end', () => {
  console.log(Buffer.concat(chunks).toString())
})


// 写入流
const writeStream = fs.createWriteStream('./output.txt')
writeStream.write('hello world')
writeStream.end()


// 追加写入内容
fs.appendFile('./data/output.txt', '我是追加的内容', err => {
  if(err) console.log('error', err)
  console.log('追加成功')
})

// 也可以通过设置 flags 设置可写流为追加
const writeStream = fs.createWriteStream('./output.txt', { flags: 'a' })
```