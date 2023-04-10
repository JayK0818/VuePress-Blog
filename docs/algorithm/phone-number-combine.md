# 电话号码的字母组合

  给定一个仅包含数字 2-9的字符串, 返回所有它能表示的字母组合。 答案可以按 **任意顺序** 返回。
```js
// 以下为 手机号码 按键上 每个数字键对应的 字母 (1 不对应任何字母)
{
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz'
}
// 0 <= digits.length <= 4

digits = '23'
// ["ad","ae","af","bd","be","bf","cd","ce","cf"]
```

**解法一**

```ts
// 核心在于 每次将生成的数组组合 与 下一个字符串重新生成一个组合, 然后将生成的新的数组 放入到下一个循环中。
const phone_number_combine = (s: string): string[] => {
  const length = s.length
  if (length === 0) return []
  const number_to_string: { [key: string]: string} = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  if (length === 1) return number_to_string[s].split('')
  const create_string = (array: string[] = [], string: string) : string[] => {
    if (!array.length) return string.split('')
    const temp = []
    for (const a of array) {
      for (const b of string) {
        temp.push(a + b)
      }
    }
    return temp
  }
  let result: string[] = []
  for (let i = 0; i < length; i++) {
    result = create_string(result, number_to_string[s.charAt(i)])
  }
  return result
}
```

**解法二**

```ts
const phone_number_combine = (s: string): string[] => {
  const length = s.length
  if (length === 0) return []
  const number_to_string: { [key: string]: string} = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  if (length === 1) return number_to_string[s].split('')
  const compute = (arr_1: string[], arr_2: string[]): string[] => {
    if (arr_1.length === 0) return arr_2
    const temp: string[] = []
    for (const a of arr_1) {
      for (const b of arr_2) {
        temp.push(a + b)
      }
    }
    return temp
  }
  // 利用reduce函数, 每次将上一次执行的结果再传入到下一次计算中
  return Array.from(s)
    .map(n => number_to_string[n].split(''))
    .reduce((prev, next) => compute(prev, next), [])
}
```