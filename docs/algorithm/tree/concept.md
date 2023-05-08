# 概念

  **二叉树** 是每个节点最多有 **两个子树** 的树结构, 通常子树 被称作 '左子树' 和 '右子树'。

```ts
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val
    this.left = (left === undefined) ? null : left
    this.right = (right === undefined) ? null : right
  }
}
```

## 树的遍历

- 前序遍历
  前序遍历首先访问根节点, 然后遍历左子树, 最后遍历右子树。

```ts
const preorder_traversal = (root: TreeNode): number[] => {
  const result: number[] = []
  const traversal = (root: TreeNode | null) => {
    if (!root) return
    result.push(root.val)
    traversal(root.left)
    traversal(root.right)
  }
  return result
}
```

- 中序遍历
  中序遍历首先遍历左子树, 然后访问根节点, 最后遍历右子树。
```ts
const preorder_traversal = (root: TreeNode | undefined): number[] => {
  const result: number[] = []
  const traversal = (node: TreeNode | undefined) => {
    if (!node) return
    traversal(node.left)
    result.push(node.value)
    traversal(node.right)
  }
  traversal(root)
  return result
}
```

- 后序遍历
  先遍历左子树, 然后遍历右子树。最后访问树的根节点。

```ts
const preorder_traversal = (root: TreeNode | undefined): number[] => {
  const result: number[] = []
  const traversal = (node: TreeNode | undefined) => {
    if (!node) return
    traversal(node.left)
    traversal(node.right)
    result.push(node.value)
  }
  traversal(root)
  return result
}
```