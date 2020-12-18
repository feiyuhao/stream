<template>
	<div id="streaming" >
		<video-player class="video-player vjs-custom-skin"
					  ref="videoPlayer" 
					
					  @ended="onPlayerEnded($event)"
					  :playsinline="true"  
					  :options="playerOptions">
		 </video-player>
	</div>
</template>

<script>
	import { videoPlayer } from 'vue-video-player';
	import 'video.js/dist/video-js.css'
	import bus from './space.vue'

	export default{
		props:["list"],
		data(){
			return{
				i: 0,
				index: '',
				message: '更新中，敬请持续关注！',
				defaultVideo:'http://ipo.zj-runyang.com/FileUpload/20201216/H4oevFhlzkI5J2PzK7KsZeIYoiYTTx.mp4',
				playerOptions:{
					notSupportedMessage: '更新中，敬请持续关注！',
					playbackRates: [0.5,1.0,1.5,2.0],
					autoplay:true,
					muted:false,
					loop:false,
					preload: 'false',
					language: 'zh-CN',
					aspectRatio: '16:9',
					fluid: true,
					sources: [
						{
							type: "video/mp4",
							src: ''
						}
					]
				}
			}
			
		},
		computed:{
		            player(){
		              return this.$refs.videoPlayer.player	
					}
		},
		components:{
		  videoPlayer
		},
		created(){
			this.playerOptions.sources[0].src=this.defaultVideo;
			
		},
		mounted(){
			bus.$on('func',(val)=>{
				console.log('传过来了' + val);
				this.playerOptions.sources[0].src=val;
			})
			// console.log(this.$refs.videoPlayer.$el.offsetHeight,"xx");
			bus.$emit('height',this.$refs.videoPlayer.$el.offsetHeight)
			// bus.$on('idx', (val)=>{
			// 	this.index = val;
			// 	console.log('idnex' + val)
			// })
			
			// if(this.i == this.index){
			// 	this.onPlayerEnded(this.$refs.videoPlayer.player);
				
			// }
			// if(this.i == this.index){
			// 	this.onPlayerPlay(this.$refs.videoPlayer.player)
			// }
			
		},
		methods:{
			onPlayerEnded(e) {
				//1
				console.log(this.list,"list");
				for (let i = 0; i < this.list.length; i++) {
		let src = this.list[i].Img
		console.log(src,"src end");
       if ((this.list[i].Img ==this.playerOptions.sources[0].src )&&(this.list[i+1]!=undefined)&&(this.list[i+1].Img!="")) {
		 
		
      return  this.playerOptions.sources[0].src=this.list[i+1].Img
		}
		else if((this.list[i].Img ==this.playerOptions.sources[0].src )&&((this.list[i+1]==undefined)||(this.list[i+1].Img==""))){
		
   return  this.playerOptions.sources[0].src=this.list[0].Img
		}	
	  }
			    

				  
			     }, 
				 
		}
	}
</script>

<style scoped>
	#streaming{
		width: 100%;
		height: 100%;
	}
	
</style>
