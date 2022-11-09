# 最长有效括号

  给你一个只包含 **(** 和 **)** 的字符串, 找出最长有效 (格式正确且连续) 括号字串的长度。

```js
s = '()'
// 输出 2

s = ')()())'
// 输出 4
```

**解法一**

  利用栈的思想, 每次将匹配的 左括号的下标推入栈,(为了方便计算第一个合法的括号长度, 初始栈下标为-1)。遇到 右括号时, 将上一个匹配的左括号下标出栈。
  此时有两种情况。栈为空 或者 不为空。

1. 栈为空时, 更新此时 有效括号的长度
2. 栈不为空时, 将此时的下标推入栈。
```ts
const longest_valid_brackets = (s: string): number => {
  const stack: number[] = [-1]
  let max = 0
  for (let i = 0; i < s.length; i++) {
    const item = s[i]
    if (item === ')') {
      stack.pop()
      if (stack.length === 0) {
        stack.push(i)
      } else {
        max = Math.max(max, i - stack[stack.length - 1])
      }
    } else {
      stack.push(i)
    }
  }
  return max
}
```

**解法二**

  双层for循环 每次记录字串 合法的 字符串长度。
  
```ts
const longest_valid_brackets = (s: string): number => {
  let count = 0
  let max = 0
  for (let i = 0, length = s.length; i < length; i++) {
    count = 0
    for (let j = i; j < s.length; j++) {
      if (s.charAt(j) === '(') {
        count += 1
      } else {
        count -= 1
      }
      if (count < 0) {
        i = j
        break
      }
      if (count === 0) {
        if (j - i + 1 > max) {
          max = j - i + 1
        }
      }
    }
  }
  return max
}
```