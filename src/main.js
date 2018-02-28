// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
Vue.config.productionTip = false
Vue.axios=axios
Vue.use(ElementUI)
Vue.use(Vuex);
const store = new Vuex.Store({
	state:{
		name:"mayuan",
		num:2
	},
	getters:{
		nameArray:function(state){
			return state.name.split('')
		}
	},
	mutations:{
		Change:function(state){
			setInterval(function(){
				state.num++
			},1000)
		}
	},
	actions:{
		add:function(context){
			setInterval(function(){
				context.commit('Change')
			},1000)
			
		}
	}
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
