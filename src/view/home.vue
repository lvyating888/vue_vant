<template>
  <div id="nav">
    <router-link to="/">首页</router-link>
    <router-link to="/page2">page2</router-link>
  </div>
  <van-tabbar route>
    <van-tabbar-item replace to="/page1" icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item replace to="/page2" icon="search">标签</van-tabbar-item>
  </van-tabbar>
  <router-view></router-view>
</template>
<script>
</script>