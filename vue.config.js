const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/add-to-basket/' : '/',
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module.rules.delete('svg');
    config.module.rule('svg')
      .test(/\.(svg)(\?.*)?$/)
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
});
