# 最长公共前缀

  编写一个函数来查找字符串数组中的 最长公共前缀

```js
// 实例:
const strs = ["flower","flow","flight"]
// 输出 'fl'
```

**解法一**

  以最小长度的字符串作为for循环遍历的次数, 从0开始 依次比较 数组中的每个字符串 相同位置的字符是否相等。直到遇到不相等的退出循环。

```ts
const longest_common_string_prefix = (strs: string[]): string => {
  if (strs.length === 0) return ''
  if (strs.length === 1) return strs[0]
  // 计算最小字符串的长度, 遍历时只需要读取到该位置的字符进行比较
  const min_length = Math.min(...strs.map(s => s.length))
  if (min_length === 0) return ''
  let result = ''
  for(let i = 0; i < min_length; i++) {
    const s = strs[0].charAt(i)
    if (strs.length === strs.filter(string => string.charAt(i) === s).length) {
      result += strs[0].charAt(i)
    } else {
      break
    }
  }
  return result
}
```

**解法二**

  找到最小长度的字符串, 每次比较所有的字符串 是否包含当前最小长度的字符串, 如果不相等 则比较的 字符串 减一。

```ts
const longest_common_prefix_2 = (strs: string[]): string => {
  if (strs.length === 0) return ''
  if (strs.length === 1) return strs[0]
  const min_str = strs.slice().sort((a, b) => a.length - b.length)[0]
  if (!min_str) return ''
  let result = ''
  for (let i = min_str.length; i >= 0; i--) {
    // 注意不包含第 i 个字符串, 所以不用减去1
    if (strs.every(s => s.substring(0, i) === min_str.substring(0, i))) {
      result = min_str.substring(0, i)
      break
    }
  }
  return result
}
```

**解法三**

  使用一下Set数据结构, 每次将每个字符串的 字串添加进 set, 如果set的长度为1, 则表明此时 字串都是相同的, 直到第一个长度不为1时终止循环。(因为此刻出现了内容不同的子字符串)
```ts
const longest_common_prefix = (strs: string[]): string => {
  let result = ''
  const min_string_length = Math.min(...strs.map(string => string.length))
  for (let i = 0; i <= min_string_length; i++) {
    const set = new Set()
    strs.forEach(str => {
      set.add(str.substring(0, i))
    })
    if (Array.from(set).length !== 1) {
      break
    } else {
      result = strs[0].substring(0, i)
    }
  }
  return result
}
```