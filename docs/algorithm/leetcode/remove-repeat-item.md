# 删除有序数组中的重复项

  给你一个 **升序排列**, 请你 **原地** 删除重复出现的元素, 使每个元素 **只出现一次**, 返回删除后数组的新长度。 元素的 **相对顺序** 应保持一致。

```js
nums = [1, 1, 2]
// 输出 [1, 2]

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// 输出 [0, 1, 2, 3, 4]
```
**解法一**

  使用一个对象保存数组项, 循环时判断当前项 是否 在之前已经存在过, 如果存在的话 则删除此项。

```ts
const remove_repeat_item = (array: number[]) : number => {
  const map: { [key: string]: boolean } = {}
  // 注意不能保存数组的长度, 因为遍历时会修改数组, 长度会变
  for (let i = 0; i < array.length; i++) {
    const item = array[i]
    if (map[item]) {
      array.splice(i, 1)
      i -= 1
    } else {
      map[item] = true
    }
  }
  return array.length
}
```

**解法二**

  判断数组的前后两个数字是否相等

```ts
const remove_repeat_item = (array: number[]) : number => {
  for (let i = 0; i < array.length - 1; i++) {
    const cur = array[i]
    const next = array[i+1]
    if (cur === next) {
      array.splice(i, 1)
      i -= 1
    }
  }
  return array.length
}
```

**解法三**

  使用 ES6新增的数据结构 Set进行去重.
```ts
const remove_repeat_item = (array: number[]): number => {
  const set = new Set(array)
  const temp = Array.from(set)
  for (let i = 0, length = temp.length; i < length; i++) {
    array[i] = temp[i]
  }
  array.length = temp.length
  return array.length
}
```

**解法四**

  利用双指针, 两个指针都从数组起始位置开始, 比较两个指针所对应的数是否相等, 如果相等, 则快指针向右移动, 如果不相等, 将fast指针
  位置的数字 移动到 slow+1的位置, 然后两个指针同时向右移动
```ts
const remove_repeat_item = (nums: number[]): number => {
  let slow = 0
  let fast = 0
  const length = nums.length
  if (length === 0) return 0
  while(fast < length) {
    if (nums[fast] === nums[slow]) {
      fast += 1
    } else {
      slow += 1
      nums[slow] = nums[fast]
      fast += 1
    }
  }
  nums.length = slow + 1
  return slow + 1
}

// 上面的算法也可以稍作优化, 如果两个数相邻 不想等, 无需赋值, 只需要移动指针就可以了
const remove_repeat_item = (nums: number[]): number => {
  let slow = 0
  let fast = 0
  const length = nums.length
  if (length === 0) return 0
  while (fast < length) {
    if (nums[fast] === nums[slow]) {
      fast += 1
    } else {
      slow += 1
      if (slow !== fast) {
        nums[slow] = nums[fast]
      }
      fast += 1
    }
  }
  nums.length = slow + 1
  return slow + 1
}
```

**解法五**

  上面的解法中 有一个使用splice()删除数组重复元素。在使用splice()方法的时候效率不是很高, 因为是从数组第头部开始删除 对数组中后续元素影响较大。 看到另一种使用splice()的方法, 从数组后开始遍历, 如果前后两项相等则删除重复的。
```ts
const remove_repeat_item_2 = (nums: number[]): number => {
  for (let i = nums.length; i > 0; i--) {
    if (nums[i] === nums[i-1]) {
      nums.splice(i, 1)
    }
  }
  return nums.length
}
```