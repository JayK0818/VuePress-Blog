# 旋转数组

## 寻找旋转排序数组中的最小值

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

  使用二分法, 如果当前下标所对应的值小于右指针对应的值,那么 目标值应该在当前下标*middle*左侧, 否则在*middle*右侧。

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

## 寻找旋转排序数组中的最小值 II

  在上题的基础之上, 数组中元素可能会重复。它原来是一个升序排列的数组, 请找出并返回数组中的 **最小元素**。

  如果数组中有重复元素, 此时比较难以判断 目标值 到底在 **middle** 的左侧还是右侧, 举个例子,数组 *[2, 2, 2, 2, 0, 1, 2]*,
  它是数组*[0, 1, 2, 2, 2, 2, 2]* 经过旋转4次之后得到的数据, 使用二分法 第一次处理时, *middle = 3*, 此时怎么判断临界点在左侧还是右侧是个难点。

- 将等于的情况放到最后一步考虑,如果*nums[middle] < nums[end]*, 此时可以肯定 **最小值** 在 *middle* 的左侧。
- 如果*nums[middle] > nums[start]*, 此时可以肯定 **最小值** 在*middle* 右侧。
- 上述两点都不满足的话, 逐步缩小 right 指针的位置。

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

## 搜索旋转数组目标值

  整数数组 **nums** 按升序排列, 数组中的值 **互不相同**, 在传递给函数之前, **nums** 在预先未知的某个下标 **k** 上进行了旋转。给你旋转后的数组
  **nums** 和一个整数 **target**, 如果 **nums** 中存在这个目标值 **target**, 则返回它的下标, 否则返回 **-1**。

```js
const nums = [4, 5, 6, 7, 0, 1, 2], target = 0
// 输出 4

const nums = [4,5,6,7,0,1,2], target = 3
// 输出 -1

const nums = [1], target = 0
// 输出 -1
```

**解法一**

  采用二分法 先找到临界点在哪个位置, 然后判断 目标值 **target** 在哪个区间, 再次使用二分法 找到目标值 **target** 的下标并返回, 没有找到则返回 **-1**

```ts
const find_number_in_rotate_array = (nums: number[], target: number): number => {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] < nums[right]) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  // 左侧
  if (target > nums[nums.length - 1]) {
    left = 0
    right = right - 1
  } else {
    right = nums.length - 1
  }
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
}
```

**解法二**

  上述方案使用了 两次 二分法。现在使用一次 二分法 找出 **target** 所对应的下标。

```ts
const find_target_in_rotate_array = (nums: number[], target: number):number => {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    // 如果当前下标对应的值 正好等于 target, 直接返回
    if (nums[mid] === target) {
      return mid
    }
    // [left---->mid] 这部分是递增的
    if (nums[mid] > nums[right]) {
      // 判断target 是否在 [left, mid) 区间内
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      // [mid, right] 这部分是递增的, 判断target是否在此区间内
      if (target > nums[mid] && nums[right] >= target ) {
        left = mid + 1
      } else [
        right = mid - 1
      ]
    }
  }
  return -1
}
```