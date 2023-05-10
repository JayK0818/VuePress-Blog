# 有效的括号

  给定一个只包括 '{' '}' '(' ')' '[' ']' 的字符串 **s**, 判断字符串是否有效。有效字符串必须满足:
1. 左括号必须用相同类型的右括号闭合
2. 左括号必须以正确的顺序闭合
3. 每个右括号都有一个对应的相同类型的左括号。


  利用数组 出栈 进栈的方式, 遍历当前字符串, 如果是左括号, 添加进数组, 然后计算当前下一个括号 是否和上一个添加进数组的 左括号 进行出栈对比.
  匹配则继续比较, 不匹配直接返回false. 最后判断出栈后 左括号的数组是否为0.

**解法一**

```ts
// 看了一下提示 实现的第一版
const valid_brackets = (s: string) : boolean => {
  const bracket_map: { [key: string]: string } = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  const length = s.length
  // 如果字符串长度不是偶数 肯定不是匹配的
  if (length % 2 !== 0) return false
  const left_stack: string[] = []
  for (const bracket of s) {
    if (bracket_map[bracket]) { // 左括号
      left_stack.push(bracket)
      continue
    }
    // 当前是右括号, 此时左括号已经匹配完 或者 还没有出现 则是不匹配的
    if (!left_stack.length) {
      return false
    }
    // 判断当前的右括号与左括号 是否匹配
    const b = left_stack.pop()
    if (bracket_map[b as string] !== bracket) {
      return false
    }
  }
  if (left_stack.length) return false
  return flag
}


// 另一种方式, 将对应的右括号添加进数组, 然后判断下一个 右括号 是否与 添加进数组的 最后一项相等
const valid_brackets = (s: string) : boolean => {
  const bracket_map: { [key: string]: string } = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  const length = s.length
  if (length % 2 !== 0) return false
  let flag = true
  const queue: string[] = []
  for (const item of s) {
    if (bracket_map[item]) { // 左括号
      queue.push(bracket_map[item]) // 数组中添加进对应的右括号
    } else {
      if (queue.pop() !== item) {
        flag = false
        break
      }
    }
  }
  if (queue.length !== 0) return false
  return flag
}
```