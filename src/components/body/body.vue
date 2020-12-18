<template>
	<div id="body">
		<img src="../../assets/8.png" style="margin-top:3%;width:80%" class="title">
		<!-- <div style="color:#fff">带领大家走进润阳科技发展之旅</div> -->
		<div>
		<div class="show" ><slot name="one" @click="vedioClick(index)">
			</slot></div>
		</div>
		<slot name="foot">
			</slot>
	</div>
</template>

<script>
import bus from '../space'
export default {
	// props:['http'],
	data(){
		return{
			// http:[],

		}
	},
	method:{
		vedioClick(index){
			console.log(index);
bus.$emit('func',this.http)

		}
	}
}
</script>

<style scoped>
	#body{
		background: url(../../assets/body1.png) no-repeat;
		background-size: 100% 100%;
		text-align: center;
	}
	.title{
		width: 40%;
	}
	.title + div{
		margin-top: 0;
	}
	.show{
		
		width:80%;
		margin:0 auto;
		height: 100%;
		margin-top:5%
	}
</style>
