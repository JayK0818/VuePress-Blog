<template>
  <div class='container'>
    <div class="center center1">
      <div class="box box1"></div>
    </div>
    <div class="center center2">
      <div class="box box2"></div>
    </div>
    <div class="center center3">
      <div class="box box3"></div>
    </div>
    <div class="center center4">
      <div class="box box4"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'center'
})
</script>
<style lang="scss" scoped>
.container{
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
}
.center{
  width: 160px;
  height: 160px;
  border: 1px solid #d9d9d9;
}
.box{
  width: 100px;
  height: 100px;
}
.box1{
  background-color:#f50;
}
.box2{
  background-color:#2db7f5;
}
.box3{
  background-color:#87d068;
}
.box4{
  background-color:#108ee9;
}
.box5{
  background-color:purple;
}
.center1{
  display: flex;
  align-items: center;
  justify-content: center;
}
.center2{
  position: relative;
}
.box2{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.center3{
  display: flex;
}
.box3{
  margin: auto;
}
.center4{
  position:relative;
}
.box4{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
