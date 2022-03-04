const {plugins} = require("eslint-plugin-vue/lib/configs/base");
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins:[
      [
          "import", {libraryName:"vant", libraryDirectory:'es', style:true}
      ]
  ]
}