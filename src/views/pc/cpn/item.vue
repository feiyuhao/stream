<template>
	<div id="item">
		<div class="item-stream">
			<streaming></streaming>	
		</div>
		<div class="item-title">123456</div>
	</div>
</template>

<script>
	import Streaming from './streaming.vue'
	
	export default{
		
		components:{
		  Streaming
		}
	}
</script>

<style scoped>
	#item{
		display: flex;
		flex-direction: column;
	}
	
</style>
