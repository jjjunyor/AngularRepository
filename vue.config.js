module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:51860',
          pathRewrite: {'^/api' : ''}
        }
      }
    }
  }