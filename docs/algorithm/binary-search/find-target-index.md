# 寻找目标元素下标

  给定一个 **n** 个元素有序的(升序)整数数组 **nums** 和一个目标值 **target**, 写一个函数搜索 **nums**中的 **target**。如果目标值
  存在返回下标, 否则返回 *-1*。

```js
const nums = [-1,0,3,5,9,12], target = 9
// 输出4
```

```ts
const find_target_index = (nums: number[], target: number): number => {
  let start = 0
  let end = nums.length
  while (start < end) {
    const middle = Math.floor((start + end) / 2)
    if (nums[middle] > target) {
      end = middle
    } else if (nums[middle] < target) {
      start = middle + 1
    } else {
      return middle
    }
  }
  return -1
}

// 另一种锁定区间的方式(注意while的判断条件)
const find_target_index = (nums: number[], target: number): number => {
  let start = 0
  let end = nums.length - 1
  while (start <= end) {
    const middle = Math.floor((start + end) / 2)
    if (nums[middle] > target) {
      end = middle - 1
    } else if (nums[middle] < target) {
      start = middle + 1
    } else {
      return middle
    }
  }
  return -1
}
```

# 搜索插入位置

  给定一个排序数据和一个目标值, 在数组中找到目标值,并返回其索引值。如果目标值不存在于数组中,返回它将会被按照顺序插入的位置。

```js
const nums = [1, 3, 5, 6], target = 5
// 输出 2

const nums = [1, 3, 5, 6], target = 2
// 输出 1

const nums = [1,3,5,6], target = 7
// 输出 4
```
  跟上面的题一样, 区别在于未找到目标值是返回 *-1* 还是返回 目标值在数据中应该插入的位置。
```ts
const find_insert_index = (nums: number[], target:number): number => {
  let start = 0
  let end = nums.length
  while (start < end) {
    const middle = Math.floor((start + end) / 2)
    if (nums[middle] === target) {
      return middle
    } else if (nums[middle] > target) {
      end = middle
    } else {
      start = middle + 1
    }
  }
  // 没有目标值
  return start
}
```
