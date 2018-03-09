<template>
	<div class="wrapper autoBox">
		<div class="goShop_input">
			<img src="../../../../static/img/dddddddwww_01.jpg" style="width: 100%;">
			<div class="odd leftIcon">
				<img src="../../../../static/img/dddddddwww_04.jpg" style="width: 60%;">
			</div>
			<div class="flexBox center">

				<input type="text" placeholder="搜索你喜欢的商品、店铺" class="initIput">
			</div>
			<div class="odd1 rightIcon">
				<img src="../../../../static/img/dddddddwww_06.jpg" style="width: 60%; position: relative; left: 1rem;">
			</div>
		</div>
		<div class="goShop_swiper">
			<img :src="src" style="width: 100%;">
		</div>
		<div class="goShop_type">

			<div v-for="(item,index) in typelist" class="typeBOx" @click="listEvent1(index)" :index="index">
				<img :src="item.img" style="width: 70%;">
				<p style="background: white;">{{item.typeName}}</p>
			</div>
		</div>
		<div class="goShop_week flexBox flexCol">
			<div class="title">
				<router-link to='/zhuda' class='yu'>本周主打
					<div class="more">更多主打</div>
				</router-link>
			</div>
			<div class="content flex1 flexBox">
				<div class="left-conent flex1">
					<div class="top-1" style="font-size: 12px;margin-left: 0.5rem;">
						<h4 style="color: #656565;">日本2H2D黑玛卡</h4>
						<p>秘鲁有机玛卡</p>
						<p>重整男人雄风</p>
					</div>
					<div class="bottom-1">
						<img src="../../../../static/img/god_07.jpg" style="width: 100%;">
					</div>
				</div>

				<div class="right-conent flex2 flexBox flexCol">
					<div class="right-top  flex2">
						<div class="top-2" style="font-size: 12px;margin-left: 0.5rem;">
							<h4 style="margin-left: 1rem;color: #656565;">MARUEI</h4>
							<p>青汁酵素（芒果味）</p>
							<p>塑型 调养 养颜</p>
							<span style="position: relative; left: 9.5rem; top: -4rem;"><img src="../../../../static/img/eerer_03.jpg" style="width: 25%;height: 4rem;"></span>
						</div>

					</div>
					<div class="right-bottom flex3 flexBox">
						<div class="right-show-left flex1">
							<h4 style="margin-left: 1.5rem; font-size: 9px; margin-top: -2rem; color: #656565;">星期10左旋肉咸</h4>
							<p style="margin-left: 1.5rem; font-size: 9px; margin-top: -1rem; color: #656565;">减肥瘦身</p>
							<img src="../../../../static/img/god_10.jpg" style="width: 60%; margin-left: 2rem;">
						</div>
						<div class="right-show-right flex1">
							<h4 style="margin-left: 1.5rem; font-size: 9px; margin-top: -2rem; color: #656565;">Metabolicl巴西</h4>
							<p style="margin-left: 1.5rem; font-size: 9px; margin-top: -1rem; color: #656565;">莓酵素果替代餐分</p>
							<img src="../../../../static/img/god_12.jpg" style="width: 60%; margin-left: 2rem;">
						</div>
					</div>
				</div>
			</div>

		</div>
		<div class="goShop_month">
			<div class="title">
				<router-link to='/yueda' class="yu">本月主打
					<div class="more">更多好货</div>
				</router-link>
			</div>
			<div class="main">
				<div class="top_1">
					<div class="top_1-left">
						<div class="top_2-left">
							<h3 style="">日本2H2D</h3>
							<h3 style="margin-top: -0.8rem;">冬虫夏草口服液</h3>
							<h3 style="margin-top: -0.8rem; color: #DDDDDD;">强肾 滋补</h3>
						</div>
						<div class="top_3-left">
							<img src="../../../../static/img/god_18.jpg" style="width: 90%;height: 100%;">
						</div>
					</div>
					<div class="top_1-right">
						<div class="top_2-right">
							<h3>Pill box KAORU</h3>
							<h3 style="margin-top: -0.8rem;">香体丸</h3>
							<h3 style="margin-top: -0.8rem; color: #DDDDDD;">玫瑰+香草</h3>
						</div>
						<div class="top_3-right">
							<img src="../../../../static/img/god_21.jpg" style="width: 90%;height: 100%;">
						</div>
					</div>
				</div>
				<div class="top_1" style="margin-top: 1rem;">
					<div class="top_1-left">
						<div class="top_2-left">
							<h3>Smils美味桃</h3>
							<h3 style="margin-top: -0.8rem;">之酵素谁</h3>
							<h3 style="margin-top: -0.8rem; color: #DDDDDD;">瘦身养颜</h3>
						</div>
						<div class="top_3-left">
							<img src="../../../../static/img/god_26.jpg" style="width: 90%;height: 100%;">
						</div>
					</div>
					<div class="top_1-right">
						<div class="top_2-right">
							<h3>Metabol cBB</h3>
							<h3 style="margin-top: -0.8rem;">胎盘素</h3>
							<h3 style="margin-top: -0.8rem; color: #DDDDDD;">美白 保湿 抗衰</h3>
						</div>
						<div class="top_3-right">
							<img src="../../../../static/img/god_28.jpg" style="width: 90%;height: 100%;">
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="jiating">
			<div class="title" style="color: #2faeff; border-bottom: 1px solid #DDDDDD;">
				<router-link to='/jiating' class="yu">家庭套餐
					<div class="more">更多实惠</div>
				</router-link>
			</div>
			<div class="main_1">
				<div class="header">
					<div class="header_1">
						<h3>日本2H2D黑玛卡<br>60粒</h3>
						<h3 style="color: #009cff;">￥219.00
						<span><s style="color: #DDDDDD;">￥696.00</s></span>
						</h3>
					</div>
					<div class="header_2">
						<h3>Metabolic酵母酵<br>素 132粒</h3>
						<h3 style="color: #009cff;">￥210.00
						<span><s style="color: #DDDDDD;">￥398.00</s></span>
						</h3>
					</div>
					<div class="header_3">
						<h3>柠檬盐酸胶原蛋白<br>粉 500g</h3>
						<h3 style="color: #009cff;">￥433.00
						<span><s style="color: #DDDDDD;">￥498.00</s></span>
						</h3>
					</div>
				</div>
				<div class="footer">
					<div class="footer_1">
						<img src="../../../../static/img/god_36.jpg" style="width: 90%; height: 90%;margin-left: 0.5rem;margin-top: 1rem;">
					</div>
					<div class="footer_2">
						<img src="../../../../static/img/god_38.jpg" style="width: 90%; height: 90%; margin-left: 0.5rem;margin-top: 1rem;">
					</div>
					<div class="footer_3">
						<img src="../../../../static/img/god_33.jpg" style="width: 90%; height: 90%; margin-left: 0.5rem;margin-top: 1rem;">
					</div>
				</div>
			</div>
		</div>
		<div class="tuijian">

			<div class="zuo"></div>
			<div class="zhong">推荐</div>
			<div class="you"></div>
		</div>
		<div class="di">
			<div class="box" v-for="(item,index) in yuelist">
				<img :src="item.imgg" style="width: 100%;">
				<h3>{{item.title}}</h3>
				<span style="position: relative; left: 3rem; top: 0.3rem; color: #ca3232; ">{{item.price}}</span>
				<button style="position: relative; right: 15rem; top: 0.5rem; width: 5rem; border-radius: 5px; border: none; border: 1px solid #f9c3b9; background: none; height: 1.8rem; color: #f6a596;">{{item.title1}}</button>
				<span style="position: relative; left: 18.7rem; top: -1rem; color: #DDDDDD;"><s>{{item.price1}}</s></span>
			</div>
		</div>

	</div>
</template>

<script>
	import axios from 'axios'
	import obj from '../../../set/homeService'
	import goodlist from '../../../set/homeService'
	import weeklist from '../../../set/weekService'
	export default {
		mounted: function() {
			var that = this;
			var obj = new Swiper();
			obj.init();

			function Swiper() {
				this.index = 0;
				this.init = function() {
					var _this = this;
					setInterval(() => {
						that.src = that.imgList[_this.index]
						_this.index++
							if(_this.index >= 3) {
								_this.index = 0
							}
					}, 1000)
				}
			}
		},
		data() {
			return {
				src: '../../../../static/img/dddddddwww_10.jpg',
				imgList: [

					'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1026878786,2736392430&fm=27&gp=0.jpg',
					'../../../../static/img/dddddddwww_10.jpg',
					'../../../../static/img/dddddddwww_10.jpg'
				],
				typelist: [{
						"img": "../../../../static/img/dddddddwww_13.jpg",
						"typeName": "新品上架"
					},
					{
						"img": "../../../../static/img/dddddddwww_15.jpg",
						"typeName": "排毒养颜"
					},
					{
						"img": "../../../../static/img/dddddddwww_17.jpg",
						"typeName": "减肥塑型"
					},
					{
						"img": "../../../../static/img/dddddddwww_19.jpg",
						"typeName": "女士调理"
					},
					{
						"img": "../../../../static/img/dddddddwww_25.jpg",
						"typeName": "运动营养"
					},
					{
						"img": "../../../../static/img/dddddddwww_26.jpg",
						"typeName": "新血管健康"
					},
					{
						"img": "../../../../static/img/dddddddwww_27.jpg",
						"typeName": "男士健康"
					},
					{
						"img": "../../../../static/img/dddddddwww_28.jpg",
						"typeName": "精品套装"
					}
				],
				yuelist: [{
						"imgg": "../../../../static/img/god_44.jpg",
						"title": "日本2H2D 黑玛卡 强肾 滋补 60粒",
						"price": "￥219.00",
						"title1": "保税区",
						"price1": "￥596.00",
					},
					{
						"imgg": "../../../../static/img/god_48.jpg",
						"title": "Metabolic酵素x酵母精华粒 减肥排毒",
						"price": "￥74.00",
						"title1": "香港直邮",
						"price1": "￥218.00",
					},
					{
						"imgg": "../../../../static/img/god_51.jpg",
						"title": "星期10 左旋肉减 减肥瘦身 120粒",
						"price": "￥173.00",
						"title1": "香港直邮",
						"price1": "￥498.00"
					},
					{
						"imgg": "../../../../static/img/god_44.jpg",
						"title": "日本2H2D 黑玛卡 强肾 滋补 120粒",
						"price": "￥468.00",
						"title1": "保税区",
						"price1": "￥796.00",
					}

				],
				weekList: []
			}
		},
		created() {
			this.getData()
			this.weekData()
		},
		methods: {

			/*
			 用来获取首页数据
			 * */
			getData: function() {
				var _this = this;

				//				console.log('123',obj)
				goodlist.then(function(value) {
					console.log(value);
					var bannerList = value.data.bannerList;
					//处理bannerList
					_this.dealBannerList(bannerList);
				})
			},
			weekData: function() {
				var _this = this;
				weeklist.then((res) => {

					this.weekList = res.data.weekRecommend
				})
			},
			dealBannerList(bannerList) {
				var _this = this;
				var imgList = [];
				for(var i = 0; i < bannerList.length; i++) {
					var reg = /^http/;
					if(reg.test(bannerList[i].imgpath)) {
						imgList.push(bannerList[i].imgpath)
					} else {
						imgList.push('../../../../static/img/dddddddwww_10.jpg')
					}
				}
				this.imgList = imgList
			},
			goToNext(path) {
				this.$router.push(path)
			},
			listEvent1(index) {
			
				if(index == 0) {
					this.goToNext('/xinpin')
				} else if(index == 1) {
					this.goToNext('/paidu')
				} else if(index == 2) {
					this.goToNext('/jianfei')
				} else if(index == 3) {
					this.goToNext('/nvshi')
				}else if(index == 4) {
					this.goToNext('/yundong')
				}else if(index == 5) {
					this.goToNext('/xinxieguan')
				}else if(index == 6) {
					this.goToNext('/nanshi')
				}else if(index == 7) {
					this.goToNext('/jingpin')
				}
			},
			nameEvent() {
				this.$router.push('/dianpumingcheng')
			}
		}
	}
</script>

<style scoped>
	.yu {
		color: black;
		text-decoration: none;
	}
	
	.box {
		width: 100%;
		height: 15rem;
	}
	
	.box h3 {
		font-size: 16px;
		margin-left: 0.5rem;
		margin-top: 0.2rem;
		color: #656565;
		float: left;
	}
	
	.di {
		width: 100%;
		height: 70rem;
		margin-top: -2.2rem;
		background: white;
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
		height: 4rem;
		margin-top: 0.5rem;
		display: flex;
		padding-top: 1rem;
	}
	
	.footer {
		width: 100%;
		height: 5rem;
		display: flex;
	}
	
	.footer_1 {
		width: 33.3%;
		height: 8rem;
	}
	
	.footer_2 {
		width: 33.3%;
		height: 8rem;
	}
	
	.footer_3 {
		width: 33.3%;
		height: 8rem;
	}
	
	.header_1 h3 {
		font-size: 12px;
		margin-left: 1rem;
		color: #656565;
	}
	
	.header_2 h3 {
		font-size: 12px;
		margin-left: 1rem;
		color: #656565;
	}
	
	.header_3 h3 {
		font-size: 12px;
		margin-left: 1rem;
		color: #656565;
	}
	
	.header_1 {
		width: 33.3%;
		height: 5rem;
	}
	
	.header_2 {
		width: 33.3%;
		height: 5rem;
	}
	
	.header_3 {
		width: 33.3%;
		height: 5rem;
	}
	
	.header {
		width: 100%;
		height: 5rem;
		display: flex;
	}
	
	.top_2-right h3 {
		font-size: 12px;
		margin-left: 1rem;
		color: #656565;
	}
	
	.top_2-left h3 {
		font-size: 12px;
		margin-left: 1rem;
		color: #656565;
	}
	
	.top_2-left {
		width: 60%;
		height: 7rem;
	}
	
	.top_3-left {
		width: 40%;
		height: 7rem;
	}
	
	.top_1-left {
		width: 50%;
		height: 7rem;
		display: flex;
	}
	
	.top_2-right {
		width: 60%;
		height: 7rem;
	}
	
	.top_3-right {
		width: 40%;
		height: 7rem;
	}
	
	.top_1-right {
		width: 50%;
		height: 7rem;
		display: flex;
	}
	
	.top_1-right {
		width: 50%;
		height: 7rem;
	}
	
	.content {
		background: white;
	}
	
	.left-conent {
		border-right: 1px solid #DDDDDD;
	}
	
	.top-1 p {
		color: #ff8400;
		position: relative;
		top: -0.8rem;
	}
	
	.top-2 {
		border-bottom: 1px solid #DDDDDD;
	}
	
	.top-2 p {
		color: #ff8400;
		position: relative;
		top: -0.8rem;
		left: 1rem;
	}
	
	.goShop_input {
		height: 60px;
		background: #cb3131;
		position: relative;
	}
	
	.leftIcon {
		position: absolute;
		left: 10px;
		top: 24px;
	}
	
	.rightIcon {
		position: absolute;
		right: 10px;
		top: 24px;
	}
	
	.goShop_swiper {
		height: 200px;
	}
	
	.goShop_type {
		height: 200px;
		background: white;
	}
	
	.goShop_week {
		width: 100%;
		height: 300px;
	}
	
	.goShop_month {
		width: 100%;
		height: 300px;
		margin-top: -2rem;
		background: white;
	}
	
	.jiating {
		margin-top: 0.5rem;
		width: 100%;
		height: 260px;
		background: white;
	}
	
	.img {
		width: 5%;
		height: 20px;
	}
	
	.typeBOx {
		width: 25%;
		height: 50%;
		box-sizing: border-box;
		float: left;
		text-align: center;
		margin-top: 1rem;
	}
	
	.initIput {
		width: 65%;
		height: 2rem;
		background: #a22827;
		border-radius: 5px;
	}
	
	 ::placeholder {
		font-size: 8px;
		padding-left: 40px;
	}
	
	.title {
		height: 40px;
		display: flex;
		align-items: center;
		padding-left: 10px;
		box-sizing: border-box;
		color: red;
		position: relative;
		background: white;
	}
	
	.more {
		position: absolute;
		right: 12px;
		top: 10px;
		color: grey;
	}
	
	.right-bottom {
		margin-top: -2rem;
	}
	
	.top_1 {
		width: 100%;
		height: 7rem;
		display: flex;
	}
</style>