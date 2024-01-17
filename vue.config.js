const { defineConfig } = require('@vue/cli-service')
//const px2rem = require('postcss-px2rem')
// const postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
//   remUnit: 16
// })
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
   
})
