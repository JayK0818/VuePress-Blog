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
## Schemas

  Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
```js
import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
  title:  String, // 简写方式 ---> { type: String }
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  meta: {
    votes: Number,
    favs:  Number
  }
})
```

### Virtuals

  Virtuals are documents properties that you can get and set but that do not get persisted to MongoDB. The getters are useful
  for formatting or combining fields.

```js
const PlayerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
},
// 第一种方式
{
  virtuals: {
    fullName: {
      get() {
        return this.name.firstName + '-' + this.name.lastName
      }
    }
  }
})
// 第二种方式
PlayerSchema.virtual('reverseFullName').get(function() {
  return this.name.lastName + '-' + this.name.firstName
})
const Player = mongoose.model('player', PlayerSchema)

Player.find({}).then(res => {
  const list = res.map(item => item.fullName)
  const reverst_list = res.map(item => item.reverseFullName)
  console.log(list, reverst_list)
  // [ 'lebron-james' ] [ 'james-lebron' ]
})
```

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

const query = Player.findOne({ firstName: 'lebron' })
// execute the query at a later time
query.exec((err, player) => {
  if (err) {
    log(err)
  } else {
    log(player)
    /*
    {
      _id: new ObjectId("6340d00d0098378fe6bfc1f6"),
      firstName: 'lebron',
      lastName: 'james',
      age: 38,
      create_time: 2022-10-08T01:19:09.983Z,
      __v: 0
    }
    */
  }
})

Player.findOne({}).then(res => log(res)) // 默认查找第一个

Player.findOne({age: 34}).then(res => log(res))  // 第一个符合条件的

Player.findById('633691c7e6c86518d6f64a19').then(res => log(res))

// 链式调用, 按年龄排序
Player.find({}).sort({age: 1}).then(res => { log(res) })

// deleteMany
Player.deleteMany({age: 34})

// deleteOne
Player.deleteOne({ firstName: 'lebron'})

// findByIdAndDelete
Player.findByIdAndDelete({_id: '63369901f83a3cb0bcd2a4bd'})

// findByIdAndUpdate
Player.findByIdAndUpdate({ _id: '6340d00d0098378fe6bfc1f6' }, {
  firstName: 'king'
})

// updateOne
Player.updateOne({ firstName: 'king'}, { firstName: 'lebron'})
```

  The lean option tells Mongoose to skip hybrating the result documents, This makes queries faster and less memory intensive.
```js
// Lean options
// 官网的一个demo
const personSchema = new mongoose.Schema({
  firstName: {
    type: String,
    get: capitalizeFirstLetter
  },
  lastName: {
    type: String,
    get: capitalizeFirstLetter
  }
})
personSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`
})

function capitalizeFirstLetter(v) {
  return v.charAt(0).toUpperCase() + v.substring(1)
}
const Person = mongoose.model('Person', personSchema)

// model's getters and virtuals do not run if you enable lean
Person.findOne({}).lean().then(res => {
  console.log(res.firstName, res.lastName, res.fullName)
  // Benjamin / Sisko / Benjamin Sisko
})
Person.findOne({}).then(res => {
  console.log(res.firstName, res.lastName, res.fullName)
  // benjamin / sisko / undefined
})
```
  if you do not modify the query results and do not use custom getters, you should use **lean()**.

[Faster Mongoose Queries With Lean](https://mongoosejs.com/docs/tutorials/lean.html#lean-and-populate)

## Validation


### Build-in Validators

```js
/*
内置的验证器
All schemaTypes hava the build-in required Validators
Numbers have min and max Validators
Strings have enum, match, minLength and maxLength validators
*/
const catSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Why no name?'] // 第二项为错误提示信息
  },
  age: {
    type: Number,
    min: 0,
    max: [30, 'age is not legal']
  },
  drink: {
    type: String,
    enum: ['Milk', 'Water']
  }
})
```

### Custom Error Messages

```js
const catSchema = new mongoose.Schema({
  age: {
    type: Number,
    min: [0, 'must be at least 0, got {VALUE}']
  },
  drink: {
    type: String,
    required: true,
    enum: {
      values: ['Water', 'Milk'],
      message: '{VALUE} is not supported'
    }
  }
})
```

### Unique

  The unique option for schema is not a validator. It is a convenient helper for building MongoDB unique indexes.

```js
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    min: [6, 'at least 6 characters'],
    max: [20, 'length is not legal'],
    unique: true
  }
})
const User = mongoose.model('user', userSchema)

User.insertMany([
  { username: 'lebron' },
  { username: 'lebron' }
])
//duplicate key error collection: test.users index: username_1 dup key: { username: "lebron" }
```

### Custom Validators

  If the build-in validators are not enough, you can define custom validators to suit your needs.

```js
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    validate: {
      validator: function(v) {
        return v.length >= 6 && v.length <= 10
      },
      message: props => `${props.value} is not valid`
    },
    required: [true, 'username is required']
  }
})
```

### Required Validators on nested objects

  对象嵌套时 字段的验证方式
```js
// 第一种方式
const userSchema = new mongoose.Schema({
  username: {
    firstName: {
      type: String,
      required: true
    },
    lastName: { 
      type: String,
      required: true
    }
  }
})

// 嵌套一个schema
const fullNameSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  }
})
const userSchema = new mongoose.Schema({
  username: {
    type: fullNameSchema,
    required: true
  }
})
```

## Timestamps

  Mongoose schemas support a timestamps option. If you set **timestamps: true**, Mongoose will add two properties of type *Date* to
  your schema:

1. createAt: a date representing when this document was created
2. updateAt: a date representing when this document last updated

```js
const userSchema = new mongoose.Schema({
  username: String,
}, { timestamps: true })
const User = userSchema.model('user', userSchema)

User.create({username: 'lebron'})
/*
{
  _id: 63414767a4b23046448fe263,
  firstName: lebron,
  __v: 0,
  createdAt: 2022-10-08T09:48:23.727+00:00,
  updatedAt: 2022-10-08T09:48:23.727+00:00
}
*/

// 自定义createdAt 和 updatedAt 属性名
// The **createdAt** property is immutable
const userSchema = new Schema({ name: String }, {
  timestamps: {
    createdAt: 'created_at', // Use `created_at` to store the created date
    updatedAt: 'updated_at' // and `updated_at` to store the last updated date
  }
});
```
```js
// timestamps on subdocuments
const roleSchema = new mongoose.Schema({ value: String }, {
  timestamps: true
})
const userSchema = new mongoose.Schema({ name: String, roles: [roleSchema]})
const User = mongoose.model('user', userSchema)

User.insertMany([
  {
    name: 'kyrie',
    roles: [
      {
        value: 'admin'
      }
    ]
  }
])
/*
{
  _id: 6342277be004bae12867197e,
  name: "kyrie",
  roles: [{
    value: "admin",
    _id: 6342277be004bae12867197f,
    createdAt:2022-10-09T01:44:27.026+00:00,
    updatedAt: 2022-10-09T01:44:27.026+00:00,
    __v:0
  }]
}
*/
// Overwriting a subdocument will also overwrite createdAt
```