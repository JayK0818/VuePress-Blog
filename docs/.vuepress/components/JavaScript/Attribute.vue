<template>
  <div>
    <div class='name' id='hello' data-id='123' style='color:red;' ref='div'></div>
    <n-button @click.stop='get_attribute' type='primary' size='small'>click me get attribute</n-button>
    <ol>
      <li v-for="(value,key) in attributes" :key='key'>
        name: {{value.name}} ---- value: {{value.value}}
      </li>
    </ol>
  </div>
</template>

<script lang='ts'>
  import { defineComponent, ref } from 'vue'
  import { NButton } from 'naive-ui'
  export default ({
    name:'attribute',
    components: {
      [NButton.name]: NButton
    },
    setup() {
      const div = ref<HTMLElement | null>(null)
      const attributes = ref<{[propName: string]: string}>({})
      const get_attribute = () => {
        attributes.value = div.value.attributes;
      }
      return {
        get_attribute,
        div,
        attributes
      }
    }
  })
</script>
