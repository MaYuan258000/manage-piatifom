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
import ShopSet from '../views/main/myshop/shopset/shopset'
import ShopName from '../views/main/myshop/shopname/shopname'
import Shopcar from '../views/main/shopcar/shopcar'
import Usercenter from '../views/main/usercenter/usercenter'
import Password from '../views/password/password'

import Zhuda from '../views/main/benzhouzhuda/zhuda'
import Yueda from '../views/main/benyuezhuda/yueda'
import Jiating from '../views/main/jiating/jiating'
import Dianpu from '../views/main/myshop/dianpu/dianpu'
import Dianpushezhi from '../views/main/myshop/dianpushezhi/dianpushezhi'
import Dianpumingcheng from '../views/main/myshop/dianpumingcheng/dianpumingcheng'
import Dianpujianjie from '../views/main/myshop/dianpujianjie/dianpujianjie'
import DianpuID from '../views/main/myshop/dianpuID/dianpuID'
import Tiyandian from '../views/main/myshop/tiyandian/tiyandian'
import Xiaoshoutongji from '../views/main/myshop/xiaoshoutongji/xiaoshoutongji'
import Dingdan from '../views/main/myshop/dingdan1/dingdan1'
import Dingdan1 from '../views/main/myshop/dingdan/dingdan'
import Dizhi from '../views/main/dizhi/dizhi'
import Shopbianji from '../views/main/shopbianji/shopbianji'
import Shopdingdan from '../views/main/myshop/shopdingdan/shopdingdan'
import Yijianfankui from '../views/main/myshop/yijianfankui/yijianfankui'
import Pingjia from '../views/main/myshop/pingjia/pingjia'
import Grenziliao from '../views/main/myshop/gerenziliao/gerenziliao'
import SetPage from '../views/main/myshop/setPage/setPage'
import Hhongbaojiangli from '../views/main/myshop/hongbaojiangli/hongbaojiangli'
import Usercenterr from '../views/main/usercenter/username/username'
import Usercendingdan from '../views/main/usercenter/userdingdan/userdingdan'
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
				component: Myshop,
			},
			{
				path: 'dianpu',
				component: Dianpu
			},
			{
				path: 'username',
				component: Usercenterr
			},
		]

	},
	{
		path: '/shopset',
		component: ShopSet
	},
	{
		path: '/shopname',
		component: ShopName
	},
	{
		path: '/usercenter',
		component: Usercenter
	},
	{
		path: '/zhuda',
		component: Zhuda
	},
	{
		path: '/yueda',
		component: Yueda
	},
	{
		path: '/jiating',
		component: Jiating
	},

	{
		path: '/dianpushezhi',
		component: Dianpushezhi
	},
	{
		path: '/dianpumingcheng',
		component: Dianpumingcheng
	},
	{
		path: '/dianpujianjie',
		component: Dianpujianjie
	},
	{
		path: '/dianpuID',
		component: DianpuID
	},
	{
		path: '/tiyandian',
		component: Tiyandian
	},
	{
		path: '/xiaoshoutongji',
		component: Xiaoshoutongji
	},
	{
		path: '/dingdan1',
		component: Dingdan
	},
	{
		path: '/dingdan',
		component: Dingdan1
	},
	{
		path: '/dizhi',
		component: Dizhi
	},
	{
		path: '/shopbianji',
		component: Shopbianji
	},
	{
		path: '/shopdingdan',
		component: Shopdingdan
	},
	{
		path: '/userdingdan',
		component: Usercendingdan
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

	},
	{

		path: '/hongbaojiangli',
		component: Hhongbaojiangli

	},
	{

		path: '/yijianfankui',
		component: Yijianfankui

	},
		{

		path: '/pingjia',
		component: Pingjia

	},
		{

		path: '/gerenziliao',
		component: Grenziliao

	},
	{

		path: '/setPage',
		component: SetPage

	}

]
export default new Router({
	routes: routes,
	linkActiveClass: 'active'
})