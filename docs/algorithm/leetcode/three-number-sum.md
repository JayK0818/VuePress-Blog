# 三数之和

  给你一个整数数组 nums, 判断是否存在三元组 [nums[i], nums[j], nums[k]] 同时满足 i!=j i!=k j != k 同时还满足 nums[i] + nums[j] + nums[k] = 0。

```js
nums = [-1,0,1,2,-1,-4]   // 输出 [[-1,-1,2],[-1,0,1]]

// 解释
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0
```

**解法一**

  自己实现的 第一个版本, 三个数相加等于0的结果 有三种方式: 两个负数相加和一个正数, 两个正数相加和一个负数, 以及如果0的个数大于等于3的话。
```ts
// 虽然通过了 但是耗时700多ms, 不是一个优质的算法
const three_number_array = (array: number[]): Array<number[]> => {
  let temp: Array<number[]> = []
  const negative_array: number[] = array.filter(item => item < 0).sort((a, b) => a - b)
  const positive_array: number[] = array.filter(item => item >= 0).sort((a, b) => a - b)
  // 一个负数和两个正数
  for (const item of negative_array) {
    let start = 0
    let end = positive_array.length - 1
    while(start < end) {
      const sum = positive_array[start] + positive_array[end]
      const result = item + sum
      if (result === 0) {
        // 数组里的数据按照从小到大的顺序
        temp.push([item, positive_array[start], positive_array[end]])
        start += 1
      } else if (result > 0) {
        end -= 1
      } else {
        start += 1
      }
    }
  }
  // 一个正数和两个负数
  for (const item of positive_array) {
    let start = 0
    let end = negative_array.length - 1
    while(start < end) {
      const sum = negative_array[start] + negative_array[end]
      const result = sum + item
      if (result === 0) {
        temp.push([negative_array[start], item, negative_array[end]])
        start += 1
      } else if (result < 0) {
        start += 1
      } else {
        end -= 1
      }
    }
  }
  const filter = Array.from(new Set(temp.map(item => item.join(','))))
  temp = []
  for (const item of filter) {
    temp.push(item.split(',').map(Number))
  }
  if (positive_array.filter(item => item === 0).length >= 3) {
    temp.push([0, 0, 0])
  }
  return temp
}
```

**解法二**

  将数组从小到大排序, 固定一个数, 在剩余的数组里 通过双指针 找到和为0 的三个数。 如果和为0 存储当前的三个数, 并且同时移动左右指针。
  如果小于0, 移动左指针, 如果大于0. 移动右边指针。 
```ts
const three_number_array = (array: number[] = []) : Array<number[]> => {
  const temp: Array<number[]> = []
  const sort_list = array.sort((a, b) => a - b)
  for (let i = 0, length = sort_list.length; i < length; i++) {
    const num = sort_list[i]
    if (num > 0) break
    // 去重第一步, 如果此时 num为1, 则剩下的 数据中找到 和为-1的即可,
    // 如果下一个数 还是1的话, 求的还是剩余数组中和为 -1
    if (i > 0 && sort_list[i-1] === sort_list[i]) continue;
    let start = i + 1
    let end = sort_list.length - 1
    while (start < end) {
      const sum = num + sort_list[start] + sort_list[end]
      if (sum === 0) {
        // 去重第二步
        while(sort_list[start] === sort_list[start+1]) {
          start += 1
          if (start >= end) break
        }
        // 去重第三步
        while(start < end && sort_list[end] === sort_list[end-1]) {
          end -= 1
          if (start >= end) break
        }
        temp.push([num, sort_list[start], sort_list[end]])
        start += 1
        end -= 1
      } else if (sum > 0) {
        end -= 1
      } else {
        start += 1
      }
    }
  }
  return temp
}
```