# 找到K个最接近的元素

  给定一个 **排序好** 的数组 *arr*, 两个整数 **k** 和 **x**, 从数组中找到最靠近 **x** (两数之差最小) 的 *k*个数。返回的结果必须 要是按升序排好的。

  整数 *a* 比整数 *b* 更接近 *x* 需要满足:
- | a - x | < | b - x | 或者
- | a - x | === | b - x | 且 *a < b*

**解法一**

```ts
const closest_array = (nums: number[], k: number, x: number) => {
  let start = 0
  let end = arr.length - k
  while (start < end) {
    const mid = Math.floor((start + end) / 2)
    if ((x - arr[mid]) <= (arr[mid+k] - x)) {
      end = mid
    } else {
      start = mid + 1
    }
  }
  return arr.slice(start, start + k)
}
```
:::tip
因为题目描述里 判断整数 *a* 和 *b*  更接近 *x* 时 使用的是绝对值, 下述判断有一个测试用例无法通过, 暂不确定原因在哪里。
```ts
const closest_array = (nums: number[], k: number, x: number): number => {
  let start = 0
  let end = nums.length - k
  while (start < end) {
    const mid = Math.floor((start + end) / 2)
    if (Math.abs(nums[mid] - x) <= Math.abs(nums[mid + k] - x)){
      end = mid
    } else {
      start = mid + 1
    }
  }
  return nums.slice(start, start + k)
}
```
:::