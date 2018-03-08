<template>
	<div class="wrapper flexBox flexCol">
		<Topzujian
		title='店铺名称'
		
		></Topzujian>
		<div class="flex1">
	             <input type="text" @input="inputEvent"/>
			</div>
			
		</div>
		
	</div>
</template>

<script>
	import Topzujian from '../../../../components/Topzujian'
	export default{
		data(){
			return{
				inputValue:''
			}
		},
		components:{
			Topzujian
		},
		methods:{
          inputEvent(e){
          	this.inputValue=e.target.value
          	var value=e.target.value
          	this.$store.commit('changeShopName',value)
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