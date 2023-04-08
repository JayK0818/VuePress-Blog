<template>
  <div class="select-container">
    <n-select class='select' :options='select_options' v-model:value='justify'/>
    <n-select class='select' :options='select_options' v-model:value='align'/>
  </div>
  <div class='container' :style='{
    ...align_style,
    ...justify_style
  }'>
    <div
    class="item" v-for='(item, i) in colors'
    :style='{
      background: item,
    }' :key='item'>{{i+1}}</div>
  </div>
</template>

<script setup lang='ts'>
import { ref, computed } from 'vue'

type SelectOption = {
  label: string
  value: number
  disabled?: boolean
}

const colors = ['#f00', '#ff8c00', '#00b03b', '#0071c8', '#cc6cb1', '#fdd394', '#b5aa79', '#cae9a2', '#00c8f2']
const justify = ref<number>(1)
const align = ref<number>(1)
const select_options = ref<SelectOption[]>([
  {
    value: 0,
    label: '对齐方式',
    disabled: true
  },
  {
    label: 'start',
    value: 1
  },
  {
    label: 'center',
    value: 2
  },
  {
    label: 'end',
    value: 3
  }
])
const justify_style = computed(() => {
  const find_justify = select_options.value.find(item => item.value === justify.value)
  if(find_justify) {
    return {
      justifyItems: find_justify.label
    }
  }
})
const align_style = computed(() => {
  const find_align = select_options.value.find(item => item.value === align.value)
  if(find_align) {
    return {
      alignItems: find_align.label
    }
  }
})
</script>
<style lang="scss" scoped>
.container{
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  width: 20rem;
  height: 20rem;
  border: 1px solid #e8e8e8;
  box-sizing: content-box;
  .item {
    width: 60px;
    height: 60px;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    line-height: 60px;
  }
}
.select-container{
  display: flex;
  padding: 10px 0;
  .select{
    margin-right: 20px;
    width: 150px;
    border-radius: 0!important;
  }
}
@media screen and (max-width: 768px) {
  .select-container{
    display: block;
    .select{
      margin-right: 0;
      margin-top: 10px;
      width: 100%;
    }
  }
  .container{
    width: 100%;
  }
}
</style>
