<template>
	<div class="main_4">
		<img src="../../../../static/img/erer_01.jpg" style="width: 100%;">
		<div class="odd">
			<i class="el-icon-arrow-left" @click="back"></i>
			<h3 style="margin-left: 6rem; color: white;">家庭套餐</h3>
			<img src="../../../../static/img/erer_04.jpg" style="width: 10%; margin-left: 6rem;">
		</div>
		<div class="nei">
			<div class="top-3">
				<div class="zuo-1">
					<img src="../../../../static/img/taocan_06.jpg" style="width: 100%;">
				</div>
				<div class="zhong-1">
					<img src="../../../../static/img/taocan_08.jpg" style="width: 100%;">
				</div>
				<div class="you-1">
					<img src="../../../../static/img/taocan_03.jpg" style="width: 100%;">
				</div>
			</div>
			<div class="xia">
				<p style="margin-left: 1rem;">日本2H2D 黑玛卡 强肾 滋补 60粒</p>
				<span style="color: #ca3232; position: absolute; right: 1rem;">￥219.00</span>
				<p style="margin-top: 2rem; margin-left: 3rem; font-size: 10px; color: #bbbbbb;">

					<button class="butn">保税区</button>
					<s>￥596.00</s></p>
			</div>
			<div class="bottom-3">

				<div class="zuo-1">
					<img src="../../../../static/img/taocan_14.jpg" style="width: 100%;">
				</div>
				<div class="zhong-1">
					<img src="../../../../static/img/taocan_15.jpg" style="width: 100%;">
				</div>
				<div class="you-1">
					<img src="../../../../static/img/taocan_17.jpg" style="width: 100%;">
				</div>
			</div>
			<div class="xia1">
				<p style="margin-left: 1rem;">日本2H2D 黑玛卡 强肾 滋补 60粒</p>
				<span style="color: #ca3232; position: absolute; right: 1rem;">￥219.00</span>
				<p style="margin-top: 2rem; margin-left: 3rem; font-size: 10px; color: #bbbbbb;">

					<button class="butn">保税区</button>
					<s>￥596.00</s></p>
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

<style scoped>
	.butn {
		border: none;
		border-radius: 5px;
		border: 1px solid #dc7676;
		background: none;
		color: #dc7676;
		position: absolute;
		left: 1rem;
	}
	
	.xia {
		width: 100%;
		height: 5rem;
		position: absolute;
		top: 13rem;
		display: flex;
	}
		.xia1 {
		width: 100%;
		height: 5rem;
		position: absolute;
		top: 28rem;
		display: flex;
	}
	
	.top-3 {
		width: 100%;
		height: 13rem;
		display: flex;
		background: white;
	}
	
	.bottom-3 {
		width: 100%;
		height: 13rem;
		display: flex;
		background: white;
		margin-top: 0.5rem;
	}
	
	.zuo-1 {
		width: 50%;
		height: 10rem;
	}
	
	.zhong-1 {
		width: 50%;
		height: 10rem;
	}
	
	.you-1 {
		width: 50%;
		height: 10rem;
	}
	
	.nei {
		width: 100%;
		height: 30rem;
		background: #f1f1f1;
	}
	
	.el-icon-arrow-left {
		font-size: 40px;
		color: #ffffff;
		margin-left: 0rem;
	}
	
	.odd {
		width: 100%;
		height: 4rem;
		background: #009cff;
		margin-top: -0.3rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
</style>