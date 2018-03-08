<template>
		<div class="wrapper flexBox flexCol">
			<div class="flex1 autoBox">
				<router-view></router-view>
			</div>
			<div class="navTab flexBox">
				<div class="flex1 center flexBox flexCol" @click="setIndex(1)">
					<img src="../../../static/img/gouwu.jpg" class="thisIcon" v-show="currentIndex==1">
					<img src="../../../static/img/gowuwu.jpg"  class="thisIcon" v-show="currentIndex!=1">
					<router-link to="/main/goshoping" :class='{active:(currentIndex==1),notActive:(currentIndex!=1)}'>购物</router-link>
				</div>
				<div class="flex1 center flexBox flexCol" @click="setIndex(2)">
			       <img src="../../../static/img/gouwuche1.jpg" class="thisIcon" v-show="currentIndex==2">
			       <img src="../../../static/img/shopcar.jpg" class="thisIcon" v-show="currentIndex!=2">
					<router-link to="/main/shopcar" :class='{active:(currentIndex==2),notActive:(currentIndex!=2)}'>购物车</router-link></div>
			   <div class="flex1  center flexBox flexCol" @click="setIndex(3)">
			       <img src="../../../static/img/dianpu (2).jpg" class="thisIcon" v-show="currentIndex==3">
			       <img src="../../../static/img/dianpu.jpg" class="thisIcon" v-show="currentIndex!=3">
					<router-link  to="/main/dianpu" :class='{active:(currentIndex==3),notActive:(currentIndex!=3)}'>我的店铺</router-link></div>
			 <div class="flex1  center flexBox flexCol" @click="setIndex(4)">
			       <img src="../../../static/img/username (2).jpg" class="thisIcon" v-show="currentIndex==4">
			       <img src="../../../static/img/username.jpg" class="thisIcon" v-show="currentIndex!=4">
					<router-link  to="/main/username" :class='{active:(currentIndex==4),notActive:(currentIndex!=4)}'>个人中心</router-link></div>
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
  .thisIcon{
    width: 25px;
    height: 25px;
  }

.navTab{
	height: 70px;
	background: white;
	z-index: 100;
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

.active{
	color: red;
	text-decoration: none;
}
  .notActive{
    color: #999999;
    text-decoration: none;
  }
</style>