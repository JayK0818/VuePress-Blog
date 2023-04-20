# 反转字符串中的单词

  给定一个字符串 **s**, 你需要反转字符串中每个单词的字符顺序, 同时扔保留空格和单词的初始顺序! **s** 不包含任何收尾空格并且其中的所有单词都用一个空格隔开。
  **s** 里至少有一个单词。

```js
const s = "Let's take LeetCode contest"
// 输出 "s'teL ekat edoCteeL tsetnoc"
```

**解法一**

  将字符串转换成数组处理, 遍历数组依次处理每个单词, 同样将单词转换成数组处理, 将数组收尾下标对应的字母对换即可。最后将数组处理成字符串输出!

```ts
const reverse_word = (s: string) => {
  const array = s.split(/\s+/)
  for (let i = 0, length = array.length; i < length; i++) {
    const word = array[i]
    let start = 0
    let end = word.length - 1
    const word_array = word.split('')
    while (start < end) {
      [word_array[start], word_array[end]] = [word_array[end], word_array[start]]
      start += 1
      end -= 1
    }
    array[i] = word_array.join('')
  }
  return array.join(' ')
}
```

**解法二**

  跟上面的解法差不多, 只不过在处理单词时不转换为数组, 而是直接将字符串倒序遍历拼接成一个新的字符串。

```ts
const reverse_word = (s: string): string => {
  const array = s.split(/\s+/)
  for (let i = 0, length = array.length; i < length; i++) {
    const word = array[i]
    let string = ''
    for (let j = word.length - 1; j >=0; j--) {
      string += word[j]
    }
    array[i] = string
  }
  return array.join(' ')
}
```