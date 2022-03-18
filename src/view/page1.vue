<template>
  <div>
    <img src="http://wechat.mp12345.com/wechat/subscribe/assets/images/search_banner.jpg" alt="" class="banner">
    <van-button plain hairline type="primary">按钮1</van-button>
  </div>
</template>
<script>
  import axios from "@/utils/request";

  export default {
      data(){
        return {
          data:{}
        }
      },
     methods:{
        getTest(){
          axios.GET('/subscribe/showBuyerList.json',{pageNumber:1}
          ).then((res)=>{
            console.log(res);
            this.data=res;
          })
         /* Axios.get('/subscribe/showBuyerList.json?pageNumber=1').then((res)=>{
            console.log(res);
            this.data=res;
          })*/
        }
     },
    mounted() {
        this.getTest();
    }
  }

</script>
<style>
 .banner{
   width: 750px;
 }
</style>