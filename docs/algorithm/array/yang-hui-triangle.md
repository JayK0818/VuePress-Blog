# 杨辉三角

  给定一个非负整数 **numRows**, 生成 杨辉三角的 前 **numRows** 行, 在杨辉三角中, 每个数是它 左上方和右上方的数的和。

```js
        1
      1   1
    1   2   1
  1   3   3   1
1   4   6   4   1

// 以上杨辉三角所对应的数组如下所示:
[ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ], [ 1, 3, 3, 1 ], [ 1, 4, 6, 4, 1 ] ]
```

**解法一**

  先生成一个长度为 **numRows** 的二维数组, 每个数组的长度为该数组所在下标 + 1。数组的每个元素为1, 然后从第三个数组开始, 计算该数组 首位下标中间的数！

```ts
const triangle = (numRows: number): number[][] => {
  const array: number[][] = []
  for (let i = 1; i <= numRows; i++) {
    array.push(new Array(i).fill(1))
  }
  for (let i = 2; i < numRows; i++) {
    // 当前行的数据
    const temp:number[] = array[i]
    // 上一行的数据
    const prev_temp:number[] = array[i - 1]
    // 遍历当前行的数据, 修改除首位的值
    for (let j = 1; j < temp.length - 1; j++) {
      temp[j] = prev_temp[j-1] + prev_temp[j]
    }
  }
  return array
}
```

**解法二**

  在上面算法的基础之上, 每次遍历的时候 直接计算当前 数组 每个下标对应的值。

```ts
const triangle = (num: number): number[][] => {
  const array: number[][] = []
  for (let i = 0; i < num; i++) {
    // 当前下标对应的初始数组
    const temp = []
    for (let j = 0; j <= i; j++) {
      // 第 0,1 行 直接填充1
      if (i <= 1) {
        temp.push(1)
      } else {
        // 如果是首位位置, 填充1, 否则在上一个数组的基础上, 计算当前下标对应的和
        if (j === 0 || j === i) {
          temp.push(1)
        } else {
          const prev_temp = array[i-1]
          temp.push(prev_temp[j-1] + prev_temp[j])
        }
      }
    }
    array.push(temp)
  }
  return array
}
```

**解法三**

  提取一个函数处理 当前行的 数组数据, 然后将其添加到一个结果中, 每次遍历时 将 *之前处理过的好的数据* 和 *行* 代入到 函数中。

```ts
const triangle = (num: number): number[][] => {
  let array: number[][] = []
  // 生成当前下标所对应的数组
  const create_array = (array:number[][], n: number) => {
    if (n === 1) {
      array.push([1])
    } else if (n === 2) {
      array.push([1, 1])
    } else {
      const temp: number[] = []
      for (let i = 0; i < n; i++) {
        if (i === 0 || i === n - 1) {
          temp.push(1)
        } else {
          const prev_temp = array[n - 2]
          temp.push(prev_temp[i-1] + prev_temp[i])
        }
      }
      array.push(temp)
    }
    return array
  }
  for (let i = 1; i <= num; i++) {
    array = create_array(array, i)
  }
  return array
}
```
å
# 杨辉三角 II

  对上面的题的一个引申。
  给定一个非负索引 **rowIndex**, 返回 *[杨辉三角]* 的第 **rowIndex** 行。

```ts
// 输入 rowIndex = 3
[1, 3, 3, 1]

// 输入 rowIndex = 0
[1]
```

**解法一**

  使用while循环依次生成 每个下标 对应的 数组, 最后返回该位置数组即可！

```ts
const triangle = (num: number): number[] => {
  const array: number[][] = [[1], [1, 1]]
  if (num <= 1) {
    return array[num]
  }
  let i = 2
  while (i <= num) {
    const prev_item = array[i - 1]
    const temp: number[] = []
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        temp.push(1)
      } else {
        temp.push(prev_item[j-1] + prev_item[j])
      }
    }
    array.push(temp)
    i += 1
  }
  return array[num]
}
```

**解法二**

  以下是一个更好的算法。

```ts
const triangle = (num: number):number => {
  // 先生成当前长度的数据, 每个位置初始赋值为1
  const result:number[] = []
  for (let i = 0; i <= num; i++) {
    result[i] = 1
  }
  if (num <= 1) return result
  for (let i = 1; i < num; i++) {
    // 每次从后往前原地修改数据(这个是关键点)
    for (let j = i; j > 0; j--) {
      result[j] = result[j-1] + result[j]
    }
  }
  return result
}
```