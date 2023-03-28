<template>
  <input placeholder='请输入...' class='input' :value='keyword' @keyup='handler'/>
  <div class="text">{{keyword}}</div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'

const keyword = ref<string>('')
function debounce(fn, delay) {
  let timer:null | number = null
  return function() {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      if(timer) clearTimeout(timer)
    }, delay)
  }
}
const handler = debounce(function() {
  const value = arguments[0].target.value.trim()
  keyword.value = value
}, 500)
</script>
<style lang="scss" scoped>
.input{
  height:36px;
  width:100%;
  text-indent:4px;
  border:1px solid #d9d9d9;
  outline:none;
  transition: all .45s;
  &:hover{
    border-color:#36ad6a;
  }
}
.text{
  padding-top:10px;
  color:rgb(0,0,0,.85);
}
</style>
