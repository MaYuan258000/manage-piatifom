//引入vuex
import Vue from 'vue'
import Vuex from 'vuex';
//new一个vuex
Vue.use(Vuex)
const store=new Vuex.Store({
	state:{
		acount:8000,
		title:"赵晓双智障",
		age:23,
		userInfo:{
			myshopp:{
				name:'大润发超市'
			},
			userName:'mayuan',
			phone:13717800979,
		}
	},
	mutations:{
		checkout(state,pay){
			state.acount-=pay
		},
	  setAge(state,age){
	  	state.age=age
	  },
	  changeShopName(state,name){
	  	state.userInfo.myshop.name=name
	  }
	},
	actions:{
		ageAction(context){
			setTimeout(()=>{
				context.commit('setAge',29)
			},2000)
		}
	}
})

export default store;