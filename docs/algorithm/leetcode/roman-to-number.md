# 罗马数字转整数

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

  给定一个罗马数字, 将其转换成整数。

**解法一**

  将所有的情况罗马数字对应的阿拉伯数字对应起来, 在遍历罗马字符串的时候, 有时只需要读取一个字符串, 有时则需要读取两个字符串
```ts
const roman_to_number = (s: string): number => {
  const map: { [key: string]: number } = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  const temp: number[] = []
  const spec_string = ['CM', 'CD', 'XC', 'XL', 'IX', 'IV']
  spec_string.forEach(item => {
    const index = s.indexOf(item)
    if (index > -1) {
      temp.push(index)
    }
  })
  let start = 0
  let number = 0
  while(start < s.length) {
    if (temp.includes(start)) {
      number += map[s.slice(start, start + 2)]
      start+=1
    } else {
      number += map[s.charAt(start)]
    }
    start+=1
  }
  return number
}
```

**解法二**

  这种算法不用列举出特殊的罗马字符和阿拉伯数字的映射。此需要在遍历时, 判断当前字符串所对应的数字 是否 小于 右侧字符串所对应的数字, 如果是的话则说明
  当前字符串和右侧的字符串组成一个数字, 并且所对应的数字为 右侧字符串对应的数字 减去当前值。

```ts
const roman_to_number = (s: string): number => {
  const map: { [key: string]: number } = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  }
  let result = 0
  for(let i = 0, length = s.length; i < length; i++) {
    if (i === length - 1) {
      result += map[s.charAt(i)]
    } else {
      const a = map[s.charAt(i)]
      const b = map[s.charAt(i+1)]
      if ( a < b) {
        result += (b - a)
        i += 1 // 因为是两个字符串对应一个数字, 所以循环的时候要跳步
      } else {
        result += a
      }
    }
  }
  return result
}
```