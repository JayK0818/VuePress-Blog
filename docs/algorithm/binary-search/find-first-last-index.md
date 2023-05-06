# 查找元素的第一个和最后一个位置

  给你一个按照非递减顺序排列的整数数组 **nums**, 和一个目标值 **target**。请你找出给定目标值在数组中的开始位置和结束位置。
  如果数组中不存在目标值 **target**, 返回 **[-1, -1]**。

```ts
const nums = [5, 7, 7, 8, 8, 10], target = 8
// 输出 [3, 4]

const nums = [5, 7, 7, 8, 8, 10], target = 6
// 输出[-1, -1]

const nums = [], target = 0
// 输出[-1, -1]
```

**解法一**

  使用二分法 定义两个函数, 分别找到第一次/最后一次出现目标值的下标。

```ts
const find_first_last_position = (nums: number[], target: number): number[] => {
  if (!nums.includes(target)) return [-1, -1]
  const search_left = () => {
    let start = 0
    let end = nums.length - 1
    while (start < end) {
      const mid = Math.floor((start + end) / 2)
      const n = nums[mid]
      if (n >= target) {
        end = mid
      } else {
        start = mid + 1
      }
    }
    return start
  }
  const search_right = () => {
    let start = 0
    let end = nums.length - 1
    while (start < end) {
      // 为了尽量找到右侧的下标, 每次找中间值的时候+1
      const mid = Math.floor((start + end + 1) / 2)
      const n = nums[mid]
      if (n <= target) {
        start = mid
      } else {
        end = mid - 1
      }
    }
    return start
  }
  const left = search_left()
  const right = search_right()
  return [left, right]
}
```

**解法二**

  考虑一种情况, **[3, 4, 5, 8, 8, 8, 9]**, 找出数字 **8** 在数组中出现的第一个和最后一个位置。
  在左边界第一次循环时, mid = 3, 此时已经找到了第一次出现的位置, 但是这个时候 *while* 循环 不满足跳出循环的条件, 还是需要会循环下去...。 所以在这里可以做一个判断。因为数组是已经排序好的, 如果当前下标 *mid* 对应的值大于 *mid-1* 所对应的值, 则表示它是我们要找的下标, 同理, 对于右下标也可以做同样的判断。如果 下标 *mid* 所对应的值 小于 *mid+1* 下标对应的值, 则表明已经找到了最后一次出现 *target* 的位置。
  
```ts
const find_first_last_position = (nums: number[], target: number): number[] => {
  let start = 0
  let end = nums.length
  let start_idx = -1
  let end_idx = -1
  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    const n = nums[mid]
    if (n === target) {
      // 如果此时已经是第一个下标, 或者 它不是第一个下标, 但是大于它前面的值
      if ((mid > 0 && nums[mid] > nums[mid - 1]) || mid === 0) {
        start_idx = mid
        break
      }
      end = mid - 1
    } else if (n > target) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  start = 0
  end = nums.length
  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    const n = nums[mid]
    if (n === target) {
      // 此时mid已经是最后一个下标 或者 不是最后一个下标 但是小于 它后面的值
      if (mid === nums.length - 1 || (mid !== nums.length - 1 && n < nums[mid + 1])) {
        end_idx = mid
        break
      }
      start = mid + 1
    } else if (n > target) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return [start_idx, end_idx]
}
```

**解法三**

  利用两次for循环 分别从 头部 和 尾部开始遍历, 找到值 等于 target 的 记录下标 并跳出循环。

```ts
const search_first_last_index = (nums: number[], target:number): number[] => {
  const result: number[] = [-1, -1]
  const length = nums.length
  if (length === 0) return result
  for (let i = 0; i < length; i++) {
    if (nums[i] === target) {
      result[0] = i;
      break 
    }
  }
  for (let i = length - 1; i >=0; i--) {
    if (nums[i] === target) {
      result[1] = i
      break
    }
  }
  return result
}
```