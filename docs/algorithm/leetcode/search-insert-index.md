# 搜索插入位置

  给定一个排序数组 和 一个目标值, 在数组中找到目标值, 并返回其索引。如果目标值不存在于数组中, 返回它将被按顺序插入的位置。

  请务必使用时间复杂度为 O (log n) 的算法。

```js
nums = [1, 3, 5, 6], target = 5
// 2

nums = [1, 3, 5, 6],  target = 2
// 1

nums = [1, 3, 5, 6], target = 7
// 4
```

**解法一**

  此种解法不符合题意,可做了解。 直接遍历数组, 找到目标值应该 在数组中存放的位置 返回即可。

```ts
const search_insert_index = (nums: number[], target: number): number => {
  const length = nums.length
  if (length === 0) return 0
  if (target > nums[nums.length - 1]) return length
  if (target < nums[0])  return 0
  let result = 0
  for (let i = 0; i < length - 1; i++) {
    const p = nums[i]
    const n = nums[i+1]
    if (target > p && target <= n) {
      result = i + 1
      break
    }
  }
  return result
}
```