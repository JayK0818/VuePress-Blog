<template>
	<div class="container">
		<starting-up/>
		<bench/>
	</div>
</template>

<script lang='ts' setup>
import { onBeforeUnmount } from 'vue'
import StartingUp from './components/StartingUp.vue'
import Bench from './components/Bench.vue'
import bus from './bus.js'
onBeforeUnmount(() => {
	bus.off('bench')
	bus.off('starting-up')
})
</script>

<style scoped lang='scss'>
.container{
	display:flex;
	padding:10px;
	border:1px solid #e8e8e8;
	margin-top:10px;
}
</style>
