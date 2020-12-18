<template>
	<div id="head">
		<div class="top">
			<img src="../../../assets/logo.png" class="logo">
			<img src="../../../assets/code.png" class="code">
		</div>
		<div class="bottom">
			<div class="time">
				<timel></timel>
			</div>
			
		</div>
	</div>
</template>

<script>
	import Timel from '../../../util/time.vue'
	
	export default{
		data(){
			return{
				

			}
		},
		components:{
			Timel
		},
		created(){
			
		}
	}
	
</script>

<style scoped>
	#head{
		/* background-color: #E32105; */
		background-image: url(../../../assets/123.png);
		background-size:100% 100%;
		background-repeat:no-repeat;
		    background-position:center;
		border-bottom: 0.4rem solid #FFCD88;
	}
	.logo{
		width: 20%;
	}
	.code{
		width: 20%;
		margin-bottom: 2%;
	}
	
	.bottom{
		text-align: center;
	}
	.tip{
		width:60%;
		margin-top: -1%;
	}
	.time{
		font-size: 3rem;
		padding-bottom: 2%;
	}
	
</style>
