# 存在重复元素

  给你一个整数数组 *nums*。如果任一值在数组中 **至少出现两次**, 返回 *true*, 如果数组中每个元素互不相同。返回 *false*

```js
const nums = [1, 2, 3, 1]
// true

const nums = [1, 2, 3, 4]
// false

const nums = [1,1,1,3,3,4,3,2,4,2]
// true
```

  这道题比较简单, 遍历数组使用set存储每个元素, 每次遍历时查询当前元素是否已经存在于set数据结构里, 如果存在 直接返回true。

**解法一**

```ts
const contains_duplicate_item = (nums: number[]):boolean => {
  const set: Set<number> = new Set()
  for (const n of nums) {
    if (set.has(n)) {
      return true
    } else {
      set.add(n)
    }
  }
  return false
}
```