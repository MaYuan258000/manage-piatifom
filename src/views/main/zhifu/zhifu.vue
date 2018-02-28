<template>
	<div class="main_11">
		<img src="../../../../static/img/sdsdsd_01.jpg" style="width: 100%;">
		<div class="odd">
			<i class="el-icon-arrow-left" @click="back"></i>
			<h3 style="margin-left:-11rem;">选择支付方式</h3>
		</div>

		<div class="lie">
			<div class="ziliao">
				<div class="ge"><img src="../../../../static/img/zhifu_03.jpg" style="width: 10%; position: absolute; top: 5.8rem; left: 1.5rem;"><router-link to="/main/dizhi"><span style="margin-left:5rem;">支付宝支付</span></router-link></div>
				<div class="ge1"><img src="../../../../static/img/zhifu_06.jpg" style="width: 10%; position: absolute; top: 10rem; left: 1.5rem;"><span style="position: absolute; left: 5rem; top: 9.5rem;">微信支付</span></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			back() {
				history.go(-1)
			}
		}
	}
</script>

<style>
	.ziliao {
		width: 100%;
		height: 7rem;
		
	}
	
	.lie {
		width: 100%;
		height: 8rem;
		background: white;
		
	}
	
	.ge {
		width: 100%;
		height: 3.5rem;
		background: white;
		line-height: 3.5rem;
	}
	
	.ge1 {
		width: 100%;
		height: 3.5rem;
		background: white;
		line-height: 3.5rem;
		border-top: 1px solid #DDDDDD;
	}
	
	.main_11 {
		width: 100%;
		height: 70rem;
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
		margin-left: -7rem;
	}
	
	.man {
		width: 100%;
		height: 10rem;
		background: white;
	}
</style>