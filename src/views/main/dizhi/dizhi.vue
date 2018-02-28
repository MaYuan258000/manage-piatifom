<template>
	<div class="main_11">
		<img src="../../../../static/img/sdsdsd_01.jpg" style="width: 100%;">
		<div class="odd">
			<i class="el-icon-arrow-left" @click="back"></i>
			<h3 style="margin-left:5rem;">地址选择</h3>
			<img src="../../../../static/img/sdsdsd_04.jpg" style="width: 10%; margin-left: 5rem;">
		</div>

		<div class="di">
			<dl>
				<dt><input type="checkbox" style="border-radius: 50%;"></dt>
				<dd style="position: relative; top: 1rem; left: 1rem;">马远 13717800979</dd>
				<dd style="position: relative; top: 1rem;; font-size: 10px; margin-left: 4rem;">地址：山东菏泽曹县东关基督教堂东50米</dd>
			</dl>
		</div>
				<div class="di">
			<dl>
				<dt><input type="checkbox" style="border-radius: 50%;"></dt>
				<dd style="position: relative; top: 1rem; left: 1rem;">马远 13717800979</dd>
				<dd style="position: relative; top: 1rem;; font-size: 10px; margin-left: 4rem;">地址：山东菏泽曹县东关基督教堂东50米</dd>
			</dl>
		</div>
				<div class="di">
			<dl>
				<dt><input type="checkbox" style="border-radius: 50%;"></dt>
				<dd style="position: relative; top: 1rem; left: 1rem;">马远 13717800979</dd>
				<dd style="position: relative; top: 1rem;; font-size: 10px; margin-left: 4rem;">地址：山东菏泽曹县东关基督教堂东50米</dd>
			</dl>
		</div>
		
		<button class="bb">地址管理</button>
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
     .bb{
     	width: 85%;
     	height: 3rem;
     	background: #ca3232;
     	border-radius: 10px;
     	border: none;
     	margin-left: 1.5rem;
     	color: white;
     	margin-top: 1rem;
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
		margin-left: -0.5rem;
	}
	
	.man {
		width: 100%;
		height: 10rem;
		background: white;
	}
</style>