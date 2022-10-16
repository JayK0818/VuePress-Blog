# Joi

  joi lets you describe your data using a simple, intuitive, and readable language.

[Joi官网](https://joi.dev/api/?v=17.6.1)

```js
// 安装以及简单的使用
const Joi = require('joi')

const schema = Joi.object({
  // 必填的 字符串, 3-30个字符
  username: Joi.string().min(3).max(30),
  // 可选的字符串
  password: Joi.string(),
  repeat_password: Joi.ref('password'),
  // 可选的字符串 或者 数字
  access_token: [Joi.string(), Joi.number()]
})

schema.validate({ username: 'jack', password: '123456', repeat_passsword: '123456'})
```

## Usage

```js
// 第一步: 构造一个要验证的字段以及该字段约束的对象
  const user_schema = Joi.object({
    username: Joi.string()
    .min(3)
    .max(10).required(),
    password: Joi.string().required(),
    phone: Joi.string().required()
  })

const { error, value } = schema.validate({ username: 'ja', password: '123456', phone: '135xxxx4564' })
// 如果通过验证了, 则error为undefined, 如果输入没有通过验证, error是一个对象包含错误信息
/*
value为验证的值

[Error [ValidationError]: "username" length must be at least 3 characters long] {
  _original: { username: 'ja', password: '123456', phone: '12345678910' },
  details: [
    {
      message: '"username" length must be at least 3 characters long',
      path: [Array],
      type: 'string.min',
      context: [Object]
    }
  ]
}
*/

// 也可以直接定义一个joi type
const schema = Joi.string().min(10).max(20)
schema.validate('123456')
```

## assert

```js
// 用法
Joi.assert(value, schema, message, options)
/*
value: 验证的value
schema: 约束规则
message: optional message string prefix added in from of the error message
*/ 
Joi.assert('jack', Joi.string().min(3).max(10))
```

## attempt

```js
Joi.attempt(value, schema, message, options)

Joi.attempt('4', Joi.number())
/*
ValidationError: "value" must be a number
*/
```

## type

```js
const string_schema = Joi.string()
const date_schema = Joi.date()
const number_schema = Joi.number()
console.log(string_schema.type, date_schema.type, number_schema.type)
// string / date / number
```

## string

```js
// Requires the string value to only contain a-z,A-Z, and 0-9
// string.alphanum()
const alphanum_string = Joi.string().alphanum()
alphanum_string.validate('123')
alphanum_string.validate('hello')
alphanum_string.validate('你好世界') // 报错 "value" must only contain alpha-numeric characters


// Joi.string.case()  'upper' / 'lower'
const upper_case_string = Joi.string().case('upper')
const lower_case_string = Joi.string().case('lower')
upper_case_string.validate('HELLO')
upper_case_string.validate('hello')
// { value: 'HELLO' } { value: 'HELLO' }

lower_case_string.validate('HELLO')
lower_case_string.validate('hello')
// { value: 'hello' } { value: 'hello' }


// string.emial()
// Requires the string value to be a valid email address
const email_string = Joi.string().email()
email_string.validate('123454380@qq.com')
email_string.validate('123454380') // value must be a validate email


// string.ip()
// Requires the string value to be a valid ip address


// string.length()
// Specifies the exact string length
const string_length = Joi.string().length(6)
string_length.validate('123456')
string_length.validate('1234567') // "value" length must be 6 characters long


// string.lowercase()
// Requires the string value to be all lowercase.


// string.max()
const max_string = Joi.string().max(4)
max_string.validate('1234')
max_string.validate('12345') // "value" length must be less than or equal to 4 characters long

// string.min()
// Specifies the minimum number string characters
const min_string = Joi.min(4)
min_string.validate('1234')
min_string.validate('123') // "value" length must be at least 4 characters long


// string.trim()
// requires the string value to contain no whitespace before or after.
const trim_string = Joi.string().trim(false) // disable trim flag
```

## number

  Generates a schema object that matches a number data type
```js
// number.greater(min)
// Specifies that the value must be greater than limit
const greater = Joi.number().greater(5)
greater.validate(1)  // "value" must be greater than 5
greater.validate(10)

// number.integet()
// Requires the number to be an integet
integer.validate(123.456) // "value" must be an integer
integer.validate(123)
integer.validate('123.456') // "value" must be an integer
integer.validate('123') // 会转换为数字再进行验证
// If the validation convert option is on(enabled by default), a string will be converted to a number


// number.less()
// specifies that the value must be less than limit
const less = Joi.number().less(10)
less.validate(5)
less.validate(21) // "value" must be less than 10
less.validate('20')  // "value" must be less than 10


const max = Joi.number().max(10)
max.validate(11) // "value" must be less than or equal to 10
max.validate(5)

const min = Joi.number().min(5)
min.validate(6)
min.validate(3) // "value" must be greater than or equal to 5
```

## object

  Generates a schema object that matches an object data type. Suports the same methods of the **any()** type
```js
// basic usage
const object = Joi.object({
  a: Joi.number().min(1).max(10).integer(),
  b: Joi.string()
})

const schema = Joi.array().items({ a: Joi.string() })
array.validate([{a: 1, b: '123'}]) // "[0].a" must be a string


// object.append()
// Appends the allowed object keys
const append = Joi.object({
  firstName: Joi.string().min(3).max(10),
  lastName: Joi.string().min(3).max(10)
})
append.append({
  age: Joi.number().min(18).max(45)
})
log(append.validate({
  firstName: 'kyrie',
  lastName: 'irving',
  age: 30
})) // "age" is not allowed
```

## array

  Generates a schema object that matches an array data type. Note that undefined values inside arrays are not allowed
  by default but can be by using **sparse()**

```js
// array.items()
// Lists the types allowed for the array values
const array = Joi.array().items(Joi.string())
array.validate([1, 2, 3])  // "[0]" must be a string]
array.validate(['1', '2', '3'])


const string_number = Joi.array().items(Joi.string(), Joi.number())
const forbidden_string = Joi.array().items(Joi.string().valid('hello').forbidden(), Joi.string())
const label_string = Joi.array().items(Joi.string().label('hello').required(), Joi.string().required())

string_number.validate(['1', 1, 'a', []])  // "[3]" does not match any of the allowed types]
string_number.validate([1, '1'])

forbidden_string.validate(['hello', 'world'])  // "[0]" contains an excluded value

label_string.validate(['hello', 'world'])
label_string.validate(['hello']) // "value" does not contain 1 required value(s)


// array.length(limit)
// Specifies the exact number of items in the array
const length = Joi.array().length(5)
length.validate([1,2,3,4,5])
length.validate([1,2,3]) // "value" must contain 5 items


// array.max(limit)
const max = Joi.array().max(3)
max.validate([1,2,3,4])  // "value" must contain less than or equal to 3 items
max.validate([1,2,3])


const min = Joi.array().min(3)
min.validate([1,2,3])
min.validate([1,2])  // "value" must contain at least 3 items
```