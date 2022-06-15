<template>
  <div class="select-container">
    <span class="text">Justify-Items</span>
    <a-select class='select' :options='select_options' v-model:value='justify'/>
    <span class="text">Align-Items</span>
    <a-select class='select' :options='select_options' v-model:value='align'/>
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

<script lang='ts'>
import { defineComponent, ref, computed } from 'vue'
import { Select } from 'ant-design-vue'

type SelectOption = {
  label: string
  value: number
  disabled?: boolean
}

export default defineComponent({
  name: 'grid-items',
  components: {
    [Select.name]: Select,
    [Select.Option.name]: Select.Option
  },
  setup () {
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
    return {
      colors,
      select_options,
      justify,
      align,
      justify_style,
      align_style
    }
  }
})
</script>
<style lang="scss" scoped>
.container{
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  // column-gap: 5px;
  // row-gap: 5px;
  width: 300px;
  height: 300px;
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
  padding: 10px 0;
  .text{
    padding-right: 5px;
    color: #878787;
    &:nth-of-type(2) {
      margin-left: 30px;
    }
  }
  .select{
    width: 120px;
  }
}
</style>
