<template>
  <section class='section'>
    <div class='container example-container'>
      <div class="item" v-for='i in 9' :style='{
        background: colors[i-1]
      }'>{{i}}</div>
    </div>
    <div class="container merge-container">
      <div class="item" v-for='i in 5' :class='"item-"+i' :style='{
        background: colors[i-1]
      }'>{{i}}</div>
    </div>
  </section>
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
.section{
  display: flex;
  justify-content: space-between;
}
.example-container{
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  column-gap: 8px;
  row-gap: 8px;
  .item{
    text-align: center;
    line-height: 100px;
    color:#000;
    font-weight: bold;
    font-size: 40px;
  }
}
.merge-container{
  display: grid;
  width: 300px;
  height: 300px;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  column-gap: 8px;
  row-gap: 8px;
  grid-template-areas:
  'a a b'
  'a a c'
  'd e c';
  .item{
    text-align: center;
    color:#000;
    font-weight: bold;
    font-size: 40px;
    line-height: 100px;
  }
  .item-1{
    grid-area: a;
    line-height: 200px;
  }
  .item-2{
    grid-area: b;
  }
  .item-3{
    grid-area: c;
    line-height: 200px;
  }
  .item-4{
    grid-area: d;
  }
  .item-5{
    grid-area: e;
  }
}
</style>
