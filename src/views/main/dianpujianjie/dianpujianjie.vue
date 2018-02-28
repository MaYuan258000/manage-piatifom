<template>
		<div class="main_8">
				<img src="../../../../static/img/sdsdsd_01.jpg" style="width: 100%;">
		<div class="odd">
			<i class="el-icon-arrow-left" @click="back"></i>
			<h3 style="margin-left: 6rem;">店铺简介</h3>
			<img src="../../../../static/img/sdsdsd_04.jpg" style="width: 10%; margin-left: 6rem;">
		</div>
		<div class="ming">
			<textarea type="text" name="" id="" value=""  placeholder="请填写你的店铺简介" class="inn" cols="50" rows="10"/>
		</div>
	</div>
</template>

<script>
		export default{
		data(){
			return{

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
	.el-icon-arrow-left {
		font-size: 40px;
		color: black;
		margin-left: 0rem;
	}
		.ming{
		width: 100%;
		height: 10rem;
		background: white;
	}
	.main_8{
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
		
	}
</style>