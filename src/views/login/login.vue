<template>
	<div class="weapper flexBox flexCol">
		<div class="imgg topPic" @click="fanhui">
			<img src="../../../static/img/QQ图片20180125154427.jpg" style="width: 100%;" v-show="img1" />
			<img src="../../../static/img/wee_02.jpg" style="width: 100%;" v-show="img2">
		</div>
		<div class="loginet flexBox">
			<div class="flex1 center" v-on:click="fistDeng" v-bind:class="{active:show}">登录</div>
			<div class="flex1 center" v-on:click="fistZhu" v-bind:class="{active:!show}">注册</div>
		</div>
		<div class="container">
			<div class="weapper" v-show="show">
				<div class="xian"></div>
				<Input placeholder="请输入手机号" imSrc="../../static/img/dddd_03.jpg" v-on:change="getmyphone" v-on:blur="PhoneEvent" />
				<p class="tishi" v-show="isShowPhone">请输入手机号码</p>
				<div class="xian1"></div>
				<Input placeholder="请输入密码" imSrc="../../static/img/dddd_06.jpg" v-on:change="getMypasswrd" 
					v-on:blur="PwdEvent" 
					type='password' /> 
				<p class="tishi" v-show="ispwd">请输入密码</p>
				<!--<div class="iconnt">
					
					<img class="icon" src="../../../static/img/dddd_03.jpg">
					<input type="text" placeholder="请输入手机号码" class="inputt">
				</div>-->

				<!--<div class="iconnt" style="margin-top: 0rem;">
					<img class="icon" src="../../../static/img/dddd_06.jpg">
					<input type="text" placeholder="请输入密码" class="inputt">
				</div>-->
				<!--<div class="mi" @click="deng"><button class="btn center">登&nbsp录</button></div>-->
				<Btn name="登录" v-on:confirm="loginEvent" />
				<div class="center mi">
					<router-link to="/wangjimima">忘记密码？</router-link>
				</div>
			</div>
			<div class="weapper bgm" v-show="!show">
				<div class="xian"></div>
				<Input placeholder="请输入手机号" imSrc="../../static/img/dddd_03.jpg" v-on:change="registergetMyPhone" v-on:blur="testPhoneBlueEvent" />
				<p v-show="isCorrectPhone" class="tips center">手机号不符合规则</p>
				<p class="tishi" v-show="isShowPhone">请输入手机号码</p>
				<div class="xian1"></div>
				
				<Input placeholder="请输入密码" imSrc="../../static/img/dddd_06.jpg" v-on:change="registergetPassWord" v-on:blur="testPsdBlueEvent" 
					type='password'
					/>
                <p v-show="isCorrectPsd" class="tips center">密码不符合规则</p>
				<div class="xian1"></div>
				<Input placeholder="请再次输入密码" imSrc="../../static/img/dddd_06.jpg" v-on:change="registergetConfirmPassWord" v-on:blur="testConfirmPsdBlueEvent" 
					type='password'
					/>
				<p v-show="isCorrectConfirmPsd" class="tips center">请确认两次密码输入一致</p>
				<Btn name="注册" @click="loginEvent" />
          </div>
			</div>

		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import { getList } from '../../set/data1'
	import Input from '../../components/input'
	import Btn from '../../components/btnzujian'
	import { loginn } from '../../set/homeService'
	export default {

		data: function() {
			return {
				show: true,
				userName: '',
				passWord: '',
				isShowPhone: false,
				ispwd: false,
				ispwdd: false,
				img1: true,
				img2: false,

				//注册界面数据控制
				registerUserName: '',
				registerPsd: '',
				isCorrectPhone: false,
				isCorrectPsd: false,
				isCorrectConfirmPsd: false
			}
		},
		created() {
			//			getList().then((res) => {
			//				console.log(res)
			//			});

		},
		components: {

			Input,
			Btn
		},
		methods: {
			loginEvent() {
				var userName = this.userName;
				var passWord = this.passWord;
				console.log(userName, passWord);
				if(userName && passWord) {
	               this.$router.replace('/main')
					loginn(userName, passWord)
						.then(function(response) {
							//					console.log('login',response);
							this.$router.replace('/main')
						}.bind(this))
						.catch(function(error) {
							console.log(error);
						});
				} else {
					console.log(userName && passWord)
					this.userName && (this.isShowPhone = true);
					!this.userName && (this.isShowPhone = false);

					this.passWord && (this.ispwd = true);
					!this.passWord && (this.ispwd = false);
				}

			},
			getmyphone(data) {
				console.log('phone', data)
				this.userName = data

			},
			getMypasswrd(data) {
				console.log('pwd', data)
				this.passWord = data
			},
			regitMyphone(data) {

			},
			regitpasswrd(data) {},
			fistDeng() {
				this.show = true
				this.img1 = true
				this.img2 = false
			},
			fistZhu() {
				this.show = false
				this.img1 = false
				this.img2 = true

			},
			PhoneEvent(data) {
				console.log('userName', data)
				if(data) {
					this.isShowPhone = false
				} else {
					this.isShowPhone = true
				}
			},
			PwdEvent(data) {
				if(data) {
					this.ispwd = false
				} else {
					this.ispwd = true
				}
			},
			PwddEvent(data) {
				console.log('userName', data)
				if(data) {
					this.ispwdd = false
				} else {
					this.ispwdd = true
				}
			},
			registergetMyPhone: function(data) {
				this.registerUserName = data;
			},
			registergetPassWord: function(data) {
				this.registerPsd = data;
			},
			registergetConfirmPassWord: function(data) {

			},
			testPhoneBlueEvent: function(data) {
				var reg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
				console.log('手机号', data);
				if(reg.test(data)) {
					this.isCorrectPhone = false;
				} else {
					this.isCorrectPhone = true;
				}
			},
			testPsdBlueEvent: function(data) {
				var reg = /^[a-zA-Z\d_]{6,10}$/;
				console.log('密码', data);
				if(reg.test(data)) {
					this.isCorrectPsd = false;
				} else {
					this.isCorrectPsd = true;
				}
			},
			testConfirmPsdBlueEvent: function(data) {
				if(data == this.registerPsd) {
					this.isCorrectConfirmPsd = false;
				} else {
					this.isCorrectConfirmPsd = true;
				}
			},
			fanhui(){
				this.$router.push('/qidong')
			}
		}

	}
</script>

<style lang="scss" scoped>
	.topPic {
		height: 12.5rem;
	}
	
	.loginet {
		height: 70px;
		background: #F3F3F3;
		color: #969696;
		margin-top: 0rem;
	}
	
	.container {
		flex: 1;
	}
	
	.tishi {
		margin-left: 8rem;
		padding-top: 2rem;
		color: red;
	}
	/*.bg{
	background: black;
}
.bgm{
	background: red;
}*/
	
	.active {
		color: darkslategray;
	}
	
</style>