# 最接近的三数之和

  给定一个长度为 **n** 的整数数组 **nums** 和一个目标值 **target**。请从 **nums** 中选出三个整数 使得它们的和与 target 最接近。
  返回这 三个数的 和。

```js
nums = [-1, 2, 1, -4] target = 1
// 输出 2   与 target 最接近的和是 2 (-1 + 2 + 1 = 2
```
**解法一**

  通过暴力破解, 遍历所有和的可能性, 将所求的三数之和 和 目标值的差值进行比较, 初始最小值为 Infinity, 如果比最小值小的话, 则记录
  此时的 sum 和 min。 循环结束后 返回 sum
```ts
const closest = (array: number[], target: number): number => {
  let min = Infinity
  let result = 0
  array.sort((a, b) => a - b)
  const length = array.length
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      for (let k = j + 1; k < length; k++) {
        const sum = array[i] + array[j] + array[k]
        if ( Math.abs(sum - target) <= min) {
          min = Math.abs(sum - target)
          result = sum
        }
      }
    }
  }
  return result
}
```

**解法二**

  这个解法和 上一题很像, 同样在for循环中固定一个数, 然后再通过双指针在数组中取两个数 与固定的相加, 判断所得之和 是否与目标值 最接近

```ts
const closest = (array: number[], target: number): number => {
  let min = Infinity
  let result = 0
  array.sort((a, b) => a - b)
  const length = array.length
  for (let i = 0; i < length; i++) {
    const num = array[i]
    let start = i + 1
    let end = length - 1
    while (start < end) {
      const sum = num + array[start] + array[end]
      if (Math.abs(sum - target) <= min) {
        min = Math.abs(sum - target)
        result = sum
      }
      if (sum > target) {
        end -= 1
      } else {
        start += 1
      }
    }
  }
  return result
}
```