
module.exports = {
   // 基本路径
  publicPath: '',
  devServer: {
    proxy: {
      // 配置跨域
      '/api': {
        target: 'http://api.zhuishushenqi.com/',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
}
