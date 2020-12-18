<template>
	<div id="head">
		<div class="top">
			<img src="../../assets/logo.png" class="logo">
			<img src="../../assets/code.png" class="code">
		</div>
		<div class="bottom" style="padding-bottom:10%">
			<CountDown :endTime="endTime"></CountDown>
			
		</div>
	</div>
</template>

<script>
	import CountDown from '../CountDown'
	export default {
			data(){
			return{
				endTime:"2020/12/25 9:25:00"
			}
		},
			components:{
		CountDown
		},
	}
</script>

<style scoped>
	#head{
		
		background: url(../../assets/bj.png) no-repeat;
		background-size: 100% 100%;
	}
	.logo{
		width: 30%;
	}
	.code{
		width: 40%;
		margin-bottom: 2%;
	}
	
	.bottom{
		text-align: center;
	}
	.tip{
		width:80%;
	}
</style>
