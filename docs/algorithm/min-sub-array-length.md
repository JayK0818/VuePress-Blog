# 长度最小子数组

  给定一个含有 **n** 个正整数的数组和一个正整数 **target**, 找出该数组中满足其和 **>=target** 的长度最小的 **连续子数组**, 并返回其长度,
  如果不存在符合条件的子数组, 返回 0.

```js
const nums = [2, 3, 1, 2, 4, 3], target = 7
// 输出2 子数组[4, 3] 是该条件下的长度最小的子数组。
```

**解法一**

  暴力破解, 依次计算满足条件的子数组, 再判断长度是否为最小值。 最后返回最小值长度!
```ts
const min_sub_array_length = (nums: number[], target: number): number => {
  const length = nums.length
  if (length === 0) return 0
  const sum = nums.reduce((p, n) => p + n, 0)
  if (sum < target) return 0
  let min = Infinity
  for (let i = 0; i < length; i++) {
    for (let j = i+1; j <= length; j++) {
      const sub_array = nums.slice(i, j)
      const sum = sub_array.reduce((p, n) => p + n, 0)
      if (sum >= target) {
        min = Math.min(min, sub_array.length)
        break
      }
    }
  }
  return min
}
```