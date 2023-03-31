# 合并区间

  以数组 *intevals* 表示若干个区间的集合, 其中单个区间为 **intervals[i] = [start, end]**。请你合并所有重叠的区间, 并返回 一个
  不重叠的区间数组, 该数组需恰好覆盖输入中的所有区间。

```js
// 示例1:

const intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出 [[1,6],[8,10],[15,18]]
```
  区间 [1, 3] 和 [2, 6] 重叠, 将它们合并为 [1, 6]

**解法一**

  先将二维数组按照数值从小到大排序, 遍历时依次判断 前后 两个二维数组是否重叠, 如果重叠则合并当前两个数组的区间。
```ts
const is_include = (nums_1: number[], nums_2: number[]):boolean => {
  const [a1, b1] = nums_1
  const [a2, b2] = nums_2
  return !(b1 < a2 || b2 < a1)
}

function merge(intervals: number[][]): number[][] {
  const temp = intervals.slice().sort((a, b) => a[0] - b[0])
  for (let i = 0; i < temp.length - 1; i++) {
    const c = temp[i]
    const n = temp[i + 1]
    if (is_include(c, n)) {
      const min = Math.min(...c, ...n)
      const max = Math.max(...c, ...n)
      temp[i + 1] = [min, max]
      temp.splice(i, 1)
      i -= 1
    }
  }
  return temp
}
```