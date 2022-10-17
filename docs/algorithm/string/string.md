# 字符串

## 无重复字符串的最长子串

  给定一个字符串 s , 请你找出其中不含有重复字符的 **最长子串** 的长度


  自己实现的 第一个方式, 两层for循环依次遍历给定的字符串, 每次以一个数组来保存不重复的字符。判断此时的字符是否在数组里。
  如果存在的话则跳出循环,保存此时不是连续字符的数组。
```ts
// 第一种实现方式
const get_substring_length = (string: string): number => {
  const length = string.length;
  if (length === 0) return 0
  const result: string[][] = []
  for (let i = 0; i < length; i++) {
    const temp: string[] = []
    for (let j = i; j < length; j++) {
      const str = string.charAt(j)
      if (temp.includes(str)) {
        result.push(temp)
        break
      }
      temp.push(str)
      // 如果一直未遇到重复的字符串, 且此时已遍历到最后一个字符串
      if (j === length - 1) {
        result.push(temp)
      }
    }
  }
  return Math.max(...result.map(item => item.length))
}
/* 上面的实现方式 时间复杂度为O(n3), 两层for循环 以及 一个判断字符串是否重复的方法, 
在leetcode上测试虽然通过 但是耗时600ms。*/
```

  第二种实现方式: (以两个指针分别记录当前字符的位置, 如果没有遇到重复的, 则右侧指针向后移动一位, 
  如果遇到重复的, 记录当前没有重复的子字符串最大长度判断是否为最大长度保存并跳出当前循环, 将起始遍历位置左侧指针向后移动一位)

```ts
const get_substring_length = (string: string): number => {
  const length = string.length;
  if (length <= 1) return length
  let left = 0
  let right = 1
  let max = 0
  while(right < length) {
    const substring = string.slice(left, right)
    if (substring.indexOf(string.charAt(right)) > -1) {
      max = (right - left) > max ? (right - left) : max
      left += 1
      continue
    } else {
      right += 1
      if (right === length) {
        max = right - left > max ? right - left : max
      }
    }
  }
  return max
}
```

  第三种实现方式: 在上面实现方式的基础上再进一步优化, 如果 字符串为 abcdcc, 当起始字符串指向a, 结束字符串指向第一个c 时, 此时判断的是
  abcd 中是否有c, 如果起始指针向后+1, 此时依然会有重复的(判断的是bcd中是否有c, 这些是无效的判断),这时可以直接把起始指针指向c的下一个位置
```ts
const get_substring_length_5 = (string: string): number => {
  const length = string.length;
  if (length <= 1) return length;
  let left = 0
  let right = 0
  let max = 0
  while(right < length) {
    const substring = string.slice(left, right)
    // 子串中和 当前right位置的字符串是否有重复的。
    const _index = substring.indexOf(string.charAt(right))
    if (_index > -1) {
      max = right - left > max ? right - left : max
      left += _index + 1
      continue
    } else {
      right += 1
      if (right === length) {
        max = right - left > max ? right - left : max
      }
    }
  }
  return max
}
```