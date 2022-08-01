# Vue2.x迁移

## v-for中的Ref数组

  Vue3.x中, ref在for循环中不再自动创建$refs数组。需要从单个绑定的元素获取多个ref.
  
```html
<!-- 2.x的版本 -->
<ul>
  <li
    v-for="player in player_list"
    :key="player.id"
    ref="player"
  >{{player.firstName}} - {{player.lastName}}</li>
</ul>
<script>
  new Vue({
    //...
    data() {
      return {
        player_list: [
          {
            firstName: 'kyrie',
            lastName: 'irving',
            id: 1
          },
          {
            firstName: 'lebron',
            lastName: 'james',
            id: 2
          }
        ]
      }
    },
    mounted() {
      this.$nextTick(() => {
        const players = this.$refs.player
        console.log(players)
      })
    }
  })
</script>
```
```html
<!-- 3.x版本 -->
<ul>
  <li
    v-for="player in player_list"
    :key="player.id"
    :ref="setPlayerRef"
  >{{player.firstName}} - {{player.lastName}}</li>
</ul>

<script>
  createApp({
    setup() {
      const playerRefs = ref([])
      const player_list = ref([
        {
          firstName: 'kyrie',
          lastName: 'irving',
          id: 1
        },
        {
          firstName: 'lebron',
          lastName: 'james',
          id: 2
        }
      ])
      const setPlayerRef = el => {
        if(el) {
          playerRefs.value.push(el)
        }
      }
      onMounted(() => {
        console.log(playerRefs.value)
      })
      return {
        player_list,
        setPlayerRef
      }
    }
  })
</script>
```
![ref](./images/ref.jpg)

## Attribute

  在2.x版本中, 元素的attribute 如果是falsy(undefined, null, 或 false), 则会移除它们, 否则会加上。而在3.x的版本中, 会将false
  强制转化为 'false',不会移除该属性， 如果需要显示地移除attribute, 需要设置为 null / undefined。

[Vue-Attribute](https://v3.cn.vuejs.org/guide/migration/attribute-coercion.html#%E6%A6%82%E8%A7%88)

# $attrs

  在2.x版本中, $attrs 不会包含传递到组件上的 class 和 style属性。 在inheritAttrs: false时, 其他属性不会被添加到根元素, 但是
  class 和 style  不受影响。
```html
<!-- 2.x -->
<div id='app'>
  <child-component
    name="child" 
    message="hello"
    class="hello"
    :style="{backgroundColor:'#fff'}"
  ></child-component>
</div>

<script>
const ChildComponent = {
  name: 'child-component',
  template: `<div>
    <div>Hello, World</div>
    <div>你好, 生活</div>
  </div>`,
  inheritAttrs: true,
  created() {
    console.log(this.$attrs)
    // {name: 'child', message: 'hello'}
  }
}

const app = new Vue({
  el: '#app',
  components: {
    [ChildComponent.name]: ChildComponent
  }
})
</script>
```
下图分别表示 在子组件上添加 attribute, 在设置了 inheritAttrs 为true 和 false 的结果。
![inheritAttrs-true](./images/%24attrs_2_1.png)
![inheritAttrs-false](./images/%24attrs_2_2.png)

```html
<div>
  <child-component
    name="child"
    message="hello"
    class="hello"
    :style="{backgroundColor:'#fff'}"
  ></child-component>
</div>

<script>
const app = createApp({
})
app.component('child-component', {
  template: `<div>
    <div>Hello, World</div>
    <div>你好, 生活</div>
  </div>`,
  inheritAttrs: false,
  setup(props, context) {
    console.log(context.attrs)
    /*
    {
      class: "hello"
      message: "hello"
      name: "child"
      style: {
        backgroundColor: "#fff"
      }
    }
    * */
  }
})
app.mount('#attr-app')
</script>
```
  在3.x版本中, 对attrs的处理比较一致, inheritAttrs为false时, 根元素不会继承所有属性包括 class 和 style, 并且子组件的attrs中包含class和style.

![inheritAttrs-true](./images/%24attrs_3_1.png)
![inheritAttrs-false](./images/%24attrs_3_2.png)

## $children

  在2.x的版本中, 父组件可以通过$children访问当前实例的子组件。 使用上述Demo 在mounted中访问 $children 如下图所示.
  在3.x 版本中 访问$children 为 undefined.
```js
{
// ...
  mounted() {
    console.log(this.$children)
  }
}
```
![Vue2-$children](./images/%24children.png)