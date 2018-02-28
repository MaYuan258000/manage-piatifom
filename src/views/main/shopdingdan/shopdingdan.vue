<template>
	<div class="main_12">
		<img src="../../../../static/img/sdsdsd_01.jpg" style="width: 100%;">
		<div class="odd">
			<i class="el-icon-arrow-left" @click="back"></i>
			<h3 style="margin-left: 6rem;">订单确认</h3>
			<img src="../../../../static/img/sdsdsd_04.jpg" style="width: 10%; margin-left: 6rem;">
		</div>

		<div class="di">

			<dl>
				<dt><img src="../../../../static/img/dingdan_05.jpg" style="width: 40%; margin-left: 1rem;"></dt>
				<dd style="position: relative; top: 1rem; left: 0.8rem;">马远 13717800979</dd>
				<dd style="position: relative; top: 1rem;; font-size: 10px; margin-left: 4rem;">地址：山东菏泽曹县东关基督教堂东50米</dd>
				<img src="../../../../static/img/dingdan_02.jpg" style="width: 100%; position: absolute; top: 10rem; left: -0.8rem;">
			</dl>

		</div>

		<div class="zong">
			<div class="zong-top">
				<img src="../../../../static/img/sdsdsd_18.jpg">
				<p>洋玩易总店</p>
			</div>

			<div class="nei_1">
				<div class="nei-2" v-for="(item,index) in lid">
					<div class="nei-left">
						<img :src="item.img" style="width: 100%;">
					</div>
					<div class="nei-zhong">
						<h5 style="font-size: 15px; margin-top: -0.2rem; margin-left: 0.7rem;">{{item.name}}</h5>
						<button style="width: 50%; height:1.8rem; border-radius: 5px; background: none; border: solid 1px #f38873; margin-left: 0.5rem; color: #f38873;">{{item.an}}</button>
					</div>
					<div class="nei-right">
						<p>{{item.price}}</p>
						<p style="margin-left: 7rem; padding-top: 0.5rem;">x1</p>
					</div>
				</div>
			</div>
			<div class="zong-xia">
				<p>小计 ￥438.00</p>
			</div>
		</div>

		<div class="lie">

			<div class="she">
				<div class="ge">
					<p>配送方式</p>
					<span>厂家直邮 邮费￥25</span>
				</div>
			</div>
			<div class="she1">
				<div class="ge1">
					<p>优惠劵</p>
					<span>10元优惠劵</span>
				</div>
			</div>
		</div>
		
		<div class="dibu">
			<div class="dibu-left">
				<p>总计: ￥438.00</p>
			</div>
			<div class="dibu-right">
				<button class="zhi">确认支付</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				lid: [{
						"img": "../../../../static/img/gowu_03.jpg",
						"name": "Metaolic酵母x精华粒 减肥排毒60粒",
						"price": "￥219.00",
						"price1": "￥219.00",
						"an": "保税区"
					},
					{
						"img": "../../../../static/img/gowu_03.jpg",
						"name": "Metaolic酵母x精华粒 减肥排毒60粒",
						"price": "￥219.00",
						"price1": "￥219.00",
						"an": "香港直邮"
					}
				]
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
	.zhi{
		width: 92%;
		height: 3.7rem;
		border: none;
		background: #ca3232;
		color: white;
		font-size: 1.3rem;
		
	}
	.dibu-left p {
		margin-left: 1rem;
		color: #ca3232;
		line-height: 4rem;
	}
	.dibu-left{
		width: 60%;
		height: 4rem;
		background: white;
	}
	.dibu-right{
		width: 40%;
		height: 4rem;
	}
	.dibu{
		width: 100%;
		height: 4rem;
		background: red;
		position: fixed;
		bottom: 35px;
		display: flex;
	}
	.yijian {
		width: 100%;
		height: 7rem;
		margin-top: -2.5rem;
	}
	
	.ge p {
		margin-left: 1rem;
		color: #DDDDDD;
	}
	
	.ge span {
		margin-right: 1rem;
	}
	
	.ge {
		display: flex;
		justify-content: space-between;
	}
	
	.she {
		width: 100%;
		height: 3rem;
		margin-top: 4rem;
		background: white;
		line-height: 3rem;
	}
	
	.ge1 p {
		margin-left: 1rem;
		color: #DDDDDD;
	}
	
	.ge1 span {
		margin-right: 1rem;
	}
	
	.ge1 {
		display: flex;
		justify-content: space-between;
	}
	
	.she1 {
		width: 100%;
		height: 3rem;
		margin-top: 1rem;
		background: white;
		line-height: 3rem;
	}
	
	.lie {
		width: 100%;
		height: 40rem;
		background: #F3F3F3;
	}
	
	.zong-xia p {
		float: right;
		margin-right: 0.5rem;
		line-height: 3rem;
		color: #ca3232;
	}
	
	.zong-xia {
		width: 100%;
		height: 3rem;
		margin-top: -3.3rem;
		border-top: 1px solid #DDDDDD;
	}
	
	.nei-2 {
		width: 100%;
		height: 7rem;
		display: flex;
		margin-bottom: 1rem;
	}
	
	.nei-left {
		width: 30%;
		height: 7rem;
		margin-top: 0.8rem;
		margin-left: 0.5rem;
	}
	
	.nei-zhong {
		width: 70%;
		height: 7rem;
		margin-top: 0.8rem;
	}
	
	.nei-right p {
		margin-left: 4rem;
	}
	
	.nei-right {
		width: 60%;
		height: 7rem;
		margin-top: 0.8rem;
	}
	
	.nei_1 {
		width: 100%;
		height: 19rem;
		background: white;
	}
	
	.zong-top {
		width: 100%;
		height: 2rem;
		border-bottom: 1px solid #DDDDDD;
		display: flex;
		align-items: center;
	}
	
	.zong-top img {
		width: 7%;
		margin-left: 0.8rem;
	}
	
	.zong-top p {
		margin-left: 0.5rem;
	}
	
	.zong {
		width: 100%;
		height: 18rem;
		background: white;
		margin-top: 1rem;
		border: 1px solid #DDDDDD;
	}
	
	.di {
		width: 100%;
		height: 5rem;
		background: white;
		margin-top: -1rem;
	}
	
	.di dl dd {}
	
	.di dl dt {
		float: left;
		margin-top: 1.5rem;
	}
	
	.main_12 {
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
		margin-left: 0rem;
	}
</style>