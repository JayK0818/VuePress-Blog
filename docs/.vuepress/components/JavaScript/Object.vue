<template>
  <div>
    <n-button size='small' type='primary' @click='get_extensible(1)'>object_1</n-button>
    <n-button size='small' type='primary' @click='get_extensible(2)'>object_2</n-button>
    <n-button size='small' type='primary' @click='get_extensible(3)'>object_3</n-button>
    <n-button size='small' type='primary' @click='get_extensible(4)'>object_4</n-button>
    <n-button size='small' type='primary' @click='get_extensible(5)'>object_5</n-button>
    <div class='result-text' v-show='show'>是否可扩展: {{isExtensible ? '是': '否'}}</div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import { NButton } from 'naive-ui'

interface ObjectProps {
  [propName: string]: string
}

export default defineComponent({
  name:'Object',
  components: {
    [NButton.name]: NButton
  },
  setup() {
    const isExtensible = ref<boolean>(false)
    const show = ref<boolean>(false)
    const object_1 = ref<ObjectProps>({
      player:'kyrie'
    })
    const object_2 = ref<ObjectProps>(Object.defineProperty({}, 'player',{
      value:'kyrie'
    }))
    const object_3 = ref<ObjectProps>(Object.defineProperty({}, 'player', {
      value:'lebron',
      configurable:true
    }))
    const object_4 = ref<ObjectProps>(Object.freeze({player:'durant'}))
    const object_5 = ref<ObjectProps>(Object.seal({player:'curry'}))

    const get_extensible = (index: number):void => {
      show.value = true;
      let object = null;
      switch(index){
        case 1:
          object = object_1.value;
          break;
        case 2:
          object = object_2.value;
          break;
        case 3:
          object = object_3.value;
          break;
        case 4:
          object = object_4.value;
          break;
        case 5:
          object = object_5.value;
          break;
      }
      isExtensible.value =  Object.isExtensible(object)
    }
    return {
      show,
      isExtensible, get_extensible
    }
  }
})
</script>

<style lang='scss' scoped>
  .result-text{
    padding-top:10px;
  }
  button{
    margin-right:10px;
  }
</style>
