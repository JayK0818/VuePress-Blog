# Mobx

  Mobx是一个简单的, 状态管理库。Mobx有三个核心概念: State, Actions, 和Derivations. Mobx使用单向数据流,
  利用action 改变state, 进而更新所有受影响的view。

```js 
npm install mobx --save
// mobx-react 和 mobx-react-lite 用来绑定组件和Mobx数据状态
npm install mobx-react --save       // 支持class组件和函数组件
npm install mobx-react-lite --save  // 仅支持函数组件
```

```js
//  一个React 计数器组件案例
import { makeObservable, action, observable } from 'mobx'
import { observer } from 'mobx-react-lite'
class Counter() {
  constructor() {
    this.value = 0
    // makeObservable 可以捕获已经存在的对象属性并且使得它们可观察。
    makeObservable(this, {
      value: observable,  // 定义一个可追踪的state字段
      increment: action,  // 将一个方法标记为可修改state的action
      decrement: action,
      double: computed
    })
    // makeAutoObservable(this)
    /*
    computed 计算值可以用来从其他可观察对象中派生信息。计算值采用惰性求值。会缓存其输出。并且只有当其依
    赖的可观察对象被改变时才会重新计算。
    */
  }
  increment() {
    this.value += 1
  }
  decrement() {
    this.value -=1
  }
  get double() { // 标记一个由state派生出新的值
    return this.value * 2
  }
}

const CounterView = observer(({counter}) => (
  <div>
    <button onClick={() => counter.increment()}>+</button>
    {counter.value}
    <button onClick={() => counter.decrement()}>-</button>
  </div>
))
const counter = new Counter()
root.render(
  <CounterView counter={counter}/>
)
```

```js
// 一个订阅共同父级数据的案例
const CounterContext = createContext()
const useCounter = () => {
  return useContext(CounterContext)
}
// 如果组件数据要更新, 需要使用observer包裹
const CounterA = observer(() => {
  const c = useCounter()
  return (
    <div>
      counter a {c.value}
      <button onClick={() => c.increment()}>+</button>
    </div>
  )
})

const CounterB = observer(() => {
  const c = useCounter()
  return (
    <div>
      counter b {c.value}
      <button onClick={() => c.decrement()}>-</button>
    </div>
  )
})
const ProviderComponent = ({children}) => (
  <CounterContext.Provider value={counter}>{children}</CounterContext.Provider>
)
const root = createRoot(document.querySelector('#root-state-app'))
root.render(
  <ProviderComponent>
    <CounterA/>
    <CounterB/>
  </ProviderComponent>
)
```

## makeObservable

  创建可观察状态，属性, 对象, 数组 , map 都可以被转化为可观察对象。使对象变得可观察的基本方式是使用 makeObservable, 为每个属性指定一个注解。
1. observable: 定义一个存储state的可追踪字段
2. action: 将一个方法标记为可以修改state的action
3. computed: 标记一个可以由state派生出新的值
```js
class Counter {
  constructor() {
    this.value = 0
    makeObservable(this, {
      value: observable,
      double: computed,
      increment: action,
      fetch: flow
    })
  }
}
/*
makeAutoObservable 是加强版的makeObservable，它会推断所有属性的注解类型。
比如所有getters 都成为computed, setters都成为action, 自有属性都成为observable等。
*/
```

## Actions

  Mobx中的状态使用 action 来更新
1. action(注解)
2. action(fn)
3. action(name, fn)

  action不仅是注解, 也是一个包装函数。 可以用来创建基于action的事件处理函数。
```js
import { observable, action } from "mobx"
const state = observable({ value: 0 })

const increment = action(() => {
    state.value++
})
increment()

// 异步更新数据时使用
runInAction(() => {
  state.value += 1
})
```

## Observer

  Observer是一个React组件, 它可以用来订阅Mobx的数据更新, 它接受一个单独的, 没有参数的函数作为子函数, 该函数返回一个React组件,
  可以在该组件中触发action, 并获取最新的数据。
```js
const CounterComponent = ({counter}) => {
  return (
    <Observer>{
      () => (
        <div>
          {counter.value}
          <button onClick={() => counter.decrement()}>decrement</button>
          <button onClick={() => counter.increment()}>increment</button>
        </div>
      )
    }</Observer>
  )
}
```

## useLocalObservable

  本地的可以观察对象状态通过使用useLocalObservable钩子引入。
```jsx
import { useLocalObservable, Observer } from 'mobx-react'

function App() {
  const todo = useLocalObservable(() => ({
    title: 'Hello World',
    done: true,
    toggle() {
      this.done = !this.done
    }
  }))
  const [ count, setCount ] = useState(0)
  return (
    <Observer>
      {() => (<div>
        <button onClick={() => setCount(count+1)}>{count}</button>
        <button onClick={todo.toggle}>{todo.title} {todo.done ? 'done' : 'undo'}</button>
      </div>)}
    </Observer>
  )
}


/*
const todo = useLocalObservable(() => {
  console.log('render') 只会执行一次
  return {
    title: 'Hello World',
    done: true,
    toggle() {
      this.done = !this.done
    }
  }
})
*/
```
## Autorun

  autorun 函数接受一个函数作为参数, 每当该函数观察的参数值发生变化时, 都会运行。
```js
// 一个来自官网的例子
class Animal {
  constructor(name) {
    this.name = name
    this.energyLevel = 100
    makeAutoObservable(this)
  }
  reduceEnergy() {
    this.energyLevel -= 10
  }
  get isHungry() {
    return this.energyLevel < 50
  }
}

const giraffe = new Animal("Gary")
autorun(() => {
  console.log("Energy level:", giraffe.energyLevel)
})
autorun(() => {
  if (giraffe.isHungry) {
      console.log("Now I'm hungry!")
  } else {
      console.log("I'm not hungry!")
  }
})
console.log("Now let's change state!")
for (let i = 0; i < 10; i++) {
  giraffe.reduceEnergy()
}
/*
Energy level: 100
I'm not hungry!
Now let's change state!
Energy level: 90
Energy level: 80
Energy level: 70
Energy level: 60
Energy level: 50
Energy level: 40
Now I'm hungry!
Energy level: 30
Energy level: 20
Energy level: 10
Energy level: 0
*/
```
:::tip
在一个计数器counter的案例中,如果autorun中的函数没有读取counter.value,那么它只会执行一次.比如下面的代码,只会在
autorun创建时执行一次。正确操作是在 autorun中 读取 counter.value
```js
autorun(() => {
  console.log('i am changed')
})
setInterval(() => {
  counter.increment()
}, 1000)
```
:::
