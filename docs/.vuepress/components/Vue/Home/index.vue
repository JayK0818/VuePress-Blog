<template>
  <canvas ref="canvas" class="canvas" @click='click'></canvas>
<!--   <div class="footer">
    <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">浙ICP备20001796号-1</a>
  </div> -->
</template>

<script lang='ts' setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
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
  set_canvas_size()
  timer.value = window.setInterval(() => {
    draw_text()
  }, 1000)
  window.addEventListener('resize', listen_resize, false)
})
const get_date_string = () => { // 获取默认日期
  const [year, month, date] = new Date().toLocaleDateString().split('/')
  return `${year}年${paddingLeftZero(month)}月${paddingLeftZero(date)}日`
}
const get_time_string = () => {
  return new Date().toLocaleTimeString()
}
const set_canvas_size = ():void => {
  nextTick(() => {
    const width = window.innerWidth
    const height = window.innerHeight
    const rate = window.devicePixelRatio
    if(!canvas.value) return
    canvas.value.width = Math.round(width * rate)
    canvas.value.height = Math.round(height * rate)
    canvas.value.style.width = `${width}px`
    canvas.value.style.height = `${height}px`
    window_width.value = width
    window_height.value = height
    const ctx = canvas.value.getContext('2d')
    ctx?.scale(rate, rate)
    draw_text()
  })
}

const listen_resize = ():void => {
  set_canvas_size()
}

const draw_text = () => {
  if(!canvas.value) return
  const ctx = canvas.value.getContext('2d')
  if(!ctx) return
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
  const date_string = get_date_string()
  ctx.font = "1.6rem serif"
  ctx.fillStyle = '#fff'
  ctx.textAlign = 'center'
  ctx.fillText(date_string, window_width.value/2, window_height.value/2- 20)
  ctx.font = '1.6rem serif';
  const time_string = get_time_string()
  ctx.fillText(time_string, window_width.value/2, window_height.value/2 + 40)
  ctx.font = '2.4rem serif';
  ctx.fillText('What next to do ?', window_width.value/2, window_height.value/2 + 100)
}
const click = () => {
  router.push('/front-end/css/box')
}
onBeforeUnmount(() => {
  if(timer.value) clearInterval(timer.value)
  window.removeEventListener('resize', listen_resize, false)
})
</script>
<style lang="scss">
.canvas{
  position: fixed;
  left: 0;
  top: 0;
  background-color:#000;
}
.footer {
  position:absolute;
  left:0;
  right:0;
  bottom: 15px;
  text-align: center;
  a{
    font-weight: normal;
    color: rgba(255, 255, 255,.8);
    font-size: 14px;
  }
}
</style>
