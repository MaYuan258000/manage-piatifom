<template>
	<div class="main_5">
				<Topzujian2
		        title='我的店铺'
		
		></Topzujian2>
		<div class="nav">
			<div class="nav-left">
			<dl>
				<dt><img src="../../../../../static/img/dswqq_03.jpg" style="width: 60%; margin-left: 0.5rem;"></dt>
				<dd style="position: relative;right: 1.7rem; color: white; top: -0.5rem;">黑卡卡的店<img src="../../../../../static/img/dswqq_06.jpg" style="width: 10%; margin-left: 0.5rem;"></dd>
				<dd><router-link to="/dianpushezhi"><button class="buu">店铺设置</button></router-link></dd>
			</dl>
			</div>
			<div class="nav-right">
				<img src="../../../../../static/img/dswqq_09.jpg" style="width: 50%; margin-left: 1.8rem; margin-top: 1.2rem;">
			</div>
		</div>
		
		<div class="xiao">
			<div class="xiao-left">
				<p style="padding: 0.5rem 0.5rem; color: #767a97;">今日销售总额</p>
				<p style="padding: 0.5rem; margin-top: -0.5rem; font-size: 20px;">￥0.00</p>
			</div>
			<div class="xiao-right">
				<p style="padding: 0.5rem 0.5rem; color: #767a97;">今日总订单</p>
				<p style="padding: 0.5rem; margin-top: -0.5rem; font-size: 20px;">0</p>
			</div>
		</div>
		<div class="xiang">
			<div class="tou">
			<div class="xiang-left" @click="dingdan">
				<img src="../../../../../static/img/dswqq_15.jpg" style="width: 40%;margin-left: 2.2rem; margin-top: 1rem;">
				<p style="text-align: center; margin-top: 0.5rem;">店铺订单</p>
			</div>
			<div class="xiang-zhong" @click="huopin">
					<img src="../../../../../static/img/dswqq_18.jpg" style="width: 40%;margin-left: 2.2rem; margin-top: 1rem;">
				<p style="text-align: center; margin-top: 1rem;">货品管理</p>
			</div>
			<div class="xiang-right" @click="tuiguang">
				<img src="../../../../../static/img/dswqq_20.jpg" style="width: 40%;margin-left: 2.2rem; margin-top: 1rem;">
				<p style="text-align: center; margin-top: 0.5rem;">我要推广</p>
			</div>
			</div>
			<div class="tou">
			<div class="xiang-left" @click="dianpusheng">
				<img src="../../../../../static/img/dswqq_28.jpg" style="width: 40%;margin-left: 2.2rem; margin-top: 1rem;">
				<p style="text-align: center; margin-top: 0.5rem;">店铺升级</p>
			</div>
			<div class="xiang-zhong" @click="hongbao">
					<img src="../../../../../static/img/dswqq_26.jpg" style="width: 40%;margin-left: 2.2rem; margin-top: 0.7rem;">
				<p style="text-align: center; margin-top: 0.2rem;">红包奖励</p>
			</div>
			<div class="xiang-right" @click="help">
				<img src="../../../../../static/img/dswqq_31.jpg" style="width: 40%;margin-left: 2.2rem; margin-top: 0.7rem;">
				<p style="text-align: center; margin-top: 0.2rem;">使用帮助</p>
			</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Topzujian2 from '../../../../components/Topzujian2'
	export default{
		data(){
			return{
			}
		},
		components:{
			Topzujian2
		},
		methods:{
			dingdan(){
				this.$router.push('/userdingdan')
			},
			huopin(){
				this.$router.push('/shopdingdan')
			},
			tuiguang(){
				this.$router.push('/dingdan1')
			},
			dianpusheng(){
				this.$router.push('/dingdan')
			},
			hongbao(){
				this.$router.push('/hongbaojiangli')
			},
			help(){
				this.$router.push('/xiaoshoutongji')
			}
		}
	}
</script>

<style scoped>
	.tou{
		width: 100%;
		height: 7rem;
		display: flex;
	}
	
	.xiang-left{
		width: 33.3%;
		height: 7rem;
		border: 1px solid #dddddd;
	}
		.xiang-zhong{
		width: 33.3%;
		height: 7rem;
		border: 1px solid #dddddd;
		border-left: none;
	}
		.xiang-right{
		width: 33.3%;
		height: 7rem;
		border: 1px solid #dddddd;
		border-left: none;
	}
	.xiang{
		width: 100%;
		height: 15rem;
		background: white;
		margin-top: 0.7rem;
	
	}
	 .xiao-left{
	 	width: 50%;
	 	height: 5rem;
	 	border-right: 1px solid #DDDDDD;
	 }
	 .xiao-right{
	 	width: 50%;
	 	height: 5rem;
	 }
	.xiao{
		width: 100%;
		height: 5rem;
		background: white;
		display: flex;
	}
	.nav-left dl dt{
		float: left;
	}
	.nav-left{
		width: 70%;
		height: 6rem;
	}
	.nav-right{
		width: 30%;
		height: 6rem;
		background: #1f2228;
	}
	.nav{
		width: 100%;
		height: 6rem;
		background: #ca3232;
		display: flex;
	}
		.odd {
		width: 100%;
		height: 4rem;
		background: white;
		margin-top: -0.3rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
		
	}
		.buu {
		width: 25%;
		height: 1.8rem;
		position: absolute;
		left: 5rem;
		top: 8rem;
		border: none;
		border-radius: 8px;
		border: 1px solid #ff9f9f;
		background: none;
		color: white;
	}
	.main_5{
		width: 100%;
		height: 38rem;
		background: #F3F3F3;
	}
</style>