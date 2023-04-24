# 统计有序矩阵中的负数

  给你一个 **m * n** 的矩阵 *grid*, 矩阵中的元素无论是按行还是按列, 都以非递增顺序排列。请你统计并返回 *grid*中 **负数** 的数目。

```js
const grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// 输出 8


const grid = [[3, 2], [1, 0]]
// 输出0
```

**解法一**

  每次循环的时候使用二分法。因为数组是已经排序的, 可以在每次循环之前做一些判断是否可以跳出循环。因为是非递增排序, 如果第一个数都是小于0的,
  那么整个数组的元素肯定都是小于0的,在统计时直接加上数组长度即可。如果最后一个元素是大于等于0的,那么整个数组的元素肯定都是正数。跳过当前数据即可！

```ts
const get_negative_number_count = (nums: number[][]):number => {
  let sum = 0
  for (const item of nums) {
    if (item[0] < 0) {
      sum += item.length
      continue
    } else if (item[item.length - 1] >= 0) {
      continue
    }
    let start = 0
    let end = item.length
    while (start < end) {
      const middle = Math.floor((start + end) / 2)
      if (item[middle] >= 0) {
        start = middle + 1
      } else {
        end = middle
      }
    }
    sum += (item.length - start)
  }
  return sum
}
```