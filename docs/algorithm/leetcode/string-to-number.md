# 字符串转换整数

  请实现一个函数, 使其能够将字符串转换为一个 32位有符号整数。该函数算法如下:
1. 读入字符串并丢弃无用的前导空格
2. 检查下一个字符为正还是为负号, 读取该字符确定最终是负数还是整数。如果两者都不存在, 则假定结果为正
3. 读入下一个字符,直到到达下一个非整数数组字符或者到达输入的结尾。字符串的其余部分将被忽略
4. 将前面步骤读入的这些数组转换为整数。如果没有读入数字则整数为0, 如果整数超过Math.pow(2, 31), 则应该固定在Math.pow(2, 31), 如果整数小于
Math.pow(-2, 31), 则整数也应该固定在最小值。

**解法一**
```ts
// 通过测试的第一版代码
const string_to_number = (s: string): number => {
  if (!s.length) return 0
  const array: string[] = []
  // 先去除两侧的空格
  for (const item of s.trim()) {
    if (/[0-9]|[\-\+]|\./.test(item)) {
      // 此判断为测试过程中 未通过时 添加的判断, 防止多个相同的负号添加
      if (item === '-' && array.includes('-')) {
        break
      }
      if (item === '+' && array.includes('+')) {
        break
      }
      array.push(item)
    } else {
      break;
    }
  }
  if (array.length === 0) return 0
  const string = array.join('')
  if (string.includes('+-') || string.includes('-+')) return 0
  if (string === '+' || string === '-') return 0
  let number
  // 如果包含 '+' 但不是在起始位置
  if (string.includes('+')) {
    const index = string.indexOf('+')
    if (index === 0) {
      number = Number(string)
    } else {
      number = Number(string.slice(0, index))
    }
    // 如果包含 '-' 不是在字符串起始位置
  } else if (string.includes('-')) {
    const index = array.indexOf('-')
    if (index === 0) {
      number = Number(string)
    } else {
      number = Number(string.slice(0, index))
    }
  } else {
    number = Number(string) 
  }
  const max_number = Math.pow(2, 31) - 1
  const min_number = Math.pow(-2, 31)
  if (number > max_number) return max_number
  if (number < min_number) return min_number
  return Math.floor(number)
}
```

**解法二**

  上面的解法略显繁琐, 下面的方法使用正则表达式
```ts
const string_to_number = (s: string): number => {
  const string = s.trim()
  if (string.length === 0) return 0
  const result = string.match(/^[-+]?\d+/)
  if (result === null) return 0
  const max_number = Math.pow(2, 31) - 1
  const min_number = Math.pow(-2, 31)
  const number = Number(result[0])
  if (number > max_number) return max_number
  if (number < min_number) return min_number
  return number
}
/*
正则表达式: + 代表前面的字符必须至少出现一次(1次或多次)
          *  代表前面的字符可以不出现, 也可以出现一次 或者多次 (0次, 一次 或多次)
          ?  代表前面的字符 最多只可以出现一次 (0次 或者 1次)
*/
```

**解法三**

  利用JavaScript内置的 Number.parseInt() 方法对字符串以10进制的方式进行解析

```ts
const string_to_number = (s: string): number => {
  if (s.trim().length === 0) return 0
  const number = Number.parseInt(s, 10)
  if (Number.isNaN(number)) return 0
  const max_number = Math.pow(2, 31) - 1
  const min_number = Math.pow(-2, 31)
  if (number > max_number) return max_number
  if (number < min_number) return min_number
  return number
}
```

**解法四**

  此解法跟解法一类似, 只不过不转换为数组, 使用字符串拼接, 并且判断是否有重复的负号判断逻辑也稍有不同
  
```ts
const string_to_number_4 = (s: string): number => {
  const string = s.trim()
  if (string.length === 0) return 0
  let result = ''
  const is_positive = string[0] === '-' ? false : true
  let substring = ''
  if (is_positive) {
    substring = string[0] === '+' ? string.substring(1) : string;
  } else {
    substring = string.substring(1)
  }
  for (const character of substring) {
    if (/\d/.test(character)) {
      result += character
    } else {
      break
    }
  }
  if (!result) return 0
  const max_number = Math.pow(2, 31) - 1
  const min_number = Math.pow(-2, 31)
  const number = is_positive ? Number(result) : (0 - Number(result))
  if (number > max_number) return max_number
  if (number < min_number) return min_number
  return number
}
```