<template>
	<div style="color:red;"> 时间间隔为 1s : {{width}}px X {{height}}px</div>
</template>

<script>

function throttle_delay1(fn,delay = 300) {
	let prevTime = Date.now();
	return function () {
		let curTime = Date.now();
		if (curTime - prevTime > delay) {
			console.log(curTime-prevTime)
			fn.apply(this, arguments);
			prevTime = curTime;
		}
	};
}
function throttle_delay2(fn,delay = 300) {
	let timer = null;
	return function () {
		let _this = this, args = arguments;
		if(timer) return;
		timer = setTimeout(function() {
			fn.apply(_this,args)
			clearTimeout(timer)
			timer = null;
		},delay)
	}
}

export default {
	name:'Throttle-Delay',
	data() {
		return {
			width:0,
			height:0
		}
	},
	created() {
		this.setSize();
		this.setSizeThrottle = throttle_delay2(this.setSize,1000)
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
