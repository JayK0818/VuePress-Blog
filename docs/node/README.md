# Buffer

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
