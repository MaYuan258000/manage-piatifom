//引入vuex
import Vue from 'vue'
import Vuex from 'vuex';
//new一个vuex
Vue.use(Vuex)
const store=new Vuex.Store({
	state:{
		acount:8000,
		title:"赵晓双智障",
		age:23
	},
	mutations:{
		checkout(state,pay){
			state.acount-=pay
		},
	  setAge(state,age){
	  	state.age=age
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