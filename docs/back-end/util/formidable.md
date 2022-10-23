# Formidable

  A Node.js module for parsing form data, especially file uploads

```js
// Usage with express
const formidable = require('formidable')
const express = require('express')
const app = express()

app.post('/api/upload', (req, res) => {
  const form = formidable({
    multiples: true
  })
  form.parse(req, (err, fields, files) => {

  })
})
```
```js
// Usage with Koa
const Koa = require('koa')
const formidable = require('formidable')

const app = new Koa()
app.use(async (ctx, next) => {
  const form = formidable({
    multiples: true
  })
  await new Promise((resolve, reject) => {
    form.parse(ctx.req, (err, fields, files) => {
      if (err) return reject(err)
      ctx.set('Content-Type', 'application/json')
      console.log(fields, files)
      resolve()
    })
  })
  await next()
})
/*
Be aware that you should pass ctx.req which is Node.js's Request, and not the ctx.request
Which is Koa's Request object --- there is a difference.
*/
```
```js
// fields 接收的是formData传递过来的非 文件数据的 键值对象
// files为接收的文件对象数组
/*
fields { username: 'hello' }
files {
  file: PersistentFile {
    _events: [Object: null prototype] { error: [Function (anonymous)] },
    _eventsCount: 1,
    _maxListeners: undefined,
    lastModifiedDate: 2022-10-23T04:12:49.987Z,
    filepath: '/var/folders/kt/vrqg0gts6sb93999w0w_3vp40000gn/T/4699b8a63982ce1680f305a00',
    newFilename: '4699b8a63982ce1680f305a00',
    originalFilename: '2f72e6b9aae7cf7759c6840c6867fbdc.jpeg',
    mimetype: 'image/jpeg',
    hashAlgorithm: false,
    size: 89795,
    _writeStream: WriteStream {
      fd: 32,
      path: '/var/folders/kt/vrqg0gts6sb93999w0w_3vp40000gn/T/4699b8a63982ce1680f305a00',
      flags: 'w',
      mode: 438,
      start: undefined,
      pos: undefined,
      bytesWritten: 89795,
      closed: false,
      _writableState: [WritableState],
      _events: [Object: null prototype],
      _eventsCount: 1,
      _maxListeners: undefined,
      [Symbol(kFs)]: [Object],
      [Symbol(kIsPerformingIO)]: false,
      [Symbol(kCapture)]: false
    },
*/
```

## Options

```js
const formidable = require('formidable')
const form = formidable({
  encoding: 'utf-8',      // sets encoding for incoming form fields
  uploadDir: '/temp',     // the directory for placing file uploads in
  keepExtensions: false,  // to include the extensions of the original files or not
  allowEmptyFiles: true,  // allow upload empty files
  minFileSize: 1,         // the minium size of uploaded file
  maxFileSize: 200 * 1024 * 1024,  // limit the size of uploaded file
  multiples: false,        // support multiple files using the HTML5 multiple attribute.
  filename: undefined,      // use it to control newFilename.
})
```

## Events

```js
const formidable = require('formidable')
const form = formidable({
  multiples: true
})

// progress
//文件上传进度事件 (Emitted after each incoming chunk of data that has been parsed)
form.on('progress', (bytesReveived, bytesExpected) => {
})

// field
// formData传递过来的键值对
form.on('field', (name, value) => {

})

// fileBegin (Emitted whenever a new file is detected in the upload stream)
form.on('fileBegin', (formname, file) => {

})

// Emitted whenever a field / file pair has been received
form.on('file', (formname, file) => {

})

// error 
// Emitted when there is an error processing the incoming form.
form.on('error', () => {

})

// end
form.on('end', () => {
  console.log('end')
})
```

