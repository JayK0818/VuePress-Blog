# 实现 strStr()

  给你两个字符串 **haystack** 和 **needle**, 请你在 **haystack** 字符串中找出 **needle** 字符串的第一个匹配项的下标(下标从0开始)。
  如果 **needle** 不是 **haystack** 的一部分, 则返回 *-1*。

```js
haystack = "sadbutsad", needle = "sad"
// 输出 0

haystack = "leetcode", needle = "leeto"
// 输出 -1
```

**解法一**

  利用字符串的 slice() 方法, 每次截取 子字符串长度的字符 进行比较, 如果相等 则为第一个匹配的字符子串。返回当前下标即可!

```ts
const strStr = (haystack: string, needle: string): number => {
  let index = -1
  for (let i = 0, length = haystack.length; i < length; i++) {
    const substring = haystack.slice(i, i + needle.length)
    if (substring === needle) {
      index = i
      break
    }
  }
  return index
}
```

**解法二**

  不利用原生js提供的字符串的slice() 方法,暴力破解!
```ts
const strStr = (haystack: string, needle: string): number => {
  let index = -1
  let flag = false
  // haystack不需要遍历到最后一个字符串, 当比较的字符串长度 小于needle字符串的长度, 肯定是不匹配的
  for (let i = 0, length = haystack.length - needle.length; i <= length; i++) {
    for (let j = 0, length = needle.length; j < length; j++) {
      // 如果遇到不相等的字符, 跳出当前循环, haystack下标向后移动一位, 再依次比较。
      if (needle.charAt(j) !== haystack.charAt(j + i)) {
        j = 0
        break
      }
      // 比较到最后一个字符 并且每个字符相等, 证明当前的下标为合法的
      if (j === needle.length - 1) {
        flag = true
      }
    }
    // 如果找到下标了, 跳出循环
    if (flag) {
      index = i
      break
    }
  }
  return index
}
```

**解法三**

  KMP算法是一种改进的字符串匹配算法, KMP算法的核心是利用匹配失败后的信息, 尽量减少模式串与主串的匹配次数以快速匹配的目的。

[力扣选修-KMP](https://leetcode.cn/leetbook/read/array-and-string/cpoo6/)