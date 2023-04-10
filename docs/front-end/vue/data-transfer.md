# 组件通信

## props / emit

  父组件可以通过props向子组件传递数据, 子组件通过emit触发一个事件,然后父组件监听这个事件获取传递过来的数据。

### props 

```vue
<!-- parent.vue -->
<template>
  <div>
    父组件: {{count}} 
    <a-button 
      @click.stop='add' 
      type='primary' size='small'
    >click</a-button>
  </div>
  <child :count='count'/>
</template>

<script lang='ts'>
  export default defineComponent({
    name:'Father',
    components: {
      [Child.name]: Child,
      [Button.name]: Button
    },
    setup () {
      const count = ref<number>(0)
      const add = () => {
        count.value += 1
      }
      return {
        count,
        add
      }
    }
  })
</script>


<!-- child.vue -->
<template>
  <div class='child-container'>
    <span>子组件: {{count}}</span>
  </div>
</template>

<script lang='ts'>
export default defineComponent({
  name:'Child',
  props: {
    count: {
      type: Number,
      required: true
    }
  }
})
</script>
```
<ClientOnly>
  <Vue-PropFather/>
</ClientOnly>

### emit

<ClientOnly>
  <Vue-EmitFather/>
</ClientOnly>

```vue
<!-- parent.vue -->
<template>
  <div>父组件: {{count}}</div>
  <child @increment='increment'/>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import Child from './Child.vue'

export default defineComponent({
  name: 'father',
  components: {
    [Child.name]: Child
  },
  setup () {
    const count = ref<number>(1)
    const increment = (payload): void => {
      count.value = payload;
    }
    return {
      count, increment
    }
  }
})
</script>

<!-- child.vue -->
<template>
  <div>
    子组件:
    {{count}}
    <a-button 
      type='primary' 
      size='small' @click.stop='add'
    >click</a-button>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import { Button } from 'ant-design-vue'
export default defineComponent({
  name: 'child',
  components: {
    [Button.name]: Button
  },
  emits:['increment'],
  setup (props, context) {
    const count = ref<number>(1)
    const add = ():void => {
      count.value += 1
      context.emit('increment', count.value)
    }
    return {
      count, add
    }
  }
})
</script>
```
## Provide / Inject

  在一些深度嵌套的组件中, 深层次的子组件只需要父组件的部分内容, 如果通过prop 沿着组件链逐级传递下去,会很麻烦。
  对于这种情况,可以使用provide/inject。父组件通过provide提供数据, 子组件通过inject选项来使用数据。

  下面的案例 左侧使用的是 props选项, 右侧使用的是setup实现。

<ClientOnly>
  <Vue-ProvideFather/>
</ClientOnly>

```vue
<!-- father -->
<template>
  <div>
    父组件: {{count}} - {{double}}
    <a-button
      @click.stop='increment'
      type='primary'
      size='small'
    >click</a-button>
  </div>
  <child/>
</template>

<script lang='ts'>
import { defineComponent, computed, provide, ref } from 'vue'
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

// child.vue
<template>
  <div>
    子组件: {{number}} - {{double}}
  </div>
</template>

<script lang='ts'>
import { defineComponent, inject } from 'vue'
export default defineComponent({
  name: 'child',
  inject: ['number'],
  setup() {
    const double = inject('times')
    return {
      double
    }
  }
})
</script>
```

## 事件车

- 在Vue2.x中的实现
```js
// 实际就是重新 创建一个vue对象用来触发和监听事件。
const bus = new Vue({})

/*A.vue*/
export default {
  name:'ComponentA',
  methods: {
    click() {
      this.$emit('update', {
        message:'hello world'
      })
    }
  }
}

/*B.vue*/
export default {
  name: 'ComponentB',
  created() {
    this.$on('update', (data) => {
      console.log(data)
    })
  }
}
```

- 在Vue3.x中的实现
  
  因为Vue.3.x中已经废弃了 $on $off等实例方法,再用上面的方式来实现事件车行不通。这里需要借用一个第三方库 mitt
```js
import mitt from 'mitt'
const emitter = mitt();

emitter.emit('foo', { a: 'b' })
mitter.on('foo', e => console.log('foo', e) )
```
[Github-mitt](https://github.com/developit/mitt)

[Vue3.x 被移除的 API](https://v3.cn.vuejs.org/guide/migration/introduction.html#%E8%A2%AB%E7%A7%BB%E9%99%A4%E7%9A%84-api)

### Demo

  下面是一个利用事件车在兄弟组件中通信的小demo, 可以分别点击首发 或者 替补中的球员, 将其放入替补中 或者 移入到首发。

<ClientOnly>
  <Vue-EventBus/>
</ClientOnly>

```js
// StartingUp.vue
export default defineComponent({
  name: "StartingUp",
  created() {
    bus.on('bench',({player}) => {
      this.player_list.push(player)
    })
  },
  setup() {
    const player_list = ref(['詹姆斯','奥尼尔','乔丹','科比','库里'])
    function click(p,i) {
      bus.emit('starting-up', {
        player:p
      })
      player_list.value.splice(i, 1)
    }
    return {
      player_list,
      click
    }
  }
})

// Bench.vue
export default defineComponent({
  name: "Bench",
  created() {
    bus.on('starting-up',({player}) => {
      this.player_list.push(player)
    })
  },
  setup() {
    const player_list = ref(['杜兰特','贾巴尔','罗伯特森','韦德','斯托克顿'])
    function click(p, i) {
      player_list.value.splice(i,1)
      bus.emit('bench',{
        player:p
      })
    }
    return {
      player_list,
      click
    }
  }
})
```
  
### 简单实现EventBus

```js
class EventBus {
  constructor() {
    this.tasks = {}
  }
  on(key, fn) {
    if(!this.tasks[key]) {
      this.tasks[key] = []
    }
    this.tasks[key].push(fn)
  }
  off(key, callback) {
    const fnTask = this.tasks[key]
    if(fnTask) {
      this.tasks[key] = []
    }
    callback()
  }
  emit(key, ...args) {
    const fnTask = this.tasks[key]
    if(fnTask && fnTask.length) {
      fnTask.forEach(fn => {
        fn(...args)
      })
    }
  }
}

const bus = new EventBus()
bus.on('update', function() {
  console.log('更新了', arguments)
})

bus.emit('update', 1,2,3)

bus.off('update', function(){
  console.log('解除绑定了')
})

bus.emit('update', 123)
```
