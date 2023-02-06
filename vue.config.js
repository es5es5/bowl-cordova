const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: ['quasar'],
  publicPath: '',
  pluginOptions: {
    cordovaPath: 'src-cordova',
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false,
    },
  },
  devServer: {
    proxy: {},
    port: 22715,
  },
})
