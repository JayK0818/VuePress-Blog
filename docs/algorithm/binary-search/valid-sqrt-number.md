# 有效的完全平方数

  给你一个正整数 **num**。如果 **num** 是一个完全平方数, 则返回 *true*, 否则返回 *false*。
  **完全平方数** 是一个 可以写成某个整数的平方的整数。换句话说, 它可以写成某个整数和自身的乘积。

```js
const num = 16
// true, 因为 4 * 4 = 16 且 4 是一个整数


const num = 14
// false, 因为 3.742 * 3.742 = 14. 但3.742 不是一个整数。
```

**解法一**

```ts
const valid_sqrt_number = (num: number): boolean => {
  let left = 0
  let right = num
  while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (mid * mid === num) {
          return true
      } else if (mid * mid > num) {
          right = mid - 1
      } else {
          left = mid + 1
      }
  }
  return false
}
```