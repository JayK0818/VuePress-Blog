# x的平方根

  给你一个非负整数 *x*, 计算并返回 *x* 的 **算数平方根**。 由于返回类型时整数,结果只保留 **整数部分**, 小数将被舍去。

:::danger
不允许使用任何内置指数函数和算符。例如 *Math.pow(x, 0.5)* 或者 x ** 0.5
:::

**解法一**

  使用二分法, 这道题转换一个说法 求的是 *k的平方 <= x* 的最大k值。

```ts
const sqrt_number = (x: number): number => {
  // 特殊值先排除
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

**解法二**

  题解中看到的一种方法, 虽然使用的不是二分法, 但是逻辑比较清楚,在这里做一个拓展。使用for循环遍历, 找到一个k, **k的平方 <= x**, 并且 **K+1的平方 > x**。

```ts
const sqrt_number = (x: number): number => {
  if (x <= 1) return x
  let ans = 0
  for (let i = 1; i < x; i++) {
    if (i * i <= x && (i+1)* (i+1) > x) {
      ans = i
      break
    }
  }
  return ans
}
```