<template>
	<div class="main_6">
		<img src="../../../../static/img/sdsdsd_01.jpg" style="width: 100%;">
		<div class="odd">
			<i class="el-icon-arrow-left" @click="back"></i>
			<h3 style="margin-left: 6rem;">店铺设置</h3>
			<img src="../../../../static/img/sdsdsd_04.jpg" style="width: 10%; margin-left: 6rem;">
		</div>
		<div class="zhuu">
			<div class="dianID" v-for="(item,index) in shop">
				<h4 style="margin-left: 1rem;">{{item.name}}</h4>
				<span style="margin-right: 1rem; color: #DDDDDD;">{{item.title}}</span>
				<img :src="item.img" style="width: 10%; position: absolute; right: 1rem;">
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				shop:[
				 {"name":"店铺ID","title":"1314520"},
				 {"name":"店铺头像","img":"../../../../static/img/dswqq_03.jpg"},
				 {"name":"店铺名称","title":"K.K小店"},
				 {"name":"店铺简介"},
				 {"name":"店铺二维码"},
				]
			}
		},
		methods:{
				back() {
				history.go(-1)
			}
		}
	}
</script>

<style>
	.dianID{
		width: 100%;
		height: 3rem;
		border-bottom: 1px solid #DDDDDD;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.zhuu{
		width: 100%;
		height: 20rem;
		background: white;
		margin-top: 0.1rem;
	}
	.main_6{
		width: 100%;
		height: 40rem;
		background: #F3F3F3;
	}
		.odd {
		width: 100%;
		height: 4rem;
		background: white;
		margin-top: -0.3rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-bottom: 1px solid red;
	}
		.el-icon-arrow-left {
		font-size: 40px;
		color: black;
		margin-left: 0rem;
	}
</style>