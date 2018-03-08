<template>
	<div class="wrapper flexBox flexCol bgwhite3">
		<Img imgSrc="../../../../../static/img/sdsdsd_01.jpg"></Img>
		<Topzujian1 title='编辑' :isShowArrow="true" :isShowimg="true" :isShowCOlor="true"></Topzujian1>

		<div class="flex1 padding-left padding-right margin-top17 container1 ">
			<div class="borderBottom margin17">
				<!--<input type="checkbox" class="yuan"/>-->
				<div class="checkbox1"></div>
				<span style="margin-left: 10px;"></span>洋玩意总店
				</div>
           <div class="flexBox margin-top16" v-for="(item,index) in cholist">
           	    <div class="check-container center">
           	    	<!--<input type="checkbox"  class="yuan" :checked="item.isChecked" style="background: red;"/>-->
           	    	<div class="checkbox" 
           	    		:style="{background:item.isChecked?'#ca3232':'#fff'}"
           	    		@click="checkEvent(index)"
           	    		>
           	    	</div>
           	    </div>
           	    
           	    <div class="img-container">
           	    	<img :src="item.src" class="imgDefault"/>
           	    </div>
           	    
           	    <div class="flex1">
           	       <div class="font-title marght-left10">{{item.title}}</div>
           	        <div class="marght-left11"><span class="colorRedd ">￥{{item.price}}</span>
           	        	<span class="colorNote marght-left10"><s>￥{{item.oldPrice}}</s></span>
           	        </div>
           	         <div class="marght-left10">
           	         <span class="setNum" @click="decEvent(index)">-</span>
           	         <span class="setNum">{{item.num}}</span>
           	         <span class="setNum" @click="addEvent(index)">+</span>
           	         </div>
           	    </div>
           </div>
		</div>
		 <div class="border-top colorRedd all-price-border colorCenter" v-show="cholist.length">
		 	小计：￥{{allPrice}}
		 </div>
		 <div>
		 	账户余额：￥{{myacount}}
		 </div>
		 <div class="flexBox bg odiContanin padding-left padding-right">
		 	<div class="bgwhite1 center flex2 ">
		 		     	<div class="checkbox marght-left12" 
           	    		:style="{background:isCheckedAll?'#ca3232':'#fff'}"
           	    		@click="checkAllEvent">
           	    	</div>
		 		
		 		<span class="marght-left13">全选</span></div>
		 	<div class="bgGray colorWhite flex2 center">移至收藏夹</div>
		 	<div class="bgred colorWhite2 flex2 center" @click="deleteEvent">删除</div>
		 	<div class="bgred colorWhite2 flex2 center" @click="payEvent">结账</div>
		 </div>
	</div>
</template>

<script>
	import * as echarts from 'echarts'
	import Img from '../../../../components/img'
	import Topzujian from '../../../../components/Topzujian'
	import Topzujian1 from '../../../../components/Topzujian1'
	export default {
		data() {
			return {
				//             lid:[
				//             {"img":"../../../../static/img/gowu_03.jpg","name":"Metaolic酵母x精华粒 减肥排毒60粒","price":"￥219.00","price1":"￥596.00"},
				//             {"img":"../../../../static/img/gowu_03.jpg","name":"Metaolic酵母x精华粒 减肥排毒60粒","price":"￥219.00","price1":"￥596.00"}
				//             ]
				cholist: [{
					isChecked: true,
					src: "../../../../../static/img/gowu_03.jpg",
					title: "酵母x精华粒 减肥排毒60粒",
					price: "219.00",
					oldPrice: "596.00",
					num: 1,
					all:5
				},
				{
					isChecked: false,
					src: "../../../../../static/img/gowu_03.jpg",
					title: "酵母x精华粒 减肥排毒60粒",
					price: "219.00",
					oldPrice: "596.00",
					num: 1,
					all:5
				}
				],
				tuijian: [{
					src: "../../../../../static/img/gowu_03.jpg",
					title: "哈哈哈"
				}],
				activeColor:'#ca3232',
				isCheckedAll:false,
//				acount:this.$store.state.acount
			}
		},
		methods: {
			back() {
				history.go(-1)
			},
			checkEvent(index){
			
				this.cholist[index].isChecked=!this.cholist[index].isChecked
			},
			//根据index-1 判断只能小于1
			decEvent(index){
				if(this.cholist[index].num>1){
					this.cholist[index].num-=1;
				}
			},
			//只能加到5条 all
			addEvent(index){
				if(this.cholist[index].num<this.cholist[index].all){
					this.cholist[index].num+=1;
				}
				
			},
			checkAllEvent(){
				this.isCheckedAll=!this.isCheckedAll
				for(var i=0;i<this.cholist.length;i++){
					if(this.isCheckedAll==true){
						this.cholist[i].isChecked=true
					}else{
						this.cholist[i].isChecked=false
					}
				}
			},
			deleteEvent(){
				//filter删除
//			this.cholist=this.cholist.filter((item,index)=>{
//					return (item.isChecked==false)
//				})
			  
			    var arr=[]
				for(var i=0;i<this.cholist.length;i++){
					if(this.cholist[i].isChecked==false){
						arr.push(this.cholist[i])
					}
				}
				this.cholist=arr;
		},
		payEvent(){
			var pay=0;
			for(var i=0;i<this.cholist.length;i++){
				if(this.cholist[i].isChecked==true){
					pay+=this.cholist[i].num*this.cholist[i].price
				}
			}
			this.$store.commit('checkout',pay)
		}
			
		},
		components: {
			Topzujian,
			Img,
			Topzujian1
		},
		//计算属性，计算小计
		computed:{
			allPrice:function(){
				var allprice=0;
				for(var i=0;i<this.cholist.length;i++){
					if(this.cholist[i].isChecked==true){
						allprice+=this.cholist[i].num*this.cholist[i].price;
					}
				}
                return allprice
			},
			myacount(){
			return this.$store.state.acount	
			}
		}
	}
</script>

<style>
	.container1{
	position: relative;
}
.odiContanin{
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 50px;
	
}
.all-price-border{
	height: 50px;
	width: 100%;
	border-top: 1px solid #CCCCCC;
	margin-top: 20px;
	padding: 20px;
}
.checkbox{
	
	border: 1px solid #CCCCCC;
	border-radius: 50%;
	width: 25px;
	height: 25px;
	box-sizing: border-box;
}
.checkbox1{
	
	border: 1px solid #CCCCCC;
	border-radius: 50%;
	width: 25px;
	height: 25px;
	box-sizing: border-box;
}
.check-container{
	width: 50px;
	/*height: 50px;
	background: red;
	border-radius: 50%;*/
	
}
.yuan{
	width: 20px;
	height: 20px;
	border-radius: 25px;
	background: none;
}
.img-container{
	width: 30%;
	height: 100%;
}
.setNum{
	width: 50px;
	height: 30px;
	line-height: 30px;
	text-align: center;
	display: inline-block;
	border: 1px solid white;
	background: #DDDDDD;
}
</style>