<template>
	<div class="main_6">
		<Topzujian3 title='店铺设置'></Topzujian3>
		<div class="zhuu">
			<div class="dianID" v-for="(item,index) in shop" @click="listEvent(index)" :index='index'>
				<ul style="margin-left: 1rem;">
					<li>{{item.name}}</li>
				</ul>
				<span style="margin-right: 1rem; color: #DDDDDD;" @click="nameEvent">{{item.title}}</span>
				<img :src="item.img" style="width: 10%; position: absolute; right: 1rem;" >
			</div>
			<p style="float: right; margin-top: -3rem; font-size: 30px;" @click="centerDialogVisible = true">></p>
		</div>
		<el-dialog title="" :visible.sync="centerDialogVisible" width="85%" center>
			<img src="../../../../../static/img/dswqq_03.jpg" style="width: 20%;">
			<span style="position: absolute; top: 2.5rem; left: 5.5rem; font-size: 18px;">K.K的小店</span>
			<span slot="footer" class="dialog-footer">
				<img src="../../../../../static/img/dssaa_03.jpg" style="width: 90%; height: 300px;">
             </span>
		</el-dialog>
		<el-dialog title="" :visible.sync="centerDialogVisible1" width="90%" center class='dd'>
			<p style="text-align: center; border-bottom: 1px solid #DDDDDD; color: #ca3232;">拍照</p>
			<p style="text-align: center; margin-top: 0.5rem; color: #ca3232;">相册</p>
			<p style="text-align: center; margin-top: 0.5rem; color: #000; position: absolute; top: 7rem; left: 0rem; background: white; width: 100%; border-radius: 5px; height: 40px; line-height: 40px;">相册</p>
		</el-dialog>
		
		<el-button type="primary" @click="centerDialogVisible1 = true">点我有惊喜<i class="el-icon-upload el-icon--right"></i></el-button>
	</div>
</template>

<script>
	import Topzujian3 from '../../../../components/Topzujian3'
	import ElementUI from 'element-ui'
	export default {
		data() {
			return {
				shop: [{
						"name": "店铺ID",
						"title": "1314520"
					},
					{
						"name": "店铺头像",
						"img": "../../../../../static/img/dswqq_03.jpg"
					},
					{
						"name": "店铺名称",
						"title": "K.K小店",
					},
					{
						"name": "店铺简介",
					},
					{
						"name": "店铺二维码"
					},
				],
				centerDialogVisible: false,
				centerDialogVisible1: false
			}
		},
		methods: {
			back() {
				history.go(-1)
			},
			goToNext(path) {
				this.$router.push(path)
			},
			listEvent(index) {
				if(index == 0) {
					this.goToNext('/dianpuID')
				} else if(index == 1) {
					this.goToNext('/dianpumingcheng')
				} else if(index == 2) {
					this.goToNext('/dianpumingcheng')
				} else if(index == 3) {
					this.goToNext('/dianpujianjie')
				}
			},
			nameEvent() {
				this.$router.push('/dianpumingcheng')
			}
		},
		components: {
			Topzujian3
		},
	}
</script>

<style>
	.dd {
		margin-top: 23rem;
	}
	
	.el-dialog {
		border-radius: 10px;
	}
	
	.el-dialog--center .el-dialog__header {
		padding-top: 0;
	}
	
	.el-dialog__header {
		padding: 0;
	}
	
	.dianID {
		width: 100%;
		height: 3rem;
		border-bottom: 1px solid #DDDDDD;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.zhuu {
		width: 100%;
		height: 15.5rem;
		background: white;
		margin-top: 0.1rem;
		border-top: 1px solid red;
	}
	
	.main_6 {
		width: 100%;
		height: 40rem;
		background: #F3F3F3;
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
	
	.el-icon-arrow-left {
		font-size: 40px;
		color: black;
		margin-left: 0rem;
	}
</style>