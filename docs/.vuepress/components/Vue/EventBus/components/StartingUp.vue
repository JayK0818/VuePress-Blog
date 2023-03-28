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

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import bus from '../bus.js'
const player_list = ref(['詹姆斯','奥尼尔','乔丹','科比','库里'])
const click = (p,i) => {
	bus.emit('starting-up', {
		player:p
	})
	player_list.value.splice(i, 1)
}

onMounted(() => {
	bus.on('bench',({player}) => {
		player_list.value.push(player)
	})
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
