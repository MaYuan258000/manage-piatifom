<template>
	<div id="oo">
		<div class="wrapper flexBox flexCol">
			<div class="flex1">
				<router-view></router-view>
			</div>
			<div class="myTab flexBox">
				<div class="flex1 center flexBox flexCol" @click="setIndex(1)">
					<img src="../../../static/img/gouwu.jpg" class="ww" v-show="currentIndex==1">
					<img src="../../../static/img/gowuwu.jpg"  class="ww" v-show="currentIndex!=1">
					<router-link to="/main/goshoping" class="odd2">购物</router-link>
				</div>
				<div class="flex1 center flexBox flexCol" @click="setIndex(2)">
			       <img src="../../../static/img/gouwuche1.jpg" class="ww" v-show="currentIndex==2">
			       <img src="../../../static/img/shopcar.jpg" class="ww" v-show="currentIndex!=2">
					<router-link class="odd2" to="/main/shopcar" >购物车</router-link></div>
			   <div class="flex1  center flexBox flexCol" @click="setIndex(3)">
			       <img src="../../../static/img/dianpu (2).jpg" class="ww" v-show="currentIndex==3">
			       <img src="../../../static/img/dianpu.jpg" class="ww" v-show="currentIndex!=3">
					<router-link class="odd2" to="/main/myshop" >我的店铺</router-link></div>
			 <div class="flex1  center flexBox flexCol" @click="setIndex(4)">
			       <img src="../../../static/img/username (2).jpg" class="ww" v-show="currentIndex==4">
			       <img src="../../../static/img/username.jpg" class="ww" v-show="currentIndex!=4">
					<router-link class="odd2" to="/main/usercenter" >个人中心</router-link></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				currentIndex:1
			}
		},
		methods:{
			setIndex(index){
				this.currentIndex=index
			}
		},
		watch:{
			$route:function(router){
				if(router.path=='/main/goshoping'||router.path=='/main/shopcar'){
					this.currentIndex=1
				}
				if(router.path=='/main/shopcar'){
					this.currentIndex=2
				}
				if(router.path=='/main/goshoping'){
					this.currentIndex=1
				}
				if(router.path=='/main/myshop'){
					this.currentIndex=3
				}
				if(router.path=='/main/usercenter'){
					this.currentIndex=4
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.myTab a.active{
	color: #ca3232;
}
.myTab{
	margin-left: -20px;
}
.odd1{
	position: absolute;
	top: 12px;
	left: 2px;
}
.odd2{
	position: relative;
	top: 12px;
	left: 5px;
}
.odd3{
	position: relative;
	top: 12px;
	left: 0px;
}
.odd4{
	position: relative;
	top: 12px;
	left: 0px;
} 
.ww{
	position: relative;
	top: 25px;
	z-index: 100;
	left: 5px;
}
.myTab{
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background: white;
	width: 100%;
}
.myTab a{
	width: 100%;
     background: white;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	color: black;
}
</style>