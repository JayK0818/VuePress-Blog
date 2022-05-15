<template>
	<div style="color:red;"> 时间间隔为 1s : {{width}}px X {{height}}px</div>
</template>

<script>
function throttle_immediate(fn,delay = 300) {
	let prevTime = 0;
	return function() {
		if(Date.now() - prevTime > delay) {
			fn.apply(this,arguments)
			prevTime = Date.now()
		}
	}
}

export default {
	name:'Throttle-Immediate',
	data() {
		return {
			width:0,
			height:0
		}
	},
	created() {
		this.setSize();
		this.setSizeThrottle = throttle_immediate(this.setSize,1000)
	},
	methods:{
		setSize () {
			let width = document.documentElement.clientWidth,
				height = document.documentElement.clientHeight;
			this.width = width;
			this.height = height;
		}
	},
	mounted() {
		window.addEventListener('resize', this.setSizeThrottle, false)
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.setSizeThrottle, false)
	}
}
</script>
