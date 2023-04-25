# x的平方根

  给你一个非负整数 *x*, 计算并返回 *x* 的 **算数平方根**。 由于返回类型时整数,结果只保留 **整数部分**, 小数将被舍去。

:::danger
不允许使用任何内置指数函数和算符。例如 *Math.pow(x, 0.5)* 或者 x ** 0.5
:::

**解法一**

```ts
const sqrt_number = (x: number): number => {
  if(x <= 1) return x
  let left = 0
  let right = Math.ceil(x / 2)
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (mid * mid <= x) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return right
}
```