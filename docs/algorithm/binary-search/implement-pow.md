# Math.Pow(x, n)

  实现 **Math.pow(x, n)**, 计算 **x** 的整数 **n** 次幂函数。
```js
const x = 2.00000, n = 10
// 输出 1024.00000

const x = 2.10000, n = 3
// 输出 9.26100
```
- *n* 是一个整数
- *-100* < *x* < *100*

**解法一**

  想法是遍历 **n** 的一半, 然后一半的结果 平方即可, 处理一种特殊情况, 就是n为奇数时, 再乘一次 x。**这个算法比较糟糕** :mask:

```ts
const implement_pow = (x: number, n: number): number => {
  let m = Math.floor(Math.abs(n) / 2)
  let start = 0
  let result = 1
  while (start < m) {
    result *= x
    start += 1
  }
  result *= result
  if (Math.abs(n) % 2 !== 0) {
    result *= x
  }
  return n < 0 ? (1 / result) : result
}
```
:::tip
- 执行用时：7476 ms , 在所有 TypeScript 提交中击败了 5.00% 的用户
- 内存消耗：44.1 MB , 在所有 TypeScript 提交中击败了 5.55% 的用户
- 通过测试用例：305 / 305
:::

**解法二**

  上面的理解 只做了一次 二分, 比如 2的10次方, 是2的5次方 的平方, 其实还可以将 2的5次方再向下拆分。下面是在题解中看到的一种方法。

```ts
const implement_pow = (n: number): number => {
  const pow = (n: number): number => {
    if (n === 0) return 1
    if (n === 1) return x
    const number = pow(Math.floor(n / 2))
    return n % 2 === 0 ? number * number : (number * number * x)
  }
  return n > 0 ? pow(n) : 1 / pow(-n)
}
```