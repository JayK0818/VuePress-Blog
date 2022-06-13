<template>
  <code>
    <pre>
.container{
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  .item{
    text-align: center;
    line-height: 100px;
    color:#000;
    font-weight: bold;
    font-size: 40px;
  }
}
    </pre>
  </code>
  <div class='container'>
    <div class="item" v-for='i in 9' :style='{
      background: colors[i-1]
    }'>{{i}}</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'grid-template',
  setup () {
    const colors = ['#f00', '#ff8c00', '#00b03b', '#0071c8', '#cc6cb1', '#fdd394', '#b5aa79', '#cae9a2', '#00c8f2']
    return {
      colors
    }
  }
})
</script>
<style lang="scss" scoped>
.container{
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  .item{
    text-align: center;
    line-height: 100px;
    color:#000;
    font-weight: bold;
    font-size: 40px;
  }
}
code{
  padding: 0;
  pre{
    padding: 0;
  }
}
</style>
