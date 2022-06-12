<template>
  <div class='container'>
    <span class="title">Flex-Direction</span><a-select :options='directions' v-model:value='direction' style='width: 200px;'/>
    <div class="flex-container" :style='direction_style'>
      <div v-for='i in 3' class='item' :key='i'>{{i}}</div>
    </div>
  </div>
  <div class="container">
    <span class="title">Align-Items</span><a-select :options='justifys' v-model:value='justify' style='width: 200px;'/>
    <div class="flex-container" :style='justify_style'>
      <div v-for='i in 3' class='item' :key='i'>{{i}}</div>
    </div>
  </div>
  <div class="container">
    <span class="title">Align-Content</span><a-select :options='items' v-model:value='item' style='width: 200px;'/>
    <div class="flex-container items-container" :style='item_style'>
      <div class="item item1">1</div>
      <div class="item item2">2</div>
      <div class="item item3">3</div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, computed } from 'vue'
import { Select } from 'ant-design-vue'

interface SelectOption {
  label: string
  value: number
  disabled?: boolean
}

export default defineComponent({
  setup () {
    const direction = ref<number>(1)
    const directions = ref<SelectOption[]>([
      {
        label: 'Flex-Direction',
        value: 0,
        disabled: true
      },
      {
        label: 'row',
        value: 1
      },
      {
        label: 'row-reverse',
        value: 2
      },
      {
        label: 'column',
        value: 3
      },
      {
        label: 'column-reverse',
        value: 4
      }
    ])
    const justify = ref<number>(1)
    const justifys = ref<Selection[]>([
      {
        label: 'Justify-Content',
        value: 0,
        disabled: true
      },
      {
        value: 1,
        label: 'flex-start'
      },
      {
        value: 2,
        label: 'flex-end'
      },
      {
        value: 3,
        label: 'center'
      },
      {
        value: 4,
        label: 'space-between'
      },
      {
        value: 5,
        label: 'space-around'
      }
    ])
    const items = ref<SelectOption[]>([
      {
        label: 'Align-Items',
        value: 0,
        disabled: true
      },
      {
        label: 'flex-start',
        value: 1
      },
      {
        label: 'flex-end',
        value: 2
      },
      {
        label: 'center',
        value: 3
      },
      {
        label: 'stretch',
        value: 4
      }
    ])
    const item = ref<number>(0)
    const direction_style = computed(() => {
      const find_direction = directions.value.find(item => item.value === direction.value)
      if(!find_direction) return null
      return {
        flexDirection: find_direction.label
      }
    })

    const justify_style = computed(() => {
      const find_justify = justifys.value.find(item => item.value === justify.value)
      if(!find_justify) return null
      return {
        'justifyContent': find_justify.label
      }
    })

    const item_style = computed(() => {
      const find_item = items.value.find(s => s.value === item.value)
      if(!find_item) return null
      return {
        'alignItems': find_item.label
      }
    })

    return {
      direction, directions, direction_style,
      justifys, justify, justify_style,
      items, item, item_style
    }
  }
})
</script>
<style lang="scss" scoped>
.container{
  padding: 15px 0;
  .title{
    display: inline-block;
    color:#000;
    width: 100px;
  }
}
.flex-container{
  margin-top: 2px;
  display: flex;
  padding: 10px 0;
  border: 1px solid #d9d9d9;
}
.item{
  margin: 0 5px 0 0;
  width: 60px;
  height: 60px;
  background-color: #2db7f5;
  text-align: center;
  line-height: 60px;
  color: #fff;
}
.items-container{
  height: 150px;
  .item1{
    height: 40px;
    line-height: 40px;
  }
  .item3{
    height: 80px;
    line-height: 80px;
  }
}
</style>
