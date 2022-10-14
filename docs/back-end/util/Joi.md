# Joi

  joi lets you describe your data using a simple, intuitive, and readable language.

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
