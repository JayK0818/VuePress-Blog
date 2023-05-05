# 只出现一次的数字

  给你一个 **非空** 整数数组 *nums*, 除了某个元素只出现一次以外, 其余每个元素均至少出现两次。找出那个只出现了一次的元素。

```js
const nums = [2, 2, 1]
// 输出1

const nums = [4, 1, 2, 1, 2]
// 输出4
```

**解法一**

  使用map数据结构存储某个元素出现的次数。最后返回出现次数为1的那个元素即可。

```ts
const single_number = (nums: number[]): number => {
  const map: Map<number, number> = new Map()
  for (const n of nums) {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1)
    } else {
      map.set(n, 1)
    }
  }
  for (const [key, value] of map.entries()) {
    if (value === 1) {
      return key
    }
  }
}
```

**解法二**

  使用set数据结构存储数据, 如果出现了某个数, 则将其删除, 否则就添加。最后剩下的那个数 只出现了一次。

```ts
const single_number = (nums: number[]):number => {
  const set: Set<number> = new Set()
  for (const n of nums) {
    if (set.has(n)) {
      set.delete(n)
    } else {
      set.add(n)
    }
  }
  return [...set][0]
}
```