# 字母异位词分组

  给你一个字符串数组, 请你将 **字母异位词** 组合在一起。可以按任意顺序返回结果列表。 **字母异位词** 是由重新排列源单词的字母得到的一个新单词。
  所有源单词中的字母通常恰好只用一次。

```js
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// [["bat"],["nat","tan"],["ate","eat","tea"]]


const strs = ['']
// [['']]

const strs = ['a']
// [['a']]
```

**解法一**

  对每个单词 进行一次遍历, 并对其排序 作为键名, 然后判断是否存在相同的异位词。使用一个数组存储相同的异位词。

```ts
const group_anagrams = (strs: string[]): string[] => {
  const map:Map<string, string[]> = new Map()
  for (const item of strs) {
    const key = [...item].sort((a, b) => a.localeCompare(b)).join()
    const temp: string[] = map.get(key) || []
    temp.push(item)
    map.set(key, temp)
  }
  return [...map.values()]
}
```