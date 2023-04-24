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

**解法一**

  先判断数组中的最后一个值 是否比 目标值还小(因为数组是递增排序), 如果最后一个值比目标值还小, 那么该数组中显然没有一个比目标值大的 字符。此时返回第一个字符。然后使用二分法。
```ts
const find_smallest_letter = (letters: string[], target: string): string => {
  if (letters[letters.length - 1].charCodeAt(0) <= target.charCodeAt(0)) return letters[0]
  let start = 0
  let end = letters.length
  while (start < end) {
    const middle = Math.floor((start + end) / 2)
    const letter_code = letters[middle].charCodeAt(0)
    const target_code = target.charCodeAt(0)
    if (letter_code <= target_code) {
      start = middle + 1
    } else {
      end = middle
    }
  }
  return letters[start]
}
```