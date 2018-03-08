<template>
	<div class="main_10">
				<img src="../../../../../static/img/sdsdsd_01.jpg" style="width: 100%;">
		<div class="odd">
			<i class="el-icon-arrow-left" @click="back"></i>
			<h3 style="margin-left: 6rem;">订单详情</h3>
			<img src="../../../../../static/img/sdsdsd_04.jpg" style="width: 10%; margin-left: 6rem;">
		</div>
		<div class="fa">
		 <div class="yuan"></div>
		 <p>待付款</p>
		 <div class="xian"></div>
		  <div class="yuan1"></div>
		 <p style="margin-left: 8rem;">待发货</p>
		 <div class="xian1"></div>
		 <div class="yuan2"></div>
		 <p style="margin-left: 14rem;">已发货</p>
		 <div class="xian2"></div>
		  <div class="yuan3"></div>
		 <p style="margin-left: 19.5rem; margin-top: 0.8rem;">已完成</p>
		</div>
		
		<div class="wu">
			<dl>
				<dt><img src="../../../../../static/img/rtrtrt_03.jpg" style="width: 7%; margin-left: 1.6rem; margin-top: 1.5rem;"></dt>
				<dd style="position: relative; top: -2.5rem; left: 1.5rem;">马远 13717800979</dd>
				<dd style="position: relative; top: -2.5rem;; font-size: 10px; margin-left: 4rem;">地址：山东菏泽曹县东关基督教堂东50米</dd>
			</dl>
		</div>
		<div class="di">
			
			<dl>
				<img src="../../../../../static/img/dingdan_02.jpg" style="width: 100%; position: absolute;">
				<dt><img src="../../../../../static/img/dingdan_05.jpg" style="width: 50%;"></dt>
				<dd style="position: relative; top: 1rem;">马远 13717800979</dd>
				<dd style="position: relative; top: 1rem;; font-size: 10px; margin-left: 4rem;">地址：山东菏泽曹县东关基督教堂东50米</dd>
				<img src="../../../../../static/img/dingdan_02.jpg" style="width: 100%; position: absolute; top: 20rem; left: -0.8rem;">
			</dl>
			
		</div>
		<div class="qingdan">
			<div class="qingdan-top">
				<p style="margin-left: 1.5rem; font-size: 10px; padding-top: 0.5rem;">订单清单</p>
			</div>
				<div class="shang">
					<p style="margin-left: 1.3rem; margin-top: 0.5rem;">商品名称</p>
					<span style="position: absolute; right: 1rem; top: 21.5rem;">￥99.00  X2</span>
				</div>
					<div class="shang1">
					<p style="margin-left: 1.3rem; margin-top: 0.5rem;">商品名称</p>
					<span style="position: absolute; right: 1rem; top: 24rem;">￥36.00  X2</span>
				</div>
			<div class="qingdan-top" style="margin-top: 1rem;">
				<p style="margin-left: 1.5rem; font-size: 10px; padding-top: 0.5rem;">实际付款</p>
			</div>
				<div class="lie-1" v-for="item in list">
				<p style="margin-left: 1.5rem; margin-top: 0.5rem;">{{item.name}}：</p>
				<span style="position: relative; left: 18rem; top: -1.2rem;">{{item.price}}</span>
				</div>
				<div class="chan">
					<h4 style="margin-left: 1.5rem;">产品收益金额：</h4>
					<span style="position: absolute; left: 18rem; top: 42.8rem;">￥18.00</span>
				</div>
				<div class="chan1">
					<h4 style="margin-left: 1.5rem;">分销收益金额：</h4>
					<span style="position: absolute; left: 18rem; top: 44.3rem;">￥18.00</span>
				</div>
		</div>
	    <div class="footer">
	    	<ul v-for="(item,index) in list1">
	    		<li>{{item.name1}}：</li>
	    		<li style="margin-left: 0.5rem;">{{item.hao}}</li>
	    	</ul>
	    </div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
                  list:[
                     {"name":"实付金额","price":"￥180.00"},
                     {"name":"商品原价","price":"￥220.00"},
                     {"name":"活动优惠","price":"￥40.00"},
                     {"name":"积分抵用","price":"￥0.00"},
                     {"name":"行邮税","price":"￥0.00"},
                     {"name":"订单邮费","price":"￥25.00"},
                  ],
                  list1:[
                  {"name1":"订单编号","hao":"123685451313"},
                  {"name1":"创建时间","hao":"2018-2-10-12 56:40:04"},
                  {"name1":"付款时间","hao":"2018-2-10-12 56:40:04"},
                  {"name1":"发货时间","hao":"2018-2-10-12 56:40:04"},
                  {"name1":"签收时间","hao":"2018-2-10-12 56:40:04"},
                  {"name1":"分润时间","hao":"2018-2-10-12 56:40:04"}
                   
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
	.wu{
		width: 100%;
		height: 4rem;
		background: white;
		margin-top: 0.5rem;
	}
	.footer{
		margin-top: 1rem;
		width: 100%;
		height:13rem;
		background: white;
		
	}
	.footer ul li{
	padding-top:0.5rem;
	margin-left: 1.3rem;
	color: #DDDDDD;

	}
	.footer ul{
		display: flex;
	}
	.chan{
		width: 100%;
		height: 3rem;
		border-top: 1px solid #DDDDDD;
		display: flex;
		justify-content: space-between;
	}
	.chan1{
		width: 100%;
		height: 3rem;
		display: flex;
		justify-content: space-between;
		margin-top: -1.4rem;
	}
	.lie-1{
		width: 100%;
		height: 2rem;
		
	}

	.shang1{
		width: 100%;
		height: 2rem;
		display: flex;
		justify-content: space-between;

	}
	.shang{
		width: 100%;
		height: 3rem;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #DDDDDD;
	}
	.qingdan-top{
		width: 100%;
		height: 2rem;
		border-bottom: 1px solid #DDDDDD;
	}
	.qingdan{
		width: 100%;
		height: 30rem;
		background: white;
		margin-top: 0.5rem;
	}
	.di{
		width: 100%;
		height: 5rem;
		background: white;
		margin-top: -0.5rem;
	}
	.di dl dd{

	}
	.di dl dt{
		float: left;
		margin-top: 1.5rem;
		margin-left: 1.8rem;
	}
	.xian{
		width: 20%;
		margin-top: -10rem;
		margin-left: 2rem;
	}
	.xian1{
		width: 20%;
		margin-top: -10rem;
		margin-left: 8rem;
	}
	.xian2{
		width: 20%;
		margin-top: -7.4rem;
		margin-left: 14rem;
	}
	.yuan2 {
		width: 5.5%;
		height: 25.5%;
		background: gray;
		border-radius: 50%;
		margin-left: 14.7rem;
		margin-top: 6.3rem;
		
	}
		.yuan3 {
		width: 5.5%;
		height: 25.5%;
		background: gray;
		border-radius: 50%;
		margin-left: 20.7rem;
		margin-top: 3.9rem;
		
	}
	.yuan {
		width: 5.5%;
		height: 25.5%;
		background: gray;
		border-radius: 50%;
		margin-left: 2.7rem;
		
	}
	.yuan1 {
		width: 5.5%;
		height: 25.5%;
		background: gray;
		border-radius: 50%;
		margin-left: 8.7rem;
		margin-top: 6.3rem;
		
	}
	.fa p{
		margin-left: 2rem;
		margin-top: 1rem;
	}
	.fa{
	 width: 100%;
	 height: 5rem;
	 background: white;
	
	}
	  	.main_10{
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