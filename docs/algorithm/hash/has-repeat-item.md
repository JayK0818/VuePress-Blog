# 存在重复元素

  给你一个整数数组 *nums*。如果任一值在数组中 **至少出现两次**, 返回 *true*, 如果数组中每个元素互不相同。返回 *false*

```js
const nums = [1, 2, 3, 1]
// true

const nums = [1, 2, 3, 4]
// false

const nums = [1,1,1,3,3,4,3,2,4,2]
// true
```

  这道题比较简单, 遍历数组使用set存储每个元素, 每次遍历时查询当前元素是否已经存在于set数据结构里, 如果存在 直接返回true。

**解法一**

```ts
const contains_duplicate_item = (nums: number[]):boolean => {
  const set: Set<number> = new Set()
  for (const n of nums) {
    if (set.has(n)) {
      return true
    } else {
      set.add(n)
    }
  }
  return false
}
```

## 存在重复元素II

  给你一个整数数组 **nums** 和 一个整数 *k*, 判断数组中是否存在两个 **不同的索引** *i* 和 *j*, 满足 *nums[i] = nums[j]* 且
  **abs(i - j) <= k**。如果存在返回 *true*, 否则 返回 *false*。

```js
const nums = [1, 2, 3, 1], k = 3
// true

const nums = [1, 0, 1, 1], k = 1
// true

const nums = [1, 2, 3, 1, 2, 3], k = 2
// false
```

**解法一**

  定义一个map存储数组每项出现的下标, 然后遍历Map, 判断存储的下标数组是否存在 *i - j <= k* 的条件, 有的话返回true, 否则返回false.

```ts
const has_repeat_item = (nums: number[], k: number): boolean => {
  const map: Map<number, number[]> = new Map()
  for (let i = 0, length = nums.length; i< length; i++) {
    const n = nums[i]
    const temp:number[] = map.get(n) || []
    temp.push(i)
    map.set(n, temp)
  }
  for (const value of map.values()) {
    const length = value.length
    if (length < 2) continue
    for (let i = 0; i < length - 1; i++) {
      for (let j = i + 1; j < length; j++) {
        if (value[j] - value[i] <= k) return true
      }
    }
  }
  return false
}
```

**解法二**

```ts
const has_repeat_item = (nums: number[], k:number): boolean => {
  const map: Map<number, number> = new Map()
  for (let i = 0, length = nums.length; i < length; i++) {
    const n = nums[i]
    if (map.has(n)) {
      const diff = i - (map.get(n) as number)
      if (diff <= k) return true
    }
    map.set(n, i)
  }
  return false
}
```