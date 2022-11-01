# 删除有序数组中的重复项

  给你一个 **升序排列**, 请你 **原地** 删除重复出现的元素, 使每个元素 **只出现一次**, 返回删除后数组的新长度。 元素的 **相对顺序** 应保持一致。

```js
nums = [1, 1, 2]
// 输出 [1, 2]

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// 输出 [0, 1, 2, 3, 4]
```
**解法一**

  使用一个对象保存数组项, 循环时判断当前项 是否 在之前已经存在过, 如果存在的话 则删除此项。

```ts
const remove_repeat_item = (array: number[]) : number => {
  const map: { [key: string]: boolean } = {}
  // 注意不能保存数组的长度, 因为遍历时会修改数组, 长度会变
  for (let i = 0; i < array.length; i++) {
    const item = array[i]
    if (map[item]) {
      array.splice(i, 1)
      i -= 1
    } else {
      map[item] = true
    }
  }
  return array.length
}
```

**解法二**

  判断数组的前后两个数字是否相等

```ts
const remove_repeat_item = (array: number[]) : number => {
  for (let i = 0; i < array.length - 1; i++) {
    const cur = array[i]
    const next = array[i+1]
    if (cur === next) {
      array.splice(i, 1)
      i -= 1
    }
  }
  return array.length
}
```