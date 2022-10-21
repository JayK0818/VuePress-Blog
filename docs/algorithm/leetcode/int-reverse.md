# 整数反转

  给你一个32位的有符号整数x, 返回将x中的数字部分反转后的结果。如果反转后的整数超过32位的有符号整数的范围 **[−2^31,  2^31 − 1]**, 就返回0

**解法一**

  将数字转换为字符串 然后再转换为数组 进行反转。将反转后的数组再 转换为数字, 如果数字超出指定的范围则返回0, 否则返回反转后的结果。
```ts
const reverse_number = (n): number => {
  const is_positive = n > 0
  const reverse = Math.abs(n).toString().split('').reverse().join('')
  const result = is_positive ? Number(reverse) : (0 - Number(reverse))
  if (result >= Math.pow(2, 31) || result < Math.pow(-2, 31)) return 0
  return result
}
```

**解法二**

  将数字转换为字符串之后 根据当前字符串所在的 **位** 进行转换为相应的数字, 依次相加。

```ts
const reverse_number = (x: number): number => {
  const is_positive = x > 0
  const number_string = Math.abs(x).toString()
  let sum: number = 0
  for (let i = number_string.length - 1; i >= 0; i--) {
    sum += Math.pow(10, i) * Number(number_string[i])
  }
  const result = is_positive ? sum : (0 - sum)
  if (result >= Math.pow(2, 31) || result < Math.pow(-2, 31)) return 0
  return result
}
```

**解法三**
  
  利用数字每次取余 依次获取数字个位上的数字, 然后取余后 将该数 除10 取整, 再取余 获取十位的数。
```ts
const reverse_number = (x: number): number => {
  let result = 0
  const is_positive = x > 0
  while(x !== 0) {
    result = result * 10 + x % 10
/*负数取余和正数取余 方式不一样. 也可以将数值先取绝对值, 最后再输出结果时 判断输入的是正数 还是负数处理
*/
    x = is_positive ? Math.floor(x / 10) : Math.ceil(x / 10)
  }
  if (result >= Math.pow(2, 31) || result < Math.pow(-2, 31)) return 0
  return result
}
```