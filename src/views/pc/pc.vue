<template>
	<div id="pc">
		<headl></headl>
		<bodyl id="bodyl" :list="list">
		</bodyl>
		<!-- <footl id="footl"></footl> -->
	</div>
</template>

<script>
	import Headl from './cpn/head.vue'
	import Bodyl from './cpn/body.vue'
	import Item from './cpn/item.vue'
	import Footl from './cpn/foot.vue'
	
	import {
		getVideo
	} from '../../network/network.js'
	
	export default {
		name: 'head',
		data(){
			return{
				list:[],
				pic:[
					{pic:require("../../assets/shangshi.jpg")},
					{pic:require('../../assets/qiye.png')},
					{pic:require("../../assets/2013.png")},
					{pic:require('../../assets/b.png')}
				]
			}
		},
		components:{
			Headl,
			Bodyl,
			Item,
			Footl
		},
		created(){
			getVideo().then(res=>{
				console.log(res.data.rows);
				this.list=res.data.rows;
				
				this.list.forEach(item=>{
				    if(item.Img!==""){
						item.Img="http://ipo.zj-runyang.com"+item.Img
				    }
				})
				for(var i=0; i<this.list.length; i++){
					if(i == 0){
						this.list[i].pic = this.pic[i].pic
					}else if(i == 1){
						this.list[i].pic = this.pic[i].pic
					}else if(i==2){
						this.list[i].pic = this.pic[i].pic
					}else{
						this.list[i].pic = this.pic[3].pic
					}
					
				}
				console.log(this.list)
			})
		},
		
	}
</script>

<style scoped>
	#pc{
		/* background-color: antiquewhite; */
		
	}
	#bodyl{
		background-image: url(../../assets/body1.png);
		background-size:100% 100%;
		background-repeat:no-repeat;
		    background-position:center;
		/* background: url('../../assets/body.png') no-repeat; */
	}
	/* #footl{
		padding-top: 1%;
		text-align: center;
		background-color: #D13A0F;
		border-bottom: 4rem solid #FFCD88;
	} */
</style>
