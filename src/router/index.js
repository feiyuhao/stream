import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=> import('../views/index')
const Pc =()=> import('../views/pc/pc')

Vue.use(VueRouter)

const routes = [
	{
		path: '',
		redirect: '/pc'
	  },
	{
		path:'/home',
		component: Home ,
		meta:{
			title: '浙江润阳新材料科技股份有限公司'
		  }
	
	},
	{
		path: '/pc',
		component: Pc,
		meta:{
			title: '浙江润阳新材料科技股份有限公司'
		  }
	}
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

export default router