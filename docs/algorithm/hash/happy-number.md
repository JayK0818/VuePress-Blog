# 快乐数

  编写一个算法来判断一个数 **n** 是不是快乐数。

  **[快乐数]** 定义为:
- 对于一个正整数, 每一次将该数替换为它每个位置上的数字的平方和。
- 然后重复这个过程直到这个数变为1,, 也可能是 **无限循环** 但始终变不到 1。
- 如果这个过程 **结果为** 1, 那么这个数 就是快乐数。

```js
const n = 19
// 输出 true
/*
1² + 9² = 82
8² + 2² = 68
6² + 8² = 100
1² + 0² + 0² = 1
*/

const n = 2
// false
```

  这道题主要在于处理无限循环 这种情况。 比如 2 这个数字, 按照快乐数的定义, 它的计算过程如下:
```js
2² = 4
4² = 16
1² + 6² = 37
3² + 7² = 58
5² + 8² = 89
8² + 9² = 145
1² + 4² + 5² = 42
4² + 2² = 20
2² + 0² = 4
// .... 然后重复以上过程
```

**解法一**

```ts
const is_happy_number = (num: number):boolean => {
  let number = n
  // 也可以使用set数据结构, 因为我们只关注 sum 是否存在
  const map: Map<number, number> = new Map()
  while (number < Math.pow(2, 31)) {
    let sum = 0
    while (number > 0) {
      sum += Math.pow(number % 10, 2)
      number = Math.floor(number / 10)
    }
    // 判断当前的数 是不是 在之前 某个数的 平方和的结果, 如果是的话 直接返回false.
    if (map.has(sum)) return false
    // 将每个数的平方和存储
    map.set(sum, number)
    if (sum === 1) {
      return true
    }
    number = sum
  }
  return false
}
```