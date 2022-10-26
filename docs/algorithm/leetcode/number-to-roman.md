# 整数转罗马数

  罗马数字包含以下七种字符：I V X L C D 和 M。

| 罗马字符 | 数字 |
| ------- | :-------------: |
| I | 1 |
| V | 5 |
| X | 10 |
| L | 50 |
| C | 100 |
| D | 500 |
| M | 1000 |

  通常情况下, 罗马数字中小的数字在大的数字的右边。但是也存在特例, 例如 4 不写作 *IIII*, 而是 *IV*, 数字1 在数字5的左边, 所表示的数等于
  大数 **5** 减去 小数 **1** 得到的数值 **4**. 这个特殊规则 只适用于以下六种情况。
1. **I** 可以放在 **V** 和 **X** 的左边, 表示 4 和 9
2. **X** 可以放在 **L** 和 **C** 的左边, 表示 40 和 90
3. **C** 可以放在 **D** 和 **M** 的左边, 表示 400 和 900

**解法一**

```ts
// 自己实现的第一个版本
const number_to_roman = (n: number): string => {
  // 定义一个map 数字和罗马数字的映射
  const map: { [key: number]: string } = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
  }
  // 所有的有对应映射的特殊数字
  const array: number[] = Object.keys(map).map(Number)
  const transform = (n: number, position: number): string => {
    // 如果当前位的数字为5, 直接从映射中返回对应的罗马字符
    if (n === 5) return map[position * n]
    // 当前位对应的罗马字符
    const character = map[position]
    // 当前位所在的数组中的下标
    const index = array.findIndex(item => item === position)
    if (index === -1) return ''
    // 特殊的数字 4, 取当前位对应的字符 加一个 5 对应的字符
    if (n === 4) return map[array[index]] + map[array[index+1]]
    // 特殊的数字 9, 取当前位对应的字符 加 下一级 对应的字符
    if (n === 9) return map[array[index]] + map[array[index+2]]
    // 如果为 大于5 取5对应的字符
    let result = n > 5 ? map[5 * position] : '';
    for (let i = 0,length = n > 5 ? n - 5 : n; i < length; i++) {
      result += character
    }
    return result
  }
  const number_string = n.toString()
  let result = ''
  for (let i = 0, length = number_string.length; i < length; i++) {
    const position = Math.pow(10, length - i - 1) // 当前数字所对应的位
    const n = Number(number_string[i])  // 当前位的数字
    result += transform(n, position) // 传入一个生成罗马字符的函数
  }
  return result
}
```

**解法二**

```ts
// 看到的其他人的解法, 利用双层for循环, 每次减去有对应罗马字符的数值, 如果减去后小于此时的值 则进入下一个层级
const number_to_roman = (n: number): string => {
  // 列举所有特殊的数字所对应的字符串
  const int_array = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const roman_array = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  let result = ''
  let i = 0
  while ( i < int_array.length) {
    while (n >= int_array[i]) {
      n -= int_array[i]
      result += roman_array[i]
    }
    i+=1
  }
  return result
}
```