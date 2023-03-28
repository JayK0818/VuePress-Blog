<template>
  <div>
    <div class='name' id='hello' data-id='123' style='color:red;' ref='div'></div>
    <a-button @click.stop='get_attribute' type='primary' size='small'>click me get attribute</a-button>
    <ol>
      <li v-for="(value,key) in attributes" :key='key'>
        name: {{value.name}} ---- value: {{value.value}}
      </li>
    </ol>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
const div = ref<HTMLElement | null>(null)
const attributes = ref<{[propName: string]: string}>({})
const get_attribute = () => {
  attributes.value = div.value.attributes;
}
</script>
