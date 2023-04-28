# 寻找峰值

  峰值元素是指其值严格大于左右相邻值的元素。给你一个整数数组 **nums**, 找到峰值元素并返回其索引。数组可能包含多个峰值, 在这种情况下,
  返回 **任何一个峰值** 所在位置即可。 你可以假设 *nums[-1] = nums[n] = -∞*。

```js
const nums = [1, 2, 3, 1]
// 输出2   3是峰值元素。 返回其索引 2
```

**解法一**

  因为 **nums[-1] = nums[n] = -Infinity**, 所以不用考虑数组索引越界问题。直接使用二分法

```ts
const find_max_value = (nums: number[]) => {
  let left = 0
  let right = nums.length
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return right
}
```