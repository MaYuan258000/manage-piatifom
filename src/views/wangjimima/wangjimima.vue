<template>
	<div class="wrapper flexBox flexCol">
		<Topzujian title="找回密码"></Topzujian>
		<div class="flex1 flexBox flexCol">

			<div class="flex1">
				<p class="center height20">请输入您的手机号码</p>
                  <div class="xian" style="position: absolute; top: 300px;"></div>				
				<div class="center"><input type="text" placeholder="手机号" class="inputDefaule text-center" />

				</div>

			</div>
			<div class="flex1">
				<div>
					<Btn name="下一步" v-on:confirm="goToNext"/>
				</div>
                  <div>
					<button class="pp">联系客服</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Btn from '../../components/btnzujian'
	import Topzujian from '../../components/Topzujian'
	export default {
		data() {
			return {

			}
		},
		methods: {
			backk() {
				this.$router.go(-1)
			},
			goToNext(){
				this.$router.push('/yanzhengma')
			}
		},
		components: {
			Btn,
			Topzujian
		}
	}
</script>

<style lang="scss" scoped>
	.topBanner {
		height: 50px;
		margin-top: 0px;
		font-size: 19px;
		letter-spacing: 2px;
		position: relative;
		display: flex;
		justify-content: space-around;
	}
			.pp{
	background: none;
    margin-top: 2rem;
    margin-left: 2.5rem;
    width: 80%;
    height: 3rem;
    border-radius: 10px;
    border: 1px solid #ca3232;
    color: #ca3232;
    font-size: 1.2rem;
	}
</style>