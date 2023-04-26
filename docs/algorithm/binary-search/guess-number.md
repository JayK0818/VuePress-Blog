# 猜数大小

  猜数字游戏的规则如下：

- 每轮游戏, 我都会从 *1* 到 *n* 随机选择一个数字。请你猜选出的是哪个数字。
- 如果你猜错了,我会告诉你,你猜测的数字是比我选出的数字是大了还是小了。

  返回值一共有3种可能情况(*-1*, *1* 或 *0*), *-1* 表示我选出的数字比你猜的数字小 *pick < num*, *1* 表示猜的数字大 *pick > num*。
  如果选出的数字和猜的数字一样, 那么恭喜你猜对了! *pick === num*

  可以通过一个预先定义好的接口 *int guess(int number)* 来获取猜测结果。
```js
const n = 10, pick = 6
// 输出 6

const n = 2, pick = 1
// 输出 1
```

**解法一**

```ts
/**
 * @description 获取猜测的结果
*/
const guess = (n: number): -1 | 0 | 1 => {}

const get_number = (n: number): number => {
  let left = 0
  let right = n
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const p = guess(mid)
    switch (p) {
      case 0:
        return mid
      case 1:
        left = mid + 1
        break
      case -1:
        right = mid - 1
        break
    }
  }
}
```