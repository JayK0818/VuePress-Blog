# 前K个高频元素

  给你一个整数数组 **nums** 和 一个整数 **k**, 请你返回其中出现评率前 **k** 高的元素。米可以按 任意顺序 返回答案。

```js
const nums = [1, 1, 1, 2, 2, 3], k = 2
// 输出 [1, 2]

const nums = [1], k = 1
// 输出 [1]
```

**解法一**

  使用一个map存储每个元素出现的次数, 然后遍历map 使用一个数组 存储 map的 *key* 和 *value*, 并对 出现次数按照 **从大到小** 排序。

```ts
const top_k_frequent = (nums: number[], k: number): number[] => {
  const map: Map<number, number> = new Map()
  for (const item of nums) {
    let count: number = map.get(item) || 0
    map.set(item, ++count)
  }
  const temp: {key: number, value: number}[] = []
  for (const [key, value] of map.entries()) {
    temp.push({ key, value })
  }
  temp.sort((a, b) => b.value - a.value)
  temp.length = k
  return temp.map(item => item.key)
}
```

**解法二**

  和上面的解法差不多, 差别在于map存储的数据结构。

```ts
const top_k_frequent = (nums: number[], k: number): number[] => { const temp: number[] = []
  const map: Map<number, number[]> = new Map()
  for (const item of nums) {
    const arr: number[] = map.get(item) || []
    arr.push(item)
    map.set(item, arr)
  }
  const values = [...map.values()].sort((a, b) => b.length - a.length)
  for (let i = 0; i < k; i++) {
    temp.push(values[i][0])
  }
  return temp}
```