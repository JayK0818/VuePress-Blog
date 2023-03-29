<template>
  <div class="select-header">
    <n-select :options='select_options' v-model:value='direction' class='select'/>
    <span class="text">dense</span>
    <n-checkbox v-model:checked='dense'/>
  </div>
  <div class='container'
    :style='{
      ...computed_style
    }'
  >
    <div
      class="item"
      v-for='(item,i) in colors'
      :style='{
        background: item
      }'
      :key='i'
      :class='"item-"+(i+1)'
    >{{i+1}}</div>
  </div>
</template>

<script lang='ts' setup>
import { ref, computed } from 'vue'
type SelectOption = {
  label: string;
  value: number
}
const colors = ref<string[]>(['#f00', '#ff8c00', '#00b03b', '#0071c8', '#cc6cb1'])
const dense = ref<boolean>(false)
const select_options = ref<SelectOption[]>([
  {
    label: 'row',
    value: 1
  },
  {
    label: 'column',
    value: 2
  }
])
const direction = ref<number>(1)
const computed_style = computed(() => {
  const find_option = select_options.value.find(item => item.value === direction.value)
  if(!find_option) return
  if(dense.value) {
    return {
      'grid-auto-flow': `${find_option.label} dense`
    }
  } else {
    return {
      'grid-auto-flow': find_option.label
    }
  }
})
</script>
<style lang="scss" scoped>
.select-header{
  display: flex;
  align-items: center;
  padding: 10px 0;
  .select{
    width: 120px;
  }
  .text{
    margin-left: 30px;
  }
}
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  width: 20rem;
  height: 20rem;
  border: 1px solid #e8e8e8;
  .item{
    height: 5rem;
    font-size: 30px;
    text-align: center;
    line-height: 5rem;
    font-weight: bold;
  }
  .item-1{
    grid-column-start: 2;
    grid-column-end: 4;
  }
}
@media screen and (max-width: 768px) {
  .select-header{
    .select{
      flex: 1;
      min-width: 0;
    }
  }
  .container{
    width: 100%;
  }
}
</style>
