<template>
		<div class="main_8">
	    <Topzujian3
       	title='店铺简介'
       	
       	></Topzujian3>
		<div class="ming">
			<input type="text" placeholder="填写你的店铺简介" class="inputd"/>
		</div>
	</div>
</template>

<script>
		import Topzujian3 from '../../../../components/Topzujian3'
		export default{
		data(){
			return{

			}
		},
		methods:{
				back() {
				history.go(-1)
			}
		},components:{
			Topzujian3
		},
	}
</script>

<style>
	::placeholder{
	}
	.inputd{
		width: 100%;
		border: none;
		height: 10rem;
	}
	.el-icon-arrow-left {
		font-size: 40px;
		color: black;
		margin-left: 0rem;
	}
		.ming{
		width: 100%;
		height: 10rem;
		background: white;
		border-top: 1px solid red;
	}
	.main_8{
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
		
	}
</style>