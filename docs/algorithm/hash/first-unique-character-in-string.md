# 字符串中的第一个唯一字符

  给定一个字符串 **s**, 找到 它的第一个不重复的字符, 并返回它的索引。如果不存在, 则返回 **-1**。

```js
const s = 'leetcode'
// 输出 0

const s = 'loveleetcode'
// 输出2

const s = 'aabb'
// -1
```

**解法一**

  遍历两次字符串, 第一个遍历的时候 存储每个字符 出现的次数, 第二个遍历的时候, 找到那个出现次数为1的字符 并返回此时的下标。

```ts
const first_unique_character = (s: string): number => {
  const map: Map<string, number> = new Map()
  for (let i = 0, length = s.length; i < length; i++) {
    const item = s.charAt(i)
    map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1)
  }
  for (let i = 0, length = s.length; i < length; i++) {
    const character = s.charAt(i)
    if (map.get(character) === 1) {
      return i
    }
  }
  return -1
}
```