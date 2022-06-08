# 排序

## 冒泡排序

```ts
// 两个相邻的数比较大小，将两个数中较大的数往右边放，小的往左边放(从小到大)
const array = [10, 8 ,9, 3, 2, 5, 7, 4, 1, 6]
function sort(array: number[]): number[] {
  // 外层循环控制循环次数
  for(let i = array.length - 1; i > 0; i--) {
    for(let j = 0; j < i; j++) {
      const temp = array[j]
      if(temp > array[j+1]) {
        array[j] = array[j+1]
        array[j+1] = temp
      }
    }
  }
  return array
}
console.log(sort(array))
//  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

## 选择排序

  遍历数组, 每项和数组剩余部分元素比较, 是否有比当前元素更小的值, 如果有的话就交换位置
```ts
// ----- 选择排序 -------
function select(array: number[]): number[] {
  for(let i = 0, length = array.length; i < length; i++) {
    const min = array[i]
    // const index = array.slice(i+1).findIndex(item => item < min)
    // 判断剩下的部分最小值是否比min 还要小
    const remaining_array = array.slice(i+1)
    const remaining_min = Math.min.call(null, ...remaining_array)
    if(remaining_min < min) {
      const index = remaining_array.findIndex(item => item === remaining_min)
      if(index >= 0) {
        array[i] = remaining_min;
        array[i+index+1] = min;
      }
    }
  }
  return array
}
const array = [10, 8 ,9, 3, 2, 5, 7, 4, 1, 6]
console.log(select(array))  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// 在网上看到另一个选择排序方法
function select_2(array: number[]): number[] {
  for(let i = 0, length = array.length; i < length; i++) {
    let min = array[i]
    for(let j = i+1; j < array.length; j++) {
      if(array[j] < min) {
        let c = min
        min = array[j]
        array[j] = c
      }
    }
    array[i] = min
  }
  return array
}
console.log(select_2([3,2,5,4,3,6,4,3]))
// [3 ,5, 2, 1, 6, 4]
// min = 3

// min = 2
// [3, 5, 3, 1, 6, 4]

// min = 1
// [3, 5, 3, 2, 6, 4]
// [1, 5, 3, 2, 6, 4]

// min = 5

// min = 3
// [1, 5, 5, 2, 6, 4]

// min = 2
// [1, 5, 5, 3, 6, 4]
// [1, 2, 5, 3, 6, 4]


// min = 5

// min = 3
// [1, 2, 5, 5, 6, 4]
// [1, 2, 3, 5, 6, 4]

// min = 5
// min = 4
// [1, 2, 3, 5, 6, 5]
// [1, 2, 3, 4, 6, 5]

// min = 6
// min = 5
// [1, 2, 3, 4, 6, 6]
// [1, 2, 3, 4, 5, 6]
```

## 快速排序

  流程: 首先假定一个分界值, 通过该分界值将数组分成左右两个部分。将大于或者等于分界值的数放在右边
  小于分界值的数放在左边. 然后左右两边的数据可以独立排序.重复上面的操作。

```ts
// ------ 快速排序 使用splice ---------
function quickSpliceSort(array:number[]): number [] {
  const length = array.length;
  if(length === 0) return []
  const middleIndex = Math.floor(length / 2)
  const middleValue = array.splice(middleIndex, 1)[0]
  const left:number[] = [], right:number[] = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i] < middleValue) {
      left.push(array[i])
    }else{
      right.push(array[i])
    }
  }
  return quickSpliceSort(left).concat([middleValue], quickSpliceSort(right))
}

const arr:number [] = [1,4,3,5,7,2,6,9,8]
quickSpliceSort(arr) // [1, 2, 3, 4, 5, 6, 7, 8, 9]


// ----- 使用slice方法 -------
function quickSliceSort(array: number[]):number [] {
  const length = array.length
  if(length === 0) return []
  const middleIndex = Math.floor(length / 2)
  const middleValue = array.slice(middleIndex, middleIndex+1)[0]
  const left:number[] = [], right:number[] = [];
  for(let i = 0; i < length; i++) {
    if(i === middleIndex) continue
    if(array[i] < middleValue) {
      left.push(array[i])
    }else{
      right.push(array[i])
    }
  }
  return quickSort(left).concat([middleValue], quickSort(right))
}
const arr:number [] = [1,4,3,5,7,2,6,9,8]
quickSliceSort(arr) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
