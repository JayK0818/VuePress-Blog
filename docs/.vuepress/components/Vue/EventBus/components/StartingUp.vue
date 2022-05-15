<template>
	<div class="left-container">
		<div class="title">首发</div>
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
	name: "StartingUp",
	created() {
		bus.on('bench',({player}) => {
			this.player_list.push(player)
		})
	},
	setup() {
		const player_list = ref(['詹姆斯','奥尼尔','乔丹','科比','库里'])
		function click(p,i) {
			bus.emit('starting-up', {
				player:p
			})
			player_list.value.splice(i, 1)
		}
		return {
			player_list,
			click
		}
	}
})
</script>

<style scoped lang='scss'>
.left-container{
	flex:1;
	.title{
		font-weight:bold;
		padding:5px 0;
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
