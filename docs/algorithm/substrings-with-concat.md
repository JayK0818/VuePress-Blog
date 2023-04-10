# 串联所有单词的子串

  给定一个字符串 **s** 和一个字符串数组 **words**。**words**中所有字符串长度相同。**s** 中的 串联子串 是一个包含 **words** 中所有字符串以
  任意顺序排列连接起来的子串。

```js
s = "barfoothefoobarman", words = ["foo","bar"]
// 除数 [0,9]
// "barfoo" 开始位置是 0。它是 words 中以 ["bar","foo"] 顺序排列的连接。
// "foobar" 开始位置是 9。它是 words 中以 ["foo","bar"] 顺序排列的连接。


s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
// s 中没有子串长度为 16 并且等于 words的任何顺序排列的连接, 所以返回一个空数组。
```

**尝试一**

  想着将数组中的字符串 以排列组合的方式 计算出所有的可能, 然后再遍历所有拍列组合, 判断是否在字符串中存在该组合组成的字符串。 在逻辑上是可行的。但是在数量两特别大是程序会爆。因为如果数组成员长度为10的时候, 所有可能的组合 为百万级别的数据。
```ts
const substring_concat = (s: string, words: string[]): number[] => {
  const create_word_array = (array: string[][], i: number, words:string[]): string[][] => {
    if (i > words.length - 1) return array
    const temp: string[][] = []
    for (let j = 0; j < array.length; j++) {
      for (let k = 0; k < array[j].length; k++) {
        const _temp = [...array[j]]
        _temp.splice(k + 1, 0, words[i])
        temp.push([..._temp])
      }
    }
    return create_word_array(temp, i + 1, words)
  }
  const result: string[][] = []
  for (let i = 0, length = words.length; i < length; i++) {
    const filter_words = words.filter((item, index) => index !== i)
    const temp = create_word_array([[words[i]]], 0, filter_words)
    result.push(...temp)
  }
  console.log(result)
  const temp: number[] = []
  for (let i = 0, length = result.length; i < length; i++) {
    const substring = result[i].join('')
    if (!s.includes(substring)) continue
    for (let k = 0, length = s.length - substring.length; k <= length; k++) {
      const index = s.slice(k).indexOf(substring)
      if (index >= 0) {
        temp.push(index + k)
      } else {
        break
      }
    }
  }
  return Array.from(new Set(temp))
}
```

**解法一**

  解答里看到的一种思路。 将数组单词 通过hash map 方式存储每个单词的个数。遍历字符串时 截取所有单词长度的 字符串, 判断当前字符串片段,计算每个单词长度的字符出现的次数。 再比较当前map 和 words 对应的map。 如果相等则说明这个字符串片段是合法的
```ts
const substring_concat_2 = (s: string, words: string[] = []): number[] => {
  const words_length = words.reduce((prev, next) => prev + next.length, 0)
  const word_length = words[0].length
  if (words_length > s.length) return []
  let flag = false
  for (const item of words) {
    if (!s.includes(item)) {
      flag = true
      break
    }
  }
  if (flag) return []
  const words_map: {[key: string]: number} = {}
  for (const item of words) {
    if (!words_map[item]) {
      words_map[item] = 1
      continue
    }
    words_map[item] += 1
  }
  const temp: number[] = []
  for (let i = 0, length = s.length; i <= length - words_length; i += 1) {
    const map: {[key: string]: number} = {}
    let _flag = false
    for (let j = i; j < i + words_length; j += word_length) {
      const substring = s.slice(j, word_length + j)
      // 有字符串不存在 words_map 中, 无需比较 直接跳出循环即可
      if (!words_map[substring]) {
        _flag = true
        break
      }
      if (!map[substring]) {
        map[substring] = 1
        continue
      }
      map[substring] += 1
      // 如果当前单词出现的次数 大于 数组里单词出现的次数
      if (map[substring] > words_map[substring]) {
        _flag = true
        break
      }
    }
    if (_flag) continue
    let flag = true
    for (const key of Object.keys(words_map)) {
      if (!map[key]) {
        flag = false
        break
      }
      if (Number(map[key]) > Number(words_map[key])) {
        flag = false
        break
      }
    }
    for (const key of Object.keys(map)) {
      if (!words_map[key]) {
        flag = false
        break
      }
      if (Number(words_map[key]) < Number(map[key])) {
        flag = false
        break
      }
    }
    if (flag) {
      temp.push(i)
    }
  }
  return temp
}
```