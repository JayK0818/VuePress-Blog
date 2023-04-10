# 零矩阵

  编写一种算法, 若M x N 矩阵中某个元素为0, 则将其所在行与列清零。

```ts
const array = [ [1,1,1], [1,0,1], [1,1,1] ]
// 输出 [ [1,0,1], [0,0,0], [1,0,1] ]
```

**解法一**

  此题解法不能在 遍历时 看到 数值为0的 立即修改数值的值为0, 这样有可能最后整个数组结果都为0。因为在修改之后 不确定当前值为0 是初始值就是 0 还是在
  之前修改之后 变为0。
```ts
const zero_matrix = (matrix: number[][]):void => {
  const columns: number[] = []
  const rows: number[] = []
  for (let i = 0; i < matrix.length; i++) {
    // 判断当前行是否有 满足等于0 的数据
    const is_zero = matrix[i].some(item => item == 0)
    if (!is_zero) continue
    for (let j = 0, length = matrix[i].length; j < length; j++) {
      if (matrix[i][j] === 0) {
        if (!rows.includes(i)) {
          rows.push(i)
        }
        if (!columns.includes(j)) {
          columns.push(j)
        }
      }
    }
  }
  if (columns.length > 0) {
    columns.forEach(column => {
      for (let i = 0; i < matrix.length; i++) {
        matrix[i][column] = 0
      }
    })
  }
  if (rows.length > 0) {
    rows.forEach(row => {
      matrix[row].forEach((_, i) => {
        matrix[row][i] = 0
      })
    })
  }
}
```