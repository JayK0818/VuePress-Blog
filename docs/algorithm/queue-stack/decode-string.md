# 字符串解码

  给定一个经过编码的字符串, 返回它解码后的字符串。
  编码规则为 **k[encoded_string]**, 表示其中方括号内部的 **encoded_string** 正好重复 **k** 次。注意 **k** 保证为正整数。
  你可以认为输入字符串总是有效的, 输入字符串中没有额外的空格, 且输入的方括号总是符合格式要求的。

```js
const s = '3[a]2[bc]'
// "aaabcbc"

const s = "3[a2[c]]"
// accaccacc

const s = '2[abc]3[cd]ef'
// abcabccdcdcdef

const s = 'abc3[cd]xyz'
// abccdcdcdxyz
```

**解法一**

```ts
const decode_string = (s: string) => {
  const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  const stack: string[] = []
  for (let i = 0, length = s.length; i < length; i++) {
    const char = s.charAt(i)
    if (char !== ']') {
      stack.push(char)
      continue
    }
  // 找到上一个[ 的下标
    let last_left_bracket_idx = stack.length
    for (let k = stack.length - 1; k >= 0; k--) {
      if (stack[k] === '[') {
        last_left_bracket_idx = k
        break
      }
    }
    // 上一个数字的下标
    let last_number_idx = 0
    // 重复多少次
    let repeat_number = ''
    // 找到遍历多少次
    for (let j = last_left_bracket_idx - 1; j >= 0; j--) {
      if (nums.includes(stack[j])) {
        repeat_number = stack[j] += repeat_number
      } else {
        last_number_idx = j + 1
        break
      }
    }
    // 重复的字符串
    const repeat_string = stack.slice(last_left_bracket_idx+1).join('')
    stack.splice(last_number_idx, stack.length)
    for (let k = 0; k < Number(repeat_number); k++) {
      stack.push(repeat_string)
    }
  }
  return stack.join('')
}
```