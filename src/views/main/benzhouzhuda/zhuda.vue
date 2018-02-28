<template>
	<div class="zhu">
		<img src="../../../../static/img/dddddddwww_01.jpg" style="width: 100%;">
			<div class="odd">
				<button class="buu">返回</button>
				<h3 style="margin-right: 4rem; color: white;">本周主打</h3>
		       <img src="../../../../static/img/dddddddwww_06.jpg" style="width: 10%;">
		</div>
		<div class="banner">
			<div class="shang" v-for="(item,index) in listt">
				<div class="left_2">
					<img :src="item.img" style="width: 100%;">
				</div>
				<div class="right_2" >
					<p style="font-size: 15px;">{{item.title}}</p>
					<p style="margin-top: 0.5rem; font-size: 18px; color: #ff953f;">{{item.price}}</p>
					<p>{{item.shi}}<s>{{item.price1}}</s></p>
					<button class="butn">{{item.anniu}}</button>
					<span style="font-size: 10px; color: #b2b2b2;">{{item.num}}</span>
					<img :src="item.imgg" style="width: 20%; position: relative;top: 1rem; left: 1rem;">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				listt:[
				{
				"img":"../../../../static/img/daswsa_03.jpg",
				 "title":"Metabolic夜间瘦 抑制脂肪调理肠道 60袋（特惠价）",
				 "price":"￥213.00",
				 "shi":"市场价",
				 "price1":"￥498.00",
				 "anniu":"日本直邮",
				 "num":"118购买",
				 "imgg":"../../../../static/img/daswsa_06.jpg"
				},
								{
				"img":"../../../../static/img/daswsa_10.jpg",
				 "title":"Metabolic 酵母酵素 乳酸菌减肥排毒 60粒（特惠价）",
				 "price":"￥136.00",
				 "shi":"市场价",
				 "price1":"￥225.00",
				 "anniu":"香港直邮",
				 "num":"118购买",
				 "imgg":"../../../../static/img/daswsa_06.jpg"
				},
								{
				"img":"../../../../static/img/daswsa_12.jpg",
				 "title":"Metabolic生物多糖白芸豆丸瘦身 溶脂160粒（特惠价）",
				 "price":"￥142.00",
				 "shi":"市场价",
				 "price1":"￥298.00",
				 "anniu":"日本直邮",
				 "num":"118购买",
				 "imgg":"../../../../static/img/daswsa_06.jpg"
				},

				]
			}
		},
		methods:{
			backk(){
			
				history.go(-1)
			}
		}
	}
</script>

<style scoped>
	.banner{
		width: 100%;
		height: 70rem;
	}
	.butn{
		border: none;
		border-radius: 5px;
		border: 1px solid #dc7676;
		background: none;
		color: #dc7676;
	}
	
	.left_2{
		width: 50%;
		height: 12rem;
	}
	.right_2{
		width: 50%;
		height: 12rem;
	}
	.shang{
		width: 100%;
		height: 12rem;
		display: flex;
	}
	.odd{
		width: 100%;
		height: 4rem;
		background: #ca3232;
		margin-top: -0.3rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.buu{
		width: 20%;
		height: 2rem;
		margin-right: 2rem;
		border: none;
		border-radius: 10px;
		border: 1px solid blue;
		background: none;
		color: white;
	}
</style>