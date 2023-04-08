<template>
  <div class='text'>This is my very important paragraph. I am a distinguished gentleman of such renown that my paragraph
  needs to be styled in a manner befitting my majesty. Bow before
  my splendour, dear students, and go forth and learn CSS!
  This is my very important paragraph. I am a distinguished gentleman of such renown that my paragraph
  needs to be styled in a manner befitting my majesty. Bow before
  my splendour, dear students, and go forth and learn CSS!
  </div>
</template>

<style lang="scss" scoped>
.text{
  color: rgba(0, 0, 0, .85);
}
.text::first-letter{
  font-size: 30px;
  line-height: 30px;
  float: left;
  border: 1px solid #e8e8e8;
  padding: 2px;
  margin-right: 4px;
  color: red;
}
</style>
