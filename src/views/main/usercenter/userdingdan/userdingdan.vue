<template>
  <div class="wrapper flexBox flexCol">
    <Topzujian3 title="我的订单" />
    <div class="flex1 bgNote">
      <div class="flexBox height50 bgWhite">
        <div @click="clickEvent(1)" :class="{active: (currentIndex == 1)}" class="flex1 center">待付款</div>
        <div @click="clickEvent(2)" :class="{active: (currentIndex == 2)}" class="flex1 center">待发货</div>
        <div @click="clickEvent(3)" :class="{active: (currentIndex == 3)}" class="flex1 center">已发货</div>
        <div @click="clickEvent(4)" :class="{active: (currentIndex == 4)}" class="flex1 center">已完成</div>
      </div>
      <div class="margin-top20 bgWhite">
        <div class="height40 border-bottom colCenter">
          <span style="display: block; float: left; margin-top: 10px; margin-left: 15px;">订单编号：0000145667</span><span style="margin-left: 7rem; margin-top: 10px; float: left; color: #ff9666;">待付款</span>
        </div>
        <div>
          <div v-for="item in payList" class="item flexBox height100 padding">
            <div class="left-box center">
              <img class="imgDefault" :src="item.src" alt="">
            </div>
            <div class="flex1 padding">
                <p style="font-size: 15px;">{{item.title}}</p>
                <span class="colorRed tips" style="display: inline-block;">{{item.tips}}</span>
            </div>
            <div class="right-box">
                <p style="margin-top: 10px;">￥{{item.price}}</p>
                <p>x{{item.num}}</p>
            </div>
          </div>
        </div>
        <div class="height40 border-top colCenter">
          <span style="display: inline-block; margin-top: 10px; margin-left: 5rem; color: #727172;">共2件商品 合计：￥180.00(运费￥25.00)</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
   import Topzujian3 from '../../../../components/Topzujian3'
    export default {
        name: "my-order",
        data: function () {
            return {
                currentIndex: 1,
                datas: [{
                  src: '../../../../../static/img/gowu_03.jpg',
                  title: 'Metabolic酵素x酵母精华粒减肥排毒60粒',
                  tips: '保税区',
                  price: 219.00,
                  num: 1,
                  type: 1
                },{
                  src: '../../../../../static/img/gowu_03.jpg',
                  title: 'Metabolic酵素x酵母精华粒减肥排毒60粒',
                  tips: '保税区',
                  price: 219.00,
                  num: 1,
                  type: 2
                },{
                  src: '../../../../../static/img/gowu_03.jpg',
                  title: 'Metabolic酵素x酵母精华粒减肥排毒60粒',
                  tips: '保税区',
                  price: 219.00,
                  num: 1,
                  type: 1
                }],
                paylist: [],
                deliveryList: [],
                deliveryedList: [],
                complateList: [],

            }
        },

        created: function () {
          this.dealDates()
        },
        components:{
          Topzujian3
        },
        methods: {
            clickEvent: function (index) {
                this.currentIndex = index;
                this.dealDates()
            },
            dealDates: function () {
              if(this.currentIndex == 1){
                this.payList = this.datas.filter((item,index) => {
                  return item.type == 1
                })
              }
              if(this.currentIndex == 2){
                this.payList = this.datas.filter((item,index) => {
                  return item.type == 2
                })
              }
              if(this.currentIndex == 3){
                this.payList = this.datas.filter((item,index) => {
                  return item.type == 3
                })
              }
              if(this.currentIndex == 4){
                this.payList = this.datas.filter((item,index) => {
                  return item.type == 4
                })
              }
            }
        }
    }
</script>

<style scoped>
  .active{
    color: red;
    border-bottom: 1px solid red;
    box-sizing: border-box;
  }
  .left-box{
    width: 100px;
  }
  .tips{
    border: 1px solid #f38972;
    color: #f38972;
    padding: 3px 5px;
    border-radius: 5px;
    margin-top: 20px;
  }
</style>
