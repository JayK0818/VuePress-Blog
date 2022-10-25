# 回文数

  给你一个整数 x, 如果x 是一个回文整数, 返回true, 否则 返回false.

**解法一**

  将数字转换为字符串, 再转换为数组 进行倒序 比较 是否相等。
```ts
const is_palindrome_number = (n: number): boolean => {
  if (n < 0) return false
  if (n > Math.pow(2, 31) -1) return false
  return n.toString() === n.toString().split('').reverse().join('')
}
```

**解法二**

  通过双指针, 将数字转换为字符串, 判断首位字符是否相等, 如果相等则左边指针向右 移动, 右边指针向左移动, 直到指针相遇。 一旦遇到不相等的情况, 直接跳出循环 返回 false.

```ts
const is_palindrome_number = (n: number): boolean => {
  if (x < 0) return false
  if (x > Math.pow(2, 31) -1) return false
  const string = x.toString()
  let start = 0
  let end = string.length - 1
  let flag = true
  while(start <= end) {
    if (string.charAt(start) === string.charAt(end)) {
      start += 1
      end -= 1
    } else {
      flag = false
      break;
    }
  }
  return flag
}
```

**解法三**

  在之前曾经做过一道题,将 **整数反转**, 此时可以用相同的办法 判断反转后的整数 和 输入的整数 是否相同, 相同则为 回文数。

```ts
const palindrome_number = (n: number): boolean => {
  if (n < 0) return false
  if (n > Math.pow(2, 31)) return false
  let result = 0
  let number = n
  while(number !== 0) {
    result = result * 10 + number % 10
    number = Math.floor(number / 10)
  }
  return result === n
}

/* 在此基础上进一步优化, 只需要反转一半即可。 当反转后的数字累加的结果 大于等于 输入的数字(因为输入的数字一直在做除法)
即 当前数字 已经反转了一半
*/
const palindrome_number = (n: number): boolean => {
  if (n < 0) return false
  if (n > Math.pow(2, 31)) return false
  // 10的倍数反转后的数字 以0开头, 显然不是回文数字
  if (n % 10 === 0 && n !== 0) return false
  let result = 0
  while(result < n) {
    result = result * 10 + n % 10
    n = Math.floor(n / 10)
  }
  if (result === n) return true
  return Math.floor(result / 10) === n
}
```