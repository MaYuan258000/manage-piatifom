<template>
	<div class="wrapper flexBox flexCol"> <img src="../../static/img/ddddd_01.jpg" style="width: 100%;" v-if="!isShowimg">
	<div class="center colorWhite bgred topBanner">
		<div @click="backk">
			<img src="../../static/img/back.png" class="iconPostion" v-if="!isShowArrow">
			<div class="fff">
			<!--<p style="font-size: 16px; margin-right: 70px;" v-if="!isShowArrow">返回
			</p>-->
			<span style="" class="center">{{name}}</span>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
            name:this.title||'顶部导航',
			}
		},
		props:['title','isShowArrow','isShowimg','isShowCOlor'],
		methods: {
			backk() {
				this.$router.go(-1)
			}
		}
	}
</script>

<style lang="scss" scoped>
.fff{
	display: flex;
}
	.iconPostion {
		width: 40px;
		height: 40px;
		position: absolute;
		left: 5px;
		top: 50%;
		transform: translateY(-50%);
	}
	.topBanner{
		width: 100%;
		height: 50px;
		position: relative;
	}

</style>