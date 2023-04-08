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

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import bus from '../bus'

const player_list = ref(['杜兰特','贾巴尔','罗伯特森','韦德','斯托克顿'])

const click = (p: string, i: number) => {
	player_list.value.splice(i,1)
	bus.emit('bench',{
		player:p
	})
}

onMounted(() => {
	bus.on('starting_up',({player}) => {
		player_list.value.push(player)
	})
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
