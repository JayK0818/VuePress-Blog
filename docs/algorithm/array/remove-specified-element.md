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

**解法二**

  循环比较,不相等的安排在 i++ 位置上，返回 i
```ts
const remove_specified_element = (nums: number[], val: number): number => {
  let i = 0
  for (const item of nums) {
    if (item !== val) {
      nums[i] = item
      i += 1
    }
  }
  return i
}
```

**解法三**

  利用双指针, 从左向数组右遍历, 如果左边指针所对应的数据 等于 要移除的值, 则将 值移动到数组末尾。调换位置后再移动右指针, 否则移动左指针。

```ts
const remove_specified_element = (nums: number[], val: number): number => {
  let start = 0
  let end = numbers.length
  // 此处end 使用 numbers.length 而不是 numbers.length - 1
  // 如果使用length - 1, 这种情况无法通过. [3,2,2,3]  3
  while (start < end) {
    if (numbers[start] === val) {
      numbers[start] = numbers[end-1]
      end -= 1 
    } else {
      start += 1
    }
  }
  return start
}
```

**解法四**

  同样利用双指针, 一个快指针和一个慢指针, 快指针如果和指定要移除的值相等, 则一直向后移动, 否则慢指针向后移动一位, 并将快指针下标对应的值 赋值到慢指针的位置。

```ts
function remove_specified_element(nums: number[], val: number): number {
  let slow = 0
  for (let fast = 0, length = nums.length; fast < length; fast++) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast]
      // 慢指针先移动一步, 然后快指针去找到 和移除的值不相等的数 将他赋值过来。
      slow += 1
    }
  }
  return slow
}
```