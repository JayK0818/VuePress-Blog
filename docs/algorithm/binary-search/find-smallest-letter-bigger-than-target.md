# 寻找比目标字母大的最小字母

  给你一个字符数组 **letters**, 该数组按 *非递减顺序* 排序, 以及一个字符 *target*。 **letters** 里至少有两个不同的字符。

  返回**letters** 中大于 *target* 的最小字符。如果不存在这样的字符, 则返回 **letters** 的第一个字符。

```js
const letters = ['c', 'f', 'j'], target = 'a'
// 输出 'c'  比 'a' 大的最小字符是 'c'


const letters = ["c","f","j"], target = "c"
// 输出 'f'


const letters =  ["x","x","y","y"], target = "z"
// 输出 'x'
```