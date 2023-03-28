<template>
  <div class='child-container'>
    <span>子组件: {{count}}</span>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
defineProps({
  count: {
    type: Number,
    required: true
  }
})
</script>
<style lang="scss" scoped>
.child-container{
  padding-top:5px;
}
</style>
