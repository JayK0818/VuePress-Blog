# 两个数组的交集

  给定两个数组 **nums1** 和 **nums2**, 返回 *它们的交集*。输出结果中的 每个元素是唯一的。 我们可以 **不考虑输出的结果顺序**。

```js
const nums1 = [1, 2, 2, 1]
const nums2 = [2, 2]
// 输出 [2]

const nums1 = [4,9,5]
const nums2 = [9,4,9,8,4]
// [9, 4]
```

**解法一**

```ts
const intersection = (nums1: number[], nums2: number[]): number[] => {
  const set: Set<number> = new Set()
  for (const num of nums1) {
    if (nums2.includes(num)) {
      set.add(num)
    }
  }
  return [...set]
}
```

**解法二**

```ts
const intersection = (nums1: number[], nums2: number[]): number[] => {
  const set = new Set(nums2)
  return [...new Set(nums1.filter(item => set.has(item)))]
}
```

# 两个数组的交集II

  给你两个整数数组 **nums1** 和 **nums2**, 请你以数组形式返回数组的交集。返回结果中每个元素出现的次数,应与元素在两个数组中都出现的次数一致。
  (如果出现次数不一致, 则考虑取较小值), 可以不考虑输出结果的顺序。

```js
const nums1 = [1, 2, 2, 1], nums2 = [2, 2]
// 输出 [2, 2]

const nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
// 输出 4 9
```

**解法一**

  定义两个map结构分别存储两个数组中数字出现的次数, 键名为数组项, 键值为出现次数。遍历其中一个map数据, 判断键名是否是交集, 如果是的话 判断它应该出现几次。 

```ts
const intersection = (nums1: number[], nums2: number[]): number[] => {
  const map1: Map<number, number> = new Map()
  const map2: Map<number, number> = new Map()
  for (const item of nums1) {
    map1.has(item) ? map1.set(item, map1.get(item) as number + 1) : map1.set(item, 1)
  }
  for (const item of nums2) {
    map2.has(item) ? map2.set(item, map2.get(item) as number + 1) : map2.set(item, 1)
  }
  const temp: number[] = []
  for (const [key, value] of map1.entries()) {
    if (!map2.get(key)) continue
    const length = value > (map2.get(key) as number) ? map2.get(key) as number : value
    for (let i = 0; i < length; i++) {
      temp.push(key)
    }
  }
  return temp
}
```

**解法二**

  题解中看到的一种方法, 使用哈希表存储较短的数组。同样键名为数组项, 键值为该项出现的次数。遍历第二个数组的时候, 如果存在交集, 将其添加进一个空数组, 并把该数据在hash表中的次数 -1。

```ts
const intersection = (nums1: number[], nums2: number): number[] => {
  if (nums1.length > nums2.length) return intersect(nums2, nums1)
  // 存储其中较短数组 每项 出现的次数
  const map: Map<number, number> = new Map()
  for (const item of nums1) {
    map.has(item) ? map.set(item, map.get(item) as number + 1) : map.set(item, 1)
  }
  const temp: number[] = []
  for (const item of nums2) {
    if (!map.has(item)) continue
    let n = map.get(item) as number
    if (n >= 1) {
      temp.push(item)
      map.set(item, --n)
    }
  }
  return temp
}
```