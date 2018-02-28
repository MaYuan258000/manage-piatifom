import Vue from 'vue'
import Router from 'vue-router'

import Login from '../views/login/login'
import Zhuce from '../views/login/zhuce'
import Wangjimima from '../views/wangjimima/wangjimima'
import SetPassWord from '../views/wangjimima/setPassWord/setPassWord'
import Yanzhengma from '../views/wangjimima/yanzhengma/yanzhengma'
import Qidong from '../views/wangjimima/qidong/qidong'
import Start from '../views/start/start'
import Main from '../views/main/main'
import Goshoping from '../views/main/goshoping/goshoping'
import Myshop from '../views/main/myshop/myshop'
import Shopcar from '../views/main/shopcar/shopcar'
import Usercenter from '../views/main/usercenter/usercenter'
import Password from '../views/password/password'

import Zhuda from '../views/main/benzhouzhuda/zhuda'
import Yueda from '../views/main/benyuezhuda/yueda'
import Jiating from '../views/main/jiating/jiating'
import Dianpu from '../views/main/dianpu/dianpu'
import Dianpushezhi from '../views/main/dianpushezhi/dianpushezhi'
import Dianpumingcheng from '../views/main/dianpumingcheng/dianpumingcheng'
import Dianpujianjie from '../views/main/dianpujianjie/dianpujianjie'
import Tiyandian from '../views/main/tiyandian/tiyandian'
import Xiaoshoutongji from '../views/main/xiaoshoutongji/xiaoshoutongji'
import Dingdan from '../views/main/dingdan1/dingdan1'
import Dizhi from '../views/main/dizhi/dizhi'
import Shopbianji from '../views/main/shopbianji/shopbianji'
import Shopdingdan from '../views/main/shopdingdan/shopdingdan'
Vue.use(Router)

const routes = [{

		path: '/',
		redirect: '/qidong'

	},
	{

		path: '/qidong',
		component: Qidong

	}, {

		path: '/login',
		component: Login

	}, {

		path: '/start',
		component: Start

	},
	{

		path: '/main',
		name: "Main",
		component: Main,
		children: [{
				path: '',
				component: Goshoping
			},
			{
				path: 'goshoping',
				component: Goshoping
			},
			{
				path: 'shopcar',
				component: Shopcar
			},
			{
				path: 'myshop',
				component: Myshop
			},
			{
				path: 'usercenter',
				component: Usercenter
			},
			{
				path: 'zhuda',
				component: Zhuda
			},
			{
				path: 'yueda',
				component: Yueda
			},
			{
				path: 'jiating',
				component: Jiating
			},
			{
				path: 'dianpu',
				component: Dianpu
			},
			{
				path: 'dianpushezhi',
				component: Dianpushezhi
			},
			{
				path: 'dianpumingcheng',
				component: Dianpumingcheng
			},
			{
				path: 'dianpujianjie',
				component: Dianpujianjie
			},
			{
				path: 'tiyandian',
				component: Tiyandian
			},
			{
				path: 'xiaoshoutongji',
				component: Xiaoshoutongji
			},
			{
				path: 'dingdan1',
				component: Dingdan
			},
			{
				path: 'dizhi',
				component: Dizhi
			},
			{
				path: 'shopbianji',
				component: Shopbianji
			},
			{
				path: 'shopdingdan',
				component: Shopdingdan
			}
		]

	},
	{

		path: '/password',
		component: Password

	},
	{

		path: '/zhuce',
		component: Zhuce

	},
	{

		path: '/wangjimima',
		component: Wangjimima

	},
	{

		path: '/setPassWord',
		component: SetPassWord

	},
	{

		path: '/yanzhengma',
		component: Yanzhengma

	}

]
export default new Router({
	routes: routes,
	linkActiveClass:'active'
})