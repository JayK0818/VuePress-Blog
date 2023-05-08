# 四数之和

  给你一个由 **n** 个整数组组成的数组 **nums**, 和一个目标值 **target**, 请你找出并返回满足下述全部条件且不**重复**的四元组
  [nums[a], nums[b], nums[c], nums[d]](若两个四元组元素一一对应, 则认为两个四元组重复)
```js
// 0 <= a b c d < n
// a b c d 互补相同

nums = [1,0,-1,0,-2,2], target = 0
// [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

nums = [2, 2, 2, 2, 2], target = 8
// [[2, 2, 2, 2]]
```

**解法一**

  参照求三个数之和, 两层for循环 分别固定两个数, 然后在剩余的数字里 通过双指针计算。
```ts
const sum = (array: number[] = [], target: number): Array<number[]> => {
  const length = array.length
  if (length < 4) return []
  array.sort((a, b) => a - b) // 从小到大排序
  const temp: number[][] = []
  for (let i = 0; i < length; i++) {
    if (i > 0 && array[i-1] === array[i]) continue;
    const a = array[i]
    for (let j = i+1; j < length; j++) {
      const b = array[j]
      let start = j + 1
      let end = length - 1
      while (start < end) {
        const sum = a + b + array[start] + array[end]
        if (sum === target) {
          temp.push([a, b, array[start], array[end]])
          start += 1
        } else if (sum > target) {
          end -= 1
        } else {
          start += 1
        }
      }
    }
  }
  if (temp.length && temp.length >=2) {
    const a: string[] = []
    temp.forEach(item => {
      if (!a.includes(item.join(','))) a.push(item.join(','))
    })
    return a.map(item => (item.split(',').map(Number)))
  }
  return temp
}
```

# 四数之和II

  给你四个整数数组 **nums1**、**nums2**、**nums3**、**nums4**, 数组长度都是 **n**, 请你计算有多少个元祖 *[i, j, k, l]* 能满足:

- **0 <= i, j, k, l < n**
- **nums1[i] + nums2[j] + nums3[k] + nums4[l] = 0**

  两个for循环遍历数组, 四数之和相加等于0 可以理解为 **nums1[i] + nums2[j] = -(nums3[k] + nums4[l])**, 他们是互为相反数的关系。使用一个map存储前两个数组中 两个元素之和 以及 **和** 的次数。再次两层for循环 遍历后两个数组, 判断在map中查找 是否存在相反数。

```ts
const four_number_sum = (nums1: number[], nums2: number[], nums3: number[], nums4: number[]) => {
  const map: Map<number, number> = new Map()
  let count = 0
  for (let i = 0, length = nums1.length; i < length; i++) {
    for (let j = 0, length = nums2.length; j < length; j++) {
      const sum = nums1[i] + nums2[j]
      if (map.has(sum)) {
        map.set(sum, map.get(sum) as number + 1)
      } else {
        map.set(sum, 1)
      }
    }
  }
  for (let i = 0, length = nums3.length; i < length; i++) {
    for (let j = 0, length = nums4.length; j < length; j++) {
      const sum = nums3[i] + nums4[j]
      if (map.has(-sum)) {
        count += map.get(sum) as number
      }
    }
  }
  return count
}
```