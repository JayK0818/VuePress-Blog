# 字符串中第一个匹配项的下标

  给你两个字符串 **haystack** 和 **needle**, 请你在 **haystack** 字符串中找出 **needle** 字符串的第一个匹配项的下标(从0开始)。如果 **needle**
  不是 **haystack** 的一部分, 则返回 *-1*。

```js
haystack = 'sadbutsad', needle = 'sad'
// 'sad' 在下标 0 和 6 处匹配. 所以返回0

haystack = 'leetcode', needle = 'leeto'
// -1 'leeto' 没有在 'leetcode'中出现。 所以返回-1
```
**解法一**

  直接利用原生js提供的indexOf 方法, 返回第一个匹配的元素下标

```ts
const match_first_string_index = (haystack: string, needle: string): number => {
  return haystack.indexOf(needle)
}
```

**解法二**

  for循环 每次截取 和 **needle** 相同长度的 子字符串进行比较, 如果相等, 跳出循环。返回此时的下标即可。
  
```ts
const match_first_string_index = (haystack: string, needle: string): number => {
  const length_1 = haystack.length
  const length_2 = needle.length
  if (length_2 > length_1) return -1
  let result = -1
  for (let i = 0; i <= length_1 - length_2; i++) {
    const substring = haystack.substring(i, length_2 + i)
    console.log(substring)
    if (substring === needle) {
      result = i
      break
    }
  }
  return result
}
```