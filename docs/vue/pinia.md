# Pinia

  Pinia is a store library for Vue, it allows you to share a state across components/pages.
  it works for both Vue 2 and Vue 3 and does not require you to use composition API.

  Comparison with Vuex
  1. mutations no longer exist.
  2. no more magic string to inject
  3. no more nested structuring of modules.
  4. no namespaced modules.

## Getting Started

```js
yarn add pinia
npm install pinia

// vue 3.x 
import { createPinia } from 'pinia'
app.use(createPinia())

// vue2.x
import { createPinia, PiniaVuePlugin } from 'pinia'
Vue.use(PiniaVuePlugin)
const pinia = createPinia()
new Vue({
  // ...
  pinia
})
```

:::tip
Note that store is an object wrapped with reactive, meaning there is no need to write .value
after getters but, like props in setup, We cannot destructure it.
:::

  使用对象解构的方法 提取 counter的属性 会让它丢失响应性, 如果需要提取某个属性的话, 需要storeToRefs()方法。 
  接着上面的案例:
```js
// ...
import { storeToRefs } from 'pinia'
export default defineComponent({
  name: 'state',
  setup() {
    const counter = useCounterStore()
    const { count, double } = storeToRefs(counter)
    const { increment, decrement } = counter
    return {
      count,
      double,
      increment,
      decrement
    }
  }
})
// 以上代码 在使用storeToRefs 解构后 同样会正常工作, 
// 但是注意 increment 和 decrement方法 不要和属性在一起用storeToRefs解构
```
## State

  state is the central part of your store. In Pinia the state is defined as a function that returns
  the initial state. This allows Pinia to work in both Server and Client Side.

```js
// 定义一个store
import { defineStore } from 'pinia'
const useStore = defineStore('player', {
  state() {
    return {
      firstName: 'kyrie',
      lastName: 'irving',
      age: 30
    }
  }
})
// with setup
export default defineComponent({
  // ...
  setup() {
    const store = useStore()
    return {
      store
    }
  },
  computed: {
    fullName() {
      return this.store.player.firstName + '-' + this.store.player.lastName
    }
  }
})

// without setup
export default defineComponent({
  name: 'state',
  computed: {
    // gives access to this.player inside the component
    ...mapState(usePlayerStore, ['player']),
    ...mapState(usePlayerStore, {
      double: store => store.player.age * 3
    }),
    fullName () {
      return this.player.firstName + '-' + this.player.lastName
    }
  }
})
```
### Mutating the state

  可以通过store.$patch()方法来更改store中的数据
```js
// store/player.js
const usePlayerStore = defineStore('player',{
  state () {
    return {
      player: [
        {
          firstName: 'kyrie',
          lastName: 'irving',
          age: 30
        }
      ]
    }
  }
})

export default defineComponent({
  name: 'player',
  setup() {
    const store = usePlayerStore()
    function add () {
      store.$patch(state => {
        state.player.push({
          firstName: 'lebron',
          lastName: 'james',
          age: 38
        })
      })
    }
    return {
      store,
      add
    }
  }
})
```

### Replacing the state 

  You can replace the whole state of a store by setting its $state property to a new object
```js
// store/player.js
// ...
store.$state.player = [
  {
    firstName: 'kevin',
    lastName: 'durant'
  }
]
```
### Reset the state

```js
// store/player.js
store.$reset()
```
### Subscribe the state

  You can watch the state and its changes through the $subscribe() method of a store.
```js
// store/subscribe
const useSubscribeStore = defineStore('subscribe', {
  state () {
    return {
      cart: [
        {
          name: 'iPhone',
          price: 5999
        }
      ]
    }
  },
  actions: {
    addCart(payload) {
      this.cart.push(payload)
    }
  }
})
// Subscribe.vue
export default defineComponent({
  name: 'subscribe',
  setup () {
    const store = useSubscribeStore()
    const { addCart } = store
    function add () {
      store.$patch(state => state.cart.push({ // type patch function
        name: 'iPods',
        price: 1000
      }))
      store.$patch({
        // 注意此处 使用push方法返回的 是新增数据的长度
        cart: store.cart.concat({ // type: patch object
          name: 'iPods',
          price: 1000
        })
      })
      addCart({ // type: direct
        name: 'iPods',
        price: 1000
      })
    }
    store.$subscribe((mutation, state) => {
      // mutation.storeId
      // mutation.type
      // mutation.payload   patch object passed to the store.$patch()
      // only available with mutation.type === 'patch object'
    })
    return {
      store,
      add
    }
  }
})
```
## Getters

  Getters are exactly the equivalent of computed values for the state of a Store.
  They can be defined with the getters property in defineStore(). They receive the state
  as the first parameter.
```js
import { defineStore } from 'pinia'
export default defineStore('counter', {
  state () {
    return {
      count: 0,
      todos: [
        {
          id: 1,
          text: 'vue.js',
          finished: false
        },
        {
          id: 2,
          text: 'pinia',
          finished: false
        },
        {
          id: 3,
          text: 'react',
          finished: true
        }
      ]
    }
  },
  getters: {
    double: state => state.count * 2,
    doublePlusOne() { // use other getters.
      return this.double + 1
    },
    getTodoById: state => { // passing arguments to getters
      return id => state.todos.find(todo => todo.id === id)
    },
    otherGetter(state) {
      const otherStore = useOtherStore()
      return state.count * otherStore.price
    }
  }
})
```
:::tip
Note that when passing arguments to getters, getters are not cached anymore.
:::

## Actions

  actions are the equivalent of methods in components. They can be defined with the actions property in
  defineStore().
```js
// store/action.js
export default defineStore('main', {
  state: () => ({ count: 0 }),
  actions: {
    increment (payload) {
      this.count += payload
    },
    randomCount () {
      this.count = Math.round(Math.random() * 100)
    },
    incrementAsync (state) { // 异步更新
      setTimeout(() => { this.count++ }, 1000)
    }
  }
})

// App.vue
{
  setup() {
    const store = useStore()
    const { increment } = store
    increment(3)
    const unsubscribe = store.$onAction(({
      name, // name of the action   increment
      store,  // store instance
      args, // array of parameters passed to the action // [3]
      after,  // hook after the action returns or resolves
      onError // hook if the action throws or rejects
    }) => {
      
    })
  },
  methods: {
    ...mapActions(useActionStore, ['increment'])
  }
}
```
