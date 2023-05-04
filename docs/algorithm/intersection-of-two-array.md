# 两个数组的交集

  给定两个数组 **num1** 和 **nums2**, 返回它们的交集。输出结果中每个元素一定是 **唯一**的。可以**不考虑输出结果的顺序**。

```js
const nums1 = [1, 2, 2, 1], nums2 = [2, 2]
// 输出 [2]

const nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
// [4, 9]
```

**解法一**

  使用ES6 数组的 **includes** 方法判断 数组中是否存在某个元素。

```ts
function intersection(nums1: number[], nums2: number[]): number[] {
  const temp: number[] = []
  for (const n of nums1) {
    if (nums2.includes(n) && !temp.includes(n)) {
      temp.push(n)
    }
  }
  return temp
}

// 判断数据是否重复添加也可以使用 set.
const intersection = (nums: number[], nums2: number[]): number[] => {
  const set: Set<number> = new Set()
  for (const n of nums1) {
    if (nums2.includes(n)) {
      set.add(n)
    }
  }
  return [...set]
}
```

**解法二**

  这道题出现在 **二分法** 的专题里, 在题解中看到使用二分法的一种解法。对其中一个数组进行排序, 遍历另一个未排序的数组时, 在排序数组中查询当前元素使用二分法查找。

```ts
const inserction = (nums1: number[], nums2: number[]): number[] => {
  const binary_search = (nums: number[], left: number, right: number, target: number): number => {
    if (left > right) return -1
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) return mid
    else if (nums[mid] > target) return binary_search(nums, left, mid, target)
    return binary_search(nums, mid+1, right, target)
  }
  nums2.sort((a, b) => a - b)
  const temp: number[] = []
  for (const n of nums1) {
    const idx = binary_search(nums2, 0, nums2.length, n)
    if (idx === -1) continue
    if (!temp.includes(n)) {
      temp.push(n)
    }
  }
  return temp
}
```

# 两个数组的交集II

  给你两个整数数组 **nums1** 和 **nums2**, 请你以数组形式返回两个数组的交集。 返回结果中每个元素出现的次数, 应与元素在两个数组中都出现的次数一致。
  (如果出现次数不一致, 则考虑取较小值)。可以不考虑输出结果的顺序。

```js
const nums1 = [1, 2, 2, 1], nums2 = [2, 2]
// 输出 [2, 2]

const nums2 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
// 输出 [4, 9]
```

**解法一**

  使用两个对象分别存储数组中元素出现的次数。然后遍历其中一个对象, 判断其下标(下标存储的数组中的项, 键值存储的是出现次数) 在另一个数组中是否出现, 以及出现的话
  应该取值多少。

```ts
const inserction = (nums1: number[], nums2: number[]): number[] => {
  const map1:{[key: number]: number} = {}
  const map2:{[key: number]: number} = {}
  nums1.forEach(n => {
    if (map1[n] === undefined) {
      map1[n] = 0
    }
    map1[n] += 1
  })
  nums2.forEach(n => {
    if (map2[n] === undefined) {
      map2[n] = 0
    }
    map2[n] += 1
  })
  const temp: number[] = []
  for (const key in map1) {
    if (!map2[key]) continue
    const l1 = map1[key]
    const l2 = map2[key]
    if (l1 === l2) {
      for (let i = 0; i < l1; i++) {
        temp.push(Number(key))
      }
    } else {
      const length = l1 < l2 ? l1 : l2
      for (let i = 0; i < length; i++) {
        temp.push(Number(key))
      }
    }
  }
  return temp
}
```

**解法二**

  对两个数组进行排序, 然后使用双指针判断如何移动指针

```ts
const inserction = (nums1: number[], nums2: number[]): number[] => {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  let i = 0
  let j = 0
  const temp:number[] = []
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      i++
    } else if (nums1[i] > nums2[j]) {
      j++
    } else {
      temp.push(nums1[i])
      i++
      j++
    }
  }
  return temp
}
```