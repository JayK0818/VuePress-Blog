<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted } from 'vue'
import md5 from 'md5'

const key = md5('__VUEPRESS_REFRESH__')

export default defineComponent({
  setup() {
    onMounted(() => {
      const flag = JSON.parse(window.sessionStorage.getItem(key)) || false
      if(!flag) {
        window.sessionStorage.setItem(key, JSON.stringify(true))
        window.location.reload()
      }
    })
    onBeforeUnmount(() => {
      window.sessionStorage.setItem(key, JSON.stringify(false))
    })
  }
})
</script>
