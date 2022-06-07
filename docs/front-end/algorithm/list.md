# 链表

## 单向链表

  将一个数组转换成为单向链表(每个数据元素在存储时配备一个指针),用于指向自己的直接后继元素。
```ts
const array = [10,20,30,40,50]

interface ListProps {
  value: number
  next? : ListProps
}
function createList (array: number []): ListProps {
  const length = array.length
  if(length === 0) throw new Error('something went wrong')
  let curObj = {
    value: array[length - 1]
  }
  if(length === 1) return curObj
  for(let i = length - 2; i >= 0; i--) {
    curObj = {
      value: array[i],
      next: curObj
    }
  }
  return curObj
}
const result = createList(array)
```
![单向链表](../images/list.png)

## 反转单向链表

  将上述例子生成的单向链表进行反转
```ts
function reverseList(object: ListProps): ListProps {
  let prev: undefined | ListProps = undefined
  let cur: undefined | ListProps = undefined
  let next: undefined | ListProps = object
  while (next) { // 当有next的时候 遍历
    if (cur && !prev) {
      delete cur.next
    }
    // 整体移动指针
    if(cur && prev) {
      cur.next = prev
    }
    prev = cur
    cur = next
    next = next?.next
  }
  cur.next = prev
  return cur
}
```
## 链表实现队列

```ts
class Queue1 {
  private headNode = null
  private tailNode = null
  private len = 0
  add (value) {
    const node = {
      value,
      next: null
    }
    // 如果没有头部节点
    if (this.headNode === null) {
      this.headNode = node
    }
    const tail = this.tailNode
    if(tail) {
      tail.next = node
    }
    this.tailNode = node
    this.len += 1
  }
  delete () {
    if(!this.headNode) return null
    if(this.len <= 0) return null
    const head = this.headNode
    this.headNode = head.next
    this.len -= 1
    return head.value
  }
  get length() {
    return this.len
  }
}

const queue_1 = new Queue1()
queue_1.add(10)
queue_1.add(20)
queue_1.add(30)
queue_1.add(40)
console.log(queue_1.length)   // 4
console.log(queue_1.delete()) // 10
console.log(queue_1.length)   // 3
```

