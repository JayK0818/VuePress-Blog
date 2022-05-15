<template>
	<div class="right-container">
		<div class="title">替补</div>
		<ul class="player-list">
			<li
				v-for="(p, i) in player_list"
				:key="i" class="player-item"
				@click.stop="click(p,i)"
			>{{p}}</li>
		</ul>
	</div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import bus from './bus.js'

export default defineComponent({
	name: "Bench",
	created() {
		bus.on('starting-up',({player}) => {
			this.player_list.push(player)
		})
	},
	setup() {
		const player_list = ref(['杜兰特','贾巴尔','罗伯特森','韦德','斯托克顿'])
		function click(p, i) {
			player_list.value.splice(i,1)
			bus.emit('bench',{
				player:p
			})
		}
		return {
			player_list,
			click
		}
	}
})
</script>

<style scoped lang='scss'>
.right-container{
	flex:1;
	.title{
		padding:5px 0;
		font-weight:bold;
	}
	.player-list{
		padding-top:10px;
	}
	.player-item{
		padding:2px 0 2px 10px;
		cursor:pointer;
		transition:all .4s;
		&:hover{
			background-color:rgb(240,240,240);
		}
	}
}
</style>
