<template>
	<div class="main_11">
		<img src="../../../../static/img/sdsdsd_01.jpg" style="width: 100%;">
		<div class="odd">
			<h3 style="margin-left:9rem;"><router-link to="/main/shopdingdan" style="color: black;">购物车</router-link></h3>
			<button class="bbc">完成</button>
			<img src="../../../../static/img/sdsdsd_04.jpg" style="width: 8%;">
		</div>
		<div class="yang">
			<input type="checkbox" style="width: 20px; height: 20px; margin-top: 0.8rem; margin-left: 1rem;">
			<span style="position: absolute; top: 6rem; left: 3rem;">洋玩易总店</span>
		</div>
		<div class="nei_1">
			<div class="nei-2" v-for="(item,index) in lid">
				<div class="nei-left">
					<input type="checkbox" style="width: 20px; height: 20px; margin-top: 3rem; margin-left: 1rem;">
				</div>
				<div class="nei-zhong">
					<img :src="item.img" style="width: 100%;">
				</div>
				<div class="nei-right">
					<h5 style="font-size: 15px; margin-top: -0.2rem; margin-left: 0.7rem;">{{item.name}}</h5>
					<button style="width: 15%; height:1.8rem; border-radius: 5px 0px 0 5px; background: #f7f7f7; border: none; margin-left: 0.7rem;">-</button>
					<input type="text" style="width: 20%;border: none; background: #e6e6e6;width: 30%;height: 1.7rem; margin-top: 0.8rem;">
					<button style="width: 15%; height:1.8rem; border-radius: 0px 5px 5px 0px; background: #e6e6e6; border: none; margin-left: -0.2rem;">+</button>
				</div>
			</div>
		</div>
		<div class="li">
			<div class="li-left">
				<div class="li-left1">
					<input type="checkbox" style="width: 20px; height: 20px; margin-top: 1rem; margin-left: 1rem;"><span style=" position: absolute; top: 0.9rem; left: 2.6rem;">全选</span>
				</div>
				<div class="li-left2">
					移至收藏夹
				</div>
			</div>
			<div class="li-right">
				<a href="#">删除</a>
			</div>
		</div>

		<div id="main" style="width: 300px; height: 200px;"></div>

		<div class="flexBox container">
			<div id="main1" class="flex1 border" style="width: 300px; height: 200px;"></div>
			<div id="main2" class="flex2 border" style="width: 300px; height: 200px;"></div>
		</div>
	</div>
</template>

<script>
	import * as echarts from 'echarts'
	export default {
		data() {
			return {
				lid: [{
						"img": "../../../../static/img/gowu_03.jpg",
						"name": "Metaolic酵母x精华粒 减肥排毒60粒",
						"price": "￥219.00",
						"price1": "￥596.00"
					},
					{
						"img": "../../../../static/img/gowu_03.jpg",
						"name": "Metaolic酵母x精华粒 减肥排毒60粒",
						"price": "￥219.00",
						"price1": "￥596.00"
					}
				],
				option: {
					title: {
						text: 'ECharts 入门示例'
					},
					tooltip: {},
					legend: {
						data: ['销量']
					},
					xAxis: {
						data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
					},
					yAxis: {},
					series: [{
						name: '销量',
						type: 'bar',
						data: [5, 20, 36, 10, 10, 20]
					}]

				}
			}
		},
		mounted: function() {
			var myChart = echarts.init(document.getElementById('main'));
			myChart.setOption(this.option);
			var myChart1 = echarts.init(document.getElementById('main1'));
			myChart1.setOption(this.option);
			var myChart2 = echarts.init(document.getElementById('main2'));
			myChart2.setOption(this.option);
		},
		methods: {
			back() {
				history.go(-1)
			}
		}
	}
</script>

<style>
	.border {
		border: 1px solid blue;
	}
	
	.mnd-left {
		width: 50%;
		height: 13rem;
		border: 1px solid #0000FF;
	}
	
	.mnd-right {
		width: 50%;
		height: 13rem;
		border: 1px solid #0000FF;
	}
	
	.mnd {
		width: 100%;
		height: 13rem;
		display: flex;
	}
	
	.li-left1 {
		width: 50%;
		height: 3rem;
		background: white;
		color: black;
	}
	
	.li-left2 {
		width: 50%;
		height: 3rem;
		line-height: 3rem;
		text-align: center;
		color: white;
	}
	
	a {
		color: white;
		text-decoration: none;
	}
	
	.li-right {
		width: 30%;
		height: 3rem;
		background: #ff5400;
		text-align: center;
		line-height: 3rem;
		font-size: 17px;
	}
	
	.li-left {
		width: 70%;
		height: 3rem;
		background: #262626;
		opacity: 0.9;
		display: flex;
	}
	
	.li {
		width: 100%;
		height: 3rem;
		position: fixed;
		bottom: 42px;
		display: flex;
	}
	
	.tui-left {
		width: 50%;
		height: 9rem;
		background: red;
	}
	
	.tui-right {
		width: 50%;
		height: 9rem;
		background: green;
	}
	
	.tui {
		width: 100%;
		height: 18rem;
		background: white;
		display: flex;
	}
	
	.zuo {
		width: 40%;
		height: 0.2rem;
		background: #cccccc;
		margin-left: 0.3rem;
	}
	
	.zhong {
		width: 10%;
		margin-left: 0.8rem;
		margin-top: -0.5rem;
	}
	
	.you {
		width: 40%;
		height: 0.2rem;
		background: #cccccc;
		margin-left: 1rem;
	}
	
	.tuijian {
		width: 100%;
		height: 1.5rem;
		margin-top: 0.5rem;
		display: flex;
		padding-top: 1rem;
	}
	
	.nei-2 {
		width: 100%;
		height: 7rem;
		display: flex;
		margin-bottom: 1rem;
	}
	
	.nei-left {
		width: 10%;
		height: 7rem;
		margin-top: 0.8rem;
	}
	
	.nei-zhong {
		width: 30%;
		height: 7rem;
		margin-top: 0.8rem;
	}
	
	.nei-right {
		width: 60%;
		height: 7rem;
		margin-top: 0.8rem;
	}
	
	.nei_1 {
		width: 100%;
		height: 17rem;
		background: white;
	}
	
	.yang {
		width: 100%;
		height: 3rem;
		background: white;
		border-bottom: 1px solid #DDDDDD;
	}
	
	.bbc {
		border-radius: 5px;
		border: none;
		width: 3.5rem;
		height: 1.9em;
		background: none;
		border: 1px solid #DDDDDD;
		background: #ca3232;
		color: white;
	}
	
	.ziliao {
		width: 100%;
		height: 7rem;
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
	
	.man {
		width: 100%;
		height: 10rem;
		background: white;
	}
</style>