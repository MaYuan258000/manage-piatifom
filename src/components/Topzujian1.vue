<template>
	<div class="wrapper flexBox flexCol"> <img src="../../static/img/ddddd_01.jpg" style="width: 100%;" v-if="!isShowimg">
	<div class="center colorWhite bgwhite topBanner">
		<div @click="backk">
			<img src="../../static/img/back.png" class="iconPostion" v-if="!isShowArrow">
			<div class="fff">
			<!--<p style="font-size: 16px; margin-right: 70px;" v-if="!isShowArrow">返回
			</p>-->
			<span style="margin-left: 0px;" class="center">{{name}}</span>
			<button class="bbc">编辑</button>
			<img src="../../static/img/sdsdsd_04.jpg"class="od">
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
	align-items: center;
	justify-content: space-between;
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
  	.bbc{
		border-radius: 5px;
		border: none;
		width: 3.5rem;
		height: 1.9em;
		background: none;
		border: 1px solid #DDDDDD;
		position: absolute;
		left: 260px;
	}
	.od{
		width: 9%; 
		position: absolute;
		left: 330px;
	}
</style>