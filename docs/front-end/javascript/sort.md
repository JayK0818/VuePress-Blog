# 排序

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
