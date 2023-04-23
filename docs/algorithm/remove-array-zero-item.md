# 移动零

  给定一个数组 **nums**, 编写一个函数将所有 **0** 移动到数组末尾, 同时保持非零元素的相对顺序。必须在不复制数组的情况下原地对数组进行操作。

```js
const nums = [0, 1, 0, 3, 12]
// 输出 [1, 3, 12, 0, 0]

const nums = [0]
// 输出 [0]
```

**解法一**

  遍历数组, 当遍历到0的时候, 将其从当前位置删除并添加到数组末尾。

```ts
const remove_zero = (nums: number[]):void => {
  let count = 0
  for (let i = 0; i < nums.length - count; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      count += 1
      i -= 1
      nums.push(0)
    }
  }
}

// 相同的方式 从后往前遍历
const remove_zero = (nums: number[]):void => {
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] === 0) {
        nums.splice(i, 1)
        nums.push(0)
    }
  }
}
```

**解法二**

  利用双指针, 将不为0的数都往前移动, 然后将慢指针后的数据都重置为0

```ts
const move_zero = (nums: number[]):void => {
  let slow = 0
  const length = nums.length
  for (let i = 0; i < length; i++) {
    if (nums[i] !== 0) {
      nums[slow] = nums[i]
      slow += 1
    }
  }
  while (slow < length) {
    nums[slow] = 0
    slow += 1
  }
}
```