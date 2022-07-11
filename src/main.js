import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import { Locale, Button , Tab, Tabs , Tabbar, TabbarItem, Form, Field} from 'vant';
import zhcn from 'vant/es/locale/lang/zh-CN';
Locale.use('zh-CN',zhcn);
var app=createApp(App);
app.use(Button)
app.use(Tab)
app.use(Tabs)
app.use(Tabbar)
app.use(TabbarItem);
app.use(Field);
app.use(Form);
app.use(router).mount('#app')
