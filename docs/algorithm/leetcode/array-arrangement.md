# 下一个排列

  整数数组的一个 **排列**, 就是江有所成员以序列或线性顺序排列。

1. 例如, arr = [1,2,3], 以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 

  整数数组的 **下一个排列** 是指其整数的下一个字典序更大的排列。更正式地,如果数组的所有排列根据其字典顺序从小到大排列在一个容器中,那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列,那么这个数组必须重排为字典序最小的排列（即,其元素按升序排列）。
  
  例如,arr = [1,2,3] 的下一个排列是 [1,3,2] 。
  类似地,arr = [2,3,1] 的下一个排列是 [3,1,2] 。
  而 arr = [3,2,1] 的下一个排列是 [1,2,3] ,因为 [3,2,1] 不存在一个字典序更大的排列。
  给你一个整数数组 nums ,找出 nums 的下一个排列。

  必须 原地 修改,只允许使用额外常数空间。

```js
nums = [1,2,3]
// 输出 [1,3,2]

nums = [3,2,1]
// 输出 [1,2,3]

nums = [1,1,5]
// 输出：[1,5,1]
```

  将数组中的元素 按照一个将这些元素拼成一个 数 来理解(比如 [1, 3, 2] 理解为一百三十二132), 下一个排列 就是比当前 数 大一点的数。 关键点在于 下一个排列 哪个元素 需要替换为 更大一些的数。然后再将剩余的 元素 从小到大拍列。

```ts
const array_arrangement = (nums: number[]): number[] => {
  let flag = true  // 判断是否从大到小排列
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] > nums[i-1]) {
      flag = false
      break
    }
  }
  if (flag) {
    const length = Math.floor((nums.length - 1) / 2)
    for (let i = 0; i <= length; i++) {
      const start = nums[i]
      nums[i] = nums[nums.length - 1 - i]
      nums[nums.length - 1 - i] = start
    }
  } else {
    // 找到交换位置的地方
    let index = 0
    for (let i = nums.length - 2; i >= 0; i--) {
      if (nums[i] < nums[i+1]) {
        index = i
        break
      }
    }
    // 找到交换的位置
    let wrap_index = 0
    let max = Infinity
    for (let i = index + 1; i < nums.length; i++) {
      if (nums[i] > nums[index] && nums[i] < max) {
        max = nums[i]
        wrap_index = i
      }
    }
    // 将位置交换
    const smaller = nums[index]
    nums[index] = nums[wrap_index]
    nums[wrap_index] = smaller;
    // 剩下的数据 从小到大
    const sort_list = nums.slice(index+1).sort((a, b) => a - b)
    for (let i = index + 1; i < nums.length; i++) {
      nums[i] = sort_list[i - index - 1]
    }
  }
  return nums
}


// 另一种判断当前数组是否为 从大到小排列
const array_arrangement = (nums: number[]):number[] => {
  // 找到交换位置的地方
  let index = 0
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i+1]) {
      index = i
      break
    }
  }
  // 判断在剩下的元素中 哪个元素 和 交换位置的 数据 进行交换
  let wrap_index = 0
  let max = Infinity
  for (let i = index + 1; i < nums.length; i++) {
    if (nums[i] > nums[index] && nums[i] < max) {
      max = nums[i]
      wrap_index = i
    }
  }
  if (wrap_index === 0) {
    // 表明当前最大值 就是第一个元素, 当前数组是从大到小排列的
    const length = Math.floor((nums.length - 1) / 2)
    for (let i = 0; i <= length; i++) {
      const start = nums[i]
      nums[i] = nums[nums.length - 1 - i]
      nums[nums.length - 1 - i] = start
    }
  } else {
    // 将位置交换
    const smaller = nums[index]
    nums[index] = nums[wrap_index]
    nums[wrap_index] = smaller;
    // 剩下的数据 从小到大
    const sort_list = nums.slice(index+1).sort((a, b) => a - b)
    for (let i = index + 1; i < nums.length; i++) {
      nums[i] = sort_list[i - index - 1]
    }
  }
  return nums
}
```