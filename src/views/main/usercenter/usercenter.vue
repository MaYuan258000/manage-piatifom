<template>
	<div>
			<img src="../../../../static/img/odi_01.jpg" style="width: 100%;">
			<div class="odd">
				<div class="he">
					<img src="../../../../static/img/odi_04.jpg" style="width: 50%; margin-left: 1rem;">
					<h3 style="position: absolute; top: 2.2rem; left: 6rem; color: white;">Rush.蝴蝶</h3>
					<button style="position: absolute; top: 5.5rem; left: 6rem; border: none; background: white; height: 1.5rem; width: 5rem; border-radius: 4px;">注册会员</button>
				</div>
		</div>
		<div class="lie">
			<div class="ziliao">
				<div class="ge">&nbsp;&nbsp;&nbsp;个人资料</div>
				<div class="ge1">&nbsp;&nbsp;&nbsp;我的收藏</div>
			</div>
				<div class="yue">
				<div class="ge">&nbsp;&nbsp;&nbsp;我的余额</div>
				<div class="ge1">&nbsp;&nbsp;&nbsp;我的订单</div>
			</div>
		<div class="she">
				<div class="ge">&nbsp;&nbsp;&nbsp;设置</div>
			</div>
			<div class="yijian">
				<div class="ge">&nbsp;&nbsp;&nbsp;意见反馈</div>
				<div class="ge1">&nbsp;&nbsp;&nbsp;评价</div>
			</div>
		</div>
   <Zong></Zong>
	</div>
</template>

<script>
	import Zong from '@/components/echarts'
  export default {
    data() {
      return {

      }
    },
    components:{
    	Zong
    }
  }
</script>

<style scoped>
	.yijian{
		width: 100%;
		height: 7rem;
		margin-top: -2.5rem;
	}
	.she{
		width: 100%;
		height: 7rem;
		margin-top: 1rem;
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
		border-top: 1px solid #DDDDDD;
	}
	.yue{
		width: 100%;
		height: 7rem;
		margin-top: 1rem;
	}
	.ziliao{
		width: 100%;
		height: 7rem;

	}
	.lie{
		width: 100%;
		height: 40rem;
		background: #F3F3F3;
	}
		.odd{
		width: 100%;
		height: 8rem;
		background: #fa474a;
		margin-top: -0.3rem;
		display: flex;
		align-items: center;
	}
	
	.el-table .cell {
		line-height: 0px;
		word-break: none;
	}
</style>