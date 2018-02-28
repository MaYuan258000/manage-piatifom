<template>
	<!--<div class="main_11">
		<img src="../../../../static/img/sdsdsd_01.jpg" style="width: 100%;">
		<div class="odd">
			<h3 style="margin-left:9rem;">购物车</h3>
			<button class="bbc"><router-link to="/main/shopbianji">编辑</router-link></button>
			<img src="../../../../static/img/sdsdsd_04.jpg" style="width: 8%;">
		</div>
     <div class="yang">
     	<input type="checkbox" style="width: 20px; height: 20px; margin-top: 0.8rem; margin-left: 1rem;">
     	<span style="position: absolute; top: 6rem; left: 3rem;">洋玩易总店</span>
     </div>
     <div class="nei_1">
     	<div class="nei-2" v-for="(item,index) in lid">
     	<div class="nei-left">
     		<input type="checkbox" style="width: 20px; height: 20px; margin-top: 3rem; margin-left: 1rem;">
     	</div>
     	<div class="nei-zhong">
     		<img :src="item.img" style="width: 100%;">
     	</div>
     	<div class="nei-right">
     		<h5 style="font-size: 15px; margin-top: -0.2rem; margin-left: 0.7rem;">{{item.name}}</h5>
     		<p style="margin-top: -1rem; color: #ca3232; margin-left: 0.7rem;">{{item.price}}<s style="color: #DDDDDD;">{{item.price1}}</s></p>
     		<button style="width: 15%; height:1.8rem; border-radius: 5px 0px 0 5px; background: #f7f7f7; border: none; margin-left: 0.7rem;">-</button>
     		<input type="text" style="width: 20%;border: none; background: #e6e6e6;width: 30%;height: 1.7rem; margin-top: 0.8rem;" >
     		<button style="width: 15%; height:1.8rem; border-radius: 0px 5px 5px 0px; background: #e6e6e6; border: none; margin-left: -0.2rem;">+</button>
     	</div>
     	</div>
     </div>
     		<div class="tuijian">
			<div class="zuo"></div>
			<div class="zhong">推荐</div>
			<div class="you"></div>
		</div>
		
		<div class="tui">
			<div class="tui-left"><img src="../../../../static/img/gowu_07.jpg" style="width: 100%;">
			<p>日本MSD 黑玛卡 强肾 滋补 60粒</p>
			</div>
			<div class="tui-right"><img src="../../../../static/img/gowu_09.jpg" style="width: 100%;"></div>
		</div>
		
		<div class="li">
			<div class="li-left">
				<div class="li-left1">
				<input type="checkbox" style="width: 20px; height: 20px; margin-top: 1.5rem; margin-left: 1rem;"><span style="color: white; position: absolute; top: 1.4rem; left: 2.6rem;">全选</span>
				</div>
				<div class="li-left2">
				<h3 style="margin-top: 0.5rem; color: white;">合计:￥418.00</h3>
				<p style="margin-top: -1.2rem; margin-left: 2.2rem; color: #767a97;">(不包含运费)</p>
				</div>
			</div>
			<div class="li-right"><a href="#">去付款</a></div>
		</div>
		<Zong></Zong>
	</div>-->
	<div class="wrapper flexBox flexCol bgwhite3">
		<Img imgSrc="../../../../static/img/sdsdsd_01.jpg"></Img>
		<Topzujian1 title='购物车' :isShowArrow="true" :isShowimg="true" :isShowCOlor="true"></Topzujian1>

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
		 <div class="border-top colorRedd all-price-border colorCenter ">
		 	小计：￥{{allPrice}}
		 </div>
		 
		 <div class="flexBox bg odiContanin padding-left padding-right">
		 	<div class="bgwhite1 center flex2 ">
		 		     	<div class="checkbox marght-left12" 
           	    		:style="{background:isCheckedAll?'#ca3232':'#fff'}"
           	    		@click="checkAllEvent">
           	    	</div>
		 		
		 		<span class="marght-left13">全选</span></div>
		 	<div class="bgGray colorWhite flex2 center">移至收藏夹</div>
		 	<div class="bgred colorWhite2 flex2 center">删除</div>
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
				//             lid:[
				//             {"img":"../../../../static/img/gowu_03.jpg","name":"Metaolic酵母x精华粒 减肥排毒60粒","price":"￥219.00","price1":"￥596.00"},
				//             {"img":"../../../../static/img/gowu_03.jpg","name":"Metaolic酵母x精华粒 减肥排毒60粒","price":"￥219.00","price1":"￥596.00"}
				//             ]
				cholist: [{
					isChecked: true,
					src: "../../../../static/img/gowu_03.jpg",
					title: "酵母x精华粒 减肥排毒60粒",
					price: "219.00",
					oldPrice: "596.00",
					num: 1,
					all:5
				},
				{
					isChecked: false,
					src: "../../../../static/img/gowu_03.jpg",
					title: "酵母x精华粒 减肥排毒60粒",
					price: "219.00",
					oldPrice: "596.00",
					num: 1,
					all:5
				}
				],
				tuijian: [{
					src: "../../../../static/img/gowu_03.jpg",
					title: "哈哈哈"
				}],
				activeColor:'#ca3232',
				isCheckedAll:false
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
			}
		}
	}
</script>

<style lang="scss" scoped>
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
	/*.li-left1{
		width: 50%;
		height: 4rem;
	}
	.li-left2{
		width: 50%;
		height: 4rem;
	}
	a{
		color: #a35a6c;
		text-decoration: none;
	}
	.li-right{
		width: 30%;
		height: 4rem;
		background: #ca3232;
		text-align: center;
		line-height: 4rem;
		font-size: 17px;
		color: #a35a6c;
	}
	.li-left{
		width: 70%;
		height: 4rem;
		background: #262626;
		opacity: 0.9;
		display: flex;
	}
	.li{
		width: 100%;
		height: 4rem;
		position: fixed;
		bottom: 42px;
		display: flex;
	}
	.tui-left{
		width: 50%;
		height: 9rem;
		background: red;
	}
		.tui-right{
		width: 50%;
		height: 9rem;
		background: green;
	}
	.tui{
		width: 100%;
		height: 18rem;
		background: white;
		display: flex;
	}
		.zuo {
		width: 40%;
		height: 0.2rem;
		background: #cccccc;
		margin-left: 0.3rem;
	}
	
	.zhong {
		width: 10%;
		margin-left: 0.8rem;
		margin-top: -0.5rem;
	}
	
	.you {
		width: 40%;
		height: 0.2rem;
		background: #cccccc;
		margin-left: 1rem;
	}
	
	.tuijian {
		width: 100%;
		height: 1.5rem;
		margin-top: 0.5rem;
		display: flex;
		padding-top: 1rem;
	}
	.nei-2{
		width: 100%;
		height: 7rem;
		display: flex;
		margin-bottom: 1rem;
	}
	.nei-left{
		width: 10%;
		height: 7rem;
		margin-top: 0.8rem;
	}
	.nei-zhong{
		width: 30%;
		height: 7rem;
		margin-top: 0.8rem;
	}
	.nei-right{
		width: 60%;
		height: 7rem;
		margin-top: 0.8rem;
	}
	.nei_1{
		width: 100%;
		height: 17rem;
		background: white;
		
	}
	.yang{
		width: 100%;
		height: 3rem;
		background: white;
		border-bottom: 1px solid #DDDDDD;
	}
	.bbc{
		border-radius: 5px;
		border: none;
		width: 3.5rem;
		height: 1.9em;
		background: none;
		border: 1px solid #DDDDDD;
	}
	.ziliao {
		width: 100%;
		height: 7rem;
		
	}
	
	.main_11 {
		width: 100%;
		height: 70rem;
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
	
	
	.man {
		width: 100%;
		height: 10rem;
		background: white;
	}*/
</style>