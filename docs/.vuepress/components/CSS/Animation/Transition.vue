<template>
  <div class='container'>
    <div v-for='item in box_list'
    :class='{
      box: true,
      ["box-"+item.value]: true
    }'
    :style='{
      backgroundColor: item.color
    }'
    :ref='setBoxRef'
    >{{item.label}}</div>
  </div>
  <n-button type='primary' @click='handle_transition' size='small' style='margin-bottom: 10px;'>click</n-button>
  <div>下面的案例来自MDN, 鼠标放到div上 多个属性发生变化。</div>
  <div class="animation-container"></div>
</template>

<script lang='ts'>
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'
import { NButton } from 'naive-ui'
export default defineComponent({
  name: 'css-transition',
  components: {
    [NButton.name]: NButton
  },
  setup () {
    const refList = ref<HTMLElement>([])
    const box_list = ref<{label: string, value: value, color: string }[]>([
      {
        label: 'linear',
        value: 1,
        color: 'pink'
      },
      {
        label: 'ease',
        value: 2,
        color: 'skyblue'
      },
      {
        label: 'ease-in',
        value: 3,
        color: 'green'
      },
      {
        label: 'ease-out',
        value: 4,
        color: 'blue'
      },
      {
        label: 'ease-in-out',
        value: 5,
        color: 'orange'
      },
      {
        label: 'cubic-bezier',
        value: 6,
        color: 'seagreen'
      }
    ])
    const setBoxRef = (element) => {
      if (element) {
        refList.value.push(element)
      }
    }
    const handle_transition = () => {
      refList.value.forEach(box => {
        box.classList.add('start')
      })
    }
    const listen_animation = (event) => {
      event.target.classList.remove('start')
    }
    onMounted(() => {
      refList.value.forEach(item => {
        item.addEventListener('transitionend', listen_animation, false)
      })
    })
    onBeforeUnmount(() => {
      refList.value.forEach(item => {
        item.removeEventListener('transitionend', listen_animation, false)
      })
    })
    return {
      box_list,
      setBoxRef,
      handle_transition
    }
  }
})
</script>

<style lang='scss' scoped>
.container {
  padding-bottom: 10px;
}
.box {
  margin-bottom: 5px;
  position: relative;
  width: 120px;
  height: 40px;
  text-align: center;
  color:#fff;
  line-height: 40px;
  left: 0;
  transition-property: left;
  transition-duration: 3000ms;
}
.box-1 {
  transition-timing-function: linear;
}
.box-2 {
  transition-timing-function: ease;
}
.box-3 {
  transition-timing-function: ease-in;
}
.box-4 {
  transition-timing-function: ease-out;
}
.box-5 {
  transition-timing-function: ease-in-out;
}
.box-6 {
  transition-timing-function: cubic-bezier(.29, .49, 1, .5);
}
.start {
  left: calc(100% - 120px);
}

// animation-container
.animation-container{
  width: 100px;
  height: 100px;
  background-color: #0ff;
  border:1px solid #e8e8e8;
  transition: width 2s, height 2s, background-color 2s, transform 2s;
  &:hover {
    background-color: #fcc;
    width: 200px;
    height: 200px;
    transform: rotate(180deg)
  }
}
</style>
