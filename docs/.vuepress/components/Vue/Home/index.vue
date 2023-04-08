<template>
  <canvas ref="canvas" class="canvas" @click='click'></canvas>
</template>

<script lang='ts' setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

function paddingLeftZero(s: number | string): string {
  return ('00'+s).substring(s.toString().length)
}
const canvas = ref<null | HTMLCanvasElement>(null)
const timer = ref<number>(0)
const window_width = ref<number>(0)
const window_height = ref<number>(0)
const router = useRouter()
onMounted(() => {
  const width = window.innerWidth
  const height = window.innerHeight
  if(!canvas.value) return
  canvas.value.width = width
  canvas.value.height = height
  window_width.value = width
  window_height.value = height
  timer.value = window.setInterval(() => {
    draw_text()
  }, 1000)
  draw_text()
})
const get_date_string = () => { // 获取默认日期
  const [year, month, date] = new Date().toLocaleDateString().split('/')
  return `${year}年${paddingLeftZero(month)}月${paddingLeftZero(date)}日`
}
const get_time_string = () => {
  return new Date().toLocaleTimeString()
}
const draw_text = () => {
  if(!canvas.value) return
  const ctx = canvas.value.getContext('2d')
  if(!ctx) return
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
  const date_string = get_date_string()
  ctx.font = "24px serif"
  ctx.fillStyle = '#fff'
  ctx.textAlign = 'center'
  ctx.fillText(date_string, window_width.value/2, window_height.value/2- 10)
  ctx.font = '32px serif';
  const time_string = get_time_string()
  ctx.fillText(time_string, window_width.value/2, window_height.value/2 + 40)
  ctx.font = '48px serif';
  ctx.fillText('What next to do ?', window_width.value/2, window_height.value/2 + 100)
}
const click = () => {
  router.push('/front-end/javascript/bom')
}
onBeforeUnmount(() => {
  if(timer.value) clearInterval(timer.value)
})
</script>
<style lang="scss" scoped>
.canvas{
  position: fixed;
  left: 0;
  top: 0;
  background-color:#000;
}
</style>
