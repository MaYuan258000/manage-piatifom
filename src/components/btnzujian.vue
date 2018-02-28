<template>
	<div>
	<div class="mi"><button class="btn center" @click="btnEvent">{{title}}</button></div>
		</div>
</template>

<script>
	export default{
		data(){
			return{
			title:this.name||'确认'
			}
		},
		props:['name'],
		methods:{
			btnEvent(){
				this.$emit('confirm')
			}
		}
	}
</script>

<style>
</style>