# 两数相除

  给定两个整数, 被除数 **dividend** 和 除数 **divisor**。将两数相除, 要求不使用乘法, 除法 和 mod 运算符。返回 被除数 **dividend** 除以
  **divisor** 得到的商。 整数除法的结果应该截取其小数部分。

```js
dividend = 10, divisor = 3
// 输出 3

dividend = 7, divisor = -3
```
  自己的第一个想法是将除数 **divisor** 累加, 但是在 被除数 **dividend** 很大而除数 **divisor** 很小的时候, 需要做很多次循环。测试时超时未通过。
  在评论中看到一种算法, 每次将除数翻倍 累加, 来减少循环次数!

```ts
const divide = (dividend: number, divisor: number): number => {
  if (divisor === 0 || dividend === 0) return 0
  const is_same_symbol = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)
  if (dividend < 0) {
    dividend = Math.abs(dividend)
  }
  if (divisor < 0) {
    divisor = Math.abs(divisor)
  }
  const _func = (c:number, d:number): number => {
    if (d > c) return 0
    let count = 1
    let sum = d
    // 注意此处不是 sum, 而是 sum + sum, 如果是sum, 那么就不是翻倍累加 而是 每次以相同速度递增累加了。
    while ((sum + sum) < c) {
      count += count
      sum += sum
    }
    /**
     * 以 11 / 2 为例
     * count = 1      第一次比较 (2 + 2) < 11
     * count = 2      sum = 4   (4 + 4) < 11
     * count = 4      sum = 8   (8 + 8) > 11 跳出循环
     * 因为最后一次 累加超过被除数了, 将被除数 减去 上一次 累加的值, 此时是剩余的
     * (上一次是 count = 4, sum = 8, 也就是4 * 2 = 8, 剩下的 3 / 2 等于多少？  和之前的count相加即可)
    */
    return count + _func(c - sum, d)
  }
  let result = _func(dividend, divisor)
  !is_same_symbol && (result = (0 - result))
  if (result >= Math.pow(2, 31) || result < Math.pow(-2, 31)) return Math.pow(2, 31) - 1
  return result
}
```