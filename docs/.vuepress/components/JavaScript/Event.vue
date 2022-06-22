<template>
  <div class='container'>
    <div>
      <div class="title">事件捕获触发</div>
      <div class="box1" ref='box_1'>
        <div class="box2" ref='box_2'>
          <div class="box3" ref='box_3'></div>
        </div>
      </div>
    </div>
    <div>
      <div class="title">事件冒泡触发</div>
      <div class="box1" ref='box_4'>
        <div class="box2" ref='box_5'>
          <div class="box3" ref='box_6'></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, nextTick, onUnmounted } from 'vue'

export default defineComponent({
  setup() {
    const box_1 = ref(null)
    const box_2 = ref(null)
    const box_3 = ref(null)
    const box_4 = ref(null)
    const box_5 = ref(null)
    const box_6 = ref(null)

    function listener_1() {
      window.$message.success('box1...')
    }
    function listener_2() {
      window.$message.success('box2...')
    }
    function listener_3(){
      window.$message.success('box3...')
    }
    onMounted(() => {
      nextTick(() => {
        box_1.value.addEventListener('click', listener_1, true)
        box_2.value.addEventListener('click', listener_2, true)
        box_3.value.addEventListener('click', listener_3, true)

        box_4.value.addEventListener('click', listener_1, false)
        box_5.value.addEventListener('click', listener_2, false)
        box_6.value.addEventListener('click', listener_3, false)
      })
    })

    onUnmounted(() => {
      nextTick(() => {
        if(!box_1.value) return
        box_1.value.removeEventListener('click', listener_1, true)
        box_2.value.removeEventListener('click', listener_2, true)
        box_3.value.removeEventListener('click', listener_3, true)

        box_4.value.removeEventListener('click', listener_1, false)
        box_5.value.removeEventListener('click', listener_2, false)
        box_6.value.removeEventListener('click', listener_3, false)
      })
    })
    return {
      box_1, box_2, box_3,
      box_4, box_5, box_6
    }
  }
})
</script>
<style lang="scss" scoped>
.container{
  display:flex;
  justify-content:space-between;
}
.title{
  color:#000;
}
.box1{
  display:flex;
  align-items:center;
  justify-content:center;
  width: 10rem;
  height: 10rem;
  background-color:#0071c8;
  cursor:pointer;
}
.box2{
  display:flex;
  align-items:center;
  justify-content:center;
  width:7rem;
  height: 7rem;
  background-color:#ff8c00;
  cursor:pointer;
}
.box3{
  width:3rem;
  height:3rem;
  background-color:#00b03b;
  cursor:pointer;
}
</style>
