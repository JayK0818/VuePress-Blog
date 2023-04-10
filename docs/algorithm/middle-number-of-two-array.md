# 寻找两个正序数组的中位数

  给定两个大小分别为 **m** 和 **n** 的正序(从小到大)数组 **nums1** 和 **nums2**, 请你找出并返回这两个正序数组的 **中位数**

```js
nums1 = [1, 3], nums = [2]
// 输出2

nums1 = [1, 2], nums = [3, 4]
// 输出 2.5
```

**解法一**

```ts
// 第一种容易想到的方法 暴力破解, 将两个数组合并并根据数组长度为 奇数还是偶数 求出中位数
const middle_number = (arr_1: number[], arr_2: number[]): number => {
  const temp: number[] = [...arr_1, ...arr_2].sort((a, b) => a - b)
  const is_even = temp.length % 2 === 0 ? true : false
  if (is_even) {
    const i = temp.length / 2
    const [a, b] = temp.slice(i-1, i+1)
    return (a + b) / 2
  } else {
    return temp[Math.floor(temp.length / 2)]
  }
}
```
**解法二**

  在下面的算法中, 无需将两个数组合并排序 只需要知道中位数在哪个位置即可。如果数组长度之和是偶数的话, 则需要找到中间的两个数 除2, 奇数的话只需要找到一个数即可。

  算法核心：定义两个变量start_a, start_b 分别指向两个数组的下标, 在for循环中遍历(长度为中位数的位置), 判断此时两个下标对应的数字 哪个大, 下标对应的那个数字小 则该下标向后移动一位。并记录此时的数字, 每次遍历时将保存的数值 保存到 prev(因为数组长度为偶数时 需要两个中间数取平均数)

```ts
const middle_number = (arr_1: number[], arr_2: number[]): number => {
  const combine_length = (arr_1.length + arr_2.length)
  if (combine_length === 0) return 0
  // 下面两个判断为通过leetcode测试用例时的一些特殊情况
  if (arr_1.length === 0) {
    const mid = Math.floor(arr_2.length / 2)
    return arr_2.length % 2 === 0 ? (arr_2[mid] + arr_2[mid-1]) / 2 : arr_2[mid]
  }
  if (arr_2.length === 0) {
    const mid = Math.floor(arr_1.length / 2)
    return arr_1.length % 2 === 0 ? (arr_1[mid] + arr_1[mid-1]) / 2 : arr_1[mid]
  }
  let start_a = 0
  let start_b = 0
  let left = 0
  let right = 0
  const target = Math.floor(combine_length / 2) // 要遍历到的目标位置
  for (let i = 0; i <= target; i++) {
    left = right
    const a = arr_1[start_a]
    const b = arr_2[start_b]
    // 如果a下标指示的数据小于b下标指示的数字 并且此时a数组还没有遍历到底部
    // 或者start_b 已经到大数组的边界了 (如果没有这个条件 [100001] [10000] 这样的数据测试会有bug)
    if ((a < b || start_b >= arr_2.length) && (start_a < arr_1.length)) {
      right = arr_1[start_a]
      start_a += 1
    } else {
      if (start_b < arr_2.length) {
        right = arr_2[start_b]
        start_b += 1
      }
    }
  }
  return combine_length % 2 === 0 ? (left + right) / 2 : right
}
```
[参考](https://leetcode.wang/leetCode-4-Median-of-Two-Sorted-Arrays.html)