# 有效的数独

  请你判断一个 **9 x 9** 的数独是否有效。只需要 **根据以下规则**, 验证已经填入的数字是否有效即可。

1. 数字 *1-9* 在每一行 只能出现一次
2. 数字 *1-9* 在每一列 只能出现一次
3. 数字 *1-9* 在每一个以粗实线分隔的 *3 * 3* 的宫格内只能出现一次

![数独](../images/sudoku.png)


```js
// 数据格式如下:
board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
```

  自己实现的一个版本 但是花了很多时间, 主要卡在 最后计算最后一个条件 *3 x 3* 的九宫格怎么保证数字不重复。思考了很久才找到下标和数组对应的关系。

```ts
const valid_sudoko = (board: string[][]): boolean => {
  let _flag = true
  // 先检测行, 判断每行是否有重复的数字, 存在重复则返回false
  for (const item of board) {
    const map: {[key: string]: boolean } = {}
    for (let i = 0, length = item.length; i < length; i++) {
      const number = item[i]
      if (number === '.') continue
      if (map[number]) {
        return false
      }
      map[number] = true
    }
  }
  // 检测列 是否存在重复的数字
  for (let i = 0; i < 9; i++) {
    const map: {[key: string]: boolean } = {}
    for (const item of board) {
      const number = item[i]
      if (number === '.') continue
      if (map[number]) {
        return false
      }
      map[number] = true
    }
  }
  //  检测每个 3 x 3 小宫格 (column 代表列)
  for (let column = 0; column < 3; column++) {
    let map: {[key: string]: boolean } = {}
    for (let i = 0; i < 9; i++) {
      if (i % 3 === 0) map = {} // (每 读取3行数据 清空 map)
      for (let j = 0; j < 3; j++) {
        const number = board[i][column * 3 + j]
        if (number === '.') continue
        if (map[number]) {
          return false
        }
        map[number] = true
      }
    }
  }
  return _flag
}
```