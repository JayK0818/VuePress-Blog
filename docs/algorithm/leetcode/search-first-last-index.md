# 在排序数组中查找元素的第一个和最后一个位置

  给你一个按照非递减顺序排列的整数数组 **nums**, 和一个目标值 **target**, 请你找出给定目标值在数组中的开始位置和结束位置。
  如果数组中不存在目标值 target, 返回 [-1, -1]。

```js
nums = [5,7,7,8,8,10], target = 8
// 输出 [3, 4]

nums = [5,7,7,8,8,10], target = 6
// 输出 [-1, -1]
```

**解法一**

  使用双指针 并定义两个变量 记录是否查找到了 第一个和最后一个 下标。找到了 当前下标不再移动。如果都找到了 直接跳出循环即可

```ts
const search_first_last_index = (nums: number[], target: number): number[] => {
  const result: number[] = [-1, -1]
  if (!nums.length) return result
  let start = 0, end = nums.length - 1
  let start_is_find = false
  let end_is_find = false
  while (start <= end) {
    if (start_is_find && end_is_find) break
    if (!start_is_find) {
      if (nums[start] === target) {
        result[0] = start
        start_is_find = true
      } else {
        start += 1
      }
    }
    if (!end_is_find) {
      if (nums[end] === target) {
        result[1] = end
        end_is_find = true
      } else {
        end -= 1
      }
    }
  }
  return result
}
```

**解法二**

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