<template>
	<div>
	      <Topzujian3
       	title='店铺ID'
       	
       	></Topzujian3>
		<div class="ming">
			<input type="text" name="" id="" value=""  placeholder="请输入您的店铺ID" class="inn"/>
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
		components:{
			Topzujian3
		}
	}
</script>

<style>
	.inn{
		width: 100%;
		height: 3rem;
		border: none;
	}
	.ming{
		width: 100%;
		height: 3rem;
		background: white;
	}
	.main_7{
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
		border-bottom: 1px solid #ca3232;
	}
</style>