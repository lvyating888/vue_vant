import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import { Locale, Button } from 'vant';
import zhcn from 'vant/es/locale/lang/zh-CN';
Locale.use('zh-CN',zhcn);
var app=createApp(App);
app.use(Button)
app.use(router).mount('#app')
