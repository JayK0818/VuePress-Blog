# 两个列表的最小索引和

  假设 Andy 和 Doris 想在晚餐时选择一家餐厅, 并且他们都有一个表示最喜爱餐厅的列表, 每个餐厅的名字用字符串表示。你需要帮助他们用
  **最少的索引和** 找出他们共同喜爱的餐厅。如果答案不止一个, 则输出所有答案并且不考虑顺序。

```js
const list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
const list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]

// ["Shogun"]
// 他们唯一共同喜爱的餐厅是“Shogun”。

const list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
const list2 = ["KFC", "Shogun", "Burger King"]
// ["Shogun"]
// 他们共同喜爱且具有最小索引和的餐厅是“Shogun”，它有最小的索引和1(0+1)
```

**解法一**

  遍历第一个数组, 存储数组项和它的索引。然后遍历第二个数组时判断 是否有相同部分, 有的话 将相同的餐厅项 和 它在两个数组中的 索引相加, 并存储到一个新的map结构中。 最后找出最小的 索引对应的那个餐厅。

```ts
const find_restaurant = (list1: string[], list2: string[]): string[] => {
  const map1:Map<string, number> = new Map()
  list1.forEach((item, i) => {
    if (item) {
      map1.set(item, i)
    }
  })
  const common_map: Map<string, number> = new Map()
  list2.forEach((item, i) => {
    if (item && map1.get(item) !== undefined) {
      const idx = map1.get(item) as number + i
      common_map.set(item, idx)
    }
  })
  const min_idx = Math.min(...common_map.values())
  const temp: string[] = []
  for (const [key, value] of common_map.entries()) {
    if (value === min_idx) {
      temp.push(key)
    }
  }
  return temp
}
```

**解法二**

  使用一个map 存储 在两个数组中存在的相同的餐厅项 以及他们的 索引和, 索引和为 键名, 在遍历第二个数组时 找到最小的索引和, 最后在map中输出最小索引和对应的数据即可。
```ts
const find_resuaurant = (list1: string[], list2: string[]): string[] => {
  const map1:Map<string, number> = new Map()
  list1.forEach((item, i) => {
    if (item) {
      map1.set(item, i)
    }
  })
  const idx_map:Map<number, string[]> = new Map()
  let min_idx = Infinity
  for (let i = 0, length = list2.length; i < length; i++) {
    const resuaurant = list2[i]
    if (map.get(resuaurant) !== undefined && resuaurant) {
      const idx_sum = map.get(resuaurant) as number + i
      if (idx_sum < min_idx) {
        min_idx = idx_sum
      }
      idx_map.has(idx_sum) ? idx_map.get(idx_sum)?.push(resuaurant) : idx_map.set(idx_sum, [resuaurant])
    }
  }
  return idx_map.get(min_idx) as string[]
}
```