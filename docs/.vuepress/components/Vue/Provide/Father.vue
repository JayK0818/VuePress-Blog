<template>
  <div>
    父组件: {{count}} - {{double}}
    <n-button
      @click.stop='increment'
      type='primary'
      size='small'
    >click</n-button>
  </div>
  <child/>
</template>

<script lang="ts">
import { defineComponent, computed, provide, ref } from 'vue'
// @ts-ignore
import Child from './Child.vue'

export default defineComponent({
  name: 'ProvideFather',
  components: {
    [Child.name]: Child
  },
  data() {
    return {
      count: 1
    }
  },
  provide() { // 访问组件实例的property,需要将provide转换为返回对象的函数
    return {
      // 使传递的number 是响应式的
      number: computed(() => this.count)
    }
  },
  methods: {
    increment() {
      this.count += 1
      this.times += 1
    }
  },
  setup() {
    const times = ref<number>(1)
    const double = computed(() => times.value * 2)
    // provide 传递两个参数, name和value
    provide('times', double)
    return {
      double,
      times
    }
  }
})
</script>
