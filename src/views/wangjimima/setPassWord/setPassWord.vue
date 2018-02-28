<template>
	<div class="wrapper flexBox flexCol">

		<Topzujian title="找回密码"></Topzujian>
		<div class="flex1 flexBox flexCol">

			<div class="flex1 flexBox flexCol">
				<p class="center height21">设置新密码</p>
				<div class="center flex1">
					<input type="text" placeholder="新密码" class="inputDefaule text-center" />
                     <div class="xian" style="position: absolute; top: 255px;"></div>	
				</div>
				<div class="center flex1" style="margin-top: 50px;">
					<input type="text" placeholder="确认新密码" class="inputDefaule text-center" />
					<div class="xian" style="position: absolute; top: 320px;"></div>
				</div>
			</div>
			<div class="flex1">
				<div>
					<Btn name="确认" v-on:confirm="goToNext" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Btn from '../../../components/btnzujian'
	import Topzujian from '../../../components/Topzujian'
	export default {
		data() {
			return {

			}
		},
		methods: {
			backk() {
				this.$router.go(-1)
			},
			goToNext() {
                 this.$router.go(-3)
			}
		},
		components: {
			Btn,
			Topzujian
		}
	}
</script>

<style lang="scss" scoped>

</style>