# 数组拆分

  给定长度为 **2n** 的整数数组 **nums**, 你的任务是将这些数分成 **n** 对。 例如 *(a1, b1), (a2, b2)...(an, bn)*,使得从
  **1** 到 **n** 的 **min(a, b)** 总和最大。
```js
const nums = [1,4,3,2]
/**
 * 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
    2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
    3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
 * 
*/
// 所以最大总和为 4

const nums = [6,2,6,5,1,2]
// 最优的分法为 (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9
```
1. 1 <= n <= 104
2. nums.length == 2 * n
3. -104 <= nums[i] <= 104

**解法一**

  将数组从小到大排序, 没两个数一组, 使用Math.min()方法取最小的那个数 并求和
```ts
const array_pair_sum = (nums: number[]): number => {
  const numbers = nums.slice().sort((a, b) => a - b)
  let sum = 0
  for (let i = 0, length = numbers.length / 2; i < length; i++) {
      sum += Math.min(...numbers.slice(i*2, (i+1)*2))
  }
  return sum
}
```

**解法二**

  将数组排序后 其实偶数下标 所对应的数字之和 就是需要的结果
```ts
const array_pair_sum = (nums: numbers[]): number => {
  const numbers = nums.slice().sort((a, b) => a - b)
  let sum = 0
  for (let i = 0, length = numbers.length; i < length; i+=2) {
    sum += numbers[i]
  }
  return sum
}
```
