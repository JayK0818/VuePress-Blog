# 完全平方数

  给你一个整数 **n**, 返回 和为 **n** 的完全平方数的 最少数量。
  **完全平方数** 是一个整数, 其值等于另一个整数的平方. 例如 *1* *4* *9* 都是完全平方数, 而 *3* 和 *11* 不是。

```js
const n = 12
// 输出3   12 = 4 + 4 + 4

const n = 13
// 输出 2   13 = 4 + 9
```
**解法一**

```ts
const nums_squares = (n: number): number => {
  // 存储小于n 的所有完全平方数
  const queue: number[] = []
  let j = 1
  while (j * j <= n) {
    // 如果这个数正好可以 开方, 它是一个完全平方数, 直接返回1。
    if (j * j === n) {
      return 1
    }
    queue.push(j * j)
    j++
  }
  let step = 1
  // 每次都从完全平方数里找
  const nums = [...queue]
  const visited: {[key: number]: number } = {}
  while (queue.length) {
    step += 1
    for (let i = 0, length = queue.length; i < length; i++) {
      const num = queue.shift() as number
      visited[num] = 1
      for (const a of nums) {
        const sum = a + num
        if (sum === n) {
          return step
        }
        if (sum > n) {
          break
        }
        if (visited[sum] !== 1) {
          queue.push(sum)
          visited[sum] = 1
        }
      }
    }
  }
  return 0
}
```