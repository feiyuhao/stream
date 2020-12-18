<template>
	<div id="home">
		<headl class="headl"></headl>
		<bodyl class="bodyl"  >
			<div slot="title"><title></title></div>
			<div slot="one" v-for="(item,index) in http" :key="index">
				<streaml :src="item"></streaml>
				<div>{{item.Title}}</div>
			</div>
			<!-- <div slot="two">
				<streaml :http="http"></streaml>
				<div>2012-2013年</div>
			</div>
			<div slot="three">
				<streaml :http="http"></streaml>
				<div>2013-2014年</div>
			</div>	
			<div slot="four">
				<streaml :http="http"></streaml>
				<div>2014-2015年</div>
			</div>	
			<div slot="five">
				<streaml :http="http"></streaml>
				<div>2015-2016年</div>
			</div>	
			<div slot="six">
				<streaml :http="http"></streaml>
				<div>2016-2017年</div>
			</div>
			<div slot="seven">
				<streaml :http="http"></streaml>
				<div>2017-2018年</div>
			</div>	
			<div slot="eight">
				<streaml :http="http"></streaml>
				<div>2018-2019年</div>
			</div>	
			<div slot="nine">
				<streaml :http="http"></streaml>
				<div>2019-2020年</div>
			</div>	 -->
			<div slot="foot"><foot id="foot"></foot></div>
		</bodyl>
		
	</div>
	
</template>

<script>
	import Headl from '../components/head/head.vue'
	import Bodyl from '../components/body/body.vue'
	import Title from '../components/body/title.vue'
	import Streaml from '../components/body/stream.vue'
	import foot from '../components/body/foot.vue'
	import {getVideo} from '@/api'
	export default{
		name:'home',
		
		data(){
			return{
				http:[],
				data:[],
				src:"",
				pic:[
			{pic:require("../assets/shangshi.jpg")},
					{pic:require('../assets/qiye.png')},
					{pic:require("../assets/2013.png")},
					{pic:require('../assets/2014.png')},
					{pic:require('../assets/2015.jpg')},
					{pic:require("../assets/2016.jpg")},
					{pic:require('../assets/2017.jpg')},
					{pic:require('../assets/2018.jpg')},
					{pic:require("../assets/2019.jpg")},
					{pic:require('../assets/2020.jpg')},
				]
			}
		},
		created(){
this.getVidao();
		},
		methods:{
 getVidao() {
       
        getVideo()
 .then(res=> {
  console.log(res);
 console.log(res.data.rows);
 this.http=res.data.rows
 var j=0
this.http.forEach(item=>{
	if(item.Img!=""){
item.Img="http://ipo.zj-runyang.com"+item.Img
this.data[j]=item
j++
	}


})
for(var i=0;i<this.pic.length;i++){
	console.log(this.pic[i]);
	this.http[i].pic=this.pic[i].pic
}

this.http=this.data
console.log(this.http,"1");
console.log(this.data,"2");

 })
 .catch(err=> {

 
 });
             

     
	}, 
	handleScroll () {
         let scrollTop = window.scrollY || window.pageYOffset || 
                            document.documentElement.scrollTop || document.body.scrollTop
         let offsetTop = document.querySelector("#home").offsetTop // 获取元素距离顶部的高度
        //  console.log(scrollTop)
}
	 
		},
		mounted(){
　　window.addEventListener('scroll',this.handleScroll) // 监听滚动事件，然后用handleScroll这个方法进行相应的处理
},
		components:{
			Headl,
			Bodyl,
			Title,
			Streaml,
			foot
		},
		
	}
</script>

<style scoped>
	.headl{
		border-bottom: 3px solid #ffcd85;
	}
	.bodyl{
		border-bottom: 10px solid #ffcd85;
		
	}
</style>
