# 搜索旋转排序数组

  整数数组 **nums** 按升序排列, 数组中的值 **互不相同**。 在传递给函数之前, **nums** 在预先未知的 某个下标 k (0 <= k <= nums.length) 上进行了
  旋转, 使数组变为 [nums[k], nums[k+1], ...nums[n-1], nums[0], nums[1], ...nums[k-1]] (下标从0开始计数)。

  给你旋转后的数组 nums 和一个整数target, 如果nums中存在这个目标值 **target**, 则返回它的下标, 否则返回 -1。

```js
nums = [4,5,6,7,0,1,2], target = 0
// 输出 4

nums = [4,5,6,7,0,1,2], target = 3
// 输出 -1
```
  你必须设计一个时间复杂度为 O(log n)的算法解决此问题。

**解法一**

  实现的第一种方式, 因为数组已经在某处旋转过, 将旋转过的数组分为三种情况, 一种是在中间旋转。则数组 分为两段递增。在最后一位元素旋转时, 整个数组变为倒序数组。
  在起点递增时数组还是原始顺序。 如果在中间某个下标旋转过的话, 判断target在哪个区间, 在此区间进行二分查找即可。如果整个数组倒序 或者 未旋转的话 在整个数组二分查找。

```ts
const search_rotate_array = (nums: number[], target: number): number => {
  let rotate_index = -1 // 定义一个标识, 判断是从哪里旋转的 (初始值为-1 是为了区分倒序 或者 没有旋转的情况)
  for (let i = 0, length = nums.length - 1; i < length; i++) {
    if (nums[i] > nums[i+1]) {
      rotate_index = i
      break
    }
  }
  // 在某个区间段 从小到大 查找
  const search_small_to_big = (start: number, end: number): number => {
    let result = -1
    while (start <= end) {
      let middle = Math.floor((start + end) / 2)
      if (nums[middle] === target) {
        result = middle
        break
      }
      if (nums[middle] > target) {
        end = middle - 1
      } else {
        start = middle + 1
      }
    }
    return result
  }
  // 特殊情况, 整个数组倒序时的查找
  const search_big_to_small = (start: number, end: number): number => {
    let result = -1
    if (nums[0] < target) return -1
    while (start <= end) {
      let middle = Math.floor((end + start) / 2)
      if (nums[middle] === target) {
        result = middle
        break
      }
      if (nums[middle] > target) {
        start = middle + 1
      } else {
        end = middle - 1
      }
    }
    return result
  }
  // 返回的结果 下标
  let result = -1
  if (rotate_index === 0) {
    result = search_big_to_small(0, nums.length - 1)
  }
  if (rotate_index === -1) {
    result = search_small_to_big(0, nums.length - 1)
  } else {
    if (nums[0] <= target && nums[rotate_index] >= target) {
      result = search_small_to_big(0, rotate_index)
    } else {
      result = search_small_to_big(rotate_index + 1, nums.length - 1)
    }
  }
  return result
}
```

**解法二**

  不用管数组是从哪里旋转的, 按照二分法 将数组一分为二 有一部分是递增的, 另一半是非递增的。 先在单调递增的区间进行查找, 如果没有 再在 非递增的区间
  查找

```ts
const search_rotate_array = (nums: number[], target: number): number => {
  let result = -1
  let start = 0, end = nums.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2)
    if (nums[middle] === target) {
      result = middle
      break
    }
    // 左边是递增的
    if (nums[start] <= nums[middle]) {
      if (target >= nums[start] && target < nums[middle]) {
        end = middle - 1
      } else {
        start = middle + 1
      }
    // 右边是 有序递增的
    } else {
      if (nums[middle] < target && nums[end] >= target) {
        start = middle + 1
      } else {
        end = middle - 1
      }
    }
  }
  return result
}
```