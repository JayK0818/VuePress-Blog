# 移除元素

  给你一个数组 **nums** 和一个值 **val**, 你需要 原地 移除所有数值等于 **val** 的元素, 并返回移除后数组的新长度。

```js
nums = [3, 2, 2, 3], val = 3
// 输出 2,  [2, 2]

nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2
// 5,  [0, 1, 4, 0, 3]
```

**解法一**

  通过splice()方法 依次  比较数组中的每个元素, 如果相等, 则删除此位置的元素。
```ts
// 从后向前遍历
const remove_specified_element = (nums: number[], val: number): number => {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1)
    }
  }
  return nums.length
}

// 从前向后遍历
const remove_specified_element = (nums: number[], val: number): number => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      i -= 1
    }
  }
  return nums.length
}
```