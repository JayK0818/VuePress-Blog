# 寻找数组的中心索引

  给你一个整数数组 **nums**, 计算数组的中心下标。数组的 **中心下标** 是数组的一个下标, 其左侧所有元素相加的和等于右侧所有元素相加的和。
  如果数组有多个中心下标, 应返回 最靠近左边的 那一个, 如果数组不存在中心下标, 返回 **-1**

```js
const nums = [1, 7, 3, 6, 5, 6]

// 返回3
```

**解法一**

  先求出数组之后, 饭后遍历数组, 使用一个变量记录 已遍历的数字之和, 然后将数组总和 - 当前数字之和 除以 2 等于左侧已遍历的数字之和, 那么当前
  下标 之后的数字之和 和 之前的数字之和相等。也就是我们需要返回的下标。

```ts
const find_middle_index = (nums: number[]): number => {
  const total = nums.reduce((p, n) => p + n, 0)
  let left_sum: number = 0
  for (let i = 0, length = nums.length; i < length; i++) {
    if ((total - nums[i]) / 2 - left_sum === 0) return i
    left_sum += nums[i]
  }
  return -1
}
```