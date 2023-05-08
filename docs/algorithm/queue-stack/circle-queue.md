# 循环队列

  设计一个循环队列实现。循环队列是一种线性数据结构, 其操作表现基于 **FIFO** (先进先出)原则 并且队尾被连接在对队首之后以形成一个循环。它也被称为 **循环缓冲器**。

  循环队列的一个好处是我们可以利用这个队列之前用过的空间。在一个普通队列里，一旦一个队列满了，我们就不能插入下一个元素，即使在队列前面仍有空间。但是使用循环队列，我们能使用这些空间去存储新的值

  你的实现应该支持如下操作:

- *CircularQueue(k)*: 构造器, 设置队列长度为 **k**。
- *front()*: 从队首获取元素。如果队列为空, 返回 **-1**。
- *rear()*: 获取队尾元素。如果队列为空, 返回 **-1**。
- *add(value)*: 向循环队列插入一个元素, 如果成功插入则返回 **true**。
- *delete()*: 从循环队列删除一个元素。如果成功则返回 **true**。
- *is_empty()*: 检查循环队列是否为空。
- *is_full()*: 检查循环队列是否已满。

```ts
class CircularQueue {
  public array: any[]
  public size: number
  public head: number
  public tail: number
  constructor(k: number) {
    // 长度为 k 的空数组
    this.array = new Array(k)
    // 头尾指针初始位置
    this.head = -1
    this.tail = -1
  }
  is_empty ():boolean {
    return this.head === -1 && this.tail === -1
  }
  is_full ():boolean {
    return ((this.tail + 1) % this.array.length) === this.head
  }
  front () {
    if (this.is_empty()) return -1
    return this.array[this.head]
  }
  rear() {
    if (this.is_empty()) return -1
    return this.array[this.tail]
  }
  add (value: number) {
    if (this.is_full()) return false
    if (this.is_empty()) {
      this.head = 0
      this.tail = 0
      this.array[0] = value
      return true
    } else {
      this.tail = (this.tail + 1) % this.array.length
      this.array[this.tail] = value
      return true
    }
  }
  delete () {
    if (this.is_empty()) return false
    // 表明此时只添加了一个元素,
    else if (this.head === this.tail) {
      this.head = -1
      this.tail = -1
      return true
    }
    // 头指针向后移动一位。
    this.head = (this.head + 1) % this.array.length
    return true
  }
}
```