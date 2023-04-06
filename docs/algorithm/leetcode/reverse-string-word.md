# 翻转字符串里的单词

  给你一个字符串 **s**, 请你反转字符串中 **单词** 的顺序。 **单词** 是由非空格字符 组成的字符串。 **s** 中使用至少一个空格 将字符串中的
  **单词** 分隔开。 返回 **单词** 顺序颠倒 且 **单词** 之间用单个空格连接的结果字符串。

```js
const s = "the sky is blue"
// output "blue is sky the"

const s = "  hello world  "
// "world hello"
```

**解法一**

  先将字符串通过 空格 分割为数组 并过滤掉数组中多余的空格, 然后去除每个单词的 前后空格 最后 再将数组 倒置后 处理为字符串输出 即可。
```ts
const reverse_words = (s: string): string => {
  return s.split(' ').filter(item => Boolean(item)).map(item => item.trim()).reverse().join(' ')
}
```

**解法二**

  上面的split方法 参数是一个空格, 如果中间有多余空格 分割后的数组后 会多一个空字符串 [''], 所以需要再过滤掉多余的空字符串。字符串的 split方法 
  参数 分隔符 既可以使用 字符串, 也可以 传递一个正则表达式。
```ts
const reverse_words = (s: string): string => {
  return s.trim().split(/\s+/).map(item => item.trim()).reverse().join(' ')
}
```