import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
// 引入字体样式
import './common/fonts/font.css';

import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css';

import $ from 'jquery'
Vue.prototype.$ = $
Vue.use(VueVideoPlayer)
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)
Vue.config.productionTip = false

new Vue({
	VueVideoPlayer,
  router,
  render: h => h(App),
}).$mount('#app')
