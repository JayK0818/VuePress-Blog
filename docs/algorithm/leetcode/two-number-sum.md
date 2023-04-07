# 两数之和

  给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

```js
nums = [2,7,11,15], target = 9
// [0,1] 因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```

**解法一**

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
**解法二**

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

**解法三**

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

# 两数之和 II - 输入有序数组

  给你一个下标从 **1** 开始的整数数组 **numbers**, 该数组已按 **非递减顺序排序**, 请你从数组中找出满足相加之和 等于目标 **target** 的两个数。
  如果这两个数分别是 *numbers[m]* 和 *numbers[n]*, 则 **1 <= m < n < numbers.length**。以长度为2的整数数组 **[m, n]** 的形式返回这两个
  整数的下标 **m** 和 **n**。
```js
const numbers = [2,7,11,15], target = 9
// 输出 [1, 2]

const numbers = numbers = [2,3,4], target = 6
// 输出 [1, 3]
```

  和上面的题差不多, 区别是下标从1开始, 并且输入的数组是有序的。除了可以用上面的解法, 还可以使用双指针解法。
  
```ts
const tow_sum = (numbers: number[], target: number): number[] => {
  let i = 0
  let j = numbers.length - 1
  const temp = []
  while (i < j) {
    const sum = numbers[i] + numbers[j]
    if (sum === target) {
      temp.push(i+1, j+1)
      break
    } else if (sum > target) {
      j -= 1
    } else {
      i += 1
    }
  }
  return temp
}
```