# 盛最多水的容器

  给定一个长度为 n 的整数数组 height, 有n条垂线, 第i 条线的两个端点是 (i,0) 和 (i, height[i])。找出其中的两条线,使得它们与
  x轴共同构成的容器可以容纳最多的水。 返回容器可以储存的最大水量。

**解法一**

  双层for循环, 依次遍历 当前位置的高度 和 剩余 高度 所能盛水的最大水量, 保存最大值返回。但是在测试时因为复杂度过高 没有通过, 此法不通
```ts
const max_water = (array: number[]) : number => {
  const length = array.length;
  let max = 0
  for (let i = 0; i < length - 1; i++) {
    const start = array[i]
    for (let j = i + 1; j < length; j++) {
      const end = array[j]
      let s = 0
      if (end >= start) {
        s = (j - i) * start
      } else {
        s = (j - i)  * end
      }
      if (s > max) max = s
    }
  }
  return max
}
```

**解法二**

  利用双指针, 依次比较首 尾 指针所对应的数值, 哪个指针对应的数值小 就移动哪个指针。直到两个指针相遇!
```ts
const max_water = (array: number[]) : number => {
  let start = 0
  let end = array.length - 1
  let max = 0
  while(start < end) {
    let s = 0
    if (array[start] < array[end]) {
      s = array[start] * (end - start)
      start += 1
    } else {
      s = array[end] * (end - start)
      end -= 1
    }
    if (s > max) {
      max = s
    }
  }
  return max
}
```