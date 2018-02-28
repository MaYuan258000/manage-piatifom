<template>
	<div class="wrapper flexBox flexCol">

		<Topzujian title="获取验证码"></Topzujian>
		<div class="flex1 flexBox flexCol">

			<div class="flex1 flexBox flexCol">
				<p class="center height21">短信验证码已发送，请输入验证码</p>
				<div class="center flex1 flexBox flexCol">
					<input type="text" placeholder="验证码" class="inputDefaule text-center" :value="code" @input="changeEvent" />
					 <div class="xian" style="position: absolute; top: 256px;"></div>	
					<span v-show="isPodw" class="colorRedd">验证码错误</span>
				</div>
			</div>
			<div class="flex1">
				<div>
					<Btn name="下一步" v-on:confirm="goToNext" />
				</div>
			</div>
			<div class="colorRedd center margin-top15">
				{{curentTime}}秒后重新发送
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
				curentTime: 30,
				code: '3456',
				isPodw: false
			}
		},
		methods: {
			yanzhengma() {

			},
			changeEvent:function(e) {
				this.code = e.target.value;
			},
			//返回上一页
			backk() {
				this.$router.go(-1)
			},
			//判断成功跳转页面
			goToNext() {
				if(this.code) {
					this.$router.push('/setPassWord')
				} else {
					this.isPodw = true
				}

			}
		},
		components: {
			Btn,
			Topzujian
		},
		//定时器30秒获取验证码
		created() {
			this.yanzhengma()
			this.timer = setInterval(() => {
				this.curentTime = this.curentTime - 1
				if(this.curentTime <= 0) {
					this.curentTime = 30
					this.yanzhengma()
				}
			}, 1000)
		},
		//销毁后
		beforeDestroy: function() {
			clearInterval(this.timer);
		},
	}
</script>

<style lang="scss" scoped>

</style>