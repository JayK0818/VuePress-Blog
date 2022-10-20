# 数组 - 上

## 两数之和

### 解法一

  给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
```ts
// 两层循环每个数据两两相加, 和为指定目标则跳出循环, 返回两个下标
const get_index = (array: number[], target: number): number[] => {
  let index_1 = 0, index_2 = 0, length = array.length;
  let flag = false
  for(let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (array[i] + array[j] === target) {
        index_1 = i
        index_2 = j
        flag = true
        break // 此处只能跳出里循环, 即使break, 外层循环也一直在执行
      }
    }
    if (flag) break
  }
  return [index_1, index_2]
}
console.log(get_index([3, 2, 7, 10, 4, 15], 6))      // [1, 4]
```
### 解法二

```ts
// 效果和双层循环一样, 每次判断目标值和当前值的差值 是否在剩余的数据里, 在的话找出那个数的下标即可
const get_index = (array: number[], target: number) => {
  const length = array.length;
  const temp: number[] = []
  for (let i = 0; i < length; i++) {
    const diff = target - array[i]
    const index = array.slice(i + 1).indexOf(diff)
    if (index === -1) continue;
    temp.push(i, i+index+1)
    break;
  }
  return temp
}
console.log(get_index([3, 2, 7, 10, 4, 15], 6))      // [1, 4]
```

### 解法三
```ts
// 利用一层循环, 将数组使用map存储, 键名为值, 键值为下标, 判断当前在map里是否有 diff
const get_index = (array: number[], target: number) => {
  const map = new Map()
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (map.has(target - array[i])) {
      return [i, map.get(target - array[i])]
    } else {
      map.set(array[i], i)
    }
  }
}
console.log(get_index([3, 2, 7, 10, 4, 15], 6))      // [1, 4]
```

## 寻找两个正序数组的中位数

  给定两个大小分别为 **m** 和 **n** 的正序(从小到大)数组 **nums1** 和 **nums2**, 请你找出并返回这两个正序数组的 **中位数**

### 解法一

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
### 解法二

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