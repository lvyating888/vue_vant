const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
     host:'x.mp12345.com',
     port:8888,
      proxy:{
       '.json$':{
         target:'http://wechat.mp12345.com',
         changeOrigin:true
       }
      }
  }
})
