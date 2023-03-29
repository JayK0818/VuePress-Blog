<template>
  <div class='container'>
    <n-select :options='directions' v-model:value='direction' class='select'/>
    <div class="flex-container" :style='direction_style'>
      <div v-for='i in 3' class='item' :key='i'>{{i}}</div>
    </div>
  </div>
  <div class="container">
    <n-select :options='justifys' v-model:value='justify' class='select'/>
    <div class="flex-container" :style='justify_style'>
      <div v-for='i in 3' class='item' :key='i'>{{i}}</div>
    </div>
  </div>
  <div class="container">
    <n-select :options='items' v-model:value='item' class='select'/>
    <div class="flex-container items-container" :style='item_style'>
      <div class="item item1">1</div>
      <div class="item item2">2</div>
      <div class="item item3">3</div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { ref, computed } from 'vue'

interface SelectOption {
  label: string
  value: number
  disabled?: boolean
}
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
const justifys = ref<SelectOption[]>([
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
  const find_style = directions.value.find(item => item.value === direction.value)
  if (find_style) {
    return {
      flexDirection: find_style.label
    }
  }
})

const justify_style = computed(() => {
  const find_style = justifys.value.find(item => item.value === justify.value)
  if(find_style) {
    return {
      justifyContent: find_style.label
    }
  }
})

const item_style = computed(() => {
  const find_item = items.value.find(s => s.value === item.value)
  if(!find_item) return null
  return {
    'alignItems': find_item.label
  }
})
</script>
<style lang="scss" scoped>
.container{
  padding: 15px 0;
  .select{
    width: 300px;
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
  width: 4rem;
  height: 4rem;
  background-color: #2db7f5;
  text-align: center;
  line-height: 60px;
  color: #fff;
}
.items-container{
  height: 8rem;
  .item1{
    height: 2rem;
    line-height: 2rem;
  }
  .item3{
    height: 3rem;
    line-height: 3rem;
  }
}
@media screen and (max-width: 768px) {
  .container {
    .select{
      width: 100%;
    }
  }
}
</style>
