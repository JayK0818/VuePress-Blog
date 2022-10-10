# 链表

## 两数相加

  两个非空链表, 表示两个非负的整数。它们每位数字都是按照 **逆序** 的方法存储的, 并且每个节点只能存储一位数字, 将两个数相加并以相同形式返回一个表示
  **和** 的链表。

  示例:
  链表1: 2 ----> 4 ----> 3   链表2:  5 ----> 6 ----> 4 输出: 7 ----> 0 ----> 8

[题目出处](https://leetcode.cn/problems/add-two-numbers/)

  一开始的想法是将链表遍历 转换成数字, 将两个数字相加之和 再转换为链表。如果数字计算在计算机允许的范围之内 这是可行的, 但是测试的时候挂在了
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]  [5, 6, 4]
  
  数组下标第一位是个位, 第二位是十位, 依次类推...

```ts
// 修改后的版本为将链表转换为数组, 然后将两个数组对应下标的数字相加,生成一个新的数组。最后再转化为链表.
const list_to_number = (tree: ListNode): number[] => {
  const temp: number[] = []
  let root: ListNode | null = tree
  while(root) {
    temp.push(root.value)
    root = root.next
  }
  return temp
}

const array_to_list = (list: number[]): ListNode => {
  const length = list.length
  let root: ListNode = {
    value: list[length - 1],
    next: null
  }
  if (list.length === 1) return root
  for (let i = length - 2; i >= 0; i--) {
    root = {
      value: list[i],
      next: root
    }
  }
  return root
}

const sum = (tree_1: ListNode, tree_2: ListNode): ListNode => {
  const list_1 = list_to_number(tree_1)
  const list_2 = list_to_number(tree_2)
  const length = list_1.length > list_2.length ? list_1.length : list_2.length;
  let flag = false
  const result: number[] = []
  for (let i = 0; i < length; i++) {
    const n1 = i >= list_1.length ? 0 : list_1[i]
    const n2 = i >= list_2.length ? 0 : list_2[i]
    const sum = flag ? (n1 + n2 + 1) : (n1 + n2)
    if (sum >= 10) {
      flag = true
    } else {
      flag = false
    }
    result.push(
      flag ? sum % 10 : sum
    )
  }
  if (flag) {
    result.push(1)
  }
  return array_to_list(result)
}
```
```ts
// 不通过数组转换 直接生成链表
const sum = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
  let root: ListNode = { // 定义一个初始链表
    value: 0,
    next: null
  }
  let cur = root; // 保存指针
  let carry = 0 // 相加时是否进位
  while(l1 || l2) {
    const n1 = l1 ? l1.value : 0
    const n2 = l2 ? l2.value : 0
    const sum = carry + n1 + n2;
    carry = Math.floor(sum / 10)
    root.next = {
      value: sum % 10,
      next: null
    }
    root = root.next // 指针向前移动
    l1 = l1 === null ? null : l1.next
    l2 = l2 === null ? null : l2.next
  }
  if (carry) { // 如果最后一位相加时 是有进位的话 需要向前加1
    root.next = {
      value: 1,
      next: null
    }
  }
  return cur.next
}
```
  