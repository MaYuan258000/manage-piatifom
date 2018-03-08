<template>
	<div class="wrapper flexBox flexCol">
		<Topzujian
		title='店铺设置'
		
		></Topzujian>
		<div class="flex1">
			<div class="flexBox height20 borderBottom" @click="goToEvent">
				<div class="flex1 flexBox alignCenter marght-left11">店铺名称：{{$store.state.userInfo.myshopp.name}}</div>
				<div class="arrowBox center">
					<img class="imgDefault"  src="../../../../../static/img/sdsdsd_21.jpg">
				</div>
			</div>
			
		</div>
		
	</div>
</template>

<script>
	import Topzujian from '../../../../components/Topzujian'
	export default{
		data(){
			return{
				
			}
		},
		components:{
			Topzujian
		},
		methods:{
			goToEvent(){
				this.$router.push('/shopname')
			}
		}
	}
</script>

<style scoped>
	.arrowBox{
		width: 60px;
		height:100% ;
	}
	.imgDefaultg{
		width: 40px;
		height: 20px;
	}
	.alignCenter{
		align-items: center;
	}
	.marght-left12{
		margin: 20px;
	}
</style>