# 三数之和

  给你一个整数数组 nums, 判断是否存在三元组 [nums[i], nums[j], nums[k]] 同时满足 i!=j i!=k j != k 同时还满足 nums[i] + nums[j] + nums[k] = 0。

```js
nums = [-1,0,1,2,-1,-4]   // 输出 [[-1,-1,2],[-1,0,1]]

// 解释
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0
```