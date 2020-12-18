<template>
  <div id="app">
	<router-view v-wechat-title='$route.meta.title'></router-view>
  </div>
</template>

<script>
import Home from './views/index.vue'
import './util/firework'
export default {
  name: 'app',
  components: {
		Home
  },
  mounted() {
    if (this._isMobile()) {
      // alert("手机端");
      this.$router.replace('/home');
    } else {
      // alert("pc端");
      this.$router.replace('/pc');
    }
    this._isMobile()
  },
  methods:{
　_isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    }
  }
}
$(function(){
  $("#app").fireworks({
   width: "100%",
   height: "100%"
  });
 });
</script>

<style>

</style>
