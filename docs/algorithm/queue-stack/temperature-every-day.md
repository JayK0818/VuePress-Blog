# 每日温度

  给定一个整数数组 **temperatures**, 表示每天的温度, 返回一个数组 **answer**, 其中 **answer[i]** 是指对于第 **i** 天, 下一个更高温度
  出现在几天后。如果气温在这之后都不会升高, 请在该位置用 **0**来代替。

```js
const temperatures = [73,74,75,71,69,72,76,73]
// [1,1,4,2,1,1,0,0]


const temperatures = [30,40,50,60]
// [1,1,1,0]

const temperatures = [30,60,90]
// [1, 1, 0]
```

**解法一**

  实现的第一种方式 暴力破解, 但是这种双层for循环的效率很低下

```ts
const every_day_temperature = (nums: number[]): number[] => {
  const temp: number[] = []
  for (let i = 0, length = nums.length; i < length - 1; i++) {
    const cur = nums[i]
    for (let j = i+1; j < length; j++) {
      if (nums[j] > cur) {
        temp.push(j-i)
        break
      }
      // 如果已经找到最后一位 并且没有比当前温度高的数据, 则用0 代替。
      if (j === nums.length - 1) {
        temp.push(0)
      }
    }
  }
  // 最后一位添加0, 因为数组最后一项 之后 不会有比它更高的温度数据了。
  return temp.concat(0)
}
```
:::tip
```js
执行用时：4412 ms, 在所有 TypeScript 提交中击败了8.37%的用户
内存消耗：63.1 MB, 在所有 TypeScript 提交中击败了55.35%的用户
通过测试用例：48 / 48
```
:::

**解法二**

  使用栈解决。

[图文参考](https://leetcode.cn/leetbook/read/queue-stack/genw3/)

```ts
const every_day_temperature = (temperatures: number[]): number[] => {
  // 定义一个数组温度长度的栈 用来存储下标
  const temp: number[] = new Array(temperatures.length)
  const stack: number[] = []
  for (let i = 0, length = temperatures.length; i < length; i++) {
    // 初始值设置为0
    temp[i] = 0
    // 如果这些下标对应的温度 都没有在 后面的数据中找到比它大的温度, 则一直循环
    while (stack.length) {
      // 当前的温度
      const cur = temperatures[i]
      // 上一次栈顶的温度
      const idx = stack[stack.length - 1]
      if (cur > temperatures[idx]) {
        const diff = i - idx
        temp[idx] = diff
        // 找到了话那个下标出栈
        stack.pop()
      } else {
        break
      }
    }
    stack.push(i)
  }
  return temp
}
```