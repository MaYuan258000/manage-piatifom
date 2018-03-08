<template>
<div class="wrapper flexBox flexCol">
 <Topzujian3 title="个人资料"/>
    <ul v-for="(item,index) in lidet" style="border-top: 1px solid red;">
    	<li class="bgwhite height40 padding-left" style="line-height: 40px;">{{item.title}}</li>
    </ul>
    
      <el-button type="text" @click="open3">先生、小姐,请反馈</el-button>
      <div>
      	<img :src="imgg">
      </div>
      <div>{{nane}}</div>
</div>
</template>

<script>
	import ElementUI from 'element-ui'
	import axios from 'axios'
	import Topzujian3 from '../../../../components/Topzujian3'
	export default{
		data(){
			return{
				lidet:[]
			}
		},
		components:{
			Topzujian3
		},
		created(){
			axios.get('http://127.0.0.1/PHP/lisde.php')
			.then((res)=>{
				console.log(res)
				this.lidet=res.data
			})
		},
   methods: {
      open3() {
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
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
    },
    computed: {
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
	.el-message-box{
		width: 200px;
	}
</style>