<template>
	<div class="wrapper flexBox flexCol">
		<Topzujian3 title="评价" />
		<ul v-for="(item,index) in lidet" style="border-top: 1px solid red;">
			<li class="bgwhite height40 padding-left" style="line-height: 40px;">{{item.title}}</li>
		</ul>
		<el-carousel :interval="4000" type="card" height="200px">
			<el-carousel-item v-for="item in lidet1" :key="item">
			   <img :src="item.src" style="width: 100%; height: 100%;">
			</el-carousel-item>
		</el-carousel>

		<el-button type="text" @click="open3">先生、小姐,评价</el-button>
	</div>
</template>

<script>
	import ElementUI from 'element-ui'
	import axios from 'axios'
	import Topzujian3 from '../../../../components/Topzujian3'
	export default {
		data() {
			return {
				lidet: [],
				value1: null,
				value2: null,
				lidet1:[
				{"src":"http://img0.imgtn.bdimg.com/it/u=1931246854,3721949088&fm=27&gp=0.jpg"},
				{"src":"http://img4.imgtn.bdimg.com/it/u=1830037113,4063872473&fm=27&gp=0.jpg"},
				{"src":"http://img4.imgtn.bdimg.com/it/u=1607872354,2836054678&fm=27&gp=0.jpg"},
				{"src":"http://img2.imgtn.bdimg.com/it/u=1735037665,2780460293&fm=27&gp=0.jpg"},
				{"src":"http://img0.imgtn.bdimg.com/it/u=140585731,3030141593&fm=27&gp=0.jpg"},
				{"src":"http://img1.imgtn.bdimg.com/it/u=2687335585,1939816576&fm=27&gp=0.jpg"}
				
				]
			}
		},
		components: {
			Topzujian3
		},
		created() {
			axios.get('http://127.0.0.1/PHP/lisde.php')
				.then((res) => {
					console.log(res)
					this.lidet = res.data
				})
		},
		methods: {
			open3() {
				this.$prompt('请输入邮箱', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
					inputErrorMessage: '邮箱格式不正确'
				}).then(({
					value
				}) => {
					this.$message({
						type: 'success',
						message: '你的邮箱是: ' + value,

					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '取消输入'
					});
				});
			}
		}
	}
</script>

<style scoped>
	.el-message-box {
		width: 200px;
	}
	  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>