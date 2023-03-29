<template>
  <div class='container'>
    <n-button
      @click.stop='toggle_move'
      type='primary' size='small'
      style='margin-bottom: 10px; width: 80px;'
      class='flex-1'
    >{{paused ? 'run' : 'pause'}}</n-button>
    <n-select
      class='flex-1 select'
      size='small'
      :options='direction_options_list'
      v-model:value='direction'
    />
  </div>
  <div class='progress-container'>
    <div class="progress-inner" :class='{
      paused: paused,
      [computed_direction_class]: true
    }'></div>
  </div>
</template>

<script lang='ts' setup>
import { ref, computed } from 'vue'
interface SelectOption {
  label: string
  value: number
}
const paused = ref<boolean>(false)
const direction_options_list = ref<SelectOption[]>([
  {
    label: 'normal',
    value: 1
  },
  {
    label: 'alternate',
    value: 2
  },
  {
    label: 'reverse',
    value: 3
  },
  {
    label: 'alternate_reverse',
    value: 4
  }
])
const direction = ref<number>(1)
const toggle_move = () => {
  paused.value = !paused.value
}
const computed_direction_class = computed(() => {
  const d = direction_options_list.value.find(d => d.value === direction.value)
  if(d) {
    return d.label
  } else {
    return 'normal'
  }
})
</script>

<style lang='scss' scoped>
@keyframes move {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
.progress-container{
  position: relative;
  height: 30px;
  border:1px solid #e8e8e8;
  width: 100%;
}
.progress-inner {
  position: absolute;
  height: 100%;
  background-color: skyblue;
  animation-name: move;
  animation-duration: 6s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-play-state: running;
  &.paused {
    animation-play-state: paused;
  }
  &.reverse {
    animation-direction: reverse;
  }
  &.alternate_reverse {
    animation-direction: alternate-reverse;
  }
  &.alternate {
    animation-direction: alternate;
  }
  &.normal {
    animation-direction: normal;
  }
}
.container {
  display: flex;
  padding: 5px 0;
}
.select{
  width: 200px;
}
@media screen and (max-width: 768px) {
  .flex-1 {
    min-width: 0;
    flex: 1;
  }
}
</style>
