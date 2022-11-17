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

**解法三**

  此题要求使用 O(log n) 的算法计算。

```ts
const search_first_last_index = (nums: number[], target:number): number[] => {
  const length = nums.length
  if (length === 0) return [-1, -1]
  // 查找左边界
  const search_left = (nums: number[], target: number) => {
    let left = 0, right = nums.length - 1
    while (left < right) {
      const middle = Math.floor((left + right) / 2)
      if (nums[middle] >= target) {
        right = middle
      } else {
        left = middle + 1
      }
    }
    return nums[right] === target ? right : -1
  }
  // 查找右边界
  const search_right = (nums: number[], target: number) => {
    let left = 0, right = nums.length - 1
    while (left < right) {
      const middle = Math.floor((left + right + 1) / 2)
      if (nums[middle] <= target) {
        left = middle
      } else {
        right = middle - 1
      }
    }
    return nums[left] === target ? left : -1
  }
  const left_index = search_left(nums, target)
  const right_index = search_right(nums, target)
  return [left_index, right_index]
}
```

**解法四**

  对上面的解法 做一个优化, 因为数组是从小到大排列的, 找到左侧target的下标时, 如果此时 值大于 它的前一个值, 那么就是我们要找的值了。
  同理, 找右侧的下标时, 如果此时下标对应的 值 小于下一个值时, 说明已经找到右侧下标了。(注意判断一下边界条件)
```ts
const search_first_last_index = (nums: number[], target: number): number[] => {
  const length = nums.length
  const result: number[] = [-1, -1]
  if (length === 0) return result
  let start = 0, end = length - 1
  while (start <= end) {
    const middle = Math.floor((start + end) / 2)
    if (nums[middle] === target) {
      // 未到左边界时 它的值大于它 前一个值, 或者已经是第一个值了
      if ((middle !== 0 && nums[middle] > nums[middle - 1]) || middle === 0) {
        result[0] = middle
        break
      }
      end = middle - 1
    } else if (nums[middle] > target) {
      end = middle - 1
    } else {
      start = middle + 1
    }
  }
  start = 0
  end = length - 1
  while (start <= end) {
    const middle = Math.floor((start + end) / 2)
    if (nums[middle] === target) {
      // 如果此时值 小于它的 后一个值  或者已经是最后一个值了
      if ((middle !== length - 1 && nums[middle] < nums[middle+1]) || middle === length - 1) {
        result[1] = middle
        break
      }
      start = middle + 1
    }else if (nums[middle] > target) {
      end = middle - 1
    } else {
      start = middle + 1
    }
  }
  return result
}
```