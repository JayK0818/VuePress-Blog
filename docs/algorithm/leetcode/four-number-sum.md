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