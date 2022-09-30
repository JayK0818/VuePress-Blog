# Mongoose

  elegant mongodb object modeling for nodejs
```js
npm install mongoose --save

// 连接数据库
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/database', {
  bufferCommands: false,
  user: , // username
  pass: , // password
  autoIndex: false, // index builds can cause performance degradation
  dbName: 'test',   // Specifies which database to connect to
})

/*
Mongoose lets you start using your models immediately, without waiting for mongoose
to establish a connection to MongoDB
*/
// 全局禁止缓冲
mongoose.set('bufferCommands', false)
```
## Connect

  There are two classes of errors that can occur with a Mongoose connection.
```js
mongoose.connect('mongodb://localhost:27017/test').catch(err => {})

try {
  await mongoose.connect('mongodb://localhost:27017/test')
} catch(err) {

}
```
  如果在初始连接数据库失败的时候, Mongoose将会抛出一个 error 异常事件 并且Mongoose 不会自动尝试重新连接。但是在初始连接建立后 触发的异常, Mongoose
  会尝试重新连接并同样抛出 error 事件。
```js
// To handle errors after initial connection was established.
mongoose.connect.on('error', (err) => {

})
```
  Connection Events
```js
connection    // Emitted when Mongoose starts making its initial connection
connected     // Emmitted when Mongoose successfully makes its initial connection
disconnected  // lost connection
reconnected   //  Emitted if Mongoose lost connectivity to MongoDB and successfully reconnected
```

## Schema

  Everything in Mongoose starts with a Schema. Each Schema maps to a MongoDB collection and defines the shape of the
  documents within that collection.


## Models

  An instance of a model is called document. Models are responsible for creating and reading documents from the underlying
  MongoDB database.

```js
const mongoose = require('mongoose')
const PlayerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
})
// Mongoose automatically looks for the plural, lowercased version of your model name.
const Player = mongoose.model('player', PlayerSchema)

// 保存数据的第一种方式(保存成功后都会返回保存的数据)
Player.insertMany([
  {
    firstName: 'kyrie',
    lastName: 'irving',
    age: 30,
    create_time: Date.now()
  },
  {
    firstName: 'lebron',
    lastName: 'james',
    age: 38
  }
]).then(res => {
  console.log(res)
})

// 第二种
const player = new Player({
  firstName: 'kevin',
  lastName: 'love',
  age: 34
})
player.save()

// 第三种
Player.create({
  firstName: 'kevin',
  lastName: 'durant',
  age: 34
}).then((res) => {
  console.log(res)
})

// query
Player.find({}).then(res => {
  console.log(res)
})

// delete
Player.deleteOne({ age: 34 }).then(res => {
  console.log(res)
})

// update
Player.updateOne({ firstName: 'lebron'}, { lastName: 'KingJames'})
.then(res => {
  console.log(res)
})
```

## Queries

  Mongoose models provide several static helper functions for CRUD operations.

1. find / findOne / findById
```js
const { log } = console
// Promise写法
Player.find({}).then(res => { log(res) })
// 回调函数写法, 错误优先, 如果发生错误,则err是一个错误对象,data为null, 否则err为null.
Player.find({}, (err, data) => { log(data) })

Player.find({ age: 34 }).then((res) => log(res))

Player.findOne({}).then(res => log(res)) // 默认查找第一个

Player.findOne({age: 34}).then(res => log(res))  // 第一个符合条件的

Player.findById('633691c7e6c86518d6f64a19').then(res => log(res))

// 链式调用, 按年龄排序
Player.find({}).sort({age: 1}).then(res => { log(res) })
```