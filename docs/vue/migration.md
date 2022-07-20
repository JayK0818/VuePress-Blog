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