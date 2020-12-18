<template>
  <span class="tip  gradient-text-one" style="display:inline-block" v-html="time"></span>
</template>


<script>
  export default{
    data () {
      return {
        time : '',
        flag : false
      }
    },
    mounted () {
      let time = setInterval(()=>{
        if(this.flag == true){
          clearInterval(time)
        }
        this.timeDown()
      },500)
    },
    props : {
      endTime : {
        type : String
      }
    },
    methods : {
      timeDown () {
        const endTime = new Date("2020/12/25 09:25")
        const nowTime = new Date();
        let leftTime = parseInt((endTime.getTime()-nowTime.getTime())/1000)
        let d = parseInt(leftTime/(24*60*60))
        let h = this.formate(parseInt(leftTime/(60*60)%24))
        let m = this.formate(parseInt(leftTime/60%60))
        let s = this.formate(parseInt(leftTime%60))
        if(leftTime <= 0){
          this.flag = true
          this.$emit('time-end')
        }
        this.time = `距离正式敲钟还有<span style="font-size:8rem">${d}</span>天${h}:${m}:${s}`
      },
      formate (time) {
        if(time>=10){
          return time
        }else{
          return `0${time}`
        }
      }
    }
  }
</script>

<style scoped>
	.tip{
	  /* display: flex; */
	color: #fff;
	font-size: 4rem;
	font-family: '华康俪金黑W8';
	font-weight: 700;
	text-align: center;
	color: #fad570;
	}
	.gradient-text-one{
	    background-image:-webkit-linear-gradient(bottom,#fdb754,white); 
	    -webkit-background-clip:text; 
	    -webkit-text-fill-color:transparent; 
	} 
	
</style>