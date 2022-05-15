<template>
	<div class="container">
		<starting-up/>
		<bench/>
	</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import StartingUp from './components/StartingUp.vue'
import Bench from './components/Bench.vue'

export default defineComponent({
	name: "EventBus",
	components: {
		[StartingUp.name]: StartingUp,
		[Bench.name]: Bench
	}
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
