<template>
  <van-form @submit="onSubmit">
    <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
    />
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">提交</van-button>
    </div>
  </van-form>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
      /*执行登陆的方法*/
     /* axios.GET('/subscribe/showBuyerList.json',{pageNumber:1}
      ).then((res)=>{
        console.log(res);
        this.data=res;
      })*/
    },
  },
};
</script>