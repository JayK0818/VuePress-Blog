<template>
  <canvas ref="canvas" class="canvas"></canvas>
</template>

<script lang='ts'>
import { defineComponent, ref, onMounted } from 'vue'

function paddingLeftZero(s: number | string): string {
  return ('00'+s).substring(s.toString().length)
}
export default defineComponent({
  name: 'Home',
  setup () {
    const canvas = ref<null | HTMLCanvasElement>(null)
    onMounted(() => {
      const width = window.innerWidth
      const height = window.innerHeight
      if(!canvas.value) return
      canvas.value.width = width
      canvas.value.height = height
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
      const date_string = get_date_string()
      ctx.font = "32px serif"
      ctx.fillStyle = '#fff'
      ctx.fillText(date_string, 100, 200)
      const time_string = get_time_string()
      ctx.fillText(time_string, 100, 300)
    }
    return {
      canvas
    }
  }
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
