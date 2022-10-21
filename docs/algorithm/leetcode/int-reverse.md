# 整数反转

  给你一个32位的有符号整数x, 返回将x中的数字部分反转后的结果。如果反转后的整数超过32位的有符号整数的范围 **[−2^31,  2^31 − 1]**, 就返回0

**解法一**

  将数字转换为字符串 然后再转换为数组 进行反转。将反转后的数组再 转换为数字, 如果数字超出指定的范围则返回0, 否则返回反转后的结果。
```ts
const reverse_number = (n): number => {
  const is_positive = n > 0
  const reverse = Math.abs(n).toString().split('').reverse().join('')
  const result = is_positive ? Number(reverse) : (0 - Number(reverse))
  if (result >= Math.pow(2, 31) || result < (0 - Math.pow(2, 31))) return 0
  return result
}
```