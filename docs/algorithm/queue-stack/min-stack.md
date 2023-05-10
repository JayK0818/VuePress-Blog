# 最小栈

  设计一个支持 **push**, **pop** 和 **top**操作 并能在常数时间内检索到最小元素的栈。

- **MinStack()** 初始化堆栈对象。
- **push(val)** 将元素val推入堆栈。
- **pop()** 删除堆栈元素顶部的元素
- **top** 获取堆栈顶部的元素
- **getMin()** 获取堆栈中最小的元素。

  使用两个数组, 一个数组用来存储数据操作pop, push等。另一个数组用来存储最小值用来实现 常数级的 检索最小元素。

```ts
class MinStack {
  public mins: number[]
  public stack: number[]
  constructor() {
    this.mins = []
    this.stack = []
  }
  push (val: number) {
    this.stack.push(val)
    if (!this.mins.length) {
      this.mins.push(val)
    } else {
      const v = this.mins[this.mins.length - 1]
      if (val <= v) {
        this.mins.push(val)
      }
    }
  }
  pop () {
    const value = this.stack.pop()
    if (value === this.mins[this.mins.length - 1]) {
      this.mins.pop()
    }
  }
  top () {
    return this.stack[this.stack.length - 1]
  }
  getMin () {
    if (this.mins.length) {
      return this.mins[this.mins.length - 1]
    }
  }
}
```