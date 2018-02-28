<template>
	<div class="iconnt">
	<img class="icon" :src="imSrc">
	<input :type="thisType" :placeholder="placeholder" class="inputt" @input="inputEvent" v-on:blur="blurEvent"
		
		>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				thisType:this.type||'text'
			}
		},
		props:['placeholder','imSrc','change','type'],
		methods:{
			inputEvent(e){
				var value=e.target.value;
				console.log(value)
				this.$emit('change',value)
			},
			blurEvent(e){
				var value=e.target.value;
				this.$emit('blur',value)
			}
		}
	}
</script>

<style lang="scss">

</style>