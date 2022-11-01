# 删除链表的倒数第N个节点

  给你一个链表, 删除链表的倒数第 **n** 个节点, 并返回链表的头节点。

**解法一**

  将链表转换为数组, 删除数组指定的节点, 然后再转化为链表
```ts
type ListNodeProps = {
  value: number
  next: null | ListNodeProps
}

const remove_last_node = (list: ListNodeProps, n: number): ListNodeProps | null => {
  const temp: number[] = []
  let node: ListNodeProps | null = list
  while(node) {
    temp.push(node.value)
    node = node.next
  }
  if (temp.length < n) return null
  temp.splice(temp.length - n, 1)
  let result: null | ListNodeProps = null
  temp.reverse().forEach(item => {
    result = {
      next: result, 
      value: item
    }
  })
  return result
}
```