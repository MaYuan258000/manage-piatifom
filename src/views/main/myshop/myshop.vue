<template>
	<!--<div class="main_3">
		<img src="../../../../static/img/sdsdsd_01.jpg" style="width: 100%;">
		<div class="odd">
			<h3 style="margin-left: 9rem;">申请开店</h3>
			<img src="../../../../static/img/sdsdsd_04.jpg" style="width: 10%; margin-left: 6rem;">
		</div>

		<el-form :model="myForm" :rules="rules" ref="thisForm" inline label-width="100px" style="margin-top: 3rem;">
			<div class="xian"></div>
			<img src="../../../../static/img/sdsdsd_08.jpg" style="width: 7%; margin-left: 4rem; margin-top: 0.4rem;">
			<el-form-item prop="name">
				<el-input v-model="myForm.name" class="int" placeholder="5201314(已绑定)" />
			</el-form-item>
			<div class="xian"></div>
			<img src="../../../../static/img/sdsdsd_11.jpg" style="width: 7%; margin-left: 4rem; margin-top: 0.4rem;">
			<el-form-item prop="passWord">
				<el-input v-model="myForm.passWord" class="int" placeholder="您的真实姓名" />
			</el-form-item>
			<div class="xian"></div>
			<img src="../../../../static/img/sdsdsd_14.jpg" style="width: 7%; margin-left: 4rem; margin-top: 0.4rem;">
			<el-form-item prop="phone">
				<el-input v-model="myForm.passWord" class="int" placeholder="您的手机号码" />
			</el-form-item>
			<div class="xian"></div>
			<img src="../../../../static/img/sdsdsd_16.jpg" style="width: 7%; margin-left: 4rem; margin-top: 0.7rem;">
			<el-form-item prop="shenfen">
				<el-input v-model="myForm.passWord" class="int" placeholder="您的身份证号" />
			</el-form-item>
			<div class="xian"></div>
			<img src="../../../../static/img/sdsdsd_18.jpg" style="width: 7%; margin-left: 4rem; margin-top: 0.5rem;">
			<el-form-item prop="dianpu">
				<el-input v-model="myForm.passWord" class="int" placeholder="店铺名称" />
			</el-form-item>
			<el-form-item>
				<div class="xian"></div>
				<img src="../../../../static/img/sdsdsd_11.jpg" style="width: 7%; margin-left: 4rem; margin-top: 0.5rem;">
				<el-form-item prop="passWord">
					<el-input v-model="myForm.passWord" class="int" placeholder="写点店铺简介吧" />
				</el-form-item>
				<router-link to="/main/dianpu"><el-button type="primary" @click="submitForm('thisForm')" class="btnn">开通会员店（￥9.00）</el-button></router-link>
			</el-form-item>
		</el-form>

	</div>-->
	<div class="flexBox flexCol wrapper">
		<Topzujian
			:title='hasInfo?"我的店铺":"申请开店"'
			:isShowArrow='true'
			></Topzujian>
			<div class="flex1 flexBox flexCol" v-if="hasInfo">
				<div class="flexBox height20 border">
					<div class="center flex1">
						<img src=""/>
					</div>
					<div class="flex3">
						<div>{{$store.state.userInfo.myshopp.name}}</div>
						<div @click="setEvent">店铺设置</div>
					</div>
					<div class="colorWhite bgBlack flex1">
						会员店
					</div>
				</div>
				<div>
					
				</div>
				<div>
					
				</div>
			</div>
			<div class="flex1" v-if="!hasInfo">
				申请开店
			</div>
	</div>
</template>

<script>
	import Img from '../../../components/img'
	import Topzujian from '../../../components/Topzujian'
	import Topzujian1 from '../../../components/Topzujian1'
	export default {
		data() {
			return {
				hasInfo:this.$store.state.userInfo.myshopp,
				myForm: {
					name: '',
					passWord: '',
					phone:'',
					shenfen:'',
					dianpu:'',
				},
				dialogVisible: false,
				rules: {

					name: [{
						required: true,
						message: '请输入姓名',
						trigger: 'blur'
					}],
					passWord: [{
						required: true,
						message: '请输入真实姓名',
						trigger: 'blur'
					}],
					phone: [{
						required: true,
						message: '请输入手机号',
						trigger: 'blur'
					}],
					shenfen: [{
						required: true,
						message: '请输入身份证号',
						trigger: 'blur'
					}],
						dianpu: [{
						required: true,
						message: '请输入店铺名称',
						trigger: 'blur'
					}]

				}
			}
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			setEvent(){
				this.$router.push('/shopset')
			}
		},
			components: {
			Topzujian,
			Img,
			Topzujian1
		},
	}
</script>

<style scoped>
	.bgBlack{
		background: #000000;
	}
	::placeholder {}
	
	.xian {
		width: 85%;
		height: 1px;
		background: #dddddd;
		position: relative;
		left: 2rem;
		top: 3rem;
	}
	
	.int {
		background: black;
	}
	
	.main_3 {
		width: 100%;
		background: #F3F3F3;
	}
	
	.btnn {
		margin-left: 4rem;
		width: 15rem;
		margin-top: 2rem;
		background: #ca3232;
		border: 1px solid #ca3232;
		border-radius: 5px;
	}
	
	.el-menu-demo {
		background: linear-gradient(blue, red);
	}
	
	.odd {
		width: 100%;
		height: 4rem;
		background: white;
		margin-top: -0.3rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-bottom: 1px solid red;
	}
	
	.buu {
		width: 20%;
		height: 2rem;
		margin-right: 2rem;
		border: none;
		border-radius: 10px;
		border: 1px solid blue;
		background: none;
		color: white;
	}
</style>