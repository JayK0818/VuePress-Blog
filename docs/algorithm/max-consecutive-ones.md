# 最大连续1的个数

  给定一个二进制数据 **nums**, 计算其中最大连续 **1** 的个数。

```js
const nums = [1,1,0,1,1,1]
// 输出 3,, 最大连续1的个数是3
```

**解法一**

  依次遍历数组的每个值并判断当前值, 定义一个变量sum 计算当前连续1的个数 以及一个变量max 记录最长连续1的个数。
  如果是1的话 sum累加, 否则判断sum 与max 二者的最大值。 (需要注意如果一直判断到最后一项是1的话, 此时也要判断 sum 与max的大小)

```ts
const find_max_consecutive_ones = (nums: number[]): number => {
  const length = nums.length
  if (length === 0) return 0
  let max: number = -Infinity
  let sum = 0
  for (let i = 0; i < length; i++) {
    const num = nums[i]
    if (num !== 0) {
      sum += 1
      if (i === length - 1 && sum > max) {
        max = sum
      }
    } else {
      if (sum > max) {
        max = sum
      }
      sum = 0
    }
  }
  return max
}
```

**解法二**

  贪婪算法, 每次都比较当前连续出现的 **1** 是不是最大的

```ts
const find_max_consecutive_ones = (nums: number[]):number => {
  if (nums.length === 0) return 0
  let max = 0
  let sum = 0
  for (const num of nums) {
    if (num === 1) {
      sum += 1
    } else {
      sum = 0
    }
    max = Math.max(sum, max)
  }
  return max
}
```

**解法三**

  利用双指针, 快指针指向1, 慢指针指向0, 每次判断 两个指针 之间的距离 最大值 (其实也是一种贪婪算法, 换了一种方式计算最大值)
```ts
const find_max_consecutive_ones = (nums: number[]): number => {
  const length = nums.length
  if (length === 0) return 0
  let slow = -1 // (初始值不能为0, 如果第一个值就为1的话, 而slow为0的话,计算的结果max为1)
  let max = 0
  for (let i = 0; i < length; i++) {
    const num = nums[i]
    // 如果等于0, 记录当前0的指针位置
    if (num === 0) {
      slow = i
      continue
    }
    // 计算当前
    max = Math.max(max, i - slow)
  }
  return max
}

// 利用双指针另一个写法
const find_max_consecutive_ones = (nums: number[]): number => {
  let slow = -1
  let max = 0
  for (let i = 0; i < length; i++) {
    const num = nums[i]
    if (num === 1) {
      // 说明从数组开始第一项是1, 此时只要max+1 就可以
      if (slow === -1) {
        max += 1
      } else {
        max = Math.max(max, i - slow)
      }
    } else {
      slow = i
    }
  }
  return max
}
```