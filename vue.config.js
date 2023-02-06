const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '',
  pluginOptions: {
    cordovaPath: 'src-cordova',
  },
  devServer: {
    proxy: {},
    host: '0.0.0.0',
    port: 3050,
    historyApiFallback: true,
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/assets/scss/variable.scss";
        `,
      },
    },
  },
})
