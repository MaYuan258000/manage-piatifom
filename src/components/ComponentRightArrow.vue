<template>
  <div class="flexBox border-bottom height50 bgWhite" @click="goToEvent">
    <div class="flex1 flexBox alignCenter margin-left20">{{title}}
      <span class="margin-left20" v-if="index == 0">{{$store.state.userInfo.myshop.id}}</span>
      <span class="margin-left20" v-if="index == 1">{{$store.state.userInfo.myshop.name}}</span>
    </div>
    <div class="arrowBox center">
      <img class="iconDefault" src="../../static/img/fanhui.png" alt="">
    </div>

  </div>
</template>

<script>
    export default {
        name: "component-right-arrow",
          props: ['clickEvent','title','index'],
        methods: {
          goToEvent: function(){
            if(this.title == '我的订单'){
              this.clickEvent && this.clickEvent('/userdingdan')
              return
            }
            if(this.title == '设置'){
              this.clickEvent && this.clickEvent('/setPage')
              return
            }
            if(this.title == '意见反馈'){
              this.clickEvent && this.clickEvent('/yijianfankui')
              return
            }
           if(this.title == '评价'){
              this.clickEvent && this.clickEvent('/pingjia')
              return
            }
           if(this.title == '个人资料'){
              this.clickEvent && this.clickEvent('/gerenziliao')
              return
            }
            this.clickEvent && this.clickEvent(this.index)
          }
        }
    }
</script>

<style scoped>
  .arrowBox{
    width: 60px;
    height: 100%;
  }
  .iconDefault{
    width: 30px;
    height: 30px;
  }
  .alignCenter{
    align-items: center;
  }
</style>
