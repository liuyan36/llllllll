
module.exports = {
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