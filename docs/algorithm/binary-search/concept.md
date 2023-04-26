# 概念

  二分查找是计算机科学中最基本,最有用的算法之一。它描述了在有序集合中搜索特定值的过程。

1. 目标target ----- 需要查找的值
2. 索引index  ----- 查找的当前位置
3. 左右索引   ----- 用来维持查找空间的指标
4. 中间指示符 ----- 用来应用条件确定我们应该向左查找还是向右查找的索引.

## 模板一

```ts
const binary_search = (nums: number[], target: number) => {
  const length = nums.length
  if (length === 0) return -1
  let start = 0
  let end = length - 1
  while (start <= end) {
    const mid = left + Math.floor((right - left) / 2)
    if (nums[mid] === target) return mid
    else if (nums[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
}
```
  模板一是二分查找最基础和最基本的形式。

- 初始条件: **left = 0, right = length - 1**
- 终止: **left > right**
- 向左查找: **right = mid - 1**
- 向右查找: **left = mid + 1**

## 模板二

  模板二十二分查找的高级模板, 它用于需要访问数组中 当前索引及其直接右邻居索引的元素或条件。
- 初始条件: **left = 0, right = length**
- 终止: **left === right**
- 向左查找: **right = mid**
- 向右查找: **left = mid + 1**