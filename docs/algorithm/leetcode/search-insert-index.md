# 搜索插入位置

  给定一个排序数组 和 一个目标值, 在数组中找到目标值, 并返回其索引。如果目标值不存在于数组中, 返回它将被按顺序插入的位置。

  请务必使用时间复杂度为 O (log n) 的算法。(nums 为 **无重复元素** 的 ****)

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

**解法二**

  使用二分查找, 如果找到了 直接跳出循环 返回下标。
```ts
const search_insert_index = (nums: number[], target: number): number => {
  const length = nums.length
  if (length === 0) return 0
  if (target > nums[nums.length - 1]) return length
  if (target < nums[0])  return 0
  let start = 0, end = length - 1
  let result = -1
  let flag = false
  while (start < end) {
    const middle = Math.floor((start + end) / 2)
    if (nums[middle] === target) {
      result = middle
      flag = true
      break
    } else if (nums[middle] > target) {
      end = middle
    } else {
      start = middle + 1 // 防止死循环,start需要+1 (如果只有两个数的时候,下标为0和1, middle一直为0)
    }
  }
  return flag ? result : (nums[start] < target ? (start + 1) : start)
}


// 上面的算法在最后判断了 是返回start 还是 start+1, 对上面的算法做进一步优化 无需判断
const search_insert_index = (nums: number[], target: number): number => {
  const length = nums.length
  if (length === 0) return 0
  let start = 0, end = nums.length - 1
  while (start <= end) {
    const middle = Math.floor((start + end) / 2)
    if (nums[middle] === target) {
      start = middle
      break
    } else if (target < nums[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    }
  }
  return start
}

const search_insert_index = (nums: number[], target: number): number => {
  const length = nums.length
  if (length === 0) return 0
  let start = 0, end = length
  while (start < end) {
    const middle = Math.floor((start + end) / 2)
    if (nums[middle] === target) {
      start = middle
      break
    } else if (nums[middle] > target) {
      end = middle
    } else {
      start = middle + 1
    }
  }
  return start
}
```