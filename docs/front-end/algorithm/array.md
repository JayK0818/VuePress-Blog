# 数组
## 电话号码的字母组合

  例子: 输入数字23 会输出 ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
```js
// -------- 数字2-9 对应的字母组合 -----------
const number_map = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz'
}
function fn( str) {
  if(!str.length) return []
  if(str.length === 1) return str.split('').map(item => number_map[item])
  const code = []
  for(const s of str) {
    if(number_map[s]) {
      code.push(number_map[s])
    }
  }
  if(code.length === 1) return code
  function combine(array) {
    const result = []
    for(let i = 0; i < array[0].length; i++) {
      for(let j = 0; j < array[1].length; j++) {
        result.push(`${array[0][i]}${array[1][j]}`)
      }
    }
    array.splice(0, 2, result)
    array.splice(0, 2, result)
    if(array.length > 1) {
      combine(array)
    }else{
      return result
    }
    return array[0]
  }
  return combine(code)
}
console.log(fn('23')) // ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
console.log(fn('234')) 
// ['adg', 'adh', 'adi', 'aeg', 'aeh', 'aei', 'afg', 'afh', 'afi', 'bdg', 'bdh', 
// 'bdi', 'beg', 'beh', 'bei', 'bfg', 'bfh', 'bfi', 'cdg', 'cdh', 'cdi', 'ceg', 'ceh', 
// 'cei', 'cfg', 'cfh', 'cfi']
console.log(fn('25')) // ['aj', 'ak', 'al', 'bj', 'bk', 'bl', 'cj', 'ck', 'cl']
```

## 卡牌分组

```ts
// ------- 选定一个数字X, 将数组分数,
// 1. 每组都有x张牌, 2. 组内所有的牌上都写着相同的整数
function card_group(list: number[]): boolean {
  if(!list.length) return false
  const rest = list.slice().sort();
  const result: number[][] = []
  let min: number = Number.MAX_SAFE_INTEGER
  for(let i = 0, length = rest.length; i < length; i++) {
    const temp: number[] = []
    temp.push(rest[i])
    for(let j = i + 1; j <= rest.length; j++) {
      if(rest[i] === rest[j]) {
        temp.push(rest[j])
      } else {
        i = j - 1
        result.push(temp)
        if(temp.length < min) {
          min = temp.length
        }
        break;
      }
    }
  }
  if(min < 2) return false
  let flag = true
  result.every(item => {
    if(item.length % min !== 0) {
      flag = false
      return false
    }
  })
  return flag
}

console.log(card_group([1,2,3,4,4,3,2,1,2,5,6,5,7]))  // false
console.log(card_group([1,1,2,2,3,3,4,4]))  // true
console.log(card_group([1,1,2,2,2,2]))  // true
```
## 将一个数组旋转k步

```ts
// [1,2,3,4,5,6,7] ->3步 [5,6,7,1,2,3,4,5]

// 第一种实现方式
function rotate_1(array:number[] = [], k = 1): number[] {
  if(!array.length) return []
  if(k < 0) {
    k = Math.abs(k)
  }
  if(k > array.length) {
    k = k % array.length
  }
  const arr1: number [] = array.slice(array.length - k)
  const arr2: number [] = array.slice(0, array.length - k)
  return [...arr1, ...arr2]
}

// 第二种实现方式
function rotate_2(array:number[] = [], k = 1): number[] {
  if(!array.length) return []
  if(k < 0) {
    k = Math.abs(k)
  }
  if(k > array.length) {
    k = k % array.length
  }
  for(let i = 0; i < k; i++) {
    array.unshift(array.pop())
  }
  return array
}

// 测试
const array = [1,2,3,4,5,6,7]
console.log(rotate_1(array, 3)) // 5,6,7,1,2,3,4
console.log(rotate_1(array, 8)) // 7 1 2 3 4 5 6

console.log(rotate_2(array, 3)) // 5,6,7,1,2,3,4
console.log(rotate_2(array, 8)) // 7 1 2 3 4 5 6
```
  以上两种方法均可实现将一个数组旋转k步, 但是方法二的 时间复杂度为 O(n^2), 而方法一的时间复杂度为O(1)
  对上面对两个写法做一个测试:
```js
const array = []
for(let i = 0; i < 10 * 10000; i++){
  array.push(i)
}
console.time('rotate1')
console.log(rotate_1(array, 5* 10000))
console.timeEnd('rotate1')  // 测了几次 在 7 - 10 ms 之间


console.time('rotate2')
console.log(rotate_2(array, 5 * 10000))
console.timeEnd('rotate2') // 1.8s - 2.2s 之间
```
## 二分查找

```ts
// ------- 循环方法 ------
function binary_search(array: number[], target: number): number {
  const length = array.length
  if(length === 0) return -1
  let startIndex = 0, endIndex = length - 1
  while(startIndex <= endIndex) {
    const middleIndex = Math.floor( (startIndex + endIndex) / 2 )
    const middleValue = array[middleIndex]
    if (middleValue > target) {
      endIndex = middleIndex - 1
    }else if (middleValue < target) {
      startIndex = middleIndex + 1
    } else {
      return middleIndex
    }
  }
  return -1
}

// ------- 递归方法 ------
function recursive_search(
  array: number [], target: number, startIndex?: number, endIndex?: number
): number {
  const length = array.length
  if(length === 0) return -1
  if(startIndex === undefined) startIndex = 0
  if(endIndex === undefined) endIndex = length - 1
  if(startIndex > endIndex) return -1
  const middleIndex = Math.floor((startIndex + endIndex) / 2)
  const middleValue = array[middleIndex]
  if(middleValue > target) {
    return recursive_search(array, target, startIndex, middleIndex - 1)
  }else if (middleValue < target) {
    return recursive_search(array, target, middleIndex + 1, endIndex)
  }else{
    return middleIndex
  }
}
```
  接下来构造一个足够大的数组,用来和js原生提供的方法进行比较
```js
const big_binary_array = []
for(let i = 0; i < 10 * 1000000; i ++) {
  big_binary_array.push(i)
}
console.time('find')
console.log(binary_search(big_binary_array, 9999999))  //0.44ms
console.log(recursive_search(big_binary_array, 9999999))  //0.323ms
const result = big_binary_array.find(item => item === 9999999) //126.366ms
console.timeEnd('find')

// 当数组越大的时候, 使用二分查找的速度越快, 二分查找使用递归和循环的速度差不多
```
## 数组中和为n的两个数

```ts
// 使用循环的方法
function sum(array:number [], target: number): number [] {
  const length = array.length, result = []
  if(length === 0) return []
  for(let i = 0; i < length - 1; i++) {
    const m1 = array[i]
    let flag = false
    for(let j = i + 1; j < length; j++) {
      const m2 = array[j]
      if(m1 + m2 === target) {
        result.push(m1)
        result.push(m2)
        flag = true
        break
      }
    }
    if(flag) break
  }
  return result
}

const e = [1,2,3,4,5,6,7,8,9,10]
console.log(sum(e, 19)) // [9, 10]


// 使用双指针
function sum(array: number [], target: number): number [] {
  const length = array.length;
  if(length === 0) return []
  let startIndex = 0, endIndex = length - 1
  const result: number [] = []
  while(startIndex < endIndex) {
    const n1 = array[startIndex], n2 = array[endIndex];
    const sum = n1 + n2
    if(sum < target) {
      startIndex++
    }else if(sum > target) {
      endIndex--
    }else{
      result.push(n1)
      result.push(n2)
      break
    }
  }
  return result
}
const e = [1,2,3,4,5,6,7,8,9,10]
console.log(sum(e, 19)) // [9, 10]
```
## 移动指定元素到数组末尾(不改变原数组)

```ts
// 将 0 移动到数组末尾
function moveZero(array: number[]) {
  const length = array.length
  if(length === 0) return
  let pointerLength = 0 // 数组末尾全是0, 此时不用 再去遍历末尾的数据
  for(let i = 0; i < length - pointerLength; i++) {
    const item = array[i]
    if(item === 0) {
      array.push(item)
      array.splice(i, 1)
      pointerLength += 1
      i-- // 防止重复的0漏掉
    }
  }
}
const zeroArray = [1,2,0,0,0,1,2,0,1,1,2,3,0,4]
moveZero(zeroArray)
console.log(zeroArray)
/*
[
  1, 2, 1, 2, 1, 1,
  2, 3, 4, 0, 0, 0,
  0, 0
]
*/

// 对上面的方法使用双指针优化 因为数组是连续存储空间, 上面的方法时间复杂度是O(n^2)
// j指向第一个0, i 指向j 后面第一个非0 的数字
function moveZero(array: number []) {
  let i,
    j = -1
  for(i = 0; i < array.length; i++) {
    // 指向第一个0
    if(array[i] === 0 && j < 0) {
      j = i
    }
    if(array[i] !== 0 && j >= 0) {
      if(array[j] === 0) {
        const n = array[i]
        array[i] = array[j]
        array[j] = n
      }
      j++
    }
  }
}

const zeroArray = [1,2,0,0,0,1,2,0,1,1,2,3,0,4]
moveZero(zeroArray)
console.log(zeroArray)
/*
[
  1, 2, 1, 2, 1, 1,
  2, 3, 4, 0, 0, 0,
  0, 0
]
*/
```
  对上面的两个方法进行一个性能对比。
```js
// 先构造一个足够大的数组
const array = []
for(let i = 0; i < 10 * 10000; i++) {
  if(i % 10 === 0) {
    array.push(0)
  }else{
    array.push(i)
  }
}
console.time('zero')
moveZero(array)  // 229.207ms 使用第一种方法 
moveZero(array)  // 4.256ms    使用第二种方法
console.timeEnd('zero')
```
## 数组转为树

```ts
/*
[
  {id:1, name:'部门A', parentId: 0},
  {id:2, name:'部门B', parentId: 1},
  {id:3, name:'部门C', parentId: 1},
  {id:4, name:'部门D', parentId: 2},
  {id:4, name:'部门E', parentId: 2},
  {id:4, name:'部门F', parentId: 3}
]
*/
function convert(array: ArrayNode []) {
  const map: Map<number, TreeNode> = new Map()
  let root = null
  array.forEach(item => {
    const { id, name, parentId } = item
    const treeNode: TreeNode = { id, name }
    map.set(id, treeNode)
    const parentNode = map.get(parentId)  // 判断是否在某个节点树上
    if(parentNode) {
      if(!parentNode.children) parentNode.children = []
      parentNode.children.push(treeNode)
    }
    if(parentId === 0) root = treeNode
  })
  return root
}
```

## 树转为数组

```js
// ---------------- 将树转化为数组 ---------------
const tree_node = {
  id: 1,
  name: "部门A",
  children: [
    {
      id:2,
      name: "部门B",
      children:[
        {id: 4, name: "部门D" },
        {id: 5 ,name: "部门E" }
      ]
    },
    {
      id: 3,
      name: "部门C",
      children: [
        {id: 6, name:"部门F" }
      ]
    }
  ]
}
//  广度优先遍历
function tree_to_array(tree) {
  const temp = []
  const queen = [tree]
  const map = new Map()
  while(queen.length) {
    const currentNode = queen.pop()
    if(!currentNode) break;
    const {id, name, children = [] } = currentNode // 最后一个元素
    const parentNode = map.get(currentNode) // 判断当前节点是否有父节点
    let parentId
    if(!parentNode) {
      parentId = 0
    }else{
      parentId = parentNode.id
    }
    temp.push({
      parentId,
      name,
      id
    })
    if(children.length) {
      children.forEach(item => {
        map.set(item, currentNode) // 将每个节点和父节点做个映射
        queen.unshift(item) // 将当前节点依次添加进队列里
      })
    }
  }
  return temp
}

console.log(tree_to_array(tree_node))
/*
[
  { parentId: 0, name: '部门A', id: 1 },
  { parentId: 1, name: '部门B', id: 2 },
  { parentId: 1, name: '部门C', id: 3 },
  { parentId: 2, name: '部门D', id: 4 },
  { parentId: 2, name: '部门E', id: 5 },
  { parentId: 3, name: '部门F', id: 6 }
]
*/
```
## 种花

```ts
// 种花问题, 给定一个数组, 0表示未种花,1表示已种花, 花不能在相邻地方种植, 是否在给定数组里 种植 n朵花

function test_flower(array: number[], number: number): boolean {
  let max: number = 0;
  for(let i = 0, length = array.length - 1; i < length; i++) {
    if(array[i] === 0) {
      // 第一个元素就为0, 判断右边是否等于 0
      if(i === 0 && array[i+1] === 0) {
        max++
        i++
      }else if(array[i-1] === 0 && array[i+1] === 0) {
        max++
        i++
      }
    }
  }
  return max >= number
}
```
## 格雷编码

```ts
// ------ 格雷编码 ---------
/*
1: 0 1
2: 00 01 11 10
3  000 001 011 010 110 111 101 100
返回数组长度为 2^n, 第一位数字 按数组长度/2, 前半部分为0, 后半部分为1。后面的数字为 n-1时的结果并首位对应
*/
function grey_code(n: number): string [] {
  if(n === 1) return ['0', '1']
  const prev = grey_code(n - 1)
  const result = []
  const max = Math.pow(2, n) - 1;
  for(let i = 0; i < prev.length; i++) {
    result[i] = `0${prev[i]}`
    result[max-i] = `1${prev[i]}`
  }
  return result
}

console.log(grey_code(2)) // ['00', '01', '11', '10']
console.log(grey_code(3)) // ['000', '001', '011', '010', '110', '111', '101', '100']
console.log(grey_code(4))
// ['0000', '0001', '0011', '0010', '0110', '0111', '0101', '0100', '1100', '1101',
// '1111', '1110', '1010', '1011', '1001', '1000']
```
