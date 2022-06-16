# 移动端

## 像素

  逻辑像素/物理像素/设备像素比

1. 逻辑像素: 也叫 设备独立像素(CSS像素), 保证不同设备下元素的尺寸是相同的。 例子: iPhone下的逻辑像素是375px。
2. 物理像素: 即设备屏幕实际拥有的像素点. iPhone6 下的物理像素为 750px。
3. 设备像素比: 物理像素除以逻辑像素, window.devicePixelRatio来获取设备像素比。

## viewport

  viewport 它提供有关视口初始大小的提示,仅供移动设备使用。

1. width:           以pixels为单位,定义viewport的宽度。(device-width)
2. height:          以pixels为单位,定义viewport的高度 (device-height)
3. initial-scale:  定义设备宽度与视口大小之间的缩放比率
4. maximum-scale:  定义缩放的最大值
5. minimum-scale:  定义缩放的最小值
6. user-scalable:  如果设置为no,用户将不能放大或缩小网页。
