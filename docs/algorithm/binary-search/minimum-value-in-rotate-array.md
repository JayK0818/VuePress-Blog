# 寻找旋转排序数组中的最小值

  已知一个长度为 **n** 的数组, 预先按照升序排列, 经由 *1* 到 *n* 此旋转后,得到输入数组。 例如: 原数组 *nums = [0,1,2,3,4,5,6,7]*
  在变化后可能得到:
1. 若旋转 **4** 次, 则可以得到 **[4,5,6,7,0,1,2]**
2. 若旋转 **7** 次, 则可以得到 **[0,1,2,4,5,6,7]**

  给你一个元素值 **互不相同** 的数组 **nums**, 它原来是一个升序排列的数组, 并按上述情形进行了多次旋转, 请你找出并返回数组中的 **最小元素**。

```js
const nums = [3,4,5,1,2]
// 输出1
// 原数组为 [1, 2, 3, 4, 5] 旋转3次得到输入数组

const nums = [4, 5, 6, 7, 0, 1, 2]
// 输出 0
// 原数组为 [0, 1, 2, 4, 5, 6, 7] 旋转4次得到输入数组。
```

**解法一**

  遍历数组, 找到某个临界点, 因为旋转后 它是两段 从小到大排序的数据。临界点下标所对应的值 即为 最小值!

```ts
const find_min = (nums: number[]): number => {
  let start = 0
  for (let i = 0, length = nums.length; i < length - 1; i++) {
    const prev = nums[i]
    const next = nums[i+1]
    if (next < prev) {
      start = i + 1
      break
    }
  }
  return nums[start]
}
```

**解法二**

  使用二分法

```ts
const find_min = (nums: number[]) => {
  if (nums.length === 1) return nums[0]
  let start = 0
  let end = nums.length - 1
  while (start < end) {
    const middle = Math.floor((start + end) / 2)
    if (nums[middle] < nums[end]) {
      end = middle
    } else {
      start = middle + 1
    }
  }
  return nums[end]
}
```

# 寻找旋转排序数组中的最小值 II

  在上题的基础之上, 数组中元素可能会重复。它原来是一个升序排列的数组, 请找出并返回数组中的 **最小元素**。

```ts
const find_min = (nums: number[]): number => {
  let start = 0
  let right = nums.length - 1
  while (start < right) {
    const mid = Math.floor((start + right) / 2)
    if (nums[mid] < nums[right]) {
      right = mid
    } else if (nums[mid] > nums[right]) {
      start = mid + 1
    } else {
      right -= 1
    }
  }
  return right
}
```