# 逆波兰表达式求值

  给你一个字符串数组 **tokens**, 表示一个根据 *逆波兰表示法* 表示的算术表达式。
  请你计算该表达式。返回一个表示表达式值的整数。

- 有效的算符为 '+' '-' '*' '-'
- 每个操作数 都可以是一个整数或另一个表达式
- 两个整数之间的除法总是 **向零截断**
- 表达式中不含除0运算
- 输入是一个根据逆波兰表示法表示的算术表达式
- 答案以及所有中间计算结果可以用**32位**整数表示。

```js
const tokens = ["2","1","+","3","*"]
// 9 该算式转化为算术表达式为   ((2 + 1) * 3) = 9

const tokens = ["4","13","5","/","+"]
// (4 + (13 / 5)) = 6

const tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// ((10 * (6 / ((9 + 3) * -11))) + 17) + 5 = 22
```

**解法一**

  遇到数字则入栈, 遇到运算符则取出栈顶两个数字进行计算,并将结果压入栈中。

```ts
const eval_rpn = (tokens: string[]) => {
  const stack: number[] = []
  const operators = ['+', '-', '*', '/']
  for (let i = 0, length = tokens.length; i < length; i++) {
    const token = tokens[i]
    if (!operators.includes(token)) {
      stack.push(Number(token))
    } else {
      const s1 = stack.pop() as number
      const s2 = stack.pop() as number
      let result = 0
      switch (token) {
        case '+':
          result = s1 + s2
          break
        case '-':
          result = s2 - s1
          break
        case '*':
          result = s1 * s2
          break
        case '/':
          result = s2 / s2
          break
      }
      stack.push(result > 0 ? Math.floor(result) : Math.ceil(result))
    }
  }
  return Number(stack[0])
}
```