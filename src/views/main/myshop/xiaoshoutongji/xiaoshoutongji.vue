<template>
	<div class="main_9">
		<img src="../../../../../static/img/sdsdsd_01.jpg" style="width: 100%;">
		<div class="odd">
			<i class="el-icon-arrow-left" @click="back"></i>
			<h3 style="margin-left: 6rem;">销售统计</h3>
			<img src="../../../../../static/img/sdsdsd_04.jpg" style="width: 10%; margin-left: 6rem;">
		</div>
		<div class="loginet flexBox">
			<div class="flex1 center" v-on:click="fistDeng">销售</div>
			<div class="flex1 center" v-on:click="fistZhu">订单</div>
		</div>
		<div class="xiaoshou" v-show="show">
			<div class="xiaoshou-1">
				<div class="xiao-left">
					<p style="font-size: 10px; color: #999999;">今日商圈总额</p>
					<p>￥1253.29</p>
				</div>
				<div class="xiao-right">
					<p style="font-size: 10px; color: #999999;">本月商圈总额</p>
					<p>￥23500.80</p>
				</div>
			</div>
			<div class="xiaoshou-1">
				<div class="xiao-left">
					<p style="font-size: 10px; color: #999999;">今日店铺总额</p>
					<p>￥351.04</p>
				</div>
				<div class="xiao-right">
					<p style="font-size: 10px; color: #999999;">本月店铺总额</p>
					<p>￥8991.22</p>
				</div>
			</div>

			<div class="jin">
				<el-button-group class="an">
					<el-button type="default">今日</el-button>
					<el-button type="default">近一周</el-button>
					<el-button type="default">近三月</el-button>
					<el-button type="default">近一年</el-button>
				</el-button-group>
			</div>
			<div class="lie">
			<div class="ziliao"  v-for="(item,index) in list">
				
				<p style="margin-left: 0.5rem;">{{index+1}}</p>
				 <p style="margin-left: -11rem;">{{item.name}}</p>
				 <span>{{item.price}}</span>
			</div>

		</div>
		</div>
		<div class="dingdan" v-show="!show">
						<div class="xiaoshou-1">
				<div class="xiao-left">
					<p style="font-size: 10px; color: #999999;">今日商圈总订单</p>
					<p>1253</p>
				</div>
				<div class="xiao-right">
					<p style="font-size: 10px; color: #999999;">本月商圈总订单</p>
					<p>23500</p>
				</div>
			</div>
			<div class="xiaoshou-1">
				<div class="xiao-left">
					<p style="font-size: 10px; color: #999999;">今日店铺总订单</p>
					<p>51</p>
				</div>
				<div class="xiao-right">
					<p style="font-size: 10px; color: #999999;">本月店铺总订单</p>
					<p>991</p>
				</div>
			</div>

			<div class="jin">
				<el-button-group class="an">
					<el-button type="default">今日</el-button>
					<el-button type="default">近一周</el-button>
					<el-button type="default">近三月</el-button>
					<el-button type="default">近一年</el-button>
				</el-button-group>
			</div>
			<div class="lie">
			<div class="ziliao"  v-for="(item,index) in list1">
				
				<p style="margin-left: 0.5rem;">{{index+1}}</p>
				 <p style="margin-left: -11rem;" class="p">{{item.name}}</p>
				 <span>{{item.price1}}</span>
			</div>

		</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
				list:[
				   {"name":"店铺名称","price":"￥9999.00"},
				   {"name":"店铺名称","price":"￥9820.00"},
				   {"name":"店铺名称","price":"￥9776.00"},
				   {"name":"店铺名称","price":"￥8915.00"},
				   {"name":"店铺名称","price":"￥8209.00"},
				   {"name":"店铺名称","price":"￥7506.00"},
				   {"name":"店铺名称","price":"￥6911.00"},
				   {"name":"店铺名称","price":"￥6664.00"},
				],
				list1:[
				   {"name":"店铺名称","price1":"1009单"},
				   {"name":"店铺名称","price1":"925单"},
				   {"name":"店铺名称","price1":"912单"},
				   {"name":"店铺名称","price1":"887单"},
				   {"name":"店铺名称","price1":"856单"},
				   {"name":"店铺名称","price1":"823单"},
				   {"name":"店铺名称","price1":"799单"},
				   {"name":"店铺名称","price1":"721单"},
				]
			}
		},
		methods: {
			back() {
				history.go(-1)
			},
			fistDeng() {
				this.show = true
				alert(11)
			},
			fistZhu() {
				this.show = false
				alert(22)
			}
		}
	}
</script>

<style lang="scss" scoped>
    .P:nth-child(2){
    	margin-left: -1rem;
    }
    	.ge{
		width: 100%;
		height: 3.5rem;
		background: white;
		line-height: 3.5rem;
	}
		.ge1{
		width: 100%;
		height: 3.5rem;
		background: white;
		line-height: 3.5rem;
		
	}
   	.ziliao{
		width: 100%;
		height: 3rem;
        border-top: 1px solid #DDDDDD;
        display: flex;
        justify-content: space-between;
        align-items: center;
	}
	.lie{
		width: 100%;
		height: 40rem;
		background: #F3F3F3;
	}
    .an{
    	margin-left: 1.8rem;
    	margin-top: 0.7rem;
    }
	.jin {
		width: 100%;
		height: 4rem;
		background: white;
		margin-top: 0.7rem;
	}
	
	.xiao-right {
		width: 50%;
		height: 4rem;
	}
	
	.xiao-right p {
		margin-left: 0.5rem;
		padding-top: 0.5rem;
	}
	
	.xiao-left {
		width: 50%;
		height: 4rem;
	}
	
	.xiao-left p {
		margin-left: 0.5rem;
		padding-top: 0.5rem;
	}
	
	.xiaoshou-1 {
		width: 100%;
		height: 4rem;
		background: white;
		display: flex;
	}
	
	.loginet {
		width: 100%;
		height: 3rem;
		background: white;
		border-bottom: 1px solid #DDDDDD;
	}
	
	.main_9 {
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