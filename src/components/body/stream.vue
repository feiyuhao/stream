<template>
	<div id="stream">
		<div class="show">
			<video-player class="video-player vjs-custom-skin"	
						  ref="videoPlayer" 
						   @play="onPlayerPlay($event)"
						   @ended="onPlayerEnded($event)"
						  :playsinline="true"  
						  :options="playerOptions">
			 </video-player>
		</div>
		<!-- <div >{{streamTile}}</div> -->
	</div>
</template>

<script>
	import { videoPlayer } from 'vue-video-player';
	import 'video.js/dist/video-js.css'
	import bus from '../space'
	// import '../../assets/common.css'
	export default{
		props:['src'],
		data(){
			return{
				streamTile: '会场',
				playerOptions:{
					 notSupportedMessage : '更新中，敬请持续关注!',
					playbackRates: [0.5,1.0,1.5,2.0],
					autoplay:false,
					muted : false,
					loop:false,
					preload: 'auto',
					language: 'zh-CN',
					aspectRatio: '16:9',
					fluid: true,
					sources: [
						{
							type: "video/mp4",
							src: this.src.Img
						}
					],
					 controlBar: {
    timeDivider: false, // 当前时间和持续时间的分隔符
    durationDisplay: false, // 显示持续时间
    remainingTimeDisplay: false, // 是否显示剩余时间功能
    fullscreenToggle: true // 是否显示全屏按钮
   },
					 poster: this.src.pic,//视频图片
				}
			}
			
		},
		created(){
			this.playsrc();
		},
		methods:{
			playsrc(){
				if(this.src.Title=="企业宣传片"){
					this.playerOptions.autoplay=true
					// console.log(this.playerOptions.autoplay);
					// console.log(this.src.Title);
				}
				
			},
		async onPlayerEnded(e) {
	   let currentVideo = e.el_.children[0].getAttribute("id", 64);
		// console.log(currentVideo,"currentVideo");
		// console.log(e.el_.children[0].getAttribute("id", 64),"e");
	  let videoList = document.getElementsByTagName("video");
	//    console.log(videoList,"videoList");
	//    console.log(videoList[0].currentSrc,"currentSrc");
      for (let i = 0; i < videoList.length; i++) {
		let id = videoList[i].getAttribute("id");
		// console.log(id,"id end");
       if ((currentVideo ==id)&&(videoList[i+1]!=undefined)) {
		 
		
      return   videoList[i+1].play();
		}
		else if((currentVideo ==id)&&(videoList[i+1]==undefined)){
		
  return videoList[0].play();
		}	
	  }
	   
      },
 async onPlayerPlay(e) {
	  let currentVideo = e.el_.children[0].getAttribute("id", 64);
	     
	//   console.log(currentVideo,"currentVideo");
	  let videoList = document.getElementsByTagName("video");
	//   console.log(videoList,"videoList");
      for (let i = 0; i < videoList.length; i++) {
		let id = videoList[i].getAttribute("id");
		// console.log(id,"id");
        if (currentVideo != id) {
          videoList[i].pause();
        }
	  }},
	 
		},
		computed:{	
		            player(){
		              return this.$refs.videoPlayer.player	
					}  
		},
		components:{
          videoPlayer
		},
	mounted(){
			
			bus.$on('func',(val)=>{
				this.src=val;
				// console.log(111)
			})
			
		}
	}
</script>

<style scoped>
	.show{
		width: 100%;
		background-color: antiquewhite;
		display: inline-block;
		border: 1px solid transparent;
		border-radius: 4px;
		overflow: hidden;
		position: relative;
		box-shadow: 0 1px 1px black;
		margin-right: 4px;
	}
</style>
