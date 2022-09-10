# 二叉树

## 数组转化树

```ts
interface Tree {
  value: number
  left?: Tree,
  right?: Tree
}

function create_tree(array: number[]): Tree {
  if(array.length === 0) return { value: 0}
  const tree_node: Tree = {value: array.shift()} // 根节点
  const root: Tree[] = [tree_node]
  while(array.length > 0) {
    // 每次取出来的时候 当前对象都是上一个对象的 left 或者 right 节点
    const node = root.shift()
    if(!array.length) break
    const left = {
      value: array.shift()
    }
    node.left = left
    // 左节点
    root.push(left)
    if(!array.length) break
    const right = {
      value: array.shift()
    }
    // 右节点
    node.right = right
    root.push(right)
  }
  return tree_node
}
console.log(create_tree[1, 2, 3, 4, 5, 6, 7])
/*
{
  value: 1,
  left: {
    value: 2, 
    left: { value: 4},
    right: { value: 5}
  },
  right: {
    value: 3,
    left: {value: 6},
    right: {value: 7}
  }
}
*/
```
```js
function create_tree(array) {
  if(!array.length) return
  const tree = [];
  let root = null;  // 根节点
  for(let i = 0, length = array.length; i < length; i++) {
    const value = array[i]
    const node = { value }  // 将所有节点用变量保存并添加进数组
    tree.push(node)
    if( i > 0) {
      // 索引和 父节点之间的关系
      const parent_node = tree[Math.floor((i-1) / 2)] // 父节点
      if(!parent_node.left) {
        parent_node.left = node
      } else {
        parent_node.right = node
      }
    } else {
      root = node
    }
  }
  return root
}
console.log(create_tree_2([1, 2, 3, 4, 5, 6, 7]))
```
## 二叉树遍历

  根据根节点在遍历时的位置 可以分为 前序遍历, 中序遍历, 后序遍历。
```ts
const binary_tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 3,
    },
    right: {
      value: 4,
    }
  },
  right: {
    value: 5,
    left: {
      value: 6
    },
    right: {
      value: 7
    }
  }
}
// 前序遍历
function front_tree_map(node: TreeNodeProps) {
  if(!node) return
  console.log(node.value)
  front_tree_map(node.left)
  front_tree_map(node.right)
}
front_tree_map(binary_tree) // 1 2 3 4 5 6 7


// 中序遍历
function middle_tree_map(node: TreeNodeProps) {
  if(!node) return
  middle_tree_map(node.left)
  console.log(node.value)
  middle_tree_map(node.right)
}
middle_tree_map(binary_tree)  // 3 2 4 1 6 5 7

// 后序遍历
function back_tree_map(node: TreeNodeProps) {
  if(!node) return
  back_tree_map(node.left)
  back_tree_map(node.right)
  console.log(node.value)
}
back_tree_map(binary_tree)  // 3 4 2 6 7 5 1
```

## 二叉搜索树

  将数组转为一个二叉搜索树, 该二叉搜索树有如下特征:
1. 节点的左子树只包含小于当前节点的树
2. 节点的右子树只包含大于当前节点的树
3. 所有左子树和右子树自身必须也是二叉树
```ts
const array:number[] = [10, 20, 25, 16, 6, 17, 11, 8, 5]

interface NodeProps {
  left: null | NodeProps
  right: null | NodeProps,
  value: number
}

function insert(root: NodeProps, number: number): void {
  if (number > root.value) {  // 右侧
    if (root.right === null) {
      root.right = {
        value: number,
        left: null,
        right: null
      }
    } else {
      return insert(root.right, number)
    }
  } else {  // 左侧
    if(root.left === null) {
      root.left = {
        value: number,
        left: null,
        right: null
      }
    } else {
      return insert(root.left, number)
    }
  }
}
function create_tree(array: number[]) {
  if (array.length === 0) return null
  const root = {
    value: array.shift(),
    left: null,
    right: null
  }
  array.forEach(item => {
    insert(root, item)
  })
  return root
}
console.log(create_tree(array))
```
