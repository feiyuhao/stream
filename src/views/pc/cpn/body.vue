<template>
	<div id="body">
		<div class="title">
			
			<div class="eight">
				<img src="../../../assets/8.png">
			</div>
			
		</div>
		<div class="play">
			<div class="play-left">
				
					<streaming :list="list"></streaming>
				
				
			</div>
			
			<div class="play-right" id="right">
				<div>
					<div class="playItems" v-for="(item ,index) in list" :key="index" >
						<div @click="videoClick(index)" class="playItems-img">
							<img :src="item.pic">
						</div>
						<div class="playItems-title">
							<div>
								{{item.Title}}
							</div>	
						</div>
					</div>
				</div>
			</div>
			
		</div>
		<div class="foot">
			<img src="../../../assets/2.jpg" class="er">
			<div>扫码关注润阳科技公众号</div>
		</div>
	</div>
</template>

<script>
	import Streaming from './streaming.vue'
	import bus from './space.vue'
	
	export default{
		props:{
			list:{
				type: Array,
				default(){
					return []
				}
			},
			current:0
		},
		data(){
			return{
				source: '',
				itemIndex: 0,
				height:0
			}
		},
		components:{
		  Streaming
		},
		created(){
				bus.$on('height',(val)=>{
				console.log(val);
				this.height=val
			})
			
		},
		mounted(){
			var div=document.getElementById("right")
			div.style.height=this.height-10+"px"
		// console.log(this.height,"height");
		
		},
		methods:{
			changeColor(index){
				this.itemIndex = index
			},
			
			isEmpty(data){
				if(data == ''){
					alert(111);
				}
			},
			
			videoClick(index){
				
				switch(index){
					case 0: 
						this.source =this.list[0].Img;
						bus.$emit('func', this.source);
						bus.$emit('idx', index);
						console.log('1' + this.source)
					 break;
					case 1: this.source = this.list[1].Img;
						bus.$emit('func', this.source);
						bus.$emit('idx', index);
						console.log(index);
						 break;
					case 2: this.source =  this.list[2].Img;
						bus.$emit('func', this.source); 
						this.isEmpty(this.list[0].Img);
						break;
					case 3: this.source = this.list[3].Img;
						bus.$emit('func', this.source); break;
					case 4: this.source =  this.list[4].Img;
						bus.$emit('func', this.source); break;
					case 5: this.source =  this.list[5].Img;
						bus.$emit('func', this.source); break;
					case 6: this.source =  this.list[6].Img;
						bus.$emit('func', this.source); break;
					case 7: this.source =  this.list[7].Img;
						bus.$emit('func', this.source); break;
					case 8: this.source =  this.list[8].Img;
						bus.$emit('func', this.source); break;
					case 9: this.source =  this.list[9].Img;
						bus.$emit('func', this.source); break;	
				}
			}
		}
	}
</script>

<style scoped>
	.play{
		background-color: #FEE4C3;
		width: 90%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}
	.play-left{
		border: 1px solid red;
		width: 100%;
		height: 100%;
		
	}
	.play-right{
		
		width: 36%;
		height: 30rem;
		display: flex;
		flex-direction: column;
		overflow-y: scroll;
		margin-left: 1%;
		margin-top: 0.5%;
	}
	.title{
		text-align: center;
	}
	.playItems{
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 4.5rem;
	}
	.playItems:hover{
		background-color: gray;
		opacity:0.6
	} 
	.playItems-img{
		
		width: 10rem;
		/* border: 1px solid blue; */
		height: 4.5rem;
		margin: 0.1rem 0;
		
	}
	.playItems-title{
		
		margin: 2rem auto;
		padding-left: 1%;
		
	}
	.playItems img{
		width: 100%;
		
	}
	.activeColor{
		background-color: #0000FF;
	}
	.foot{
		margin-top: 1rem;
		text-align: center;
	}
	.foot div{
		padding-bottom: 5rem;
	}
	.er{
		width: 8%;	
	}
</style>
