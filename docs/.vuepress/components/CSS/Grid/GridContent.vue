<template>
  <div class="select-header">
    <a-select
      :options='select_options'
      class='select'
      v-model:value='justify'
    />
    <a-select
      class='select'
      :options='select_options'
      v-model:value='align'
    />
  </div>
  <div
    class='container'
    :style='{
      ...justify_style,
      ...align_style
    }'
  >
    <div
      class="item"
      v-for='(item, i) in colors'
      :key='i'
      :style='{
        background: item
      }'
    >{{i+1}}</div>
  </div>
</template>

<script lang='ts' setup>
import { ref, computed } from 'vue'
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
  },
  {
    label: 'space-between',
    value: 4
  },
  {
    label: 'space-around',
    value: 5
  },
  {
    label: 'space-evenly',
    value: 6
  }
])
const justify_style = computed(() => {
  const find_style = select_options.value.find(item => item.value === justify.value)
  if(find_style) {
    return {
      justifyContent: find_style.label
    }
  }
})
const align_style = computed(() => {
  const item_style = select_options.value.find(item => item.value === align.value)
  if(item_style) {
    return {
      alignContent: item_style.label
    }
  }
})
</script>
<style lang="scss" scoped>
.select-header{
  padding: 8px 0;
  display: flex;
  .select{
    margin-right: 10px;
    width: 200px;
    border-radius: 0!important;
  }
}
.container{
  display: grid;
  width: 40rem;
  height: 20rem;
  grid-template-columns: repeat(3, 5rem);
  grid-template-rows: repeat(3, 5rem);
  border: 1px solid #e8e8e8;
  box-sizing: content-box;
  .item{
    text-align: center;
    font-weight: bold;
    text-align: center;
    line-height: 5rem;
    font-size: 30px;
  }
}
@media screen and (max-width: 768px) {
  .select-header{
    display: block;
    .select{
      width: 100%;
      margin-right: 0;
      margin-top: 10px;
    }
  }
  .container{
    width: 100%;
  }
}
</style>
