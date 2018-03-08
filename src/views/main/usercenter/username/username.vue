<template>
	<div class="wrapper flexBox flexCol main_15">
		<img src="../../../../../static/img/odi_01.jpg" style="width: 100%;">
		<div class="odd" style="position: relative;">
			<div class="he">
				<img :src="imgg" style="width: 20%; position: absolute; top: 2.5rem; left: 0.8rem;">
				<h3 style="position: absolute; top: 2.2rem; left: 6rem; color: white;">{{nane}}</h3>
				<button style="position: absolute; top: 5.5rem; left: 6rem; border: none; background: white; height: 1.5rem; width: 5rem; border-radius: 4px;">注册会员</button>
			</div>
			<div style="position: absolute;  color: red; left: 12rem; top: 16.5rem;">账户余额：￥{{acount}}</div>
		</div>
		<!--<Topzujian
      title="个人中心"
      :isShowArrow="true"
    ></Topzujian>-->
		<div class="flex1 bgNote">
			<ComponentRightArrow title="个人资料" :clickEvent="goToPage" />
			<ComponentRightArrow title="我的收藏" />
			<ComponentRightArrow title="我的余额" class="margin-top20" />
			<ComponentRightArrow title="我的订单" :clickEvent="goToPage" />
			<ComponentRightArrow class="margin-top20" title="设置" :clickEvent="goToPage" />
			<ComponentRightArrow title="意见反馈" class="margin-top20":clickEvent="goToPage" />
			<ComponentRightArrow title="评价" :clickEvent="goToPage" />
		</div>
	</div>
</template>

<script>
	import Topzujian from '../../../../components/Topzujian'
	import ComponentRightArrow from '../../../../components/ComponentRightArrow';
	export default {
		data: function() {
			return {

			}
		},
		components: {
			Topzujian,
			ComponentRightArrow
		},
		computed: {

		},
		created: function() {

		},
		methods: {
			goToPage: function(page) {
				this.$router.push(page)
			}
		},
		computed: {
			acount: function() {
				return this.$store.state.acount
			},
			nane: function() {
				return this.$store.state.nane
			},
			imgg: function() {
				return this.$store.state.imgg
			}
		},
	}
</script>

<style scoped>
	.odd {
		width: 100%;
		height: 8rem;
		background: #fa474a;
		margin-top: -0.3rem;
		display: flex;
		align-items: center;
	}
	.main_15{
		height: 38rem;
	}
</style>