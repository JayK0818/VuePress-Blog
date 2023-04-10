# 括号生成

  数字n代表生成括号的对数, 请你设计一个函数, 用于能够生成所有可能的并且 **有效的** 括号组合

```js
n = 3
// 输出 ["((()))","(()())","(())()","()(())","()()()"]

n = 1
// ['()']
```

**解法一**

  初看这道题没有什么思路, 看了部分提示 将一对括号 加入到 上一次输出的数组的 每个字符串的 间隙。比如 n = 1时, 输出
  ['()'], 那么n = 2时, 在n = 1的基础上, 在 '()' 的 左中右分别加入一对 '()', 结果输出 ['()()', '(())', '()()'], 然后再去重就可以。

```ts
// 实现的第一个版本, 自行测试的时候没什么毛病, 但是在leetcode上 没法跑通 报错。
const create_brackets = (n: number): string[] => {
  const map = (array: string[] = [], n: number): string[] => {
    if (n === 1) return array;
    const queue: string[] = []
    array.forEach(item => {
      for (let i = 0, length = item.length; i <= length; i++) {
        queue.push(
          item.slice(0, i) + '()' + item.slice(i)
        )
      }
    })
    return map(queue, n - 1)
  }
  const result = map(['()'], n)
  const set:Set<string> = new Set()
  result.forEach(item => {
    set.add(item)
  })
  return [...set]
}
```

**解法二**

  无需利用遍历, 利用set对结果去重, 最后返回时 将set 数据结构转为数组即可。

```ts
const create_brackets = (n: number): string[] => {
  let set = new Set(['()'])
  for (let i = 1; i < n; i++) {
    const s: Set<string> = new Set()
    for (const item of set) {
      for (let j = 0; j <= item.length; j++) {
        s.add(item.slice(0, j) + '()' + item.slice(j))
      }
    }
    // 上一个结果处理完成之后 再赋值给 函数里定义的 set, 下一次循环的时候 上一次处理的结果上 继续循环。
    set = s
  }
  return [...set]
}
```

**解法三**

  题解中看到的别人实现的一种算法, 暂时不是很理解, 先记录下来！
```ts
const create_brackets = (n: number): string[] => {
  const result: string[] = []
  const map = (l: number, r: number, s: string) => {
    if (s.length === 2 * n) {
      result.push(s)
      return
    }
    if (l > 0) {
      map(l - 1, r, s + '(')
    }
    if (r > l) {
      map(l, r - 1, s + ')')
    }
  }
  map(n, n, '')
  return result
}

console.log(create_brackets_3(3))
// n = 1
/*
map(0, 1, '(')
map(0, 0, '()')
*/

// n =2
/**
map(2, 2, '')

map(1, 2, '(')

 map(0, 2, '((')
 map(1, 1, '()')

map(0, 1, '(()')
map(0, 0, '(())')   ----> (())

map(0, 1, '()(')
map(0, 0, '()()')   ----> ()()
*/
```